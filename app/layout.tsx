import type { Metadata } from 'next';
import Script from 'next/script';
import '@fontsource/roboto-condensed/400.css';
import '@fontsource/roboto-condensed/500.css';
import '@fontsource/roboto-condensed/600.css';
import '@fontsource/roboto-condensed/700.css';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL('https://www.zeminyikama.com'),title:{default:'Zemin Yıkama Makineleri | Satış, Kiralama ve Servis',template:'%s | Zemin Yıkama Makineleri'},description:'İşletmenize uygun profesyonel zemin yıkama makinesini karşılaştırın; satış, kiralama, servis ve yedek parça çözümlerini keşfedin.',icons:{icon:[{url:'/favicon.png',type:'image/png'}],shortcut:'/favicon.png',apple:'/favicon.png'},alternates:{canonical:'/'},openGraph:{title:'Zemin Yıkama Makineleri',description:'Profesyonel zemin temizliği için makine, kiralama, servis ve yedek parça çözümleri.',url:'https://www.zeminyikama.com',siteName:'Zemin Yıkama Makineleri',locale:'tr_TR',type:'website'},robots:{index:true,follow:true}};
const schema={'@context':'https://schema.org','@type':'Organization',name:'Zemin Yıkama Makineleri',url:'https://www.zeminyikama.com'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="tr"><body>{children}<Script id="data-layer" strategy="beforeInteractive">{`window.dataLayer=window.dataLayer||[];`}</Script><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></body></html>}
