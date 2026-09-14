## Calculadora de área de galpão — dimensionamento logístico

Esta calculadora dimensiona a área necessária de armazém a partir do número de paletes, modelando quatro camadas: **estocagem**, **corredores de movimentação**, **áreas operacionais** e **custo de locação**. Trabalha em métrico (m², m) e imperial (pés², pés).

---

## Fórmula

```
1. Posições no piso (unid) = Total de paletes ÷ Níveis verticais
2. Área de estocagem (m²)  = Posições no piso × Área por posição
3. Área de corredor (m²)   = Área de estocagem × [Fator ÷ (1 − Fator)]
4. Área operacional (m²)   = (Estocagem + Corredor) × 25%
5. Área total (m²)         = Estocagem + Corredor + Operacional
```

A folga operacional de 25% cobre doca, pulmão, expedição, embalagem, sala de baterias, sanitários e escritório.

---

## Exemplo prático — 500 paletes, 4 níveis, empilhadeira retrátil

* **Posições no piso:** 500 ÷ 4 = **125 posições**
* **Área por posição:** 1,39 m² (15 pés²), padrão GMA
* **Área de estocagem:** 125 × 1,39 = **174,2 m²** (1.875 pés²)
* **Corredor estreito, fator 30%:** 174,2 × (0,30 ÷ 0,70) = **74,7 m²**
* **Subtotal estocagem + corredor:** **248,9 m²**
* **Folga operacional de 25%:** 248,9 × 0,25 = **62,2 m²**
* **Área total necessária:** **311,1 m²** (3.348 pés²)

Repare no efeito do nível vertical: os mesmos 500 paletes em blocado de 2 alturas exigiriam 250 posições no piso, dobrando estocagem e corredor.

---

## Dimensões de palete e área por posição

A área por posição é maior que o palete: entra a sobra da carga (2,5 a 5 cm por lado), a folga entre montantes e o espaçamento de incêndio.

| Padrão | Dimensões | Área por posição | Região |
|---|---|---|---|
| **GMA** | 1219 × 1016 mm (48 × 40 pol) | 1,39 m² (15,0 pés²) | EUA, Canadá, México |
| **EUR 1 (europalete)** | 1200 × 800 mm | 1,16 m² (12,5 pés²) | União Europeia, Ásia |
| **EUR 2 / industrial** | 1200 × 1000 mm | 1,39 m² (15,0 pés²) | Europa, Austrália |
| **PBR (Padrão Brasil)** | 1200 × 1000 mm | 1,39 m² (15,0 pés²) | Brasil |

O **PBR** brasileiro tem a mesma planta do EUR 2 — 1,00 × 1,20 m — então 1,39 m² por posição se aplica direto à operação nacional. O espaçamento de combate a incêndio segue a legislação estadual do corpo de bombeiros, não o NFPA.

---

## Sistemas de armazenagem

| Sistema | Seletividade | Aproveitamento | Melhor para |
|---|---|---|---|
| **Porta-paletes seletivo** | 100% | 35% a 45% | Muitos SKUs, giro alto, FIFO |
| **Duplo (double deep)** | 50% | 50% a 60% | 2 a 4 paletes por SKU |
| **Drive-in / drive-through** | Baixa | 65% a 75% | Volume alto, poucos SKUs, safra |
| **Blocado no piso** | Baixa | 40% a 55% | Caixa rígida, tambor, pneu |

---

## Largura de corredor por equipamento

A largura do corredor é a maior alavanca de redução de área: trocar de equipamento corta até 35% da metragem.

**Corredor largo — 3,6 a 4,0 m (12 a 13 pés).** Contrabalançada de 3 ou 4 rodas: equipamento barato, operador fácil de contratar, mas consome de 40% a 45% do piso.

**Corredor estreito — 2,6 a 3,0 m (8,5 a 10 pés).** Retrátil ou articulada. Corta de 25% a 30% da área de corredor e alcança de 7,6 a 10,7 m. Exige piso plano.

**Corredor muito estreito (VNA) — 1,7 a 2,0 m (5,5 a 6,5 pés).** Trilateral ou selecionadora guiada por trilho ou fio indutivo, alcança de 12,2 a 15,2 m. Densidade máxima, investimento alto, piso de altíssima planicidade.

O número de níveis depende do **pé-direito livre**, medido do piso até o ponto mais baixo entre tesoura, bico de sprinkler e luminária: de 4,9 a 5,5 m dá 2 a 3 níveis; de 6,1 a 7,3 m, de 3 a 4; de 8,5 a 9,8 m, de 4 a 5; acima de 11,0 m, de 6 a 8.

> **Regra de ouro:** nunca opere acima de **85% da capacidade nominal**. Acima disso a produtividade cai por dupla movimentação e congestionamento — o ganho de ocupação vira custo de mão de obra.

---

## Perguntas frequentes

### Quantos m² de galpão preciso para 1.000 paletes?
Com porta-paletes seletivo de 4 níveis e empilhadeira retrátil em corredor estreito, cerca de **604 a 697 m²** (6.500 a 7.500 pés²), já incluindo corredor e doca. Em blocado de 2 alturas, a mesma carga pede de **1.115 a 1.301 m²** — o dobro pelo mesmo estoque.

### Qual é um bom índice de aproveitamento de área?
Com porta-paletes seletivo, a projeção dos paletes representa de **35% a 45%** da área total; os 55% a 65% restantes vão para corredor, doca, embalagem e pulmão. Aproveitamento muito acima disso indica corredor subdimensionado.

### Como calcular o custo de locação a partir da metragem?
Galpão é cotado por m² ao mês no Brasil e por pé² ao ano nos EUA, em regime *triple net*. Um galpão de 929 m² (10.000 pés²) a US$ 9,00 por pé² ao ano custa **US$ 90.000 ao ano** de aluguel base — fora IPTU, seguro e condomínio.

### Quantas docas preciso?
Referência de mercado: **1 doca a cada 929 m²** (10.000 pés²) em distribuição de giro alto, ou **1 a cada 1.858 a 2.323 m²** em armazenagem de volume parado. Subdimensionar doca gera fila de carreta no pátio, que é custo de frete parado.
