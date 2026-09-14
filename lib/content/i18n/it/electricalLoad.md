## Calcolatore del carico elettrico e della potenza di allacciamento

Lo strumento somma i carichi di un'abitazione — superficie, cucina, lavanderia, produzione di acqua calda, climatizzazione e ricarica del veicolo elettrico — e restituisce il carico di servizio in VA e kW, la corrente corrispondente, la taglia di quadro consigliata, la capacità residua e le sezioni dei conduttori di alimentazione.

**Nota sulla taratura.** Il calcolatore applica integralmente il **NEC (NFPA 70) articolo 220.82**, il metodo opzionale statunitense per le case unifamiliari, su una rete **120/240 V a fase divisa**, e ricava le sezioni dalla **Tabella NEC 310.12** in AWG. L'Italia lavora a **230 V monofase** o **400 V trifase**, dimensiona per **potenza contrattuale in kW** e non per ampere di quadro, e applica la **CEI 64-8** con le portate CEI-UNEL 35024. I due sistemi rispondono a domande diverse: il risultato in ampere non è trasferibile, il metodo di somma dei carichi sì.

---

## Ampere di quadro contro kW di contratto

Negli Stati Uniti l'utenza domestica non ha un limitatore: il distributore fornisce quanto serve e il vincolo è la taglia dell'interruttore generale, 100, 150, 200 o 400 A. Il calcolo NEC 220.82 serve a scegliere quella taglia e la sezione del montante.

In Italia il vincolo è contrattuale e fisico insieme: il contatore elettronico è tarato sulla **potenza impegnata**, e la **potenza disponibile** è quella impegnata maggiorata del 10%. Superata in modo prolungato, il contatore stacca. Il dimensionamento serve quindi a scegliere il valore di contratto, non un interruttore.

```
corrente monofase   = potenza in W / (230 x fattore di potenza)
corrente trifase    = potenza in W / (400 x 1,732 x fattore di potenza)
potenza disponibile = potenza impegnata x 1,1
```

| Potenza impegnata | Alimentazione | Corrente | Montante in rame, indicativo |
|---|---|---|---|
| 3 kW | Monofase 230 V | 13 A | 6 mm² |
| 4,5 kW | Monofase 230 V | 20 A | 6 mm² |
| 6 kW | Monofase 230 V | 26 A | 10 mm² |
| 10 kW | Trifase 400 V | 14 A per fase | 6 mm² |
| 15 kW | Trifase 400 V | 22 A per fase | 10 mm² |
| 20 kW | Trifase 400 V | 29 A per fase | 16 mm² |

Le sezioni sono indicative: vanno verificate sulla portata del cavo secondo CEI-UNEL 35024, sul tipo di posa e sulla caduta di tensione ammessa, che su montanti lunghi è spesso il parametro dimensionante. Oltre i 6 kW il distributore richiede di norma l'alimentazione trifase.

---

## La sequenza di calcolo NEC 220.82

Cinque passi in ordine, dove il risultato di ciascuno alimenta il successivo:

```
carico di illuminazione = superficie climatizzata in m2 x 32,3 VA/m2
carico base             = carico di illuminazione + prese cucina + circuito lavanderia
carico generale totale  = carico base + somma delle targhe degli apparecchi fissi
domanda netta           = 10.000 + 0,40 x (carico generale totale - 10.000)
carico di servizio      = domanda netta + max(raffrescamento, riscaldamento)
corrente di servizio    = carico di servizio / 240
```

I 32,3 VA/m² corrispondono ai 3 VA per piede quadrato del codice; i circuiti prese di cucina valgono 1.500 VA ciascuno con un minimo di due, la lavanderia altri 1.500 VA. Il **coefficiente 0,40 sulla quota oltre i 10.000 VA** è il cuore del metodo: è la diversità, cioè il riconoscimento che non tutto funziona insieme. Riscaldamento e raffrescamento non sono cumulativi, e si conta solo il maggiore.

**Esempio statunitense.** Casa di 223 m² (2.400 pi²) tutta elettrica, con pompa di calore e wallbox da 48 A:

* Illuminazione: 223 × 32,3 = 7.200 VA; prese e lavanderia: 4.500 VA
* Apparecchi fissi: cucina 12.000 + scaldacqua 4.500 + asciugatrice 5.000 + lavastoviglie, tritarifiuti e microonde 3.200 + wallbox 11.520 = **36.220 VA**
* Carico generale totale: 47.920 VA
* Domanda netta: 10.000 + 0,40 × 37.920 = **25.168 VA**
* Climatizzazione: pompa di calore con 10 kW di resistenze, 10.000 + 0,75 × 5.000 = **13.750 VA**, che prevale sul raffrescamento
* Carico di servizio: 38.918 VA, cioè 162 A a 240 V, quindi **quadro da 200 A**

---

## Lo stesso edificio calcolato all'italiana

In Italia lo stesso fabbricato si dimensiona sommando le potenze nominali e applicando un **coefficiente di contemporaneità**, che per il residenziale sta fra 0,3 e 0,5.

```
potenza installata   = somma delle potenze nominali di tutti gli apparecchi
potenza contrattuale = potenza installata x coefficiente di contemporaneita
```

| Apparecchio | Potenza italiana corrente | Equivalente statunitense |
|---|---|---|
| Piano a induzione | 7,2 kW di targa, 3 – 4 kW con limitatore | Cucina elettrica 12 kW |
| Forno elettrico | 2,2 – 2,5 kW | 4 – 5 kW |
| Scaldacqua elettrico ad accumulo | 1,2 – 1,5 kW | 4,5 kW |
| Lavatrice | 2,0 – 2,2 kW | 1,2 kW, acqua calda dalla rete |
| Lavastoviglie | 2,0 – 2,2 kW | 1,2 kW |
| Asciugatrice a pompa di calore | 0,8 – 1,0 kW | A resistenza, 5 kW |
| Pompa di calore aria-acqua | 2 – 6 kW elettrici | 5 – 14 kW con resistenze integrative |
| Climatizzatore monosplit | 0,8 – 1,5 kW | Impianto centralizzato 4,5 – 7 kW |
| Wallbox domestica | 3,7 – 7,4 kW monofase, 11 kW trifase | 3,8 – 19,2 kW |

Sommando illuminazione, piano a induzione, forno, lavatrice, lavastoviglie, asciugatrice a pompa di calore, scaldacqua, pompa di calore da 4 kW, wallbox da 3,7 kW e prese varie si arriva a circa **28 kW installati**. Con un coefficiente di 0,35 la potenza contrattuale risulta di **9,8 kW**, quindi un contratto da **10 kW trifase**, pari a 14 A per fase.

Il confronto è il dato interessante: 38,9 kVA nel calcolo statunitense contro circa 10 kW nel dimensionamento italiano, a pari edificio e pari servizi. La differenza non nasce dalle norme ma da tre fatti concreti: la tensione doppia dimezza le correnti, gli apparecchi europei sono a pompa di calore o a gas dove quelli statunitensi sono a resistenza, e il limitatore del contatore impone di fatto un uso sequenziale dei carichi che negli Stati Uniti nessuno è obbligato a rispettare.

---

## Dalle sezioni AWG ai millimetri quadrati

| Conduttore NEC | Sezione | Sezione commerciale italiana |
|---|---|---|
| #4 AWG | 21,2 mm² | 25 mm² |
| #2 AWG | 33,6 mm² | 35 mm² |
| #1/0 AWG | 53,5 mm² | 50 mm² |
| #2/0 AWG | 67,4 mm² | 70 mm² |
| #4/0 AWG | 107,2 mm² | 120 mm² |
| 250 kcmil | 126,7 mm² | 120 mm² |

La conversione serve a leggere un elaborato statunitense, non a progettare: le portate NEC sono tabellate su ipotesi di posa e temperatura proprie, e la verifica italiana va rifatta con la CEI-UNEL 35024 e con il coordinamento fra protezione e cavo secondo CEI 64-8.

---

## Ricarica del veicolo elettrico

