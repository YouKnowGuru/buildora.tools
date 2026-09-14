## Calculadora de espuma de poliuretano proyectada: pies tablares y coste

Introduce la superficie a proyectar, el espesor, el tipo de espuma y la merma. La herramienta devuelve **pies tablares, volumen de producto, juegos de bidones, valor R alcanzado y coste** de material y mano de obra. Trabaja en métrico e imperial.

> **Base normativa:** los valores R de referencia, la barrera térmica frente al fuego y las clases de freno de vapor son las del **IECC 2021 y el IRC/IBC 2021 estadounidenses**, y la herramienta calcula sobre esa base. Fuera de Estados Unidos, la exigencia de protección al fuego de los plásticos celulares la fija la normativa local: consúltala, porque la calculadora **no** computa según ella. Las conductividades y densidades sí valen en cualquier norma.

---

## Paso 1: el pie tablar

El producto y las ofertas de aplicador se miden en **pies tablares** (bd ft): la espuma es un volumen, no una superficie.

> **1 pie tablar** = 1 pie² a 1 pulgada de espesor = 144 in³ = 1/12 pie³ = **2,36 litros (0,00236 m³)**

```
Pies tablares brutos = Superficie (pies²) × Espesor (pulgadas)
Volumen (m³)         = Superficie (m²) × Espesor (m)
Total con merma      = Brutos × (1 + Merma % ÷ 100)
Valor R alcanzado    = Espesor (pulgadas) × R por pulgada
Juegos de bidones    = redondeo al alza (Total ÷ Rendimiento del juego)
```

Añade un **10 %** de merma en superficie continua (faldón, forjado, chapa) y un **15 %** entre montantes, donde se tira el rasurado del exceso hasta el plano del entramado.

### Ejemplo resuelto: faldón sin ventilar de 92,9 m² con 89 mm de célula cerrada

* **Pies tablares brutos:** 1.000 × 3,5 = **3.500 bd ft** (8,26 m³)
* **Merma del 10 %:** 350 bd ft → **3.850 bd ft** (9,09 m³)
* **Valor R alcanzado:** 3,5 × 6,7 = **R-23,5** (RSI 4,13)
* **Juegos de bidones:** un juego A/B de 208 l (55 galones) rinde unos 4.500 bd ft en célula cerrada → **1 juego**
* **Material a 1,35 $/bd ft (572 $/m³):** 3.850 × 1,35 = **5.197,50 $**
* **Mano de obra a 16,15 $/m² (1,50 $/pie²):** 92,9 × 16,15 = **1.500 $**
* **Total estimado:** **6.697,50 $**

La mano de obra se cobra por **superficie realmente proyectada**, no por el producto perdido en sobrepulverización. Aplicar la merma también a la mano de obra es el error de presupuesto más común.

---

## Paso 2: célula abierta o célula cerrada

| Propiedad | Célula abierta | Célula cerrada |
|---|---|---|
| Densidad nominal | 8 kg/m³ (0,5 lb/pie³) | 32 kg/m³ (2,0 lb/pie³) |
| Resistencia térmica | R-3,6 a R-3,8 por pulgada | R-6,5 a R-7,0 por pulgada |
| Conductividad λ | 0,038 – 0,039 W/m·K | 0,021 – 0,022 W/m·K |
| Permeabilidad al vapor | Más de 10 perms, permeable | 0,1 a 1,0 perms desde 38 mm: freno clase II |
| Barrera de aire desde | 89 mm (3,5 in) | 25 mm (1,0 in) |
| Absorción de agua | Absorbe agua líquida | Hidrófoba, apta tras inundación |
| Rigidez | Flexible, acompaña al entramado | Sube la resistencia al descuadre un 200 – 300 % |
| Expansión | Unas 100 veces el volumen líquido | Unas 30 a 40 veces |
| Absorción acústica (NRC) | 0,70 – 0,75, muy buena | 0,20 – 0,25, refleja el sonido |
| Rendimiento por juego de 208 l | 16.000 – 20.000 bd ft | 4.000 – 5.000 bd ft |
| Coste de material | 191 – 318 $/m³ | 530 – 848 $/m³ |
| Aplicación típica | Tabiquería, faldón interior, desván seco | Muro exterior, cámara sanitaria, nave de chapa |

