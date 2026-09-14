## Wasserenthärtungsanlage dimensionieren — Kapazität, Salz und Durchfluss

Der Rechner bemisst eine Ionenaustauscher-Enthärtungsanlage nach den **Kapazitätsformeln der US-amerikanischen Water Quality Association (WQA)** und der Bemessungsgrundlage **NSF/ANSI 44**. Er rechnet in **Grains** und **Gallonen**, also auf US-Basis, und arbeitet metrisch und imperial – Sie können jederzeit umschalten.

In Deutschland bemessen Sie Enthärter nach **DIN EN 14743**, die Trinkwasserqualität regelt die **Trinkwasserverordnung (TrinkwV)**, und die Kapazität wird üblicherweise in **mol** oder **m³·°dH** angegeben. Die Umrechnungen stehen unten – die Physik des Ionenaustauschs ist dieselbe.

Der Rechner liefert:

- **empfohlene Kapazität** in Grains (24.000 bis 96.000 oder Doppelanlage)
- **Harzvolumen** und Behältermaße
- **täglichen Härteanfall** einschließlich Eisenzuschlag
- **Salzverbrauch** je Regeneration und pro Jahr
- **Abwassermenge** je Zyklus und pro Jahr
- **Spitzendurchfluss** und empfohlene Anschlussnennweite

---

## 1. Wasserhärte und Einheiten

```
1 GPG   = 17,118 mg/l CaCO₃
1 °dH   = 17,848 mg/l CaCO₃ = 10 mg/l CaO
1 °dH   ≈ 1,04 GPG          |    1 GPG ≈ 0,96 °dH
1 mmol/l Ca+Mg = 5,6 °dH
```

Grains per Gallon und deutscher Härtegrad liegen also praktisch bei 1:1 – ein bequemer Umstand. 25 GPG entsprechen 428 mg/l CaCO₃ und damit **24,0 °dH**.

| Härte °dH | mg/l CaCO₃ | Einstufung (Deutschland) | WQA-Einstufung |
|---|---|---|---|
| **unter 8,4** | unter 150 | **weich** (< 1,5 mmol/l) | soft bis moderately hard |
| **8,4 – 14** | 150 – 250 | **mittel** (1,5–2,5 mmol/l) | hard |
| **14 – 21** | 250 – 375 | **hart** (> 2,5 mmol/l) | very hard |
| **über 21** | über 375 | **hart**, Enthärtung meist wirtschaftlich | extremely hard |

Die deutschen Klassen weich / mittel / hart stammen aus dem Wasch- und Reinigungsmittelgesetz und sind gröber als die sechsstufige WQA-Skala im Rechner.

---

## 2. Eisen und Mangan anrechnen

Eine Standard-Härtebestimmung erfasst nur Calcium und Magnesium. Gelöstes Eisen und Mangan belegen das Harz aber ebenfalls:

```
Kompensierte Härte (GPG) = Rohhärte (GPG)
                           + Eisen (mg/l) × 4
                           + Mangan (mg/l) × 2
```

Mit dieser kompensierten Härte – nicht mit der Rohhärte – rechnet der Rechner die Kapazität und den Salzverbrauch.

**Wichtig:** Die Regel gilt nur für **gelöstes Eisen (Fe²⁺)**, also Wasser, das am Hahn klar ist und erst an der Luft braun wird. Partikuläres Eisen (Fe³⁺, direkt rostbraunes Wasser) braucht eine **Enteisenungsstufe vor** dem Enthärter, keine größere Anlage.

---

## 3. Rechenkette nach WQA

```
1. Tagesbedarf (gal)  = Personen × Bedarf je Person (Standard 75 gal)
2. Härteanfall/Tag    = Tagesbedarf × kompensierte Härte (GPG)
3. Zielkapazität      = Härteanfall/Tag × Tage bis Regeneration × (1 + Reserve ÷ 100)
4. Baugröße           = nächste Normkapazität über der Zielkapazität
```

Der Standardwert von 75 gal je Person und Tag entspricht **284 l**. Die US-EPA nennt 60–80 gal (227–303 l). **In Deutschland liegt der häusliche Verbrauch bei etwa 120–130 l je Person und Tag** – also bei weniger als der Hälfte. Setzen Sie den Wert unbedingt herunter, sonst überdimensionieren Sie die Anlage um den Faktor zwei.

Die Reserve von **20 %** verhindert Härtedurchbruch bei Spitzenlast – Besuch, Feiertage, Gartenbewässerung.

