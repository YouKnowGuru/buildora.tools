## Calculadora de escada — geometria, longarina e código

Esta calculadora parte de uma única medida de campo — o **desnível total** — e devolve altura de espelho, largura de piso, comprimento de longarina, inclinação, altura livre, corrimão e quantidade de balaústres. Aceita métrico (cm, m) e imperial (pol, pés). Meça **piso acabado a piso acabado**: ignorar o revestimento dos dois pavimentos é a origem clássica do último degrau fora de esquadro.

> **Base normativa:** o cálculo segue o **IRC §R311.7** (residencial) e o **IBC §1011** (comercial), códigos dos EUA. As normas brasileiras de geometria são mais restritivas — veja a comparação adiante — e não entram no cálculo.

No vocabulário da ferramenta, **espelho** é a face vertical do degrau e **piso** a superfície onde se pisa; o **bocel** é a aba do piso que avança sobre o espelho (1,9 a 3,2 cm); a **longarina** é a peça diagonal estrutural, normalmente 2×12 (3,8 × 28,6 cm reais); e a **seção remanescente** é o que sobra dela após os cortes, mínimo 8,9 cm (IRC §R311.7.10).

---

## Sequência de cálculo

```
1. Nº de espelhos   = arredonda(Desnível total ÷ Espelho desejado)
2. Espelho exato    = Desnível total ÷ Nº de espelhos
3. Nº de pisos      = Nº de espelhos − 1  (apoio um degrau abaixo)
                    = Nº de espelhos      (apoio rente ao piso superior)
4. Avanço total     = Nº de pisos × Largura do piso
5. Longarina        = raiz(Desnível² + Avanço²)
6. Inclinação       = arco tangente(Espelho ÷ Piso)
7. Nº de longarinas = máximo(2 ; teto(Largura ÷ Espaçamento) + 1)
8. Vão do poço      = Avanço − ((Desnível − Altura livre − Espessura) ÷ tangente)
9. Corrimão         = Longarina + 30 cm
10. Balaústres      = teto(Piso ÷ 10,2 cm) × Nº de pisos
```

---

## Limites de código e conforto

| Norma | Espelho máximo | Piso mínimo | Aplicação |
|---|---|---|---|
| **IRC §R311.7** (residencial EUA) | 19,7 cm (7,75 pol) | 25,4 cm (10 pol) | Casa, sobrado, apartamento |
| **IBC §1011.5** (comercial EUA) | 17,8 cm (7,0 pol) | 27,9 cm (11 pol) | Escritório, varejo, hotel |
| **OSHA 1910.25** (industrial EUA) | 24,1 cm (9,5 pol) | 24,1 cm (9,5 pol) | Escada industrial |

```
Blondel:     2 × Espelho + Piso = 60,5 a 63,5 cm (24 a 25 pol)
Regra 17–18: Espelho + Piso     = 43,2 a 45,7 cm (17 a 18 pol)
```

Espelhos iguais em todo o lance, tolerância de **9,5 mm** (IRC §R311.7.5.1) — degrau fora do padrão é a maior causa de queda. Largura mínima: **91,4 cm**; altura livre: **203 cm**. Faixa confortável de inclinação: **30° a 37°**. Corrimão obrigatório em lance com 4 espelhos ou mais (§R311.7.8), a 86 a 97 cm do bocel; entre balaústres não passa esfera de **10,2 cm** (§R312.1.3).

---

## Exemplo prático — escada de porão, 266,7 cm

* **Desnível total:** 266,7 cm (105 pol) — pé-direito de 2,44 m com vigamento e contrapiso
* **Espelho:** 266,7 ÷ 19,05 = **14 espelhos** exatos de **19,05 cm**
* **Pisos:** 14 − 1 = **13** → avanço de 13 × 26,67 = **346,7 cm** (136,5 pol)
* **Longarina:** raiz(266,7² + 346,7²) = **437,4 cm** → **2×12 de 4,88 m (16 pés)**
* **Seção remanescente:** 28,58 × cos(35,5°) − (19,05 × sen(35,5°) × 0,5) = **17,7 cm**
* **Longarinas:** teto(91,4 ÷ 40,6) + 1 = **4 peças**
* **Inclinação:** arco tangente(19,05 ÷ 26,67) = **35,5°**, na faixa ideal
* **Blondel:** 2 × 19,05 + 26,67 = **64,8 cm** — pouco acima da faixa
* **Vão mínimo do poço:** 346,7 − ((266,7 − 203,2 − 25,4) ÷ tangente 35,5°) = **293,4 cm**
* **Corrimão:** 467 cm — **balaústres:** teto(26,67 ÷ 10,2) × 13 = **39 peças**

Para corrigir o Blondel, reduza o piso ao mínimo IRC de 25,4 cm: 2 × 19,05 + 25,40 = **63,5 cm**, com avanço de 330,2 cm e inclinação de 36,9°.

---

## Comparação com as normas brasileiras

O IRC admite espelho de até 19,7 cm com piso de 25,4 cm. As referências brasileiras são mais apertadas: a **NBR 9050** (acessibilidade) e a **NBR 9077** (saídas de emergência) trabalham com espelho de **16 a 18 cm** e piso de **28 a 32 cm**. A escada do exemplo **passa no IRC e não atende à NBR**. Em obra brasileira, os mesmos 266,7 cm dão 15 espelhos de 17,78 cm, com 2h + p = 63,6 cm num piso de 28 cm.

---

## Perguntas frequentes

### Quantos degraus para vencer um pé-direito de 2,44 m?
Com vigamento e contrapiso, o desnível real fica em torno de **266,7 cm**, não 244 cm. Dá **14 espelhos** de 19,05 cm no padrão IRC, ou **15 espelhos** de 17,78 cm na faixa brasileira.

### Qual a altura ideal de espelho?
Pelo IRC, de 17,8 a 19 cm, máximo de 19,7 cm. Pelas normas brasileiras, de **16 a 18 cm** — é aí que as duas bases divergem. Passar de 18 cm torna a subida cansativa.

### Que peça usar na longarina?
Longarina recortada usa **2×12** (28,6 cm reais), com seção remanescente nunca abaixo de 8,9 cm. Em lance longo ou íngreme, especifique LVL com verificação de engenheiro.

### Como verificar a altura livre em escada de porão?
Meça da face inferior da viga do pavimento superior — não do forro — até o bocel, na linha de inclinação. Abaixo de **203 cm** no pior ponto, reposicione o poço ou reduza o número de espelhos.
