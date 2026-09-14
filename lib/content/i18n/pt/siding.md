## Calculadora de revestimento de fachada — guia de levantamento

Esta calculadora transforma as medidas da fachada em **área líquida de revestimento**, quantidade de *squares*, caixas fechadas e metragem de perfis de acabamento. Serve para siding vinílico, placa cimentícia, madeira engenheirada, tábua de cedro e painel metálico. Trabalha em métrico (m, m²) e imperial (pés, pés²).

No mercado norte-americano o revestimento é comprado e orçado por **square**:

> **1 square = 100 pés² = 9,29 m²**

---

## Etapas de cálculo

```
1. Perímetro (m)      = 2 × (Comprimento + Largura)
2. Área bruta (m²)    = Perímetro × Altura até o beiral
3. Empena triangular  = 0,5 × Base × Altura do cume × Quantidade
   Empena gambrel     = [((Base + Quebra) ÷ 2 × Altura inferior)
                         + (0,5 × Quebra × Altura superior)] × Quantidade
   Empena em arco     = 0,5 × 3,1416 × (Base ÷ 2)² × Quantidade
4. Área líquida (m²)  = Área bruta + Empenas − Aberturas
5. Área a comprar     = Área líquida × (1 + perda % ÷ 100)
6. Squares            = Área a comprar (m²) ÷ 9,29
7. Caixas             = teto(Área a comprar ÷ Rendimento da caixa)
```

Meça da soleira da fundação até a linha do beiral. Em sobrado, multiplique a altura de um pavimento pelo número de pisos acima do solo — 2,74 m × 2 = 5,49 m num sobrado de dois pavimentos. Telhado de **quatro águas** não tem empena: informe quantidade zero.

---

## Aberturas a descontar

| Abertura | Vão padrão | Área |
|---|---|---|
| Porta de entrada | 0,91 × 2,13 m (3 × 7 pés) | 1,95 m² (21 pés²) |
| Porta de correr / francesa | 1,83 × 2,13 m (6 × 7 pés) | 3,90 m² (42 pés²) |
| Janela de guilhotina comum | 0,91 × 1,22 m (3 × 4 pés) | 1,11 m² (12 pés²) |
| Janela panorâmica | 1,52 × 1,52 m (5 × 5 pés) | 2,32 m² (25 pés²) |
| Portão de garagem simples | 2,74 × 2,13 m (9 × 7 pés) | 5,85 m² (63 pés²) |
| Portão de garagem duplo | 4,88 × 2,13 m (16 × 7 pés) | 10,40 m² (112 pés²) |

Desconte toda abertura acima de 1 m² (10 pés²): vão menor não compensa, porque o recorte em volta dele gera sobra.

---

## Perda de corte por material

| Material | Perda |
|---|---|
| **Siding vinílico** | 5% a 10% |
| **Painel metálico / aço** | 5% a 10% |
| **Placa cimentícia (fibrocimento)** | 10% a 12% |
| **Madeira engenheirada** | 10% a 12% |
| **Tábua de cedro chanfrada** | 12% a 15% |
| **Telha/escama de madeira** | 15% a 20% |
| **Fachada de geometria complexa** | +5% adicional |

Mansardas, sacadas, torreões e beirais em níveis diferentes pedem os 5% extras.

---

## Exemplo prático — casa térrea de 12,19 m × 9,14 m

* **Pé-direito até o beiral:** 2,74 m (9 pés)
* **Perímetro:** 2 × (12,19 + 9,14) = **42,66 m** (140 pés)
* **Área bruta de parede:** 42,66 × 2,74 = **117,0 m²** (1.260 pés²)
* **Duas empenas triangulares** (base 9,14 m, cume 1,52 m): 0,5 × 9,14 × 1,52 × 2 = **13,9 m²**
* **Área bruta total:** 117,0 + 13,9 = **130,9 m²** (1.410 pés²)
* **Aberturas:** 2 portas (3,90 m²) + 8 janelas (8,89 m²) + 1 garagem simples (5,85 m²) = **18,7 m²**
* **Área líquida:** 130,9 − 18,7 = **112,2 m²** (1.209 pés²)
* **Perda de 10%:** 112,2 × 1,10 = **123,4 m²** (1.329,9 pés²)
* **Squares:** 123,4 ÷ 9,29 = 13,3 → pedir **14 squares**
* **Caixas de vinílico** (2 squares = 18,58 m² por caixa): 123,4 ÷ 18,58 = 6,64 → **7 caixas**, cobrindo 130,1 m² e sobrando 6,7 m²

Sobra de uma caixa não é desperdício: painel de lote diferente quase nunca casa de tom, e guardar material do mesmo lote resolve remendo de granizo ou batida anos depois.

Os perfis de acabamento não entram na conta de squares — são vendidos por barra linear, com 10% de folga. **Perfil de arranque:** todo o perímetro, 42,66 m no exemplo. **Cantoneira de canto externo:** 4 × 2,74 = 10,96 m. **Perfil J:** os 4 lados de cada janela, 3 lados de cada porta e a linha de rincão da empena.

---

## Perguntas frequentes

### O que é um square de revestimento?
É a unidade de venda norte-americana: **100 pés², ou 9,29 m²** de superfície acabada (um quadrado de 3,05 × 3,05 m). Caixa de vinílico, palete de placa cimentícia e mão de obra de fachada são todos orçados por square.

### Como calcular o revestimento de um sobrado?
A metragem depende da **área de parede externa**, não da área de piso. Some a altura dos pavimentos antes de multiplicar pelo perímetro: um sobrado de 10,67 × 10,97 m com 5,49 m de altura total dá cerca de 237 m² de parede bruta, ou 24 a 27 squares líquidos já com perda.

### Como calcular empena de telhado gambrel (tipo celeiro)?
A empena gambrel tem duas inclinações. Calcule a parte de baixo como trapézio — (Base + Quebra) ÷ 2 × Altura inferior — e a de cima como triângulo: 0,5 × Quebra × Altura superior. A calculadora faz a soma automaticamente.

### Quanto de perda devo prever na placa cimentícia?
Trabalhe com **10% a 12%**. A placa é pesada, quebra em canto e exige corte com serra de pó controlado, o que gera mais retalho inaproveitável que o vinílico. Em fachada com muitas janelas ou mansarda, suba para 15%.
