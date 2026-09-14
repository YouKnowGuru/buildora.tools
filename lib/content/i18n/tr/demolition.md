## Yıkım maliyeti hesaplama rehberi

Bir konutun, garajın, deponun, havuzun veya yalnızca iç mekân imalatlarının yıkım maliyetini tahmin eder. Yapı türünü, brüt alanı, kat sayısını ve yıkım yöntemini girin; araç işçiliği, moloz taşımayı ve ruhsat bedelini ayrı ayrı verir.

**Kalibrasyon notu.** Birim maliyetler, moloz üretim katsayıları ve taşıma kalemleri **ABD piyasa ortalamalarına** ve Kuzey Amerika mevzuatına (belediye yıkım izni, EPA NESHAP asbest denetimi, 30 yd³ konteyner) dayanır. Araç ne **3194 sayılı İmar Kanunu** sürecine ne de **Yapı İşleri İnşaat Birim Fiyatları**na göre hesap yapar. Sayıları mertebe olarak alın, sonra yürürlükteki Bakanlık birim fiyatlarıyla veya yerel yüklenici teklifiyle karşılaştırın.

---

## Birim alana yıkım maliyeti

ABD ortalamaları, **sadece işçilik ve makine**:

| Yapı türü | m² başına | ft² başına | Tipik toplam |
|---|---|---|---|
| Ahşap karkas konut | 43 – 86 USD | 4 – 8 USD | 8.000 – 25.000 USD |
| **Yığma (tuğla, taş) konut** | 65 – 129 USD | 6 – 12 USD | 15.000 – 45.000 USD |
| Müstakil garaj | 32 – 65 USD | 3 – 6 USD | 1.500 – 8.000 USD |
| Hafif sanayi yapısı | 65 – 129 USD | 6 – 12 USD | 20.000 – 80.000 USD |
| **Ağır betonarme sanayi** | 108 – 194 USD | 10 – 18 USD | 50.000 – 200.000 USD ve üzeri |
| Sadece iç yıkım (kaba tesviye) | 22 – 43 USD | 2 – 4 USD | 3.000 – 15.000 USD |
| Gömme havuz (kırıp doldurma) | 65 – 161 USD | 6 – 15 USD | 4.000 – 20.000 USD |

Her **22,9 m³ (30 yd³)** moloz konteyneri için 400 – 700 USD, izin bedelleri için 300 – 1.000 USD eklenir.

Ahşap karkas satırı ABD istatistiğinin ağırlık merkezidir; Türkiye'de neredeyse hiç karşılığı yoktur. Buradaki yapı stoğu ezici çoğunlukla **betonarme çerçeve**, kırsalda ve 1960 öncesi kentte **yığma**, sanayide **çelik**tir. Tablonun ilk satırını atlayın, ikinci ve beşinci satırdan başlayın.

---

## Hesap sırası

```
iscilik        = alan x birim maliyet x yontem katsayisi
moloz hacmi    = alan x moloz katsayisi x kat sayisi
konteyner      = moloz hacmi / 22,9 m3
tasima         = konteyner sayisi x 550 USD
toplam maliyet = iscilik + tasima + izin bedeli
```

Yöntem katsayıları: **mekanik 1,00**, **seçici söküm 1,40**, **elle yıkım 1,65**.

Ekskavatör, kırıcı veya makas ile yapılan **mekanik yıkım** neredeyse her zaman en ucuzdur, çünkü işçilik saatini keser. **Elle yıkım** dar kentsel parsellerde, bitişik nizam duvarlarında ve makinenin giremediği yerlerde zorunludur. **Seçici söküm** %40 pahalıdır ama demir, ahşap kiriş, kiremit ve alüminyum doğramayı geri kazandırır; Türkiye'de hurda demirin değeri bu farkın önemli bir kısmını geri getirir.

---

## Türkiye'de yıkım nasıl ölçülür ve nasıl izne bağlanır

ABD modelinden ayrılan üç temel nokta var:

1. **Metraj m² değil m³ üzerinden yapılır.** Bakanlığın birim fiyat cetvellerinde yıkım kalemleri **yapı hacmi (m³)** ile fiyatlanır. Aracın sonucunu bir Türk yaklaşık maliyetiyle karşılaştırmak için önce hacme çevirin: `yapi hacmi = taban alani x yapi yuksekligi`. Betonarme, yığma ve ahşap yapılar için ayrı birim fiyatlar vardır.
2. **"Yıkım izni" değil, yıkım ruhsatı.** 3194 sayılı İmar Kanunu kapsamında yıkım, belediyeden alınan **yıkım ruhsatı** ile yapılır; ruhsatsız yapılarda ve metruk, tehlike arz eden yapılarda idare kendi kararıyla yıkıma gidebilir. Yapı **6306 sayılı Kanun** kapsamında riskli yapı olarak tespit edilmişse süreç kentsel dönüşüm mevzuatına geçer ve bazı harç ile vergi muafiyetleri devreye girer.
3. **Moloz kontrollü bir atıktır.** Yıkıntı atıkları **Hafriyat Toprağı, İnşaat ve Yıkıntı Atıklarının Kontrolü Yönetmeliği** kapsamındadır: taşıma için izin belgeli araç, döküm için belediyenin gösterdiği lisanslı saha gerekir. Büyükşehirlerde döküm sahası bedeli m³ üzerinden alınır ve toplam maliyette küçümsenmeyecek bir kalemdir.

---

## Deprem çerçevesi: Türkiye'de yıkımın asıl sebebi

ABD'de yıkımın motoru genellikle arsa ekonomisidir. Türkiye'de motor **deprem güvenliğidir** ve bu, hesabı iki yönden değiştirir:

* **Riskli yapı tespiti.** 6306 sayılı Kanun kapsamında yapılan tespit, mevcut binanın **TBDY 2018**'in mevcut bina değerlendirme esaslarına göre incelenmesine dayanır. Tasarım depremi olarak **DD-2** düzeyi (50 yılda aşılma olasılığı %10, yaklaşık 475 yıl tekrarlanma periyodu) esas alınır. Riskli çıkan yapının yıkımı bir tercih değil, yasal bir yükümlülüktür.
* **Hasarlı yapı yıkımı ayrı bir iştir.** 6 Şubat 2023 depremlerinden sonra ortaya çıkan hacmin gösterdiği gibi, ağır hasarlı bir binanın kontrollü yıkımı sağlam bir binanınkinden hem pahalı hem risklidir: taşıyıcı sistem öngörülemez davranır, çevre binaların tahliyesi gerekir. Aracın hasar durumu için girdisi yoktur; böyle bir işte tablodaki değerlerin **1,5 – 2,5 katını** öngörün.
* **Güçlendirme mi yıkım mı.** Riskli çıkan bir yapıda güçlendirme maliyeti, yeni yapım maliyetinin belirli bir oranını aştığında yıkıp yeniden yapmak ekonomik hale gelir. Bu karşılaştırma için yıkım maliyeti tek başına yeterli değildir; güçlendirme projesi ile birlikte değerlendirilmelidir.

---

## Yapı türüne göre moloz miktarı

| Yapı | Her 93 m² (1.000 ft²) için moloz | 30 yd³ konteyner |
|---|---|---|
| Ahşap karkas, 1 kat | ~99 m³ (130 yd³) | 4 – 5 |
| Yığma, 1 kat | ~153 m³ (200 yd³) | ~7 |
| Ahşap karkas, 2 kat | ~199 m³ (260 yd³) | ~9 |
| İç yıkım | ~42 m³ (55 yd³) | ~2 |
| Müstakil garaj | ~73 m³ (95 yd³) | ~3 |
| Gömme havuz, betonarme | ~69 m³ beton (90 yd³) | ~3 |

Betonarme moloz ağırdır: gevşek haldeki 1 m³ moloz **1,6 – 1,9 ton** gelir. Türkiye'de 8 – 12 m³ kasalı bir hafriyat kamyonu, hacim dolmadan **karayolu azami ağırlık sınırına** ulaşır. Yükü durduran kısıt hacim değil kütledir; kamyon sayısını buna göre hesaplayın.

---

## Örnek hesap: 140 m² tek katlı yığma yapı

* **Alan:** 140 m² (1.507 ft²), mekanik yıkım
* **İşçilik:** 140 × 90 USD = **12.600 USD**
* **Moloz:** 140 / 93 × 153 = **230 m³** (301 yd³)
* **Konteyner:** 301 / 30 = 10,0 → **10 sefer**
* **İzin bedeli:** 500 USD
* **Tahmini toplam: 18.600 USD**

Aynı yapıyı Türk usulü değerlendirirken hacme çevirin: 140 m² × 3,0 m = 420 m³. Bakanlık birim fiyatlarında yığma yapı yıkımı için verilen m³ fiyatını bu hacimle çarpın, sonra hafriyat taşıma ve döküm bedelini ekleyin.

---

## Sık sorulan sorular

### 140 m² bir evi yıkmak ne kadar tutar?

Aracın ABD parametreleriyle tek katlı yığma bir yapı **12.000 – 18.000 USD** işçilik verir; moloz taşıma ve izinle toplam **16.000 – 24.000 USD** bandına oturur. Türkiye'deki eşdeğer bir yapı için hesabı m³ üzerinden yeniden kurmak gerekir, çünkü toplam içinde taşıma ve döküm bedelinin payı belirgin biçimde daha yüksektir.

### En ekonomik yıkım yöntemi hangisi?

**Mekanik yıkım.** Elle yıkım aynı alanda %60 – %80 daha pahalıdır, çünkü makine gücünü işçilik saatiyle değiştirir. Seçici sökümde hurda demir farkın bir kısmını kapatır.

### Yıkım için izin gerekir mi?

Evet, her durumda. Aracın kalibre edildiği ABD modelinde bu, 200 – 1.000 USD bandında bir belediye yıkım izni ve ticari yapılarda federal EPA NESHAP kapsamında zorunlu asbest denetimidir. Türkiye'de süreç belediyeden alınan **yıkım ruhsatı**, hafriyat taşıma izin belgesi ve döküm sahası tahsisinden geçer; 6306 kapsamındaki yapılarda ayrı bir yol izlenir. Şantiyeyi açmadan önce mutlaka belediyenizle görüşün.

### Asbest varsa ne değişir?

Her şey, takvim dahil. Türkiye'de asbest kullanımı 2010 yılında yasaklandı; bu tarihten önce yapılmış binalarda **asbestli çimento (eternit) çatı levhaları**, boru ve yalıtım malzemesi görmek olağandır. Sökümü **Asbestle Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik** kapsamındadır: belgeli **asbest söküm uzmanı**, yazılı iş planı ve işe başlamadan önce ilgili bakanlığa bildirim zorunludur. Bertaraf, yıkımdan önce yapılır ve araca hiç girmeyen ayrı bir maliyet kalemidir.

### İç yıkım tek başına ne kadar tutar?

Taşıyıcı sistemi yerinde bırakıp bölme duvarları, kaplamaları ve tesisatı sökmek **m² başına 22 – 43 USD (ft² başına 2 – 4 USD)** mertebesindedir. İşçilik payı en yüksek kalemdir, çünkü tanımı gereği elle çalışılır. Apartman içi yıkımda ek kısıt vardır: kat malikleri kararı, çalışma saatleri ve molozun cepheden indirilmesi süreyi uzatır.
