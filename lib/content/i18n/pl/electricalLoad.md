## Moc przyłączeniowa domu — kW zamiast amperów

Kalkulator wykonuje obliczenie zapotrzebowania według amerykańskiej metody uproszczonej **NEC 220.82** i podaje wynik jako prąd w amperach przy napięciu 120/240 V, a następnie dobiera wielkość rozdzielnicy: 100 A, 200 A, 400 A. Polska instalacja opisywana jest zupełnie inną wielkością — **mocą przyłączeniową i umowną w kilowatach**, przy napięciu **230 V jednofazowo lub 400 V trójfazowo**. Zabezpieczenia dobiera się po polskiej stronie, a wielkość przyłącza nie zależy od decyzji właściciela, lecz od warunków wydanych przez operatora sieci dystrybucyjnej.

> **Dwie różne podstawy:** kalkulator liczy według **NEC (NFPA 70) art. 220.82**, tabel przewodów **NEC 310.12** i przekrojów w AWG. W Polsce obowiązuje seria norm **PN-HD 60364** (dawniej PN-IEC 60364) dla instalacji odbiorczych, **N SEP-E-002** dla planowania mocy w budynkach mieszkalnych oraz **rozporządzenie w sprawie warunków technicznych**. Wynik kalkulatora nie jest podstawą do złożenia wniosku o przyłączenie.

---

## Przelicznik kW na ampery

```
Jednofazowo 230 V:   I [A] = P [W] ÷ (230 × cos fi)
Trójfazowo 400 V:    I [A] = P [W] ÷ (1,732 × 400 × cos fi)
Model NEC (USA):     I [A] = (10 000 + 0,4 × (suma VA - 10 000) + HVAC) ÷ 240

Dla odbiorników grzejnych i oświetlenia cos fi = 1,0
```

| Zabezpieczenie przedlicznikowe | Moc dostępna | Odpowiednik amerykański @ 240 V |
|---|---|---|
| 1×25 A (230 V) | 5,8 kW | 24 A |
| 1×32 A | 7,4 kW | 31 A |
| 1×40 A | 9,2 kW | 38 A |
| 3×16 A (400 V) | 11,1 kW | 46 A |
| 3×20 A | 13,9 kW | 58 A |
| **3×25 A** | **17,3 kW** | **72 A** |
| 3×32 A | 22,2 kW | 92 A |
| 3×40 A | 27,7 kW | 115 A |
| 3×63 A | 43,6 kW | 182 A |

Ostatni wiersz pokazuje skalę różnicy. Amerykańskie „standardowe" przyłącze 200 A to 48 kVA, czyli odpowiednik polskiego zabezpieczenia **3×69 A** — wielkość w polskim domu jednorodzinnym praktycznie niespotykana. Typowa polska moc umowna dla domu z ogrzewaniem gazowym to 12–14 kW, dla domu z pompą ciepła 17–22 kW.

---

## Współczynnik jednoczesności zamiast progu 10 000 VA

Amerykańska metoda liczy pierwsze 10 000 VA w 100%, a nadwyżkę w 40%. Polska praktyka projektowa stosuje **współczynnik jednoczesności** do całej sumy mocy zainstalowanych:

```
Moc zapotrzebowana Pz [kW] = kj × suma mocy zainstalowanych [kW]
```

| Wyposażenie budynku | Współczynnik kj |
|---|---|
| Mieszkanie w budynku wielorodzinnym, kuchenka gazowa | 0,5–0,7 |
| Dom jednorodzinny, c.o. gazowe, kuchenka gazowa | 0,5–0,6 |
| Dom jednorodzinny, płyta indukcyjna, c.o. gazowe | 0,4–0,5 |
| Dom w pełni elektryczny: pompa ciepła, indukcja, wallbox | 0,3–0,4 |

