## Calculadora de zapatas para terrazas de madera

Dimensiona zapatas de hormigón y pilares para una terraza elevada con el **método de área tributaria del IRC R507**: área y diámetro de zapata por pilar, carga por pilar, encofrado tubular normalizado y volumen total de hormigón. Acepta métrico e imperial.

> **Base normativa:** la herramienta calcula según el *International Residential Code* (IRC) de Estados Unidos; **no** computa según Eurocódigo. En Europa el documento equivalente para sobrecargas de uso es **EN 1991-1-1**, y la presión admisible debe venir de tu estudio geotécnico.

---

## Cargas y secuencia de cálculo

Sobrecarga de uso **1,92 kPa (40 psf)** según IRC Tabla R301.5, más carga permanente de tarima, vigas y barandilla de **0,48 kPa (10 psf)**. Con jacuzzi sube el uso a 2,9-4,8 kPa (60-100 psf).

```
1. Área de terraza (m²)   = Largo × Ancho
2. Carga total (kN)       = Área × (uso + permanente + nieve) en kPa
3. Carga por pilar (kN)   = Carga total ÷ nº de pilares
4. Área de zapata (m²)    = Carga por pilar ÷ Presión admisible (kPa)
5. Diámetro circular (m)  = 2 × raíz(Área ÷ pi)
   Lado cuadrado (m)      = raíz(Área)
6. Hormigón (m³)          = Área de zapata × Canto × nº de pilares
```

Redondea al encofrado normalizado inmediato superior: 20, 25, 30, 35, 40, 45, 50 o 60 cm (8 a 24 pulgadas).

---

## Presiones admisibles del terreno

| Suelo | Presión admisible | Referencia |
|---|---|---|
| Arcilla blanda / arcilla arenosa | 72 kPa (1.500 psf) | IRC Tabla R401.4.1 |
| Limo / arena limosa | 96 kPa (2.000 psf) | IRC Tabla R401.4.1 |
| Granular mixto | 120 kPa (2.500 psf) | Práctica geotécnica |
| Gravas y gravas arenosas | 144 kPa (3.000 psf) | IRC Tabla R401.4.1 |
| Relleno compactado | 192 kPa (4.000 psf) | Estudio geotécnico |

---

## Ejemplo resuelto: terraza de 5,0 × 3,6 m sobre suelo granular

* **Área:** 5,0 × 3,6 = **18 m²** (unos 16 × 12 pies)
* **Carga uniforme:** 1,92 + 0,48 = **2,40 kPa**
* **Carga total:** 18 × 2,40 = **43,2 kN** (unas 9.700 lb)
* **Pilares:** 2 filas × 3 = 6 → **7,20 kN por pilar**
* **Área de zapata:** 7,20 ÷ 120 = 0,060 m² = **600 cm²**
* **Diámetro:** 2 × raíz(0,060 ÷ 3,1416) = **27,6 cm** → encofrado de **30 cm (12 in)**
* **Hormigón:** 3,1416 × 0,15² × 0,30 = 0,0212 m³ por zapata → **0,13 m³** en total, más un 10 %

---

## Preguntas frecuentes

### ¿A qué profundidad hay que excavar las zapatas?

El canto calculado es la dimensión del dado de hormigón, no la del hoyo. El IRC R403.1.4 exige llegar a la cota de helada local, habitualmente **75 a 120 cm (30 a 48 pulgadas)** en Norteamérica.

### ¿Cuántos pilares necesita una terraza de madera?

Retícula de 1,8 a 2,4 m (6 a 8 pies) entre pilares. Una terraza de 5,0 × 3,6 m suele llevar **6 pilares** más la viga de arranque anclada a fachada.

### ¿De qué diámetro deben ser las zapatas?

Con 2,40 kPa sobre suelo granular de 120 kPa, lo típico son **30 cm (12 pulgadas)**. En arcilla blanda (72 kPa) sube a 35-40 cm; en grava compactada (192 kPa) baja a 20-25 cm. Los dados prefabricados apoyan en cota superficial y **no están protegidos frente a heladas**.
