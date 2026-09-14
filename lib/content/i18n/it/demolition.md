## Calcolatore del costo di demolizione

Stima quanto costa demolire un fabbricato residenziale, un box auto, un capannone, una piscina o soltanto le finiture interne di un'unità immobiliare. Inserisci la tipologia strutturale, la superficie lorda, il numero di piani fuori terra e la tecnica di demolizione: lo strumento restituisce separatamente manodopera, trasporto e smaltimento delle macerie e oneri autorizzativi. Funziona in unità metriche e imperiali con un clic.

**Nota importante sulla taratura.** I costi unitari, i fattori di produzione macerie e le voci di smaltimento del calcolatore derivano da medie del mercato statunitense e dalla prassi regolamentare nordamericana (permessi comunali di demolizione, ispezione amianto secondo EPA NESHAP, cassoni scarrabili da 30 yd³). Il motore di calcolo non è tarato sui prezzari italiani né sull'iter del D.P.R. 380/2001. Usa i numeri come ordine di grandezza e verifica poi il prezzario regionale della tua Regione o il listino DEI.

---

## Costo di demolizione per unità di superficie

Medie del mercato statunitense, **sola manodopera con mezzi in cantiere**:

| Tipologia strutturale | Per m² | Per pi² | Totale ricorrente |
|---|---|---|---|
| **Fabbricato a telaio in legno** | 43 – 86 $ | 4 – 8 $ | 8.000 – 25.000 $ |
| **Muratura portante o laterizio** | 65 – 129 $ | 6 – 12 $ | 15.000 – 45.000 $ |
| **Box auto isolato** | 32 – 65 $ | 3 – 6 $ | 1.500 – 8.000 $ |
| **Capannone leggero** | 65 – 129 $ | 6 – 12 $ | 20.000 – 80.000 $ |
| **Industriale pesante in c.a.** | 108 – 194 $ | 10 – 18 $ | 50.000 – 200.000 $ e oltre |
| **Solo svuotamento interno (strip-out)** | 22 – 43 $ | 2 – 4 $ | 3.000 – 15.000 $ |
| **Piscina interrata (demolizione e reinterro)** | 65 – 161 $ | 6 – 15 $ | 4.000 – 20.000 $ |

Aggiungi da **400 a 700 $ per cassone scarrabile da 22,9 m³ (30 yd³)** di macerie e da **300 a 1.000 $** di oneri per il titolo abilitativo.

Il telaio in legno domina la statistica statunitense ma in Italia è marginale: qui la casistica ordinaria è muratura portante in pietra o laterizio nei centri storici e telaio in cemento armato dal dopoguerra in poi. Se stai valutando un edificio italiano, parti quasi sempre dalle due righe centrali della tabella, non dalla prima.

---

## Sequenza di calcolo

```
1. Superficie lorda di piano (m2 oppure pi2)
2. Numero di piani (il volume di macerie cresce con l'altezza)
3. Coefficiente di tecnica: meccanica 1,00 | selettiva 1,40 | manuale 1,65
4. Manodopera   = superficie x costo unitario x coefficiente di tecnica
5. Macerie      = superficie x fattore macerie x numero piani
6. Cassoni      = volume macerie / 22,9 m3 (cassone da 30 yd3)
7. Trasporto    = numero cassoni x 550 $ (valore medio)
8. Costo totale = manodopera + trasporto + oneri autorizzativi
```

La **demolizione meccanica** con escavatore, ragno o pinza idraulica vince quasi sempre sul prezzo perché taglia le ore di operaio. La **demolizione manuale** resta obbligata nei lotti urbani stretti, sulle pareti in aderenza e dove non entra il mezzo. La **demolizione selettiva** costa il 40% in più ma è ormai la scelta di riferimento quando conviene recuperare travi in legno antico, coppi, laterizio faccia a vista o ferramenta, e migliora sensibilmente le percentuali di recupero richieste in cantiere.

---

## Esempio svolto: villetta di 139 m² a un piano

* **Superficie:** 139 m² (1.500 pi²), demolizione meccanica
* **Manodopera:** 1.500 × 6 $ = **9.000 $**
* **Macerie:** 99 m³ ogni 93 m² di superficie, quindi 1,5 × 99 = **149 m³** (195 yd³)
* **Cassoni:** 195 ÷ 30 = 6,5, cioè **7 viaggi**
* **Oneri autorizzativi:** 500 $
* **Totale stimato: 13.350 $**

---

## Macerie previste per tipologia

| Struttura | Macerie ogni 93 m² (1.000 pi²) | Cassoni da 30 yd³ |
|---|---|---|
| Telaio in legno, 1 piano | ~99 m³ (130 yd³) | 4 – 5 |
| Muratura portante, 1 piano | ~153 m³ (200 yd³) | ~7 |
| Telaio in legno, 2 piani | ~199 m³ (260 yd³) | ~9 |
| Svuotamento interno | ~42 m³ (55 yd³) | ~2 |
| Box auto isolato | ~73 m³ (95 yd³) | ~3 |
| Piscina interrata in c.a. | ~69 m³ di calcestruzzo (90 yd³) | ~3 |

