## Noodstroom & Thuisbatterij Calculator: Capaciteit, Omvormer en Autonomie

Deze rekenmodule voor **noodstroomvoorzieningen (UPS) en thuisbatterijen** berekent de vereiste batterijcapaciteit, het omvormervermogen en de benodigde zonnepanelen om essentiële apparaten van stroom te voorzien tijdens netuitval.

De calculator berekent:

- **Continu stroomverbruik (W)** en het dagelijkse energieverbruik (Wh of kWh)
- **Aanbevolen bruto batterijcapaciteit** in wattuur (Wh) en ampère-uur (Ah)
- **Aanbevolen omvormervermogen** inclusief noodzakelijke piek- en aanloopreserve
- **Geschatte autonomie (overbruggingstijd)** bij constante belasting
- **Zonne-energie herlaadvermogen (Wp)** voor dagelijkse zelfvoorziening
- **Kostenindicatie** op basis van batterijchemie (LiFePO₄ versus loodzuur / AGM)

---

## 1. Belangrijkste componenten van een noodstroomsysteem

Een professionele noodstroominstallatie bestaat uit vier samenwerkende elementen:

| Component | Functie | Belangrijkste selectiecriterium |
|---|---|---|
| **Batterijbank** | Slaat elektrische energie op in gelijkstroom | Bruikbare capaciteit (Wh / Ah) en systeemspanning (12V, 24V of 48V) |
| **Omvormer / Lader** | Zet gelijkstroom (DC) om in 230V wisselstroom (AC) | Continu vermogen en opvang van piekstromen |
| **Laadregelaar** | Regelt het laden via aangesloten zonnepanelen | MPPT-technologie voor maximaal rendement |
| **Omschakelautomaat (ATS)** | Schakelt bij stroomuitval automatisch over naar batterij | Schakeltijd onder de 20 milliseconden |

---

## 2. Ontladingsdiepte (DoD) en levensduur

De **ontladingsdiepte (Depth of Discharge, DoD)** geeft het percentage van de nominale capaciteit aan dat veilig kan worden verbruikt zonder de batterijcellen voortijdig te beschadigen.

```
Bruikbare energie (Wh) = Nominale capaciteit (Wh) x (DoD / 100)
```

| Batterijtechnologie | Aanbevolen DoD | Aantal laadcycli | Laadefficiëntie |
|---|---|---|---|
| **LiFePO₄ (Lithiumijzerfosfaat)** | 80% – 90% | 3.500 – 6.000 cycli (10–15 jaar) | 95% – 98% |
| **Lithium-ion (NMC)** | 80% | 1.500 – 2.500 cycli | 92% – 95% |
| **Lood-AGM (onderhoudsvrij)** | 50% | 400 – 600 cycli (2–4 jaar) | 80% – 85% |
| **Natte loodzuuraccu** | 50% | 300 – 500 cycli | 75% – 82% |

> **Praktijkadvies:** **LiFePO₄-accu's** leveren bij gelijke nominale capaciteit bijna het dubbele aan bruikbare energie ten opzichte van traditionele loodaccu's en gaan tot tien keer langer mee, waardoor de kosten per kilowattuur aanzienlijk lager uitvallen.

---

## 3. Berekeningsformules stapsgewijs

```
1. Totale energiebehoefte (Wh) = Continu vermogen (W) x Gewenste autonomie (h)

2. Bruto batterijcapaciteit (Wh) = Energiebehoefte (Wh) / (Omvormerrendement x DoD)

3. Capaciteit in ampere-uur (Ah) = Bruto capaciteit (Wh) / Systeemspanning (V)

4. Minimaal omvormervermogen (W) = Continu vermogen (W) x 1,25

5. Benodigd zonnevermogen (Wp) = Dagelijks verbruik (Wh) / (Volle zonuren x 0,77)
```

### Rekenvoorbeeld: woonhuisbeveiliging gedurende 8 uur stroomuitval

- **Kritische apparaten:** Koelkast (120W), router en netwerkapparatuur (50W), ledverlichting (60W), laptop en communicatie (120W) = **350 W**
- **Gewenste autonomie:** 8 uur
- **Energiebehoefte:** 350 W × 8 h = **2.800 Wh (2,8 kWh)**
- **Configuratie met LiFePO₄ (DoD 80%) en zuivere sinusomvormer (92% rendement):**
  - Benodigde bruto capaciteit: 2.800 / (0,92 × 0,80) = **3.804 Wh (3,8 kWh)**
  - Bij 24V accuspanning: 3.804 Wh / 24V = **158,5 Ah** (standaard accupack van 24V 200Ah)
  - Aanbevolen omvormer: 350 W × 1,25 = 437,5 W (in de praktijk een zuivere sinusomvormer van minimaal 1.000W continu om de piekstroom van de koelkastcompressor soepel op te vangen)

---

## 4. Keuze systeemspanning: 12V, 24V of 48V

| Systeemspanning | Aanbevolen continu vermogen | Kabeldikte | Toepassing |
|---|---|---|---|
| **12 V** | Tot 1.000 W | Zeer dik (hoge stroomsterktes) | Campers, pleziervaart, kleine noodsets |
| **24 V** | 1.000 W tot 3.000 W | Gemiddeld | Tiny houses, tuinkantoren, werkplaatsen |
| **48 V** | Boven 3.000 W | Dun en voordelig | Woningen, grote residentiële zonne-energiesystemen |

---

## Veelgestelde vragen

### Hoeveel zonnepanelen heb ik nodig om de batterij binnen één dag volledig op te laden?
Deel het dagelijkse energieverbruik in wattuur door de gemiddelde piek-zonuren van uw locatie (in Nederland en België gemiddeld 3,5 tot 4,5 uur tijdens het voorjaar en de zomer) vermenigvuldigd met een systeemrendement van 77%. Voor 3.800 Wh per dag is ongeveer 1.150 Wp aan zonnepanelen vereist, oftewel drie moderne panelen van 400 Wp.

### Waarom is een zuivere sinusomvormer noodzakelijk?
Een zuivere sinusomvormer levert exact dezelfde stroomkwaliteit als het openbare elektriciteitsnet. Gemodificeerde sinusomvormers veroorzaken oververhitting en brommende geluiden in inductiemotoren (zoals in koelkasten en pompen) en kunnen gevoelige elektronica onherstelbaar beschadigen.

### Wat is het effect van lage temperaturen op batterijprestaties?
Lage temperaturen vertragen de chemische reacties in de cellen. Een traditionele loodzuuraccu verliest bij 0 °C tot wel 30% van zijn bruikbare capaciteit. LiFePO₄-accu's behouden uitstekende ontladingsprestaties bij kou, maar het interne batterijbeheersysteem (BMS) blokkeert het opladen onder 0 °C om onomkeerbare beschadiging van de lithiumcellen te voorkomen.
