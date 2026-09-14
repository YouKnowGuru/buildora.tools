## Zmiękczacz wody — dobór w polskich jednostkach

Kalkulator dobiera zmiękczacz jonowymienny według metodyki amerykańskiej: twardość podaje się w **ziarnach na galon (GPG)**, pojemność złoża w **ziarnach**, zużycie soli w funtach, a przepływ w galonach na minutę. Polska instalacja opisywana jest inaczej: twardość w **stopniach niemieckich (°dH)** albo w mg CaCO₃/l, pojemność urządzenia w **°dH·m³**, sól w kilogramach, przepływ w m³/h. Poniżej znajdziesz przeliczniki i te dane wejściowe, które w polskim domu wyglądają zupełnie inaczej niż w amerykańskim.

> **Czym się różnią wymagania:** kalkulator opiera się na wytycznych **Water Quality Association** i normie sprzętowej **NSF/ANSI 44**. W Polsce jakość wody do spożycia reguluje **rozporządzenie Ministra Zdrowia** wdrażające dyrektywę 2020/2184, a urządzenia i materiały mające kontakt z wodą pitną muszą mieć **atest higieniczny** jednostki uprawnionej. Sól do regeneracji opisuje **PN-EN 973**. Kalkulator nie sprawdza żadnego z tych wymagań.

---

## Twardość: trzy jednostki, jedno zjawisko

```
1 °dH        = 17,8 mg CaCO3/l = 0,178 mmol/l
1 GPG        = 17,1 mg CaCO3/l = 0,96 °dH
1 mmol/l     = 5,6 °dH = 100 mg CaCO3/l
1 ziarno     = 0,0648 g CaCO3
```

Zbieżność jest wygodna: **1 GPG to prawie dokładnie 1 °dH**, więc wartość w stopniach niemieckich można wpisać do kalkulatora niemal bez korekty (różnica 4% mieści się w niepewności samego pomiaru).

| Twardość [°dH] | mg CaCO₃/l | Ocena | Skutki w instalacji |
|---|---|---|---|
| 0–5 | 0–89 | bardzo miękka | woda agresywna korozyjnie |
| 5–10 | 89–178 | miękka | bez osadu |
| 10–15 | 178–268 | średnio twarda | lekki kamień w bojlerze |
| 15–20 | 268–357 | twarda | wyraźny kamień, zalecane zmiękczanie |
| 20–30 | 357–535 | bardzo twarda | zmiękczanie konieczne |
| powyżej 30 | powyżej 535 | wyjątkowo twarda | typowe dla studni na wapieniach |

Polskie rozporządzenie dopuszcza w wodzie do spożycia twardość ogólną **60–500 mg CaCO₃/l**, czyli około 3,4–28 °dH. Dolna granica jest tu równie ważna jak górna: **woda całkowicie zmiękczona nie spełnia wymagań** i jest korozyjna dla instalacji miedzianej. Dlatego polskie zmiękczacze pracują z mieszaczem (bypassem), który pozostawia 5–8 °dH twardości resztkowej.

Nie zgaduj wartości wejściowej. Wodociągi publikują sprawozdania z badań jakości wody dla każdej strefy zasilania, a dla studni potrzebne jest badanie w laboratorium — pasek testowy wystarcza tylko do orientacji.

---

## Zużycie wody: największy błąd przy przenoszeniu modelu

Kalkulator przyjmuje domyślnie **75 galonów na osobę na dobę (284 l)**. Polskie gospodarstwo domowe zużywa według danych statystycznych **90–130 l na osobę na dobę**, a w domach jednorodzinnych z ogrodem 120–150 l. Różnica jest ponaddwukrotna i przenosi się wprost na dobrany rozmiar urządzenia.

```
Obciążenie dobowe [°dH·m3] = zużycie [m3/dobę] × twardość [°dH]
Pojemność wymagana         = obciążenie dobowe × cykl [dni] × (1 + rezerwa ÷ 100)
Objętość żywicy [l]        = pojemność wymagana ÷ pojemność jednostkowa złoża
Pojemność w ziarnach       = pojemność [°dH·m3] × 275
```

Pojemność jednostkowa złoża kationowymiennego to **3,0–4,0 °dH·m³ na litr żywicy** przy ekonomicznej dawce soli i do 5,0 °dH·m³/l przy dawce maksymalnej. Producenci podają w kartach zwykle wartość górną — przy doborze warto liczyć na dolnej.

---

## Przykład: 4 osoby, wodociąg 18 °dH

* Zużycie: 4 × 110 l = **0,44 m³/dobę** (116 gal)
* Obciążenie dobowe: 0,44 × 18 = **7,9 °dH·m³**
* Cykl 7 dni z rezerwą 20%: 7,9 × 7 × 1,2 = **66,5 °dH·m³** (18 300 ziaren)
* Objętość żywicy: 66,5 ÷ 3,5 = **19 l** → urządzenie z kolumną 20–25 l
* Sól na regenerację: 20 l × 128 g/l = **2,6 kg**; rocznie przy 52 cyklach około **135 kg**, czyli 5–6 worków 25 kg

Ten sam dom policzony amerykańskim domyślnym zużyciem 75 gal/os. daje 47 400 ziaren i urządzenie klasy 48 000 — **dwa i pół raza za dużo**. Przewymiarowany zmiękczacz nie jest neutralny: złoże stoi między cyklami tak długo, że zarasta bakteriami, a wymuszona regeneracja awaryjna co 7–14 dni i tak zużywa sól.

