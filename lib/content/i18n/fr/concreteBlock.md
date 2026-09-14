## Calculateur de Blocs de Béton (Parpaings / CMU) — Guide Technique de Dimensionnement
*Mise à jour : Édition 2026 | Spécifications ASTM C90 & Eurocode 6 Maçonnerie*

---

## Ce que calcule cet outil

Ce **calculateur de blocs de béton** détermine avec précision le nombre de parpaings/blocs béton (CMU), les sacs de mortier de pose, le volume de béton de remplissage (coulis / micro-béton pour blocs à bancher) et les aciers de ferraillage nécessaires pour tout mur de clôture, soubassement, mur porteur ou mur de soutènement.

En se basant sur les dimensions modulaires standard et les rendements professionnels, il fournit :
- **Nombre net de blocs** et **quantité totale avec coefficient de perte** (chutes et découpes)
- **Appareillage des assises** : Nombre de rangs verticaux et nombre de blocs par rang
- **Sacs de mortier** : Sacs prêts à l'emploi de 35 kg / 40 kg (ou dosage en sable et ciment sur chantier)
- **Béton de remplissage des alvéoles** : Volume en mètres cubes (m³) selon l'espacement des alvéoles coulées
- **Aciers de ferraillage** : Longueur totale en mètres linéaires, fers verticaux (attentes) et barres filantes de 6 mètres
- **Estimation financière globale** : Chiffrage complet poste par poste

---

## 1. Dimensions des Blocs Béton : Cotes Nominales vs. Cotes Réelles

En maçonnerie, la **cote nominale** d'un bloc inclut l'épaisseur du joint de mortier standard de **10 mm (3/8 po)**. La **cote réelle de fabrication** du parpaing est donc réduite de 10 mm pour permettre la pose au mortier :

