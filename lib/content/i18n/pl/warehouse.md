## Jak policzyć powierzchnię hali magazynowej

Kalkulator wyznacza powierzchnię magazynu warstwami: najpierw pole odkładcze palet, potem korytarze robocze wymuszone przez wózki, na końcu bufor na strefy operacyjne — doki, plac przyjęć, kompletację, ładowanie akumulatorów, biuro i socjal. Podajesz liczbę palet, liczbę poziomów w regale, typ wózka i stawkę czynszu, a otrzymujesz powierzchnię w m² (lub ft²) oraz szacunkowy koszt najmu.

> **Skąd pochodzą wartości domyślne:** pole odkładcze 1,39 m² (15 ft²) odpowiada palecie **GMA 1219 × 1016 mm** używanej w USA, a czynsz liczony jest jako stawka roczna za stopę kwadratową w formule NNN. To model amerykański. W Polsce standardem jest **europaleta EUR1 1200 × 800 mm**, a czynsz podaje się w **EUR za m² na miesiąc** plus opłata eksploatacyjna. Poniżej pokazujemy, jak przeliczyć jedno na drugie.

---

## Wzór warstwowy

```
1. Pozycje na posadzce = liczba palet ÷ liczba poziomów regału
2. Pole składowania    = pozycje na posadzce × pole odkładcze palety
3. Korytarze           = pole składowania × [wsp. korytarzy ÷ (1 - wsp. korytarzy)]
4. Strefy operacyjne   = (składowanie + korytarze) × 0,25
5. Powierzchnia całkowita = składowanie + korytarze + strefy operacyjne
```

### Przykład: 500 palet, regał 4-poziomowy, wózek z wysuwnym masztem

* **Pozycje na posadzce:** 500 ÷ 4 = **125 gniazd**
* **Pole składowania:** 125 × 1,39 = **174 m²** (1 875 ft²)
* **Korytarze (wsp. 0,30):** 174 × (0,30 ÷ 0,70) = **74 m²**
* **Podsuma:** 174 + 74 = 248 m²
* **Strefy operacyjne (+25%):** 62 m²
* **Powierzchnia wymagana: 311 m²** (3 348 ft²)

Na europaletach to samo 500 gniazd zajmie o kilkanaście procent mniej posadzki — patrz tabela poniżej.

---

## Standardy palet i realne pole odkładcze

Pole odkładcze to nie sam obrys palety. Doliczasz zwis ładunku (2–5 cm na stronę), luz między ramami regału i przestrzeń wolną wymaganą przez zabezpieczenia przeciwpożarowe.

| Standard palety | Wymiary | Pole odkładcze na gniazdo | Gdzie dominuje |
|---|---|---|---|
| **EUR1 (europaleta)** | 1200 × 800 mm | **1,16 m² (12,5 ft²)** | Polska, Unia Europejska |
| **EUR2 / paleta przemysłowa** | 1200 × 1000 mm | **1,39 m² (15,0 ft²)** | przemysł, chemia, AGD |
| **GMA (domyślna w kalkulatorze)** | 1219 × 1016 mm | **1,39 m² (15,0 ft²)** | USA, Kanada, Meksyk |
| **Paleta na beczki / wielkogabarytowa** | 1219 × 1219 mm | **1,67 m² (18,0 ft²)** | chemia, rolnictwo |

Jeżeli składujesz wyłącznie na EUR1, przelicz wynik kalkulatora współczynnikiem **0,83** dla samego pola składowania. Przy 500 paletach różnica to około 29 m² (312 ft²) posadzki — czyli realny pieniądz w skali roku.

---

## Systemy regałowe: gęstość kontra dostępność

| System | Dostępność palet | Wykorzystanie powierzchni | Do czego |
|---|---|---|---|
| **Regał rzędowy pojedynczy** | 100% | 35–45% | duża liczba indeksów, rotacja FIFO |
| **Regał podwójnej głębokości** | 50% | 50–60% | 2–4 palety na indeks, wózek z wysuwem teleskopowym |
| **Regał wjezdny (drive-in)** | niska, LIFO | 65–75% | mało indeksów, duże partie, mrożnie |
| **Regał przepływowy / push-back** | średnia | 60–70% | zagęszczenie z szybszym odkładem niż drive-in |
| **Składowanie blokowe na posadzce** | niska | 40–55% | towar w sztywnych opakowaniach, ogranicza wytrzymałość stosu |

---

## Korytarze robocze a typ wózka

* **Korytarz szeroki 3,6–4,0 m (12–13 ft)** — wózki czołowe z przeciwwagą. Najtańszy sprzęt i najłatwiejsza obsługa, ale korytarze zjadają 40–45% posadzki.
* **Korytarz wąski 2,6–3,0 m (8,5–10 ft)** — wózki z wysuwnym masztem (reach truck). Standard w polskich halach klasy A, praca do wysokości 10–11 m.
* **Korytarz bardzo wąski 1,7–2,0 m (5,5–6,5 ft)** — wózki systemowe z obrotowym widłozespołem, prowadzenie szynowe lub indukcyjne. Maksymalna gęstość, ale wymaga posadzki o zaostrzonej tolerancji równości i dużego nakładu inwestycyjnego.

Zmiana wózka czołowego na wysuwny potrafi obniżyć wymaganą powierzchnię hali o 25–30% przy tej samej liczbie palet. To zwykle najtańsza optymalizacja, jaką da się zrobić przed podpisaniem umowy najmu.

