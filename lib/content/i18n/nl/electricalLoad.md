## Elektrische belasting berekenen: NEC 220.82 naast NEN 1010 en de aansluitwaarde

Deze calculator bepaalt de benodigde elektrische capaciteit van een woning: de basislast op grond van de oppervlakte, de vaste toestellen, de klimaatinstallatie en een laadpunt, en daaruit een advies voor de grootte van de hoofdaansluiting.

**Let op de ijking.** Het rekenhart volgt de **optionele methode uit NEC 220.82**: 3 VA per ft² algemene belasting, 1.500 VA per keukengroep, de eerste 10.000 VA voor 100 procent en de rest voor 40 procent, en een deling door **240 V** om op de hoofdstroom te komen. Daar komt een advies van 100, 150, 200 of 400 A uit. Nederland heeft geen 240 V-net en geen 3 VA per ft²-regel: hier geldt **NEN 1010**, met **230 V** tussen fase en nul en **400 V** tussen de fasen, en met een **aansluitwaarde in kW** die de netbeheerder vastlegt. De uitkomst van dit gereedschap is dus geen Nederlandse aansluitwaarde en geen NEN 1010-berekening.

---

## Rekenstappen

```
Nederlandse route (richtinggevend, NEN 1010)
1. som van de vermogens  = alle groepen en vaste toestellen        (kW)
2. gelijktijdig vermogen = som x gelijktijdigheidsfactor            (kW)
3. stroom driefasen      = vermogen x 1000 / (400 x 1,732)          (A)
4. stroom eenfase        = vermogen x 1000 / 230                    (A)

Amerikaanse route (wat de calculator uitrekent, NEC 220.82)
5. basislast   = 3 VA per ft2 + 1.500 VA per keukengroep + 1.500 VA wasruimte
6. toestellen  = som van de typeplaatjes                            (VA)
7. gereduceerd = 10.000 VA x 1,00 + (het meerdere x 0,40)
8. totaal      = gereduceerd + de grootste klimaatinstallatie
9. hoofdstroom = totaal / 240                                       (A)
```

Het verschil zit in stap 2 tegenover stap 7. De NEC gebruikt een vaste, voorschrijvende reductie; NEN 1010 laat de ontwerper een **gelijktijdigheidsfactor** kiezen die past bij het gebruik, doorgaans 0,4 tot 0,6 voor een woning met veel elektrische toestellen. Beide erkennen dat niemand alles tegelijk aanzet, maar alleen de Amerikaanse variant zet er een getal in de code voor.

---

## Nederlandse aansluitwaarden

| Aansluiting | Vermogen | Toepassing |
|---|---|---|
| **1 x 25 A** | 5,75 kW | oudere woning zonder elektrisch koken |
| **1 x 35 A** | 8,05 kW | woning met inductie of een klein laadpunt |
| **1 x 40 A** | 9,2 kW | maximale eenfase-aansluiting |
| **3 x 25 A** | 17,3 kW | standaard voor nieuwbouw met warmtepomp |
| **3 x 35 A** | 24,2 kW | warmtepomp plus laadpunt van 11 kW |
| **3 x 50 A** | 34,6 kW | grote woning, twee laadpunten |
| **3 x 63 A** | 43,6 kW | kleine bedrijfsruimte |
| **3 x 80 A** | 55,4 kW | bovengrens kleinverbruik |

Boven 3 x 80 A bent u grootverbruiker, met een eigen transformator, een ander tariefstelsel en een gecontracteerd transportvermogen. Dat is een andere wereld dan de service upgrade uit het Amerikaanse model.

---

## Vermogens van Nederlandse groepen

| Groep of toestel | Vermogen | Aansluiting |
|---|---|---|
| **Lichtgroep** | 0,3 – 1,0 kW | 16 A, 1 fase |
| **Wandcontactdozen per groep** | 1,0 – 2,5 kW | 16 A, 1 fase |
| **Vaatwasser** | 2,2 kW | eigen 16 A-groep |
| **Wasmachine** | 2,2 kW | eigen 16 A-groep |
| **Wasdroger met warmtepomp** | 0,8 kW | eigen 16 A-groep |
| **Inductiekookplaat** | 7,4 kW | perilex, 2 of 3 fasen |
| **Elektrische oven** | 3,5 kW | eigen 16 A-groep |
| **Warmtepomp lucht-water** | 2,0 – 4,0 kW | 1 of 3 fasen |
| **Elektrisch bijverwarmingselement** | 3,0 – 9,0 kW | 3 fasen |
| **Laadpunt 3 x 16 A** | 11 kW | 3 fasen |
| **Laadpunt 3 x 32 A** | 22 kW | 3 fasen |

Elke groep zit achter een installatieautomaat, en groepen worden verdeeld over **aardlekschakelaars van 30 mA**; NEN 1010 begrenst het aantal groepen achter één aardlekschakelaar en vraagt aparte beveiliging voor onder meer de badkamer en buitengroepen. De NEC werkt met GFCI en AFCI per stopcontact of per groep — een vergelijkbaar doel, een andere systematiek.

---

## Uitgewerkt voorbeeld: woning van 150 m²

Een all-electric woning van 150 m² (1.615 ft²) met inductie, warmtepomp en een laadpunt:

* **Som van de vermogens:** inductie 7,4 + oven 3,5 + vaatwasser 2,2 + wasmachine 2,2 + droger 0,8 + warmtepomp 4,0 + laadpunt 11,0 + licht en wcd 3,0 = **34,1 kW**
* **Gelijktijdigheidsfactor 0,50** (het laadpunt en de warmtepomp met load balancing): **17,1 kW**
* **Stroom driefasen:** 17.100 / (400 x 1,732) = **24,7 A** → aansluiting **3 x 25 A (17,3 kW)**

Dezelfde woning door de Amerikaanse methode van dit gereedschap: basislast 3 VA x 1.615 ft² = 4.845 VA, plus 3.000 VA keukengroepen en 1.500 VA wasruimte, plus 16.100 VA aan toestellen. Eerste 10.000 VA voor 100 procent plus 15.445 x 0,40 = **16.178 VA**, plus de warmtepomp van 4.000 VA en het laadpunt van 11.000 VA = **31.178 VA**. Gedeeld door 240 V: **130 A**, dus het advies wordt een **150 A-aansluiting van 36 kW**.

Ruim twee keer de Nederlandse aansluitwaarde voor precies dezelfde woning. Dat is geen rekenfout: een Amerikaanse woning hangt aan één 240 V-aansluiting waar alle vermogen doorheen moet, terwijl een Nederlandse woning het over drie fasen van 400 V verdeelt.

---

## Waar de Nederlandse praktijk afwijkt

**Netcongestie is de echte beperking.** De aanvraag voor een verzwaring van 1 x 40 A naar 3 x 25 A of hoger loopt via de netbeheerder, en in grote delen van Nederland is de doorlooptijd inmiddels maanden tot meer dan een jaar. Reken die tijd in uw planning, en kijk eerst of u met load balancing binnen de bestaande aansluiting blijft.

**Load balancing in plaats van verzwaren.** Een laadpunt van 11 kW naast een warmtepomp past niet zonder meer op 3 x 25 A. De Nederlandse standaardoplossing is dynamische lastverdeling: een meter in de meterkast meet de werkelijke belasting per fase en regelt de laadstroom terug. Daarmee blijft de aansluiting hetzelfde en verandert alleen de laadtijd. Deze mogelijkheid zit niet in de Amerikaanse methode, die de volledige nominale last van een laadpunt in de som meeneemt.

**De verzwaring is niet gratis, ook niet daarna.** Naast de eenmalige kosten van de aanpassing betaalt u een hogere periodieke aansluitvergoeding en een hoger transporttarief, jaar in jaar uit. Weeg dat mee tegen de kosten van slimmer verdelen.

**Zonnepanelen werken de andere kant op.** Teruglevering belast de aansluiting ook, en netbeheerders begrenzen wat u per fase mag terugleveren; een grote eenfase-omvormer loopt daar tegenaan en vraagt een driefasige aansluiting of een driefasige omvormer. De voorwaarden en de kostenstructuur rond teruglevering veranderen regelmatig; controleer de actuele regeling bij uw netbeheerder en leverancier.

**Wie mag het uitvoeren.** Werk aan de groepenkast en aan de aansluiting is in Nederland het domein van een installateur die volgens NEN 1010 ontwerpt en meet, met een opleveringsinspectie en een meetrapport. Het aanpassen van de hoofdaansluiting en de hoofdzekering doet uitsluitend de netbeheerder. De calculator geeft een orde van grootte voor het gesprek, geen installatieontwerp.

---

## Veelgestelde vragen

### Welke aansluitwaarde heb ik nodig?

Tel de vermogens van uw vaste toestellen en groepen op, pas een gelijktijdigheidsfactor van 0,4 tot 0,6 toe, en deel het resultaat in watt door 692,8 voor driefasen of door 230 voor eenfase. Een all-electric woning met warmtepomp en één laadpunt komt doorgaans op 3 x 25 A of 3 x 35 A uit.

### Waarom adviseert de calculator 150 A en mijn installateur 3 x 25 A?

Omdat het gereedschap NEC 220.82 uitrekent en door 240 V deelt. Nederland verdeelt hetzelfde vermogen over drie fasen van 400 V, wat per fase een derde van de stroom geeft, en gebruikt daarnaast een gelijktijdigheidsfactor en load balancing in plaats van de vaste NEC-reductie. De vermogens komen overeen; de stroomsterkte en de eenheid van het advies niet.

### Kan ik een laadpunt op mijn bestaande aansluiting zetten?

Vaak wel. Op 1 x 40 A past een laadpunt van 3,7 kW met lastverdeling; op 3 x 25 A een laadpunt van 11 kW, mits het dynamisch terugregelt en er geen tweede grote verbruiker gelijktijdig vol draait. Zonder lastverdeling loopt u het risico dat de hoofdzekering eruit gaat bij koken en laden op hetzelfde moment.

### Wat is een gelijktijdigheidsfactor?

De aanname dat niet alle toestellen tegelijk op vol vermogen werken. Voor een woning met inductie, warmtepomp en laadpunt is 0,4 tot 0,6 gangbaar. De Amerikaanse tegenhanger is de vaste reductie uit NEC 220.82: de eerste 10.000 VA volledig, het meerdere voor 40 procent.

### Hoeveel groepen heeft een woning nodig?

Voor een moderne woning van 150 m² doorgaans tien tot zestien: enkele lichtgroepen, meerdere groepen wandcontactdozen, aparte groepen voor vaatwasser, wasmachine, droger en badkamer, een kookgroep op perilex, en aparte groepen voor de warmtepomp en het laadpunt. Houd bij een nieuwe groepenkast twee lege posities vrij; dat is bij verduurzaming later het goedkoopste dat u nu kunt doen.
