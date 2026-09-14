## Treppe berechnen — Steigung, Auftritt, Wange und Kopfhöhe

Der Rechner ermittelt aus dem Geschossmaß die Steigungsanzahl, das exakte Steigungsmaß, den Auftritt, die Wangenlänge, den Neigungswinkel, die lichte Kopfhöhe, die Handlauflänge und die Stabanzahl. Er arbeitet metrisch und imperial – Sie können jederzeit umschalten.

Die Grenzwerte im Rechner sind die **US-Vorgaben nach IRC §R311.7** (Wohnbau) und **IBC §1011** (Nichtwohnbau). In Deutschland gilt stattdessen **DIN 18065** in Verbindung mit der jeweiligen Landesbauordnung; die dortigen Grenzwerte für Steigung, Auftritt und Laufbreite hängen von der Gebäudeklasse ab und sind bei mehr als zwei Wohnungen deutlich strenger als im Wohnhaus. Nutzen Sie den Rechner für die Geometrie und den Zuschnitt – die zulässigen Maße prüfen Sie an DIN 18065 und Ihrer Landesbauordnung.

---

## Begriffe

| Begriff | Bedeutung |
|---|---|
| **Geschosshöhe** | Gesamtes Höhenmaß von Fertigboden unten bis Fertigboden oben. Das einzige Maß, das Sie aufnehmen müssen. |
| **Steigung** | Höhe einer einzelnen Stufe (Setzstufe). |
| **Auftritt** | Waagerechte Trittfläche einer Stufe. |
| **Vorderkantenüberstand** | Überstand der Trittstufe über die Setzstufe, üblich 19–32 mm (¾–1¼ in). |
| **Wange** | Tragendes Diagonalholz, im US-Bau ein eingeschnittenes 2×12 (38 × 286 mm). |
| **Restquerschnitt** | Nach dem Einschneiden verbleibende Holzhöhe der Wange, mindestens 89 mm (3,5 in) nach IRC §R311.7.10. |
| **Neigungswinkel** | Winkel der Wange zur Waagerechten. Komfortbereich 30° bis 37°. |
| **Lauflänge** | Waagerechte Gesamtstrecke: Auftritt × Anzahl der Auftritte. |
| **Kopfhöhe** | Lichtes Maß senkrecht von der Stufenvorderkante zum Bauteil darüber. |
| **Schrittmaßregel** | 2 × Steigung + Auftritt. US-Zielbereich 610–635 mm (24–25 in), deutsche Baupraxis 59–65 cm mit 63 cm als Optimum. |

---

## 1. Geschosshöhe aufnehmen

```
Geschosshöhe = Fertigboden oben − Fertigboden unten
```

Von **Fertigboden zu Fertigboden** messen, nicht von Rohbeton zu Rohbeton. Sonst summiert sich die Aufbaudicke beider Geschosse in die letzte Stufe – der klassische Grund für eine abweichende Antrittsstufe.

* **Beispiel:** Kellertreppe mit 266,7 cm (105 in) Geschosshöhe, Vinyl-Designboden auf beiden Ebenen.

---

## 2. Anzahl der Steigungen

```
Anzahl Steigungen = Geschosshöhe ÷ Ziel-Steigungsmaß   (auf ganze Zahl runden)
```

* **Beispiel:** 266,7 ÷ 19,05 cm = **14 Steigungen**

Alle Steigungen eines Laufs müssen gleich hoch sein – IRC §R311.7.5.1 lässt maximal 9,5 mm (3/8 in) Abweichung im gesamten Lauf zu. Eine einzelne abweichende Stufe ist die häufigste Sturzursache an Treppen.

---

## 3. Exaktes Steigungsmaß

```
Steigungsmaß = Geschosshöhe ÷ Anzahl Steigungen
```

* **Beispiel:** 266,7 ÷ 14 = **19,05 cm (7,5 in)**

