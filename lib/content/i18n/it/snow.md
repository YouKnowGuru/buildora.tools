## Calcolatore del carico da neve in copertura secondo ASCE 7-22

**Avvertenza tecnica.** Questo strumento applica le disposizioni sul carico da neve del **capitolo 7 di ASCE/SEI 7-22** e del **§1608 dell'IBC**, cioè la normativa statunitense. Serve per stime preliminari e per capire il metodo. In Italia il carico da neve di progetto si determina con il **§3.4 delle NTC 2018**, che usa parametri e zone diverse: i risultati del calcolatore non sostituiscono quel calcolo. Qualsiasi verifica strutturale definitiva deve essere firmata da un progettista abilitato.

---

## Che cos'è il carico da neve e perché conta

Il carico da neve è la forza verticale che l'orditura di copertura — puntoni, capriate, arcarecci, tavolato o lamiera grecata — deve sostenere quando la neve si accumula. Nei climi freddi è spesso l'azione ambientale dominante, più del vento.

Il punto critico è la densità. La neve fresca pesa **0,8 – 3,1 kN/m³** (5 – 20 lb/ft³), cioè 80 – 320 kg/m³; la neve bagnata e compattata con croste di ghiaccio arriva a **4,7 – 9,4 kN/m³** (30 – 60 lb/ft³), fino a quasi una tonnellata per metro cubo. Una nevicata seguita da pioggia può quindi triplicare il carico in poche ore, senza che lo spessore aumenti. Sottostimarlo porta a frecce eccessive, fessurazione dei controsoffitti e, nei casi peggiori, al collasso della copertura.

---

## Sequenza di calcolo ASCE 7-22

```
carico neve al suolo (pg)
  -> coefficiente di esposizione Ce      (Tab. 7.3-1)
  -> coefficiente termico Ct             (Tab. 7.3-3)
  -> coefficiente di importanza Is       (Tab. 1.5-2)
  -> copertura piana: pf = 0,7 x Ce x Ct x Is x pg
  -> riduzione per pendenza Cs           (par. 7.4)
  -> copertura inclinata: ps = Cs x pf
  -> carico minimo pm                    (par. 7.3.4)
  -> carico di progetto = max(ps, pm)
  -> carico totale = carico di progetto x superficie in proiezione
  -> verifica degli accumuli hd, pd, w   (par. 7.7)
```

---

## Carico da neve al suolo (pg)

È un valore da mappa, con probabilità annuale di superamento del 2% (tempo di ritorno 50 anni), ricavato dagli strumenti ASCE 7-22 o dal codice locale.

| Area geografica (USA) | Carico al suolo pg |
|---|---|
| Sud profondo e coste meridionali | 0 kPa, nessuna verifica richiesta |
| Medio Atlantico e valle dell'Ohio | 0,96 – 1,44 kPa (20 – 30 psf) |
| Grandi Laghi, Midwest settentrionale, New England | 1,44 – 2,39 kPa (30 – 50 psf) |
| Maine settentrionale, Adirondacks, Michigan | 2,87 – 4,79 kPa (60 – 100 psf) |
| Montagne dell'Ovest e alta quota | studio specifico di sito, oltre 7 – 14 kPa |

---

## Copertura piana: la formula di base

Per coperture piane o a debole pendenza (fino a 5°, circa 1 su 12):

```
pf = 0,7 x Ce x Ct x Is x pg
```

Il coefficiente 0,7 riconosce che non tutta la neve al suolo si deposita su una copertura esposta, per effetto del vento, dell'irraggiamento solare e dello scambio termico.

* **Ce, esposizione:** copertura completamente esposta 0,9 — parzialmente esposta 1,0 (caso ordinario) — riparata da alberatura fitta o edifici più alti 1,2.
* **Ct, condizione termica:** edificio riscaldato 1,0 — non riscaldato o tettoia aperta 1,2 — cella frigorifera sotto zero 1,3 — serra riscaldata in continuo 0,85.
* **Is, importanza:** categoria I agricola o deposito 0,8 — II residenziale e commerciale ordinario 1,0 — III scuole e affollamento superiore a 300 persone 1,1 — IV ospedali e presidi essenziali 1,2.

---

## Riduzione per pendenza e carico minimo

All'aumentare della pendenza la neve scivola, e il carico si riduce con il coefficiente Cs, applicato come `ps = Cs x pf`. Il valore dipende dalla temperatura della copertura e dalla scabrezza del manto:

| Condizione | Cs = 1,0 fino a | Cs = 0 a |
|---|---|---|
| Copertura calda, manto liscio (lamiera, vetro, ardesia) | 5° | 70° |
| Copertura calda, altri manti (tegole bituminose, scandole) | 30° | 70° |
| Copertura fredda, manto liscio | 10° | 70° |
| Copertura fredda, manto non liscio | 45° | 70° |

