## Ahşap teras temel ayağı hesaplama rehberi

Araç, yükseltilmiş bir ahşap terasın (dek) dikmeleri altına gelecek tekil temelleri boyutlandırır. Teras ölçülerini, sabit ve hareketli yükleri, zeminin emniyetli taşıma gücünü ve dikme düzenini girin; her dikmeye düşen yük, gerekli temel alanı, kare kenarı veya daire çapı ve toplam beton hacmi hesaplanır.

**Kalibrasyon notu.** Hesap tamamen **IRC R507** yük aktarım alanı yöntemine göre yapılır: hareketli yük 40 psf, sabit yük 10 psf, zemin taşıma gücü **IRC Tablo R401.4.1**'in varsayımsal değerleri, temel çapları ise ABD'de standart olan karton kalıp ölçüleri (8, 10, 12, 14, 16, 18, 20, 24 inç). Türkiye'de yük değerleri **TS 498 ve TS EN 1991-1-1**'den, zemin parametreleri **zemin ve temel etüdü raporundan**, deprem etkileri ise **TBDY 2018**'den gelir. Araç Türk yönetmeliklerine göre hesap yapmaz.

---

## Yük değerleri: en büyük fark burada

Aracın varsayılanı olan 40 psf hareketli yük, konut döşemesi için Türk değerleriyle neredeyse aynıdır. Ama bir teras döşemesi değildir:

| Yük durumu | Türkiye (TS 498 / TS EN 1991-1-1) | Aracın varsayımı |
|---|---|---|
| Konut döşemesi, hareketli | 2,0 kN/m² (42 psf) | 40 psf (1,92 kN/m²) |
| **Balkon ve teras, hareketli** | **4,0 – 5,0 kN/m² (84 – 104 psf)** | 40 psf |
| Ahşap teras kaplaması, sabit | 0,4 – 0,7 kN/m² (8 – 15 psf) | 10 psf |
| Kar yükü (çatı altı teras) | TS EN 1991-1-3 ulusal ekine göre | 0 – 100 psf, elle girilir |

Türk mühendislik pratiğinde balkon ve teras hareketli yükü, konut döşemesinin iki katı mertebesinde alınır. Bu tek başına temel alanını yaklaşık **iki katına** çıkarır. Aracı kullanacaksanız hareketli yükü 40 psf yerine **85 – 105 psf** aralığında girin.

---

## Hesap sırası

```
alan          = uzunluk x genislik
toplam yuk    = alan x (sabit yuk + hareketli yuk)
dikme yuku    = toplam yuk / dikme sayisi
gerekli alan  = dikme yuku / zemin emniyet gerilmesi
kare kenar    = karekok(gerekli alan)
daire capi    = 2 x karekok(gerekli alan / 3,1416)
beton hacmi   = temel alani x kalinlik x dikme sayisi
```

Dikme sayısı, sıra sayısı ile sıradaki dikme sayısının çarpımıdır. Az dikme büyük temel, çok dikme küçük temel demektir; ahşap kirişin açıklığı da bu dengeye girer.

---

## Zemin emniyet gerilmesi: birim dönüşümü

Araç psf ile çalışır, Türk raporları kPa veya kg/cm² kullanır:

| Zemin tanımı | psf | kPa | kg/cm² |
|---|---|---|---|
| Yumuşak kil, siltli kil | 1.500 | 72 | 0,73 |
| Silt, killi kum | 2.000 | 96 | 0,98 |
| Kumlu-çakıllı karışık | 2.500 | 120 | 1,22 |
| Çakıl, kumlu çakıl | 3.000 | 144 | 1,47 |
| Sıkı kum, kontrollü dolgu | 4.000 | 192 | 1,96 |

Burada asıl fark tablodaki sayılar değil, **sayının nereden geldiği**. IRC, zemin etüdü yokken varsayımsal değer kullanmaya izin verir. Türkiye'de ruhsata bağlı bir yapıda bu yol kapalıdır: **zemin ve temel etüdü raporu** zorunludur, zemin sınıfı (ZA – ZF) ve emniyetli taşıma gücü rapordan alınır, gerekiyorsa sıvılaşma değerlendirmesi yapılır. Bahçenizdeki bağımsız bir ahşap terasta rapor istenmese bile, komşu binanın etüt raporundaki değerler tahminden çok daha güvenilir bir başlangıçtır.

---

## Deprem çerçevesi: terası binaya nasıl bağlarsınız

ABD modelinde teras, evin kenar kirişine cıvatalanan bir **ledger** ile taşınır. Türkiye'de bina tipik olarak betonarme çerçeve ve delikli tuğla dolgu duvardan oluşur, ve bu iki durum arasındaki fark yapısal olarak kritiktir:

* **Dolgu duvara teras asılmaz.** Taşıyıcı olmayan bir dolgu duvar, terasın düşey yükünü ve deprem sırasındaki çekme kuvvetini taşıyamaz. Bağlantı kolona veya kirişe, kimyasal ankraj ile ve ankraj hesabı yapılarak kurulmalıdır.
* **Ya bağla ya ayır.** TBDY 2018'in mantığı gereği, binaya rijit biçimde bağlanan her ek eleman taşıyıcı sistemin deprem davranışına girer. Küçük bir teras için pratik ve yaygın çözüm, terası **kendi ayakları üzerinde bağımsız** kurup bina ile arasına dilatasyon boşluğu bırakmaktır. Böylece deprem sırasında iki yapı birbirini dövmez.
* **Tasarım depremi DD-2.** TBDY 2018'de bina tasarımının esas aldığı yer hareketi düzeyi, 50 yılda aşılma olasılığı %10 olan (yaklaşık 475 yıl tekrarlanma periyotlu) **DD-2** düzeyidir. Bir bahçe terası için ayrı bir deprem hesabı beklenmez, ama binaya bağlanan her eleman için bu çerçeve geçerlidir.
* **Beton ve donatı sınıfı.** Deprem yüklerini karşılayan betonarme elemanlarda TBDY 2018 en az **C25/30 beton** ve B420C donatı ister. Bahçedeki bir ayak temeli için de C25/30 kullanmak, C16/20 hazır beton ısmarlamaktan çok daha doğru bir tercihtir.

