## Püskürtme poliüretan köpük hesaplama rehberi

Araç bir yüzeyin alanını, köpük kalınlığını ve türünü alır; **board-feet** cinsinden kimyasal hacmi, fire payını, elde edilen R değerini, gereken varil sayısını ve tahmini maliyeti verir.

**Kalibrasyon notu.** Hesap ABD sektör birimi olan **board foot** üzerine kuruludur: 1 bd ft = 1 ft² yüzeyin 1 inç kalınlıkta kaplanması. Referanslar **IECC 2021**, **IRC 2021 R316.4** yangın bariyeri maddesi ve ASTM deney standartlarıdır; fiyatlar USD/bd ft cinsindendir. Türkiye'de püskürtme poliüretan **m² ile belirli bir kalınlıkta** veya **kg kimyasal** üzerinden satılır, ısıl performans **W/mK cinsinden ısı iletkenliği** ile beyan edilir ve gereken kalınlık **TS 825**'ten çıkar. Araç Türk standartlarına göre hesap yapmaz ve aşağıda göreceğiniz gibi kapalı gözenekli köpüğün performansını **iyimser** varsayar.

---

## Board foot'tan m³'e

```
hacim (m3)    = alan (m2) x kalinlik (m)
board feet    = hacim (m3) x 424
board feet    = alan (ft2) x kalinlik (inc)
kimyasal (kg) = hacim (m3) x yogunluk (kg/m3)
R_SI (m2K/W)  = kalinlik (m) / isi iletkenligi
```

| Kalınlık | m² başına board feet | 100 m² için board feet | Hacim |
|---|---|---|---|
| 3 cm (1,2 in) | 12,7 | 1.270 | 3,0 m³ |
| 5 cm (2,0 in) | 21,2 | 2.120 | 5,0 m³ |
| 8 cm (3,1 in) | 33,9 | 3.390 | 8,0 m³ |
| 10 cm (3,9 in) | 42,4 | 4.240 | 10,0 m³ |

Ezberlenecek tek sayı: **1 m³ köpük = 424 board feet**, yani 1 m² yüzeyde 1 cm köpük 4,24 bd ft eder. Aracın verdiği bd ft değerini 424'e bölerek m³ bulun, sonra yoğunlukla çarparak kaç kilogram kimyasal sipariş edileceğini çıkarın.

---

## İki köpük türü, Avrupa beyan değerleriyle

| Özellik | Açık gözenekli | Kapalı gözenekli |
|---|---|---|
| Yoğunluk | 8 – 12 kg/m³ | 30 – 40 kg/m³ |
| Beyan edilen ısı iletkenliği | 0,035 – 0,040 W/mK | 0,024 – 0,028 W/mK |
| Aracın verdiği R değeri (inç başına) | R-3,6 – 3,8 | R-6,5 – 7,0 |
| Bu R değerinin λ karşılığı | 0,038 – 0,040 W/mK | **0,021 – 0,022 W/mK** |
| Su karşısında | Emer | Emmez |
| Buhar geçirgenliği | Yüksek | Düşük, buhar kesici işlevi görür |
| Türkiye'de tipik yer | İç bölme, asma tavan, ses yalıtımı | Sanayi çatısı, soğuk oda, teras çatı |

Tabloda gizlenmiş asıl bilgi dördüncü satırdadır. Açık gözenekli köpükte aracın R değeri Avrupa beyan değerleriyle örtüşür, kapalı gözenekli köpükte örtüşmez: R-6,7 varsayımı 0,0215 W/mK'ya karşılık gelir, oysa Türkiye'de satılan ürünlerin **yaşlanmış beyan değeri** 0,024 – 0,028 arasındadır. Aynı kalınlıkta gerçek performans yaklaşık **%20 daha düşüktür**. Aracın kalınlık sonucunu doğrudan uygulamayın.

---

## TS 825'e göre kaç cm gerekir

Tipik bir teras çatıda betonarme döşeme, şap ve yüzey dirençleri toplamı yaklaşık 0,27 m²K/W verir. Kapalı gözenekli köpükte λ = 0,026 W/mK alındığında:

