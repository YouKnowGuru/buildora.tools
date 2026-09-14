## Hendek kazısı hesaplama rehberi: hacim, yatak malzemesi, dolgu ve nakliye

Hendek uzunluğu, genişliği ve derinliğini girin, yatak malzemesini seçin; araç kazı hacmini, yatak malzemesi miktarını, geri dolgu hacmini, kabarmış (gevşek) moloz hacmini, kamyon sefer sayısını ve maliyet dökümünü verir. Metrik (m / m³) ile emperyal (ft / yd³) birim arasında tek tuşla geçer.

**Kalibrasyon notu.** Aracın güvenlik eşikleri ve maliyet bandı **ABD mevzuatına ve piyasasına** dayanır: iksa zorunluluğu için **OSHA 29 CFR 1926 Subpart P**, gömme kablo derinliği için **NEC 300.5**, moloz taşıma için 14 yd³ (10,7 m³) kasalı kamyon, fiyatlar ise ABD'de **lineer foot** başına ortalamalar. Türkiye'de kazı güvenliği **Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği**, moloz **Hafriyat Toprağı, İnşaat ve Yıkıntı Atıklarının Kontrolü Yönetmeliği**, yaklaşık maliyet ise **Çevre, Şehircilik ve İklim Değişikliği Bakanlığı birim fiyatları** ile yürür. Aracın çıktısını mertebe olarak alın; sayıları yerel şartnameyle doğrulayın.

---

## Hacim formülleri

```
kazi hacmi     = uzunluk x genislik x derinlik
yatak hacmi    = uzunluk x genislik x yatak kalinligi
boru hacmi     = 3,14159 x (cap / 2)^2 x uzunluk
geri dolgu     = kazi hacmi - yatak hacmi - boru hacmi
gevsek moloz   = kazi hacmi x (1 + kabarma orani)
kamyon seferi  = yukari yuvarla(fazla gevsek hacim / kasa hacmi)
```

**Örnek: 30 m uzunluk × 0,60 m genişlik × 1,20 m derinlik, DN200 kanalizasyon hattı**

* **Kazı hacmi:** 30 × 0,60 × 1,20 = **21,6 m³** (28,3 yd³)
* **Yatak (15 cm mıcır):** 30 × 0,60 × 0,15 = **2,70 m³** (3,5 yd³)
* **Boru hacmi:** 3,14159 × 0,10² × 30 = **0,94 m³**
* **Geri dolgu ihtiyacı:** 21,6 − 2,70 − 0,94 = **18,0 m³** (23,5 yd³)
* **Gevşek moloz (%25 kabarma):** 21,6 × 1,25 = **27,0 m³** (35,3 yd³)
* **Uzaklaştırılacak fazlalık:** yaklaşık **4,5 m³** gevşek → 10 m³ kasalı bir kamyonda **1 sefer**

---

## Zemin sınıfı: hem yöntemi hem kabarmayı belirler

Bakanlık birim fiyatlarında kazı pozları zemin sınıfına göre ayrışır ve aynı hendek, zemin sertliğine göre üç katına kadar farklı fiyatlanır.

| Zemin sınıfı | Kazı yöntemi | Kabarma oranı |
|---|---|---|
| Yumuşak ve sert toprak | Ekskavatör, kanal kazıcı | %20 – %25 |
| Plastik kil | Ekskavatör; kenar göçmesi riski yüksek | %35 – %40 |
| Yumuşak ve sert küskülük | Ekskavatör + hidrolik kırıcı | %25 – %30 |
| Yumuşak kaya | Hidrolik kırıcı | %30 – %40 |
| Sert ve çok sert kaya | Kırıcı, tel kesme veya patlatma | %40 – %60 |

Patlatmalı kazı Türkiye'de ayrı bir izin dünyasıdır: valilik izni, belgeli ateşleyici ve yerleşim yerine mesafe koşulları devreye girer. Kentsel hendeklerde bu yol neredeyse hiç seçilmez; onun yerine hidrolik kırıcı ya da beton testeresi ile kesme tercih edilir, ki bu da metre fiyatını toprağa göre 3 – 6 kat yükseltir.

