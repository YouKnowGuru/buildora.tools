## Calculateur de bilan de puissance électrique

Ce calculateur dimensionne le branchement d'une maison individuelle selon la **méthode facultative du NEC (NFPA 70) article 220.82**, le code électrique américain. Saisissez surface habitable, appareils fixes, borne de recharge et matériel de chauffage : l'outil renvoie la puissance appelée en VA et kW, l'intensité, le calibre de tableau, la réserve et la section des conducteurs, en métrique comme en impérial.

> **Honnêteté normative :** le NEC raisonne sur un réseau **120/240 V monophasé à point milieu**. En France, la puissance souscrite (3, 6, 9, 12 kVA…) et l'installation relèvent de la **NF C 15-100** sur réseau 230 V. Les résultats servent à comparer des charges, pas à monter un dossier réseau.

---

## Le calcul en cinq étapes (NEC 220.82)

```
1. Base générale  = (Surface × 32,3 VA/m²)
                  + (Circuits petit électroménager × 1 500 VA)
                  + (1 500 VA buanderie si présente)
2. Appareils fixes = somme des puissances de plaque
3. Simultanéité   : 10 000 VA à 100 % + le reste à 40 %  → demande nette
4. CVC            = max(Froid, Chaud) à 100 %, non simultané
5. Total (VA)     = Demande nette + CVC
   Intensité (A)  = Total ÷ 240 V
```

**32,3 VA/m² (3 VA/pi²)** est le forfait éclairage et prises, appliqué aux surfaces habitables finies : sous-sols non aménagés et garages détachés sont exclus.

---

## Puissances de plaque courantes

| Appareil | Puissance retenue |
|---|---|
| Cuisinière électrique 76 cm | 12 000 W |
| Chauffe-eau 190 L bi-résistance | 4 500 W |
| Chauffe-eau instantané / thermodynamique | 18 000–36 000 W / 1 000 W |
| Sèche-linge | 5 000 VA minimum (NEC 220.54) |
| Lave-vaisselle / broyeur / micro-ondes | 1 200 / 800 / 1 200 W |
| Borne de recharge niveau 2 | 32 A : 7,7 kW · 48 A : 11,5 kW · 80 A : 19,2 kW |
| Climatisation centrale 3 / 4 / 5 t | 4 500 / 5 500 / 7 000 VA |

**Chauffage :** air chaud électrique = 65 % de la plaque (220.82(C)(3)) ; chaudière gaz ou fioul = ventilateur seul, environ 800 VA ; pompe à chaleur avec appoint résistif = 100 % de l'appoint + 75 % du compresseur (approximation courante ; le 220.82(C)(5) dépend des asservissements).

---

## Exemple chiffré : maison tout électrique de 223 m² (2 400 pi²)

* **Éclairage et prises :** 223 × 32,3 = **7 200 VA**
* **Petit électroménager + buanderie :** (2 × 1 500) + 1 500 = **4 500 VA**
* **Appareils fixes :** 12 000 + 4 500 + 5 000 + (1 200 + 800 + 1 200) + 11 520 = **36 220 VA**
* **Charge générale totale :** **47 920 VA**
* **Demande nette :** 10 000 + 0,40 × 37 920 = **25 168 VA**
* **CVC :** PAC + appoint 10 kW → 10 000 + (0,75 × 5 000) = **13 750 VA** (l'emporte sur les 5 000 VA de froid)
* **Total :** 25 168 + 13 750 = **38 918 VA** → 38 918 ÷ 240 = **162,2 A**
* **Conclusion :** tableau **200 A** (81,1 % de charge, 37,8 A de réserve), conducteurs **2/0 AWG cuivre** ou **4/0 AWG aluminium** sous conduit de 50 mm

---

## Sections de branchement (NEC tableau 310.12)

| Calibre | Cuivre 75 °C | Aluminium 75 °C | Conduit |
|---|---|---|---|
| 100 A | 4 AWG | 2 AWG | 32 mm |
| 150 A | 1 AWG | 2/0 AWG | 40 mm |
| **200 A** | **2/0 AWG** | **4/0 AWG** | **50 mm** |
| 400 A | 2 × 2/0 AWG | 2 × 4/0 AWG | 2 × 50 mm |

---

## Questions fréquentes

### Peut-on ajouter une borne de recharge 48 A sur un tableau de 100 A ?
Dans une maison à cuisson, eau chaude ou climatisation électriques, une borne de 48 A (11,5 kW) dépasse presque toujours la capacité calculée d'un 100 A. Si chauffage et eau chaude sont au gaz, un 100 A peut absorber une borne de 32 A. Sinon : passage en 200 A, ou **système de gestion de charge** conforme au NEC 625.42.

### Quelle intensité de branchement pour une maison ?
Avec chauffage gaz et une borne de 48 A, la réponse standard aux États-Unis est **200 A**. En tout électrique avec PAC et borne, le calculateur reste sur 200 A sous 280 m² (3 000 pi²) et passe à 300 ou 400 A au-delà.

### Quelle différence entre VA et watts ?
Le watt mesure la puissance active des charges résistives. Le volt-ampère mesure la puissance apparente (U × I), qui intègre le facteur de puissance des charges inductives. L'article 220 traite 1 W = 1 VA pour le chauffage résistif.

### Qu'est-ce que la règle des 80 % ?
Une charge continue (plus de 3 h sans interruption : recharge, chauffe-eau, convecteurs) ne doit pas dépasser 80 % du calibre du disjoncteur. Pour le branchement selon 220.82, cette diversité est déjà intégrée au facteur de 40 % et au CVC non simultané.
