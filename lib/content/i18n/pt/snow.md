## Calculadora de carga de neve — guia ASCE 7-22

> ⚠️ **Aviso de engenharia:** esta ferramenta aplica as provisões de carga de neve do **ASCE/SEI 7-22, Capítulo 7** e do **IBC §1608** — códigos dos EUA. O resultado é pré-dimensionamento e exige verificação por engenheiro habilitado.

**Para quem é este cálculo.** Na quase totalidade do território brasileiro não existe carga de neve de projeto: nevada é episódica na Serra Gaúcha e no planalto catarinense e não gera acumulação estrutural. Use esta calculadora se você projeta em **clima frio no exterior** — galpão nos EUA ou Canadá, estrutura metálica exportada, cobertura industrial na Europa ou nos Andes. Na Europa o documento equivalente é o **EN 1991-1-3 (Eurocódigo 1)**, que a ferramenta **não** calcula.

Aceita métrico (kPa, kgf/m², m²) e imperial (psf, pés²). Neve recém-caída pesa de 80 a 320 kg/m³ (5 a 20 lb/pé³); neve úmida compactada e gelo chegam a 480 a 960 kg/m³ (30 a 60 lb/pé³).

---

## Sequência de cálculo

```
1. Carga de neve no solo (pg)    — valor de mapa
2. pf = 0,7 × Ce × Ct × Is × pg  — cobertura plana, §7.3
3. ps = Cs × pf                  — cobertura inclinada, §7.4
4. pm = mínimo normativo         — §7.3.4
5. Carga de projeto = maior(ps, pm)
6. Carga total = Carga de projeto × Área em projeção horizontal
7. Acúmulo por vento (hd, pd, w) — §7.7
```

O fator **0,7** existe porque a neve do solo não se acumula integralmente numa cobertura exposta: vento, degelo solar e calor removem parte dela.
---

## Fatores de correção
| Fator | Condição | Valor |
|---|---|---|
| **Ce** — exposição | Totalmente exposta ao vento | 0,9 |
| | Parcialmente exposta (subúrbio, arborizado) | 1,0 |
| | Abrigada (mata fechada, prédios mais altos) | 1,2 |
| **Ct** — térmico | Edificação aquecida acima de 18 °C | 1,0 |
| | Sem aquecimento, câmara fria, marquise | 1,2 |
| | Ambiente permanentemente abaixo de 0 °C | 1,3 |
| **Is** — importância | Categoria I — agrícola, depósito | 0,8 |
| | Categoria II — residencial e comercial | 1,0 |
| | Categoria III / IV — escola, hospital | 1,1 a 1,2 |

---

## Redução por inclinação e mínimo normativo

O pg é valor de mapa, para 2% de probabilidade anual de excedência (retorno de 50 anos). Nos EUA vai de 0 psf no litoral sul a 60–100 psf (2,87–4,79 kPa) no norte do Maine.

Quanto mais inclinada a água, mais neve escorrega. Em cobertura aquecida (Ct ≤ 1,0), superfície lisa — metal, vidro, ardósia — mantém Cs = 1,0 até 5°, caindo linearmente a 0,0 em 70°; telha asfáltica mantém Cs = 1,0 até 30°. Em cobertura fria (Ct ≥ 1,2), os patamares sobem para 10° e 45°.

Abaixo de 15° (cerca de 3,2:12) o código impõe um piso que pode superar ps:

```
pg ≤ 20 psf (0,96 kPa)  →  pm = Is × pg
pg  > 20 psf (0,96 kPa)  →  pm = Is × 20 psf
```

---

## Acúmulo por vento (drift) — §7.7

Vento que passa sobre uma cobertura mais alta deposita neve em cunha triangular na vizinha mais baixa:

```
Massa específica   γ  = mínimo(30 ; 0,13 × pg + 14)                 [lb/pé³]
Altura do acúmulo  hd = 0,43 × (lu)^(1/3) × (pg + 10)^(1/4) − 1,5   [pés]
Sobrecarga de pico pd = hd × γ                                      [psf]
Largura da cunha   w  = 4 × hd  (acúmulo a sotavento)               [pés]
```

Essas expressões são **dimensionais em unidades imperiais** — pg em psf, lu (comprimento a barlavento) em pés. Não substitua kPa nem metros nelas.

---

## Exemplo prático — galpão em Burlington, Vermont

* **pg:** 35 psf = **1,68 kPa** (170,9 kgf/m²)
* **Fatores:** parcialmente exposta (Ce = 1,0), aquecido (Ct = 1,0), categoria II (Is = 1,0)
* **Cobertura:** telha asfáltica, inclinação 6:12 (26,57°)
* **Área em projeção horizontal:** 185,8 m² (2.000 pés²)
* **pf:** 0,7 × 1,0 × 1,0 × 1,0 × 35 = 24,5 psf = **1,17 kPa** (119,6 kgf/m²)
* **Cs:** superfície rugosa, cobertura aquecida, 26,57° ≤ 30° → **Cs = 1,0**
* **ps:** 1,0 × 24,5 = **24,5 psf** (119,6 kgf/m²)
* **Carga total:** 119,6 × 185,8 = **22.220 kgf ≈ 22,2 t** (49.000 lb)

Vinte e duas toneladas sobre tesouras e terças — a verificação de flecha e de ligação vem antes da escolha do perfil.

---

## Perguntas frequentes

### Preciso considerar carga de neve em obra no Brasil?
Não há acumulação de projeto no território brasileiro, nem mapa normativo de neve. O que governa cobertura leve aqui é **vento** (NBR 6123) e sobrecarga de manutenção.

### A ferramenta calcula pelo Eurocódigo?
Não. Ela calcula pelo **ASCE 7-22 e IBC**, base norte-americana. O EN 1991-1-3 usa outra formulação de coeficiente de forma e outro mapa — citado aqui apenas como comparação.

### Qual a diferença entre carga no solo e carga na cobertura?
A carga no solo (pg) é o dado de mapa. A da cobertura sai dela multiplicada por 0,7 e pelos fatores de exposição, térmico e importância — cerca de **70% dela** antes da redução por inclinação.

### Telhado mais inclinado dispensa verificação de neve?
Não. Cs só chega a zero a 70°. E neve que escorrega de um plano alto se acumula no plano baixo adjacente — o caso do §7.7, em que a sobrecarga local pode passar do dobro da uniforme.