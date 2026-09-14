## Alan hesaplama rehberi: m², ft² ve Türkiye'deki metraj kuralları

Oda, duvar, döşeme, bahçe veya parsel alanını hesaplar; fire payını ekler ve kaç kutu malzeme almanız gerektiğini söyler. Dikdörtgen, daire, üçgen, yamuk ve L biçimli alanları destekler; metrik ile emperyal birim arasında tek tuşla geçer.

**Kalibrasyon notu.** Araç saf geometri çalıştırır ve bu kısımda ulusal fark yoktur: 12 m × 8 m her yerde 96 m² (1.033 ft²) eder. Ayrışma, alanın **hangi sınırdan** ölçüldüğünde ve fire paylarında başlar. Aracın önerdiği fire oranları ABD kaplama piyasasının alışkanlıklarına, "kutu başına kapsama" değerleri ABD ambalaj boyutlarına dayanır. Türkiye'de ruhsata esas alan hesabı **Planlı Alanlar İmar Yönetmeliği** tanımlarıyla, yaklaşık maliyet metrajı ise **Çevre, Şehircilik ve İklim Değişikliği Bakanlığı birim fiyat** poz tarifleriyle yapılır. Araç bunların hiçbirini uygulamaz.

---

## Şekle göre alan formülleri

```
dikdortgen = uzunluk x genislik
kare       = kenar x kenar
daire      = 3,14159 x yaricap x yaricap
cevre      = 3,14159 x cap
ucgen      = 0,5 x taban x yukseklik
yamuk      = ((taban1 + taban2) / 2) x yukseklik
L bicimli  = A bolumu alani + B bolumu alani
```

| Şekil | Tipik kullanım | Örnek ölçü | Alan |
|---|---|---|---|
| Dikdörtgen | Oda, duvar, döşeme | 4,50 m × 3,60 m | 16,20 m² (174 ft²) |
| Daire | Yuvarlak teras, havuz, ağaç halkası | çap 4,30 m | 14,52 m² (156 ft²) |
| Üçgen | Çatı alınlığı, köşe parsel | taban 4,90 m, yükseklik 3,05 m | 7,47 m² (80 ft²) |
| Yamuk | Genişleyen rampa, düzensiz bahçe | tabanlar 4,90 + 3,05 m, boy 6,10 m | 24,25 m² (261 ft²) |
| L biçimli | Salon + koridor | 5,00 × 4,00 ile 3,00 × 2,50 | 27,50 m² (296 ft²) |

Karmaşık planı bölmenin kuralı basittir: alanı **üst üste binmeyen** dikdörtgenlere ayırın, her birini ayrı hesaplayın, toplayın. Girintili kolon ve baca boşluklarını ayrı hesaplayıp çıkarın; ölçüyü santimetreyle alıp metreye çevirmek, metreyi gözle kesirlendirmekten her zaman daha doğrudur.

---

## Türkiye'de "alan" hangi sınırdan ölçülür

ABD'de bir konut ilanı **gross living area** verir ve dış duvar dışından ölçülür. Türkiye'de aynı daire için üç ayrı sayı dolaşımdadır ve hiçbiri diğerinin yerine geçmez:

* **Net alan:** Duvar iç yüzünden ölçülen, fiilen kullanılan alan. Kullanıcının hissettiği metrekare budur.
* **Brüt alan:** Duvar kalınlıkları dahil, komşuyla paylaşılan duvarın yarısı sayılarak bulunan alan. Tapu ve satış ilanlarında genellikle bu geçer.
* **Eklentiler ve ortak alan payı:** Balkon, depo, otopark ve merdiven kovası payının dağıtılmasıyla oluşan "brüt satış alanı". Net ile arasındaki fark rahatlıkla %20 – %30 olur.

Ruhsat tarafında belirleyici olan iki katsayı vardır:

```
TAKS = taban alani / parsel alani
KAKS = toplam katlar alani / parsel alani   (emsal)
```

500 m² (5.382 ft²) bir parselde TAKS 0,30 ise bina en fazla 150 m² (1.615 ft²) tabana oturur; KAKS 1,50 ise toplam inşaat alanı 750 m² (8.073 ft²) ile sınırlıdır. Yönetmelikte sayılan bazı bölümler **emsal harici** tutulur, yani hesaba girmez; bu liste plan notlarıyla birlikte değişebildiği için parsele özgü okunmalıdır. Aracın verdiği geometrik alan, emsal hesabının girdisi olabilir ama sonucu değildir.

Bir ayrıntı daha: Bakanlık metraj esaslarında sıva, boya ve benzeri yüzey pozlarında **poz tarifinde belirtilen sınırın altındaki kapı ve pencere boşlukları düşülmez**. Bu yüzden bir Türk metrajının sayısı, aracın çıkardığı net geometrik alandan sistematik olarak büyük çıkar. İkisini karşılaştırırken bunu bekleyin.

---

## Fire (zayiat) payı: ne kadar fazla almalı

Ölçtüğünüz alan kadar malzeme alırsanız iş yarıda kalır. Kesim, derz kaydırma, kapı pervazı etrafı, desen tutturma ve nakliye hasarı payını baştan ekleyin.

