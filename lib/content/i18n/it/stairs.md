## Calcolatore di scale: alzata, pedata e cosciali

Lo strumento calcola alzata esatta, pedata, numero di gradini, sviluppo in pianta, lunghezza del cosciale, pendenza della rampa, altezza libera di passaggio e sviluppo del corrimano partendo da una sola misura di cantiere: il dislivello fra i due piani finiti.

**Nota sulla taratura.** I limiti dimensionali imposti dal calcolatore sono quelli dell'**IRC §R311.7** per il residenziale e dell'**IBC §1011** per il non residenziale, cioè i codici statunitensi. Le scale italiane rispondono al D.M. 236/1989 e ai regolamenti edilizi comunali, che sono più restrittivi sulla pedata minima: una scala validata da questo strumento può risultare non conforme in Italia. Usalo per la geometria e il taglio, poi verifica i minimi locali.

---

## Terminologia

| Termine | Significato |
|---|---|
| Dislivello totale | Altezza verticale da pavimento finito a pavimento finito. È l'unica misura di partenza necessaria. |
| Alzata | Altezza verticale del singolo gradino. |
| Pedata | Profondità utile di calpestio del gradino. |
| Aggetto o sbalzo | Sporgenza del gradino oltre il filo dell'alzata, di norma 20 – 30 mm. |
| Cosciale | L'elemento inclinato portante, dentellato per accogliere gradini e alzate. |
| Sviluppo | Proiezione orizzontale dell'intera rampa: pedata × numero di pedate. |
| Altezza libera di passaggio | Distanza verticale fra lo spigolo del gradino e l'ostacolo sovrastante. |
| Regola di Blondel | Il criterio ergonomico storico: 2 alzate + 1 pedata compresi fra 62 e 64 cm. |

---

## La sequenza di calcolo

```
dislivello totale = quota pavimento finito superiore - quota pavimento finito inferiore
numero di alzate  = arrotonda(dislivello / alzata obiettivo)
alzata esatta     = dislivello / numero di alzate
numero di pedate  = numero di alzate - 1
sviluppo          = numero di pedate x pedata
cosciale          = radice(dislivello al quadrato + sviluppo al quadrato)
pendenza          = arcotangente(alzata / pedata)
verifica Blondel  = 2 x alzata + pedata
```

La misura va presa fra i **pavimenti finiti**, non fra i solai grezzi. Dimenticare 2 cm di gres al piano superiore significa sbagliare l'ultima alzata di 2 cm, che è il classico gradino su cui si inciampa. All'interno della stessa rampa tutte le alzate devono essere identiche: l'IRC ammette una tolleranza di 3/8 di pollice (circa 10 mm), la prassi italiana è ancora più stretta.

---

## Limiti dimensionali a confronto

| Riferimento | Alzata massima | Pedata minima | Ambito |
|---|---|---|---|
| IRC §R311.7 | 197 mm | 254 mm | Residenziale USA |
| IBC §1011.5 | 178 mm | 279 mm | Non residenziale USA |
| OSHA 1910.25 | 241 mm | 241 mm | Scale industriali USA |
| D.M. 236/1989 | prassi 170 – 180 mm | **300 mm** | Edilizia residenziale italiana |

La differenza sostanziale è la pedata: i 254 mm ammessi dall'IRC sono 46 mm meno del minimo italiano di 300 mm. Ne segue che una scala statunitense a norma è sensibilmente più ripida e occupa meno superficie in pianta di una scala italiana equivalente. Il D.M. 236/1989 impone anche il rapporto di Blondel nella forma 2a + p compreso fra 62 e 64 cm, il parapetto non attraversabile da una sfera di 10 cm di diametro e il corrimano a 90 – 100 cm di altezza.

---

## Due esempi sullo stesso dislivello

Interpiano di 267 cm, larghezza rampa 100 cm.

| Parametro | Impostazione IRC | Impostazione italiana |
|---|---|---|
| Numero di alzate | 14 | 16 |
| Alzata esatta | 19,1 cm | **16,7 cm** |
| Pedata | 26,7 cm | **30,0 cm** |
| Numero di pedate | 13 | 15 |
| Sviluppo in pianta | 347 cm | **450 cm** |
| Lunghezza del cosciale | 437 cm | **523 cm** |
| Pendenza | 35,5° | **29,1°** |
| Verifica Blondel | 64,9 cm, fuori banda | **63,4 cm, in banda** |

