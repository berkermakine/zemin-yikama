const sectors = ['Fabrikalar','AVM’ler','Depolar','Otoparklar','Hastaneler','Oteller','Marketler','Okullar','Belediyeler','Lojistik Merkezleri'];
const sectorNotes = ['Üretim sahaları','Yoğun ziyaretçi alanları','Raf ve stok koridorları','Kapalı ve açık otoparklar','Hijyen odaklı alanlar','Konaklama tesisleri','Günlük yoğun kullanım','Eğitim yapıları','Kamu hizmet alanları','Sevkiyat ve dağıtım sahaları'];

const sideFeatures = {
  left: [
    ['▣','AKÜLÜ MODELLER','Kablosuz özgürlük, yüksek performans, uzun çalışma süresi.'],
    ['⛶','DAR ALAN ÇÖZÜMLERİ','Kompakt tasarım, yüksek manevra kabiliyeti, dar alanlarda üstün temizlik.'],
    ['✓','GÜNLÜK KULLANIM','Kolay kullanım, ergonomik tasarım, günlük temizlik işleriniz için ideal.'],
  ],
  right: [
    ['♙','BİNİCİLİ MODELLER','Operatör konforu, yüksek verimlilik, uzun süreli kullanıma uygun.'],
    ['◴','GENİŞ ALAN PERFORMANSI','Büyük metrekarelerde maksimum temizlik, yüksek kapasite.'],
    ['⚒','SERVİS VE YEDEK PARÇA','Uzman servis desteği, orijinal yedek parça, hızlı çözüm.'],
  ],
};

const benefits = [
  ['◇','YÜKSEK KALİTE','Dayanıklı ve uzun ömürlü profesyonel makineler'],
  ['▥','MAKSİMUM VERİMLİLİK','Zaman ve maliyetten tasarruf eden temizlik çözümleri'],
  ['♧','ÇEVRE DOSTU','Düşük su ve kimyasal tüketimi ile çevreye duyarlı'],
  ['✥','GÜVENİLİR DESTEK','Satış öncesi ve sonrası kesintisiz destek'],
];

const seoGuides = [
  {href:'/blog/zemin-yikama-makinesi-nasil-secilir',tag:'SEÇİM REHBERİ',title:'Zemin yıkama makinesi nasıl seçilir?',text:'Alan büyüklüğü tek başına yeterli değildir. Geçiş genişliği, zemin kaplaması, kir türü, çalışma süresi ve şarj alanı birlikte değerlendirilmelidir.'},
  {href:'/blog/binicili-ve-itmeli-makine-farklari',tag:'MAKİNE TÜRLERİ',title:'Binicili mi, itmeli mi?',text:'Dar ve orta ölçekli alanlarda itmeli modeller manevra kolaylığı sunarken, geniş sahalarda binicili makineler operatör konforu ve kesintisiz çalışma açısından öne çıkar.'},
  {href:'/blog/zemin-yikama-makinesi-bakimi',tag:'BAKIM NOTLARI',title:'Verimli kullanım için günlük bakım',text:'Tankların boşaltılması, silici ve fırçaların kontrolü ile akü şarj düzeninin takip edilmesi, makinenin temizlik performansını korumaya yardımcı olur.'},
];

const faqSchema = {'@context':'https://schema.org','@type':'FAQPage',mainEntity:[
  {'@type':'Question',name:'Zemin yıkama makinesi nedir?',acceptedAnswer:{'@type':'Answer',text:'Zemin yıkama makinesi, zemini fırçalayan, kirli suyu vakumlayan ve yüzeyin kısa sürede yeniden kullanılmasına yardımcı olan profesyonel temizlik makinesidir.'}},
  {'@type':'Question',name:'Binicili ve itmeli zemin yıkama makinesi arasındaki fark nedir?',acceptedAnswer:{'@type':'Answer',text:'İtmeli modeller dar ve orta ölçekli alanlarda manevra kolaylığı sağlar. Binicili modeller geniş alanlarda operatör konforu ve daha yüksek saha verimliliği için tercih edilir.'}},
  {'@type':'Question',name:'Zemin yıkama makinesi seçerken nelere dikkat edilmelidir?',acceptedAnswer:{'@type':'Answer',text:'Alan büyüklüğü, en dar geçiş, zemin türü, kir yoğunluğu, çalışma süresi, kullanım sıklığı ve bakım koşulları birlikte değerlendirilmelidir.'}}
]};

