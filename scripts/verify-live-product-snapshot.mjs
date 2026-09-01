import {readFile} from 'node:fs/promises';
import https from 'node:https';
import {resolve} from 'node:path';

const snapshotPath=resolve(process.argv[2]||'backups/live-products-2026-09-01T18-36-07-plus03-00.json');
const endpoint=process.argv[3]||'https://www.zeminyikama.com/api/shop/products';

function fetchJson(url){
 return new Promise((resolveRequest,reject)=>{
  https.get(`${url}${url.includes('?')?'&':'?'}verify=${Date.now()}`,{headers:{'User-Agent':'zeminyikama-deploy-verifier/1.0','Cache-Control':'no-cache'}},response=>{
   let body='';response.setEncoding('utf8');response.on('data',chunk=>body+=chunk);response.on('end',()=>{
    if(response.statusCode!==200){reject(new Error(`Canlı ürün API HTTP ${response.statusCode}`));return}
    try{resolveRequest(JSON.parse(body))}catch{reject(new Error('Canlı ürün API geçerli JSON döndürmedi'))}
   });
  }).on('error',reject);
 });
}

const expected=JSON.parse(await readFile(snapshotPath,'utf8'));
const actual=await fetchJson(endpoint);
if(!Array.isArray(expected.products)||!Array.isArray(actual.products))throw new Error('Ürün karşılaştırması için products dizisi bulunamadı.');

const comparable=product=>({
 sku:String(product.sku),
 name:String(product.name),
 price:Number(product.price),
 stock:Number(product.stock),
 description:String(product.description),
 image:String(product.imageUrl||product.image||''),
 category:String(product.category),
 brand:String(product.brand),
});
const bySku=products=>new Map(products.map(product=>[String(product.sku),comparable(product)]));
const expectedMap=bySku(expected.products);const actualMap=bySku(actual.products);const differences=[];

if(expected.products.length!==actual.products.length)differences.push(`Ürün sayısı: beklenen ${expected.products.length}, canlı ${actual.products.length}`);
for(const [sku,expectedProduct] of expectedMap){
 const actualProduct=actualMap.get(sku);
 if(!actualProduct){differences.push(`Eksik SKU: ${sku}`);continue}
 for(const field of Object.keys(expectedProduct))if(expectedProduct[field]!==actualProduct[field])differences.push(`${sku} ${field}: beklenen ${JSON.stringify(expectedProduct[field])}, canlı ${JSON.stringify(actualProduct[field])}`);
}
for(const sku of actualMap.keys())if(!expectedMap.has(sku))differences.push(`Beklenmeyen SKU: ${sku}`);

if(differences.length){
 console.error('CANLI ÜRÜN DOĞRULAMASI BAŞARISIZ');
 for(const difference of differences)console.error(`- ${difference}`);
 process.exitCode=1;
}else{
 console.log(`CANLI ÜRÜN DOĞRULAMASI BAŞARILI: ${actual.products.length} ürün, SKU/fiyat/stok/içerik/görsel birebir eşleşiyor.`);
}