La mano de obra de proyección, con enmascarado y montaje de equipo, va de **10,8 a 26,9 $/m²**. Todo incluido, la célula cerrada sale a 953 – 1.483 $/m³ y la abierta a 509 – 763 $/m³. Precios del mercado estadounidense.

---

## Paso 3: kit portátil o equipo de aplicador

Los kits desechables de dos componentes de **200 bd ft (0,47 m³)** valen para testas de forjado y cercos de carpintería; los de **600 bd ft (1,42 m³)**, para techo de caseta, furgón camperizado o un tramo de cámara sanitaria. Los depósitos deben estar atemperados entre **24 y 29 °C (75 – 85 °F)**: en frío la mezcla sale fuera de proporción y da espuma pegajosa que no cura ni expande.

Por encima de **800 bd ft (1,89 m³)** sale más barato y más seguro el aplicador profesional. Su dosificadora hidráulica calienta el producto a unos **54 °C (130 °F) a 103 bar (1.500 psi)**, lo que garantiza la proporción estequiométrica y el rendimiento máximo de expansión. Además, la atomización de isocianato (MDI) exige máscara completa con aporte de aire homologada NIOSH: no basta una mascarilla de cartucho.

---

## Paso 4: barrera contra el fuego y freno de vapor

Según **IRC 2021 R316.4** e **IBC 2021 2603.4**, toda espuma plástica debe separarse del espacio habitado por una **barrera térmica de 15 minutos**, normalmente **placa de yeso de 12,7 mm (1/2 in)** o pintura intumescente ensayada a NFPA 286 / UL 1715. En desván o cámara sanitaria con espuma a la vista basta una **barrera de ignición** (IRC R316.5.3): una pintura intumescente homologada, del orden de **7,00 $/m²**, cumple sin trasdosar.

En control de vapor (IRC R702.7), las zonas climáticas **5 a 8** piden freno de clase I o II por la cara caliente en invierno. La célula cerrada a **38 a 50 mm** ya da 0,1 a 1,0 perms y **es** ese freno de clase II: no hace falta lámina de polietileno aparte. La célula abierta pasa de 10 perms y **sí** necesita freno añadido en muro exterior de clima frío.

En el **sistema mixto**, se proyectan 25 a 50 mm de célula cerrada contra el tablero y se rellena el resto de la cámara con manta de lana. En clima frío la capa de espuma debe aportar del **40 al 50 %** de la R total del cerramiento; la combinación prescriptiva de referencia en zona 5 es **R-7,5 de espuma con R-13 de manta**.

---

## Preguntas frecuentes

### ¿Cuántos pies tablares de espuma necesito?

Multiplica la superficie en pies² por el espesor en pulgadas y añade un 10 % en superficie continua o un 15 % entre montantes. Para 92,9 m² (1.000 pies²) a 89 mm: 1.000 × 3,5 × 1,10 = **3.850 pies tablares**, unos 9,09 m³.

### ¿Qué diferencia hay entre pie tablar y pie cuadrado?

El pie cuadrado mide superficie; el pie tablar mide **volumen**: superficie por espesor en pulgadas. Los mismos 1.000 pies² dan 2.000 bd ft a 50 mm y 3.500 bd ft a 89 mm. Si un presupuesto llega solo en pies², falta el espesor y no se puede comparar con otro.

### ¿Cuándo se puede volver a entrar tras proyectar?

La espuma profesional de dos componentes cura al 99 % en segundos, pero los criterios de OSHA y la EPA recomiendan **24 horas** sin ocupar el edificio, con ventilación continua durante ese tiempo.

### ¿Se puede proyectar directamente sobre el tablero de cubierta?

Sí: es el desván sin ventilar o «caliente». Proyectando bajo el par, los conductos de climatización quedan dentro de la envolvente y el consumo de refrigeración baja entre un 15 y un 30 %. En zona climática 5 o superior hay que cumplir la impermeabilidad al aire y la R del **IRC R806.5**.
