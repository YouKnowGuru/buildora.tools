## Betonstein-Rechner (Schalungssteine / Hohlblocksteine) — Technischer Leitfaden
*Stand: 2026 | DIN EN 771-3 Mauersteine aus Beton & DIN 1053 / Eurocode 6*

---

## Was dieser Rechner leistet

Dieser **Betonstein-Rechner** ermittelt exakt die benötigte Menge an Beton-Hohlblocksteinen, Schalungssteinen, Mauermörtelsäcken, Verfüllbeton für die Hohlkammern und Bewehrungsstahl für Gartenmauern, Fundamente, Kellerwände und Stützmauern.

Basierend auf bewährten Standard-Rastermaßen und ingenieurtechnischen Erfahrungswerten berechnet das Tool:
- **Netto-Steinanzahl** sowie **Brutto-Bedarf inklusive Schnittverlust und Bruch**
- **Schichtenaufbau**: Anzahl der waagerechten Steinlagen (Schichten) und Steine pro Lage
- **Mauermörtel**: Anzahl der 25-kg- oder 40-kg-Säcke Werktrockenmörtel (Mörtelklasse M5 / M10)
- **Füllbeton-Volumen**: Kubikmeter (m³) Verfüllbeton je nach Kammerabstand oder Vollverfüllung
- **Bewehrungsstahl**: Gesamte laufende Meter, vertikale Steckbügel/Bewehrungsstäbe und 6-Meter-Stangen
- **Materialkosten**: Gesamte Budgetkalkulation für alle Materialpositionen

---

## 1. Steinformate: Nennmaß vs. Fertigmaß

Im Mauerwerksbau unterscheidet man zwischen dem **Nennmaß** (inklusive Standard-Mörtelfuge von **10 mm / 3/8 Zoll**) und dem tatsächlichen **Fertigmaß** des Steins:

