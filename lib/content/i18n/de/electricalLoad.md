## Elektrische Anschlussleistung berechnen — Fachanleitung

Dieser Rechner bemessen den Hausanschluss eines Einfamilienhauses nach dem **US-amerikanischen National Electrical Code (NFPA 70), Artikel 220.82 – Optional Calculation Method**. Er rechnet ausdrücklich auf US-Code-Grundlage mit einem **120/240-V-Einphasen-Dreileiternetz**. In Deutschland gelten stattdessen die Normenreihe DIN VDE 0100 und DIN 18015-1 bei 230/400 V Drehstrom; die dortige Bemessung über Gleichzeitigkeitsfaktoren und Vorsicherung folgt einer anderen Systematik. Nutzen Sie das Ergebnis als Vergleichsrechnung oder für US-Projekte – nicht als Nachweis nach VDE.

Der Rechner liefert:

- **Gesamtlast in Voltampere (VA) und Kilowatt (kW)**
- **Bemessungsstrom in Ampere bei 120/240 V**
- **empfohlene Zählerschrankgröße (100 A bis 400 A)**
- **Reserve gegenüber dem vorhandenen Anschluss**
- **Querschnitte der Hauptleitung (Kupfer und Aluminium, NEC Tabelle 310.12)**

---

## 1. NEC-Standardverfahren vs. Verfahren 220.82

| Merkmal | Standardverfahren (220 Teil III) | Optionalverfahren (220.82) |
|---|---|---|
| **Anwendung** | Gewerbe, Mehrfamilienhaus | Einfamilienhaus, Anschlusserhöhung |
| **Allgemeine Last** | 3 VA/sq ft mit gestaffelten Faktoren | 3 VA/sq ft in der Gesamtlast |
| **Festgeräte** | 75 % Reduktion ab 4 Geräten | erste 10.000 VA zu 100 %, Rest zu 40 % |
| **Kochstelle** | Tabellenwerk (Tabelle 220.55) | Nennleistung, dann 40 % Reduktion |
| **Heizen/Kühlen** | größerer Wert zu 100 % | größerer Wert zu 100 % (nicht gleichzeitig) |

---

## 2. Rechenkette nach NEC 220.82

```
1. Grundlast   = (Wohnfläche × 3 VA/sq ft)
                 + (Kleingerätestromkreise × 1.500 VA)
                 + 1.500 VA Waschmaschinenkreis
2. Festgeräte  = Kochstelle + Backofen + Warmwasser + Trockner
                 + Geschirrspüler + Zerkleinerer + Mikrowelle
                 + Wallbox + Whirlpool + Brunnenpumpe (je Nennleistung)
3. Reduktion   = 10.000 + 0,40 × max(0; Gesamtlast − 10.000)
4. HLK-Anteil  = max(Kühllast; Heizlast) zu 100 %
5. Gesamtlast  = Reduzierte Grundlast + HLK-Anteil
6. Strom (A)   = Gesamtlast (VA) ÷ 240 V
```

Die Flächenlast von 3 VA/sq ft entspricht rund **32,3 VA/m²**. Unbeheizte Keller, offene Veranden und separate Garagen bleiben außen vor.

Wichtige Nennleistungen aus dem Datensatz: Elektroherd 12.000 W, Warmwasserspeicher 4.500 W (Durchlauferhitzer 18.000–36.000 W, Wärmepumpenboiler 1.000 W), Trockner mindestens 5.000 VA, Geschirrspüler 1.200 W, Zerkleinerer 800 W, Mikrowelle 1.200 W. Wallboxen: 16 A = 3,8 kW, 32 A = 7,7 kW, 40 A = 9,6 kW, 48 A = 11,5 kW, 80 A = 19,2 kW.

Heizlast: Elektroheizung nach 220.82(C)(3) mit **65 %** der Nennleistung, Gas-/Ölheizung nur mit dem Umluftmotor (ca. 800 VA), Wärmepumpe mit Zusatzheizstab als 100 % Heizstab + 75 % Verdichter (branchenübliche Näherung – die genaue Auslegung hängt an der Verriegelung der Heizstufen).

---

## 3. Rechenbeispiel: 223 m² Haus, vollelektrisch

