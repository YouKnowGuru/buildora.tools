## Calculateur d'escalier — géométrie et conformité

Cet outil calcule la hauteur de marche, le giron, la longueur de limon, l'angle de pente, l'échappée, le linéaire de main courante et le nombre de balustres. Une seule mesure de chantier est réellement indispensable : la **hauteur à monter** (hauteur de sol fini à sol fini). Le calculateur fonctionne en métrique comme en impérial.

> **Honnêteté normative :** l'outil vérifie les limites de l'**IRC §R311.7** (résidentiel américain) et de l'**IBC §1011** (bâtiments recevant du public, États-Unis). Il ne calcule **pas** selon les normes françaises : en France, les dimensions de garde-corps relèvent de la **NF P01-012** et l'usage professionnel retient 17 à 19 cm de hauteur de marche pour 25 à 32 cm de giron. Utilisez le calculateur pour la géométrie, vérifiez la conformité locale auprès de votre bureau de contrôle.

---

## Vocabulaire

| Terme | Définition |
|---|---|
| **Hauteur à monter** | Différence de niveau entre sol fini bas et sol fini haut. Mesurez sol **fini** à sol **fini**, revêtements compris. |
| **Hauteur de marche** | Face verticale d'une marche (contremarche). |
| **Giron** | Profondeur horizontale foulée d'une marche. |
| **Nez de marche** | Débord du giron au-delà de la contremarche, 19 à 32 mm couramment. |
| **Limon** | Pièce structurelle inclinée (2×12, soit 38 × 286 mm) entaillée en dents de scie. |
| **Âme résiduelle** | Épaisseur perpendiculaire restante du limon après entailles. Minimum **89 mm (3,5 po)** — IRC §R311.7.10. |
| **Échappée** | Hauteur libre mesurée du nez de marche à l'obstacle au-dessus. Minimum **2 032 mm (80 po)** — IRC §R311.7.2. |
| **Reculement** | Emprise horizontale totale de la volée (giron × nombre de girons). |
| **Loi de Blondel** | Règle de confort : 2 × hauteur + giron = 600 à 635 mm (24 à 25 po). |

---

## Enchaînement du calcul

```
1. Hauteur à monter   = Niveau sol fini haut − Niveau sol fini bas
2. Nombre de marches  = arrondi(Hauteur à monter ÷ Hauteur visée)
3. Hauteur exacte     = Hauteur à monter ÷ Nombre de marches
4. Nombre de girons   = Nombre de marches − 1
5. Reculement         = Nombre de girons × Giron
6. Longueur de limon  = √(Hauteur à monter² + Reculement²)
7. Angle de pente     = arctan(Hauteur de marche ÷ Giron)
8. Main courante      ≈ Longueur de limon + 305 mm (retours haut et bas)
9. Balustres          = arrondi sup.(Giron ÷ 102 mm) × Nombre de girons
```

**Toutes les marches d'une même volée doivent être identiques**, à 9,5 mm (3/8 po) près selon l'IRC §R311.7.5.1. Un écart même faible sur une seule marche provoque des chutes.

---

## Limites dimensionnelles

| Référentiel | Hauteur de marche max. | Giron min. | Application |
|---|---|---|---|
| **IRC §R311.7** (résidentiel, É.-U.) | 197 mm (7,75 po) | 254 mm (10 po) | Maison individuelle, logement collectif |
| **IBC §1011.5** (public, É.-U.) | 178 mm (7,0 po) | 279 mm (11 po) | Bureaux, commerces, hôtels, écoles |
| **OSHA 1910.25** (industriel, É.-U.) | 241 mm (9,5 po) | 241 mm (9,5 po) | Escaliers de service, passerelles |

| Angle de pente | Confort | Emploi |
|---|---|---|
| < 25° | Très doux | Rampes, escaliers d'apparat |
| **30° – 37°** | **Plage idéale** | Escalier courant, habitation et tertiaire |
| 37° – 42° | Raide mais praticable | Sous-sol, terrasse, accès mezzanine |
| > 42° | Très raide | Escalier de comble, marches décalées |