---

## Temel derinliği: don derinliği yerine ne belirler

Aracın hesapladığı kalınlık, beton ayağın kendi yüksekliğidir; **kazı derinliği değildir**. ABD'de kazı derinliğini don çizgisi (yaygın olarak 75 – 120 cm) belirler. Türkiye'de tablo daha çeşitlidir:

| Bölge | Yaklaşık donma derinliği | Pratik temel derinliği |
|---|---|---|
| Ege ve Akdeniz kıyısı | 0 – 20 cm (0 – 8 in) | 50 cm (20 in), sağlam zemine oturmak esas |
| Marmara, Karadeniz kıyısı | 20 – 40 cm (8 – 16 in) | 50 – 70 cm (20 – 28 in) |
| İç Anadolu | 40 – 70 cm (16 – 28 in) | 70 – 90 cm (28 – 35 in) |
| Doğu Anadolu, yüksek rakım | 80 – 150 cm (31 – 59 in) | 120 – 150 cm (47 – 59 in) |

Kıyı şeridinde belirleyici olan don değil, **bitkisel toprağı geçip taşıma gücü olan tabakaya oturmaktır**. Kazıdan önce altyapı hatlarını ilgili idarelerden sorun: Türkiye'de tek bir çağrı merkezi yoktur, elektrik, doğal gaz, su ve telekom kuruluşlarına ayrı ayrı başvurulur.

---

## Örnek hesap: 5,0 m x 3,6 m teras

* **Alan:** 18 m² (194 ft²)
* **Yükler:** sabit 0,5 + hareketli 4,0 = **4,5 kN/m²** (94 psf)
* **Toplam yük:** 18 × 4,5 = **81 kN** (18.210 lb)
* **Dikme düzeni:** 2 sıra × 3 dikme = 6 dikme
* **Dikme yükü:** 81 / 6 = **13,5 kN** (1.376 kgf)
* **Zemin:** 120 kPa (2.500 psf)
* **Gerekli alan:** 13,5 / 120 = 0,1125 m² = **1.125 cm²**
* **Kare temel:** 33,5 cm kenar → **40 x 40 cm** uygulanır
* **Daire temel:** 37,8 cm çap → **40 cm** çaplı kalıp
* **Beton hacmi:** 0,40 × 0,40 × 0,30 × 6 = **0,29 m³** (0,38 yd³), %10 fire ile 0,32 m³

Aynı terası aracın varsayılan 50 psf yükü ile hesaplarsanız dikme yükü 7,2 kN'a, gerekli alan 600 cm²'ye, kare kenarı 24,5 cm'ye düşer. Fark, yönetmeliklerin farklılığından değil, teras hareketli yükünün Türkiye'de iki kat alınmasından kaynaklanır.

---

## Sık sorulan sorular

### Kaç tane temel ayağı gerekir?

Pratik kural, dikmeleri 1,8 – 2,4 m aralıklı bir grid üzerine oturtmaktır. 5,0 m × 3,6 m bir teras genellikle 6 dikme ile çözülür. Dikme sayısını artırmak her bir temeli küçültür ama kazı ve kalıp sayısını artırır; ahşap kirişin kesitini de birlikte değerlendirin.

### Hazır beton bloklar (baba taşı) kullanabilir miyim?

Zemine oturan, alçak ve binadan bağımsız bir terasta yaygın bir çözümdür. Ancak bu bloklar zemin seviyesinde durur, don derinliğinin altına inmez ve İç ile Doğu Anadolu'da kış boyunca oynar. Binaya bağlı veya insan yüksekliğinde bir teras için dökme betonarme ayak tercih edilmelidir.

### Zemin taşıma gücünü bilmiyorum, ne girmeliyim?

Elde etüt raporu yoksa temkinli davranıp **72 kPa (1.500 psf)** girin; sonuç güvenli tarafta büyük bir temel verir. Sonra bir el burgusu veya deneme çukuru ile 1,0 m derinliğe kadar zemini gözlemleyin: dolgu, organik toprak veya su gelmesi görürseniz hesap değil, jeoteknik görüş gerekir.

### Ne kadar beton gerekir?

Temel alanını kalınlıkla ve dikme sayısıyla çarpın. 40 x 40 cm, 30 cm kalınlığında 6 ayak yaklaşık **0,3 m³** eder; bu hazır beton için minimum sipariş miktarının altındadır, dolayısıyla ya torba çimento ile yerinde harç yapılır ya da komşu bir imalatla birleştirilir.

### Aracın verdiği inç cinsinden çap Türkiye'de nasıl uygulanır?

Aracın yuvarladığı karton kalıp ölçüleri (10 in = 25 cm, 12 in = 30 cm, 16 in = 40 cm) Türkiye'de standart stok değildir. Sonucu cm'ye çevirip **5 cm'lik üst kademeye** yuvarlayın ve kare kalıp ile dökün; kare temel hem kalıp hem donatı açısından daha kolaydır.
