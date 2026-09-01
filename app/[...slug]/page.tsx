import type {Metadata} from 'next';
import {notFound,permanentRedirect} from 'next/navigation';
import SiteShell from '../components/SiteShell';
import {blogPosts,CONTENT_DATE,machineSeo,sectorPages,SITE_URL,sparePartSeo} from '../seo-content';
import {getProducts,type ShopProduct} from '../lib/shop-store';

type RouteSeo={title:string;description:string;canonical?:string;index?:boolean;image?:string;type?:'website'|'article'};

function decodeRouteSlug(slug:string[]){
 return slug.map(segment=>{
  try{return decodeURIComponent(segment).normalize('NFC')}
  catch{return segment.normalize('NFC')}
 });
}

const staticRoutes:Record<string,RouteSeo>={
 'zemin-yikama-makineleri':{title:'Profesyonel Zemin Yıkama Makinesi Modelleri',description:'Berker Ecoline binicili ve itmeli profesyonel zemin yıkama makinelerini özellikleri, kullanım alanları ve ürün galerileriyle inceleyin.'},
 'zemin-yikama-makineleri/binicili':{title:'Binicili Zemin Yıkama Makineleri',description:'Fabrika, depo, AVM ve geniş alanlar için Berker Ecoline binicili zemin yıkama makinelerini karşılaştırın.'},
 'zemin-yikama-makineleri/iticili':{title:'İtmeli Zemin Yıkama Makineleri',description:'Dar ve orta ölçekli alanlar için kompakt, akülü ve profesyonel itmeli zemin yıkama makinelerini inceleyin.'},
 'zemin-yikama-makineleri/supuruculer':{title:'Profesyonel Süpürücüler',description:'Profesyonel süpürme makinesi çözümleri ve saha değerlendirmesi hakkında bilgi alın.',index:false},
 kiralama:{title:'Zemin Yıkama Makinesi Kiralama',description:'Dönemsel veya sürekli kullanım için saha ve çalışma düzenine uygun zemin yıkama makinesi kiralama seçeneklerini değerlendirin.'},
 servis:{title:'Zemin Yıkama Makinesi Servisi ve Bakımı',description:'Profesyonel zemin yıkama makineleri için arıza kaydı, planlı bakım, kontrol ve teknik servis sürecini inceleyin.'},
 'yedek-parca':{title:'Zemin Yıkama Makinesi Yedek Parçaları',description:'Fırça, silecek lastiği, vakum motoru, akü, şarj cihazı, hortum ve filtre gibi zemin yıkama makinesi yedek parçalarını inceleyin.'},
 'ikinci-el':{title:'İkinci El Zemin Yıkama Makineleri',description:'Durumu ve teknik kapsamı teklif öncesinde doğrulanan ikinci el zemin yıkama makinesi seçenekleri hakkında bilgi alın.'},
 sektorler:{title:'Sektörel Zemin Temizleme Çözümleri',description:'Fabrika, depo, AVM, hastane, otel, market, okul, otopark ve lojistik alanlarına özel zemin temizleme rehberleri.'},
 blog:{title:'Zemin Yıkama Makinesi Bilgi Merkezi',description:'Makine seçimi, saha planlama, günlük kontrol ve bakım için Berker Makine tarafından hazırlanan özgün teknik rehberler.'},
 hakkimizda:{title:'Berker Makine Hakkında',description:'Berker Makine’nin profesyonel zemin temizleme makineleri, teyitli teknik bilgi ve saha odaklı seçim yaklaşımını inceleyin.'},
 'teklif-al':{title:'Zemin Yıkama Makinesi Teklifi Al',description:'Satış, kiralama, servis veya yedek parça ihtiyacınızı iletin; bilgilerinizle hazırlanan teklif talebini WhatsApp üzerinden gönderin.'},
 'makine-secici':{title:'Zemin Yıkama Makinesi Seçici',description:'Alan ölçeği ve geçiş yapısına göre uygun zemin yıkama makinesi sınıfı için başlangıç önerisi alın.'},
 karsilastir:{title:'Zemin Yıkama Makinelerini Karşılaştırın',description:'Binicili ve itmeli zemin yıkama makinelerini tür, kullanım alanı ve operasyon odağı açısından karşılaştırın.'},
 iletisim:{title:'Berker Makine İletişim',description:'Zemin yıkama makinesi satış, kiralama, servis ve yedek parça talepleri için Berker Makine’ye telefon veya WhatsApp ile ulaşın.'},
 sepet:{title:'Sepetim',description:'Seçtiğiniz yedek parçaları görüntüleyin.',index:false},
 odeme:{title:'Sipariş Talebi',description:'Yedek parça sipariş talebinizi tamamlayın.',index:false},
 admin:{title:'Yönetim',description:'Yönetim alanı.',index:false},
 'lp/zemin-yikama-makinesi':{title:'Profesyonel Zemin Yıkama Makineleri',description:'Profesyonel zemin yıkama makinesi çözümleri.',canonical:'/zemin-yikama-makineleri',index:false},
 'lp/kiralama':{title:'Zemin Yıkama Makinesi Kiralama',description:'Zemin yıkama makinesi kiralama çözümleri.',canonical:'/kiralama',index:false}
};

