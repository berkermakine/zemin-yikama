# Zeminyikama.com – Proje Durumu ve Kalan İşler

Son kayıt: 1 Eylül 2026, 16:43 için hazırlanmıştır.

## Güncel durum

- Production derlemesi başarıyla tamamlandı.
- Hostinger uyumlu standalone çıktı üretildi: `.next/standalone/server.js`.
- Canlıya yükleme bu son politika çalışmasından sonra henüz yapılmadı.
- Mevcut SEO başlıkları, açıklamalar, canonical, robots, Open Graph ve schema alanları değiştirilmedi.
- Merchant ürün feed'i ve mevcut ürün sistemi korunmuştur.

## Tamamlanan politika çalışmaları

- `/iade-ve-iptal-politikasi`
- `/teslimat-ve-kargo`
- `/mesafeli-satis-sozlesmesi`
- `/on-bilgilendirme-formu`
- `/gizlilik-politikasi`
- `/kvkk`
- `/cerez-politikasi`
- `/kullanim-kosullari`
- `/iade-politikasi` adresinden ana iade politikasına kalıcı yönlendirme
- Footer'a bütün politika sayfaları ve iletişim bağlantıları
- Politika sayfaları sitemap kaydı
- Her politika sayfası için ayrı title, description, canonical ve Open Graph üretimi
- İletişim sayfasına ticari işletme unvanı ve açık adres

## Tamamlanan teslimat ve kargo düzenlemeleri

- Standart ifade: **1-3 iş günü içerisinde teslimat**
- Standart kargo ücreti: **350 TL**
- **8.000 TL ve üzeri** siparişlerde ücretsiz kargo
- Ürün detay sayfalarına üç maddelik teslimat/kargo bilgi kutusu
- Ürün detaylarına teslimat ve iade politikası bağlantıları
- Sepet ve ödeme ekranlarında kargo hesabı
- Kupon uygulandıktan sonraki ara toplam üzerinden ücretsiz kargo sınırı hesabı
- Sipariş özetinde ara toplam, kargo, teslimat ve genel toplam
- WhatsApp sipariş metninde kargo, teslimat ve toplam bilgileri
- Ödeme ekranında Ön Bilgilendirme Formu, Mesafeli Satış Sözleşmesi ve İade Politikası bağlantıları
- Yasaklanan “3 günde teslim”, “3 gün içerisinde teslim” ve “3 iş gününde teslim” ifadeleri proje içinde bulunmuyor.

## Önceden tamamlanmış ve korunacak çalışmalar

- Yedek parça Product + Offer schema düzenlemeleri
- Merchant Center XML ürün feed'i
- Yedek parça kategori ItemList yapısı
- Ürün canonical ve Open Graph görselleri
- Admin panelinde sunucu tarafı ürün, fiyat, stok, görsel, kupon ve sipariş kayıt sistemi
- WhatsApp siparişlerinin admin paneline kaydedilmesi
- Mobil admin paneli düzeni
- Blog görsellerinin Berker Makine ürün görselleriyle güncellenmesi
- İletişim haritası ve sosyal medya alanı

## Tamamlanan production testleri

- Standalone production sunucusu lokalde çalıştırıldı.
- Sekiz politika sayfası doğrudan HTTP isteğinde 200 verdi.
- `/yedek-parca` → HTTP 200
- `/yedek-parca/urun/firca-diski-17-orta-sert` → HTTP 200
- `/odeme` → HTTP 200
- `/iletisim` → HTTP 200
- `/sitemap.xml` → HTTP 200
- `/merchant-products.xml` → HTTP 200
- `/iade-politikasi` → HTTP 308 ile `/iade-ve-iptal-politikasi` adresine yönleniyor.
- Sekiz politika sayfasında birbirinden farklı title, canonical ve Open Graph başlığı doğrulandı.
- Sitemap içinde sekiz politika URL'si doğrulandı.

## Kalan işler

1. Masaüstü ve mobil son görsel kontrolü.
2. Sepette 8.000 TL altı için 350 TL, 8.000 TL ve üzeri için ücretsiz kargo hesabının etkileşimli tarayıcı kontrolü.
3. Son farkları yalnızca ilgili dosyalarla commit etmek; kullanıcıya ait ilişkisiz dosyalara dokunmamak.
4. Kullanıcı onayı veya açık canlıya alma talebiyle GitHub'a göndermek ve Hostinger otomatik dağıtımını kontrol etmek.

## Firma tarafından tamamlanması gereken bilgiler

Aşağıdaki bilgiler uydurulmadı ve politika metinlerinde açık yer tutucu olarak bırakıldı:

- Vergi numarası
- MERSİS numarası

Bu bilgiler firma yetkilisi tarafından sağlandığında `app/legal-content.ts` içindeki `SELLER` alanına yazılmalıdır.

## Hukuki son kontrol

Metinler güncel tüketici ve KVKK gerekliliklerine uyum odaklı hazırlanmıştır; hukuki danışmanlık veya reddedilmeme garantisi değildir. Canlı yayın ve Merchant Center incelemesi öncesinde firma bilgileri tamamlanmalı ve metinler bir hukuk uzmanına kontrol ettirilmelidir.

## Bu çalışmada değiştirilen dosyalar

- `app/legal-content.ts`
- `app/[...slug]/page.tsx`
- `app/components/SiteShell.tsx`
- `app/components/ShopSystem.tsx`
- `app/lib/shop-store.ts`
- `app/site.css`
- `app/shop.css`
- `app/sitemap.ts`
- `next.config.ts`
