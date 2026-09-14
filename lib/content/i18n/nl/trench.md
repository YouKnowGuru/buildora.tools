## Sleufcalculator: ontgravingsvolume, zandbed en aanvulling

Vul de lengte, de breedte en de diepte van de sleuf in, kies het bedmateriaal en de calculator geeft in één keer het ontgravingsvolume, de hoeveelheid zand of grind voor het bed, het aanvulvolume, het losse grondvolume inclusief zwelfactor, het aantal vrachten en een kostenopbouw. U kunt wisselen tussen metrische eenheden (m, m³) en imperiale (ft, yd³).

**Let op de ijking.** De kostenkengetallen, de vrachtwageninhoud van 14 yd³ (10,7 m³) en de veiligheidsdrempels achter dit gereedschap komen uit de Amerikaanse praktijk: OSHA 29 CFR 1926 subpart P, dekkingseisen uit de NEC en het advies om "811" te bellen voor een kabelmelding. Nederland kent een strakker en volstrekt ander stelsel — een verplichte KLIC-melding, lagere drempels voor grondkerende voorzieningen en een aparte keten voor grondafvoer. Gebruik de volumes; controleer de regels bij uw eigen bronnen.

---

## Rekenstappen

```
1. volume       = lengte x breedte x diepte             (m3)
2. bedvolume    = lengte x breedte x beddikte           (m3)
3. buisvolume   = lengte x 3,14159 x (d / 2) x (d / 2)  (m3, d = uitwendige diameter)
4. aanvulling   = volume - bedvolume - buisvolume       (m3)
5. losse grond  = volume x (1 + zwelfactor)             (zwel 0,25 voor zand en leem)
6. vrachten     = losse grond / laadvermogen            (naar boven afronden)
7. kosten       = ontgraven + bedmateriaal + afvoer
```

Bij imperiale invoer deelt het gereedschap door 27 om van kubieke voet naar kubieke yard te gaan; in metrische stand is die stap er niet.

---

## Uitgewerkt voorbeeld: huisaansluiting van 15 m

* **Sleuf:** 15,0 m lang, 0,50 m breed, 0,80 m diep (49 ft x 20 in x 31 in)
* **Ontgraving:** 15,0 x 0,50 x 0,80 = **6,00 m³ (7,85 yd³)**
* **Zandbed 100 mm:** 15,0 x 0,50 x 0,10 = **0,75 m³ (0,98 yd³)**
* **Aanvulling:** 6,00 − 0,75 − 0,18 (buis) = **5,07 m³**
* **Losse grond met 25 procent zwel:** 7,50 m³ (9,81 yd³), dus **één vracht** met een kleine kipper
* **Grondwerk bij € 35 per m³ machinaal:** ongeveer **€ 210**, exclusief bemaling en afvoer

---

## Sleufmaten en dekking in Nederland

| Toepassing | Sleufbreedte | Dekking op de leiding |
|---|---|---|
| **Drinkwater, huisaansluiting** | 0,30 – 0,50 m (12 – 20 in) | 0,80 – 1,00 m (31 – 39 in), minimaal vorstvrij |
| **Riool PVC Ø 125, huisaansluiting** | 0,40 – 0,60 m (16 – 24 in) | 0,60 – 1,10 m, afschot 5 tot 10 mm per meter |
| **Laagspanningskabel** | 0,30 – 0,50 m | 0,60 – 0,70 m (24 – 28 in) |
| **Middenspanningskabel** | 0,50 – 0,80 m | 0,80 – 1,00 m |
| **Gas, lage druk** | 0,30 – 0,50 m | 0,60 – 0,80 m |
| **Drainage of infiltratiekoffer** | 0,30 – 0,60 m | 0,50 – 0,90 m |
| **Strookfundering woning** | 0,40 – 0,80 m | 0,80 m of dieper, vorstvrij |

Vorstvrije diepte wordt in Nederland doorgaans op 0,60 tot 0,80 m gehouden. Dat is de helft van de 30 tot 48 in (0,76 – 1,22 m) die in Amerikaanse klimaatzones gangbaar is, en dat verklaart een deel van het verschil in ontgravingsvolume tussen een Nederlands en een Noord-Amerikaans bestek.

---

## Bedmateriaal

**Straatzand of brekerzand.** De standaard onder PVC-riool en onder mantelbuizen: 100 mm zandbed onder de buis en zand tot ten minste 150 mm boven de buisrug, laagsgewijs verdicht in lagen van maximaal 300 mm. Zand is in Nederland goedkoop en overal beschikbaar; reken op een orde van € 20 tot € 35 per m³ geleverd.

**Grind of gebroken materiaal.** Voor drainage en waar de sleufbodem instabiel is. Combineer met geotextiel, anders slibt het bed binnen enkele jaren dicht.

**Betonnen omhulling.** Alleen bij grote diameters onder een rijbaan of bij slechte draagkracht. Duur en vrijwel altijd een ontwerpbeslissing van een constructeur, niet van de uitvoering.