| Regelwerk | max. Steigung | min. Auftritt | Anwendung |
|---|---|---|---|
| **IRC §R311.7** (Wohnbau US) | 197 mm (7,75 in) | 254 mm (10,0 in) | Einfamilienhaus, Reihenhaus |
| **IBC §1011.5** (Nichtwohnbau US) | 178 mm (7,0 in) | 279 mm (11,0 in) | Büro, Handel, Hotel, Schule |
| **OSHA 1910.25** (Industrie US) | 241 mm (9,5 in) | 241 mm (9,5 in) | Industrietreppen, Steigleitern |

DIN 18065 liegt beim Auftritt tendenziell großzügiger und bei der Steigung strenger als der IRC – eine nach IRC gerade noch zulässige Treppe mit 197 mm Steigung ist in Deutschland als notwendige Treppe im Mehrfamilienhaus nicht zulässig.

---

## 4. Auftritte und Lauflänge

```
Anzahl Auftritte = Anzahl Steigungen − 1
Lauflänge        = Anzahl Auftritte × Auftritt
```

Der obere Fertigboden übernimmt die Funktion der letzten Trittstufe – deshalb ein Auftritt weniger als Steigungen.

* **Beispiel:** 13 Auftritte × 26,67 cm = **346,7 cm (136,5 in)** Lauflänge

---

## 5. Wangenlänge

```
Wangenlänge = √(Geschosshöhe² + Lauflänge²)
```

* **Beispiel:** √(266,7² + 346,7²) = √(71.129 + 120.201) = √191.330 = **437,4 cm (172,2 in)**
* **Holzlänge:** nächste Standardlänge über 4,37 m, im US-Handel 2×12 × 16 ft

Der **Restquerschnitt** nach dem Einschneiden darf 89 mm nicht unterschreiten. Bei steilen Treppen mit kurzem Auftritt ist das die kritische Größe – hier reißen Wangen.

---

## 6. Neigungswinkel und Schrittmaß

```
Neigungswinkel = arctan(Steigung ÷ Auftritt)
Schrittmaß     = 2 × Steigung + Auftritt
```

* **Beispiel Winkel:** arctan(19,05 ÷ 26,67) = **35,5°**
* **Beispiel Schrittmaß:** 2 × 19,05 + 26,67 = **64,8 cm (25,5 in)**

| Winkelbereich | Bewertung | Anwendung |
|---|---|---|
| **unter 25°** | sehr flach, rampenartig | Rampen, repräsentative Freitreppen |
| **30–37°** | **Komfortbereich** | Wohn- und Bürotreppen |
| **37–42°** | merklich steil | Kellertreppe, Terrassentreppe |
| **über 42°** | steil | Speichertreppe, Wechselstufentreppe |

Das Beispiel liegt mit 64,8 cm am oberen Rand der deutschen Schrittmaßspanne. Ein Auftritt von 28 cm bringt es auf 66,1 cm – dann stimmt der Winkel (34,2°), aber die Lauflänge wächst auf 3,64 m.

---

## 7. Kopfhöhe und Deckenöffnung

IRC §R311.7.2 fordert mindestens **203 cm (80 in)** lichte Kopfhöhe, gemessen senkrecht von jeder Stufenvorderkante. DIN 18065 fordert in Deutschland üblicherweise 2,00 m – praktisch derselbe Wert.

```
Mindest-Öffnungslänge = Lauflänge − ((Geschosshöhe − Kopfhöhe − Deckendicke) ÷ tan(Neigungswinkel))
```

Die Formel liefert, wie weit die Deckenöffnung von der oberen Absturzkante zurückgesetzt beginnen muss, damit keine Stufenvorderkante die Kopfhöhe unterschreitet.

---

## 8. Handlauf und Geländerstäbe

**Handlauf (IRC §R311.7.8)**

* erforderlich ab **4 Steigungen**
* Griffdurchmesser 32–51 mm (1¼–2 in) bei rundem Querschnitt
* Höhe **86–97 cm (34–38 in)** über der Stufenvorderkante; in Deutschland üblich 90 cm
* `Handlauflänge ≈ Wangenlänge + 30 cm` für die waagerechten Ausläufe oben und unten