---

## Wysokość hali a liczba poziomów paletowych

Liczy się **wysokość w świetle**, czyli do spodu dźwigara, głowicy tryskaczowej lub oprawy — nie do kalenicy.

* **6–7 m** — hale z lat 90. i obiekty miejskie typu SBU: 3 poziomy palet.
* **8–9 m** — starsze parki logistyczne: 4 poziomy.
* **10–12 m (33–39 ft)** — obecny standard nowych hal klasy A w Polsce: 5–6 poziomów.
* **12–14 m i więcej** — obiekty typu big-box i magazyny wysokiego składowania: 7 poziomów i więcej.

Amerykańskie „clear height" 28–40 ft z modelu kalkulatora to 8,5–12 m, więc zakresy się pokrywają — różnica polega na tym, że w Polsce wysokość jest zapisana w umowie w metrach i weryfikowana przy odbiorze.

---

## Czynsz: dwa różne sposoby liczenia

```
Model USA (kalkulator):  czynsz roczny = powierzchnia (ft2) × stawka ($/ft2/rok)
Model polski:            czynsz miesięczny = powierzchnia (m2) × stawka (EUR/m2/mc)
                         + opłata eksploatacyjna (zł/m2/mc)
Przeliczenie stawki:     $/ft2/rok = EUR/m2/mc × 12 × kurs ÷ 10,764
```

W polskich umowach najmu stawka bazowa jest denominowana w euro i płatna w złotych po kursie z dnia faktury, a **opłata eksploatacyjna** (podatek od nieruchomości, ubezpieczenie, utrzymanie terenu, ochrona, konserwacja instalacji) jest rozliczana odrębnie i wypłacana w zł. Amerykański NNN obejmuje analogiczne pozycje, ale podaje je w stawce rocznej za ft². Do tego dochodzą powierzchnia biurowo-socjalna wyceniana wyżej niż magazynowa oraz kaucja lub gwarancja bankowa na 3 miesiące czynszu.

---

## Podział powierzchni w dobrze zaprojektowanym magazynie

* **Regały i pole składowania:** 40–50%
* **Korytarze robocze i drogi transportowe:** 25–30%
* **Doki, strefa przyjęć i wydań:** 15–20%
* **Kompletacja, pakowanie, zwroty:** 5–8%
* **Biuro, socjal, ładowanie akumulatorów:** 3–7%

> **Zasada praktyczna:** magazyn nie powinien pracować powyżej **85% nominalnego zapełnienia**. Powyżej tego progu gwałtownie rośnie liczba przestawień i spada wydajność pracy na roboczogodzinę.

---

## Najczęstsze pytania

### Ile powierzchni potrzeba na 1 000 palet?

Na regałach rzędowych 4-poziomowych z wózkami wysuwnymi to około **600–700 m²** (6 500–7 500 ft²) razem z korytarzami i strefą doków. Przy składowaniu blokowym w dwóch warstwach potrzeba **1 100–1 300 m²** (12 000–14 000 ft²). Na europaletach EUR1 dolne granice tych zakresów są realne, na paletach przemysłowych EUR2 — górne.

### Ile bram i doków przewidzieć?

Dla magazynu o dużej rotacji planuje się **1 dok na 930 m²** (10 000 ft²) powierzchni, dla składowania długoterminowego 1 dok na 1 900–2 300 m² (20 000–25 000 ft²). W Polsce dodatkowo warto sprawdzić głębokość placu manewrowego: zestaw 16,5 m potrzebuje około 35 m od linii doków, a to powierzchnia poza halą, której kalkulator nie liczy.

### Czym różni się powierzchnia brutto od użytkowej?

Powierzchnia brutto to obrys hali po zewnętrznej linii ścian. Powierzchnia użytkowa składowania to sama posadzka pod regałami i stosami. Umowy najmu w Polsce mierzy się zwykle po wewnętrznej stronie ścian modułu, więc wynik kalkulatora najlepiej porównywać z powierzchnią najmu modułu, nie z powierzchnią zabudowy z projektu.

### Czy kalkulator uwzględnia wymagania przeciwpożarowe?

Nie. Model amerykański zakłada przestrzenie wolne między paletami według NFPA. W Polsce podział na strefy pożarowe, klasa odporności pożarowej i obowiązek stałych urządzeń gaśniczych wynikają z warunków technicznych i z gęstości obciążenia ogniowego strefy — dla hal jednokondygnacyjnych progi powierzchni rzędu 10 000 m² zwykle wymuszają instalację tryskaczową typu ESFR. Zakres zabezpieczeń ustala rzeczoznawca do spraw zabezpieczeń przeciwpożarowych, a wysokość składowania trzeba z nim uzgodnić przed zamówieniem regałów.

### Jak liczba poziomów regału wpływa na powierzchnię?

Odwrotnie proporcjonalnie w części składowania. Przejście z 3 na 5 poziomów przy tej samej liczbie palet zmniejsza liczbę gniazd na posadzce o 40%. Granicę stawia wysokość w świetle, udźwig wózka na wymaganej wysokości podnoszenia i dopuszczalne obciążenie posadzki pod stopą ramy regału — ten ostatni parametr jest w polskich halach najczęstszym realnym ograniczeniem.
