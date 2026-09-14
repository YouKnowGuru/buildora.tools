## Calcolatore dei plinti di fondazione per terrazze in legno

Lo strumento dimensiona i plinti in calcestruzzo e i montanti di appoggio di una terrazza in legno sopraelevata con il metodo delle aree di influenza previsto dall'**IRC R507**. Inserisci le dimensioni della struttura, i carichi variabili e permanenti, la portanza del terreno e la maglia dei montanti: ottieni l'area di plinto necessaria per ogni appoggio, il diametro del cassero tubolare, il carico su ciascun montante e il volume complessivo di calcestruzzo.

**Nota sulla taratura.** Il calcolo segue l'International Residential Code statunitense: carichi da IRC Tabella R301.5, portanze presuntive da IRC Tabella R401.4.1, diametri commerciali dei casseri in pollici. Non è tarato sulle **NTC 2018** né sui carichi di esercizio italiani, che per balconi e terrazze sono più severi. Vale come predimensionamento; il progetto in Italia va comunque verificato da un tecnico abilitato.

---

## I carichi che agiscono sulla terrazza

| Tipo di carico | Valore IRC | Equivalente metrico |
|---|---|---|
| Variabile: persone, arredi, barbecue | 40 psf | 1,92 kN/m² |
| Permanente: tavolato, travetti, parapetto | 10 psf | 0,48 kN/m² |
| Neve al suolo (opzionale) | 0 – 100 psf | 0 – 4,79 kN/m² |

```
carico uniforme totale = variabile + permanente + neve
carico totale          = superficie x carico uniforme totale
area di influenza      = superficie / numero di montanti
carico per montante    = carico totale / numero di montanti
area di plinto         = carico per montante / portanza ammissibile
diametro plinto tondo  = 2 x radice(area / 3,14159)
lato plinto quadrato   = radice(area)
```

Attenzione alla **vasca idromassaggio**: 2.300 litri d'acqua aggiungono circa 22 kN concentrati su pochi metri quadri e stravolgono il dimensionamento. In quel caso il carico variabile va portato a 3 – 5 kN/m² e la vasca vuole plinti dedicati, non i plinti della terrazza.

---

## Portanza del terreno

La portanza ammissibile è la pressione massima che il terreno tollera senza cedimenti inaccettabili. È il parametro che pesa di più sul risultato finale.

| Terreno | Portanza IRC | Equivalente metrico |
|---|---|---|
| Argilla tenera, argilla sabbiosa | 1.500 psf | 72 kPa |
| Limo, limo sabbioso, sabbia limosa | 2.000 psf | 96 kPa |
| Sabbia limosa compatta, misto granulare | 2.500 psf | 120 kPa |
| Ghiaia e ghiaia sabbiosa | 3.000 psf | 144 kPa |
| Riporto costipato, sabbia densa | 4.000 psf | 192 kPa |

Questi sono valori **presuntivi**, usati in assenza di indagine geotecnica: negli Stati Uniti gli uffici tecnici comunali assumono di default 72 o 96 kPa. In Italia la strada corretta passa per la relazione geotecnica prevista dal capitolo 6 delle NTC 2018, e su terreni di riporto o argille plastiche i valori reali possono essere molto inferiori a quelli in tabella.

---

## Esempio svolto

Terrazza fuori terra di 4,88 × 3,66 m, pari a 17,8 m² (192 pi²), su misto granulare da 120 kPa, con maglia di 2 file da 3 montanti, plinti di 30 cm di spessore.

1. Carico uniforme: 1,92 + 0,48 = **2,40 kN/m²**
2. Carico totale: 17,8 × 2,40 = **42,7 kN** (9.600 lb)
3. Carico per montante: 42,7 ÷ 6 = **7,1 kN** (1.600 lb)
4. Area di plinto: 7,1 ÷ 120 = 0,0593 m², cioè **593 cm²** (92 pi²)
5. Diametro: 2 × radice(593 ÷ 3,14159) = 27,5 cm, arrotondato al cassero commerciale da **30 cm** (12 pollici)
6. Calcestruzzo: 3,14159 × 0,15² × 0,30 = 0,021 m³ per plinto, per 6 plinti **0,13 m³** (0,17 yd³), da ordinare con il 10% di eccedenza

