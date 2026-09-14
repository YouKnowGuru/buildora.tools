## Calculadora de baterías de respaldo: dimensionamiento, inversor y autonomía

Esta calculadora técnica de **batería de respaldo y sistemas de almacenamiento de energía (ESS)** permite dimensionar con rigor la capacidad nominal del banco de baterías, la potencia continua del inversor y la recarga solar fotovoltaica para cargas críticas residenciales o comerciales.

El sistema calcula:

- **Potencia continua demandada (W)** y consumo energético acumulado (Wh o kWh)
- **Capacidad nominal recomendada del banco de baterías** en kilovatios-hora (kWh) y amperios-hora (Ah)
- **Energía útil de batería** según la profundidad de descarga admisible (DoD)
- **Energía de corriente alterna (CA) estimada** tras el rendimiento del inversor
- **Potencia continua recomendada del inversor** con margen de seguridad operativo
- **Dimensionamiento de paneles solares** según horas de sol pico locales
- **Estimaciones de costes de planificación** con desglose de supuestos

---

## 1. Componentes esenciales del sistema

Un sistema de respaldo por batería se compone de cuatro elementos fundamentales:

| Componente | Función principal | Criterio de ingeniería |
|---|---|---|
| **Banco de baterías** | Almacena la energía eléctrica de reserva en corriente continua (CC) | Capacidad útil (Wh / Ah), química y tensión de bus (12V, 24V o 48V) |
| **Inversor / Cargador** | Convierte corriente continua (CC) en alterna (CA 230V / 120V) | Potencia nominal continua, curva de rendimiento y tolerancia a picos de arranque |
| **Regulador de carga** | Gestiona la carga segura desde paneles solares | Tecnología MPPT de alta eficiencia y tensión máxima admisible |
| **Conmutador de transferencia (ATS)** | Conmuta entre red y batería al fallar el suministro público | Tiempo de conmutación rápido (< 20 ms) y enclavamiento seguro |

---

## 2. Profundidad de descarga (DoD) y vida útil

La **profundidad de descarga (Depth of Discharge o DoD)** representa el porcentaje máximo de energía nominal que se puede extraer de una batería en cada ciclo sin acelerar su degradación prematura.

```
Energia util (Wh) = Capacidad nominal (Wh) x (DoD % / 100)
```

| Química | Profundidad de descarga recomendada (DoD) | Vida útil típica en ciclos | Características operativas |
|---|---|---|---|
| **LiFePO₄ (Litio ferrofosfato)** | 80% – 90% | 3.500 – 6.000 ciclos | Buena estabilidad térmica, curva de descarga plana, larga durabilidad |
| **Ion de litio (NMC)** | 80% | 1.500 – 2.500 ciclos | Alta densidad energética gravimétrica, formato compacto |
| **Plomo-ácido AGM (Selladas)** | 50% | 400 – 600 ciclos | Sin mantenimiento, menor coste inicial, vida cíclica limitada |
| **Plomo-ácido abiertas** | 50% | 300 – 500 ciclos | Económicas inicialmente, exigen reposición de electrolito y ventilación |

> **Evaluación técnica de LiFePO₄:** Las baterías de fosfato de hierro y litio (LiFePO₄) ofrecen por lo general una elevada estabilidad térmica, vida útil prolongada y alta capacidad aprovechable. Requieren un sistema de gestión de baterías (BMS) adecuado, equipos de carga compatibles, protecciones de sobrecorriente e instalación conforme a las instrucciones del fabricante.

---

## 3. Metodología de cálculo paso a paso

```
1. Demanda energetica (Wh) = Potencia continua (W) x Horas de autonomia (h)

2. Capacidad bruta nominal (Wh) = Demanda energetica / Rendimiento inversor / DoD x Factor temperatura

3. Capacidad en amperios-hora (Ah) = Capacidad bruta nominal (Wh) / Tension del sistema (V)

4. Potencia continua inversor (W) = Potencia continua (W) x 1,25

5. Potencia solar de recarga (W) = Demanda diaria (Wh) / (Horas sol pico x Rendimiento sistema solar)
```

### Ejemplo de cálculo: respaldo básico durante 8 horas

