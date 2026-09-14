## Obciążenie śniegiem dachu — jak działa kalkulator

> **Ostrzeżenie inżynierskie:** kalkulator realizuje wybrane procedury normy amerykańskiej **ASCE/SEI 7-22, rozdział 7** oraz **IBC §1608**. Nie liczy według Eurokodu. Wynik służy do szybkiej oceny i do nauki mechaniki obciążeń, a nie do projektu konstrukcji. W Polsce obciążenie śniegiem ustala się według **PN-EN 1991-1-3 wraz z załącznikiem krajowym**, a projekt musi podpisać projektant z odpowiednimi uprawnieniami.

Obciążenie śniegiem to pionowa siła grawitacyjna, którą musi bezpiecznie przenieść cała konstrukcja dachu: krokwie, wiązary, płatwie, poszycie i dalej ściany oraz fundamenty. W polskim klimacie jest to często obciążenie decydujące o przekroju wiązara — większe niż wiatr i większe niż obciążenie użytkowe poddasza nieużytkowego.

---

## Dwie różne procedury: ASCE 7 kontra Eurokod

```
ASCE 7-22 (kalkulator):
  pf = 0,7 × Ce × Ct × Is × pg        dach płaski
  ps = Cs × pf                        redukcja od nachylenia
  obciążenie miarodajne = max(ps, pm) pm = minimum dla małych spadków

PN-EN 1991-1-3 (Polska):
  s  = μ1 × Ce × Ct × sk              wartość charakterystyczna
  μ1 = 0,8 dla nachylenia 0-30 st.
  μ1 = 0,8 × (60 - alfa) ÷ 30 dla 30-60 st., zero powyżej 60 st.
  wartość obliczeniowa = 1,5 × s      współczynnik częściowy w SGN
```

Różnice, które realnie zmieniają wynik:

1. **Nie ma mnożnika 0,7.** ASCE zakłada, że nie cały śnieg z gruntu zalega na dachu, i wprowadza globalny współczynnik 0,7. Eurokod robi to samo, ale przez współczynnik kształtu dachu **μ1 = 0,8**, stosowany także do dachu płaskiego.
2. **Redukcja od nachylenia zaczyna się w tym samym miejscu, kończy w innym.** W obu normach spadki do 30° nie dają ulgi. Powyżej ASCE zeruje obciążenie przy 70°, Eurokod już przy **60°**, więc dla dachów o dużym spadku Eurokod jest łagodniejszy.
3. **Ce ma inne wartości.** Eurokod: 0,8 dla terenu silnie wystawionego na wiatr, 1,0 normalnego, 1,2 osłoniętego. ASCE zamiast 0,8 stosuje 0,9.
4. **Nie ma współczynnika Is.** Klasę konsekwencji zniszczenia uwzględnia się w Polsce przez klasy CC1–CC3 i współczynnik KFI z **PN-EN 1990**, a nie przez mnożnik obciążenia śniegiem.
5. **Nie ma minimum pm.** Amerykański próg minimalny dla dachów o małym spadku nie istnieje w Eurokodzie — tam analogiczną rolę pełni sprawdzenie zastoin wodnych i worków śnieżnych.

---

## Strefy obciążenia śniegiem w Polsce

Załącznik krajowy do PN-EN 1991-1-3 dzieli kraj na pięć stref. Wartość charakterystyczna **sk** zależy od strefy i od wysokości terenu nad poziomem morza (A w metrach):

| Strefa | Wartość charakterystyczna sk | W przybliżeniu | Gdzie |
|---|---|---|---|
| **1** | 0,007·A − 1,4, nie mniej niż 0,70 kPa | 0,70 kPa (15 psf) | zachód kraju, pas nadmorski zachodni |
| **2** | 0,90 kPa | 0,90 kPa (19 psf) | centrum i północ |
| **3** | 0,006·A − 0,6, nie mniej niż 1,20 kPa | 1,20 kPa (25 psf) | wschód i południe, pogórze |
| **4** | 1,60 kPa | 1,60 kPa (33 psf) | północno-wschodni skraj kraju |
| **5** | 0,009·A − 1,6, nie mniej niż 1,20 kPa | rośnie z wysokością | tereny górskie |

Dwa wnioski praktyczne. Po pierwsze, typowe polskie sk mieści się w przedziale 0,7–1,6 kPa (15–33 psf), czyli w dolnej części skali amerykańskiej z tabel ASCE. Po drugie, w strefie 5 wartość jest funkcją wysokości i w Tatrach czy Karkonoszach potrafi przekroczyć **4 kPa (84 psf)** — tam żadnej wartości domyślnej przyjmować nie wolno, sk odczytuje się dla konkretnej rzędnej. Mapę i przypisanie gminy do strefy sprawdź w załączniku krajowym.

---

## Przykład: dach 100 m² w strefie 2

* **Strefa 2, teren do 300 m n.p.m.:** sk = 0,90 kPa (19 psf)
* **Ce = 1,0** (teren normalny, zabudowa podmiejska), **Ct = 1,0** (dach ocieplony)
* **Nachylenie 30°, dachówka:** μ1 = 0,8
* **Obciążenie charakterystyczne:** 0,8 × 1,0 × 1,0 × 0,90 = **0,72 kPa** (15 psf)
* **Rzut poziomy dachu:** 100 m² (1 076 ft²)
* **Siła całkowita, wartość charakterystyczna:** 0,72 × 100 = **72 kN** (16 200 lbf, ok. 7,3 t)
* **Wartość obliczeniowa w SGN:** 72 × 1,5 = **108 kN**

