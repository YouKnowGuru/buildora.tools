## Calcolatore per il dimensionamento dell'addolcitore

Lo strumento dimensiona un addolcitore a scambio ionico partendo dal numero di persone, dalla durezza dell'acqua, dal contenuto di ferro e manganese e dall'intervallo di rigenerazione desiderato. Restituisce la capacità ciclica, il volume di resina, il consumo annuo di sale, l'acqua di scarico per rigenerazione e la portata di servizio con il diametro di attacco consigliato.

**Nota sulla taratura.** Il calcolatore segue le formule della **Water Quality Association** statunitense e la norma **NSF/ANSI 44**: la durezza è espressa in grani per gallone (GPG), la capacità in grani, il sale in libbre e i consumi in galloni al giorno. In Italia si lavora in **gradi francesi (°f)** e in **°f × m³**, il consumo domestico è circa la metà del valore statunitense di riferimento e le apparecchiature ricadono nel **D.M. 25/2012**. Le conversioni sono più sotto: usarle è indispensabile, altrimenti l'addolcitore esce sovradimensionato.

---

## Unità di durezza e conversioni

```
1 grado francese (1 °f) = 10 mg/l di carbonato di calcio
1 GPG                   = 17,118 mg/l = 1,71 °f
1 grado tedesco (1 °dH) = 17,8 mg/l = 1,78 °f
1 °f x m3               = 10 g di carbonato di calcio = 154 grani
```

| Durezza in °f | mg/l | Classificazione WQA convertita |
|---|---|---|
| 0 – 1,7 | 0 – 17 | Dolcissima |
| 1,7 – 6 | 17 – 60 | Dolce |
| 6 – 12 | 60 – 120 | Mediamente dura |
| 12 – 18 | 120 – 180 | Dura |
| 18 – 24 | 180 – 240 | Molto dura |
| Oltre 24 | Oltre 240 | Durissima |

La scala statunitense è più severa di quella in uso in Italia, dove si parla comunemente di acqua dolce sotto i 15 °f, media fra 15 e 25 °f e dura oltre i 25 °f. Gran parte delle acque di rete italiane, in particolare quelle di origine carbonatica dell'Appennino e delle falde padane, si colloca fra 25 e 40 °f: valori che sulla scala WQA finiscono tutti nella riga "durissima".

---

## Compensazione di ferro e manganese

L'analisi standard misura solo calcio e magnesio, ma il ferro e il manganese disciolti si fissano anch'essi sulla resina e vanno conteggiati.

```
durezza compensata = durezza + (ferro mg/l x 6,8) + (manganese mg/l x 3,4)   in °f
```

Un milligrammo per litro di ferro disciolto pesa come 6,8 °f di durezza aggiuntiva, un milligrammo di manganese come 3,4 °f. La regola vale solo per il **ferro bivalente disciolto**, quello che esce limpido dal rubinetto e ingiallisce all'aria: il ferro già ossidato in particelle richiede un filtro ossidante a monte, non un addolcitore più grande.

---

## Sequenza di dimensionamento

```
consumo giornaliero = persone x litri per persona al giorno
domanda giornaliera = consumo in m3 x durezza compensata in °f    -> °f x m3
capacita richiesta  = domanda giornaliera x giorni fra rigenerazioni x (1 + riserva)
```

**Esempio italiano.** Quattro persone, 180 litri a testa al giorno, durezza 30 °f, ferro 0,3 mg/l, rigenerazione ogni 7 giorni con riserva del 20%:

* Durezza compensata: 30 + 0,3 × 6,8 = **32 °f**
* Consumo: 4 × 180 = 720 litri, cioè **0,72 m³ al giorno**
* Domanda giornaliera: 0,72 × 32 = **23 °f × m³**
* Capacità richiesta: 23 × 7 × 1,20 = **193 °f × m³**, quindi un apparecchio da 207 °f × m³ con **28 litri di resina**

Lo stesso nucleo familiare calcolato con il valore statunitense di 284 litri per persona al giorno arriva a 307 °f × m³ e porta a scegliere 42 litri di resina: un gradino e mezzo di troppo, con più sale, più acqua di scarico e un letto di resina che lavora sempre lontano dal suo punto di efficienza. È l'errore più costoso che si può fare con questo calcolatore in Italia.

---

## Taglie commerciali

| Capacità in grani | Capacità in °f × m³ | Resina | Bombola |
|---|---|---|---|
| 24.000 | 156 | 21 litri | 20 × 112 cm |
| 32.000 | 207 | 28 litri | 23 × 122 cm |
| 40.000 | 259 | 35 litri | 25 × 112 cm |
| 48.000 | 311 | 42 litri | 25 × 137 cm |
| 64.000 | 415 | 57 litri | 30 × 132 cm |
| 80.000 | 518 | 71 litri | 33 × 137 cm |
| 96.000 | 622 | 85 litri | 36 × 165 cm |
| Oltre 96.000 | Oltre 622 | Doppia colonna alternata | Uso collettivo |

---

## Sale, acqua di scarico e sodio

Alla taratura ad alta efficienza si consumano **128 grammi di sale per litro di resina** per ogni rigenerazione; la taratura standard, più generosa, arriva a 240 g/litro e restituisce più capacità per ciclo ma con un'efficienza del sale inferiore di circa la metà.

```
sale per rigenerazione = litri di resina x 0,128 kg
sale annuo             = sale per rigenerazione x 365 / giorni fra rigenerazioni
```

