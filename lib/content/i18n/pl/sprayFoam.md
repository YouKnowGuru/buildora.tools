## Piana PUR natryskowa — objętość, grubość i koszt

Kalkulator liczy zużycie piany poliuretanowej w **stopach deskowych (board feet)** — jednostce, którą posługuje się rynek amerykański. W Polsce wykonawcy wyceniają natrysk **za metr kwadratowy przy zadeklarowanej grubości**, a chemię rozlicza się w metrach sześciennych. Poniżej znajdziesz przeliczniki, polskie grubości i te elementy technologii, których model amerykański nie obejmuje.

> **Podstawa normowa:** kalkulator odwołuje się do **IECC 2021, IRC 2021 R316.4** (bariera termiczna) i **IRC R806.5** (dach niewentylowany). W Polsce obowiązują **warunki techniczne (WT 2021)** dla współczynników U, **PN-EN 13501-1** dla klasyfikacji reakcji na ogień i **PN-EN ISO 13788** dla oceny ryzyka kondensacji w przegrodzie. To nie są równoważne zestawy wymagań.

---

## Przelicznik: board foot na metry

Stopa deskowa to objętość powierzchni 1 ft² o grubości 1 cala.

```
1 bd ft            = 0,00236 m3
1 m3               = 424 bd ft
1 m2 przy 1 cm     = 4,24 bd ft
1 m2 przy 10 cm    = 42,4 bd ft

Objętość piany (m3) = powierzchnia (m2) × grubość (m)
Do zamówienia       = objętość × (1 + strata na natrysk ÷ 100)
```