| Type Nominal (Ép 	imes H 	imes L) | Dimensions Réelles de Fabrication | Surface Visible (H 	imes L) | Poids Unitaire Moyen | Usage Principal |
| :--- | :--- | :--- | :--- | :--- |
| **20 × 20 × 40 cm (ou 20×20×50)** | 19 × 19 × 39 cm (ou 19×19×49) | 0,08 m² (ou 0,10 m²) | 16–18 kg | Mur porteur d'habitation, soubassement standard |
| **15 × 20 × 40 cm (ou 15×20×50)** | 14 × 19 × 39 cm | 0,08 m² (ou 0,10 m²) | 13–15 kg | Mur de refend intérieur, garage, bâtiment annexe |
| **25 × 20 × 40 cm (10" × 8" × 16")** | 24 × 19 × 39 cm | 0,08 m² | 20–22 kg | Sous-sol lourd avec forte poussée de terre |
| **30 × 20 × 40 cm (12" × 8" × 16")** | 29 × 19 × 39 cm | 0,08 m² | 24–26 kg | Murs de soutènement et ouvrages de génie civil |
| **10 × 20 × 40 cm (4" × 8" × 16")** | 9 × 19 × 39 cm | 0,08 m² | 9–11 kg | Doublage, contre-cloisons, murs de clôture légers |

> **Règle d'or de la maçonnerie :** Pour le module standard de 20 × 40 cm, la surface frontale d'un bloc posé avec son joint est de $0,20 	imes 0,40 = 0,08	ext{ m}^2$, ce qui équivaut à **12,5 blocs par mètre carré**. Pour les blocs en module 20 × 50 cm, comptez **10 blocs par mètre carré**.

---

## 2. Calcul du Nombre de Parpaings pour un Mur

Pour connaître le nombre de blocs nécessaires, calculez la surface brute du mur, soustrayez la surface des ouvertures (portes, fenêtres) et appliquez le ratio unitaire :

```
extSurface Nette du Mur (m²) = (	extLongueur 	imes 	extHauteur) - 	extSurface des Baies


extNombre de Blocs Nets = 	extSurface Nette (m²) 	imes 12,5    (	extmodule  20 	imes 40	ext cm)


extTotal avec Chutes = 	extBlocs Nets 	imes (1 + rac	extMarge  %100ight)
```

### Tableau de Référence Rapide (Bloc Standard 20×20×40 cm)

| Dimensions du Mur (L 	imes H) | Surface Nette | Nombre de Rangs | Blocs par Rang | Blocs Nets | Total (5 % Chutes) | Sacs de Mortier (35 kg) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **3,0 m × 1,2 m** | 3,6 m² | 6 rangs | 8 blocs | 45 | **48 blocs** | 4 sacs |
| **6,0 m × 1,2 m** | 7,2 m² | 6 rangs | 15 blocs | 90 | **95 blocs** | 8 sacs |
| **3,0 m × 2,4 m** | 7,2 m² | 12 rangs | 8 blocs | 90 | **95 blocs** | 8 sacs |
| **6,0 m × 2,4 m** | 14,4 m² | 12 rangs | 15 blocs | 180 | **189 blocs** | 15 sacs |
| **9,0 m × 2,4 m** | 21,6 m² | 12 rangs | 23 blocs | 270 | **284 blocs** | 22 sacs |
| **15,0 m × 2,4 m** | 36,0 m² | 12 rangs | 38 blocs | 450 | **473 blocs** | 36 sacs |

### Coefficients de perte conseillés
- **Murs droits continus :** prévoyez **5 %** de marge.
- **Murs avec angles multiples et piliers :** prévoyez **8 %** de marge.
- **Murs avec nombreuses ouvertures :** prévoyez **10 %** en raison des coupes de demi-blocs et des déchets de chantier.

---

## 3. Mortier de Pose : Dosage et Consommation

Le mortier assure la liaison mécanique entre les parpaings et la transmission des charges verticales :
- **Mortier prêt à l'emploi (sacs de 35 kg) :** Un sac de mortier permet de poser entre **10 et 12 blocs** de dimension standard avec des joints de 10 mm.
- **Règle pratique :** Prévoyez environ **8 à 9 sacs de 35 kg pour 100 blocs**.

```
extSacs de Mortier (35 kg) = ⌈ rac	extNombre Total de Blocs 	imes 8,5100 ightceil
```

Si vous gâchez le mortier sur chantier : comptez environ **450 kg de sable à maçonner** et **100 kg de ciment** pour 100 blocs de 20 cm.

---

## 4. Béton de Remplissage des Alvéoles (Coulis / Blocs à Bancher)

Pour les murs enterrés, les fondations et les murs de soutènement, les alvéoles creuses des blocs sont remplies de micro-béton fluide afin d'enrober les fers d'armature.

| Épaisseur du Mur | Volume Creux par Bloc | Remplissage 100 % (Toutes alvéoles) | Remplissage tous les 80 cm | Remplissage tous les 120 cm |
| :--- | :--- | :--- | :--- | :--- |
| **15 cm (6 po)** | 0,0065 m³ | 0,65 m³ / 100 blocs | 0,16 m³ / 100 blocs | 0,11 m³ / 100 blocs |
| **20 cm (8 po)** | 0,0099 m³ | 0,99 m³ / 100 blocs | 0,25 m³ / 100 blocs | 0,17 m³ / 100 blocs |
| **25 cm (10 po)** | 0,0130 m³ | 1,30 m³ / 100 blocs | 0,33 m³ / 100 blocs | 0,21 m³ / 100 blocs |
| **30 cm (12 po)** | 0,0164 m³ | 1,64 m³ / 100 blocs | 0,41 m³ / 100 blocs | 0,28 m³ / 100 blocs |

Ajoutez toujours **10 % de béton supplémentaire** pour compenser les pertes et la surconsommation dans les alvéoles.

---

## 5. Armatures Métalliques et Ferraillage

Un mur maçonné renforcé comprend deux types d'armatures :
1. **Ferraillage Vertical :** Barres d'acier haute adhérence HA de Ø 10 mm ou Ø 12 mm positionnées dans les alvéoles bétonnées, avec un espacement de 40 cm, 60 cm ou 80 cm.
   - Les fers verticaux doivent recouvrir les attentes de fondation sur au moins **40 à 50 fois leur diamètre** (environ 50 à 60 cm de recouvrement).
   - Placez systématiquement un renfort vertical à moins de 40 cm des angles et le long de chaque tableau de fenêtre ou baie de porte.
2. **Chaînage Horizontal Haut (Linteau / Arase) :** Réalisé avec des parpaings en "U", ferraillé avec **2 filants d'acier HA** et coulé en béton pour ceinturer l'ouvrage contre les poussées latérales et les tassements différentiels.

---

## 6. Règles de l'Art et Recommandations Chantier

1. **Pose à sec du premier rang :** Posez toujours votre première ligne de blocs à sec sur la semelle de fondation afin de vérifier le calepinage, l'espacement des joints et éviter des découpes inutiles.
2. **Qualité du mortier :** Le mortier doit avoir une consistance onctueuse : il doit coller à la truelle sans couler. Ne jamais remouiller un mortier ayant commencé sa prise après 90 minutes.
3. **Finition des joints :** Serrez les joints au fer demi-rond lorsque le mortier commence à durcir sous la pression du pouce. Cela compacte le mortier de surface et empêche les infiltrations d'eau.
4. **Ouvertures de nettoyage :** Si la hauteur de coulage du béton de remplissage dépasse 1,50 m, aménagez des trappes d'évacuation en pied de mur pour chasser les chutes de mortier avant coulage.