Sotto i 15° di pendenza entra in gioco il **carico minimo pm**, che prevale su ps: vale `Is x pg` se pg non supera 0,96 kPa (20 psf), altrimenti `Is x 0,96 kPa`. Serve a coprire il caso della neve fusa che non defluisce e ristagna sulla membrana.

---

## Accumuli di neve

Quando il vento scavalca una copertura più alta o un ostacolo, la neve viene trasportata e si deposita a cuneo sulla falda più bassa. Le formule ASCE lavorano in unità imperiali (piedi, psf, lb/ft³):

```
densita  gamma = min(30 ; 0,13 x pg + 14)      lb/ft3
altezza  hd    = 0,43 x lu^(1/3) x (pg + 10)^(1/4) - 1,5      ft
picco    pd    = hd x gamma                    psf
estesa   w     = 4 x hd  (accumulo sottovento) ft
```

L'accumulo è la causa più frequente dei crolli parziali: il carico locale può valere due o tre volte quello uniforme, e si concentra proprio dove l'orditura è già interrotta da un cambio di quota.

---

## Esempio svolto

Edificio residenziale a Burlington, Vermont, con pg = 1,68 kPa (35 psf), esposizione parziale (Ce = 1,0), riscaldato (Ct = 1,0), categoria II (Is = 1,0), falda 6 su 12 pari a 26,6° con tegole bituminose, superficie in proiezione orizzontale 186 m² (2.000 pi²).

1. Copertura piana: pf = 0,7 × 1,0 × 1,0 × 1,0 × 1,68 = **1,17 kPa** (24,5 psf)
2. Pendenza: manto non liscio sotto i 30°, quindi Cs = 1,0 e ps = **1,17 kPa**
3. Carico totale: 1,17 × 186 = **218 kN**, circa **22 tonnellate** (49.000 lb) sull'orditura

---

## Come si calcola in Italia: NTC 2018

La struttura del calcolo è simile ma i parametri no. Il §3.4 delle NTC 2018 scrive il carico come `qs = qsk x mu1 x CE x Ct`, dove qsk è il carico di riferimento al suolo per zona e altitudine:

| Zona NTC 2018 | qsk fino a 200 m di quota |
|---|---|
| Zona I alpina | 1,50 kN/m² |
| Zona I mediterranea | 1,50 kN/m² |
| Zona II | 1,00 kN/m² |
| Zona III | 0,60 kN/m² |

Oltre i 200 m il valore cresce con la quota secondo le formule di zona, e in alta montagna supera facilmente i 4 – 6 kN/m². Il coefficiente di forma mu1 vale 0,80 per pendenze fino a 30° e decresce linearmente fino a 0 a 60°, mentre CE vale 0,9 nei siti battuti dai venti, 1,0 in condizioni normali e 1,1 nei siti riparati. Due differenze pratiche: le NTC non applicano il fattore 0,7 statunitense, e il coefficiente di importanza non compare come moltiplicatore ma è assorbito dalla vita nominale e dai coefficienti parziali.

---

## Domande frequenti

### Quanto pesa la neve su una copertura?

Con 30 cm di neve fresca a 200 kg/m³ si arriva a circa **0,6 kN/m²** (12,5 psf). Gli stessi 30 cm, se la neve si è compattata e bagnata fino a 500 kg/m³, valgono **1,5 kN/m²** (31 psf). Lo spessore da solo non dice nulla: serve stimare la densità.

### Quando è obbligatorio togliere la neve dal tetto?

Non esiste una soglia normativa generale. La regola operativa è intervenire quando l'accumulo stimato si avvicina al carico di progetto della copertura, e in ogni caso quando si formano cornici di ghiaccio in gronda o si notano cedimenti visibili. Lo spalamento va fatto in modo simmetrico: scaricare una sola falda introduce una condizione di carico asimmetrico che il calcolo di progetto potrebbe non contemplare.

### I risultati del calcolatore valgono per un progetto italiano?

No, non come valori di progetto. Servono per confrontare gli ordini di grandezza e per capire quanto pesano esposizione, pendenza e accumuli. Per una pratica edilizia italiana il carico va ricavato da zona e altitudine secondo NTC 2018.

### Perché una copertura in lamiera regge un carico di neve minore?

Non lo regge minore: il calcolo gliene attribuisce meno. Il manto liscio favorisce lo scivolamento, quindi Cs si riduce già a partire da 5° di pendenza. Il rovescio della medaglia è che la neve scarica tutta insieme a valle della falda, e va previsto un fermaneve dove sotto ci sono ingressi, passaggi o altre coperture.
