## Kar yükü hesaplama rehberi

Araç zemin kar yükünü, çatı eğimini, rüzgâr maruziyetini, çatı sıcaklık durumunu ve bina kullanım sınıfını alır; düz çatı kar yükünü, eğimli çatı kar yükünü, geçerli tasarım yükünü, çatı taşıyıcı sistemine gelen toplam kuvveti ve komşu yüksek çatıdan kaynaklanan kar birikmesini verir.

**Kalibrasyon notu.** Hesap **ASCE/SEI 7-22 Bölüm 7** ile **IBC 1608**'in seçili maddelerine dayanır ve tümüyle **psf** ile çalışır. Türkiye'de kar yükü **TS EN 1991-1-3** ve onun **Türkiye ulusal eki**nden alınır; karakteristik zemin kar yükü s_k, ulusal ekteki kar bölgesi ile yapının **rakımına** bağlı bağıntıdan hesaplanır. Eski **TS 498** basit bir bölge tablosu verirdi ve hâlâ kaba kontrol için anılır. İki yöntem aynı fizikten çıkar ama katsayıları farklıdır; araç Türk ulusal ekine göre hesap yapmaz.

---

## İki formül yan yana

```
ASCE 7-22 duz cati:  pf = 0,7 x Ce x Ct x Is x pg
TS EN 1991-1-3    :  s  = mu1 x Ce x Ct x sk
birim donusumu    :  kPa = psf x 0,04788
                     psf = kPa x 20,89
                     kg/m2 = kPa x 101,97
```

Fark ilk katsayıda görünür. ASCE, zemin kar yükünün çatıya ancak %70'inin oturduğunu kabul eder. Eurocode ise ayrı bir 0,7 çarpanı kullanmaz; onun yerine **şekil katsayısı μ₁**'i devreye sokar ve düz ile 30°'ye kadar eğimli çatılarda bunu **0,8** alır. Sonuç: aynı zemin kar yükü için Eurocode yaklaşık **%14 daha yüksek** bir çatı yükü verir.

---

## Katsayılar nasıl karşılık buluyor

| Katsayı | ASCE 7-22 | TS EN 1991-1-3 |
|---|---|---|
| Temel çarpan | 0,7 (sabit) | Şekil katsayısı μ₁ = 0,8 (α ≤ 30°) |
| Maruziyet, açık çatı | Ce = 0,9 | Ce = 0,8 |
| Maruziyet, normal | Ce = 1,0 | Ce = 1,0 |
| Maruziyet, korunaklı | Ce = 1,2 | Ce = 1,2 |
| Sıcaklık, ısıtılan bina | Ct = 1,0 | Ct = 1,0 |
| Sıcaklık, ısıtılmayan bina | **Ct = 1,2 (yükü artırır)** | **Ct = 1,0 (değişmez)** |
| Yüksek ısı kaybı, cam çatı | Ct = 0,85 | Ct < 1,0 kabul edilebilir |
| Kullanım sınıfı | Is = 0,8 – 1,2 | Kısmi güvenlik katsayıları ile |

Sıcaklık katsayısındaki mantık ters yönde çalışır ve bu aracın en yanıltıcı girdisidir. ASCE, ısıtılmayan bir binada karın erimeden birikeceğini kabul edip yükü **artırır**. Eurocode ise C_t'yi yalnızca ısı kaybı yüksek çatılarda **azaltmak** için kullanır; ısıtılmayan bina için bir artırım öngörmez. Aracı Türk mantığıyla kullanacaksanız C_t girdisini 1,0'da bırakın, aksi halde yükü ikinci kez artırmış olursunuz.

---

## Şekil katsayısı: eğim ile azalma

| Çatı eğimi | Eurocode μ₁ | ASCE Cs (pürüzlü yüzey, ısıtılan çatı) |
|---|---|---|
| 0° – 15° | 0,80 | 1,00 |
| 20° | 0,80 | 1,00 |
| 30° | 0,80 | 1,00 |
| 40° | 0,53 | 0,75 |
| 50° | 0,27 | 0,50 |
| 60° ve üzeri | 0,00 | 0,25 |
| 70° | 0,00 | 0,00 |

