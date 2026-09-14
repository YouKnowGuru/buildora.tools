## Isolatie berekenen: van R-waarde naar Rc-waarde in m²K/W

Deze calculator bepaalt hoeveel isolatiemateriaal u nodig hebt voor een dak, een gevel, een vloer of een kruipruimte. U geeft de bruto oppervlakte op, het aandeel regelwerk, een doelwaarde en het materiaal; het gereedschap rekent naar netto vlak, benodigde dikte en het aantal pakken, zakken of board feet.

**Let op de ijking.** Het rekenhart werkt met de Amerikaanse **R-waarde** in hr·ft²·°F/Btu, met de klimaatzones 1 tot 8 uit de IECC en met verpakkingseenheden zoals "een pak dekt 40 ft²". Nederland rekent met de **Rc-waarde in m²K/W**, met eisen uit het **Besluit bouwwerken leefomgeving (Bbl)** en met een integrale energieprestatie volgens **BENG**. De getallen zijn omrekenbaar, de eisen niet: de calculator kent het Bbl niet en de IECC-zone die het dichtst bij het Nederlandse klimaat ligt, geeft een andere doelwaarde dan het Bbl vraagt.

---

## Omrekenen tussen de twee stelsels

```
Rc of Rd (m2K/W) = R-waarde (imperiaal) / 5,678
R-waarde         = Rc x 5,678
Rd van een laag  = dikte (m) / lambda (W/mK)
benodigde dikte  = (Rd doel - Rd aanwezig) x lambda        (m)
U-waarde         = 1 / Rc totaal                            (W/m2K)
```

| Imperiale waarde | Rc of Rd in m²K/W |
|---|---|
| R-13 | 2,3 |
| R-15 | 2,6 |
| R-21 | 3,7 |
| R-30 | 5,3 |
| R-38 | 6,7 |
| R-49 | 8,6 |
| R-60 | 10,6 |

Twee begrippen die u niet mag verwisselen. De **Rd-waarde** is de warmteweerstand van het isolatiemateriaal zelf, zoals de fabrikant die verklaart. De **Rc-waarde** is de weerstand van de hele constructie: isolatie plus metselwerk, beplating, luchtlagen en overgangsweerstanden, verminderd met het effect van koudebruggen en regelwerk. Een Bbl-eis is altijd een Rc-eis; een productverpakking noemt altijd een Rd-waarde. Rc is dus nooit gelijk aan de Rd van het pak dat u koopt.

---

## Rekenstappen

```
1. bruto oppervlakte  = lengte x breedte                    (m2)
2. netto vlak         = bruto x (1 - aandeel regelwerk)
3. besteloppervlak    = netto x (1 + verlies / 100)
4. benodigde dikte    = (Rd doel - Rd aanwezig) x lambda      (m)
5. aantal pakken      = besteloppervlak / m2 per pak         (afronden naar boven)
6. volume inblaaswerk = besteloppervlak x dikte              (m3)
```

Voor een open zoldervloer is er geen regelwerk en rekent u 5 procent verlies voor randen en obstakels. In een houtskeletgevel of tussen dakspanten rekent u 8 tot 10 procent, omdat er om leidingen, dozen en kozijnen heen gesneden moet worden.

---

## Eisen uit het Bbl, naast de Amerikaanse doelwaarden

| Bouwdeel | Bbl nieuwbouw | Ongeveer gelijk aan |
|---|---|---|
| **Vloer boven kruipruimte** | Rc ≥ 3,7 m²K/W | R-21 |
| **Gevel** | Rc ≥ 4,7 m²K/W | R-27 |
| **Dak** | Rc ≥ 6,3 m²K/W | R-36 |
| **Ramen, deuren, kozijnen** | U ≤ 1,65 W/m²K gemiddeld | circa R-3,4 |

Vergelijk dat met de IECC: in zone 5, waarvan het klimaat het meest op Nederland lijkt, staat voor een zoldervloer R-49 (Rc 8,6). Het Nederlandse dak hoeft naar Rc 6,3, oftewel R-36. Dat komt doordat Nederland de prestatie op **gebouwniveau** regelt via BENG — energiebehoefte, primair fossiel energiegebruik en aandeel hernieuwbare energie, plus een grens voor het risico op zomerse opwarming. Een ontwerper mag een lager dak-Rc compenseren met betere kozijnen, een warmtepomp of meer zonnepanelen. Bij verbouw geldt een aanzienlijk lager verbouwniveau; subsidieregelingen stellen daarentegen hun eigen, hogere minimum-Rd-waarden en minimumoppervlakten. Controleer altijd de actuele voorwaarden.

---

## Materialen: lambda, Rd en de imperiale tegenhanger

| Materiaal | lambda (W/mK) | Rd bij 100 mm | Per inch, imperiaal |
|---|---|---|---|
| **Glaswol** | 0,032 – 0,040 | 2,5 – 3,1 | R-3,6 – R-4,5 |
| **Steenwol** | 0,034 – 0,040 | 2,5 – 2,9 | R-3,6 – R-4,2 |
| **EPS, wit** | 0,036 – 0,038 | 2,6 – 2,8 | R-3,8 – R-4,0 |
| **Grafiet-EPS** | 0,031 – 0,033 | 3,0 – 3,2 | R-4,4 – R-4,7 |
| **XPS** | 0,032 – 0,036 | 2,8 – 3,1 | R-4,0 – R-4,5 |
| **PIR of resolhardschuim** | 0,021 – 0,024 | 4,2 – 4,8 | R-6,0 – R-6,9 |
| **Cellulose, ingeblazen** | 0,038 – 0,042 | 2,4 – 2,6 | R-3,4 – R-3,8 |
| **EPS-korrels voor de spouw** | 0,033 – 0,038 | 2,6 – 3,0 | R-3,8 – R-4,4 |
| **Houtvezel** | 0,038 – 0,046 | 2,2 – 2,6 | R-3,1 – R-3,8 |

