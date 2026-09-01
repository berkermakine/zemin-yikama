export type LegalSection={title:string;paragraphs:string[];bullets?:string[]};
export type LegalPage={slug:string;title:string;description:string;eyebrow:string;sections:LegalSection[];notice?:string};

export const POLICY_DATE='1 Eylül 2026';
export const SELLER={
 name:'Berker Temizlik Araçları Tic. Ltd. Şti.',
 address:'Barbaros Hayrettinpaşa, 1061. Sk. No: 4C, 34250 Gaziosmanpaşa/İstanbul',
 phone:'0212 477 0 400',
 mobile:'0537 522 39 46',
 email:'info@zeminyikama.com',
 taxNumber:'[VERGİ NUMARASI — firma tarafından tamamlanmalıdır]',
 mersisNumber:'[MERSİS NUMARASI — firma tarafından tamamlanmalıdır]',
};

const contact=`${SELLER.name}; ${SELLER.address}; ${SELLER.phone}; ${SELLER.mobile}; ${SELLER.email}`;
const shipping='Siparişler için standart teslimat bilgisi: 1-3 iş günü içerisinde teslimat. Standart kargo ücreti 350 TL’dir. Ürün indirimi sonrası sipariş tutarı 8.000 TL ve üzerindeyse kargo ücretsizdir; 8.000 TL’nin altındaysa 350 TL kargo bedeli uygulanır.';

