## Calcolatore di isolamento termico: spessori, quantità e costi

Lo strumento dimensiona l'isolamento di solai di sottotetto, pareti perimetrali, coperture inclinate e solai su vespaio: superficie netta al netto dell'orditura, spessore necessario per raggiungere la resistenza termica obiettivo, numero di pacchi di pannelli o di sacchi di materiale insufflato, e stima dei costi fra posa in autonomia e impresa.

**Nota sulla taratura.** Il calcolatore lavora con il sistema statunitense: resistenza termica espressa in **R-value imperiale** (ft²·°F·h/BTU), spessori in pollici, zone climatiche IECC da 1 a 8 e valori prescrittivi della **Tabella N1102.1.3 dell'IECC 2021**. In Italia il parametro cogente è la **trasmittanza termica U in W/m²K** dell'intera struttura, fissata dal D.M. 26 giugno 2015 per zona climatica. I due sistemi si convertono, ma non chiedono la stessa cosa: vedi più avanti.

---

## Superficie netta e incidenza dell'orditura

| Applicazione | Interasse tipico | Incidenza dell'orditura | Superficie utile |
|---|---|---|---|
| Solaio di sottotetto praticabile | Travetti a vista | 0%, posa continua | 100% del lordo |
| Parete a telaio leggero 2×4 | 40 cm | circa 10% | circa 90% |
| Parete a telaio leggero 2×6 | 40 o 60 cm | 7 – 10% | 90 – 93% |
| Falda fra i puntoni | 40 o 60 cm | 7 – 10% | 90 – 93% |
| Solaio su vespaio o cantina | 40 cm | circa 10% | circa 90% |
| Cappotto continuo esterno | Continuo | 0% | 100% del lordo |

```
superficie lorda    = lunghezza x larghezza
superficie utile    = superficie lorda x (1 - incidenza orditura)
superficie d'acquisto = superficie utile x (1 + sfrido)
spessore necessario = (resistenza obiettivo - resistenza esistente) / resistenza per unita di spessore
```

Per un solaio di sottotetto libero basta il 5% di sfrido; su parete, fra spallette di finestre, scatole elettriche e passaggi impiantistici, serve l'8 – 10%.

---

## Confronto fra materiali isolanti

| Materiale | R per pollice | Conduttività lambda | Impieghi | Comportamento all'umidità |
|---|---|---|---|---|
| Lana di vetro in rotoli e pannelli | 3,1 – 3,4 | 0,042 – 0,046 W/mK | Pareti a telaio, sottotetti | Permeabile all'aria, richiede freno vapore |
| Lana di roccia | 3,8 – 4,2 | 0,034 – 0,038 W/mK | Pareti, tramezzi, cappotti | Idrorepellente, incombustibile |
| Cellulosa insufflata | 3,6 – 3,8 | 0,038 – 0,040 W/mK | Solai di sottotetto, cavità chiuse | Trattata al borato, igroscopica |
| Fibra di vetro insufflata | 2,5 – 2,8 | 0,052 – 0,058 W/mK | Solai di sottotetto | Incombustibile, assestamento minimo |
| Schiuma poliuretanica a celle aperte | 3,7 – 3,8 | 0,039 – 0,040 W/mK | Falde, intercapedini | Tenuta all'aria, permeabile al vapore |
| Schiuma poliuretanica a celle chiuse | 6,5 – 7,0 | 0,021 – 0,022 W/mK | Cantine, vespai, strutture metalliche | Freno vapore intrinseco |
| Polistirene estruso XPS | 5,0 | circa 0,029 W/mK | Fondazioni, sottofondi, zoccolature | Resistente all'acqua e alla compressione |
| Poliisocianurato PIR | 6,0 – 6,5 | 0,022 – 0,024 W/mK | Coperture piane, cappotti sottili | Rivestito in alluminio, barriera al vapore |

Per convertire: **R imperiale × 0,1761 = R metrico in m²K/W**. Quindi R-13 vale 2,29 m²K/W, R-21 vale 3,70, R-38 vale 6,69, R-49 vale 8,63 e R-60 vale 10,57 m²K/W.

---

## Valori di riferimento IECC 2021

| Zona IECC | Città di riferimento | Solaio sottotetto | Parete 2×4 | Parete 2×6 |
|---|---|---|---|---|
| 2, caldo | Houston, Orlando | R-38 (6,69) | R-13 (2,29) | R-20 (3,52) |
| 3, temperato caldo | Atlanta, Dallas | R-38 (6,69) | R-15 (2,64) | R-20 (3,52) |
| 4, misto | Seattle, Washington | R-49 (8,63) | R-15 + R-5 continuo | R-21 (3,70) |
| 5, fresco | Chicago, Boston | R-49 (8,63) | R-15 + R-5 continuo | R-21 (3,70) |
| 6, freddo | Minneapolis | R-60 (10,57) | R-15 + R-5 continuo | R-21 + R-5 continuo |
| 7 – 8, molto freddo | Duluth, Fairbanks | R-60 (10,57) | R-15 + R-5 continuo | R-21 + R-5 continuo |

L'Italia si colloca in gran parte fra le zone IECC 3 e 5: le coste meridionali e la Sicilia stanno in zona 2 – 3, la pianura padana in zona 4 – 5, l'arco alpino in zona 6 – 7.

---

## Perché in Italia il conto si imposta al contrario

Gli Stati Uniti prescrivono la **R dello strato isolante**; l'Italia prescrive la **U dell'intera struttura**, comprensiva di intonaci, muratura, isolante e ponti termici corretti secondo UNI EN ISO 14683 e 10211. Valori massimi di trasmittanza da D.M. 26 giugno 2015 per gli interventi di riqualificazione:

| Zona climatica (D.P.R. 412/1993) | Gradi giorno | U parete | U copertura |
|---|---|---|---|
| A e B | fino a 900 | 0,40 W/m²K | 0,32 W/m²K |
| C | 900 – 1.400 | 0,36 W/m²K | 0,32 W/m²K |
| D | 1.400 – 2.100 | 0,32 W/m²K | 0,26 W/m²K |
| E | 2.100 – 3.000 | 0,28 W/m²K | 0,24 W/m²K |
| F | oltre 3.000 | 0,26 W/m²K | 0,22 W/m²K |

Una parete in zona E con U di 0,28 W/m²K corrisponde a una resistenza complessiva di circa 3,6 m²K/W, cioè un R-20 imperiale di struttura intera: numericamente vicinissimo al R-15 più R-5 continuo chiesto dall'IECC in zona 5. La convergenza è casuale, ma utile per orientarsi.

Due requisiti italiani che il calcolatore ignora del tutto: la **verifica termoigrometrica** secondo UNI EN ISO 13788, che esclude la condensa interstiziale, e le **prestazioni estive**, con massa superficiale superiore a 230 kg/m² oppure trasmittanza termica periodica entro 0,10 W/m²K. Nel clima italiano lo sfasamento dell'onda termica conta quanto la resistenza invernale, e un cappotto in polistirene molto leggero può soddisfare la U e restare inadeguato d'estate.

---

## Confezioni e quantità

**Pannelli e rotoli.** La resa per pacco cala al crescere dello spessore: R-13 e R-15 coprono circa 3,7 m², R-21 circa 3,5 m², R-30 circa 2,8 m², R-38 circa 2,2 m², R-49 circa 1,7 m².

**Materiale insufflato.** Un sacco di cellulosa da 11,3 kg copre circa 1,76 m² a R-38; un sacco di fibra di vetro da 13,6 kg copre circa 3,3 m² alla stessa resistenza. Vale sempre il diagramma di resa stampato sul sacco, che tiene conto dello spessore assestato.

**Schiuma spruzzata.** L'unità è il board foot: 1 piede quadrato per 1 pollice di spessore, cioè **2,36 litri**. Un locale interrato di 55,7 m² (600 pi²) trattato con 5 cm di schiuma a celle chiuse richiede 1.200 board feet netti, circa 2,8 m³ di schiuma in opera.

| Materiale | Costo materiale | Costo posato da impresa |
|---|---|---|
| Lana di vetro in pannelli | 4,3 – 9,7 $/m² | 12,9 – 23,7 $/m² |
| Lana di roccia in pannelli | 9,1 – 17,2 $/m² | 19,4 – 34,4 $/m² |
| Cellulosa insufflata | 18 – 28 $/sacco | 11,8 – 21,5 $/m² |
| Schiuma a celle aperte | 0,45 – 0,75 $/bd ft | 1,20 – 1,80 $/bd ft |
| Schiuma a celle chiuse | 1,00 – 1,60 $/bd ft | 2,00 – 3,50 $/bd ft |
| Pannelli rigidi XPS o PIR | 8,6 – 19,4 $/m² | 19,4 – 37,7 $/m² |

---

## Controllo del vapore

Le classi statunitensi si traducono in valori di resistenza al passaggio del vapore Sd, lo spessore d'aria equivalente usato in Italia:

* **Classe I**, sotto 0,1 perm: Sd oltre 35 m. Barriera al vapore vera e propria, polietilene o fogli alluminio.
* **Classe II**, da 0,1 a 1,0 perm: Sd fra 3,5 e 35 m. Freni vapore, comprese le membrane igrovariabili.
* **Classe III**, da 1 a 10 perm: Sd fra 0,35 e 3,5 m. Pitture e intonaci su lastra di gesso.

Nei climi con stagione di riscaldamento dominante il freno vapore va sul lato caldo, cioè verso l'interno. Nei climi caldo-umidi la spinta è invertita e una barriera impermeabile all'interno intrappola l'umidità. La regola che vale sempre: **mai due strati impermeabili sui due lati della stessa stratigrafia**, perché qualunque umidità entri non ha più modo di asciugare.

---

## Domande frequenti

### Quanti sacchi di isolante insufflato servono per un sottotetto?

Si moltiplica la superficie per la resistenza obiettivo e si divide per la resa del sacco. Per 93 m² (1.000 pi²) a R-38 con cellulosa da 720 R·pi² per sacco servono circa **53 sacchi** netti, che diventano 57 con l'8% di margine. La resa reale dipende dal prodotto e dalla taratura della macchina insufflatrice.

### Si può posare isolante nuovo sopra quello esistente?

Sì, se quello esistente è asciutto, non ammuffito e non danneggiato da roditori. La condizione è usare pannelli **senza rivestimento**: un secondo freno vapore fra i due strati crea un piano di condensa proprio dove non si può ispezionare. Va anche verificato che la resistenza complessiva non richieda un ricalcolo della verifica di condensa.

### Comprimere un pannello riduce la prestazione?

Sì, e in modo sensibile. Forzare un pannello da 14 cm in un'intercapedine di 9 cm schiaccia le celle d'aria che generano la resistenza: si perde una quota rilevante del valore dichiarato e si guadagna soltanto un pannello mal posato. Meglio scegliere lo spessore giusto o accettare una resistenza inferiore progettata.

### Che resistenza serve per un garage o un capannone?

Per un garage riscaldato i riferimenti statunitensi indicano R-13 – R-15 nelle pareti a telaio leggero e R-38 – R-49 in copertura. Sui capannoni metallici si usano 5 cm di schiuma a celle chiuse, circa R-13, principalmente per evitare la condensa sull'intradosso della lamiera. In Italia, se il locale è climatizzato in modo continuativo, valgono comunque le trasmittanze del D.M. 26 giugno 2015.
