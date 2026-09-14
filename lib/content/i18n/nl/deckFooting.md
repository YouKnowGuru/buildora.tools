## Poeren en palen voor een vlonder: draagkracht, afmeting en beton

Deze calculator bepaalt hoe groot de poeren onder een vrijstaande vlonder of een verhoogd terras moeten zijn. U geeft de afmetingen van het dek, de belasting, de toelaatbare grondspanning en het stramien van de staanders op; het gereedschap geeft het benodigde poeroppervlak, de bijbehorende diameter of zijde, de last per poer, het aantal staanders en het totale betonvolume.

**Let op de ijking.** Het rekenhart volgt de Amerikaanse **IRC R507** met de belastingafdrachtmethode, de vermoede grondspanningen uit IRC-tabel R401.4.1, koker-diameters in inches en een vorstvrije diepte van 30 tot 48 in (0,76 – 1,22 m). Nederland rekent volgens de Eurocode met de Nationale Bijlage, houdt een vorstvrije diepte van 0,60 tot 0,80 m aan en bepaalt de draagkracht met een sondering in plaats van een tabel. Nog fundamenteler: dit gereedschap zet **ongefactorde** belasting tegen een toelaatbare grondspanning, terwijl de Eurocode met grenstoestanden en partiële factoren werkt (bijvoorbeeld 1,2 op permanente en 1,5 op veranderlijke belasting). De uitkomst is dus een eerste maatvoering, geen constructieve onderbouwing.

---

## Belastingen op een vlonder

| Belasting | Amerikaans model | Nederlandse orde van grootte |
|---|---|---|
| **Veranderlijk (personen, meubilair)** | 40 psf = 1,92 kN/m² | Woonvloer circa 1,75 kN/m² (37 psf); balkon, galerij of dakterras circa 2,5 kN/m² (52 psf) |
| **Permanent (dek, regelwerk, hek)** | 10 psf = 0,48 kN/m² | Houten vlonder op regelwerk 0,30 – 0,50 kN/m² (6 – 10 psf) |
| **Puntlast** | niet in de methode | Qk in de orde van 3,0 kN (675 lbf) op een klein vlak |
| **Sneeuw** | optioneel, 0 – 100 psf | Op een vlonder niet maatgevend; wel op een overkapping |

De maatgevende waarden staan in de Nationale Bijlage bij NEN-EN 1991-1-1. Komt er een bubbelbad, een plantenbak van beton of een buitenkeuken op, dan domineert die puntlast het hele ontwerp: een bad van 2.000 liter zet 20 kN op een paar vierkante meter en vraagt eigen poeren.

---

## Rekenstappen

```
1. oppervlakte     = lengte x breedte                      (m2)
2. totale last     = oppervlakte x (veranderlijk + permanent)  (kN)
3. aantal poeren   = aantal rijen x poeren per rij
4. last per poer   = totale last / aantal poeren            (kN)
5. benodigd vlak   = last per poer / toelaatbare grondspanning  (m2)
6. diameter rond   = 2 x wortel(benodigd vlak / 3,14159)    (m)
7. zijde vierkant  = wortel(benodigd vlak)                  (m)
8. betonvolume     = benodigd vlak x dikte x aantal poeren   (m3)
```

Meer poeren betekent kleinere poeren, minder poeren betekent grotere. De **dikte** uit stap 8 is de hoogte van het betonlichaam, niet de diepte van het gat.

---

## Toelaatbare grondspanning

| Grondslag volgens de Amerikaanse tabel | psf | kPa (kN/m²) |
|---|---|---|
| Slappe klei, zandige klei | 1.500 | 72 |
| Silt, leem, siltig zand | 2.000 | 96 |
| Zandige leem, gemengd granulair | 2.500 | 120 |
| Grind, zandig grind | 3.000 | 144 |
| Vast of verdicht zand | 4.000 | 192 |

Hier wringt het Nederlandse schoentje. Veen draagt aan het maaiveld vaak niet meer dan 10 tot 30 kPa, slappe Hollandse klei 30 tot 60 kPa. De **laagste** waarde uit de Amerikaanse tabel, 72 kPa, ligt in een groot deel van west- en noord-Nederland al boven wat de bovenste meters aankunnen. Op de zandgronden in het oosten en zuiden is 150 tot 250 kPa juist heel normaal. Er is geen Nederlandse tabel die u dit vertelt: dat doet een **sondering**, en die is voor iets zwaarders dan een vlonder de gebruikelijke eerste stap.

---

## Uitgewerkt voorbeeld: vlonder van 4,80 x 3,60 m

