## Calculateur de surface d'entrepôt

Dimensionner un entrepôt est l'un des arbitrages les plus lourds pour un logisticien, un e-commerçant ou un prestataire 3PL. Sous-dimensionner, c'est la congestion, la casse et le risque d'accident ; sur-dimensionner, c'est engager l'entreprise sur un bail commercial de plusieurs années trop cher.

Le calculateur reconstitue la surface nécessaire par couches successives : emprise de stockage, allées de circulation selon l'engin de manutention, surfaces d'exploitation, puis loyer estimé. Il fonctionne en métrique comme en impérial.

---

## La formule de dimensionnement

```
1. Positions au sol      = Nombre de palettes ÷ Niveaux de palettier
2. Emprise stockage (m²) = Positions au sol × Surface par position
3. Allées (m²)           = Emprise stockage × [Facteur allée ÷ (1 − Facteur allée)]
4. Exploitation (m²)     = (Stockage + Allées) × 25 %
5. Surface totale (m²)   = Stockage + Allées + Exploitation
```

Le poste « exploitation » couvre les quais, la zone de réception, les couloirs d'expédition, les postes d'emballage, la charge de batteries, les sanitaires et les bureaux.

### Exemple chiffré : 500 palettes sur 4 niveaux, chariot à mât rétractable

* **Positions au sol :** 500 ÷ 4 = **125 positions**
* **Emprise de stockage :** 125 × 1,40 m² = **175 m²** (1 875 pi²)
* **Allées, facteur 30 % en allée étroite :** 175 × (0,30 ÷ 0,70) = **75 m²**
* **Sous-total stockage + allées :** 175 + 75 = **250 m²**
* **Exploitation, +25 % :** 250 × 0,25 = **62,5 m²**
* **Surface totale nécessaire :** **312,5 m²** (environ 3 360 pi²)

---

## Formats de palettes et surface par position

La surface par position dépasse la palette elle-même : il faut compter le débord de charge (25 à 50 mm par côté), le jeu entre échelles et l'espace de lisse imposé par les règles de protection incendie.

| Format | Dimensions | Surface par position | Régions |
|---|---|---|---|
| **Palette GMA** | 1 219 × 1 016 mm (48 × 40 po) | **1,40 m²** (15,0 pi²) | Amérique du Nord |
| **Palette Europe (EUR 1)** | 1 200 × 800 mm | **1,16 m²** (12,5 pi²) | Union européenne, Royaume-Uni, Asie |
| **Palette industrielle (EUR 2)** | 1 200 × 1 000 mm | **1,40 m²** (15,0 pi²) | Europe, Royaume-Uni, Australie |
| **Grand format / fûts** | 1 219 × 1 219 mm (48 × 48 po) | **1,67 m²** (18,0 pi²) | Chimie, agroalimentaire, industrie lourde |

---

## Systèmes de stockage comparés

| Système | Sélectivité | Taux d'occupation du bâtiment | Cas d'usage | Niveaux |
|---|---|---|---|---|
| **Palettier classique simple profondeur** | 100 %, chaque palette accessible | 35 – 45 % | Nombreuses références, rotation rapide, FIFO | 3 à 6 |
| **Palettier double profondeur** | 50 % | 50 – 60 % | Références moyennes, 2 à 4 palettes par référence | 3 à 6 |
| **Accumulation (drive-in / drive-through)** | Faible, LIFO ou FIFO | 65 – 75 % | Gros volumes, peu de références, saisonnier | 3 à 5 |
| **Palettier dynamique par accumulation (push-back)** | Moyenne, 2 à 6 de profondeur | 60 – 70 % | Forte densité avec chargement plus rapide qu'en drive-in | 2 à 5 |
| **Gerbage au sol (stockage de masse)** | Faible | 40 – 55 %, limité par l'écrasement | Colis rigides, big-bags, pneus, fûts | 2 à 3 max |

---

## Largeur d'allée et engin de manutention

Le choix de l'engin peut à lui seul faire varier la surface bâtie de 35 %.

