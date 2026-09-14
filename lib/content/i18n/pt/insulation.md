## Calculadora de isolamento térmico — guia de dimensionamento

Esta calculadora quantifica isolante térmico para forro, paredes externas, piso e cobertura, convertendo área em mantas, sacos de material insuflado ou volume de espuma projetada. Trabalha em métrico (m², cm, m²·K/W) e imperial (pé², pol, valor R).

O valor **R** norte-americano é medido em pé²·°F·h/BTU. Para converter no R métrico (RSI, em m²·K/W), divida por 5,678. A ferramenta mostra os dois.

---

## Fórmula da calculadora

```
1. Área bruta (m²)     = Comprimento × Largura
2. Área de cavidade    = Área bruta × (1 − fator de estrutura)
3. Área de compra (m²) = Área bruta × (1 + perda % ÷ 100)
4. Espessura (cm)      = (R alvo − R existente) ÷ (R por cm)
5. Mantas              = teto(Área de compra ÷ Rendimento do pacote)
6. Sacos (insuflado)   = teto((Área × R alvo) ÷ Rendimento do saco)
7. Espuma (m³)         = Área de compra × Espessura (m)
```

Em forro e placa rígida contínua o fator de estrutura é 0% e a perda a adotar é de 5%. Em parede 2×4 a 40 cm entre eixos o fator é de ~10% (cavidade ~90%); em parede 2×6 e cobertura entre caibros, de ~7% a 10% (~90% a 93%). Nesses casos adote de 8% a 10% de perda por causa de vãos, tubulações e caixas elétricas.

---

## Exemplo prático — forro de 93 m² com celulose insuflada até R-38

* **Área bruta:** 93 m² (1.000 pés²)
* **Alvo térmico:** R-38 = **RSI 6,69 m²·K/W**
* **Perda de planejamento:** 8% → área de compra = 93 × 1,08 = **100,4 m²**
* **Rendimento do saco:** 1 saco de 11,3 kg (25 lb) cobre ~11,8 RSI·m² (720 R·pé²)
* **Demanda térmica total:** 100,4 × 6,69 = **671,7 RSI·m²**
* **Sacos necessários:** 671,7 ÷ 11,8 = 56,9 → **57 sacos**
* **Espessura assentada:** celulose tem λ ≈ 0,038 W/m·K, ou 26,3 RSI por metro; 6,69 ÷ 26,3 = **25 cm**

Confira sempre o rendimento impresso no saco: a espessura assentada mínima muda por produto.

---

## Comparativo de materiais

| Material | R por pol | λ (W/m·K) | Aplicação típica |
|---|---|---|---|
| **Lã de vidro em manta** | R-3,1 – 3,4 | 0,042 – 0,047 | Paredes, forro aberto |
| **Lã de rocha (mineral)** | R-3,8 – 4,2 | 0,034 – 0,038 | Paredes, barreira de fogo |
| **Celulose insuflada** | R-3,6 – 3,8 | 0,038 – 0,040 | Forro, parede densa |
| **Lã de vidro insuflada** | R-2,5 – 2,8 | 0,052 – 0,058 | Forro |
| **Espuma PU célula aberta (8 kg/m³)** | R-3,7 – 3,8 | 0,038 – 0,039 | Entre caibros |
| **Espuma PU célula fechada (32 kg/m³)** | R-6,5 – 7,0 | 0,021 – 0,022 | Porão, galpão metálico |
| **XPS (poliestireno extrudado)** | R-5,0 | 0,029 | Fundação, contrapiso |
| **PIR / poliisocianurato** | R-6,0 – 6,5 | 0,022 – 0,024 | Laje de cobertura |

O λ é o inverso do R por metro e permite comparar direto com catálogo brasileiro. Rendimento por pacote de manta: R-13 e R-15 cobrem ~3,7 m²; R-21, ~3,5 m²; R-30, ~2,8 m²; R-38, ~2,2 m²; R-49, ~1,7 m².

---

## R de referência por zona climática

A tabela da ferramenta é a do **IECC 2021 / IRC Tabela N1102.1.3**, dos Estados Unidos, em 8 zonas climáticas americanas:

| Zona (EUA) | Forro | Parede 2×4 | Parede 2×6 |
|---|---|---|---|
| **1 (muito quente)** — Miami | R-30 (RSI 5,28) | R-13 | R-15 |
| **2 e 3 (quente a ameno)** — Houston, Atlanta | R-38 (RSI 6,69) | R-13 a R-15 | R-20 |
| **4 e 5 (misto a fresco)** — Seattle, Chicago | R-49 (RSI 8,63) | R-15 (+ R-5 ci na 5) | R-21 |
| **6 a 8 (frio a subártico)** | R-60 (RSI 10,57) | R-15 + R-5 ci | R-21 + R-5 ci |

*"ci" indica placa rígida contínua pelo lado externo. Piso sobre porão vai de R-13 na zona 1 a R-38 na zona 8.*

O Brasil não usa zonas IECC. O zoneamento nacional é o da **NBR 15220-3**, com 8 zonas bioclimáticas brasileiras, e o desempenho de habitações é avaliado pela **NBR 15575**. Nenhuma das duas é calculada aqui — em severidade de inverno, a maior parte do território brasileiro corresponde às zonas 1 a 3 do modelo americano.

---

## Boas práticas de execução

1. **Vede o ar antes de isolar.** O isolante reduz condução, mas não impede infiltração. Sele passagens de tubulação, eletrodutos e a interface forro-parede com espuma expansiva ou selante acústico.
2. **Preserve a ventilação do beiral.** Ao insuflar material no forro, instale defletores em cada vão de caibro para manter o fluxo do beiral até a cumeeira.
3. **Nunca comprima a manta.** Espremer uma R-21 de 14 cm numa cavidade de 9 cm destrói as bolsas de ar que geram resistência.

---

## Perguntas frequentes

### Quantos sacos de celulose insuflada preciso para o forro?
Multiplique comprimento por largura, some de 5% a 8% de perda e multiplique pela resistência alvo. Divida pelo rendimento do saco (~11,8 RSI·m² para sacos de 11,3 kg). Para 93 m² a R-38 com 8% de folga, dá **57 sacos**.

### Qual a diferença entre R-13 e R-15 em parede de 9 cm?
As duas mantas cabem na mesma cavidade de 8,9 cm (3,5 pol). A R-13 usa lã de densidade padrão; a R-15 usa fibra mais densa e entrega cerca de 15% mais resistência térmica na mesma espessura.

### Posso colocar isolante novo sobre o antigo?
Sim, desde que o antigo esteja seco e sem dano de roedor. Ao sobrepor mantas, use **manta sem face** (sem papel kraft) para não criar uma segunda barreira de vapor entre camadas. Para converter valor R em resistência métrica, divida por 5,678 — a calculadora exibe os dois lado a lado.
