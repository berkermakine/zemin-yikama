import {machineSeo,SITE_URL} from '../seo-content';
import {getProducts} from '../lib/shop-store';

function escapeXml(value:string){return value.replace(/[<>&'\"]/g,char=>({'<':'&lt;','>':'&gt;','&':'&amp;',"'":'&apos;','"':'&quot;'}[char]||char))}

export async function GET(){
 const machineUrls=machineSeo.map(machine=>`<url><loc>${escapeXml(`${SITE_URL}/urun/${machine.slug}`)}</loc><image:image><image:loc>${escapeXml(new URL(machine.image,SITE_URL).toString())}</image:loc><image:title>${escapeXml(machine.name)}</image:title><image:caption>${escapeXml(machine.imageAlt)}</image:caption></image:image></url>`).join('');
 const productUrls=(await getProducts()).filter(product=>product.active).map(product=>`<url><loc>${escapeXml(`${SITE_URL}/yedek-parca/urun/${product.slug}`)}</loc><image:image><image:loc>${escapeXml(new URL(product.image,SITE_URL).toString())}</image:loc><image:title>${escapeXml(product.name)}</image:title><image:caption>${escapeXml(product.description)}</image:caption></image:image></url>`).join('');
 const urls=machineUrls+productUrls;
 const xml=`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${urls}</urlset>`;
 return new Response(xml,{headers:{'Content-Type':'application/xml; charset=utf-8','Cache-Control':'no-store'}});
}
