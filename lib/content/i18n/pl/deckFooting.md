## Kalkulator stóp fundamentowych pod taras — przewodnik techniczny

Narzędzie dobiera wymiar stóp fundamentowych i słupów nośnych tarasu drewnianego metodą powierzchni obciążenia (tributary area) według **amerykańskiego IRC R507**. Podajesz wymiary tarasu, obciążenia, nośność gruntu i siatkę słupów, a kalkulator zwraca wymaganą powierzchnię stopy, średnicę szalunku, obciążenie jednego słupa oraz objętość betonu.

> **Uczciwie o normach:** kalkulator liczy według **amerykańskiego IRC (International Residential Code)** — obciążenia charakterystyczne, nośności zastępcze gruntu i głębokości przemarzania pochodzą z przepisów USA. W Polsce projektuje się według **PN-EN 1990 i PN-EN 1991-1-1** (Eurokod), z innymi współczynnikami częściowymi. Traktuj wynik jako szybki szacunek warsztatowy, a nie obliczenie do projektu.

Kalkulator działa w układzie metrycznym i imperialnym.

---

## Obciążenia tarasu

| Rodzaj obciążenia | Wartość typowa | Źródło |
|---|---|---|
| **Użytkowe** (ludzie, meble, grill) | 1,92 kPa (40 psf) | IRC Tabela R301.5 |
| **Stałe** (deski, legary, balustrada) | 0,48 kPa (10 psf) | Typowa konstrukcja |
| **Śnieg** (opcjonalnie) | 0–4,79 kPa (0–100 psf) | Lokalne wymagania |

```
Obciążenie jednostkowe (kPa) = użytkowe + stałe + śnieg
Obciążenie całkowite (kN)    = powierzchnia tarasu (m²) × obciążenie jednostkowe
```

> **Jacuzzi lub taras imprezowy:** podnieś obciążenie użytkowe do 2,9–4,8 kPa (60–100 psf). Wanna z hydromasażem o pojemności 2 300 l to ok. 2 300 kg na małej powierzchni — praktycznie zawsze wymaga własnych, osobnych stóp.

---

## Nośność gruntu

```
Wymagana powierzchnia stopy (m²) = obciążenie słupa (kN) ÷ nośność gruntu (kPa)
Średnica stopy okrągłej (m)      = 2 × √(powierzchnia ÷ π)
Bok stopy kwadratowej (m)        = √(powierzchnia)
```

| Grunt | Nośność dopuszczalna | Odniesienie |
|---|---|---|
| Glina miękka, glina pylasta | 72 kPa (1 500 psf) | IRC Tabela R401.4.1 |
| Pył, piasek pylasty | 96 kPa (2 000 psf) | IRC Tabela R401.4.1 |
| Piasek gliniasty, grunt mieszany | 120 kPa (2 500 psf) | Praktyka geotechniczna |
| Pospółka, żwir | 144 kPa (3 000 psf) | IRC Tabela R401.4.1 |
| Zasyp zagęszczony, piasek zagęszczony | 192 kPa (4 000 psf) | Badanie geotechniczne |

Bez badania gruntu urzędy w USA domyślnie przyjmują 72 lub 96 kPa. W Polsce nośność ustala się na podstawie dokumentacji geotechnicznej.

---

## Przykład: taras 5,0 × 3,6 m na piasku gliniastym

* **Powierzchnia:** 5,0 × 3,6 = 18,0 m² (194 ft²)
* **Obciążenie jednostkowe:** 1,92 + 0,48 = 2,40 kPa
* **Obciążenie całkowite:** 18,0 × 2,40 = 43,2 kN
* **Siatka słupów:** 2 rzędy × 3 słupy = 6 słupów
* **Obciążenie jednego słupa:** 43,2 ÷ 6 = 7,2 kN
* **Wymagana powierzchnia stopy:** 7,2 ÷ 120 = 0,060 m² (600 cm²)
* **Średnica:** 2 × √(0,060 ÷ π) = **0,276 m → szalunek 30 cm** (12", najbliższy większy)
* **Beton na stopę (grubość 30 cm):** π × 0,152² × 0,30 = 0,022 m³
* **Beton łącznie:** 0,022 × 6 = **0,13 m³** (+10% na rozlanie i nierówności wykopu)

Standardowe średnice szalunków rurowych: 20, 25, 30, 35, 40, 45, 50, 60 cm (8–24").

---

## Głębokość wykopu a przemarzanie

Obliczona **grubość** stopy to wymiar samego betonu — **nie jest to głębokość wykopu**. Stopa musi sięgać poniżej strefy przemarzania, inaczej wysadziny mrozowe podniosą taras. IRC R403.1.4 wskazuje w USA typowo 75–120 cm. W Polsce projektowa głębokość przemarzania to zwykle **0,8–1,4 m** w zależności od strefy — sprawdź strefę dla swojej lokalizacji. Przed kopaniem zawsze zleć wytyczenie uzbrojenia podziemnego.

---

## Najczęstsze pytania

### Ile słupów potrzebuje taras?

Zasada praktyczna: słupy w siatce ok. 1,8–2,4 m. Taras 5,0 × 3,6 m to typowo **6 słupów** (2 rzędy po 3) plus belka przyścienna zakotwiona w budynku. Więcej słupów = mniejsze stopy, mniej słupów = większe stopy.

### Jaka średnica stopy pod taras?

Przy obciążeniu 2,4 kPa i gruncie 120 kPa wychodzi zwykle **30 cm** średnicy. Glina miękka (72 kPa) podnosi to do 35–40 cm, zagęszczony żwir (144 kPa) obniża do 20–25 cm.

### Czy można użyć prefabrykowanych bloczków tarasowych?

Bloczki betonowe stawiane na gruncie sprawdzają się tylko przy niskich, wolnostojących tarasach naziemnych. Leżą powyżej strefy przemarzania i **nie są zabezpieczone przed wysadzinami**. Taras zakotwiony w budynku wymaga stóp betonowych poniżej głębokości przemarzania.

### Ile betonu na stopy tarasowe?

Powierzchnia stopy × grubość × liczba słupów. Typowy taras na 6 słupach ze stopami ⌀30 cm o grubości 30 cm to około **0,13 m³** — kilka worków suchej mieszanki. Kalkulator podaje dokładną objętość w m³ i yd³.
