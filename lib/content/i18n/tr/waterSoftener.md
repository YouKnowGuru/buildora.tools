## Su yumuşatma cihazı seçim rehberi: °fH, kapasite, tuz ve sodyum

Hane büyüklüğünü, ölçülmüş su sertliğini, çözünmüş demir ve manganez değerlerini ve istediğiniz rejenerasyon aralığını girin; araç gerekli kapasiteyi, reçine hacmini, tank ölçüsünü, yıllık tuz sarfiyatını, rejenerasyon atık suyunu ve tepe debiyi verir.

**Kalibrasyon notu.** Araç **Water Quality Association (WQA)** boyutlandırma yöntemini ve **NSF/ANSI 44** cihaz kademelerini kullanır. Bütün girdileri ABD birimlerindedir: sertlik **GPG (galon başına grain)**, kapasite **grain**, tüketim **kişi başına günde 75 galon**, tuz **40 lb çuval**, debi **GPM**. Türkiye'de sertlik **Fransız sertliği (°fH)** ile ölçülür, cihaz kapasitesi **m³ × °fH** ile verilir, tuz **25 kg tablet** olarak satılır ve kişi başına ev içi su tüketimi ABD ortalamasının yarısından azdır. Araç Türk mevzuatını, özellikle **İnsani Tüketim Amaçlı Sular Hakkında Yönetmelik**'teki sodyum sınırını kontrol etmez. Aşağıdaki dönüşümleri yapmadan aldığınız sonuç, gereğinden büyük bir cihaz önerir.

---

## Sertlik birimleri: en kritik dönüşüm

Belediyenizin yayınladığı su analiz raporu sertliği neredeyse her zaman **°fH** veya **mg/L CaCO₃** olarak verir. Aracın istediği birim ise GPG'dir.

| Birim | 1 birimin karşılığı | GPG'ye çevirmek için |
|---|---|---|
| **°fH** (Fransız sertliği) | 10 mg/L CaCO₃ | °fH / 1,71 |
| **°dH** (Alman sertliği) | 17,8 mg/L CaCO₃ | °dH × 1,04 |
| **mg/L (ppm) CaCO₃** | 1 mg/L | ppm / 17,118 |
| **mmol/L** | 100 mg/L CaCO₃ | mmol/L × 5,85 |
| **GPG** | 17,118 mg/L CaCO₃ | — |

```
fH  = ppm / 10
GPG = fH / 1,71
fH  = dH x 1,78
```

**Örnek:** Raporda 320 mg/L CaCO₃ yazıyorsa bu 32 °fH, yani **18,7 GPG** eder.

Aracın kullandığı WQA ölçeği 14 GPG (24 °fH) üzerini "aşırı sert" sayar. Türkiye'de şebeke suyu yaygın olarak 15 – 35 °fH bandında, karst kaynaklı sularda daha yukarıda seyreder; yani bu ölçek Türkiye'nin büyük bölümünü en üst kademeye yazar. Sınıflandırmayı bir alarm değil, ölçek farkı olarak okuyun.

---

## Demir ve manganez telafisi

Standart sertlik ölçümü yalnızca kalsiyum ve magnezyumu görür. Çözünmüş demir ve manganez de reçineyi tüketir ve boyutlandırmaya eklenmelidir:

```
telafili sertlik (fH) = ham sertlik + (demir ppm x 6,8) + (manganez ppm x 3,4)
```

WQA kuralı 1 ppm demiri 4 GPG'ye eşdeğer sayar; °fH karşılığı 6,8'dir. Manganezde bu değer yarısıdır. **Önemli uyarı:** kural yalnızca **çözünmüş (berrak su) demiri** için geçerlidir. Musluktan kızıl-kahve akan sudaki partiküllü demir, büyük cihazla değil, yumuşatıcıdan **önce** konulan bir oksidasyonlu demir filtresiyle çözülür. Kuyu suyuyla çalışan Türkiye'deki pek çok tesiste asıl arıza nedeni budur.

---

## Kapasite hesabı: Türk birimleriyle

