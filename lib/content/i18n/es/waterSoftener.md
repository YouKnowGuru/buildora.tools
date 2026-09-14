## Calculadora de descalcificador: dimensionado, sal y caudal

Introduce el número de personas, la dureza medida del agua, el hierro y el manganeso disueltos y el ciclo de regeneración deseado. La herramienta devuelve **capacidad en granos, litros de resina y medidas de la botella, granos a eliminar por día, consumo anual de sal, agua de rechazo y caudal punta** con el diámetro de válvula recomendado. Trabaja en métrico e imperial.

> **Base de cálculo:** el dimensionado sigue las fórmulas de capacidad en granos de la **Water Quality Association (WQA)** y las tallas normalizadas según **NSF/ANSI 44**, criterios estadounidenses que trabajan en granos y galones. La herramienta calcula sobre esa base. Acepta la dureza en ppm (mg/l de CaCO₃), que es como la dan los análisis y los boletines de calidad de agua en Europa y Latinoamérica.

---

## Paso 1: entender la dureza

La dureza es la concentración de calcio (Ca²⁺) y magnesio (Mg²⁺) disueltos. Cada mercado usa su unidad:

```
1 grano por galón (GPG) = 17,118 ppm de CaCO3 = 1,71 °f = 0,96 °d
1 ppm (mg/l de CaCO3)   = 0,0584 GPG
1 grado francés (°f)     = 10 ppm de CaCO3
1 grado alemán (°d)      = 17,85 ppm de CaCO3
```

| Dureza (ppm) | Grados franceses | GPG | Clasificación WQA |
|---|---|---|---|
| 0 – 17 | 0 – 1,7 °f | 0 – 1 | Blanda |
| 17 – 60 | 1,7 – 6 °f | 1 – 3,5 | Ligeramente dura |
| 60 – 120 | 6 – 12 °f | 3,5 – 7 | Moderadamente dura |
| 120 – 180 | 12 – 18 °f | 7 – 10,5 | Dura |
| 180 – 240 | 18 – 24 °f | 10,5 – 14 | Muy dura |
| Más de 240 | Más de 24 °f | Más de 14 | Extremadamente dura |

La mayoría de las viviendas con red municipal está entre 7 y 25 GPG (120 a 430 ppm). El agua de pozo pasa a menudo de 25 GPG.

---

## Paso 2: compensar hierro y manganeso

El análisis de dureza corriente solo mide calcio y magnesio, pero el **hierro disuelto (Fe²⁺)** y el **manganeso (Mn²⁺)** también ensucian la resina y hay que contarlos:

```
Dureza compensada (GPG) = Dureza bruta (GPG)
                        + (Hierro en ppm × 4)
                        + (Manganeso en ppm × 2)
```

Regla WQA: **1 ppm de hierro disuelto equivale a 4 GPG** de dureza añadida, y **1 ppm de manganeso, a 2 GPG**. El dimensionado y el consumo de sal se calculan sobre la dureza compensada, nunca sobre la bruta.

> **Ojo:** esto vale solo para el hierro **disuelto** (Fe²⁺), el que sale transparente del grifo y se vuelve naranja al reposar. El hierro en partícula (Fe³⁺, agua ya rojiza) exige un **filtro oxidante aguas arriba** del descalcificador; no se resuelve poniendo un equipo más grande.

---

## Paso 3: las cuatro fórmulas

```
1. Consumo diario (gal/día)  = Personas × Consumo por persona (por defecto 75 gal = 284 l)
2. Granos por día            = Consumo diario × Dureza compensada (GPG)
3. Capacidad objetivo        = Granos por día × Días entre regeneraciones
                               × (1 + Reserva % ÷ 100)
4. Sal por regeneración (kg) = Litros de resina × 0,128 kg/l
```

La EPA estadounidense estima el consumo interior en 60 a 80 galones por persona y día (227 a 303 litros). Los 75 galones (284 l) por defecto valen para la mayoría de los casos: baja la cifra en vivienda ahorradora y súbela si hay riego.

### Ejemplo resuelto: familia de 4 con agua de pozo a 25 GPG

* **Consumo diario:** 4 × 75 = **300 gal/día** (1.136 l/día)
* **Granos por día:** 300 × 25 = **7.500 granos/día**
* **Capacidad con 7 días de ciclo y 20 % de reserva:** 7.500 × 7 × 1,20 = **63.000 granos**
* **Talla comercial siguiente:** equipo de **64.000 granos**, 57 litros (2,0 pies³) de resina, botella de 300 × 1.320 mm (12 × 52 in)
* **Sal por regeneración en alta eficiencia:** 57 × 0,128 = **7,3 kg** (16 lb)
* **Sal anual:** 7,3 × (365 ÷ 7) = **381 kg/año**, unos 21 sacos de 18,1 kg (40 lb)

La **reserva del 20 %** evita la fuga de dureza en los picos de consumo: fiestas, invitados, riego.

---

## Paso 4: tallas normalizadas

