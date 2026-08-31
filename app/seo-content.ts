export const SITE_URL = 'https://www.zeminyikama.com';
export const CONTENT_DATE = '2026-08-29';

export type GuideSection = { title: string; paragraphs: string[]; bullets?: string[] };
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  answer: string;
  sections: GuideSection[];
  checklist: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'zemin-tipine-gore-makine-secimi',
    title: 'Zemin Tipine Göre Makine Seçimi',
    description: 'Epoksi, beton, seramik ve doğal taş yüzeylerde fırça, ped ve makine sınıfını doğru belirlemek için saha odaklı seçim rehberi.',
    answer: 'Doğru zemin yıkama makinesi yalnızca metrekareye göre seçilmez. Yüzeyin kaplaması, derz yapısı, kayganlık riski, kirin zemine tutunma biçimi ve üreticinin izin verdiği bakım yöntemi birlikte değerlendirilmelidir.',
    sections: [
      {title:'Yüzey malzemesini doğru tanımlayın',paragraphs:['Epoksi yüzeyler kimyasala ve aşındırmaya karşı hassas olabilirken, helikopterli beton daha agresif mekanik temizlik gerektirebilir. Seramikte derzlerin durumu, doğal taşta ise yüzeyin cilalı veya honlu olması seçim sonucunu değiştirir.','Makine belirlemeden önce küçük bir alanda deneme yapılması; fırça sertliği, deterjan oranı ve geçiş hızının yüzeye zarar vermediğini doğrulamaya yardımcı olur.'],bullets:['Epoksi ve kaplamalı yüzeylerde üretici bakım talimatı','Betonda gözeneklilik ve yağ emilimi','Seramikte derz genişliği ve kırık bölgeler','Doğal taşta cila ve yüzey koruyucu durumu']},
      {title:'Fırça ve ped seçimini kir türüyle eşleştirin',paragraphs:['Yumuşak pedler günlük bakımda yüzeyi korumaya yardımcı olur. Orta sert fırçalar genel kirlerde dengeli sonuç verirken, aşındırıcı seçenekler yalnızca yüzeyin buna uygun olduğu doğrulandığında kullanılmalıdır.','Yağ, lastik izi, ince toz ve gıda artığı aynı yöntemle temizlenmez. Ön işlem ihtiyacı, kimyasalın bekleme süresi ve kirli suyun toplanma biçimi de planın parçasıdır.']},
      {title:'Makine ölçüsünü saha akışına göre seçin',paragraphs:['Fırça genişliği teorik verimi etkiler; fakat kapılar, raf araları ve dönüş noktaları makinenin gerçek saha performansını belirler. En dar geçiş ile dönüş çapı ölçülmeden yalnızca büyük kapasiteye odaklanmak verimsiz bir seçim yaratabilir.','Temiz su dolum noktası, kirli su boşaltma alanı ve şarj düzeni de günlük çalışma süresine doğrudan etki eder.']}
    ],
    checklist:['Zemin kaplamasının tam adını kaydedin.','Baskın kir türünü ve yoğunluğunu fotoğraflayın.','En dar geçişi ve kapı açıklıklarını ölçün.','Küçük bir alanda fırça veya ped denemesi yapın.','Kimyasal ve yüzey uyumluluğunu doğrulayın.']
  },
  {
    slug: 'kiralama-mi-satin-alma-mi',
    title: 'Zemin Yıkama Makinesi Kiralama mı, Satın Alma mı?',
    description: 'Kullanım sıklığı, toplam sahip olma maliyeti, bakım sorumluluğu ve operasyon süresine göre kiralama ile satın alma seçeneklerini karşılaştırın.',
    answer: 'Kısa süreli, dönemsel veya proje bazlı ihtiyaçlarda kiralama esneklik sağlayabilir. Makinenin düzenli ve uzun süre kullanılacağı, bakım sorumluluğunun planlandığı işletmelerde satın alma daha öngörülebilir bir seçenek olabilir.',
    sections: [
      {title:'Kullanım takvimini sayısallaştırın',paragraphs:['Karar vermeden önce haftalık kullanım günü, vardiya süresi ve yıllık yoğun dönemler kaydedilmelidir. Bir makinenin yalnızca “sık” kullanılacağını söylemek yerine çalışma saatinin ölçülmesi, iki seçeneğin gerçek maliyetini karşılaştırmayı kolaylaştırır.','Fuar, inşaat sonrası temizlik veya geçici üretim artışı gibi sınırlı süreli işlerde depolama ve bakım yükünü üstlenmeden kiralama tercih edilebilir.']},
      {title:'Toplam maliyeti yalnızca satın alma fiyatıyla ölçmeyin',paragraphs:['Satın alma değerlendirmesine akü, sarf malzemesi, periyodik bakım, olası servis, operatör eğitimi ve makinenin kullanılmadığı dönemdeki depolama koşulları dahil edilmelidir.','Kiralama teklifinde ise teslimat, kullanım süresi, bakım kapsamı, hasar sorumluluğu ve sarf malzemelerinin kime ait olduğu açıkça yazılmalıdır.'],bullets:['Yıllık tahmini çalışma saati','Akü ve sarf malzemesi bütçesi','Servis müdahale koşulları','Teslimat ve lojistik giderleri']},
      {title:'Operasyonel kontrolü değerlendirin',paragraphs:['Satın alınan makine işletmenin planına göre her an kullanılabilir; buna karşılık bakım disiplinini de işletme kurar. Kiralamada makinenin uygunluğu, teslim tarihi ve sözleşme koşulları hizmet sağlayıcıyla birlikte yönetilir.','Nihai karar öncesinde aynı saha bilgileriyle hem kiralama hem satın alma teklifi istemek, karşılaştırmayı somutlaştırır.']}
    ],
    checklist:['Yıllık kullanım saatini hesaplayın.','Kiralama ve satın alma tekliflerinde aynı makine sınıfını karşılaştırın.','Bakım ve arıza sorumluluğunu yazılı olarak netleştirin.','Teslimat, akü ve sarf giderlerini toplam maliyete ekleyin.','Üç yıllık maliyet tablosu hazırlayın.']
  },
  {
    slug: 'temizlik-makinesi-bakim-plani',
    title: 'Zemin Temizlik Makinesi İçin Sürdürülebilir Bakım Planı',
    description: 'Günlük kontrol, haftalık temizlik ve kayıtlı servis adımlarıyla zemin yıkama makinesinin performansını korumaya yönelik bakım planı.',
    answer: 'Sürdürülebilir bakım planı; operatörün her vardiyada yaptığı kısa kontrolleri, haftalık ayrıntılı temizliği ve üretici programına göre yürütülen teknik servisi tek kayıt altında birleştirir.',
    sections: [
      {title:'Günlük kontrolleri vardiyanın parçası yapın',paragraphs:['Temiz ve kirli su tanklarının durumu, silecek lastikleri, fırça veya ped, emiş hortumu ve akü seviyesi çalışmaya başlamadan önce kontrol edilmelidir. Vardiya sonunda tankların boşaltılması ve makinenin temiz bırakılması koku, tortu ve tıkanma riskini azaltır.','Operatörün gördüğü aşınma, sızıntı veya olağan dışı sesi kısa bir forma kaydetmesi erken müdahaleyi kolaylaştırır.']},
      {title:'Haftalık bakımı gözleme dayalı yürütün',paragraphs:['Silecek lastiğinin kenarı, fırça aşınması, filtreler, hortum bağlantıları ve tekerleklerde biriken artıklar haftalık olarak incelenmelidir. Parçanın yalnızca temizlenmesi mi yoksa değiştirilmesi mi gerektiği makine kullanım kılavuzuna göre belirlenir.','Akülü makinelerde şarj alanının havalandırması, kablo ve soket durumu ile doğru şarj sırası ayrıca kontrol edilmelidir.'],bullets:['Silecek lastiğinde yırtık ve dalgalanma','Fırçada dengesiz aşınma','Emiş hattında tıkanma veya kaçak','Kablo, fiş ve soketlerde ısınma izi']},
      {title:'Servis kayıtlarını makine bazında tutun',paragraphs:['Her makine için model, seri numarası, çalışma saati, değişen parçalar ve servis tarihi kaydedildiğinde tekrarlayan arızalar daha kolay görülür. Bu kayıtlar yeni makine veya akü yatırım zamanının belirlenmesine de yardımcı olur.','Bakım aralıkları genel tahminle değil, üretici dokümanı ve yetkili servis önerisiyle kesinleştirilmelidir.']}
    ],
    checklist:['Vardiya öncesi kontrol formu kullanın.','Tankları her kullanımdan sonra boşaltıp durulayın.','Haftalık aşınma kontrolünü kayıt altına alın.','Seri numarası bazında servis geçmişi tutun.','Bakım aralığını üretici dokümanıyla doğrulayın.']
  },
  {
    slug: 'fabrika-zemin-temizligi-planlama',
    title: 'Fabrika Zemin Temizliği Nasıl Planlanır?',
    description: 'Üretim akışını aksatmadan fabrika zemini için risk, vardiya, kir türü, makine ve güvenli çalışma planı oluşturma rehberi.',
    answer: 'Fabrika zemin temizliği; üretim takvimi, yaya ve forklift trafiği, kirin kaynağı, yüzey kaplaması ve güvenli çalışma bölgeleri birlikte değerlendirilerek vardiya bazında planlanmalıdır.',
    sections: [
      {title:'Sahayı temizlik bölgelerine ayırın',paragraphs:['Üretim hattı, hammadde kabulü, sevkiyat, yaya yolları ve sosyal alanların kir yükü aynı değildir. Her bölge için temizlik sıklığı ve erişim zamanı ayrı belirlenirse makine kapasitesi daha gerçekçi hesaplanır.','Zemin planı üzerinde dar geçişler, kolonlar, rampalar, mazgallar ve enerji noktaları işaretlenmelidir.']},
      {title:'Kir kaynağına göre yöntemi belirleyin',paragraphs:['İnce üretim tozu, yağlı kalıntı, metal talaşı veya ambalaj atığı farklı ön işlemler gerektirir. Süpürme ihtiyacı bulunan iri atıklar yıkama öncesinde toplanmalı; kimyasal kullanımı zemin ve üretim koşullarıyla uyumlu olmalıdır.','Kayma riski olan bölgeler için uyarı işaretleri, geçici yönlendirme ve zeminin yeniden kullanıma açılma kriteri tanımlanmalıdır.'],bullets:['Kir kaynağını mümkünse üretim noktasında azaltın.','Temiz ve kirli güzergâhları ayırın.','Yaya ve araç trafiğine göre bariyer planı oluşturun.']},
      {title:'Gerçek verimi vardiyada ölçün',paragraphs:['Katalogdaki teorik metrekare değeri; su doldurma, boşaltma, dönüş, engel ve operatör molalarını içermez. Deneme çalışmasında gerçek temizlenen alan ile harcanan süre kaydedilmelidir.','Bu ölçüm, kaç makine ve operatör gerektiğini belirlerken daha güvenilir bir temel oluşturur.']}
    ],
    checklist:['Fabrika planını temizlik bölgelerine ayırın.','Her bölgenin kir türü ve sıklığını yazın.','Forklift ve yaya trafik saatlerini kaydedin.','Deneme çalışmasında gerçek saha verimini ölçün.','Acil duruş ve kayma riski prosedürünü belirleyin.']
  },
  {
    slug: 'depo-koridorlarinda-makine-secimi',
    title: 'Depo Koridorlarında Zemin Yıkama Makinesi Seçimi',
    description: 'Raf araları, dönüş noktaları, kapı açıklıkları ve sevkiyat trafiğine göre depo için zemin yıkama makinesi seçme rehberi.',
    answer: 'Depoda makine seçiminin ilk ölçütü toplam metrekare değil, en dar koridor ve güvenli dönüş alanıdır. Makinenin gövde, silecek ve fırça genişliği ayrı ayrı ölçülmelidir.',
    sections: [
      {title:'Koridoru üç farklı ölçüyle değerlendirin',paragraphs:['Raflar arasındaki net genişlik, makinenin dönüş yapacağı başlık alanı ve kapı açıklıkları ayrı ölçülmelidir. Arka silecek bazı makinelerde gövdeden geniş olduğu için yalnızca gövde ölçüsüne bakmak yeterli değildir.','Palet taşmaları, kolon koruyucular ve geçici stok alanları gerçek geçiş genişliğini azaltabilir. Ölçüm yoğun çalışma sırasında doğrulanmalıdır.']},
      {title:'Sevkiyat trafiğiyle temizlik zamanını eşleştirin',paragraphs:['Forklift trafiğinin yüksek olduğu saatlerde geniş makine kullanmak hem verimi düşürür hem güvenlik riskini artırır. Temizlik penceresi kısa ise hızlı dolum, boşaltım ve şarj düzeni önem kazanır.','Soğuk depo, gıda deposu veya kimyasal depoda yüzey ve hijyen gereksinimleri ayrıca değerlendirilmelidir.'],bullets:['Silecek genişliğini geçiş ölçüsüne dahil edin.','Raf başlarında dönüş yarıçapını test edin.','Forklift kör noktalarını plan üzerinde işaretleyin.']},
      {title:'Toz ve ambalaj atığını yıkama öncesi yönetin',paragraphs:['Streç, karton parçası ve iri kirler emiş hattını tıkayabilir. Yıkama öncesi süpürme veya kombine makine ihtiyacı, depodaki atık türüne göre belirlenmelidir.','Deneme sırasında raf ayaklarına yaklaşma, kenar temizliği ve kirli su toplama sonucu birlikte gözlenmelidir.']}
    ],
    checklist:['En dar koridoru, kapıyı ve dönüş alanını ölçün.','Silecek genişliğini ayrıca kontrol edin.','Sevkiyatın düşük olduğu temizlik saatini belirleyin.','İri atık için ön süpürme planı oluşturun.','Makineyi gerçek bir koridorda test edin.']
  },
  {
    slug: 'gunluk-makine-kontrol-listesi',
    title: 'Günlük Zemin Yıkama Makinesi Kontrol Listesi',
    description: 'Vardiya öncesi, kullanım sırasında ve vardiya sonunda uygulanabilecek pratik zemin yıkama makinesi kontrol listesi.',
    answer: 'Günlük kontrol; makine çalıştırılmadan önce güvenlik ve sarf parçalarının incelenmesi, kullanım sırasında olağan dışı belirtilerin izlenmesi ve vardiya sonunda tank ile emiş sisteminin temizlenmesinden oluşur.',
    sections: [
      {title:'Çalıştırmadan önce',paragraphs:['Operatör çevrede görünür hasar, sızıntı, gevşek bağlantı ve kablo sorunu olup olmadığını kontrol etmelidir. Fırça, ped ve silecek lastiğinin doğru takıldığı doğrulanmalı; temiz su ve akü seviyesi işe uygun olmalıdır.','Güvenlik ekipmanları, ikaz lambası ve kumandalar makine hareket etmeden denenmelidir.'],bullets:['Sızıntı ve görünür hasar','Fırça/ped bağlantısı','Silecek lastiği ve emiş hortumu','Akü veya enerji bağlantısı','İkaz ve kumanda işlevleri']},
      {title:'Çalışma sırasında',paragraphs:['Emiş iz bırakıyorsa silecek altında yabancı madde, hortumda kaçak veya tankta doluluk kontrol edilir. Olağan dışı ses, titreşim, koku veya ısınma fark edildiğinde çalışma durdurulmalı ve sorumlu kişiye bildirilmelidir.','Kimyasal dozunu artırmak her zaman daha iyi sonuç vermez; yüzey ve üretici talimatındaki oran korunmalıdır.']},
      {title:'Vardiya sonunda',paragraphs:['Kirli su kontrollü alanda boşaltılır, tank durulanır ve filtreler temizlenir. Fırça veya pedde dolanmış atıklar çıkarılır; silecek lastikleri silinir. Makine havalandırılmış ve güvenli park alanına bırakılır.','Akü şarjı, kullanılan akü teknolojisinin ve şarj cihazının talimatına göre yapılır. Yapılan kontrol ve tespitler vardiya formuna yazılır.']}
    ],
    checklist:['Vardiya öncesi güvenlik kontrolünü imzalayın.','Olağan dışı ses ve titreşimi kaydedin.','Kirli su tankını boşaltıp durulayın.','Fırça, ped ve sileceği temizleyin.','Makineyi doğru şarj ve park alanına bırakın.']
  },
  {
    slug: 'zemin-yikama-makinesi-nasil-secilir',
    title: 'Zemin Yıkama Makinesi Nasıl Seçilir?',
    description: 'Alan büyüklüğü, geçiş, zemin, kir, çalışma süresi ve servis koşullarını birlikte değerlendirerek doğru zemin yıkama makinesini seçin.',
    answer: 'Zemin yıkama makinesi seçerken temizlenecek net alan, en dar geçiş, zemin türü, baskın kir, günlük çalışma süresi, enerji altyapısı ve servis erişimi birlikte değerlendirilmelidir.',
    sections: [
      {title:'Önce sahanın kullanılabilir ölçülerini çıkarın',paragraphs:['Toplam bina alanı ile her gün temizlenecek net zemin aynı değildir. Raf, makine, stant ve kapalı bölgeler çıkarıldıktan sonra gerçek temizlik alanı hesaplanmalıdır.','Kapılar, asansörler, rampalar ve dönüş noktaları ayrıca ölçülerek makinenin sahada kesintisiz hareket edip edemeyeceği doğrulanır.']},
      {title:'Kapasiteyi çalışma penceresiyle eşleştirin',paragraphs:['Bir makinenin teorik verimi tek başına yeterli değildir. Temizlik için ayrılan süre, su dolumu, boşaltma, şarj ve vardiya değişimi toplam operasyon süresine eklenmelidir.','Dar ve engelli sahada kompakt bir itmeli model, katalog değeri yüksek fakat manevrası sınırlı bir makineden daha verimli olabilir.'],bullets:['Net temizlenecek metrekare','Günlük temizlik süresi','Dolum ve boşaltma noktası','Şarj alanı ve elektrik altyapısı']},
      {title:'Satış sonrası süreci seçim kriteri yapın',paragraphs:['Sarf parçalarının bulunabilirliği, servis kaydı, kullanıcı eğitimi ve garanti kapsamı makinenin kullanım ömrü boyunca önemlidir. Teknik özellikler teklif öncesinde güncel üretici belgesiyle doğrulanmalıdır.','Mümkünse gerçek zeminde deneme yapılarak fırçalama, su toplama, dönüş ve operatör görüşü gözlenmelidir.']}
    ],
    checklist:['Net alanı ve en dar geçişi ölçün.','Kir ve zemin türünü kaydedin.','Çalışma süresi ile teorik kapasiteyi karşılaştırın.','Servis ve sarf parça erişimini sorun.','Gerçek sahada demonstrasyon isteyin.']
  },
  {
    slug: 'binicili-ve-itmeli-makine-farklari',
    title: 'Binicili ve İtmeli Zemin Yıkama Makinesi Farkları',
    description: 'Binicili ve itmeli zemin yıkama makinelerini alan, manevra, operatör, kapasite ve toplam kullanım düzeni açısından karşılaştırın.',
    answer: 'İtmeli makineler dar ve orta ölçekli alanlarda manevra kolaylığı sağlar. Binicili makineler geniş ve açık sahalarda operatör konforu ile daha yüksek çalışma kapasitesi sunar.',
    sections: [
      {title:'Manevra ve erişim farkı',paragraphs:['İtmeli modeller raf araları, küçük mağazalar, asansörler ve sık dönüş gereken alanlarda daha kolay konumlandırılabilir. Binicili modellerin gövde ve dönüş alanı daha büyüktür; buna karşılık uzun koridorlarda daha az fiziksel eforla çalışılır.','Seçimde en dar geçiş, rampa, kapı ve silecek genişliği birlikte ölçülmelidir.']},
      {title:'Verim ve operatör yükü',paragraphs:['Geniş sahada yürüyen operatörün yorulması gerçek verimi düşürebilir. Binicili makine uzun vardiyada konfor sağlayabilir; ancak kalabalık alanda sık dur-kalk ve manevra teorik avantajı azaltır.','Günlük alan ile temizlik için ayrılan zaman, makine sınıfı kararının temelini oluşturmalıdır.'],bullets:['İtmeli: kompakt alan ve yoğun engel','Binicili: uzun koridor ve geniş açık saha','Her ikisi: uygun şarj, bakım ve operatör eğitimi']},
      {title:'Toplam işletme koşullarını karşılaştırın',paragraphs:['Tank kapasitesi, şarj süresi, depolama alanı, taşıma ihtiyacı ve servis erişimi kullanım maliyetini etkiler. Sadece satın alma fiyatına veya teorik metrekare değerine göre karar verilmemelidir.','Gerçek sahada kısa bir deneme, iki sınıf arasındaki farkı en açık biçimde gösterir.']}
    ],
    checklist:['En dar geçiş ve dönüş alanını ölçün.','Operatörün vardiya süresini belirleyin.','Günlük net temizlenecek alanı hesaplayın.','Depolama ve şarj alanını kontrol edin.','İki makine sınıfını sahada karşılaştırın.']
  },
  {
    slug: 'zemin-yikama-makinesi-bakimi',
    title: 'Zemin Yıkama Makinesi Günlük Bakımı',
    description: 'Tank, silecek, fırça, filtre, hortum ve akü kontrolleriyle zemin yıkama makinesinin günlük bakımını doğru sırada uygulayın.',
    answer: 'Günlük bakımın temel amacı kirli su ve kimyasal kalıntılarını makinede bırakmamak, aşınan parçaları erken fark etmek ve bir sonraki vardiyaya güvenli bir makine teslim etmektir.',
    sections: [
      {title:'Tank ve emiş sistemini temiz bırakın',paragraphs:['Kirli su tankı kullanım sonunda boşaltılmalı ve temiz suyla durulanmalıdır. Şamandıra, filtre ve emiş ağzındaki birikintiler üretici talimatına uygun biçimde temizlenir.','Hortum kıvrımları, bağlantı noktaları ve kapak contaları gözle kontrol edilir. Kaçak veya tıkanma, zeminde su izi kalmasına neden olabilir.']},
      {title:'Fırça ve silecek aşınmasını izleyin',paragraphs:['Fırça veya ped sökülerek ip, streç ve lif kalıntılarından arındırılır. Tek taraflı aşınma bağlantı veya basınç ayarının kontrol edilmesini gerektirebilir.','Silecek lastiğinin temiz ve düzgün kenarlı olması su toplama performansı için önemlidir. Hasarlı lastik üreticiye uygun parçayla değiştirilmelidir.'],bullets:['Fırçada yabancı madde','Pedde düzensiz aşınma','Silecekte yırtık veya dalgalanma','Tekerleklerde sarılı atık']},
      {title:'Aküyü doğru koşullarda şarj edin',paragraphs:['Şarj işlemi akü teknolojisi, şarj cihazı ve üretici güvenlik talimatına göre yapılmalıdır. Kablo ve soketlerde ısınma, gevşeklik veya renk değişimi görülürse ekipman kullanılmadan servis değerlendirmesi istenir.','Bakım tamamlandığında tarih, çalışma saati ve tespit edilen durum kayıt altına alınmalıdır.']}
    ],
    checklist:['Kirli su tankını boşaltıp durulayın.','Filtre ve emiş hattını kontrol edin.','Fırça, ped ve sileceği temizleyin.','Aküyü uygun cihaz ve alanda şarj edin.','Bakım kaydını makine seri numarasıyla saklayın.']
  }
];

