## PU-Ortschaum berechnen — Board Feet, Kosten und Bauphysik

Der Rechner ermittelt das Schaumvolumen in **Board Feet**, den erreichten R-Wert, den Fassbedarf und die Kosten. Er arbeitet metrisch und imperial – Sie können jederzeit umschalten.

Grundlage sind die US-Regelwerke **IECC 2021 und IRC 2021**; Dampfdiffusion wird nach **ASTM E96** in US-perm bewertet. In Deutschland gelten stattdessen **DIN 4108-2 und 4108-3** sowie das **GEG**, und Sprühschaum im Dachaufbau braucht einen bauaufsichtlichen Verwendbarkeitsnachweis. Der Rechner liefert Mengen und Kosten auf US-Basis, keinen Nachweis nach GEG.

---

## 1. Das Board Foot

```
1 Board Foot = 1 sq ft Fläche × 1 Zoll Dicke
             = 144 in³ = 1/12 ft³
             = 0,00236 m³
1 m³         = 423,8 Board Feet
```

Chemikalie und Angebote werden im Board Foot abgerechnet, die Verarbeitungsleistung dagegen pro Quadratmeter Fläche. Das ist der häufigste Fehler beim Angebotsvergleich.

```
Board Feet roh       = Fläche (sq ft) × Dicke (Zoll)
Board Feet bestellen = Board Feet roh × (1 + Overspray % ÷ 100)
Volumen (m³)         = Fläche (m²) × Dicke (m)
```

Zuschlag: **10 %** auf glatten, durchgehenden Flächen, **15 %** in Gefachen mit Ständerwerk, weil dort mehr Nachschnitt anfällt.

---

## 2. Rechenbeispiel: unbelüftetes Dach, 92,9 m², 8,9 cm geschlossenzellig

* **Fläche:** 92,9 m² (1.000 sq ft)
* **Dicke:** 8,9 cm (3,5 Zoll)
* **Board Feet roh:** 1.000 × 3,5 = **3.500 bd ft** = 8,26 m³
* **Mit 10 % Overspray:** 3.500 × 1,10 = **3.850 bd ft** = 9,09 m³
* **Erreichter R-Wert:** 3,5 Zoll × R-6,7 je Zoll = **R-23,5** = 4,13 m²K/W, entspricht U ≈ 0,24 W/m²K für die Schaumlage allein
* **Fasssätze:** ein 55-Gallonen-Satz (208 l A/B) liefert etwa 4.500 bd ft geschlossenzellig → 3.850 ÷ 4.500 = **1 Satz**
* **Chemikalie** bei 1,35 USD/bd ft: 3.850 × 1,35 = **5.197,50 USD**
* **Verarbeitung** bei 1,50 USD/sq ft: 1.000 × 1,50 = **1.500,00 USD** – bezogen auf die Fläche, nicht auf den Overspray
* **Summe:** **6.697,50 USD**

Achten Sie darauf: 4,13 m²K/W reichen für ein deutsches Neubaudach nicht aus. Rechnerisch bräuchten Sie bei λ = 0,022 W/mK rund **16 cm** Schaum, um auf U ≈ 0,14 W/m²K zu kommen (0,022 ÷ 0,16 = 0,138).

---

## 3. Offenzellig gegen geschlossenzellig

| Eigenschaft | offenzellig (0,5 lb) | geschlossenzellig (2,0 lb) |
|---|---|---|
| **Rohdichte** | 8 kg/m³ (0,5 lb/ft³) | 32 kg/m³ (2,0 lb/ft³) |
| **R-Wert je Zoll** | **R-3,6 bis 3,8** | **R-6,5 bis 7,0** |
| **λ (W/mK)** | 0,038–0,040 | 0,021–0,022 |
| **Zellstruktur** | offene, flexible Poren | dichte, gasgefüllte Zellen |
| **Dampfdurchlass (ASTM E96)** | > 10 perm, sd < 0,35 m | 0,1–1,0 perm ab 3,8 cm, sd ≈ 3,5–35 m |
| **Luftdicht ab** | 8,9 cm (3,5 Zoll) | 2,5 cm (1,0 Zoll) |
| **Wasseraufnahme** | saugt Wasser wie ein Schwamm | hydrophob, hochwasserfest |
| **Aussteifung** | flexibel, folgt dem Holz | erhöht die Scheibensteifigkeit deutlich |
| **Expansion** | rund 100-fach | rund 30- bis 40-fach |
| **Schallabsorption (NRC)** | **0,70–0,75** | **0,20–0,25** |
| **Ausbeute 55-gal-Satz** | 16.000–20.000 bd ft (37,8–47,2 m³) | 4.000–5.000 bd ft (9,4–11,8 m³) |
| **Materialkosten** | 0,45–0,75 USD/bd ft | 1,25–2,00 USD/bd ft |
| **Einsatz** | Innenwand, Sparrenlage im Trockenen | Außenwand, Keller, Metallbau, Dach |

Die Ausbeute ist der Kern der Kostenfrage: offenzelliger Schaum liefert aus demselben Fasssatz das Vier- bis Fünffache an Board Feet, hat aber nur etwa den halben R-Wert je Zentimeter.

---

## 4. Kosten und Preisstruktur

* **Chemikalie:** 0,45–0,75 USD/bd ft offenzellig, 1,25–2,00 USD/bd ft geschlossenzellig. Skaliert mit der Dicke und enthält den Overspray-Zuschlag.
* **Verarbeitung:** 1,00–2,50 USD/sq ft für Anfahrt, Abkleben, Rüsten und Sprühen. Bezogen auf die behandelte Fläche.
* **Gesamt eingebaut:** geschlossenzellig 2,25–3,50 USD/bd ft, offenzellig 1,20–1,80 USD/bd ft.