export const legalPages:Record<string,LegalPage>={
 'iade-ve-iptal-politikasi':{
  slug:'iade-ve-iptal-politikasi',eyebrow:'MÜŞTERİ HAKLARI',title:'İade, İptal ve Cayma Hakkı Politikası',description:'Zeminyikama.com sipariş iptali, cayma hakkı, ürün iadesi, hasarlı veya yanlış ürün ve geri ödeme süreçleri hakkında bilgilendirme.',
  notice:'Bu politika tüketici işlemleri için genel bilgilendirme sunar. Emredici mevzuattan doğan haklar saklıdır; ticari alımlarda ve özel siparişlerde sözleşmeye özgü koşullar ayrıca değerlendirilir.',
  sections:[
   {title:'Genel Bilgilendirme',paragraphs:['Zeminyikama.com üzerinden kurulan mesafeli satışlarda 6502 sayılı Tüketicinin Korunması Hakkında Kanun, Mesafeli Sözleşmeler Yönetmeliği ve yürürlükteki diğer emredici hükümler uygulanır. Bu sayfa kanuni hakları sınırlandırmaz.']},
   {title:'Sipariş İptali',paragraphs:['Sipariş henüz kargoya verilmediyse sipariş numarasıyla telefon veya e-posta üzerinden iptal talebi iletilebilir. Hazırlama veya kargo süreci başlamış siparişlerde talep, ürünün durumuna ve uygulanabilir cayma hükümlerine göre değerlendirilir.']},
   {title:'Cayma Hakkı',paragraphs:['Tüketici, kanuni istisnalar saklı kalmak üzere, malı teslim aldığı tarihten itibaren 14 gün içinde gerekçe göstermeden ve cezai şart ödemeden cayma hakkını kullanabilir. Bildirim; sipariş numarası ve iletişim bilgileriyle birlikte e-posta veya kalıcı veri saklayıcısı niteliğindeki uygun bir kanal üzerinden iletilmelidir. Sözleşmenin kurulmasından ürünün teslimine kadar da cayma bildirimi yapılabilir.']},
   {title:'İade Koşulları',paragraphs:['İade talebi önce iletişim kanallarımızdan kayda alınır. Ürün; mutat inceleme sınırlarını aşan kullanım, eksik parça veya tüketiciden kaynaklanan hasar bakımından kontrol edilir. Kanuni ayıp hakları ve cayma hakkı ayrı ayrı değerlendirilir.']},
   {title:'İade Edilecek Ürünün Durumu',paragraphs:['Ürünün kendisi, varsa aksesuarları ve ambalajı güvenli taşıma sağlayacak şekilde gönderilmelidir. Fatura veya sipariş bilgisinin paylaşılması işlemi hızlandırır. Tüketici, ürünü yalnızca niteliğini ve işleyişini anlamak için gerekli ölçüde incelemelidir.']},
   {title:'Hasarlı / Hatalı Ürünler',paragraphs:['Teslimatta hasar, üretim hatası veya siparişe aykırılık görülürse ürün kullanılmadan önce fotoğraf ve sipariş numarasıyla bize bildirilmelidir. Ayıplı mala ilişkin seçimlik haklar mevzuata uygun olarak değerlendirilir.']},
   {title:'Yanlış Ürün Gönderimi',paragraphs:['Sipariş edilenden farklı ürün gönderilmişse doğru ürünün temini veya bedel iadesi için bizimle iletişime geçin. Yanlış gönderimden kaynaklanan makul iade süreci satıcı tarafından organize edilir.']},
   {title:'İade Süreci',paragraphs:['Talep; sipariş numarası, ürün adı, iade nedeni ve iletişim bilgileriyle alınır. İnceleme sonrasında iade adresi ve gönderim adımları yazılı olarak paylaşılır. Tüketici, cayma bildiriminden sonra ürünü mevzuatta öngörülen süre içinde geri göndermelidir.']},
   {title:'İade Kargo Süreci',paragraphs:['Anlaşmalı iade kargo şirketi bu sayfada belirtilmediğinden, ürünü göndermeden önce bizimle iletişime geçin. Cayma hakkındaki iade masrafları, yürürlükteki mevzuat ve sipariş öncesi bilgilendirme esas alınarak uygulanır; kanuni tüketici hakları daraltılmaz.']},
   {title:'Geri Ödeme Süreci',paragraphs:['Mevzuattaki koşullar oluştuğunda geri ödeme, ilgili kanuni sürede ve tüketicinin satın alırken kullandığı ödeme aracına uygun şekilde yapılır. Banka veya ödeme kuruluşunun hesaba yansıtma süresi satıcının işlem tarihinden farklı olabilir.']},
   {title:'İstisnalar',paragraphs:['Kişiye özel üretilen veya özel ölçüyle hazırlanan ürünler ile kanunda sayılan diğer ürün ve hizmetlerde cayma hakkı istisnaları uygulanabilir. Her talep ürünün niteliği ve güncel mevzuat çerçevesinde incelenir.']},
   {title:'İletişim',paragraphs:[contact]},
  ]
 },
 'teslimat-ve-kargo':{
  slug:'teslimat-ve-kargo',eyebrow:'SİPARİŞ SÜRECİ',title:'Teslimat ve Kargo Politikası',description:'Zeminyikama.com yedek parça siparişlerinde 1-3 iş günü içerisinde teslimat, 350 TL standart kargo ve 8.000 TL ve üzeri ücretsiz kargo koşulları.',
  sections:[
   {title:'Teslimat ve Kargo Özeti',paragraphs:[shipping],bullets:['Teslimat süresi: 1-3 iş günü içerisinde teslimat','Standart kargo ücreti: 350 TL','8.000 TL ve üzeri siparişlerde: Ücretsiz kargo']},
   {title:'Sipariş Hazırlama Süreci',paragraphs:['Stokta bulunan ve uyumluluğu teyit edilen ürünler sipariş onayından sonra hazırlanır. Siparişin doğrulanması, ürün uyumluluğu veya ödeme teyidi için müşteriyle iletişim kurulabilir.']},
   {title:'Kargoya Teslim',paragraphs:['Siparişler çalışma günleri içinde hazırlanarak uygun taşıyıcıya teslim edilir. Belirli bir kargo şirketi taahhüt edilmez; taşıyıcı sipariş ve teslimat bölgesine göre belirlenebilir.']},
   {title:'Teslimat Adresi Sorumluluğu',paragraphs:['Alıcı, sipariş sırasında doğru ve eksiksiz teslimat adresi ile ulaşılabilir telefon numarası sağlamalıdır. Eksik veya yanlış bilgilerden doğan gecikmelerde müşteriyle iletişime geçilir.']},
   {title:'Hasarlı Paket Kontrolü',paragraphs:['Paket teslim alınırken dış ambalaj kontrol edilmelidir. Görünür hasarda mümkünse taşıyıcı görevlisine tutanak düzenletin ve paketin fotoğraflarıyla birlikte aynı gün bize bildirin. Bu öneri, tüketicinin ayıplı mala ilişkin kanuni haklarını ortadan kaldırmaz.']},
   {title:'Teslimat Gecikmeleri',paragraphs:['Standart teslimat bilgisi 1-3 iş günü içerisinde teslimattır. Uzak bölge, adres sorunu, yoğunluk veya taşıyıcı kaynaklı gecikme yaşanırsa mevcut bilgi müşteriye iletilir; kesin saat veya gün garantisi verilmez.']},
   {title:'Resmî Tatiller / Olağanüstü Durumlar',paragraphs:['Hafta sonu, resmî tatil, olumsuz hava, ulaşım kesintisi, afet veya benzeri kontrol dışı durumlar hazırlama ve taşıma süresini etkileyebilir. Bu durumlarda güncel teslimat bilgisi paylaşılır.']},
   {title:'Kargo Takibi',paragraphs:['Takip bilgisi oluştuğunda müşteriye mevcut iletişim kanalı üzerinden iletilebilir. Takip bilgisi alınamazsa sipariş numaranızla bizimle iletişime geçebilirsiniz.']},
   {title:'İletişim',paragraphs:[contact]},
  ]
 },
 'mesafeli-satis-sozlesmesi':{
  slug:'mesafeli-satis-sozlesmesi',eyebrow:'SÖZLEŞME ŞABLONU',title:'Mesafeli Satış Sözleşmesi',description:'Zeminyikama.com üzerinden verilen yedek parça siparişleri için satıcı, ürün, ödeme, teslimat, cayma ve uyuşmazlık hükümleri.',
  notice:'Bu metin genel sözleşme şablonudur. Siparişe ait ürün, miktar, fiyat, alıcı ve ödeme bilgileri sipariş özetiyle birlikte sözleşmenin ayrılmaz parçasıdır. Vergi ve MERSİS bilgileri yayından önce firma yetkilisi veya hukuk danışmanı tarafından tamamlanmalıdır.',
  sections:[
   {title:'1. Taraflar',paragraphs:[`Satıcı: ${SELLER.name}. Adres: ${SELLER.address}. Telefon: ${SELLER.phone}. E-posta: ${SELLER.email}. Vergi No: ${SELLER.taxNumber}. MERSİS No: ${SELLER.mersisNumber}.`,`Alıcı: Sipariş sırasında adını/unvanını, iletişim ve teslimat bilgilerini bildiren kişi veya kuruluştur.`]},
   {title:'2. Sözleşmenin Konusu',paragraphs:['Bu sözleşme, alıcının zeminyikama.com üzerinden elektronik ortamda sipariş verdiği ürünlerin satışı ve teslimi ile tarafların hak ve yükümlülüklerini düzenler. Tüketici işlemlerinde 6502 sayılı Kanun ve ilgili mevzuat uygulanır.']},
   {title:'3. Ürün / Hizmet Bilgileri',paragraphs:['Ürün adı, temel nitelikleri, miktarı, birim fiyatı, stok durumu ve toplam bedeli sipariş ekranında gösterilir. Makine modeliyle parça uyumluluğu sipariş öncesinde teyit edilmelidir.']},
   {title:'4. Sipariş ve Ödeme',paragraphs:['Sipariş, alıcının ürün ve iletişim bilgilerini doğrulayıp sipariş talebini iletmesiyle kayda alınır. Tahsilat yöntemi ve ödeme durumu sipariş özeti veya taraflar arasındaki kalıcı iletişim kaydında gösterilir.']},
   {title:'5. Teslimat',paragraphs:[shipping,'Teslimat alıcının bildirdiği adrese yapılır. Stok veya uyumluluk doğrulaması gereken siparişlerde hazırlama, doğrulama tamamlandıktan sonra başlar.']},
   {title:'6. Kargo Bedeli',paragraphs:['Standart kargo bedeli 350 TL’dir. Ürün indirimi sonrası sipariş tutarı 8.000 TL ve üzerindeyse kargo ücretsizdir; 8.000 TL’nin altındaysa 350 TL kargo bedeli toplam tutara eklenir.']},
   {title:'7. Cayma Hakkı',paragraphs:['Tüketici, kanuni istisnalar saklı kalmak üzere, malın tesliminden itibaren 14 gün içinde cayma hakkını kullanabilir. Bildirim, süresi içinde satıcının e-posta veya diğer kalıcı veri saklayıcısı kanalına yöneltilir. Ayrıntılar İade, İptal ve Cayma Hakkı Politikasında açıklanır.']},
   {title:'8. İade',paragraphs:['Cayma veya ayıplı ürün iadesi, yürürlükteki mevzuat ve İade, İptal ve Cayma Hakkı Politikası uyarınca yürütülür. Ürün gönderilmeden önce satıcıyla iletişime geçilmesi gerekir.']},
   {title:'9. Tarafların Hak ve Yükümlülükleri',paragraphs:['Satıcı, siparişi sözleşmeye uygun hazırlamak ve teslim sürecini bildirmekle; alıcı ise doğru sipariş, teslimat ve iletişim bilgilerini sağlamak, ürünü teslim alırken kontrol etmek ve ödeme yükümlülüğünü yerine getirmekle sorumludur. Emredici tüketici hakları saklıdır.']},
   {title:'10. Uyuşmazlık',paragraphs:['Tüketici uyuşmazlıklarında, yürürlükteki parasal sınırlar ve yetki kuralları dâhilinde tüketici hakem heyetleri ile tüketici mahkemelerine başvurulabilir. Ticari alımlarda görevli ve yetkili merciler ilgili mevzuata göre belirlenir.']},
   {title:'11. Yürürlük',paragraphs:['Alıcının sipariş öncesi bilgileri ve sözleşmeyi elektronik ortamda görerek siparişi onaylamasıyla sözleşme yürürlüğe girer. Sipariş özeti ve elektronik kayıtlar sözleşmeyle birlikte değerlendirilir.']},
  ]
 },
 'on-bilgilendirme-formu':{
  slug:'on-bilgilendirme-formu',eyebrow:'SİPARİŞ ÖNCESİ',title:'Mesafeli Satış Ön Bilgilendirme Formu',description:'Zeminyikama.com siparişlerinden önce satıcı, ürün, fiyat, kargo, teslimat, ödeme, cayma, iade ve iletişim bilgileri.',
  notice:'Siparişe özgü ürün, miktar, fiyat ve alıcı bilgileri ödeme/sipariş ekranındaki özetle birlikte okunmalıdır.',
  sections:[
   {title:'Satıcı Bilgileri',paragraphs:[contact,`Vergi No: ${SELLER.taxNumber}. MERSİS No: ${SELLER.mersisNumber}.`]},
   {title:'Ürün Bilgileri',paragraphs:['Ürünün adı, temel nitelikleri, uyumluluk bilgisi, adedi ve stok durumu ilgili ürün sayfası ile sipariş özetinde gösterilir.']},
   {title:'Ürün Fiyatı',paragraphs:['Ürünün vergiler dâhil satış fiyatı ürün sayfasında ve sipariş özetinde gösterilir. İndirim veya kupon uygulanmışsa etkisi sipariş özetinde belirtilir.']},
   {title:'Kargo Ücreti',paragraphs:['Standart kargo ücreti 350 TL’dir. Ürün indirimi sonrası sipariş tutarı 8.000 TL ve üzerindeyse ücretsiz kargo uygulanır; 8.000 TL’nin altındaysa 350 TL eklenir.']},
   {title:'Teslimat',paragraphs:['Standart teslimat bilgisi 1-3 iş günü içerisinde teslimattır. Teslimat adresinin doğru ve eksiksiz girilmesi alıcının sorumluluğundadır. Kontrol dışı gecikmelerde mevcut durum müşteriye bildirilir.']},
   {title:'Ödeme',paragraphs:['Kullanılabilir ödeme veya sipariş iletim yöntemi ödeme ekranında gösterilir. Alıcı, sipariş vermeden önce ürün bedeli, kargo ve toplam tutarı kontrol eder.']},
   {title:'Cayma Hakkı',paragraphs:['Tüketici, kanuni istisnalar saklı kalmak üzere, malın tesliminden itibaren 14 gün içinde cayma hakkını kullanabilir. Bildirim için sipariş numarasıyla birlikte satıcının e-posta veya uygun kalıcı iletişim kanalına başvurulur.']},
   {title:'İade',paragraphs:['İade koşulları, gönderim adımları ve geri ödeme süreci İade, İptal ve Cayma Hakkı Politikasında açıklanmıştır. Ürün gönderilmeden önce satıcıyla iletişime geçilmelidir.']},
   {title:'Şikâyet / İletişim',paragraphs:[contact,'Tüketici ayrıca yürürlükteki parasal ve yetki sınırları kapsamında tüketici hakem heyetleri veya tüketici mahkemelerine başvurabilir.']},
  ]
 },
 'gizlilik-politikasi':{
  slug:'gizlilik-politikasi',eyebrow:'VERİ GİZLİLİĞİ',title:'Gizlilik Politikası',description:'Zeminyikama.com üzerinde iletişim, sipariş ve site kullanımı sırasında işlenen bilgiler ile kullanıcıların gizlilik hakları.',
  sections:[
   {title:'Toplanan Bilgiler',paragraphs:['İletişim veya sipariş formlarında ad/soyad ya da firma adı, telefon, e-posta, teslimat adresi, sipariş içeriği ve kullanıcının kendi isteğiyle paylaştığı açıklamalar işlenebilir. Site güvenliği için gerekli teknik günlük verileri barındırma altyapısı tarafından tutulabilir.']},
   {title:'Bilgilerin Kullanımı',paragraphs:['Bilgiler; talebi yanıtlamak, ürün uyumluluğunu teyit etmek, siparişi hazırlamak, teslimatı yürütmek, satış sonrası destek sağlamak, güvenliği korumak ve hukuki yükümlülükleri yerine getirmek amacıyla kullanılır.']},
   {title:'Sipariş Bilgileri',paragraphs:['Sipariş numarası, ürünler, adet, fiyat, teslimat ve durum bilgileri siparişin yürütülmesi ve müşteri desteği amacıyla kaydedilebilir.']},
   {title:'İletişim Bilgileri',paragraphs:['Telefon ve e-posta; sipariş, teklif, servis veya yedek parça talebiyle ilgili iletişim için kullanılır. Kullanıcının ayrı talebi veya hukuki dayanak olmadan ilgisiz pazarlama faaliyeti varmış gibi kabul edilmez.']},
   {title:'Ödeme Verileri',paragraphs:['Site üzerinde doğrudan kart bilgisi alınmıyorsa kart numarası, güvenlik kodu veya banka şifresi saklanmaz. Harici bir ödeme hizmeti kullanılırsa ödeme verileri ilgili hizmet sağlayıcının kendi güvenlik ve gizlilik kurallarına tabi olabilir.']},
   {title:'Çerezler',paragraphs:['Site işlevleri için zorunlu tarayıcı depolaması veya oturum bilgileri kullanılabilir. Güncel ayrıntılar Çerez Politikasında yer alır.']},
   {title:'Üçüncü Taraf Hizmetler',paragraphs:['WhatsApp sipariş bağlantısı, Google Maps haritası, YouTube videoları ve sosyal medya bağlantıları ilgili üçüncü taraf sitelere yönlendirebilir. Bu hizmetler açıldığında ilgili sağlayıcının politikaları uygulanır.']},
   {title:'Veri Güvenliği',paragraphs:['Yetkisiz erişim, kayıp veya kötüye kullanım riskini azaltmak için makul idari ve teknik tedbirler uygulanır. İnternet üzerinden veri aktarımının mutlak güvenliği garanti edilemez.']},
   {title:'Kullanıcı Hakları',paragraphs:['Kişisel verilerinize ilişkin taleplerinizi KVKK Aydınlatma Metninde belirtilen iletişim kanallarından iletebilirsiniz. Kimlik doğrulama ve yasal değerlendirme sonrasında talep yanıtlanır.']},
   {title:'Politika Güncellemeleri',paragraphs:[`Politika mevzuat veya hizmet değişikliklerine göre güncellenebilir. Güncel sürüm tarihi: ${POLICY_DATE}.`]},
   {title:'İletişim',paragraphs:[contact]},
  ]
 },
 kvkk:{
  slug:'kvkk',eyebrow:'6698 SAYILI KANUN',title:'KVKK Aydınlatma Metni',description:'Berker Temizlik Araçları Tic. Ltd. Şti. tarafından kişisel verilerin işlenmesi, aktarılması, korunması ve ilgili kişi hakları hakkında aydınlatma.',
  notice:'Veri sorumlusu kayıt, VERBİS ve saklama-imha yükümlülüklerinin işletmenin gerçek faaliyetleriyle eşleştirilmesi firma yetkilisi veya hukuk danışmanı tarafından ayrıca kontrol edilmelidir.',
  sections:[
   {title:'Veri Sorumlusu',paragraphs:[`Kişisel verileriniz, veri sorumlusu sıfatıyla ${SELLER.name} tarafından işlenebilir. Adres: ${SELLER.address}. E-posta: ${SELLER.email}. Telefon: ${SELLER.phone}.`]},
   {title:'İşlenen Kişisel Veriler',paragraphs:['Kimlik ve iletişim bilgileri, teslimat adresi, sipariş/ürün bilgileri, talep ve şikâyet kayıtları ile site güvenliği için gerekli sınırlı teknik kayıtlar işlenebilir. Özel nitelikli kişisel veri talep edilmez; gereksiz bilgi paylaşılmamalıdır.']},
   {title:'İşleme Amaçları',paragraphs:['Veriler; ürün ve uyumluluk bilgisinin sunulması, teklif ve sipariş taleplerinin alınması, teslimat ve satış sonrası hizmetlerin yürütülmesi, iletişim kurulması, bilgi güvenliğinin sağlanması, uyuşmazlıkların yönetilmesi ve hukuki yükümlülüklerin yerine getirilmesi amaçlarıyla sınırlı olarak işlenir.']},
   {title:'Hukuki Sebepler',paragraphs:['Kişisel veriler; sözleşmenin kurulması veya ifasıyla doğrudan ilgili olma, veri sorumlusunun hukuki yükümlülüğünü yerine getirmesi, bir hakkın tesisi/kullanılması/korunması, temel haklara zarar vermemek kaydıyla meşru menfaat ve gerekli hâllerde açık rıza gibi 6698 sayılı Kanunda yer alan hukuki sebeplere dayanılarak işlenir. Her veri ve amaç için geçerli sebep somut sürece göre belirlenir.']},
   {title:'Aktarım',paragraphs:['Veriler, amaçla sınırlı ve gerekli ölçüde; kargo/lojistik sağlayıcılarına, barındırma ve bilişim hizmeti sağlayıcılarına, iletişim hizmetlerine, mali müşavirlere, hukuk danışmanlarına ve yetkili kamu kurumlarına aktarılabilir. Üçüncü taraf bağlantılarının kullanılması ilgili hizmet sağlayıcıya veri aktarılmasına yol açabilir.']},
   {title:'Toplama Yöntemi',paragraphs:['Veriler; web formları, telefon, e-posta, WhatsApp, sipariş kayıtları ve site kullanımındaki otomatik teknik yollar üzerinden elektronik veya sözlü olarak toplanabilir.']},
   {title:'Saklama ve İmha',paragraphs:['Kişisel veriler, işleme amacının gerektirdiği süre ve ilgili mevzuatta öngörülen zorunlu sürelerle sınırlı tutulur. Sabit bir süre uydurulmaz; amaç ve hukuki yükümlülük ortadan kalktığında uygulanabilir imha yöntemleri kullanılır.']},
   {title:'İlgili Kişinin Hakları',paragraphs:['6698 sayılı Kanunun 11. maddesi kapsamındaki haklarınızla ilgili olarak verinizin işlenip işlenmediğini öğrenme, bilgi talep etme, amacına uygun kullanımı öğrenme, aktarılan üçüncü kişileri bilme, düzeltme, silme/yok etme, bu işlemlerin aktarılanlara bildirilmesini isteme, otomatik analiz sonucuna itiraz etme ve kanuna aykırı işlem nedeniyle zarar varsa giderim talep etme haklarına sahipsiniz.']},
   {title:'Başvuru',paragraphs:[`Başvurunuzu kimliğinizi doğrulamaya elverişli bilgiler ve talebinizle birlikte ${SELLER.email} adresine veya ${SELLER.address} adresine iletebilirsiniz. Başvurular, yürürlükteki usul ve süreler çerçevesinde değerlendirilir.`]},
  ]
 },
 'cerez-politikasi':{
  slug:'cerez-politikasi',eyebrow:'TARAYICI BİLGİLERİ',title:'Çerez Politikası',description:'Zeminyikama.com sitesinde zorunlu işlevler, tercihler ve üçüncü taraf içerikleri kapsamında kullanılan çerez ve tarayıcı depolama bilgileri.',
  sections:[
   {title:'Çerez Nedir?',paragraphs:['Çerezler, ziyaret edilen internet sitesi tarafından tarayıcıda saklanan küçük metin dosyalarıdır. Benzer amaçlarla yerel depolama ve oturum teknolojileri de kullanılabilir.']},
   {title:'Zorunlu Çerezler',paragraphs:['Sitenin güvenli ve beklenen şekilde çalışması, oturumun sürdürülmesi, sepetin korunması ve yönetim alanının doğrulanması için zorunlu teknolojiler kullanılabilir. Bunlar olmadan bazı temel işlevler çalışmayabilir.']},
   {title:'Tercih Çerezleri',paragraphs:['Sepet içeriği gibi kullanıcının cihazına özgü tercihler tarayıcı depolamasında tutulabilir. Bu bilgiler farklı cihazlar arasında otomatik olarak eşleşmeyebilir.']},
   {title:'Analitik Çerezler',paragraphs:['Sitede etkinleştirilmiş bir analitik hizmet bulunması hâlinde yalnızca gerçek yapılandırma ve geçerli hukuki şartlar kapsamında kullanılır. Kullanılmayan bir analitik veya reklam sistemi bu politikayla varmış gibi beyan edilmez.']},
   {title:'Üçüncü Taraf Çerezler',paragraphs:['Google Maps, YouTube, WhatsApp ve sosyal medya bağlantıları açıldığında ilgili üçüncü taraf kendi çerez veya benzer teknolojilerini kullanabilir. Bu kullanımlar üçüncü tarafın politikasına tabidir.']},
   {title:'Çerez Yönetimi',paragraphs:['Zorunlu olmayan çerezler kullanıldığında uygulanabilir onay tercihleri sunulur. Zorunlu işlevler dışındaki tercihler, sunulan yönetim aracı veya tarayıcı ayarları üzerinden değiştirilebilir.']},
   {title:'Tarayıcı Ayarları',paragraphs:['Çerezleri tarayıcınızın gizlilik ayarlarından görüntüleyebilir, silebilir veya engelleyebilirsiniz. Çerezlerin engellenmesi sepet, oturum ve gömülü içeriklerin çalışmasını etkileyebilir.']},
   {title:'Politika Değişiklikleri',paragraphs:[`Teknoloji veya mevzuat değiştiğinde bu politika güncellenebilir. Güncel sürüm tarihi: ${POLICY_DATE}.`]},
  ]
 },
 'kullanim-kosullari':{
  slug:'kullanim-kosullari',eyebrow:'WEB SİTESİ',title:'Web Sitesi Kullanım Koşulları',description:'Zeminyikama.com ürün bilgileri, fiyat, stok, içerik, fikri mülkiyet ve kullanıcı sorumluluklarına ilişkin kullanım koşulları.',
  sections:[
   {title:'Genel',paragraphs:['Zeminyikama.com sitesini kullanarak yürürlükteki mevzuata ve bu koşullara uygun davranmayı kabul edersiniz. Emredici tüketici hakları bu koşullarla sınırlandırılmaz.']},
   {title:'Web Sitesinin Kullanımı',paragraphs:['Site yalnızca hukuka uygun bilgi alma, teklif, sipariş, servis ve iletişim amaçlarıyla kullanılmalıdır. Sisteme zarar veren, güvenliği aşmaya çalışan veya üçüncü kişilerin haklarını ihlal eden işlemler yasaktır.']},
   {title:'Ürün Bilgileri',paragraphs:['Ürün açıklamaları bilgilendirme amaçlıdır. Yedek parça uyumluluğu makine modeli, seri bilgisi ve teknik özellik üzerinden sipariş öncesinde teyit edilmelidir. Görsel ile ürün arasında üretim serisine bağlı küçük farklılıklar olabilir.']},
   {title:'Fiyatlar',paragraphs:['Güncel satış fiyatı ürün sayfasında gösterilir. Yazım veya teknik hata fark edilirse müşteri bilgilendirilerek sipariş onayı istenir; tüketicinin kanuni hakları saklıdır.']},
   {title:'Stok Durumu',paragraphs:['Stok göstergesi sipariş anındaki mevcut kayda dayanır. Eş zamanlı sipariş veya sayım farkında müşteri gecikmeden bilgilendirilir ve uygulanabilir seçimleri sunulur.']},
   {title:'Fikri Mülkiyet',paragraphs:['Sitedeki marka, metin, tasarım, ürün görselleri ve diğer içerikler ilgili hak sahiplerine aittir. Yazılı izin veya kanuni istisna olmadan ticari amaçla kopyalanamaz ve yeniden yayımlanamaz.']},
   {title:'Kullanıcı Yükümlülükleri',paragraphs:['Kullanıcı doğru iletişim ve teslimat bilgisi vermeli, hesabı veya yönetim erişimini yetkisiz kişilerle paylaşmamalı ve sipariş öncesinde ürün uyumluluğunu kontrol etmelidir.']},
   {title:'Sorumluluk Sınırları',paragraphs:['Site sürekliliği ve bilgilerin güncelliği için makul çaba gösterilir. Kontrol dışı kesinti, üçüncü taraf hizmet arızası veya kullanıcının yanlış bilgi vermesinden doğan etkiler somut olay ve emredici hukuk çerçevesinde değerlendirilir.']},
   {title:'Değişiklikler',paragraphs:[`Koşullar hizmet veya mevzuat değişikliklerine göre güncellenebilir. Güncel sürüm tarihi: ${POLICY_DATE}.`]},
   {title:'İletişim',paragraphs:[contact]},
  ]
 },
};

export const legalPageSlugs=Object.keys(legalPages);
