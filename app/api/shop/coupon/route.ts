import {isSameOrigin,privateHeaders} from '../../../lib/admin-auth';
import {getConfig} from '../../../lib/shop-store';
const json=(body:unknown,status=200)=>new Response(JSON.stringify(body),{status,headers:privateHeaders});
export async function POST(request:Request){
 if(!isSameOrigin(request))return json({valid:false},403);
 let code='';try{code=String((await request.json() as {code?:unknown}).code||'').toUpperCase()}catch{return json({valid:false},400)}
 const coupon=(await getConfig()).coupons.find(item=>item.active&&item.code===code);
 return coupon?json({valid:true,code:coupon.code,discount:coupon.discount}):json({valid:false,message:'Kupon bulunamadı veya pasif.'},404);
}
