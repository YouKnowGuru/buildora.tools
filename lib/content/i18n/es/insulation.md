## Calculadora de aislamiento térmico: cuánto material comprar

Introduce las dimensiones del paño, el tipo de aplicación y el valor R objetivo. La herramienta descuenta el entramado, aplica la merma de corte y devuelve **metros cuadrados netos, paquetes de manta, sacos de insuflado o pies tablares de espuma proyectada**, con su coste. Trabaja en métrico e imperial.

> **Base normativa:** los valores R de referencia son los del **IECC 2021 / IRC Tabla N1102.1.3** estadounidenses, con zonas climáticas de 1 a 8. **No** calcula según el CTE. En España el documento aplicable es el **CTE DB-HE 1**, que se expresa en transmitancia U (W/m²·K) por elemento y no en resistencia R por capa. Los valores de conductividad λ de la tabla de materiales sí sirven en cualquier norma.

---

## Paso 1: superficie bruta y factor de entramado

```
Superficie bruta (m²)   = Largo × Ancho
Superficie neta (m²)    = Bruta × (1 − Factor de entramado)
Superficie a comprar    = Neta × (1 + Merma % ÷ 100)
Espesor necesario (mm)  = (R objetivo − R existente) ÷ R por pulgada × 25,4
Sacos de insuflado      = Superficie × Déficit de R ÷ Rendimiento del saco
```

El **factor de entramado** descuenta la madera, que no aísla igual que la cámara: **0 %** en desván sobre vigueta abierta y en aislamiento continuo exterior (ci); **~10 %** en muro 2×4 a 400 mm de eje (16 in) y en forjado sobre cámara sanitaria; **7 a 10 %** en 2×6 y entre pares. Añade un **5 %** de merma en desván y un **8 a 10 %** en muros.

---

## Paso 2: valores R de referencia por zona climática (IECC)

| Zona | Ciudad de referencia | Desván | Cámara 2×4 | Cámara 2×6 |
|---|---|---|---|---|
| 1 muy cálida | Miami | R-30 (RSI 5,3) | R-13 | R-15 |
| 2 – 3 cálida | Houston, Atlanta | R-38 (RSI 6,7) | R-13 – R-15 | R-20 |
| 4 mixta | Seattle | R-49 (RSI 8,6) | R-15 | R-21 |
| 5 fría | Chicago, Boston | R-49 (RSI 8,6) | R-15 + R-5 ci | R-21 |
| 6 – 8 muy fría | Minneapolis | R-60 (RSI 10,6) | R-15 + R-5 ci | R-21 + R-5 ci |

Las siglas **ci** indican aislamiento continuo por fuera del entramado. Para pasar de R a RSI métrico: `RSI = R × 0,1761`.

---

## Paso 3: materiales y conductividad real

| Material | R por pulgada | λ (W/m·K) | Uso habitual |
|---|---|---|---|
| Lana de vidrio en manta | 3,1 – 3,4 | 0,042 – 0,047 | Cámaras de muro, desván |
| Lana de roca | 3,8 – 4,2 | 0,034 – 0,038 | Muros, tabiquería, cortafuegos |
| Celulosa insuflada | 3,6 – 3,8 | 0,038 – 0,040 | Desván, insuflado en cámara |
| Lana de vidrio insuflada | 2,5 – 2,8 | 0,052 – 0,058 | Desván, poco polvo |
| Poliuretano célula abierta | 3,7 – 3,8 | 0,038 – 0,039 | Faldones, tabiquería |
| Poliuretano célula cerrada | 6,5 – 7,0 | 0,021 – 0,022 | Sótano, cámara sanitaria, nave |
| Poliisocianurato (PIR) | 6,0 – 6,5 | 0,022 – 0,024 | Cubierta, trasdosado |

El poliuretano de célula cerrada es freno de vapor de clase II (0,1 a 1,0 perm) por sí solo; el de célula abierta pasa de 10 perm y necesita freno aparte en clima frío.

---

## Paso 4: de superficie a unidades de compra

Un paquete de manta cubre unos **3,72 m² (40 pies²)** en R-13 y R-15, 2,79 m² en R-30, 2,23 m² en R-38 y 1,67 m² en R-49, redondeando al alza. El insuflado se vende por capacidad térmica: un saco de celulosa de 11,3 kg (25 lb) rinde unos **720 R·pie²**, y uno de lana de vidrio de 13,6 kg (30 lb), 1.350 R·pie².

### Ejemplo resuelto: desván de 92,9 m² (1.000 pies²) a R-38 con celulosa

* **Superficie bruta:** 92,9 m², factor de entramado 0 % por ser vigueta abierta
* **Con 8 % de merma:** 92,9 × 1,08 = **100,3 m²** (1.080 pies²)
* **Rendimiento del saco a R-38:** 720 ÷ 38 = 18,9 pies² = **1,76 m² por saco**
* **Sacos exactos:** (1.000 × 38) ÷ 720 = 52,8 → **53 sacos**
* **Sacos con merma:** 100,3 ÷ 1,76 = 57,0 → **57 sacos**

---

## Preguntas frecuentes

### ¿Cuántos sacos de aislamiento insuflado necesito para el desván?

Multiplica largo por ancho, añade un 5 a 8 % de merma y divide la capacidad térmica total entre el rendimiento del saco. Para 92,9 m² a R-38 con celulosa de 720 R·pie² salen **53 sacos** exactos, o **57 sacos** con holgura.

### ¿Qué diferencia hay entre R-13 y R-15 en un muro de 2×4?

Ambas mantas son para la misma cámara de 89 mm (3,5 in). La R-15 usa fibra de mayor densidad y da un **15 % más de resistencia térmica** en el mismo espesor. Desde la zona climática 3, el IECC ya pide R-15 como mínimo prescriptivo.

### ¿Puedo poner aislamiento nuevo sobre el viejo en el desván?

Sí, si el existente está seco y sin daños de roedores. Usa **manta sin papel**: con kraft encima de la capa vieja encierras un freno de vapor en medio del paquete y la humedad no drena.

### ¿Cuánto aislamiento lleva un garaje o una nave metálica?

En garaje calefactado, la referencia es R-13 a R-15 en muro de 2×4, R-21 en 2×6 y R-38 a R-49 en techo. En nave metálica o de postes, lo estándar son **50 mm (2 in) de poliuretano de célula cerrada**, del orden de R-13 a R-14, que además evitan la condensación en la chapa.
