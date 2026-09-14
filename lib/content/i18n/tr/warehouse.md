## Depo alanı hesaplama rehberi: palet, koridor, raf ve kira

Palet sayısını, raf kat sayısını ve kullanacağınız istif aracını girin; araç depolama ayak izini, koridor alanını, operasyon tamponunu, toplam kapalı alan ihtiyacını ve tahmini kira maliyetini verir. m² ile ft² arasında tek tuşla geçer.

**Kalibrasyon notu.** Araç ABD lojistik pratiğine göre kurulmuştur. Öntanımlı palet **GMA (1219 × 1016 mm)** ve pozisyon alanı **1,40 m² (15 ft²)**; raf arası hava boşluğu **NFPA** yangın kurallarına, kira ise ABD'de olağan olan **yıllık USD/ft² NNN** modeline dayanır. Türkiye'de baskın palet **EUR 1 (800 × 1200 mm)**, kira birimi **aylık USD veya EUR / m²**, raf tasarımını sınırlayan asıl yük ise deprem yüküdür (**TBDY 2018**, raf tarafında **TS EN 15512** ve **TS EN 16681**). Araç bunların hiçbirini kontrol etmez; palet boyutunu değiştirmeden aldığınız sonuç Türkiye için sistematik olarak büyük çıkar.

---

## Hesap sırası

```
zemin pozisyonu = toplam palet / raf kat sayisi
depolama alani  = zemin pozisyonu x pozisyon alani
koridor alani   = depolama alani x (koridor orani / (1 - koridor orani))
operasyon       = (depolama + koridor) x 0,25
toplam alan     = depolama + koridor + operasyon
```

**Örnek: 1.000 EUR 1 palet, 4 katlı seçici raf, reach truck ile daraltılmış koridor**

* **Zemin pozisyonu:** 1.000 / 4 = **250 pozisyon**
* **Depolama ayak izi:** 250 × 1,16 = **290 m²** (3.121 ft²)
* **Koridor (%30):** 290 × (0,30 / 0,70) = **124 m²** (1.335 ft²)
* **Ara toplam:** **414 m²**
* **Operasyon tamponu (%25):** **104 m²**
* **Toplam kapalı alan ihtiyacı: ~518 m²** (5.576 ft²)

Aynı hesabı aracın öntanımlı GMA paletiyle yaparsanız sonuç **625 m²** (6.727 ft²) çıkar. Sadece palet standardını doğru seçmek, 1.000 paletlik bir depoda **107 m² fark** yaratıyor.

---

## Palet standartları

| Palet | Ölçü | Pozisyon başına net ayak izi | Yaygın olduğu yer |
|---|---|---|---|
| **EUR 1 (europalet)** | 800 × 1200 mm | **1,16 m² (12,5 ft²)** | Türkiye, Avrupa Birliği |
| **EUR 2 / sanayi paleti** | 1000 × 1200 mm | **1,40 m² (15,0 ft²)** | Türkiye sanayi, Avrupa |
| **GMA paleti** | 1016 × 1219 mm | **1,40 m² (15,0 ft²)** | ABD, Kanada, Meksika |
| **Varil / büyük boy palet** | 1219 × 1219 mm | **1,67 m² (18,0 ft²)** | Kimya, tarım, ağır sanayi |

Pozisyon alanı paletin kendi ölçüsünden büyüktür: palet taşması (her kenarda 25 – 50 mm), dikmeler arası boşluk ve yangın kurallarının istediği raf içi hava aralığı eklenir. EUR 1 ile 1000 × 1200 paletin karışık kullanıldığı tesislerde hesabı iki ayrı bölge olarak kurun, ortalama almayın.

---

## Raf sistemleri

| Sistem | Erişilebilirlik | Alan verimi | Uygun olduğu durum |
|---|---|---|---|
| **Seçici (tek derin) raf** | %100, her palet erişilebilir | bina alanının %35 – %45'i | Çok çeşit, hızlı devir, FIFO |
| **Çift derin raf** | %50 | %50 – %60 | Orta çeşit, ürün başına 2 – 4 palet |
| **Drive-in / drive-through** | Düşük (LIFO) | %65 – %75 | Az çeşit, yüksek hacim, mevsimsel |
| **Push-back raf** | Orta (2 – 6 derin) | %60 – %70 | Yoğunluk ve hız dengesi |
| **Yerde blok stoklama** | Düşük | %40 – %55 | Sağlam kutulu ürün, varil, lastik |

Drive-in ve push-back sistemleri yoğunluk kazandırır ama deprem altında daha az bağışlayıcıdır: yatay bağlantı elemanı azdır, koridor doğrultusunda yanal rijitlik sağlamak zorlaşır. Deprem hesabı bu yüzden sonradan bakılacak bir kalem değil, en baştaki kısıttır.

---

## Koridor genişliği ve istif aracı

| Koridor tipi | Genişlik | Araç ve bedeli |
|---|---|---|
| Geniş | 3,6 – 4,2 m (11,8 – 13,8 ft) | Karşı ağırlıklı forklift; yatırım en düşük, ama alanın %40 – %45'i koridora gider |
| Daraltılmış | 2,6 – 3,0 m (8,5 – 9,8 ft) | Reach truck; koridoru %25 – %30 azaltır, 8 – 11 m erişir, düzgün zemin ister |
| Çok dar (VNA) | 1,7 – 2,0 m (5,6 – 6,6 ft) | Turret veya man-up, ray/tel kılavuzlu; 12 m üzeri, **TS EN 15620** tolerans sınıfı şart |

Araç seçimi bina büyüklüğünü %35'e kadar değiştirir. Türkiye'de kiralık depoların zemin düzgünlüğü çoğu zaman VNA için yetersizdir; kâğıt üzerindeki yoğunluk sahada elde edilemez. Kiralamadan önce zemin plakasının düzlük ölçümünü isteyin.

