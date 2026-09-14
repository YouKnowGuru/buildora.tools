## Calculadora de carga eléctrica y dimensionado de acometida

Introduce la superficie climatizada, los aparatos fijos, el cargador de vehículo eléctrico y el equipo de climatización. La herramienta devuelve la **carga calculada en VA y kW**, la **intensidad de acometida en amperios**, el tamaño de cuadro recomendado, el margen libre sobre el cuadro existente y el calibre de los conductores. Acepta métrico e imperial.

> **Base normativa:** calcula según el **NEC (NFPA 70) artículo 220.82**, el método opcional estadounidense para vivienda unifamiliar, sobre sistema **monofásico de 120/240 V**. **No** calcula según el REBT ni la IEC 60364, que parten de 230 V y de otro reparto.

---

## Secuencia de cálculo (NEC 220.82)

```
1. Carga de alumbrado    = Superficie (m²) × 32,3 VA/m²   (3 VA por pie²)
2. Circuitos de office   = nº circuitos × 1.500 VA        (mínimo 2 = 3.000 VA)
   Circuito de lavadero  = 1.500 VA
3. Aparatos fijos        = suma de placas de características (VA)
4. Carga general total   = pasos 1 + 2 + 3
5. Demanda neta general  = 10.000 + 0,40 × (Carga general total − 10.000)
6. Climatización         = máx(refrigeración, calefacción) al 100 %
7. Carga de acometida    = Demanda neta general + Climatización
8. Intensidad (A)        = Carga de acometida (VA) ÷ 240 V
```

El 40 % sobre el excedente de 10.000 VA es el **factor de simultaneidad**: no todos los aparatos tiran a la vez a plena potencia. La climatización entra como carga **no coincidente** (220.82(C)): frío y calor nunca trabajan al máximo a la vez, así que solo cuenta el mayor.

---

## Potencias de placa habituales

| Aparato | Potencia de cálculo |
|---|---|
| Cocina eléctrica de libre instalación (76 cm / 30 in) | 12.000 W |
| Termo de 190 L (50 gal) / instantáneo / bomba de calor | 4.500 / 18.000 – 36.000 / 1.000 W |
| Secadora eléctrica | placa, **mínimo 5.000 VA** (NEC 220.54) |
| Lavavajillas / trituradora / microondas | 1.200 / 800 / 1.200 W |
| Cargador VE nivel 2: 16 / 32 / 40 / 48 / 80 A | 3,8 / 7,7 / 9,6 / 11,5 / 19,2 kW |

En calefacción: **caldeo eléctrico central al 65 %** de placa (220.82(C)(3)); **caldera de gas o gasóleo**, solo el ventilador, unos 800 VA; **bomba de calor con apoyo eléctrico**, el 100 % de las resistencias más el 75 % del compresor, aproximación habitual del sector sujeta a lo que diga 220.82(C)(5) sobre el enclavamiento de los controles.

---

## Ejemplo resuelto: vivienda todo eléctrico de 223 m² (2.400 pies²)

* **Alumbrado:** 223 × 32,3 = **7.200 VA**; **office y lavadero:** (2 × 1.500) + 1.500 = **4.500 VA**
* **Aparatos fijos:** cocina 12.000 + termo 4.500 + secadora 5.000 + lavavajillas, trituradora y microondas 3.200 + cargador VE de 48 A 11.520 = **36.220 VA**
* **Carga general total:** 7.200 + 4.500 + 36.220 = **47.920 VA**
* **Demanda neta:** 10.000 + 0,40 × 37.920 = **25.168 VA**
* **Climatización:** aire acondicionado 5.000 VA frente a bomba de calor con 10 kW de apoyo, 10.000 + 0,75 × 5.000 = **13.750 VA** (manda)
* **Carga de acometida:** 25.168 + 13.750 = **38.918 VA (38,9 kW)**
* **Intensidad:** 38.918 ÷ 240 = **162,2 A**
* **Resultado:** cuadro de **200 A** al 81,1 % de ocupación, con **37,8 A de reserva**

---

## Conductores de acometida (Tabla NEC 310.12)

Calibres AWG a 75 °C. El conductor de tierra sale de la Tabla NEC 250.66.

| Acometida | Cobre | Aluminio | Tierra (Cu) | Tubo mínimo |
|---|---|---|---|---|
| 100 A | #4 AWG | #2 AWG | #8 AWG | 1¼ in PVC / EMT |
| **200 A** | **#2/0 AWG** | **#4/0 AWG** | **#4 AWG** | **2 in PVC / EMT** |
| 400 A | 2× #2/0 Cu | 2× #4/0 Al | #1/0 AWG | 2× 2 in PVC |

Los calibres AWG son estadounidenses y no tienen equivalencia directa en mm². Los 100 A son el mínimo del NEC 230.79; los **200 A**, el estándar de obra nueva.

---

## Preguntas frecuentes

### ¿Puedo poner un cargador de coche eléctrico de 48 A en un cuadro de 100 A?

Casi nunca, si la vivienda ya tiene cocina, termo eléctrico o aire acondicionado central: el cálculo se pasa de 100 A. Con calefacción y agua caliente de gas, 100 A sí admiten un cargador de **32 A (7,7 kW)**. Si no cuadra, sube a 200 A o instala un **sistema de gestión de carga del VE (EVEMS)** conforme al NEC 625.42, que deslastra otras cargas mientras carga el coche.

### ¿Qué diferencia hay entre VA y vatios?

El vatio mide potencia activa, la que consume una carga resistiva como una cocina. El voltamperio mide potencia aparente, tensión por intensidad, e incluye el factor de potencia de cargas inductivas como compresores y motores. Para el artículo 220 del NEC, en cargas resistivas **1 W = 1 VA**.

### ¿Cuántos amperios necesita una vivienda?

Con calefacción de gas y un solo cargador de VE, la respuesta estándar son **200 A**, y en vivienda todo eléctrico por debajo de 280 m² (3.000 pies²) el cálculo sale casi siempre igual. Por encima de 370 m², con dos coches eléctricos o taller, se va a **300 o 400 A**: los detonantes típicos son el calentador instantáneo de toda la casa, que tira de 75 a 150 A, y dos cargadores de 48 u 80 A.
