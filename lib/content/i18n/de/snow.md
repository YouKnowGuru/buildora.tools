## Schneelast auf dem Dach berechnen — ASCE 7-22

> **Hinweis:** Dieser Rechner setzt ausgewählte Bemessungsregeln aus **ASCE/SEI 7-22 Kapitel 7** und **IBC §1608** um – also die **US-Normgrundlage**. Er rechnet nicht nach Eurocode. In Deutschland gilt **DIN EN 1991-1-3** mit nationalem Anhang und der Einteilung in Schneelastzonen nach Standorthöhe. Nutzen Sie das Ergebnis als Vorbemessung oder Vergleichsrechnung – der Standsicherheitsnachweis gehört in die Hand eines Tragwerksplaners.

---

## Warum die Schneelast maßgebend wird

Schneelast ist die Vertikallast, die Sparren, Binder, Pfetten und Schalung über den Winter abtragen müssen. In schneereichen Lagen ist sie oft die größte veränderliche Einwirkung am Dach.

Frisch gefallener Schnee wiegt **80–320 kg/m³ (5–20 lb/ft³)**, nasser, gesetzter Schnee mit Eisanteil erreicht **480–960 kg/m³ (30–60 lb/ft³)**. Der Unterschied entsteht innerhalb von Stunden – deshalb kollabieren Dächer typischerweise nach Regen auf Altschnee, nicht während des Schneefalls.

---

## Rechenkette nach ASCE 7-22

```
Schneelast am Boden (pg)
        ↓
Expositionsbeiwert Ce      — Tabelle 7.3-1
        ↓
Temperaturbeiwert Ct       — Tabelle 7.3-3
        ↓
Bedeutungsbeiwert Is       — Tabelle 1.5-2
        ↓
pf = 0,7 × Ce × Ct × Is × pg          (Flachdach, §7.3)
        ↓
Neigungsbeiwert Cs         — §7.4
        ↓
ps = Cs × pf                          (Schrägdach)
        ↓
Mindestschneelast pm                  (§7.3.4)
        ↓
maßgebende Last = max(ps; pm)
        ↓
Gesamtlast = maßgebende Last × Dachgrundfläche
```

Einheitenumrechnung: `1 psf = 0,04788 kPa` und `1 kN/m² = 20,885 psf`. Der Rechner arbeitet metrisch und imperial.

---

## 1. Schneelast am Boden (pg)

Kartenwert mit 2 % jährlicher Überschreitungswahrscheinlichkeit (Wiederkehrperiode 50 Jahre):

| Region (USA) | pg |
|---|---|
| Südstaaten, Golfküste | 0 psf – kein Schneenachweis |
| Mittelatlantik, Ohio Valley | 20–30 psf (0,96–1,44 kPa) |
| Oberer Mittelwesten, Neuengland | 30–50 psf (1,44–2,39 kPa) |
| Nord-Maine, Adirondacks, Upper Michigan | 60–100 psf (2,87–4,79 kPa) |
| Rocky Mountains, Hochlagen | Standortgutachten, bis 150–300+ psf (7,2–14,4 kPa) |

Zum Vergleich: die deutschen Schneelastzonen liefern nach DIN EN 1991-1-3/NA je nach Zone und Geländehöhe Bodenwerte, die grob im Bereich 0,65 bis über 2,5 kN/m² liegen – die Zahlen sind also durchaus vergleichbar, die Beiwerte und Kombinationsregeln aber nicht.

---

## 2. Flachdachschneelast pf

```
pf = 0,7 × Ce × Ct × Is × pg
```

Der Faktor **0,7** erfasst, dass nie die volle Bodenschneelast auf einem freien Dach liegen bleibt – Windverfrachtung, Sonneneinstrahlung und Schmelzvorgänge tragen ab.

**Expositionsbeiwert Ce (Tabelle 7.3-1)**

* voll freistehendes Dach: **0,9**
* teilweise geschützt (Regelfall Wohnbebauung): **1,0**
* geschützt durch dichten Nadelwald oder höhere Nachbargebäude: **1,2**

**Temperaturbeiwert Ct (Tabelle 7.3-3)**

* beheiztes Gebäude über 18,3 °C (65 °F): **1,0**
* unbeheizt, Kaltlager, offene Vordächer: **1,2**
* dauerhaft unter 0 °C (32 °F), Tiefkühlhaus: **1,3**
* Gewächshaus, dauerhaft beheizt: **0,85**

**Bedeutungsbeiwert Is (Tabelle 1.5-2)**

* Kategorie I – Landwirtschaft, Lager: **0,8**
* Kategorie II – Wohnen, normales Gewerbe: **1,0**
* Kategorie III – Versammlung über 300 Personen, Schulen: **1,1**
* Kategorie IV – Krankenhaus, Feuerwache, kritische Infrastruktur: **1,2**

---

## 3. Neigungsbeiwert Cs

```
ps = Cs × pf
```

**Warmes Dach (Ct ≤ 1,0)**

