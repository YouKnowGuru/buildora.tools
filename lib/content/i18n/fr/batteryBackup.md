## Calculateur de batterie de secours : dimensionnement, onduleur et autonomie

Ce calculateur de **batterie de secours et d'alimentation sans interruption (ASI / onduleur)** permet de dimensionner avec précision la capacité d'un parc de batteries, la puissance de l'onduleur et la puissance photovoltaïque requise pour sécuriser vos équipements critiques en cas de coupure du réseau électrique.

L'outil calcule :

- **Puissance continue totale appelée (W)** et consommation journalière cumulée (Wh ou kWh)
- **Capacité brute recommandée du parc d'accumulateurs** en watt-heures (Wh) et ampères-heures (Ah)
- **Puissance nominale de l'onduleur** avec marge de démarrage
- **Autonomie estimée** à régime nominal
- **Puissance solaire de recharge quotidienne (W)** pour un système autonome
- **Fourchette budgétaire prévisionnelle** selon la technologie retenue (LiFePO₄ ou plomb-acide / AGM)

---

## 1. Composition générale d'une installation de secours

Un dispositif de secours par batterie s'appuie sur quatre organes interconnectés :

| Composant | Rôle technique | Critère de choix |
|---|---|---|
| **Parc de batteries** | Stocke l'énergie sous forme chimique en courant continu | Capacité utile (Wh / Ah) et tension nominale (12V, 24V ou 48V) |
| **Onduleur / Chargeur** | Transforme le courant continu (CC) en courant alternatif (CA 230V) | Puissance continue et tolérance aux pointes de démarrage |
| **Régulateur de charge** | Pilote la charge depuis les panneaux photovoltaïques | Régulateur MPPT haute performance |
| **Inverseur de source (ATS)** | Bascule automatiquement l'alimentation en cas de coupure réseau | Temps de commutation rapide (inférieur à 20 ms) |

---

## 2. Profondeur de décharge (DoD) et durabilité

La **profondeur de décharge (Depth of Discharge ou DoD)** désigne la part maximale de la capacité nominale pouvant être extraite à chaque cycle sans dégrader prématurément la cellule électrochimique.

```
Energie restituable (Wh) = Capacite nominale (Wh) x (DoD / 100)
```

| Chimie d'accumulateur | Profondeur de décharge (DoD) | Nombre de cycles constructeur | Rendement de conversion global |
|---|---|---|---|
| **LiFePO₄ (Lithium fer phosphate)** | 80% – 90% | 3 500 – 5 000 cycles (10 à 15 ans) | 95% – 98% |
| **Lithium-ion conventionnel (NMC)** | 80% | 1 500 – 2 500 cycles | 92% – 95% |
| **Plomb AGM étanche** | 50% | 400 – 600 cycles (2 à 4 ans) | 80% – 85% |
| **Plomb ouvert stationnaire (OPzS / GEL)** | 50% | 500 – 900 cycles | 78% – 84% |

> **Constat économique :** Les accumulateurs **LiFePO₄** délivrent une énergie exploitable bien supérieure à encombrement égal et effectuent jusqu'à dix fois plus de cycles que le plomb, garantissant un coût par kWh restitué considérablement inférieur sur la durée de vie de l'installation.

---

## 3. Formules de dimensionnement pas à pas

```
1. Energie globale requise (Wh) = Puissance continue (W) x Autonomie voulue (h)

2. Capacite brute du parc (Wh) = Energie requise (Wh) / (Rendement onduleur x DoD)

3. Capacite en amperes-heures (Ah) = Capacite brute (Wh) / Tension de parc (V)

4. Puissance minimale onduleur (W) = Puissance continue (W) x 1,25

5. Puissance solaire d'appoint (W) = Consommation quotidienne (Wh) / (Heures d'ensoleillement x 0,77)
```

### Exemple concret : sauvegarde d'une maison individuelle pendant 8 heures

- **Équipements maintenus :** Réfrigérateur combiné (120W), box internet et domotique (50W), éclairage LED (60W), congélateur et circulateur de chauffage (120W) = **350 W**
- **Autonomie ciblée :** 8 heures
- **Besoin d'énergie :** 350 W × 8 h = **2 800 Wh (2,8 kWh)**
- **Configuration avec cellules LiFePO₄ (DoD 80%) et onduleur pur sinus (rendement 92%) :**
  - Capacité brute indispensable : 2 800 / (0,92 × 0,80) = **3 804 Wh (3,8 kWh)**
  - Sur un bus continu 48V : 3 804 Wh / 48V = **79,25 Ah** (soit un module standard 48V 100Ah)
  - Onduleur recommandé : 350 W × 1,25 = 437,5 W (onduleur pur sinus d'au moins 800W à 1 000W pour absorber le courant de démarrage des compresseurs)

---

## 4. Choix de la tension du parc : 12V, 24V ou 48V

| Tension de fonctionnement | Puissance continue préconisée | Section des câbles cuivre | Domaine d'emploi typique |
|---|---|---|---|
| **12 V** | Moins de 1 000 W | Très forte section (courant élevé) | Camping-cars, nautisme, petits abris de jardin |
| **24 V** | 1 000 W à 3 000 W | Section modérée | Ateliers isolés, télécommunications, chalets |
| **48 V** | Au-delà de 3 000 W | Section réduite et économique | Maisons individuelles complètes, stockage solaire résidentiel |

---

## Foire aux questions

### Combien de panneaux solaires faut-il pour recharger mon parc de batteries en une journée ?
Divisez la consommation journalière en watt-heures par le nombre moyen d'heures d'ensoleillement maximal équivalent de votre région (généralement 3,5 à 4,5 heures en France et en Europe tempérée) et appliquez un facteur de rendement de 77 %. Pour recharger 3 800 Wh par jour avec 4 heures d'ensoleillement, prévoyez environ 1 200 W de modules solaires, soit trois panneaux de 400 W.

### Pourquoi choisir un onduleur à onde sinusoïdale pure ?
Un onduleur pur sinus restitue une onde de tension identique à celle distribuée par le réseau public. Les appareils comportant des moteurs à induction (pompes, ventilateurs, réfrigérateurs) ou des alimentations à découpage sophistiquées chauffent excessivement ou tombent en panne lorsqu'ils sont alimentés par un onduleur à onde carrée ou pseudo-sinusoïdale.

### Quel est l'impact du froid hivernal sur la capacité d'une batterie ?
Les températures basses réduisent la mobilité des ions au sein de l'électrolyte. Une batterie au plomb perd approximativement 20 % à 30 % de sa capacité effective à 0 °C. Les batteries LiFePO₄ conservent une excellente capacité de décharge par temps froid mais ne doivent jamais être rechargées en dessous de 0 °C sans système de préchauffage intégré sous peine d'endommager irrémédiablement les cellules.
