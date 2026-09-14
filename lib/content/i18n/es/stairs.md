## Calculadora de escaleras: contrahuella, huella y zancas

Introduce el **desnivel total** entre pavimentos acabados y la herramienta devuelve el número de contrahuellas, la contrahuella exacta, el desarrollo horizontal, la longitud de la zanca, el ángulo de inclinación, el hueco de escalera, los metros de pasamanos y el número de balaustres. La **contrahuella** es la cara vertical del peldaño, la **huella** la superficie que se pisa y la **zanca** o limón la pieza diagonal portante. Trabaja en métrico e imperial.

> **Base normativa:** los límites que aplica la herramienta son los del **IRC §R311.7** (vivienda) y el **IBC §1011** estadounidenses, más la **OSHA 1910.25** para escalera industrial. **No** calcula según el CTE. En España el documento aplicable es el **CTE DB-SUA 1**, que fija sus propios máximos de contrahuella y mínimos de huella, distintos de los del IRC.

---

## Secuencia de cálculo

```
1. Nº de contrahuellas  = redondeo(Desnivel total ÷ Contrahuella objetivo)
2. Contrahuella exacta  = Desnivel total ÷ Nº de contrahuellas
3. Nº de huellas        = Nº de contrahuellas − 1
4. Desarrollo (mm)      = Nº de huellas × Huella
5. Zanca (mm)           = raíz(Desnivel total² + Desarrollo²)
6. Inclinación (°)      = arcotangente(Contrahuella ÷ Huella)
7. Regla de Blondel     = 2 × Contrahuella + Huella
8. Pasamanos (mm)       = Zanca + 300 mm (12 in) de retornos
9. Balaustres           = redondeo al alza(Huella ÷ 102 mm) × Nº de huellas
```

Todas las contrahuellas de un mismo tramo deben ser iguales, con tolerancia de **9,5 mm (3/8 in)** según IRC §R311.7.5.1. Una diferencia mayor es la causa más frecuente de tropiezos y de que el inspector rechace el tramo.

---

## Límites normativos y confort

| Norma | Contrahuella máxima | Huella mínima | Uso |
|---|---|---|---|
| **IRC §R311.7** (residencial) | 197 mm (7,75 in) | 254 mm (10,0 in) | Unifamiliar, adosado, piso |
| **IBC §1011.5** (comercial) | 178 mm (7,0 in) | 279 mm (11,0 in) | Oficinas, retail, hotel, colegio |
| **OSHA 1910.25** (industrial) | 241 mm (9,5 in) | 241 mm (9,5 in) | Escalera de servicio, pasarelas |

La **regla de Blondel** (1675) equilibra altura y profundidad para la zancada natural: `2 × Contrahuella + Huella = 600 a 635 mm (24 a 25 in)`. Por debajo de 25° la escalera es casi una rampa; entre **30° y 37°** está la zona cómoda; de 37° a 42° resulta empinada, típica de sótano o terraza; por encima de 42° ya es de buhardilla.

---

## Ejemplo resuelto: escalera de sótano, 2.667 mm de desnivel

* **Desnivel total:** 2.667 mm (105 in), 900 mm (36 in) de ancho
* **Nº de contrahuellas:** 2.667 ÷ 190,5 = **14 contrahuellas**
* **Contrahuella exacta:** 2.667 ÷ 14 = **190,5 mm (7,5 in)**, perfectamente uniforme
* **Nº de huellas:** 14 − 1 = **13 huellas** de 266,7 mm (10,5 in)
* **Desarrollo:** 13 × 266,7 = **3.467 mm (136,5 in)**
* **Zanca:** raíz(2.667² + 3.467²) = **4.374 mm (172,2 in)** → tablón de 2×12 de 16 pies
* **Inclinación:** arcotangente(190,5 ÷ 266,7) = **35,5°**, dentro de la zona cómoda
* **Blondel:** 2 × 190,5 + 266,7 = **647,7 mm**; ganar 6 mm de huella lo centra
* **Pasamanos:** 4.374 + 300 = **4.674 mm**
* **Balaustres:** redondeo(266,7 ÷ 102) = 3 por huella × 13 = **39 balaustres**
* **Zancas:** 3 para 900 mm de ancho, con 400 mm (16 in) máximos entre ejes

El IRC §R311.7.8 exige pasamanos en todo tramo de **4 contrahuellas o más**, a **864 a 965 mm (34 a 38 in)** sobre el mamperlán. En la barandilla, el §R312.1.3 impide que pase una **esfera de 102 mm (4 in)** entre balaustres.

---

## Preguntas frecuentes

### ¿Cuántos peldaños lleva una escalera para una altura de planta normal?

Con techo de 2,44 m (8 pies) más forjado, vigueta y pavimento, el desnivel real ronda los **2.667 mm (105 in)**, lo que da **14 contrahuellas de 190,5 mm**. Mide de pavimento acabado a pavimento acabado: si no cuentas el solado, arrastras el error a las catorce contrahuellas.

### ¿Cuál es la altura ideal de la contrahuella?

Entre **178 y 190 mm (7 a 7,5 in)** en vivienda. El IRC permite hasta 197 mm, pero por encima de 190 la escalera cansa. En uso comercial, el IBC baja el máximo a 178 mm y sube la huella a 279 mm.

### ¿Qué madera se usa para las zancas y cuánto canto hay que dejar?

Tablón de **2×12** (285 mm reales de ancho) cortado con escuadra de carpintero. Tras las mordidas debe quedar un canto residual de **89 mm (3,5 in)** como mínimo. En tramos largos o muy inclinados, pasa a zanca de madera microlaminada (LVL) con cálculo de estructurista.

### ¿Cómo compruebo la altura libre de paso en una escalera de sótano?

Mide desde el **fondo de la vigueta**, no desde el falso techo, hasta el mamperlán, siguiendo la línea de pendiente. Si el punto más bajo baja de **2.032 mm (80 in)**, alarga el hueco de escalera hacia el interior o rebaja la inclinación quitando una contrahuella.