| Klasa amerykańska | Pojemność w °dH·m³ | Żywica | Dla ilu osób przy 18 °dH |
|---|---|---|---|
| 24 000 ziaren | 87 | 21 l (0,75 ft³) | 4–5 |
| 32 000 ziaren | 116 | 28 l (1,0 ft³) | 6–7 |
| 48 000 ziaren | 175 | 42 l (1,5 ft³) | dom wielorodzinny |
| 64 000 ziaren | 233 | 57 l (2,0 ft³) | obiekt usługowy |

---

## Żelazo i mangan: problem studni, nie wodociągu

Reguła kompensacji z kalkulatora jest słuszna: 1 mg/l żelaza rozpuszczonego obciąża złoże jak 4 GPG twardości, a 1 mg/l manganu jak 2 GPG. W polskim wodociągu ta poprawka jest jednak zwykle zerowa, bo rozporządzenie ogranicza żelazo do **0,200 mg/l**, a mangan do **0,050 mg/l**.

Inaczej w studni. Wody z utworów czwartorzędowych na dużej części kraju mają 0,5–3,0 mg/l żelaza, a to już wymaga **odżelaziacza przed zmiękczaczem**, nie samego większego zmiękczacza. Typowy polski układ przygotowania wody ze studni: filtr mechaniczny 20–50 μm, odżelaziacz ze złożem katalitycznym, zmiękczacz, a do celów spożywczych osmoza pod zlewem. Żelazo w formie wytrąconej (woda rdzawa po odstaniu) zapycha złoże jonowymienne nieodwracalnie.

---

## Popłuczyny: gdzie je odprowadzić

Jedna regeneracja urządzenia domowego zrzuca **80–150 l** solanki i wody z płukania (20–40 gal), czyli rocznie 4–8 m³. Model amerykański zakłada zrzut do kanalizacji sanitarnej i tam sprawa się kończy. W Polsce trzy przypadki różnią się zasadniczo:

1. **Kanalizacja miejska** — rozwiązanie bezproblemowe, koszt to woda i ścieki naliczone od tej samej objętości.
2. **Przydomowa oczyszczalnia biologiczna** — solanka niszczy osad czynny. Popłuczyny należy skierować poza reaktor albo wybrać urządzenie z regeneracją proporcjonalną, znacznie ograniczające zrzut soli.
3. **Zbiornik bezodpływowy (szambo)** — każdy metr sześcienny popłuczyn to dodatkowy wywóz. Przy 8 m³ rocznie robi się z tego realna pozycja w kosztach eksploatacji.

---

## Przepływ i przyłącze

| Liczba łazienek | Przepływ szczytowy | Przyłącze |
|---|---|---|
| 1 | 1,6 m³/h (7 GPM) | 3/4" (DN20) |
| 2 | 2,3 m³/h (10 GPM) | 1" (DN25) |
| 3 | 3,0 m³/h (13 GPM) | 1" (DN25) |
| 4 i więcej | od 3,6 m³/h (16 GPM) | 1 1/4" (DN32) |

Zmiękczacz montuje się za wodomierzem i filtrem mechanicznym, z obejściem pozwalającym odciąć urządzenie bez odcinania wody w domu i z osobnym punktem wody twardej do ogrodu.

---

## Najczęstsze pytania

### Jaki zmiękczacz dla 4 osób?

Przy twardości 18 °dH i realnym polskim zużyciu 110 l na osobę wystarcza urządzenie z **20–25 l żywicy**, czyli w nomenklaturze amerykańskiej klasa 24 000 ziaren. Przy twardości 25 °dH lub domu z ogrodem podlewanym z instalacji wewnętrznej przejdź o jeden rozmiar wyżej.

### Jak przeliczyć GPG na stopnie niemieckie?

Praktycznie jeden do jednego: 1 GPG = 0,96 °dH. Dokładniej przez wspólną jednostkę: mg CaCO₃/l ÷ 17,1 daje GPG, a ÷ 17,8 daje °dH. Jeśli laboratorium podało wynik w mmol/l, pomnóż przez 5,6, aby dostać °dH.

### Czy zmiękczać wodę do zera?

Nie. Woda o twardości poniżej 60 mg CaCO₃/l (3,4 °dH) nie spełnia polskich wymagań dla wody do spożycia, jest korozyjna dla rur miedzianych i ma mdły smak. Ustaw mieszacz na **5–8 °dH** — to poziom, przy którym kamień już się nie osadza, a woda pozostaje pełnowartościowa.

### Ile soli zużywa zmiękczacz w ciągu roku?

Przy złożu 20–25 l i regeneracji co 7 dni to **120–160 kg**, czyli 5–7 worków soli tabletkowanej 25 kg. Dawka ekonomiczna wynosi około 130 g soli na litr żywicy, dawka maksymalna 240 g/l — daje wyższą pojemność cyklu, ale zużywa nieproporcjonalnie więcej soli na ten sam metr sześcienny zmiękczonej wody.

### Czy zmiękczacz zastępuje filtr do wody?

Nie. Jonowymiana usuwa wapń, magnez i rozpuszczone żelazo, wymieniając je na sód. Nie usuwa chloru, azotanów, pestycydów, bakterii ani zawiesiny. Do celów spożywczych stosuje się osobno filtr węglowy lub osmozę, a przy wodzie ze studni bez potwierdzonych badań bakteriologicznych — lampę UV.

### Czy kocioł lub pompa ciepła wymagają zmiękczonej wody?

Producenci kotłów kondensacyjnych i pomp ciepła podają w instrukcjach dopuszczalną twardość wody napełniającej instalację grzewczą, a przekroczenie bywa podstawą odmowy naprawy gwarancyjnej. To jednak inny obieg niż woda użytkowa — do napełnienia zładu stosuje się demineralizację, nie zmiękczacz sodowy.