| Malzeme ve döşeme düzeni | Önerilen fire | Belirleyici etken |
|---|---|---|
| Lamine parke / laminat, düz döşeme | %5 – %10 | Uç kesimleri, derz kaydırma |
| Balıksırtı veya 45° eğik döşeme | %15 – %20 | Duvar boyunca sürekli açılı kesim |
| Seramik ve porselen karo, düz derz | %10 – %12 | Su testeresi kesimleri, köşeler, kırık |
| LVT / LVP (klik) | %7 – %10 | Kapı altı geçişleri, uç profilleri |
| Halı (rulo) | %10 – %15 | Rulo eni uyumsuzluğu, hav yönü |
| Rulo çim | %5 – %10 | Kavisli bordür, kenar tıraşlama |
| Alçıpan | %10 – %12 | Pencere ve kapı boşlukları, derz düzeni |

Küçük ve bol köşeli mekânlarda üst sınırı, büyük ve dikdörtgen mekânlarda alt sınırı alın. Aynı partiden 1 – 2 m² yedek bırakmak ayrıca akıllıdır: iki yıl sonra aynı ton bulunmaz.

---

## Kutu ve paket hesabı

Kaplama malzemeleri kutu ile satılır; kutu başına kapsama tipik olarak 1,4 – 2,3 m² (15 – 25 ft²) arasındadır.

```
fireli alan = alan x (1 + fire orani)
kutu sayisi = yukari yuvarla(fireli alan / kutu kapsamasi)
```

**Örnek:** 14,52 m² yuvarlak teras, %10 fire ile 15,97 m². Kutu kapsaması 1,86 m² ise 15,97 / 1,86 = 8,59 → **9 kutu**. Gerçek kapsama 16,74 m² olur, yaklaşık 2,2 m² yedek kalır.

---

## Birim dönüşümleri

| Dönüşüm | Formül | Örnek |
|---|---|---|
| m² → ft² | m² × 10,7639 | 100 m² = 1.076,4 ft² |
| ft² → m² | ft² × 0,092903 | 1.000 ft² = 92,9 m² |
| cm² → m² | cm² / 10.000 | 45.000 cm² = 4,5 m² |
| m² → dönüm | m² / 1.000 | 3.500 m² = 3,5 dönüm |
| dönüm → m² | dönüm × 1.000 | 1 dönüm = 1.000 m² (10.764 ft²) |
| hektar → dönüm | hektar × 10 | 1,2 ha = 12 dönüm |
| acre → m² | acre × 4.046,9 | 1 acre = 4.047 m², yani ~4 dönüm |

Arazi biriminde dikkat: **1 dönüm bugün 1.000 m²** kabul edilir, ancak eski tapu kayıtlarında geçen "dönüm" yaklaşık 919 m²'dir. Eski bir tapudaki yüzölçümünü güncel dönümle karşılaştırırken bu fark hektarlık arazilerde ciddi sapma yapar.

---

## Sık sorulan sorular

### Brüt alan ile net alan arasındaki fark nedir?

Net alan duvar iç yüzünden, brüt alan duvar kalınlıkları dahil ölçülür. Ortalama bir betonarme apartman dairesinde fark %15 – %25 bandındadır; balkon, depo ve ortak alan payı da eklendiğinde ilanlardaki "brüt" sayı net kullanım alanının %30 üzerine çıkabilir. Kaplama, boya ve alçıpan metrajını daima **net** alandan yapın; brüt alanla malzeme siparişi vermek fazla ödeme demektir.

### 1 m² kaç ft² eder?

1 m² = 10,7639 ft², 1 ft² = 0,092903 m². Kaba zihin hesabı için m² değerini 10 ile çarpıp %8 eklemek yeter: 85 m² → 850 + 68 = 918 ft² (gerçek değer 915 ft²).

### Fire payı ne kadar olmalı?

Düz döşeli laminat ve parkede %5 – %10, seramik karoda %10 – %12, balıksırtı ve eğik düzende %15 – %20. Bu oranlar ABD döşeme piyasasının pratiğidir ama geometriden geldikleri için Türkiye'de de geçerlidir. Kavisli duvar, çok sayıda kolon çıkıntısı veya büyük ebatlı karo (60 × 120 cm ve üzeri) varsa üst sınırı seçin.

### Parselime kaç m² inşaat yapabilirim?

Bunu araç değil imar durumu belirler. Belediyeden alınan imar çapı veya durum belgesindeki TAKS ile taban alanınızı, KAKS (emsal) ile toplam inşaat alanınızı bulun: `taban alani = parsel alani x TAKS` ve `insaat alani = parsel alani x KAKS`. Kat sayısı, çekme mesafeleri ve emsal harici bölümler plan notlarında yazılıdır. Araç yalnızca geometrik alanı verir, imar hakkını hesaplamaz.

### Duvar boyası için alan nasıl hesaplanır?

Her duvarın alanını `en x yukseklik` ile bulup toplayın, sonra kapı ve pencereleri çıkarın. Boya sarfiyatı m² başına verildiği için ihtiyaç `boya (litre) = alan x kat sayisi / yayilma orani` olur; yayılma oranı ürün kovasında litre başına m² olarak yazar. Yeni sıva üzerine ilk katta emiciliğin yüksek olduğunu, dolayısıyla sarfiyatın artacağını hesaba katın.