| Bölge | Tavan U sınırı | Gereken toplam R | Köpük kalınlığı |
|---|---|---|---|
| 1. bölge (Antalya, İzmir) | 0,45 W/m²K | 2,22 m²K/W | ~5 cm (2,0 in) |
| 2. bölge (İstanbul, Bursa) | 0,40 W/m²K | 2,50 m²K/W | ~6 cm (2,4 in) |
| 3. bölge (Ankara, Konya) | 0,30 W/m²K | 3,33 m²K/W | ~8 cm (3,1 in) |
| 4. bölge (Erzurum, Kars) | 0,25 W/m²K | 4,00 m²K/W | ~10 cm (3,9 in) |

Aynı sonuçları aracın R değerleriyle üretirseniz kalınlıklar bir kademe düşük çıkar; 3. bölgede 8 cm yerine 6,6 cm görürsünüz. Fark, iyimser λ varsayımının doğrudan sonucudur.

---

## Türkiye'de nerede kullanılır, nerede kullanılmaz

ABD modeli püskürtme köpüğü ahşap karkas çatı arasına ve dikme arası kaviteye uygular; havalandırılmayan sıcak çatı arası oradaki baskın uygulamadır. Türkiye'de tablo tamamen farklıdır:

1. **Baskın kullanım sanayi yapısıdır.** Trapez sac çatı altına püskürtme, hangar, atölye, soğuk hava deposu ve tavuk çiftliği gibi yapılarda standart çözümdür. Metal yüzeyde yoğuşmayı kesmesi ve derz bırakmaması bu tercihin sebebidir.
2. **Konutta çatı arası kavitesi yoktur.** Türk konut stoğunun çatısı betonarme teras veya kırma çatıdır; ABD'deki "rafter arası püskürtme" senaryosunun karşılığı yoktur. Konutta köpük daha çok teras çatıda, bodrum perdesinde ve boru hattı yalıtımında görülür.
3. **Ölçü m²'dir.** Türkiye'de teklif "şu kalınlıkta şu kadar m²" biçiminde alınır. Kimyasal tüketimi kontrolü için hacmi yoğunlukla çarpın: 8 cm kalınlıkta 100 m², 8 m³ hacim ve 35 kg/m³ yoğunlukla **280 kg** kimyasal eder.
4. **Uygulama sıcaklığı belirleyicidir.** Yüzey soğuksa köpük yapışmaz ve genleşmez; İç ve Doğu Anadolu'da kış uygulamasına yüzey sıcaklığı ölçülmeden başlanmaz.

---

## Yangın ve iş güvenliği: Türkiye'de bağlayıcı olan kısım

* **Köpük açıkta bırakılmaz.** IRC 2021'in 15 dakikalık ısıl bariyer maddesi (1/2 inç alçıpan veya onaylı şişen boya) Türkiye'de aynen geçerli değildir; karşılığı **Binaların Yangından Korunması Hakkında Yönetmelik** ve **TS EN 13501-1** yanma davranışı sınıflarıdır. Kullanılan hacimde poliüretan köpüğün alçıpan, alçı sıva veya uygun kaplama ile örtülmesi beklenir.
* **Cephede yükseklik sınırı vardır.** Belirli yükseklik üzerindeki binalarda cephe yalıtım malzemesinin yanıcılık sınıfı kısıtlanır; poliüretan köpük bu binalarda cephe çözümü olarak elenir ve yerine taşyünü gelir.
* **İzosiyanat maruziyeti.** Uygulama sırasında temiz hava beslemeli tam yüz maskesi, tulum ve alanın boşaltılması gerekir; **Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik** kapsamındadır. Uygulama sonrası mahal en az 24 saat havalandırılır. Bu, aracın maliyet kalemlerinde hiç görünmeyen ama ihmal edilemez bir gerekliliktir.

---

## Deprem çerçevesi: aracın bir iddiasını düzeltmek

Araç kapalı gözenekli köpüğün duvarın yatay yük dayanımını %200 – %300 artırdığını söyler. Bu bilgi **ABD'nin ahşap karkas** duvarına aittir: esnek bir karkasın panelleşmesinden gelir. Türkiye'de taşıyıcı sistem betonarme çerçeve veya yığmadır ve **TBDY 2018 köpüğe hiçbir yapısal katkı tanımaz**. Köpük bir yalıtım malzemesidir, güçlendirme malzemesi değildir.