export type SectorPage = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  conditions: string[];
  method: string;
  machineFocus: string;
};

export const sectorPages: SectorPage[] = [
  {slug:'fabrika',name:'Fabrikalar',title:'Fabrikalar İçin Zemin Temizliği',description:'Üretim alanlarında yağ, toz, vardiya ve forklift trafiğine göre fabrika zemin yıkama makinesi seçimi ve temizlik planı.',intro:'Fabrika temizliği üretim akışından ayrı düşünülemez. Hat çevresi, sevkiyat, yaya yolları ve hammadde alanları farklı kir yüküne sahip olduğundan saha bölgelere ayrılmalıdır.',conditions:['Yağ, metal talaşı ve üretim tozu','Forklift ve yaya trafiği','Vardiya arasında sınırlı temizlik süresi','Epoksi veya beton yüzeyler'],method:'İri atıklar yıkama öncesinde alınır; kayma riski bulunan bölgeler işaretlenir. Gerçek verim, su dolumu ve dönüş süreleri dahil edilerek deneme çalışmasında ölçülür.',machineFocus:'Geniş ve açık üretim sahalarında binicili modeller; dar hat aralarında kompakt itmeli modeller değerlendirilir.'},
  {slug:'avm',name:'AVM’ler',title:'AVM’ler İçin Zemin Temizliği',description:'Yoğun ziyaretçi trafiği, parlak yüzeyler ve çalışma saatlerine göre AVM zemin yıkama makinesi seçimi.',intro:'AVM temizliği ziyaretçi güvenliği, düşük ses seviyesi ve zeminin kısa sürede yeniden kullanıma açılması üzerine kurulmalıdır. Girişler, yemek alanları ve koridorlar ayrı programlanır.',conditions:['Yoğun yaya trafiği ve kayma riski','Parlak taş, seramik veya kompozit yüzey','Gece ve erken saatlerde çalışma','Asansör ve dar servis geçişleri'],method:'Alan ziyaretçiye kapatılır, uygun uyarılar yerleştirilir ve su toplama sonucu her geçişte kontrol edilir. Kullanılan kimyasal yüzey üreticisinin bakım talimatıyla uyumlu olmalıdır.',machineFocus:'Ana koridorlarda sessiz binicili; mağaza çevresi ve dar geçişlerde manevrası yüksek itmeli makineler uygundur.'},
  {slug:'depo',name:'Depolar',title:'Depolar İçin Zemin Temizliği',description:'Raf koridorları, palet hareketleri ve sevkiyat trafiğine göre depo zemin yıkama makinesi seçimi.',intro:'Depoda toplam alan kadar koridor genişliği, raf başı dönüşü ve sevkiyat zamanı önemlidir. Streç ve karton gibi iri atıklar yıkama öncesinde toplanmalıdır.',conditions:['Dar raf koridorları','Forklift ve transpalet trafiği','Palet kaynaklı toz ve ambalaj atığı','Beton veya epoksi zemin'],method:'Gövde, fırça ve silecek genişliği ayrı ölçülür. Temizlik, sevkiyatın düşük olduğu zaman diliminde planlanır ve kör noktalarda güvenli geçiş prosedürü uygulanır.',machineFocus:'Dar koridorlarda kompakt itmeli; uzun ve açık koridorlarda dönüş alanı yeterliyse binicili modeller değerlendirilir.'},
  {slug:'otopark',name:'Otoparklar',title:'Otoparklar İçin Zemin Temizliği',description:'Rampa, lastik izi, egzoz tozu ve araç trafiğine göre otopark zemin yıkama makinesi seçimi.',intro:'Otoparklarda lastik izi, egzoz kaynaklı ince toz ve dış ortamdan taşınan kir aynı anda bulunabilir. Rampalar ve düşük tavanlı alanlar makine seçiminde kritik ölçütlerdir.',conditions:['Rampalar ve eğimli geçişler','Lastik izi ve yağ lekesi','Araç trafiği ve düşük görüş','Pürüzlü beton yüzey'],method:'Temizlik bölgesi araç trafiğine karşı ayrılır. Eğim kapasitesi üretici verisinden doğrulanır; zeminde su bırakmayan emiş performansı özellikle rampalarda test edilir.',machineFocus:'Geniş katlarda binicili makineler; kolon araları ve ödeme noktalarında kompakt modeller birlikte planlanabilir.'},
  {slug:'hastane',name:'Hastaneler',title:'Hastaneler İçin Zemin Temizliği',description:'Hijyen protokolü, düşük ses, dar koridor ve kesintisiz erişime göre hastane zemin temizleme makinesi seçimi.',intro:'Hastanelerde makine seçimi yalnızca temizlik kapasitesine değil; düşük ses, kontrollü kimyasal kullanımı, kolay dezenfeksiyon ve hasta trafiğine uyuma dayanır.',conditions:['Kesintisiz yaya ve ekipman trafiği','Düşük ses gereksinimi','Hijyen protokolleri','Asansör ve dar koridorlar'],method:'Temiz ve kirli alan akışı kurumun enfeksiyon kontrol prosedürüne göre ayrılır. Tank, fırça ve ekipman temizliği her kullanım bölgesi için kayıtlı yürütülür.',machineFocus:'Dar koridor ve asansörlerde kompakt, düşük sesli itmeli makineler; geniş ortak alanlarda kontrollü binicili modeller düşünülebilir.'},
  {slug:'otel',name:'Oteller',title:'Oteller İçin Zemin Temizliği',description:'Lobi, servis koridoru, mutfak ve etkinlik alanlarına göre otel zemin yıkama makinesi seçimi.',intro:'Otellerde görünür alanların sessiz ve iz bırakmadan temizlenmesi gerekir. Lobi, mutfak, balo salonu ve servis koridorlarının zeminleri farklı bakım yaklaşımı ister.',conditions:['Misafir trafiği ve düşük ses','Parlak lobi yüzeyleri','Mutfakta yağlı kir','Dar servis koridorları'],method:'Temizlik saatleri doluluk programıyla eşleştirilir. Görünür alanlarda küçük bir deneme ile iz, parlaklık ve su toplama sonucu kontrol edilir.',machineFocus:'Lobi ve koridorlarda sessiz kompakt makineler; geniş etkinlik alanlarında daha yüksek kapasiteli seçenekler değerlendirilebilir.'},
  {slug:'market',name:'Marketler',title:'Marketler İçin Zemin Temizliği',description:'Raf koridorları, ürün dökülmeleri ve yoğun müşteri trafiğine göre market zemin yıkama makinesi seçimi.',intro:'Marketlerde dar raf araları ile geniş ana koridorlar aynı vardiyada temizlenir. Dökülmelere hızlı müdahale ve zeminin kısa sürede kuruması güvenlik açısından önemlidir.',conditions:['Raf aralarında sınırlı dönüş alanı','Gıda ve sıvı dökülmeleri','Uzun çalışma saatleri','Müşteri ve stok arabası trafiği'],method:'Dökülme prosedürü günlük programa eklenir. Silecek performansı, raf diplerine erişim ve gıda alanlarında kullanılan kimyasalın uygunluğu düzenli kontrol edilir.',machineFocus:'Kompakt itmeli modeller raf aralarında; yeterli açıklığa sahip büyük mağazalarda küçük binicili modeller ana koridorlarda kullanılabilir.'},
  {slug:'okul',name:'Okullar',title:'Okullar İçin Zemin Temizliği',description:'Ders programı, koridorlar, spor salonu ve güvenli kimyasal kullanımına göre okul zemin temizleme makinesi seçimi.',intro:'Okullarda temizlik, ders ve etkinlik saatleri dışında kısa zaman aralıklarında tamamlanır. Koridor, yemekhane ve spor salonu farklı yüzey ve kir türlerine sahiptir.',conditions:['Kısa temizlik pencereleri','Dar koridor ve sınıf girişleri','Yemekhane kaynaklı kir','Spor salonunda hassas yüzey'],method:'Alan kullanıma kapatılır ve zeminin tamamen kuru olduğu doğrulanmadan yeniden açılmaz. Kimyasal ve ped seçimi yüzey üreticisinin bakım talimatına göre yapılır.',machineFocus:'Koridor ve sınıf çevresinde kompakt itmeli; geniş spor salonlarında yüzeye uygun pedli makineler tercih edilir.'},
  {slug:'belediye',name:'Belediyeler',title:'Belediyeler İçin Zemin Temizliği',description:'Kamu binaları, kültür merkezleri ve çok amaçlı tesislerde belediye zemin temizleme makinesi planlaması.',intro:'Belediye tesislerinde farklı binalar, yüzeyler ve kullanıcı yoğunlukları tek ekip tarafından yönetilebilir. Taşınabilirlik, operatör eğitimi ve servis erişimi bu nedenle önem kazanır.',conditions:['Birden fazla tesis ve yüzey türü','Değişken ziyaretçi yoğunluğu','Kamu ihale ve kayıt süreçleri','Ortak operatör kullanımı'],method:'Her tesis için alan, zemin ve kullanım sıklığı envanteri hazırlanır. Makine zimmet, bakım ve servis kayıtları seri numarası bazında tutulur.',machineFocus:'Farklı tesislerde kullanılacak kompakt, kolay taşınabilir modeller ile büyük salonlar için yüksek kapasiteli seçenekler ayrı planlanır.'},
  {slug:'lojistik',name:'Lojistik Merkezleri',title:'Lojistik Merkezleri İçin Zemin Temizliği',description:'Yükleme alanı, uzun koridor, yoğun araç trafiği ve vardiyalı çalışmaya göre lojistik merkezi zemin temizliği.',intro:'Lojistik merkezlerinde uzun koridorlar yüksek kapasite avantajı sağlarken, kesintisiz sevkiyat makinenin çalışabileceği zamanı sınırlar. Dış sahadan taşınan kir ve ambalaj atığı birlikte yönetilmelidir.',conditions:['Uzun koridor ve geniş yükleme alanı','Kesintisiz forklift trafiği','Dış ortamdan taşınan kum ve çamur','Streç, karton ve palet artığı'],method:'Yıkamadan önce iri atık ve toz için süpürme planlanır. Trafik yönüyle uyumlu temizlik rotası hazırlanır; şarj ve su işlemleri vardiya değişimine yerleştirilir.',machineFocus:'Geniş ve uzun rotalarda binicili veya kombine makineler; ofis ve ara bölümlerde kompakt itmeli modeller kullanılır.'}
];

