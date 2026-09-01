import {spareParts, type SparePartProduct} from '../product-data';
import {ordersCreatedIndexSql, ordersTableSql, shopStateTableSql} from '../../db/schema';

export type ShopProduct = SparePartProduct & {imageUrl?: string};
export type ShopCoupon = {code:string;discount:number;active:boolean};
export type ShopSettings = {storeName:string;phone:string;whatsapp:string;email:string;shipping:string};
export type ShopConfig = {coupons:ShopCoupon[];categories:string[];brands:string[];settings:ShopSettings};
export type ShopOrderLine = {id:number;name:string;sku:string;qty:number;unitPrice:number};
export type ShopOrder = {id:string;customer:string;contact:string;address:string;total:number;status:string;createdAt:string;lines:ShopOrderLine[]};

const defaultConfig:ShopConfig={
 coupons:[],
 categories:[...new Set(spareParts.map(product=>product.category))],
 brands:[...new Set(spareParts.map(product=>product.brand))],
 settings:{storeName:'Zemin Yıkama Yedek Parça Shop',phone:'02124770400',whatsapp:'905375223946',email:'info@zeminyikama.com',shipping:'8000'},
};

type FileStore={products:ShopProduct[];config:ShopConfig;orders:ShopOrder[]};
const initialFileStore=():FileStore=>({products:spareParts.map(product=>({...product})),config:structuredClone(defaultConfig),orders:[]});
let fileMutationQueue:Promise<void>=Promise.resolve();

let initialized=false;
async function d1():Promise<D1Database|null>{
 try{
  const worker=await import('cloudflare:workers') as {env?:Record<string,unknown>};
  const binding=worker.env?.DB;
  return binding&&typeof binding==='object'&&'prepare' in binding?binding as D1Database:null;
 }catch{return null}
}

async function ensureD1(database:D1Database){
 if(initialized)return;
 await database.batch([
  database.prepare(shopStateTableSql),
  database.prepare(ordersTableSql),
  database.prepare(ordersCreatedIndexSql),
 ]);
 initialized=true;
}

async function filePath(){
 const path=await import('node:path');
 if(process.env.SHOP_DATA_FILE)return path.resolve(process.env.SHOP_DATA_FILE);
 const home=process.env.HOME||process.env.USERPROFILE;
 if(process.env.NODE_ENV==='production'){
  if(!home)throw new Error('Kalıcı shop veri yolu bulunamadı. SHOP_DATA_FILE ortam değişkenini deployment klasörü dışındaki bir konuma ayarlayın.');
  return path.resolve(home,'.zeminyikama','shop-store.json');
 }
 return path.resolve('data/shop-store.json');
}

async function legacyFilePath(){const path=await import('node:path');return path.resolve('data/shop-store.json')}

function normalizeFileStore(value:unknown):FileStore{
 if(!value||typeof value!=='object')throw new Error('Shop veri dosyası geçersiz. Başlangıç verileriyle üzerine yazılmadı.');
 const source=value as Partial<FileStore>;
 if(!Array.isArray(source.products))throw new Error('Shop ürün kaydı eksik. Başlangıç verileriyle üzerine yazılmadı.');
 return {products:source.products,config:source.config&&typeof source.config==='object'?source.config:structuredClone(defaultConfig),orders:Array.isArray(source.orders)?source.orders:[]};
}

async function readStoreAt(target:string):Promise<FileStore>{
 const fs=await import('node:fs/promises');
 return normalizeFileStore(JSON.parse(await fs.readFile(target,'utf8')));
}

async function readFileStore():Promise<FileStore>{
 try{
  return await readStoreAt(await filePath());
 }catch(error){
  const code=(error as NodeJS.ErrnoException).code;
  if(code!=='ENOENT')throw error;
  const target=await filePath();const legacy=await legacyFilePath();
  if(target!==legacy){
   try{const migrated=await readStoreAt(legacy);await writeFileStore(migrated,false);return migrated}catch(legacyError){if((legacyError as NodeJS.ErrnoException).code!=='ENOENT')throw legacyError}
  }
  // Seed verisi yalnızca kalıcı veri deposu gerçekten mevcut değilken kullanılır.
  return initialFileStore();
 }
}

async function writeFileStore(value:FileStore,backup=true){
 const fs=await import('node:fs/promises');
 const path=await import('node:path');
 const target=await filePath();
 await fs.mkdir(path.dirname(target),{recursive:true});
 if(backup){
  try{
   const backupDirectory=path.join(path.dirname(target),'backups');
   await fs.mkdir(backupDirectory,{recursive:true});
   const stamp=new Date().toISOString().replace(/[:.]/g,'-');
   await fs.copyFile(target,path.join(backupDirectory,`shop-store-${stamp}.json`));
   const backups=(await fs.readdir(backupDirectory)).filter(name=>name.startsWith('shop-store-')&&name.endsWith('.json')).sort().reverse();
   await Promise.all(backups.slice(20).map(name=>fs.unlink(path.join(backupDirectory,name))));
  }catch(error){if((error as NodeJS.ErrnoException).code!=='ENOENT')throw error}
 }
 const temporary=`${target}.tmp`;
 await fs.writeFile(temporary,JSON.stringify(value,null,2),'utf8');
 await fs.rename(temporary,target);
}

