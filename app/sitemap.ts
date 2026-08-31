import type {MetadataRoute} from 'next';
import {blogPosts,CONTENT_DATE,machineSeo,sectorPages,SITE_URL} from './seo-content';
import {getProducts} from './lib/shop-store';

export default async function sitemap():Promise<MetadataRoute.Sitemap>{
 const products=await getProducts();
 const core=['','/zemin-yikama-makineleri','/zemin-yikama-makineleri/binicili','/zemin-yikama-makineleri/iticili','/kiralama','/servis','/yedek-parca','/ikinci-el','/sektorler','/blog','/hakkimizda','/teklif-al','/makine-secici','/karsilastir','/iletisim'];
 const paths=[...core,...machineSeo.map(x=>`/urun/${x.slug}`),...products.filter(x=>x.active).map(x=>`/yedek-parca/urun/${x.slug}`),...sectorPages.map(x=>`/sektorler/${x.slug}`),...blogPosts.map(x=>`/blog/${x.slug}`)];
 const lastModified=new Date(`${CONTENT_DATE}T12:00:00Z`);
 return paths.map(path=>({
  url:new URL(path||'/',SITE_URL).toString(),
  lastModified,
  changeFrequency:path===''?'weekly':path.startsWith('/blog/')?'monthly':'monthly',
  priority:path===''?1:path==='/zemin-yikama-makineleri'?0.95:path.startsWith('/urun/')?0.9:path.startsWith('/blog/')||path.startsWith('/sektorler/')?0.75:0.8
 }));
}
