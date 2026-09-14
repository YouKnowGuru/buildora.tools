## Batteriespeicher & Notstrom Rechner: Kapazität, Wechselrichter und Autonomie

Dieser Rechner für **Notstromsysteme und Batteriespeicher** ermittelt die erforderliche Speicherkapazität, die Nennleistung des Wechselrichters sowie die optionale Photovoltaik-Nachladeleistung für kritische Verbraucher bei einem Stromausfall.

Der Rechner ermittelt präzise:

- **Gesamte Dauerlast (W)** und den täglichen Energiebedarf (Wh bzw. kWh)
- **Erforderliche Brutto-Batteriekapazität** in Wattstunden (Wh) und Amperestunden (Ah)
- **Empfohlene Wechselrichterleistung** inklusive Anlauf- und Sicherheitsreserve
- **Geschätzte Überbrückungszeit (Autonomie)** bei Volllast
- **Photovoltaik-Ladeleistung (Wp)** für eine autarke Tagesnachladung
- **Kostenschätzung** nach Batteriechemie (LiFePO₄ im Vergleich zu Blei-Säure / AGM)

---

## 1. Systemaufbau einer Notstromversorgung

Ein batteriegestütztes Notstromsystem besteht aus vier Hauptkomponenten:

| Komponente | Funktion | Maßgebliches Kriterium |
|---|---|---|
| **Batteriebank** | Speichert elektrische Energie als Gleichstrom | Nutzkapazität (Wh / Ah) und Systemspannung (12V, 24V oder 48V) |
| **Wechselrichter / Ladegerät** | Wandelt Gleichspannung in 230V Wechselspannung um | Dauerleistung, Überlastfähigkeit für Anlaufströme |
| **Solarladeregler** | Steuert das Laden über PV-Module sicher | MPPT-Technologie mit hohem Wirkungsgrad |
| **Umschaltschutz (ATS / Netztrennung)** | Trennt das Hausnetz allpolig vom öffentlichen Netz | Umschaltzeit nach VDE-AR-N 4105 (< 20 ms) |

---

## 2. Entladetiefe (DoD) und Zyklenlebensdauer

Die **Entladetiefe (Depth of Discharge, DoD)** bestimmt, wie viel Prozent der Nennkapazität regelmäßig entnommen werden dürfen, ohne die Speicherzellen chemisch zu schädigen.

```
Nutzbare Energie (Wh) = Nennkapazitaet (Wh) x (DoD / 100)
```

| Speichertechnologie | Empfohlene Entladetiefe (DoD) | Zyklenlebensdauer (bei empf. DoD) | Gesamtwirkungsgrad |
|---|---|---|---|
| **LiFePO₄ (Lithiumeisenphosphat)** | 80% – 90% | 3.500 – 6.000 Zyklen (10–15 Jahre) | 95% – 98% |
| **Lithium-Ionen (NMC)** | 80% | 1.500 – 2.500 Zyklen | 92% – 95% |
| **Blei-VRLA / AGM** | 50% | 400 – 600 Zyklen (2–4 Jahre) | 80% – 85% |
| **Blei-Gel / Nasszelle** | 50% | 300 – 500 Zyklen | 75% – 82% |

> **Wirtschaftlicher Vergleich:** **LiFePO₄-Speicher** stellen im Vergleich zu Bleibatterien bei gleicher Nennkapazität fast die doppelte nutzbare Energie bereit und überstehen das Acht- bis Zehnfache an Ladezyklen. Die Kosten pro gespeicherter Kilowattstunde sind dadurch langfristig deutlich geringer.

---

## 3. Formelwerk zur Speicherauslegung

```
1. Energiebedarf (Wh) = Dauerleistung (W) x Autonomiezeit (h)

2. Bruttokapazitaet (Wh) = Energiebedarf (Wh) / (Wechselrichter-Wirkungsgrad x DoD)

3. Kapazitaet in Amperestunden (Ah) = Bruttokapazitaet (Wh) / Batteriespannung (V)

4. Mindestleistung Wechselrichter (W) = Dauerleistung (W) x 1,25

5. PV-Nachladeleistung (Wp) = Tagesenergie (Wh) / (Sonnenstunden x 0,77)
```