Uwaga na jednostki: obciążenie odnosi się do **rzutu poziomego** połaci, nie do jej powierzchni mierzonej po skosie. To wspólne dla obu norm i najczęstsze źródło pomyłki w szacunkach ręcznych.

---

## Ile waży śnieg: przełożenie kPa na centymetry

| Rodzaj śniegu | Gęstość | Grubość dająca 0,90 kPa |
|---|---|---|
| Świeży, puszysty | 1,0 kN/m³ (100 kg/m³) | 90 cm (35") |
| Osiadły po kilku dniach | 2,0 kN/m³ (200 kg/m³) | 45 cm (18") |
| Zleżały, kilkutygodniowy | 3,0 kN/m³ (300 kg/m³) | 30 cm (12") |
| Mokry, przesiąknięty deszczem | 4,0 kN/m³ (400 kg/m³) | 23 cm (9") |
| Lód | ok. 9,0 kN/m³ (900 kg/m³) | 10 cm (4") |

Dlatego groźna jest nie sama zima śnieżna, ale **odwilż z deszczem po opadzie** oraz oblodzenie w warstwie przy okapie. Ta sama warstwa 40 cm potrafi w ciągu dwóch dni podwoić masę.

---

## Worki śnieżne i nawiewy

Śnieg nie zalega równomiernie. Wiatr przenosi go i osadza za przeszkodą — przy attyce, przy wyższej części budynku, w koszu dachu wielospadowego, za urządzeniami wentylacyjnymi i przy barierkach śniegowych. ASCE 7-22 §7.7 liczy trójkątny nawiew z wysokości hd, szerokości w = 4·hd i gęstości zależnej od pg. Eurokod rozwiązuje to zestawem współczynników kształtu μ2 i μ3 dla dachów wielopołaciowych, cylindrycznych oraz dla dachów przy wyższych obiektach.

Efekt jest w obu podejściach ten sam i bywa dramatyczny: obciążenie w worku śnieżnym potrafi być **dwa do czterech razy większe** niż na otwartej połaci. Zawalenia hal w Europie Środkowej niemal zawsze zaczynały się od nawiewu przy attyce lub w koszu, nie od równomiernej warstwy.

---

## Najczęstsze pytania

### Jakie obciążenie śniegiem przyjąć dla domu jednorodzinnego w Polsce?

Zależy od strefy. W większości kraju to sk równe 0,90–1,20 kPa (19–25 psf), co po uwzględnieniu μ1 = 0,8 daje 0,72–0,96 kPa na rzucie połaci. W górach wartość trzeba odczytać dla rzędnej terenu i bywa kilkukrotnie wyższa. Nigdy nie przenoś wartości z projektu domu z innego regionu — to najczęstszy błąd przy zakupie projektu powtarzalnego.

### Czy wynik kalkulatora można wstawić do polskiego projektu?

Nie. Kalkulator liczy według ASCE 7-22 i podaje wynik w psf oraz w kPa, ale współczynniki, procedura redukcji i sposób łączenia obciążeń są amerykańskie. Do projektu w Polsce potrzebujesz sk z załącznika krajowego, współczynników kształtu z PN-EN 1991-1-3 i kombinacji obciążeń z PN-EN 1990. Kalkulator dobrze służy do sprawdzenia rzędu wielkości i do porównania wariantów geometrii dachu.

### Czy trzeba odśnieżać dach?

Tak, jeśli grubość zalegania grozi przekroczeniem obciążenia projektowego. Prawo budowlane nakłada na właściciela lub zarządcę obowiązek utrzymywania obiektu w należytym stanie, w tym usuwania śniegu i lodu z dachu, gdy pojawia się zagrożenie. Dla obiektów o powierzchni dachu powyżej 1 000 m² dochodzi obowiązkowa kontrola okresowa dwa razy w roku. Odśnieżanie zaczyna się od naw skrajnych i worków śnieżnych, symetrycznie — jednostronne odciążenie dużej hali może być groźniejsze niż sam śnieg.

### Jak nachylenie dachu wpływa na obciążenie?

Do 30° nie wpływa wcale — w obu normach współczynnik kształtu jest stały. Między 30° a 60° Eurokod obniża go liniowo do zera, więc dach o spadku 45° przenosi połowę obciążenia dachu 30°. Powyżej 60° śnieg z połaci zsuwa się samoczynnie, ale wtedy trzeba sprawdzić strefę, na którą spada, i dach niższej kondygnacji poniżej.

### Czym różni się dach ciepły od zimnego w tych obliczeniach?

Współczynnikiem termicznym Ct. ASCE stosuje 1,2 dla budynków nieogrzewanych i 1,3 dla stale mrożonych. Eurokod trzyma Ct = 1,0 niemal zawsze i pozwala go obniżyć tylko dla przekryć o dużym współczynniku przenikania ciepła, czyli w praktyce dla dachów szklanych. Polski projektant nie ma więc możliwości podniesienia obciążenia „za nieogrzewanie" — musi za to sprawdzić sople i zastoiny lodu przy okapie, typowe dla dachów ocieplonych z wentylowaną szczeliną wykonaną niepoprawnie.
