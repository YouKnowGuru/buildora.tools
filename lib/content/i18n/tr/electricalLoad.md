## Elektrik yük hesabı ve bağlantı gücü rehberi

Araç bir konutun yüklerini toplar — alan, pişirme, çamaşır, sıcak su, iklimlendirme ve elektrikli araç şarjı — ve servis yükünü VA ile kW cinsinden, karşılık gelen akımı, önerilen pano boyutunu ve besleme iletkeni kesitlerini verir.

**Kalibrasyon notu.** Hesap bütünüyle **NEC (NFPA 70) madde 220.82**'ye, yani ABD'nin tek ailelik konutlar için opsiyonel yöntemine dayanır ve **120/240 V bölünmüş fazlı** bir şebeke varsayar; iletken kesitleri **NEC Tablo 310.12**'den AWG olarak gelir. Türkiye **230 V monofaze** veya **400 V trifaze**, 50 Hz çalışır; boyutlandırma pano amperi yerine **kW cinsinden bağlantı gücü** üzerinden yapılır ve kurallar **Elektrik İç Tesisleri Yönetmeliği** ile yürürlükteki tesis standartlarından gelir. Amper sonucu aktarılamaz, yük toplama yöntemi aktarılabilir.

---

## Pano amperi ile sözleşme gücü

ABD'de kısıt ana kesicinin anma akımıdır ve 100, 150, 200 veya 400 A basamaklarıyla gelir; NEC 220.82 hesabı tam olarak bu basamağı ve kolon kesitini seçmek içindir. Türkiye'de kısıt iki katmanlıdır: projede beyan edilen **bağlantı gücü** ve sayaç öncesindeki **ana kesicinin anma akımı**. Amaç bir amper basamağı değil, bir kW değeri seçmektir.

```
monofaze akim = guc (W) / (230 x guc katsayisi)
trifaze akim  = guc (W) / (400 x 1,732 x guc katsayisi)
kurulu guc    = tum cihazlarin anma guclerinin toplami
baglanti gucu = kurulu guc x talep faktoru
```

| Bağlantı gücü | Besleme | Akım | Kolon kesiti (bakır, gösterge) |
|---|---|---|---|
| 3 kW | Monofaze 230 V | 13 A | 4 mm² |
| 5 kW | Monofaze 230 V | 22 A | 6 mm² |
| 7 kW | Monofaze 230 V | 30 A | 10 mm² |
| 9 kW | Monofaze 230 V | 39 A | 10 mm² |
| 15 kW | Trifaze 400 V | 22 A/faz | 10 mm² |
| 22 kW | Trifaze 400 V | 32 A/faz | 16 mm² |

Kesitler göstergedir: akım taşıma kapasitesi, döşeme biçimi, ortam sıcaklığı ve **gerilim düşümü** ile birlikte doğrulanmalıdır. Uzun kolonlarda boyutu belirleyen genellikle akım değil gerilim düşümüdür; Elektrik İç Tesisleri Yönetmeliği bunun için üst sınır koyar. Dağıtım şirketleri belirli bir gücün üzerinde trifaze ister; sınır uygulamada 9 – 10 kW civarındadır.

---

## NEC 220.82 hesap sırası

```
aydinlatma yuku = iklimlendirilen alan (m2) x 32,3 VA/m2
temel yuk       = aydinlatma + mutfak priz devreleri + camasir devresi
toplam genel    = temel yuk + sabit cihazlarin etiket guclerinin toplami
net talep       = 10.000 + 0,40 x (toplam genel - 10.000)
servis yuku     = net talep + maks(sogutma, isitma)
servis akimi    = servis yuku / 240
```

32,3 VA/m², yönetmelikteki 3 VA/ft²'nin karşılığıdır. Mutfak priz devreleri 1.500 VA'dan en az iki adet, çamaşır devresi 1.500 VA sayılır. Yöntemin kalbi **10.000 VA üzerine uygulanan 0,40 katsayısıdır**: her şeyin aynı anda çalışmadığının kabulü. Isıtma ile soğutma toplanmaz, yalnızca büyüğü alınır.