Opvallend: Nederlandse glas- en steenwol presteren per centimeter beter dan de Amerikaanse waarde van R-3,1 tot R-3,4 per inch die dit gereedschap standaard gebruikt. Dat komt door hogere dichtheden en door een andere manier van verklaren onder de Europese normen. Voert u de Amerikaanse standaardwaarde in bij een Nederlands product, dan rekent u de benodigde dikte 15 tot 25 procent te hoog.

**Uitgewerkt voorbeeld.** Een zoldervloer van 60 m² (646 ft²) moet naar Rc 6,3. De bestaande constructie levert circa 0,4. Met glaswol van lambda 0,035: benodigde Rd = 5,9, dus dikte = 5,9 x 0,035 = 0,207 m, afgerond **210 mm**. Bij 4,5 m² per pak en 5 procent verlies: 63 m² / 4,5 = **14 pakken** per laag, dus 28 pakken in twee kruislings gelegde lagen van 105 mm.

---

## Nederlandse aandachtspunten

**Het stramien is 600 mm.** Nederlandse houtskeletbouw en metalstudwanden werken met een hart-op-hartafstand van 600 mm, niet met de 16 in (406 mm) van het Amerikaanse model. Pakken glas- en steenwol worden op die maat geleverd, doorgaans in banen van 570 tot 610 mm breed. Een Amerikaans pak past niet in een Nederlandse gevel, en het aandeel regelwerk is bij 600 mm stramien lager, wat de effectieve Rc juist gunstig beïnvloedt.

**Spouwmuurisolatie en vleermuizen.** De Nederlandse standaardmaatregel bij bestaande woningen is het navullen van de spouw met EPS-korrels, glaswolvlokken of steenwol. Een spouw van 50 tot 60 mm brengt een ongeïsoleerde gevel van Rc 0,4 naar circa Rc 1,4 tot 1,8 — ver onder de nieuwbouweis, maar met de kortste terugverdientijd van alle maatregelen. Sinds enkele jaren geldt hierbij een extra verplichting: spouwmuren zijn verblijfplaats van beschermde vleermuizen, en zonder ecologisch onderzoek of werken onder een gemeentelijk soortenmanagementplan mag de spouw niet worden gevuld. Reken die stap in tijd en in kosten mee.

**Vocht en luchtdichtheid.** Isolatie remt geleiding, maar houdt geen lucht tegen. In het Nederlandse klimaat zit de dampremmende laag aan de warme binnenzijde, met een Sd-waarde die past bij de constructie; een dampopen buitenlaag laat de constructie naar buiten drogen. Twee dampdichte lagen om dezelfde isolatie sluiten vocht op. Het Bbl begrenst de luchtvolumestroom van een woning; die wordt met een blowerdoortest volgens NEN-EN-ISO 9972 gemeten.

**Kruipruimte.** De Nederlandse kruipruimte bestaat in het Amerikaanse model nauwelijks. Isoleren gebeurt hier tussen de vloerbalken, aan de onderkant van de vloerplaat, of als bodemisolatie op het zand met korrels of kussens. Nat, koud en slecht geventileerd: los eerst het vocht op, isoleer daarna.

---

## Veelgestelde vragen

### Hoe reken ik een R-waarde om naar een Rc-waarde?

Deel door 5,678. R-38 is Rc 6,7 m²K/W, R-49 is Rc 8,6. De andere kant op vermenigvuldigt u met 5,678. Let erop dat een Amerikaanse R-waarde meestal de waarde van het materiaal is, terwijl een Bbl-eis over de hele constructie gaat.

### Hoeveel isolatie heb ik nodig om aan het Bbl te voldoen?

Voor nieuwbouw: Rc 3,7 voor de vloer, 4,7 voor de gevel en 6,3 voor het dak. Met glaswol van lambda 0,035 komt dat neer op ongeveer 130 mm, 165 mm en 220 mm netto isolatiedikte, en met PIR van lambda 0,022 op circa 82 mm, 104 mm en 139 mm. Bij bestaande bouw geldt een lager verbouwniveau, maar de energieprestatie van de woning als geheel bepaalt of het plan sluit.

### Mag ik nieuwe isolatie over de oude leggen?

Ja, mits de bestaande laag droog en onbeschadigd is. Gebruik voor de tweede laag **onbeklede** dekens, zonder dampremmende cachering, zodat er geen dampdichte laag midden in het pakket komt te zitten. Leg de nieuwe laag kruislings over de oude om de naden en het regelwerk af te dekken.

### Waarom haal ik de berekende Rc-waarde niet in de praktijk?

Door koudebruggen en onvolkomenheden. Regelwerk, ankers, aansluitingen bij dakvoet en kozijn, en luchtstroming langs slecht sluitende dekens verlagen de effectieve waarde. Een deken die wordt samengeperst om in een te dunne holte te passen, verliest een deel van zijn weerstand: de stilstaande lucht die het werk doet, wordt eruit gedrukt.

### Waarom vraagt Nederland minder dakisolatie dan de Amerikaanse code?

Omdat de systematiek anders is. De IECC schrijft per klimaatzone voorschrijvend een R-waarde per bouwdeel voor. Het Bbl combineert minimum-Rc-waarden per bouwdeel met een prestatie-eis voor het hele gebouw via BENG. Een ontwerper mag een deel van de gevraagde prestatie halen met betere kozijnen, een efficiëntere installatie of hernieuwbare energie op eigen terrein.
