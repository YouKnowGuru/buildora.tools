## Isı yalıtımı hesaplama ve TS 825 rehberi

Araç bir yüzeyin alanını, karkas kaybını, hedef ısı direncini ve malzeme türünü alır; gereken kalınlığı, satın alınacak levha veya torba sayısını, püskürtme köpük için board-feet hacmini ve tahmini maliyeti verir.

**Kalibrasyon notu.** Hesap **IECC 2021 / IRC Tablo N1102.1.3** tavsiye değerlerine, ABD'nin 1 – 8 iklim bölgesine ve **imperial R değerine (ft²·°F·h/BTU)** dayanır; ambalaj birimleri ABD'deki ft² kaplamalı şilte paketleri, lb cinsinden dökme torbalar ve board-feet'tir. Türkiye'de ölçüt **TS 825 Binalarda Isı Yalıtım Kuralları**dır: dört derece-gün bölgesi ve **W/m²K cinsinden U değeri** üst sınırları. Uygulama ise **Binalarda Enerji Performansı Yönetmeliği** ile ruhsata esas ısı yalıtım projesi ve **Enerji Kimlik Belgesi** üzerinden yürür. Araç Türk standardına göre hesap yapmaz; sonucunu aşağıdaki dönüşümle okuyun.

---

## R değerinden U değerine

En kritik köprü budur. ABD R değeri ile Avrupa R değeri aynı harfi taşır ama aynı birim değildir:

```
R_SI (m2K/W) = imperial R / 5,678
U (W/m2K)    = 1 / toplam R_SI
kalinlik (m) = R_SI x isi iletkenligi (W/mK)
```

| Aracın verdiği R | R (m²K/W) | Yalnız yalıtım tabakası U (W/m²K) |
|---|---|---|
| R-13 | 2,29 | 0,44 |
| R-15 | 2,64 | 0,38 |
| R-19 | 3,35 | 0,30 |
| R-21 | 3,70 | 0,27 |
| R-30 | 5,28 | 0,19 |
| R-38 | 6,69 | 0,15 |
| R-49 | 8,63 | 0,12 |

Tablodaki U sütunu yalnızca yalıtım tabakasını sayar. Gerçek eleman U değerinde tuğla, sıva, beton ve iç ile dış yüzey ısı geçiş dirençleri de vardır; bu yüzden gerçek U her zaman tablodakinden bir miktar küçük çıkar.

---

## TS 825 bölgeleri ve U üst sınırları

| Bölge | Örnek iller | Duvar | Tavan | Taban | Pencere |
|---|---|---|---|---|---|
| **1. bölge** | Adana, Antalya, İzmir, Mersin, Hatay | 0,70 | 0,45 | 0,70 | 1,8 |
| **2. bölge** | İstanbul, Bursa, Kocaeli, Samsun, Muğla | 0,60 | 0,40 | 0,60 | 1,8 |
| **3. bölge** | Ankara, Konya, Eskişehir, Kayseri, Diyarbakır | 0,50 | 0,30 | 0,45 | 1,8 |
| **4. bölge** | Erzurum, Kars, Ardahan, Ağrı, Sivas, Van | 0,40 | 0,25 | 0,40 | 1,8 |

Değerler W/m²K cinsindendir. Standart dönemsel olarak yenilenir; kesin sınırları yürürlükteki baskıdan alın. ABD'nin 8 iklim bölgesi ile Türkiye'nin 4 bölgesi birbirine oturmaz: kabaca 1. bölge IECC Zone 2 – 3, 2. bölge Zone 4, 3. bölge Zone 4 – 5, 4. bölge Zone 6 – 7 karşılığıdır.

---

## Mantolama kalınlığı: hesap ile uygulama arasındaki fark

19 cm delikli tuğla ve iki yüz sıvadan oluşan tipik bir dolgu duvarın direnci yaklaşık **0,74 m²K/W** olur. λ = 0,035 W/mK bir levha ile:

| Bölge | Duvar U sınırı | Gereken ek R | Hesaplanan kalınlık | Uygulamada yaygın |
|---|---|---|---|---|
| 1. bölge | 0,70 | ~0,7 | ~2,5 cm (1,0 in) | 3 – 4 cm |
| 2. bölge | 0,60 | ~0,9 | ~3,5 cm (1,4 in) | 4 – 5 cm |
| 3. bölge | 0,50 | ~1,3 | ~4,5 cm (1,8 in) | 5 – 6 cm |
| 4. bölge | 0,40 | ~1,8 | ~6,5 cm (2,6 in) | 8 – 10 cm |

Uygulamadaki kalınlıkların hesaplanandan yüksek olması güvenlik payı değil, üç somut sebeptir: TS 825'in asıl ölçütü eleman U'su değil binanın **yıllık ısıtma enerjisi ihtiyacıdır**; kolon, kiriş ve döşeme alınlarındaki **ısı köprüleri** hesaba ayrıca girer; ve piyasadaki levhaların gerçek ısı iletkenliği çoğu zaman 0,038 – 0,040'tır.

---

## Malzemeler: Türk piyasası ile aracın listesi

| Malzeme | λ (W/mK) | Türkiye'de tipik yer | Aracın karşılığı |
|---|---|---|---|
| EPS (beyaz levha) | 0,035 – 0,040 | Dış cephe mantolama | Rigid foam board |
| Grafitli EPS | 0,031 – 0,033 | İnce kesit gereken cephe | — |
| XPS | 0,030 – 0,035 | Temel, bodrum perde, teras çatı | XPS, R-5/inç |
| Taşyünü | 0,035 – 0,040 | Yangın sınıfı gereken cephe, ara bölme | Mineral wool, R-3,8 – 4,2 |
| Camyünü şilte | 0,032 – 0,040 | Çatı arası, asma tavan, çelik karkas | Fiberglass batt, R-3,1 – 3,4 |
| PIR / PUR levha | 0,022 – 0,028 | Sandviç panel, teras çatı | Polyiso, R-6,0 – 6,5 |
| Püskürtme poliüretan | 0,024 – 0,028 | Sanayi çatısı, metal yüzey | Closed-cell foam, R-6,5 – 7,0 |

Selüloz dökme yalıtım Türkiye'de neredeyse hiç kullanılmaz; aracın "kaç torba" hesabı ABD'nin ahşap karkas çatı arası kültürüne aittir. Türkiye'de çatı arası camyünü şilte, teras çatı XPS veya PIR levha ile yalıtılır.

---

## Karkas kaybı yerine sürekli tabaka

ABD modeli yalıtımı **2x4 veya 2x6 dikmeler arasındaki kaviteye** koyar; aracın %7 – %10 karkas kaybı girdisi buradan gelir. Türkiye'de taşıyıcı sistem betonarme çerçeve, duvar delikli tuğla veya gazbeton dolgudur ve yalıtım **dışarıdan sürekli bir tabaka** olarak, yani mantolama olarak uygulanır.

Pratik sonuç: aracı kullanacaksanız karkas kaybını **%0 (sürekli)** seçin. Ama aracın çıkarmadığı kalemler vardır — yapıştırıcı yaklaşık 5 kg/m², dübel 6 – 8 adet/m², donatı filesi 1,1 m²/m², astar ve dekoratif sıva. Mantolama maliyetinin yarısından fazlası bu kalemler ile işçiliktir, levhanın kendisi değildir.

---

## Deprem ve yangın: sıralamayı belirleyen iki kısıt

* **Önce güçlendirme, sonra yalıtım.** Yapı **6306 sayılı Kanun** kapsamında riskli çıkabilecek bir binaysa, mantolama yapılan cephe güçlendirme sırasında sökülür. **TBDY 2018**'in mevcut bina değerlendirmesi **DD-2** tasarım depremi düzeyine göre yapılır; performans sonucunu görmeden cepheye para bağlamak yaygın ve pahalı bir hatadır.
* **Dolgu duvar deprem sırasında çatlar.** Mantolama sistemi taşıyıcı değildir ve dolgu duvarın hasarını engellemez; TBDY 2018 dolgu duvarların davranışı için ayrı kurallar verir. Yalıtım levhası ne kadar iyi olursa olsun, çatlayan duvarla birlikte hasar görür.
* **Cephe yanıcılık sınıfı.** **Binaların Yangından Korunması Hakkında Yönetmelik**, belirli yükseklik üzerindeki binalarda cephe malzemesinin yanıcılık sınıfını kısıtlar; yüksek binalarda EPS yerine **taşyünü** veya eşdeğer A sınıfı malzeme istenir. Aracın malzeme seçiminde bu kısıt hiç yoktur ve Türkiye'de seçimi çoğu zaman ısı iletkenliği değil bu madde belirler.