* **glatte Deckung** (Metall, Glas, Schiefer, freie Traufe): Cs = 1,0 bis 5°, dann linear auf 0,0 bei 70°
* **alle anderen Deckungen** (Bitumenschindel, Dachbahn, Holzschindel): Cs = 1,0 bis 30°, dann linear auf 0,0 bei 70°

**Kaltes Dach (Ct ≥ 1,2)**

* **glatte Deckung:** Cs = 1,0 bis 10°, dann auf 0,0 bei 70°
* **raue Deckung:** Cs = 1,0 bis 45°, dann auf 0,0 bei 70°

Merken Sie sich die Konsequenz: ein Blechdach mit warmer Traufe wirft Schnee schon ab 5° ab, ein Bitumenschindeldach erst ab 30°. Ein 30°-Dach mit Schindeln bekommt keine Abminderung.

---

## 4. Mindestschneelast pm (§7.3.4)

Bei Dachneigungen unter 15° (etwa 3,2:12) überschreibt die Mindestlast die abgeminderte Neigungslast:

* für pg ≤ 20 psf (0,96 kPa): `pm = Is × pg`
* für pg > 20 psf: `pm = Is × 20 psf` (0,96 kPa), mit den Obergrenzen pm,max je Gebäudekategorie

Das schützt flache Dächer gegen Nassschnee, Schneematsch und stehendes Wasser.

---

## 5. Verwehungen (§7.7)

Wird Schnee über ein höheres Dach oder ein Geländehindernis geweht, lagert er sich als dreieckiger Keil auf dem tieferliegenden Dach ab:

```
Dichte:        γ  = min(30; 0,13 × pg + 14)          [lb/ft³, pg in psf]
Verwehungshöhe: hd = 0,43 × lu^(1/3) × (pg + 10)^(1/4) − 1,5   [ft, lu in ft]
Spitzenlast:   pd = hd × γ                            [psf]
Breite:        w  = 4 × hd                            [ft, leeseitig]
```

Diese Beiwerte sind an imperiale Einheiten gebunden. Geben Sie pg in psf und die Anlauflänge lu in Fuß ein; das Ergebnis kommt in Fuß und psf und wird vom Rechner anschließend umgerechnet.

---

## Rechenbeispiel: Wohnhaus, Satteldach 6:12

* **Bodenschneelast pg:** 35 psf = **1,68 kPa**
* **Exposition:** teilweise geschützt, Ce = 1,0
* **Dachtyp:** beheizt, Ct = 1,0
* **Kategorie II:** Is = 1,0
* **Dachneigung:** 6:12 = 26,57°, Bitumenschindeln
* **Dachgrundfläche:** 185,8 m² (2.000 sq ft)
* **Schritt 1 – pf:** 0,7 × 1,0 × 1,0 × 1,0 × 35 = **24,5 psf = 1,17 kPa**
* **Schritt 2 – Cs:** raue Deckung, warmes Dach, 26,57° ≤ 30° → Cs = 1,0, also ps = **24,5 psf (1,17 kPa)**
* **Schritt 3 – Gesamtlast:** 1,17 kN/m² × 185,8 m² = **rund 218 kN**, entsprechend 22,2 t Masse (49.000 lb)

Diese 218 kN müssen über Sparren, Fußpfette und Wandscheiben in die Fundamente.

---

## Häufige Fragen

### Wie viel Schneelast hält ein normales Sparrendach?

Das hängt an Querschnitt, Holzgüte, Sparrenabstand und Stützweite – nicht am Dachtyp. Ein 60/180er Sparren bei 70 cm Abstand und 4,5 m Sparrenlänge liegt in einer anderen Größenordnung als 80/240 bei 50 cm. Der Rechner liefert die Einwirkung; die Tragfähigkeit rechnet der Tragwerksplaner.

### Ab welcher Schneehöhe muss ich das Dach abschaufeln?

Nicht die Höhe zählt, sondern die Masse. 50 cm Pulverschnee bei 150 kg/m³ sind 0,74 kN/m²; 50 cm gesetzter Nassschnee bei 500 kg/m³ sind 2,45 kN/m² – mehr als das Dreifache. Kritisch wird es nach Regen auf Altschnee sowie in Kehlen und hinter Attiken, wo sich Verwehungen konzentrieren.

### Rechnet der Rechner nach Eurocode?

Nein. Er setzt ASCE 7-22 und IBC §1608 um, also die US-Grundlage mit psf und den Beiwerten Ce, Ct, Is und Cs. DIN EN 1991-1-3 arbeitet mit Formbeiwerten μ und einer anderen Zonierung. Für einen Nachweis in Deutschland rechnen Sie nach Eurocode.

### Warum wird mit der Dachgrundfläche und nicht mit der Dachfläche gerechnet?

Weil Schnee senkrecht wirkt. Die Last wird auf die horizontale Projektion des Dachs bezogen, nicht auf die schräge Dachfläche – sonst überschätzen Sie die Einwirkung bei steilen Dächern erheblich.

### Was ist der Unterschied zwischen pf, ps und pm?

pf ist die Flachdachlast aus der Bodenschneelast, ps die um die Neigung abgeminderte Last, pm die Mindestlast für flache Dächer. Bemessen wird immer mit dem größeren Wert aus ps und pm.