Buna karşılık iki gerçek katkısı vardır. Trapez sac çatıda kütle eklemeden yalıtım sağlar; aynı performansı betonarme şap ile kurmak çatıya ton mertebesinde ağırlık bindirir ve bu ağırlık deprem kütlesine girer. İkincisi, mevcut bir binada **6306 sayılı Kanun** kapsamında güçlendirme yapılacaksa sıralama önemlidir: güçlendirme kararından önce yapılan çatı ve cephe yalıtımı sökülür.

---

## Örnek hesap: 100 m² sanayi çatısı

* **Yüzey:** trapez sac altı, 100 m² (1.076 ft²), 3. bölge
* **Kalınlık:** 8 cm (3,1 in) kapalı gözenekli
* **Hacim:** 100 × 0,08 = **8,0 m³**
* **Board feet:** 8,0 × 424 = 3.392; %10 fire ile **3.731 bd ft**
* **Kimyasal:** 8,0 × 35 = 280 kg; fire ile yaklaşık **310 kg**
* **Gerçek performans:** R = 0,08 / 0,026 = 3,08 m²K/W → U = **0,30 W/m²K**, 3. bölge sınırında
* **Aracın iddiası:** 3,15 inç × R-6,7 = R-21, yani 3,70 m²K/W — **%21 iyimser**

---

## Sık sorulan sorular

### Board foot Türkiye'de kullanılır mı?

Hayır. Türkiye'de teklif m² ve kalınlık üzerinden, kimyasal ise kg üzerinden verilir. Aracın bd ft sonucunu **424'e bölerek m³**'e çevirin; m³ değerini yoğunlukla çarparak kilogram kimyasal bulun. 1 m² yüzeyde 1 cm köpük 4,24 bd ft eder.

### Kaç cm püskürtme köpük gerekir?

Teras çatıda TS 825 bölgesine göre kapalı gözenekli köpükte 1. bölgede yaklaşık 5 cm, 2. bölgede 6 cm, 3. bölgede 8 cm, 4. bölgede 10 cm. Sanayi çatısında yoğuşma kontrolü için en az 3 cm uygulanır, ısıl hedef varsa yukarıdaki değerlere çıkılır. Kesin kalınlık ürünün beyan edilen λ değeriyle hesaplanır.

### Aracın verdiği R değeri neden iyimser?

Çünkü inç başına R-6,5 – 7,0 varsayımı 0,021 – 0,022 W/mK'lık bir ısı iletkenliğine denk gelir. Avrupa'da beyan edilen değer **yaşlanmış** durumu yansıtır ve 0,024 – 0,028 arasındadır: köpüğün gözeneklerindeki gaz zamanla hava ile yer değiştirdiği için performans düşer. Aracın kalınlığını yaklaşık %20 artırarak okuyun.

### Köpüğün üstü açık bırakılabilir mi?

Kullanılan hacimlerde bırakılmamalıdır. Poliüretan köpük yanıcıdır ve yandığında yoğun duman üretir; alçıpan, alçı sıva veya uygun kaplama ile örtülmesi gerekir. Ulaşılmayan çatı boşluğu ve teknik hacimler için kaplama gereklilikleri değişir; projeyi yangın yönetmeliği kapsamında değerlendirin.

### Açık gözenekli mi kapalı gözenekli mi seçmeliyim?

Su, yoğuşma veya metal yüzey varsa **kapalı gözenekli**: emmez, buhar kesici işlevi görür ve inç başına iki kat R verir. Kuru bir iç bölme duvarında, asma tavanda veya ses yalıtımı amacı öndeyse **açık gözenekli** hem yeterli hem belirgin biçimde ucuzdur. Türkiye'deki uygulamaların çoğu birinci gruba girer.

### Uygulamadan sonra ne kadar beklenir?

Köpük saniyeler içinde kürünü alır ama mahal en az **24 saat** havalandırılır ve bu süre boyunca kullanılmaz.