function redirectLegacy(slug:string[]){
 if(slug[0]==='makineler')permanentRedirect(`/zemin-yikama-makineleri${slug.length>1?`/${slug.slice(1).join('/')}`:''}`);
 if(slug[0]==='shop')permanentRedirect(`/yedek-parca${slug.length>1?`/${slug.slice(1).join('/')}`:''}`);
 if(slug[0]==='urunler')permanentRedirect('/zemin-yikama-makineleri');
}

function getRouteSeo(slug:string[],products:ShopProduct[]=sparePartSeo):RouteSeo|null{
 const path=slug.join('/');
 if(staticRoutes[path])return staticRoutes[path];
 if(slug[0]==='blog'&&slug.length===2){const p=blogPosts.find(x=>x.slug===slug[1]);return p?{title:p.title,description:p.description,type:'article'}:null}
 if(slug[0]==='sektorler'&&slug.length===2){const s=sectorPages.find(x=>x.slug===slug[1]);return s?{title:s.title,description:s.description}:null}
 if(slug[0]==='urun'&&slug.length===2){const m=machineSeo.find(x=>x.slug===slug[1]);return m?{title:`${m.name} ${m.kind} Zemin Yıkama Makinesi`,description:m.description,image:m.image}:null}
 if(slug[0]==='yedek-parca'&&slug[1]==='urun'&&slug.length===3){const p=products.find(x=>x.slug===slug[2]);return p?{title:`${p.name} | Yedek Parça`,description:p.metaDescription,image:p.image}:null}
 return null;
}

function absolute(path:string){return new URL(path,SITE_URL).toString()}

export async function generateMetadata({params}:{params:Promise<{slug:string[]}>}):Promise<Metadata>{
 const routeParams=await params;
 const slug=decodeRouteSlug(routeParams.slug);
 const products=slug[0]==='yedek-parca'?await getProducts():undefined;
 const route=getRouteSeo(slug,products);
 if(!route)return {title:'Sayfa Bulunamadı',robots:{index:false,follow:false}};
 const path=slug.join('/');
 const canonical=absolute(route.canonical||`/${path}`);
 const machine=slug[0]==='urun'&&slug.length===2?machineSeo.find(x=>x.slug===slug[1]):undefined;
 const images=route.image?[{url:absolute(route.image),alt:machine?.imageAlt||route.title}]:[];
 return {
  title:route.title,
  description:route.description,
  alternates:{canonical},
  robots:route.index===false?{index:false,follow:false}:{index:true,follow:true,googleBot:{index:true,follow:true,'max-image-preview':'large','max-snippet':-1,'max-video-preview':-1}},
  openGraph:{title:route.title,description:route.description,url:canonical,type:route.type||'website',locale:'tr_TR',siteName:'Zemin Yıkama Makineleri',images},
  twitter:{card:images.length?'summary_large_image':'summary',title:route.title,description:route.description,images}
 };
}

function breadcrumbSchema(slug:string[],route:RouteSeo){
 const items:[string,string][]=[['Ana Sayfa','/']];
 if(slug[0]==='blog'&&slug.length===2)items.push(['Bilgi Merkezi','/blog']);
 if(slug[0]==='sektorler'&&slug.length===2)items.push(['Sektörel Çözümler','/sektorler']);
 if(slug[0]==='urun')items.push(['Zemin Yıkama Makineleri','/zemin-yikama-makineleri']);
 if(slug[0]==='yedek-parca'&&slug.length===3)items.push(['Yedek Parça','/yedek-parca']);
 items.push([route.title,route.canonical||`/${slug.join('/')}`]);
 return {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:items.map(([name,url],index)=>({'@type':'ListItem',position:index+1,name,item:absolute(url)}))};
}

