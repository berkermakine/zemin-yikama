import {readFileSync} from 'node:fs';

const env=Object.fromEntries(readFileSync('.env.local','utf8').split(/\r?\n/).filter(line=>line&&!line.startsWith('#')).map(line=>{const index=line.indexOf('=');return [line.slice(0,index),line.slice(index+1).replace(/^"|"$/g,'')] }));
const origin='http://localhost:3000';
const jsonHeaders={Origin:origin,'Content-Type':'application/json'};
const requireOk=async(response,label)=>{if(!response.ok)throw new Error(`${label}: HTTP ${response.status}`);return response};

const login=await requireOk(await fetch(`${origin}/api/admin/login`,{method:'POST',headers:jsonHeaders,body:JSON.stringify({username:env.ADMIN_USERNAME,password:env.ADMIN_PASSWORD})}),'Admin login');
const cookie=login.headers.get('set-cookie')?.split(';')[0]||'';
if(!cookie)throw new Error('Admin login: session cookie missing');
const adminHeaders={...jsonHeaders,Cookie:cookie};

const session=await requireOk(await fetch(`${origin}/api/admin/session`,{headers:{Cookie:cookie}}),'Session verification');
const sessionBody=await session.json();
if(!sessionBody.authenticated)throw new Error('Session verification: unauthenticated');

const originalProducts=(await (await requireOk(await fetch(`${origin}/api/shop/products?source=browser-a`,{cache:'no-store'}),'Product read A')).json()).products;
const changedPrice=Number(originalProducts[0].price)+7.25;
const changedStock=Number(originalProducts[0].stock)+3;
const temporaryProduct={...originalProducts[0],id:Date.now(),slug:`yerel-test-${Date.now()}`,name:'Yerel test ürünü',sku:`TEST-${Date.now()}`,price:321.45};
const changedProducts=[temporaryProduct,...originalProducts.map((product,index)=>index===0?{...product,price:changedPrice,stock:changedStock}:product)];
try{
 await requireOk(await fetch(`${origin}/api/shop/products`,{method:'PUT',headers:adminHeaders,body:JSON.stringify({products:changedProducts})}),'Product write');
 const independentProducts=(await (await requireOk(await fetch(`${origin}/api/shop/products?source=browser-b`,{cache:'no-store'}),'Product read B')).json()).products;
 const independentlyChanged=independentProducts.find(product=>product.id===originalProducts[0].id);
 if(Number(independentlyChanged?.price)!==changedPrice)throw new Error('Product persistence: independent browser received old price');
 if(Number(independentlyChanged?.stock)!==changedStock)throw new Error('Product persistence: independent browser received old stock');
 if(!independentProducts.some(product=>product.id===temporaryProduct.id))throw new Error('Product persistence: independent browser did not receive added product');
}finally{
 await requireOk(await fetch(`${origin}/api/shop/products`,{method:'PUT',headers:adminHeaders,body:JSON.stringify({products:originalProducts})}),'Product restore');
}

const adminState=await requireOk(await fetch(`${origin}/api/shop/admin-state`,{headers:{Cookie:cookie},cache:'no-store'}),'Admin state read');
const originalConfig=(await adminState.json()).config;
const testCode=`TEST${Date.now()}`;
try{
 const testConfig={...originalConfig,coupons:[...originalConfig.coupons,{code:testCode,discount:13,active:true}],categories:[...originalConfig.categories,'Yerel Test Kategorisi'],brands:[...originalConfig.brands,'Yerel Test Markası'],settings:{...originalConfig.settings,storeName:'Yerel Test Mağazası'}};
 await requireOk(await fetch(`${origin}/api/shop/admin-state`,{method:'PUT',headers:adminHeaders,body:JSON.stringify({config:testConfig})}),'Coupon write');
 const independentConfig=(await (await requireOk(await fetch(`${origin}/api/shop/admin-state?source=browser-b`,{headers:{Cookie:cookie},cache:'no-store'}),'Admin config read B')).json()).config;
 if(!independentConfig.categories.includes('Yerel Test Kategorisi')||!independentConfig.brands.includes('Yerel Test Markası'))throw new Error('Admin config persistence: category or brand missing');
 if(independentConfig.settings.storeName!=='Yerel Test Mağazası')throw new Error('Admin config persistence: settings missing');
 const coupon=await requireOk(await fetch(`${origin}/api/shop/coupon`,{method:'POST',headers:jsonHeaders,body:JSON.stringify({code:testCode})}),'Coupon validation');
 const couponBody=await coupon.json();
 if(!couponBody.valid||couponBody.discount!==13)throw new Error('Coupon validation: incorrect result');
}finally{
 await requireOk(await fetch(`${origin}/api/shop/admin-state`,{method:'PUT',headers:adminHeaders,body:JSON.stringify({config:originalConfig})}),'Coupon restore');
}

const orderId=`TEST-${Date.now()}`;
try{
 await requireOk(await fetch(`${origin}/api/shop/orders`,{method:'POST',headers:jsonHeaders,body:JSON.stringify({id:orderId,customer:'Yerel doğrulama',contact:'0000000000',address:'Test kaydı',total:100,lines:[{id:originalProducts[0].id,name:originalProducts[0].name,sku:originalProducts[0].sku,qty:1,unitPrice:100}]})}),'WhatsApp order write');
 await requireOk(await fetch(`${origin}/api/shop/orders`,{method:'PATCH',headers:adminHeaders,body:JSON.stringify({id:orderId,status:'Hazırlanıyor'})}),'Order status write');
 const orders=(await (await requireOk(await fetch(`${origin}/api/shop/orders`,{headers:{Cookie:cookie},cache:'no-store'}),'Admin order read')).json()).orders;
 if(!orders.some(order=>order.id===orderId))throw new Error('Admin order read: test order missing');
 if(orders.find(order=>order.id===orderId)?.status!=='Hazırlanıyor')throw new Error('Admin order read: status update missing');
}finally{
 await requireOk(await fetch(`${origin}/api/shop/orders`,{method:'DELETE',headers:adminHeaders,body:JSON.stringify({id:orderId})}),'Order cleanup');
}

console.log(JSON.stringify({adminLogin:true,session:true,crossBrowserPrice:true,stock:true,productAdd:true,category:true,brand:true,settings:true,coupon:true,whatsappOrderInAdmin:true,orderStatus:true,cleanup:true}));
