## Calculadora de carga de nieve en cubierta

> **Base normativa:** esta herramienta implementa disposiciones seleccionadas del **ASCE/SEI 7-22, capítulo 7** e **IBC §1608**, ambas normas estadounidenses. Sirve para predimensionado y análisis didáctico; **no calcula según el Eurocódigo EN 1991-1-3**, que emplea otra formulación. Todo diseño estructural definitivo debe validarlo un ingeniero competente conforme a la normativa local.

---

## Por qué importa el peso de la nieve

La nieve recién caída pesa entre **80 y 320 kg/m³** (5 a 20 lb/pie³), pero la nieve húmeda compactada y el hielo alcanzan **480 a 960 kg/m³** (30 a 60 lb/pie³). Subestimar esa carga sobre pares, cerchas, correas y entablado produce flechas excesivas, fisuración de techos y, en el peor caso, colapso.

---

## Metodología de cálculo (ASCE 7-22)

```
1. pg  = Carga de nieve en el terreno (mapa o normativa local)
2. pf  = 0,7 × Ce × Ct × Is × pg          (cubierta plana, §7.3)
3. ps  = Cs × pf                          (cubierta inclinada, §7.4)
4. pm  = Is × pg          si pg ≤ 20 psf
         Is × 20 psf      si pg > 20 psf  (mínimo, §7.3.4)
5. Carga de proyecto = máx(ps, pm)
6. Carga total = Carga de proyecto × Superficie en proyección horizontal
7. Ventisquero: hd = 0,43 × lu^(1/3) × (pg + 10)^(1/4) − 1,5  (pies)
                pd = hd × γ        w = 4 × hd        (§7.7)
```

El factor 0,7 refleja que no toda la nieve del terreno se acumula en cubierta expuesta: el viento la barre y el sol la funde. La densidad se toma como `γ = mín(30; 0,13 × pg + 14)` en lb/pie³. El pg va de 0 psf en el sur de Estados Unidos a 30-50 psf (1,44-2,39 kPa) en Nueva Inglaterra y los Grandes Lagos, y 60-100 psf (2,87-4,79 kPa) en el norte de Maine.

---

## Coeficientes de mayoración

| Coeficiente | Situación | Valor |
|---|---|---|
| **Ce** exposición (Tabla 7.3-1) | Totalmente expuesta / parcial / abrigada | 0,9 / 1,0 / 1,2 |
| **Ct** térmico (Tabla 7.3-3) | Calefactada por encima de 18 °C | 1,0 |
| | Sin calefacción, frigorífico o marquesina / bajo cero permanente | 1,2 / 1,3 |
| | Invernadero calefactado en continuo | 0,85 |
| **Is** importancia (Tabla 1.5-2) | Cat. I agrícola o almacenaje / Cat. II residencial y comercial | 0,8 / 1,0 |
| | Cat. III aforo > 300, colegios / Cat. IV hospitales, bomberos | 1,1 / 1,2 |

El coeficiente de pendiente **Cs** depende de la temperatura de la cubierta y del acabado. En cubierta caliente (Ct ≤ 1,0) las superficies deslizantes sin obstáculos —chapa, vidrio, pizarra— mantienen Cs = 1,0 hasta 5° y bajan linealmente a 0 en 70°; el resto de acabados (teja asfáltica, láminas, tejuela) lo mantienen hasta 30°. En cubierta fría (Ct ≥ 1,2) los umbrales suben a 10° y 45°.

---

## Ejemplo resuelto: vivienda en Burlington (Vermont)

* **pg:** 35 psf = **1,68 kPa**
* **Ce:** parcialmente expuesta = 1,0 · **Ct:** calefactada = 1,0 · **Is:** categoría II = 1,0
* **Pendiente:** 6:12 (26,57°) con teja asfáltica, acabado no deslizante
* **pf:** 0,7 × 1,0 × 1,0 × 1,0 × 35 = 24,5 psf = **1,17 kPa**
* **Cs:** pendiente ≤ 30° → Cs = 1,0 → **ps = 24,5 psf (1,17 kPa)**
* **Superficie en proyección:** 186 m² (2.000 pies²)
* **Carga total:** 1,17 × 186 = **218 kN**, o sea 22.230 kg (49.000 lb)

---

## Preguntas frecuentes

### ¿Cuánto pesa la nieve acumulada en un tejado?

Depende de la densidad: 30 cm de nieve recién caída a 160 kg/m³ pesan unos **48 kg/m²**, mientras que los mismos 30 cm de nieve húmeda compactada a 700 kg/m³ pesan **210 kg/m²**. Por eso el cálculo se hace sobre el pg normativo y no sobre el espesor medido.

### ¿Qué es un ventisquero y por qué hay que comprobarlo?

Cuando el viento sopla sobre una cubierta más alta o un obstáculo, transporta nieve y la deposita en forma triangular sobre la cubierta baja adyacente. Ese sobrecargo local (pd = hd × γ) puede multiplicar la carga uniforme y es causa habitual de fallo en cubiertas a dos niveles.