---

## Yatak malzemesi seçimi

Yatak, borunun altına serilen ve yükü tabana eşit dağıtan tabakadır. Amacı boruyu **noktasal yüklenmeden** ve oturmadan korumaktır.

* **Mıcır / kırmataş (0 – 22 mm):** Cazibeli kanalizasyon, yağmur suyu ve içme suyu hatlarında en yaygın çözüm. Tipik kalınlık **10 – 15 cm** (4 – 6 in), drenaj yeteneği yüksektir.
* **Kum:** İnce cidarlı plastik boru ve koruge kablo borularında, düzgün destek gerektiğinde kullanılır. Kolay sıkışır, idare şartnamelerinde sık sık zorunlu tutulur.
* **Beton yatak veya beton kaplama:** Yol altından geçen büyük çaplı kollektörlerde, zayıf zeminlerde ve sığ örtü olan geçişlerde. En pahalı seçenektir.
* **Yataksız:** Yalnızca kotunda olan, sağlam ve kayasız olmayan zeminde, rijit borular için. Plastik boruda ve drenaj sistemlerinde önerilmez.

Geri dolgu tek seferde atılmaz: **20 – 30 cm kalınlığında tabakalar** halinde serilip her tabaka ayrı sıkıştırılır. Boru üstünde ilk 30 cm elle veya hafif tokmakla sıkıştırılır; üzerinden silindir geçirmek boruyu ovalleştirir.

---

## Türkiye'de kazı: metraj, izin ve altyapı sorgusu

Üç noktada ABD modelinden ayrılır:

1. **Fiyat metre değil m³ üzerinden kurulur.** Aracın lineer foot bandını metreye çevirmek için 3,28 ile çarpın: 15 – 35 USD/lf, 49 – 115 USD/m eder. Ancak bir Türk yaklaşık maliyeti bu mantıkla kurulmaz; kazı **m³** üzerinden, nakliye **mesafeye bağlı formülle** ayrı poz olarak, döküm ise belediyeye ödenen m³ bedeliyle hesaplanır. Üç kalemi ayrı ayrı toplamadan karşılaştırma yapmayın.
2. **İksa eşiği pratikte aynı yere düşüyor.** OSHA 1,52 m (5 ft) üzerindeki hendeklerde koruyucu sistem ister. Türkiye'de Yapı İşlerinde İSG Yönetmeliği zemin sınıfına ve derinliğe göre güvenli şev veya iksa zorunluluğu getirir; sahada yerleşik eşik **1,50 m**'dir. Buna ek olarak kazı kenarında korkuluk, kazı ağzından en az 1 m geride malzeme yığma yasağı, düzenli iniş-çıkış ve yağıştan sonra yetkin kişi kontrolü aranır. Göçük, Türkiye'de yapı işlerindeki ölümlü kazaların değişmez kalemlerinden biridir.
3. **Tek numaralı altyapı sorgu hattı yoktur.** ABD'de kazı öncesi 811 aranır ve bütün altyapı işaretlenir. Türkiye'de böyle bir merkez yok: büyükşehirlerde kazı izni **AYKOME** kararlarına bağlıdır ve su-kanal idaresi, elektrik dağıtım şirketi, doğal gaz dağıtım şirketi ve telekom kuruluşundan **ayrı ayrı** güzergâh bilgisi almanız gerekir. İletim hatlarında durum daha ciddidir: doğal gaz ana iletim hattı güzergâhında izinsiz kazı hem cezai sorumluluk hem felaket riskidir.

---

## Türkiye'de tipik hendek ölçüleri

