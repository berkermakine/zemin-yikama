import type {Metadata} from 'next';
import Script from 'next/script';
import '@fontsource/roboto-condensed/400.css';
import '@fontsource/roboto-condensed/500.css';
import '@fontsource/roboto-condensed/600.css';
import '@fontsource/roboto-condensed/700.css';
import './globals.css';
import {SITE_URL} from './seo-content';

export const metadata:Metadata={
 metadataBase:new URL(SITE_URL),
 title:{default:'Zemin Yıkama Makineleri | Berker Makine',template:'%s | Berker Makine'},
 description:'Profesyonel binicili ve itmeli zemin yıkama makineleri; satış, kiralama, teknik servis, yedek parça ve saha odaklı seçim rehberleri.',
 applicationName:'Zemin Yıkama Makineleri',
 category:'Endüstriyel temizlik makineleri',
 manifest:'/site.webmanifest',
 icons:{icon:[{url:'/favicon-512.png',type:'image/png',sizes:'512x512'},{url:'/favicon-32.png',type:'image/png',sizes:'32x32'}],shortcut:'/favicon-512.png',apple:'/favicon-180.png'},
 alternates:{canonical:SITE_URL},
 openGraph:{title:'Zemin Yıkama Makineleri | Berker Makine',description:'Binicili, itmeli ve akülü zemin yıkama makineleri; satış, kiralama, servis ve yedek parça çözümleri.',url:SITE_URL,siteName:'Zemin Yıkama Makineleri',locale:'tr_TR',type:'website',images:[{url:'/home-product-lineup-titan140.webp',width:1818,height:881,alt:'Berker Ecoline profesyonel zemin yıkama makineleri'}]},
 twitter:{card:'summary_large_image',title:'Zemin Yıkama Makineleri | Berker Makine',description:'Profesyonel zemin yıkama makineleri, servis ve yedek parça çözümleri.',images:['/home-product-lineup-titan140.webp']},
 robots:{index:true,follow:true,googleBot:{index:true,follow:true,'max-image-preview':'large','max-snippet':-1,'max-video-preview':-1}}
};

const schema={'@context':'https://schema.org','@graph':[
 {'@type':'Organization','@id':`${SITE_URL}/#organization`,name:'Berker Makine',alternateName:'Zemin Yıkama Makineleri',url:SITE_URL,logo:{'@type':'ImageObject',url:`${SITE_URL}/logo-desktop.webp`},email:'info@zeminyikama.com',contactPoint:{'@type':'ContactPoint',telephone:'+90-537-522-39-46',contactType:'sales and customer service',areaServed:'TR',availableLanguage:'tr'}},
 {'@type':'WebSite','@id':`${SITE_URL}/#website`,url:SITE_URL,name:'Zemin Yıkama Makineleri',alternateName:'Berker Makine',publisher:{'@id':`${SITE_URL}/#organization`},inLanguage:'tr-TR'}
]};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="tr"><head><link rel="icon" href="/favicon-512.png" type="image/png" sizes="512x512"/><link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32"/><link rel="shortcut icon" href="/favicon-512.png"/><link rel="apple-touch-icon" href="/favicon-180.png"/></head><body>{children}<Script id="data-layer" strategy="beforeInteractive">{`window.dataLayer=window.dataLayer||[];`}</Script><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></body></html>
}
