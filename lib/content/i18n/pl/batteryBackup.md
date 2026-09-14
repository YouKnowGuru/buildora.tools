## Kalkulator zasilania awaryjnego (UPS): pojemność akumulatora, falownik i czas pracy

Kalkulator **zasilania awaryjnego i domowych magazynów energii** umożliwia precyzyjne obliczenie wymaganej pojemności akumulatorów, mocy inwertera oraz parametrów ładowania solarnego niezbędnych do podtrzymania zasilania w trakcie przerw w dostawie prądu.

Narzędzie oblicza:

- **Ciągłą moc zapotrzebowaną (W)** oraz łączne dobowe zużycie energii (Wh lub kWh)
- **Zalecaną pojemność brutto banku akumulatorów** w watogodzinach (Wh) i amperogodzinach (Ah)
- **Wymaganą moc inwertera (falownika)** uwzględniającą prądy rozruchowe
- **Szacowany czas podtrzymania (autonomię)** przy zadanym obciążeniu
- **Moc paneli fotowoltaicznych (Wp)** do dziennego odzyskiwania energii
- **Szacunkowe zestawienie kosztów** w zależności od technologii (LiFePO₄ vs AGM)

---

## 1. Główne elementy instalacji zasilania rezerwowego

Poprawnie zaprojektowany układ zasilania awaryjnego składa się z czterech współpracujących modułów:

| Element układu | Rola w systemie | Kluczowy parametr |
|---|---|---|
| **Bank akumulatorów** | Magazynowanie energii prądu stałego (DC) | Pojemność użytkowa (Wh / Ah) oraz napięcie (12V, 24V, 48V) |
| **Falownik / Inwerter** | Przetwarzanie prądu stałego DC na zmienny AC 230V | Moc ciągła i odporność na przeciążenia rozruchowe |
| **Regulator ładowania** | Optymalizacja ładowania z modułów fotowoltaicznych | Układ śledzenia punktu mocy maksymalnej (MPPT) |
| **Przełącznik SZR (ATS)** | Błyskawiczne przełączanie między siecią a akumulatorem | Czas przełączenia poniżej 20 milisekund |

---

## 2. Głębokość rozładowania (DoD) a żywotność ogniw

Współczynnik **DoD (Depth of Discharge)** określa maksymalny dopuszczalny stopień rozładowania znamionowej pojemności ogniwa, który nie wywołuje przyspieszonej degradacji chemicznej.

```
Energia uzyteczna (Wh) = Pojemnosc nominalna (Wh) x (DoD / 100)
```

| Technologia akumulatora | Zalecana głębokość rozładowania (DoD) | Liczba cykli roboczych | Sprawność układu |
|---|---|---|---|
| **LiFePO₄ (Litowo-żelazowo-fosforanowe)** | 80% – 90% | 3 500 – 6 000 cykli (10–15 lat) | 95% – 98% |
| **Litowo-jonowe (NMC)** | 80% | 1 500 – 2 500 cykli | 92% – 95% |
| **Kwasowo-ołowiowe AGM** | 50% | 400 – 600 cykli (2–4 lata) | 80% – 85% |
| **Tradycyjne ołowiowe (GEL / WET)** | 50% | 300 – 500 cykli | 75% – 82% |

> **Rekomendacja techniczna:** Ogniwa **LiFePO₄** oferują niemal dwukrotnie wyższą pojemność użyteczną niż akumulatory ołowiowe o tych samych parametrach katalogowych, a ich żywotność jest nawet dziesięciokrotnie dłuższa, co czyni je najbardziej ekonomicznym rozwiązaniem w przeliczeniu na pojedynczy cykl pracy.

---

## 3. Formuły obliczeniowe krok po kroku

```
1. Wymagana energia (Wh) = Moc ciagla (W) x Czas podtrzymania (h)

2. Pojemnosc brutto akumulatora (Wh) = Wymagana energia (Wh) / (Sprawnosc inwertera x DoD)

3. Pojemnosc w amperogodzinach (Ah) = Pojemnosc brutto (Wh) / Napiecie systemu (V)

4. Minimalna moc ciagla falownika (W) = Moc ciagla (W) x 1,25

5. Wymagana moc fotowoltaiki (Wp) = Dobowe zapotrzebowanie (Wh) / (Godziny szczytowe x 0,77)
```

### Praktyczny przykład: zasilanie domu jednorodzinnego przez 8 godzin

- **Podtrzymywane urządzenia:** Lodówka (120W), pompa obiegowa CO i sterownik (100W), oświetlenie LED i router (60W), laptop i ładowarki (70W) = **350 W**
- **Oczekiwany czas pracy:** 8 godzin
- **Zapotrzebowanie na energię:** 350 W × 8 h = **2 800 Wh (2,8 kWh)**
- **Dobór akumulatora LiFePO₄ (DoD 80%) i falownika z czystym sinusem (sprawność 92%):**
  - Wymagana pojemność brutto: 2 800 / (0,92 × 0,80) = **3 804 Wh (3,8 kWh)**
  - Przy napięciu systemowym 48V: 3 804 Wh / 48V = **79,25 Ah** (standardowy magazyn energii 48V 100Ah)
  - Zalecany falownik: 350 W × 1,25 = 437,5 W (rekomendowany inwerter z czystym sinusem o mocy ciągłej minimum 1 000W w celu bezproblemowej obsługi prądu rozruchowego sprężarki lodówki oraz pompy CO)

---

## 4. Wybór napięcia magistrali: 12V, 24V lub 48V

| Napięcie robocze | Zalecana moc ciągła | Przekrój przewodów | Typowe przeznaczenie |
|---|---|---|---|
| **12 V** | Do 1 000 W | Bardzo gruby (wysokie natężenie prądu) | Kampery, przyczepy, łodzie, małe systemy alarmowe |
| **24 V** | 1 000 W do 3 000 W | Umiarkowany | Domki letniskowe, małe warsztaty |
| **48 V** | Powyżej 3 000 W | Cienki i ekonomiczny | Domy jednorodzinne, instalacje fotowoltaiczne off-grid |

---

## Najczęściej zadawane pytania

### Ile paneli fotowoltaicznych potrzeba do naładowania akumulatora w jeden dzień?
Podziel dobowe zużycie energii w watogodzinach przez średnią liczbę godzin szczytowego nasłonecznienia (w Polsce wynosi ona średnio 3,5 do 4,2 godziny w sezonie wiosenno-letnim) z uwzględnieniem współczynnika sprawności systemu 77%. Aby uzupełnić 3 800 Wh dziennie, potrzebne jest około 1 150 Wp mocy w panelach, co odpowiada trzem panelom o mocy 400 Wp.

### Dlaczego czysty sinus w inwerterze jest tak ważny?
Inwerter z czystym sinusem generuje napięcie o identycznym przebiegu jak sieć elektroenergetyczna. Inwertery o modyfikowanym sinusie powodują przegrzewanie silników indukcyjnych (pompy ciepła, lodówki, pompy obiegowe) i mogą trwale uszkodzić zasilacze nowoczesnego sprzętu elektronicznego.

### Czy niska temperatura ma wpływ na pojemność akumulatora?
Tak. Spadek temperatury spowalnia reakcje elektrochemiczne. Akumulatory kwasowo-ołowiowe tracą w temperaturze 0 °C nawet do 30% nominalnej pojemności. Akumulatory LiFePO₄ zachowują wysoką wydajność rozładowania, jednak wbudowany układ BMS bezwzględnie blokuje proces ładowania w temperaturach poniżej 0 °C, aby chronić elektrody przed zniszczeniem.
