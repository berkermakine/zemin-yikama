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
 settings:{storeName:'Zemin Yıkama Yedek Parça Shop',phone:'02124770400',whatsapp:'905375223946',email:'info@zeminyikama.com',shipping:'150'},
};

type FileStore={products:ShopProduct[];config:ShopConfig;orders:ShopOrder[]};
const initialFileStore=():FileStore=>({products:spareParts.map(product=>({...product})),config:structuredClone(defaultConfig),orders:[]});

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
 return path.resolve(process.env.SHOP_DATA_FILE||'data/shop-store.json');
}

async function readFileStore():Promise<FileStore>{
 try{
  const fs=await import('node:fs/promises');
  return {...initialFileStore(),...JSON.parse(await fs.readFile(await filePath(),'utf8'))} as FileStore;
 }catch{return initialFileStore()}
}

async function writeFileStore(value:FileStore){
 const fs=await import('node:fs/promises');
 const path=await import('node:path');
 const target=await filePath();
 await fs.mkdir(path.dirname(target),{recursive:true});
 const temporary=`${target}.tmp`;
 await fs.writeFile(temporary,JSON.stringify(value,null,2),'utf8');
 await fs.rename(temporary,target);
}

async function readState<T>(key:string,fallback:T):Promise<T>{
 const database=await d1();
 if(database){
  await ensureD1(database);
  const row=await database.prepare('SELECT value FROM shop_state WHERE key = ?').bind(key).first<{value:string}>();
  if(!row)return fallback;
  try{return JSON.parse(row.value) as T}catch{return fallback}
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
 const store=await readFileStore();
 if(key==='products')store.products=value as ShopProduct[];else store.config=value as ShopConfig;
 await writeFileStore(store);
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
 const store=await readFileStore();store.orders=[order,...store.orders].slice(0,500);await writeFileStore(store);
}

export async function updateOrderStatus(id:string,status:string){
 const database=await d1();
 if(database){await ensureD1(database);await database.prepare('UPDATE orders SET status = ? WHERE id = ?').bind(status,id).run();return}
 const store=await readFileStore();store.orders=store.orders.map(order=>order.id===id?{...order,status}:order);await writeFileStore(store);
}