export type MachineSeo={slug:string;name:string;alternateName?:string[];kind:string;description:string;image:string;imageAlt:string;specs:[string,string][]};

export const machineSeo:MachineSeo[] = [
  {slug:'ecoline-titan-90-binicili-zemin-yikama-makinesi',name:'Ecoline Titan 90',alternateName:['Ecoline X68','Titan 90'],kind:'Binicili',description:'Ecoline Titan 90; çift 330 mm fırçası, 75/80 litre tankları, 920 mm sileceği ve 4650 m²/saat çalışma kapasitesiyle kompakt binicili zemin yıkama makinesidir.',image:'/titan90-showcase-v2.webp',imageAlt:'Berker Makine Ecoline Titan 90 binicili zemin yıkama makinesi',specs:[['Fırça çapı','2 × 330 mm'],['Çalışma kapasitesi','4650 m²/saat'],['Temiz/Kirli su','75/80 litre'],['Silecek genişliği','920 mm'],['Sürüş hızı','1–12 km/sa'],['Boyutlar','1400 × 920 × 1100 mm']]},
  {slug:'ecoline-titan-140-binicili-zemin-yikama-makinesi',name:'Ecoline Titan 140',alternateName:['Ecoline X86','Titan 140'],kind:'Binicili',description:'Ecoline Titan 140; çift 405 mm fırçası, 120/125 litre tankları, 1080 mm sileceği ve 6450 m²/saat çalışma kapasitesiyle geniş alanlara yönelik binicili zemin yıkama makinesidir.',image:'/titan140-showcase-v2.webp',imageAlt:'Berker Makine Ecoline Titan 140 binicili zemin yıkama makinesi',specs:[['Fırça çapı','2 × 405 mm'],['Çalışma kapasitesi','6450 m²/saat'],['Temiz/Kirli su','120/125 litre'],['Silecek genişliği','1080 mm'],['Sürüş hızı','1–12 km/sa'],['Boyutlar','1620 × 1020 × 1280 mm']]},
  {slug:'ecoline-titan-240-binicili-zemin-yikama-makinesi',name:'Ecoline Titan 240',alternateName:['Ecoline X96','Titan 240'],kind:'Binicili',description:'Ecoline Titan 240; çift 460 mm fırçası, 170/175 litre tankları, 1200 mm sileceği ve 7980 m²/saat çalışma kapasitesiyle büyük sahalara yönelik binicili zemin yıkama makinesidir.',image:'/titan240-showcase-v2.webp',imageAlt:'Berker Makine Ecoline Titan 240 binicili zemin yıkama makinesi',specs:[['Fırça çapı','2 × 460 mm'],['Çalışma kapasitesi','7980 m²/saat'],['Temiz/Kirli su','170/175 litre'],['Silecek genişliği','1200 mm'],['Sürüş hızı','1–12 km/sa'],['Boyutlar','1800 × 1100 × 1350 mm']]},
  {slug:'ecoline-b60-zemin-temizleme-makinasi',name:'Berker Ecoline B60',kind:'İtmeli',description:'510 mm fırça genişliği, 55/60 litre tank kapasitesi ve akülü yapısıyla profesyonel itmeli zemin temizleme makinesi.',image:'/b60-showcase.webp',imageAlt:'Berker Ecoline B60 akülü itmeli zemin temizleme makinesi',specs:[['Fırça genişliği','510 mm'],['Çalışma kapasitesi','2000 m²/saat'],['Temiz/Kirli su','55/60 litre']]},
  {slug:'ecoline-b250-binicili-zemin-temizleme-otomati',name:'Berker Ecoline B250',kind:'Binicili',description:'1040 mm çift fırça, 230/235 litre tank ve 9450 m²/saat teorik kapasiteye sahip yüksek kapasiteli binicili zemin temizleme otomatı.',image:'/b250-showcase.webp',imageAlt:'Berker Ecoline B250 yüksek kapasiteli binicili zemin temizleme otomatı',specs:[['Fırça genişliği','1040 mm'],['Çalışma kapasitesi','9450 m²/saat'],['Temiz/Kirli su','230/235 litre']]},
  {slug:'berker-ecoline-b45-akulu-itmeli-zemin-otomati',name:'Berker Ecoline B45',kind:'İtmeli',description:'510 mm fırça, 40/45 litre tank ve 3–4 saat çalışma desteği sunan akülü itmeli zemin otomatı.',image:'/b45-showcase.webp',imageAlt:'Berker Ecoline B45 akülü itmeli zemin yıkama makinesi',specs:[['Fırça genişliği','510 mm'],['Çalışma kapasitesi','2150 m²/saat'],['Temiz/Kirli su','40/45 litre']]},
  {slug:'ecoline-b140-binicili-zemin-temizleme-makinasi',name:'Berker Ecoline B140',kind:'Binicili',description:'860 mm çift fırça, 125/130 litre tank ve kompakt sürüş yapısıyla profesyonel binicili zemin temizleme makinesi.',image:'/b140-showcase.webp',imageAlt:'Berker Ecoline B140 binicili zemin temizleme makinesi',specs:[['Fırça genişliği','860 mm'],['Çalışma kapasitesi','5500 m²/saat'],['Temiz/Kirli su','125/130 litre']]}
];

export {spareParts as sparePartSeo} from './product-data';
