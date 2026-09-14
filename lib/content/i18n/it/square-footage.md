## Calcolatore di superficie: metri quadri e piedi quadrati

Questo strumento calcola l'area di un ambiente o di un lotto partendo dalle misure rilevate in cantiere, aggiunge lo sfrido di posa e converte fra metri quadri e piedi quadrati. Serve per computare pavimenti, rivestimenti, pittura, cartongesso, manti di copertura e tappeto erboso in zolle.

**Nota sulla taratura.** Il calcolatore nasce per il mercato statunitense e ragiona nativamente in piedi quadrati (sq ft), con percentuali di sfrido e formati di confezione tipici di quel mercato. Il risultato è una superficie geometrica, non una **superficie commerciale** ai sensi delle prassi estimative italiane né una superficie catastale secondo il D.P.R. 138/1998: per una compravendita o una pratica edilizia i criteri di ragguaglio vanno applicati a parte.

---

## Formule per figura geometrica

| Figura | Formula | Esempio |
|---|---|---|
| Rettangolo o quadrato | lato × lato | 4,50 × 3,60 = **16,2 m²** (174 pi²) |
| Cerchio | 3,14159 × raggio² | diametro 4,30 m: **14,5 m²** (156 pi²) |
| Triangolo | 0,5 × base × altezza | base 4,90, altezza 3,05: **7,5 m²** (80 pi²) |
| Trapezio | (base maggiore + base minore) ÷ 2 × altezza | (4,90 + 3,05) ÷ 2 × 6,10 = **24,2 m²** (261 pi²) |
| Corona circolare | 3,14159 × (raggio esterno² − raggio interno²) | anello di 0,50 m attorno a un cerchio di 3 m |

```
rettangolo = base x altezza
cerchio    = 3,14159 x raggio x raggio
triangolo  = 0,5 x base x altezza
trapezio   = (base maggiore + base minore) / 2 x altezza

figura a L o pianta articolata:
  scomponi in rettangoli non sovrapposti, somma le aree parziali
  poi sottrai i vani non pavimentati (pilastri, canne fumarie, cabina doccia)
```

Se rilevi in centimetri, il passaggio più sicuro è convertire in metri prima di moltiplicare: 450 cm × 360 cm dà 162.000 cm², cioè 16,2 m². Dividere per 10.000 all'ultimo passaggio è l'errore più comune quando si sommano molti ambienti.

---

## Come rilevare correttamente

Tre accortezze che cambiano il risultato più di qualsiasi formula:

* **Misura al filo dell'intonaco finito**, non al filo del muro grezzo, se stai calcolando un pavimento: la differenza su una stanza è di qualche centimetro per lato, ma su un appartamento diventa un paio di metri quadri.
* **Verifica la squadratura** con la diagonale. Se in una stanza di 4,50 × 3,60 la diagonale non misura circa 5,76 m, le pareti non sono ortogonali: scomponi la pianta in un rettangolo più un triangolo, altrimenti sottostimi.
* **Ambienti con soglie e nicchie:** aggiungi separatamente la superficie di ogni vano porta (larghezza × spessore del muro) se il pavimento passa da parte a parte. Sono voci piccole che sommate fanno il pacco di piastrelle in più.

---

## Sfrido: quanto materiale in più acquistare

Comprare esattamente la superficie misurata porta sempre a restare corti. Il materiale si perde nei tagli di testa, nella sfalsatura dei giunti, nei raccordi intorno agli stipiti, nella selezione dei pezzi difettosi e nelle rotture di trasporto.

| Materiale e schema di posa | Sfrido consigliato | Perché |
|---|---|---|
| Parquet o laminato, posa a correre | 5 – 10% | tagli di testa e sfalsatura dei giunti |
| Spina di pesce o posa diagonale | 15 – 20% | tagli a 45° lungo tutte le pareti |
| Gres porcellanato e ceramica, posa a griglia | 10 – 12% | tagli a umido, angoli, rotture |
| LVT, SPC e vinilico a clic | 7 – 10% | rifilature terminali e sottoporta |
| Moquette in rotolo | 10 – 15% | larghezza del rotolo e verso del pelo |
| Tappeto erboso in zolle | 5 – 10% | bordi curvi e rifilature |
| Lastre di cartongesso | 10 – 12% | fori per aperture e schema dei giunti |