function pageSchemas(slug:string[],route:RouteSeo,products:ShopProduct[]=sparePartSeo){
 const schemas:Record<string,unknown>[]=[breadcrumbSchema(slug,route)];
 const url=absolute(route.canonical||`/${slug.join('/')}`);
 if(slug.join('/')==='zemin-yikama-makineleri')schemas.push({'@context':'https://schema.org','@type':'CollectionPage','@id':`${url}#collection`,url,name:route.title,description:route.description,inLanguage:'tr-TR',mainEntity:{'@type':'ItemList',numberOfItems:machineSeo.length,itemListElement:machineSeo.map((m,index)=>({'@type':'ListItem',position:index+1,url:absolute(`/urun/${m.slug}`),name:m.name,image:absolute(m.image)}))}});
 if(slug.join('/')==='yedek-parca')schemas.push({'@context':'https://schema.org','@type':'CollectionPage','@id':`${url}#collection`,url,name:route.title,description:route.description,inLanguage:'tr-TR',mainEntity:{'@type':'ItemList',numberOfItems:products.filter(p=>p.active).length,itemListElement:products.filter(p=>p.active).map((p,index)=>({'@type':'ListItem',position:index+1,url:absolute(`/yedek-parca/urun/${p.slug}`),name:p.name,image:absolute(p.image)}))}});
 if(slug[0]==='blog'&&slug.length===2){const p=blogPosts.find(x=>x.slug===slug[1]);if(p)schemas.push({'@context':'https://schema.org','@type':'Article',headline:p.title,description:p.description,datePublished:CONTENT_DATE,dateModified:CONTENT_DATE,inLanguage:'tr-TR',mainEntityOfPage:url,author:{'@type':'Organization',name:'Berker Makine',url:absolute('/hakkimizda')},publisher:{'@id':`${SITE_URL}/#organization`}})}
 if(slug[0]==='urun'&&slug.length===2){const m=machineSeo.find(x=>x.slug===slug[1]);if(m){const imageId=`${url}#primaryimage`;schemas.push({'@context':'https://schema.org','@type':'WebPage','@id':`${url}#webpage`,url,name:route.title,description:route.description,inLanguage:'tr-TR',primaryImageOfPage:{'@type':'ImageObject','@id':imageId,url:absolute(m.image),contentUrl:absolute(m.image),caption:m.imageAlt},about:{'@type':'Thing',name:m.name,alternateName:m.alternateName,description:m.description,image:absolute(m.image),url},isPartOf:{'@id':`${SITE_URL}/#website`}})}}
 if(slug[0]==='yedek-parca'&&slug[1]==='urun'&&slug.length===3){const p=products.find(x=>x.slug===slug[2]);if(p){const productId=`${url}#product`;const offerId=`${url}#offer`;schemas.push({'@context':'https://schema.org','@type':'Product','@id':productId,name:p.name,description:p.description,image:[absolute(p.image)],sku:p.sku,...(p.gtin?{gtin:p.gtin}:{}),...(p.mpn?{mpn:p.mpn}:{}),brand:{'@type':'Brand',name:p.brand},category:p.category,url,mainEntityOfPage:url,offers:{'@type':'Offer','@id':offerId,url,priceCurrency:p.currency,price:p.price.toFixed(2),availability:p.stock>0?'https://schema.org/InStock':'https://schema.org/OutOfStock',itemCondition:'https://schema.org/NewCondition',seller:{'@id':`${SITE_URL}/#organization`}}})}}
 return schemas;
}

export default async function CatchAll({params}:{params:Promise<{slug:string[]}>}){
 const routeParams=await params;
 const slug=decodeRouteSlug(routeParams.slug);
 redirectLegacy(slug);
 const products=slug[0]==='yedek-parca'?await getProducts():undefined;
 const route=getRouteSeo(slug,products);
 if(!route)notFound();
 const schemas=pageSchemas(slug,route,products);
 return <>{schemas.map((schema,index)=><script key={index} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>)}<SiteShell slug={slug}/></>;
}
