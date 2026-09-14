## Merdiven hesaplama rehberi: rıht, basış, eğim ve betonarme metrajı

Kat yüksekliğini girin; araç rıht sayısını, tam rıht yüksekliğini, basamak sayısını, toplam yatay uzunluğu, eğik limon kirişi boyunu, eğim açısını, baş kurtarma açıklığını ve korkuluk uzunluğunu verir.

**Kalibrasyon notu.** Araç geometriyi doğru kurar, ancak sınır değerlerini ve malzeme çıktısını **ABD yapı yönetmeliklerine** göre üretir: konutta **IRC R311.7**, ticari yapıda **IBC 1011**, sanayide **OSHA 1910.25**. Taşıyıcı eleman olarak da 2×12 (38 × 286 mm) kesitli **ahşap limon kirişi** varsayar. Türkiye'de iç merdivenler ezici çoğunlukla **yerinde dökme betonarme**, sanayide **çelik**tir; kereste ölçüsü çıktısının burada karşılığı yoktur. Türkiye'de geometriyi belirleyen metinler **Planlı Alanlar İmar Yönetmeliği**, kaçış merdivenleri için **Binaların Yangından Korunması Hakkında Yönetmelik**, taşıyıcı davranış için **TBDY 2018**'dir. Araç bunların hiçbirini kontrol etmez.

---

## Terimler

| Terim | Karşılığı |
|---|---|
| **Kat yüksekliği (toplam çıkış)** | Bitmiş döşeme üstünden bitmiş döşeme üstüne düşey mesafe. Tek zorunlu saha ölçüsüdür. |
| **Rıht** | Basamağın düşey yüzü, yani her adımın yükselme miktarı. |
| **Basış (basamak genişliği)** | Üzerine basılan yatay yüzey derinliği. Basamak burnunun taşması tipik 2 – 3 cm. |
| **Merdiven kolu** | İki sahanlık arasındaki kesintisiz basamak dizisi. |
| **Sahanlık** | Kollar arasındaki düz dinlenme platformu. |
| **Baş kurtarma yüksekliği** | Basamak burnundan yukarıdaki en alçak engele (döşeme, kiriş, asma tavan) düşey açıklık. |
| **Merdiven boşluğu (kovası)** | Döşemede bırakılan açıklığın plandaki boyu ve eni. |
| **Blondel bağıntısı** | Ergonomi bağıntısı: 2 × rıht + basış = 60 – 64 cm (24 – 25 in). Birim değişir, kural değişmez. |

---

## Hesap sırası

```
riht sayisi    = yuvarla(kat yuksekligi / hedef riht)
riht           = kat yuksekligi / riht sayisi
basamak sayisi = riht sayisi - 1
yatay uzunluk  = basamak sayisi x basis
egik uzunluk   = karekok(kat yuksekligi^2 + yatay uzunluk^2)
egim acisi     = arctan(riht / basis)
blondel        = 2 x riht + basis
```

Tek kolda **bütün rıhtlar birbirine eşit** olmalıdır. Farklı yükseklikte tek bir basamak, kullanıcının adım ritmini bozduğu için düşmelerin en yaygın nedenidir; şantiyede bu hata genellikle şap kalınlığının alt katta 5 cm, üst katta 3 cm yapılmasından doğar. Rıht hesabını **bitmiş kot** üzerinden yapın, kaba beton üzerinden değil.

---

## Sınır değerler: dört farklı çerçeve

