## Calculateur d'adoucisseur d'eau — dimensionnement

Ce calculateur applique la méthode de dimensionnement en **capacité de grains** de la **Water Quality Association (WQA)**, référence nord-américaine, pour choisir un adoucisseur à échange d'ions. Saisissez le nombre d'occupants, la dureté mesurée, les teneurs en fer et manganèse dissous et la fréquence de régénération souhaitée : l'outil renvoie la capacité, le volume de résine, la consommation de sel, le rejet de saumure et le débit de pointe. Métrique et impérial sont pris en charge.

> **Honnêteté normative :** l'outil raisonne en **grains** et selon les usages nord-américains (WQA, certification **NSF/ANSI 44**). En France, on parle de **degré français (°f, ou TH)** et les adoucisseurs se choisissent au **litre de résine**. Les conversions sont données ci-dessous pour que les résultats soient directement exploitables.

---

## Unités de dureté et conversions

| Unité | Nom complet | Équivalences |
|---|---|---|
| **°f (TH)** | Degré français | 1 °f = 10 mg/L de CaCO₃ = 10 ppm = 0,584 gpg |
| **gpg** | Grain par gallon | 1 gpg = 17,118 ppm = 1,71 °f |
| **ppm / mg/L** | Partie par million | 1 ppm = 0,0584 gpg = 0,1 °f |

Pour la capacité : 1 grain de CaCO₃ = 64,8 mg, donc **1 °f·m³ = 154,3 grains**. Un adoucisseur affiché à 40 000 grains équivaut à **259 °f·m³** de capacité nominale.

### Échelle de dureté (WQA)

| °f (TH) | ppm | gpg | Classement |
|---|---|---|---|
| 0 – 1,7 | 0 – 17 | 0 – 1 | **Douce** |
| 1,7 – 6 | 17 – 60 | 1 – 3,5 | **Légèrement dure** |
| 6 – 12 | 60 – 120 | 3,5 – 7 | **Moyennement dure** |
| 12 – 18 | 120 – 180 | 7 – 10,5 | **Dure** |
| 18 – 24 | 180 – 240 | 10,5 – 14 | **Très dure** |
| > 24 | > 240 | > 14 | **Extrêmement dure** |

---

## Compensation du fer et du manganèse

Un test de dureté classique ne mesure que le calcium et le magnésium. Or le **fer dissous (Fe²⁺)** et le **manganèse dissous (Mn²⁺)** colmatent aussi la résine et doivent être intégrés au dimensionnement.

```
Dureté compensée (gpg) = Dureté brute (gpg) + (Fer ppm × 4) + (Manganèse ppm × 2)
```

Règle WQA : **1 ppm de fer dissous équivaut à 4 gpg** de dureté supplémentaire, **1 ppm de manganèse à 2 gpg**. C'est cette dureté compensée, et non la dureté brute, que le calculateur utilise.

