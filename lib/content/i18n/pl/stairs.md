## Kalkulator schodów — geometria, kąt nachylenia i długość policzka

Kalkulator wyznacza wysokość i szerokość stopnia, liczbę stopni, długość rzutu biegu, długość policzka, kąt nachylenia, wymaganą długość otworu w stropie oraz liczbę tralek i metrów poręczy. Jedyny wymiar, który musisz zmierzyć na budowie, to **wysokość kondygnacji od posadzki wykończonej do posadzki wykończonej**.

> **Według jakich przepisów liczy narzędzie:** limity wysokości i szerokości stopnia pochodzą z amerykańskich **IRC §R311.7** (budynki mieszkalne), **IBC §1011** (użyteczności publicznej) i **OSHA 1910.25** (przemysłowe). W Polsce geometrię schodów narzuca **rozporządzenie w sprawie warunków technicznych, jakim powinny odpowiadać budynki i ich usytuowanie (WT, tekst jednolity 2021), §68 i §69**, a balustrady §298. Wartości są zbliżone, ale nie identyczne — sprawdź je zawsze po polskiej stronie.

---

## Nazewnictwo

| Termin | Znaczenie |
|---|---|
| **Wysokość kondygnacji** | Różnica poziomów posadzek wykończonych. Jedyny wymiar wejściowy. |
| **Wysokość stopnia (h)** | Wymiar pionowy jednego stopnia, czyli podstopnica. |
| **Szerokość stopnia (s)** | Głębokość stopnicy mierzona w linii ruchu, bez nosa. |
| **Nos stopnia** | Nadwieszenie stopnicy nad podstopnicą, zwykle 20–30 mm. |
| **Policzek / belka** | Element nośny biegu; w schodach drewnianych deska nacinana lub belka centralna. |
| **Rzut biegu** | Pozioma długość biegu: liczba stopnic × szerokość stopnia. |
| **Wysokość przejścia** | Odległość pionowa od nosa stopnia do przeszkody nad nim. |

---

## Sekwencja obliczeń

```
1. Liczba stopni     = wysokość kondygnacji ÷ zakładana wysokość stopnia (zaokrągl.)
2. Wysokość stopnia  = wysokość kondygnacji ÷ liczba stopni
3. Szerokość stopnia = (620 mm - 2 × wysokość stopnia)   [reguła Blondela]
4. Liczba stopnic    = liczba stopni - 1
5. Rzut biegu        = liczba stopnic × szerokość stopnia
6. Długość policzka  = √(wysokość kondygnacji² + rzut biegu²)
7. Kąt nachylenia    = arctg(wysokość stopnia ÷ szerokość stopnia)
```

### Reguła Blondela ma w Polsce rangę przepisu

W USA zależność **2h + s** jest tylko wskazówką ergonomiczną. W Polsce **§69 WT wymaga**, aby szerokość stopnia wynikała z zależności:

```
2 × h + s = od 600 mm do 650 mm
```

To jedna z najważniejszych różnic na tej stronie. Skrajny stopień dopuszczony przez IRC, 197 × 254 mm (7,75" × 10"), daje 2h + s = 648 mm i jeszcze mieści się w polskich widełkach, ale stopień 190 × 250 mm daje 630 mm przy kącie 37° — formalnie zgodny, praktycznie stromy. Kalkulator nie sprawdza tej zależności, więc przelicz wynik i porównaj z zakresem 600–650 mm.

---

## Limity wymiarowe: WT kontra normy amerykańskie

