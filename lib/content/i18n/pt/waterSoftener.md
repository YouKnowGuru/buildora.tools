## Calculadora de abrandador de água — guia de dimensionamento

Esta calculadora dimensiona **abrandador de água por troca iônica** a partir do número de moradores, da dureza medida, dos teores de ferro e manganês e do intervalo de regeneração. Devolve capacidade em grãos, volume de resina, consumo anual de sal, efluente e vazão de pico. Aceita métrico (mg/L, L, L/min) e imperial (GPG, galões, GPM).

> **Base de cálculo:** as fórmulas de capacidade em grãos são da **WQA (Water Quality Association)**, com faixas de equipamento conforme a **NSF/ANSI 44** — referências norte-americanas. Laboratório brasileiro informa dureza em **mg/L de CaCO₃**: converta antes de entrar com o dado.

---

## Unidades de dureza

```
1 GPG (grão por galão) = 17,118 mg/L de CaCO₃
1 grau francês (°f)    = 10 mg/L de CaCO₃
1 grau alemão (°dH)    = 17,8 mg/L de CaCO₃
1 grão                 = 64,8 mg de CaCO₃
```

Uma água de 428 mg/L equivale a 25 GPG, 42,8 °f ou 24,0 °dH.

| Dureza (mg/L de CaCO₃) | GPG | Classificação |
|---|---|---|
| 0 a 17 | 0 a 1 | Mole |
| 17 a 60 | 1 a 3,5 | Ligeiramente dura |
| 60 a 120 | 3,5 a 7 | Moderadamente dura |
| 120 a 180 | 7 a 10,5 | Dura |
| 180 a 240 | 10,5 a 14 | Muito dura |
| acima de 240 | acima de 14 | Extremamente dura |

---

## Compensação de ferro e manganês

O ensaio de dureza mede só cálcio e magnésio, mas **ferro solúvel (Fe²⁺)** e **manganês (Mn²⁺)** também saturam a resina:

```
Dureza compensada (GPG) = Dureza bruta + (Ferro mg/L × 4) + (Manganês mg/L × 2)
```

> **Atenção:** vale só para **ferro solúvel** — o que sai transparente e escurece no copo depois de minutos. Ferro particulado, que já sai com cor de ferrugem, exige **filtro oxidante antes** do abrandador; equipamento maior não resolve, a resina entope.
---

## Sequência de dimensionamento

```
1. Consumo diário (L)      = Moradores × Consumo por pessoa (padrão 284 L)
2. Dureza diária (grãos)   = Consumo diário (gal) × Dureza compensada (GPG)
3. Capacidade alvo (grãos) = Dureza diária × Dias entre regenerações × (1 + reserva %)
4. Sal por regeneração     = Volume de resina (pé³) × 3,63 kg
5. Sal anual (kg)          = Sal por regeneração × (365 ÷ Dias entre regenerações)
6. Efluente por ciclo (L)  = Volume de resina (pé³) × 151 L
```

A **reserva de 20%** evita passagem de dureza em pico de consumo. Os 284 L por pessoa ao dia (75 galões) ficam na faixa de 227 a 303 L estimada pela EPA americana. Cilindro único para de 2 a 4 horas na regeneração; operação 24 h exige duplo cilindro alternado.

---

## Exemplo prático — família de 4 pessoas, água de 428 mg/L

* **Consumo diário:** 4 × 284 = **1.136 L/dia** (300 galões)
* **Dureza:** 428 mg/L = **25 GPG**, sem ferro nem manganês
* **Carga diária:** 1.136 × 0,428 g/L = **486 g de CaCO₃/dia**, ou **7.500 grãos/dia**
* **Regeneração a cada 7 dias, reserva de 20%:** 7.500 × 7 × 1,20 = **63.000 grãos**
* **Sistema selecionado:** **64.000 grãos** — 56,6 L de resina (2,0 pé³), cilindro de 30 × 132 cm
* **Sal por regeneração:** 2,0 × 3,63 = **7,26 kg**
* **Sal anual:** 7,26 × (365 ÷ 7) = **378 kg**, ou **16 sacos de 25 kg**
* **Efluente:** 303 L por ciclo, **15,8 m³ ao ano**

Esses 63.000 grãos são **4,08 kg de CaCO₃** retirados a cada sete dias — incrustação que deixa de se depositar em tubulação, chuveiro e resistência de aquecedor.

---

## Faixas de equipamento

| Grãos exigidos | Resina | Cilindro |
|---|---|---|
| até 24.000 | 21,2 L (0,75 pé³) | 20 × 112 cm |
| 24.001 a 32.000 | 28,3 L (1,0 pé³) | 23 × 122 cm |
| 32.001 a 40.000 | 35,4 L (1,25 pé³) | 25 × 112 cm |
| 48.001 a 64.000 | 56,6 L (2,0 pé³) | 30 × 132 cm |
| 80.001 a 96.000 | 85,0 L (3,0 pé³) | 36 × 165 cm |

A dosagem de **alta eficiência** é de 3,63 kg de sal por pé³ de resina (8 lb/pé³); a convencional, de 6,8 kg/pé³, dá mais capacidade por ciclo e é cerca de 50% menos eficiente. Pastilha evaporada (99,6% NaCl) quase não forma ponte no tanque; cloreto de potássio evita sódio, mas rende 30% menos por kg. Acima de 96.000 grãos, vá de duplo cilindro alternado.

Na vazão de serviço, mantenha a pressão acima de **1,7 a 2,1 bar** (25 a 30 psi): 1 banheiro pede 26,5 L/min em DN20 (3/4"); 2 a 3 banheiros, de 37,9 a 49,2 L/min em DN25; 4 ou mais, de 60,6 L/min em DN32. O efluente é salmoura e vai para o esgoto sanitário.

---

## Perguntas frequentes

### Qual o tamanho de abrandador para uma família de 4 pessoas?
Com 1.136 L/dia e água de 257 mg/L (15 GPG): 300 galões × 15 × 7 dias × 1,20 de reserva = **37.800 grãos**, o que aponta um sistema de **40.000 grãos** (35,4 L de resina). Água de poço com ferro sobe uma faixa ou mais.

### Como converter a dureza do laudo brasileiro em GPG?
Divida o valor em mg/L de CaCO₃ por **17,118**. Um laudo de 300 mg/L dá 17,5 GPG — água muito dura. A calculadora aceita as duas unidades.

### Como o ferro da água de poço muda o dimensionamento?
Cada **1 mg/L de ferro solúvel consome 4 GPG** de capacidade. Um poço com 25 GPG e 2 mg/L de ferro tem dureza compensada de 33 GPG, um terço mais de capacidade exigida. Ignorar o ferro é o erro mais comum em poço.

### Abrandador é a mesma coisa que filtro?
Não. O abrandador troca cálcio, magnésio e ferro solúvel por sódio. Ele **não** remove cloro, nitrato, bactéria, chumbo nem sedimento — para isso é preciso carvão, osmose reversa ou ultravioleta.