* **Beleuchtung/Steckdosen:** 223 m² (2.400 sq ft) × 3 VA/sq ft = **7.200 VA**
* **Kleingeräte + Waschen:** (2 × 1.500) + 1.500 = **4.500 VA**
* **Festgeräte:** Herd 12.000 + Warmwasser 4.500 + Trockner 5.000 + Geschirrspüler/Zerkleinerer/Mikrowelle 3.200 + Wallbox 48 A 11.520 = **36.220 VA**
* **Gesamtlast:** 7.200 + 4.500 + 36.220 = **47.920 VA**
* **Nach Reduktion:** 10.000 + 0,40 × 37.920 = **25.168 VA**
* **HLK:** Klimagerät 5.000 VA gegen Wärmepumpe 10.000 + (0,75 × 5.000) = **13.750 VA** (maßgebend)
* **Gesamt:** 25.168 + 13.750 = **38.918 VA**
* **Strom:** 38.918 ÷ 240 V = **162,2 A**
* **Ergebnis:** **200-A-Anschluss**, 81,1 % ausgelastet, 37,8 A Reserve. Hauptleitung 2/0 AWG Kupfer bzw. 4/0 AWG Aluminium im 2″-Rohr.

---

## 4. Leitungsquerschnitte (NEC Tabelle 310.12)

| Anschluss | Kupfer 75 °C | Aluminium 75 °C | Erdungsleiter Cu | Mindestrohr |
|---|---|---|---|---|
| **100 A** | 4 AWG | 2 AWG | 8 AWG | 1-1/4″ |
| **125 A** | 2 AWG | 1/0 AWG | 8 AWG | 1-1/4″ |
| **150 A** | 1 AWG | 2/0 AWG | 6 AWG | 1-1/2″ |
| **200 A** | 2/0 AWG | 4/0 AWG | 4 AWG | 2″ |
| **225 A** | 3/0 AWG | 250 kcmil | 4 AWG | 2″ |
| **400 A** | 2 × 2/0 AWG | 2 × 4/0 AWG | 1/0 AWG | 2 × 2″ oder 3″ |

---

## Häufige Fragen

### Passt eine 11-kW-Wallbox noch in einen bestehenden Anschluss?

Nach NEC 220.82 sprengt eine 48-A-Wallbox (11,5 kW) in einem Haus mit Elektroherd, elektrischem Warmwasser und Klimagerät fast immer die 100-A-Grenze. Mit Gasheizung und Gas-Warmwasser bleibt oft noch eine 32-A-Wallbox (7,7 kW) möglich. Alternativen: größerer Anschluss oder ein Lastmanagement (in den USA EVEMS nach NEC 625.42, in Deutschland ein dynamisches Lastmanagement nach Vorgabe des Netzbetreibers – anmeldepflichtig ab 12 kW).

### Was ist der Unterschied zwischen Voltampere und Watt?

Watt ist die Wirkleistung ohmscher Verbraucher (Heizstab, Herd). Voltampere ist die Scheinleistung (U × I) und berücksichtigt den Leistungsfaktor induktiver Lasten wie Verdichter und Motoren. NEC Artikel 220 rechnet bei Widerstandslasten 1 W = 1 VA und nimmt bei Motoren den Typenschildwert in VA.

### Warum teilt der Rechner durch 240 V und nicht durch 230 V?

Weil das US-Wohnnetz ein 120/240-V-Dreileitersystem ist. Für eine deutsche Anlage müssten Sie mit 230 V einphasig bzw. 400 V dreiphasig und den Gleichzeitigkeitsfaktoren nach DIN 18015-1 rechnen – das ist eine andere Bemessung, die dieser Rechner nicht abbildet.

### Wann wird ein 400-A-Anschluss nötig?

Wenn die berechnete Last 200 A übersteigt. Treiber sind elektrische Durchlauferhitzer für das ganze Haus (75–150 A allein), zwei Wallboxen, Sole-Wärmepumpen mit großem Heizstab und Häuser über 370 m².

### Wie viel Ampere braucht ein Haus?

Für ein modernes Einfamilienhaus mit einer 48-A-Wallbox ist **200 A** die Standardantwort. Häuser unter 140 m² mit Gasheizung und ohne Wallbox passen oft noch in 100 A; über 280 m² mit zwei Fahrzeugen, Whirlpool oder Werkstatt werden 300–400 A empfohlen.