Im więcej odbiorników o dużej mocy, tym mniejsze prawdopodobieństwo jednoczesnej pracy wszystkich, więc współczynnik maleje. Efekt jest odwrotny do amerykańskiego: metoda NEC im więcej urządzeń dodasz, tym bardziej rośnie wynik, bo próg 10 000 VA jest stały.

---

## Przykład: dom 180 m² w pełni elektryczny

Odbiorniki i ich moce znamionowe:

* Pompa ciepła 8 kW z grzałką wspomagającą: 3,0 + 6,0 = **9,0 kW**
* Płyta indukcyjna: **7,4 kW**
* Piekarnik: **3,5 kW**
* Wallbox trójfazowy 11 kW: **11,0 kW**
* Zmywarka, pralka, suszarka: 2,0 + 2,2 + 2,0 = **6,2 kW**
* Oświetlenie i gniazda ogólne: **3,0 kW**
* Wentylacja mechaniczna, pompy, brama: **1,5 kW**
* **Suma mocy zainstalowanych: 41,6 kW**

Obliczenie:

* Moc zapotrzebowana: 0,4 × 41,6 = **16,6 kW**
* Prąd na fazę: 16 600 ÷ (1,732 × 400) = **24 A**
* Dobór: **moc umowna 17 kW, zabezpieczenie 3×25 A**

Ten sam dom (180 m² = 1 938 ft²) policzony metodą NEC 220.82 dałby około 39 kVA i zalecenie rozdzielnicy 200 A. Rozbieżność jest ponaddwukrotna i wynika z trzech rzeczy: NEC dolicza 3 VA na stopę kwadratową na oświetlenie i gniazda, czyli tutaj 5,8 kVA zamiast realnych 3 kW; stały próg 10 000 VA w 100% jest znacznie ostrożniejszy niż jeden współczynnik 0,4; a rozłożenie obciążenia na trzy fazy 400 V zmniejsza prąd w każdej z nich.

---

## Czego kalkulator nie obejmuje

**Moc umowna nie jest decyzją właściciela.** Operator sieci wydaje warunki przyłączenia z określoną **mocą przyłączeniową**, na tej podstawie zawiera się umowę z **mocą umowną**, a zabezpieczenie przedlicznikowe w złączu jest **plombowane**. Wymiana rozdzielnicy w domu na większą nie zwiększa dostępnej mocy — potrzebny jest wniosek do operatora, a przy większych zmianach rozbudowa przyłącza na koszt inwestora. W grupie taryfowej G opłaty stałe nie zależą od mocy umownej tak silnie jak w taryfach biznesowych z grupy B, ale przekroczenie mocy skutkuje po prostu zadziałaniem zabezpieczenia.

**Wyłącznik różnicowoprądowy jest w Polsce obowiązkowy.** Model amerykański chroni pojedyncze gniazda (GFCI, AFCI). Polski model umieszcza **RCD 30 mA** w rozdzielnicy, obejmując nim obwody gniazd, a w nowych instalacjach praktycznie wszystkie obwody. Do tego dochodzą **ograniczniki przepięć** (SPD typ 1+2) wymagane w nowych budynkach.

**Przekroje podaje się w mm², nie w AWG.**

```
#4 AWG  = 21,2 mm2   ->  najbliższy handlowy 25 mm2
#2 AWG  = 33,6 mm2   ->  35 mm2
#2/0    = 67,4 mm2   ->  70 mm2
#4/0    = 107 mm2    ->  120 mm2
```

| Obwód | Przekrój żył Cu | Zabezpieczenie |
|---|---|---|
| Oświetlenie | 1,5 mm² | B10 |
| Gniazda ogólne | 2,5 mm² | B16 |
| Płyta indukcyjna trójfazowa | 5 × 2,5 mm² | B16 |
| Płyta indukcyjna jednofazowa | 3 × 6 mm² | B32 |
| Wallbox 11 kW | 5 × 4 mm² | B20 + RCD dedykowany |
| Pompa ciepła | według DTR, zwykle 4–6 mm² | według DTR |
| WLZ przy zabezpieczeniu 3×25 A | 5 × 10 mm² | plombowane przez operatora |

