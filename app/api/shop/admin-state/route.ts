import {adminAuthorized,isSameOrigin,privateHeaders} from '../../../lib/admin-auth';
import {getConfig,getOrders,saveConfig,type ShopConfig} from '../../../lib/shop-store';

const json=(body:unknown,status=200)=>new Response(JSON.stringify(body),{status,headers:privateHeaders});
export async function GET(request:Request){
 if(!(await adminAuthorized(request)))return json({ok:false},401);
 return json({config:await getConfig(),orders:await getOrders()});
}
export async function PUT(request:Request){
 if(!isSameOrigin(request)||!(await adminAuthorized(request)))return json({ok:false,message:'Yetkisiz işlem.'},401);
 let body:{config?:ShopConfig};try{body=await request.json()}catch{return json({ok:false},400)}
 if(!body.config||!Array.isArray(body.config.coupons)||!Array.isArray(body.config.categories)||!Array.isArray(body.config.brands))return json({ok:false,message:'Ayar verisi geçersiz.'},400);
 const config:ShopConfig={
  coupons:body.config.coupons.slice(0,200).map(coupon=>({code:String(coupon.code||'').toUpperCase().replace(/[^A-Z0-9_-]/g,'').slice(0,32),discount:Math.min(90,Math.max(1,Number(coupon.discount)||10)),active:Boolean(coupon.active)})).filter(coupon=>coupon.code),
  categories:body.config.categories.slice(0,200).map(value=>String(value).trim().slice(0,100)).filter(Boolean),
  brands:body.config.brands.slice(0,200).map(value=>String(value).trim().slice(0,100)).filter(Boolean),
  settings:{storeName:String(body.config.settings?.storeName||'').slice(0,160),phone:String(body.config.settings?.phone||'').slice(0,40),whatsapp:String(body.config.settings?.whatsapp||'').slice(0,40),email:String(body.config.settings?.email||'').slice(0,160),shipping:String(body.config.settings?.shipping||'').slice(0,20)},
 };
 await saveConfig(config);return json({ok:true,config});
}
