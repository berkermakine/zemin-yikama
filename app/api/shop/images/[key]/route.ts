import {shopUploadDirectory} from '../../../../lib/shop-store';

async function bucket():Promise<R2Bucket|null>{try{const worker=await import('cloudflare:workers') as {env?:Record<string,unknown>};const value=worker.env?.MEDIA;return value&&typeof value==='object'&&'get' in value?value as R2Bucket:null}catch{return null}}
const safe=(value:string)=>/^[a-zA-Z0-9._-]+$/.test(value)?value:'';
export async function GET(_request:Request,{params}:{params:Promise<{key:string}>}){
 const key=safe((await params).key);if(!key)return new Response('Not found',{status:404});const media=await bucket();
 if(media){const object=await media.get(key);if(!object)return new Response('Not found',{status:404});const headers=new Headers();object.writeHttpMetadata(headers);headers.set('ETag',object.httpEtag);headers.set('Cache-Control','public, max-age=31536000, immutable');return new Response(object.body,{headers})}
 try{const fs=await import('node:fs/promises');const path=await import('node:path');const bytes=await fs.readFile(path.join(await shopUploadDirectory(),key));const type=key.endsWith('.png')?'image/png':key.endsWith('.jpg')?'image/jpeg':'image/webp';return new Response(bytes,{headers:{'Content-Type':type,'Cache-Control':'public, max-age=31536000, immutable'}})}catch{return new Response('Not found',{status:404})}
}