### Rechenbeispiel: Hausabsicherung für 8 Stunden Stromausfall

- **Gleichzeitige Last:** Kühlschrank (120W), Heizungspumpe und Steuerung (100W), Beleuchtung und Router (60W), Notebook und Kommunikation (70W) = **350 W**
- **Gewünschte Autonomie:** 8 Stunden
- **Benötigte Energie:** 350 W × 8 h = **2.800 Wh (2,8 kWh)**
- **Auslegung mit LiFePO₄ (DoD 80%) und 92% Wechselrichterwirkungsgrad:**
  - Erforderliche Bruttokapazität: 2.800 / (0,92 × 0,80) = **3.804 Wh (3,8 kWh)**
  - Bei 48V Batteriespannung: 3.804 Wh / 48V = **79,25 Ah** (handelsübliches 48V 100Ah Rack-Modul mit 4,8 kWh Bruttokapazität)
  - Empfohlener Wechselrichter: 350 W × 1,25 = 437,5 W (Empfehlung: reiner Sinus-Wechselrichter mit mindestens 1.000 VA Dauerleistung, um die induktiven Anlaufströme der Pumpen und Kompressoren abzufangen)

---

## 4. Wahl der Systemspannung: 12V, 24V oder 48V

| Systemspannung | Empfohlene Dauerleistung | Leitungsquerschnitt | Typischer Einsatzbereich |
|---|---|---|---|
| **12 V** | Bis 1.000 W | Sehr groß (hohe Ströme bis 100 A) | Wohnmobile, Boote, Gartenlauben |
| **24 V** | 1.000 W bis 3.000 W | Mittlerer Querschnitt | Werkstätten, mittlere Wochenendhäuser |
| **48 V** | Über 3.000 W | Dünn und kostengünstig | Komplette Wohnhäuser, gewerbliche Notstromanlagen |

Eine höhere Systemspannung reduziert den Stromfluss proportional. Bei 48V fließt bei gleicher elektrischer Leistung nur ein Viertel des Stroms im Vergleich zu 12V, wodurch die Leitungsverluste auf ein Sechzehntel sinken.

---

## Häufig gestellte Fragen

### Wie viele Solarmodule brauche ich zur vollständigen Wiederaufladung an einem Tag?
Teilen Sie den täglichen Energiebedarf durch die ortsüblichen Spitzen-Sonnenstunden (in Mitteleuropa durchschnittlich 3,5 bis 4,5 Volllaststunden im Sommerhalbjahr) und berücksichtigen Sie einen Systemwirkungsgrad von ca. 77 %. Für 3.800 Wh Tagesbedarf werden rechnerisch rund 1.150 Wp Modulleistung benötigt, was drei modernen Photovoltaikmodulen mit je 400 Wp entspricht.

### Warum ist ein echter Sinus-Wechselrichter unverzichtbar?
Ein reiner Sinus-Wechselrichter erzeugt eine identische Spannungskurve wie das öffentliche Versorgungsnetz. Modifizierte Sinuswechselrichter (Trapez- oder Rechteckspannung) beschädigen elektronische Schaltnetzteile und führen bei Elektromotoren in Kühlschränken und Heizungspumpen zu starker Überhitzung und Brummgeräuschen.

### Wie beeinflussen winterliche Temperaturen die Kapazität?
Bei Kälte verlangsamen sich die chemischen Reaktionen im Elektrolyten. Bleibatterien verlieren bei 0 °C etwa 20 bis 30 % ihrer entnehmbaren Energie. LiFePO₄-Zellen bieten auch bei Kälte eine hohe Entladeleistung, dürfen jedoch bei Zelltemperaturen unter 0 °C niemals ohne interne Vorheizung geladen werden, da sich sonst metallisches Lithium an den Elektroden anlagert.
