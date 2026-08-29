import type {Metadata} from 'next';

export const metadata:Metadata={title:'Sayfa Bulunamadı',robots:{index:false,follow:false}};

export default function NotFound(){
 return <main className="missing standaloneMissing"><b>404</b><h1>Bu sayfa bulunamadı.</h1><p>Bağlantı değişmiş veya içerik kaldırılmış olabilir.</p><div><a className="blueBtn" href="/">ANA SAYFAYA DÖN</a><a className="outlineBtn" href="/zemin-yikama-makineleri">MAKİNELERİ İNCELE</a></div></main>;
}