| Anwendung | Fläche | Gesamtkosten (USD) |
|---|---|---|
| Deckenauflager im Keller abdichten | 9–23 m² | 600–1.400 |
| Kriechkeller-Decke, geschlossenzellig | 74–139 m² | 2.400–5.200 |
| Außenwände Ständerwerk, ganzes Haus | 111–204 m² | 3.500–8.200 |
| Dachschräge unbelüftet, offenzellig | 93–186 m² | 3.800–7.600 |
| Dachschräge unbelüftet, geschlossenzellig | 93–186 m² | 6.500–14.000 |
| Halle / Metallbau, 5 cm geschlossenzellig | 223–465 m² | 6.800–17.500 |

---

## 5. Kleingebinde gegen Profilanlage

**Einweg-Druckgebinde (200 und 600 bd ft)** eignen sich für Deckenauflager, Fensterlaibungen, kleine Kriechkeller. Entscheidend: die Behälter müssen auf **24–29 °C (75–85 °F)** vorgewärmt sein. Kalte Gebinde fördern außerhalb des Mischverhältnisses, der Schaum bleibt klebrig und expandiert nicht.

Ab etwa **800 Board Feet** ist die Profilanlage günstiger und sicherer:

1. **Hochdruck-Dosieranlage:** heizt die Komponenten auf rund 54 °C (130 °F) bei etwa 103 bar (1.500 psi) – nur so stimmt das Mischverhältnis und die Ausbeute.
2. **Atemschutz:** die Vernebelung von Isocyanat (MDI) verlangt Vollmaske mit Fremdluftzufuhr, nicht Filter.
3. **Ausbeutegarantie:** der Verarbeiter schuldet die Schichtdicke, nicht das Fass.

---

## 6. Brandschutz und Dampfbremse nach US-Code

**IRC R316.4 und IBC 2603.4:** Ortschaum muss vom Innenraum durch eine **15-Minuten-Brandschutzbekleidung** getrennt sein – üblicherweise **12,5 mm Gipskarton** oder eine geprüfte Dämmschichtbildner-Beschichtung (Prüfung nach NFPA 286 oder UL 1715).

* **Wohnräume und ausgebaute Keller:** 12,5 mm Gipskarton genügt.
* **Nicht ausgebauter Dachraum, Kriechkeller:** hier lässt der Code nach IRC R316.5.3 eine **Entflammungsbarriere** zu; eine zugelassene Beschichtung (rund 0,65 USD/sq ft) erfüllt die Anforderung ohne Beplankung.

**Feuchteschutz:** Geschlossenzelliger Schaum ab **3,8–5,0 cm (1,5–2,0 Zoll)** erreicht 0,1–1,0 perm und wirkt selbst als Dampfbremse – eine zusätzliche PE-Folie entfällt und wäre als zweite Sperre schädlich. Offenzelliger Schaum ist dampfoffen (> 10 perm) und braucht in kalten Klimazonen eine separate Dampfbremse.

---

## 7. Flash-and-Batt

Die Mischbauweise kombiniert die Luftdichtheit des Schaums mit dem Preis von Mineralwolle:

1. **Flash:** 2,5–5,0 cm geschlossenzelliger Schaum direkt auf die äußere Beplankung. Dichtet, wirkt als Dampfbremse und hebt die Temperatur der kondensationsgefährdeten Ebene.
2. **Batt:** Restgefach mit Glas- oder Steinwolle füllen.
3. **Kondensationsregel** (IRC 2021 Tabelle R702.7.1): in kalten Klimazonen muss die Schaumlage **40–50 %** des Gesamt-R-Werts der Konstruktion liefern, damit die Grenzschicht über dem Raumtaupunkt bleibt – etwa R-7,5 Schaum plus R-13 Wolle in Zone 5.

---

## Häufige Fragen

### Wie viele Board Feet brauche ich?

Fläche in sq ft mit der Dicke in Zoll multiplizieren, dann 10 % auf glatten Flächen bzw. 15 % im Gefach zuschlagen. 1.000 sq ft (92,9 m²) mit 3,5 Zoll ergeben 1.000 × 3,5 × 1,10 = **3.850 Board Feet** = 9,09 m³.

### Was ist der Unterschied zwischen Board Feet und Quadratmetern?

Quadratmeter sind Fläche, Board Feet sind Volumen. 92,9 m² mit 8,9 cm Dicke sind 8,26 m³ bzw. 3.500 Board Feet roh. Ein Angebot pro Board Foot ist mit einem Angebot pro Quadratmeter erst vergleichbar, wenn die Schichtdicke feststeht.

### Wie lange muss nach dem Sprühen gelüftet werden?

Professioneller Zweikomponentenschaum ist innerhalb von Sekunden zu 99 % ausreagiert. OSHA und EPA empfehlen dennoch **24 Stunden** durchgehende Zwangslüftung bis zur Wiederbelegung des Gebäudes.

### Darf man Ortschaum direkt auf die Dachschalung sprühen?

Im US-Code ja – das ergibt ein unbelüftetes, warmes Dach und holt die Lüftungsleitungen in die thermische Hülle. In Deutschland ist das bauphysikalisch heikel: die Dachhaut kann nicht mehr nach innen austrocknen, und die Sanierbarkeit leidet. Klären Sie das vorab mit einem Bauphysiker.

### Lohnt sich das DIY-Set?

Bis etwa 800 Board Feet ja. Darüber ist der Board-Foot-Preis der Kleingebinde deutlich höher als ein Verarbeiterangebot – und ohne Fremdluft-Atemschutz ist Flächensprühen ohnehin nicht zulässig.
