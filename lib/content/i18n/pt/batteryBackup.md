## Calculadora de bateria de emergência: dimensionamento, inversor e autonomia

Esta calculadora de **bateria de reserva (backup) e nobreak residencial** permite calcular com precisão a capacidade do banco de baterias, a potência do inversor e a recarga solar opcional para sustentar cargas críticas durante falhas na rede elétrica.

O sistema calcula:

- **Potência contínua total (W)** e consumo diário acumulado (Wh ou kWh)
- **Capacidade bruta recomendada do banco de baterias** em watt-hora (Wh) e ampère-hora (Ah)
- **Potência recomendada do inversor** com margem de segurança para corrente de pico
- **Autonomia estimada** em operação contínua
- **Potência fotovoltaica necessária (W)** para recarga solar diária
- **Estimativa de investimento** conforme a tecnologia (LiFePO₄ versus chumbo-ácido AGM)

---

## 1. Elementos essenciais do sistema de reserva

Um sistema de alimentação ininterrupta por baterias é composto por quatro módulos interligados:

| Componente | Papel no sistema | Especificação determinante |
|---|---|---|
| **Banco de baterias** | Armazena energia química em corrente contínua | Capacidade útil (Wh / Ah) e tensão nominal (12V, 24V ou 48V) |
| **Inversor / Carregador** | Converte corrente contínua (CC) em alternada (CA 127V ou 220V) | Potência nominal contínua e capacidade de pico |
| **Controlador de carga** | Regula o fluxo de energia dos módulos solares | Tecnologia MPPT com alta eficiência |
| **Chave de transferência (ATS)** | Comuta entre rede e baterias sem interrupção perceptível | Tempo de transferência reduzido (< 20 ms) |

---

## 2. Profundidade de descarga (DoD) e durabilidade

A **profundidade de descarga (Depth of Discharge ou DoD)** é a porcentagem máxima da capacidade nominal da bateria que pode ser consumida antes de ser necessária a recarga.

```
Energia utilizavel (Wh) = Capacidade nominal (Wh) x (DoD / 100)
```

| Química da bateria | Profundidade de descarga recomendada | Ciclos de vida útil | Eficiência global |
|---|---|---|---|
| **LiFePO₄ (Lítio ferro-fosfato)** | 80% – 90% | 3.500 – 5.000 ciclos (10 a 15 anos) | 95% – 98% |
| **Lítio-íon convencional (NMC)** | 80% | 1.500 – 2.500 ciclos | 92% – 95% |
| **Chumbo-ácido AGM selada** | 50% | 400 – 600 ciclos (2 a 4 anos) | 80% – 85% |
| **Chumbo ventilada estacionária** | 50% | 300 – 500 ciclos | 75% – 82% |

> **Vantagem tecnológica:** As baterias de **LiFePO₄** disponibilizam quase o dobro de energia utilizável comparadas a baterias de chumbo de mesma capacidade nominal, com uma vida útil de seis a dez vezes superior, reduzindo sensivelmente o custo por ciclo ao longo dos anos.

---

## 3. Fórmulas de dimensionamento

```
1. Consumo total (Wh) = Potencia nominal (W) x Tempo de autonomia (h)

2. Capacidade bruta da bateria (Wh) = Consumo total (Wh) / (Rendimento inversor x DoD)

3. Capacidade em ampere-hora (Ah) = Capacidade bruta (Wh) / Tensao do banco (V)

4. Potencia minima do inversor (W) = Potencia nominal (W) x 1,25

5. Potencia solar de recarga (W) = Consumo diario (Wh) / (Horas de sol pico x 0,77)
```

### Exemplo de dimensionamento: residência por 8 horas de apagão

- **Cargas mantidas:** Geladeira duplex (120W), roteador de internet e automação (40W), iluminação LED (60W), televisor e carregadores (130W) = **350 W**
- **Autonomia pretendida:** 8 horas
- **Energia demandada:** 350 W × 8 h = **2.800 Wh (2,8 kWh)**
- **Banco com LiFePO₄ (DoD 80%) e inversor senoidal puro (eficiência 92%):**
  - Capacidade bruta obrigatória: 2.800 / (0,92 × 0,80) = **3.804 Wh (3,8 kWh)**
  - Em tensão de 24V: 3.804 Wh / 24V = **158,5 Ah** (banco padrão de 24V 200Ah)
  - Inversor recomendado: 350 W × 1,25 = 437,5 W (inversor senoidal puro comercial de 1.000W contínuos para absorver a corrente de partida da geladeira)

---

## 4. Escolha da tensão do banco: 12V, 24V ou 48V

| Tensão do sistema | Potência contínua sugerida | Bitola dos condutores | Aplicações recomendadas |
|---|---|---|---|
| **12 V** | Até 1.000 W | Bitola grossa (correntes altas) | Veículos recreativos, motorhomes, barcos |
| **24 V** | 1.000 W a 3.000 W | Bitola média | Pequenos sítios, telecomunicações, escritórios |
| **48 V** | Acima de 3.000 W | Bitola fina e econômica | Residências unifamiliares, sistemas solares de grande porte |

---

## Perguntas frequentes

### Quantos painéis solares são necessários para recarregar o banco de baterias em um único dia?
Divida o consumo diário em watt-hora pelas horas de sol pleno de sua região (no Brasil e em Portugal habitualmente entre 4,0 e 5,5 horas) aplicando uma taxa de eficiência do sistema de 77%. Para repor 3.800 Wh por dia com 4,5 horas de sol pico, são necessários cerca de 1.100 W de painéis, equivalendo a três módulos de 400 W.

### Por que é indispensável usar um inversor de onda senoidal pura?
O inversor de onda senoidal pura entrega uma forma de onda de tensão idêntica à fornecida pelas distribuidoras de energia elétrica. Inversores de onda modificada aquecem motores de indução (compressores de refrigeração e bombas d'água), geram ruídos parasitas em sistemas de áudio e podem queimar equipamentos eletrônicos modernos.

### As baterias perdem capacidade em temperaturas muito frias?
Sim. O frio desacelera o transporte iônico no eletrólito. Em baterias de chumbo-ácido a perda atinge cerca de 20% a 30% a 0 °C. No caso de baterias LiFePO₄, a descarga ocorre com bom rendimento, porém o sistema de proteção BMS impede o processo de recarga abaixo de 0 °C para prevenir danos permanentes às células.
