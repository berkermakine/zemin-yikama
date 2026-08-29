import type {NextConfig} from 'next';
const nextConfig:NextConfig={async redirects(){return [
 {source:'/urunler',destination:'/zemin-yikama-makineleri',permanent:true},
 {source:'/makineler',destination:'/zemin-yikama-makineleri',permanent:true},
 {source:'/makineler/:path*',destination:'/zemin-yikama-makineleri/:path*',permanent:true},
 {source:'/shop',destination:'/yedek-parca',permanent:true},
 {source:'/shop/:path*',destination:'/yedek-parca/:path*',permanent:true},
 {source:'/makine-kiralama',destination:'/kiralama',permanent:true},
 {source:'/teknik-servis',destination:'/servis',permanent:true},
 {source:'/iletisim-formu',destination:'/teklif-al',permanent:true},
]}};
export default nextConfig;
