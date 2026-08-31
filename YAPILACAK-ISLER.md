# Zeminyikama.com — Yapılacak İşler

Bu dosya projenin kalıcı görev ve doğrulama kaydıdır. Yeni istekler önce buraya eklenir; çalışma tamamlandıkça durumları güncellenir.

## Durum Anahtarı

- `[ ]` Yapılacak
- `[-]` Çalışılıyor
- `[x]` Tamamlandı
- `🧪` Yerelde doğrulanacak
- `✅` Yerelde doğrulandı
- `🚀` Canlıya alındı

## Yayın Kuralı

- Canlıya yayınlama işlemi kullanıcı yerel sürümü kontrol edip açıkça onay vermeden yapılmayacak.

## Tamamlanan Product Schema ve Teknik SEO Çalışmaları

- [x] Yedi makine sayfasındaki hatalı/eksik `Product` işaretlemesini kaldır; makine sayfalarını `WebPage + Thing` olarak koru. ✅
- [x] Sekiz yedek parça sayfasında gerçek verilerden dinamik `Product + Offer` üret. ✅
- [x] Fiyat, `TRY`, stok durumu, `NewCondition`, marka, SKU, canonical ve mutlak HTTPS görsel alanlarını doğrula. ✅
- [x] GTIN/MPN gibi bilinmeyen alanları uydurma. ✅
- [x] Ürün detayında marka, stok ve ürün durumunu görünür yap. ✅
- [x] Yedek parça listesine sekiz ürünlü `ItemList` ekle. ✅
- [x] Sekiz ürünlü Merchant Center XML feed oluştur. ✅
- [x] Title, description, H1, canonical, OG görseli ve breadcrumb yapılarını doğrula. ✅
- [x] Production build ve schema testleri başarıyla tamamlandı. ✅

## Öncelikli Sorunlar

- [x] Admin paneli ilk giriş denemesinde görünen yanlış “Bağlantı kurulamadı” durumunu oturum yeniden doğrulamasıyla gider. ✅
- [x] Admin panelinden değiştirilen ürün fiyatının farklı tarayıcı ve oturumlarda kalıcı olarak görünmesini sağla. ✅
- [x] Admin panelinden yeni ürün ekleme ve ürün kaldırma işlemlerinin farklı oturumlarda kalıcı olduğunu doğrula. ✅
- [x] Kategori, marka, stok, kupon, ayar ve sipariş kayıtlarını sunucu tarafında kalıcı hale getir. ✅
- [x] Kupon oluşturma ve indirim hesaplama akışını gerçek API üzerinden doğrula. ✅
- [x] WhatsApp üzerinden oluşturulan örnek siparişin admin paneline düştüğünü doğrula. ✅
- [x] Sipariş durumunun admin panelinden değiştirilmesini ve test siparişinin temizlenmesini doğrula. ✅
- [x] Ürün görseli yükleme ve yüklenen görseli sunucudan tekrar sunma akışını doğrula. ✅

## İçerik ve Görsel İşleri

- [x] Kullanıcının verdiği yedi yeni Berker Makine görselini blog kartlarına uygula. ✅
- [x] B45, B140, Titan 90, Titan 140, Titan 240, B250 ve B60 blog görsellerini 1536×1024 WebP olarak optimize et. ✅
- [x] Blog kartı ile aynı yazının iç kapağında aynı görseli kullan. ✅
- [x] Masaüstü ve mobilde kırpılmadan tam görünmesi için blog görsellerini 3:2 oran ve `object-fit: contain` ile yerleştir. ✅
- [x] İlk blog kartını masaüstünde öne çıkan geniş kart, mobilde normal tek sütun kart yap. ✅
- [x] Telegram, YouTube, BiP, Instagram ve Facebook bağlantılarını ana sayfadan kaldırıp iletişim sayfasına taşı. ✅
- [x] İletişim sayfasına kalın “Sosyal Medya Hesaplarımız” başlığı ve marka simgeleri ekle. ✅
- [x] İletişim sayfasına Berker Temizlik Araçları Google Haritası ekle. ✅
- [x] Fırça Diski 17 İnç Orta Sert ürününün deneme görselini kaldırıp eski `/parts/part-0.webp` görselini kalıcı depoda geri yükle. ✅
- [ ] Kullanıcının masaüstü ve mobil görsel kontrolü.

## Mobil Admin Paneli

- [x] Mobilde yatay kaydırılan yönetim sekmelerini kaldır. ✅
- [x] Mobil site düzenine uygun sabit hamburger/menü çubuğu ekle. ✅
- [x] Açılır yönetim menüsüne tüm admin bölümlerini iki sütunlu, rahat dokunulan düğmelerle yerleştir. ✅
- [x] Menü dışına dokununca kapanan arka plan katmanı ve erişilebilir `aria-expanded` durumu ekle. ✅
- [x] Ürün tablosu, düzenleme formu, istatistikler ve yönetim listelerini mobil tek sütun düzeninde koru. ✅
- [x] Hareket azaltma tercihini destekle. ✅

## Son Kontroller

- [ ] Masaüstü görünümünü kontrol et.
- [ ] Mobil görünümü kontrol et.
- [x] Üretim derlemesini çalıştır. ✅
- [ ] Yerel bağlantıları kullanıcıya sun ve onay bekle.
- [ ] Kullanıcı onayından sonra canlıya yayınla.

## Sosyal Medya Bağlantıları

- Telegram: <https://web.telegram.org/k/#/im?p=@BerkerMakine>
- YouTube: <https://www.youtube.com/channel/UC69kmlibDul1XBaHWMlg-OQ>
- BiP: <https://channels.bip.ai/join/berkermakine>
- Instagram: <https://www.instagram.com/berkermakine/>
- Facebook: <https://www.facebook.com/BerkerMakine>

## Notlar

- Admin değişiklikleri yalnızca tarayıcı belleğinde tutulmayacak; sunucu tarafındaki kalıcı depoya yazılacak.
- Yerel kontrolde fiyat ve ürün ekleme işlemi iki ayrı tarayıcı oturumu gibi davranan bağımsız isteklerle doğrulanacak.
