## Dış cephe kaplaması hesaplama rehberi

Araç bina çevresini ve duvar yüksekliğini alarak brüt cephe alanını çıkarır, çatı alınlıklarını ekler, kapı ve pencere boşluklarını düşer, fire payı uygular ve sonucu ABD'nin ticari birimiyle — **square** — verir. Aksesuar metrajını (başlangıç profili, köşe profili, J profili) ayrıca listeler.

**Kalibrasyon notu.** Hesap Kuzey Amerika kaplama pratiğine oturur: **1 square = 100 ft² = 9,29 m²**, malzeme listesi vinil lap siding, fiber çimento plank, sedir shingle ve metal panel, ambalaj birimi karton ve bundle, maliyet USD/ft². Türkiye'de cephe **m² ile** ölçülür ve fiyatlanır, metraj referansı **Yapı İşleri İnşaat Birim Fiyatları**dır ve baskın çözüm ABD'deki hiçbir satırla eşleşmez: **ısı yalıtımlı sıvalı cephe**, yani mantolama. Geometri bire bir aktarılabilir, birimler ve malzeme listesi aktarılamaz.

---

## Hesap sırası

```
cevre        = 2 x (bina uzunlugu + bina genisligi)
brut alan    = cevre x duvar yuksekligi
alinlik alan = 0,5 x taban genisligi x mahya yuksekligi x adet
net alan     = brut alan + alinlik alan - bosluk alani
siparis      = net alan x (1 + fire yuzdesi / 100)
square       = siparis (ft2) / 100
```

Birim dönüşümü: **1 square = 9,29 m²**, **1 m² = 0,108 square**. Aracın verdiği square sayısını 9,29 ile çarpın, m² çıkar.

Duvar yüksekliği için **Planlı Alanlar İmar Yönetmeliği** kat yüksekliklerini esas alın: konutta brüt kat yüksekliği uygulamada 3,00 m, ticari zemin katta 3,50 – 4,50 m'dir. Dört katlı bir apartmanın cephe yüksekliği 12,00 m (39,4 ft) eder — ABD'deki iki katlı 5,5 m'lik referansın iki katından fazla.

**Alınlık uyarısı.** Türkiye'de konut stoğu ağırlıklı olarak **teras çatı** veya **kırma çatı**dır; her ikisinde de üçgen alınlık yoktur. Aracı kullanırken alınlık sayısını **0** girin. Beşik çatılı villa ve dağ evleri istisnadır.

---

## Cephe sistemleri ve fire payları

| Sistem | Türkiye'de yaygınlığı | Fire payı | Ağırlık |
|---|---|---|---|
| **Isı yalıtımlı sıvalı cephe (mantolama)** | Baskın çözüm | %5 – 8 | ~15 kg/m² |
| Seramik veya granit kaplama, yapıştırma | Yaygın, çoğu zaman alt katlarda | %8 – 12 | ~40 kg/m² |
| Doğal taş kaplama | Villa, bodrum kotu, kamu yapısı | %10 – 15 | ~80 kg/m² |
| Havalandırmalı giydirme cephe | Ofis, AVM, lüks konut | %10 – 15 | ~25 kg/m² |
| Alüminyum kompozit panel | Ticari cephe, yenileme | %10 – 15 | ~8 kg/m² |
| Tuğla veya klinker kaplama | Villa, az katlı yapı | %8 – 10 | ~55 kg/m² |
| Ahşap kaplama (termowood, lambri) | Villa, dağ evi, teras | %12 – 18 | ~20 kg/m² |
| PVC siding | Prefabrik, hafif çelik, bahçe yapıları | %5 – 10 | ~5 kg/m² |

Aracın fire yüzdeleri malzeme bazında verilmiştir ve mantığı Türkiye'de de geçerlidir: kırılgan ve büyük parçalı kaplamada kesme kaybı artar. Kaplama ağırlığı sütununu boşuna eklemedik; deprem bölümünde geri döneceğiz.

---

## Boşluk ölçüleri: aracın varsayımı Türkiye'de küçük kalır

| Boşluk | Türkiye'de yaygın ölçü | Alan | Aracın ABD varsayımı |
|---|---|---|---|
| Giriş kapısı | 100 × 210 cm | 2,10 m² (22,6 ft²) | 21 ft² |
| Balkon veya teras doğraması | 180 × 230 cm | 4,14 m² (44,6 ft²) | 42 ft² |
| Standart pencere | 120 × 140 cm | 1,68 m² (18,1 ft²) | 12 ft² |
| Salon penceresi | 200 × 160 cm | 3,20 m² (34,4 ft²) | 25 ft² |
| Tek araç garaj kapısı | 250 × 210 cm | 5,25 m² (56,5 ft²) | 63 ft² |

Kritik nokta pencerede: Türk standart penceresi 1,68 m², aracın varsayımı 1,11 m². Otuz pencereli bir apartmanda aracın hazır değerlerini kullanırsanız **17 m² eksik düşmüş** olursunuz, yani gereğinden fazla malzeme sipariş edersiniz. Boşlukları kendi ölçülerinizle girin.

---

## Türkiye'de cepheyi ayrı bir iş olarak hesaplayamazsınız

ABD modelinde kaplama, OSB kaplama ve su yalıtım membranı üzerine çakılan bir yağmur perdesidir; yalıtım duvarın içindedir. Türkiye'de bu ayrım yoktur:

1. **Yalıtım cephenin kendisidir.** Mantolamada levha hem yalıtım hem kaplamanın altlığıdır; üstüne yalnızca birkaç milimetre file sıvası ve dekoratif kaplama gelir. Bu yüzden cephe metrajı ile yalıtım metrajı aynı m² üzerinden çıkar ve yapıştırıcı, dübel, file, astar ile mineral sıva ayrı kalemlerdir. Araç bunların hiçbirini listelemez.
2. **İskele başlı başına bir kalemdir.** Dört katlı ve üzeri bir binada cephe işi iskele olmadan yapılamaz; iskele metrajı, kurulum, kira süresi ve yüksekte çalışma güvenlik önlemleri toplam maliyetin belirgin bir kısmıdır. ABD'de tek veya iki katlı evlerde bu kalem çoğu zaman yoktur.
3. **Cephe ortak alandır.** **Kat Mülkiyeti Kanunu** kapsamında cephe ortak yerdir; kendi dairenizin cephesini tek başınıza kaplayamaz, rengini değiştiremezsiniz. Kat malikleri kararı gerekir.
4. **Görünüş değişikliği izne bağlı olabilir.** Cephe malzemesi ve rengi imar planı notlarına, kentsel tasarım rehberlerine ve koruma alanlarında **koruma bölge kurulu** kararına tabidir.

---

## Deprem çerçevesi: kaplamanın ağırlığı ve bağlantısı

* **Kaplama yapısal olmayan bir elemandır ama can güvenliği unsurudur.** **TBDY 2018**, yapısal olmayan elemanlar ve bina donanımı için ayrı hesap kuralları verir; giydirme cephe ve ağır kaplamaların bağlantıları **DD-2** tasarım depremi düzeyine göre boyutlandırılır. 6 Şubat 2023 depremlerinden sonraki hasar tespitlerinde, taşıyıcı sistemi ayakta kalan binalarda cepheden düşen kaplama ve dolgu duvar parçaları önemli bir yaralanma sebebiydi.
* **Ağır kaplama deprem kütlesi ekler.** Tablodaki ağırlık sütunu bunun içindir: 3 cm doğal taş 80 kg/m², mantolama 15 kg/m². 500 m² cephede fark 32 ton eder ve bu kütle deprem yüklerine doğrudan girer. Mevcut bir binaya sonradan ağır kaplama takmak, yapının hesabını değiştiren bir müdahaledir.
* **Dilatasyon kesilmez.** Cephe kaplaması bina dilatasyon derzini köprülememelidir; aksi halde iki blok deprem sırasında birbirine bağlanır.
* **Sıra önemlidir.** Bina **6306 sayılı Kanun** kapsamında riskli çıkabilecekse, güçlendirme kararından önce yapılan cephe yatırımı sökülür.

---

## Örnek hesap: 12 m x 10 m, 4 katlı apartman

* **Çevre:** 2 × (12 + 10) = 44 m (144 ft)
* **Duvar yüksekliği:** 4 × 3,00 = 12,00 m (39,4 ft)
* **Brüt alan:** 44 × 12 = **528 m² (5.683 ft²)**
* **Alınlık:** kırma çatı, **0 m²**
* **Boşluklar:** 32 pencere × 1,68 + 8 doğrama × 4,14 + giriş 2,10 = **89 m²**
* **Net alan:** 528 − 89 = **439 m² (4.726 ft²)**
* **%7 fire ile:** **470 m²**, aracın diliyle **50,6 square**
* **Ek kalemler:** aynı 470 m² için yapıştırıcı, dübel, file, sıva ve 528 m² cephe iskelesi

---

## Sık sorulan sorular

### "Square" ne demek, Türkiye'de kullanılır mı?

Kuzey Amerika'da kaplama ve çatı işlerinin ticari birimi olan square, tam olarak 100 ft², yani **9,29 m²**dir. Türkiye'de bu birim kullanılmaz; hem malzeme hem işçilik m² ile satılır. Aracın verdiği square sayısını 9,29 ile çarparak m²'ye çevirin, sonra yerel teklifle karşılaştırın.

### Vinil siding Türkiye'de yapılır mı?

Betonarme apartman stoğunda neredeyse hiç. PVC ve benzeri hafif kaplamalar prefabrik yapılarda, hafif çelik villalarda, bahçe yapılarında ve depo cephelerinde görülür. Kalıcı konut cephesinde beklenen çözüm mantolama, seramik, doğal taş veya giydirme cephedir.

### Fire payı ne kadar olmalı?

Sıvalı cephede %5 – 8 yeterlidir. Büyük ebatlı ve kırılgan kaplamalarda — granit, kompakt laminat, doğal taş — %10 – 15 alın. Çok bacalı, çıkmalı, saçaklı karmaşık cephelerde bu bandın üstüne %5 daha ekleyin. Aynı partiden yedek bırakmak da önemlidir: ton tutturma sorunu Türkiye'de seramik ve boyalı panelde sık yaşanır.

### Pencere ve kapı boşlukları düşülür mü?

Evet, ama Türkiye'de bir istisna vardır: mantolamada levha doğrama kenarına kadar gelir ve **pencere kenarlarında ayrıca denizlik, damlalıklı profil ve fileli köşe** işçiliği çıkar. Yani alan düşülürken metrekare azalır, boşluk çevresi arttıkça işçilik artar. Yaklaşık maliyette boşluk çevresini metretül olarak ayrı hesaplayın.

### Cephe kaplamasını tek başıma değiştirebilir miyim?

Hayır. Cephe **Kat Mülkiyeti Kanunu** kapsamında ortak yerdir; malzeme veya renk değişikliği kat malikleri kurulu kararına bağlıdır. Tek dairenin balkonunu kaplamak bile bu kapsama girebilir. Karar alınmadan yapılan uygulamada eski hale getirme yükümlülüğü doğar.