La scala americana risparmia oltre un metro di sviluppo in pianta, che in un appartamento è un ripostiglio intero. La scala italiana è più comoda e conforme, ma vuole quel metro in più: è la decisione che va presa in fase di pianta, non in fase di taglio dei gradini.

---

## Pendenza e comfort

| Pendenza | Giudizio | Impiego tipico |
|---|---|---|
| Sotto 25° | Molto dolce | Rampe di accessibilità, scaloni monumentali |
| 30° – 35° | **Campo ottimale** | Scale residenziali e comuni |
| 35° – 42° | Ripida | Scale di cantina, scale esterne, soppalchi |
| Oltre 42° | Molto ripida | Accesso a sottotetti, scale a gradini alterni |

Sull'**altezza libera di passaggio** i due sistemi quasi coincidono: l'IRC §R311.7.2 impone 203 cm (80 pollici) misurati dallo spigolo di ogni gradino, mentre i regolamenti edilizi italiani chiedono di norma 200 – 210 cm. È il vincolo che determina quanto deve essere lunga l'apertura del solaio: se lo spigolo di un gradino intermedio finisce sotto quella quota, non basta rifinire diversamente, bisogna spostare il foro o ridurre la pendenza.

---

## Cosciali, corrimano e parapetti

Nelle scale in legno con cosciali dentellati la sezione di riferimento statunitense è il 2×12, cioè 38 × 285 mm reali. Dopo l'intaglio di alzata e pedata deve restare almeno **89 mm** di sezione perpendicolare residua, la cosiddetta gola: è la causa più comune di rottura dei cosciali nelle scale ripide. Il numero di cosciali si ricava dividendo la larghezza della rampa per l'interasse massimo di 40 cm e aggiungendo uno, quindi una rampa da 100 cm ne richiede tre.

Il corrimano è obbligatorio dal quarto gradino in su e va calcolato come lunghezza del cosciale più circa 30 cm, per i ritorni orizzontali in testa e al piede. Per i montanti del parapetto il criterio è geometrico e sostanzialmente identico nei due sistemi: nessuna apertura deve consentire il passaggio di una sfera di 10 cm, il che si traduce in un montante ogni 10 cm netti, cioè tre per gradino con pedata da 30 cm.

---

## Domande frequenti

### Quanti gradini servono per un interpiano di 3 metri?

Con un dislivello di 300 cm e un'alzata obiettivo di 17,5 cm servono **17 alzate** da 17,6 cm ciascuna, quindi 16 pedate. Con pedata da 30 cm lo sviluppo in pianta è di 480 cm e la verifica di Blondel dà 65,2 cm, appena fuori banda: conviene passare a 18 alzate da 16,7 cm, che riporta il valore a 63,4 cm.

### Qual è l'alzata ideale?

Fra **16 e 18 cm** per una scala residenziale comoda. Sotto i 15 cm la scala diventa lunghissima e induce a saltare i gradini; sopra i 19 cm l'affaticamento in salita cresce rapidamente ed è la fascia in cui si concentrano le cadute in discesa. Il massimo IRC di 197 mm sta già oltre la buona prassi italiana.

### Come si calcolano i cosciali di una scala esterna?

Con la stessa formula, ma partendo dal dislivello reale misurato dal piano di calpestio esterno finito, che spesso non è ancora realizzato quando si taglia il legno. Vanno previsti pendenza di smaltimento dell'acqua sui gradini, di norma 1 – 2%, e un appoggio di base su plinto o cordolo, mai direttamente sul terreno.

### Che sezione serve per i cosciali?

Il taglio dentellato standard usa tavole da 38 × 285 mm, con almeno 89 mm di gola residua. Per luci lunghe, rampe ripide o larghezze superiori a 120 cm conviene passare a cosciali in legno lamellare o a un profilo metallico, e in quel caso serve una verifica strutturale: il cosciale intagliato lavora su una sezione fortemente ridotta e la freccia è il parametro critico, prima della resistenza.

### Perché il calcolo restituisce una pedata più corta di quella che uso di solito?

Perché il calcolatore applica i minimi statunitensi, dove la pedata può scendere a 254 mm. Se progetti in Italia imposta la pedata a 300 mm come valore di partenza e lascia che il numero di alzate si adegui: è la strada corretta anche perché la pedata è il parametro che il piede percepisce di più, mentre l'alzata si assorbe con l'abitudine.
