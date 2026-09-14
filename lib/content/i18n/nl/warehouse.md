## Opslagcapaciteit berekenen: palletplaatsen, vrije hoogte en huur per m²

Deze calculator zet de afmetingen van een loods of distributiecentrum om naar bruikbare capaciteit: netto opslagvlak na aftrek van gangen, expeditie en kantoor, het aantal palletplaatsen op de vloer en in de stelling, de kubieke inhoud en een schatting van de huurlast per jaar.

**Let op de ijking.** Het rekenhart komt uit de Noord-Amerikaanse logistiek: het gaat uit van de **GMA-pallet van 48 x 40 in** met een standaardvlak van 15 ft² (1,39 m²), van een vrije hoogte in voet, en van huur in **dollars per ft² per jaar op triple-net-basis**. Nederland werkt met de **europallet van 1.200 x 800 mm**, meet het verhuurbare vloeroppervlak volgens **NEN 2580**, en verhuurt in euro's per m² per jaar onder een **ROZ-modelhuurovereenkomst** met servicekosten en indexering ernaast. Reken de eenheden om voordat u de uitkomst met een Nederlandse opgave vergelijkt.

---

## Rekenstappen

```
1. bruto vloeroppervlak  = lengte x breedte                  (m2)
2. netto opslagvlak      = bruto x (1 - aandeel overig)
3. palletplaatsen vloer  = netto opslagvlak / vlak per pallet
4. palletplaatsen totaal = plaatsen op de vloer x aantal niveaus
5. kubieke inhoud        = bruto vloeroppervlak x vrije hoogte  (m3)
6. benutbare inhoud      = netto opslagvlak x stapelhoogte      (m3)
7. huur per jaar         = verhuurbaar vloeroppervlak x prijs per m2 per jaar
```

Stap 5 en 6 lopen uiteen omdat u nooit tot het dak stapelt: onder een sprinklerinstallatie moet minimaal 0,50 m vrij blijven, en de bovenste balklaag komt daar weer onder.

---

## Pallets en hun grondvlak

| Pallettype | Maat | Grondvlak | Inclusief werkruimte |
|---|---|---|---|
| **Europallet EUR1** | 1.200 x 800 mm | 0,96 m² (10,3 ft²) | 1,15 – 1,25 m² |
| **Blokpallet** | 1.200 x 1.000 mm | 1,20 m² (12,9 ft²) | 1,40 – 1,50 m² |
| **GMA, Verenigde Staten** | 1.219 x 1.016 mm | 1,24 m² (13,3 ft²) | 1,39 m² (15 ft²) |
| **Halve europallet** | 800 x 600 mm | 0,48 m² (5,2 ft²) | 0,60 m² |
| **Displaypallet** | 600 x 400 mm | 0,24 m² | 0,32 m² |

Hier zit de belangrijkste rekenfout op de loer. De standaardwaarde van 1,39 m² per pallet in dit gereedschap is het Amerikaanse getal; met europallets komt u op circa 1,15 m². Dat lijkt klein, maar over een hal van 10.000 m² netto is het verschil ruim **1.300 palletplaatsen per niveau** — een reële onderschatting van de capaciteit met ongeveer 17 procent.

---

## Gangbreedte en stapelhoogte

| Intern transport | Gangbreedte | Werkhoogte |
|---|---|---|
| **Handpalletwagen** | 1,4 – 1,8 m | 1 niveau |
| **Vorkheftruck met contragewicht** | 3,6 – 4,2 m | 4 – 6 m |
| **Stapelaar** | 2,4 – 2,8 m | 4 – 5 m |
| **Reachtruck** | 2,8 – 3,2 m | 10 – 12 m |
| **Smallegangtruck** | 1,7 – 1,9 m | 12 – 14 m |
| **Automatisch kraanmagazijn** | 1,5 – 1,6 m | 20 – 40 m |

Het aandeel gangen is de dominante variabele in de hele berekening. Bij een klassieke stellingopstelling met een reachtruck gaat 30 tot 40 procent van het vlak naar gangen; bij smalle-gangtechniek 20 tot 25 procent; bij een automatisch kraanmagazijn 12 tot 15 procent. Meer capaciteit haalt u dus eerder uit smallere gangen en meer hoogte dan uit meer vierkante meters.

---

## Uitgewerkt voorbeeld: hal van 60 x 40 m

* **Bruto vloeroppervlak:** 60 x 40 = **2.400 m² (25.833 ft²)**
* **Aftrek:** 10 procent expeditie en laadzone, 5 procent kantoor en voorzieningen, 32 procent gangen → netto opslagvlak **1.272 m²**
* **Palletplaatsen op de vloer, europallet:** 1.272 / 1,15 = **1.106**
* **Vrije hoogte 12,20 m, stellingen met 5 niveaus:** 1.106 x 5 = **5.530 palletplaatsen**
* **Kubieke inhoud:** 2.400 x 12,20 = **29.280 m³ (1.034.000 ft³)**
* **Huur bij € 75 per m² per jaar:** **€ 180.000 per jaar**, exclusief servicekosten en btw

Met de Amerikaanse standaardwaarde van 1,39 m² per pallet zou dezelfde hal op 915 plaatsen per niveau uitkomen, dus 4.575 totaal: bijna duizend palletplaatsen minder dan er werkelijk in passen.