async function mutateFileStore(update:(store:FileStore)=>void|Promise<void>){
 const operation=fileMutationQueue.then(async()=>{const store=await readFileStore();await update(store);await writeFileStore(store)});
 fileMutationQueue=operation.then(()=>undefined,()=>undefined);
 await operation;
}

export async function shopUploadDirectory(){
 const path=await import('node:path');
 if(process.env.SHOP_UPLOAD_DIR)return path.resolve(process.env.SHOP_UPLOAD_DIR);
 const home=process.env.HOME||process.env.USERPROFILE;
 if(process.env.NODE_ENV==='production'){
  if(!home)throw new Error('Kalıcı ürün görseli yolu bulunamadı. SHOP_UPLOAD_DIR ortam değişkenini deployment klasörü dışındaki bir konuma ayarlayın.');
  return path.resolve(home,'.zeminyikama','uploads');
 }
 return path.resolve('data/uploads');
}

async function readState<T>(key:string,fallback:T):Promise<T>{
 const database=await d1();
 if(database){
  await ensureD1(database);
  const row=await database.prepare('SELECT value FROM shop_state WHERE key = ?').bind(key).first<{value:string}>();
  if(!row)return fallback;
  try{return JSON.parse(row.value) as T}catch{throw new Error(`D1 shop_state kaydı bozuk: ${key}. Başlangıç verileriyle üzerine yazılmadı.`)}
 }
 const store=await readFileStore();
 return (key==='products'?store.products:store.config) as T;
}

async function writeState(key:'products'|'config',value:unknown){
 const database=await d1();
 if(database){
  await ensureD1(database);
  await database.prepare(`INSERT INTO shop_state (key,value,updated_at) VALUES (?,?,?)
   ON CONFLICT(key) DO UPDATE SET value=excluded.value, updated_at=excluded.updated_at`)
   .bind(key,JSON.stringify(value),new Date().toISOString()).run();
  return;
 }
 await mutateFileStore(store=>{if(key==='products')store.products=value as ShopProduct[];else store.config=value as ShopConfig});
}

export async function getProducts(){return readState<ShopProduct[]>('products',spareParts.map(product=>({...product})))}
export async function saveProducts(products:ShopProduct[]){await writeState('products',products)}
export async function getConfig(){return readState<ShopConfig>('config',structuredClone(defaultConfig))}
export async function saveConfig(config:ShopConfig){await writeState('config',config)}

export async function getOrders():Promise<ShopOrder[]>{
 const database=await d1();
 if(database){
  await ensureD1(database);
  const result=await database.prepare('SELECT id,customer,contact,address,total,status,lines_json,created_at FROM orders ORDER BY created_at DESC LIMIT 500').all<Record<string,unknown>>();
  return result.results.map(row=>({id:String(row.id),customer:String(row.customer),contact:String(row.contact),address:String(row.address),total:Number(row.total),status:String(row.status),createdAt:String(row.created_at),lines:JSON.parse(String(row.lines_json||'[]')) as ShopOrderLine[]}));
 }
 return (await readFileStore()).orders;
}

export async function addOrder(order:ShopOrder){
 const database=await d1();
 if(database){
  await ensureD1(database);
  await database.prepare('INSERT INTO orders (id,customer,contact,address,total,status,lines_json,created_at) VALUES (?,?,?,?,?,?,?,?)')
   .bind(order.id,order.customer,order.contact,order.address,order.total,order.status,JSON.stringify(order.lines),order.createdAt).run();
  return;
 }
 await mutateFileStore(store=>{store.orders=[order,...store.orders].slice(0,500)});
}

export async function updateOrderStatus(id:string,status:string){
 const database=await d1();
 if(database){await ensureD1(database);await database.prepare('UPDATE orders SET status = ? WHERE id = ?').bind(status,id).run();return}
 await mutateFileStore(store=>{store.orders=store.orders.map(order=>order.id===id?{...order,status}:order)});
}

export async function deleteOrder(id:string){
 const database=await d1();
 if(database){await ensureD1(database);await database.prepare('DELETE FROM orders WHERE id = ?').bind(id).run();return}
 await mutateFileStore(store=>{store.orders=store.orders.filter(order=>order.id!==id)});
}
