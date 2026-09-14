## Trap berekenen: optrede, aantrede en de maten uit het Bbl

Met deze calculator bepaalt u de opbouw van een rechte steek: u geeft de verdiepingshoogte en de beschikbare lengte op, en het gereedschap rekent het aantal optreden uit, de hoogte per trede, de aantrede, de totale trapgatlengte, de trapboomlengte en de loophoek.

**Let op de ijking.** Het rekenhart toetst aan de Amerikaanse **IRC R311.7** voor woningen en **IBC 1011** voor utiliteitsbouw: maximale optrede 197 mm (7¾ in), minimale aantrede 254 mm (10 in), minimale breedte 914 mm (36 in), vrije hoogte 2.032 mm (80 in). In Nederland gelden de maten uit het **Besluit bouwwerken leefomgeving (Bbl)**, en die zijn wezenlijk anders: steiler toegestaan, smaller toegestaan, maar met een grotere vrije hoogte. **Een trap die in Nederland volledig aan het Bbl voldoet, wordt door dit gereedschap afgekeurd** — dat is geen fout in uw invoer, maar het verschil tussen twee stelsels.

---

## Rekenstappen

```
1. aantal optreden  = verdiepingshoogte / maximale optrede   (afronden naar boven)
2. optrede          = verdiepingshoogte / aantal optreden      (mm)
3. aantal aantreden = aantal optreden - 1                      (rechte steek op de vloer)
4. trapgatlengte    = aantal aantreden x aantrede              (mm)
5. loopcontrole     = 2 x optrede + aantrede                   (mm)
6. trapboomlengte   = wortel(hoogte x hoogte + lengte x lengte)
7. loophoek         = arctangens(optrede / aantrede)           (graden)
```

Meet de **verdiepingshoogte** van bovenkant vloer tot bovenkant vloer, inclusief de dekvloer die er nog op komt. Wie de dikte van de afwerkvloer vergeet, houdt boven of onder één afwijkende trede over — de klassieke struikelvalkuil, en in het Amerikaanse model zelfs een expliciet verboden situatie.

---

## De maten naast elkaar

| Maat | Bbl nieuwbouw, woonfunctie | Bbl bestaande bouw | IRC, VS woningbouw | IBC, VS utiliteit |
|---|---|---|---|---|
| **Maximale optrede** | 188 mm | 220 mm | 197 mm (7¾ in) | 178 mm (7 in) |
| **Minimale aantrede** | 220 mm | 130 mm | 254 mm (10 in) | 279 mm (11 in) |
| **Aantrede smalste punt** | 50 mm | — | 152 mm (6 in) | 152 mm |
| **Minimale breedte** | 800 mm | 700 mm | 914 mm (36 in) | 914 – 1.118 mm |
| **Vrije hoogte** | 2.300 mm | 1.900 mm | 2.032 mm (80 in) | 2.032 mm |
| **Leuning** | vanaf 1,0 m hoogteverschil | idem | vanaf 4 optreden | altijd |

Twee getallen verdienen aandacht. De **aantrede van 50 mm op het smalste punt** is de reden dat kwartslag- en halfslagtrappen met wigvormige treden in Nederland normaal zijn en in Amerikaanse woningbouw nauwelijks voorkomen: de IRC vraagt daar 152 mm. En de **vrije hoogte van 2.300 mm** is in Nederland ruimer dan de Amerikaanse 2.032 mm, wat bij een dakopbouw of een zoldertrap juist de knellende eis blijkt.

De Nederlandse minimumtrap van 188 bij 220 mm heeft een loophoek van **40,5 graden**. Een IRC-trap van 197 bij 254 mm komt op 37,8 graden, en de als comfortabel beschouwde 178 bij 279 mm op 32,5 graden. De loopcontrole 2 x optrede + aantrede geeft voor de Nederlandse trap 596 mm, tegen de 610 tot 635 mm (24 – 25 in) die de Amerikaanse vuistregel nastreeft. Nederlandse trappen zijn dus meetbaar steiler, en dat is een bewuste keuze: het woonoppervlak is duur en het trapgat kost vloer.

---

## Uitgewerkt voorbeeld: verdiepingshoogte 2.800 mm

* **Aantal optreden:** 2.800 / 188 = 14,9 → **15 optreden**
* **Optrede:** 2.800 / 15 = **186,7 mm**
* **Aantreden:** 15 − 1 = **14**
* **Trapgatlengte bij aantrede 220 mm:** 14 x 220 = **3.080 mm (10 ft 1 in)**
* **Loopcontrole:** 2 x 186,7 + 220 = **593 mm**
* **Trapboomlengte:** wortel(2.800² + 3.080²) = **4.163 mm**
* **Loophoek:** 40,3 graden

Die 3,08 m rechte steek is precies het probleem. In een Nederlandse woning is de beschikbare trapgatlengte doorgaans 2,40 tot 2,70 m. Daarom wordt de trap met een kwartslag onder of boven uitgevoerd, of met een aantal wigvormige treden — en dat mag hier, dankzij die 50 mm op het smalste punt. Zou u dezelfde trap volgens de IRC uitvoeren met een aantrede van 254 mm, dan hebt u 15 x 197 = 16 optreden en 15 x 254 = **3.810 mm** trapgat nodig: ruim 70 cm meer vloer, per verdieping.

