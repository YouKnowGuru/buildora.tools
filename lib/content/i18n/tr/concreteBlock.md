## Briket ve Beton Blok Hesaplayıcı — Teknik Uygulama Kılavuzu
*Güncelleme: 2026 Baskısı | TS EN 771-3 Beton Kâgir Birimler & Deprem Yönetmeliği*

---

## Bu Hesaplayıcı Neleri Hesaplar?

Bu **beton blok (briket) hesaplayıcı**, çevre duvarları, temel perdeleri, bodrumlar ve istinat duvarları için gereken briket adedini, harç torbası miktarını, dolgu betonu hacmini ve donatı çeliğini hatasız şekilde hesaplar.

Hesaplayıcı şunları sunar:
- **Net blok adedi** ve **fire/kesme payı dahil toplam adet**
- **Sıra düzeni**: Yükseklikteki yatay sıra sayısı ve sıra başına briket adedi
- **Örgü harcı**: 25 kg veya 40 kg hazır harç torbası adedi
- **Boşluk dolgu betonu (Grout)**: Doldurulan boşluk aralığına göre metreküp (m³) cinsinden hazır beton hacmi
- **Donatı demiri**: Toplam metraj, düşey filizler ve 6 metrelik standart boy demir sayısı
- **Toplam malzeme maliyeti**: Tüm kalemler için ayrıntılı keşif bedeli

---

## 1. Blok Ebatları: Anma ve Gerçek Ölçüler

Duvar işlerinde **anma ölçüsü**, **10 mm (3/8 inç)** standart derz kalınlığını içerir. Briketin gerçek üretim ebadı derz payı kadar (10 mm) daha küçüktür:

| Anma Boyutu (G × Y × U) | Gerçek İmalat Ebadı | Blok Başına Ön Yüz Alanı | Ortalama Ağırlık | Yaygın Kullanım Alanı |
| :--- | :--- | :--- | :--- | :--- |
| **20 × 20 × 40 cm (8" × 8" × 16")** | 19 × 19 × 39 cm | 0,08 m² | 16–18 kg | Standart taşıyıcı duvarlar, temel perdeleri |
| **15 × 20 × 40 cm (6" × 8" × 16")** | 14 × 19 × 39 cm | 0,08 m² | 12–14 kg | Ara bölme duvarlar, garajlar |
| **25 × 20 × 40 cm (10" × 8" × 16")** | 24 × 19 × 39 cm | 0,08 m² | 19–21 kg | Toprak yükü olan bodrum perdeleri |
| **30 × 20 × 40 cm (12" × 8" × 16")** | 29 × 19 × 39 cm | 0,08 m² | 23–26 kg | Ağır istinat duvarları |
| **10 × 20 × 40 cm (4" × 8" × 16")** | 9 × 19 × 39 cm | 0,08 m² | 9–11 kg | Kaplama ve bahçe bölme duvarları |

> **Altın Kural:** 20 × 40 cm standart modülde derz dahil bir bloğun ön yüzü 0,20 × 0,40 = 0,08 m²'dir. Bir metrekare duvara tam olarak **12,5 adet briket** düşer.

---

## 2. Bir Duvar İçin Kaç Briket Gerekir?

Toplam duvar alanından kapı ve pencere boşluklarını düşüp 12,5 ile çarpın:

```
Net Duvar Alanı (m²) = (Duvar Boyu × Yükseklik) - Boşluk Alanları


Net Blok Sayısı = Net Alan (m²) × 12,5


Fire Dahil Toplam = Net Blok × (1 + (Fire  %) / (100))
```

### Hızlı Başvuru Tablosu (Standart 20×20×40 cm Briket)

| Duvar Boyutları (U × Y) | Net Alan | Sıra Sayısı | Sıradaki Blok | Net Blok | %5 Fire Dahil | Harç (40 kg Torba) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **3,0 m × 1,2 m** | 3,6 m² | 6 sıra | 8 blok | 45 | **48 adet** | 3 torba |
| **6,0 m × 1,2 m** | 7,2 m² | 6 sıra | 15 blok | 90 | **95 adet** | 6 torba |
| **3,0 m × 2,4 m** | 7,2 m² | 12 sıra | 8 blok | 90 | **95 adet** | 6 torba |
| **6,0 m × 2,4 m** | 14,4 m² | 12 sıra | 15 blok | 180 | **189 adet** | 12 torba |
| **9,0 m × 2,4 m** | 21,6 m² | 12 sıra | 23 blok | 270 | **284 adet** | 18 torba |
| **15,0 m × 2,4 m** | 36,0 m² | 12 sıra | 38 blok | 450 | **473 adet** | 30 torba |

### Önerilen Fire Oranları
- Düz ve kesintisiz duvarlar: **%5**.
- Köşeli ve kolonlu duvarlar: **%8**.
- Çok sayıda kapı ve pencere boşluğu olan duvarlar: **%10**.

---

## 3. Duvar Örgü Harcı İhtiyacı

- Bir torba 40 kg hazır örgü harcı ile yaklaşık **12–14 adet** 20'lik briket örülür.
- **Genel Kural:** Her 100 briket için yaklaşık **7,5 ila 8 torba (40 kg)** hazır harç hesaplayın.

---

## 4. Boşluk Dolgu Betonu (Grout)

Briketlerin içi donatı yerleştirildikten sonra akıcı kıvamlı ince betonla doldurulur:
- **Tüm boşluklar dolgu (%100):** 100 adet 20'lik briket için yaklaşık **0,99 m³** beton gerekir.
- **80 cm arayla dolgu:** 100 adet briket için yaklaşık **0,25 m³** beton gerekir.
- Beton döküm kayıpları için **%10 ilave pay** ekleyin.

---

## 5. Donatı Çeliği ve Hatıl Detayı

1. **Düşey Donatılar:** Doldurulan boşluklara yerleştirilen Ø 10 mm veya Ø 12 mm nervürlü donatılar. Temel filizleriyle bindirme boyu en az 50 cm olmalıdır.
2. **Üst Hatıl (Kiriş):** Duvar tepesine U-bloklar yerleştirilerek içine **2 boy kesintisiz boyuna donatı** konur ve betonlanır.
