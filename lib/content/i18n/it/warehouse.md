## Come calcolare la superficie di un magazzino

Dimensionare un magazzino è una delle decisioni più costose della logistica: sottostimare la superficie significa congestione, merce danneggiata e rischi per gli operatori, sovrastimarla significa legarsi per anni a un canone di locazione che non serve. Questo calcolatore ricostruisce la superficie necessaria a strati: impronta di stoccaggio delle scaffalature, corsie di manovra dei carrelli, aree operative di ricevimento e spedizione, e una stima del canone.

**Nota sulla taratura.** I parametri di riferimento sono quelli del mercato statunitense: pallet GMA da 48 × 40 pollici, superficie in piedi quadrati, canoni espressi in dollari per piede quadrato all'anno e distanziamenti antincendio impostati sulle regole NFPA. In Italia il bancale dominante è l'EPAL 1200 × 800, i canoni si esprimono in euro per metro quadro all'anno e la prevenzione incendi segue il D.M. 3 agosto 2015. Converti sempre prima di confrontare.

---

## La formula a strati

```
posti a terra    = numero bancali / livelli di scaffalatura
impronta         = posti a terra x area del posto pallet
corsie           = impronta x [fattore corsia / (1 - fattore corsia)]
aree operative   = (impronta + corsie) x 0,25
superficie totale = impronta + corsie + aree operative
```

**Esempio.** 500 bancali EPAL, scaffalatura a 4 livelli, carrello retrattile con corsie strette al 30%:

* Posti a terra: 500 ÷ 4 = **125**
* Impronta di stoccaggio: 125 × 1,16 = **145 m²** (1.561 pi²)
* Corsie: 145 × (0,30 ÷ 0,70) = **62 m²**
* Subtotale stoccaggio e corsie: **207 m²**
* Aree operative, +25% per ribalte e staging: **52 m²**
* **Superficie totale necessaria: 259 m²** (2.788 pi²)

Con pallet GMA da 1,40 m² lo stesso magazzino richiede 312 m²: vent'anni di logistica europea su bancale 1200 × 800 valgono un 17% di superficie in meno a pari numero di posti.

---

## Dimensioni dei bancali e area del posto pallet

L'area del posto pallet non coincide con l'ingombro del bancale: va aggiunta la sporgenza del carico (2 – 5 cm per lato), il gioco fra i montanti della scaffalatura e i distanziamenti antincendio fra le pile.

| Standard | Dimensioni | Area del posto pallet | Diffusione |
|---|---|---|---|
| EPAL / EUR 1 | 1200 × 800 mm | **1,16 m²** (12,5 pi²) | Italia, Unione Europea |
| EUR 2, bancale industriale | 1200 × 1000 mm | **1,40 m²** (15,0 pi²) | Europa, Regno Unito |
| GMA americano | 1219 × 1016 mm | **1,40 m²** (15,0 pi²) | Stati Uniti, Canada |
| Fuori misura, pallet per fusti | 1219 × 1219 mm | **1,67 m²** (18,0 pi²) | Chimica, agroalimentare |

---

## Sistemi di stoccaggio a confronto

| Sistema | Selettività | Utilizzo della superficie | Adatto a |
|---|---|---|---|
| Portapallet tradizionale, singola profondità | 100% | 35 – 45% | Molti codici, alta rotazione, FIFO |
| Doppia profondità | 50% | 50 – 60% | Codici medi, 2 – 4 bancali per articolo |
| Drive-in e drive-through | Bassa, LIFO | 65 – 75% | Pochi codici, grandi volumi, stagionalità |
| Push-back | Media, 2 – 6 posizioni | 60 – 70% | Alta densità con cicli più rapidi del drive-in |
| Impilamento a terra | Bassa | 40 – 55% | Collettame rigido, fusti, pneumatici |

L'impilamento a terra sembra il più economico perché non richiede scaffalature, ma il limite non è la superficie: è la resistenza allo schiacciamento dell'imballo, che raramente consente più di due o tre bancali in altezza.

---

## Larghezza delle corsie e tipo di carrello

La scelta del mezzo può cambiare la superficie coperta fino al 35%.

