## Asfalt tonaj hesaplama rehberi

Kaplanacak alanın uzunluğunu, genişliğini ve hedeflenen **sıkışmış kalınlığı** girin. Araç hacmi çıkarır, karışımın birim hacim ağırlığını uygular, fire payını ekler ve ton fiyatı girdiğinizde malzeme maliyetini verir. Metrik ve imperial birimler arasında tek tıkla geçiş yapar.

**Kalibrasyon notu.** Araç ABD pazarına göre kurgulanmıştır: varsayılan birim hacim ağırlık **145 lb/ft³**, kalınlıklar inç, tonaj ise **kısa ton (2.000 lb = 907 kg)** cinsindendir. Türkiye'de asfalt **metrik ton** ile satılır, kalınlık cm ile verilir ve şartname referansı **Karayolları Genel Müdürlüğü Karayolu Teknik Şartnamesi (KTŞ)**, birim fiyat referansı ise **Yapı İşleri İnşaat Birim Fiyatları**dır. Araç Türk şartnamelerine göre hesap yapmaz; sonucu mertebe kontrolü olarak okuyun.

---

## Kısa ton ile metrik ton karışıklığı

Bu, Türkiye'den sipariş verirken en çok yanlış giden yer. Aracın "ton" olarak verdiği sayı kısa tondur:

```
1 kisa ton    = 0,907 metrik ton
1 metrik ton  = 1,102 kisa ton
plente siparis = araclarin verdigi ton x 0,907
```

İki hata kısmen birbirini götürür: metrik ton %10 daha ağırdır, ama Türkiye'de BSK için kullanılan **2,35 – 2,40 t/m³** birim hacim ağırlık, aracın 145 lb/ft³ (2.322 kg/m³) varsayımından yaklaşık %3 yüksektir. Net sonuç, aynı tonun Türkiye'de yaklaşık **%6 daha fazla alan** kaplamasıdır. Küçük bir işte fark önemsiz, 2.000 m² üzeri bir otoparkta bir kamyon yükü eder.

---

## Hesap sırası

```
alan            = uzunluk x genislik
hacim           = alan x sikismis kalinlik
kutle           = hacim x birim hacim agirlik
kg/m2 karsiligi = kalinlik(cm) x 24
fireli miktar   = kutle x (1 + fire yuzdesi / 100)
```

Fire payı olarak **%5 – %10** alın: silindir sıkıştırması, kenar taşması ve düzensiz sınırlar bu bandın içindedir. Gevşek serme kalınlığı, sıkışmış kalınlığın yaklaşık **1,20 – 1,25 katıdır**; finişerden çıkan tabaka silindir altında bu oranda oturur.

---

## Kalınlığa göre kaplama tablosu

2,40 t/m³ BSK için, fire hariç:

| Sıkışmış kalınlık | Serme miktarı | 1 metrik tonun kaplayacağı alan | Tipik kullanım |
|---|---|---|---|
| **4 cm (1,6 in)** | 96 kg/m² | 10,4 m² (112 ft²) | Aşınma tabakası, yol yenileme |
| **5 cm (2,0 in)** | 120 kg/m² | 8,3 m² (89 ft²) | Standart aşınma tabakası |
| **6 cm (2,4 in)** | 144 kg/m² | 6,9 m² (74 ft²) | Hafif trafikli site içi yol |
| **8 cm (3,1 in)** | 192 kg/m² | 5,2 m² (56 ft²) | Binder tabakası, otopark |
| **10 cm (3,9 in)** | 240 kg/m² | 4,2 m² (45 ft²) | Ağır araç trafiği, tır manevra alanı |
| **12 cm (4,7 in)** | 288 kg/m² | 3,5 m² (38 ft²) | Bitümlü temel dahil tam kesit |

---

## Türkiye'de kesit nasıl kurulur

KTŞ mantığı tek bir "kalınlık" yerine tabakalı bir üstyapı kurar. Araç tek tabaka hesaplar, dolayısıyla çok tabakalı bir kesitte her tabakayı ayrı ayrı girmeniz gerekir:

| Tabaka | Sıkışmış kalınlık | Not |
|---|---|---|
| Aşınma tabakası (BSK) | 4 – 5 cm (1,6 – 2,0 in) | Yüzey, agrega gradasyonu ince |
| Binder tabakası (BSK) | 6 – 8 cm (2,4 – 3,1 in) | Ara tabaka, iri agregalı |
| Bitümlü temel | 8 – 12 cm (3,1 – 4,7 in) | Ağır trafikte tam kesit |
| Plent-miks temel | 15 – 20 cm (6 – 8 in) | Çimento veya bitüm bağlayıcısız |
| Granüler alttemel | 20 – 30 cm (8 – 12 in) | Taşıma gücü ve drenaj |

Türkiye'ye özgü üç nokta:

1. **Konut bahçesinde asfalt yaygın değil.** Site içi yollar ve otoparklar ağırlıklı olarak **beton kilit taşı (parke)** ile kaplanır. Kilit taşı m² ile satılır, tonajla ilgisi yoktur; asfalt hesabına girmeden önce hangi kaplamayı yapacağınıza karar verin.
2. **Alt zemin belirleyicidir.** İç ve Doğu Anadolu'da donma-çözünme çevrimi ve killi zeminlerin taşıma gücü, kaplama kalınlığından daha kritiktir. Yetersiz sıkıştırılmış bir alttemel üzerine serilen asfalt, kalınlığı doğru olsa da bir kış çıkarmaz.
3. **Fiyat referansı.** Belediye ve kamu işlerinde metraj, Bakanlığın yayımladığı **Yapı İşleri İnşaat Birim Fiyatları** üzerinden değerlendirilir. Aracın USD cinsinden verdiği malzeme maliyeti yerel plent fiyatına göre kontrol edilmelidir.

---

## Örnek hesap: 6 m x 15 m site içi yol

* **Alan:** 6 × 15 = 90 m² (969 ft²)
* **Sıkışmış kalınlık:** 5 cm (2,0 in)
* **Hacim:** 90 × 0,05 = 4,5 m³ (5,9 yd³)
* **Kütle:** 4,5 × 2,40 = 10,8 metrik ton
* **%7 fire ile:** **11,6 metrik ton** (12,8 kısa ton)
* **Serme kontrolü:** 120 kg/m² × 90 m² = 10,8 ton, tabloyla uyumlu

---

## Sık sorulan sorular

### İki araçlık bir otopark için kaç ton asfalt gerekir?

6 m × 6 m (36 m², 388 ft²) bir alanda 5 cm sıkışmış aşınma tabakası yaklaşık **4,3 metrik ton** eder; %7 fire ile **4,6 ton**. Aynı alan 8 cm binder ile birlikte yapılırsa toplam 11 – 12 tona çıkar. Plentler genellikle minimum sipariş miktarı uygular, bu ölçekte tek kamyonluk bir yükün altına düşmek zordur.

### Bahçe yolu için kaç cm asfalt yeterli?

Binek araç trafiği için iyi sıkıştırılmış 20 – 25 cm granüler alttemel üzerine **5 – 6 cm** sıkışmış BSK yeterlidir. Kamyon veya karavan girecekse **8 – 10 cm**, tercihen binder ve aşınma olarak iki tabakada serilir. Tek seferde 8 cm'den fazla serip sıkıştırmak, alt kısımda yetersiz sıkışma bırakır.

### Sıkışmış kalınlık ile serme kalınlığı farkı nedir?

Araç ve tüm şartnameler **sıkışmış** kalınlıkla çalışır. Finişer arkasındaki gevşek tabaka bunun 1,20 – 1,25 katıdır; yani 5 cm sıkışmış kalınlık için yaklaşık 6 – 6,3 cm gevşek serme yapılır. Mastar kontrolünü silindir geçişlerinden sonra yapın.

### 1 m³ asfalt kaç ton eder?

BSK için **2,35 – 2,40 ton**. Aracın imperial modunda kullandığı "1 yd³ yaklaşık 2 kısa ton" kuralı da aynı yoğunluğun karşılığıdır. Geri kazanılmış asfalt (RAP) içeren veya boşluklu (drenaj) karışımlarda yoğunluk düşer; plentin karışım dizaynındaki değeri esas alın.

### Aracın verdiği maliyet Türkiye için geçerli mi?

Hayır. Ton fiyatı bitüm endeksine, plent mesafesine ve döviz kuruna bağlı olarak hızla değişir. Aracı yalnızca **miktar** için kullanın, fiyatı yerel plentten alacağınız güncel teklifle veya kamu işi yapıyorsanız yürürlükteki birim fiyatla çarpın.
