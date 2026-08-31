import {adminAuthorized,isSameOrigin,privateHeaders} from '../../../lib/admin-auth';
import {addOrder,deleteOrder,getOrders,updateOrderStatus,type ShopOrder} from '../../../lib/shop-store';

const json=(body:unknown,status=200)=>new Response(JSON.stringify(body),{status,headers:privateHeaders});
export async function GET(request:Request){return (await adminAuthorized(request))?json({orders:await getOrders()}):json({ok:false},401)}
export async function POST(request:Request){
 if(!isSameOrigin(request))return json({ok:false},403);
 let body:Partial<ShopOrder>;try{body=await request.json()}catch{return json({ok:false},400)}
 if(!body.id||!body.customer||!body.contact||!Array.isArray(body.lines)||!body.lines.length)return json({ok:false,message:'Sipariş bilgileri eksik.'},400);
 const order:ShopOrder={id:String(body.id).slice(0,40),customer:String(body.customer).slice(0,160),contact:String(body.contact).slice(0,100),address:String(body.address||'').slice(0,1000),total:Math.max(0,Number(body.total)||0),status:'WhatsApp siparişi',createdAt:new Date().toISOString(),lines:body.lines.slice(0,100).map(line=>({id:Number(line.id)||0,name:String(line.name||'').slice(0,180),sku:String(line.sku||'').slice(0,80),qty:Math.max(1,Math.floor(Number(line.qty)||1)),unitPrice:Math.max(0,Number(line.unitPrice)||0) }))};
 await addOrder(order);return json({ok:true,order},201);
}
export async function PATCH(request:Request){
 if(!isSameOrigin(request)||!(await adminAuthorized(request)))return json({ok:false},401);
 let body:{id?:unknown;status?:unknown};try{body=await request.json()}catch{return json({ok:false},400)}
 const status=String(body.status||'').slice(0,60);const id=String(body.id||'').slice(0,40);if(!id||!status)return json({ok:false},400);
 await updateOrderStatus(id,status);return json({ok:true});
}
export async function DELETE(request:Request){
 if(!isSameOrigin(request)||!(await adminAuthorized(request)))return json({ok:false},401);
 let body:{id?:unknown};try{body=await request.json()}catch{return json({ok:false},400)}
 const id=String(body.id||'').slice(0,40);if(!id)return json({ok:false},400);
 await deleteOrder(id);return json({ok:true});
}