```
gunluk tuketim (m3) = kisi sayisi x kisi basi litre / 1000
gunluk yuk          = gunluk tuketim x telafili sertlik
gerekli kapasite    = gunluk yuk x rejenerasyon araligi x (1 + rezerv)
recine hacmi (L)    = gerekli kapasite / 5
```

**Örnek: 4 kişilik hane, 30 °fH sertlik, 0,5 ppm demir, 7 günde bir rejenerasyon**

* **Günlük tüketim:** 4 × 120 L = 480 L = **0,48 m³** (127 galon)
* **Telafili sertlik:** 30 + (0,5 × 6,8) = **33,4 °fH**
* **Günlük yük:** 0,48 × 33,4 = **16,0 m³·°fH**
* **Kapasite (7 gün, %20 rezerv):** 16,0 × 7 × 1,20 = **135 m³·°fH**
* **Reçine:** 135 / 5 = 27 L → ticari kademede **30 L**

Aynı hane için araç, kişi başı 284 litre (75 galon) varsayımıyla yaklaşık **49.000 grain** ve **57 litre** reçine önerir; yani gerçek ihtiyacın neredeyse iki katı. Türkiye'de hane içi kullanım tipik olarak kişi başı **100 – 150 L/gün** bandındadır (TÜİK'in yayımladığı daha yüksek değerler şebeke kayıplarını da içerir). Bu tek girdiyi düzeltmek, cihaz bedelini ve yıllık tuz masrafını yarıya indirir.

Kapasite birimleri arasında geçiş:

```
m3 x fH = grain x 0,00648
grain   = m3 x fH x 154,3
```

Yani 135 m³·°fH yaklaşık 20.800 grain, 32.000 grain ise yaklaşık 207 m³·°fH eder. Reçinenin gerçekçi verimi tuz dozuna bağlıdır: yüksek verim dozunda litre başına **5 m³·°fH**, yüksek tuz dozunda 7'ye kadar çıkar ama tuz tüketimi neredeyse iki katına çıkar.

---

## Tuz sarfiyatı

| Doz ayarı | Tuz / L reçine | Örnekte rejenerasyon başına | Yıllık (52 çevrim) |
|---|---|---|---|
| Yüksek verim (8 lb/ft³) | 128 g | 3,8 kg | ~200 kg = **8 çuval (25 kg)** |
| Standart (15 lb/ft³) | 240 g | 7,2 kg | ~375 kg = **15 çuval (25 kg)** |

Türkiye'de tuz **25 kg tablet** olarak satılır; aracın verdiği 40 lb (18,1 kg) çuval sayısını 0,73 ile çarparak Türk çuval sayısına çevirin. Tablet tuz kullanın: kaya tuzu ve iri deniz tuzu hazneyi köprüleştirir ve valfi tıkar.

---

## Sodyum: Türkiye'deki asıl sınır

İyon değişimi kalsiyum ve magnezyumu **sodyumla** takas eder. Giderilen her 1 °fH sertlik, suya yaklaşık **4,6 mg/L sodyum** ekler.

Örnekteki 33,4 °fH tam olarak yumuşatılırsa suya **154 mg/L** sodyum girer. İnsani Tüketim Amaçlı Sular Hakkında Yönetmelik'te sodyum için sınır değer **200 mg/L**'dir; şebeke suyunda hâlihazırda bulunan sodyum da eklendiğinde 35 – 40 °fH üzerindeki sularda bu sınır fiilen aşılır. Bu yüzden Türkiye'de doğru kurulum şudur:

* Mutfak musluğunu ve içme suyu hattını yumuşatma devresinin **dışında** bırakın, ya da
* Karışım (bypass) vanasıyla çıkış sertliğini **8 – 15 °fH** aralığında tutun. Kireç sorununu çözer, sodyumu düşük tutar, tuz tüketimini de azaltır.

Sıfır sertlikte su üretmek ayrıca gereksizdir: kombi eşanjörünü ve şofbeni koruyan eşik zaten bu banttır ve düşük sertlikli su tesisatta korozyon dengesini bozabilir.

