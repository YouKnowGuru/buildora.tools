## Calculateur d'isolation — guide de dimensionnement

Bien isoler tient à un équilibre entre plusieurs paramètres : surface brute, coefficient de ponts thermiques d'ossature, résistance thermique visée, performance du matériau par centimètre et conditionnement (rouleaux, panneaux, sacs de vrac, board-feet de mousse projetée). Le calculateur enchaîne ces étapes et fonctionne en métrique comme en impérial.

> **Honnêteté normative :** les résistances de référence proviennent des modèles américains **IECC 2021 / IRC tableau N1102.1.3**, exprimées en R impérial (pi²·°F·h/BTU). L'outil calcule sur cette base **américaine**. La conversion est directe : **RSI (m²·K/W) = R × 0,1761**. En France, la performance de l'enveloppe relève de la **RE2020** et des DTU d'isolation ; l'outil ne calcule pas selon ces textes.

---

## Étape 1 — Surface brute et ossature

```
Surface brute (m²)      = Longueur × Largeur
Surface de calfeutrage  = Surface brute × Coefficient de cavité
Surface à commander     = Surface brute × (1 + Perte % ÷ 100)
```

| Emplacement | Entraxe courant | Part d'ossature | Surface de cavité nette |
|---|---|---|---|
| **Plancher de combles perdus** | Solivage ouvert, pose continue | 0 % | 100 % du brut |
| **Mur extérieur, ossature 2×4** | 400 mm (16 po) | ~10 % | ~90 % du brut |
| **Mur extérieur, ossature 2×6** | 400 ou 600 mm | 7 – 10 % | 90 – 93 % |
| **Rampant de comble, chevrons** | 400 ou 600 mm | 7 – 10 % | 90 – 93 % |
| **Plancher sur vide sanitaire** | 400 mm | ~10 % | ~90 % |
| **Isolation extérieure continue** | Sur voligeage continu | 0 % | 100 % du brut |

> **Perte de coupe :** 5 % en combles perdus (recoupes de rives et obstacles), 8 à 10 % en murs (encadrements de baies, gaines, boîtiers électriques).

---

## Étape 2 — Résistances de référence par zone climatique (modèle IECC)

| Zone | Villes repères (É.-U.) | Combles | Mur 2×4 | Mur 2×6 | Plancher bas |
|---|---|---|---|---|---|
| **1 – très chaud** | Miami, Honolulu | R-30 (RSI 5,3) | R-13 | R-15 | R-13 |
| **2 – chaud** | Houston, Phoenix | R-38 (RSI 6,7) | R-13 | R-20 | R-13 |
| **3 – tempéré chaud** | Atlanta, Dallas | R-38 (RSI 6,7) | R-15 ou 13 + 5 ci | R-20 | R-19 |
| **4 – mixte** | Seattle, Washington | R-49 (RSI 8,6) | R-15 ou 13 + 5 ci | R-21 | R-19 |
| **5 – frais** | Chicago, Denver, Boston | R-49 (RSI 8,6) | R-15 + 5 ci | R-21 | R-30 |
| **6 – froid** | Minneapolis, Burlington | R-60 (RSI 10,6) | R-15 + 5 ci | R-21 + 5 ci | R-30 |
| **7 – très froid** | Duluth, Fargo | R-60 (RSI 10,6) | R-15 + 5 ci | R-21 + 5 ci | R-38 |
| **8 – subarctique** | Fairbanks, Anchorage | R-60 (RSI 10,6) | R-15 + 5 ci | R-21 + 5 ci | R-38 |

*« ci » désigne une isolation extérieure continue en panneau rigide.* Ces valeurs sont des références de modèle national : les amendements locaux et les voies de conformité en performance globale changent les exigences. Vérifiez toujours le règlement applicable au chantier.

---

## Étape 3 — Matériaux et épaisseur nécessaire

```
Épaisseur requise = (R visé − R existant) ÷ R par pouce
Épaisseur (mm)    = (RSI visé − RSI existant) × Lambda × 1 000
```

| Matériau | R / pouce | Lambda λ, W/(m·K) | Emploi |
|---|---|---|---|
| **Laine de verre en rouleaux** | R-3,1 – 3,4 | 0,042 – 0,047 | Cavités de murs, combles ouverts |
| **Laine de roche** | R-3,8 – 4,2 | 0,034 – 0,038 | Murs 2×4 et 2×6, cloisons, coupe-feu |
| **Ouate de cellulose soufflée** | R-3,6 – 3,8 | 0,038 – 0,040 | Combles perdus, insufflation en murs |
| **Laine de verre soufflée** | R-2,5 – 2,8 | 0,052 – 0,058 | Combles perdus, soufflage sans poussière |
| **Mousse PU cellules ouvertes** | R-3,7 – 3,8 | 0,038 – 0,039 | Rampants, cloisons, étanchéité à l'air |
| **Mousse PU cellules fermées** | R-6,5 – 7,0 | 0,021 – 0,022 | Vide sanitaire, sous-sol, bâtiment métallique |
| **Polystyrène extrudé (XPS)** | R-5,0 | 0,029 | Soubassement, sous dallage |
| **Polyuréthane / PIR** | R-6,0 – 6,5 | 0,022 – 0,024 | Support de couverture, ITE continue |

La laine de roche est incombustible jusqu'à environ 1 175 °C (2 150 °F), ce qui explique son usage en coupe-feu et en isolation acoustique de cloisons.

---

## Étape 4 — Quantités et conditionnements

**Rouleaux et panneaux semi-rigides** — couverture par paquet : R-13/R-15 (mur 2×4) ≈ 3,7 m² ; R-21 (mur 2×6) ≈ 3,5 m² ; R-30 ≈ 2,8 m² ; R-38 ≈ 2,2 m² ; R-49 ≈ 1,7 m².

