## PUR-schuim berekenen: board feet, m³ en de Nederlandse praktijk

Deze calculator bepaalt hoeveel gespoten PUR-schuim u nodig hebt voor een dak, een gevel, een vloer of een kruipruimte, en wat dat kost. U geeft de oppervlakte en de gewenste dikte op en kiest tussen open-cellig en gesloten-cellig schuim; het gereedschap geeft de hoeveelheid, de behaalde warmteweerstand en een kostenopbouw voor materiaal en arbeid.

**Let op de ijking.** Het rekenhart werkt in **board feet** — 1 ft² bij 1 in dikte — met Amerikaanse setopbrengsten, Amerikaanse prijzen per board foot en de brandeis uit de **IRC**: een thermische barrière die het schuim 15 minuten afschermt, doorgaans 12,7 mm gipsplaat. Nederland rekent in m² bij een dikte in mm, of in m³, en toetst brandgedrag met de **Euroklassen volgens NEN-EN 13501-1** en de eisen uit het **Besluit bouwwerken leefomgeving (Bbl)**. Gespoten PUR valt hier onder **NEN-EN 14315-1** met CE-markering en een verklaarde lambdawaarde. Gebruik de volumes; toets het brandgedrag en de toelaatbaarheid aan de Nederlandse regels.

---

## Board feet omrekenen

```
1 board foot   = 1 ft2 bij 1 in  = 0,00236 m3
1 m3           = 424 board feet
board feet     = m2 x dikte in mm x 0,424
1 m2 bij 100 mm = 42,4 board feet
```

| Dikte | Board feet per m² | Volume per m² |
|---|---|---|
| 30 mm | 12,7 | 0,030 m³ |
| 50 mm | 21,2 | 0,050 m³ |
| 80 mm | 33,9 | 0,080 m³ |
| 100 mm | 42,4 | 0,100 m³ |
| 150 mm | 63,6 | 0,150 m³ |
| 200 mm | 84,8 | 0,200 m³ |

Een Amerikaanse set van 600 board feet is dus goed voor ongeveer 1,4 m³ schuim, oftewel 14 m² (151 ft²) bij 100 mm. Nederlandse verwerkers rekenen niet in sets maar geven een prijs per m² bij een opgegeven dikte, inclusief materiaal, arbeid en voorbereiding.

---

## Rekenstappen

```
1. oppervlakte     = lengte x breedte                    (m2)
2. volume          = oppervlakte x dikte / 1000           (m3, dikte in mm)
3. board feet      = oppervlakte x dikte x 0,424
4. met overspray   = board feet x (1 + verlies / 100)
5. Rd behaald      = dikte / 1000 / lambda                (m2K/W)
6. materiaalkosten = board feet x prijs per board foot
7. arbeid          = oppervlakte x prijs per m2
```

Reken 10 tot 15 procent overspray. Gespoten schuim komt met een ruw, onregelmatig oppervlak van de spuitmond; in een gevel of tussen dakspanten moet het naderhand vlak worden gesneden en dat afgesneden deel is verloren materiaal.

---

## Open-cellig en gesloten-cellig, in Nederlandse eenheden

| Eigenschap | Open-cellig | Gesloten-cellig |
|---|---|---|
| **Dichtheid** | 8 – 12 kg/m³ (0,5 – 0,8 lb/ft³) | 30 – 40 kg/m³ (1,9 – 2,5 lb/ft³) |
| **lambda, verklaard** | 0,036 – 0,040 W/mK | 0,024 – 0,030 W/mK |
| **Rd bij 100 mm** | 2,5 – 2,8 m²K/W | 3,3 – 4,2 m²K/W |
| **Dikte voor Rc 4,7** | circa 190 mm | circa 130 mm |
| **Damp** | dampopen, laat vocht door | dampremmend vanaf circa 50 mm |
| **Water** | zuigt water op | neemt vrijwel geen water op |
| **Constructieve bijdrage** | geen | verstijft de beplating |
| **Prijs** | laag | twee tot drie keer zo hoog |

Hier zit een valkuil in de omrekening. De Amerikaanse literatuur noemt voor gesloten-cellig schuim R-6,5 tot R-7,0 per inch; dat komt neer op een lambda van 0,021 tot 0,022 W/mK. De waarden die onder NEN-EN 14315-1 voor in situ gespoten schuim worden **verklaard**, liggen op 0,024 tot 0,030. Rekent u met de Amerikaanse waarde, dan overschat u de behaalde Rc met 15 tot 30 procent — precies het verschil dat een dak van "voldoet aan het Bbl" naar "voldoet niet" brengt. Ga uit van het CE-blad van het product dat de verwerker gebruikt, niet van de standaardwaarde in dit gereedschap.

---

## Uitgewerkt voorbeeld: dakvlak van 45 m²

Een schuin dak van 45 m² (484 ft²) tussen de spanten, met gesloten-cellig schuim van lambda 0,026 en een doel van Rc 6,3:

* **Benodigde isolatiedikte:** 6,3 x 0,026 = 0,164 m, afgerond **165 mm**
* **Volume:** 45 x 0,165 = **7,43 m³**
* **Board feet:** 45 x 165 x 0,424 = **3.148 bd ft**
* **Met 12 procent overspray:** circa **3.525 bd ft**, oftewel bijna zes Amerikaanse sets van 600
* **Behaalde Rd:** 0,165 / 0,026 = **6,35 m²K/W (R-36)**