Con la stessa terrazza su argilla tenera da 72 kPa l'area richiesta sale a 986 cm² e serve un cassero da 40 cm; su ghiaia da 144 kPa si scende a 494 cm² e basta un 25 cm.

---

## Spessore del plinto e profondità di scavo

È l'errore più frequente di tutto il dimensionamento: lo **spessore del plinto non è la profondità dello scavo**. Il calcolo restituisce la geometria del getto, di norma 20 – 30 cm; la buca deve invece scendere sotto la quota di gelo, perché il gelo-disgelo dell'acqua nel terreno solleva il plinto e con esso l'intera struttura.

* Negli Stati Uniti l'IRC R403.1.4 rimanda alla profondità di gelo locale, comunemente 75 – 120 cm (30 – 48 pollici).
* In Italia il piano di posa va portato sotto la profondità raggiunta dal gelo secondo il clima del sito: in pianura padana e nelle vallate alpine si ragiona ordinariamente su 80 – 100 cm, sulle coste tirreniche e al sud molto meno, ma resta il vincolo di appoggiare su terreno naturale e non su riporto.

Prima di scavare va sempre verificata la presenza di sottoservizi: allacci gas, cavidotti e scarichi passano spesso proprio lungo il lato dell'edificio dove si appoggia la terrazza.

---

## Perché in Italia il conto viene più severo

Le NTC 2018, tabella 3.1.II, assegnano alla categoria A un carico variabile di 2,00 kN/m² per gli ambienti residenziali, ma **4,00 kN/m² per balconi, ballatoi e sbalzi**. Una terrazza in legno solidale all'edificio ricade quasi sempre in quella seconda riga: il doppio dei 1,92 kN/m² dell'IRC. Rifacendo l'esempio con 4,00 + 0,50 = 4,50 kN/m², il carico per montante passa da 7,1 a 13,4 kN e il plinto su misto granulare richiede 1.112 cm², cioè un cassero da 40 cm invece di 30.

La conseguenza pratica: usa il calcolatore per capire come si muovono i numeri, ma se la struttura è vincolata a un edificio italiano parti dal carico NTC corretto, non da quello statunitense.

---

## Domande frequenti

### Quanti plinti servono per una terrazza in legno?

La regola pratica è una maglia di montanti fra 1,8 e 2,4 m. Una terrazza di 4,88 × 3,66 m se la cava con **6 montanti** su due file, più la trave a parete fissata all'edificio. Il rapporto è inverso: più montanti significa plinti più piccoli, meno montanti significa plinti più grandi e più calcestruzzo per ciascuno.

### Quanto deve essere grande un plinto?

Con carichi residenziali standard su terreno da 120 kPa si sta intorno ai **30 cm di diametro** per montante. Su argilla tenera si arriva a 35 – 40 cm, su ghiaia compatta si scende a 20 – 25 cm. Il numero dipende dal carico effettivo per montante, quindi conviene sempre ricalcolarlo anziché fidarsi della regola.

### Si possono usare i basamenti prefabbricati appoggiati a terra?

Solo per pedane basse, autoportanti e non collegate all'edificio. I basamenti in calcestruzzo appoggiati sul piano di campagna non sono protetti dal gelo e nei climi freddi si sollevano in modo differenziale, con torsione dell'orditura. Per una terrazza vincolata alla casa o sopraelevata servono plinti gettati alla quota di gelo.

### Quanto calcestruzzo serve in tutto?

Poco: una terrazza tipica da 6 plinti tondi da 30 cm di diametro e 30 cm di spessore consuma circa **0,13 m³**, che si copre con sei o sette sacchi di premiscelato da 25 kg per plinto. Solo oltre i 12 – 15 plinti, o con plinti di grande diametro, conviene ordinare calcestruzzo preconfezionato con autobetoniera.

### Il plinto va armato?

Per i carichi residenziali del calcolatore un plinto tondo in calcestruzzo non armato è generalmente sufficiente, perché lavora a compressione. Vanno però annegate le piastre o le staffe metalliche di collegamento del montante, che devono restare sollevate di alcuni centimetri dal terreno per evitare il ristagno d'acqua alla base del legno. In zona sismica e per strutture solidali all'edificio l'armatura e il collegamento vanno verificati dal progettista.