```
Paquets = arrondi sup.(Surface à commander ÷ Couverture par paquet)
```

**Vrac soufflé** — un sac de cellulose de 11,3 kg (25 lb) offre environ 720 R·pi² de rendement, soit **1,76 m² à R-38**. Un sac de laine de verre de 13,6 kg (30 lb) offre environ 1 350 R·pi², soit **3,30 m² à R-38**.

**Mousse projetée** — le board-foot vaut 1 pi² sur 1 po d'épaisseur, soit **2,36 litres** (0,00236 m³).

### Exemple chiffré : combles de 93 m² à souffler en cellulose à R-38

* **Surface brute :** 93 m² (1 000 pi²), R visé **R-38** (RSI 6,7)
* **Besoin net :** 93 ÷ 1,76 = 52,8 → **53 sacs** de 11,3 kg
* **Avec 8 % de perte :** surface portée à 100,4 m² → 100,4 ÷ 1,76 = **57 sacs**
* **Épaisseur soufflée :** 38 ÷ 3,7 R/po ≈ 10,3 po, soit environ **260 mm** de cellulose tassée
* **Coût matière à 23 $ le sac :** 57 × 23 = **1 311 $**

---

## Budget matière et pose

| Matériau | Unité | Fourniture seule | Posé par un pro |
|---|---|---|---|
| **Laine de verre R-13 à R-21** | au m² | 4,30 – 9,70 $ | 13 – 24 $ |
| **Laine de roche R-15 à R-23** | au m² | 9,15 – 17,20 $ | 19 – 34 $ |
| **Cellulose soufflée (combles)** | au sac | 18 – 28 $ | 12 – 22 $/m² posé |
| **Laine de verre soufflée** | au sac | 25 – 38 $ | 14 – 26 $/m² posé |
| **Mousse cellules ouvertes** | au board-foot | 0,45 – 0,75 $ | 1,20 – 1,80 $ |
| **Mousse cellules fermées** | au board-foot | 1,00 – 1,60 $ | 2,00 – 3,50 $ |
| **Panneau rigide XPS / PIR** | au m² | 8,60 – 19,40 $ | 19 – 38 $ |

---

## Gestion de la vapeur d'eau

Les classes de pare-vapeur se définissent par la perméance : **classe I** sous 0,1 perm (film polyéthylène 6 mils, parement aluminium, imperméable) ; **classe II** de 0,1 à 1,0 perm (kraft, membrane hygrovariable) ; **classe III** de 1,0 à 10 perms (peinture acrylique sur plaque de plâtre).

- **Climat froid, chauffage dominant :** le frein-vapeur se place côté intérieur, c'est-à-dire du côté chaud en hiver, pour limiter la migration de vapeur vers la paroi froide.
- **Climat chaud et humide, climatisation dominante :** le flux s'inverse ; évitez tout pare-vapeur de classe I à l'intérieur, qui piégerait l'humidité contre la plaque de plâtre refroidie.
- **Climat mixte :** une classe II ou III laisse la paroi sécher dans les deux sens selon la saison.
- **Jamais deux pare-vapeur** de part et d'autre d'une même paroi : l'humidité qui entre ne peut plus sortir.

---

## Bonnes pratiques de mise en œuvre

1. **Traiter l'étanchéité à l'air avant d'isoler.** L'isolant freine la conduction, pas les mouvements d'air. Calfeutrez trémies, gaines, passages de plomberie et lisses hautes à la mousse expansive ou au mastic acoustique.
2. **Préserver la ventilation en sous-face de couverture.** Posez un déflecteur (chicane de comble) dans chaque travée de chevrons pour maintenir le passage d'air entre l'entrée d'air basse et le faîtage.
3. **Ne jamais comprimer un isolant fibreux.** Écraser un panneau R-21 de 140 mm dans une cavité de 89 mm détruit les poches d'air qui font la résistance thermique.

---

## Questions fréquentes

### Combien de sacs de cellulose pour isoler mes combles ?
Multipliez la surface par le R visé, divisez par le rendement du sac (environ 720 R·pi² pour un sac de 11,3 kg). Pour 93 m² (1 000 pi²) à R-38, il faut 53 sacs nets, ou 57 sacs avec 8 % de marge. Vérifiez toujours l'abaque imprimé sur le sac du fabricant.

### Quelle différence entre R-13 et R-15 en mur d'ossature 2×4 ?
Les deux se posent dans la même cavité de 89 mm. Le R-13 utilise une laine de densité standard, le R-15 une laine plus dense qui apporte environ 15 % de résistance thermique en plus à épaisseur égale.

### Peut-on isoler par-dessus un isolant existant ?
Oui, si l'existant est sec et exempt de dégât d'humidité ou de rongeurs. Utilisez des panneaux **nus, sans kraft**, pour ne pas créer un second pare-vapeur qui emprisonnerait l'humidité entre les deux couches.

### Comment calculer les board-feet de mousse projetée ?
Multipliez la surface en pi² par l'épaisseur en pouces. Un mur de sous-sol de 56 m² (600 pi²) en 50 mm (2 po) de mousse à cellules fermées demande 1 200 board-feet nets, ou 1 296 avec 8 % de marge de surpulvérisation.

### Quelle résistance viser pour un garage ou un hangar ?
Pour un garage chauffé, les références courantes sont R-13 à R-15 en mur 2×4, R-21 en mur 2×6 et R-38 à R-49 en plafond. Sur un bâtiment métallique, 50 mm de mousse à cellules fermées (soit environ R-13 à R-14) apportent la résistance et suppriment la condensation sur la tôle.