| Çerçeve | En büyük rıht | En küçük basış | Kullanım |
|---|---|---|---|
| **IRC R311.7** (ABD konut) | 197 mm (7,75 in) | 254 mm (10,0 in) | Aracın öntanımlı kabulü |
| **IBC 1011** (ABD ticari) | 178 mm (7,0 in) | 279 mm (11,0 in) | Ofis, otel, okul |
| **OSHA 1910.25** (ABD sanayi) | 241 mm (9,5 in) | 241 mm (9,5 in) | Servis merdivenleri |
| **Planlı Alanlar İmar Yönetmeliği** (TR konut) | 180 mm (7,1 in) | 2h + b = 60 – 64 cm bağıntısından, uygulamada 270 – 300 mm | Ruhsat projesi |
| **BYKHY** (TR kaçış merdiveni) | 175 mm (6,9 in) | 250 mm (9,8 in) | Yangın kaçış yolu |

Türkiye tarafındaki iki ek koşul aracın hiç sormadığı büyüklüklerdir: **merdiven kolu ve sahanlık genişliği** konut yapılarında en az 1,20 m, diğer yapılarda en az 1,50 m; **baş kurtarma yüksekliği** en az 2,20 m (86,6 in). Bu son sayı, ABD'nin 80 in (2,03 m) eşiğinden belirgin biçimde yüksektir: aracın "yeterli" dediği bir baş kurtarma, Türkiye'de ruhsat projesinden geri döner. Yapı sınıfına ve yapı yüksekliğine göre değişen ayrıntılar için ruhsat aşamasında yönetmeliğin güncel metnini esas alın.

---

## Örnek hesap: 300 cm kat yüksekliği, iki kollu sahanlıklı merdiven

* **Kat yüksekliği:** 300 cm (9 ft 10 in), hedef rıht 16,5 cm
* **Rıht sayısı:** 300 / 16,5 = 18,18 → **18 rıht**
* **Tam rıht:** 300 / 18 = **16,67 cm** (6,56 in), 18 cm sınırının altında
* **Basış:** 28 cm (11,0 in) → Blondel: 2 × 16,67 + 28 = **61,3 cm**, 60 – 64 cm bandında
* **Eğim açısı:** arctan(16,67 / 28) = **30,8°**, rahat bandın içinde
* **Kol başına:** 9 rıht, 8 basamak → yatay uzunluk 8 × 28 = **224 cm**
* **Eğik plak uzunluğu:** karekok(150² + 224²) = **269,6 cm**
* **Merdiven boşluğu:** boy 224 + 130 = **354 cm**, en 2 × 120 + 10 = **250 cm**

---

## Betonarme merdiven metrajı

Aracın vermediği ama Türkiye'de asıl gereken çıktı budur. Yukarıdaki merdiven için, eğik plak kalınlığı 15 cm ve kol genişliği 120 cm kabulüyle:

```
egik plak hacmi = egik uzunluk x kol genisligi x plak kalinligi
basamak hacmi   = 0,5 x riht x basis x kol genisligi x basamak sayisi
kalip alani     = alt yuz + riht yuzleri + yan yuzler
```

| Kalem | Hesap | Sonuç |
|---|---|---|
| Eğik plak betonu (bir kol) | 2,696 × 1,20 × 0,15 | 0,49 m³ |
| Basamak üçgenleri (bir kol) | 0,5 × 0,1667 × 0,28 × 1,20 × 9 | 0,25 m³ |
| İki kol toplamı | 2 × 0,74 | 1,47 m³ |
| Sahanlık plağı | 2,50 × 1,30 × 0,15 | 0,49 m³ |
| **Toplam beton** | | **~1,96 m³** (69 ft³) |
| Kalıp alanı | iki kol + sahanlık | ~16 m² (172 ft²) |
| Donatı | 110 kg/m³ kabulüyle | ~215 kg |

TBDY 2018 betonarme binalarda en az **C25/30** beton sınıfı ister; merdiven de taşıyıcı sistemin parçası olduğu için aynı sınıftan dökülür. Donatı oranı merdiven kollarında tipik olarak 100 – 130 kg/m³ bandındadır, konsol basamaklı merdivenlerde bunun üzerine çıkar.

---

## Deprem: merdivenin Türkiye'deki asıl meselesi