| İş | Genişlik | Derinlik |
|---|---|---|
| İçme suyu abone bağlantısı | 0,40 – 0,60 m | 0,80 – 1,20 m |
| Kanalizasyon bağlantısı (DN200) | 0,60 – 0,90 m | 1,20 – 2,50 m (eğim gereği) |
| Doğal gaz servis hattı (PE) | 0,40 – 0,60 m | 0,80 – 1,00 m |
| Alçak gerilim kablosu | 0,40 – 0,60 m | ~0,80 m |
| Orta gerilim kablosu | 0,60 – 0,80 m | 1,00 – 1,20 m |
| Telekom / fiber koruge | 0,30 – 0,40 m | 0,60 – 0,80 m |
| Drenaj hendeği | 0,30 – 0,60 m | 0,50 – 1,00 m |
| Şerit temel | 0,50 – 0,80 m | donma derinliğinin altı |

Derinlik kararında ABD'de belirleyici olan **donma derinliği** Türkiye'de bölgeye göre çok değişir: Akdeniz ve Ege kıyısında 30 cm mertebesindeyken, İç Anadolu'da 60 – 80 cm, Erzurum ve Kars çevresinde 1,0 – 1,5 m'ye çıkar. Kıyı şeridinde belirleyici kısıt donma değil, üstten gelen trafik yükü ve idare şartnamesindeki asgari örtüdür.

---

## Sık sorulan sorular

### 30 metrelik bir hendek kaç m³ kazı eder?

0,60 m genişlik ve 1,20 m derinlikte 21,6 m³ (28,3 yd³). Kabarma ile birlikte sahada 27 m³ gevşek malzeme görürsünüz; bunun 18 m³'ü geri dolguya girer, kalanı uzaklaştırılır. Genişliği 0,80 m'ye çıkarmak hacmi doğrudan üçte bir artırır; ekskavatör kovası genişliğini hendek genişliğine göre seçmek maliyette en kolay tasarruftur.

### Kabarma katsayısı nedir?

Yerinde sıkışık haldeki zemin kazıldığında gevşer ve hacmi büyür. Normal toprakta bu artış **%20 – %30**, yaygın kabul **%25**'tir: 10 m³ yerinde zemin, 12,5 m³ gevşek moloz eder. Kilde %35 – %40'a, kayada %60'a kadar çıkar. Kamyon sefer sayısını kazı hacmiyle değil, kabarmış hacimle hesaplayın; aksi halde sahada bir kamyon eksik kalır.

### Kaç kamyon gerekir, kasa hacmi mi ağırlık mı sınır?

Türkiye'de tipik damperli kamyon kasası 8 – 12 m³'tür, ancak hafriyat 1,6 – 2,0 t/m³ geldiği için **karayolu azami yüklü ağırlık sınırı hacim dolmadan devreye girer**. Kayalı veya ıslak malzemede kasayı ağzına kadar doldurmak mümkün olmaz; sefer sayısını hesaplarken kasa hacminin %80'ini kullanmak gerçeğe daha yakın sonuç verir.

### Kazıdan önce hangi izinler gerekir?

Yol, tretuvar veya kamuya ait alanda kazı için belediyeden **kazı izni**; büyükşehirlerde AYKOME programına girmek; hafriyatın taşınması için **taşıma izin belgeli araç** ve belediyenin gösterdiği **lisanslı döküm sahası**. Kendi parselinizde bile temel kazısı yapı ruhsatına bağlıdır. Güzergâh sorgusunu su, elektrik, gaz ve telekom kuruluşlarından ayrı ayrı yapmayı ihmal etmeyin.

### Çıkan toprağı geri dolgu olarak kullanabilir miyim?

Zemin şişen kil, organik veya kirlenmiş değilse evet. En iyi geri dolgu granüler malzemedir: kum, çakıl, siltli-kumlu zemin. Yüksek plastisiteli kil sıkışmayı zorlaştırır, ıslandığında şişip boruyu hareket ettirir; böyle bir zeminde granüler dolgu ithal etmek, ileride oluşacak çökmeyi onarmaktan ucuza gelir. Kaya parçalı malzeme ise boru çevresinde asla kullanılmaz.