* **Oppervlakte:** 4,80 x 3,60 = **17,3 m² (186 ft²)**
* **Belasting:** 1,75 kN/m² veranderlijk plus 0,45 kN/m² permanent = 2,20 kN/m²
* **Totale last:** 17,3 x 2,20 = **38,1 kN (8.560 lbf)**
* **Stramien:** 2 rijen van 3 staanders = **6 poeren**, dus 6,35 kN per poer
* **Op vast zand (150 kPa):** 6,35 / 150 = 0,042 m² → diameter **0,24 m (9,4 in)**, praktisch 0,30 m
* **Op slappe klei (50 kPa):** 6,35 / 50 = 0,127 m² → diameter **0,40 m (15,9 in)**
* **Betonvolume bij 0,30 m poeren van 0,40 m hoog:** 6 x 0,071 x 0,40 = **0,17 m³ (0,22 yd³)**

Dezelfde vlonder vraagt op klei dus een poer met bijna drie keer zoveel grondvlak als op zand. Wie de grondslag niet kent, kiest onvermijdelijk verkeerd.

---

## Nederlandse uitvoeringspraktijk

**Vorstvrij, maar minder diep.** De onderkant van een poer hoort in Nederland op 0,60 tot 0,80 m onder maaiveld. De 30 tot 48 in uit het Amerikaanse model is voor het Nederlandse klimaat overgedimensioneerd; het is de zetting van slappe grond, niet de vorst, die hier het probleem vormt.

**Schroefpalen zijn de standaard geworden.** Voor vlonders, tuinhuizen en overkappingen wordt in Nederland vaker een stalen schroefpaal of schroefanker gedraaid dan een betonpoer gestort: geen uitkomende grond, geen uithardingstijd, en op slappe grond dieper te plaatsen dan een gat dat u met de hand maakt. De calculator kent dit type niet — vraag de leverancier naar de toelaatbare last per paal en vergelijk die met de last per poer uit stap 4.

**Beton.** Voor poeren in de buitenlucht kiest u een betonsterkteklasse van ten minste C20/25, met een milieuklasse die past bij vorst en vochtwisseling. Prefab betonpoeren met ingegoten voetplaat zijn bij kleine werken vaak goedkoper dan storten.

**Vasthouden aan de woning.** Een vlonder die met een muurbalk aan de gevel hangt, brengt zijn last in de bestaande fundering. Bij een oudere woning op staal of op houten palen is dat geen vanzelfsprekendheid. Een vrijstaande vlonder met een eigen rij poeren langs de gevel is bijna altijd de veiligere keuze.

**Vergunning en burenrecht.** Een vlonder op maaiveldniveau is doorgaans vergunningvrij, maar zodra u het terras verhoogt, verandert het beeld: het Bbl eist een afscheiding bij een hoogteverschil van meer dan 1 m, en artikel 5:50 van het Burgerlijk Wetboek verbiedt uitzicht op het erf van de buren vanaf een balkon of terras binnen 2 m van de erfgrens, tenzij die buur toestemming geeft. Op een dakterras of bij een monument komt daar een omgevingsvergunning bij. Dit soort regels zit in geen enkele rekenmachine.

---

## Veelgestelde vragen

### Hoeveel poeren heb ik nodig?

Houd de staanders op een stramien van 1,80 tot 2,40 m aan; verder overspannen vraagt zwaardere balken. Een vlonder van 4,80 x 3,60 m komt daarmee op zes poeren. De calculator vertaalt uw keuze naar poerafmetingen: kiest u meer staanders, dan worden de poeren kleiner maar graaft u vaker.

### Hoe groot moet een poer worden?

Bij een normaal belaste vlonder op vast zand is 0,25 tot 0,30 m diameter genoeg. Op slappe klei loopt dat op naar 0,40 tot 0,50 m, en op veen is een poer geen goede oplossing meer — dan gaat u naar een schroefpaal of een paal tot in de draagkrachtige laag. De uitkomst van stap 5 tot 7 is uw ondergrens; rond af op een maat die u werkelijk kunt kopen of maken.

### Hoe diep moet het gat zijn?

Dieper dan de poer hoog is. Het betonlichaam is meestal 0,20 tot 0,30 m dik, maar de **onderkant** moet vorstvrij liggen, in Nederland dus op 0,60 tot 0,80 m. Vul het gat onder de poer aan met verdicht zand of grind, nooit met de uitkomende klei.

### Mag ik betontegels of losse tegelpoeren gebruiken?

Voor een lage, vrijstaande vlonder zonder hekwerk gaat dat in de praktijk goed, maar de tegels liggen boven de vorstgrens en kunnen door vorst of zetting scheef komen te staan. Voor een terras dat aan de woning vastzit, een verhoogd dek of een constructie met een afscheiding zijn poeren of palen tot in draagkrachtige grond de juiste keuze.

### Hoeveel beton heb ik nodig?

Grondvlak maal hoogte maal het aantal poeren. Zes ronde poeren van 0,30 m diameter en 0,40 m hoog vragen 0,17 m³ (0,22 yd³), oftewel ongeveer negen zakken droge betonmortel van 25 kg. Reken 10 procent extra voor verlies en voor het onregelmatige gat. Boven ongeveer 0,5 m³ is mortel per kubieke meter laten leveren goedkoper dan zakken mengen.
