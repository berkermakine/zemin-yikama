import {readFileSync} from 'node:fs';

const env=Object.fromEntries(readFileSync('.env.local','utf8').split(/\r?\n/).filter(line=>line&&!line.startsWith('#')).map(line=>{const index=line.indexOf('=');return [line.slice(0,index),line.slice(index+1).replace(/^"|"$/g,'')]}));
const origin='http://localhost:3000';
const login=await fetch(`${origin}/api/admin/login`,{method:'POST',headers:{Origin:origin,'Content-Type':'application/json'},body:JSON.stringify({username:env.ADMIN_USERNAME,password:env.ADMIN_PASSWORD})});
const cookie=login.headers.get('set-cookie')?.split(';')[0]||'';
const form=new FormData();
form.append('file',new Blob([readFileSync('public/parts/part-0.webp')],{type:'image/webp'}),'part.webp');
const upload=await fetch(`${origin}/api/shop/images`,{method:'POST',headers:{Origin:origin,Cookie:cookie},body:form});
const result=await upload.json();
const image=result.url?await fetch(`${origin}${result.url}`):null;
console.log(JSON.stringify({login:login.ok,upload:upload.ok,imageServed:image?.ok||false,contentType:image?.headers.get('content-type')||null}));
if(!login.ok||!upload.ok||!image?.ok)process.exitCode=1;