**Geländerstäbe (IRC §R312.1.3)**

* eine Kugel von **102 mm (4 in)** darf nicht durchtreten – Kinderkopfsicherung. In Deutschland gelten je nach Landesbauordnung meist 12 cm.
* `Stäbe je Auftritt = Auftritt ÷ 102 mm` (aufrunden)
* `Stäbe gesamt = Stäbe je Auftritt × Anzahl Auftritte`

---

## Rechenbeispiel: Kellertreppe 266,7 cm, 91 cm Laufbreite

| Größe | Rechnung | Ergebnis |
|---|---|---|
| **Steigungen** | 266,7 ÷ 19,05 | **14** |
| **Steigungsmaß** | 266,7 ÷ 14 | **19,05 cm (7,5 in)** |
| **Auftritte** | 14 − 1 | **13** |
| **Auftritt** | gewählt | **26,67 cm (10,5 in)** |
| **Lauflänge** | 13 × 26,67 | **346,7 cm (11,4 ft)** |
| **Wangenlänge** | √(266,7² + 346,7²) | **437,4 cm (14,35 ft)** |
| **Wangenanzahl** | 91 cm Laufbreite, Wangenabstand max. 40,6 cm (16 in) a. M. | **3 Wangen** |
| **Neigungswinkel** | arctan(19,05 ÷ 26,67) | **35,5°** |
| **Schrittmaß** | 2 × 19,05 + 26,67 | **64,8 cm** |
| **Deckenöffnung** | 346,7 − ((266,7 − 203 − 26,67) ÷ tan 35,5°) | **rund 295 cm** |
| **Handlauflänge** | 437,4 + 30 | **rund 4,67 m** |
| **Geländerstäbe** | 3 je Auftritt × 13 | **39 Stäbe** |

---

## Häufige Fragen

### Wie viele Stufen brauche ich bei 2,60 m Geschosshöhe?

Bei 260 cm und einem Ziel-Steigungsmaß von 18 cm ergeben sich 14,4 → **14 Steigungen** mit exakt 18,57 cm. Mit 13 Auftritten à 27 cm sind das 3,51 m Lauflänge und ein Winkel von 34,5°. Prüfen Sie, ob die Lauflänge in den Treppenraum passt, bevor Sie das Steigungsmaß festlegen.

### Was ist das ideale Steigungsmaß?

Für Wohntreppen **17–19 cm** bei 26–29 cm Auftritt. Damit landet das Schrittmaß bei 60–65 cm und der Winkel im Komfortbereich um 33°. Der IRC-Höchstwert von 19,7 cm ist gehbar, aber im täglichen Betrieb ermüdend.

### Wie berechne ich die Wange für eine Terrassentreppe?

Genauso: Geschosshöhe durch das Ziel-Steigungsmaß teilen, auf ganze Steigungen runden, exaktes Maß nachrechnen, Auftritte mit 26–29 cm ansetzen und die Wangenlänge mit dem Satz des Pythagoras bilden. Bei Außentreppen 1–2 % Gefälle auf den Trittstufen nach vorn einplanen, damit Wasser abläuft.

### Warum ist ein Auftritt weniger als Steigungen vorhanden?

Weil der obere Fertigboden die letzte Trittstufe bildet. Bei 14 Steigungen schneiden Sie 13 Auftritte in die Wange – wer 14 einschneidet, landet eine Stufe über dem Geschoss.

### Wie prüfe ich die Kopfhöhe im Bestand?

Senkrecht von der Stufenvorderkante zum untersten Bauteil darüber messen, also zum Deckenbalken oder Unterzug, nicht zur abgehängten Decke. Liegt der kleinste Wert unter 2,00 m, bleibt nur: Deckenöffnung verlängern, Treppe versetzen oder das Steigungsmaß erhöhen, um den Winkel zu verändern.