| Grubość natrysku | Zużycie na 1 m² | W board feet |
|---|---|---|
| 5 cm (2") | 0,05 m³ | 21,2 bd ft |
| 10 cm (4") | 0,10 m³ | 42,4 bd ft |
| 15 cm (6") | 0,15 m³ | 63,6 bd ft |
| 20 cm (8") | 0,20 m³ | 84,8 bd ft |
| 25 cm (10") | 0,25 m³ | 106 bd ft |
| 30 cm (12") | 0,30 m³ | 127 bd ft |

Strata na natrysk i wyrównanie warstwy to 10% na powierzchniach otwartych i 15% w przestrzeniach między krokwiami lub słupkami.

---

## Otwartokomórkowa kontra zamkniętokomórkowa

| Parametr | Piana otwartokomórkowa | Piana zamkniętokomórkowa |
|---|---|---|
| **Gęstość** | 8–12 kg/m³ | 30–40 kg/m³ |
| **Lambda λ** | 0,036–0,040 W/(m·K) | 0,022–0,028 W/(m·K) |
| **Opór na 10 cm** | 2,5–2,8 m²·K/W (ok. R-15) | 3,6–4,5 m²·K/W (ok. R-23) |
| **Paroprzepuszczalność** | wysoka, przegroda oddycha | niska, sama działa jak paroizolacja |
| **Nasiąkliwość** | chłonie wodę jak gąbka | hydrofobowa |
| **Szczelność powietrzna** | od 8–9 cm grubości | od 2,5 cm grubości |
| **Sztywność** | elastyczna, pracuje z drewnem | usztywnia konstrukcję |
| **Tłumienie dźwięku** | bardzo dobre | słabe |
| **Wydajność zestawu 2 × 200 l** | 38–47 m³ | 9,5–12 m³ |
| **Cena materiału** | niższa, około 3–4 razy | wyższa |
| **Gdzie stosować** | dach skośny, ściany szkieletowe, stropy | dachy płaskie, płyty fundamentowe, hale stalowe, cokoły |

---

## Przykład: dach skośny 100 m²

**Wariant A — piana otwartokomórkowa 25 cm:**

* Objętość: 100 × 0,25 = **25,0 m³** (10 600 bd ft)
* Z 10% straty: **27,5 m³**
* Opór izolacji: 0,25 ÷ 0,038 = 6,58 m²·K/W
* Współczynnik przenikania przegrody: około **0,14 W/(m²·K)** — wymaganie WT 0,15 spełnione

**Wariant B — piana zamkniętokomórkowa 16 cm:**

* Objętość: 100 × 0,16 = **16,0 m³** (6 784 bd ft)
* Opór izolacji: 0,16 ÷ 0,025 = 6,40 m²·K/W
* Współczynnik przenikania: około **0,15 W/(m²·K)**

Ten sam efekt cieplny przy 16 cm zamiast 25 cm. Piana zamkniętokomórkowa wygrywa tam, gdzie brakuje wysokości krokwi, ale kosztuje wielokrotnie więcej za m² i zmienia fizykę przegrody — o czym poniżej.

---

## Największe ryzyko w polskim dachu: wilgoć w drewnie

Polskie dachy skośne mają drewnianą konstrukcję i pracują w klimacie z długim sezonem grzewczym oraz dużą wilgotnością względną powietrza zewnętrznego. To sytuacja, której amerykański przepis o dachu niewentylowanym nie opisuje wprost, a która decyduje o trwałości konstrukcji.

1. **Natrysk bezpośrednio na membranę wstępnego krycia.** Wielu producentów membran uzależnia gwarancję od zachowania szczeliny lub od zastosowania piany o określonej paroprzepuszczalności. Przed zleceniem prac sprawdź kartę techniczną konkretnej membrany, a nie tylko ulotkę wykonawcy piany.
2. **Piana zamkniętokomórkowa zamyka krokwie z dwóch stron.** Drewno o wilgotności powyżej 18% zapieczętowane materiałem nieprzepuszczalnym nie ma jak wyschnąć. Natryski wykonuje się na drewno wysuszone, o wilgotności poniżej 18%, i nigdy na drewno świeże z tartaku.
3. **Piana otwartokomórkowa wymaga paroizolacji od wewnątrz.** Jest paroprzepuszczalna, więc bez szczelnej folii po ciepłej stronie para z wnętrza dotrze do poszycia i tam się wykropli. To najczęściej pomijany element całej technologii.
4. **Dach pełnodeskowany z papą** to układ szczelny z obu stron. Taki zestaw wymaga obliczeniowej oceny ryzyka kondensacji według PN-EN ISO 13788, a nie decyzji na budowie.

---

## Ogień i zabudowa

IRC wymaga oddzielenia piany od pomieszczenia **barierą termiczną o odporności 15 minut**, czyli płytą gipsowo-kartonową 12,5 mm albo powłoką ognioochronną.

W Polsce reakcję na ogień klasyfikuje **PN-EN 13501-1** w euroklasach od A1 do F. Pianki poliuretanowe mają najczęściej klasę **E**, część systemów uzyskuje lepsze klasy dopiero z okładziną. Praktyka jest zbieżna z amerykańską: na poddaszu użytkowym pianę zabudowuje się płytą gipsowo-kartonową, a w pomieszczeniach nieużytkowych i technicznych zakres wymaganych zabezpieczeń wynika z przeznaczenia budynku i z warunków technicznych. Przy budynkach innych niż jednorodzinne zakres potwierdź z rzeczoznawcą do spraw zabezpieczeń przeciwpożarowych.

Bezpieczeństwo pracy: składnik izocyjanianowy (MDI) natryskuje się w aparacie z wymuszonym nawiewem powietrza, a pomieszczenie wietrzy się co najmniej **24 godziny** przed ponownym użytkowaniem. Nie jest to praca dla ekipy bez sprzętu ochronnego.

---

## Koszt i sposób wyceny

```
Przeliczenie stawki amerykańskiej:
zł/m2 przy grubości g[cm] = ($/bd ft) × 4,24 × g × kurs USD
```

Polska oferta ma zwykle postać stawki za m² przy podanej grubości, plus dojazd agregatu i minimalna wartość zlecenia. To istotne przy małych zakresach: natrysk 30 m² wieńca kosztuje w przeliczeniu na m² znacznie więcej niż natrysk całego dachu, bo dominują koszty dojazdu i rozruchu maszyny. Piana otwartokomórkowa na dach jest najtańszym wariantem, zamkniętokomórkowa na tej samej powierzchni bywa dwa do trzech razy droższa.

Do wykonania natrysku potrzebna jest też temperatura: podłoże powyżej około 10°C i chemia wygrzana do 20–25°C. W polskich warunkach oznacza to sezon od marca do listopada albo namiot z nagrzewnicą.

---

## Najczęstsze pytania

### Ile piany PUR na dach 100 m²?

Przy pianie otwartokomórkowej i grubości 25 cm to **25 m³** materiału, czyli około 10 600 bd ft, plus 10% na straty. Przy pianie zamkniętokomórkowej i grubości 16 cm — 16 m³. Wydajność jednego zestawu chemii 2 × 200 l to około 40 m³ piany otwartokomórkowej lub 10 m³ zamkniętokomórkowej.

### Czym różni się board foot od metra kwadratowego?

Board foot to jednostka **objętości** (1 ft² przy grubości 1 cala), a metr kwadratowy to **powierzchnia**. Dopiero powierzchnia razy grubość daje wielkość porównywalną. 1 m² natrysku o grubości 10 cm to 42,4 bd ft. Dlatego oferta „za bd ft" i oferta „za m²" są nieporównywalne, dopóki nie podasz grubości.

### Czy piana PUR zastępuje paroizolację?

Zamkniętokomórkowa od około 4 cm — tak, sama pełni rolę warstwy paroizolacyjnej. Otwartokomórkowa — **nie**, jest paroprzepuszczalna i w przegrodzie zewnętrznej wymaga osobnej folii po stronie wewnętrznej. Pomijanie tego kroku jest najczęstszą przyczyną zawilgocenia poddaszy ocieplonych pianą otwartokomórkową.

### Czy pianę można natryskiwać na krokwie od wewnątrz?

Tak, to podstawowe zastosowanie na poddaszach. Warunki: drewno wysuszone poniżej 18% wilgotności, sprawdzona zgodność z membraną wstępnego krycia, zachowana szczelina wentylacyjna pod pokryciem oraz zabudowa płytą gipsowo-kartonową. Przy dachu pełnodeskowanym z papą potrzebna jest ocena kondensacji dla konkretnego układu warstw.

### Czy zestawy DIY mają sens?

Przy bardzo małych zakresach — uszczelnienie wieńca, przestrzeni wokół ościeżnicy, zabudowy samochodowej. Przy zakresach powyżej kilku metrów sześciennych agregat wysokociśnieniowy wykonawcy jest tańszy i daje powtarzalną gęstość piany, bo utrzymuje ciśnienie i temperaturę składników. Zimna chemia z zestawu ręcznego wypływa w złej proporcji i tworzy pianę, która nie osiąga zakładanej lambdy.