---

## 4. Rechenbeispiel: 4 Personen, 24,0 °dH, Regeneration alle 7 Tage

* **Tagesbedarf:** 4 × 75 gal = **300 gal = 1.136 l**
* **Härte:** 25 GPG = **24,0 °dH**
* **Härteanfall je Tag:** 300 × 25 = **7.500 grains** (entspricht 1,136 m³ × 24,0 = 27,3 m³·°dH)
* **Zielkapazität:** 7.500 × 7 Tage × 1,20 = **63.000 grains** (229 m³·°dH)
* **Baugröße:** nächste Normstufe **64.000 grains**
* **Harzvolumen:** 2,0 cu ft = **56,6 l**
* **Behälter:** 12″ × 52″ = **305 × 1.320 mm**
* **Tatsächliche Kapazität:** 64.000 grains = 4,15 kg CaCO₃ = **232 m³·°dH** bzw. rund 41 mol
* **Salz je Regeneration:** 56,6 l × 128 g/l = **7,26 kg**
* **Salz pro Jahr:** 7,26 × (365 ÷ 7) = **rund 379 kg** = 16 Säcke à 25 kg

Umrechnungsanker für die Kapazität: `1 m³·°dH = 275,4 grains` und `1 grain = 64,8 mg CaCO₃`.

---

## 5. Baugrößen

| Zielkapazität (grains) | Baugröße | Harz | Behälter |
|---|---|---|---|
| bis 24.000 | **24.000** | 0,75 cu ft = 21,2 l | 8″ × 44″ = 203 × 1.118 mm |
| 24.001 – 32.000 | **32.000** | 1,0 cu ft = 28,3 l | 9″ × 48″ = 229 × 1.219 mm |
| 32.001 – 40.000 | **40.000** | 1,25 cu ft = 35,4 l | 10″ × 44″ = 254 × 1.118 mm |
| 40.001 – 48.000 | **48.000** | 1,5 cu ft = 42,5 l | 10″ × 54″ = 254 × 1.372 mm |
| 48.001 – 64.000 | **64.000** | 2,0 cu ft = 56,6 l | 12″ × 52″ = 305 × 1.321 mm |
| 64.001 – 80.000 | **80.000** | 2,5 cu ft = 70,8 l | 13″ × 54″ = 330 × 1.372 mm |
| 80.001 – 96.000 | **96.000** | 3,0 cu ft = 85,0 l | 14″ × 65″ = 356 × 1.651 mm |
| über 96.000 | **Doppelanlage** im Wechselbetrieb | – | zwei Behälter, ein Solebehälter |

---

## 6. Salz und Abwasser

```
Salz je Regeneration = Harzvolumen (l) × 128 g/l        (Sparbesalzung)
Salz je Jahr         = Salz je Regeneration × 365 ÷ Tage bis Regeneration
Abwasser je Zyklus   ≈ Harzvolumen (l) × 5,3 l/l Harz
```

Die Sparbesalzung mit **128 g Salz je Liter Harz** (8 lb/cu ft) ist die WQA-Empfehlung und der Standardwert im Rechner. Die klassische Volldosierung mit 240 g/l (15 lb/cu ft) holt mehr Kapazität aus derselben Harzmenge, ist dabei aber rund 50 % salzineffizienter.

| Salzart | Reinheit | Hinweis |
|---|---|---|
| **Siedesalz-Tabletten** | über 99,6 % NaCl | Regelfall, kaum Brückenbildung |
| **Meersalz-Kristalle** | über 99,5 % NaCl | löst schneller, kann in älteren Behältern verbacken |
| **Kaliumchlorid (KCl)** | über 99 % KCl | natriumfrei, aber rund 30 % geringere Wirkung je kg und deutlich teurer |

Je Regeneration fallen bei Haushaltsanlagen etwa **130–250 l Soleabwasser** an, das in die Schmutzwasserleitung geht. Rechengrundlage sind 40 gal je cu ft Harz, also etwa 5,3 l je Liter Harz.

**Natrium beachten:** Beim Ionenaustausch wird Härte gegen Natrium getauscht. Je entferntem °dH steigt der Natriumgehalt um rund **8 mg/l**. Bei 20 °dH auf 0 enthärtet sind das etwa 160 mg/l – die TrinkwV zieht die Grenze bei **200 mg/l Natrium**. Deshalb ist die deutsche Praxis, nicht auf 0 zu enthärten, sondern im Verschnitt eine **Resthärte von etwa 8 °dH** einzustellen. Das schont Salz, Leitungsnetz und Grenzwert gleichzeitig.