Con formati grandi, oltre i 60 × 120 cm, conviene stare sul limite superiore della forbice: un taglio sbagliato costa un'intera lastra. Tieni sempre da parte mezzo metro quadro di scorta per le riparazioni future, perché il lotto di produzione cambia tonalità.

---

## Dalle confezioni al numero di scatole

```
superficie con sfrido = superficie misurata x (1 + sfrido)
scatole               = arrotonda per eccesso (superficie con sfrido / resa per scatola)
```

Esempio: soggiorno di 16,2 m² (174 pi²), gres in scatole da 1,44 m². Con il 10% di sfrido servono 17,8 m², quindi 17,8 ÷ 1,44 = 12,4 e si acquistano **13 scatole**, cioè 18,7 m² con circa 0,9 m² di scorta.

---

## Conversioni utili

| Conversione | Fattore | Esempio |
|---|---|---|
| m² in piedi quadrati | × 10,7639 | 100 m² = **1.076 pi²** |
| Piedi quadrati in m² | × 0,092903 | 1.000 pi² = **92,9 m²** |
| m² in iarde quadre | ÷ 0,8361 | 16,2 m² = **19,4 yd²** |
| Ettaro in m² | × 10.000 | 1 ha = **10.000 m²** |
| Acro in m² | × 4.046,86 | 1 acro = **4.047 m²** |
| cm² in m² | ÷ 10.000 | 162.000 cm² = **16,2 m²** |

Nel linguaggio agrario italiano una **tavola** e una **pertica** variano da provincia a provincia, quindi per i lotti conviene sempre riportare tutto a metri quadri o ettari prima di confrontare i dati.

---

## Superficie calpestabile, lorda, commerciale

Il calcolatore restituisce una superficie geometrica: per il computo dei materiali è esattamente ciò che serve. Nella prassi immobiliare italiana convivono però tre grandezze diverse, e confonderle produce errori a due cifre percentuali:

* **Calpestabile:** l'area interna netta, misurata al netto di murature e tramezzi. È la superficie che il pavimentista fattura.
* **Lorda:** comprende i muri perimetrali per metà e i tramezzi interni per intero.
* **Commerciale:** la lorda più le pertinenze ragguagliate, tipicamente balconi e terrazze al 25 – 35%, verande intorno al 50%, cantine e box al 25 – 50%, giardino esclusivo al 10 – 15%.

Un appartamento con 85 m² calpestabili può quindi essere pubblicizzato come 100 m² commerciali senza che nessuno abbia sbagliato un conto.

---

## Domande frequenti

### Quanti piedi quadrati sono 100 metri quadri?

Sono **1.076 pi²**. Il fattore esatto è 10,7639: si moltiplica per passare da m² a pi² e si divide per tornare indietro. Un errore ricorrente è usare 3,28, che è il fattore lineare fra metri e piedi, non quello di superficie.

### Nel calcolo del pavimento vanno sottratti i muri?

Sì. Per pavimenti, battiscopa e rivestimenti si lavora sulla superficie calpestabile, quindi le murature non entrano. Vanno invece sottratti gli ingombri fissi che restano privi di pavimento: piatti doccia, cabine, canne fumarie, pilastri a vista e vasche incassate. Per la pittura, al contrario, il conto si fa sulle pareti e si detraggono solo le aperture superiori a circa 2 m² ciascuna.

### Come si calcola la superficie di una stanza non rettangolare?

Si scompone. Traccia una pianta rapida in scala, dividila in rettangoli e triangoli che non si sovrappongano, calcola ogni pezzo e somma. Per le pareti oblique il triangolo rettangolo con le due misure perpendicolari è quasi sempre sufficiente; per le curve, approssima con un trapezio e arrotonda per eccesso.

### Che sfrido usare su una posa diagonale?

Almeno il **15%**, meglio il 20% se la stanza è piccola o irregolare. La posa a 45° impone un taglio su ogni elemento perimetrale e gli scarti raramente sono riutilizzabili altrove. Sulla posa a correre in una stanza regolare, invece, il 7% è di norma sufficiente.
