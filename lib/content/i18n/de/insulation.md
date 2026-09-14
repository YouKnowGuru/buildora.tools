## Dämmung berechnen — Mengen, R-Werte und Packungen

Der Rechner ermittelt Dämmstoffmengen für Geschossdecke, Außenwand, Kellerdecke und Steildach und arbeitet metrisch wie imperial.

Grundlage sind die **US-Vorgaben des IECC 2021 bzw. IRC Tabelle N1102.1.3** mit der Einheit **R-Wert** (ft²·°F·h/BTU). In Deutschland rechnen Sie mit **λ in W/(m·K)**, R in m²K/W und U-Werten nach **DIN 4108-2** sowie den Anforderungen des **GEG**. Der Rechner liefert Mengen auf US-Basis, keinen GEG-Nachweis.

```
R-Wert metrisch (m²K/W) = R-Wert (US) ÷ 5,678
λ (W/mK)                = 1 ÷ (R je Zoll × 6,933)
U-Wert (W/m²K)          = 1 ÷ Summe aller R-Werte metrisch
```

---

## 1. Bruttofläche und Konstruktionsanteil

Bei durchgehender Dämmung (offene Balkenlage, Aufdachdämmung) zählt die volle Bruttofläche. Im Gefach ziehen Sie den Konstruktionsanteil ab: **ca. 10 %** bei Ständerwerk 2×4 (38 × 89 mm), **ca. 7–10 %** bei 2×6 (38 × 140 mm) und in der Sparrenlage. Zuschlag: **5 %** bei offener Balkenlage, **8–10 %** bei Wänden mit Laibungen und Dosen.

---

## 2. Dämmstoffe

| Dämmstoff | R je Zoll | λ (W/mK) | Einsatz |
|---|---|---|---|
| **Glaswolle-Klemmfilz** | R-3,1–3,4 | 0,042–0,047 | Ständerwerk, offene Decke |
| **Steinwolle** | R-3,8–4,2 | 0,034–0,038 | Wand, Brandschutz, Schallschutz |
| **Zellulose-Einblasdämmung** | R-3,6–3,8 | 0,038–0,040 | Geschossdecke, Hohlraum |
| **Glaswolle-Einblasdämmung** | R-2,5–2,8 | 0,052–0,058 | Geschossdecke |
| **PU-Ortschaum geschlossenzellig** | R-6,5–7,0 | 0,021–0,022 | Keller, Metallbau |
| **XPS-Hartschaum** | R-5,0 | 0,029 | Perimeter, Bodenplatte |
| **PIR / Polyisocyanurat** | R-6,0–6,5 | 0,022–0,024 | Aufdach, Fassade |

```
Dicke (Zoll) = (Ziel-R − vorhandener R) ÷ R je Zoll
Dicke (cm)   = (Ziel-R metrisch − vorhandener R) × λ × 100
```

---

## 3. Referenz-R-Werte nach IECC-Klimazone

| Zone | Beispielstädte | Oberste Decke | Wand 2×4 | Wand 2×6 |
|---|---|---|---|---|
| **2 (heiß)** | Houston, Phoenix | R-38 (6,69) | R-13 | R-20 |
| **4 (gemischt)** | Seattle, Washington | R-49 (8,63) | R-15 | R-21 |
| **5 (kühl)** | Chicago, Boston | R-49 (8,63) | R-15 + R-5 | R-21 |
| **6–8 (kalt)** | Minneapolis, Fairbanks | R-60 (10,57) | R-15 + R-5 | R-21 + R-5 |

Metrische Werte in Klammern in m²K/W. Das deutsche Klima liegt etwa auf Zonenniveau 4–5; die GEG-Anforderung an die Neubauwand ist strenger.

---

## 4. Packungen und Sackzahl

* **Klemmfilz:** R-13/R-15 deckt ca. 3,7 m² (40 sq ft), R-30 ca. 2,8 m², R-38 ca. 2,2 m², R-49 ca. 1,7 m² (18 sq ft) je Packung.
* **Zellulose:** 11,3-kg-Sack (25 lb) liefert etwa **720 R·sq ft**.
* **Glaswolle-Einblasdämmung:** 13,6-kg-Sack (30 lb) liefert etwa **1.350 R·sq ft**.

```
Packungen  = Bestellfläche ÷ Deckung je Packung          (aufrunden)
Säcke      = (Bestellfläche in sq ft × R-Wert) ÷ Sackleistung
Board Feet = Bestellfläche in sq ft × Dicke in Zoll
```

### Rechenbeispiel: Geschossdecke 93 m² auf R-38 einblasen

* **Bruttofläche:** 93 m² (1.000 sq ft)
* **Mit 8 % Zuschlag:** 93 × 1,08 = 100,4 m² (1.080 sq ft)
* **Zellulosesäcke:** (1.080 × 38) ÷ 720 = **57 Säcke** à 11,3 kg
* **Erreichter Wert:** R-38 = **6,69 m²K/W**, also U ≈ 0,15 W/m²K für die Dämmschicht allein

Die Setzhöhentabelle auf dem Sack ist verbindlich.

---

## 5. Feuchteschutz und Ausführung

US-Dampfbremsklassen, grob umgerechnet (1 US-perm ≈ sd 3,5 m):

* **Klasse I**, unter 0,1 perm, sd über 35 m – PE-Folie 0,15 mm, Alukaschierung
* **Klasse II**, 0,1–1,0 perm, sd 3,5–35 m – Kraftpapier, feuchteadaptive Bahn
* **Klasse III**, 1,0–10 perm, sd 0,35–3,5 m – Latexanstrich auf Gipskarton

1. **Dampfbremse auf die warme Seite.** Im kalten Klima raumseitig. **Niemals zwei Sperren in einem Bauteil** – was hineinkommt, muss austrocknen können.
2. **Erst luftdicht, dann dämmen.** Dämmung bremst Wärmeleitung, nicht Luftströmung.
3. **Traufbelüftung freihalten.** Bei Einblasdämmung in jedes Sparrenfeld einen Dämmkeil setzen.
4. **Filz nicht stauchen.** Ein 140-mm-Filz in ein 89-mm-Gefach gequetscht verliert einen erheblichen Teil seiner Wirkung – die Luftkammern sind der Dämmstoff.

---

## Häufige Fragen

### Wie viele Säcke Einblasdämmung brauche ich für den Dachboden?

Fläche messen, 5–8 % Zuschlag, Ziel-R-Wert festlegen. Für 93 m² (1.000 sq ft) auf R-38 sind es mit 8 % Zuschlag **57 Säcke** Zellulose à 11,3 kg. Prüfen Sie die Deckungsangabe auf dem Sack – Zellulose und Glaswolle unterscheiden sich um mehr als den Faktor 1,8.

### Wie rechne ich R-Wert in Lambda um?

R-Wert (US) durch 5,678 ergibt m²K/W. R-49 sind 8,63 m²K/W; bei λ = 0,040 W/mK entspricht das 345 mm Dämmstoff.

### Kann ich neue Dämmung auf alte legen?

Ja, solange die alte Lage trocken und nicht von Nagern befallen ist. Verwenden Sie **unkaschierten** Filz, damit zwischen den Lagen keine zweite Dampfbremse und damit keine Feuchtefalle entsteht.

### Warum gibt der Rechner R-Werte statt U-Werte aus?

Weil die Bestelllogik aus dem US-Markt kommt, wo R-Werte und Board Feet die Handelseinheiten sind. Für den GEG-Nachweis addieren Sie die metrischen R-Werte und bilden den Kehrwert.