| Granos necesarios | Equipo recomendado | Resina | Botella |
|---|---|---|---|
| Hasta 24.000 | 24.000 granos | 21 l (0,75 pies³) | 203 × 1.118 mm (8 × 44 in) |
| 24.001 – 32.000 | 32.000 granos | 28 l (1,0 pies³) | 229 × 1.219 mm (9 × 48 in) |
| 32.001 – 40.000 | 40.000 granos | 35 l (1,25 pies³) | 254 × 1.118 mm (10 × 44 in) |
| 40.001 – 48.000 | 48.000 granos | 42 l (1,5 pies³) | 254 × 1.372 mm (10 × 54 in) |
| 48.001 – 64.000 | 64.000 granos | 57 l (2,0 pies³) | 305 × 1.321 mm (12 × 52 in) |
| 64.001 – 80.000 | 80.000 granos | 71 l (2,5 pies³) | 330 × 1.372 mm (13 × 54 in) |
| 80.001 – 96.000 | 96.000 granos | 85 l (3,0 pies³) | 356 × 1.651 mm (14 × 65 in) |
| Más de 96.000 | Doble columna alternante o multiplex industrial | — | — |

---

## Paso 5: sal, eficiencia y agua de rechazo

El ajuste de **alta eficiencia** dosifica **128 g de sal por litro de resina** (8 lb/pie³). La regeneración estándar por demanda a **240 g/l** (15 lb/pie³) saca más capacidad por ciclo, pero gasta del orden del **50 % más de sal** por grano eliminado. La WQA recomienda la alta eficiencia, y es el valor por defecto de la herramienta.

| Tipo de sal | Pureza | Observaciones | Coste |
|---|---|---|---|
| Pastilla de sal evaporada | 99,6 % NaCl | La mejor opción general; casi no forma puente en el depósito | 0,33 – 0,55 $/kg (6 – 10 $ el saco de 18,1 kg) |
| Cristal de sal solar | 99,5 % NaCl | Más soluble; puede empastar en depósitos antiguos | 0,28 – 0,44 $/kg |
| Cloruro potásico (KCl) | 99 % KCl | Alternativa sin sodio; un 30 % menos eficiente por kilo | 1,38 – 2,21 $/kg |

Cada regeneración vierte entre **132 y 246 litros** (35 a 65 galones) de salmuera al saneamiento; la referencia es **151 litros por cada 28,3 litros de resina** (40 gal/pie³) a eficiencia estándar. El vertido está regulado por algunas ordenanzas municipales. El consumo anual de agua de rechazo es ciclos al año por litros de ciclo.

---

## Paso 6: caudal punta y diámetro de válvula

El equipo tiene que dar el **caudal punta** sin bajar de la presión mínima de servicio, en torno a **1,7 – 2,1 bar (25 – 30 psi)**.

| Baños | Caudal punta | Válvula recomendada |
|---|---|---|
| 1 | 26,5 l/min (7 gpm) | 3/4 in (DN20) |
| 2 | 37,9 l/min (10 gpm) | 1 in (DN25) |
| 3 | 49,2 l/min (13 gpm) | 1 in (DN25) |
| 4 | 60,6 l/min (16 gpm) | 1 1/4 in (DN32) |
| 5 o más | Más de 71,9 l/min (19 gpm) | DN32 de alto caudal |

**Columna simple:** una botella de resina y un depósito de salmuera. Queda fuera de servicio durante la regeneración, normalmente de 2 a 4 horas de madrugada. Sirve por debajo de 96.000 granos de demanda.

**Doble columna alternante:** dos botellas comparten depósito de salmuera; mientras una regenera, la otra da servicio, sin corte de agua blanda. Es la solución obligada en instalaciones de 24 horas: restauración, túneles de lavado, lavanderías, clínicas.

---

## Preguntas frecuentes

### ¿Qué descalcificador necesito para una familia de cuatro?

Con 75 galones (284 l) por persona y día, es decir 300 gal/día, y una dureza moderada de 15 GPG (257 ppm): 300 × 15 × 7 días × 1,20 de reserva = **37.800 granos**, lo que lleva a un equipo de **40.000 granos** con 35 litros de resina y botella de 254 × 1.118 mm. Con agua más dura o de pozo con hierro hay que subir de talla.

### ¿Cómo paso de ppm a GPG o a grados franceses?

Divide los ppm entre 17,118 para tener GPG y entre 10 para tener grados franceses. Un agua de 300 ppm son **17,5 GPG** y **30 °f**: agua extremadamente dura. Los fabricantes de descalcificadores trabajan en GPG y los boletines de calidad de agua en ppm; la calculadora acepta ambas.

### ¿Cómo afecta el hierro del pozo al dimensionado?

El hierro disuelto se retiene en la resina junto al calcio, pero penalizado: **1 ppm de hierro come 4 GPG** de capacidad. Un pozo de 25 GPG con 2 ppm de hierro tiene una dureza compensada de 25 + (2 × 4) = **33 GPG**, un 32 % más de demanda, lo que suele significar un salto de talla completo.

### ¿Cada cuánto debe regenerar el equipo?

Los equipos volumétricos regeneran solos cada **3 a 14 días** según el consumo real. El estándar del sector es cada **7 días con dosificación de alta eficiencia** (128 g/l de resina), que es el mejor equilibrio entre gasto de sal y constancia del agua blanda. Regenerar cada 3 o 4 días reduce el riesgo de fuga de dureza en viviendas con consumo irregular.

### ¿Un descalcificador es lo mismo que un filtro?

No. El descalcificador quita dureza (calcio, magnesio) y hierro disuelto por intercambio iónico, sustituyéndolos por sodio. **No** elimina cloro, nitratos, bacterias, plomo ni sedimento. Para eso hacen falta filtro de carbón, ósmosis inversa o ultravioleta. Lo habitual es montar los dos: prefiltro de sedimentos y carbón, y detrás el descalcificador.