---

## Debi ve tesisat uyumu

| Banyo sayısı | Tepe debi | Önerilen vana |
|---|---|---|
| 1 | 26 L/dk (7 GPM) | DN20 (3/4 in) |
| 2 | 38 L/dk (10 GPM) | DN25 (1 in) |
| 3 | 49 L/dk (13 GPM) | DN25 |
| 4 | 61 L/dk (16 GPM) | DN32 (1-1/4 in) |

1 GPM = 3,785 L/dk. Türkiye'de dairelerde tesisat çoğunlukla PPR 20/25/32 mm'dir; kolon hattı DN20 ise DN32 vanalı bir cihaz koymak debi kazandırmaz. Cihaz basınç kaybı nedeniyle servis basıncının 2 barın altına düşmemesine dikkat edin.

Rejenerasyon atık suyu litre başına yaklaşık 5,3 L'dir: 30 L reçine için çevrim başına ~160 L, yılda ~8,3 m³ tuzlu su. Bu su kanalizasyona verilir. Fosseptikle çalışan bir yapıda tuzlu deşarj biyolojik arıtmayı bozar; ayrıca bazı idarelerin deşarj yönetmeliklerinde klorür sınırı bulunur.

---

## Sık sorulan sorular

### 4 kişilik aile için hangi cihaz gerekir?

30 °fH sertlik ve 7 günlük çevrimde yaklaşık **135 m³·°fH**, yani 25 – 30 litre reçineli bir kabin cihaz yeter. Sertlik 45 °fH ise aynı hane 40 – 50 litre reçineye çıkar. Cihaz etiketinde kapasite grain olarak yazıyorsa 154,3 ile bölerek m³·°fH'ye çevirin ve satıcının hangi tuz dozunda bu değeri verdiğini sorun; iki kat fark eden bir soru budur.

### Sertliğimi nasıl öğrenirim?

Üç yol var: belediyenin veya su idaresinin internet sitesinde yayımlanan periyodik su analiz raporu, 20 – 30 TL'lik damlatmalı test kiti, ya da akredite laboratuvar analizi. Rapordaki değer mg/L CaCO₃ ise 10'a bölüp °fH bulun. Kuyu suyunda mevsimsel değişim büyük olabildiği için tek ölçümle karar vermeyin; ayrıca demir ve manganezi de ölçtürün.

### Yumuşatıcı kombiyi kireçten korur mu?

Evet, ve Türkiye'de cihazın satın alınma nedeni büyük ölçüde budur. Kullanma suyu tarafındaki kireç, eşanjör ve boyler yüzeyinde yalıtkan bir tabaka oluşturarak ısı transferini düşürür, sonunda arızaya götürür. Isıtma devresinin **dolum suyu** için ise üreticinin kılavuzundaki sertlik ve iletkenlik koşullarına bakın; bazı kazanlarda yumuşatma değil demineralize su istenir.

### Rejenerasyon ne sıklıkta olmalı?

Sayaçlı (talebe göre çalışan) cihazlar tüketime göre tipik olarak 3 – 14 günde bir rejenere olur. Yüksek verim tuz dozunda 7 gün, tuz ekonomisi ile su kalitesi arasındaki dengeyi iyi kurar. Zaman ayarlı cihazlar Türkiye'de hâlâ satılıyor ama tüketim düştüğünde boşa tuz harcarlar; sayaçlı modeli tercih edin.

### Yumuşatıcı ile su arıtma cihazı aynı şey mi?

Değil. Yumuşatıcı yalnızca sertlik iyonlarını ve çözünmüş demiri iyon değişimiyle alır; klor, nitrat, bakteri, kurşun ve tortuyu almaz. Bunlar için aktif karbon, ters ozmoz veya UV gerekir. Tipik doğru sıralama şöyledir: tortu filtresi, gerekiyorsa demir filtresi, yumuşatıcı, mutfakta ayrı bir içme suyu ünitesi.