---

## Waar de Nederlandse markt afwijkt

**Vrije hoogte van 12,20 m is de standaard.** Nederlandse nieuwbouw-distributiecentra worden vrijwel altijd met een vrije hoogte van 12,20 m opgeleverd, en recentere ontwikkelingen gaan naar 12,60 m of hoger; oudere hallen zitten op 8 tot 10,80 m. De Amerikaanse markt praat in 32 tot 40 ft (9,75 – 12,19 m). De getallen liggen dus dicht bij elkaar, maar het Nederlandse cijfer is een **vrije** hoogte onder de laagste constructiedelen en onder de sprinkler, terwijl clear height in de Verenigde Staten wisselend wordt gedefinieerd. Vraag altijd waar de maat is gemeten.

**Vloerbelasting in kN/m².** De Nederlandse standaard voor een DC-vloer is een gelijkmatig verdeelde belasting van circa 50 kN/m² (5.000 kg/m², ruim 1.000 psf), met een aparte eis voor puntlasten onder stellingpoten. Een hal met een lagere vloerbelasting beperkt uw stellinghoogte, ongeacht wat de vrije hoogte toelaat. Dit is geen invoerveld in de calculator, maar in de praktijk vaak de werkelijke begrenzing.

**Huur wordt anders opgebouwd.** Nederlandse logistieke huur wordt per m² per jaar gequoteerd over het verhuurbare vloeroppervlak volgens NEN 2580, in een ROZ-modelhuurovereenkomst met een looptijd van doorgaans vijf jaar plus vijf, jaarlijkse indexering op basis van het CPI, servicekosten apart en een bankgarantie. Het Amerikaanse triple net per ft² per jaar is niet één-op-één vergelijkbaar; wilt u toch omrekenen, vermenigvuldig de dollarprijs per ft² met 10,76. Kantoorruimte binnen de hal wordt bijna altijd tegen een hoger tarief per m² verhuurd dan de hal zelf.

**Brandcompartimentering bepaalt de indeling.** Onder het Besluit bouwwerken leefomgeving is een brandcompartiment in beginsel begrensd, en een grote hal haalt die grens ruimschoots. De Nederlandse route is een gelijkwaardige oplossing die met **NEN 6060** of **NEN 6079** wordt onderbouwd, met sprinklers volgens **NEN-EN 12845** onder een certificatieregeling, brandwerende scheidingen en rookbeheersing. Dat is een ander stelsel dan de Amerikaanse NFPA-normen waar het model impliciet van uitgaat, en verzekeraars stellen er hun eigen eisen bovenop. Slaat u gevaarlijke stoffen in verpakking op, dan komt **PGS 15** erbij met eigen compartimenten, opvangvoorzieningen en vrije ruimte — capaciteit die u dus niet vol kunt zetten.

**Docks en manoeuvreerruimte.** Reken in Nederland grofweg één laaddock per 800 tot 1.200 m² hal, met een laadkuil, en een manoeuvreerhof van 32 tot 35 m diep voor een trekker met oplegger. Die buitenruimte staat niet in de calculator maar bepaalt evenzeer of een kavel werkt.

---

## Veelgestelde vragen

### Hoeveel palletplaatsen passen er in mijn hal?

Neem het bruto vloeroppervlak, trek expeditie, kantoor en gangen eraf, en deel het restant door het grondvlak per pallet inclusief werkruimte — met europallets circa 1,15 m². Vermenigvuldig met het aantal stellingniveaus. Voor een hal van 2.400 m² met 32 procent gangen en vijf niveaus komt u op ruim 5.500 plaatsen.

### Waarom geeft de calculator minder plaatsen dan mijn stellingleverancier?

Omdat het gereedschap standaard met 15 ft² (1,39 m²) per pallet rekent, het Amerikaanse GMA-formaat. Met europallets is dat circa 1,15 m². Vult u het Europese getal in, dan lopen de uitkomsten weer gelijk.

### Welke vrije hoogte moet ik aanhouden?

Voor nieuwbouw in Nederland 12,20 m als ondergrens en 12,60 m of meer als u toekomstvast wilt bouwen. Reken bij het bepalen van de stellinghoogte 0,50 m vrije ruimte onder de sprinklerkoppen af, plus de hoogte van de bovenste last en de balklaag.

### Hoeveel ruimte gaat er verloren aan gangen?

Twintig tot veertig procent, afhankelijk van het interne transport. Een reachtruck vraagt 2,8 tot 3,2 m gang, een vorkheftruck met contragewicht 3,6 tot 4,2 m. Smallegangtechniek of een kraanmagazijn levert de meeste capaciteit per m², maar bindt u aan één type materieel.

### Hoe vergelijk ik een Amerikaanse huurprijs met een Nederlandse?

Vermenigvuldig de prijs per ft² per jaar met 10,76 om op prijs per m² per jaar te komen. Let daarna op de basis: een Amerikaanse triple-net-prijs is exclusief belastingen, verzekering en onderhoud, terwijl een Nederlandse quote een kale huur is met servicekosten en indexering ernaast en de gemeentelijke lasten deels bij de eigenaar.
