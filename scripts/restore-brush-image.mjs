import {readFileSync} from 'node:fs';

const env=Object.fromEntries(readFileSync('.env.local','utf8').split(/\r?\n/).filter(line=>line&&!line.startsWith('#')).map(line=>{const index=line.indexOf('=');return [line.slice(0,index),line.slice(index+1).replace(/^"|"$/g,'')] }));
const origin='http://localhost:3000';
const headers={Origin:origin,'Content-Type':'application/json'};
const login=await fetch(`${origin}/api/admin/login`,{method:'POST',headers,body:JSON.stringify({username:env.ADMIN_USERNAME,password:env.ADMIN_PASSWORD})});
if(!login.ok)throw new Error(`Admin login failed: ${login.status}`);
const cookie=login.headers.get('set-cookie')?.split(';')[0]||'';
const response=await fetch(`${origin}/api/shop/products?repair=brush`,{cache:'no-store'});
if(!response.ok)throw new Error(`Product read failed: ${response.status}`);
const payload=await response.json();
const products=payload.products.map(product=>product.slug==='firca-diski-17-orta-sert'?{...product,image:'/parts/part-0.webp',imageIndex:0,imageUrl:'/parts/part-0.webp'}:product);
const save=await fetch(`${origin}/api/shop/products`,{method:'PUT',headers:{...headers,Cookie:cookie},body:JSON.stringify({products})});
if(!save.ok)throw new Error(`Product save failed: ${save.status}`);
const saved=await save.json();
const brush=saved.products.find(product=>product.slug==='firca-diski-17-orta-sert');
if(brush?.image!=='/parts/part-0.webp')throw new Error('Default brush image was not restored');
console.log(JSON.stringify({restored:true,slug:brush.slug,image:brush.image}));
