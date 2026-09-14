## Kalkulator izolacji — od R-value do lambdy i współczynnika U

Kalkulator liczy powierzchnię do ocieplenia, wymaganą grubość materiału i liczbę opakowań. Działa jednak w jednostkach amerykańskich, więc zanim użyjesz wyniku w polskim projekcie, trzeba go przetłumaczyć na parametry, którymi posługują się warunki techniczne.

> **Trzy różne jednostki, jedno zjawisko:** narzędzie posługuje się **R-value** w ft²·°F·h/BTU, zgodnie z **IECC 2021 / IRC Tabela N1102.1.3** i podziałem USA na strefy klimatyczne 1–8. W Polsce projektuje się na **lambdę** materiału w W/(m·K), **opór cieplny R** w m²·K/W i **współczynnik przenikania ciepła U** w W/(m²·K), a wymagania zawiera **rozporządzenie w sprawie warunków technicznych (WT 2021)**. Kalkulator nie zna polskich wartości U — użyj go do przedmiaru powierzchni i opakowań, a grubość dobierz z tabel poniżej.

---

## Przeliczniki, bez których nie da się korzystać z amerykańskich tabel

```
R [m2K/W]      = R-value [ft2 F h/BTU] ÷ 5,678
R [m2K/W]      = grubość [m] ÷ lambda [W/(m K)]
U [W/(m2 K)]   = 1 ÷ RT
RT             = Rsi + suma (d ÷ lambda) + Rse       Rsi = 0,13   Rse = 0,04
grubość [m]    = lambda × wymagany opór cieplny
```

| Amerykańskie R-value | Opór cieplny w SI | Wełna λ = 0,035 | Styropian grafitowy λ = 0,031 |
|---|---|---|---|
| **R-13** | 2,29 m²·K/W | 8 cm | 7 cm |
| **R-21** | 3,70 m²·K/W | 13 cm | 11,5 cm |
| **R-30** | 5,28 m²·K/W | 18,5 cm | 16,5 cm |
| **R-38** | 6,69 m²·K/W | 23,5 cm | 21 cm |
| **R-49** | 8,63 m²·K/W | 30 cm | 27 cm |
| **R-60** | 10,57 m²·K/W | 37 cm | 33 cm |

Amerykańskie wymaganie R-49 dla stropu w strefie 5 (Chicago, Boston) odpowiada więc około 30 cm wełny — dokładnie tyle, ile w Polsce układa się standardowo na stropie ostatniej kondygnacji.

---

## Wymagania WT 2021: maksymalne U przegród

| Przegroda | U maksymalne | Odpowiednik w R-value |
|---|---|---|
| **Ściana zewnętrzna** (ti ≥ 16°C) | 0,20 W/(m²·K) | ok. R-28 |
| **Dach, stropodach, strop pod nieogrzewanym poddaszem** | 0,15 W/(m²·K) | ok. R-38 |
| **Strop nad nieogrzewaną piwnicą lub przejazdem** | 0,25 W/(m²·K) | ok. R-23 |
| **Podłoga na gruncie** | 0,30 W/(m²·K) | ok. R-19 |
| **Okna i drzwi balkonowe** | 0,90 W/(m²·K) | — |
| **Okna dachowe** | 1,10 W/(m²·K) | — |
| **Drzwi zewnętrzne** | 1,30 W/(m²·K) | — |

Dwie różnice systemowe wobec modelu amerykańskiego. Po pierwsze, **WT stawia wymaganie całej przegrodzie, a nie samej izolacji** — liczy się mur, tynki, opory przejmowania ciepła i wpływ mostków termicznych, a nie tylko R-value materiału w szczelinie. Po drugie, oprócz izolacyjności obowiązuje wskaźnik zapotrzebowania na **nieodnawialną energię pierwotną EP**, dla domu jednorodzinnego na poziomie 70 kWh/(m²·rok). Dla domów jednorodzinnych warunki techniczne dopuszczają ścieżkę uproszczoną — spełnienie wymagań izolacyjności przegród i ograniczenia powierzchni okien zamiast obliczania EP. Zakres ścieżki potwierdź z projektantem.

---

## Materiały izolacyjne stosowane w Polsce

| Materiał | Lambda λ [W/(m·K)] | R na 10 cm | Typowe zastosowanie |
|---|---|---|---|
| **Wełna szklana w rolce** | 0,031–0,038 | 2,6–3,2 m²·K/W | dach skośny, strop, ściany szkieletowe |
| **Wełna skalna w płytach** | 0,035–0,040 | 2,5–2,9 m²·K/W | fasady, ściany oddzieleń pożarowych, akustyka |
| **Styropian EPS fasada biały** | 0,038–0,040 | 2,5–2,6 m²·K/W | ETICS, ściany zewnętrzne |
| **Styropian grafitowy** | 0,031–0,033 | 3,0–3,2 m²·K/W | ETICS przy ograniczonej grubości |
| **EPS 100 / EPS 200 podłoga** | 0,036–0,038 | 2,6–2,8 m²·K/W | podłoga na gruncie, posadzki obciążone |
| **XPS (polistyren ekstrudowany)** | 0,033–0,036 | 2,8–3,0 m²·K/W | cokoły, fundamenty, izolacja obwodowa |
| **Płyta PIR** | 0,022–0,026 | 3,8–4,5 m²·K/W | dachy płaskie, nakrokwiowo, mała grubość |
| **Celuloza wdmuchiwana** | 0,038–0,041 | 2,4–2,6 m²·K/W | stropy drewniane, zamknięte przestrzenie |
| **Piana PUR otwartokomórkowa** | 0,036–0,040 | 2,5–2,8 m²·K/W | dach skośny od wewnątrz |
| **Piana PUR zamkniętokomórkowa** | 0,022–0,028 | 3,6–4,5 m²·K/W | dachy płaskie, hale, płyty fundamentowe |