Przekrój sprawdza się dodatkowo na warunek samoczynnego wyłączenia w razie zwarcia oraz na dopuszczalny spadek napięcia — w praktyce 3% dla obwodów oświetleniowych i 5% dla pozostałych, liczony od złącza kablowego. Przy długich trasach do budynku gospodarczego lub garażu wolnostojącego to właśnie spadek napięcia, a nie prąd obciążenia, decyduje o przekroju.

---

## Najczęstsze pytania

### Jaka moc przyłączeniowa dla domu jednorodzinnego?

Przy ogrzewaniu gazowym i kuchence gazowej wystarcza **12,5 kW (3×20 A)**. Płyta indukcyjna i elektryczne przygotowanie ciepłej wody podnoszą wymaganie do 14–17 kW. Pompa ciepła z grzałką wspomagającą oraz wallbox to **17–22 kW**, czyli 3×25 A albo 3×32 A. Wnioskuj o wartość z zapasem od razu, bo późniejsza zmiana warunków przyłączenia jest procedurą na wiele tygodni.

### Czy wystarczy przyłącze jednofazowe?

Do domu z ogrzewaniem gazowym, bez indukcji i bez samochodu elektrycznego — technicznie tak, przy 1×40 A dostajesz 9,2 kW. W praktyce jednak przyłącze trójfazowe jest dziś standardem, bo pompa ciepła, wallbox 11 kW i płyta indukcyjna wymagają trzech faz albo pracują na jednej fazie z dużym niesymetrycznym obciążeniem. Dołożenie faz po zakończeniu budowy oznacza wymianę przyłącza.

### Czy da się podłączyć wallbox 11 kW przy mocy umownej 12,5 kW?

Nie bez zarządzania obciążeniem. Wallbox 11 kW to 3×16 A i przy mocy umownej 12,5 kW (3×20 A) zostaje 4 A na fazę dla całego domu. Rozwiązaniem jest **dynamiczne ograniczanie mocy ładowania** — układ mierzy prąd w złączu i redukuje moc ładowarki, gdy w domu włączy się indukcja lub grzałka. To polski odpowiednik amerykańskiego systemu EVEMS z NEC 625.42. Alternatywy: wallbox 7,4 kW na jednej fazie albo zwiększenie mocy umownej.

### Jak przeliczyć amerykańskie 200 A na polskie jednostki?

200 A przy 240 V to 48 kVA. Po polskiej stronie przy 400 V trójfazowo odpowiada to prądowi 69 A na fazę, czyli zabezpieczeniu **3×63 A** i mocy około 43 kW. Tyle nie ma prawie żaden polski dom jednorodzinny — i nie jest to potrzebne, bo różnica wynika z metody obliczeniowej i z napięcia, nie z realnego zapotrzebowania budynku.

### Co daje przejście na taryfę dwustrefową?

Nie zmienia doboru mocy ani przekrojów, zmienia tylko koszt energii. Taryfa G12 albo G12w ma tańszą energię w godzinach nocnych i w weekendy, co ma sens przy ładowaniu samochodu nocą, buforze c.w.u. z grzałką i pompie ciepła z akumulacją. Przy fotowoltaice liczy się dodatkowo sposób rozliczenia autokonsumpcji — to osobne zagadnienie, którego kalkulator nie obejmuje.

### Kto może wykonać instalację i pomiary?

Instalację elektryczną wykonuje osoba z uprawnieniami, a po zakończeniu prac potrzebny jest **protokół pomiarów odbiorczych**: ciągłości przewodów ochronnych, rezystancji izolacji, impedancji pętli zwarcia oraz czasu i prądu wyłączenia RCD. Bez tego protokołu operator nie zamontuje licznika, a instalacja nie zostanie odebrana. Sam kalkulator ma wartość wyłącznie orientacyjną i nie zastępuje projektu ani pomiarów.
