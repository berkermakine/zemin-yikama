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

- [x] Blog kapaklarında Titan 90, Titan 140 ve Titan 240 makine görsellerini kullan. ✅
- [x] Blog görsellerinde makinenin kutuya taşmadan oturması için `object-fit: contain` uygula. ✅
- [x] Ana sayfaya Telegram, YouTube, BiP, Instagram ve Facebook bağlantıları ekle. ✅
- [x] İletişim sayfasına Berker Temizlik Araçları Google Haritası ekle. ✅
- [ ] Kullanıcının masaüstü ve mobil görsel kontrolü.

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
