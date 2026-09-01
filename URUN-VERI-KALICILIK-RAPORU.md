# Zeminyikama.com – Ürün Verisi Kalıcılık Raporu

Tarih: 1 Eylül 2026

## Production ürün verisi nerede tutuluyor?

- Cloudflare/Sites ortamında `DB` binding'i varsa ürün ve yapılandırma verileri D1 veritabanındaki `shop_state` tablosunda, siparişler `orders` tablosunda tutulur. Ürün görselleri `MEDIA` binding'i üzerinden R2 içinde tutulur.
- Hostinger/Node ortamında D1 bulunmadığı için önceki uygulama ürün, yapılandırma ve siparişleri varsayılan olarak deployment klasörü altındaki `data/shop-store.json` dosyasında; yüklenen görselleri `data/uploads` altında tutuyordu.
- Düzeltmeden sonra Hostinger/Node production ortamının varsayılan kalıcı deposu deployment klasörünün dışındaki `$HOME/.zeminyikama/shop-store.json`, görsel deposu `$HOME/.zeminyikama/uploads` dizinidir.
- İstenirse `SHOP_DATA_FILE` ve `SHOP_UPLOAD_DIR` ortam değişkenleriyle başka bir kalıcı sunucu dizini açıkça seçilebilir.

## Deploy neden eski veriyi getirebiliyordu?

Ürün JSON'u ve yüklenen görseller uygulamanın release/deployment klasörünün içindeydi. Hostinger yeni release oluşturduğunda veya proje klasörünü yenilediğinde bu çalışma zamanı dosyası taşınmayabiliyor; dosya bulunamadığında uygulama `app/product-data.ts` içindeki başlangıç ürünlerini gösteriyordu. Bu, admin değişikliklerinin kaybolmuş ve eski ürünlerin geri gelmiş görünmesine yol açabiliyordu.

## Seed/default veri davranışı

- Mevcut kalıcı D1 kaydı veya JSON dosyası varsa başlangıç ürünleri kesinlikle üzerine yazılmaz.
- Kalıcı JSON yalnızca gerçekten bulunmuyorsa başlangıç ürünleri geçici ilk durum olarak kullanılır.
- Eski `data/shop-store.json` mevcutsa, yeni kalıcı konuma yalnızca bir kez ve içeriği korunarak taşınır.
- Bozuk veya eksik mevcut JSON/D1 kaydı başlangıç verileriyle sessizce değiştirilmez; sistem hata vererek mevcut kaydı korur.
- Her JSON güncellemesinden önce kalıcı `backups` dizinine otomatik yedek alınır ve son 20 yedek korunur.
- Eş zamanlı ürün, yapılandırma ve sipariş yazımlarının birbirini ezmemesi için dosya güncellemeleri sıraya alınır.
- `data/shop-store.json`, geçici dosyası ve `data/uploads` deployment paketinden hariç tutulmuştur.

## Canlı ürün yedeği

Canlı `https://www.zeminyikama.com/api/shop/products` adresi salt okunur olarak alınmış ve sekiz ürünün mevcut adı, fiyatı, stoğu, açıklaması, görseli, kategorisi ve markası şu dosyada yedeklenmiştir:

`backups/live-products-before-persistence-2026-09-01.json`

Bu dosya kurtarma yedeğidir; uygulama başlangıcında mevcut storage üzerine otomatik yazılmaz.

## Deploy sonrası veri kalıcılığı testi

**Başarılı**

Test adımları:

1. Production standalone sunucu ayrı test storage'ıyla çalıştırıldı.
2. `FD17-OS` ürün fiyatı geçici olarak 1.250 TL'den 1.267 TL'ye değiştirildi.
3. JSON storage kaydının 1.267 TL olduğu doğrulandı.
4. Uygulama durduruldu.
5. Production build ve Hostinger standalone hazırlama işlemi yeniden çalıştırıldı.
6. Build öncesi ve sonrası storage SHA-256 değerlerinin aynı olduğu doğrulandı.
7. Uygulama yeni build ile yeniden başlatıldı.
8. Ürün fiyatının hâlâ 1.267 TL olduğu doğrulandı.
9. Geçici fiyat tekrar 1.250 TL'ye getirildi ve doğrulandı.
10. Yazma öncesi otomatik yedek oluştuğu doğrulandı.

## Regresyon kontrolleri

- Product Schema fiyatı: başarılı, kalıcı storage ile eşleşiyor.
- Merchant XML fiyatı: başarılı, kalıcı storage ile eşleşiyor.
- Admin giriş ve admin-state: başarılı.
- Sipariş oluşturma ve admin panelinde görüntüleme: başarılı.
- Test siparişi temizlendi: başarılı.
- Production build: başarılı.
- `git diff --check`: başarılı.

## Mevcut canlı ürünler korundu

**Evet.** Canlı ürünlere yazma, silme veya reset işlemi yapılmadı. Yalnızca herkese açık ürün API'si salt okunur şekilde yedeklendi.

## Değiştirilen dosyalar

- `app/lib/shop-store.ts`
- `app/api/shop/images/route.ts`
- `app/api/shop/images/[key]/route.ts`
- `.env.example`
- `.gitignore`
- `backups/live-products-before-persistence-2026-09-01.json`
- `URUN-VERI-KALICILIK-RAPORU.md`

## Canlıya almadan önce zorunlu deployment notu

Hostinger Node uygulamasında `$HOME` kalıcı ve yazılabilir olmalıdır. Bu Hostinger hesabında farklı bir kalıcı veri dizini kullanılıyorsa `SHOP_DATA_FILE` ve `SHOP_UPLOAD_DIR` değerleri deployment klasörü dışında kalan o dizine ayarlanmalıdır. İlk canlı geçişte mevcut release içindeki `data/shop-store.json` bulunuyorsa uygulama bunu otomatik taşır; buna rağmen canlı API yedeği ayrıca korunmaktadır.