Met open-cellig schuim van lambda 0,038 zou daar 240 mm nodig zijn, en dat past niet tussen een gangbaar Nederlands spant van 195 mm zonder opbouw.

---

## Waar Nederland afwijkt

**De kruipruimte, niet de crawl space.** De grootste Nederlandse toepassing van gespoten PUR is de onderkant van de vloer boven een kruipruimte. Dat is een andere situatie dan het Amerikaanse model beschrijft: laag, vochtig, slecht geventileerd en met leidingwerk. Los eerst het vocht op — bodemfolie, ventilatieroosters, eventueel een pomp — voordat er schuim tegen de onderkant van de vloer gaat. Schuim over een natte kruipruimte verplaatst het probleem naar de vloerbalken.

**De PUR-discussie.** Over gespoten PUR-vloerisolatie is in Nederland jarenlang geprocedeerd en gepubliceerd. De kern: bij het spuiten reageren isocyanaten en polyol ter plaatse, en als de mengverhouding, de temperatuur of de ventilatie niet in orde is, kunnen er dampen in de woning komen. De Gezondheidsraad concludeerde dat bij correcte uitvoering en voldoende ventilatie de risico's beperkt zijn, maar dat de uitvoering bepalend is. Praktische consequenties: laat het werk doen door een aangesloten, gecertificeerde verwerker, verlaat de woning gedurende het spuiten en de aangegeven uren daarna, en ventileer ruim. Vraag naar het productblad en naar de verwerkingsinstructie.

**Alternatieven die de calculator niet kent.** Voor een Nederlandse kruipruimte zijn EPS-korrels, thermoskussens, minerale-wolplaten tegen de vloer of een combinatie van bodemfolie met bodemisolatie gangbare en vaak goedkopere routes. Voor een dak van binnenuit zijn PIR-platen tussen en onder de spanten meestal voordeliger dan spuitschuim, met een beter beheersbare dikte.

**Brand.** Onder het Bbl moet de binnenoppervlakte van een besloten ruimte aan een brandklasse volgens NEN-EN 13501-1 voldoen; PUR haalt die klasse doorgaans niet onbeschermd en moet dus worden afgedekt met gipsplaat of een andere bekleding. Dat is inhoudelijk vergelijkbaar met de Amerikaanse thermische barrière, maar de toetsing en de klassenaanduiding verschillen volledig. Let daarnaast op het risico tijdens het werk zelf: de reactie is exotherm, en te dik in één laag spuiten heeft in Nederland meer dan eens brand veroorzaakt. Een goede verwerker spuit in lagen van 30 tot 50 mm.

**Verkoop en hypotheek.** Bij de verkoop van een woning met gespoten PUR-vloerisolatie stellen kopers, keurders en soms geldverstrekkers vragen. Bewaar de opdrachtbon, het productblad en het certificaat van de verwerker: dat dossier is later meer waard dan de besparing op de uitvoering.

---

## Veelgestelde vragen

### Hoeveel board feet heb ik nodig?

Vermenigvuldig de oppervlakte in m² met de dikte in mm en met 0,424. Voor 45 m² bij 165 mm is dat 3.148 board feet, plus 10 tot 15 procent overspray. In Nederland zult u de hoeveelheid overigens zelden zo uitvragen: u krijgt een prijs per m² bij een opgegeven dikte.

### Open-cellig of gesloten-cellig?

Gesloten-cellig als er weinig ruimte is, als de constructie stijver moet worden of als er vocht van buiten komt — bij een kruipruimte of een plat dak dus vrijwel altijd. Open-cellig als u veel dikte kwijt kunt en de constructie naar binnen moet kunnen drogen; het is aanzienlijk goedkoper per m². Reken bij open-cellig op ruim anderhalf keer de dikte voor dezelfde Rc.

### Hoe dik moet het schuim voor de Bbl-eis?

Voor de nieuwbouweisen van Rc 3,7 voor de vloer, 4,7 voor de gevel en 6,3 voor het dak hebt u met gesloten-cellig schuim van lambda 0,026 respectievelijk circa 96 mm, 122 mm en 164 mm nodig. Met open-cellig van lambda 0,038 wordt dat 141 mm, 179 mm en 240 mm. Dit zijn Rd-waarden van het isolatiemateriaal; de Rc van de hele constructie ligt iets hoger dankzij de overige lagen, en lager door koudebruggen.

### Kan ik het zelf spuiten met een bouwmarktset?

Voor een enkele holte of een aansluiting rond een kozijn kan een kleine set volstaan. Voor een vloer, een gevel of een dakvlak niet: de mengverhouding, de temperatuur van de componenten en de laagdikte bepalen zowel de kwaliteit als de veiligheid, en dat vraagt materieel en persoonlijke bescherming die verder gaan dan een stofmasker. Bij een kruipruimte is zelf spuiten in Nederland geen verstandige route.

### Waarom haal ik de Rc-waarde uit de calculator niet?

Omdat het gereedschap met Amerikaanse R-waarden per inch rekent, die optimistischer zijn dan de lambdawaarden die hier onder NEN-EN 14315-1 worden verklaard. Daarnaast is een ongelijke laagdikte bij spuitwerk normaal: de dunste plek bepaalt de zwakke schakel, niet het gemiddelde.