> **Attention :** la règle ne vaut que pour le fer **dissous** (Fe²⁺, eau limpide au robinet qui rouille à l'air). Le fer particulaire (Fe³⁺, eau déjà rousse) exige un filtre oxydant **en amont** de l'adoucisseur, pas un adoucisseur plus gros.

---

## La méthode de dimensionnement, étape par étape

```
1. Consommation (L/j)  = Occupants × Consommation par personne (défaut 284 L/j)
2. Demande (grains/j)  = Consommation (gal/j) × Dureté compensée (gpg)
3. Capacité visée      = Demande × Jours entre régénérations × (1 + Réserve % ÷ 100)
4. Taille retenue      = première capacité normalisée au-dessus de la capacité visée
```

Le défaut de 284 L/j (75 gallons) par personne correspond à la fourchette de 227 à 303 L/j (60 à 80 gal) retenue par l'agence environnementale américaine. La **réserve de 20 %** évite la percée de dureté en pointe de consommation : invités, fêtes, arrosage.

### Exemple chiffré : foyer de 4 personnes, eau de forage très dure

* **Consommation :** 4 × 284 = **1 136 L/j** (300 gal/j)
* **Dureté mesurée :** 25 gpg, soit **428 ppm, ou 42,8 °f** — extrêmement dure
* **Demande journalière :** 300 × 25 = **7 500 grains/j**, soit 48,6 °f·m³/j
* **Capacité visée, cycle de 7 jours et réserve de 20 % :** 7 500 × 7 × 1,20 = **63 000 grains** (408 °f·m³)
* **Appareil retenu :** **64 000 grains**, soit **57 litres (2,0 pi³)** de résine, bouteille de 300 × 1 320 mm
* **Sel par régénération, réglage haute efficacité :** 2,0 × 3,63 = **7,3 kg**
* **Sel annuel :** 7,3 × (365 ÷ 7) = **381 kg**, soit environ 21 sacs de 18 kg

---

## Capacités normalisées

| Capacité visée | Appareil | Résine | Bouteille |
|---|---|---|---|
| ≤ 24 000 grains | **24 000 grains** | 21 L (0,75 pi³) | 200 × 1 120 mm |
| 24 001 – 32 000 | **32 000 grains** | 28 L (1,0 pi³) | 230 × 1 220 mm |
| 32 001 – 40 000 | **40 000 grains** | 35 L (1,25 pi³) | 250 × 1 120 mm |
| 40 001 – 48 000 | **48 000 grains** | 42 L (1,5 pi³) | 250 × 1 370 mm |
| 48 001 – 64 000 | **64 000 grains** | 57 L (2,0 pi³) | 300 × 1 320 mm |
| 64 001 – 80 000 | **80 000 grains** | 71 L (2,5 pi³) | 330 × 1 370 mm |
| 80 001 – 96 000 | **96 000 grains** | 85 L (3,0 pi³) | 350 × 1 650 mm |
| > 96 000 | **Double bouteille alternée** ou multiplex industriel | — | — |

---

## Sel, eau de rejet et efficacité

```
Sel par régénération (kg) = Volume de résine (m³) × 128 kg/m³   (réglage haute efficacité)
Sel annuel (kg)           = Sel par régénération × 365 ÷ Jours entre régénérations
```

Le réglage **haute efficacité à 128 kg/m³ (8 lb/pi³)** est celui préconisé par la WQA et le défaut du calculateur. Le réglage standard à **240 kg/m³ (15 lb/pi³)** donne un peu plus de capacité par cycle, mais consomme environ 50 % de sel en plus pour le même volume d'eau adoucie.

| Type de sel | Pureté | Remarques | Prix courant |
|---|---|---|---|
| **Pastilles obtenues par évaporation** | 99,6 % et plus de NaCl | Le meilleur choix général, très peu de voûtage dans le bac | 6 – 10 $ le sac de 18 kg |
| **Cristaux solaires** | 99,5 % et plus de NaCl | Plus soluble, peut former une bouillie dans les vieux bacs | 5 – 8 $ le sac de 18 kg |
| **Chlorure de potassium (KCl)** | 99 % et plus de KCl | Alternative sans sodium, environ 30 % moins efficace au kilo | 25 – 40 $ le sac de 18 kg |

**Rejet de saumure :** chaque régénération évacue 132 à 246 litres (35 à 65 gallons), soit environ 150 litres par 28 litres de résine au réglage standard. Ce rejet part à l'égout et fait l'objet de prescriptions locales.

---

## Débit de service et diamètre de vanne

L'adoucisseur doit tenir le **débit de pointe** sans faire tomber la pression sous 1,7 à 2,1 bar (25 à 30 psi).

| Salles de bains | Débit de pointe | Vanne conseillée |
|---|---|---|
| 1 | 26 L/min (7 gpm) | DN20 (3/4 po) |
| 2 | 38 L/min (10 gpm) | DN25 (1 po) |
| 3 | 49 L/min (13 gpm) | DN25 (1 po) |
| 4 | 61 L/min (16 gpm) | DN32 (1 1/4 po) |
| 5 et plus | 72 L/min et plus (19 gpm et plus) | DN32 et plus, gros débit |

---

## Simple ou double bouteille

**Simple bouteille**, le cas résidentiel courant : une bouteille de résine et un bac à sel. L'appareil est hors service pendant la régénération, en général 2 à 4 heures vers 2 h du matin. Convient tant que la demande journalière reste sous 96 000 grains.

**Double bouteille alternée**, pour les fortes demandes : deux bouteilles partagent un bac à sel. Pendant que l'une régénère, l'autre reste en service — eau adoucie en continu, sans coupure. Indispensable en restauration, blanchisserie, station de lavage ou cabinet médical fonctionnant en continu.

---

## Questions fréquentes

### Quel adoucisseur pour une famille de 4 personnes ?
À 284 L/j par personne (1 136 L/j au total) avec une eau moyennement dure à 15 gpg, soit 25,7 °f : 300 × 15 × 7 jours × 1,20 de réserve = **37 800 grains**, ce qui conduit à un appareil de **40 000 grains** (35 L de résine, bouteille de 250 × 1 120 mm). Une eau plus dure ou chargée en fer fait passer au calibre supérieur.

### Comment convertir le TH en gpg ?
Divisez le TH en degrés français par 1,71. Une eau à 30 °f fait 17,5 gpg. Dans l'autre sens, multipliez les gpg par 1,71. Le calculateur accepte les deux unités ainsi que les ppm.

### Comment le fer du forage change-t-il le dimensionnement ?
Le fer dissous est retenu par la résine comme le calcium, mais il coûte cher en capacité : 1 ppm de fer consomme l'équivalent de 4 gpg. Une eau à 25 gpg (42,8 °f) avec 2 ppm de fer présente une dureté compensée de 25 + 8 = **33 gpg**, soit 56,5 °f — il faut un appareil nettement plus gros.

### À quelle fréquence un adoucisseur doit-il régénérer ?
La plupart des appareils volumétriques régénèrent tous les 3 à 14 jours selon la consommation réelle. Un cycle de **7 jours au réglage haute efficacité (128 kg/m³ de sel)** est le meilleur compromis entre consommation de sel et régularité de la dureté en sortie. Un cycle de 3 à 4 jours réduit le risque de percée dans les foyers à consommation irrégulière.

### Quelle différence entre un adoucisseur et un filtre ?
Un adoucisseur enlève le calcium, le magnésium et le fer dissous par échange d'ions, en les remplaçant par du sodium. Il ne retient **ni** le chlore, **ni** les nitrates, **ni** les bactéries, le plomb ou les particules. Ces contaminants relèvent d'un filtre (charbon actif, osmose inverse, UV). Beaucoup d'installations combinent les deux : préfiltre sédiment et charbon, puis adoucisseur.