È il carico che oggi manda fuori scala i contratti domestici italiani. Una wallbox da 3,7 kW su un contratto da 3 kW non è utilizzabile: assorbe da sola più della potenza disponibile. Le strade praticabili sono tre: l'**aumento di potenza** a 6 kW monofase, sufficiente per una wallbox da 3,7 kW, o a 10 kW trifase per una da 7,4 o 11 kW, con un costo una volta tantum e una quota fissa più alta secondo le condizioni regolate da ARERA; la **gestione dinamica del carico**, il DLM integrato nella wallbox, che legge l'assorbimento istantaneo e riduce la corrente di ricarica invece di far staccare il contatore, equivalente funzionale del sistema EVEMS del NEC 625.42 e soluzione più economica; oppure il **relè di sgancio prioritario** sui carichi non critici, tecnica già usata in Italia per forno e piano cottura.

L'infrastruttura di ricarica è trattata dalla **sezione 722 della CEI 64-8**, che impone fra l'altro protezione differenziale dedicata e prescrizioni sul tipo di dispositivo in funzione del modo di ricarica.

---

## Obblighi italiani che il calcolatore non conosce

* **D.M. 37/2008.** Per una singola unità abitativa il progetto redatto da un professionista iscritto all'albo è obbligatorio quando la **potenza impegnata supera i 6 kW** oppure quando la **superficie supera i 400 m²**. È la ragione per cui il salto da 6 a 10 kW non è solo una pratica commerciale con il venditore.
* **Dichiarazione di conformità.** Ogni intervento sull'impianto si chiude con la DiCo rilasciata dall'installatore abilitato, con allegati obbligatori. Senza, l'impianto è irregolare a prescindere dalla correttezza del calcolo.
* **CEI 64-8, parte residenziale.** Definisce livelli prestazionali e prescrive un **numero minimo di circuiti e di punti presa in funzione della superficie** dell'abitazione. Quei minimi sono imposti dalla norma, non ricavati da un calcolo di potenza: un'abitazione può stare in 3 kW di contratto e avere comunque l'obbligo di più circuiti separati.
* **CEI 0-21** per chi aggiunge fotovoltaico o accumulo, che è il caso più frequente in cui la potenza contrattuale viene rivista.

---

## Domande frequenti

### Quanti kW di contratto servono per una casa?

Con riscaldamento a gas e senza auto elettrica, **3 kW** bastano ancora per un appartamento di media dimensione. Con piano a induzione o scaldacqua elettrico si passa a **4,5 o 6 kW**. Con pompa di calore per la climatizzazione, oppure con una wallbox, il riferimento realistico è **6 kW monofase o 10 kW trifase**. Il calcolatore, tarato sul modello statunitense, restituirà comunque un valore in ampere su 240 V: va riletto come kVA e poi confrontato con questi gradini.

### Perché il risultato in ampere è tanto più alto di quello che mi aspetto?

Perché il calcolo è riferito a 240 V e a un parco apparecchi a resistenza elettrica. Un carico di 38,9 kVA vale 162 A su rete statunitense e 169 A su una monofase italiana a 230 V, ma quella stessa casa in Italia non arriva a 39 kVA: gli apparecchi assorbono meno e la contemporaneità reale è più bassa. Il numero in ampere non è un errore, è la risposta a una domanda diversa.

### Posso installare una wallbox senza aumentare la potenza?

Solo con la gestione dinamica del carico e accettando tempi di ricarica variabili. Su un contratto da 3 kW una wallbox da 3,7 kW resta inutilizzabile in pratica; su 6 kW funziona se il DLM riduce la corrente quando entrano in funzione forno o piano cottura. Il calcolo va fatto sulla potenza disponibile, cioè la impegnata più il 10%.

### Che differenza c'è fra VA e watt?

I watt misurano la potenza attiva effettivamente assorbita, i VA la potenza apparente, cioè il prodotto di tensione e corrente. Per i carichi resistivi — resistenze, forni, scaldacqua — i due valori coincidono e il metodo NEC li tratta come equivalenti. Per motori, compressori e alimentatori il fattore di potenza li separa, e il conduttore va dimensionato sui VA. In Italia i contratti domestici sono espressi in kW e il fattore di potenza per il residenziale è assunto prossimo a uno.