İki eğri farklı yerde sıfırlanır: Eurocode 60°'de karın tamamen kaydığını kabul eder, ASCE 70°'ye kadar bekler. Kayan yüzeylerde (metal, cam, kiremit yerine sac) her iki standart da azaltmayı erken başlatır, ama kayan çatı için **kar durdurucu** takılıyorsa azaltma uygulanmaz — kar zaten kaymayacaktır.

---

## Türkiye'de s_k ne mertebededir

| Bölge ve rakım | Gösterge s_k | psf karşılığı |
|---|---|---|
| Akdeniz ve Ege kıyısı, 0 – 200 m | 0,40 – 0,75 kN/m² | 8 – 16 psf |
| Marmara ve Karadeniz kıyısı, 0 – 300 m | 0,75 – 1,00 kN/m² | 16 – 21 psf |
| İç Anadolu, 800 – 1.100 m | 1,00 – 1,60 kN/m² | 21 – 33 psf |
| Doğu Anadolu, 1.500 – 2.000 m | 2,00 – 4,00 kN/m² | 42 – 84 psf |
| Yüksek dağ ve kayak merkezleri, 2.000 m üzeri | 4,00 kN/m² ve üzeri | 84 psf ve üzeri |

Tablo yalnızca mertebe verir. Kesin değer, ulusal ekteki kar bölgesi haritası ile rakım bağıntısından çıkar ve **aynı ilin ilçeleri arasında ikiye katlanabilir**: Antalya merkez ile Antalya'nın 1.800 m'deki yaylası aynı hesaba girmez. Projede rakımı yazmadan kar yükü belirlenmez.

---

## Türkiye'ye özgü dört nokta

1. **Baskın çatı biçimi düz veya kırma çatıdır.** Teras çatıda μ₁ = 0,8'dir ve kar hiç kaymaz; ayrıca eriyen suyun tahliyesi ile **su birikmesi** ikinci bir yük kalemi olur. Kırma çatıda eğim çoğu zaman 20° – 35° arasındadır, yani şekil katsayısında hiç azaltma çıkmaz.
2. **Rakım ile deprem çakışır.** Doğu Anadolu hem en yüksek kar yüküne hem en yüksek deprem etkisine sahiptir. Tasarımı iki yük ayrı ayrı değil, birlikte belirler.
3. **Trapez sac çatıda aşık hesabı belirleyicidir.** Sanayi yapılarında kar yükü çoğu zaman çatı kaplamasını değil aşık açıklığını sınırlar; sac üreticisinin yük-açıklık tablosu ile kontrol edilir.
4. **Metraj ve maliyet dili farklıdır.** Kar yükü bir tasarım girdisidir, satın alma kalemi değil; taşıyıcı sistem metrajı **Yapı İşleri İnşaat Birim Fiyatları** üzerinden yapılır.

---

## Deprem çerçevesi: kar ile depremin birlikteliği

* **Kar yükü deprem kütlesine katılır.** **TBDY 2018**, deprem hesabında dikkate alınacak kütlelere hareketli yüklerin ve belirli koşullarda kar yükünün bir bölümünü katmayı öngörür; katılım katsayıları yönetmelik tablolarından alınır. Yüksek rakımlı bir çatıda bu ihmal edilebilir bir kalem değildir.
* **Tasarım depremi DD-2.** Bina tasarımı, 50 yılda aşılma olasılığı %10 olan (yaklaşık 475 yıl tekrarlanma periyotlu) **DD-2** düzeyine göre yapılır. Kar yükünün karakteristik değeri ise 50 yıllık tekrarlanma periyodundan gelir; iki yükün olasılık tabanı farklıdır ve birleşim kuralları bu yüzden kısmi katsayılarla kurulur.
* **Birleşim akademik değildir.** 6 Şubat 2023 depremleri kış ortasında, bölgenin yüksek ilçelerinde çatılarda kar varken meydana geldi. Kar yüklü bir çatının deprem anındaki kütlesi, kuru bir çatınınkinden fazladır.
* **Hafif çatı seçimi.** Aynı açıklıkta trapez sac çatı, kiremitli betonarme çatıya göre çok daha az kütle taşır; yüksek rakımda ve yüksek deprem bölgesinde bu seçim hem kar hem deprem hesabını rahatlatır.