Il calcestruzzo armato pesa: un metro cubo di macerie di c.a. sfuso sta intorno a 1,6 – 1,9 t, quindi un cassone da 22,9 m³ arriva al limite di portata stradale molto prima di riempirsi. In Italia il vincolo che ferma il carico è quasi sempre la massa, non il volume.

---

## Come si misura e si autorizza una demolizione in Italia

Due convenzioni italiane che cambiano il conto rispetto al modello statunitense:

1. **Si computa a volume, non a superficie.** I prezzari regionali e i capitolati italiani valutano la demolizione di fabbricati in **euro per metro cubo vuoto per pieno**, misurando l'ingombro esterno dell'edificio dal piano di campagna alla linea di gronda, senza detrarre vani e aperture. Per confrontare il risultato del calcolatore con un preventivo italiano converti prima: volume vuoto per pieno = superficie coperta × altezza di gronda.
2. **Il titolo abilitativo non è un "permesso di demolizione".** In Italia la demolizione di un fabbricato rientra nel D.P.R. 380/2001: SCIA per la demolizione semplice, Permesso di Costruire o SCIA alternativa quando c'è ricostruzione, CILA per la rimozione di tramezzi non portanti. Se l'edificio è vincolato serve l'autorizzazione della Soprintendenza, e su strutture in c.a. va depositato il deposito strutturale con la relazione sulle fasi di demolizione.

Sul fronte rifiuti, le macerie viaggiano con il **formulario di identificazione del rifiuto** verso un impianto autorizzato al recupero; gli inerti da demolizione ricadono nel capitolo 17 dell'elenco europeo dei rifiuti. I costi di conferimento in impianto in Italia si collocano di norma in una fascia di poche decine di euro per tonnellata per inerti puliti e selezionati, e salgono molto per il misto non differenziato: separare in cantiere calcestruzzo, laterizio, legno e metalli ripaga quasi sempre.

---

## Domande frequenti

### Quanto costa demolire una casa di 140 m²?

Con i parametri statunitensi del calcolatore, una villetta di circa 139 m² (1.500 pi²) a telaio leggero costa **8.000 – 16.000 $** di sola manodopera; con macerie (2.000 – 4.000 $) e oneri (300 – 800 $) il totale si colloca fra **10.000 e 20.000 $**. In muratura portante sali del 50 – 80%. Per un edificio italiano equivalente conviene rifare il conto a metro cubo vuoto per pieno sul prezzario regionale, perché il peso relativo dello smaltimento è nettamente maggiore.

### Qual è la tecnica di demolizione più economica?

La **demolizione meccanica**. Quella manuale costa dal 60 all'80% in più a pari superficie, perché sostituisce la potenza del mezzo con ore di manodopera. La selettiva sta in mezzo e recupera parte del costo con la valorizzazione dei materiali.

### Serve un'autorizzazione per demolire?

Sì, sempre. Nel modello statunitense su cui è calibrato lo strumento si parla di *demolition permit* comunale, da 200 a oltre 1.000 $, con ispezione amianto preventiva imposta dalla norma federale EPA NESHAP per i fabbricati commerciali e industriali. In Italia l'iter è diverso e passa da SCIA, Permesso di Costruire o CILA a seconda dell'intervento: verifica sempre con il tuo tecnico prima di aprire il cantiere.

### E se c'è amianto?

Cambia tutto, anche il cronoprogramma. In Italia la rimozione di materiali contenenti amianto richiede un'impresa iscritta alla categoria dedicata e un **Piano di Lavoro** da trasmettere all'ASL competente **almeno 30 giorni prima** dell'inizio delle attività, ai sensi del D.Lgs. 81/2008. La bonifica precede sempre la demolizione e può aggiungere da alcune migliaia a molte decine di migliaia di euro. Nel calcolatore questa voce non è compresa.

### Quanto tempo richiede la demolizione di un fabbricato?

Una struttura leggera di 139 – 186 m² si abbatte meccanicamente in **1 – 3 giorni**. Su muratura portante o cemento armato, con pinza e frantumazione in loco, si ragiona su 1 – 2 settimane; lo smontaggio selettivo può arrivare a tre settimane. A queste durate va sommato il tempo di allontanamento delle macerie, che nei cantieri urbani è spesso il vero collo di bottiglia.

### Quanto costa il solo svuotamento interno?

Lo strip-out, cioè la rimozione di tramezzi, pavimenti, controsoffitti, impianti e sanitari lasciando in piedi la struttura, si aggira su **22 – 43 $ per m² (2 – 4 $ per pi²)**, quindi 3.000 – 12.000 $ per un appartamento da ristrutturare integralmente. È la voce con la maggiore incidenza di manodopera del calcolatore, perché per definizione si lavora a mano.
