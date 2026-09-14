## Jak korzystać z kalkulatora wykopów liniowych

Podaj **długość**, **szerokość** i **głębokość** wykopu, wybierz materiał podsypki i uruchom obliczenia. Narzędzie zwraca:

- **objętość wykopu** w m³ (w trybie imperialnym w yd³),
- **ilość podsypki** — kruszywo łamane, piasek albo ława betonowa,
- **objętość zasypki**, czyli grunt wracający do wykopu po ułożeniu rurociągu,
- **objętość gruntu spulchnionego** z współczynnikiem spulchnienia 25%,
- **liczbę wywrotek** przy skrzyni 10,7 m³ (14 yd³),
- **koszty** — robocizna sprzętu, podsypka i wywóz nadmiaru gruntu.

Przełącznik jednostek metrycznych i imperialnych działa w obie strony, a wyniki przeliczają się natychmiast.

> **Na czym oparty jest kalkulator:** wymagania bezpieczeństwa, minimalne głębokości przykrycia i stawki jednostkowe pochodzą z modelu amerykańskiego (OSHA 29 CFR 1926 Subpart P, NEC 300.5) oraz z cen rynku USA. W Polsce roboty ziemne prowadzi się według **rozporządzenia w sprawie bezpieczeństwa i higieny pracy podczas wykonywania robót budowlanych (Dz.U. 2003 nr 47 poz. 401)**, a wymiary przekopu wynikają z warunków technicznych gestorów sieci. Wynik traktuj jako przedmiar materiałowy, nie jako podstawę planu BIOZ.

---

## Wzór na objętość wykopu

```
1. Objętość wykopu (m3)   = długość × szerokość × głębokość
2. Podsypka (m3)          = długość × szerokość × grubość podsypki
3. Zasypka (m3)           = objętość wykopu - podsypka - objętość rury
4. Grunt spulchniony (m3) = objętość wykopu × 1,25
5. Liczba wywrotek        = grunt spulchniony ÷ 10,7 m3 (w górę)
```

W trybie imperialnym objętość wychodzi w jardach sześciennych, więc iloczyn wymiarów w stopach dzieli się jeszcze przez 27.

### Przykład: przyłącze wodociągowe 50 m

* **Wymiary:** 50,0 m długości × 0,60 m szerokości × 1,40 m głębokości
* **Objętość wykopu:** 50,0 × 0,60 × 1,40 = **42,0 m³** (54,9 yd³)
* **Podsypka piaskowa 10 cm:** 50,0 × 0,60 × 0,10 = 3,0 m³
* **Zasypka:** 42,0 − 3,0 − 0,3 (rura) = **38,7 m³**
* **Grunt spulchniony:** 42,0 × 1,25 = 52,5 m³ → **5 wywrotek**

Głębokość 1,40 m nie jest przypadkowa: przewód wodociągowy musi leżeć poniżej strefy przemarzania, a w Polsce projektowa głębokość przemarzania wynosi od 0,8 m na zachodzie kraju do 1,4 m na wschodzie i w rejonach podgórskich.

---

## Podsypka — co pod rurę

