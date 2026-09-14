## Punktfundamente für Terrassen berechnen

Dieser Rechner dimensioniert Betonfundamente und Stützpfosten für eine aufgeständerte Holzterrasse nach der Lasteinzugsflächen-Methode des **US-amerikanischen International Residential Code (IRC R507)**. Der Rechner bildet also die US-Code-Grundlage ab – in Europa gelten stattdessen Eurocode 1 (EN 1991-1-1, Nutzlasten) und Eurocode 7 (EN 1997-1, Gründungen). Nutzen Sie die Ergebnisse als Vordimensionierung und lassen Sie sie bei Bedarf vom Tragwerksplaner prüfen. Metrische und imperiale Einheiten sind umschaltbar.

---

## 1. Lastannahmen

| Lastart | Typischer Wert | Quelle |
|---|---|---|
| **Nutzlast** (Personen, Möbel, Grill) | 1,92 kN/m² (40 psf) | IRC Tabelle R301.5 |
| **Eigenlast** (Belag, Balkenlage, Geländer) | 0,48 kN/m² (10 psf) | üblicher Aufbau |
| **Schneelast** (optional) | 0–4,79 kN/m² (0–100 psf) | örtliche Vorgabe |

```
Gesamtflächenlast (kN/m²) = Nutzlast + Eigenlast + Schneelast
Gesamtlast (kN)           = Terrassenfläche (m²) × Gesamtflächenlast
```

**Whirlpool oder Partyterrasse:** Nutzlast auf 2,9–4,8 kN/m² (60–100 psf) anheben. Ein Whirlpool mit 2.300 l bringt rund 23 kN auf kleiner Fläche – das dominiert die Bemessung und braucht eigene Fundamente.

---

## 2. Rechenkette

```
1. Fläche (m²)            = Länge × Breite
2. Gesamtlast (kN)        = Fläche × Gesamtflächenlast
3. Pfostenzahl            = Reihen × Pfosten je Reihe
4. Last je Pfosten (kN)   = Gesamtlast ÷ Pfostenzahl
5. Fundamentfläche (m²)   = Last je Pfosten ÷ zul. Bodenpressung (kPa)
6. Durchmesser rund (m)   = 2 × √(Fläche ÷ π)
   Kantenlänge quadr. (m) = √(Fläche)
7. Betonmenge (m³)        = Fundamentfläche × Dicke × Pfostenzahl
```

Zulässige Bodenpressung (Erfahrungswerte, IRC Tabelle R401.4.1):

| Bodenart | Zulässige Pressung |
|---|---|
| weicher Ton, sandiger Ton | 72 kPa (1.500 psf) |
| Schluff, Lehm, schluffiger Sand | 96 kPa (2.000 psf) |
| sandiger Lehm, gemischt körnig | 120 kPa (2.500 psf) |
| Kies, sandiger Kies | 144 kPa (3.000 psf) |
| verdichteter Schüttboden, dichter Sand | 192 kPa (4.000 psf) |

Ohne Bodengutachten setzen Prüfstellen meist 72 oder 96 kPa an. Der Wert lohnt sich: er geht direkt in die Fundamentgröße ein.

---

## 3. Rechenbeispiel: Terrasse 4,90 m × 3,65 m auf sandigem Lehm

* **Fläche:** 4,90 × 3,65 = **17,9 m²** (193 sq ft)
* **Gesamtlast:** 17,9 × 2,39 kN/m² = **42,8 kN**
* **Raster:** 2 Reihen × 3 Pfosten = **6 Pfosten**
* **Last je Pfosten:** 42,8 ÷ 6 = **7,13 kN**
* **Fundamentfläche:** 7,13 ÷ 120 kPa = **0,0594 m² (594 cm²)**
* **Durchmesser:** 2 × √(0,0594 ÷ π) = **0,275 m → Schalrohr 30 cm (12 in) aufrunden**
* **Beton je Fundament:** π × 0,15² × 0,30 m = 0,021 m³; **gesamt 0,13 m³** – plus 10 % Zuschlag

---

## 4. Frostfreie Gründung

Die berechnete **Dicke** ist nur das Betonmaß, nicht die Aushubtiefe. Fundamente müssen bis in frostfreie Tiefe reichen, damit Frosthebung die Terrasse nicht anhebt. Der IRC (R403.1.4) nennt je Klimazone 75–120 cm; in Mitteleuropa rechnet man üblicherweise mit rund 80 cm. Vor dem Aushub Leitungsauskunft beim Netzbetreiber einholen.

---

## Häufige Fragen

### Wie viele Punktfundamente brauche ich für meine Terrasse?

Als Faustregel liegen Pfosten im Raster von 1,8–2,4 m. Eine Terrasse von 4,90 × 3,65 m kommt typisch mit **6 Pfosten** (2 Reihen à 3) plus Wandanschluss aus. Mehr Pfosten heißt kleinere Fundamente – und umgekehrt.

### Wie groß muss ein Punktfundament sein?

Bei 1,92 kN/m² Nutz- und 0,48 kN/m² Eigenlast auf 120 kPa Boden landet man pro Pfosten bei rund **30 cm Durchmesser**. Weicher Ton (72 kPa) treibt das auf 35–40 cm, verdichteter Kies (192 kPa) senkt es auf 20–25 cm.

### Wie tief muss ich für Punktfundamente graben?

Der Betonkörper ist meist 20–30 cm dick, das **Loch muss aber die frostfreie Tiefe erreichen** – in der Regel rund 80 cm. Maßgeblich ist die Vorgabe Ihrer Bauaufsicht.

### Reichen Fertig-Betonplatten statt gegossener Fundamente?

Punktfundament-Fertigteile funktionieren nur bei niedrigen, freistehenden Terrassen unmittelbar über Gelände. Sie liegen auf oder knapp unter Oberkante Gelände und sind **nicht frostfrei** – in kalten Wintern heben sie sich. Angebaute Terrassen brauchen gegossene, frostfreie Fundamente.

### Wie viel Beton brauche ich?

Fundamentfläche × Dicke × Pfostenzahl. Eine Terrasse mit 6 Fundamenten Ø 30 cm und 30 cm Dicke braucht rund **0,13 m³** – also wenige Säcke Trockenbeton. Den exakten Wert samt imperialer Entsprechung liefert der Rechner.
