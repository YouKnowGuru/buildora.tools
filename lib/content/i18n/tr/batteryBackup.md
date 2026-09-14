## Kesintisiz Güç ve Akü Yedekleme Hesaplayıcı: Kapasite, İnverter ve Çalışma Süresi

Bu **akülü yedek güç sistemi ve kesintisiz güç kaynağı (UPS)** hesaplayıcısı, şebeke kesintilerinde kritik elektrikli cihazlarınızı beslemek için gereken akü kapasitesini, inverter gücünü ve günlük güneş paneli şarj ihtiyacını hesaplar.

Hesaplayıcı şunları belirler:

- **Sürekli toplam güç talebi (W)** ve günlük enerji tüketimi (Wh veya kWh)
- **Tavsiye edilen brüt akü grubu kapasitesi** (Watt-saat / Wh ve Amper-saat / Ah)
- **Önerilen inverter gücü** (kalkış demeraj akımı güvenlik payı dahil)
- **Tahmini çalışma süresi (otonomi)**
- **Günlük şarj için gerekli güneş paneli gücü (Wp)**
- **Akü kimyasına göre maliyet karşılaştırması** (LiFePO₄ ve Jel/AGM kurşun-asit)

---

## 1. Akülü yedek güç sisteminin temel bileşenleri

Eksiksiz bir kesintisiz enerji sistemi birbiriyle uyumlu dört parçadan oluşur:

| Bileşen | Sistemdeki Görevi | Temel Seçim Kriteri |
|---|---|---|
| **Akü Grubu** | Doğru akım (DC) biçiminde kimyasal enerji depolar | Kullanılabilir kapasite (Wh / Ah) ve sistem voltajı (12V, 24V, 48V) |
| **İnverter / Şarj Cihazı** | Doğru akımı (DC) 230V alternatif akıma (AC) dönüştürür | Sürekli güç ve anlık demaraj akımı dayanımı |
| **Şarj Kontrol Cihazı** | Güneş panellerinden gelen akımı güvenle regüle eder | Yüksek verimli MPPT teknolojisi |
| **Otomatik Transfer Şalteri (ATS)** | Şebeke kesildiğinde yükü kesintisiz aküye aktarır | 20 milisaniyenin altında transfer süresi |

---

## 2. Deşarj Derinliği (DoD) ve Çevrim Ömrü

**Deşarj Derinliği (Depth of Discharge, DoD)**, bir akünün nominal kapasitesinin hücre yapısına zarar vermeden güvenle kullanılabilecek azami yüzdesini ifade eder.

```
Kullanilabilir Enerji (Wh) = Nominal Kapasite (Wh) x (DoD / 100)
```

| Akü Teknolojisi | Tavsiye Edilen DoD | Çevrim Ömrü (Döngü) | Şarj/Deşarj Verimi |
|---|---|---|---|
| **LiFePO₄ (Lityum Demir Fosfat)** | %80 – %90 | 3.500 – 6.000 döngü (10–15 yıl) | %95 – %98 |
| **Lityum İyon (NMC)** | %80 | 1.500 – 2.500 döngü | %92 – %95 |
| **Bakımsız Kuru Akü (AGM)** | %50 | 400 – 600 döngü (2–4 yıl) | %80 – %85 |
| **Jel ve Sulu Kurşun-Asit** | %50 | 300 – 500 döngü | %75 – %82 |

> **Teknik Avantaj:** **LiFePO₄ aküler**, aynı etiket kapasitesine sahip kurşun-asit akülere kıyasla neredeyse iki kat daha fazla kullanılabilir enerji sağlar ve sekiz ila on kat daha uzun ömür sunarak kWh başına toplam kullanım maliyetini ciddi oranda düşürür.

---

## 3. Adım Adım Hesaplama Formülleri

```
1. Toplam Enerji Gereksinimi (Wh) = Surekli Guc (W) x Istenen Calisma Suresi (saat)

2. Brut Aku Kapasitesi (Wh) = Toplam Enerji (Wh) / (Inverter Verimi x DoD)

3. Amper-saat Kapasitesi (Ah) = Brut Kapasite (Wh) / Sistem Voltaji (V)

4. Asgari Inverter Gucu (W) = Surekli Guc (W) x 1,25

5. Gerekli Gunes Paneli Gucu (Wp) = Gunluk Enerji (Wh) / (Zirve Guneslenme Saati x 0,77)
```

### Örnek Hesaplama: 8 Saatlik Ev Tipi Acil Durum Yedeklemesi

- **Beslenecek Cihazlar:** A++ buzdolabı (120W), modem ve aydınlatma (60W), kombi sirkülasyon pompası (100W), dizüstü bilgisayar ve telefon şarjları (70W) = **350 W**
- **İstenen Süre:** 8 saat
- **Tüketilecek Enerji:** 350 W × 8 saat = **2.800 Wh (2,8 kWh)**
- **LiFePO₄ (%80 DoD) ve %92 verimli tam sinüs inverter ile hesaplama:**
  - Gerekli Brüt Kapasite: 2.800 / (0,92 × 0,80) = **3.804 Wh (3,8 kWh)**
  - 48V sistem voltajında: 3.804 Wh / 48V = **79,25 Ah** (standart bir 48V 100Ah lityum batarya modülü)
  - Tavsiye Edilen İnverter: 350 W × 1,25 = 437,5 W (buzdolabı kompresörü ve kombi pompasının kalkış akımlarını güvenle karşılamak için en az 1.000W sürekli güce sahip tam sinüs bir inverter önerilir)

---

## 4. Sistem Voltajı Seçimi: 12V, 24V veya 48V

| Sistem Voltajı | Tavsiye Edilen Sürekli Güç | Kablo Kesiti | Uygun Kullanım Alanı |
|---|---|---|---|
| **12 V** | 1.000 W'a kadar | Çok kalın (yüksek akım nedeniyle) | Karavan, tekne, küçük solar aydınlatma |
| **24 V** | 1.000 W – 3.000 W arası | Orta kalınlıkta | Dağ evleri, küçük ofisler ve atölyeler |
| **48 V** | 3.000 W üzeri | İnce ve ekonomik | Müstakil konutlar, büyük çatı tipi güneş sistemleri |

---

## Sıkça Sorulan Sorular

### Akü grubunu bir günde doldurmak için kaç watt güneş paneli gerekir?
Günlük tüketilen enerjiyi (Wh), bölgenizin ortalama zirve güneşlenme süresine (Türkiye'de yıllık ortalama 4,0–4,8 saat) ve sistem verim katsayısına (%77) bölün. Günlük 3.800 Wh tüketimi telafi etmek için yaklaşık 1.100 Wp panel gücü, yani üç adet 400W güneş paneli gerekir.

### Neden mutlaka tam sinüs inverter kullanılmalıdır?
Tam sinüs inverterler, şebeke elektriği ile birebir aynı kalitede pürüzsüz dalga formu üretir. Modifiye sinüs inverterler buzdolabı, kombi pompası gibi motorlu cihazlarda aşırı ısınmaya ve arızaya sebep olur; hassas elektronik devrelerin ömrünü kısaltır.

### Soğuk hava akü kapasitesini nasıl etkiler?
Düşük ortam sıcaklıkları kimyasal tepkimeleri yavaşlatır. Kurşun-asit aküler 0 °C sıcaklıkta kapasitelerinin yaklaşık %25–%30'unu kaybeder. LiFePO₄ piller soğukta iyi deşarj performansı gösterse de, lityum kaplamasını ve hücre bozulmasını önlemek için 0 °C altındaki sıcaklıklarda dahili ısıtıcı olmadan şarj edilmemelidir.