---

## Alan dağılımı ve net yükseklik

Bir dağıtım merkezinde alan kabaca şöyle bölünür: palet depolama ve raf %40 – %50, koridor ve hazırlık şeritleri %25 – %30, mal kabul ve sevkiyat rampaları %15 – %20, paketleme ve iade %5 – %8, ofis ile akü şarj %3 – %7.

Raf kat sayısını **net yükseklik** belirler; yani bitmiş zeminden en alçak engele (makas alt kotu, yağmurlama borusu, aydınlatma) olan mesafe:

| Net yükseklik | Palet katı |
|---|---|
| 5,0 – 5,5 m (16 – 18 ft) | 2 – 3 |
| 6,0 – 7,5 m (20 – 25 ft) | 3 – 4 |
| 8,5 – 10,0 m (28 – 33 ft) | 4 – 5 |
| 11,0 – 12,0 m (36 – 39 ft) | 6 – 7 |

Türkiye'deki A sınıfı lojistik tesislerde 10 – 12 m net yükseklik artık standart kabul edilir; eski sanayi yapılarında ise 5 – 6 m çok yaygındır. Aynı palet sayısı için ikinci grupta iki kat fazla taban alanı kiralamanız gerekir.

Kapasite disiplini de var: depo **nominal kapasitesinin %85'inin üzerinde çalıştırılmamalıdır**. Bu eşiğin üstünde çift elleçleme başlar, işçilik verimi hızla düşer. Rampa kapısı için pratik oran, hızlı devirli dağıtımda **1.000 m² başına 1 kapı**, yavaş devirli toplu depolamada 2.000 – 2.500 m² başına 1 kapıdır. Kapı sayısı kadar önemlisi rampa önündeki manevra alanıdır: tırın dönebilmesi için en az 30 – 35 m serbest derinlik bırakılmalıdır.

---

## Türkiye'ye özgü üç kısıt

1. **Deprem, raf tasarımının belirleyicisidir.** TBDY 2018 eski 1 – 5 deprem bölgesi haritasını kaldırdı; artık tasarım ivmesi, AFAD'ın Türkiye Deprem Tehlike Haritası'ndan parselin koordinatına göre alınır. Endüstriyel raf sistemleri **TS EN 15512** ile boyutlandırılır, deprem etkisi **TS EN 16681** kapsamında hesaplanır. Sonuç somuttur: ankraj detayı, koridor doğrultusunda çapraz, üst katta yük sınırlaması, bazı durumlarda kat sayısında azaltma. Devrilen bir raf hem can güvenliği hem stok kaybıdır ve deprem sigortası bu ayrımı sorar.
2. **Yangın, alan planını doğrudan değiştirir.** BYKHY belirli alan ve depolama yüksekliği eşiklerinin üzerinde yağmurlama sistemi, duman tahliyesi ve yangın kompartımanı ister; yağmurlama tasarımı **TS EN 12845** ile yapılır ve yüksek depolamada raf içi yağmurlama gerekir. Bunlar hem net yüksekliği hem koridor düzenini etkiler. Aracın kullandığı NFPA hava boşluğu mantığı yakın ama aynı değildir.
3. **Yapılaşma hakkı ve kira modeli farklıdır.** Parselde kurabileceğiniz kapalı alan TAKS ve emsal (KAKS) ile sınırlıdır; organize sanayi bölgelerinde ayrıca OSB yapılaşma şartları uygulanır. Kira tarafında ABD'nin yıllık USD/ft² NNN modeli yerine **aylık USD veya EUR / m²** konuşulur, üstüne KDV, gelir vergisi stopajı, aidat ve emlak vergisi eklenir. Dönüşüm için: `USD/m2/ay = USD/ft2/yil x 10,7639 / 12`, yani 9,00 USD/ft²/yıl yaklaşık **8,07 USD/m²/ay** eder.

---

## Sık sorulan sorular

### 1.000 palet için ne kadar depo alanı gerekir?

4 katlı seçici raf ve daraltılmış koridorla, EUR 1 palet üzerinden yaklaşık **518 m² (5.576 ft²)**. Karşı ağırlıklı forklift ve geniş koridora geçerseniz 620 – 660 m²'ye, yerde iki kat blok stoklamaya inerseniz 1.100 – 1.300 m²'ye çıkar.

### Kira maliyetini m² üzerinden nasıl hesaplarım?

Aylık kira = `kapali alan x aylik birim kira`. Yıllık USD/ft² olarak verilmiş bir rakamı aylık m² birimine çevirmek için 10,7639 ile çarpıp 12'ye bölün. Türkiye'de sözleşmeler genellikle dövize veya ÜFE'ye bağlı artış içerdiği için toplam maliyeti tek yıl üzerinden değerlendirmeyin.

### Brüt kapalı alan ile kullanılabilir depolama alanı aynı şey mi?

Değil. Brüt kapalı alan dış duvarlar arası ölçüdür; kullanılabilir depolama alanı ise rafların fiilen oturduğu taban alanıdır ve seçici raf düzeninde brütün ancak **%35 – %45**'i kadardır. Kira brüt alan üzerinden ödenir, kapasite ise kullanılabilir alandan çıkar. Teklifleri karşılaştırırken palet başına maliyete bakın, m² başına maliyete değil.

### Aracın sonucunu Türkiye için nasıl düzeltirim?

Üç düzeltme yeter: palet pozisyon alanını **1,16 m²** yapın, net yüksekliği gerçek binadan ölçüp kat sayısını buna göre girin, kira birimini aylık m²'ye çevirin. Deprem ve yangın kısıtları hesaba girmediği için çıkan kat sayısını raf projesini yapan mühendise teyit ettirin.
