import {adminAuthorized,isSameOrigin,privateHeaders} from '../../../lib/admin-auth';

const json=(body:unknown,status=200)=>new Response(JSON.stringify(body),{status,headers:privateHeaders});
async function bucket():Promise<R2Bucket|null>{try{const worker=await import('cloudflare:workers') as {env?:Record<string,unknown>};const value=worker.env?.MEDIA;return value&&typeof value==='object'&&'put' in value?value as R2Bucket:null}catch{return null}}

export async function POST(request:Request){
 if(!isSameOrigin(request)||!(await adminAuthorized(request)))return json({ok:false},401);
 const form=await request.formData();const file=form.get('file');
 if(!(file instanceof File)||file.size===0||file.size>5*1024*1024||!['image/webp','image/jpeg','image/png'].includes(file.type))return json({ok:false,message:'Görsel WEBP, JPG veya PNG ve en fazla 5 MB olmalıdır.'},400);
 const extension=file.type==='image/png'?'png':file.type==='image/jpeg'?'jpg':'webp';const key=`${Date.now()}-${crypto.randomUUID()}.${extension}`;const bytes=await file.arrayBuffer();const media=await bucket();
 if(media)await media.put(key,bytes,{httpMetadata:{contentType:file.type,cacheControl:'public, max-age=31536000, immutable'}});
 else{const fs=await import('node:fs/promises');const path=await import('node:path');const directory=path.resolve(process.env.SHOP_UPLOAD_DIR||'data/uploads');await fs.mkdir(directory,{recursive:true});await fs.writeFile(path.join(directory,key),new Uint8Array(bytes))}
 return json({ok:true,url:`/api/shop/images/${encodeURIComponent(key)}`},201);
}