---

## 7. Durchfluss und Anschluss

Die Anlage muss den Spitzendurchfluss liefern, ohne unter den Mindestbetriebsdruck von **1,7–2,1 bar (25–30 psi)** zu fallen.

| Bäder | Spitzendurchfluss | Empfohlener Anschluss |
|---|---|---|
| 1 | 7 gpm = **26 l/min** | 3/4″ (DN 20) |
| 2 | 10 gpm = **38 l/min** | 1″ (DN 25) |
| 3 | 13 gpm = **49 l/min** | 1″ (DN 25) |
| 4 | 16 gpm = **61 l/min** | 1-1/4″ (DN 32) |
| 5 und mehr | 19+ gpm = **72+ l/min** | 1-1/4″ und größer |

---

## 8. Einzel- oder Doppelanlage

**Einzelanlage** – ein Harzbehälter plus Solebehälter. Während der Regeneration (üblich 2–4 Stunden nachts) ist die Anlage außer Betrieb bzw. im Bypass. Für Haushalte mit weniger als 96.000 grains Tagesbedarf der Regelfall.

**Doppelanlage im Wechselbetrieb** – zwei Harzbehälter an einem Solebehälter. Regeneriert Behälter A, bleibt B in Betrieb: durchgehend weiches Wasser, keine Ausfallzeit. Erforderlich im Dauerbetrieb – Gastronomie, Waschanlage, Wäscherei, Praxis.

---

## Häufige Fragen

### Welche Enthärtungsanlage brauche ich für einen 4-Personen-Haushalt?

Mit dem US-Standardwert von 75 gal je Person (300 gal/Tag) und 15 GPG (14,4 °dH) ergibt sich 300 × 15 × 7 × 1,20 = **37.800 grains**, also eine 40.000-Grain-Anlage mit 35,4 l Harz. Rechnen Sie mit dem realistischen deutschen Verbrauch von 125 l je Person (132 gal/Tag), sinkt die Zielkapazität auf rund 16.600 grains – eine 24.000-Grain-Anlage genügt. Der Verbrauchswert ist der wichtigste Eingabewert überhaupt.

### Wie rechne ich °dH in GPG um?

`GPG = °dH × 1,04` und `°dH = GPG × 0,96`. Für den Kopfüberschlag können Sie beide Einheiten gleichsetzen; der Fehler liegt unter 5 %. Über mg/l: `°dH = mg/l CaCO₃ ÷ 17,85`.

### Wie viel Salz verbraucht eine Enthärtungsanlage im Jahr?

Bei 56,6 l Harz, Sparbesalzung und wöchentlicher Regeneration rund **379 kg**, also etwa 16 Säcke à 25 kg. Der Verbrauch skaliert direkt mit Harzvolumen und Regenerationshäufigkeit – eine kleinere Anlage, die doppelt so oft regeneriert, verbraucht ähnlich viel Salz.

### Wie oft soll die Anlage regenerieren?

Mengengesteuerte Anlagen regenerieren nach Verbrauch, üblich alle 3 bis 14 Tage. **Alle 7 Tage bei Sparbesalzung** ist der branchenübliche Kompromiss zwischen Salzeffizienz und gleichmäßiger Wasserqualität. Kürzere Intervalle reduzieren das Risiko eines Härtedurchbruchs, längere führen bei stehendem Wasser im Harzbett zu Hygieneproblemen.

### Sollte ich auf 0 °dH enthärten?

Nein. Vollentkalktes Wasser ist korrosiv gegenüber Metallleitungen und hebt den Natriumgehalt unnötig an. Stellen Sie im Verschnitt eine Resthärte von rund **8 °dH** ein – unterhalb der Kalkausfällungsgrenze in Boiler und Wärmetauscher, aber ohne Korrosionsrisiko.

### Was ist der Unterschied zwischen Enthärter und Filter?

Ein Enthärter tauscht Calcium, Magnesium und gelöstes Eisen gegen Natrium. Er entfernt **kein** Chlor, keine Nitrate, keine Bakterien, kein Blei und keine Partikel. Dafür brauchen Sie einen Aktivkohle-, Umkehrosmose- oder UV-Baustein. Übliche Reihenfolge: Feinfilter, dann Enthärter, dann bei Bedarf Aktivkohle.