* **Corsia larga, 3,6 – 4,0 m.** Carrello frontale controbilanciato a tre o quattro ruote. Costo di acquisto e manutenzione minimo, operatori già formati, ma le corsie assorbono il 40 – 45% del pavimento.
* **Corsia stretta, 2,6 – 3,0 m.** Carrello retrattile o articolato. Riduce lo spazio di manovra del 25 – 30% e lavora fino a 8 – 11 m di altezza; richiede pavimento in piano e tolleranze controllate.
* **Corsia molto stretta, 1,7 – 2,0 m.** Carrello trilaterale o commissionatore uomo a bordo, con guida meccanica o filoguida. Massimizza la densità e arriva oltre i 12 m, ma richiede investimento elevato e pavimento industriale a planarità certificata.

---

## Ripartizione tipica delle superfici

In un centro distributivo ben progettato la superficie si distribuisce così:

* Stoccaggio e scaffalature: 40 – 50%
* Corsie di transito e aree di sosta: 25 – 30%
* Ribalte di ricevimento e spedizione: 15 – 20%
* Confezionamento, servizi a valore aggiunto, resi: 5 – 8%
* Uffici, servizi igienici, locale ricarica batterie: 3 – 7%

La soglia operativa da non superare è l'**85% della capacità nominale**: oltre quel livello la produttività crolla perché ogni movimentazione richiede doppie manipolazioni e attese in corsia.

---

## Altezza utile e numero di livelli

Prima di scegliere i livelli di scaffalatura va misurata l'altezza libera reale, cioè dalla quota del pavimento finito all'ostacolo più basso: trave, testa sprinkler o corpo illuminante.

| Altezza utile | Livelli di bancali |
|---|---|
| 4,9 – 5,5 m (16 – 18 ft) | 2 – 3 |
| 6,1 – 7,3 m (20 – 24 ft) | 3 – 4 |
| 8,5 – 9,8 m (28 – 32 ft) | 4 – 5 |
| 11,0 – 12,2 m (36 – 40 ft) | 6 – 8 |

Due vincoli italiani da verificare prima di alzare le scaffalature: la protezione antincendio, perché l'impianto sprinkler progettato secondo **UNI EN 12845** condiziona altezza delle pile e distanziamenti, e la verifica sismica delle scaffalature portapallet, per la quale il riferimento è la **EN 16681**, con obbligo di targa di portata e di ispezioni periodiche secondo la EN 15635. Un magazzino con quantitativi rilevanti di materiale combustibile rientra inoltre fra le attività soggette a controllo dei Vigili del Fuoco ai sensi del D.P.R. 151/2011.

---

## Domande frequenti

### Quanta superficie serve per 1.000 bancali?

Con scaffalatura tradizionale a 4 livelli e carrelli retrattili in corsia stretta servono circa **600 – 700 m²** (6.500 – 7.500 pi²) comprese corsie e aree di ribalta. Con impilamento a terra su due livelli si sale a **1.100 – 1.300 m²**, cioè il doppio della superficie per la stessa merce.

### Qual è una buona percentuale di utilizzo?

In un magazzino a scaffalatura selettiva l'impronta effettiva dei bancali vale **35 – 45%** della superficie coperta. Il restante 55 – 65% è corsie, ribalte, postazioni di confezionamento e aree di sosta. Percentuali superiori al 50% indicano di norma un sistema a densità alta, con perdita di selettività.

### Come si passa dalla superficie al canone di locazione?

Il calcolatore ragiona in dollari per piede quadrato all'anno: 929 m² (10.000 pi²) a 9 $/pi² fanno 90.000 $ all'anno, cioè 7.500 $ al mese, al netto degli oneri accessori. In Italia il canone si esprime in euro per metro quadro all'anno e va confrontato dopo la conversione, perché 9 $/pi² equivalgono a circa 97 $/m². Ai canoni logistici italiani vanno sommate IMU, assicurazione e spese consortili, che nei contratti nordamericani viaggiano separate come triple net.

### Quante ribalte di carico servono?

La regola logistica è **una ribalta ogni 900 – 950 m²** di magazzino per la distribuzione a rotazione rapida, e una ogni 1.850 – 2.300 m² per lo stoccaggio di massa a bassa movimentazione. Conta anche la profondità del piazzale di manovra: sotto i 30 m un autoarticolato non riesce a posizionarsi in retromarcia senza manovre multiple.

### Che differenza c'è fra superficie lorda e superficie utile di stoccaggio?

La superficie lorda è l'ingombro del fabbricato misurato fra i fili esterni delle pareti. La superficie utile di stoccaggio è la sola porzione di pavimento effettivamente occupata da scaffalature o pile di bancali. Nei contratti di locazione si paga la prima, mentre la seconda è quella che genera capacità: è il rapporto fra le due a definire l'efficienza dell'immobile.