| Materiał | Typowa grubość | Zastosowanie | Uwagi wykonawcze |
|---|---|---|---|
| **Piasek średni** | 10–15 cm (4–6") | rury PE, PVC, kanalizacja grawitacyjna | równomierne podparcie, łatwo się zagęszcza; najczęstsze rozwiązanie w Polsce |
| **Kruszywo łamane 8–16 mm** | 10–15 cm (4–6") | kanalizacja deszczowa, drenaż | dobra przepuszczalność, dopasowuje się do kielichów |
| **Ława betonowa** | 15–25 cm (6–10") | kolektory dużych średnic, przejścia pod drogami | najdroższa opcja, wymagana przy słabym podłożu |
| **Bez podsypki** | — | rury osłonowe w gruncie skalistym o gotowej niwelecie | niedopuszczalna pod rury z tworzyw sztucznych |

Nad rurą wykonuje się jeszcze **obsypkę** do 30 cm ponad wierzch przewodu, zagęszczaną ręcznie po obu stronach. Kalkulator nie rozdziela podsypki i obsypki — jeśli specyfikacja wymaga obu, zwiększ grubość warstwy piasku o wysokość rury plus 30 cm.

---

## Zasypka a odkład: skąd bierze się nadmiar gruntu

Grunt wybrany z wykopu zwiększa objętość, bo traci pierwotne zagęszczenie. To **spulchnienie** i wynosi zwykle 20–30% dla piasków i pospółki, a nawet 35–40% dla iłów i glin zwięzłych. Kalkulator przyjmuje 25%.

Praktyczna konsekwencja: 42 m³ gruntu w calu daje ok. 52,5 m³ na pryzmie, a po ponownym zagęszczeniu do wykopu wróci mniej, niż z niego wyjęto — różnicę trzeba wywieźć. Grunt z wykopu jest odpadem w rozumieniu przepisów o odpadach, jeżeli nie zostanie wykorzystany na tej samej działce, i wtedy potrzebna jest karta przekazania odpadu.

Odkład ziemi układa się co najmniej **0,60 m od krawędzi wykopu**, nigdy bezpośrednio przy skarpie — dociążenie krawędzi jest jedną z najczęstszych przyczyn obsunięć.

---

## Bezpieczeństwo wykopów: model polski kontra amerykański

To najważniejsza różnica na tej stronie. Kalkulator odwzorowuje progi OSHA: obudowa lub skarpowanie od **5 stóp (1,52 m)**, projekt konstrukcyjny od 20 stóp (6,1 m), wyjście w promieniu 25 stóp.

W polskiej praktyce obowiązują inne liczby:

- Wykopy o ścianach pionowych **bez obudowy** dopuszcza się tylko do głębokości **1,0 m**, w gruntach zwartych, nienawodnionych i nieobciążonych przy krawędzi. Powyżej tej głębokości wymagana jest obudowa (szalunek, box, ścianka szczelna) albo bezpieczne nachylenie skarp.
- **Zejścia i wyjścia** z wykopu rozmieszcza się nie rzadziej niż co **20 m** długości.
- Obudowa powinna wystawać ponad terenem, tworząc barierę przed wpadnięciem materiału do wykopu.
- Wykop w pasie drogowym wymaga zezwolenia zarządcy drogi i projektu tymczasowej organizacji ruchu.

Nie istnieje też polski odpowiednik jednego numeru „call before you dig". Przed rozpoczęciem robót pobiera się mapę zasadniczą z ośrodka dokumentacji geodezyjnej, uzgadnia trasę z każdym gestorem sieci osobno (woda, kanalizacja, gaz, energetyka, telekomunikacja) i zleca wytyczenie geodezyjne. Przy sieciach gazowych i elektroenergetycznych zbliżenia wymagają nadzoru przedstawiciela właściciela sieci.

---

## Typowe głębokości ułożenia

| Instalacja | Szerokość wykopu | Głębokość — praktyka polska | Model kalkulatora (USA) |
|---|---|---|---|
| Przyłącze wodociągowe | 0,6–0,9 m (24–36") | 1,4–1,8 m — poniżej przemarzania | 0,9–1,2 m (36–48") |
| Przykanalik sanitarny DN160 | 0,8–1,0 m (32–40") | 1,0–2,0 m, decyduje spadek do sieci | 0,9–1,8 m (36–72") |
| Kabel elektroenergetyczny nn | 0,4–0,6 m (16–24") | 0,7 m w terenie, 1,0 m pod jezdnią | 0,6 m (24", NEC 300.5) |
| Przyłącze gazowe | 0,4–0,6 m (16–24") | ok. 0,8 m, pod drogą więcej | 0,45–0,6 m (18–24") |
| Drenaż opaskowy | 0,4–0,6 m (16–24") | poniżej poziomu posadowienia ław | 0,45–0,9 m (18–36") |
| Ława fundamentowa pod ściankę | 0,4–0,6 m (16–24") | do 0,8–1,4 m, zależnie od strefy | 0,6–1,2 m (24–48") |

---

## Najczęstsze pytania

### Ile metrów sześciennych ma typowy wykop pod przyłącze?

Wykop 15 m × 0,6 m × 1,5 m to **13,5 m³** (17,7 yd³) gruntu w calu i około 16,9 m³ na pryzmie po spulchnieniu. Zmieści się w dwóch przyczepach rolniczych albo w jednej wywrotce trójosiowej.

### Jaki jest współczynnik spulchnienia gruntu?

Dla piasków i pospółki 20–25%, dla glin i iłów 30–40%, dla gruntu skalistego rozdrobnionego nawet 50%. Kalkulator używa 25%, co jest wartością bezpieczną dla większości gruntów rodzimych w Polsce. Współczynnik dotyczy tylko transportu — po zagęszczeniu grunt wraca do objętości bliskiej pierwotnej.

### Czy grunt z wykopu można użyć jako zasypkę?

Tak, jeśli jest to grunt niespoisty, bez części organicznych i gruzu. Piaski i pospółki zagęszczają się dobrze warstwami 20–30 cm. Glin i iłów nie należy stosować w strefie rury ani pod nawierzchniami — pęcznieją, źle się zagęszczają i przenoszą obciążenia punktowe na przewód. W takim przypadku sprowadza się piasek na wymianę.

### Ile trwa wykonanie wykopu?

Minikoparka 1,5–3 t robi 15–30 m wykopu na godzinę przy głębokości 1,2 m w gruncie średnim, koparka gąsienicowa 8–15 t nawet 30–90 m/h. Ręcznie, łopatą, to 1,5–3 m na roboczogodzinę — dlatego ręczny wykop stosuje się tylko w strefach zbliżeń do istniejącego uzbrojenia, gdzie i tak jest obowiązkowy.

### Czy potrzebne jest pozwolenie na wykop?

Zależy od rodzaju robót. Przyłącza można realizować na zgłoszenie albo bez zgłoszenia, na podstawie warunków technicznych i planu sytuacyjnego, ale wejście w pas drogowy wymaga zezwolenia zarządcy drogi i opłaty za zajęcie pasa liczonej za dobę i za m² zajętej powierzchni. Kalkulator nie ujmuje tej pozycji, a w terenie zabudowanym bywa ona istotną częścią kosztu.