- **Carga continua:** Frigorífico eficiente (120W), iluminación LED y router (60W), bomba o ventilación (100W), ordenadores y recargas (70W) = **350 W**
- **Autonomía deseada:** 8 horas
- **Energía demandada:** 350 W × 8 h = **2.800 Wh (2,80 kWh)**
- **Con inversor al 93% de rendimiento y batería LiFePO₄ al 80% de DoD:**
  - Capacidad nominal requerida: 2.800 ÷ 0,93 ÷ 0,80 = **3.763 Wh (3,76 kWh)**
  - Capacidad en amperios-hora a 48V: 3.763 Wh ÷ 48 V = **78,4 Ah @ 48V**
  - Inversor continuo recomendado: 350 W × 1,25 = **437,5 W** (escalado al estándar de 500 W continuos)

> **Aviso fundamental sobre arranque de motores:** Los aparatos con motor (compresores de refrigeración, bombas de achique, bombas de pozo) pueden demandar significativamente más potencia durante el arranque que durante el funcionamiento normal. Un inversor de 500 W continuos no garantiza el arranque de estos equipos. Debe verificarse la potencia de pico (surge rating) del inversor frente a los datos de corriente de rotor bloqueado (LRA) del fabricante.

---

## 4. Selección de tensión del sistema: 12V, 24V o 48V

| Tensión de bus | Aplicación habitual | Criterio de ingeniería |
|---|---|---|
| **12 V** | SAI pequeños, furgonetas camper, sistemas portátiles (< 1.000 W) | Elevada intensidad que exige cables de cobre de gran sección |
| **24 V** | Instalaciones medianas (1.000 W a 3.000 W) | Secciones intermedias y componentes comerciales estándar |
| **48 V** | Viviendas unifamiliares, autoconsumo y sistemas de gran potencia (> 3.000 W) | Menor intensidad que simplifica el cableado y reduce caídas de tensión |

**Principio de ingeniería:** Una tensión de corriente continua más alta reduce la corriente para la misma potencia, lo que facilita el dimensionamiento de conductores y disminuye las pérdidas por efecto Joule. La sección de los conductores, las protecciones y las caídas de tensión deben calcularse específicamente para cada circuito.

---

## 5. Normativa, seguridad e instalación (Edición 2026)

Los requisitos eléctricos, de protección contra incendios, homologación de equipos y permisos varían según la jurisdicción y la configuración del sistema. En normativas de referencia internacional y en Estados Unidos:

- **NEC Artículo 706 (NFPA 70):** Regula los sistemas de almacenamiento de energía (ESS), identificando requisitos específicos para sistemas superiores a 1 kWh y referenciando normas como NFPA 855 y UL 9540.
- **UL 9540:** Norma de seguridad de producto para sistemas de almacenamiento de energía y equipos asociados.
- **NFPA 855 (Edición 2026) y ensayos UL 9540A:** Definen los criterios actualizados de evaluación de riesgos térmicos y propagación de incendios en instalaciones de baterías.

Esta calculadora proporciona estimaciones de planificación y no sustituye un proyecto eléctrico formal ni la determinación de conformidad normativa. Consulte a las autoridades locales competentes, a la compañía eléctrica y a un profesional cualificado antes de ejecutar la instalación.

---

## Preguntas frecuentes

### ¿Cómo rinde una batería nominal de 10 kWh en un apagón?
Una batería nominal de 10 kWh con una profundidad de descarga del 80% entrega 8 kWh antes de las pérdidas de conversión. Con un rendimiento de inversor del 93%, llegan aproximadamente 7,44 kWh a los consumos de corriente alterna. Ante una carga crítica continua media de 260 W, esto equivale a unas 28,6 horas de autonomía.

### ¿Cuántos paneles solares necesito para recargar el banco de baterías en un día?
Utilice la fórmula de planificación: Potencia solar estimada = Energía diaria requerida ÷ (Horas sol pico × Rendimiento global del sistema). Con un rendimiento de planificación del 77% (rango típico 75%–85%) y 4,5 horas de sol pico para reponer 2.800 Wh diarios se precisan: 2.800 ÷ (4,5 × 0,77) ≈ 808 W de paneles (dos a tres módulos de 400 W).

### ¿Cómo afecta la temperatura invernal a las baterías?
El ajuste por temperatura es una estimación. Las bajas temperaturas reducen temporalmente la capacidad de descarga disponible. En las baterías LiFePO₄, el sistema de protección BMS bloquea la recarga por debajo de 0 °C (32 °F) para evitar la formación de dendritas de litio que destruirían permanentemente las celdas.
