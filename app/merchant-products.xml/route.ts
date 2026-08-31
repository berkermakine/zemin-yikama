import {spareParts} from '../product-data';
import {SITE_URL} from '../seo-content';

function escapeXml(value:string|number){
 return String(value).replace(/[<>&'"]/g,char=>({'<':'&lt;','>':'&gt;','&':'&amp;',"'":'&apos;','"':'&quot;'}[char]||char));
}

export async function GET(){
 const items=spareParts.filter(product=>product.active).map(product=>{
  const link=new URL(`/yedek-parca/urun/${product.slug}`,SITE_URL).toString();
  const imageLink=new URL(product.image,SITE_URL).toString();
  const identifiers=[product.gtin?`<g:gtin>${escapeXml(product.gtin)}</g:gtin>`:'',product.mpn?`<g:mpn>${escapeXml(product.mpn)}</g:mpn>`:''].join('');
  return `<item><g:id>${escapeXml(product.sku)}</g:id><title>${escapeXml(product.name)}</title><description>${escapeXml(product.description)}</description><link>${escapeXml(link)}</link><g:image_link>${escapeXml(imageLink)}</g:image_link><g:availability>${product.stock>0?'in_stock':'out_of_stock'}</g:availability><g:price>${product.price.toFixed(2)} ${product.currency}</g:price><g:brand>${escapeXml(product.brand)}</g:brand><g:condition>${product.condition}</g:condition>${identifiers}</item>`;
 }).join('');
 const xml=`<?xml version="1.0" encoding="UTF-8"?><rss xmlns:g="http://base.google.com/ns/1.0" version="2.0"><channel><title>ZeminYikama.com Yedek Parça Ürünleri</title><link>${SITE_URL}/yedek-parca</link><description>Zemin yıkama makinesi yedek parçaları</description>${items}</channel></rss>`;
 return new Response(xml,{headers:{'Content-Type':'application/xml; charset=utf-8','Cache-Control':'public, max-age=3600'}});
}