---

## Örnek hesap: Erzurum'da 200 m² kırma çatı

* **Rakım:** 1.850 m; ulusal ekten **s_k = 3,00 kN/m²** (62,7 psf) alındığı varsayılıyor
* **Çatı:** 25° eğim, kiremit kaplama, ısıtılan bina, normal maruziyet
* **Eurocode:** μ₁ = 0,80, Ce = 1,0, Ct = 1,0 → s = 0,80 × 3,00 = **2,40 kN/m² (50 psf)**
* **Toplam yük:** 2,40 × 200 = **480 kN**, yani yaklaşık 49 ton (107.900 lb)
* **Aynı girdiyle araç:** pf = 0,7 × 62,7 = 43,9 psf; 25° pürüzlü çatıda Cs = 1,0 → ps = 43,9 psf = **2,10 kN/m²**

Sonuç aynı binada 2,40'a karşı 2,10 kN/m², yani **%14 fark**. Bu tam olarak 0,8 ile 0,7 arasındaki orandır ve tesadüf değildir. Araç Türkiye için güvenli tarafta değil, hafif tarafta kalır; sonucunu 1,15 ile çarpmak kaba ama işe yarar bir düzeltmedir. Nihai değeri her zaman ulusal ekten hesaplayın.

---

## Sık sorulan sorular

### Aracın verdiği psf değerini nasıl çeviririm?

**0,04788 ile çarpın, kN/m² çıkar.** Kilogram kuvvet alışkanlığınız varsa kPa değerini yaklaşık 100 ile çarpıp kg/m² olarak okuyun: 2,40 kN/m² kabaca 245 kg/m² demektir. Aracın toplam yükü lb cinsinden verir; 0,004448 ile çarparak kN'a çevirin.

### Türkiye'de kar yükü hangi standarttan alınır?

**TS EN 1991-1-3** ve Türkiye ulusal ekinden. Ulusal ek kar bölgelerini ve karakteristik zemin kar yükünün rakımla değişimini verir. Eski **TS 498** tablosu hâlâ kaba mertebe kontrolü için anılır ama proje hesabı ulusal eke göre yapılır. ASCE 7-22 haritaları Türkiye'yi kapsamaz.

### Teras çatıda kar yükü daha mı yüksektir?

Evet. Şekil katsayısı 0,8'de kalır, kar kaymaz ve eriyen su tahliye tıkanırsa ikinci bir yük olarak birikir. Türkiye'nin apartman stoğu ağırlıklı olarak teras çatıdır, dolayısıyla eğimden gelen azaltma çoğu binada hiç devreye girmez. Çatı giderlerinin kışa hazırlanması yapısal bir konudur, bakım işi değildir.

### Kar yükü ile deprem birlikte mi hesaplanır?

Rüzgâr gibi kar da depremle aynı anda tam değeriyle etki etmez; ama **TBDY 2018** deprem kütlesine kar yükünün bir bölümünün katılmasını öngörür ve katsayı yönetmelik tablolarından alınır. Yüksek rakımlı bölgede bu katkı hesaba görünür biçimde girer.

### Çatı eğimi kar yükünü ne kadar azaltır?

Eurocode'da 30°'ye kadar hiç azaltmaz; 30° ile 60° arasında doğrusal olarak sıfıra iner. ASCE'de pürüzlü ısıtılan çatıda azalma 30°'de başlar ve 70°'de sıfırlanır. Kar durdurucu takılmış bir çatıda azaltma uygulanamaz, çünkü sistemin amacı karı tutmaktır.
