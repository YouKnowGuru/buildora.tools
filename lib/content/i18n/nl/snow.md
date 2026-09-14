## Sneeuwbelasting op een dak: ASCE 7 naast NEN-EN 1991-1-3

**Constructieve waarschuwing.** Deze calculator rekent geselecteerde bepalingen uit **ASCE/SEI 7-22 hoofdstuk 7** en **IBC paragraaf 1608** uit — het Amerikaanse stelsel. Hij is bedoeld voor een eerste inschatting en voor studie. Een Nederlands dak wordt beoordeeld volgens **NEN-EN 1991-1-3 met de Nationale Bijlage**, en dat levert andere getallen en een andere opzet. Laat elk definitief ontwerp door een constructeur toetsen.

---

## Wat sneeuwbelasting is

Sneeuwbelasting is de verticale kracht die sporen, gordingen, spanten en dakbeschot moeten kunnen dragen als er sneeuw op het dak blijft liggen. Verse, droge sneeuw weegt 1,0 tot 2,0 kN/m³ (6 – 13 lb/ft³); verzadigde, verdichte sneeuw met een ijslaag loopt op naar 4,0 kN/m³ en meer. Een laag van 0,30 m natte sneeuw legt daarmee al ruim 1 kN/m² (21 psf) op het dak, en die verandering voltrekt zich soms binnen een etmaal.

Onderschatting leidt tot doorbuiging, scheuren in plafonds en in het uiterste geval tot bezwijken. Overschatting kost onnodig staal en hout.

---

## De Amerikaanse rekenketen

```
sk of pg : karakteristieke sneeuwbelasting op de grond
   |
Ce  expositiefactor      (tabel 7.3-1)
Ct  thermische factor    (tabel 7.3-3)
Is  belangfactor         (tabel 1.5-2)
   |
pf  = 0,7 x Ce x Ct x Is x pg      (vlak dak, paragraaf 7.3)
   |
Cs  hellingfactor        (paragraaf 7.4, glad of niet glad)
ps  = Cs x pf                      (hellend dak)
pm  minimum sneeuwbelasting        (paragraaf 7.3.4)
   |
maatgevend = max(ps, pm)
totale last = maatgevend x dakoppervlak (horizontale projectie)
   |
opwaaiing achter een hoger dakdeel (paragraaf 7.7)
```

De factor 0,7 verdisconteert dat niet alle sneeuw die op de grond valt op een dak blijft liggen. **Ce** is 0,9 bij een volledig vrij dak, 1,0 in een normale woonomgeving en 1,2 bij beschutting door bomen of hogere bebouwing. **Ct** is 1,0 voor een verwarmd gebouw, 1,2 voor een onverwarmde loods en 1,3 voor een koelhuis. **Is** loopt van 0,8 voor een schuur tot 1,2 voor een ziekenhuis of brandweerkazerne.

---

## Hoe de Eurocode het doet, en wat dat in Nederland betekent

De Eurocode kent dezelfde opbouw, maar met andere symbolen en andere getallen:

```
s = mu(i) x Ce x Ct x sk
```

* **sk** is de karakteristieke sneeuwbelasting op de grond. De Nederlandse Nationale Bijlage geeft daarvoor **één landelijke waarde van 0,7 kN/m² (14,6 psf)**. Er is dus geen kaart met zones zoals in de Verenigde Staten: Vlissingen en Winterswijk rekenen met hetzelfde getal.
* **mu(1)** is de vormfactor van het dak: **0,8** bij een dakhelling van 0 tot 30 graden, daarna lineair aflopend naar 0 bij 60 graden.
* **Ce** en **Ct** zijn in de Nederlandse praktijk vrijwel altijd 1,0.

Voor een gewoon Nederlands dak met een helling tot 30 graden komt u daarmee op **s = 0,8 x 0,7 = 0,56 kN/m² (11,7 psf)**, oftewel ongeveer 57 kg per m². Dat is een fractie van wat New England of het Amerikaanse hooggebergte vraagt.

| Onderdeel | ASCE 7-22 | NEN-EN 1991-1-3 met Nederlandse Nationale Bijlage |
|---|---|---|
| **Waarde op de grond** | pg per locatie, van 0 tot ruim 4,8 kN/m² (0 – 100+ psf) | sk = 0,7 kN/m² (14,6 psf), landelijk |
| **Grond-naar-dakfactor** | 0,7 als vaste reductie | zit in de vormfactor mu(1) = 0,8 |
| **Hellingreductie** | Cs, afhankelijk van gladheid en temperatuur, tot 0 bij 70 graden | mu(1) loopt naar 0 bij 60 graden, ongeacht materiaal |
| **Belangfactor** | Is van 0,8 tot 1,2 | via gevolgklasse en partiële factoren in NEN-EN 1990 |
| **Ondergrens** | pm als expliciete minimumbelasting | geen equivalent; wateraccumulatie is de kritische controle |
| **Typische uitkomst hellend dak** | 1,0 – 2,4 kN/m² in koude staten | circa 0,56 kN/m² |

---

## Uitgewerkt voorbeeld: dakvlak van 80 m²

Een woning met een zadeldak van 30 graden en 80 m² (861 ft²) horizontale projectie:

* **Nederlands, volgens de Eurocode:** s = 0,8 x 1,0 x 1,0 x 0,7 = 0,56 kN/m² → 80 x 0,56 = **44,8 kN (10.070 lbf, circa 4,6 ton)**
* **Amerikaans, met pg = 1,68 kN/m² (35 psf, Vermont):** pf = 0,7 x 1,0 x 1,0 x 1,0 x 1,68 = 1,17 kN/m²; Cs = 1,0 bij 30 graden op niet-glad dakvlak → 80 x 1,17 = **93,8 kN (21.100 lbf)**

Hetzelfde dak, ruim twee keer de belasting. Wie een Amerikaanse uitkomst zonder omrekening op een Nederlandse kap legt, komt structureel te zwaar uit — en wie een Nederlandse waarde gebruikt voor een gebouw in Colorado, veel te licht.

---

## Waar het in Nederland werkelijk om gaat

**Wateraccumulatie, niet sneeuw.** Op een plat dak is regenwater dat niet wegkomt in Nederland de kritische belasting, niet sneeuw. Een dak dat doorbuigt vormt een kuil, de kuil vult zich, de doorbuiging neemt toe: dat proces is zelfversterkend en heeft in Nederland meer daken gekost dan sneeuw. De controle op wateraccumulatie en het aanbrengen van **noodoverlaten** in de dakrand, zodat het water er ruim boven de vloerhoogte uit kan, horen bij elk plat dakontwerp. Vergeet niet dat sneeuw die de hemelwaterafvoeren dichtvriest precies deze situatie veroorzaakt.

**Opwaaiing en ophoping.** De Eurocode kent net als ASCE gevallen met een hogere plaatselijke belasting: achter een opgaande wand, in een kilkeper, tegen een dakopstand en bij een sprong tussen een hoger en een lager dakdeel. Bij een luifel, een aanbouw of een dakkapel is de plaatselijke waarde daarmee flink hoger dan de 0,56 kN/m² van het vrije vlak.

**Bestaande gebouwen.** Voor de beoordeling van een bestaande constructie is in Nederland **NEN 8700** het kader, met lagere betrouwbaarheidseisen dan bij nieuwbouw. Een oude schuur of hal die u wilt hergebruiken, toetst u dus niet met nieuwbouwwaarden.

**Kassen en lichte hallen.** Tuinbouwkassen hebben hun eigen norm, **NEN-EN 13031-1**, met eigen belastingcombinaties. Lichte stalen hallen en kassen zijn de constructies die in Nederland bij zware sneeuwval daadwerkelijk in de problemen komen, juist omdat het eigen gewicht klein is ten opzichte van de sneeuw.

**Zonnepanelen.** Een panelenveld voegt 0,15 tot 0,25 kN/m² (3 – 5 psf) permanente last toe en verandert bovendien de sneeuwverdeling: sneeuw glijdt van de panelen en hoopt op aan de onderrand. Reken bij een dak vol panelen niet alleen het gewicht mee, maar ook die ongelijke verdeling.

---

## Veelgestelde vragen

### Welke sneeuwbelasting geldt in Nederland?

De Nationale Bijlage bij NEN-EN 1991-1-3 geeft één landelijke karakteristieke waarde op de grond van 0,7 kN/m² (14,6 psf). Voor een dak tot 30 graden helling wordt dat 0,56 kN/m² (11,7 psf); boven 30 graden loopt die waarde af naar nul bij 60 graden. Voor plaatselijke ophoping bij opstanden en dakspongen gelden hogere waarden.

### Waarom geeft deze calculator een hogere waarde dan mijn constructeur?

Omdat hij ASCE 7-22 uitrekent met een Amerikaanse waarde op de grond. Vult u een Amerikaanse pg in — bijvoorbeeld de 35 psf van Vermont — dan krijgt u ruim twee keer de Nederlandse waarde. Wilt u het gereedschap in de buurt van de Nederlandse uitkomst brengen, voer dan 0,7 kN/m² (14,6 psf) als grondwaarde in, met Ce = 1,0 en Ct = 1,0. Het blijft daarna een ASCE-berekening, geen Eurocode-toets.

### Moet ik sneeuw van het dak scheppen?

Bij een normaal Nederlands dak zelden. Let wel op drie situaties: een plat dak met verstopte of dichtgevroren afvoeren, een lichte constructie zoals een carport, veranda of kas, en de plek achter een opgaande wand waar de sneeuw ophoopt. Werk nooit alleen op een besneeuwd dak, en houd rekening met de sneeuw die met u meeglijdt.

### Rekent u met het schuine dakvlak of met de projectie?

Met de horizontale projectie. Sneeuw valt verticaal, dus de belasting werkt op het vlak zoals u dat van bovenaf ziet. Alleen voor materiaalhoeveelheden — pannen, isolatie, dakbedekking — meet u het schuine vlak.

### Geldt de Eurocode ook voor mijn dakkapel of overkapping?

Ja. De constructieve eisen zijn niet afhankelijk van de omvang van het bouwwerk, ook niet als het bouwen zelf vergunningvrij is. Een vergunningvrije overkapping moet net zo goed voldoen aan de constructieve eisen uit het Bbl, en die verwijzen naar de Eurocodes met hun Nederlandse Nationale Bijlage.
