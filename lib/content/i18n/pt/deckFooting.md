## Calculadora de sapatas para deck — dimensionamento de bases e pilaretes

Esta calculadora dimensiona as **sapatas de concreto** e os **pilaretes** de um deck elevado pelo método da **área de influência** do IRC R507 (código residencial norte-americano). Informe as dimensões do deck, a sobrecarga de utilização, a carga permanente, a tensão admissível do solo e a malha de pilares. A ferramenta aceita métrico (m, cm, m³) e imperial (pés, pol, jarda³).

> **Base normativa:** o cálculo segue o **IRC R507** e a Tabela R401.4.1, códigos dos Estados Unidos. Não é um cálculo pela NBR 6122 nem pela NBR 6118. Use o resultado como pré-dimensionamento e submeta o projeto a um engenheiro para verificação local.

---

## Cargas de projeto

| Tipo de carga | Valor típico | Origem |
|---|---|---|
| **Sobrecarga de utilização** (pessoas, móveis, churrasqueira) | 195 kgf/m² (40 psf) | IRC Tabela R301.5 |
| **Carga permanente** (tabuado, vigotas, guarda-corpo) | 49 kgf/m² (10 psf) | Composição usual |
| **Carga de neve** (opcional) | 0 a 490 kgf/m² (0 a 100 psf) | Emenda local, clima frio |

Para deck com **ofurô ou spa**, eleve a sobrecarga para 290 a 490 kgf/m² (60 a 100 psf). Um ofurô de 2.300 litros pesa cerca de 2.300 kgf em pouca área e normalmente exige sapatas dedicadas.

---

## Fórmula da calculadora

```
1. Área do deck (m²)          = Comprimento × Largura
2. Carga uniforme (kgf/m²)    = Sobrecarga + Permanente + Neve
3. Carga total (kgf)          = Área × Carga uniforme
4. Nº de pilares              = Linhas × Pilares por linha
5. Carga por pilar (kgf)      = Carga total ÷ Nº de pilares
6. Área da sapata (m²)        = Carga por pilar ÷ Tensão admissível (kgf/m²)
7. Diâmetro (m)               = 2 × raiz(Área ÷ 3,1416)
8. Lado (sapata quadrada, m)  = raiz(Área)
9. Volume de concreto (m³)    = Área × Espessura × Nº de pilares
```

### Exemplo prático — deck de 5,0 m × 3,6 m sobre solo areno-argiloso

* **Área:** 5,0 × 3,6 = **18,0 m²** (194 pés²)
* **Carga uniforme:** 195 + 49 = **244 kgf/m²** (50 psf)
* **Carga total:** 18,0 × 244 = **4.392 kgf**
* **Malha 2 linhas × 3 pilares:** 6 pilares
* **Carga por pilar:** 4.392 ÷ 6 = **732 kgf** (7,18 kN)
* **Tensão admissível adotada:** 120 kPa = 12.206 kgf/m² (2.500 psf)
* **Área necessária:** 732 ÷ 12.206 = **0,060 m² = 600 cm²**
* **Diâmetro:** 2 × raiz(0,060 ÷ 3,1416) = **27,6 cm** → adotar molde de **30 cm** (12 pol)
* **Concreto por sapata (30 cm de altura):** 3,1416 × 0,15² × 0,30 = 0,0212 m³
* **Volume total:** 0,0212 × 6 = 0,127 m³ → com 10% de perda, **0,14 m³**

---

## Tensão admissível do solo

| Classificação do solo | kPa | kgf/cm² | psf | Referência |
|---|---|---|---|---|
| Argila mole / argila arenosa | 72 | 0,73 | 1.500 | IRC Tab. R401.4.1 |
| Silte / areia siltosa | 96 | 0,98 | 2.000 | IRC Tab. R401.4.1 |
| Areia média / granular misto | 120 | 1,22 | 2.500 | Prática geotécnica |
| Cascalho / areia com cascalho | 144 | 1,46 | 3.000 | IRC Tab. R401.4.1 |
| Aterro compactado / areia densa | 192 | 1,95 | 4.000 | Laudo geotécnico |

Sem sondagem no terreno, os órgãos licenciadores norte-americanos adotam 1.500 ou 2.000 psf (72 a 96 kPa). No Brasil, trabalhe com a tensão do laudo de sondagem.

Moldes cilíndricos padronizados: 20, 25, 30, 35, 40, 45, 50 e 60 cm (8 a 24 pol). Sempre arredonde para cima.

---

## Profundidade da cava não é a espessura da sapata

A **espessura** calculada é apenas a altura do bloco de concreto — não a profundidade do buraco. O IRC R403.1.4 exige que a base desça até a **linha de congelamento local**, tipicamente 75 a 120 cm (30 a 48 pol) nos Estados Unidos, para que o gelo não erga o deck.

No Brasil não há congelamento do solo e essa exigência não se aplica. O que governa aqui é descer até solo firme, abaixo da camada vegetal e do aterro solto — na prática 60 a 100 cm na maioria dos terrenos — e nunca apoiar sapata em solo orgânico ou expansivo.

---

## Perguntas frequentes

### Quantas sapatas preciso para um deck?
Trabalhe com malha de pilares de 1,8 a 2,4 m (6 a 8 pés). Um deck de 5,0 m × 3,6 m normalmente pede **6 pilares** (2 linhas de 3), além da viga de encosto parafusada na fachada. Mais pilares = sapatas menores.

### Qual o diâmetro de sapata para um deck residencial comum?
Com 244 kgf/m² de carga uniforme sobre solo de 120 kPa, espere sapatas circulares de cerca de **30 cm de diâmetro** por pilar. Em argila mole (72 kPa) sobe para 35 a 40 cm; em cascalho compactado (192 kPa) cai para 20 a 25 cm.

### Posso usar bloco pré-moldado em vez de sapata concretada?
Blocos apoiados na superfície servem para decks baixos, autoportantes e desvinculados da casa. Para deck fixado na edificação, ou com guarda-corpo obrigatório, concrete a base apoiada em solo firme.

### Quanto de concreto preciso comprar?
Multiplique a área da sapata pela espessura e pelo número de pilares. Um deck de 6 pilares com sapatas de 30 cm de diâmetro e 30 cm de altura consome cerca de **0,14 m³** — uma betoneira pequena resolve o serviço todo.