---

## Nederlandse aandachtspunten

**Verdiepingshoogte en het aantal treden.** Nederlandse woningen hebben een verdiepingshoogte van 2,60 tot 3,00 m, wat bijna altijd op **14 tot 16 optreden** uitkomt. Standaard prefabtrappen worden op die reeks geleverd; wijkt uw hoogte af, dan gaat het naar maatwerk. In een oud pand met een verdiepingshoogte van 3,40 m of meer loopt u tegen 18 tot 19 optreden aan en is een trap met tussenbordes vaak de enige nette oplossing.

**Vaste trap of vlizotrap.** Het Bbl eist een **vaste trap** naar elk verblijfsgebied. Naar een ruimte die alleen bergruimte is, mag een vlizotrap of een schuifladder. Zodra u de zolder als slaapkamer gaat gebruiken, verandert de status van de ruimte en daarmee de eis aan de trap — dat is bij dakopbouwen en zolderverbouwingen het meest gemiste punt, en de calculator ziet het niet.

**Prefab en materiaal.** De Nederlandse standaard is een prefab vurenhouten trap met trapbomen van 38 tot 40 mm dik en een breedte van 850 tot 900 mm, dicht of open uitgevoerd, met een leuning op 850 mm gemeten vanaf de voorkant van de trede. Dat is een andere constructie dan de Amerikaanse stringer uit 2x12 hout met uitgezaagde treden waar dit gereedschap van uitgaat: bij een Nederlandse trapboom worden de treden ingekast en ingelijmd, niet op uitzaagsel gelegd. In utiliteitsbouw en bij woningen met een betonvloer is een prefab betontrap gangbaar.

**Leuning en vloerafscheiding.** Vanaf een hoogteverschil van 1,0 m is een leuning verplicht, en rond het trapgat een vloerafscheiding van ten minste 1,0 m hoog. Zit er een verblijfsruimte onder waar kinderen komen, dan geldt bovendien een beperking op de doorklimbaarheid en op openingen in de afscheiding. Een open trap met brede spleten tussen de treden is niet automatisch toegestaan.

**Bestaande bouw is geen vrijbrief.** De kolom bestaande bouw uit de tabel — optrede tot 220 mm, aantrede vanaf 130 mm — is het niveau waarop een bestaande trap mag blijven liggen, niet het niveau waarop u een nieuwe trap mag bouwen. Vervangt u de trap, dan geldt het verbouwniveau en in de praktijk het nieuwbouwniveau, tenzij de constructie dat aantoonbaar onmogelijk maakt.

---

## Veelgestelde vragen

### Hoeveel treden heeft mijn trap nodig?

Deel de verdiepingshoogte door de maximale optrede en rond naar boven af. Bij 2.800 mm en de Bbl-grens van 188 mm zijn dat 15 optreden van 186,7 mm. Alle optreden moeten gelijk zijn; een afwijkende eerste of laatste trede is de belangrijkste oorzaak van struikelen op een trap.

### Wat is het verschil tussen optrede en aantrede?

De **optrede** is de hoogte van één trede, de **aantrede** de diepte waarop u uw voet zet. Het aantal aantreden is bij een rechte steek altijd één minder dan het aantal optreden, omdat de bovenste optrede op de vloer uitkomt. In het Amerikaanse model heten die maten riser en tread, en wordt de tread zonder de neus gemeten.

### Waarom keurt de calculator mijn Nederlandse trap af?

Omdat hij aan de IRC toetst en die een aantrede van minimaal 254 mm vraagt. Het Bbl staat 220 mm toe, en op het smalste punt van een verdreven trede zelfs 50 mm. Een Bbl-conforme trap is dus steiler dan de Amerikaanse code toelaat. Wilt u de uitkomst als controle gebruiken, vergelijk dan met de Bbl-kolom uit de tabel hierboven en niet met de melding van het gereedschap.

### Hoeveel ruimte kost een trap in de vloer?

De trapgatlengte is het aantal aantreden maal de aantrede: bij 14 aantreden van 220 mm is dat 3,08 m. Voor een kwartslagtrap komt u met circa 2,40 m aan trapgat toe, want de draai vangt een deel van de hoogte op boven hetzelfde grondvlak. Reken daarbij altijd de vrije hoogte van 2.300 mm na, gemeten haaks op de looplijn.

### Moet mijn zoldertrap ook aan het Bbl voldoen?

Dat hangt af van de functie van de ruimte. Naar bergruimte volstaat een vlizotrap; naar een verblijfsgebied — een slaapkamer, een werkkamer — moet er een vaste trap zijn die aan de maten voor nieuwbouw of aan het verbouwniveau voldoet. Ook bij vergunningvrij bouwen blijven de eisen aan de trap gelden.
