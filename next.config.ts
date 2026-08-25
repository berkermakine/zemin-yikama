import type {NextConfig} from 'next';
const nextConfig:NextConfig={async redirects(){return [
 {source:'/urunler',destination:'/makineler',permanent:true},
 {source:'/zemin-yikama-makineleri',destination:'/makineler',permanent:true},
 {source:'/makine-kiralama',destination:'/kiralama',permanent:true},
 {source:'/teknik-servis',destination:'/servis',permanent:true},
 {source:'/iletisim-formu',destination:'/teklif-al',permanent:true},
]}};
export default nextConfig;