| Nennformat (B 	imes H 	imes L) | Reales Steinmaß (Herstellmaß) | Wandfläche je Stein | Typisches Gewicht | Anwendungsbereich |
| :--- | :--- | :--- | :--- | :--- |
| **20 × 20 × 40 cm (8" × 8" × 16")** | 19 × 19 × 39 cm | 0,08 m² | ca. 16–18 kg | Standard-Außenwände, Keller und tragende Mauern |
| **15 × 20 × 40 cm (6" × 8" × 16")** | 14 × 19 × 39 cm | 0,08 m² | ca. 12–14 kg | Innenwände, Trennwände, Garagen |
| **25 × 20 × 40 cm (10" × 8" × 16")** | 24 × 19 × 39 cm | 0,08 m² | ca. 19–21 kg | Kelleraußenwände mit Erddruck |
| **30 × 20 × 40 cm (12" × 8" × 16")** | 29 × 19 × 39 cm | 0,08 m² | ca. 23–26 kg | Schwere Stützmauern, Geländeterrassierung |
| **10 × 20 × 40 cm (4" × 8" × 16")** | 9 × 19 × 39 cm | 0,08 m² | ca. 9–11 kg | Vormauerschalen, Sichtschutz, Verblendungen |

> **Grundregel im Mauerwerk:** Bei dem gängigen Format 20 × 40 cm beträgt die Ansichtsfläche eines Steins inklusive Mörtelfuge genau $0,20	ext{ m} 	imes 0,40	ext{ m} = 0,08	ext{ m}^2$. Daraus ergibt sich der Standardwert von **12,5 Steinen pro Quadratmeter** Wandfläche.

---

## 2. Berechnung des Steinbedarfs für eine Wand

Ziehen Sie von der gesamten Wandfläche alle Öffnungen (Türen, Tore, Fenster) ab und multiplizieren Sie mit 12,5:

```
extNetto-Wandfläche (m²) = (	extWandlänge 	imes 	extWandhöhe) - 	extÖffnungsflächen


extGenaue Steinanzahl (Netto) = 	extNetto-Wandfläche 	imes 12,5


extGesamtbedarf mit Verschnitt = 	extNetto-Steine 	imes (1 + rac	extVerschnitt  %100ight)
```

### Schnellübersicht (Standardstein 20×20×40 cm)

| Wandabmessungen (L 	imes H) | Netto-Fläche | Schichten (Höhe) | Steine pro Schicht | Netto-Steine | Gesamt (5% Reserve) | Mörtelsäcke (40 kg) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **3,0 m × 1,2 m** | 3,6 m² | 6 Lagen | 8 Steine | 45 | **48 Steine** | 3 Säcke |
| **6,0 m × 1,2 m** | 7,2 m² | 6 Lagen | 15 Steine | 90 | **95 Steine** | 6 Säcke |
| **3,0 m × 2,4 m** | 7,2 m² | 12 Lagen | 8 Steine | 90 | **95 Steine** | 6 Säcke |
| **6,0 m × 2,4 m** | 14,4 m² | 12 Lagen | 15 Steine | 180 | **189 Steine** | 12 Säcke |
| **9,0 m × 2,4 m** | 21,6 m² | 12 Lagen | 23 Steine | 270 | **284 Steine** | 18 Säcke |
| **15,0 m × 2,4 m** | 36,0 m² | 12 Lagen | 38 Steine | 450 | **473 Steine** | 30 Säcke |

### Empfohlene Verschnittzuschläge
- **Gerade Wände:** 5 % Zuschlag für Bruch und Zuschnitte.
- **Wände mit vielen Ecken und Pfeilern:** 8 % Verschnitt.
- **Wände mit schrägen Giebeln oder vielen Fensterausschnitten:** 10 % Verschnitt.

---

## 3. Mörtelbedarf und Mörtelklassen

Mauermörtel verbindet die Steine und gleicht Maßtoleranzen aus:
- **Mörtelklasse M10 (bzw. Zementmörtel III nach DIN):** Hohe Druck- und Haftzugfestigkeit. Zwingend vorgeschrieben für Kelleraußenwände, Erdreichkontakt und Stützmauern.
- **Mörtelklasse M5 (Kalkzementmörtel IIa):** Standardmörtel für oberirdische, normal belastete Wände.

### Verbrauch pro 40-kg-Sack Trockenmörtel
- Ein 40-kg-Sack reicht beim Mauern von 20er Betonsteinen für ca. **12 bis 14 Steine**.
- **Faustformel:** Rechnen Sie mit ca. **7 bis 8 Säcken (40 kg)** pro 100 Steine.

---

## 4. Hohlkammer-Verfüllung (Vergussbeton / Schalungssteinbeton)

Bei statisch beanspruchten Mauern (Schalungssteine / bewehrte Hohlblocksteine) werden die Kammern mit Fließbeton (Konsistenz F4/F5, Größtkorn 8 mm) verfüllt:

| Steinbreite | Hohlraum je Stein | Vollverfüllung je 100 Steine | Verfüllung alle 80 cm | Verfüllung alle 120 cm |
| :--- | :--- | :--- | :--- | :--- |
| **15 cm** | ca. 0,0065 m³ | 0,65 m³ | 0,16 m³ | 0,11 m³ |
| **20 cm** | ca. 0,0099 m³ | 0,99 m³ | 0,25 m³ | 0,17 m³ |
| **25 cm** | ca. 0,0130 m³ | 1,30 m³ | 0,33 m³ | 0,21 m³ |
| **30 cm** | ca. 0,0164 m³ | 1,64 m³ | 0,41 m³ | 0,28 m³ |

Planen Sie beim Betonieren immer **10 % Mehrvolumen** für Verdichtungsverluste und Toleranzen ein.

---

## 5. Bewehrungsstahl (Bewehrungsvorschriften)

1. **Vertikale Bewehrung:** Üblicherweise Betonstahl B500B mit Ø 10 mm oder Ø 12 mm in den verfüllten Kammern (Abstand meist 40 bis 80 cm).
   - Aus dem Fundament müssen Anschlussbewehrungen (Steckeisen) mit einer Übergreifungslänge von mindestens **40 bis 50 Stabdurchmessern** (mind. 50 cm) herausragen.
   - Neben allen Tür- und Fensteröffnungen sowie an Wandecken ist immer mindestens ein vertikaler Stab anzuordnen.
2. **Horizontaler Ringbalken / U-Schale:** Oberste Schicht aus U-Schalungssteinen mit **2 durchgehenden Bewehrungsstäben**, um die Wand gegen Zug- und Schubkräfte auszusteifen.

---

## 6. Praxistipps für die Baustelle

1. **Erste Schicht trocken auslegen:** Legen Sie die unterste Steinreihe vor dem Mörteln trocken auf das Fundament, um das Fugenraster zu prüfen und unnötige Schneidarbeiten zu vermeiden.
2. **Horizontalsperre nicht vergessen:** Unter der ersten Steinlage gehört eine Bitumenpappe als Kapillarsperre gegen aufsteigende Bodenfeuchtigkeit.
3. **Fugen verdichten:** Fugen mit dem Fugeisen glattstreichen, sobald der Mörtel daumendruckfest ist. Das dichtet die Fugenflanken gegen Schlagregen ab.