**ABD örneği.** 223 m² (2.400 ft²) tümü elektrikli konut, ısı pompası ve 48 A şarj ünitesi:

* Aydınlatma 223 × 32,3 = 7.200 VA; priz ve çamaşır 4.500 VA; sabit cihazlar (ocak 12.000, termosifon 4.500, kurutucu 5.000, küçük cihazlar 3.200, şarj ünitesi 11.520) **36.220 VA**
* Toplam genel yük 47.920 VA → net talep 10.000 + 0,40 × 37.920 = **25.168 VA**
* İklimlendirme 10.000 + 0,75 × 5.000 = 13.750 VA; servis yükü 38.918 VA, 240 V'ta 162 A → **200 A pano**

---

## Aynı bina Türkiye'de nasıl hesaplanır

Türk yöntemi anma güçlerini toplayıp bir **talep faktörü** uygular. Konutta bu faktör tek dairede 0,5 – 0,7, çok daireli bir blokta daire sayısı arttıkça 0,3'e kadar düşer.

| Cihaz | Türkiye'de yaygın güç | Aracın ABD karşılığı |
|---|---|---|
| İndüksiyonlu ocak | 7,2 kW etiket, sınırlayıcı ile 3 – 4 kW | Elektrikli ocak 12 kW |
| Ankastre fırın | 2,5 – 3,5 kW | 4 – 5 kW |
| **Doğal gazlı kombi** | **0,10 – 0,15 kW elektrik** | Elektrikli termosifon 4,5 kW |
| Çamaşır makinesi | 2,0 – 2,2 kW | 1,2 kW, sıcak su şebekeden |
| Bulaşık makinesi | 1,8 – 2,2 kW | 1,2 kW |
| Isı pompalı kurutucu | 0,8 – 1,0 kW | Rezistanslı, 5 kW |
| Split klima (bir iç ünite) | 0,8 – 1,5 kW | Merkezi sistem 4,5 – 7 kW |
| Hava-su ısı pompası | 2 – 6 kW elektrik | 5 – 14 kW, rezistans destekli |
| Ev şarj ünitesi | 3,7 – 7,4 kW monofaze, 11 kW trifaze | 3,8 – 19,2 kW |

Aynı 223 m² villa Türkiye'de: aydınlatma ve priz 3 kW, indüksiyon 7,2, fırın 3, bulaşık 2, çamaşır 2, kurutucu 1, kombi 0,15, iki split klima 3, şarj ünitesi 7,4 → yaklaşık **28,8 kW kurulu güç**. Talep faktörü 0,45 ile bağlantı gücü **13 kW**, yani **15 kW trifaze** abonelik ve faz başına 22 A.

Karşılaştırma asıl bilgiyi verir: aynı bina için ABD hesabı 38,9 kVA, Türk hesabı 13 kW. Fark yönetmeliklerden değil üç olgudan doğar. Gerilimin iki katı olması akımı yarıya indirir; Türk cihazları gazlı veya ısı pompalıdır, ABD'dekiler rezistanslıdır; ve şehirlerde neredeyse evrensel olan **doğal gazlı kombi**, ABD hesabındaki termosifon ile elektrikli ısıtma kalemlerini tek başına siler.

---

## AWG kesitlerinden mm²'ye

| NEC iletkeni | Kesit | Ticari kesit |
|---|---|---|
| #4 AWG | 21,2 mm² | 25 mm² |
| #2 AWG | 33,6 mm² | 35 mm² |
| #1/0 AWG | 53,5 mm² | 50 mm² |
| #4/0 AWG | 107,2 mm² | 120 mm² |

Dönüşüm bir ABD projesini okumak içindir, proje yapmak için değil: NEC tabloları kendi döşeme ve sıcaklık varsayımlarına oturur.

---

## Elektrikli araç şarjı

Türkiye'de konut aboneliklerini zorlayan yük budur. 3 kW abonelik üzerine 7,4 kW şarj ünitesi kurulamaz; tek başına bağlantı gücünü aşar. Üç yol vardır:

1. **Güç artırımı.** 7 – 9 kW monofazeye ya da 15 kW trifazeye geçmek; tek seferlik bedel ve yeni proje gerektirir.
2. **Dinamik yük yönetimi (DLM).** Anlık tüketimi okuyup şarj akımını kısmak. NEC 625.42'deki yük yönetim sisteminin işlevsel karşılığıdır, en ekonomik çözümdür.
3. **Öncelik röleli yük atma.** Kritik olmayan yükleri şarj sırasında devreden çıkarmak.

Şarj devresi için ayrı kaçak akım koruması ve DC bileşen algılayan bir düzenek gerekir. Apartmanlarda hukuki taraf öne geçer: ortak alana kurulacak ünite **Kat Mülkiyeti Kanunu** çerçevesinde kat malikleri kararı ister, halka açık şarj hizmeti ise **EPDK mevzuatına** tabidir.

---

## Aracın bilmediği Türk yükümlülükleri

* **Proje zorunluluğu.** Belirli bir kurulu gücün üzerindeki iç tesisler için yetkili elektrik mühendisince hazırlanmış ve idarece onaylanmış proje gerekir; güç artırımı bu yüzden salt ticari bir işlem değildir.
* **Kaçak akım koruması.** Konut tesislerinde 30 mA anma kaçak akımlı koruma düzeneği zorunludur. Hesap ne verirse versin, bu kalem pazarlığa açık değildir.
* **Topraklama.** Elektrik Tesislerinde Topraklamalar Yönetmeliği kapsamında topraklama tesisi kurulur ve ölçüm raporu düzenlenir.
* **Deprem çerçevesi.** **TBDY 2018**, yapısal olmayan elemanlar ve bina donanımı için ayrı hesap kuralları verir; pano, jeneratör, kesintisiz güç kaynağı ve trafo ankrajı **DD-2** tasarım depremi düzeyine göre boyutlandırılır. 6 Şubat 2023 depremlerinde taşıyıcı sistemi ayakta kalan binalarda dahi ankrajsız panoların devrilerek hizmeti kesmesi sık görülen bir hasardı.

---

## Sık sorulan sorular

### Bir eve kaç kW abonelik gerekir?

Doğal gazlı kombi ile ısınan ve elektrikli aracı olmayan ortalama bir daire için **3 – 5 kW** hâlâ yeterlidir. İndüksiyonlu ocak veya elektrikli termosifon varsa **7 – 9 kW**'a çıkılır. Isı pompası veya ev şarj ünitesi girdiğinde gerçekçi referans **15 kW trifaze**dir. Araç sonucu 240 V üzerinden amper verir; bunu kVA olarak okuyup bu basamaklarla karşılaştırın.

### Aracın verdiği amper değeri neden beklediğimden yüksek?

Çünkü hesap 240 V'a ve rezistanslı bir cihaz parkına dayanır. 38,9 kVA'lık yük ABD şebekesinde 162 A, Türkiye'de 230 V monofazede 169 A eder; ama aynı ev Türkiye'de 39 kVA'ya hiç çıkmaz. Amper sayısı hatalı değil, farklı bir sorunun cevabıdır.

### VA ile watt arasındaki fark nedir?

Watt gerçekte çekilen aktif gücü, VA ise gerilim ile akımın çarpımı olan görünür gücü ölçer. Rezistanslı yüklerde — fırın, termosifon, ısıtıcı — ikisi çakışır ve NEC yöntemi bunları eşdeğer sayar. Motor ve kompresörlerde güç katsayısı ikisini ayırır, iletken VA üzerinden boyutlandırılır. Türkiye'de konut abonelikleri kW ile ifade edilir.

### Monofazeden trifazeye ne zaman geçmek gerekir?

Uygulamada bağlantı gücü 9 – 10 kW'ı aştığında dağıtım şirketi trifaze ister; ısı pompası, 11 kW şarj ünitesi veya elektrikli ısıtma varsa eşik zaten aşılır. İkinci fayda yükün üç faza dengeli dağılmasıdır: 15 kW'lık bir abonelikte faz başına yalnızca 22 A akar, bu da kolon kesitini ve gerilim düşümünü küçültür.