---

## Ile centymetrów w praktyce

* **Dach skośny:** 25–30 cm wełny w dwóch warstwach — między krokwiami i pod nimi na ruszcie krzyżowym. Jedna warstwa między krokwiami nigdy nie wystarczy, bo drewno krokwi ma λ około 0,16 i tworzy mostek na całej wysokości.
* **Strop nad ostatnią kondygnacją (poddasze nieużytkowe):** 30–40 cm wełny lub celulozy luzem. Najtańszy sposób obniżenia rachunków w całym budynku, bo materiał kładzie się swobodnie, bez rusztu i bez wykończenia.
* **Ściana zewnętrzna murowana:** aby zejść do U = 0,20 W/(m²·K), na murze z pustaka ceramicznego 25 cm wystarcza około 12 cm styropianu grafitowego lub 16 cm białego, a na betonie komórkowym jeszcze mniej. W praktyce stosuje się 15–20 cm, bo dopłata za grubszą płytę jest niewielka, a U spada wtedy do 0,14–0,17.
* **Podłoga na gruncie:** 10–15 cm EPS 100 pod wylewkę, plus pas XPS przy krawędzi płyty.
* **Ściana fundamentowa i cokół:** 8–12 cm XPS, zawsze materiał niechłonący wody.

```
Przykład: dach skośny, cel U = 0,15 W/(m2 K)
RT wymagane = 1 ÷ 0,15 = 6,67 m2K/W
Opór warstw izolacji = 6,67 - 0,13 - 0,04 - 0,20 (poszycie, płyta g-k) = 6,30
Grubość wełny = 0,035 × 6,30 = 0,22 m  -->  przyjmij 25 cm z zapasem na mostki
```

---

## Paroizolacja: w Polsce zawsze od strony wewnętrznej

Amerykańskie poradniki dzielą zalecenia na klimaty grzewcze i chłodnicze, i w strefach 1–2 odradzają szczelną paroizolację po stronie wewnętrznej. **W Polsce ten podział nie ma zastosowania** — cały kraj jest klimatem grzewczym, więc paroizolację układa się po stronie ciepłej, czyli od wewnątrz pomieszczenia, a od zewnątrz stosuje się membranę wysokoparoprzepuszczalną.

Trzy zasady, których naruszenie kończy się zawilgoceniem konstrukcji:

1. **Szczelność paroizolacji jest ważniejsza niż jej klasa.** Nieuszczelniony zakład albo przebicie od puszki elektrycznej przenosi więcej wilgoci niż cała powierzchnia folii. Zakłady klej taśmą systemową, przejścia uszczelniaj mankietami.
2. **Nigdy dwie warstwy nieprzepuszczalne** po obu stronach izolacji. Wilgoć, która się dostanie, nie ma jak wyschnąć.
3. **Nie zasłaniaj szczeliny wentylacyjnej** pod pokryciem dachu. Wełna dopchnięta do membrany albo do deskowania blokuje przepływ powietrza i traci parametry po pierwszym sezonie.

---

## Najczęstsze pytania

### Jak przeliczyć amerykańskie R-38 na centymetry wełny?

Podziel przez 5,678, żeby dostać opór w m²·K/W: 38 ÷ 5,678 = 6,69. Następnie pomnóż przez lambdę materiału: 6,69 × 0,035 = 0,234 m, czyli **23–24 cm wełny**. Dla styropianu grafitowego wyjdzie 21 cm, dla płyty PIR około 16 cm.

### Ile wełny na dach skośny w polskich warunkach?

**25–30 cm** w układzie dwuwarstwowym. 25 cm wełny λ = 0,035 daje przegrodzie U w okolicach 0,14–0,15 W/(m²·K), czyli wymaganie WT jest spełnione. Przy jednej warstwie 20 cm między krokwiami realne U wyjdzie około 0,20 z powodu mostków przez drewno — formalnie za mało.

### Czy można dołożyć izolację na starą?

Tak, jeśli stara warstwa jest sucha, niezbita i bez śladów gryzoni. Nową wełnę układaj **bez okładziny paroszczelnej** i prostopadle do starej, żeby przykryć styki. Nie wolno natomiast zamknąć starej izolacji między dwiema foliami — to najczęstszy błąd przy dokładaniu wełny na strop z istniejącą paroizolacją.

### Czy grubsza izolacja zawsze się opłaca?

Nie liniowo. Pierwsze 15 cm na stropie eliminuje większość strat, kolejne 15 cm już znacznie mniej — zależność jest hiperboliczna, bo liczy się U, czyli odwrotność oporu. Sensowna granica dla stropu to 35–40 cm, dla ściany 20 cm, a powyżej tych wartości warto raczej zająć się mostkami termicznymi, szczelnością powietrzną i stolarką.

### Czy wynik kalkulatora spełni warunki techniczne?

Nie automatycznie. Kalkulator sprawdza tabele IECC dla amerykańskich stref klimatycznych, a nie U z WT 2021. Policz przedmiar powierzchni i opakowań w narzędziu, a wymaganą grubość wyznacz z lambdy materiału i docelowego U przegrody. Świadectwo charakterystyki energetycznej i tak sporządza się na podstawie obliczeń całego budynku, z mostkami termicznymi i sprawnością instalacji.
