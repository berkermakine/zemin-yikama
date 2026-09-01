import type {NextConfig} from 'next';
const securityHeaders=[
 {key:'X-Content-Type-Options',value:'nosniff'},
 {key:'Referrer-Policy',value:'strict-origin-when-cross-origin'},
 {key:'X-Frame-Options',value:'SAMEORIGIN'},
 {key:'Permissions-Policy',value:'camera=(), microphone=(), geolocation=(), payment=()'},
 {key:'Cross-Origin-Opener-Policy',value:'same-origin-allow-popups'},
];
const nextConfig:NextConfig={output:'standalone',async headers(){return [{source:'/:path*',headers:securityHeaders}]},async redirects(){return [
 {source:'/urunler',destination:'/zemin-yikama-makineleri',permanent:true},
 {source:'/makineler',destination:'/zemin-yikama-makineleri',permanent:true},
 {source:'/makineler/:path*',destination:'/zemin-yikama-makineleri/:path*',permanent:true},
 {source:'/shop',destination:'/yedek-parca',permanent:true},
 {source:'/shop/:path*',destination:'/yedek-parca/:path*',permanent:true},
 {source:'/iade-politikasi',destination:'/iade-ve-iptal-politikasi',permanent:true},
 {source:'/makine-kiralama',destination:'/kiralama',permanent:true},
 {source:'/teknik-servis',destination:'/servis',permanent:true},
 {source:'/iletisim-formu',destination:'/teklif-al',permanent:true},
]}};
export default nextConfig;