Nell'esempio: 28 × 0,128 = 3,6 kg per ciclo, 52 cicli l'anno, quindi **187 kg di sale**, circa sette sacchi da 25 kg. Ogni rigenerazione scarica in fognatura fra 130 e 250 litri di acqua salina, indicativamente 5 litri per litro di resina.

| Tipo di sale | Purezza | Note |
|---|---|---|
| Pastiglie da salgemma evaporato | Oltre 99,6% NaCl | La scelta corrente, minimo rischio di impaccamento |
| Cristalli da salina solare | Oltre 99,5% NaCl | Più solubile, può impastarsi nei tini vecchi |
| Cloruro di potassio | Oltre 99% KCl | Alternativa senza sodio, circa 30% meno efficiente |

Un aspetto che il calcolatore non tratta e che in Italia è dirimente: lo scambio ionico sostituisce calcio con **sodio**, e ogni grado francese rimosso aggiunge circa **4,6 mg/l di sodio**. Abbattere 20 °f significa aggiungere 92 mg/l, che vanno confrontati con il limite di 200 mg/l previsto per l'acqua destinata al consumo umano. Su acque molto dure l'addolcimento totale del ramo potabile non è quindi praticabile: si addolcisce parzialmente in miscelazione, oppure si tratta solo il circuito tecnico.

---

## Portata di servizio

| Bagni | Portata di punta | Attacco consigliato |
|---|---|---|
| 1 | 1,6 m³/h | 3/4 di pollice, DN20 |
| 2 | 2,3 m³/h | 1 pollice, DN25 |
| 3 | 3,0 m³/h | 1 pollice, DN25 |
| 4 | 3,6 m³/h | 1 pollice e 1/4, DN32 |
| 5 o più | Oltre 4,3 m³/h | DN32 ad alta portata |

L'apparecchio deve sostenere la portata di punta senza scendere sotto 1,7 – 2,1 bar di pressione residua. Sottodimensionare l'attacco è un errore che non si corregge con una bombola più grande: la perdita di carico si genera nella valvola, non nel letto di resina.

---

## Il quadro normativo italiano

Tre riferimenti che il modello statunitense non contempla:

* **D.Lgs. 18/2023**, che ha sostituito il D.Lgs. 31/2001, disciplina l'acqua destinata al consumo umano. La durezza è trattata come parametro indicatore, con l'intervallo consigliato storicamente fissato fra 15 e 50 °f: un'acqua troppo addolcita non è considerata migliore.
* **D.M. 25/2012**, che regola le apparecchiature di trattamento dell'acqua potabile, gli obblighi di dichiarazione di conformità dei materiali a contatto e la manutenzione. La prassi applicativa esclude di scendere sotto i 15 °f sul ramo destinato al consumo umano.
* **UNI 8065**, che impone il trattamento dell'acqua negli impianti termici civili e fissa i limiti di durezza per il circuito di riscaldamento e per la produzione di acqua calda sanitaria. È spesso la vera ragione tecnica per installare un addolcitore: proteggere caldaia, scambiatori e pompe di calore, non migliorare il gusto dell'acqua.

---

## Domande frequenti

### Che addolcitore serve per una famiglia di quattro persone?

Con 180 litri a testa al giorno e acqua a 30 °f servono circa 193 °f × m³, cioè un apparecchio da **28 litri di resina** con rigenerazione settimanale. Se la durezza sale a 40 °f o è presente ferro, si passa al gradino successivo da 35 – 42 litri. Con i valori di consumo statunitensi preimpostati il risultato esce sistematicamente più grande: conviene inserire il consumo reale.

### Come si passa da GPG a gradi francesi?

Si moltiplica per 1,71: 15 GPG corrispondono a **25,7 °f**. Per andare da milligrammi per litro a gradi francesi si divide per 10, e per convertire i gradi tedeschi si moltiplica per 1,78. I rapporti di analisi dei gestori italiani riportano di norma sia i mg/l di carbonato di calcio sia i °f.

### Ogni quanto deve rigenerare?

Gli apparecchi volumetrici rigenerano in funzione dei litri effettivamente trattati, in genere ogni 3 – 14 giorni. Il compromesso corrente è **ogni 7 giorni** alla taratura di sale ad alta efficienza. Intervalli più lunghi fanno risparmiare sale ma lasciano la resina ferma e umida a lungo, condizione che favorisce la proliferazione batterica: per questo molti apparecchi impongono comunque una rigenerazione di sicurezza dopo alcuni giorni di inutilizzo.

### Che differenza c'è fra addolcitore e filtro?

L'addolcitore rimuove calcio, magnesio e ferro disciolto per scambio ionico, sostituendoli con sodio. Non rimuove cloro, nitrati, batteri, piombo o sedimenti. Per quelli servono filtri a carbone attivo, osmosi inversa o lampada UV. La configurazione più comune mette a monte un filtro a sedimenti, poi l'addolcitore, e solo sul punto d'uso potabile un affinamento finale.

### L'acqua addolcita si può bere?

Sì, entro i limiti di legge, ma con due attenzioni: il contenuto di sodio aggiunto va verificato quando la durezza di partenza è alta, e non conviene scendere sotto i 15 °f perché un'acqua troppo povera di sali è meno equilibrata dal punto di vista organolettico e più aggressiva verso alcuni materiali dell'impianto. La soluzione corrente è la miscelazione regolata sulla valvola.