| Zastosowanie | Maks. wysokość stopnia | Min. szerokość biegu | Podstawa |
|---|---|---|---|
| **Dom jednorodzinny, mieszkanie dwupoziomowe** | 0,19 m (7,5") | 0,80 m (31") | WT §68 |
| **Budynek wielorodzinny** | 0,175 m (6,9") | 1,20 m (47") | WT §68 |
| **Piwnica, poddasze nieużytkowe, pom. techniczne** | 0,20 m (7,9") | 0,80 m (31") | WT §68 |
| Mieszkalny — model kalkulatora | 0,197 m (7,75") | 0,91 m (36") | IRC §R311.7 |
| Użyteczności publicznej — model kalkulatora | 0,178 m (7,0") | 1,12 m (44") | IBC §1011.5 |
| Przemysłowe — model kalkulatora | 0,241 m (9,5") | — | OSHA 1910.25 |

Dodatkowe wymagania polskie, których kalkulator nie zna:

- **Liczba stopni w jednym biegu:** nie mniej niż 3 i nie więcej niż 17 dla kondygnacji nadziemnych, a w schodach zewnętrznych nie więcej niż 10.
- **Wysokość przejścia** pod biegiem lub spocznikiem: minimum **2,0 m**, w pomieszczeniach technicznych 1,9 m. IRC wymaga 2,03 m (80"), więc progi są praktycznie tożsame.
- **Głębokość spocznika** w budynkach wielorodzinnych: minimum 1,5 m.
- **Szerokość użytkową** biegu mierzy się między poręczami, nie po obrysie konstrukcji.
- W **schodach zabiegowych** szerokość stopnia sprawdza się na linii ruchu, około 0,4 m od wewnętrznej krawędzi biegu; przy węższym końcu stopnia i tak musi zostać wymiar umożliwiający postawienie stopy.

---

## Przykład: kondygnacja 2,80 m w domu jednorodzinnym

* **Wysokość kondygnacji:** 2 800 mm (110,2")
* **Zakładana wysokość stopnia:** 175 mm → 2 800 ÷ 175 = **16 stopni**
* **Rzeczywista wysokość stopnia:** 2 800 ÷ 16 = **175,0 mm** (6,89")
* **Szerokość stopnia z reguły Blondela:** 620 − 2 × 175 = **270 mm** (10,6")
* **Liczba stopnic:** 16 − 1 = **15**
* **Rzut biegu:** 15 × 270 = **4 050 mm** (13,3 ft)
* **Długość policzka:** √(2,80² + 4,05²) = **4,92 m** (16,1 ft)
* **Kąt nachylenia:** arctg(175 ÷ 270) = **32,9°**
* **Sprawdzenie Blondela:** 2 × 175 + 270 = **620 mm** — w widełkach 600–650 mm

Rzut 4,05 m to dużo dla małego domu. Skrócenie biegu wymaga podniesienia stopnia (176–190 mm mieści się w limicie dla domu jednorodzinnego) albo wprowadzenia spocznika i drugiego biegu pod kątem prostym. Nie skracaj natomiast szerokości stopnia poza regułę Blondela — to najczęstsza przyczyna schodów, po których nie da się bezpiecznie zejść.

---

## Kąt nachylenia a komfort

| Zakres kąta | Ocena | Gdzie stosowany |
|---|---|---|
| poniżej 25° | bardzo łagodny | schody reprezentacyjne, tarasowe |
| **30–37°** | **optymalny** | schody mieszkalne i publiczne |
| 37–42° | dość stromy | schody do piwnicy, na poddasze |
| powyżej 42° | stromy | schody strychowe, drabiniaste |

---

## Konstrukcja: dlaczego polskie schody wyglądają inaczej

Kalkulator liczy **policzek nacinany z deski 2×12** (38 × 286 mm) i podaje długość handlową tarcicy — to standard amerykańskiego budownictwa szkieletowego. W Polsce dominują dwa inne rozwiązania:

1. **Schody żelbetowe wylewane** na mokro, jako płyta biegowa z zabetonowanymi stopniami, później wykończone drewnem, gresem lub kamieniem. Wysokość stopnia projektuje się już na etapie konstrukcji, z uwzględnieniem grubości okładziny na stopniach i na obu posadzkach — pominięcie tego jest klasycznym błędem, po którym pierwszy albo ostatni stopień różni się wysokością.
2. **Schody drewniane policzkowe lub na belce centralnej**, z tarcicy 50 × 200 lub 50 × 250 mm, albo z drewna klejonego. Przekrój 2×12 nie jest w Polsce wymiarem handlowym.

Tolerancja jest bezlitosna: różnice wysokości stopni w jednym biegu powinny mieścić się w kilku milimetrach — IRC dopuszcza 9,5 mm (3/8").

---

## Balustrady i poręcze

* **Wysokość balustrady:** 0,9 m w domach jednorodzinnych i wewnątrz mieszkań dwupoziomowych, **1,1 m** w budynkach wielorodzinnych i zamieszkania zbiorowego (WT §298).
* **Prześwit między tralkami:** maksymalnie **0,12 m**. Model amerykański z kalkulatora stosuje inne kryterium — kula o średnicy 4" (0,102 m) nie może przejść między tralkami, czyli jest ostrzejszy.
* Tam, gdzie mogą przebywać dzieci, balustrada nie może mieć elementów umożliwiających wspinanie się, czyli poziomych szczeblin.
* **Długość poręczy** przyjmij jako długość policzka plus około 0,3 m na wyprowadzenia u góry i u dołu.
* **Liczba tralek:** rzut biegu podzielony przez maksymalny prześwit powiększony o szerokość tralki. Dla biegu 4,05 m i prześwitu 0,10 m z tralką 40 mm wychodzi około **29 tralek**.

---

## Najczęstsze pytania

### Ile stopni na kondygnację 2,80 m?

Najczęściej **16 stopni po 175 mm**. Przy 15 stopniach wysokość rośnie do 186,7 mm — dopuszczalne w domu jednorodzinnym, niedopuszczalne w budynku wielorodzinnym. Przy 17 stopniach spada do 164,7 mm i schody stają się bardzo wygodne, ale rzut biegu rośnie do ponad 4,6 m.

### Jaka jest optymalna wysokość stopnia?

W polskiej praktyce mieszkaniowej **165–180 mm** przy szerokości stopnia 275–300 mm. Kąt wychodzi wtedy 29–33°, a reguła Blondela jest spełniona z zapasem. Maksimum 190 mm dla domu jednorodzinnego traktuj jako wartość awaryjną dla schodów piwnicznych, nie jako cel projektowy.

### Czy wynik kalkulatora spełni polskie warunki techniczne?

Nie automatycznie. Kalkulator pilnuje limitów IRC i IBC, a nie WT. Po obliczeniu sprawdź trzy rzeczy: czy wysokość stopnia nie przekracza limitu z §68 dla twojego typu budynku, czy 2h + s mieści się w 600–650 mm i czy liczba stopni w biegu nie przekracza 17. Jeśli któryś warunek nie wychodzi, zmień liczbę stopni.

### Jak wyznaczyć długość otworu w stropie?

Otwór musi być tak długi, aby nad nosem każdego stopnia zostało minimum 2,0 m w świetle. Dla przykładu powyżej, przy stropie z posadzką o grubości 0,30 m, wychodzi około 2,7–3,0 m długości otworu. Im wyższy stopień i większy kąt, tym krótszy otwór — dlatego w ciasnych klatkach schodowych geometrię biegu i wielkość otworu projektuje się razem.