### Allée large — 3,6 à 4,0 m (12 à 13 pi)
Chariot élévateur frontal à contrepoids, 3 ou 4 roues. Investissement et entretien les plus faibles, conduite familière à tous les caristes. En contrepartie, l'allée consomme 40 à 45 % de la surface au sol.

### Allée étroite — 2,6 à 3,0 m (8,5 à 10 pi)
Chariot à mât rétractable, chariot articulé. L'allée est réduite de 25 à 30 % et l'engin lève à 7,6 – 10,7 m (25 à 35 pi et plus). Exige une dalle plane et un investissement supérieur.

### Allée très étroite (VNA) — 1,7 à 2,0 m (5,5 à 6,5 pi)
Chariot tri-directionnel, préparateur de commandes embarqué, guidage filoguidé ou par rail. Densité de stockage maximale, lève à 12 – 15 m (40 à 50 pi et plus). Investissement élevé et dalle de planéité certifiée obligatoire.

---

## Répartition des surfaces dans un entrepôt bien conçu

* **Palettiers et stockage :** 40 à 50 % de l'emprise
* **Allées de circulation et couloirs de mise à quai :** 25 à 30 %
* **Quais de réception et d'expédition :** 15 à 20 %
* **Emballage, services à valeur ajoutée, retours :** 5 à 8 %
* **Bureaux, sanitaires, salle de pause, charge de batteries :** 3 à 7 %

> **Règle de conduite :** un entrepôt ne doit jamais tourner au-delà de **85 % de sa capacité nominale**. Passé ce seuil, la productivité s'écroule par double manutention et embouteillage des allées.

---

## Hauteur libre et nombre de niveaux

Avant d'arrêter le nombre de niveaux, mesurez la **hauteur libre** réelle : du sol fini au point bas le plus contraignant, ferme, tête de sprinkleur ou luminaire compris.

| Hauteur libre | Niveaux de palettes |
|---|---|
| 4,9 – 5,5 m (16 – 18 pi) | 2 à 3 |
| 6,1 – 7,3 m (20 – 24 pi) | 3 à 4 — bâtiment d'activité courant |
| 8,5 – 9,8 m (28 – 32 pi) | 4 à 5 — plateforme logistique moderne |
| 11 – 12 m et plus (36 – 40 pi et plus) | 6 à 8 — entrepôt grande hauteur |

---

## Questions fréquentes

### Quelle surface d'entrepôt pour 1 000 palettes ?
En palettier classique sur 4 niveaux avec chariots à mât rétractable en allée étroite, comptez environ **604 à 697 m²** (6 500 à 7 500 pi²), allées et zones de quai comprises. En gerbage au sol sur 2 hauteurs, il faut environ **1 115 à 1 300 m²** (12 000 à 14 000 pi²) — soit près du double.

### Quel taux d'occupation viser dans un entrepôt ?
Dans une installation en palettier simple profondeur, l'emprise réelle des palettes représente **35 à 45 %** de la surface du bâtiment. Les 55 à 65 % restants sont les allées, les quais, les postes d'emballage et les zones de mise à quai. Un taux plus élevé signifie un système à accumulation, pas une meilleure organisation.

### Comment calculer le loyer d'un entrepôt à partir de la surface ?
Le locatif industriel se cote en montant annuel au mètre carré (ou au pi², en triple net). Un entrepôt de 929 m² (10 000 pi²) à 97 $/m²/an (9,00 $/pi²/an) coûte **90 000 $ par an**, soit **7 500 $ par mois** de loyer de base, hors taxes foncières, assurance et charges communes.

### Quelle différence entre surface brute et surface utile de stockage ?
La surface brute est l'emprise du bâtiment, mesurée de mur extérieur à mur extérieur. La surface utile de stockage est la seule portion de dalle où les palettiers ou les piles reposent effectivement. C'est cette seconde valeur que produit le calculateur avant d'ajouter allées et exploitation.

### Combien de portes de quai prévoir ?
Comptez **1 porte de quai par 930 m²** (10 000 pi²) pour une distribution à forte rotation, et **1 porte par 1 860 à 2 320 m²** (20 000 à 25 000 pi²) pour du stockage de masse à faible rotation.
