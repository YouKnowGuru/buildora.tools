## Calculateur de plots de terrasse — guide technique

Ce calculateur dimensionne les semelles béton et les poteaux d'une terrasse sur plots par la méthode des **surfaces d'influence** de l'**IRC R507** (code résidentiel américain). Saisissez dimensions, charges, contrainte admissible du sol et trame de poteaux : l'outil renvoie la surface de semelle, le diamètre de coffrage, la charge par poteau et le volume de béton, en métrique comme en impérial.

> **Honnêteté normative :** l'outil applique l'**IRC** américain. En France, les fondations relèvent de l'Eurocode 7 (NF EN 1997-1) ; l'outil ne calcule pas selon l'Eurocode.

---

## Charges à retenir

| Type de charge | Valeur courante |
|---|---|
| **Exploitation** (personnes, mobilier) — IRC tabl. R301.5 | 1,92 kPa (40 lb/pi²) |
| **Permanente** (lames, lambourdes, garde-corps) | 0,48 kPa (10 lb/pi²) |
| **Neige au sol** (facultative, amendement local) | 0 à 4,8 kPa (0–100 lb/pi²) |

**Spa :** montez l'exploitation à 2,9–4,8 kPa (60–100 lb/pi²). Un spa de 2 270 L pèse environ 2 270 kg sur une emprise réduite ; il demande ses propres semelles.

---

## Enchaînement du calcul

```
1. Surface (m²)             = Longueur × Largeur
2. Charge totale (kN)       = Surface × (Exploit. + Perm. + Neige) en kPa
3. Surface d'influence (m²) = Surface ÷ Nombre de poteaux
4. Charge par poteau (kN)   = Charge totale ÷ Nombre de poteaux
5. Surface de semelle (m²)  = Charge par poteau ÷ Contrainte admissible
6. Diamètre rond            = 2 × √(Surface ÷ π)   |  Côté carré = √(Surface)
```

### Exemple chiffré : terrasse de 4,9 m × 3,7 m sur sable limoneux

* **Surface :** 4,9 × 3,7 = 18,13 m² (195 pi²)
* **Charge totale :** 18,13 × (1,92 + 0,48) = 18,13 × 2,40 = **43,5 kN**
* **Trame :** 2 rangées × 3 poteaux = 6 poteaux
* **Charge par poteau :** 43,5 ÷ 6 = **7,25 kN** (1 630 lb)
* **Surface de semelle :** 7,25 ÷ 120 = 0,0604 m² = **604 cm²**
* **Diamètre :** 2 × √(0,0604 ÷ π) = **27,7 cm** → coffrage carton **30 cm (12 po)**
* **Béton :** π × 0,15² × 0,30 = 0,0212 m³ par plot → 6 × 0,0212 = **0,13 m³** (0,17 yd³)

---

## Contrainte admissible du sol

| Nature du sol | Contrainte admissible | Référence |
|---|---|---|
| Argile molle, argile sableuse | 72 kPa (1 500 lb/pi²) | IRC R401.4.1 |
| Limon, sable limoneux | 96 kPa (2 000 lb/pi²) | IRC R401.4.1 |
| Granulaire mixte | 120 kPa (2 500 lb/pi²) | Géotechnique |
| Grave, grave sableuse | 144 kPa (3 000 lb/pi²) | IRC R401.4.1 |
| Remblai compacté, sable dense | 192 kPa (4 000 lb/pi²) | Étude de sol |

Sans étude de sol, les services d'urbanisme américains retiennent 72 ou 96 kPa par défaut. Diamètres de coffrage courants : 20, 25, 30, 35, 40, 45, 50 et 60 cm (8 à 24 po). Prévoyez 10 % de béton en plus pour les pertes.

---

## Profondeur hors gel

L'**épaisseur** calculée n'est que la hauteur du plot béton, **pas la profondeur du trou**. La semelle descend sous la profondeur hors gel locale : 75 à 120 cm (30 à 48 po) selon les zones climatiques américaines, couramment 50 cm en plaine tempérée et 90 cm et plus en altitude sous nos climats. Faites repérer les réseaux enterrés avant de forer.

---

## Questions fréquentes

### Combien de plots pour une terrasse ?
Visez une trame de 1,8 à 2,4 m (6 à 8 pi). Une terrasse de 4,9 m × 3,7 m demande typiquement **6 poteaux** (2 rangées de 3), plus la muraillère fixée au bâti.

### Quel diamètre de semelle pour une terrasse courante ?
Pour 1,92 kPa d'exploitation et 0,48 kPa de permanent sur un sol à 120 kPa, comptez **30 cm de diamètre** par plot. Sur argile molle (72 kPa), passez à 35–40 cm ; sur grave compactée (192 kPa), 20–25 cm suffisent.

### Peut-on poser sur plots préfabriqués béton ?
Ils conviennent aux terrasses **basses et autoportantes**, mais ils reposent au niveau du terrain et ne sont **pas protégés du gel** : ils se soulèvent au gel-dégel. Une terrasse fixée au bâtiment exige des semelles coulées descendues hors gel.

### Quel volume de béton prévoir ?
Surface de semelle × épaisseur × nombre de poteaux. Six plots de 30 cm de diamètre sur 30 cm de hauteur consomment moins de 0,15 m³ — le calculateur donne le chiffre exact.
