import {adminAuthorized,isSameOrigin,privateHeaders} from '../../../lib/admin-auth';
import {getProducts,saveProducts,type ShopProduct} from '../../../lib/shop-store';

const json=(body:unknown,status=200)=>new Response(JSON.stringify(body),{status,headers:privateHeaders});
export async function GET(){return json({products:await getProducts()})}

export async function PUT(request:Request){
 if(!isSameOrigin(request)||!(await adminAuthorized(request)))return json({ok:false,message:'Yetkisiz işlem.'},401);
 let body:{products?:unknown};try{body=await request.json()}catch{return json({ok:false,message:'Geçersiz veri.'},400)}
 if(!Array.isArray(body.products)||body.products.length===0||body.products.length>500)return json({ok:false,message:'Ürün listesi boş bırakılamaz veya geçersiz.'},400);
 const products=body.products.filter((value):value is ShopProduct=>Boolean(value&&typeof value==='object')).map((product,index)=>({
  ...product,
  id:Number(product.id)||Date.now()+index,
  slug:String(product.slug||'').slice(0,160),name:String(product.name||'').slice(0,180),sku:String(product.sku||'').slice(0,80),
  category:String(product.category||'').slice(0,100),compatibility:String(product.compatibility||'').slice(0,240),
  description:String(product.description||'').slice(0,3000),metaDescription:String(product.metaDescription||product.description||'').slice(0,320),
  price:Math.max(0,Number(product.price)||0),stock:Math.max(0,Math.floor(Number(product.stock)||0)),currency:'TRY' as const,
  image:String(product.imageUrl||product.image||'/parts/part-0.webp').slice(0,2_000_000),imageIndex:Number(product.imageIndex??product.image??0)||0,
  brand:String(product.brand||'Berker Makine').slice(0,100),condition:'new' as const,active:Boolean(product.active),
 }));
 await saveProducts(products);return json({ok:true,products});
}