**Geen bed.** Uitsluitend bij massieve mantelbuis in stabiele, op hoogte liggende bodem. In de Nederlandse ondergrond — zand met leemlagen, klei of veen — is dat zelden verantwoord.

---

## Waar de Nederlandse regels anders liggen

**Graafmelding is wettelijk verplicht.** Op grond van de WIBON doet u vóór elke mechanische grondbewerking een **KLIC-melding** bij het Kadaster. U ontvangt de liggingsgegevens van alle netbeheerders en mag pas graven na ontvangst; de melding is een beperkte periode geldig en moet op het werk aanwezig zijn. Dat is geen advies zoals het Amerikaanse telefoonnummer, maar een verplichting met een boetebepaling. **CROW-publicatie 500** beschrijft het zorgvuldige graafproces daarnaast als de norm waaraan een rechter uw handelen toetst bij kabelschade.

**Grondkering begint veel eerder.** Waar OSHA een grondkerende voorziening eist vanaf 5 ft (1,52 m), gaat de Nederlandse arbeidspraktijk uit van een veilig talud of een sleufbekisting bij verticale wanden vanaf ongeveer 1,00 m, afhankelijk van de grondsoort, de belasting naast de sleuf en de aanwezigheid van grondwater. In veen en slappe klei is zelfs een sleuf van 0,80 m niet zonder meer stabiel. Vertrouw hier niet op de drempel in dit gereedschap.

**Bemaling is regel, geen uitzondering.** In grote delen van Nederland staat het grondwater binnen een meter onder maaiveld. Bronbemaling of een vacuümsysteem is dan onvermijdelijk, en het onttrekken en lozen van grondwater is meldings- of vergunningplichtig bij het waterschap. Reken die post apart; hij kan het grondwerk in kosten overtreffen.

**Uitkomende grond is een gereguleerde stroom.** Onder het Besluit bodemkwaliteit mag u grond niet zonder meer afvoeren of elders toepassen. Een partijkeuring, een historisch bodemonderzoek en een melding bij het landelijke meldpunt horen bij de keten, en PFAS-gehalten bepalen sinds enkele jaren of grond nog ergens terecht kan. Hergebruik op eigen terrein is bijna altijd de goedkoopste route.

**Vrachten.** De 14 yd³ (10,7 m³) uit dit gereedschap komt niet overeen met Nederlands materieel. Een kleine kipper laadt 5 tot 8 m³, een vierasser 12 tot 18 m³, en bij natte klei is niet het volume maar het **gewicht** de begrenzing: één m³ natte klei weegt 1,8 tot 2,0 ton.

---

## Veelgestelde vragen

### Hoeveel kubieke meter is een gemiddelde huisaansluiting?

Een sleuf van 15 m lang, 0,50 m breed en 0,80 m diep is 6,0 m³ (7,85 yd³) ontgraving. Met 25 procent zwel voert u 7,5 m³ losse grond af als u niets terugzet. In de praktijk gaat het grootste deel terug in de sleuf en houdt u alleen het zandsurplus over.

### Wat is de zwelfactor en waarom klopt mijn grondbalans niet?

Losgemaakte grond neemt meer ruimte in dan grond in situ. Zand zwelt ongeveer 15 tot 25 procent, leem en zandige klei 25 procent, zware klei 30 tot 40 procent. Er blijft dus altijd grond over, zelfs als u niets aan het profiel verandert. Andersom slinkt aangevulde grond weer bij verdichting, wat na een jaar de bekende verzakking boven de sleuf geeft.

### Vanaf welke diepte heb ik een sleufbekisting nodig?

Als vuistregel: bij een verticale wand vanaf ongeveer 1,00 m, en eerder als er verkeer, een gebouw of een grondhoop naast de sleuf staat, of als er water in de sleuf staat. Kunt u wel taluderen, dan is een flauw talud vaak sneller en goedkoper — maar u ontgraaft dan aanzienlijk meer volume dan de calculator laat zien, want die rekent met rechte wanden.

### Moet ik een melding of vergunning doen voor graafwerk?

Voor het graven zelf altijd een KLIC-melding. Werkt u in of nabij de openbare weg, dan hebt u bovendien vrijwel altijd een vergunning of instemmingsbesluit van de gemeente nodig, met een verkeersplan. Onttrekt u grondwater, dan komt het waterschap erbij. Voert u grond af, dan geldt het Besluit bodemkwaliteit.

### Kan ik de uitkomende grond opnieuw gebruiken als aanvulling?

Zandige grond en zavel: bijna altijd. Zware klei, veen en grond met veel organisch materiaal: liever niet, want die is nauwelijks te verdichten en geeft zetting boven de leiding. Rondom een leiding gebruikt u in Nederland standaard zand, ongeacht wat u uitgegraven hebt. Bij een verdachte locatie bepaalt een partijkeuring of hergebruik mag.