export default function Home(){return <main className="premiumHome">
  <div className="siteTop premiumTop"><div><span>◇ Türkiye Geneli Hizmet</span><span>◉ Uzman Teknik Destek</span><span>◇ Yedek Parça Süreci</span></div><div><a href="https://wa.me/905375223946">◉ WhatsApp</a><a href="/iletisim">İletişim Talebi</a></div></div>
  <header className="siteHeader premiumUnifiedHeader">
    <details className="mobileMenu"><summary aria-label="Menüyü aç">☰</summary><div><a href="/">Ana Sayfa</a><a href="/zemin-yikama-makineleri">Zemin Yıkama Makineleri</a><a href="/kiralama">Hizmetler</a><a href="/sektorler">Sektörel Çözümler</a><a href="/yedek-parca">Yedek Parça</a><a href="/blog">Blog</a><a href="/iletisim">İletişim</a></div></details>
    <a className="siteLogo" href="/" aria-label="Zeminyikama.com ana sayfa"><b>ZEMİN YIKAMA</b><span>MAKİNELERİ</span></a>
    <nav aria-label="Ana menü"><a href="/">ANA SAYFA</a><a href="/zemin-yikama-makineleri">ZEMİN YIKAMA MAKİNELERİ⌄</a><a href="/kiralama">HİZMETLER⌄</a><a href="/sektorler">SEKTÖREL ÇÖZÜMLER⌄</a><a href="/yedek-parca">YEDEK PARÇA</a><a href="/blog">BLOG</a><a href="/iletisim">İLETİŞİM</a></nav>
    <a className="blueBtn" href="/teklif-al">TEKLİF AL</a>
  </header>

  <section className="premiumHero">
    <div className="premiumHeroGlow" />
    <div className="premiumHeroTitle">
      <h1>PROFESYONEL<br/><span>ZEMİN YIKAMA MAKİNELERİ</span></h1>
      <p>Satış <b>•</b> Kiralama <b>•</b> Servis</p>
    </div>
    <div className="premiumSide premiumSideLeft">{sideFeatures.left.map(([icon,title,text])=><div className="premiumFeature" key={title}><i>{icon}</i><span><b>{title}</b><small>{text}</small></span></div>)}</div>
    <div className="premiumSide premiumSideRight">{sideFeatures.right.map(([icon,title,text])=><div className="premiumFeature" key={title}><i>{icon}</i><span><b>{title}</b><small>{text}</small></span></div>)}</div>
    <div className="premiumLineup" role="img" aria-label="Berker Ecoline B250, B140, C70, B60 ve B45 zemin yıkama makineleri" />
      <div className="premiumHeroActions"><a href="/zemin-yikama-makineleri">MAKİNELERİ İNCELE <span>›</span></a><a href="/teklif-al">TEKLİF AL <span>›</span></a></div>
    <div className="premiumBenefits">{benefits.map(([icon,title,text])=><div key={title}><i>{icon}</i><span><b>{title}</b><small>{text}</small></span></div>)}</div>
  </section>

  <section className="refSectors"><div className="refSectionTitle"><div><small>SEKTÖREL ÇÖZÜMLER</small><h2>Her Sektöre Özel Zemin Temizleme Çözümleri</h2></div><a className="refButton" href="/sektorler">TÜM SEKTÖRLER</a></div><div className="sectorStrip">{sectors.map((s,i)=><a href={`/sektorler/${['fabrika','avm','depo','otopark','hastane','otel','market','okul','belediye','lojistik'][i]}`} key={s}><div className={`sectorPic sp${i}`}/><b>{s}</b><span>{sectorNotes[i]}</span></a>)}</div></section>
  <div className="refSticky"><a href="tel:+905375223946">☎ <span><b>HEMEN ARA</b><small>TELEFON TALEBİ</small></span></a><a href="https://wa.me/905375223946">◉ <span><b>WHATSAPP</b><small>HIZLI BİLGİ AL</small></span></a><a href="/teklif-al">▣ <span><b>TEKLİF AL</b><small>ÜCRETSİZ TALEP</small></span></a></div>
</main>}
