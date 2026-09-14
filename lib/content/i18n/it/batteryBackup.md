## Calcolatore batteria di backup: dimensionamento, inverter e autonomia

Questo calcolatore per **sistemi di accumulo e gruppi di continuità (UPS / batterie di emergenza)** consente di dimensionare con precisione la capacità del banco batterie, la potenza dell'inverter e la potenza fotovoltaica necessaria a garantire l'autonomia energetica durante i blackout.

Lo strumento calcola:

- **Potenza continua richiesta (W)** e fabbisogno energetico giornaliero (Wh o kWh)
- **Capacità lorda raccomandata del banco batterie** in wattora (Wh) e amperora (Ah)
- **Potenza nominale dell'inverter** comprensiva dei margini di spunto
- **Autonomia stimata** a regime di carico continuativo
- **Potenza solare di ricarica (W)** per un sistema autonomo
- **Stima dei costi di investimento** in base alla chimica prescelta (LiFePO₄ rispetto a piombo AGM)

---

## 1. Componenti fondamentali di un impianto di backup

Un impianto di continuità a batteria si articola su quattro blocchi funzionali:

| Componente | Ruolo nell'impianto | Parametro cardine |
|---|---|---|
| **Banco batterie** | Accumula energia elettrochimica in corrente continua | Capacità utile (Wh / Ah) e tensione nominale (12V, 24V o 48V) |
| **Inverter / Caricabatterie** | Converte la corrente continua (CC) in alternata (CA 230V) | Potenza continua e capacità di sovraccarico di spunto |
| **Regolatore di carica** | Gestisce la ricarica da moduli fotovoltaici | Tecnologia MPPT ad alta efficienza |
| **Commutatore automatico (ATS)** | Trasferisce il carico dalla rete alle batterie in caso di guasto | Tempo di intervento inferiore a 20 ms |

---

## 2. Profondità di scarica (DoD) e longevità

La **profondità di scarica (Depth of Discharge, DoD)** rappresenta la percentuale di energia nominale prelevabile da una batteria prima di dover procedere alla ricarica, preservando l'integrità delle celle.

```
Energia utile (Wh) = Capacita nominale (Wh) x (DoD / 100)
```

| Tecnologia batteria | Profondità di scarica raccomandata | Cicli di vita utili | Rendimento complessivo |
|---|---|---|---|
| **LiFePO₄ (Litio ferro fosfato)** | 80% – 90% | 3.500 – 5.000 cicli (10–15 anni) | 95% – 98% |
| **Ioni di litio (NMC)** | 80% | 1.500 – 2.500 cicli | 92% – 95% |
| **Piombo AGM sigillato** | 50% | 400 – 600 cicli (2–4 anni) | 80% – 85% |
| **Piombo acido ad elettrolita liquido** | 50% | 300 – 500 cicli | 75% – 82% |

> **Vantaggio comparativo:** Gli accumulatori **LiFePO₄** offrono fino al doppio dell'energia fruibile a parità di capacità nominale rispetto agli accumulatori al piombo e garantiscono una vita utile da sette a dieci volte maggiore, abbattendo radicalmente il costo per kWh erogato.

---

## 3. Formule di calcolo passo dopo passo

```
1. Energia totale necessaria (Wh) = Potenza continua (W) x Ore di autonomia (h)

2. Capacita lorda batteria (Wh) = Energia necessaria (Wh) / (Rendimento inverter x DoD)

3. Capacita in amperora (Ah) = Capacita lorda (Wh) / Tensione del banco (V)

4. Potenza minima inverter (W) = Potenza continua (W) x 1,25

5. Potenza solare di ricarica (W) = Fabbisogno giornaliero (Wh) / (Ore di sole picco x 0,77)
```

### Esempio applicativo: emergenza domestica per 8 ore di blackout

- **Carico continuo essenziale:** Frigorifero (120W), router fibra e domotica (50W), illuminazione a LED (60W), notebook e ricariche (120W) = **350 W**
- **Autonomia desiderata:** 8 ore
- **Energia totale richiesta:** 350 W × 8 h = **2.800 Wh (2,8 kWh)**
- **Configurazione con celle LiFePO₄ (DoD 80%) e inverter sinusoidale puro (rendimento 92%):**
  - Capacità lorda indispensabile: 2.800 / (0,92 × 0,80) = **3.804 Wh (3,8 kWh)**
  - Tensione di sistema a 24V: 3.804 Wh / 24V = **158,5 Ah** (banco standard commerciale 24V 200Ah)
  - Inverter consigliato: 350 W × 1,25 = 437,5 W (inverter a onda sinusoidale pura di almeno 1.000W nominali per sostenere la corrente di spunto del compressore del frigorifero)

---

## 4. Tensione nominale di sistema: 12V, 24V o 48V

| Tensione di banco | Potenza continua consigliata | Sezione dei cavi di rame | Settore di utilizzo |
|---|---|---|---|
| **12 V** | Fino a 1.000 W | Molto elevata (correnti intense) | Camper, imbarcazioni, piccoli UPS |
| **24 V** | Da 1.000 W a 3.000 W | Moderata | Piccole baite, uffici, laboratori |
| **48 V** | Oltre 3.000 W | Ridotta ed economica | Abitazioni complete, impianti fotovoltaici di accumulo |

---

## Domande frequenti

### Quanti pannelli fotovoltaici servono per ricaricare completamente la batteria in un giorno?
Dividere il consumo energetico giornaliero in wattora per le ore di sole di picco medie del sito (in Italia mediamente 3,5–5,0 ore a seconda della latitudine e della stagione) applicando un fattore di efficienza globale del 77%. Per coprire un fabbisogno di 3.800 Wh con 4,5 ore di insolazione utile, occorrono circa 1.100 W di moduli fotovoltaici (pari a tre pannelli da 400 W).

### Perché è fondamentale impiegare un inverter a onda sinusoidale pura?
Un inverter a onda sinusoidale pura riproduce una curva di tensione pulita equivalente a quella della rete elettrica nazionale. Gli inverter a onda sinusoidale modificata provocano un eccessivo surriscaldamento nei motori elettrici (frigoriferi, pompe) e generano interferenze nocive sulle schede elettroniche sensibili.

### Le basse temperature invernali riducono l'efficienza della batteria?
Sì. Con il freddo la reattività degli ioni rallenta notevolmente. Una batteria al piombo perde fino al 30% della capacità nominale a 0 °C. Le batterie LiFePO₄ erogano ottima energia anche con clima rigido, ma il circuito di controllo BMS blocca tassativamente la fase di ricarica sotto 0 °C per impedire la formazione di depositi di litio metallico sulle celle.