---

### Exemple chiffré : escalier de sous-sol, 2 667 mm à monter

* **Hauteur à monter :** 2 667 mm (105 po), largeur de volée 900 mm (36 po)
* **Nombre de marches :** arrondi(2 667 ÷ 190) = **14 marches**
* **Hauteur exacte :** 2 667 ÷ 14 = **190,5 mm** (7,5 po), parfaitement régulière
* **Nombre de girons :** 14 − 1 = **13 girons**
* **Giron retenu :** 267 mm (10,5 po) → **reculement** = 13 × 267 = **3 471 mm** (11,4 pi)
* **Longueur de limon :** √(2 667² + 3 471²) = **4 377 mm** (14,36 pi) → bois **2×12 de 4,88 m** (16 pi)
* **Nombre de limons :** **3** pour 900 mm de large, entraxe environ 400 mm (16 po)
* **Angle de pente :** arctan(190,5 ÷ 267) = **35,5°** — dans la plage de confort
* **Blondel :** 2 × 190,5 + 267 = **648 mm**, légèrement au-dessus de la plage 600–635 mm. La hauteur de marche étant imposée par la hauteur à monter, c'est le giron qu'il faut resserrer : à 254 mm (10 po, le minimum IRC), 2 × 190,5 + 254 = **635 mm**, soit la limite haute de Blondel tout en restant conforme
* **Trémie (échappée de 2 032 mm) :** ouverture d'environ **2 489 mm** (98 po)
* **Main courante :** 4 377 + 305 = **4 682 mm**, soit environ 4,7 m
* **Balustres :** arrondi sup.(267 ÷ 102) × 13 = 3 × 13 = **39 balustres**

---

## Main courante et garde-corps

- Main courante obligatoire dès **4 marches** (IRC §R311.7.8).
- Section de préhension : 32 à 51 mm (1,25 à 2 po) en profil circulaire.
- Hauteur : 864 à 965 mm (34 à 38 po) au-dessus du nez de marche.
- Écartement des balustres : une sphère de **102 mm (4 po)** ne doit pas passer (IRC §R312.1.3). En France, la NF P01-012 retient **110 mm** — vérifiez le référentiel qui s'applique à votre chantier.

---

## Questions fréquentes

### Comment calculer le nombre de marches d'un escalier ?
Divisez la hauteur à monter par la hauteur de marche visée (190 mm est un bon point de départ), puis arrondissez à l'entier le plus proche. Redivisez ensuite la hauteur à monter par cet entier : vous obtenez la hauteur exacte, forcément régulière. Pour 2 667 mm, cela donne 14 marches de 190,5 mm.

### Quelle hauteur de marche pour un escalier confortable ?
Entre **175 et 190 mm** (7 à 7,5 po). Le maximum de l'IRC est 197 mm ; au-delà, l'escalier devient fatigant et dangereux à la descente. En bâtiment public américain, l'IBC plafonne à 178 mm.

### Comment tracer un limon d'escalier ?
Reportez la hauteur de marche et le giron exacts sur une équerre de charpentier, puis tracez les 13 ou 14 entailles à la suite sur un 2×12. Vérifiez qu'il reste au moins 89 mm d'âme perpendiculaire après entaille — c'est la première cause de rupture de limon sur les escaliers raides.

### Quelle échappée minimale au-dessus d'un escalier ?
**2 032 mm (80 po)** mesurés du nez de marche à la solive ou au plafond, perpendiculairement à la ligne de pente. Mesurez depuis le **dessous de la solive**, pas depuis le plafond fini. Si le point le plus bas passe sous cette valeur, il faut décaler la trémie ou réduire la pente.

### Quel bois pour les limons ?
Un limon entaillé se taille classiquement dans du **2×12 (38 × 286 mm)**. Pour une volée longue, très chargée ou sans appui intermédiaire, passez à un limon en LVL (bois lamellé-collé de placages) et faites valider la section par un ingénieur.
