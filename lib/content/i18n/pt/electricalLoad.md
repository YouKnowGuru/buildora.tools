## Calculadora de carga elétrica — dimensionamento de padrão de entrada

Esta calculadora dimensiona o **padrão de entrada residencial** pelo **método opcional do NEC 220.82** (National Electrical Code, Estados Unidos). Informe a área construída, os aparelhos fixos, o carregador de veículo elétrico e a climatização para obter carga total em VA e kW, corrente em ampères, tamanho de quadro e seção dos condutores. Aceita métrico (m²) e imperial (pé²).

> **Base normativa:** o cálculo é feito em **120/240 V monofásico com neutro central**, o sistema norte-americano. Não é um cálculo pela **NBR 5410** nem pelas normas das concessionárias brasileiras, que trabalham com 127/220 V, fatores de demanda próprios e tabelas de seção em mm².

---

## Fórmula da calculadora (NEC 220.82)

```
1. Iluminação e tomadas  = Área (m²) × 32,29 VA/m²   [3 VA/pé²]
2. Circuitos de cozinha  = Nº × 1.500 VA (mínimo 2 = 3.000 VA)
   Lavanderia            = 1.500 VA
3. Aparelhos fixos       = soma das potências de placa (VA)
4. Carga geral total     = (1) + (2) + (3)
5. Demanda líquida       = 10.000 + 0,40 × (Carga geral − 10.000)
6. Climatização          = maior entre resfriamento e aquecimento
7. Carga do padrão       = Demanda líquida + Climatização
8. Corrente (A)          = Carga do padrão ÷ 240 V
```

O fator de 40% existe porque nunca todos os aparelhos operam em plena carga ao mesmo tempo. Aquecimento e ar-condicionado são **não coincidentes** (NEC 220.82(C)): entra apenas o maior dos dois.

---

## Exemplo prático — residência de 223 m² totalmente elétrica

* **Iluminação e tomadas:** 223 × 32,29 = **7.200 VA**
* **Circuitos de cozinha e lavanderia:** (2 × 1.500) + 1.500 = **4.500 VA**
* **Aparelhos fixos:** fogão elétrico 12.000 + aquecedor de água de 189 L 4.500 + secadora 5.000 + lava-louças 1.200 + triturador 800 + micro-ondas 1.200 + carregador de VE nível 2 (48 A em 240 V) 11.520 = **36.220 VA**
* **Carga geral total:** 7.200 + 4.500 + 36.220 = **47.920 VA**
* **Demanda líquida:** 10.000 + 0,40 × 37.920 = 10.000 + 15.168 = **25.168 VA**
* **Climatização:** ar-condicionado central 5.000 VA *vs.* bomba de calor com resistência auxiliar de 10 kW → 10.000 + (0,75 × 5.000) = **13.750 VA** (governa)
* **Carga total do padrão:** 25.168 + 13.750 = **38.918 VA**
* **Corrente calculada:** 38.918 ÷ 240 = **162,2 A**
* **Recomendação:** quadro de **200 A** (81,1% de utilização, 37,8 A de folga)

---

## Potências de placa usuais

| Equipamento | Potência típica |
|---|---|
| Fogão elétrico de embutir 76 cm (30 pol) | 12.000 W |
| Cooktop separado / forno de parede | 6.000 – 8.000 / 4.000 – 5.000 W |
| Aquecedor de água com tanque (189 L) | 4.500 W |
| Aquecedor de passagem elétrico | 18.000 – 36.000 W |
| Secadora elétrica (mínimo NEC 220.54) | 5.000 VA |
| Carregador de VE nível 2 | 3,8 / 7,7 / 9,6 / 11,5 / 19,2 kW |
| Ar-condicionado central 3 / 4 / 5 TR | 4.500 / 5.500 / 7.000 VA |

Fornalha elétrica central entra com **65%** da placa (NEC 220.82(C)(3)); ventilador de fornalha a gás, com ~800 VA. Ofurô e aquecedor de piscina, de 6.000 a 11.000 W.

---

## Condutores de entrada (NEC Tabela 310.12)

| Padrão | Cobre 75 °C | Alumínio 75 °C |
|---|---|---|
| **100 A** | #4 AWG (21,2 mm²) | #2 AWG (33,6 mm²) |
| **125 A** | #2 AWG (33,6 mm²) | #1/0 AWG (53,5 mm²) |
| **150 A** | #1 AWG (42,4 mm²) | #2/0 AWG (67,4 mm²) |
| **200 A** | **#2/0 AWG (67,4 mm²)** | **#4/0 AWG (107,2 mm²)** |
| **225 A** | #3/0 AWG (85,0 mm²) | 250 kcmil (127 mm²) |
| **400 A** | 2 × #2/0 AWG | 2 × #4/0 AWG |

Eletroduto mínimo: 32 mm (1¼ pol) até 125 A, 40 mm (1½ pol) em 150 A, 50 mm (2 pol) em 200 e 225 A. Aterramento pela Tabela 250.66: #8 AWG até 125 A, #6 AWG em 150 A, #4 AWG em 200 e 225 A. As equivalências em mm² são nominais, para referência com catálogo brasileiro.

---

## Perguntas frequentes

### Dá para instalar um carregador de VE de 48 A num quadro de 100 A?
Na maioria das casas com fogão, aquecedor de água e ar-condicionado elétricos, não — o cálculo estoura os 100 A. Se aquecimento e água forem a gás, um quadro de 100 A costuma aceitar um carregador de 32 A (7,7 kW). Alternativas: subir para 200 A ou instalar um gerenciador de carga (EVEMS) conforme NEC 625.42.

### Qual a diferença entre VA e watt?
Watt mede potência ativa, consumida por cargas resistivas (resistências, fogão, chuveiro). VA mede potência aparente (tensão × corrente) e inclui a parcela reativa de motores e compressores. Para cargas resistivas o NEC trata 1 W = 1 VA; para motores, usa o VA de placa.

### Quantos ampères preciso para uma casa?
Pelo método do NEC, casas com todos os aparelhos elétricos, bomba de calor e um carregador de VE fecham em **200 A** até cerca de 280 m². Acima disso, ou com dois carros elétricos e oficina, vai para 300 ou 400 A.

### O resultado vale para uma instalação brasileira?
Não diretamente. A corrente sai referida a 240 V; em 127/220 V a corrente para a mesma potência é diferente, e a NBR 5410 usa outros fatores de demanda e critérios de queda de tensão. Use o número como ordem de grandeza da carga instalada.
