## Calcolatore del rivestimento di facciata a doghe

Lo strumento calcola la superficie di facciata da rivestire partendo dall'ingombro dell'edificio, aggiunge i timpani, detrae le aperture, applica lo sfrido di posa e traduce il risultato in materiale d'acquisto e accessori di finitura. Funziona per doghe in fibrocemento, legno, legno ingegnerizzato, lamiera aggraffata e PVC.

**Nota sulla taratura.** Il calcolatore ragiona nell'unità commerciale nordamericana, il **square**, pari a 100 piedi quadrati ovvero **9,29 m²**, e usa dimensioni standard di porte e finestre statunitensi. In Italia il rivestimento si computa e si acquista a metro quadro, e il sistema di facciata dominante non è la doga ma l'intonaco su isolamento a cappotto. Le percentuali di sfrido e la geometria valgono comunque per entrambi i mercati.

---

## Superficie lorda delle pareti

```
perimetro     = 2 x (lunghezza + larghezza)
altezza muro  = quota di gronda - quota del piano di appoggio
superficie lorda = perimetro x altezza muro
```

Per gli edifici a più piani si misura dalla base fino alla linea di gronda, oppure si moltiplica l'altezza di interpiano per il numero di piani fuori terra.

**Esempio.** Edificio a un piano di 12,19 × 9,14 m con altezza di gronda 2,74 m:

* Perimetro: 2 × (12,19 + 9,14) = **42,7 m** (140 ft)
* Superficie lorda: 42,7 × 2,74 = **117 m²** (1.260 pi²)

---

## Timpani e frontoni

Sulle coperture a falde la porzione triangolare sopra la linea di gronda va rivestita anch'essa.

| Geometria | Formula | Dove si incontra |
|---|---|---|
| Timpano triangolare | 0,5 × base × altezza al colmo × numero | Copertura a due falde, a capanna |
| Timpano alla mansarda | (base + larghezza di spezzata) ÷ 2 × altezza inferiore, più 0,5 × larghezza di spezzata × altezza superiore | Tetti alla Mansart, fienili |
| Timpano ad arco | 0,5 × 3,14159 × (base ÷ 2)² × numero | Facciate storiche, volte a botte |

Nell'esempio, due timpani con base 9,14 m e altezza al colmo 1,52 m danno 0,5 × 9,14 × 1,52 × 2 = **13,9 m²**, per una superficie lorda complessiva di **131 m²** (1.410 pi²). Una copertura a padiglione non ha timpani: in quel caso il conteggio va azzerato.

---

## Detrazione delle aperture

| Apertura | Dimensioni italiane correnti | Superficie |
|---|---|---|
| Porta d'ingresso | 90 × 210 cm | 1,89 m² (20,3 pi²) |
| Portafinestra | 140 × 230 cm | 3,22 m² (34,7 pi²) |
| Finestra a due battenti | 120 × 140 cm | 1,68 m² (18,1 pi²) |
| Finestra piccola di servizio | 60 × 80 cm | 0,48 m² (5,2 pi²) |
| Basculante box auto singolo | 240 × 210 cm | 5,04 m² (54,3 pi²) |
| Portone box auto doppio | 480 × 210 cm | 10,08 m² (108,5 pi²) |

Nell'esempio, due porte, otto finestre e un basculante fanno **18,7 m²** di detrazione, quindi la superficie netta scende a **112,3 m²** (1.209 pi²). Vanno detratte le aperture superiori a circa 1 m²: quelle più piccole, come le griglie di aerazione, generano più sfrido di quanto facciano risparmiare.

---

## Sfrido per tipo di rivestimento

| Materiale | Sfrido | Motivo |
|---|---|---|
| Doga in PVC | 5 – 10% | Materiale flessibile, taglio facile, poca perdita di testa |
| Lamiera, acciaio, alluminio | 5 – 10% | Pannelli preformati, tagli a cesoia netti |
| Fibrocemento | 10 – 12% | Lastre pesanti e fragili, taglio con aspirazione obbligatoria |
| Legno ingegnerizzato | 10 – 12% | Doghe rigide, giunti sull'interasse della sottostruttura |
| Doga in legno massello | 12 – 15% | Scarto per nodi, selezione delle venature |
| Scandole di legno | 15 – 20% | Sovrapposizioni ampie, larghezze irregolari |
| Facciate articolate | +5% | Abbaini, bow window, corpi aggettanti, torrette |

```
superficie da acquistare = superficie netta x (1 + sfrido)
square                   = superficie in piedi quadrati / 100
confezioni               = arrotonda per eccesso (superficie / resa per confezione)
```

