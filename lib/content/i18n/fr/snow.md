## Calculateur de charge de neige — méthode ASCE 7-22

Ce calculateur applique les dispositions du **chapitre 7 de l'ASCE/SEI 7-22** et de l'**IBC §1608** pour estimer la charge de neige sur une couverture : charge sur toiture plate, réduction de pente, charge minimale et accumulation en congère. Saisissez la charge de neige au sol, l'exposition, la condition thermique, la catégorie de risque et la pente : l'outil renvoie la charge de dimensionnement et l'effort total sur la charpente, en métrique comme en impérial.

> **Honnêteté normative :** l'outil calcule sur la base **américaine** (ASCE 7-22 / IBC). En Europe, la neige relève de l'**Eurocode EN 1991-1-3**, qui repose sur d'autres coefficients de forme et sur la carte de neige de l'annexe nationale. L'outil ne calcule **pas** selon l'Eurocode : servez-vous en pour comparer des ordres de grandeur, et faites valider tout dimensionnement définitif par un bureau d'études.

---

## Enchaînement du calcul

```
Toiture plate  : pf = 0,7 × Ce × Ct × Is × pg        (§7.3)
Toiture pentue : ps = Cs × pf                        (§7.4)
Charge minimale: pm = Is × pg  si pg ≤ 0,96 kPa
                 pm = Is × 0,96 kPa  au-delà         (§7.3.4)
Charge retenue = max(ps ; pm)
Effort total   = Charge retenue × Surface projetée
```

Le facteur **0,7** traduit le fait qu'une partie de la neige au sol ne reste jamais sur une toiture dégagée : balayage par le vent, fonte solaire, échanges thermiques en sous-face. La neige fraîche pèse 80 à 320 kg/m³ (5 à 20 lb/pi³) ; tassée ou verglacée, elle atteint 480 à 960 kg/m³ (30 à 60 lb/pi³).

---

## Coefficients à retenir

| Coefficient | Cas | Valeur |
|---|---|---|
| **Ce** — exposition | Toiture entièrement dégagée | 0,90 |
| | Partiellement abritée (pavillonnaire, boisé) | 1,00 |
| | Abritée (conifères denses, bâtiments plus hauts) | 1,20 |
| **Ct** — thermique | Bâtiment chauffé au-dessus de 18 °C (65 °F) | 1,00 |
| | Non chauffé, auvent ouvert | 1,20 |
| | Enceinte maintenue sous 0 °C (32 °F) | 1,30 |
| | Serre chauffée en continu | 0,85 |
| **Is** — importance | Cat. I : agricole, stockage | 0,80 |
| | Cat. II : habitation, tertiaire courant | 1,00 |
| | Cat. III : rassemblement > 300 pers., écoles | 1,10 |
| | Cat. IV : hôpitaux, casernes, secours | 1,20 |

**Coefficient de pente Cs (§7.4)** — toiture chaude (Ct ≤ 1,0) : Cs = 1,0 jusqu'à 5° puis décroissance linéaire jusqu'à 0 à 70° sur surface glissante non entravée (bac acier, verre, ardoise) ; Cs = 1,0 jusqu'à 30° sur les autres surfaces (bardeaux bitumés, étanchéité, bardeaux de bois). Toiture froide (Ct ≥ 1,2) : palier jusqu'à 10° en surface glissante, jusqu'à 45° en surface non glissante.

---

### Exemple chiffré : pavillon chauffé, pente 6/12, 186 m²

* **Neige au sol :** pg = 1,68 kPa (35 lb/pi², Burlington, Vermont)
* **Exposition :** partiellement abritée → Ce = 1,00
* **Thermique :** chauffé en continu → Ct = 1,00
* **Catégorie de risque :** II, habitation → Is = 1,00
* **Toiture plate :** pf = 0,7 × 1,00 × 1,00 × 1,00 × 1,68 = **1,17 kPa** (24,5 lb/pi²)
* **Pente :** 6/12 = 26,57°, bardeaux bitumés (non glissant, toiture chaude) → Cs = 1,00
* **Charge retenue :** ps = 1,00 × 1,17 = **1,17 kPa**
* **Effort total :** 1,17 × 186 m² = **218 kN**, soit environ **22 tonnes** (49 000 lb) reprises par la charpente

---

## Charges de neige au sol de référence (États-Unis)

| Région | pg courant |
|---|---|
| Sud profond, littoral sud | 0 kPa (pas de dimensionnement neige) |
| Atlantique moyen, vallée de l'Ohio | 0,96 – 1,44 kPa (20 – 30 lb/pi²) |
| Grands Lacs, Nouvelle-Angleterre | 1,44 – 2,39 kPa (30 – 50 lb/pi²) |
| Nord du Maine, Adirondacks | 2,87 – 4,79 kPa (60 – 100 lb/pi²) |
| Montagnes, haute altitude | Étude de site (jusqu'à 7,2 – 14,4 kPa et plus) |

---

## Congères (§7.7)

Quand le vent franchit une toiture haute ou un obstacle, la neige se dépose en congère triangulaire sur la toiture basse adjacente. Les relations de l'ASCE 7-22 sont établies en **unités impériales** (pieds et lb/pi²) :

```
Masse volumique   : γ = min(30 ; 0,13 × pg + 14)                  en lb/pi³
Hauteur de congère: hd = 0,43 × lu^(1/3) × (pg + 10)^(1/4) − 1,5   en pi
Surcharge en crête: pd = hd × γ                                    en lb/pi²
Largeur d'emprise : w = 4 × hd  (congère sous le vent)
```

Le plafond de 30 lb/pi³ correspond à 480 kg/m³. Une congère double couramment la charge locale : elle se vérifie séparément de la charge uniforme, jamais moyennée avec elle.

---

## Questions fréquentes

### Comment calculer la charge de neige sur un toit ?
Partez de la charge de neige au sol, multipliez par 0,7 puis par les coefficients d'exposition, thermique et d'importance pour obtenir la charge sur toiture plate, appliquez le coefficient de pente, puis comparez au minimum réglementaire et retenez la plus grande des deux valeurs.

### Quelle charge de neige retenir pour une charpente ?
Elle dépend entièrement du site. Sur la base américaine, un pavillon chauffé en zone tempérée tombe souvent entre 1,0 et 1,7 kPa (20 à 35 lb/pi²) de charge de dimensionnement ; en montagne, 3 kPa et plus. Vérifiez la carte de neige applicable à votre commune avant toute hypothèse.

### Une pente forte réduit-elle la charge de neige ?
Oui, par le coefficient Cs, mais seulement au-delà d'un palier : 30° sur bardeaux bitumés, 5° seulement sur bac acier ou ardoise, où la neige glisse plus tôt. Attention alors aux zones de réception de la neige évacuée en pied de pente.

### Un toit non chauffé supporte-t-il plus de neige ?
Non, il en reçoit **davantage** : Ct passe de 1,00 à 1,20, ce qui majore la charge de 20 %. Une toiture froide ne fait pas fondre la neige par le dessous, donc le manteau persiste et s'accumule.

### Combien pèse la neige sur ma toiture ?
De 80 kg/m³ pour de la poudreuse fraîche à 480 kg/m³ pour de la neige tassée et verglacée. Trente centimètres de neige lourde représentent déjà environ 1,4 kPa, soit plus que la charge d'exploitation d'un plancher d'habitation.