ABD modelinde merdiven bir mimari ayrıntıdır. Türkiye'de taşıyıcı sistem sorunudur ve bunun iki somut sonucu vardır:

* **Eğik plak çapraz gibi çalışır.** Deprem sırasında merdiven kolu, iki kat arasına yerleştirilmiş bir basınç çubuğu gibi davranır ve modelde görünmeyen kesme kuvvetlerini kolonlara aktarır. TBDY 2018 bu nedenle merdiven kollarının ya taşıyıcı sistem modeline dahil edilmesini ya da sistemden hareketli mesnet veya derz ile ayrılmasını öngörür.
* **Sahanlık kısa kolon üretir.** Yarım kat seviyesindeki sahanlık kirişi, kolonun serbest boyunu keserek **kısa kolon** oluşturur. Kısa kolon, aynı ötelenmede çok daha büyük kesme kuvveti çeker; 1999 ve 2023 depremlerinin hasar raporlarında merdiven kovası çevresindeki kolonların öne çıkması bu mekanizmadandır. Merdiven kovasının plandaki yeri, bu yüzden mimari değil statik bir karardır.

---

## Sık sorulan sorular

### 3 metre kat yüksekliği için kaç basamak gerekir?

Türkiye'de tipik konut kat yüksekliği 2,80 – 3,00 m'dir (bitmiş kot arası). 300 cm için 18 rıht × 16,67 cm rahat ve yönetmeliğe uygun bir çözümdür; 17 rıht seçilirse rıht 17,65 cm'ye çıkar, hâlâ 18 cm sınırının altındadır ama merdiven belirgin biçimde dikleşir. 280 cm'de 17 rıht × 16,47 cm iyi bir başlangıçtır.

### İdeal rıht yüksekliği kaçtır?

Konutta **16 – 17,5 cm**. Yönetmelik üst sınırı 18 cm'dir, fakat 17,5 cm üzerindeki her milimetre merdiveni yorucu hale getirir. Yaşlı kullanıcı, çocuk veya sık taşıma varsa 16 cm hedefleyin ve basışı 30 cm'ye çıkarın; bu, Blondel bağıntısını 62 cm'de tutar.

### Aracın verdiği limon kirişi boyu bende ne işe yarar?

Eğik uzunluk sayısı her malzemede geçerlidir: betonarme merdivende **eğik plak boyunu ve kalıp alanını**, çelik merdivende **profil kesim boyunu**, korkulukta ise **küpeşte uzunluğunu** verir. İşe yaramayan kısım, ABD kereste ölçülerine yuvarlanan malzeme önerisidir; Türkiye'de 2×12 diye satılan bir kesit yoktur.

### Kaçış merdiveni ile ev içi merdiven aynı kurallara mı tabi?

Değil, ve fark önemlidir. Kaçış merdivenleri **Binaların Yangından Korunması Hakkında Yönetmelik** kapsamındadır: basamak yüksekliği 175 mm'yi geçemez, basış 250 mm'nin altına inemez, kovanın korunumlu olması, kaçış yolu genişliğinin kullanıcı yüküne göre hesaplanması ve kapıların kaçış yönüne açılması gerekir. Belirli yapı yüksekliklerinin üzerinde korunumlu kaçış merdiveni sayısı ve basınçlandırma da zorunlu hale gelir. Bu koşulların hiçbiri aracın kapsamında değildir.

### Baş kurtarma yüksekliğini nasıl kontrol ederim?

Ölçüyü asma tavandan değil, **yukarıdaki döşeme veya kirişin alt yüzünden** ve basamak burnundan düşey olarak alın. En kritik nokta genellikle merdiven boşluğunun üst kenarına en yakın basamaktır. 2,20 m çıkmıyorsa üç seçenek var: merdiven boşluğunu döşemede uzatmak, rıht sayısını artırıp eğimi azaltmak, ya da kolu döndürüp sahanlığı kaydırmak.