Con il 10% di sfrido i 112,3 m² netti diventano **123,6 m²**, cioè 13,3 square: dal distributore si ordinano **14 square**, pari a 130 m². Sul mercato italiano si ordinano semplicemente 124 m² arrotondati al pacco intero.

---

## Accessori e profili di finitura

Il rivestimento non è mai solo la doga. Servono, in metri lineari:

1. **Profilo di partenza**, lungo tutto il perimetro alla base: 42,7 m nell'esempio.
2. **Angolari esterni**, uno per spigolo, per l'intera altezza: 4 × 2,74 = 11 m.
3. **Profili di contorno** su tutti i quattro lati delle finestre, sui tre lati delle porte e lungo le linee di displuvio dei timpani.

Nelle facciate ventilate italiane va aggiunta la sottostruttura in listelli o profili metallici, la camera d'aria di 3 – 4 cm con aperture di ventilazione alla base e alla sommità, e il telo traspirante di protezione: sono voci che nel modello statunitense a doga ventilata sono già implicite, ma che in un computo italiano vanno esplicitate perché incidono in modo significativo.

---

## Confronto fra materiali

| Rivestimento | Costo materiale per m² | Costo posato per m² | Durata | Manutenzione |
|---|---|---|---|---|
| PVC | 16 – 38 $ | 48 – 97 $ | 25 – 40 anni | Molto bassa |
| Fibrocemento | 27 – 65 $ | 86 – 161 $ | Oltre 50 anni | Bassa, riverniciatura ogni 12 – 15 anni |
| Legno ingegnerizzato | 22 – 48 $ | 70 – 129 $ | 30 – 50 anni | Da bassa a media |
| Legno di cedro o larice | 43 – 108 $ | 108 – 237 $ | 20 – 40 anni | Alta, trattamento ogni 3 – 5 anni |
| Acciaio o alluminio | 38 – 86 $ | 97 – 194 $ | 40 – 70 anni | Molto bassa |
| Pannelli effetto pietra | 65 – 151 $ | 129 – 269 $ | Oltre 50 anni | Molto bassa |

I valori sono medie del mercato statunitense convertite a metro quadro: servono per confrontare i materiali fra loro, non come prezzario italiano.

---

## Due vincoli italiani da non trascurare

La **reazione al fuoco** è il primo. Un rivestimento combustibile con camera d'aria continua costituisce una via preferenziale di propagazione verticale della fiamma: la guida dei Vigili del Fuoco sulla sicurezza antincendio delle facciate, Lettera Circolare 5043 del 2013, richiede attenzione a Euroclasse dei materiali secondo EN 13501-1, barriere e interruzioni della cavità, in particolare negli edifici oltre i 12 m di altezza antincendio. Il legno naturale non trattato non è mai la soluzione più semplice su un condominio.

Il secondo è **estetico e autorizzativo**: in centro storico o in zona vincolata la modifica dell'aspetto esterno passa dalla Soprintendenza, e molti regolamenti edilizi comunali prescrivono finiture, colori e materiali di facciata. Il calcolo dei metri quadri è la parte facile.

---

## Domande frequenti

### Che cos'è un square nel rivestimento di facciata?

È l'unità commerciale nordamericana e corrisponde esattamente a **100 piedi quadrati, cioè 9,29 m²**, un quadrato di 3,05 m di lato. Materiali e manodopera negli Stati Uniti si quotano al square. In Italia non si usa: se ricevi un preventivo con quel termine, moltiplica per 9,29 per ottenere i metri quadri.

### Come si stima la facciata di una casa di 150 m² di superficie utile?

Non si parte dai metri quadri di pavimento, che non dicono nulla sulla facciata. Serve la superficie delle pareti esterne. Una casa a un piano di 150 m² con impronta 10 × 15 m e gronda a 2,80 m ha 50 m di perimetro e 140 m² lordi di parete; la stessa superficie su due piani ha impronta 7,5 × 10 m, quindi 35 m di perimetro per 5,60 m di altezza, pari a 196 m² lordi. Sviluppare in altezza aumenta la facciata a pari volumetria abitabile.

### Vanno detratte tutte le finestre?

Sì, tutte quelle superiori a circa 1 m². Detrarle dà la superficie netta corretta ed evita di ordinare materiale in eccesso. Va però tenuto conto che ogni apertura genera tagli, quindi lo sfrido percentuale su una facciata molto forata va spostato verso il limite superiore della forbice: le due cose si compensano solo in parte.

### Come si calcola un timpano alla mansarda?

Si scompone in due figure. La parte inferiore, a pendenza ripida, è un trapezio: (base + larghezza della spezzata) ÷ 2 × altezza inferiore. La parte superiore, a pendenza dolce, è un triangolo: 0,5 × larghezza della spezzata × altezza superiore. Si sommano le due aree e si moltiplica per il numero di timpani.