---

## Örnek hesap: Ankara'da 120 m² cephe

* **Alan:** 120 m² (1.292 ft²), 3. bölge
* **Mevcut duvar:** 19 cm delikli tuğla + sıva, R = 0,74 m²K/W
* **Hedef:** U ≤ 0,50 → gereken toplam R = 2,00 m²K/W
* **Ek R:** 1,26 → EPS ile 0,044 m, **5 cm uygulanır**
* **Kontrol:** 0,05 / 0,035 = 1,43; toplam R = 2,17 → **U = 0,46 W/m²K**, sınırın altında
* **Levha:** 120 × 1,05 = **126 m²**, artı yapıştırıcı, dübel, file ve sıva

İlginç kısım şu: 2,17 m²K/W toplam direnç imperial olarak yaklaşık **R-12**'ye denk gelir. Aynı bina ABD'de Zone 3'te olsaydı araç R-15 veya R-13 artı 5 ci isterdi. Yönetmeliğe uygun bir Türk mantolamalı duvarı, ABD ölçütünün bir kademe altında kalır.

---

## Sık sorulan sorular

### Hangi bölgede kaç cm mantolama gerekir?

Kaba referans: 1. bölgede 3 – 4 cm, 2. bölgede 4 – 5 cm, 3. bölgede 5 – 6 cm, 4. bölgede 8 – 10 cm. Bu değerler λ = 0,035 W/mK levha ve tipik delikli tuğla duvar içindir. Kesin kalınlık, binanın TS 825 yıllık ısıtma enerjisi hesabından çıkar; tek bir duvar kesitinden değil.

### Aracın verdiği R-38 çatı değerini nasıl okurum?

R-38, 6,69 m²K/W demektir ve tek başına 0,15 W/m²K yapar. 3. bölgede tavan sınırı 0,30 W/m²K olduğuna göre bu değer gerekenin iki katıdır. Aracın tavsiyesi Türk sınırının üzerinde kalır; imperial R değerini önce 5,678'e bölün, sonra bölge sınırıyla karşılaştırın.

### Yalıtımı içeriden yapabilir miyim?

Teknik olarak mümkündür, tercih edilen çözüm değildir. İçeriden yalıtımda kolon, kiriş ve döşeme alınları **ısı köprüsü** olarak açıkta kalır, iç alan küçülür ve yoğuşma riski duvarın iç yüzeyine taşınır. Kat malikleri kararı alınamadığı için tek daireyi içeriden yalıtmak zorunda kalıyorsanız, yoğuşma hesabı ve buhar kesici detayı yaptırmadan uygulamayın.

### Buhar kesici gerekli mi?

Türkiye'nin büyük bölümünde dışarıdan sürekli yalıtım yapıldığı için duvarda ayrı bir buhar kesiciye genellikle gerek kalmaz; kritik nokta yoğuşma hesabıdır. Çatı arasında ve çelik karkas cephede buhar kesici kullanılır ve **kesinlikle iki yüzü de buhar geçirimsiz bir kesit kurulmamalıdır**; arada kalan nem kuruyamaz.

### Eski yalıtımın üzerine yenisi yapılır mı?

Çatı arasında evet, kuru ve sağlamsa mevcut şiltenin üzerine ikinci kat serilebilir. Cephede mevcut mantolamanın yapışma ve dübel durumu bilinmeden üzerine ikinci sistem kurulmaz; söküp yeniden yapmak daha güvenlidir.
