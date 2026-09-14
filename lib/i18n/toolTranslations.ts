import type { Locale } from './translations';

export interface LocalizedToolContent {
  name: string;
  shortDescription: string;
  helpTexts?: Record<string, string | undefined>;
  options?: Record<string, Record<string, string>>;
  article: string;
}

export const toolTranslations: Record<string, Partial<Record<Locale, LocalizedToolContent>>> = {
  'gutter-cleaning-cost-calculator': {
    en: { name: 'Gutter Cleaning Cost Calculator', shortDescription: 'Estimate gutter cleaning, guards, and downspout flushing by home height and access.', article: '## Gutter cleaning costs\n\nEstimate a professional gutter cleaning service for your home.' },
    es: { name: 'Calculadora de Costos de Limpieza de Canaletas', shortDescription: 'Estima la limpieza de canaletas, protectores y bajantes según altura y acceso.', article: '## Costes de limpieza de canaletas\n\nEstima un servicio profesional de limpieza de canaletas.' },
    fr: { name: 'Calculateur du coût de nettoyage des gouttières', shortDescription: 'Estimez le nettoyage des gouttières, des protections et des descentes selon la hauteur et l’accès.', article: '## Coût du nettoyage des gouttières\n\nEstimez un service professionnel de nettoyage.' },
    de: { name: 'Kostenrechner für Dachrinnenreinigung', shortDescription: 'Schätzen Sie Dachrinnenreinigung, Schutzgitter und Fallrohrspülung nach Höhe und Zugang.', article: '## Kosten der Dachrinnenreinigung\n\nSchätzen Sie einen professionellen Reinigungsservice.' },
    pt: { name: 'Calculadora de Custo de Limpeza de Calhas', shortDescription: 'Estime limpeza de calhas, protetores e lavagem de condutores conforme altura e acesso.', article: '## Custos de limpeza de calhas\n\nEstime um serviço profissional de limpeza.' },
    it: { name: 'Calcolatore dei costi di pulizia delle grondaie', shortDescription: 'Stima pulizia delle grondaie, protezioni e lavaggio dei pluviali in base ad altezza e accesso.', article: '## Costi di pulizia delle grondaie\n\nStima un servizio professionale di pulizia.' },
    nl: { name: 'Kostenberekening dakgootreiniging', shortDescription: 'Schat gootreiniging, bladvangers en regenpijpspoeling op basis van hoogte en toegang.', article: '## Kosten voor dakgootreiniging\n\nSchat een professionele schoonmaakdienst.' },
    pl: { name: 'Kalkulator kosztów czyszczenia rynien', shortDescription: 'Oszacuj czyszczenie rynien, osłon i płukanie rur spustowych według wysokości i dostępu.', article: '## Koszty czyszczenia rynien\n\nOszacuj profesjonalną usługę czyszczenia.' },
    ru: { name: 'Калькулятор стоимости чистки водостоков', shortDescription: 'Оцените чистку желобов, защитных сеток и промывку труб с учётом высоты и доступа.', article: '## Стоимость чистки водостоков\n\nОцените профессиональную услугу очистки.' },
    tr: { name: 'Oluk Temizleme Maliyeti Hesaplayıcı', shortDescription: 'Yükseklik ve erişime göre oluk temizliği, koruyucu ve iniş borusu yıkama maliyetini tahmin edin.', article: '## Oluk temizleme maliyetleri\n\nProfesyonel temizlik hizmetini tahmin edin.' },
    ar: { name: 'حاسبة تكلفة تنظيف مزاريب المياه', shortDescription: 'قدّر تكلفة تنظيف المزاريب والحواجز وغسل مواسير التصريف حسب ارتفاع المنزل وسهولة الوصول.', article: '## تكلفة تنظيف المزاريب\n\nقدّر خدمة تنظيف احترافية.' },
    hi: { name: 'गटर सफाई लागत कैलकुलेटर', shortDescription: 'घर की ऊँचाई और पहुँच के आधार पर गटर सफाई, गार्ड और डाउनस्पाउट फ्लशिंग का अनुमान लगाएं।', article: '## गटर सफाई लागत\n\nपेशेवर सफाई सेवा का अनुमान लगाएं।' },
    zh: { name: '排水沟清洁成本计算器', shortDescription: '按房屋高度和通行条件估算排水沟清洁、防护网和落水管冲洗费用。', article: '## 排水沟清洁成本\n\n估算专业清洁服务。' },
    ja: { name: '雨どい清掃費用計算機', shortDescription: '住宅の高さと作業のしやすさに基づき、雨どい清掃、ガード、縦樋洗浄を見積もります。', article: '## 雨どい清掃費用\n\n専門清掃サービスを見積もります。' },
    ko: { name: '빗물받이 청소 비용 계산기', shortDescription: '주택 높이와 접근성에 따라 빗물받이 청소, 가드, 배수관 세척 비용을 추정하세요.', article: '## 빗물받이 청소 비용\n\n전문 청소 서비스를 추정하세요.' },
  },
  'basement-waterproofing-cost-calculator': {
    en: {
      name: 'Basement Waterproofing Cost Calculator',
      shortDescription: 'Estimate interior drains, exterior waterproofing, sump pumps, crack repair, and excavation for a wet basement.',
      helpTexts: { basementArea: 'Measure the basement floor, not the full house footprint.', perimeter: 'Add the foundation-wall lengths being treated.', crackLength: 'Add the length of cracks planned for repair.' },
      options: { method: { 'interior-sealant': 'Interior waterproof coating / sealant', 'interior-drain': 'Interior French drain system', 'exterior-membrane': 'Exterior foundation membrane', 'exterior-drain': 'Exterior drain tile system', 'full-system': 'Full drainage + membrane system' }, waterIssue: { 'minor-dampness': 'Minor dampness / musty walls', 'active-leaks': 'Active leaks after rain', 'hydrostatic-pressure': 'Standing water / hydrostatic pressure' } },
      article: '## Basement waterproofing costs\n\nCompare interior drainage, exterior waterproofing, crack repair, and sump-pump costs for your basement.'
    },
    es: { name: 'Calculadora de Costos de Impermeabilización de Sótanos', shortDescription: 'Estima drenajes interiores, impermeabilización exterior, bombas de sumidero, reparación de grietas y excavación.', helpTexts: { basementArea: 'Mide el suelo del sótano, no toda la superficie de la vivienda.', perimeter: 'Suma los muros de cimentación que se van a tratar.', crackLength: 'Suma la longitud de las grietas que se repararán.' }, options: { method: { 'interior-sealant': 'Revestimiento impermeable interior', 'interior-drain': 'Drenaje francés interior', 'exterior-membrane': 'Membrana exterior de cimentación', 'exterior-drain': 'Drenaje exterior', 'full-system': 'Sistema completo de drenaje y membrana' }, waterIssue: { 'minor-dampness': 'Humedad leve / olor a moho', 'active-leaks': 'Filtraciones activas tras la lluvia', 'hydrostatic-pressure': 'Agua estancada / presión hidrostática' } }, article: '## Costes de impermeabilización de sótanos\n\nCompara drenaje interior, membranas exteriores, reparación de grietas y bombas de sumidero.' },
    fr: { name: 'Calculateur du coût d’étanchéité de sous-sol', shortDescription: 'Estimez drainage intérieur, étanchéité extérieure, pompe de relevage, réparation des fissures et excavation.', helpTexts: { basementArea: 'Mesurez le sol du sous-sol, et non toute la maison.', perimeter: 'Additionnez les longueurs de murs de fondation à traiter.', crackLength: 'Additionnez les fissures à réparer.' }, options: { method: { 'interior-sealant': 'Revêtement étanche intérieur', 'interior-drain': 'Drain français intérieur', 'exterior-membrane': 'Membrane extérieure de fondation', 'exterior-drain': 'Drainage extérieur', 'full-system': 'Système complet drainage et membrane' }, waterIssue: { 'minor-dampness': 'Humidité légère / odeur de moisi', 'active-leaks': 'Infiltrations actives après la pluie', 'hydrostatic-pressure': 'Eau stagnante / pression hydrostatique' } }, article: '## Coût de l’étanchéité du sous-sol\n\nComparez drainage intérieur, membrane extérieure, réparation de fissures et pompe de relevage.' },
    de: { name: 'Kostenrechner für Kellerabdichtung', shortDescription: 'Schätzen Sie Innenentwässerung, Außenabdichtung, Sumpfpumpe, Rissreparatur und Aushub.', helpTexts: { basementArea: 'Messen Sie die Kellerfläche, nicht die gesamte Hausfläche.', perimeter: 'Addieren Sie die zu behandelnden Fundamentwandlängen.', crackLength: 'Addieren Sie die Länge der zu reparierenden Risse.' }, options: { method: { 'interior-sealant': 'Innenabdichtung / Versiegelung', 'interior-drain': 'Innenliegende Dränage', 'exterior-membrane': 'Außenmembran am Fundament', 'exterior-drain': 'Außenliegende Dränage', 'full-system': 'Komplettsystem aus Dränage und Membran' }, waterIssue: { 'minor-dampness': 'Leichte Feuchtigkeit / muffiger Geruch', 'active-leaks': 'Aktive Lecks nach Regen', 'hydrostatic-pressure': 'Stehendes Wasser / Wasserdruck' } }, article: '## Kosten der Kellerabdichtung\n\nVergleichen Sie Innenentwässerung, Außenabdichtung, Rissreparatur und Sumpfpumpe.' },
    pt: { name: 'Calculadora de Custo de Impermeabilização de Porão', shortDescription: 'Estime drenagem interna, impermeabilização externa, bomba de recalque, reparo de fissuras e escavação.', helpTexts: { basementArea: 'Meça o piso do porão, não a área total da casa.', perimeter: 'Some as paredes de fundação que receberão tratamento.', crackLength: 'Some o comprimento das fissuras a reparar.' }, options: { method: { 'interior-sealant': 'Revestimento impermeável interno', 'interior-drain': 'Dreno francês interno', 'exterior-membrane': 'Membrana externa da fundação', 'exterior-drain': 'Dreno externo', 'full-system': 'Sistema completo de drenagem e membrana' }, waterIssue: { 'minor-dampness': 'Umidade leve / cheiro de mofo', 'active-leaks': 'Vazamentos após chuva', 'hydrostatic-pressure': 'Água parada / pressão hidrostática' } }, article: '## Custos de impermeabilização de porão\n\nCompare drenagem interna, membrana externa, reparo de fissuras e bomba de recalque.' },
    it: { name: 'Calcolatore dei costi di impermeabilizzazione del seminterrato', shortDescription: 'Stima drenaggio interno, impermeabilizzazione esterna, pompa di raccolta, riparazione crepe e scavo.', helpTexts: { basementArea: 'Misura il pavimento del seminterrato, non l’intera casa.', perimeter: 'Somma le pareti di fondazione da trattare.', crackLength: 'Somma la lunghezza delle crepe da riparare.' }, options: { method: { 'interior-sealant': 'Rivestimento impermeabile interno', 'interior-drain': 'Drenaggio francese interno', 'exterior-membrane': 'Membrana esterna della fondazione', 'exterior-drain': 'Drenaggio esterno', 'full-system': 'Sistema completo con drenaggio e membrana' }, waterIssue: { 'minor-dampness': 'Umidità lieve / odore di muffa', 'active-leaks': 'Perdite attive dopo la pioggia', 'hydrostatic-pressure': 'Acqua stagnante / pressione idrostatica' } }, article: '## Costi di impermeabilizzazione del seminterrato\n\nConfronta drenaggio interno, membrana esterna, riparazione delle crepe e pompa.' },
    nl: { name: 'Kostenberekening kelderwaterdichting', shortDescription: 'Schat binnenafvoer, buitenafdichting, pompput, scheurreparatie en uitgraving.', helpTexts: { basementArea: 'Meet de keldervloer, niet het hele huis.', perimeter: 'Tel de funderingsmuren op die behandeld worden.', crackLength: 'Tel de lengte van de te repareren scheuren op.' }, options: { method: { 'interior-sealant': 'Binnenafdichting', 'interior-drain': 'Binnenste Franse drain', 'exterior-membrane': 'Buitenmembraan voor fundering', 'exterior-drain': 'Buitenafvoer', 'full-system': 'Compleet afvoer- en membraansysteem' }, waterIssue: { 'minor-dampness': 'Lichte vochtigheid / muffe geur', 'active-leaks': 'Actieve lekkages na regen', 'hydrostatic-pressure': 'Stilstaand water / hydrostatische druk' } }, article: '## Kosten voor kelderwaterdichting\n\nVergelijk binnenafvoer, buitenmembraan, scheurreparatie en een pompput.' },
    pl: { name: 'Kalkulator kosztów hydroizolacji piwnicy', shortDescription: 'Oszacuj drenaż wewnętrzny, izolację zewnętrzną, pompę, naprawę pęknięć i wykop.', helpTexts: { basementArea: 'Zmierz podłogę piwnicy, nie cały dom.', perimeter: 'Zsumuj długość ścian fundamentowych do zabezpieczenia.', crackLength: 'Zsumuj długość pęknięć do naprawy.' }, options: { method: { 'interior-sealant': 'Wewnętrzna powłoka uszczelniająca', 'interior-drain': 'Wewnętrzny drenaż francuski', 'exterior-membrane': 'Zewnętrzna membrana fundamentowa', 'exterior-drain': 'Zewnętrzny drenaż opaskowy', 'full-system': 'Pełny system drenażu i membrany' }, waterIssue: { 'minor-dampness': 'Lekka wilgoć / stęchły zapach', 'active-leaks': 'Aktywne przecieki po deszczu', 'hydrostatic-pressure': 'Stojąca woda / ciśnienie hydrostatyczne' } }, article: '## Koszty hydroizolacji piwnicy\n\nPorównaj drenaż wewnętrzny, membranę zewnętrzną, naprawę pęknięć i pompę.' },
    ru: { name: 'Калькулятор стоимости гидроизоляции подвала', shortDescription: 'Оцените внутренний дренаж, наружную гидроизоляцию, насос, ремонт трещин и земляные работы.', helpTexts: { basementArea: 'Измерьте площадь пола подвала, а не всего дома.', perimeter: 'Сложите длины стен фундамента, которые нужно обработать.', crackLength: 'Сложите длины трещин для ремонта.' }, options: { method: { 'interior-sealant': 'Внутреннее гидроизоляционное покрытие', 'interior-drain': 'Внутренний французский дренаж', 'exterior-membrane': 'Наружная мембрана фундамента', 'exterior-drain': 'Наружный дренаж', 'full-system': 'Полная система дренажа и мембраны' }, waterIssue: { 'minor-dampness': 'Небольшая сырость / затхлый запах', 'active-leaks': 'Активные протечки после дождя', 'hydrostatic-pressure': 'Стоячая вода / гидростатическое давление' } }, article: '## Стоимость гидроизоляции подвала\n\nСравните внутренний дренаж, наружную мембрану, ремонт трещин и насос.' },
    tr: { name: 'Bodrum Su Yalıtımı Maliyet Hesaplayıcı', shortDescription: 'İç drenaj, dış yalıtım, pompa, çatlak onarımı ve kazı maliyetini tahmin edin.', helpTexts: { basementArea: 'Tüm evi değil, bodrum zeminini ölçün.', perimeter: 'İşlem yapılacak temel duvarlarının uzunluğunu toplayın.', crackLength: 'Onarılacak çatlakların toplam uzunluğunu girin.' }, options: { method: { 'interior-sealant': 'İç su yalıtım kaplaması', 'interior-drain': 'İç Fransız drenajı', 'exterior-membrane': 'Dış temel membranı', 'exterior-drain': 'Dış drenaj sistemi', 'full-system': 'Tam drenaj ve membran sistemi' }, waterIssue: { 'minor-dampness': 'Hafif nem / küf kokusu', 'active-leaks': 'Yağmur sonrası aktif sızıntı', 'hydrostatic-pressure': 'Duran su / hidrostatik basınç' } }, article: '## Bodrum su yalıtımı maliyetleri\n\nİç drenaj, dış membran, çatlak onarımı ve pompa seçeneklerini karşılaştırın.' },
    ar: { name: 'حاسبة تكلفة عزل القبو ضد المياه', shortDescription: 'قدّر تكلفة الصرف الداخلي والعزل الخارجي ومضخة التجميع وإصلاح الشقوق والحفر.', helpTexts: { basementArea: 'قِس أرضية القبو وليس مساحة المنزل كاملة.', perimeter: 'اجمع أطوال جدران الأساس المراد معالجتها.', crackLength: 'اجمع أطوال الشقوق التي ستُصلح.' }, options: { method: { 'interior-sealant': 'طلاء عزل داخلي', 'interior-drain': 'مصرف فرنسي داخلي', 'exterior-membrane': 'غشاء خارجي للأساس', 'exterior-drain': 'صرف خارجي', 'full-system': 'نظام كامل للصرف والغشاء' }, waterIssue: { 'minor-dampness': 'رطوبة خفيفة / رائحة عفن', 'active-leaks': 'تسرّبات نشطة بعد المطر', 'hydrostatic-pressure': 'مياه راكدة / ضغط هيدروستاتيكي' } }, article: '## تكلفة عزل القبو ضد المياه\n\nقارن بين الصرف الداخلي والغشاء الخارجي وإصلاح الشقوق ومضخة التجميع.' },
    hi: { name: 'बेसमेंट वॉटरप्रूफिंग लागत कैलकुलेटर', shortDescription: 'आंतरिक ड्रेनेज, बाहरी वॉटरप्रूफिंग, संप पंप, दरार मरम्मत और खुदाई का अनुमान लगाएं।', helpTexts: { basementArea: 'पूरे घर के बजाय बेसमेंट का फर्श मापें।', perimeter: 'उपचारित होने वाली नींव की दीवारों की लंबाई जोड़ें।', crackLength: 'मरम्मत की जाने वाली दरारों की कुल लंबाई जोड़ें।' }, options: { method: { 'interior-sealant': 'आंतरिक जलरोधक कोटिंग', 'interior-drain': 'आंतरिक फ्रेंच ड्रेन', 'exterior-membrane': 'बाहरी नींव झिल्ली', 'exterior-drain': 'बाहरी ड्रेन प्रणाली', 'full-system': 'पूर्ण ड्रेनेज और झिल्ली प्रणाली' }, waterIssue: { 'minor-dampness': 'हल्की नमी / सीलन की गंध', 'active-leaks': 'बारिश के बाद सक्रिय रिसाव', 'hydrostatic-pressure': 'खड़ा पानी / हाइड्रोस्टैटिक दबाव' } }, article: '## बेसमेंट वॉटरप्रूफिंग लागत\n\nआंतरिक ड्रेनेज, बाहरी झिल्ली, दरार मरम्मत और संप पंप की तुलना करें।' },
    zh: { name: '地下室防水成本计算器', shortDescription: '估算室内排水、外部防水、集水泵、裂缝修复和开挖成本。', helpTexts: { basementArea: '测量地下室地面，而不是整套房屋面积。', perimeter: '汇总需要处理的基础墙长度。', crackLength: '汇总需要修复的裂缝长度。' }, options: { method: { 'interior-sealant': '室内防水涂层', 'interior-drain': '室内法式排水系统', 'exterior-membrane': '基础外部防水膜', 'exterior-drain': '外部排水系统', 'full-system': '完整排水和防水膜系统' }, waterIssue: { 'minor-dampness': '轻微潮湿 / 霉味', 'active-leaks': '雨后持续渗漏', 'hydrostatic-pressure': '积水 / 静水压力' } }, article: '## 地下室防水成本\n\n比较室内排水、外部防水膜、裂缝修复和集水泵。' },
    ja: { name: '地下室防水費用計算機', shortDescription: '室内排水、外部防水、排水ポンプ、ひび割れ補修、掘削の費用を見積もります。', helpTexts: { basementArea: '家全体ではなく地下室の床面積を測定します。', perimeter: '処理する基礎壁の長さを合計します。', crackLength: '補修するひび割れの合計長さを入力します。' }, options: { method: { 'interior-sealant': '室内防水コーティング', 'interior-drain': '室内フレンチドレーン', 'exterior-membrane': '基礎外部防水膜', 'exterior-drain': '外部排水システム', 'full-system': '排水と防水膜の総合システム' }, waterIssue: { 'minor-dampness': '軽い湿気 / かび臭さ', 'active-leaks': '雨後の継続的な漏水', 'hydrostatic-pressure': '滞留水 / 静水圧' } }, article: '## 地下室防水の費用\n\n室内排水、外部防水膜、ひび割れ補修、排水ポンプを比較します。' },
    ko: { name: '지하실 방수 비용 계산기', shortDescription: '실내 배수, 외부 방수, 집수 펌프, 균열 보수 및 굴착 비용을 추정하세요.', helpTexts: { basementArea: '집 전체가 아닌 지하실 바닥 면적을 측정하세요.', perimeter: '처리할 기초 벽의 길이를 합산하세요.', crackLength: '보수할 균열의 총 길이를 더하세요.' }, options: { method: { 'interior-sealant': '실내 방수 코팅', 'interior-drain': '실내 프렌치 드레인', 'exterior-membrane': '기초 외부 방수막', 'exterior-drain': '외부 배수 시스템', 'full-system': '전체 배수 및 방수막 시스템' }, waterIssue: { 'minor-dampness': '가벼운 습기 / 곰팡이 냄새', 'active-leaks': '비 온 뒤의 활성 누수', 'hydrostatic-pressure': '고인 물 / 정수압' } }, article: '## 지하실 방수 비용\n\n실내 배수, 외부 방수막, 균열 보수 및 집수 펌프를 비교하세요.' },
  },
  'spray-foam-insulation-cost-calculator': {
    en: {
      name: 'Spray Foam Insulation Cost Calculator',
      shortDescription: 'Calculate board feet, open-cell vs closed-cell thickness, 55-gallon drum yields, DIY kits, and contractor installation costs.',
      helpTexts: {
        application: 'Select where spray foam will be applied to load code recommendations.',
        area: 'Total square footage of the roof deck, walls, or subfloor to be sprayed.',
        foamType: 'Closed-cell offers maximum R-value per inch; open-cell is economical for interior walls.',
        thickness: 'Applied spray foam depth in inches (or cm in metric mode).',
        targetRValue: 'Optional target R-value to calculate required depth automatically.',
        framingSpacing: 'Deducts wood stud volume when spraying inside cavity bays.',
        oversprayWaste: '10% for open roofs/decks; 15-20% for stud cavities requiring flush-shaving.',
        pricingMode: 'Choose how material prices are quoted or purchased.',
        pricePerBoardFoot: 'Material price per board foot ($/bd ft).',
        laborCostPerSqFt: 'Contractor spray application labor per sq ft.',
        includeThermalBarrier: 'Required DC315 fire barrier paint for exposed foam in attics.',
        includeOldInsulationRemoval: 'Tear-out and vacuum removal of existing insulation.',
      },
      options: {
        application: {
          'roof-deck-attic': 'Attic Roof Deck / Rafters (Unvented Attic)',
          'wall-2x4': 'Exterior Wall (2Ã—4 Wood Studs)',
          'wall-2x6': 'Exterior Wall (2Ã—6 Wood Studs)',
          'crawlspace-subfloor': 'Crawlspace Subfloor / Floor Joists',
          'rim-joist': 'Rim Joist / Band Joist Air Sealing',
          'basement-wall': 'Basement Foundation Wall (Concrete/CMU)',
          'pole-barn-metal': 'Pole Barn / Metal Building (Continuous)',
          'custom': 'Custom Flat Surface / Tank',
        },
        foamType: {
          'closed-cell-2lb': '2.0 lb Closed-Cell (R-6.7 / in, Vapor Barrier & Structural)',
          'open-cell-05lb': '0.5 lb Open-Cell (R-3.7 / in, Expansive & Sound Damping)',
        },
        framingSpacing: {
          'continuous': 'Continuous / No Stud Deduction (Attics, Foundations, Pole Barns)',
          '16-oc': '16 inches On-Center (Standard 2x4 & 2x6 Studs, ~10% framing)',
          '24-oc': '24 inches On-Center (Advanced Framing / Trusses, ~7% framing)',
        },
        pricingMode: {
          'per-board-foot': 'Price per Board Foot ($/bd ft â€” Contractor Standard)',
          'per-sqft': 'Price per Square Foot ($/sq ft at target thickness)',
          'per-kit-600': 'Price per 600 bd-ft DIY Froth-Pak Kit',
          'per-drum-set': 'Price per 55-Gallon Chemical Drum Set',
        },
      },
      article: '## How to Calculate Spray Foam Board Feet\n\nMultiply your surface area in square feet by the desired thickness in inches. Add 10% to 15% for overspray and cavity trimming. One board foot equals a 1 ft Ã— 1 ft area at 1 inch depth.',
    },
    es: {
      name: 'Calculadora de Costo de Espuma de Poliuretano',
      shortDescription: 'Calcula pies tabla (board feet), espesor de celda abierta vs cerrada, rendimiento de barriles de 55 galones y costo de instalaciÃ³n.',
      helpTexts: {
        application: 'Selecciona dÃ³nde se aplicarÃ¡ la espuma para cargar recomendaciones normativas.',
        area: 'Pies cuadrados totales de la cubierta, paredes o suelo a aislar.',
        foamType: 'Celda cerrada ofrece mÃ¡ximo valor R y barrera de vapor; celda abierta es mÃ¡s econÃ³mica.',
        thickness: 'Espesor aplicado de espuma en pulgadas o centÃ­metros.',
        targetRValue: 'Valor R deseado para calcular el espesor automÃ¡ticamente.',
        framingSpacing: 'Deduce el volumen ocupado por los montantes de madera.',
        oversprayWaste: '10% en techos abiertos; 15-20% en cavidades que requieren recortar exceso.',
        pricingMode: 'Selecciona cÃ³mo se cotiza o compra el material.',
        pricePerBoardFoot: 'Precio del material por pie tabla (bd ft).',
        laborCostPerSqFt: 'Costo de mano de obra del contratista por pieÂ².',
        includeThermalBarrier: 'Pintura tÃ©rmica ignÃ­fuga DC315 requerida en Ã¡ticos descubiertos.',
        includeOldInsulationRemoval: 'Retirada y aspirado del aislamiento existente.',
      },
      options: {
        application: {
          'roof-deck-attic': 'Cubierta de Ãtico / Rafters (Ãtico no ventilado)',
          'wall-2x4': 'Pared Exterior (Montantes 2Ã—4)',
          'wall-2x6': 'Pared Exterior (Montantes 2Ã—6)',
          'crawlspace-subfloor': 'Suelo sobre CÃ¡mara / Vigas de Forjado',
          'rim-joist': 'Sellado de Viga de Borde (Rim Joist)',
          'basement-wall': 'Muro de SÃ³tano / CimentaciÃ³n de HormigÃ³n',
          'pole-barn-metal': 'Nave / Edificio MetÃ¡lico (Continuo)',
          'custom': 'Superficie Plana Personalizada',
        },
        foamType: {
          'closed-cell-2lb': '2.0 lb Celda Cerrada (R-6.7 / pulg, Barrera de Vapor)',
          'open-cell-05lb': '0.5 lb Celda Abierta (R-3.7 / pulg, Aislamiento AcÃºstico)',
        },
        framingSpacing: {
          'continuous': 'Continuo / Sin deducciÃ³n (Tejados, CimentaciÃ³n)',
          '16-oc': '16 pulgadas (Montantes estÃ¡ndar 2x4 y 2x6, ~10% madera)',
          '24-oc': '24 pulgadas (Estructura avanzada, ~7% madera)',
        },
        pricingMode: {
          'per-board-foot': 'Precio por Pie Tabla ($/bd ft â€” EstÃ¡ndar Contratista)',
          'per-sqft': 'Precio por Pie Cuadrado ($/sq ft al espesor deseado)',
          'per-kit-600': 'Precio por Kit DIY de 600 bd ft',
          'per-drum-set': 'Precio por Juego de Barriles de 55 Galones',
        },
      },
      article: '## CÃ³mo Calcular Pies Tabla de Espuma de Poliuretano\n\nMultiplica el Ã¡rea en pies cuadrados por el espesor en pulgadas. AÃ±ade un 10% a 15% de desperdicio por sobrepulverizaciÃ³n y recorte. Un pie tabla equivale a un Ã¡rea de 1 pie Ã— 1 pie con 1 pulgada de grosor.',
    },
    fr: {
          "name": "Calculateur de Coût d'Isolation Mousse Polyuréthane",
          "shortDescription": "Calculez le volume en PMP (board feet), l'épaisseur cellules ouvertes vs fermées, le rendement des fûts de 55 gallons et le coût de pose.",
          "helpTexts": {
                "application": "Sélectionnez l'emplacement pour charger les recommandations du code.",
                "area": "Surface totale du toit, des murs ou du plancher à isoler (pi²).",
                "foamType": "Cellules fermées pour résistance R max et pare-vapeur ; cellules ouvertes pour isolation phonique.",
                "thickness": "Épaisseur de mousse projetée désirée en pouces.",
                "targetRValue": "Valeur R cible optionnelle pour calcul automatique.",
                "framingSpacing": "Déduit le volume occupé par les montants d'ossature.",
                "oversprayWaste": "10% sur toitures ouvertes ; 15-20% pour cavités murales avec surfaçage.",
                "pricingMode": "Méthode de calcul des prix des matériaux."
          },
          "options": {
                "application": {
                      "roof-deck-attic": "Sous-face toiture / Combles non ventilés",
                      "wall-2x4": "Mur extérieur (Montants 2×4)",
                      "wall-2x6": "Mur extérieur (Montants 2×6)",
                      "crawlspace-subfloor": "Vide sanitaire / Solives de plancher",
                      "rim-joist": "Solive de rive / Rives de plancher",
                      "basement-wall": "Mur de fondation sous-sol (Béton/Blocs)",
                      "pole-barn-metal": "Hangar / Bâtiment métallique (Continu)",
                      "custom": "Surface plane personnalisée / Cuve"
                },
                "foamType": {
                      "closed-cell-2lb": "2,0 lb Cellules Fermées (R-6,7/po, Pare-vapeur)",
                      "open-cell-05lb": "0,5 lb Cellules Ouvertes (R-3,7/po, Économique)"
                }
          },
          "article": "## Comment calculer le volume de mousse projetée\n\nMultipliez la surface en pieds carrés par l'épaisseur en pouces pour obtenir les board feet (PMP)."
    },
    de: {
      name: "Sprühschaum-Dämmungs-Kostenrechner",
      shortDescription: "Berechnen Sie Board Feet, Schichtdicke von Offenzell- vs. Geschlossenzellschaum, Ertrag von 55-Gallonen-Fässern und Gesamtkosten.",
      helpTexts: {
        application: "Wählen Sie das Bauteil zur Ermittlung der Normvorgaben.",
        area: "Gesamtfläche von Dach, Wänden oder Boden in Quadratfuß.",
        foamType: "Geschlossenzellig bietet maximalen R-Wert und Dampfsperre; offenzellig ist schalldämmend.",
        thickness: "Aufgetragene Sprühschaumdicke in Zoll.",
        targetRValue: "Optionaler Ziel-R-Wert zur automatischen Dickenberechnung.",
        framingSpacing: "Zieht den Holzanteil der Ständerkonstruktion ab.",
        oversprayWaste: "10% für offene Flächen; 15-20% für bündig zu schneidende Gefache.",
        pricingMode: "Auswahl der Materialpreiskalkulation."
      },
      options: {
        application: {
          "roof-deck-attic": "Dachschräge / Unbelüfteter Dachboden",
          "wall-2x4": "Außenwand (2×4 Holzständer)",
          "wall-2x6": "Außenwand (2×6 Holzständer)",
          "crawlspace-subfloor": "Kriechkeller / Bodenbalkenlage",
          "rim-joist": "Randträger / Deckenstirn-Abdichtung",
          "basement-wall": "Kelleraußenwand (Beton/Mauerwerk)",
          "pole-barn-metal": "Hallenbau / Metallgebäude (Durchgehend)",
          "custom": "Individuelle ebene Fläche / Behälter"
        },
        foamType: {
          "closed-cell-2lb": "2.0 lb Geschlossenzellig (R-6.7/in, Dampfsperre)",
          "open-cell-05lb": "0.5 lb Offenzellig (R-3.7/in, Schalldämmung)"
        }
      },
      article: "## So berechnen Sie Sprühschaum (Board Feet)\n\nMultiplizieren Sie die Fläche in Quadratfuß mit der Schichtdicke in Zoll für das Netto-Volumen in Board Feet."
    },
    pt: {
          "name": "Calculadora de Espuma de Poliuretano",
          "shortDescription": "Calcule pés de prancha (board feet), espessura de célula aberta vs fechada, rendimento de tambores e custo de aplicação.",
          "helpTexts": {
                "application": "Selecione onde a espuma será aplicada.",
                "area": "Área total em pés quadrados do teto, paredes ou piso.",
                "foamType": "Célula fechada tem maior valor R; célula aberta é econômica.",
                "thickness": "Espessura aplicada em polegadas.",
                "targetRValue": "Valor R alvo para cálculo automático.",
                "framingSpacing": "Dedução do volume dos montantes de madeira."
          },
          "options": {
                "application": {
                      "roof-deck-attic": "Telhado / Forro de Sótão",
                      "wall-2x4": "Parede Externa (Montantes 2×4)",
                      "wall-2x6": "Parede Externa (Montantes 2×6)",
                      "crawlspace-subfloor": "Subsolo / Barrilete",
                      "rim-joist": "Viga de Borda",
                      "basement-wall": "Parede de Fundação / Subsolo",
                      "pole-barn-metal": "Galpão Metálico (Contínuo)",
                      "custom": "Superfície Plana / Tanque"
                },
                "foamType": {
                      "closed-cell-2lb": "2.0 lb Célula Fechada (R-6.7/pol, Barreira de Vapor)",
                      "open-cell-05lb": "0.5 lb Célula Aberta (R-3.7/pol, Acústico)"
                }
          },
          "article": "## Como Calcular Espuma de Poliuretano\n\nMultiplique a área em pés quadrados pela espessura em polegadas para obter o volume em board feet."
    },
    it: {
          "name": "Calcolatore Costo Schiuma Poliuretanica",
          "shortDescription": "Calcola board feet, spessore a celle aperte vs chiuse, resa dei fusti da 55 galloni e costi di posa.",
          "helpTexts": {
                "application": "Seleziona dove verrà applicata la schiuma.",
                "area": "Superficie totale in piedi quadrati.",
                "foamType": "Celle chiuse per massimo isolamento; celle aperte per isolamento acustico.",
                "thickness": "Spessore applicato in pollici.",
                "targetRValue": "Valore R desiderato.",
                "framingSpacing": "Detrazione volume montanti in legno."
          },
          "options": {
                "application": {
                      "roof-deck-attic": "Sottotetto / Falda tetto",
                      "wall-2x4": "Parete esterna (2×4)",
                      "wall-2x6": "Parete esterna (2×6)",
                      "crawlspace-subfloor": "Vespaio / Sottofondo",
                      "rim-joist": "Cordolo di piano",
                      "basement-wall": "Parete interrata (Calcestruzzo)",
                      "pole-barn-metal": "Capannone metallico (Continuo)",
                      "custom": "Superficie piana su misura"
                },
                "foamType": {
                      "closed-cell-2lb": "2.0 lb Celle Chiuse (R-6.7/in, Freno Vapore)",
                      "open-cell-05lb": "0.5 lb Celle Aperte (R-3.7/in, Fonoassorbente)"
                }
          },
          "article": "## Come Calcolare il Volume di Schiuma Poliuretanica\n\nMoltiplica la superficie per lo spessore in pollici per ottenere i board feet."
    },
    nl: {
          "name": "Spuitschuim Isolatie Kostencalculator",
          "shortDescription": "Bereken board feet, open-cel vs gesloten-cel dikte, 55-gallon vatopbrengst en installatiekosten.",
          "helpTexts": {
                "application": "Kies de toepassing voor bouwnormen.",
                "area": "Totale oppervlakte in vierkante voet.",
                "foamType": "Gesloten cel voor hoogste isolatiewaarde; open cel voor geluidsisolatie.",
                "thickness": "Aangebrachte dikte in inches.",
                "targetRValue": "Doel R-waarde.",
                "framingSpacing": "Aftrek houtvolume balken."
          },
          "options": {
                "application": {
                      "roof-deck-attic": "Hellend dak / Ongeventileerde zolder",
                      "wall-2x4": "Buitenwand (2×4 stijlen)",
                      "wall-2x6": "Buitenwand (2×6 stijlen)",
                      "crawlspace-subfloor": "Kruipruimte / Vloerbalken",
                      "rim-joist": "Randbalk luchtdichting",
                      "basement-wall": "Kelderwand (Beton)",
                      "pole-barn-metal": "Loods / Bedrijfshal (Continu)",
                      "custom": "Vlakke ondergrond / Tank"
                },
                "foamType": {
                      "closed-cell-2lb": "2.0 lb Gesloten Cel (R-6.7/in, Vochtkerend)",
                      "open-cell-05lb": "0.5 lb Open Cel (R-3.7/in, Akoestisch)"
                }
          },
          "article": "## Hoe Spuitschuim te Berekenen\n\nVermenigvuldig oppervlakte met dikte in inches voor het volume in board feet."
    },
    pl: {
          "name": "Kalkulator Kosztów Piany Natryskowej PUR",
          "shortDescription": "Oblicz objętość board feet, grubość piany otwartokomórkowej i zamkniętokomórkowej, wydajność beczek oraz koszt robocizny.",
          "helpTexts": {
                "application": "Wybierz miejsce natrysku piany.",
                "area": "Całkowita powierzchnia w stopach kwadratowych.",
                "foamType": "Piana zamkniętokomórkowa ma wyższy opór cieplny; otwartokomórkowa lepiej tłumi dźwięk.",
                "thickness": "Grubość warstwy w calach.",
                "targetRValue": "Docelowy opór cieplny R.",
                "framingSpacing": "Odliczenie kubatury słupków drewnianych."
          },
          "options": {
                "application": {
                      "roof-deck-attic": "Połać dachowa / Poddasze nieużytkowe",
                      "wall-2x4": "Ściana zewnętrzna (Szkielet 2×4)",
                      "wall-2x6": "Ściana zewnętrzna (Szkielet 2×6)",
                      "crawlspace-subfloor": "Przestrzeń podpodłogowa / Legary",
                      "rim-joist": "Belka podwalinowa / Wieniec",
                      "basement-wall": "Ściana fundamentowa (Beton)",
                      "pole-barn-metal": "Hala stalowa / Magazyn (Ciągła)",
                      "custom": "Płaska powierzchnia / Zbiornik"
                },
                "foamType": {
                      "closed-cell-2lb": "2.0 lb Zamkniętokomórkowa (R-6.7/cal, Paroszczelna)",
                      "open-cell-05lb": "0.5 lb Otwartokomórkowa (R-3.7/cal, Akustyczna)"
                }
          },
          "article": "## Jak obliczyć objętość piany PUR\n\nPomnóż powierzchnię w stopach kwadratowych przez grubość w calach, aby otrzymać board feet."
    },
    ru: {
          "name": "Калькулятор Стоимости Напыляемого ППУ",
          "shortDescription": "Рассчитайте объём в борд-футах (board feet), толщину открытоячеистого и закрытоячеистого ППУ, расход бочек 55 галлонов и стоимость работ.",
          "helpTexts": {
                "application": "Выберите изолируемую конструкцию.",
                "area": "Общая площадь поверхности в кв. футах.",
                "foamType": "Закрытая ячейка — максимальный R и пароизоляция; открытая — звукоизоляция.",
                "thickness": "Толщина напыления в дюймах.",
                "targetRValue": "Целевое сопротивление теплопередаче.",
                "framingSpacing": "Вычет объёма стоек каркаса."
          },
          "options": {
                "application": {
                      "roof-deck-attic": "Кровля изнутри / Мансарда",
                      "wall-2x4": "Каркасная стена (Стойки 2×4)",
                      "wall-2x6": "Каркасная стена (Стойки 2×6)",
                      "crawlspace-subfloor": "Цокольное перекрытие / Подпол",
                      "rim-joist": "Торцы балок перекрытия",
                      "basement-wall": "Стена подвала (Бетон/Блоки)",
                      "pole-barn-metal": "Ангар / Металлическое здание",
                      "custom": "Плоская поверхность / Резервуар"
                },
                "foamType": {
                      "closed-cell-2lb": "2.0 lb Закрытая ячейка (R-6.7/дюйм, Гидропароизоляция)",
                      "open-cell-05lb": "0.5 lb Открытая ячейка (R-3.7/дюйм, Звукоизоляция)"
                }
          },
          "article": "## Как рассчитать объём ППУ\n\nУмножьте площадь на толщину слоя в дюймах для получения объёма в board feet."
    },
    tr: {
          "name": "Poliüretan Sprey Köpük Yalıtım Maliyet Hesaplayıcı",
          "shortDescription": "Board feet hacmini, açık vs kapalı hücre kalınlığını, 55 galonluk varil verimini ve uygulama maliyetlerini hesaplayın.",
          "helpTexts": {
                "application": "Köpüğün uygulanacağı yapı elemanını seçin.",
                "area": "Uygulama yapılacak toplam kare fit alan.",
                "foamType": "Kapalı hücre en yüksek R-değerini ve buhar bariyerini sağlar; açık hücre ses yalıtımı için idealdir.",
                "thickness": "İstenen kalınlık (inç cinsinden).",
                "targetRValue": "Hedef R-Değeri.",
                "framingSpacing": "Karkas dikme hacmi indirimi."
          },
          "options": {
                "application": {
                      "roof-deck-attic": "Çatı İçi / Havalandırmasız Tavan Arası",
                      "wall-2x4": "Dış Duvar (2×4 Ahşap Karkas)",
                      "wall-2x6": "Dış Duvar (2×6 Ahşap Karkas)",
                      "crawlspace-subfloor": "Zemin Altı / Döşeme Kirişleri",
                      "rim-joist": "Döşeme Kenar Kirişi Hava Sızdırmazlığı",
                      "basement-wall": "Bodrum Temel Duvarı (Beton)",
                      "pole-barn-metal": "Çelik Hangar / Metal Yapı (Kesintisiz)",
                      "custom": "Özel Düz Yüzey / Tank"
                },
                "foamType": {
                      "closed-cell-2lb": "2.0 lb Kapalı Hücreli (R-6.7/inç, Buhar Bariyeri)",
                      "open-cell-05lb": "0.5 lb Açık Hücreli (R-3.7/inç, Akustik)"
                }
          },
          "article": "## Sprey Köpük Hacmi Nasıl Hesaplanır\n\nYüzey alanını inç cinsinden kalınlıkla çarparak board feet hacmini bulun."
    },
    ar: {
          "name": "حاسبة تكلفة عزل فوم الرش البولي يوريثان",
          "shortDescription": "احسب حجم الأقدام اللوحية (board feet)، وسماكة الخلايا المغلقة مقابل المفتوحة، وإنتاجية براميل 55 جالون وتكاليف التركيب.",
          "helpTexts": {
                "application": "حدد مكان تطبيق فوم الرش.",
                "area": "المساحة الإجمالية بالقدم المربع.",
                "foamType": "الخلايا المغلقة توفر أعلى عزل وحاجز بخار؛ الخلايا المفتوحة اقتصادية للعزل الصوتي.",
                "thickness": "سماكة الرش بالبوصة.",
                "targetRValue": "قيمة R المستهدفة.",
                "framingSpacing": "خصم حجم القوائم الخشبية."
          },
          "options": {
                "application": {
                      "roof-deck-attic": "سقف العلية / أسفل ألواح السقف",
                      "wall-2x4": "جدار خارجي (قوائم 2×4)",
                      "wall-2x6": "جدار خارجي (قوائم 2×6)",
                      "crawlspace-subfloor": "أرضية القبو / جسور الأرضيات",
                      "rim-joist": "عارضة الحافة الخارجية",
                      "basement-wall": "جدار القبو الخرساني",
                      "pole-barn-metal": "مستودع حديدي (عزل مستمر)",
                      "custom": "سطح مستوٍ مخصص / خزان"
                },
                "foamType": {
                      "closed-cell-2lb": "2.0 رطل خلايا مغلقة (R-6.7/بوصة، عازل بخار)",
                      "open-cell-05lb": "0.5 رطل خلايا مفتوحة (R-3.7/بوصة، عازل صوت)"
                }
          },
          "article": "## كيفية حساب حجم فوم الرش\n\nاضرب المساحة بالقدم المربع في السماكة بالبوصة للحصول على إجمالي الأقدام اللوحية."
    },
    hi: {
          "name": "स्प्रे फोम इंसुलेशन लागत कैलकुलेटर",
          "shortDescription": "बोर्ड फीट (board feet), ओपन-सेल बनाम क्लोज्ड-सेल मोटाई, 55-गैलन ड्रम की उपज और ठेकेदार स्थापना लागत की गणना करें।",
          "helpTexts": {
                "application": "स्प्रे फोम लगाने का स्थान चुनें।",
                "area": "कुल वर्ग फुट क्षेत्रफल।",
                "foamType": "क्लोज्ड-सेल अधिकतम आर-वैल्यू प्रदान करता है; ओपन-सेल ध्वनि इन्सुलेशन के लिए उपयुक्त है।",
                "thickness": "लागू मोटाई (इंच में)।",
                "targetRValue": "लक्षित आर-वैल्यू।",
                "framingSpacing": "लकड़ी के स्टड का आयतन घटाएं।"
          },
          "options": {
                "application": {
                      "roof-deck-attic": "अटारी की छत / राफ्टर्स",
                      "wall-2x4": "बाहरी दीवार (2×4 स्टड)",
                      "wall-2x6": "बाहरी दीवार (2×6 स्टड)",
                      "crawlspace-subfloor": "क्रॉलस्पेस / फर्श जोइस्ट",
                      "rim-joist": "रिम जोइस्ट सीलिंग",
                      "basement-wall": "बेसमेंट फाउंडेशन दीवार (कंक्रीट)",
                      "pole-barn-metal": "मेटल बिल्डिंग / शेड",
                      "custom": "कस्टम समतल सतह / टैंक"
                },
                "foamType": {
                      "closed-cell-2lb": "2.0 lb क्लोज्ड-सेल (R-6.7/इंच, वेपर बैरियर)",
                      "open-cell-05lb": "0.5 lb ओपन-सेल (R-3.7/इंच, ध्वनि रोधी)"
                }
          },
          "article": "## स्प्रे फोम की मात्रा की गणना कैसे करें\n\nबोर्ड फीट में कुल आयतन प्राप्त करने के लिए वर्ग फुट में क्षेत्रफल को इंच में मोटाई से गुणा करें।"
    },
    zh: {
          "name": "聚氨酯发泡喷涂保温成本计算器",
          "shortDescription": "计算板英尺 (Board Feet) 喷涂体积、闭孔与开孔发泡厚度、55加仑组合大桶原料用量及施工总成本。",
          "helpTexts": {
                "application": "选择喷涂发泡保温的应用部位。",
                "area": "屋顶、墙面或地板需喷涂的建筑总面积 (平方英尺)。",
                "foamType": "闭孔发泡提供最高热阻 R 值并自带防潮隔汽层；开孔发泡性价比高且吸音效果极佳。",
                "thickness": "设计喷涂发泡厚度 (英寸)。",
                "targetRValue": "可选设定目标热阻 R 值。",
                "framingSpacing": "自动扣除木龙骨立柱所占体积。"
          },
          "options": {
                "application": {
                      "roof-deck-attic": "阁楼斜屋顶下侧 / 椽条内侧",
                      "wall-2x4": "外墙体 (2×4 木龙骨龙骨腔)",
                      "wall-2x6": "外墙体 (2×6 木龙骨龙骨腔)",
                      "crawlspace-subfloor": "架空爬行层地板 / 楼板龙骨下",
                      "rim-joist": "楼层边缘边梁气密密封",
                      "basement-wall": "地下室外墙 (现浇混凝土/砌块)",
                      "pole-barn-metal": "钢结构厂房 / 铁皮仓房 (连续喷涂)",
                      "custom": "自定义平面表面 / 储罐保温"
                },
                "foamType": {
                      "closed-cell-2lb": "2.0磅 闭孔发泡 (R-6.7/英寸，防潮防汽结构增强)",
                      "open-cell-05lb": "0.5磅 开孔发泡 (R-3.7/英寸，微孔膨胀吸音降噪)"
                }
          },
          "article": "## 如何计算发泡聚氨酯板英尺体积\n\n将施工面积（平方英尺）乘以喷涂厚度（英寸），即可得到发泡聚氨酯原料所需板英尺（Board Feet）总量。"
    },
    ja: {
          "name": "現場発泡ウレタン断熱 コスト計算機",
          "shortDescription": "ボードフィート容量、連続気泡 vs 独立気泡の厚さ、55ガロンドラム缶使用量、DIYボンベ、施工費用を計算します。",
          "helpTexts": {
                "application": "断熱施工を行う部位を選択してください。",
                "area": "屋根・壁・床の総施工面積（平方フィート）。",
                "foamType": "独立気泡（硬質）は最高クラスの断熱性と防湿性；連続気泡（軟質）は吸音性に優れます。",
                "thickness": "吹き付け設計厚さ（インチ）。",
                "targetRValue": "目標熱抵抗値（R値）。",
                "framingSpacing": "柱・スタッドの体積控除。"
          },
          "options": {
                "application": {
                      "roof-deck-attic": "小屋裏・屋根直下（無通気屋根裏）",
                      "wall-2x4": "外壁（2×4スタッド壁体内）",
                      "wall-2x6": "外壁（2×6スタッド壁体内）",
                      "crawlspace-subfloor": "床下・根太間充填断熱",
                      "rim-joist": "階間胴差・外周気密部",
                      "basement-wall": "基礎地下室壁面（コンクリート）",
                      "pole-barn-metal": "鉄骨倉庫・金属系建物（連続吹き付け）",
                      "custom": "カスタム平坦面 / タンク"
                },
                "foamType": {
                      "closed-cell-2lb": "2.0 lb 独立気泡硬質ウレタン（R-6.7/in, 防湿気密）",
                      "open-cell-05lb": "0.5 lb 連続気泡軟質ウレタン（R-3.7/in, 吸音充填）"
                }
          },
          "article": "## スプレーウレタンのボードフィート計算方法\n\n施工面積（sq ft）に厚さ（インチ）を乗算してボードフィート（bd ft）容量を算出します。"
    },
    ko: {
          "name": "스프레이 폼 단열재 시공비 계산기",
          "shortDescription": "보드피트 부피, 수성연질 vs 경질 폼 시공 두께, 55갤런 드럼 원료 수량 및 총 시공비를 계산하세요.",
          "helpTexts": {
                "application": "단열재가 시공될 부위를 선택하세요.",
                "area": "지붕, 벽체, 바닥 등 시공 부위 총 면적 (스퀘어피트).",
                "foamType": "경질 우레탄폼(Closed-Cell)은 최고 단열성과 방습성 제공; 수성연질폼(Open-Cell)은 방음과 경제성에 유리.",
                "thickness": "시공 희망 폼 두께 (인치).",
                "targetRValue": "목표 R값.",
                "framingSpacing": "목재 스터드 체적 자동 공제."
          },
          "options": {
                "application": {
                      "roof-deck-attic": "지붕 하부 / 비통기 다락방 천장",
                      "wall-2x4": "외벽체 (2×4 목조 스터드)",
                      "wall-2x6": "외벽체 (2×6 목조 스터드)",
                      "crawlspace-subfloor": "기초 하부 / 1층 바닥 장선",
                      "rim-joist": "층간 테두리보 기밀 밀폐",
                      "basement-wall": "지하실 기초 콘크리트 벽체",
                      "pole-barn-metal": "철골 판넬 창고 (연속 뿜칠)",
                      "custom": "평면 표면 / 저장 탱크"
                },
                "foamType": {
                      "closed-cell-2lb": "2.0 lb 경질 우레탄폼 (R-6.7/in, 방습·구조강화)",
                      "open-cell-05lb": "0.5 lb 수성 연질폼 (R-3.7/in, 팽창 충진·흡음)"
                }
          },
          "article": "## 스프레이 폼 보드피트 계산 방법\n\n시공 면적(sq ft)에 원하는 두께(in)를 곱하여 필요한 총 보드피트(Board Feet) 부피를 산출합니다."
    },
  },

  'asphalt-calculator': {
    en: {
      name: 'Asphalt Calculator',
      shortDescription:
        'Calculate how many tons of asphalt you need for a driveway, parking lot, or paving job. Enter length, width, and depth to get an instant estimate.',
      helpTexts: {
        density: 'Standard hot-mix asphalt is typically 140â€“150 lb/ftÂ³.',
        pricePerTon: 'Optional â€” leave blank to hide the cost estimate.',
      },
      article: `## How to Use the Asphalt Tonnage Calculator

Enter the length and width of the area you're paving, along with your desired compacted depth. Most residential driveways use a compacted depth of 2 to 4 inches, while commercial parking lots and roads typically call for 4 to 6 inches or more depending on traffic loads. 

If you are unsure of the density of the asphalt mix you are using, **145 lb per cubic foot** (approx. 2.4 tonnes/mÂ³) is the standard industry default for hot-mix asphalt (HMA). Always add a **5% to 10% waste factor** to account for roller compaction, uneven grade settling, and irregular edges. If you know your supplier's price per ton, enter it to see an instant material cost estimate.

---

## Asphalt Calculator Formula: Converting Dimensions to Tons

The calculator converts your measurements into cubic volume, applies the asphalt's compacted density, and includes your safety waste factor:

\`\`\`
1. Area (sq ft)       = Length (ft) Ã— Width (ft)
2. Depth in Feet (ft)  = Depth (inches) Ã· 12
3. Volume (cu ft)      = Area (sq ft) Ã— Depth (ft)
4. Volume (cu yd)      = Volume (cu ft) Ã· 27
5. Weight (lbs)        = Volume (cu ft) Ã— Density (145 lb/ftÂ³)
6. Exact Tonnage (US)  = Weight (lbs) Ã· 2,000
7. Total Tons with Waste = Exact Tons Ã— (1 + Waste % Ã· 100)
8. Estimated Total Cost  = Total Tons Ã— Price Per Ton
\`\`\`

### Example Calculation (20' Ã— 10' Driveway at 4" Depth):
* **Area:** 20 Ã— 10 = 200 sq ft
* **Depth:** 4 in Ã· 12 = 0.333 ft
* **Volume:** 200 Ã— 0.333 = 66.67 cu ft = 2.47 cu yd
* **Weight:** 66.67 Ã— 145 = 9,667 lbs
* **Exact Tons:** 9,667 Ã· 2,000 = 4.83 tons
* **With 5% Waste:** 4.83 Ã— 1.05 = **5.08 tons**

---

## Asphalt Coverage per Ton (Quick Reference Guide)

How many square feet does 1 ton of asphalt cover? Use this quick coverage reference chart:

| Compacted Depth | Approx. Sq Ft Covered per Ton | Approx. Tons per 1,000 Sq Ft | Common Applications |
|---|---|---|---|
| **1.5 in (Resurfacing / Overlay)** | ~110 â€“ 120 sq ft | ~8.5 â€“ 9.0 tons | Driveway resurfacing, overlay over sound base |
| **2.0 in (Standard Top Coat)** | ~80 â€“ 90 sq ft | ~11.5 â€“ 12.5 tons | Residential driveway surface layer, golf paths |
| **3.0 in (Heavy-Duty Driveway)** | ~55 â€“ 60 sq ft | ~17.5 â€“ 18.5 tons | Full-depth driveway, light delivery vehicle traffic |
| **4.0 in (Commercial / Parking Lot)** | ~40 â€“ 45 sq ft | ~23.5 â€“ 24.5 tons | Commercial parking areas, heavy trucks, RV pads |
| **6.0 in (Industrial / High Load)** | ~25 â€“ 30 sq ft | ~35.0 â€“ 37.0 tons | Heavy highway roads, commercial loading docks |

*Note: Figures assume standard 145 lb/ftÂ³ hot-mix asphalt without waste applied.*

---

## How to Convert Cubic Yards of Asphalt to Tons

Contractors frequently need to convert cubic yards of asphalt to tons when ordering from an asphalt batch plant:

* **1 Cubic Yard of Hot Mix Asphalt** â‰ˆ **2.0 tons** (approx. 3,915 lbs at 145 lb/ftÂ³).
* **Formula:** Cubic Yards Ã— 2.0 = Approximate Tons.
* Example: A 5 cu yd job requires approx. 10 tons of asphalt.

---

## Key Factors That Impact Asphalt Quantity

1. **Sub-Base Compaction:** Asphalt is calculated at its *final compacted depth*, not loose screed depth. If your gravel sub-base is soft or uncompacted, you will require 10% to 20% more asphalt to achieve a level surface.
2. **Irregular Curves & Flare:** For circular turnarounds, cul-de-sacs, or curved driveway approaches, calculate individual rectangular sections and add a 10% to 15% waste allowance.
3. **Mix Density Variations:** Standard hot mix asphalt (HMA) ranges between 140 and 150 lb/ftÂ³. Porous or recycled asphalt pavement (RAP) mixes may differ.
4. **Roller Compaction Factor:** Asphalt loses approximately 20% to 25% of its loose volume when compacted by a heavy roller drum.

---

## Frequently Asked Questions (FAQ)

### How many tons of asphalt do I need for a 2-car driveway?
A typical two-car driveway measuring **20 ft by 20 ft (400 sq ft)** at a standard **3-inch compacted depth** requires approximately **8.0 to 8.5 tons** of asphalt (including a 5% waste factor).

### What is the difference between an asphalt calculator and an asphalt tonnage calculator?
There is no difference. Asphalt is priced, sold, and hauled by the ton, while paving projects are measured in square feet and inches of depth. Both calculators convert surface area measurements into total asphalt tonnage.

### How thick should an asphalt driveway be?
Residential asphalt driveways should have a compacted thickness of **2 to 3 inches** when laid over a properly compacted 6-to-8-inch aggregate stone base. For heavy truck or RV parking, a **4-inch depth** is recommended.

### How much does a ton of asphalt cost?
Asphalt material costs typically range from **$75 to $150 per ton** depending on geographic location, petroleum liquid asphalt index prices, and transport distance from the batch plant.`,
    },

    es: {
      name: 'Calculadora de Asfalto',
      shortDescription:
        'Calcula cuÃ¡ntas toneladas de asfalto necesitas para una entrada, estacionamiento o pavimentaciÃ³n. Ingresa longitud, ancho y profundidad para una estimaciÃ³n instantÃ¡nea.',
      helpTexts: {
        density: 'El asfalto en caliente estÃ¡ndar suele ser de 140â€“150 lb/pieÂ³.',
        pricePerTon: 'Opcional: dÃ©jalo en blanco para ocultar la estimaciÃ³n de costo.',
      },
      article: `## CÃ³mo usar la Calculadora de Asfalto

Ingresa la longitud y el ancho del Ã¡rea que vas a pavimentar, junto con la profundidad deseada. La mayorÃ­a de las entradas residenciales usan una profundidad compactada de 2 a 4 pulgadas, mientras que los estacionamientos y caminos comerciales requieren de 4 a 6 pulgadas o mÃ¡s. Si no conoces la densidad exacta de la mezcla, 145 lb/pieÂ³ es un valor estÃ¡ndar confiable. AÃ±ade un porcentaje de desperdicio (5% para Ã¡reas rectangulares, 10â€“15% para curvas o pendientes). Si conoces el precio por tonelada, ingrÃ©salo para estimar el costo total.

## FÃ³rmula de CÃ¡lculo de Asfalto

La calculadora convierte tus medidas en volumen cÃºbico, luego calcula el peso con la densidad del asfalto y aÃ±ade el factor de desperdicio:

\`\`\`
Ãrea (pieÂ²)       = Longitud Ã— Ancho
Profundidad (pie) = Profundidad (pulg) Ã· 12
Volumen (pieÂ³)    = Ãrea Ã— Profundidad (pie)
Volumen (ydÂ³)     = Volumen (pieÂ³) Ã· 27
Peso (libras)     = Volumen (pieÂ³) Ã— Densidad
Peso (toneladas)  = Peso (libras) Ã· 2000
Toneladas con desperdicio = Toneladas Ã— (1 + Desperdicio % Ã· 100)
Costo total       = Toneladas con desperdicio Ã— Precio por tonelada
\`\`\`

## Â¿CuÃ¡nto asfalto necesito?

GuÃ­a de referencia rÃ¡pida por cada 1,000 pies cuadrados segÃºn el espesor:

| Profundidad | Toneladas aprox. por 1,000 pieÂ² |
|---|---|
| 2 pulg | ~12 toneladas |
| 3 pulg | ~18 toneladas |
| 4 pulg | ~24 toneladas |
| 6 pulg | ~36 toneladas |

## Factores que afectan la cantidad de asfalto

- **CompactaciÃ³n de la base:** El asfalto se mide en su profundidad compactada final. Si la base no estÃ¡ bien compactada, requerirÃ¡s material adicional.
- **Formas irregulares:** Las Ã¡reas curvas o en L deben dividirse en secciones rectangulares y sumarse.
- **VariaciÃ³n de densidad:** Consulta siempre a tu planta de asfalto local para confirmar la densidad exacta de la mezcla.`,
    },

    pt: {
      name: 'Calculadora de Asfalto',
      shortDescription:
        'Calcule quantas toneladas de asfalto vocÃª precisa para garagem, estacionamento ou pavimentaÃ§Ã£o. Insira comprimento, largura e espessura para uma estimativa instantÃ¢nea.',
      helpTexts: {
        density: 'O asfalto a quente padrÃ£o geralmente tem 140â€“150 lb/pÃ©Â³ (2.240â€“2.400 kg/mÂ³).',
        pricePerTon: 'Opcional â€” deixe em branco para ocultar a estimativa de custo.',
      },
      article: `## Como usar a Calculadora de Asfalto

Insira o comprimento e a largura da Ã¡rea a ser pavimentada, alÃ©m da espessura compactada desejada. Garagens residenciais normalmente utilizam de 5 a 10 cm (2 a 4 polegadas), enquanto estacionamentos comerciais e vias pÃºblicas exigem de 10 a 15 cm ou mais. Adicione uma margem de perda (5% para Ã¡reas retangulares, 10â€“15% para curvas e declives). Se souber o preÃ§o por tonelada, informe-o para ver o custo total estimado.`,
    },

    fr: {
      name: "Calculatrice d'Asphalte",
      shortDescription:
        'Calculez combien de tonnes d\'asphalte sont nÃ©cessaires pour une allÃ©e, un parking ou un pavage. Entrez longueur, largeur et profondeur pour une estimation instantanÃ©e.',
      helpTexts: {
        density: 'L\'asphalte Ã  chaud standard a gÃ©nÃ©ralement une densitÃ© de 140â€“150 lb/piÂ³.',
        pricePerTon: 'Optionnel â€” laissez vide pour masquer le coÃ»t estimÃ©.',
      },
      article: `## Comment utiliser la Calculatrice d'Asphalte

Entrez la longueur et la largeur de la surface Ã  paver, ainsi que l'Ã©paisseur souhaitÃ©e. Les allÃ©es rÃ©sidentielles nÃ©cessitent gÃ©nÃ©ralement 5 Ã  10 cm d'Ã©paisseur compactÃ©e. PrÃ©voyez un facteur de dÃ©chet de 5% pour les formes simples et 10 Ã  15% pour les zones complexes.`,
    },

    de: {
      name: 'Asphaltrechner',
      shortDescription:
        'Berechnen Sie, wie viele Tonnen Asphalt Sie fÃ¼r eine Einfahrt, einen Parkplatz oder eine Pflasterung benÃ¶tigen. Geben Sie LÃ¤nge, Breite und Tiefe ein.',
      helpTexts: {
        density: 'Standard-HeiÃŸasphalt hat typischerweise eine Dichte von 140â€“150 lb/ftÂ³ (2,24â€“2,4 t/mÂ³).',
        pricePerTon: 'Optional â€” leer lassen, um KostenschÃ¤tzung auszublenden.',
      },
      article: `## So nutzen Sie den Asphaltrechner

Geben Sie LÃ¤nge, Breite und gewÃ¼nschte Einbautiefe ein. FÃ¼r private Einfahrten genÃ¼gen meist 5â€“10 cm verdichteter Asphalt. BerÃ¼cksichtigen Sie 5â€“10% Verschnitt fÃ¼r Kanten und Verdichtungsverlust.`,
    },

    it: {
      name: 'Calcolatore Asfalto',
      shortDescription:
        'Calcola quante tonnellate di asfalto ti servono per vialetto, parcheggio o pavimentazione. Inserisci lunghezza, larghezza e spessore.',
      helpTexts: {
        density: 'L\'asfalto a caldo standard ha una densitÃ  tipica di 140â€“150 lb/ftÂ³.',
        pricePerTon: 'Opzionale â€” lascia vuoto per nascondere la stima del costo.',
      },
      article: `## Come usare il Calcolatore Asfalto

Inserisci le dimensioni dell'area e lo spessore desiderato. I vialetti residenziali richiedono solitamente 5â€“10 cm di spessore compattato. Aggiungi il 5â€“10% di scarto per bordi e costipamento.`,
    },

    nl: {
      name: 'Asfaltcalculator',
      shortDescription:
        'Bereken hoeveel ton asfalt u nodig heeft voor een oprit, parkeerplaats of bestrating.',
      helpTexts: {
        density: 'Standaard warm asfalt is doorgaans 140â€“150 lb/ftÂ³.',
        pricePerTon: 'Optioneel â€” leeg laten om kostenschatting te verbergen.',
      },
      article: `## Hoe gebruikt u de Asfaltcalculator

Voer lengte, breedte en dikte in. Opritten vereisen doorgaans 5 tot 10 cm verdicht asfalt. Reken 5â€“10% extra voor verspilling en verdichting.`,
    },

    pl: {
      name: 'Kalkulator Asfaltu',
      shortDescription:
        'Oblicz, ile ton asfaltu potrzebujesz na podjazd, parking lub drogÄ™.',
      helpTexts: {
        density: 'Standardowy asfalt na gorÄ…co ma gÄ™stoÅ›Ä‡ 140â€“150 lb/ftÂ³.',
        pricePerTon: 'Opcjonalnie â€” zostaw puste, aby ukryÄ‡ koszt.',
      },
      article: `## Jak korzystaÄ‡ z kalkulatora asfaltu

WprowadÅº dÅ‚ugoÅ›Ä‡, szerokoÅ›Ä‡ i gruboÅ›Ä‡ warstwy. Podjazdy przydomowe wymagajÄ… zwykle 5â€“10 cm zagÄ™szczonego asfaltu. UwzglÄ™dnij 5â€“10% naddatku na straty.`,
    },

    ru: {
      name: 'ÐšÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€ ÐÑÑ„Ð°Ð»ÑŒÑ‚Ð°',
      shortDescription:
        'Ð Ð°ÑÑÑ‡Ð¸Ñ‚Ð°Ð¹Ñ‚Ðµ, ÑÐºÐ¾Ð»ÑŒÐºÐ¾ Ñ‚Ð¾Ð½Ð½ Ð°ÑÑ„Ð°Ð»ÑŒÑ‚Ð° Ð²Ð°Ð¼ Ð½ÑƒÐ¶Ð½Ð¾ Ð´Ð»Ñ Ð¿Ð¾Ð´ÑŠÐµÐ·Ð´Ð½Ð¾Ð¹ Ð´Ð¾Ñ€Ð¾Ð¶ÐºÐ¸, Ð¿Ð°Ñ€ÐºÐ¾Ð²ÐºÐ¸ Ð¸Ð»Ð¸ ÑƒÐºÐ»Ð°Ð´ÐºÐ¸.',
      helpTexts: {
        density: 'ÐŸÐ»Ð¾Ñ‚Ð½Ð¾ÑÑ‚ÑŒ ÑÑ‚Ð°Ð½Ð´Ð°Ñ€Ñ‚Ð½Ð¾Ð³Ð¾ Ð³Ð¾Ñ€ÑÑ‡ÐµÐ³Ð¾ Ð°ÑÑ„Ð°Ð»ÑŒÑ‚Ð° ÑÐ¾ÑÑ‚Ð°Ð²Ð»ÑÐµÑ‚ 140â€“150 lb/ftÂ³ (2,24â€“2,4 Ñ‚/Ð¼Â³).',
        pricePerTon: 'ÐÐµÐ¾Ð±ÑÐ·Ð°Ñ‚ÐµÐ»ÑŒÐ½Ð¾ â€” Ð¾ÑÑ‚Ð°Ð²ÑŒÑ‚Ðµ Ð¿ÑƒÑÑ‚Ñ‹Ð¼, Ñ‡Ñ‚Ð¾Ð±Ñ‹ ÑÐºÑ€Ñ‹Ñ‚ÑŒ ÑÑ‚Ð¾Ð¸Ð¼Ð¾ÑÑ‚ÑŒ.',
      },
      article: `## ÐšÐ°Ðº Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒÑÑ ÐºÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€Ð¾Ð¼ Ð°ÑÑ„Ð°Ð»ÑŒÑ‚Ð°

Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð´Ð»Ð¸Ð½Ñƒ, ÑˆÐ¸Ñ€Ð¸Ð½Ñƒ Ð¸ Ñ‚Ð¾Ð»Ñ‰Ð¸Ð½Ñƒ ÑÐ»Ð¾Ñ. Ð”Ð»Ñ Ñ‡Ð°ÑÑ‚Ð½Ñ‹Ñ… Ð¿Ð¾Ð´ÑŠÐµÐ·Ð´Ð½Ñ‹Ñ… Ð¿ÑƒÑ‚ÐµÐ¹ Ð¾Ð±Ñ‹Ñ‡Ð½Ð¾ Ñ‚Ñ€ÐµÐ±ÑƒÐµÑ‚ÑÑ 5â€“10 ÑÐ¼ ÑƒÐ¿Ð»Ð¾Ñ‚Ð½Ñ‘Ð½Ð½Ð¾Ð³Ð¾ Ð°ÑÑ„Ð°Ð»ÑŒÑ‚Ð°. Ð”Ð¾Ð±Ð°Ð²ÑŒÑ‚Ðµ 5â€“10% Ð·Ð°Ð¿Ð°ÑÐ° Ð½Ð° ÑƒÐ¿Ð»Ð¾Ñ‚Ð½ÐµÐ½Ð¸Ðµ Ð¸ Ð¿Ð¾Ð´Ñ€ÐµÐ·ÐºÑƒ.`,
    },

    tr: {
      name: 'Asfalt Hesap Makinesi',
      shortDescription:
        'Garaj yolu, otopark veya asfalt kaplama iÅŸi iÃ§in kaÃ§ ton asfalta ihtiyacÄ±nÄ±z olduÄŸunu hesaplayÄ±n.',
      helpTexts: {
        density: 'Standart sÄ±cak asfalt yoÄŸunluÄŸu genellikle 140â€“150 lb/ftÂ³ arasÄ±ndadÄ±r.',
        pricePerTon: 'Ä°steÄŸe baÄŸlÄ± â€” maliyet tahminini gizlemek iÃ§in boÅŸ bÄ±rakÄ±n.',
      },
      article: `## Asfalt Hesap Makinesi NasÄ±l KullanÄ±lÄ±r

AlanÄ±n uzunluÄŸunu, geniÅŸliÄŸini ve istenen derinliÄŸi girin. Konut giriÅŸleri genellikle 5â€“10 cm sÄ±kÄ±ÅŸtÄ±rÄ±lmÄ±ÅŸ asfalt gerektirir. Fire iÃ§in %5â€“10 ekleyin.`,
    },

    ar: {
      name: 'Ø­Ø§Ø³Ø¨Ø© Ø§Ù„Ø£Ø³ÙÙ„Øª',
      shortDescription:
        'Ø§Ø­Ø³Ø¨ ÙƒÙ…ÙŠØ© Ø§Ù„Ø£Ø³ÙÙ„Øª Ø¨Ø§Ù„Ø·Ù† Ø§Ù„ØªÙŠ ØªØ­ØªØ§Ø¬Ù‡Ø§ Ù„Ù…Ù…Ø± Ø§Ù„Ø³ÙŠØ§Ø±Ø§Øª Ø£Ùˆ Ù…ÙˆÙ‚Ù Ø§Ù„Ø³ÙŠØ§Ø±Ø§Øª Ø£Ùˆ Ø£Ø¹Ù…Ø§Ù„ Ø§Ù„Ø±ØµÙ.',
      helpTexts: {
        density: 'ÙƒØ«Ø§ÙØ© Ø§Ù„Ø£Ø³ÙÙ„Øª Ø§Ù„Ø³Ø§Ø®Ù† Ø§Ù„Ù‚ÙŠØ§Ø³ÙŠ ØªØªØ±Ø§ÙˆØ­ Ø¹Ø§Ø¯Ø© Ø¨ÙŠÙ† 140â€“150 Ø±Ø·Ù„/Ù‚Ø¯Ù… Ù…ÙƒØ¹Ø¨.',
        pricePerTon: 'Ø§Ø®ØªÙŠØ§Ø±ÙŠ â€” Ø§ØªØ±ÙƒÙ‡ ÙØ§Ø±ØºØ§Ù‹ Ù„Ø¥Ø®ÙØ§Ø¡ ØªÙ‚Ø¯ÙŠØ± Ø§Ù„ØªÙƒÙ„ÙØ©.',
      },
      article: `## ÙƒÙŠÙÙŠØ© Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø­Ø§Ø³Ø¨Ø© Ø§Ù„Ø£Ø³ÙÙ„Øª

Ø£Ø¯Ø®Ù„ Ø·ÙˆÙ„ ÙˆØ¹Ø±Ø¶ Ø§Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ù…Ø±Ø§Ø¯ Ø±ØµÙÙ‡Ø§ØŒ Ø¨Ø§Ù„Ø¥Ø¶Ø§ÙØ© Ø¥Ù„Ù‰ Ø§Ù„Ø³Ù…Ùƒ Ø§Ù„Ù…Ø·Ù„ÙˆØ¨. ØªØªØ·Ù„Ø¨ Ù…Ù…Ø±Ø§Øª Ø§Ù„Ø³ÙŠØ§Ø±Ø§Øª Ø§Ù„Ø³ÙƒÙ†ÙŠØ© Ø¹Ø§Ø¯Ø© Ø¹Ù…Ù‚Ø§Ù‹ Ù…Ø¶ØºÙˆØ·Ø§Ù‹ ÙŠØªØ±Ø§ÙˆØ­ Ø¨ÙŠÙ† 5 Ø¥Ù„Ù‰ 10 Ø³Ù… (2 Ø¥Ù„Ù‰ 4 Ø¨ÙˆØµØ§Øª).`,
    },

    hi: {
      name: 'à¤¡à¤¾à¤®à¤° à¤•à¥ˆà¤²à¤•à¥à¤²à¥‡à¤Ÿà¤°',
      shortDescription:
        'à¤¡à¥à¤°à¤¾à¤‡à¤µà¤µà¥‡, à¤ªà¤¾à¤°à¥à¤•à¤¿à¤‚à¤— à¤¸à¥à¤¥à¤² à¤¯à¤¾ à¤¸à¤¡à¤¼à¤• à¤¨à¤¿à¤°à¥à¤®à¤¾à¤£ à¤•à¥‡ à¤²à¤¿à¤ à¤†à¤µà¤¶à¥à¤¯à¤• à¤¡à¤¾à¤®à¤° (à¤Ÿà¤¨à¥‹à¤‚ à¤®à¥‡à¤‚) à¤•à¥€ à¤—à¤£à¤¨à¤¾ à¤•à¤°à¥‡à¤‚à¥¤',
      helpTexts: {
        density: 'à¤®à¤¾à¤¨à¤• à¤¹à¥‰à¤Ÿ-à¤®à¤¿à¤•à¥à¤¸ à¤¡à¤¾à¤®à¤° à¤•à¤¾ à¤˜à¤¨à¤¤à¥à¤µ à¤†à¤®à¤¤à¥Œà¤° à¤ªà¤° 140â€“150 lb/ftÂ³ à¤¹à¥‹à¤¤à¤¾ à¤¹à¥ˆà¥¤',
        pricePerTon: 'à¤µà¥ˆà¤•à¤²à¥à¤ªà¤¿à¤• â€” à¤²à¤¾à¤—à¤¤ à¤…à¤¨à¥à¤®à¤¾à¤¨ à¤›à¤¿à¤ªà¤¾à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤–à¤¾à¤²à¥€ à¤›à¥‹à¤¡à¤¼à¥‡à¤‚à¥¤',
      },
      article: `## à¤¡à¤¾à¤®à¤° à¤•à¥ˆà¤²à¤•à¥à¤²à¥‡à¤Ÿà¤° à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¥ˆà¤¸à¥‡ à¤•à¤°à¥‡à¤‚

à¤ªà¤•à¥à¤•à¥€ à¤•à¥€ à¤œà¤¾à¤¨à¥‡ à¤µà¤¾à¤²à¥€ à¤œà¤—à¤¹ à¤•à¥€ à¤²à¤‚à¤¬à¤¾à¤ˆ, à¤šà¥Œà¤¡à¤¼à¤¾à¤ˆ à¤”à¤° à¤µà¤¾à¤‚à¤›à¤¿à¤¤ à¤—à¤¹à¤°à¤¾à¤ˆ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚à¥¤ à¤†à¤µà¤¾à¤¸à¥€à¤¯ à¤¡à¥à¤°à¤¾à¤‡à¤µà¤µà¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤†à¤®à¤¤à¥Œà¤° à¤ªà¤° 2 à¤¸à¥‡ 4 à¤‡à¤‚à¤š à¤®à¥‹à¤Ÿà¤¾à¤ˆ à¤•à¥€ à¤†à¤µà¤¶à¥à¤¯à¤•à¤¤à¤¾ à¤¹à¥‹à¤¤à¥€ à¤¹à¥ˆà¥¤`,
    },

    zh: {
      name: 'æ²¥é’è®¡ç®—å™¨',
      shortDescription:
        'è®¡ç®—è½¦é“ã€åœè½¦åœºæˆ–é“ºè·¯å·¥ç¨‹æ‰€éœ€çš„æ²¥é’å¨æ•°ã€‚è¾“å…¥é•¿åº¦ã€å®½åº¦å’ŒåŽšåº¦å³å¯èŽ·å¾—å³æ—¶ä¼°ç®—ã€‚',
      helpTexts: {
        density: 'æ ‡å‡†çƒ­æ‹Œæ²¥é’å¯†åº¦é€šå¸¸ä¸º 140â€“150 lb/ftÂ³ (çº¦ 2.24â€“2.4 å¨/mÂ³)ã€‚',
        pricePerTon: 'å¯é€‰ â€” ç•™ç©ºå¯éšè—è´¹ç”¨ä¼°ç®—ã€‚',
      },
      article: `## å¦‚ä½•ä½¿ç”¨æ²¥é’è®¡ç®—å™¨

è¾“å…¥é“ºè®¾åŒºåŸŸçš„é•¿å®½ä»¥åŠåŽ‹å®žåŽçš„åŽšåº¦ã€‚ä½å®…è½¦é“é€šå¸¸éœ€è¦ 5â€“10 åŽ˜ç±³ï¼ˆ2â€“4 è‹±å¯¸ï¼‰åŽšåº¦ã€‚å»ºè®®æ·»åŠ  5%â€“10% çš„æŸè€—ç³»æ•°ä»¥å¼¥è¡¥è¾¹ç¼˜ä¿®æ•´å’Œç¢¾åŽ‹æŸè€—ã€‚`,
    },

    ja: {
      name: 'ã‚¢ã‚¹ãƒ•ã‚¡ãƒ«ãƒˆè¨ˆç®—æ©Ÿ',
      shortDescription:
        'è»Šé“ã€é§è»Šå ´ã€èˆ—è£…å·¥äº‹ã«å¿…è¦ãªã‚¢ã‚¹ãƒ•ã‚¡ãƒ«ãƒˆã®ãƒˆãƒ³æ•°ã‚’è¨ˆç®—ã—ã¾ã™ã€‚',
      helpTexts: {
        density: 'æ¨™æº–çš„ãªåŠ ç†±ã‚¢ã‚¹ãƒ•ã‚¡ãƒ«ãƒˆæ··åˆç‰©ã®å¯†åº¦ã¯é€šå¸¸ 140â€“150 lb/ftÂ³ï¼ˆç´„2.3 t/mÂ³ï¼‰ã§ã™ã€‚',
        pricePerTon: 'ä»»æ„ â€” ã‚³ã‚¹ãƒˆè¦‹ç©ã‚‚ã‚Šã‚’éžè¡¨ç¤ºã«ã™ã‚‹å ´åˆã¯ç©ºç™½ã®ã¾ã¾ã«ã—ã¦ãã ã•ã„ã€‚',
      },
      article: `## ã‚¢ã‚¹ãƒ•ã‚¡ãƒ«ãƒˆè¨ˆç®—æ©Ÿã®ä½¿ã„æ–¹

èˆ—è£…ã™ã‚‹å ´æ‰€ã®é•·ã•ã€å¹…ã€åŽšã•ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚ä½å®…ã®è»Šé“ã§ã¯é€šå¸¸5ã€œ10cmã®ç· å›ºã‚åŽšã•ãŒå¿…è¦ã§ã™ã€‚`,
    },

    ko: {
      name: 'ì•„ìŠ¤íŒ”íŠ¸ ê³„ì‚°ê¸°',
      shortDescription:
        'ì§„ìž…ë¡œ, ì£¼ì°¨ìž¥, í¬ìž¥ ê³µì‚¬ì— í•„ìš”í•œ ì•„ìŠ¤íŒ”íŠ¸ í†¤ìˆ˜ë¥¼ ê³„ì‚°í•˜ì„¸ìš”.',
      helpTexts: {
        density: 'í‘œì¤€ ê°€ì—´ ì•„ìŠ¤íŒ”íŠ¸ ë°€ë„ëŠ” ì¼ë°˜ì ìœ¼ë¡œ 140â€“150 lb/ftÂ³(ì•½ 2.3 t/mÂ³)ìž…ë‹ˆë‹¤.',
        pricePerTon: 'ì„ íƒì‚¬í•­ â€” ë¹„ìš© ê²¬ì ì„ ìˆ¨ê¸°ë ¤ë©´ ë¹„ì›Œ ë‘ì„¸ìš”.',
      },
      article: `## ì•„ìŠ¤íŒ”íŠ¸ ê³„ì‚°ê¸° ì‚¬ìš© ë°©ë²•

í¬ìž¥í•  êµ¬ì—­ì˜ ê¸¸ì´, ë„ˆë¹„ ë° ì›í•˜ëŠ” ë‘ê»˜ë¥¼ ìž…ë ¥í•˜ì„¸ìš”. ì¼ë°˜ ì£¼íƒ ì§„ìž…ë¡œëŠ” ë³´í†µ 5~10cm ë‘ê»˜ê°€ í•„ìš”í•©ë‹ˆë‹¤.`,
    },
  },

  'demolition-cost-calculator': {
    en: {
      name: 'Demolition Cost Calculator',
      shortDescription:
        'Free demolition cost estimator. Calculate total demolition cost, debris volume, dumpster loads, and permits for houses, garages, commercial buildings, and interior gut-outs.',
      helpTexts: {
        stories: 'Multiplies total building floor area and debris volume.',
        pricePerSqFt: 'Optional â€” override standard regional rates with a specific contractor quote.',
        permitCost: 'Standard municipal demolition permits typically cost $300â€“$1,000.',
      },
      options: {
        structureType: {
          'house-wood-frame': 'Single-Family House (Wood Frame)',
          'house-masonry': 'Single-Family House (Brick / Masonry)',
          'garage-detached': 'Detached Garage',
          'interior-only': 'Interior Gut-Out (Remodel)',
          'commercial-light': 'Commercial Building (Light Steel)',
          'commercial-heavy': 'Commercial Building (Heavy Concrete)',
          'shed': 'Shed / Small Outbuilding',
          'pool': 'Swimming Pool',
        },
        method: {
          'mechanical': 'Mechanical (Excavator / Heavy Equipment)',
          'manual': 'Manual (Hand Tools / Restricted Access)',
          'selective': 'Selective (Deconstruction & Salvage)',
        },
      },
      article: `## How to Use the Demolition Cost Calculator

This calculator provides an instant, accurate estimate of demolition costs for residential and commercial structures based on current contractor and RSMeans cost data.

1. **Select Structure Type:** Choose the closest match to your building (Wood-frame house, brick/masonry home, detached garage, interior gut-out, commercial building, shed, or pool).
2. **Enter Footprint Area:** Input the square footage (or square meters) of the ground floor footprint.
3. **Select Stories:** For multi-story buildings, the calculator automatically multiplies the footprint area to compute total square footage and total debris volume.
4. **Choose Demolition Method:**
   - **Mechanical (Standard):** Heavy equipment (excavator, backhoe) â€” fastest and most economical.
   - **Manual:** Hand tools and sledgehammers for tight urban lots with restricted heavy machinery access (+50% labor).
   - **Selective Deconstruction:** Careful dismantling to salvage antique lumber, fixtures, or architectural elements (+35% labor).
5. **Toggle Hauling & Permits:** Include or exclude 30-yard dumpster hauling fees ($550/load average) and city municipal permit fees.

---

## 2024 National Average Demolition Costs per Square Foot

| Structure Type | Typical Cost / Sq Ft | Estimated Total (Average Size) |
|---|---|---|
| **Wood-Frame House** | $4.50 â€“ $8.00 / sq ft | $9,000 â€“ $18,000 (1,500 sq ft) |
| **Brick / Masonry House** | $7.00 â€“ $13.00 / sq ft | $14,000 â€“ $26,000 (1,500 sq ft) |
| **Detached Garage** | $3.50 â€“ $6.50 / sq ft | $2,000 â€“ $4,500 (500 sq ft) |
| **Interior Gut-Out** | $2.50 â€“ $5.50 / sq ft | $3,500 â€“ $8,500 (1,500 sq ft) |
| **Commercial (Light Steel)** | $5.00 â€“ $10.00 / sq ft | $25,000 â€“ $60,000 (5,000 sq ft) |
| **Commercial (Heavy Concrete)** | $9.00 â€“ $18.00 / sq ft | $50,000 â€“ $120,000 (5,000 sq ft) |
| **Shed / Outbuilding** | $2.00 â€“ $4.00 / sq ft | $500 â€“ $1,500 (200 sq ft) |
| **In-Ground Pool** | $6.00 â€“ $14.00 / sq ft | $4,500 â€“ $12,000 (600 sq ft) |

---

## Demolition Cost Calculation Formula

\`\`\`
1. Total Structure Floor Area = Footprint Area Ã— Number of Stories
2. Base Labor & Machinery Cost = Total Floor Area Ã— Base Rate ($/sq ft) Ã— Method Multiplier
3. Total Debris Volume (cu yd) = Total Floor Area Ã— Structure Debris Factor
4. Estimated Debris Weight (tons) = Debris Volume (cu yd) Ã— Density Factor
5. 30-Yard Dumpsters Needed = Ceiling(Debris Volume Ã· 30 cu yd)
6. Debris Hauling & Disposal Cost = Dumpster Loads Ã— $550
7. Estimated Total Cost (Midpoint) = Labor & Machinery + Debris Hauling + Permits
8. Estimated Range = Midpoint Â± 15% (Low / High Estimate)
\`\`\`

---

## Frequently Asked Questions (FAQ)

### How much does it cost to demolish a 1,500 sq ft house?
Demolishing a 1,500 sq ft wood-frame house typically costs **$10,000 to $18,000** including heavy equipment labor, 5 to 7 roll-off dumpsters for debris disposal, and municipal permit fees. Masonry or brick structures range from **$15,000 to $28,000**.

### What factors increase house demolition costs?
1. **Asbestos or Lead Abatement:** If testing detects asbestos siding, pipe wrap, or flooring, certified abatement contractors are required by law, adding $2,000 to $15,000+.
2. **Foundation Removal:** Breaking and hauling away a thick concrete slab or full basement foundation adds $2.00 to $4.00 per square foot.
3. **Restricted Lot Access:** Sites close to power lines, neighboring homes, or narrow urban alleys require slower manual deconstruction.
4. **Utility Disconnections:** Gas, electric, sewer, and water lines must be formally capped and inspected before work begins ($500â€“$2,000).`,
    },

    es: {
      name: 'Calculadora de Costo de DemoliciÃ³n',
      shortDescription:
        'Calculadora gratuita de costos de demoliciÃ³n. Estima costos de derribo de casas, garajes, edificios y reformas interiores con transporte de escombros y permisos.',
      helpTexts: {
        stories: 'Multiplica el Ã¡rea total construida y el volumen de escombros.',
        pricePerSqFt: 'Opcional: reemplaza las tarifas estÃ¡ndar con el presupuesto de tu contratista.',
        permitCost: 'Los permisos municipales de demoliciÃ³n suelen costar entre $300 y $1,000.',
      },
      options: {
        structureType: {
          'house-wood-frame': 'Casa unifamiliar (Estructura de madera)',
          'house-masonry': 'Casa unifamiliar (Ladrillo / MamposterÃ­a)',
          'garage-detached': 'Garaje independiente',
          'interior-only': 'DemoliciÃ³n interior (Reforma)',
          'commercial-light': 'Edificio comercial (Estructura ligera)',
          'commercial-heavy': 'Edificio comercial (HormigÃ³n pesado)',
          'shed': 'Cobertizo / Caseta',
          'pool': 'Piscina',
        },
        method: {
          'mechanical': 'MecÃ¡nico (Excavadora / Maquinaria pesada)',
          'manual': 'Manual (Herramientas manuales / Acceso estrecho)',
          'selective': 'Selectivo (Desmantelamiento y reciclaje)',
        },
      },
      article: `## CÃ³mo usar la Calculadora de Costos de DemoliciÃ³n

Selecciona el tipo de estructura, ingresa el Ã¡rea de la planta, el nÃºmero de pisos y el mÃ©todo de demoliciÃ³n para obtener una estimaciÃ³n completa y detallada de mano de obra, contenedores de escombros y permisos municipales.`,
    },

    pt: {
      name: 'Calculadora de Custo de DemoliÃ§Ã£o',
      shortDescription:
        'Calculadora gratuita de custos de demoliÃ§Ã£o. Calcule custos para demolir casas, garagens, prÃ©dios comerciais e reformas com caÃ§ambas de entulho e taxas.',
      helpTexts: {
        stories: 'Multiplica a Ã¡rea total construÃ­da e o volume de entulho.',
        pricePerSqFt: 'Opcional â€” substitua a estimativa padrÃ£o pela cotaÃ§Ã£o do seu empreiteiro.',
        permitCost: 'LicenÃ§as municipais de demoliÃ§Ã£o normalmente custam entre $300 e $1.000.',
      },
      options: {
        structureType: {
          'house-wood-frame': 'Casa Unifamiliar (Estrutura de Madeira)',
          'house-masonry': 'Casa Unifamiliar (Alvenaria / Tijolo)',
          'garage-detached': 'Garagem Independente',
          'interior-only': 'DemoliÃ§Ã£o Interior (Reforma)',
          'commercial-light': 'EdifÃ­cio Comercial (Estrutura MetÃ¡lica)',
          'commercial-heavy': 'EdifÃ­cio Comercial (Concreto Pesado)',
          'shed': 'GalpÃ£o / DepÃ³sito Pequeno',
          'pool': 'Piscina',
        },
        method: {
          'mechanical': 'MecÃ¢nico (Escavadeira / MaquinÃ¡rio Pesado)',
          'manual': 'Manual (Ferramentas Manuais / Acesso Restrito)',
          'selective': 'Seletivo (DesconstruÃ§Ã£o e Reaproveitamento)',
        },
      },
      article: `## Como usar a Calculadora de Custo de DemoliÃ§Ã£o

Selecione o tipo de construÃ§Ã£o, informe a Ã¡rea da planta, o nÃºmero de andares e o mÃ©todo de demoliÃ§Ã£o. Obtenha estimativas instantÃ¢neas de custos de mÃ£o de obra, caÃ§ambas e licenÃ§as.`,
    },

    fr: {
      name: 'Calculateur de CoÃ»t de DÃ©molition',
      shortDescription:
        'Estimateur gratuit de coÃ»t de dÃ©molition. Calculez le coÃ»t de dÃ©molition de maisons, garages, bÃ¢timents commerciaux et curage intÃ©rieur.',
      helpTexts: {
        stories: 'Multiplie la surface totale de plancher et le volume de gravats.',
        pricePerSqFt: 'Optionnel â€” remplacez le tarif standard par le devis de votre entrepreneur.',
        permitCost: 'Les permis municipaux coÃ»tent gÃ©nÃ©ralement entre 300 $ et 1 000 $.',
      },
      options: {
        structureType: {
          'house-wood-frame': 'Maison individuelle (Ossature bois)',
          'house-masonry': 'Maison individuelle (Brique / MaÃ§onnerie)',
          'garage-detached': 'Garage indÃ©pendant',
          'interior-only': 'Curage intÃ©rieur (RÃ©novation)',
          'commercial-light': 'BÃ¢timent commercial (Structure mÃ©tallique)',
          'commercial-heavy': 'BÃ¢timent commercial (BÃ©ton armÃ©)',
          'shed': 'Abri de jardin / DÃ©pendance',
          'pool': 'Piscine',
        },
        method: {
          'mechanical': 'MÃ©canique (Pelle mÃ©canique / Engins lourds)',
          'manual': 'Manuel (Outils manuels / AccÃ¨s restreint)',
          'selective': 'SÃ©lectif (DÃ©construction et rÃ©cupÃ©ration)',
        },
      },
      article: `## Comment utiliser le Calculateur de DÃ©molition

SÃ©lectionnez le type de bÃ¢timent, indiquez la superficie au sol, le nombre d'Ã©tages et la mÃ©thode pour obtenir une estimation complÃ¨te avec Ã©vacuation des gravats et permis.`,
    },

    de: {
      name: 'Abrisskosten-Rechner',
      shortDescription:
        'Kostenloser Abrisskostenrechner. Berechnen Sie die Kosten fÃ¼r den Abriss von HÃ¤usern, Garagen, Gewerbebauten und Entkernungen.',
      helpTexts: {
        stories: 'Multipliziert die gesamte GeschossflÃ¤che und das Schuttvolumen.',
        pricePerSqFt: 'Optional â€” StandardschÃ¤tzung durch Angebot Ihres Bauunternehmers ersetzen.',
        permitCost: 'Baugenehmigungen fÃ¼r den Abriss kosten typischerweise 300â€“1.000 $.',
      },
      options: {
        structureType: {
          'house-wood-frame': 'Einfamilienhaus (Holzrahmenbau)',
          'house-masonry': 'Einfamilienhaus (Mauerwerk / Ziegel)',
          'garage-detached': 'Freistehende Garage',
          'interior-only': 'Innenentkernung (Sanierung)',
          'commercial-light': 'GewerbegebÃ¤ude (Leichtbau/Stahl)',
          'commercial-heavy': 'GewerbegebÃ¤ude (Stahlbeton)',
          'shed': 'Schuppen / NebengebÃ¤ude',
          'pool': 'Schwimmbecken / Pool',
        },
        method: {
          'mechanical': 'Maschinell (Bagger / Schwere Maschinen)',
          'manual': 'Manuell (Handwerkzeuge / Schwer zugÃ¤nglich)',
          'selective': 'Selektiv (RÃ¼ckbau und Baustoffwiederverwendung)',
        },
      },
      article: `## So nutzen Sie den Abrisskosten-Rechner

WÃ¤hlen Sie die GebÃ¤udeart, geben Sie die GrundflÃ¤che und Stockwerke ein, um eine detaillierte KostenschÃ¤tzung mit Schuttentsorgung und Genehmigungen zu erhalten.`,
    },

    it: {
      name: 'Calcolatore Costi Demolizione',
      shortDescription:
        'Calcolatore gratuito dei costi di demolizione. Stima i costi per demolire case, garage, edifici commerciali e ristrutturazioni interne.',
      helpTexts: {
        stories: 'Moltiplica la superficie totale e il volume delle macerie.',
        pricePerSqFt: 'Opzionale â€” sostituisci la tariffa standard con il preventivo dell\'impresa.',
        permitCost: 'I permessi comunali di demolizione costano solitamente $300â€“$1.000.',
      },
      options: {
        structureType: {
          'house-wood-frame': 'Casa unifamiliare (Struttura in legno)',
          'house-masonry': 'Casa unifamiliare (Muratura / Mattoni)',
          'garage-detached': 'Garage indipendente',
          'interior-only': 'Demolizione interna (Ristrutturazione)',
          'commercial-light': 'Edificio commerciale (Acciaio leggero)',
          'commercial-heavy': 'Edificio commerciale (Cemento armato)',
          'shed': 'Capanno / Rimessa',
          'pool': 'Piscina',
        },
        method: {
          'mechanical': 'Meccanico (Escavatore / Macchinari pesanti)',
          'manual': 'Manuale (Attrezzi a mano / Accesso ristretto)',
          'selective': 'Selettivo (Decostruzione e recupero materiali)',
        },
      },
      article: `## Come usare il Calcolatore di Demolizione

Seleziona il tipo di struttura, inserisci l'area di sedime e il numero di piani per una stima completa e immediata.`,
    },

    nl: {
      name: 'Sloopkostencalculator',
      shortDescription:
        'Gratis sloopkostencalculator. Schat kosten voor het slopen van huizen, garages, bedrijfspanden en binnenstrippen.',
      helpTexts: {
        stories: 'Vermenigvuldigt het totale vloeroppervlak en het puinvolume.',
        pricePerSqFt: 'Optioneel â€” overschrijf standaardtarieven met een aannemersofferte.',
        permitCost: 'Sloopvergunningen kosten doorgaans $300 tot $1.000.',
      },
      options: {
        structureType: {
          'house-wood-frame': 'Vrijstaand huis (Houtskeletbouw)',
          'house-masonry': 'Vrijstaand huis (Metselwerk / Baksteen)',
          'garage-detached': 'Vrijstaande garage',
          'interior-only': 'Binnenstrippen (Renovatie)',
          'commercial-light': 'Commercieel gebouw (Lichte staalbouw)',
          'commercial-heavy': 'Commercieel gebouw (Zwaar beton)',
          'shed': 'Schuur / Bijgebouw',
          'pool': 'Zwembad',
        },
        method: {
          'mechanical': 'Mechanisch (Graafmachine / Zwaar materieel)',
          'manual': 'Handmatig (Handgereedschap / Moeilijk bereikbaar)',
          'selective': 'Selectief (Circulair slopen en hergebruik)',
        },
      },
      article: `## Hoe gebruikt u de Sloopkostencalculator

Kies het gebouwtype, voer oppervlakte en aantal verdiepingen in voor een directe kostenraming met puinafvoer.`,
    },

    pl: {
      name: 'Kalkulator KosztÃ³w Wyburzenia',
      shortDescription:
        'Darmowy kalkulator kosztÃ³w wyburzeÅ„. Oblicz koszty rozbiÃ³rki domu, garaÅ¼u, budynku komercyjnego i prac wyburzeniowych.',
      helpTexts: {
        stories: 'MnoÅ¼y caÅ‚kowitÄ… powierzchniÄ™ uÅ¼ytkowÄ… i objÄ™toÅ›Ä‡ gruzu.',
        pricePerSqFt: 'Opcjonalnie â€” zastÄ…p stawkÄ™ wycenÄ… od wykonawcy.',
        permitCost: 'Pozwolenia na rozbiÃ³rkÄ™ kosztujÄ… zwykle 300â€“1000 USD.',
      },
      options: {
        structureType: {
          'house-wood-frame': 'Dom jednorodzinny (Szkielet drewniany)',
          'house-masonry': 'Dom jednorodzinny (Murowany / CegÅ‚a)',
          'garage-detached': 'GaraÅ¼ wolnostojÄ…cy',
          'interior-only': 'Wyburzenia wewnÄ™trzne (Remont)',
          'commercial-light': 'Budynek komercyjny (Konstrukcja lekka)',
          'commercial-heavy': 'Budynek komercyjny (Å»elbet)',
          'shed': 'Szopa / Budynek gospodarczy',
          'pool': 'Basen',
        },
        method: {
          'mechanical': 'Mechaniczna (Koparka / CiÄ™Å¼ki sprzÄ™t)',
          'manual': 'RÄ™czna (NarzÄ™dzia rÄ™czne / Trudny dostÄ™p)',
          'selective': 'Selektywna (DemontaÅ¼ z odzyskiem materiaÅ‚Ã³w)',
        },
      },
      article: `## Jak korzystaÄ‡ z Kalkulatora KosztÃ³w Wyburzenia

Wybierz typ obiektu, wprowadÅº powierzchniÄ™ zabudowy i liczbÄ™ piÄ™ter, aby otrzymaÄ‡ natychmiastowe oszacowanie kosztÃ³w.`,
    },

    ru: {
      name: 'ÐšÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€ Ð¡Ñ‚Ð¾Ð¸Ð¼Ð¾ÑÑ‚Ð¸ Ð¡Ð½Ð¾ÑÐ°',
      shortDescription:
        'Ð‘ÐµÑÐ¿Ð»Ð°Ñ‚Ð½Ñ‹Ð¹ ÐºÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€ ÑÑ‚Ð¾Ð¸Ð¼Ð¾ÑÑ‚Ð¸ ÑÐ½Ð¾ÑÐ° Ð¸ Ð´ÐµÐ¼Ð¾Ð½Ñ‚Ð°Ð¶Ð°. Ð Ð°ÑÑÑ‡Ð¸Ñ‚Ð°Ð¹Ñ‚Ðµ ÑÑ‚Ð¾Ð¸Ð¼Ð¾ÑÑ‚ÑŒ ÑÐ½Ð¾ÑÐ° Ð´Ð¾Ð¼Ð°, Ð³Ð°Ñ€Ð°Ð¶Ð°, Ð·Ð´Ð°Ð½Ð¸Ñ Ð¸ Ð²Ñ‹Ð²Ð¾Ð·Ð° Ð¼ÑƒÑÐ¾Ñ€Ð°.',
      helpTexts: {
        stories: 'Ð£Ð¼Ð½Ð¾Ð¶Ð°ÐµÑ‚ Ð¾Ð±Ñ‰ÑƒÑŽ Ð¿Ð»Ð¾Ñ‰Ð°Ð´ÑŒ Ð·Ð´Ð°Ð½Ð¸Ñ Ð¸ Ð¾Ð±ÑŠÑ‘Ð¼ ÑÑ‚Ñ€Ð¾Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾Ð³Ð¾ Ð¼ÑƒÑÐ¾Ñ€Ð°.',
        pricePerSqFt: 'ÐÐµÐ¾Ð±ÑÐ·Ð°Ñ‚ÐµÐ»ÑŒÐ½Ð¾ â€” Ð·Ð°Ð¼ÐµÐ½Ð¸Ñ‚Ðµ ÑÑ‚Ð°Ð½Ð´Ð°Ñ€Ñ‚Ð½Ñ‹Ð¹ Ñ‚Ð°Ñ€Ð¸Ñ„ Ñ€Ð°ÑÑ†ÐµÐ½ÐºÐ¾Ð¹ Ð¿Ð¾Ð´Ñ€ÑÐ´Ñ‡Ð¸ÐºÐ°.',
        permitCost: 'Ð Ð°Ð·Ñ€ÐµÑˆÐµÐ½Ð¸Ðµ Ð½Ð° ÑÐ½Ð¾Ñ Ð¾Ð±Ñ‹Ñ‡Ð½Ð¾ ÑÑ‚Ð¾Ð¸Ñ‚ Ð¾Ñ‚ 300 Ð´Ð¾ 1 000 $ Ð² Ð·Ð°Ð²Ð¸ÑÐ¸Ð¼Ð¾ÑÑ‚Ð¸ Ð¾Ñ‚ Ñ€ÐµÐ³Ð¸Ð¾Ð½Ð°.',
      },
      options: {
        structureType: {
          'house-wood-frame': 'Ð§Ð°ÑÑ‚Ð½Ñ‹Ð¹ Ð´Ð¾Ð¼ (Ð”ÐµÑ€ÐµÐ²ÑÐ½Ð½Ñ‹Ð¹ ÐºÐ°Ñ€ÐºÐ°Ñ)',
          'house-masonry': 'Ð§Ð°ÑÑ‚Ð½Ñ‹Ð¹ Ð´Ð¾Ð¼ (ÐšÐ¸Ñ€Ð¿Ð¸Ñ‡ / Ð‘Ð»Ð¾ÐºÐ¸)',
          'garage-detached': 'ÐžÑ‚Ð´ÐµÐ»ÑŒÐ½Ð¾ ÑÑ‚Ð¾ÑÑ‰Ð¸Ð¹ Ð³Ð°Ñ€Ð°Ð¶',
          'interior-only': 'Ð’Ð½ÑƒÑ‚Ñ€ÐµÐ½Ð½Ð¸Ð¹ Ð´ÐµÐ¼Ð¾Ð½Ñ‚Ð°Ð¶ (Ð ÐµÐ¼Ð¾Ð½Ñ‚)',
          'commercial-light': 'ÐšÐ¾Ð¼Ð¼ÐµÑ€Ñ‡ÐµÑÐºÐ¾Ðµ Ð·Ð´Ð°Ð½Ð¸Ðµ (ÐœÐµÑ‚Ð°Ð»Ð»Ð¾ÐºÐ¾Ð½ÑÑ‚Ñ€ÑƒÐºÑ†Ð¸Ð¸)',
          'commercial-heavy': 'ÐšÐ¾Ð¼Ð¼ÐµÑ€Ñ‡ÐµÑÐºÐ¾Ðµ Ð·Ð´Ð°Ð½Ð¸Ðµ (ÐœÐ¾Ð½Ð¾Ð»Ð¸Ñ‚Ð½Ñ‹Ð¹ Ð¶ÐµÐ»ÐµÐ·Ð¾Ð±ÐµÑ‚Ð¾Ð½)',
          'shed': 'Ð¡Ð°Ñ€Ð°Ð¹ / Ð¥Ð¾Ð·Ð¿Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ°',
          'pool': 'Ð‘Ð°ÑÑÐµÐ¹Ð½',
        },
        method: {
          'mechanical': 'ÐœÐµÑ…Ð°Ð½Ð¸Ð·Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð½Ñ‹Ð¹ (Ð­ÐºÑÐºÐ°Ð²Ð°Ñ‚Ð¾Ñ€ / Ð¡Ð¿ÐµÑ†Ñ‚ÐµÑ…Ð½Ð¸ÐºÐ°)',
          'manual': 'Ð ÑƒÑ‡Ð½Ð¾Ð¹ (Ð ÑƒÑ‡Ð½Ð¾Ð¹ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚ / Ð¡Ñ‚ÐµÑÐ½Ñ‘Ð½Ð½Ñ‹Ðµ ÑƒÑÐ»Ð¾Ð²Ð¸Ñ)',
          'selective': 'Ð¡ÐµÐ»ÐµÐºÑ‚Ð¸Ð²Ð½Ñ‹Ð¹ (Ð Ð°Ð·Ð±Ð¾Ñ€ÐºÐ° Ñ ÑÐ¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸ÐµÐ¼ Ð¼Ð°Ñ‚ÐµÑ€Ð¸Ð°Ð»Ð¾Ð²)',
        },
      },
      article: `## ÐšÐ°Ðº Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒÑÑ ÐºÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€Ð¾Ð¼ ÑÐ½Ð¾ÑÐ°

Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ñ‚Ð¸Ð¿ ÑÑ‚Ñ€Ð¾ÐµÐ½Ð¸Ñ, ÑƒÐºÐ°Ð¶Ð¸Ñ‚Ðµ Ð¿Ð»Ð¾Ñ‰Ð°Ð´ÑŒ Ð¾ÑÐ½Ð¾Ð²Ð°Ð½Ð¸Ñ, ÑÑ‚Ð°Ð¶Ð½Ð¾ÑÑ‚ÑŒ Ð¸ Ð¼ÐµÑ‚Ð¾Ð´ ÑÐ½Ð¾ÑÐ° Ð´Ð»Ñ Ð¿Ð¾Ð»ÑƒÑ‡ÐµÐ½Ð¸Ñ Ñ‚Ð¾Ñ‡Ð½Ð¾Ð³Ð¾ Ñ€Ð°ÑÑ‡Ñ‘Ñ‚Ð° ÑÑ‚Ð¾Ð¸Ð¼Ð¾ÑÑ‚Ð¸.`,
    },

    tr: {
      name: 'YÄ±kÄ±m Maliyeti HesaplayÄ±cÄ±sÄ±',
      shortDescription:
        'Ãœcretsiz bina yÄ±kÄ±m maliyeti hesaplayÄ±cÄ±sÄ±. Ev, garaj, ticari bina ve iÃ§ mekan kÄ±rÄ±m maliyetlerini moloz nakliyesi dahil hesaplayÄ±n.',
      helpTexts: {
        stories: 'Toplam kat alanÄ±nÄ± ve moloz hacmini kat sayÄ±sÄ±yla Ã§arpar.',
        pricePerSqFt: 'Ä°steÄŸe baÄŸlÄ± â€” standart birim fiyatÄ± mÃ¼teahhit teklifinizle deÄŸiÅŸtirin.',
        permitCost: 'YÄ±kÄ±m ruhsatÄ± ve izin masraflarÄ± genellikle 300â€“1.000 $ arasÄ±ndadÄ±r.',
      },
      options: {
        structureType: {
          'house-wood-frame': 'MÃ¼stakil Ev (AhÅŸap Karkas)',
          'house-masonry': 'MÃ¼stakil Ev (TuÄŸla / YÄ±ÄŸma)',
          'garage-detached': 'MÃ¼stakil Garaj',
          'interior-only': 'Ä°Ã§ Mekan KÄ±rÄ±mÄ± (Tadilat)',
          'commercial-light': 'Ticari Bina (Hafif Ã‡elik)',
          'commercial-heavy': 'Ticari Bina (AÄŸÄ±r Betonarme)',
          'shed': 'KulÃ¼be / Depo',
          'pool': 'YÃ¼zme Havuzu',
        },
        method: {
          'mechanical': 'Mekanik (EkskavatÃ¶r / AÄŸÄ±r Ä°ÅŸ Makinesi)',
          'manual': 'Manuel (El Aletleri / Dar Alan)',
          'selective': 'SeÃ§ici (Geri DÃ¶nÃ¼ÅŸÃ¼mlÃ¼ / Malzeme Kurtarma)',
        },
      },
      article: `## YÄ±kÄ±m Maliyeti HesaplayÄ±cÄ±sÄ± NasÄ±l KullanÄ±lÄ±r

YapÄ± tÃ¼rÃ¼nÃ¼, taban alanÄ±nÄ± ve kat sayÄ±sÄ±nÄ± girerek iÅŸÃ§ilik, moloz nakliyesi ve izin maliyetlerinin detaylÄ± dÃ¶kÃ¼mÃ¼nÃ¼ anÄ±nda gÃ¶rÃ¼n.`,
    },

    ar: {
      name: 'Ø­Ø§Ø³Ø¨Ø© ØªÙƒÙ„ÙØ© Ø§Ù„Ù‡Ø¯Ù…',
      shortDescription:
        'Ø­Ø§Ø³Ø¨Ø© Ù…Ø¬Ø§Ù†ÙŠØ© Ù„ØªÙ‚Ø¯ÙŠØ± ØªÙƒØ§Ù„ÙŠÙ Ø§Ù„Ù‡Ø¯Ù… ÙˆØ¥Ø²Ø§Ù„Ø© Ø§Ù„Ø£Ù†Ù‚Ø§Ø¶. Ø§Ø­Ø³Ø¨ ØªÙƒÙ„ÙØ© Ù‡Ø¯Ù… Ø§Ù„Ù…Ù†Ø§Ø²Ù„ ÙˆØ§Ù„Ù…Ø¨Ø§Ù†ÙŠ Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ© Ù…Ø¹ Ø§Ù„Ø­Ø§ÙˆÙŠØ§Øª ÙˆØ§Ù„ØªØ±Ø§Ø®ÙŠØµ.',
      helpTexts: {
        stories: 'ÙŠØ¶Ø§Ø¹Ù Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ø§Ù„Ù…Ø³Ø§Ø­Ø© ÙˆØ­Ø¬Ù… Ø§Ù„Ø£Ù†Ù‚Ø§Ø¶ Ø¨Ø¹Ø¯Ø¯ Ø§Ù„Ø·ÙˆØ§Ø¨Ù‚.',
        pricePerSqFt: 'Ø§Ø®ØªÙŠØ§Ø±ÙŠ â€” Ø§Ø³ØªØ¨Ø¯Ù„ Ø§Ù„Ø³Ø¹Ø± Ø§Ù„ØªÙ‚Ø¯ÙŠØ±ÙŠ Ø¨Ø¹Ø±Ø¶ Ø³Ø¹Ø± Ø§Ù„Ù…Ù‚Ø§ÙˆÙ„ Ø§Ù„Ø®Ø§Øµ Ø¨Ùƒ.',
        permitCost: 'ØªÙƒØ§Ù„ÙŠÙ ØªØ±Ø§Ø®ÙŠØµ Ø§Ù„Ù‡Ø¯Ù… Ø§Ù„Ø¨Ù„Ø¯ÙŠØ© ØªØªØ±Ø§ÙˆØ­ Ø¹Ø§Ø¯Ø© Ø¨ÙŠÙ† 300 Ùˆ1,000 Ø¯ÙˆÙ„Ø§Ø±.',
      },
      options: {
        structureType: {
          'house-wood-frame': 'Ù…Ù†Ø²Ù„ Ø³ÙƒÙ†ÙŠ (Ù‡ÙŠÙƒÙ„ Ø®Ø´Ø¨ÙŠ)',
          'house-masonry': 'Ù…Ù†Ø²Ù„ Ø³ÙƒÙ†ÙŠ (Ø·ÙˆØ¨ / Ø®Ø±Ø³Ø§Ù†Ø© Ø¨Ù†Ø§Ø¡)',
          'garage-detached': 'Ù…Ø±Ø¢Ø¨ Ø³ÙŠØ§Ø±Ø§Øª Ù…Ù†ÙØµÙ„',
          'interior-only': 'Ù‡Ø¯Ù… Ø¯Ø§Ø®Ù„ÙŠ ÙˆØªØ¬Ø±ÙŠØ¯ (ØªØ¬Ø¯ÙŠØ¯)',
          'commercial-light': 'Ù…Ø¨Ù†Ù‰ ØªØ¬Ø§Ø±ÙŠ (Ù‡ÙŠÙƒÙ„ Ø­Ø¯ÙŠØ¯ÙŠ Ø®ÙÙŠÙ)',
          'commercial-heavy': 'Ù…Ø¨Ù†Ù‰ ØªØ¬Ø§Ø±ÙŠ (Ø®Ø±Ø³Ø§Ù†Ø© Ù…Ø³Ù„Ø­Ø© Ø«Ù‚ÙŠÙ„Ø©)',
          'shed': 'Ù…Ø³ØªÙˆØ¯Ø¹ / Ù…Ù„Ø­Ù‚ ØµØºÙŠØ±',
          'pool': 'Ø­Ù…Ø§Ù… Ø³Ø¨Ø§Ø­Ø©',
        },
        method: {
          'mechanical': 'Ù…ÙŠÙƒØ§Ù†ÙŠÙƒÙŠ (Ø­ÙØ§Ø± / Ù…Ø¹Ø¯Ø§Øª Ø«Ù‚ÙŠÙ„Ø©)',
          'manual': 'ÙŠØ¯ÙˆÙŠ (Ø£Ø¯ÙˆØ§Øª ÙŠØ¯ÙˆÙŠØ© / ÙˆØµÙˆÙ„ Ø¶ÙŠÙ‚)',
          'selective': 'Ø§Ù†ØªÙ‚Ø§Ø¦ÙŠ (ØªÙÙƒÙŠÙƒ ÙˆØ§Ø³ØªØ±Ø¬Ø§Ø¹ Ø§Ù„Ù…ÙˆØ§Ø¯)',
        },
      },
      article: `## ÙƒÙŠÙÙŠØ© Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø­Ø§Ø³Ø¨Ø© ØªÙƒÙ„ÙØ© Ø§Ù„Ù‡Ø¯Ù…

Ø§Ø®ØªØ± Ù†ÙˆØ¹ Ø§Ù„Ù…Ù†Ø´Ø£Ø©ØŒ ÙˆØ£Ø¯Ø®Ù„ Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ø·Ø§Ø¨Ù‚ Ø§Ù„Ø£Ø±Ø¶ÙŠ ÙˆØ¹Ø¯Ø¯ Ø§Ù„Ø·ÙˆØ§Ø¨Ù‚ ÙˆØ·Ø±ÙŠÙ‚Ø© Ø§Ù„Ù‡Ø¯Ù… Ù„Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ ØªÙ‚Ø¯ÙŠØ± ÙÙˆØ±ÙŠ ÙˆØ´Ø§Ù…Ù„ Ù„Ù„ØªÙƒØ§Ù„ÙŠÙ.`,
    },

    hi: {
      name: 'à¤§à¥à¤µà¤‚à¤¸ à¤²à¤¾à¤—à¤¤ à¤•à¥ˆà¤²à¤•à¥à¤²à¥‡à¤Ÿà¤°',
      shortDescription:
        'à¤®à¥à¤«à¤¼à¥à¤¤ à¤§à¥à¤µà¤‚à¤¸ à¤²à¤¾à¤—à¤¤ à¤•à¥ˆà¤²à¤•à¥à¤²à¥‡à¤Ÿà¤°à¥¤ à¤˜à¤°, à¤—à¥ˆà¤°à¥‡à¤œ, à¤µà¤¾à¤£à¤¿à¤œà¥à¤¯à¤¿à¤• à¤­à¤µà¤¨ à¤”à¤° à¤†à¤‚à¤¤à¤°à¤¿à¤• à¤¤à¥‹à¤¡à¤¼à¤«à¥‹à¤¡à¤¼ à¤•à¥€ à¤²à¤¾à¤—à¤¤, à¤®à¤²à¤¬à¤¾ à¤¢à¥à¤²à¤¾à¤ˆ à¤”à¤° à¤ªà¤°à¤®à¤¿à¤Ÿ à¤•à¥€ à¤¤à¥à¤°à¤‚à¤¤ à¤—à¤£à¤¨à¤¾ à¤•à¤°à¥‡à¤‚à¥¤',
      helpTexts: {
        stories: 'à¤•à¥à¤² à¤¨à¤¿à¤°à¥à¤®à¤¿à¤¤ à¤•à¥à¤·à¥‡à¤¤à¥à¤° à¤”à¤° à¤®à¤²à¤¬à¥‡ à¤•à¥€ à¤®à¤¾à¤¤à¥à¤°à¤¾ à¤•à¥‹ à¤®à¤‚à¤œà¤¿à¤²à¥‹à¤‚ à¤¸à¥‡ à¤—à¥à¤£à¤¾ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤',
        pricePerSqFt: 'à¤µà¥ˆà¤•à¤²à¥à¤ªà¤¿à¤• â€” à¤®à¤¾à¤¨à¤• à¤¦à¤° à¤•à¥‹ à¤…à¤ªà¤¨à¥‡ à¤ à¥‡à¤•à¥‡à¤¦à¤¾à¤° à¤•à¥‡ à¤‰à¤¦à¥à¤§à¤°à¤£ à¤¸à¥‡ à¤¬à¤¦à¤²à¥‡à¤‚à¥¤',
        permitCost: 'à¤¨à¤—à¤° à¤¨à¤¿à¤—à¤® à¤§à¥à¤µà¤‚à¤¸ à¤ªà¤°à¤®à¤¿à¤Ÿ à¤†à¤®à¤¤à¥Œà¤° à¤ªà¤° $300 à¤¸à¥‡ $1,000 à¤•à¥‡ à¤¬à¥€à¤š à¤¹à¥‹à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤',
      },
      options: {
        structureType: {
          'house-wood-frame': 'à¤à¤•à¤²-à¤ªà¤°à¤¿à¤µà¤¾à¤° à¤˜à¤° (à¤²à¤•à¤¡à¤¼à¥€ à¤•à¤¾ à¤¢à¤¾à¤‚à¤šà¤¾)',
          'house-masonry': 'à¤à¤•à¤²-à¤ªà¤°à¤¿à¤µà¤¾à¤° à¤˜à¤° (à¤ˆà¤‚à¤Ÿ / à¤šà¤¿à¤¨à¤¾à¤ˆ)',
          'garage-detached': 'à¤…à¤²à¤— à¤—à¥ˆà¤°à¥‡à¤œ',
          'interior-only': 'à¤†à¤‚à¤¤à¤°à¤¿à¤• à¤¤à¥‹à¤¡à¤¼à¤«à¥‹à¤¡à¤¼ (à¤ªà¥à¤¨à¤°à¥à¤¨à¤¿à¤°à¥à¤®à¤¾à¤£)',
          'commercial-light': 'à¤µà¤¾à¤£à¤¿à¤œà¥à¤¯à¤¿à¤• à¤­à¤µà¤¨ (à¤¹à¤²à¥à¤•à¤¾ à¤¸à¥à¤Ÿà¥€à¤²)',
          'commercial-heavy': 'à¤µà¤¾à¤£à¤¿à¤œà¥à¤¯à¤¿à¤• à¤­à¤µà¤¨ (à¤­à¤¾à¤°à¥€ à¤•à¤‚à¤•à¥à¤°à¥€à¤Ÿ)',
          'shed': 'à¤¶à¥‡à¤¡ / à¤›à¥‹à¤Ÿà¤¾ à¤¢à¤¾à¤‚à¤šà¤¾',
          'pool': 'à¤¸à¥à¤µà¤¿à¤®à¤¿à¤‚à¤— à¤ªà¥‚à¤²',
        },
        method: {
          'mechanical': 'à¤¯à¤¾à¤‚à¤¤à¥à¤°à¤¿à¤• (à¤à¤•à¥à¤¸à¤•à¥‡à¤µà¥‡à¤Ÿà¤° / à¤­à¤¾à¤°à¥€ à¤®à¤¶à¥€à¤¨à¤°à¥€)',
          'manual': 'à¤®à¥ˆà¤¨à¥à¤…à¤² (à¤¹à¤¾à¤¥ à¤•à¥‡ à¤”à¤œà¤¾à¤° / à¤¸à¤‚à¤•à¥€à¤°à¥à¤£ à¤ªà¤¹à¥à¤‚à¤š)',
          'selective': 'à¤šà¤¯à¤¨à¤¾à¤¤à¥à¤®à¤• (à¤¸à¤¾à¤®à¤—à¥à¤°à¥€ à¤¬à¤šà¤¾à¤µ à¤”à¤° à¤¨à¤¿à¤°à¤¾à¤•à¤°à¤£)',
        },
      },
      article: `## à¤§à¥à¤µà¤‚à¤¸ à¤²à¤¾à¤—à¤¤ à¤•à¥ˆà¤²à¤•à¥à¤²à¥‡à¤Ÿà¤° à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¥ˆà¤¸à¥‡ à¤•à¤°à¥‡à¤‚

à¤¸à¤‚à¤°à¤šà¤¨à¤¾ à¤•à¤¾ à¤ªà¥à¤°à¤•à¤¾à¤° à¤šà¥à¤¨à¥‡à¤‚, à¤­à¥‚à¤¤à¤² à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¤«à¤² à¤”à¤° à¤®à¤‚à¤œà¤¿à¤²à¥‹à¤‚ à¤•à¥€ à¤¸à¤‚à¤–à¥à¤¯à¤¾ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚, à¤”à¤° à¤¤à¥à¤°à¤‚à¤¤ à¤ªà¥‚à¤°à¥€ à¤²à¤¾à¤—à¤¤, à¤®à¤²à¤¬à¤¾ à¤”à¤° à¤ªà¤°à¤®à¤¿à¤Ÿ à¤•à¤¾ à¤…à¤¨à¥à¤®à¤¾à¤¨ à¤ªà¤¾à¤à¤‚à¥¤`,
    },

    zh: {
      name: 'æ‹†é™¤è´¹ç”¨è®¡ç®—å™¨',
      shortDescription:
        'å…è´¹æˆ¿å±‹æ‹†é™¤è´¹ç”¨è®¡ç®—å™¨ã€‚ä¼°ç®—æˆ¿å±‹ã€è½¦åº“ã€å•†ä¸šå»ºç­‘æ‹†é™¤åŠå®¤å†…æ‰“æ‹†çš„è¯¦ç»†äººå·¥è´¹ã€æ¸…è¿è´¹å’Œè®¸å¯è¯è´¹ç”¨ã€‚',
      helpTexts: {
        stories: 'æ ¹æ®æ¥¼å±‚æ•°è‡ªåŠ¨è®¡ç®—æ€»å»ºç­‘é¢ç§¯åŠå»ºç­‘åžƒåœ¾æ€»é‡ã€‚',
        pricePerSqFt: 'å¯é€‰ â€” ç”¨æ‚¨çš„æ–½å·¥æ‰¿åŒ…å•†æŠ¥ä»·æ›¿ä»£æ ‡å‡†ä¼°ç®—å•ä»·ã€‚',
        permitCost: 'æ ‡å‡†å¸‚æ”¿æ‹†é™¤è®¸å¯è¯è´¹ç”¨é€šå¸¸ä¸º 300 è‡³ 1,000 ç¾Žå…ƒã€‚',
      },
      options: {
        structureType: {
          'house-wood-frame': 'ç‹¬æ ‹ä½å®…ï¼ˆæœ¨ç»“æž„ï¼‰',
          'house-masonry': 'ç‹¬æ ‹ä½å®…ï¼ˆç –çŸ³ / ç Œä½“ç»“æž„ï¼‰',
          'garage-detached': 'ç‹¬ç«‹è½¦åº“',
          'interior-only': 'å®¤å†…æ‰“æ‹†ï¼ˆå±€éƒ¨ç¿»æ–°ï¼‰',
          'commercial-light': 'å•†ä¸šå»ºç­‘ï¼ˆè½»é’¢ç»“æž„ï¼‰',
          'commercial-heavy': 'å•†ä¸šå»ºç­‘ï¼ˆé‡åž‹é’¢ç­‹æ··å‡åœŸï¼‰',
          'shed': 'å°æ£šå±‹ / é™„å±žå»ºç­‘',
          'pool': 'æ¸¸æ³³æ± ',
        },
        method: {
          'mechanical': 'æœºæ¢°æ‹†é™¤ï¼ˆæŒ–æŽ˜æœº / é‡åž‹è®¾å¤‡ï¼‰',
          'manual': 'äººå·¥æ‹†é™¤ï¼ˆæ‰‹åŠ¨å·¥å…· / ç‹­çª„ä½œä¸šé¢ï¼‰',
          'selective': 'é€‰æ‹©æ€§æ‹†é™¤ï¼ˆææ–™å›žæ”¶ä¸Žä¿æŠ¤æ€§æ‹†é™¤ï¼‰',
        },
      },
      article: `## å¦‚ä½•ä½¿ç”¨æ‹†é™¤è´¹ç”¨è®¡ç®—å™¨

é€‰æ‹©å»ºç­‘ç‰©ç±»åž‹ï¼Œè¾“å…¥å åœ°é¢ç§¯ã€æ¥¼å±‚æ•°é‡å’Œæ‹†é™¤æ–¹å¼ï¼Œå³å¯èŽ·å¾—åŒ…æ‹¬äººå·¥æœºæ¢°è´¹ã€æ¸£åœŸåžƒåœ¾æ¸…è¿è´¹å’Œè®¸å¯è¯è´¹ç”¨çš„å®Œæ•´æ˜Žç»†ã€‚`,
    },

    ja: {
      name: 'è§£ä½“å·¥äº‹è²»ç”¨è¨ˆç®—æ©Ÿ',
      shortDescription:
        'ç„¡æ–™ã®å»ºç‰©è§£ä½“è²»ç”¨è¨ˆç®—æ©Ÿã€‚æœ¨é€ ä½å®…ã€RCé€ ã€ã‚¬ãƒ¬ãƒ¼ã‚¸ã€åº—èˆ—å†…è£…è§£ä½“ã®å·¥äº‹è²»ã€å»ƒæå‡¦åˆ†è²»ã€è¨±å¯ç”³è«‹è²»ç”¨ã‚’å³åº§ã«è©¦ç®—ã€‚',
      helpTexts: {
        stories: 'éšŽæ•°ã«å¿œã˜ã¦å»¶åºŠé¢ç©ã¨å»ƒææŽ’å‡ºé‡ã‚’è‡ªå‹•è¨ˆç®—ã—ã¾ã™ã€‚',
        pricePerSqFt: 'ä»»æ„ â€” æ¥­è€…ã®è¦‹ç©æ›¸ã«è¨˜è¼‰ã•ã‚ŒãŸå˜ä¾¡ã§ä¸Šæ›¸ãã§ãã¾ã™ã€‚',
        permitCost: 'è§£ä½“è¨±å¯ç”³è«‹è²»ç”¨ã¯é€šå¸¸300ã€œ1,000ãƒ‰ãƒ«ç¨‹åº¦ã§ã™ã€‚',
      },
      options: {
        structureType: {
          'house-wood-frame': 'ä¸€æˆ¸å»ºã¦ä½å®…ï¼ˆæœ¨é€ ï¼‰',
          'house-masonry': 'ä¸€æˆ¸å»ºã¦ä½å®…ï¼ˆãƒ¬ãƒ³ã‚¬ãƒ»çµ„ç©é€ ï¼‰',
          'garage-detached': 'ç‹¬ç«‹ã‚¬ãƒ¬ãƒ¼ã‚¸ãƒ»è»Šåº«',
          'interior-only': 'å†…è£…è§£ä½“ãƒ»ã‚¹ã‚±ãƒ«ãƒˆãƒ³å·¥äº‹',
          'commercial-light': 'å•†æ¥­æ–½è¨­ãƒ»é‰„éª¨é€ ï¼ˆSé€ ï¼‰',
          'commercial-heavy': 'å•†æ¥­æ–½è¨­ãƒ»é‰„ç­‹ã‚³ãƒ³ã‚¯ãƒªãƒ¼ãƒˆé€ ï¼ˆRCé€ ï¼‰',
          'shed': 'ç‰©ç½®ãƒ»å°å±‹',
          'pool': 'ãƒ—ãƒ¼ãƒ«',
        },
        method: {
          'mechanical': 'é‡æ©Ÿè§£ä½“ï¼ˆæ²¹åœ§ã‚·ãƒ§ãƒ™ãƒ«ãƒ»å¤§åž‹é‡æ©Ÿï¼‰',
          'manual': 'æ‰‹å£Šã—è§£ä½“ï¼ˆæ‰‹å·¥å…·ãƒ»ç‹­å°åœ°å¯¾å¿œï¼‰',
          'selective': 'åˆ†åˆ¥è§£ä½“ï¼ˆéƒ¨æå›žåŽãƒ»ãƒªã‚µã‚¤ã‚¯ãƒ«ï¼‰',
        },
      },
      article: `## è§£ä½“è²»ç”¨è¨ˆç®—æ©Ÿã®ä½¿ã„æ–¹

å»ºç‰©ã®æ§‹é€ ç¨®åˆ¥ã€å»ºç¯‰é¢ç©ã€éšŽæ•°ã€è§£ä½“å·¥æ³•ã‚’é¸æŠžã™ã‚‹ã ã‘ã§ã€å·¥äº‹è²»ãƒ»å»ƒæé‹æ¬å‡¦åˆ†è²»ãƒ»è¨±å¯è²»ç”¨ã®ç·é¡è¦‹ç©ã‚‚ã‚ŠãŒå³åº§ã«ç®—å‡ºã•ã‚Œã¾ã™ã€‚`,
    },

    ko: {
      name: 'ì² ê±° ë¹„ìš© ê³„ì‚°ê¸°',
      shortDescription:
        'ë¬´ë£Œ ê±´ë¬¼ ì² ê±° ë¹„ìš© ê³„ì‚°ê¸°. ì£¼íƒ, ì°¨ê³ , ìƒê°€ ê±´ë¬¼, ì¸í…Œë¦¬ì–´ ì² ê±°ì˜ ê³µì‚¬ë¹„, íê¸°ë¬¼ ì²˜ë¦¬ë¹„, ì¸í—ˆê°€ ìˆ˜ìˆ˜ë£Œë¥¼ ì¦‰ì‹œ ì‚°ì¶œí•˜ì„¸ìš”.',
      helpTexts: {
        stories: 'ì¸µìˆ˜ì— ë”°ë¼ ì´ ì—°ë©´ì ê³¼ íê¸°ë¬¼ ë°°ì¶œëŸ‰ì„ ìžë™ìœ¼ë¡œ ê³„ì‚°í•©ë‹ˆë‹¤.',
        pricePerSqFt: 'ì„ íƒì‚¬í•­ â€” ê¸°ë³¸ ë‹¨ê°€ë¥¼ ì‹œê³µì—…ì²´ì˜ ì‹¤ê²¬ì  ë‹¨ê°€ë¡œ ëŒ€ì²´í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤.',
        permitCost: 'ì¼ë°˜ì ì¸ ì² ê±° í—ˆê°€ ë° ì‹ ê³  ë¹„ìš©ì€ 300~1,000ë‹¬ëŸ¬ ìˆ˜ì¤€ìž…ë‹ˆë‹¤.',
      },
      options: {
        structureType: {
          'house-wood-frame': 'ë‹¨ë…ì£¼íƒ (ëª©ì¡°)',
          'house-masonry': 'ë‹¨ë…ì£¼íƒ (ë²½ëŒ / ì¡°ì ì¡°)',
          'garage-detached': 'ë…ë¦½í˜• ì°¨ê³ ',
          'interior-only': 'ë‚´ë¶€ ì² ê±° / ì›ìƒë³µêµ¬ (ë¦¬ëª¨ë¸ë§)',
          'commercial-light': 'ìƒì—…ìš© ê±´ë¬¼ (ê²½ëŸ‰ ì² ê³¨ì¡°)',
          'commercial-heavy': 'ìƒì—…ìš© ê±´ë¬¼ (ì² ê·¼ ì½˜í¬ë¦¬íŠ¸ì¡°)',
          'shed': 'ì°½ê³  / ì†Œí˜• ë¶€ì† ê±´ë¬¼',
          'pool': 'ìˆ˜ì˜ìž¥',
        },
        method: {
          'mechanical': 'ê¸°ê³„ì‹ ì² ê±° (êµ´ì°©ê¸° / ì¤‘ìž¥ë¹„)',
          'manual': 'ì¸ë ¥ ì² ê±° (ìˆ˜ê³µêµ¬ / ì§„ìž… ì œí•œ êµ¬ì—­)',
          'selective': 'ì„ ë³„ ì² ê±° (ìžìž¬ íšŒìˆ˜ ë° ë¶„ì²´ í•´ì²´)',
        },
      },
      article: `## ì² ê±° ë¹„ìš© ê³„ì‚°ê¸° ì‚¬ìš© ë°©ë²•

ê±´ë¬¼ êµ¬ì¡° ìœ í˜•, ë°”ë‹¥ ë©´ì , ì¸µìˆ˜ ë° ì² ê±° ë°©ì‹ì„ ì„ íƒí•˜ë©´ ì¸ê±´ë¹„ ë° ìž¥ë¹„ëŒ€, íê¸°ë¬¼ ìš´ë°˜ ë° ë§¤ë¦½ë¹„, í—ˆê°€ ìˆ˜ìˆ˜ë£Œê°€ í¬í•¨ëœ ì´ ê²¬ì ì„ ì¦‰ì‹œ í™•ì¸í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤.`,
    },
  },

  'trench-calculator': {
    en: {
      name: 'Trench Calculator',
      shortDescription:
        'Free trench excavation calculator. Calculate trench volume, bedding material, backfill, truck loads, and cost for pipe, drainage, foundation, and cable trench projects.',
      helpTexts: {
        length: 'Total run of the trench from start to end.',
        width: 'Measured at the top of the trench (wider than the pipe for safe working space).',
        depth: 'Vertical distance from grade surface to trench bottom.',
        beddingMaterial: 'Material placed at the trench bottom to support pipe or conduit.',
        beddingDepth: 'Thickness of the bedding layer at the bottom of the trench (typically 4â€“6 inches).',
        includeSpoilHaul: 'Cost to load and haul excavated soil off-site to a disposal facility.',
        pricePerCuYd: 'Optional â€” override standard regional rates with a contractor quote per cu yd.',
      },
      options: {
        beddingMaterial: {
          none: 'No bedding',
          gravel: 'Crushed Gravel / Pea Gravel',
          sand: 'Sand',
          concrete: 'Concrete Cradle',
        },
      },
      article: `## How to Use the Trench Calculator

Enter your trench dimensions â€” **length**, **width**, and **depth** â€” select your bedding material, and get instant excavation volume, bedding required, backfill volume, truck loads, and complete cost estimates.

---

## Trench Volume Formula

> **Volume (cu yd) = Length (ft) Ã— Width (ft) Ã— Depth (ft) Ã· 27**
> **Metric: Volume (mÂ³) = Length (m) Ã— Width (m) Ã— Depth (m)**

* **Loose Spoil Volume:** Applies a 25% soil swell factor for haul-away calculations.
* **Backfill Volume:** Trench volume minus bedding material displacement.
* **Truck Loads:** Calculated using standard 14 cu yd dump trucks (or 10 mÂ³ in metric).`,
    },

    es: {
      name: 'Calculadora de Zanjas',
      shortDescription:
        'Calculadora gratuita de excavaciÃ³n de zanjas. Calcule volumen de tierra, lecho de tuberÃ­a, relleno, viajes de camiÃ³n y costos para drenajes, cimientos y tuberÃ­as.',
      helpTexts: {
        length: 'Longitud total de la zanja de principio a fin.',
        width: 'Medido en la parte superior de la zanja (mÃ¡s ancho que el tubo para trabajar seguro).',
        depth: 'Distancia vertical desde la superficie del terreno hasta el fondo.',
        beddingMaterial: 'Material colocado en el fondo para apoyar y proteger la tuberÃ­a.',
        beddingDepth: 'Grosor de la capa de lecho en el fondo (tÃ­picamente 10â€“15 cm).',
        includeSpoilHaul: 'Costo para cargar y transportar la tierra sobrante fuera de la obra.',
        pricePerCuYd: 'Opcional â€” use una cotizaciÃ³n de su contratista por ydÂ³ o mÂ³.',
      },
      options: {
        beddingMaterial: {
          none: 'Sin lecho',
          gravel: 'Grava triturada / Gravilla',
          sand: 'Arena',
          concrete: 'Cuna de hormigÃ³n',
        },
      },
      article: `## CÃ³mo usar la Calculadora de Zanjas

Ingrese las dimensiones de su zanja â€” **longitud**, **ancho** y **profundidad** â€”, seleccione el material de lecho de apoyo y obtenga al instante el volumen de excavaciÃ³n, volumen de relleno, material de lecho, nÃºmero de viajes de camiÃ³n y el costo total estimado.`,
    },

    fr: {
      name: 'Calculateur de TranchÃ©e',
      shortDescription:
        'Calculateur gratuit d\'excavation de tranchÃ©e. Calculez le volume de terrassement, le lit de pose, le remblai, les voyages de camion et les coÃ»ts pour canalisations et fondations.',
      helpTexts: {
        length: 'Longueur totale de la tranchÃ©e du dÃ©but Ã  la fin.',
        width: 'Largeur mesurÃ©e en surface (prÃ©voyez l\'espace de travail nÃ©cessaire).',
        depth: 'Profondeur verticale depuis le sol jusqu\'au fond de fouille.',
        beddingMaterial: 'MatÃ©riau placÃ© en fond de fouille pour supporter le tuyau ou la gaine.',
        beddingDepth: 'Ã‰paisseur du lit de pose (gÃ©nÃ©ralement 10 Ã  15 cm).',
        includeSpoilHaul: 'CoÃ»t d\'Ã©vacuation et de mise en dÃ©charge des terres excavÃ©es.',
        pricePerCuYd: 'Optionnel â€” indiquez le tarif de votre terrassier par mÂ³ ou ydÂ³.',
      },
      options: {
        beddingMaterial: {
          none: 'Sans lit de pose',
          gravel: 'Gravier concassÃ© / Gravillon',
          sand: 'Sable',
          concrete: 'Berceau en bÃ©ton',
        },
      },
      article: `## Comment utiliser le Calculateur de TranchÃ©e

Saisissez la **longueur**, la **largeur** et la **profondeur** de votre tranchÃ©e. Choisissez votre matÃ©riau de lit de pose pour obtenir instantanÃ©ment les volumes d\'excavation, de remblai, le nombre de camions et le budget prÃ©visionnel complet.`,
    },

    de: {
      name: 'Graben- und Aushubrechner',
      shortDescription:
        'Kostenloser Rechner fÃ¼r Grabenaushub. Berechnen Sie Aushubvolumen, Leitungsbettung, VerfÃ¼llung, Lkw-Fuhren und Gesamtkosten fÃ¼r Rohre, Drainage und Fundamente.',
      helpTexts: {
        length: 'GesamtlÃ¤nge des Grabens von Anfang bis Ende.',
        width: 'Grabenbreite an der GelÃ¤ndeoberkante.',
        depth: 'Grabentiefe von der OberflÃ¤che bis zur Grabensohle.',
        beddingMaterial: 'Material auf der Grabensohle zur Rohrauflagerung.',
        beddingDepth: 'Dicke der Bettungsschicht (Ã¼blicherweise 10â€“15 cm).',
        includeSpoilHaul: 'Kosten fÃ¼r Abtransport und Entsorgung des Aushubmaterials.',
        pricePerCuYd: 'Optional â€” individuellen Aushubpreis Ihres Bauunternehmers eingeben.',
      },
      options: {
        beddingMaterial: {
          none: 'Ohne Bettung',
          gravel: 'Splitt / Kies',
          sand: 'Sand',
          concrete: 'Betonsohle / Auflager',
        },
      },
      article: `## Anleitung fÃ¼r den Grabenaushubrechner

Geben Sie **LÃ¤nge**, **Breite** und **Tiefe** des Grabens ein und wÃ¤hlen Sie das Bettungsmaterial. Der Rechner ermittelt sofort das Aushubvolumen, das benÃ¶tigte VerfÃ¼llmaterial, den Aushub mit Auflockerungsfaktor und die Gesamtkosten.`,
    },

    pt: {
      name: 'Calculadora de Valas e EscavaÃ§Ã£o',
      shortDescription:
        'Calculadora gratuita de escavaÃ§Ã£o de valas. Calcule volume de terra, berÃ§o para tubulaÃ§Ã£o, reaterro, viagens de caminhÃ£o e custos para drenagem e fundaÃ§Ãµes.',
      helpTexts: {
        length: 'Comprimento total da vala.',
        width: 'Largura na superfÃ­cie da vala.',
        depth: 'Profundidade da superfÃ­cie atÃ© o fundo da vala.',
        beddingMaterial: 'Material colocado no fundo para apoiar tubulaÃ§Ãµes ou conduÃ­tes.',
        beddingDepth: 'Espessura da camada de assentamento (geralmente 10â€“15 cm).',
        includeSpoilHaul: 'Custo para carga e transporte do solo excedente para bota-fora.',
        pricePerCuYd: 'Opcional â€” informe a cotaÃ§Ã£o do seu empreiteiro por mÂ³ ou ydÂ³.',
      },
      options: {
        beddingMaterial: {
          none: 'Sem berÃ§o',
          gravel: 'Brita / Pedrisco',
          sand: 'Areia',
          concrete: 'BerÃ§o de concreto',
        },
      },
      article: `## Como usar a Calculadora de Valas

Informe o **comprimento**, **largura** e **profundidade** da vala. Selecione o material de assentamento para calcular os volumes exatos de escavaÃ§Ã£o, reaterro, caÃ§ambas necessÃ¡rias e orÃ§amento total.`,
    },

    it: {
      name: 'Calcolatore Scavo Trincea',
      shortDescription:
        'Calcolatore gratuito per scavo trincee e canali. Calcola volume di terra, letto di posa per tubi, rinterro, viaggi di camion e costi per fognature e fondazioni.',
      helpTexts: {
        length: 'Lunghezza totale dello scavo.',
        width: 'Larghezza misurata in superficie.',
        depth: 'ProfonditÃ  dal piano di campagna al fondo scavo.',
        beddingMaterial: 'Materiale di fondo per l\'appoggio sicuro del tubo.',
        beddingDepth: 'Spessore dello strato di sottofondo (solitamente 10â€“15 cm).',
        includeSpoilHaul: 'Costo per carico e trasporto del terreno a discarica.',
        pricePerCuYd: 'Opzionale â€” inserisci il prezzo a mÂ³ o ydÂ³ della tua impresa.',
      },
      options: {
        beddingMaterial: {
          none: 'Nessun letto di posa',
          gravel: 'Ghiaia / Pietrisco',
          sand: 'Sabbia',
          concrete: 'Sottofondo in calcestruzzo',
        },
      },
      article: `## Guida al Calcolatore per Scavo Trincee

Inserisci **lunghezza**, **larghezza** e **profonditÃ ** dello scavo. Scegli il materiale del letto di posa per ottenere subito metri cubi di scavo, volume di rinterro, numero di camion e costo stimato.`,
    },

    nl: {
      name: 'Sleuf- en Graafcalculator',
      shortDescription:
        'Gratis calculator voor sleufontgraving. Bereken graafvolume, leidingbedding, aanvulgrond, vrachtwagenritten en kosten voor leidingen, drainage en funderingen.',
      helpTexts: {
        length: 'Totale lengte van de sleuf.',
        width: 'Breedte van de sleuf bovenaan.',
        depth: 'Diepte vanaf maaiveld tot sleufbodem.',
        beddingMaterial: 'Materiaal op de bodem ter ondersteuning van leidingen.',
        beddingDepth: 'Dikte van de beddingslaag (meestal 10â€“15 cm).',
        includeSpoilHaul: 'Kosten voor afvoer en storten van overtollige grond.',
        pricePerCuYd: 'Optioneel â€” vul de mÂ³-prijs van uw aannemer in.',
      },
      options: {
        beddingMaterial: {
          none: 'Geen bedding',
          gravel: 'Grind / Split',
          sand: 'Zand',
          concrete: 'Betonbedding',
        },
      },
      article: `## Handleiding Sleufcalculator

Voer **lengte**, **breedte** en **diepte** in en kies het beddingsmateriaal om direct het ontgravingsvolume, de benodigde aanvulzandhoeveelheid, vrachtwagenladingen en totale kosten te berekenen.`,
    },

    pl: {
      name: 'Kalkulator WykopÃ³w Liniowych',
      shortDescription:
        'Darmowy kalkulator wykopÃ³w pod rury i kable. Oblicz objÄ™toÅ›Ä‡ ziemi, podsypkÄ™, zasypkÄ™, liczbÄ™ wywrotek i caÅ‚kowity koszt robÃ³t ziemnych.',
      helpTexts: {
        length: 'CaÅ‚kowita dÅ‚ugoÅ›Ä‡ wykopu.',
        width: 'SzerokoÅ›Ä‡ wykopu przy powierzchni terenu.',
        depth: 'GÅ‚Ä™bokoÅ›Ä‡ od powierzchni gruntu do dna wykopu.',
        beddingMaterial: 'MateriaÅ‚ podsypki pod rurociÄ…g lub kabel.',
        beddingDepth: 'GruboÅ›Ä‡ warstwy podsypki (zwykle 10â€“15 cm).',
        includeSpoilHaul: 'Koszt zaÅ‚adunku i wywozu urobku na wysypisko.',
        pricePerCuYd: 'Opcjonalnie â€” wpisz stawkÄ™ wykonawcy za mÂ³ lub ydÂ³.',
      },
      options: {
        beddingMaterial: {
          none: 'Brak podsypki',
          gravel: 'Å»wir / TÅ‚uczeÅ„',
          sand: 'Piasek',
          concrete: 'Åawa betonowa',
        },
      },
      article: `## Jak korzystaÄ‡ z kalkulatora wykopÃ³w

Podaj **dÅ‚ugoÅ›Ä‡**, **szerokoÅ›Ä‡** oraz **gÅ‚Ä™bokoÅ›Ä‡** wykopu. Wybierz materiaÅ‚ podsypki, aby natychmiast otrzymaÄ‡ objÄ™toÅ›Ä‡ wykopu, iloÅ›Ä‡ materiaÅ‚u zasypkowego, liczbÄ™ wywrotek oraz kosztorys.`,
    },

    ru: {
      name: 'ÐšÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€ Ð¢Ñ€Ð°Ð½ÑˆÐµÐ¹ Ð¸ Ð—ÐµÐ¼Ð»ÑÐ½Ñ‹Ñ… Ð Ð°Ð±Ð¾Ñ‚',
      shortDescription:
        'Ð‘ÐµÑÐ¿Ð»Ð°Ñ‚Ð½Ñ‹Ð¹ ÐºÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€ Ð¾Ð±ÑŠÐµÐ¼Ð° Ñ‚Ñ€Ð°Ð½ÑˆÐµÐ¹. Ð Ð°ÑÑÑ‡Ð¸Ñ‚Ð°Ð¹Ñ‚Ðµ Ð¾Ð±ÑŠÐµÐ¼ Ð²Ñ‹ÐµÐ¼ÐºÐ¸ Ð³Ñ€ÑƒÐ½Ñ‚Ð°, Ð¿ÐµÑÑ‡Ð°Ð½ÑƒÑŽ Ð¿Ð¾Ð´ÑƒÑˆÐºÑƒ, Ð¾Ð±Ñ€Ð°Ñ‚Ð½ÑƒÑŽ Ð·Ð°ÑÑ‹Ð¿ÐºÑƒ, Ñ€ÐµÐ¹ÑÑ‹ ÑÐ°Ð¼Ð¾ÑÐ²Ð°Ð»Ð¾Ð² Ð¸ ÑÑ‚Ð¾Ð¸Ð¼Ð¾ÑÑ‚ÑŒ Ñ€Ð°Ð±Ð¾Ñ‚.',
      helpTexts: {
        length: 'ÐžÐ±Ñ‰Ð°Ñ Ð´Ð»Ð¸Ð½Ð° Ñ‚Ñ€Ð°Ð½ÑˆÐµÐ¸ Ð¾Ñ‚ Ð½Ð°Ñ‡Ð°Ð»Ð° Ð´Ð¾ ÐºÐ¾Ð½Ñ†Ð°.',
        width: 'Ð¨Ð¸Ñ€Ð¸Ð½Ð° Ñ‚Ñ€Ð°Ð½ÑˆÐµÐ¸ Ð¿Ð¾ Ð²ÐµÑ€Ñ…Ñƒ.',
        depth: 'Ð“Ð»ÑƒÐ±Ð¸Ð½Ð° Ñ‚Ñ€Ð°Ð½ÑˆÐµÐ¸ Ð¾Ñ‚ Ð¿Ð¾Ð²ÐµÑ€Ñ…Ð½Ð¾ÑÑ‚Ð¸ Ð·ÐµÐ¼Ð»Ð¸ Ð´Ð¾ Ð´Ð½Ð°.',
        beddingMaterial: 'ÐœÐ°Ñ‚ÐµÑ€Ð¸Ð°Ð» Ð¿Ð¾Ð´ÑƒÑˆÐºÐ¸ Ð½Ð° Ð´Ð½Ðµ Ð¿Ð¾Ð´ Ñ‚Ñ€ÑƒÐ±Ñ‹ Ð¸Ð»Ð¸ ÐºÐ°Ð±ÐµÐ»ÑŒ.',
        beddingDepth: 'Ð¢Ð¾Ð»Ñ‰Ð¸Ð½Ð° ÑÐ»Ð¾Ñ Ð¿Ð¾Ð´ÑÑ‹Ð¿ÐºÐ¸ (Ð¾Ð±Ñ‹Ñ‡Ð½Ð¾ 10â€“15 ÑÐ¼).',
        includeSpoilHaul: 'Ð¡Ñ‚Ð¾Ð¸Ð¼Ð¾ÑÑ‚ÑŒ Ð¿Ð¾Ð³Ñ€ÑƒÐ·ÐºÐ¸ Ð¸ Ð²Ñ‹Ð²Ð¾Ð·Ð° Ð»Ð¸ÑˆÐ½ÐµÐ³Ð¾ Ð³Ñ€ÑƒÐ½Ñ‚Ð° Ð½Ð° Ð¿Ð¾Ð»Ð¸Ð³Ð¾Ð½.',
        pricePerCuYd: 'ÐžÐ¿Ñ†Ð¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ð¾ â€” ÑƒÐºÐ°Ð¶Ð¸Ñ‚Ðµ Ñ€Ð°ÑÑ†ÐµÐ½ÐºÑƒ Ð²Ð°ÑˆÐµÐ³Ð¾ Ð¿Ð¾Ð´Ñ€ÑÐ´Ñ‡Ð¸ÐºÐ° Ð·Ð° ÐºÑƒÐ±Ð¾Ð¼ÐµÑ‚Ñ€.',
      },
      options: {
        beddingMaterial: {
          none: 'Ð‘ÐµÐ· Ð¿Ð¾Ð´ÑÑ‹Ð¿ÐºÐ¸',
          gravel: 'Ð©ÐµÐ±ÐµÐ½ÑŒ / Ð“Ñ€Ð°Ð²Ð¸Ð¹',
          sand: 'ÐŸÐµÑÐ¾Ðº',
          concrete: 'Ð‘ÐµÑ‚Ð¾Ð½Ð½Ð°Ñ Ð¿Ð¾Ð´Ð³Ð¾Ñ‚Ð¾Ð²ÐºÐ°',
        },
      },
      article: `## ÐšÐ°Ðº Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒÑÑ ÐºÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€Ð¾Ð¼ Ñ‚Ñ€Ð°Ð½ÑˆÐµÐ¹

Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ **Ð´Ð»Ð¸Ð½Ñƒ**, **ÑˆÐ¸Ñ€Ð¸Ð½Ñƒ** Ð¸ **Ð³Ð»ÑƒÐ±Ð¸Ð½Ñƒ** Ñ‚Ñ€Ð°Ð½ÑˆÐµÐ¸, Ð²Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð¼Ð°Ñ‚ÐµÑ€Ð¸Ð°Ð» Ð¿Ð¾Ð´ÑÑ‹Ð¿ÐºÐ¸. ÐšÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€ Ð¼Ð¾Ð¼ÐµÐ½Ñ‚Ð°Ð»ÑŒÐ½Ð¾ Ñ€Ð°ÑÑÑ‡Ð¸Ñ‚Ð°ÐµÑ‚ ÐºÑƒÐ±Ð°Ñ‚ÑƒÑ€Ñƒ Ð²Ñ‹ÐµÐ¼ÐºÐ¸, Ð¾Ð±ÑŠÐµÐ¼ Ð¾Ð±Ñ€Ð°Ñ‚Ð½Ð¾Ð¹ Ð·Ð°ÑÑ‹Ð¿ÐºÐ¸, ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ñ€ÐµÐ¹ÑÐ¾Ð² ÑÐ°Ð¼Ð¾ÑÐ²Ð°Ð»Ð¾Ð² Ð¸ Ð¸Ñ‚Ð¾Ð³Ð¾Ð²ÑƒÑŽ ÑÐ¼ÐµÑ‚Ñƒ.`,
    },

    tr: {
      name: 'Kanal ve Hendek KazÄ± HesaplayÄ±cÄ±',
      shortDescription:
        'Ãœcretsiz hendek kazÄ± hesaplama aracÄ±. Boru, drenaj ve temel kazÄ±larÄ± iÃ§in hafriyat hacmini, yataklama malzemesini, dolgu miktarÄ±nÄ± ve maliyeti hesaplayÄ±n.',
      helpTexts: {
        length: 'Hendek toplam uzunluÄŸu.',
        width: 'Hendek Ã¼st geniÅŸliÄŸi.',
        depth: 'YÃ¼zeyden hendek tabanÄ±na kadar olan derinlik.',
        beddingMaterial: 'Boru altÄ± yataklama malzemesi.',
        beddingDepth: 'Yataklama tabakasÄ± kalÄ±nlÄ±ÄŸÄ± (genellikle 10â€“15 cm).',
        includeSpoilHaul: 'Hafriyat topraÄŸÄ±nÄ±n dÃ¶kÃ¼m sahasÄ±na nakliye maliyeti.',
        pricePerCuYd: 'Ä°steÄŸe baÄŸlÄ± â€” mÃ¼teahhitinizin mÂ³ veya ydÂ³ kazÄ± birim fiyatÄ±.',
      },
      options: {
        beddingMaterial: {
          none: 'Yataklama yok',
          gravel: 'KÄ±rma taÅŸ / Ã‡akÄ±l',
          sand: 'Kum',
          concrete: 'Beton yatak / Kradle',
        },
      },
      article: `## Hendek KazÄ± HesaplayÄ±cÄ± KullanÄ±mÄ±

HendeÄŸin **uzunluk**, **geniÅŸlik** ve **derinlik** Ã¶lÃ§Ã¼lerini girin, boru altÄ± yataklama malzemesini seÃ§in ve anÄ±nda kazÄ± hacmi, geri dolgu miktarÄ±, kamyon sefer sayÄ±sÄ± ve toplam maliyet tahminini gÃ¶rÃ¼n.`,
    },

    ar: {
      name: 'Ø­Ø§Ø³Ø¨Ø© Ø­ÙØ± Ø§Ù„Ø®Ù†Ø§Ø¯Ù‚ ÙˆØ§Ù„Ù‚Ù†ÙˆØ§Øª',
      shortDescription:
        'Ø­Ø§Ø³Ø¨Ø© Ù…Ø¬Ø§Ù†ÙŠØ© Ù„Ø­ÙØ± Ø§Ù„Ø®Ù†Ø§Ø¯Ù‚ ÙˆØ£Ø¹Ù…Ø§Ù„ Ø§Ù„Ø­ÙØ±. Ø§Ø­Ø³Ø¨ Ø­Ø¬Ù… Ø§Ù„ØªØ±Ø¨Ø©ØŒ Ø·Ø¨Ù‚Ø© Ø§Ù„ÙØ±Ø´Ø© Ù„Ù„Ø£Ù†Ø¨ÙˆØ¨ØŒ Ø§Ù„Ø±Ø¯Ù…ØŒ Ù†Ù‚Ù„Ø§Øª Ø§Ù„Ø´Ø§Ø­Ù†Ø§Øª ÙˆØªÙƒÙ„ÙØ© Ø§Ù„Ø­ÙØ± Ù„Ø´Ø¨ÙƒØ§Øª Ø§Ù„Ù…ÙŠØ§Ù‡ ÙˆØ§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¡ ÙˆØ§Ù„Ø£Ø³Ø§Ø³Ø§Øª.',
      helpTexts: {
        length: 'Ø§Ù„Ø·ÙˆÙ„ Ø§Ù„ÙƒÙ„ÙŠ Ù„Ù„Ø®Ù†Ø¯Ù‚.',
        width: 'Ø¹Ø±Ø¶ Ø§Ù„Ø®Ù†Ø¯Ù‚ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø·Ø­.',
        depth: 'Ø¹Ù…Ù‚ Ø§Ù„Ø®Ù†Ø¯Ù‚ Ù…Ù† Ù…Ù†Ø³ÙˆØ¨ Ø§Ù„Ø£Ø±Ø¶ Ø­ØªÙ‰ Ø§Ù„Ù‚Ø§Ø¹.',
        beddingMaterial: 'Ù…Ø§Ø¯Ø© Ø§Ù„ÙØ±Ø´Ø© ØªØ­Øª Ø§Ù„Ø£Ù†Ø¨ÙˆØ¨ Ø£Ùˆ Ø§Ù„ÙƒØ§Ø¨Ù„.',
        beddingDepth: 'Ø³Ù…Ø§ÙƒØ© Ø·Ø¨Ù‚Ø© Ø§Ù„ÙØ±Ø´Ø© (Ø¹Ø§Ø¯Ø© 10â€“15 Ø³Ù…).',
        includeSpoilHaul: 'ØªÙƒÙ„ÙØ© ØªØ­Ù…ÙŠÙ„ ÙˆÙ†Ù‚Ù„ Ù†Ø§ØªØ¬ Ø§Ù„Ø­ÙØ± Ø§Ù„Ø²Ø§Ø¦Ø¯ Ø®Ø§Ø±Ø¬ Ø§Ù„Ù…ÙˆÙ‚Ø¹.',
        pricePerCuYd: 'Ø§Ø®ØªÙŠØ§Ø±ÙŠ â€” Ø£Ø¯Ø®Ù„ Ø³Ø¹Ø± Ù…Ù‚Ø§ÙˆÙ„ Ø§Ù„Ø­ÙØ± Ù„ÙƒÙ„ Ù…Â³ Ø£Ùˆ ÙŠØ§Ø±Ø¯Ø© Ù…ÙƒØ¹Ø¨Ø©.',
      },
      options: {
        beddingMaterial: {
          none: 'Ø¨Ø¯ÙˆÙ† ÙØ±Ø´Ø©',
          gravel: 'Ø­ØµÙ‰ Ù…ÙƒØ³Ø± / Ø¨Ø­Øµ',
          sand: 'Ø±Ù…Ù„ Ù†Ø¸ÙŠÙ',
          concrete: 'Ù‚Ø§Ø¹Ø¯Ø© Ø®Ø±Ø³Ø§Ù†ÙŠØ© (Ù…Ù‡Ø§Ø¯)',
        },
      },
      article: `## ÙƒÙŠÙÙŠØ© Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø­Ø§Ø³Ø¨Ø© Ø­ÙØ± Ø§Ù„Ø®Ù†Ø§Ø¯Ù‚

Ø£Ø¯Ø®Ù„ Ø£Ø¨Ø¹Ø§Ø¯ Ø§Ù„Ø®Ù†Ø¯Ù‚ â€” **Ø§Ù„Ø·ÙˆÙ„** Ùˆ**Ø§Ù„Ø¹Ø±Ø¶** Ùˆ**Ø§Ù„Ø¹Ù…Ù‚** â€” ÙˆØ§Ø®ØªØ± Ù…Ø§Ø¯Ø© Ø§Ù„ÙØ±Ø´Ø© Ù„ØªØ­ØµÙ„ ÙÙˆØ±Ø§Ù‹ Ø¹Ù„Ù‰ ÙƒÙ…ÙŠØ§Øª Ø§Ù„Ø­ÙØ± ÙˆØ§Ù„Ø±Ø¯Ù… ÙˆØ¹Ø¯Ø¯ Ù†Ù‚Ù„Ø§Øª Ø§Ù„Ø´Ø§Ø­Ù†Ø§Øª ÙˆØ§Ù„ØªÙƒÙ„ÙØ© Ø§Ù„Ø¥Ø¬Ù…Ø§Ù„ÙŠØ© Ø§Ù„ØªÙ‚Ø¯ÙŠØ±ÙŠØ©.`,
    },

    hi: {
      name: 'à¤–à¤¾à¤ˆ à¤µ à¤¨à¤¾à¤²à¥€ à¤–à¥à¤¦à¤¾à¤ˆ à¤•à¥ˆà¤²à¤•à¥à¤²à¥‡à¤Ÿà¤° (Trench Calculator)',
      shortDescription:
        'à¤®à¥à¤«à¤¼à¥à¤¤ à¤¨à¤¾à¤²à¥€ à¤µ à¤ªà¤¾à¤‡à¤ªà¤²à¤¾à¤‡à¤¨ à¤–à¥à¤¦à¤¾à¤ˆ à¤•à¥ˆà¤²à¤•à¥à¤²à¥‡à¤Ÿà¤°à¥¤ à¤ªà¤¾à¤‡à¤ª, à¤¡à¥à¤°à¥‡à¤¨à¥‡à¤œ à¤µ à¤¨à¥€à¤‚à¤µ à¤•à¥‡ à¤²à¤¿à¤ à¤®à¤¿à¤Ÿà¥à¤Ÿà¥€ à¤•à¥€ à¤®à¤¾à¤¤à¥à¤°à¤¾, à¤¬à¥‡à¤¡à¤¿à¤‚à¤— à¤¸à¤¾à¤®à¤—à¥à¤°à¥€, à¤¬à¥ˆà¤•à¤«à¤¿à¤²à¤¿à¤‚à¤—, à¤¡à¤‚à¤ªà¤° à¤«à¥‡à¤°à¥‡ à¤”à¤° à¤•à¥à¤² à¤–à¤°à¥à¤š à¤•à¥€ à¤—à¤£à¤¨à¤¾ à¤•à¤°à¥‡à¤‚à¥¤',
      helpTexts: {
        length: 'à¤–à¤¾à¤ˆ à¤•à¥€ à¤•à¥à¤² à¤²à¤‚à¤¬à¤¾à¤ˆà¥¤',
        width: 'à¤Šà¤ªà¤°à¥€ à¤¸à¤¤à¤¹ à¤ªà¤° à¤–à¤¾à¤ˆ à¤•à¥€ à¤šà¥Œà¤¡à¤¼à¤¾à¤ˆà¥¤',
        depth: 'à¤œà¤®à¥€à¤¨ à¤•à¥€ à¤¸à¤¤à¤¹ à¤¸à¥‡ à¤–à¤¾à¤ˆ à¤•à¥‡ à¤¤à¤² à¤¤à¤• à¤•à¥€ à¤—à¤¹à¤°à¤¾à¤ˆà¥¤',
        beddingMaterial: 'à¤ªà¤¾à¤‡à¤ª à¤•à¥‹ à¤¸à¤¹à¤¾à¤°à¤¾ à¤¦à¥‡à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤¤à¤² à¤ªà¤° à¤¬à¤¿à¤›à¤¾à¤ˆ à¤œà¤¾à¤¨à¥‡ à¤µà¤¾à¤²à¥€ à¤¸à¤¾à¤®à¤—à¥à¤°à¥€à¥¤',
        beddingDepth: 'à¤¬à¥‡à¤¡à¤¿à¤‚à¤— à¤ªà¤°à¤¤ à¤•à¥€ à¤®à¥‹à¤Ÿà¤¾à¤ˆ (à¤†à¤®à¤¤à¥Œà¤° à¤ªà¤° 4â€“6 à¤‡à¤‚à¤š / 10â€“15 à¤¸à¥‡à¤®à¥€)à¥¤',
        includeSpoilHaul: 'à¤–à¥à¤¦à¥€ à¤¹à¥à¤ˆ à¤…à¤¤à¤¿à¤°à¤¿à¤•à¥à¤¤ à¤®à¤¿à¤Ÿà¥à¤Ÿà¥€ à¤•à¥‹ à¤¬à¤¾à¤¹à¤° à¤«à¥‡à¤‚à¤•à¤¨à¥‡ à¤•à¤¾ à¤–à¤°à¥à¤šà¥¤',
        pricePerCuYd: 'à¤µà¥ˆà¤•à¤²à¥à¤ªà¤¿à¤• â€” à¤ à¥‡à¤•à¥‡à¤¦à¤¾à¤° à¤•à¥€ à¤˜à¤¨ à¤—à¤œ à¤¯à¤¾ à¤˜à¤¨ à¤®à¥€à¤Ÿà¤° à¤–à¥à¤¦à¤¾à¤ˆ à¤¦à¤° à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚à¥¤',
      },
      options: {
        beddingMaterial: {
          none: 'à¤•à¥‹à¤ˆ à¤¬à¥‡à¤¡à¤¿à¤‚à¤— à¤¨à¤¹à¥€à¤‚',
          gravel: 'à¤°à¥‹à¤¡à¤¼à¥€ / à¤¬à¤œà¤°à¥€ / à¤—à¥à¤°à¤¿à¤Ÿ',
          sand: 'à¤°à¥‡à¤¤ / à¤¬à¤¾à¤²à¥‚',
          concrete: 'à¤•à¤‚à¤•à¥à¤°à¥€à¤Ÿ à¤¬à¥‡à¤¡ (à¤•à¥à¤°à¥‡à¤¡à¤²)',
        },
      },
      article: `## à¤–à¤¾à¤ˆ à¤–à¥à¤¦à¤¾à¤ˆ à¤•à¥ˆà¤²à¤•à¥à¤²à¥‡à¤Ÿà¤° à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¥ˆà¤¸à¥‡ à¤•à¤°à¥‡à¤‚

à¤–à¤¾à¤ˆ à¤•à¥€ **à¤²à¤‚à¤¬à¤¾à¤ˆ**, **à¤šà¥Œà¤¡à¤¼à¤¾à¤ˆ** à¤”à¤° **à¤—à¤¹à¤°à¤¾à¤ˆ** à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚, à¤¬à¥‡à¤¡à¤¿à¤‚à¤— à¤¸à¤¾à¤®à¤—à¥à¤°à¥€ à¤šà¥à¤¨à¥‡à¤‚ à¤”à¤° à¤¤à¥à¤°à¤‚à¤¤ à¤•à¥à¤² à¤–à¥à¤¦à¤¾à¤ˆ à¤†à¤¯à¤¤à¤¨, à¤µà¤¾à¤ªà¤¸ à¤­à¤°à¤¾à¤ˆ à¤®à¤¾à¤¤à¥à¤°à¤¾, à¤¡à¤‚à¤ªà¤° à¤«à¥‡à¤°à¥‡ à¤”à¤° à¤…à¤¨à¥à¤®à¤¾à¤¨à¤¿à¤¤ à¤²à¤¾à¤—à¤¤ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¥‡à¤‚à¥¤`,
    },

    zh: {
      name: 'æ²Ÿæ§½å¼€æŒ–ä¸ŽåœŸæ–¹è®¡ç®—å™¨',
      shortDescription:
        'å…è´¹æ²Ÿæ§½ä¸Žç®¡é“å¼€æŒ–è®¡ç®—å™¨ã€‚å¿«é€Ÿè®¡ç®—ç®¡æ²ŸåœŸæ–¹å¼€æŒ–é‡ã€ç®¡é“åž«å±‚ç”¨é‡ã€å›žå¡«åœŸé‡ã€è‡ªå¸è½¦è¿è¾“è½¦æ¬¡åŠæ€»å·¥ç¨‹é€ ä»·ã€‚',
      helpTexts: {
        length: 'æ²Ÿæ§½å¼€æŒ–æ€»é•¿åº¦ã€‚',
        width: 'æ²Ÿæ§½é¡¶éƒ¨å¼€å£å®½åº¦ï¼ˆéœ€é¢„ç•™ä½œä¸šç©ºé—´ï¼‰ã€‚',
        depth: 'ä»Žåœ°è¡¨åˆ°æ§½åº•çš„åž‚ç›´å¼€æŒ–æ·±åº¦ã€‚',
        beddingMaterial: 'æ§½åº•ç”¨äºŽæ”¯æ’‘å’Œä¿æŠ¤ç®¡é“çš„åŸºç¡€åž«å±‚ææ–™ã€‚',
        beddingDepth: 'åŸºç¡€åž«å±‚é“ºè®¾åŽšåº¦ï¼ˆé€šå¸¸ä¸º10-15åŽ˜ç±³ï¼‰ã€‚',
        includeSpoilHaul: 'å¤šä½™å¼ƒåœŸè£…è½¦å¤–è¿è‡³æ¸£åœŸåœºçš„è´¹ç”¨ã€‚',
        pricePerCuYd: 'å¯é€‰ â€” è¾“å…¥æ–½å·¥æ–¹æ¯ç«‹æ–¹ç æˆ–æ¯ç«‹æ–¹ç±³çš„å¼€æŒ–æŠ¥ä»·ã€‚',
      },
      options: {
        beddingMaterial: {
          none: 'æ— åž«å±‚',
          gravel: 'ç¢ŽçŸ³ / ç“œç±³çŸ³',
          sand: 'ä¸­ç²—ç ‚',
          concrete: 'æ··å‡åœŸç®¡åº§ / åŸºç¡€',
        },
      },
      article: `## å¦‚ä½•ä½¿ç”¨æ²Ÿæ§½å¼€æŒ–è®¡ç®—å™¨

è¾“å…¥æ²Ÿæ§½çš„**é•¿åº¦**ã€**å®½åº¦**å’Œ**æ·±åº¦**ï¼Œé€‰æ‹©ç®¡é“åž«å±‚ææ–™ï¼Œå³å¯ç«‹å³èŽ·å–åœŸæ–¹å¼€æŒ–é‡ã€å›žå¡«æ–¹é‡ã€åž«å±‚ç”¨é‡ã€æ¸£åœŸè½¦æ¬¡åŠæ€»æˆæœ¬é¢„ç®—ã€‚`,
    },

    ja: {
      name: 'æºæŽ˜å‰Šãƒ»é…ç®¡ãƒˆãƒ¬ãƒ³ãƒè¨ˆç®—æ©Ÿ',
      shortDescription:
        'ç„¡æ–™ã®æºæŽ˜å‰Šãƒ»åœŸé‡è¨ˆç®—ãƒ„ãƒ¼ãƒ«ã€‚é…ç®¡ã€æŽ’æ°´è·¯ã€å¸ƒåŸºç¤Žå·¥äº‹ã®æŽ˜å‰ŠåœŸé‡ã€åŸºç¤Žæ•·ç ‚ãƒ»å‰²æ —çŸ³é‡ã€åŸ‹ã‚æˆ»ã—åœŸé‡ã€æ®‹åœŸå‡¦åˆ†å°æ•°ã¨æ¦‚ç®—è²»ç”¨ã‚’å³åº§ã«è¨ˆç®—ã€‚',
      helpTexts: {
        length: 'æŽ˜å‰Šã™ã‚‹æºã®å…¨é•·ã€‚',
        width: 'æºã®ä¸Šéƒ¨å¹…ï¼ˆä½œæ¥­ã‚¹ãƒšãƒ¼ã‚¹ã‚’è€ƒæ…®ï¼‰ã€‚',
        depth: 'åœ°è¡¨ã‹ã‚‰æºåº•ã¾ã§ã®åž‚ç›´æ·±ã•ã€‚',
        beddingMaterial: 'é…ç®¡ä¿è­·ã¨å‹¾é…ç¢ºä¿ã®ãŸã‚ã®åŸºç¤Žæ•·æã€‚',
        beddingDepth: 'åŸºç¤Žæ•·æã®åŽšã¿ï¼ˆé€šå¸¸10ã€œ15cmï¼‰ã€‚',
        includeSpoilHaul: 'æŽ˜å‰Šæ®‹åœŸã®ç©è¾¼ãƒ»å ´å¤–æ¬å‡ºå‡¦åˆ†è²»ç”¨ã€‚',
        pricePerCuYd: 'ä»»æ„ â€” æ–½å·¥æ¥­è€…ã®ç«‹æ–¹ãƒ¡ãƒ¼ãƒˆãƒ«ï¼ç«‹æ–¹ãƒ¤ãƒ¼ãƒ‰å˜ä¾¡ã€‚',
      },
      options: {
        beddingMaterial: {
          none: 'åŸºç¤Žæãªã—',
          gravel: 'ç •çŸ³ / ç ‚åˆ©',
          sand: 'ç ‚',
          concrete: 'ã‚³ãƒ³ã‚¯ãƒªãƒ¼ãƒˆåŸºç¤Ž',
        },
      },
      article: `## æºæŽ˜å‰Šè¨ˆç®—æ©Ÿã®ä½¿ã„æ–¹

æºã®**é•·ã•**ã€**å¹…**ã€**æ·±ã•**ã‚’å…¥åŠ›ã—ã€åŸºç¤Žæã®ç¨®é¡žã‚’é¸æŠžã™ã‚‹ã ã‘ã§ã€æŽ˜å‰ŠåœŸé‡ã€åŸ‹ã‚æˆ»ã—åœŸé‡ã€å¿…è¦ãƒ€ãƒ³ãƒ—å°æ•°ã€å·¥äº‹è²»ç”¨è¦‹ç©ã‚‚ã‚ŠãŒä¸€ç›®ã§åˆ†ã‹ã‚Šã¾ã™ã€‚`,
    },

    ko: {
      name: 'íŠ¸ë Œì¹˜ ë° í„°íŒŒê¸° í† ëŸ‰ ê³„ì‚°ê¸°',
      shortDescription:
        'ë¬´ë£Œ íŠ¸ë Œì¹˜ êµ´ì°© ë° í„°íŒŒê¸° ê³„ì‚°ê¸°. ë°°ê´€, ë°°ìˆ˜ë¡œ, ê¸°ì´ˆ ê³µì‚¬ì˜ êµ´ì°© í† ëŸ‰, ê¸°ì´ˆ ëª¨ëž˜/ìžê°ˆ ì¿ ì…˜ìž¬, ë˜ë©”ìš°ê¸°ëŸ‰, ë¤í”„íŠ¸ëŸ­ ìš´ë°˜ ëŒ€ìˆ˜ ë° ì´ ê³µì‚¬ë¹„ë¥¼ ê³„ì‚°í•˜ì„¸ìš”.',
      helpTexts: {
        length: 'êµ´ì°©í•  íŠ¸ë Œì¹˜ì˜ ì „ì²´ ê¸¸ì´.',
        width: 'íŠ¸ë Œì¹˜ ìƒë¶€ êµ´ì°© í­ (ìž‘ì—… ê³µê°„ í¬í•¨).',
        depth: 'ì§€í‘œë©´ì—ì„œ íŠ¸ë Œì¹˜ ë°”ë‹¥ê¹Œì§€ì˜ ìˆ˜ì§ ê¹Šì´.',
        beddingMaterial: 'ë°°ê´€ ë³´í˜¸ ë° ì§€ì§€ë¥¼ ìœ„í•œ ë°”ë‹¥ ì¿ ì…˜ìž¬.',
        beddingDepth: 'ê¸°ì´ˆ ì¿ ì…˜ìž¬ í¬ì„¤ ë‘ê»˜ (í†µìƒ 10~15cm).',
        includeSpoilHaul: 'ìž‰ì—¬ ì‚¬í†  ìƒì°¨ ë° ì™¸ë¶€ ë°˜ì¶œ ì²˜ë¦¬ë¹„.',
        pricePerCuYd: 'ì„ íƒì‚¬í•­ â€” ì‹œê³µì‚¬ì˜ ìž…ë°©ë¯¸í„°/ìž…ë°©ì•¼ë“œë‹¹ êµ´ì°© ë‹¨ê°€.',
      },
      options: {
        beddingMaterial: {
          none: 'ì¿ ì…˜ìž¬ ì—†ìŒ',
          gravel: 'ì‡„ì„ / ìžê°ˆ',
          sand: 'ëª¨ëž˜',
          concrete: 'ì½˜í¬ë¦¬íŠ¸ ê¸°ì´ˆ ë°›ì¹¨',
        },
      },
      article: `## íŠ¸ë Œì¹˜ í„°íŒŒê¸° ê³„ì‚°ê¸° ì‚¬ìš© ë°©ë²•

íŠ¸ë Œì¹˜ì˜ **ê¸¸ì´**, **í­**, **ê¹Šì´**ë¥¼ ìž…ë ¥í•˜ê³  ê¸°ì´ˆ ì¿ ì…˜ìž¬ë¥¼ ì„ íƒí•˜ë©´ êµ´ì°©ëŸ‰, ë˜ë©”ìš°ê¸° í† ëŸ‰, í•„ìš” ë¤í”„íŠ¸ëŸ­ ëŒ€ìˆ˜ ë° ì´ ê³µì‚¬ë¹„ë¥¼ ì¦‰ì‹œ í™•ì¸í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤.`,
    },
  },

  'warehouse-space-calculator': {
    en: {
      name: 'Warehouse Space Calculator',
      shortDescription:
        'Free warehouse space calculator. Calculate total square footage, pallet storage capacity, aisle requirements, staging dock areas, and lease costs.',
      helpTexts: {
        palletCount: 'Total number of standard GMA 48"x40" or Euro pallets to store.',
        rackingType: 'Selective racking allows direct access to every pallet; double-deep and drive-in maximize density.',
        rackLevels: 'Number of pallet beam levels high (depends on your warehouse clear ceiling height).',
        aisleType: 'Wider aisles fit standard counterbalance forklifts; narrow aisles increase storage density by 20â€“35%.',
        includeOpsArea: 'Adds 25% for loading dock doors, staging lanes, packing stations, restrooms, and office area.',
        rentPerSqFt: 'Optional â€” enter your local NNN lease rate per sq ft / year to estimate monthly & annual rent.',
      },
      options: {
        rackingType: {
          'selective': 'Selective Rack (Single Deep â€” 100% Access)',
          'floor-stack': 'Floor Block Stacking (Bulk Storage)',
          'double-deep': 'Double-Deep Racking (High Density)',
          'drive-in': 'Drive-In / Push-Back Racking (Maximum Density)',
        },
        aisleType: {
          'wide': 'Standard Wide Aisle (Counterbalance Forklift, 12â€“13 ft)',
          'narrow': 'Narrow Aisle (Reach Truck, 9â€“10 ft)',
          'vna': 'Very Narrow Aisle (VNA Turret Truck, 6 ft)',
        },
      },
      article: `## How to Calculate Warehouse Space Requirements

Calculating warehouse space is essential for logistics managers, eCommerce fulfillment operations, 3PL distributors, and commercial real estate tenants.

### Warehouse Space Sizing Guide
1. **Pallet Footprint:** Standard 48"x40" GMA pallet occupies approx. 15 sq ft (including frame clearance and flue space).
2. **Aisles:** Standard counterbalance forklifts require 12â€“13 ft aisles (~40% of building area); reach trucks require 9â€“10 ft (~30%).
3. **Staging & Docks:** Add ~25% buffer for loading dock doors, shipping/receiving lanes, battery rooms, and offices.`,
    },

    es: {
      name: 'Calculadora de Espacio de AlmacÃ©n',
      shortDescription:
        'Calculadora gratuita de superficie de almacÃ©n. Calcule metros cuadrados o pies cuadrados, capacidad de palets, pasillos, muelles de carga y costos de alquiler.',
      helpTexts: {
        palletCount: 'NÃºmero total de palets estÃ¡ndar (GMA o Euro) que necesita almacenar.',
        rackingType: 'Las estanterÃ­as convencionales dan acceso al 100%; compactas y doble fondo maximizan la densidad.',
        rackLevels: 'Niveles de estanterÃ­a en altura (segÃºn la altura libre del techo).',
        aisleType: 'Pasillos anchos para montacargas contrapesado; pasillos estrechos aumentan la densidad 20â€“35%.',
        includeOpsArea: 'AÃ±ade 25% para muelles de carga, preparaciÃ³n de pedidos, oficinas y zonas tÃ©cnicas.',
        rentPerSqFt: 'Opcional â€” ingrese la tarifa de alquiler por mÂ² o pieÂ²/aÃ±o para estimar el costo mensual.',
      },
      options: {
        rackingType: {
          'selective': 'EstanterÃ­a Convencional (Acceso Directo 100%)',
          'floor-stack': 'Apilado en Suelo / Bloque (Granel)',
          'double-deep': 'EstanterÃ­a Doble Fondo (Alta Densidad)',
          'drive-in': 'EstanterÃ­a Compacta / Drive-In (MÃ¡xima Densidad)',
        },
        aisleType: {
          'wide': 'Pasillo EstÃ¡ndar (Montacargas Contrapesado, 3.5â€“4.0 m)',
          'narrow': 'Pasillo Estrecho (Carretilla RetrÃ¡ctil, 2.7â€“3.0 m)',
          'vna': 'Pasillo Muy Estrecho / Bilateral (Torre VNA, 1.8 m)',
        },
      },
      article: `## CÃ³mo calcular el espacio necesario en un almacÃ©n

Determine con precisiÃ³n la superficie necesaria en metros cuadrados o pies cuadrados para sus operaciones logÃ­sticas considerando dimensiones de palets, pasillos y muelles de carga.`,
    },

    fr: {
      name: 'Calculateur de Surface d\'EntrepÃ´t',
      shortDescription:
        'Calculateur gratuit de surface d\'entrepÃ´t et logistique. Calculez les mÂ² nÃ©cessaires, la capacitÃ© en palettes, les allÃ©es de circulation et le loyer prÃ©visionnel.',
      helpTexts: {
        palletCount: 'Nombre total de palettes Ã  stocker Ã  pleine charge.',
        rackingType: 'Le rack Ã  palettes conventionnel offre 100% d\'accessibilitÃ©; le par accumulation maximise le volume.',
        rackLevels: 'Niveaux de stockage en hauteur (selon la hauteur libre sous plafond).',
        aisleType: 'Les allÃ©es Ã©troites pour chariots Ã  mÃ¢t rÃ©tractable augmentent la densitÃ© de 20 Ã  35%.',
        includeOpsArea: 'Ajoute 25% pour les quais de dÃ©chargement, prÃ©paration, bureaux et locaux techniques.',
        rentPerSqFt: 'Optionnel â€” indiquez le loyer annuel au mÂ² ou piÂ² pour estimer le budget mensuel.',
      },
      options: {
        rackingType: {
          'selective': 'Rayonnage Conventionnel (AccÃ¨s 100%)',
          'floor-stack': 'Stockage de Masse au Sol (En Bloc)',
          'double-deep': 'Rayonnage Double Profondeur',
          'drive-in': 'Rayonnage Ã  Accumulation / Drive-In',
        },
        aisleType: {
          'wide': 'AllÃ©e Standard (Chariot Frontal, 3.5â€“4.0 m)',
          'narrow': 'AllÃ©e Ã‰troite (Chariot Ã  MÃ¢t RÃ©tractable, 2.7â€“3.0 m)',
          'vna': 'AllÃ©e TrÃ¨s Ã‰troite (Chariot Tridirectionnel VNA, 1.8 m)',
        },
      },
      article: `## Guide de dimensionnement d\'un entrepÃ´t logistique

Estimez la surface totale requise pour votre entrepÃ´t en modÃ©lisant l\'emprise au sol des palettes, les allÃ©es de gerbage et les zones de rÃ©ception/expÃ©dition.`,
    },

    de: {
      name: 'LagerflÃ¤chen- & Palettenrechner',
      shortDescription:
        'Kostenloser LagerflÃ¤chenrechner. Berechnen Sie HallengrÃ¶ÃŸe (mÂ² / ftÂ²), PalettenstellplÃ¤tze, Gangbreiten fÃ¼r Gabelstapler, Laderampen und Mietkosten.',
      helpTexts: {
        palletCount: 'Gesamtzahl der zu lagernden Europaletten oder Industriepaletten.',
        rackingType: 'Breitgang-Palettenregale bieten 100% Zugriff; Einfahrregale bieten maximale Volumennutzung.',
        rackLevels: 'Anzahl der Regalebenen in der HÃ¶he (abhÃ¤ngig von der lichten HallenhÃ¶he).',
        aisleType: 'SchmalgÃ¤nge fÃ¼r Schubmaststapler sparen 20â€“35% HallengrundflÃ¤che ein.',
        includeOpsArea: 'Kalkuliert 25% Aufschlag fÃ¼r LKW-Rampen, Kommissionierzonen, BÃ¼ros und Batterieladestationen.',
        rentPerSqFt: 'Optional â€” Jahresmiete pro mÂ² oder ftÂ² fÃ¼r monatliche Mietkostenkalkulation.',
      },
      options: {
        rackingType: {
          'selective': 'Standard-Palettenregal (100% Direktzugriff)',
          'floor-stack': 'Blocklagerung am Boden',
          'double-deep': 'Doppeltiefes Palettenregal',
          'drive-in': 'Einfahrregal / Drive-In (Kompaktlager)',
        },
        aisleType: {
          'wide': 'Standard-Breitgang (Frontstapler, 3.5â€“4.0 m)',
          'narrow': 'Schmalgang (Schubmaststapler, 2.7â€“3.0 m)',
          'vna': 'Sehr schmaler Gang (VNA-Schmalgangstapler, 1.8 m)',
        },
      },
      article: `## So berechnen Sie Ihren LagerflÃ¤chenbedarf

Bestimmen Sie exakt die erforderliche HallenflÃ¤che fÃ¼r Ihr Logistikzentrum unter BerÃ¼cksichtigung von RegalstellplÃ¤tzen, Fahrgassen und BereitstellungsflÃ¤chen.`,
    },

    pt: {
      name: 'Calculadora de EspaÃ§o de GalpÃ£o',
      shortDescription:
        'Calculadora gratuita de metragem de galpÃ£o e armazÃ©m. Calcule mÂ² ou pÃ©sÂ², capacidade de paletes, corredores de empilhadeira, docas e custos de locaÃ§Ã£o.',
      helpTexts: {
        palletCount: 'Quantidade total de paletes padrÃ£o PBR ou Euro para estocagem.',
        rackingType: 'Porta-paletes convencional permite 100% de seletividade; drive-in maximiza a densidade.',
        rackLevels: 'NÃ­veis de altura da estrutura (de acordo com o pÃ©-direito livre).',
        aisleType: 'Corredores estreitos para empilhadeira retrÃ¡til reduzem a Ã¡rea necessÃ¡ria em 20â€“35%.',
        includeOpsArea: 'Soma 25% para docas de carga, pulmÃ£o de expediÃ§Ã£o, escritÃ³rio e bateria.',
        rentPerSqFt: 'Opcional â€” valor do aluguel anual por mÂ² ou pÃ©Â² para calcular o custo mensal.',
      },
      options: {
        rackingType: {
          'selective': 'Porta-Paletes Convencional (Seletividade 100%)',
          'floor-stack': 'Blocagem no Piso (Armazenamento em Bloco)',
          'double-deep': 'Porta-Paletes Dupla Profundidade',
          'drive-in': 'Drive-In / DinÃ¢mico (Alta Densidade)',
        },
        aisleType: {
          'wide': 'Corredor Largo (Empilhadeira Frontal, 3.5â€“4.0 m)',
          'narrow': 'Corredor Estreito (Empilhadeira RetrÃ¡til, 2.7â€“3.0 m)',
          'vna': 'Corredor Muito Estreito (Tridirecional VNA, 1.8 m)',
        },
      },
      article: `## Como dimensionar a Ã¡rea de um galpÃ£o logÃ­stico

Calcule a Ã¡rea total de piso necessÃ¡ria para seu armazÃ©m considerando posiÃ§Ãµes-palete, manobra de empilhadeiras e Ã¡rea de expediÃ§Ã£o.`,
    },

    it: {
      name: 'Calcolatore Spazio Magazzino',
      shortDescription:
        'Calcolatore gratuito superficie magazzino. Calcola metri quadri, capienza posti pallet, corsie carrelli elevatori, baie di carico e canone di locazione.',
      helpTexts: {
        palletCount: 'Numero totale di Europallet o pallet industriali da stoccare.',
        rackingType: 'Scaffalatura tradizionale porta-pallet per accesso 100%; drive-in per massima densitÃ .',
        rackLevels: 'Livelli di stoccaggio in altezza (in base all\'altezza utile sottotrave).',
        aisleType: 'Corsie strette per carrelli retrattili aumentano la densitÃ  del 20â€“35%.',
        includeOpsArea: 'Aggiunge il 25% per baie di carico, picking, uffici e ricarica batterie.',
        rentPerSqFt: 'Opzionale â€” canone annuo al mÂ² o ftÂ² per stimare la spesa mensile.',
      },
      options: {
        rackingType: {
          'selective': 'Portapallet Tradizionale (Accesso 100%)',
          'floor-stack': 'Stoccaggio a Terra in Blocco',
          'double-deep': 'Scaffalatura a Doppia ProfonditÃ ',
          'drive-in': 'Scaffalatura Drive-In (Intensiva)',
        },
        aisleType: {
          'wide': 'Corsia Standard (Carrello Frontale, 3.5â€“4.0 m)',
          'narrow': 'Corsia Stretta (Carrello Retrattile, 2.7â€“3.0 m)',
          'vna': 'Corsia Molto Stretta (Carrello Trilaterale VNA, 1.8 m)',
        },
      },
      article: `## Calcolo della superficie necessaria per magazzini

Calcola con precisione la metratura totale per il tuo magazzino logistico considerando posti pallet, corsie di manovra e banchine di carico.`,
    },

    nl: {
      name: 'Magazijn- & Opslagruimte Calculator',
      shortDescription:
        'Gratis calculator voor magazijnoppervlakte. Bereken mÂ² / ftÂ², palletcapaciteit, heftruckgangpaden, laaddocks en maandelijkse huurkosten.',
      helpTexts: {
        palletCount: 'Totaal aantal europallets of blokpallets om op te slaan.',
        rackingType: 'Conventionele palletstellingen bieden 100% bereikbaarheid; inrijstellingen maximale dichtheid.',
        rackLevels: 'Aantal palletniveaus in de hoogte (op basis van de vrije hoogte).',
        aisleType: 'Smalle gangen voor reachtrucks besparen 20â€“35% aan vloeroppervlakte.',
        includeOpsArea: 'Voegt 25% toe voor laadkuilen, expeditie, kantoren en accu-laadstations.',
        rentPerSqFt: 'Optioneel â€” jaarlijkse huur per mÂ² of ftÂ² voor maandelijkse kostenindicatie.',
      },
      options: {
        rackingType: {
          'selective': 'Conventionele Palletstelling (100% Toegang)',
          'floor-stack': 'Blokstapeling op de Vloer',
          'double-deep': 'Dubbeldiepe Palletstelling',
          'drive-in': 'Inrijstelling / Drive-In (Compact)',
        },
        aisleType: {
          'wide': 'Breed Gangpad (Heftruck, 3.5â€“4.0 m)',
          'narrow': 'Smal Gangpad (Reachtruck, 2.7â€“3.0 m)',
          'vna': 'Zeer Smal Gangpad (VNA-Hoogbouwtruck, 1.8 m)',
        },
      },
      article: `## Hoe bereken je de benodigde magazijnoppervlakte

Bereken exact het benodigde vloeroppervlak voor uw distributiecentrum op basis van palletposities, gangpadbreedtes en expeditieruimte.`,
    },

    pl: {
      name: 'Kalkulator Powierzchni Magazynowej',
      shortDescription:
        'Darmowy kalkulator powierzchni magazynu. Oblicz mÂ² lub stopyÂ², pojemnoÅ›Ä‡ miejsc paletowych, korytarze robocze, doki zaÅ‚adunkowe i koszt najmu.',
      helpTexts: {
        palletCount: 'ÅÄ…czna liczba palet (EPAL / przemysÅ‚owych) do zmagazynowania.',
        rackingType: 'RegaÅ‚y rzÄ™dowe zapewniajÄ… 100% dostÄ™pnoÅ›ci; regaÅ‚y wjezdne maksymalizujÄ… gÄ™stoÅ›Ä‡.',
        rackLevels: 'Liczba poziomÃ³w skÅ‚adowania w gÃ³rÄ™ (zaleÅ¼na od wysokoÅ›ci uÅ¼ytkowej hali).',
        aisleType: 'WÄ…skie korytarze dla wÃ³zkÃ³w wysokiego skÅ‚adu zwiÄ™kszajÄ… pojemnoÅ›Ä‡ o 20â€“35%.',
        includeOpsArea: 'Dodaje 25% na doki przeÅ‚adunkowe, strefÄ™ kompletacji, biura i akumulatorowniÄ™.',
        rentPerSqFt: 'Opcjonalnie â€” roczna stawka czynszu za mÂ² lub ftÂ² do wyliczenia kosztu miesiÄ™cznego.',
      },
      options: {
        rackingType: {
          'selective': 'RegaÅ‚y RzÄ™dowe Tradycyjne (100% DostÄ™pu)',
          'floor-stack': 'SkÅ‚adowanie Blokowe na Posadzce',
          'double-deep': 'RegaÅ‚y o PodwÃ³jnej GÅ‚Ä™bokoÅ›ci',
          'drive-in': 'RegaÅ‚y Wjezdne Drive-In (GÄ™ste SkÅ‚adowanie)',
        },
        aisleType: {
          'wide': 'Szeroki Korytarz (WÃ³zek CzoÅ‚owy, 3.5â€“4.0 m)',
          'narrow': 'WÄ…ski Korytarz (WÃ³zek Boczny Reach Truck, 2.7â€“3.0 m)',
          'vna': 'Bardzo WÄ…ski Korytarz (WÃ³zek Systemowy VNA, 1.8 m)',
        },
      },
      article: `## Jak obliczyÄ‡ wymaganÄ… powierzchniÄ™ magazynu

Oblicz zapotrzebowanie na powierzchniÄ™ hali magazynowej, uwzglÄ™dniajÄ…c miejsca paletowe, szerokoÅ›ci korytarzy roboczych oraz strefy przyjÄ™Ä‡ i wydaÅ„.`,
    },

    ru: {
      name: 'ÐšÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€ ÐŸÐ»Ð¾Ñ‰Ð°Ð´Ð¸ Ð¡ÐºÐ»Ð°Ð´Ð°',
      shortDescription:
        'Ð‘ÐµÑÐ¿Ð»Ð°Ñ‚Ð½Ñ‹Ð¹ ÐºÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€ Ð¿Ð»Ð¾Ñ‰Ð°Ð´Ð¸ ÑÐºÐ»Ð°Ð´Ð° Ð¸ Ð¿Ð°Ð»Ð»ÐµÑ‚Ð¾Ð²Ð¼ÐµÑÑ‚Ð¸Ð¼Ð¾ÑÑ‚Ð¸. Ð Ð°ÑÑÑ‡Ð¸Ñ‚Ð°Ð¹Ñ‚Ðµ ÐºÐ². Ð¼ÐµÑ‚Ñ€Ñ‹, ÑÑ‚ÐµÐ»Ð»Ð°Ð¶Ð¸, Ð¿Ñ€Ð¾ÐµÐ·Ð´Ñ‹ Ð´Ð»Ñ Ð¿Ð¾Ð³Ñ€ÑƒÐ·Ñ‡Ð¸ÐºÐ¾Ð², Ð´Ð¾ÐºÐ¸ Ð¸ ÑÑ‚Ð¾Ð¸Ð¼Ð¾ÑÑ‚ÑŒ Ð°Ñ€ÐµÐ½Ð´Ñ‹.',
      helpTexts: {
        palletCount: 'ÐžÐ±Ñ‰ÐµÐµ ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ ÑÑ‚Ð°Ð½Ð´Ð°Ñ€Ñ‚Ð½Ñ‹Ñ… Ð¸Ð»Ð¸ ÐµÐ²Ñ€Ð¾Ð¿Ð°Ð»Ð»ÐµÑ‚ Ð´Ð»Ñ Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ñ.',
        rackingType: 'Ð¤Ñ€Ð¾Ð½Ñ‚Ð°Ð»ÑŒÐ½Ñ‹Ðµ ÑÑ‚ÐµÐ»Ð»Ð°Ð¶Ð¸ Ð´Ð°ÑŽÑ‚ 100% Ð´Ð¾ÑÑ‚ÑƒÐ¿; Ð½Ð°Ð±Ð¸Ð²Ð½Ñ‹Ðµ Ð³Ð»ÑƒÐ±Ð¸Ð½Ð½Ð¾Ð³Ð¾ Ñ‚Ð¸Ð¿Ð° ÑƒÐ²ÐµÐ»Ð¸Ñ‡Ð¸Ð²Ð°ÑŽÑ‚ Ð¿Ð»Ð¾Ñ‚Ð½Ð¾ÑÑ‚ÑŒ.',
        rackLevels: 'ÐšÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ ÑÑ€ÑƒÑÐ¾Ð² Ð±Ð°Ð»Ð¾Ðº Ð¿Ð¾ Ð²Ñ‹ÑÐ¾Ñ‚Ðµ (Ð·Ð°Ð²Ð¸ÑÐ¸Ñ‚ Ð¾Ñ‚ Ñ€Ð°Ð±Ð¾Ñ‡ÐµÐ¹ Ð²Ñ‹ÑÐ¾Ñ‚Ñ‹ Ð¿Ð¾Ñ‚Ð¾Ð»ÐºÐ°).',
        aisleType: 'Ð£Ð·ÐºÐ¸Ðµ Ð¿Ñ€Ð¾ÐµÐ·Ð´Ñ‹ Ð´Ð»Ñ Ñ€Ð¸Ñ‡Ñ‚Ñ€Ð°ÐºÐ¾Ð² ÑÐºÐ¾Ð½Ð¾Ð¼ÑÑ‚ Ð¾Ñ‚ 20% Ð´Ð¾ 35% Ð¿Ð»Ð¾Ñ‰Ð°Ð´Ð¸ ÑÐºÐ»Ð°Ð´Ð°.',
        includeOpsArea: 'Ð”Ð¾Ð±Ð°Ð²Ð»ÑÐµÑ‚ 25% Ð½Ð° Ð¿Ð¾Ð³Ñ€ÑƒÐ·Ð¾Ñ‡Ð½Ñ‹Ðµ Ð²Ð¾Ñ€Ð¾Ñ‚Ð°, Ð·Ð¾Ð½Ñƒ ÐºÐ¾Ð¼Ð¿Ð»ÐµÐºÑ‚Ð°Ñ†Ð¸Ð¸, Ð¾Ñ„Ð¸Ñ Ð¸ Ð·Ð°Ñ€ÑÐ´Ð½ÑƒÑŽ.',
        rentPerSqFt: 'ÐžÐ¿Ñ†Ð¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ð¾ â€” Ð³Ð¾Ð´Ð¾Ð²Ð°Ñ ÑÑ‚Ð°Ð²ÐºÐ° Ð°Ñ€ÐµÐ½Ð´Ñ‹ Ð·Ð° ÐºÐ². Ð¼ / ÐºÐ². Ñ„ÑƒÑ‚ Ð´Ð»Ñ Ñ€Ð°ÑÑ‡ÐµÑ‚Ð° Ð² Ð¼ÐµÑÑÑ†.',
      },
      options: {
        rackingType: {
          'selective': 'Ð¤Ñ€Ð¾Ð½Ñ‚Ð°Ð»ÑŒÐ½Ñ‹Ðµ Ð¡Ñ‚ÐµÐ»Ð»Ð°Ð¶Ð¸ (100% ÐŸÑ€ÑÐ¼Ð¾Ð¹ Ð”Ð¾ÑÑ‚ÑƒÐ¿)',
          'floor-stack': 'ÐÐ°Ð¿Ð¾Ð»ÑŒÐ½Ð¾Ðµ Ð‘Ð»Ð¾Ñ‡Ð½Ð¾Ðµ Ð¥Ñ€Ð°Ð½ÐµÐ½Ð¸Ðµ',
          'double-deep': 'Ð¡Ñ‚ÐµÐ»Ð»Ð°Ð¶Ð¸ Ð”Ð²Ð¾Ð¹Ð½Ð¾Ð¹ Ð“Ð»ÑƒÐ±Ð¸Ð½Ñ‹ (Double-Deep)',
          'drive-in': 'ÐÐ°Ð±Ð¸Ð²Ð½Ñ‹Ðµ Ð¡Ñ‚ÐµÐ»Ð»Ð°Ð¶Ð¸ Drive-In (Ð’Ñ‹ÑÐ¾ÐºÐ°Ñ ÐŸÐ»Ð¾Ñ‚Ð½Ð¾ÑÑ‚ÑŒ)',
        },
        aisleType: {
          'wide': 'Ð¨Ð¸Ñ€Ð¾ÐºÐ¸Ð¹ ÐŸÑ€Ð¾ÐµÐ·Ð´ (Ð’Ð¸Ð»Ð¾Ñ‡Ð½Ñ‹Ð¹ ÐŸÐ¾Ð³Ñ€ÑƒÐ·Ñ‡Ð¸Ðº, 3.5â€“4.0 Ð¼)',
          'narrow': 'Ð£Ð·ÐºÐ¸Ð¹ ÐŸÑ€Ð¾ÐµÐ·Ð´ (Ð Ð¸Ñ‡Ñ‚Ñ€Ð°Ðº, 2.7â€“3.0 Ð¼)',
          'vna': 'Ð£Ð·ÐºÐ¾Ð¿Ñ€Ð¾Ñ…Ð¾Ð´Ð½Ð°Ñ Ð¡Ð¸ÑÑ‚ÐµÐ¼Ð° (Ð¨Ñ‚Ð°Ð±ÐµÐ»ÐµÑ€ VNA, 1.8 Ð¼)',
        },
      },
      article: `## ÐœÐµÑ‚Ð¾Ð´Ð¸ÐºÐ° Ñ€Ð°ÑÑ‡ÐµÑ‚Ð° Ð¿Ð»Ð¾Ñ‰Ð°Ð´Ð¸ ÑÐºÐ»Ð°Ð´Ð°

ÐžÐ¿Ñ€ÐµÐ´ÐµÐ»Ð¸Ñ‚Ðµ Ñ‚Ñ€ÐµÐ±ÑƒÐµÐ¼ÑƒÑŽ Ð¿Ð»Ð¾Ñ‰Ð°Ð´ÑŒ ÑÐºÐ»Ð°Ð´Ð° Ð² ÐºÐ²Ð°Ð´Ñ€Ð°Ñ‚Ð½Ñ‹Ñ… Ð¼ÐµÑ‚Ñ€Ð°Ñ… Ñ ÑƒÑ‡ÐµÑ‚Ð¾Ð¼ ÐµÐ¼ÐºÐ¾ÑÑ‚Ð¸ Ð¿Ð°Ð»Ð»ÐµÑ‚Ð¾Ð¼ÐµÑÑ‚, ÑˆÐ¸Ñ€Ð¸Ð½Ñ‹ Ð¼ÐµÐ¶ÑÑ‚ÐµÐ»Ð»Ð°Ð¶Ð½Ñ‹Ñ… Ð¿Ñ€Ð¾ÐµÐ·Ð´Ð¾Ð² Ð¸ Ð·Ð¾Ð½Ñ‹ ÑÐºÑÐ¿ÐµÐ´Ð¸Ñ†Ð¸Ð¸.`,
    },

    tr: {
      name: 'Depo AlanÄ± & Palet Kapasitesi HesaplayÄ±cÄ±',
      shortDescription:
        'Ãœcretsiz depo alanÄ± ve metrekare hesaplama aracÄ±. Gerekli depo alanÄ±nÄ±, palet kapasitesini, forklift koridor geniÅŸliklerini ve kira maliyetini hesaplayÄ±n.',
      helpTexts: {
        palletCount: 'DepolanmasÄ± hedeflenen toplam palet adedi.',
        rackingType: 'SÄ±rt sÄ±rta raf sistemi %100 eriÅŸim saÄŸlar; drive-in maksimum alan tasarrufu sunar.',
        rackLevels: 'Dikey raf kat adedi (tavan net yÃ¼ksekliÄŸine baÄŸlÄ±dÄ±r).',
        aisleType: 'Reach truck iÃ§in dar koridorlar %20â€“35 alan tasarrufu saÄŸlar.',
        includeOpsArea: 'YÃ¼kleme rampalarÄ±, sevkiyat hazÄ±rlÄ±k, ofis ve akÃ¼ ÅŸarj alanÄ± iÃ§in %25 ekler.',
        rentPerSqFt: 'Ä°steÄŸe baÄŸlÄ± â€” aylÄ±k bÃ¼tÃ§e iÃ§in mÂ² veya ftÂ² baÅŸÄ±na yÄ±llÄ±k kira bedeli.',
      },
      options: {
        rackingType: {
          'selective': 'SÄ±rt SÄ±rta Standart Raf (%100 EriÅŸim)',
          'floor-stack': 'Zeminde Blok Ä°stifleme',
          'double-deep': 'Ã‡ift Derinlikli Raf Sistemi',
          'drive-in': 'Ä°Ã§ine Girilebilir Drive-In Raf',
        },
        aisleType: {
          'wide': 'GeniÅŸ Koridor (Denge AÄŸÄ±rlÄ±klÄ± Forklift, 3.5â€“4.0 m)',
          'narrow': 'Dar Koridor (Reach Truck, 2.7â€“3.0 m)',
          'vna': 'Ã‡ok Dar Koridor (VNA ÃœÃ§ YÃ¶nlÃ¼ Ä°stifleyici, 1.8 m)',
        },
      },
      article: `## Depo AlanÄ± Ä°htiyacÄ± NasÄ±l HesaplanÄ±r?

Depolama gereksinimleriniz iÃ§in gereken toplam kapalÄ± alanÄ±, palet yerleÅŸimi, forklift manevra koridorlarÄ± ve rampa alanlarÄ±nÄ± modelleyerek hesaplayÄ±n.`,
    },

    ar: {
      name: 'Ø­Ø§Ø³Ø¨Ø© Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ù…Ø³ØªÙˆØ¯Ø¹Ø§Øª ÙˆØ§Ù„Ù…Ø®Ø§Ø²Ù†',
      shortDescription:
        'Ø­Ø§Ø³Ø¨Ø© Ù…Ø¬Ø§Ù†ÙŠØ© Ù„ØªØ­Ø¯ÙŠØ¯ Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ù…Ø³ØªÙˆØ¯Ø¹Ø§Øª. Ø§Ø­Ø³Ø¨ Ø§Ù„Ù…Ø³Ø§Ø­Ø© Ø¨Ø§Ù„Ù…ØªØ± Ø§Ù„Ù…Ø±Ø¨Ø¹ Ø£Ùˆ Ø§Ù„Ù‚Ø¯Ù… Ø§Ù„Ù…Ø±Ø¨Ø¹ØŒ Ø³Ø¹Ø© Ø§Ù„Ø·Ø¨Ø§Ù„ÙŠØŒ Ù…Ù…Ø±Ø§Øª Ø§Ù„Ø±Ø§ÙØ¹Ø§Øª Ø§Ù„Ø´ÙˆÙƒÙŠØ© ÙˆØªÙƒØ§Ù„ÙŠÙ Ø§Ù„Ø¥ÙŠØ¬Ø§Ø±.',
      helpTexts: {
        palletCount: 'Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ø¹Ø¯Ø¯ Ø§Ù„Ù…Ù†ØµØ§Øª Ø£Ùˆ Ø§Ù„Ø·Ø¨Ø§Ù„ÙŠ Ø§Ù„Ù…Ø·Ù„ÙˆØ¨ ØªØ®Ø²ÙŠÙ†Ù‡Ø§.',
        rackingType: 'Ø§Ù„Ø£Ø±ÙÙ Ø§Ù„Ø§Ù†ØªÙ‚Ø§Ø¦ÙŠØ© ØªØªÙŠØ­ Ø§Ù„ÙˆØµÙˆÙ„ Ø¨Ù†Ø³Ø¨Ø© 100%Ø› Ø£Ø±ÙÙ Ø§Ù„Ø¯Ø±Ø§ÙŠÙ Ø¥Ù† ØªØ±ÙØ¹ Ø§Ù„ÙƒØ«Ø§ÙØ© Ø§Ù„ØªØ®Ø²ÙŠÙ†ÙŠØ© Ù„Ø£Ù‚ØµÙ‰ Ø­Ø¯.',
        rackLevels: 'Ø¹Ø¯Ø¯ Ø·Ø¨Ù‚Ø§Øª Ø§Ù„Ø£Ø±ÙÙ Ø±Ø£Ø³ÙŠØ§Ù‹ (Ø­Ø³Ø¨ Ø§Ù„Ø§Ø±ØªÙØ§Ø¹ Ø§Ù„ØµØ§ÙÙŠ Ù„Ù„Ø³Ù‚Ù).',
        aisleType: 'Ø§Ù„Ù…Ù…Ø±Ø§Øª Ø§Ù„Ø¶ÙŠÙ‚Ø© Ù„Ø±Ø§ÙØ¹Ø§Øª Ø±ÙŠØªØ´ ØªØ±Ùƒ ØªÙˆÙØ± 20â€“35% Ù…Ù† Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ø£Ø±Ø¶ÙŠØ©.',
        includeOpsArea: 'Ø¥Ø¶Ø§ÙØ© 25% Ù„Ø£Ø±ØµÙØ© Ø§Ù„ØªÙ†Ø²ÙŠÙ„ ÙˆØ§Ù„Ø´Ø­Ù† ÙˆÙ…Ù†Ø§Ø·Ù‚ Ø§Ù„ÙØ±Ø² ÙˆØ§Ù„Ù…ÙƒØ§ØªØ¨ Ø§Ù„Ø¥Ø¯Ø§Ø±ÙŠØ©.',
        rentPerSqFt: 'Ø§Ø®ØªÙŠØ§Ø±ÙŠ â€” Ù…Ø¹Ø¯Ù„ Ø§Ù„Ø¥ÙŠØ¬Ø§Ø± Ø§Ù„Ø³Ù†ÙˆÙŠ Ù„ÙƒÙ„ Ù…Â² Ø£Ùˆ Ù‚Ø¯Ù…Â² Ù„ØªÙ‚Ø¯ÙŠØ± Ø§Ù„ØªÙƒÙ„ÙØ© Ø§Ù„Ø´Ù‡Ø±ÙŠØ©.',
      },
      options: {
        rackingType: {
          'selective': 'Ø£Ø±ÙÙ Ø§Ù†ØªÙ‚Ø§Ø¦ÙŠØ© ÙØ±Ø¯ÙŠØ© (ÙˆØµÙˆÙ„ Ù…Ø¨Ø§Ø´Ø± 100%)',
          'floor-stack': 'ØªØ®Ø²ÙŠÙ† Ø£Ø±Ø¶ÙŠ Ø¨Ø§Ù„Ø±Øµ Ø§Ù„ØªØ¬Ù…ÙŠØ¹ÙŠ',
          'double-deep': 'Ø£Ø±ÙÙ Ù…Ø²Ø¯ÙˆØ¬Ø© Ø§Ù„Ø¹Ù…Ù‚',
          'drive-in': 'Ø£Ø±ÙÙ Ø¯Ø±Ø§ÙŠÙ Ø¥Ù† / ØªØ®Ø²ÙŠÙ† ÙƒØ«ÙŠÙ',
        },
        aisleType: {
          'wide': 'Ù…Ù…Ø± Ù‚ÙŠØ§Ø³ÙŠ ÙˆØ§Ø³Ø¹ (Ø±Ø§ÙØ¹Ø© Ø´ÙˆÙƒÙŠØ© Ø¹Ø§Ø¯ÙŠØ©ØŒ 3.5â€“4.0 Ù…)',
          'narrow': 'Ù…Ù…Ø± Ø¶ÙŠÙ‚ (Ø±Ø§ÙØ¹Ø© Ø±ÙŠØªØ´ ØªØ±ÙƒØŒ 2.7â€“3.0 Ù…)',
          'vna': 'Ù…Ù…Ø± ÙØ§Ø¦Ù‚ Ø§Ù„Ø¶ÙŠÙ‚ (Ø±Ø§ÙØ¹Ø© Ø«Ù„Ø§Ø«ÙŠØ© Ø§Ù„Ø§ØªØ¬Ø§Ù‡ VNAØŒ 1.8 Ù…)',
        },
      },
      article: `## ÙƒÙŠÙÙŠØ© Ø­Ø³Ø§Ø¨ Ø§Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ù…Ø·Ù„ÙˆØ¨Ø© Ù„Ù…Ø³ØªÙˆØ¯Ø¹Ùƒ

Ø§Ø­Ø³Ø¨ Ø§Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ø¥Ø¬Ù…Ø§Ù„ÙŠØ© Ù„Ù…Ù†Ø´Ø£ØªÙƒ Ø§Ù„Ù„ÙˆØ¬Ø³ØªÙŠØ© Ø¨Ø¯Ù‚Ø© Ø¹Ø¨Ø± ØªØ­Ø¯ÙŠØ¯ Ù…ÙˆØ§Ù‚Ø¹ Ø§Ù„Ø·Ø¨Ø§Ù„ÙŠ ÙˆÙ…Ù…Ø±Ø§Øª Ø§Ù„Ø­Ø±ÙƒØ© ÙˆÙ…Ù†Ø§Ø·Ù‚ Ø§Ù„Ø´Ø­Ù† ÙˆØ§Ù„ØªÙØ±ÙŠØº.`,
    },

    hi: {
      name: 'à¤—à¥‹à¤¦à¤¾à¤® (Warehouse) à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¤«à¤² à¤•à¥ˆà¤²à¤•à¥à¤²à¥‡à¤Ÿà¤°',
      shortDescription:
        'à¤®à¥à¤«à¤¼à¥à¤¤ à¤µà¥‡à¤¯à¤°à¤¹à¤¾à¤‰à¤¸ à¤¸à¥à¤ªà¥‡à¤¸ à¤•à¥ˆà¤²à¤•à¥à¤²à¥‡à¤Ÿà¤°à¥¤ à¤†à¤µà¤¶à¥à¤¯à¤• à¤µà¤°à¥à¤— à¤«à¥à¤Ÿ à¤¯à¤¾ à¤µà¤°à¥à¤— à¤®à¥€à¤Ÿà¤°, à¤ªà¥ˆà¤²à¥‡à¤Ÿ à¤­à¤‚à¤¡à¤¾à¤°à¤£ à¤•à¥à¤·à¤®à¤¤à¤¾, à¤«à¥‹à¤°à¥à¤•à¤²à¤¿à¤«à¥à¤Ÿ à¤—à¤²à¤¿à¤¯à¤¾à¤°à¤¾ à¤”à¤° à¤®à¤¾à¤¸à¤¿à¤• à¤•à¤¿à¤°à¤¾à¤¯à¤¾ à¤…à¤¨à¥à¤®à¤¾à¤¨ à¤•à¥€ à¤—à¤£à¤¨à¤¾ à¤•à¤°à¥‡à¤‚à¥¤',
      helpTexts: {
        palletCount: 'à¤—à¥‹à¤¦à¤¾à¤® à¤®à¥‡à¤‚ à¤¸à¥à¤Ÿà¥‹à¤° à¤•à¤¿à¤ à¤œà¤¾à¤¨à¥‡ à¤µà¤¾à¤²à¥‡ à¤•à¥à¤² à¤ªà¥ˆà¤²à¥‡à¤Ÿ à¤•à¥€ à¤¸à¤‚à¤–à¥à¤¯à¤¾à¥¤',
        rackingType: 'à¤¸à¥‡à¤²à¥‡à¤•à¥à¤Ÿà¤¿à¤µ à¤°à¥ˆà¤• 100% à¤¸à¥€à¤§à¥€ à¤ªà¤¹à¥à¤‚à¤š à¤¦à¥‡à¤¤à¤¾ à¤¹à¥ˆ; à¤¡à¥à¤°à¤¾à¤‡à¤µ-à¤‡à¤¨ à¤°à¥ˆà¤• à¤­à¤‚à¤¡à¤¾à¤°à¤£ à¤˜à¤¨à¤¤à¥à¤µ à¤•à¥‹ à¤…à¤§à¤¿à¤•à¤¤à¤® à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤',
        rackLevels: 'à¤Šà¤‚à¤šà¤¾à¤ˆ à¤®à¥‡à¤‚ à¤°à¥ˆà¤• à¤¸à¥à¤¤à¤° (à¤›à¤¤ à¤•à¥€ à¤¸à¥à¤ªà¤·à¥à¤Ÿ à¤Šà¤‚à¤šà¤¾à¤ˆ à¤ªà¤° à¤¨à¤¿à¤°à¥à¤­à¤°)à¥¤',
        aisleType: 'à¤¸à¤‚à¤•à¥€à¤°à¥à¤£ à¤—à¤²à¤¿à¤¯à¤¾à¤°à¤¾ (à¤°à¥€à¤š à¤Ÿà¥à¤°à¤•) à¤•à¥à¤² à¤µà¥‡à¤¯à¤°à¤¹à¤¾à¤‰à¤¸ à¤¸à¥à¤ªà¥‡à¤¸ à¤®à¥‡à¤‚ 20â€“35% à¤•à¥€ à¤¬à¤šà¤¤ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤',
        includeOpsArea: 'à¤²à¥‹à¤¡à¤¿à¤‚à¤— à¤¡à¥‰à¤•, à¤¸à¥à¤Ÿà¥‡à¤œà¤¿à¤‚à¤—, à¤ªà¥ˆà¤•à¤¿à¤‚à¤— à¤”à¤° à¤‘à¤«à¤¿à¤¸ à¤¸à¥à¤ªà¥‡à¤¸ à¤•à¥‡ à¤²à¤¿à¤ 25% à¤…à¤¤à¤¿à¤°à¤¿à¤•à¥à¤¤ à¤œà¥‹à¤¡à¤¼à¤¤à¤¾ à¤¹à¥ˆà¥¤',
        rentPerSqFt: 'à¤µà¥ˆà¤•à¤²à¥à¤ªà¤¿à¤• â€” à¤®à¤¾à¤¸à¤¿à¤• à¤¬à¤œà¤Ÿ à¤•à¥‡ à¤²à¤¿à¤ à¤ªà¥à¤°à¤¤à¤¿ à¤µà¤°à¥à¤— à¤«à¥à¤Ÿ à¤µà¤¾à¤°à¥à¤·à¤¿à¤• à¤•à¤¿à¤°à¤¾à¤¯à¤¾ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚à¥¤',
      },
      options: {
        rackingType: {
          'selective': 'à¤¸à¥‡à¤²à¥‡à¤•à¥à¤Ÿà¤¿à¤µ à¤ªà¥ˆà¤²à¥‡à¤Ÿ à¤°à¥ˆà¤• (100% à¤¸à¥€à¤§à¥€ à¤ªà¤¹à¥à¤‚à¤š)',
          'floor-stack': 'à¤«à¤°à¥à¤¶ à¤ªà¤° à¤¬à¥à¤²à¥‰à¤• à¤¸à¥à¤Ÿà¥ˆà¤•à¤¿à¤‚à¤— (à¤¥à¥‹à¤• à¤­à¤‚à¤¡à¤¾à¤°à¤£)',
          'double-deep': 'à¤¡à¤¬à¤²-à¤¡à¥€à¤ª à¤°à¥ˆà¤• (à¤‰à¤šà¥à¤š à¤˜à¤¨à¤¤à¥à¤µ)',
          'drive-in': 'à¤¡à¥à¤°à¤¾à¤‡à¤µ-à¤‡à¤¨ à¤°à¥ˆà¤• (à¤…à¤§à¤¿à¤•à¤¤à¤® à¤˜à¤¨à¤¤à¥à¤µ)',
        },
        aisleType: {
          'wide': 'à¤šà¥Œà¤¡à¤¼à¤¾ à¤—à¤²à¤¿à¤¯à¤¾à¤°à¤¾ (à¤®à¤¾à¤¨à¤• à¤«à¥‹à¤°à¥à¤•à¤²à¤¿à¤«à¥à¤Ÿ, 12â€“13 à¤«à¥€à¤Ÿ)',
          'narrow': 'à¤¸à¤‚à¤•à¥€à¤°à¥à¤£ à¤—à¤²à¤¿à¤¯à¤¾à¤°à¤¾ (à¤°à¥€à¤š à¤Ÿà¥à¤°à¤•, 9â€“10 à¤«à¥€à¤Ÿ)',
          'vna': 'à¤…à¤¤à¤¿-à¤¸à¤‚à¤•à¥€à¤°à¥à¤£ à¤—à¤²à¤¿à¤¯à¤¾à¤°à¤¾ (VNA à¤Ÿà¤°à¥‡à¤Ÿ à¤Ÿà¥à¤°à¤•, 6 à¤«à¥€à¤Ÿ)',
        },
      },
      article: `## à¤µà¥‡à¤¯à¤°à¤¹à¤¾à¤‰à¤¸ à¤¸à¥à¤ªà¥‡à¤¸ à¤•à¥€ à¤—à¤£à¤¨à¤¾ à¤•à¥ˆà¤¸à¥‡ à¤•à¤°à¥‡à¤‚

à¤ªà¥ˆà¤²à¥‡à¤Ÿ à¤¸à¥à¤Ÿà¥‹à¤°à¥‡à¤œ à¤«à¥à¤Ÿà¤ªà¥à¤°à¤¿à¤‚à¤Ÿ, à¤«à¥‹à¤°à¥à¤•à¤²à¤¿à¤«à¥à¤Ÿ à¤—à¤²à¤¿à¤¯à¤¾à¤°à¥‹à¤‚ à¤”à¤° à¤²à¥‹à¤¡à¤¿à¤‚à¤— à¤¡à¥‰à¤• à¤à¤°à¤¿à¤¯à¤¾ à¤•à¥‹ à¤œà¥‹à¤¡à¤¼à¤•à¤° à¤…à¤ªà¤¨à¥‡ à¤²à¥‰à¤œà¤¿à¤¸à¥à¤Ÿà¤¿à¤•à¥à¤¸ à¤—à¥‹à¤¦à¤¾à¤® à¤•à¥‡ à¤²à¤¿à¤ à¤†à¤µà¤¶à¥à¤¯à¤• à¤¸à¤Ÿà¥€à¤• à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¤«à¤² à¤œà¥à¤žà¤¾à¤¤ à¤•à¤°à¥‡à¤‚à¥¤`,
    },

    zh: {
      name: 'ä»“åº“é¢ç§¯ä¸Žæ‰˜ç›˜å®¹é‡è®¡ç®—å™¨',
      shortDescription:
        'å…è´¹ä»“åº“ç©ºé—´ä¸Žä»“å‚¨é¢ç§¯è®¡ç®—å™¨ã€‚å¿«é€Ÿè®¡ç®—æ‰€éœ€æ€»å»ºç­‘é¢ç§¯ï¼ˆå¹³æ–¹ç±³/å¹³æ–¹è‹±å°ºï¼‰ã€æ‰˜ç›˜å­˜æ”¾é‡ã€å‰è½¦å··é“å®½åº¦åŠæ¯æœˆç§Ÿèµæˆæœ¬ã€‚',
      helpTexts: {
        palletCount: 'ä»“åº“éœ€è¦å­˜æ”¾çš„æ ‡å‡†æ‰˜ç›˜ï¼ˆGMAæˆ–æ¬§æ ‡ï¼‰æ€»æ•°ã€‚',
        rackingType: 'é‡åž‹æ¨ªæ¢å¼è´§æž¶å¯100%ç›´æŽ¥å–è´§ï¼›è´¯é€šå¼å’ŒåŒæ·±ä½è´§æž¶å¯æžå¤§æé«˜ç©ºé—´å¯†åº¦ã€‚',
        rackLevels: 'åž‚ç›´è´§æž¶å±‚æ•°ï¼ˆæ ¹æ®ä»“åº“æ¢ä¸‹å‡€ç©ºé«˜åº¦å†³å®šï¼‰ã€‚',
        aisleType: 'å‰ç§»å¼å‰è½¦çª„å··é“å¯æ¯”å¹³è¡¡é‡å‰è½¦èŠ‚çœ20â€“35%çš„é€šé“é¢ç§¯ã€‚',
        includeOpsArea: 'å¢žåŠ 25%ç¼“å†²é¢ç§¯ç”¨äºŽè£…å¸è´§æœˆå°ã€å‡ºå…¥åº“æš‚å­˜åŒºã€åŠžå…¬å®¤åŠå……ç”µé—´ã€‚',
        rentPerSqFt: 'å¯é€‰ â€” è¾“å…¥æ¯å¹´æ¯å¹³æ–¹ç±³æˆ–å¹³æ–¹è‹±å°ºçš„ç§Ÿé‡‘ä»¥æµ‹ç®—æ¯æœˆç§Ÿé‡‘ã€‚',
      },
      options: {
        rackingType: {
          'selective': 'æ¨ªæ¢å¼è´§æž¶ï¼ˆå•æ·±ä½ â€” 100%è‡ªç”±å­˜å–ï¼‰',
          'floor-stack': 'åœ°é¢å¹³åº“å †åž›ï¼ˆå¤§å®—æ•´æ‰˜å­˜å‚¨ï¼‰',
          'double-deep': 'åŒæ·±ä½è´§æž¶ï¼ˆé«˜å¯†åº¦ä»“å‚¨ï¼‰',
          'drive-in': 'è´¯é€šå¼/é©¶å…¥å¼è´§æž¶ï¼ˆè¶…é«˜å¯†åº¦ï¼‰',
        },
        aisleType: {
          'wide': 'æ ‡å‡†å®½å··é“ï¼ˆå¹³è¡¡é‡å‰è½¦ï¼Œ3.5â€“4.0ç±³ï¼‰',
          'narrow': 'çª„å··é“ï¼ˆå‰ç§»å¼å‰è½¦ï¼Œ2.7â€“3.0ç±³ï¼‰',
          'vna': 'è¶…çª„å··é“ï¼ˆVNAä¸‰å‘å †åž›æœºï¼Œ1.8ç±³ï¼‰',
        },
      },
      article: `## å¦‚ä½•ç§‘å­¦è®¡ç®—ä»“å‚¨ç‰©æµæ‰€éœ€é¢ç§¯

æ ¹æ®æ‰˜ç›˜åº•ä½ã€è´§æž¶åž‚ç›´å±‚æ•°ã€å‰è½¦ä½œä¸šé€šé“åŠæ”¶å‘è´§æœˆå°é¢ç§¯ï¼Œç³»ç»ŸåŒ–æµ‹ç®—çŽ°ä»£ä»“å‚¨ç‰©æµä¸­å¿ƒçš„æ€»å»ºç­‘é¢ç§¯ã€‚`,
    },

    ja: {
      name: 'å€‰åº«é¢ç©ãƒ»ãƒ‘ãƒ¬ãƒƒãƒˆä¿ç®¡è¨ˆç®—æ©Ÿ',
      shortDescription:
        'ç„¡æ–™ã®å€‰åº«é¢ç©ãƒ»ä¿ç®¡å®¹é‡è¨ˆç®—ãƒ„ãƒ¼ãƒ«ã€‚å¿…è¦åºŠé¢ç©ï¼ˆåªãƒ»mÂ²ãƒ»ftÂ²ï¼‰ã€ãƒ‘ãƒ¬ãƒƒãƒˆåŽå®¹æ•°ã€ãƒ•ã‚©ãƒ¼ã‚¯ãƒªãƒ•ãƒˆé€šè·¯å¹…ã€è·å—ãƒãƒ¼ã‚¹ãŠã‚ˆã³æ¦‚ç®—è³ƒæ–™ã‚’çž¬æ™‚ã«ç®—å‡ºã€‚',
      helpTexts: {
        palletCount: 'ä¿ç®¡ã™ã‚‹1100åž‹ãƒ‘ãƒ¬ãƒƒãƒˆã¾ãŸã¯ç±³æ¬§ãƒ‘ãƒ¬ãƒƒãƒˆã®ç·æ•°ã€‚',
        rackingType: 'é‡é‡ãƒ‘ãƒ¬ãƒƒãƒˆãƒ©ãƒƒã‚¯ã¯100%ã‚¢ã‚¯ã‚»ã‚¹å¯èƒ½ï¼›ãƒ‰ãƒ©ã‚¤ãƒ–ã‚¤ãƒ³ã¯ä¿ç®¡åŠ¹çŽ‡ã‚’æœ€å¤§åŒ–ã€‚',
        rackLevels: 'ãƒ‘ãƒ¬ãƒƒãƒˆãƒ©ãƒƒã‚¯ç©è¼‰æ®µæ•°ï¼ˆæœ‰åŠ¹å¤©äº•é«˜ã«å¿œã˜ã¦è¨­å®šï¼‰ã€‚',
        aisleType: 'ãƒªãƒ¼ãƒãƒªãƒ•ãƒˆç”¨ç‹­å°é€šè·¯ã«ã‚ˆã‚Šå€‰åº«åºŠé¢ç©ã‚’20ã€œ35%å‰Šæ¸›å¯èƒ½ã€‚',
        includeOpsArea: 'ãƒˆãƒ©ãƒƒã‚¯ãƒãƒ¼ã‚¹ã€å…¥å‡ºè·ä»•åˆ†å ´ã€äº‹å‹™æ‰€ç”¨ã«25%ã®ä½™è£•ã‚¹ãƒšãƒ¼ã‚¹ã‚’åŠ ç®—ã€‚',
        rentPerSqFt: 'ä»»æ„ â€” åªå˜ä¾¡ã¾ãŸã¯å¹³æ–¹ãƒ•ã‚£ãƒ¼ãƒˆå˜ä¾¡ã‚’å…¥åŠ›ã—ã¦æœˆé¡è³ƒæ–™ã‚’æ¦‚ç®—ã€‚',
      },
      options: {
        rackingType: {
          'selective': 'é‡é‡ãƒ‘ãƒ¬ãƒƒãƒˆãƒ©ãƒƒã‚¯ï¼ˆ100%å€‹åˆ¥ã‚¢ã‚¯ã‚»ã‚¹ï¼‰',
          'floor-stack': 'å¹³ç½®ãæ®µç©ã¿ä¿ç®¡ï¼ˆãƒãƒ«ã‚¯ä¿ç®¡ï¼‰',
          'double-deep': 'ãƒ€ãƒ–ãƒ«ãƒ‡ã‚£ãƒ¼ãƒ—ãƒ©ãƒƒã‚¯ï¼ˆé«˜å¯†åº¦ï¼‰',
          'drive-in': 'ãƒ‰ãƒ©ã‚¤ãƒ–ã‚¤ãƒ³ãƒ©ãƒƒã‚¯ï¼ˆè¶…é«˜å¯†åº¦ï¼‰',
        },
        aisleType: {
          'wide': 'æ¨™æº–é€šè·¯ï¼ˆã‚«ã‚¦ãƒ³ã‚¿ãƒ¼ãƒ•ã‚©ãƒ¼ã‚¯ãƒªãƒ•ãƒˆï¼Œ3.5ã€œ4.0mï¼‰',
          'narrow': 'ç‹­å°é€šè·¯ï¼ˆãƒªãƒ¼ãƒãƒ•ã‚©ãƒ¼ã‚¯ãƒªãƒ•ãƒˆï¼Œ2.7ã€œ3.0mï¼‰',
          'vna': 'è¶…ç‹­å°é€šè·¯ï¼ˆVNAä¸‰æ–¹å‘ã‚¹ã‚¿ãƒƒã‚«ãƒ¼ï¼Œ1.8mï¼‰',
        },
      },
      article: `## å€‰åº«é¢ç©ãƒ»ç‰©æµã‚»ãƒ³ã‚¿ãƒ¼è¦æ¨¡ã®è¨ˆç®—æ–¹æ³•

ãƒ‘ãƒ¬ãƒƒãƒˆå¹³ç½®ãæž æ•°ã€åž‚ç›´ãƒ©ãƒƒã‚¯æ®µæ•°ã€ãƒ•ã‚©ãƒ¼ã‚¯ãƒªãƒ•ãƒˆæ—‹å›žé€šè·¯ã€å…¥å‡ºè·ãƒãƒ¼ã‚¹ã‚’æ­£ç¢ºã«ãƒ¢ãƒ‡ãƒ«åŒ–ã—ã€æœ€é©ãªå€‰åº«åºŠé¢ç©ã‚’å‰²ã‚Šå‡ºã—ã¾ã™ã€‚`,
    },

    ko: {
      name: 'ë¬¼ë¥˜ì°½ê³  ë©´ì  ë° ë³´ê´€ìš©ëŸ‰ ê³„ì‚°ê¸°',
      shortDescription:
        'ë¬´ë£Œ ë¬¼ë¥˜ì°½ê³  í‰ìˆ˜ ë° ë©´ì  ê³„ì‚°ê¸°. ë³´ê´€í•  íŒŒë ˆíŠ¸ ìˆ˜ëŸ‰, ëž™ ì‹œìŠ¤í…œ, ì§€ê²Œì°¨ í†µë¡œ í­, ë„í¬ í•˜ì—­ìž¥ ë° ì›” ìž„ëŒ€ë£Œë¥¼ ì •í™•ížˆ ì‚°ì¶œí•˜ì„¸ìš”.',
      helpTexts: {
        palletCount: 'ë³´ê´€í•  í‘œì¤€ íŒŒë ˆíŠ¸(1100x1100 ë˜ëŠ” GMA)ì˜ ì´ ìˆ˜ëŸ‰.',
        rackingType: 'íŒŒë ˆíŠ¸ëž™ì€ 100% ê°œë³„ ì ‘ê·¼ì´ ê°€ëŠ¥í•˜ë©°, ë“œë¼ì´ë¸Œì¸ëž™ì€ ë³´ê´€ ë°€ë„ë¥¼ ê·¹ëŒ€í™”í•©ë‹ˆë‹¤.',
        rackLevels: 'ìˆ˜ì§ ëž™ ë‹¨ìˆ˜ (ì°½ê³  ìœ íš¨ ì¸µê³ ì— ë”°ë¼ ê²°ì •).',
        aisleType: 'ë¦¬ì¹˜ ì§€ê²Œì°¨ìš© ì¢ì€ í†µë¡œë¥¼ ì‚¬ìš©í•˜ë©´ ì°½ê³  ë©´ì ì„ 20~35% ì ˆê°í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤.',
        includeOpsArea: 'ë„í¬ í•˜ì—­ìž¥, ìž…ì¶œê³  ìŠ¤í…Œì´ì§•, ì‚¬ë¬´ì‹¤ ë° ì¶©ì „ì‹¤ì„ ìœ„í•´ 25%ì˜ ì—¬ìœ  ë©´ì ì„ ì¶”ê°€í•©ë‹ˆë‹¤.',
        rentPerSqFt: 'ì„ íƒì‚¬í•­ â€” ì›” ìž„ëŒ€ë£Œ ì‚°ì¶œì„ ìœ„í•œ í‰ë‹¹ ë˜ëŠ” í‰ë°©í”¼íŠ¸ë‹¹ ì—°ê°„ ìž„ëŒ€ ë‹¨ê°€.',
      },
      options: {
        rackingType: {
          'selective': 'ì¼ë°˜ íŒŒë ˆíŠ¸ëž™ (100% ê°œë³„ ìž…ì¶œê³ )',
          'floor-stack': 'ë°”ë‹¥ í‰ì¹˜ ì ìž¬ (ë²Œí¬ ëŒ€ëŸ‰ ë³´ê´€)',
          'double-deep': 'ë”ë¸” ë”¥ ëž™ (ê³ ë°€ë„ ë³´ê´€)',
          'drive-in': 'ë“œë¼ì´ë¸Œì¸ ëž™ (ì´ˆê³ ë°€ë„ ë³´ê´€)',
        },
        aisleType: {
          'wide': 'í‘œì¤€ í†µë¡œ (ì¢Œì‹ ì§€ê²Œì°¨, 3.5~4.0m)',
          'narrow': 'ì¢ì€ í†µë¡œ (ìž…ì‹ ë¦¬ì¹˜ ì§€ê²Œì°¨, 2.7~3.0m)',
          'vna': 'ì´ˆí˜‘í†µë¡œ (VNA ì‚¼ë°©í–¥ ì§€ê²Œì°¨, 1.8m)',
        },
      },
      article: `## ë¬¼ë¥˜ì°½ê³  ë©´ì  ê³„ì‚° ë° ê·œëª¨ ì‚°ì • ë°©ë²•

íŒŒë ˆíŠ¸ ì ìœ  ë©´ì , ëž™ ì ìž¬ ë‹¨ìˆ˜, ì§€ê²Œì°¨ íšŒì „ ë°˜ê²½ í†µë¡œ, ìƒí•˜ì°¨ ë„í¬ ê³µê°„ì„ ì¢…í•©í•˜ì—¬ ìµœì ì˜ ë¬¼ë¥˜ì°½ê³  ê±´ì¶• ë° ìž„ëŒ€ ë©´ì ì„ ê³„ì‚°í•©ë‹ˆë‹¤.`,
    },
  },
  'snow-load-calculator': {
  "en": {
    "name": "Snow Load Calculator",
    "shortDescription": "Free snow load calculator per ASCE 7-22. Calculate flat roof and sloped roof design snow loads, drift surcharges, and total structural loads.",
    "helpTexts": {
      "groundSnowLoad": "Mapped ground snow load (pg) from ASCE 7-22 Fig. 7.2-1 or local building department (e.g. 25 psf / 1.2 kPa).",
      "roofSlope": "Roof pitch in degrees (0Â° = flat roof, 18.4Â° = 4/12 pitch). Slopes above 70Â° carry zero snow load.",
      "exposureCategory": "Sheltered sites accumulate more snow (higher Ce); windy open-terrain sites blow snow off (lower Ce).",
      "thermalCategory": "Heat loss through the roof melts snow (lower Ct); unheated roofs accumulate more snow (higher Ct).",
      "riskCategory": "High-occupancy and essential emergency buildings require higher safety factors (Is).",
      "roofArea": "Horizontal projected footprint area of the roof. Used to calculate total structural load.",
      "includeDrift": "Adds windward drift surcharge for lower roof adjacent to higher structure.",
      "upperRoofLength": "Horizontal length of the upper roof in the wind direction.",
      "lowerToUpperHeight": "Vertical clear height between lower and upper roof decks."
    },
    "options": {
      "exposureCategory": {
        "sheltered": "Sheltered (Ce = 1.3) â€” trees/buildings on all sides",
        "partial": "Partially Exposed (Ce = 1.0) â€” suburban, typical",
        "full": "Fully Exposed (Ce = 0.9) â€” open flat terrain, no obstacles"
      },
      "thermalCategory": {
        "heated": "Heated Structure (Ct = 1.0) â€” continuous occupancy",
        "cold": "Cold Warehouse (Ct = 1.1) â€” kept just above freezing",
        "unheated": "Unheated / Open Structure (Ct = 1.2) â€” uninsulated",
        "freezer": "Freezer Building (Ct = 1.3) â€” refrigerated cold storage"
      },
      "riskCategory": {
        "cat1": "Category I â€” Low Hazard (Is = 0.8): storage, agriculture",
        "cat2": "Category II â€” Standard (Is = 1.0): residential, office",
        "cat3": "Category III â€” High Occupancy (Is = 1.1): schools, assembly > 300",
        "cat4": "Category IV â€” Essential (Is = 1.2): hospitals, fire stations"
      }
    },
    "article": "## ASCE 7-22 Snow Load Design Guide\\n\\nRoof snow loads represent the downward force exerted on roof structures by accumulated snow and ice. ASCE 7-22 Chapter 7 establishes governing engineering design requirements across the United States.\\n\\n### Key Formulas\\n- **Flat Roof Load:** pf = 0.7 Ã— Ce Ã— Ct Ã— Is Ã— pg\\n- **Sloped Roof Load:** ps = Cs Ã— pf\\n- **Minimum Load:** pm = Is Ã— 20 psf (for pg â‰¥ 20 psf)\\n- **Governing Design Load:** max(ps, pm)"
  },
  "es": {
    "name": "Calculadora de Carga de Nieve",
    "shortDescription": "Calculadora gratuita de carga de nieve segÃºn ASCE 7-22 y CTE. Calcule cargas de diseÃ±o en cubiertas planas e inclinadas, sobrecargas de acumulaciÃ³n y carga estructural total.",
    "helpTexts": {
      "groundSnowLoad": "Carga de nieve sobre el terreno (pg) segÃºn mapa de zonificaciÃ³n o normativa local (ej. 25 psf / 1.2 kPa).",
      "roofSlope": "InclinaciÃ³n de la cubierta en grados (0Â° = plana, 18.4Â° = 33% pendiente). A partir de 70Â° la nieve resbala por completo.",
      "exposureCategory": "Zonas resguardadas acumulan mÃ¡s nieve (mayor Ce); zonas expuestas al viento reducen la carga (menor Ce).",
      "thermalCategory": "El calor interior derrite la nieve (menor Ct); cubiertas no calefactadas acumulan mÃ¡s (mayor Ct).",
      "riskCategory": "Edificios esenciales y de gran afluencia exigen mayores factores de seguridad (Is).",
      "roofArea": "Ãrea en proyecciÃ³n horizontal de la cubierta para calcular la carga total.",
      "includeDrift": "Calcula la sobrecarga por acumulaciÃ³n de nieve junto a desniveles o muros mÃ¡s altos.",
      "upperRoofLength": "Longitud del tejado superior en la direcciÃ³n del viento dominante.",
      "lowerToUpperHeight": "Desnivel libre entre la cubierta inferior y el alero superior."
    },
    "options": {
      "exposureCategory": {
        "sheltered": "Protegido (Ce = 1.3) â€” rodeado de Ã¡rboles o edificios",
        "partial": "Parcialmente Expuesto (Ce = 1.0) â€” suburbano estÃ¡ndar",
        "full": "Totalmente Expuesto (Ce = 0.9) â€” terreno abierto sin obstÃ¡culos"
      },
      "thermalCategory": {
        "heated": "Estructura Calefactada (Ct = 1.0) â€” uso residencial/oficinas",
        "cold": "AlmacÃ©n FrÃ­o (Ct = 1.1) â€” temperatura sobre el punto de congelaciÃ³n",
        "unheated": "Sin CalefacciÃ³n (Ct = 1.2) â€” naves abiertas o sin aislar",
        "freezer": "CÃ¡mara FrigorÃ­fica (Ct = 1.3) â€” temperaturas bajo cero"
      },
      "riskCategory": {
        "cat1": "CategorÃ­a I â€” Bajo Riesgo (Is = 0.8): agrÃ­cola, almacÃ©n",
        "cat2": "CategorÃ­a II â€” EstÃ¡ndar (Is = 1.0): residencial, comercial",
        "cat3": "CategorÃ­a III â€” Alta OcupaciÃ³n (Is = 1.1): escuelas, auditorios",
        "cat4": "CategorÃ­a IV â€” InstalaciÃ³n Esencial (Is = 1.2): hospitales, bomberos"
      }
    },
    "article": "## GuÃ­a de CÃ¡lculo de Sobrecarga de Nieve en Cubiertas\\n\\nLa sobrecarga de nieve es una de las acciones climÃ¡ticas mÃ¡s crÃ­ticas en el dimensionamiento de estructuras de cubierta en zonas frÃ­as y de montaÃ±a."
  },
  "fr": {
    "name": "Calculateur de Charge de Neige",
    "shortDescription": "Calculateur gratuit de charge de neige sur toiture selon ASCE 7-22 et Eurocode 1. Calculez les charges de calcul, l accumulation et les efforts totaux.",
    "helpTexts": {
      "groundSnowLoad": "Charge de neige caractÃ©ristique sur le sol (pg) selon la carte de zonage local.",
      "roofSlope": "Pente du toit en degrÃ©s (0Â° = toiture-terrasse). Au-delÃ  de 70Â°, la neige glisse totalement.",
      "exposureCategory": "Les sites abritÃ©s accumulent davantage de neige; les sites ventÃ©s la chassent.",
      "thermalCategory": "La dÃ©perdition thermique fait fondre la neige; les bÃ¢timents non chauffÃ©s retiennent toute la charge.",
      "riskCategory": "Les Ã©tablissements recevant du public exigent des coefficients de sÃ©curitÃ© accrus.",
      "roofArea": "Surface en projection horizontale de la toiture.",
      "includeDrift": "Ajoute la surcharge liÃ©e aux congÃ¨res contre les murs ou acrotÃ¨res hauts.",
      "upperRoofLength": "Longueur de la toiture supÃ©rieure dans le sens du vent.",
      "lowerToUpperHeight": "Hauteur libre entre les deux niveaux de toiture."
    },
    "options": {
      "exposureCategory": {
        "sheltered": "AbritÃ© (Ce = 1.3) â€” entourÃ© de forÃªts ou bÃ¢timents",
        "partial": "Normalement ExposÃ© (Ce = 1.0) â€” zone suburbaine",
        "full": "TrÃ¨s ExposÃ© (Ce = 0.9) â€” terrain plat ouvert aux vents"
      },
      "thermalCategory": {
        "heated": "BÃ¢timent ChauffÃ© (Ct = 1.0) â€” occupation continue",
        "cold": "EntrepÃ´t Froid (Ct = 1.1) â€” maintenu juste au-dessus de 0Â°C",
        "unheated": "Non ChauffÃ© / Ouvert (Ct = 1.2) â€” sans isolation",
        "freezer": "BÃ¢timent Frigorifique (Ct = 1.3) â€” congÃ©lation"
      },
      "riskCategory": {
        "cat1": "CatÃ©gorie I â€” Faible Risque (Is = 0.8) : agricole, stockage",
        "cat2": "CatÃ©gorie II â€” Standard (Is = 1.0) : habitations, bureaux",
        "cat3": "CatÃ©gorie III â€” ERP Important (Is = 1.1) : Ã©coles, cinÃ©mas",
        "cat4": "CatÃ©gorie IV â€” Vital (Is = 1.2) : hÃ´pitaux, casernes"
      }
    },
    "article": "## Dimensionnement de la Charge de Neige sur Toiture\\n\\nDÃ©terminez avec prÃ©cision la charge de neige pour vos charpentes et toitures terrasses."
  },
  "de": {
    "name": "Schneelast-Rechner",
    "shortDescription": "Kostenloser Schneelast-Rechner nach ASCE 7-22 und DIN EN 1991-1-3 (Eurocode 1). Berechnen Sie Flachdach- und SchrÃ¤gdach-Schneelasten, Schneeverwehungen und Gesamtlasten.",
    "helpTexts": {
      "groundSnowLoad": "Charakteristische Schneelast am Boden (pg) aus der Schneelastzonenkarte.",
      "roofSlope": "Dachneigung in Grad (0Â° = Flachdach). Bei mehr als 70Â° rutscht der Schnee vollstÃ¤ndig ab.",
      "exposureCategory": "WindgeschÃ¼tzte Lagen sammeln mehr Schnee; offene windige Lagen blasen Schnee ab.",
      "thermalCategory": "WÃ¤rmedurchgang schmilzt Schnee ab; unbeheizte DÃ¤cher tragen die volle Schneelast.",
      "riskCategory": "Wichtige InfrastrukturgebÃ¤ude verlangen erhÃ¶hte Sicherheitsfaktoren (Is).",
      "roofArea": "Horizontale DachgrundflÃ¤che zur Ermittlung der statischen Gesamtkraft.",
      "includeDrift": "BerÃ¼cksichtigt Schneewehen an HÃ¶hensprÃ¼ngen und WÃ¤nden.",
      "upperRoofLength": "LÃ¤nge des oberen Dachs in Windrichtung.",
      "lowerToUpperHeight": "HÃ¶henunterschied zwischen unterem und oberem Dachrand."
    },
    "options": {
      "exposureCategory": {
        "sheltered": "WindgeschÃ¼tzt (Ce = 1.3) â€” von Wald/Bauten umgeben",
        "partial": "Normal Exponiert (Ce = 1.0) â€” typische Siedlungslage",
        "full": "Voll Exponiert (Ce = 0.9) â€” freies flaches GelÃ¤nde"
      },
      "thermalCategory": {
        "heated": "Beheiztes GebÃ¤ude (Ct = 1.0) â€” Standardwohn-/BÃ¼robau",
        "cold": "KÃ¼hllager (Ct = 1.1) â€” knapp Ã¼ber dem Gefrierpunkt",
        "unheated": "Unbeheizt / Offen (Ct = 1.2) â€” VordÃ¤cher, Hallen",
        "freezer": "TiefkÃ¼hllager (Ct = 1.3) â€” unter 0Â°C gekÃ¼hlt"
      },
      "riskCategory": {
        "cat1": "Kategorie I â€” Geringes Risiko (Is = 0.8): Landwirtschaft, Lager",
        "cat2": "Kategorie II â€” Standard (Is = 1.0): Wohn- und Gewerbebau",
        "cat3": "Kategorie III â€” Hohe Belegung (Is = 1.1): Schulen, SÃ¤le",
        "cat4": "Kategorie IV â€” Kritische Infrastruktur (Is = 1.2): Kliniken, Rettung"
      }
    },
    "article": "## Leitfaden zur statischen Schneelastberechnung\\n\\nSichere Bemessung von Dachkonstruktionen und TrÃ¤gern gegen SchneeÃ¼berlastung."
  },
  "pt": {
    "name": "Calculadora de Carga de Neve",
    "shortDescription": "Calculadora gratuita de sobrecarga de neve para coberturas segundo ASCE 7-22 e normas estruturais. Calcule cargas em telhados planos e inclinados.",
    "helpTexts": {
      "groundSnowLoad": "Carga bÃ¡sica de neve no solo (pg) indicada pelo cÃ³digo de obras regional.",
      "roofSlope": "InclinaÃ§Ã£o do telhado em graus (0Â° = telhado plano). Acima de 70Â° a neve escorrega.",
      "exposureCategory": "Locais abrigados acumulam mais neve; locais expostos ao vento dispersam a camada.",
      "thermalCategory": "O calor interno do edifÃ­cio derrete a neve da cobertura.",
      "riskCategory": "Estruturas essenciais exigem maiores coeficientes de seguranÃ§a.",
      "roofArea": "Ãrea da projeÃ§Ã£o horizontal do telhado.",
      "includeDrift": "Calcula o acÃºmulo e sobrecarga de vento em desnÃ­veis de cobertura.",
      "upperRoofLength": "ExtensÃ£o do telhado superior na direÃ§Ã£o do vento.",
      "lowerToUpperHeight": "DesnÃ­vel vertical entre as duas coberturas."
    },
    "options": {
      "exposureCategory": {
        "sheltered": "Abrigado (Ce = 1.3) â€” cercado por Ã¡rvores/edificaÃ§Ãµes",
        "partial": "Parcialmente Exposto (Ce = 1.0) â€” Ã¡rea suburbana",
        "full": "Totalmente Exposto (Ce = 0.9) â€” terreno aberto e plano"
      },
      "thermalCategory": {
        "heated": "Aquecido (Ct = 1.0) â€” habitaÃ§Ã£o com aquecimento contÃ­nuo",
        "cold": "ArmazÃ©m Frio (Ct = 1.1) â€” pouco acima de zero",
        "unheated": "NÃ£o Aquecido (Ct = 1.2) â€” galpÃµes sem isolamento",
        "freezer": "FrigorÃ­fico (Ct = 1.3) â€” congelamento ativo"
      },
      "riskCategory": {
        "cat1": "Classe I â€” Baixo Risco (Is = 0.8): galpÃµes rurais",
        "cat2": "Classe II â€” PadrÃ£o (Is = 1.0): residÃªncias, escritÃ³rios",
        "cat3": "Classe III â€” Alta OcupaÃ§Ã£o (Is = 1.1): escolas, teatros",
        "cat4": "Classe IV â€” Essencial (Is = 1.2): hospitais, bombeiros"
      }
    },
    "article": "## Dimensionamento Estrutural para Sobrecarga de Neve\\n\\nGuia tÃ©cnico para cÃ¡lculo de cargas em vigas, tesouras e coberturas metÃ¡licas."
  },
  "it": {
    "name": "Calcolatore Carico Neve",
    "shortDescription": "Calcolatore gratuito carico neve per coperture secondo ASCE 7-22 e NTC 2018. Calcola il carico di progetto per tetti piani e a falda.",
    "helpTexts": {
      "groundSnowLoad": "Carico neve al suolo (pg) secondo la zona climatica di riferimento.",
      "roofSlope": "Inclinazione della copertura in gradi (0Â° = tetto piano). Oltre i 70Â° la neve scivola.",
      "exposureCategory": "Le aree riparate accumulano piÃ¹ neve; i siti ventosi favoriscono lo sgombero.",
      "thermalCategory": "La dispersione termica scioglie la neve; gli edifici non riscaldati accumulano di piÃ¹.",
      "riskCategory": "Edifici strategici richiedono fattori di importanza maggiori.",
      "roofArea": "Superficie in pianta della copertura per il calcolo del peso totale.",
      "includeDrift": "Calcola l accumulo di neve provocato dal vento vicino a pareti piÃ¹ alte.",
      "upperRoofLength": "Lunghezza del tetto superiore nella direzione del vento.",
      "lowerToUpperHeight": "Altezza libera tra la copertura inferiore e superiore."
    },
    "options": {
      "exposureCategory": {
        "sheltered": "Riparato (Ce = 1.3) â€” alberi o fabbricati adiacenti",
        "partial": "Esposizione Normale (Ce = 1.0) â€” contesto suburbano",
        "full": "Completamente Esposto (Ce = 0.9) â€” terreno aperto"
      },
      "thermalCategory": {
        "heated": "Riscaldato (Ct = 1.0) â€” residenziale o uffici",
        "cold": "Deposito Freddo (Ct = 1.1) â€” poco sopra 0Â°C",
        "unheated": "Non Riscaldato (Ct = 1.2) â€” tettoie aperte",
        "freezer": "Cella Frigorifera (Ct = 1.3) â€” sottozero"
      },
      "riskCategory": {
        "cat1": "Classe I â€” Rischio Basso (Is = 0.8): agricolo, magazzini",
        "cat2": "Classe II â€” Ordinario (Is = 1.0): abitazioni",
        "cat3": "Classe III â€” Affollamento Elevato (Is = 1.1): scuole",
        "cat4": "Classe IV â€” Strategico (Is = 1.2): ospedali, caserme"
      }
    },
    "article": "## Guida Tecnica al Calcolo del Carico Neve sulle Strutture\\n\\nCalcola le sollecitazioni agenti sulla copertura per la verifica strutturale."
  },
  "nl": {
    "name": "Sneeuwbelasting Calculator",
    "shortDescription": "Gratis sneeuwbelasting calculator volgens ASCE 7-22 en Eurocode 1. Bereken de rekenwaarde voor platte en hellende daken en sneeuwophopingen.",
    "helpTexts": {
      "groundSnowLoad": "Karakteristieke grondsneeuwbelasting (pg) volgens de lokale norm.",
      "roofSlope": "Dakhelling in graden (0Â° = plat dak). Boven 70Â° glijdt alle sneeuw direct af.",
      "exposureCategory": "Beschutte locaties verzamelen meer sneeuw; open winderige vlaktes blazen het dak schoon.",
      "thermalCategory": "Warmteverlies smelt sneeuw; onverwarmde daken dragen de volledige sneeuwlast.",
      "riskCategory": "Gebouwen met hoge bezetting vereisen strengere veiligheidsfactoren.",
      "roofArea": "Grondoppervlak van het dak voor totale belastingberekening.",
      "includeDrift": "Berekent sneeuwophopingen bij opgaande gevels en niveauverschillen.",
      "upperRoofLength": "Lengte van het bovendak in de windrichting.",
      "lowerToUpperHeight": "Vrije hoogte tussen het onderdak en het bovendak."
    },
    "options": {
      "exposureCategory": {
        "sheltered": "Beschut (Ce = 1.3) â€” omringd door bomen of bebouwing",
        "partial": "Normaal Blootgesteld (Ce = 1.0) â€” voorstedelijk",
        "full": "Volledig Blootgesteld (Ce = 0.9) â€” open vlak terrein"
      },
      "thermalCategory": {
        "heated": "Verwarmd Gebouw (Ct = 1.0) â€” woning of kantoor",
        "cold": "Koelmagazijn (Ct = 1.1) â€” net boven het vriespunt",
        "unheated": "Onverwarmd / Open (Ct = 1.2) â€” niet-geÃ¯soleerd",
        "freezer": "Vrieshuis (Ct = 1.3) â€” continue diepvries"
      },
      "riskCategory": {
        "cat1": "Klasse I â€” Laag Risico (Is = 0.8): landbouw, opslag",
        "cat2": "Klasse II â€” Standaard (Is = 1.0): woningen, winkels",
        "cat3": "Klasse III â€” Grote Bezetting (Is = 1.1): scholen, theaters",
        "cat4": "Klasse IV â€” Essentieel (Is = 1.2): ziekenhuizen, brandweer"
      }
    },
    "article": "## Constructieve Berekening van Sneeuwlasten op Daken\\n\\nBepaal de veilige belastinggrenzen voor dakspanten en dakliggers."
  },
  "pl": {
    "name": "Kalkulator ObciÄ…Å¼enia Åšniegiem",
    "shortDescription": "Darmowy kalkulator obciÄ…Å¼enia Å›niegiem wg ASCE 7-22 i Eurokodu 1 (PN-EN 1991-1-3). Oblicz obciÄ…Å¼enie dachu pÅ‚askiego i skoÅ›nego oraz worki Å›nieÅ¼ne.",
    "helpTexts": {
      "groundSnowLoad": "WartoÅ›Ä‡ charakterystyczna obciÄ…Å¼enia Å›niegiem gruntu (pg) ze strefy Å›niegowej.",
      "roofSlope": "KÄ…t nachylenia dachu w stopniach (0Â° = pÅ‚aski). PowyÅ¼ej 70Â° Å›nieg zsuwa siÄ™ samoczynnie.",
      "exposureCategory": "Tereny osÅ‚oniÄ™te gromadzÄ… wiÄ™cej Å›niegu; tereny otwarte sÄ… omiatane przez wiatr.",
      "thermalCategory": "Przenikanie ciepÅ‚a topi Å›nieg; dachy nieogrzewane zatrzymujÄ… caÅ‚Ä… masÄ™.",
      "riskCategory": "Budynki o znaczeniu strategicznym wymagajÄ… wyÅ¼szego wspÃ³Å‚czynnika waÅ¼noÅ›ci.",
      "roofArea": "Rzut poziomy powierzchni dachu.",
      "includeDrift": "UwzglÄ™dnia zaspÄ™ Å›nieÅ¼nÄ… przy Å›cianach wyÅ¼szych budynkÃ³w.",
      "upperRoofLength": "DÅ‚ugoÅ›Ä‡ wyÅ¼szego dachu w kierunku wiatru.",
      "lowerToUpperHeight": "WysokoÅ›Ä‡ uskoku miÄ™dzy dachami."
    },
    "options": {
      "exposureCategory": {
        "sheltered": "OsÅ‚oniÄ™ty (Ce = 1.3) â€” otoczony drzewami lub budynkami",
        "partial": "CzÄ™Å›ciowo OdsÅ‚oniÄ™ty (Ce = 1.0) â€” teren podmiejski",
        "full": "CaÅ‚kowicie OdsÅ‚oniÄ™ty (Ce = 0.9) â€” pÅ‚aski otwarty teren"
      },
      "thermalCategory": {
        "heated": "Ogrzewany (Ct = 1.0) â€” budynek mieszkalny lub biurowy",
        "cold": "ChÅ‚odnia (Ct = 1.1) â€” temp. tuÅ¼ powyÅ¼ej 0Â°C",
        "unheated": "Nieogrzewany / Wiata (Ct = 1.2) â€” bez izolacji",
        "freezer": "MroÅºnia (Ct = 1.3) â€” temperatura ujemna"
      },
      "riskCategory": {
        "cat1": "Kategoria I â€” Niskie Ryzyko (Is = 0.8): rolnicze, wiaty",
        "cat2": "Kategoria II â€” Standard (Is = 1.0): mieszkaniowe, biurowe",
        "cat3": "Kategoria III â€” DuÅ¼e Zbiorowiska (Is = 1.1): szkoÅ‚y, hale",
        "cat4": "Kategoria IV â€” Strategiczne (Is = 1.2): szpitale, remizy"
      }
    },
    "article": "## Obliczanie ObciÄ…Å¼enia Åšniegiem wg Norm Konstrukcyjnych\\n\\nPrawidÅ‚owy dobÃ³r przekrojÃ³w krokwi i dÅºwigarÃ³w dachowych."
  },
  "ru": {
    "name": "ÐšÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€ Ð¡Ð½ÐµÐ³Ð¾Ð²Ð¾Ð¹ ÐÐ°Ð³Ñ€ÑƒÐ·ÐºÐ¸",
    "shortDescription": "Ð‘ÐµÑÐ¿Ð»Ð°Ñ‚Ð½Ñ‹Ð¹ ÐºÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€ ÑÐ½ÐµÐ³Ð¾Ð²Ð¾Ð¹ Ð½Ð°Ð³Ñ€ÑƒÐ·ÐºÐ¸ Ð½Ð° ÐºÑ€Ð¾Ð²Ð»ÑŽ Ð¿Ð¾ ASCE 7-22 Ð¸ Ð¡ÐŸ 20.13330 (Ð¡ÐÐ¸ÐŸ). Ð Ð°ÑÑ‡Ñ‘Ñ‚ Ð´Ð»Ñ Ð¿Ð»Ð¾ÑÐºÐ¸Ñ… Ð¸ ÑÐºÐ°Ñ‚Ð½Ñ‹Ñ… ÐºÑ€Ñ‹Ñˆ, ÑÐ½ÐµÐ³Ð¾Ð²Ñ‹Ñ… Ð¼ÐµÑˆÐºÐ¾Ð² Ð¸ Ð¾Ð±Ñ‰ÐµÐ¹ Ð¼Ð°ÑÑÑ‹ ÑÐ½ÐµÐ³Ð°.",
    "helpTexts": {
      "groundSnowLoad": "ÐÐ¾Ñ€Ð¼Ð°Ñ‚Ð¸Ð²Ð½Ð°Ñ ÑÐ½ÐµÐ³Ð¾Ð²Ð°Ñ Ð½Ð°Ð³Ñ€ÑƒÐ·ÐºÐ° Ð½Ð° Ð³Ñ€ÑƒÐ½Ñ‚ (pg) Ð¿Ð¾ ÐºÐ°Ñ€Ñ‚Ðµ ÑÐ½ÐµÐ³Ð¾Ð²Ð¾Ð³Ð¾ Ñ€Ð°Ð¹Ð¾Ð½Ð°.",
      "roofSlope": "Ð£ÐºÐ»Ð¾Ð½ ÐºÑ€Ð¾Ð²Ð»Ð¸ Ð² Ð³Ñ€Ð°Ð´ÑƒÑÐ°Ñ… (0Â° = Ð¿Ð»Ð¾ÑÐºÐ°Ñ). ÐŸÑ€Ð¸ ÑƒÐºÐ»Ð¾Ð½Ðµ Ð±Ð¾Ð»ÐµÐµ 70Â° ÑÐ½ÐµÐ³ ÑÑ…Ð¾Ð´Ð¸Ñ‚ Ð¿Ð¾Ð»Ð½Ð¾ÑÑ‚ÑŒÑŽ.",
      "exposureCategory": "Ð—Ð°Ñ‰Ð¸Ñ‰Ñ‘Ð½Ð½Ñ‹Ðµ ÑƒÑ‡Ð°ÑÑ‚ÐºÐ¸ Ð½Ð°ÐºÐ°Ð¿Ð»Ð¸Ð²Ð°ÑŽÑ‚ Ð±Ð¾Ð»ÑŒÑˆÐµ ÑÐ½ÐµÐ³Ð°; Ð¾Ñ‚ÐºÑ€Ñ‹Ñ‚Ñ‹Ðµ Ð¿Ñ€Ð¾Ð´ÑƒÐ²Ð°ÑŽÑ‚ÑÑ Ð²ÐµÑ‚Ñ€Ð¾Ð¼.",
      "thermalCategory": "Ð¢ÐµÐ¿Ð»Ð¾Ð¿Ð¾Ñ‚ÐµÑ€Ð¸ Ñ‡ÐµÑ€ÐµÐ· ÐºÑ€Ð¾Ð²Ð»ÑŽ Ð¿Ð¾Ð´Ñ‚Ð°Ð¿Ð»Ð¸Ð²Ð°ÑŽÑ‚ ÑÐ½ÐµÐ³; Ñ…Ð¾Ð»Ð¾Ð´Ð½Ñ‹Ðµ ÐºÑ€Ñ‹ÑˆÐ¸ Ð½ÐµÑÑƒÑ‚ Ð¿Ð¾Ð»Ð½ÑƒÑŽ Ð½Ð°Ð³Ñ€ÑƒÐ·ÐºÑƒ.",
      "riskCategory": "Ð—Ð´Ð°Ð½Ð¸Ñ Ñ Ð¼Ð°ÑÑÐ¾Ð²Ñ‹Ð¼ Ð¿Ñ€ÐµÐ±Ñ‹Ð²Ð°Ð½Ð¸ÐµÐ¼ Ð»ÑŽÐ´ÐµÐ¹ Ñ‚Ñ€ÐµÐ±ÑƒÑŽÑ‚ Ð¿Ð¾Ð²Ñ‹ÑˆÐµÐ½Ð½Ñ‹Ñ… ÐºÐ¾ÑÑ„Ñ„Ð¸Ñ†Ð¸ÐµÐ½Ñ‚Ð¾Ð² Ð½Ð°Ð´Ñ‘Ð¶Ð½Ð¾ÑÑ‚Ð¸.",
      "roofArea": "Ð“Ð¾Ñ€Ð¸Ð·Ð¾Ð½Ñ‚Ð°Ð»ÑŒÐ½Ð°Ñ Ð¿Ñ€Ð¾ÐµÐºÑ†Ð¸Ñ Ð¿Ð»Ð¾Ñ‰Ð°Ð´Ð¸ ÐºÑ€Ð¾Ð²Ð»Ð¸.",
      "includeDrift": "Ð Ð°ÑÑÑ‡Ð¸Ñ‚Ñ‹Ð²Ð°ÐµÑ‚ ÑÐ½ÐµÐ³Ð¾Ð²Ð¾Ð¹ Ð¼ÐµÑˆÐ¾Ðº Ñƒ Ð¿ÐµÑ€ÐµÐ¿Ð°Ð´Ð¾Ð² Ð²Ñ‹ÑÐ¾Ñ‚ Ð¸ Ð¿Ð°Ñ€Ð°Ð¿ÐµÑ‚Ð¾Ð².",
      "upperRoofLength": "Ð”Ð»Ð¸Ð½Ð° Ð²Ñ‹ÑˆÐµÐ»ÐµÐ¶Ð°Ñ‰ÐµÐ¹ ÐºÑ€Ð¾Ð²Ð»Ð¸ Ð¿Ð¾ Ð½Ð°Ð¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸ÑŽ Ð²ÐµÑ‚Ñ€Ð°.",
      "lowerToUpperHeight": "Ð¡Ð²Ð¾Ð±Ð¾Ð´Ð½Ð°Ñ Ð²Ñ‹ÑÐ¾Ñ‚Ð° Ð¼ÐµÐ¶Ð´Ñƒ ÑƒÑ€Ð¾Ð²Ð½ÑÐ¼Ð¸ ÐºÑ€Ð¾Ð²Ð»Ð¸."
    },
    "options": {
      "exposureCategory": {
        "sheltered": "Ð—Ð°Ñ‰Ð¸Ñ‰Ñ‘Ð½Ð½Ñ‹Ð¹ (Ce = 1.3) â€” Ð¾ÐºÑ€ÑƒÐ¶Ñ‘Ð½ Ð»ÐµÑÐ¾Ð¼ Ð¸Ð»Ð¸ Ð·Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¾Ð¹",
        "partial": "Ð¡Ñ€ÐµÐ´Ð½ÑÑ Ð—Ð°Ñ‰Ð¸Ñ‰Ñ‘Ð½Ð½Ð¾ÑÑ‚ÑŒ (Ce = 1.0) â€” Ð¿Ñ€Ð¸Ð³Ð¾Ñ€Ð¾Ð´Ð½Ð°Ñ Ð·Ð¾Ð½Ð°",
        "full": "ÐžÑ‚ÐºÑ€Ñ‹Ñ‚Ñ‹Ð¹ (Ce = 0.9) â€” Ð¾Ñ‚ÐºÑ€Ñ‹Ñ‚Ð°Ñ ÑÑ‚ÐµÐ¿ÑŒ/Ð¿Ð¾Ð±ÐµÑ€ÐµÐ¶ÑŒÐµ"
      },
      "thermalCategory": {
        "heated": "ÐžÑ‚Ð°Ð¿Ð»Ð¸Ð²Ð°ÐµÐ¼Ð¾Ðµ (Ct = 1.0) â€” Ð¿Ð¾ÑÑ‚Ð¾ÑÐ½Ð½Ð¾Ðµ Ð¾Ñ‚Ð¾Ð¿Ð»ÐµÐ½Ð¸Ðµ",
        "cold": "Ð¥Ð¾Ð»Ð¾Ð´Ð½Ñ‹Ð¹ Ð¡ÐºÐ»Ð°Ð´ (Ct = 1.1) â€” Ñ‚ÐµÐ¼Ð¿ÐµÑ€Ð°Ñ‚ÑƒÑ€Ð° Ñ‡ÑƒÑ‚ÑŒ Ð²Ñ‹ÑˆÐµ 0Â°C",
        "unheated": "ÐÐµÐ¾Ñ‚Ð°Ð¿Ð»Ð¸Ð²Ð°ÐµÐ¼Ð¾Ðµ (Ct = 1.2) â€” Ð½Ð°Ð²ÐµÑÑ‹, Ð°Ð½Ð³Ð°Ñ€Ñ‹",
        "freezer": "Ð¥Ð¾Ð»Ð¾Ð´Ð¸Ð»ÑŒÐ½Ð¸Ðº (Ct = 1.3) â€” Ð¾Ñ‚Ñ€Ð¸Ñ†Ð°Ñ‚ÐµÐ»ÑŒÐ½Ð°Ñ Ñ‚ÐµÐ¼Ð¿ÐµÑ€Ð°Ñ‚ÑƒÑ€Ð°"
      },
      "riskCategory": {
        "cat1": "ÐšÐ»Ð°ÑÑ I â€” ÐŸÐ¾Ð½Ð¸Ð¶ÐµÐ½Ð½Ð°Ñ ÐžÑ‚Ð²ÐµÑ‚ÑÑ‚Ð²ÐµÐ½Ð½Ð¾ÑÑ‚ÑŒ (Is = 0.8): ÑÐºÐ»Ð°Ð´Ñ‹",
        "cat2": "ÐšÐ»Ð°ÑÑ II â€” ÐÐ¾Ñ€Ð¼Ð°Ð»ÑŒÐ½Ñ‹Ð¹ (Is = 1.0): Ð¶Ð¸Ð»Ñ‹Ðµ Ð´Ð¾Ð¼Ð°, Ð¾Ñ„Ð¸ÑÑ‹",
        "cat3": "ÐšÐ»Ð°ÑÑ III â€” ÐŸÐ¾Ð²Ñ‹ÑˆÐµÐ½Ð½Ñ‹Ð¹ (Is = 1.1): ÑˆÐºÐ¾Ð»Ñ‹, ÑÑ‚Ð°Ð´Ð¸Ð¾Ð½Ñ‹",
        "cat4": "ÐšÐ»Ð°ÑÑ IV â€” ÐžÑÐ¾Ð±Ð¾ ÐžÐ¿Ð°ÑÐ½Ñ‹Ðµ / Ð’Ð°Ð¶Ð½Ñ‹Ðµ (Is = 1.2): Ð±Ð¾Ð»ÑŒÐ½Ð¸Ñ†Ñ‹, ÐœÐ§Ð¡"
      }
    },
    "article": "## Ð˜Ð½Ð¶ÐµÐ½ÐµÑ€Ð½Ñ‹Ð¹ Ð Ð°ÑÑ‡Ñ‘Ñ‚ Ð¡Ð½ÐµÐ³Ð¾Ð²Ð¾Ð¹ ÐÐ°Ð³Ñ€ÑƒÐ·ÐºÐ¸ Ð½Ð° ÐšÑ€Ð¾Ð²Ð»ÑŽ\\n\\nÐžÐ¿Ñ€ÐµÐ´ÐµÐ»Ð¸Ñ‚Ðµ Ñ€Ð°ÑÑ‡Ñ‘Ñ‚Ð½Ñ‹Ðµ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ñ ÑÐ½ÐµÐ³Ð¾Ð²Ð¾Ð³Ð¾ Ð´Ð°Ð²Ð»ÐµÐ½Ð¸Ñ Ð´Ð»Ñ Ð¿Ñ€Ð¾ÐµÐºÑ‚Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ñ ÑÑ‚Ñ€Ð¾Ð¿Ð¸Ð» Ð¸ Ñ„ÐµÑ€Ð¼."
  },
  "tr": {
    "name": "Kar YÃ¼kÃ¼ HesaplayÄ±cÄ±",
    "shortDescription": "ASCE 7-22 ve TS EN 1991-1-3 standartlarÄ±na uygun Ã¼cretsiz kar yÃ¼kÃ¼ hesaplayÄ±cÄ±. DÃ¼z ve eÄŸimli Ã§atÄ±lar, kar birikmeleri ve toplam yapÄ±sal yÃ¼k hesabÄ±.",
    "helpTexts": {
      "groundSnowLoad": "BÃ¶lgesel haritadan alÄ±nan zemin kar yÃ¼kÃ¼ (pg).",
      "roofSlope": "Derece cinsinden Ã§atÄ± eÄŸimi (0Â° = dÃ¼z Ã§atÄ±). 70Â° Ã¼zerinde kar tamamen kayar.",
      "exposureCategory": "RÃ¼zgardan korunaklÄ± alanlarda kar daha Ã§ok birikir.",
      "thermalCategory": "IsÄ±tÄ±lan binalarda Ã§atÄ±dan kaÃ§an Ä±sÄ± karÄ± eritir.",
      "riskCategory": "Hastaneler ve okullar daha yÃ¼ksek gÃ¼venlik katsayÄ±sÄ± gerektirir.",
      "roofArea": "Toplam yapÄ±sal yÃ¼kÃ¼ bulmak iÃ§in Ã§atÄ±nÄ±n yatay izdÃ¼ÅŸÃ¼m alanÄ±.",
      "includeDrift": "YÃ¼ksek duvar ve kot farkÄ± yanÄ±ndaki kar yÄ±ÄŸÄ±lma yÃ¼kÃ¼nÃ¼ hesaplar.",
      "upperRoofLength": "RÃ¼zgar yÃ¶nÃ¼ndeki Ã¼st Ã§atÄ± uzunluÄŸu.",
      "lowerToUpperHeight": "Ä°ki Ã§atÄ± arasÄ±ndaki net yÃ¼kseklik farkÄ±."
    },
    "options": {
      "exposureCategory": {
        "sheltered": "KorunaklÄ± (Ce = 1.3) â€” aÄŸaÃ§ veya binalarla Ã§evrili",
        "partial": "KÄ±smen Maruz (Ce = 1.0) â€” tipik yerleÅŸim alanÄ±",
        "full": "Tamamen AÃ§Ä±k (Ce = 0.9) â€” engelsiz aÃ§Ä±k arazi"
      },
      "thermalCategory": {
        "heated": "IsÄ±tmalÄ± YapÄ± (Ct = 1.0) â€” konut ve ofisler",
        "cold": "SoÄŸuk Depo (Ct = 1.1) â€” donma noktasÄ±nÄ±n hemen Ã¼stÃ¼",
        "unheated": "IsÄ±tmasÄ±z / AÃ§Ä±k (Ct = 1.2) â€” yalÄ±tÄ±msÄ±z sundurma",
        "freezer": "Dondurucu Tesis (Ct = 1.3) â€” sÄ±fÄ±rÄ±n altÄ±nda soÄŸutma"
      },
      "riskCategory": {
        "cat1": "Kategori I â€” DÃ¼ÅŸÃ¼k Risk (Is = 0.8): tarÄ±m, depo",
        "cat2": "Kategori II â€” Standart (Is = 1.0): konut, ticari",
        "cat3": "Kategori III â€” YÃ¼ksek YoÄŸunluk (Is = 1.1): okullar, salonlar",
        "cat4": "Kategori IV â€” Kritik Tesis (Is = 1.2): hastaneler, itfaiye"
      }
    },
    "article": "## Ã‡atÄ±larda Kar YÃ¼kÃ¼ TasarÄ±m Rehberi\\n\\nÃ‡atÄ± taÅŸÄ±yÄ±cÄ± elemanlarÄ±nÄ±n ve makaslarÄ±nÄ±n gÃ¼venli boyutlandÄ±rÄ±lmasÄ±."
  },
  "ar": {
    "name": "Ø­Ø§Ø³Ø¨Ø© Ø­Ù…Ù„ Ø§Ù„Ø«Ù„Ø¬ Ø¹Ù„Ù‰ Ø§Ù„Ø£Ø³Ù‚Ù",
    "shortDescription": "Ø­Ø§Ø³Ø¨Ø© Ù…Ø¬Ø§Ù†ÙŠØ© Ù„Ø£Ø­Ù…Ø§Ù„ Ø§Ù„Ø«Ù„ÙˆØ¬ Ø¹Ù„Ù‰ Ø§Ù„Ø£Ø³Ù‚Ù Ø§Ù„Ø¥Ù†Ø´Ø§Ø¦ÙŠØ© ÙˆÙÙ‚ ÙƒÙˆØ¯ ASCE 7-22. Ø§Ø­Ø³Ø¨ Ø£Ø­Ù…Ø§Ù„ Ø§Ù„Ø£Ø³Ù‚Ù Ø§Ù„Ù…Ø³Ø·Ø­Ø© ÙˆØ§Ù„Ù…Ø§Ø¦Ù„Ø© ÙˆØªØ±Ø§ÙƒÙ…Ø§Øª Ø§Ù„Ø±ÙŠØ§Ø­.",
    "helpTexts": {
      "groundSnowLoad": "Ø­Ù…Ù„ Ø§Ù„Ø«Ù„Ø¬ Ø¹Ù„Ù‰ Ø§Ù„Ø£Ø±Ø¶ (pg) Ø­Ø³Ø¨ Ø§Ù„Ù…Ø®Ø·Ø·Ø§Øª Ø§Ù„Ù‡Ù†Ø¯Ø³ÙŠØ© Ù„Ù…Ù†Ø·Ù‚ØªÙƒ.",
      "roofSlope": "Ù…ÙŠÙ„ Ø§Ù„Ø³Ù‚Ù Ø¨Ø§Ù„Ø¯Ø±Ø¬Ø§Øª (0Â° = Ø³Ù‚Ù Ù…Ø³Ø·Ø­). ÙÙˆÙ‚ 70Â° ÙŠÙ†Ø²Ù„Ù‚ Ø§Ù„Ø«Ù„Ø¬ Ø¨Ø§Ù„ÙƒØ§Ù…Ù„.",
      "exposureCategory": "Ø§Ù„Ù…Ù†Ø§Ø·Ù‚ Ø§Ù„Ù…Ø­Ù…ÙŠØ© ØªØ¬Ù…Ø¹ Ø«Ù„ÙˆØ¬Ø§Ù‹ Ø£ÙƒØ«Ø± Ø¨ÙŠÙ†Ù…Ø§ Ø§Ù„Ù…ÙƒØ´ÙˆÙØ© Ù„Ù„Ø±ÙŠØ§Ø­ ØªÙ†Ø¸Ù Ø§Ù„Ø£Ø³Ø·Ø­.",
      "thermalCategory": "ÙÙ‚Ø¯Ø§Ù† Ø§Ù„Ø­Ø±Ø§Ø±Ø© Ù…Ù† Ø§Ù„Ù…Ø¨Ø§Ù†ÙŠ Ø§Ù„Ø³ÙƒÙ†ÙŠØ© ÙŠØ°ÙŠØ¨ Ø§Ù„Ø«Ù„ÙˆØ¬.",
      "riskCategory": "Ø§Ù„Ù…Ù†Ø´Ø¢Øª Ø§Ù„Ø­ÙŠÙˆÙŠØ© ÙˆØ§Ù„Ù…Ø¯Ø§Ø±Ø³ ØªØªØ·Ù„Ø¨ Ù…Ø¹Ø§Ù…Ù„Ø§Øª Ø£Ù…Ø§Ù† Ø£Ø¹Ù„Ù‰.",
      "roofArea": "Ø§Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ø£ÙÙ‚ÙŠØ© Ù„Ù…Ø³Ù‚Ø· Ø§Ù„Ø³Ù‚Ù Ù„Ø§Ø­ØªØ³Ø§Ø¨ Ø§Ù„Ø­Ù…Ù„ Ø§Ù„Ø¥Ø¬Ù…Ø§Ù„ÙŠ.",
      "includeDrift": "ÙŠØ­Ø³Ø¨ Ø§Ù„Ø­Ù…Ù„ Ø§Ù„Ø²Ø§Ø¦Ø¯ Ø§Ù„Ù†Ø§ØªØ¬ Ø¹Ù† ØªØ¬Ù…Ø¹ Ø§Ù„Ø«Ù„ÙˆØ¬ Ø¨ÙØ¹Ù„ Ø§Ù„Ø±ÙŠØ§Ø­ Ø¹Ù†Ø¯ ÙØ±ÙˆÙ‚ Ø§Ù„Ø§Ø±ØªÙØ§Ø¹.",
      "upperRoofLength": "Ø·ÙˆÙ„ Ø§Ù„Ø³Ù‚Ù Ø§Ù„Ø£Ø¹Ù„Ù‰ ÙÙŠ Ø§ØªØ¬Ø§Ù‡ Ø§Ù„Ø±ÙŠØ§Ø­.",
      "lowerToUpperHeight": "Ø§Ù„Ø§Ø±ØªÙØ§Ø¹ Ø§Ù„ØµØ§ÙÙŠ Ø¨ÙŠÙ† Ù…Ù†Ø³ÙˆØ¨ÙŠ Ø§Ù„Ø³Ù‚ÙÙŠÙ†."
    },
    "options": {
      "exposureCategory": {
        "sheltered": "Ù…Ø­Ù…ÙŠ (Ce = 1.3) â€” Ù…Ø­Ø§Ø· Ø¨Ø£Ø´Ø¬Ø§Ø± Ø£Ùˆ Ù…Ø¨Ø§Ù†Ù Ù…Ù† Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø¬Ù‡Ø§Øª",
        "partial": "ØªØ¹Ø±Ø¶ Ø¬Ø²Ø¦ÙŠ (Ce = 1.0) â€” Ù…Ù†Ø§Ø·Ù‚ Ø³ÙƒÙ†ÙŠØ© Ø¹Ø§Ø¯ÙŠØ©",
        "full": "ØªØ¹Ø±Ø¶ ÙƒØ§Ù…Ù„ (Ce = 0.9) â€” Ø£Ø±Ø§Ø¶Ù Ù…Ù†Ø¨Ø³Ø·Ø© ÙˆÙ…ÙØªÙˆØ­Ø© Ù„Ù„Ø±ÙŠØ§Ø­"
      },
      "thermalCategory": {
        "heated": "Ù…Ø¨Ù†Ù‰ Ù…Ø¯ÙØ£ (Ct = 1.0) â€” Ù…Ø¨Ø§Ù†Ù Ø³ÙƒÙ†ÙŠØ© ÙˆØªØ¬Ø§Ø±ÙŠØ© Ù…Ø´ØºÙˆÙ„Ø©",
        "cold": "Ù…Ø³ØªÙˆØ¯Ø¹ Ø¨Ø§Ø±Ø¯ (Ct = 1.1) â€” Ø£Ø¹Ù„Ù‰ Ù‚Ù„ÙŠÙ„Ø§Ù‹ Ù…Ù† Ø¯Ø±Ø¬Ø© Ø§Ù„ØªØ¬Ù…Ø¯",
        "unheated": "ØºÙŠØ± Ù…Ø¯ÙØ£ (Ct = 1.2) â€” Ù…Ø¸Ù„Ø§Øª ÙˆÙ…Ø³ØªÙˆØ¯Ø¹Ø§Øª Ù…ÙØªÙˆØ­Ø©",
        "freezer": "Ù…Ø³ØªÙˆØ¯Ø¹ ØªØ¬Ù…ÙŠØ¯ (Ct = 1.3) â€” ØºØ±Ù ØªØ¨Ø±ÙŠØ¯ ØªØ­Øª Ø§Ù„ØµÙØ±"
      },
      "riskCategory": {
        "cat1": "Ø§Ù„ÙØ¦Ø© Ø§Ù„Ø£ÙˆÙ„Ù‰ â€” Ø®Ø·ÙˆØ±Ø© Ù…Ù†Ø®ÙØ¶Ø© (Is = 0.8): Ù…Ù†Ø´Ø¢Øª Ø²Ø±Ø§Ø¹ÙŠØ©",
        "cat2": "Ø§Ù„ÙØ¦Ø© Ø§Ù„Ø«Ø§Ù†ÙŠØ© â€” Ù‚ÙŠØ§Ø³ÙŠ (Is = 1.0): Ù…Ø³Ø§ÙƒÙ† ÙˆÙ…ÙƒØ§ØªØ¨",
        "cat3": "Ø§Ù„ÙØ¦Ø© Ø§Ù„Ø«Ø§Ù„Ø«Ø© â€” Ø¥Ø´ØºØ§Ù„ Ù…Ø±ØªÙØ¹ (Is = 1.1): Ù…Ø¯Ø§Ø±Ø³ ÙˆÙ…Ø³Ø§Ø±Ø­",
        "cat4": "Ø§Ù„ÙØ¦Ø© Ø§Ù„Ø±Ø§Ø¨Ø¹Ø© â€” Ù…Ù†Ø´Ø¢Øª Ø£Ø³Ø§Ø³ÙŠØ© (Is = 1.2): Ù…Ø³ØªØ´ÙÙŠØ§Øª ÙˆØ¯ÙØ§Ø¹ Ù…Ø¯Ù†ÙŠ"
      }
    },
    "article": "## Ø¯Ù„ÙŠÙ„ Ø§Ù„ØªØµÙ…ÙŠÙ… Ø§Ù„Ø¥Ù†Ø´Ø§Ø¦ÙŠ Ù„Ø£Ø­Ù…Ø§Ù„ Ø§Ù„Ø«Ù„ÙˆØ¬ Ø¹Ù„Ù‰ Ø§Ù„Ø£Ø³Ø·Ø­\\n\\nÙƒÙŠÙÙŠØ© Ø­Ø³Ø§Ø¨ Ø§Ù„Ø£Ø­Ù…Ø§Ù„ Ø§Ù„ØªØµÙ…ÙŠÙ…ÙŠØ© ÙˆÙÙ‚ Ø§Ù„ÙƒÙˆØ¯ Ø§Ù„Ø¥Ù†Ø´Ø§Ø¦ÙŠ Ø§Ù„Ù…Ø¹ØªÙ…Ø¯."
  },
  "hi": {
    "name": "à¤›à¤¤ à¤¹à¤¿à¤® à¤­à¤¾à¤° à¤•à¥ˆà¤²à¤•à¥à¤²à¥‡à¤Ÿà¤°",
    "shortDescription": "ASCE 7-22 à¤®à¤¾à¤¨à¤•à¥‹à¤‚ à¤•à¥‡ à¤…à¤¨à¥à¤¸à¤¾à¤° à¤®à¥à¤«à¥à¤¤ à¤¸à¥à¤¨à¥‹ à¤²à¥‹à¤¡ (à¤¹à¤¿à¤® à¤­à¤¾à¤°) à¤•à¥ˆà¤²à¤•à¥à¤²à¥‡à¤Ÿà¤°à¥¤ à¤«à¥à¤²à¥ˆà¤Ÿ à¤”à¤° à¤¢à¤²à¤¾à¤¨ à¤µà¤¾à¤²à¥€ à¤›à¤¤à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤ à¤¡à¤¿à¤œà¤¼à¤¾à¤‡à¤¨ à¤­à¤¾à¤° à¤”à¤° à¤¸à¤‚à¤šà¤¿à¤¤ à¤¬à¤°à¥à¤« à¤•à¤¾ à¤¸à¤Ÿà¥€à¤• à¤†à¤•à¤²à¤¨ à¤•à¤°à¥‡à¤‚à¥¤",
    "helpTexts": {
      "groundSnowLoad": "à¤¸à¥à¤¥à¤¾à¤¨à¥€à¤¯ à¤­à¤µà¤¨ à¤¨à¤¿à¤¯à¤®à¥‹à¤‚ à¤•à¥‡ à¤…à¤¨à¥à¤¸à¤¾à¤° à¤œà¤¼à¤®à¥€à¤¨ à¤ªà¤° à¤®à¤¾à¤ªà¤¾ à¤—à¤¯à¤¾ à¤¹à¤¿à¤® à¤­à¤¾à¤° (pg)à¥¤",
      "roofSlope": "à¤¡à¤¿à¤—à¥à¤°à¥€ à¤®à¥‡à¤‚ à¤›à¤¤ à¤•à¤¾ à¤¢à¤²à¤¾à¤¨ (0Â° = à¤¸à¤ªà¤¾à¤Ÿ à¤›à¤¤)à¥¤ 70Â° à¤¸à¥‡ à¤…à¤§à¤¿à¤• à¤¢à¤²à¤¾à¤¨ à¤ªà¤° à¤¬à¤°à¥à¤« à¤«à¤¿à¤¸à¤² à¤œà¤¾à¤¤à¥€ à¤¹à¥ˆà¥¤",
      "exposureCategory": "à¤¹à¤µà¤¾ à¤¸à¥‡ à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ à¤¸à¥à¤¥à¤¾à¤¨à¥‹à¤‚ à¤ªà¤° à¤…à¤§à¤¿à¤• à¤¬à¤°à¥à¤« à¤œà¤®à¤¾ à¤¹à¥‹à¤¤à¥€ à¤¹à¥ˆà¥¤",
      "thermalCategory": "à¤—à¤°à¥à¤® à¤‡à¤®à¤¾à¤°à¤¤à¥‹à¤‚ à¤¸à¥‡ à¤¨à¤¿à¤•à¤²à¤¨à¥‡ à¤µà¤¾à¤²à¥€ à¤—à¤°à¥à¤®à¥€ à¤›à¤¤ à¤•à¥€ à¤¬à¤°à¥à¤« à¤ªà¤¿à¤˜à¤²à¤¾à¤¤à¥€ à¤¹à¥ˆà¥¤",
      "riskCategory": "à¤…à¤¸à¥à¤ªà¤¤à¤¾à¤²à¥‹à¤‚ à¤”à¤° à¤¸à¥à¤•à¥‚à¤²à¥‹à¤‚ à¤œà¥ˆà¤¸à¥€ à¤†à¤µà¤¶à¥à¤¯à¤• à¤‡à¤®à¤¾à¤°à¤¤à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤ à¤‰à¤šà¥à¤š à¤¸à¥à¤°à¤•à¥à¤·à¤¾ à¤•à¤¾à¤°à¤• à¤•à¥€ à¤†à¤µà¤¶à¥à¤¯à¤•à¤¤à¤¾ à¤¹à¥‹à¤¤à¥€ à¤¹à¥ˆà¥¤",
      "roofArea": "à¤•à¥à¤² à¤¸à¤‚à¤°à¤šà¤¨à¤¾à¤¤à¥à¤®à¤• à¤­à¤¾à¤° à¤•à¥€ à¤—à¤£à¤¨à¤¾ à¤•à¥‡ à¤²à¤¿à¤ à¤›à¤¤ à¤•à¤¾ à¤•à¥à¤·à¥ˆà¤¤à¤¿à¤œ à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¤«à¤²à¥¤",
      "includeDrift": "à¤Šà¤‚à¤šà¤¾à¤ˆ à¤•à¥‡ à¤…à¤‚à¤¤à¤° à¤ªà¤° à¤¹à¤µà¤¾ à¤¦à¥à¤µà¤¾à¤°à¤¾ à¤‰à¤¡à¤¼à¤¾à¤•à¤° à¤œà¤®à¤¾ à¤•à¥€ à¤—à¤ˆ à¤¬à¤°à¥à¤« à¤•à¤¾ à¤…à¤¤à¤¿à¤°à¤¿à¤•à¥à¤¤ à¤­à¤¾à¤° à¤œà¥‹à¤¡à¤¼à¥‡à¤‚à¥¤",
      "upperRoofLength": "à¤¹à¤µà¤¾ à¤•à¥€ à¤¦à¤¿à¤¶à¤¾ à¤®à¥‡à¤‚ à¤Šà¤ªà¤°à¥€ à¤›à¤¤ à¤•à¥€ à¤²à¤‚à¤¬à¤¾à¤ˆà¥¤",
      "lowerToUpperHeight": "à¤¨à¤¿à¤šà¤²à¥€ à¤”à¤° à¤Šà¤ªà¤°à¥€ à¤›à¤¤ à¤•à¥‡ à¤¬à¥€à¤š à¤¸à¥à¤ªà¤·à¥à¤Ÿ à¤Šà¤‚à¤šà¤¾à¤ˆ à¤…à¤‚à¤¤à¤°à¥¤"
    },
    "options": {
      "exposureCategory": {
        "sheltered": "à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ (Ce = 1.3) â€” à¤ªà¥‡à¤¡à¤¼à¥‹à¤‚ à¤¯à¤¾ à¤‡à¤®à¤¾à¤°à¤¤à¥‹à¤‚ à¤¸à¥‡ à¤˜à¤¿à¤°à¤¾ à¤¹à¥à¤†",
        "partial": "à¤†à¤‚à¤¶à¤¿à¤• à¤¸à¤‚à¤ªà¤°à¥à¤• (Ce = 1.0) â€” à¤¸à¤¾à¤®à¤¾à¤¨à¥à¤¯ à¤‰à¤ªà¤¨à¤—à¤°à¥€à¤¯ à¤•à¥à¤·à¥‡à¤¤à¥à¤°",
        "full": "à¤ªà¥‚à¤°à¥à¤£à¤¤à¤ƒ à¤–à¥à¤²à¤¾ (Ce = 0.9) â€” à¤¬à¤¿à¤¨à¤¾ à¤¬à¤¾à¤§à¤¾ à¤µà¤¾à¤²à¤¾ à¤–à¥à¤²à¤¾ à¤®à¥ˆà¤¦à¤¾à¤¨"
      },
      "thermalCategory": {
        "heated": "à¤—à¤°à¥à¤® à¤­à¤µà¤¨ (Ct = 1.0) â€” à¤¨à¤¿à¤°à¤‚à¤¤à¤° à¤¨à¤¿à¤µà¤¾à¤¸ à¤”à¤° à¤¹à¥€à¤Ÿà¤¿à¤‚à¤—",
        "cold": "à¤•à¥‹à¤²à¥à¤¡ à¤¸à¥à¤Ÿà¥‹à¤°à¥‡à¤œ (Ct = 1.1) â€” à¤¹à¤¿à¤®à¤¾à¤‚à¤• à¤¸à¥‡ à¤¥à¥‹à¤¡à¤¼à¤¾ à¤Šà¤ªà¤°",
        "unheated": "à¤…-à¤—à¤°à¥à¤® / à¤–à¥à¤²à¤¾ (Ct = 1.2) â€” à¤¬à¤¿à¤¨à¤¾ à¤‡à¤¨à¥à¤¸à¥à¤²à¥‡à¤¶à¤¨ à¤µà¤¾à¤²à¥€ à¤›à¤¤",
        "freezer": "à¤¡à¥€à¤ª à¤«à¥à¤°à¥€à¤œà¤° (Ct = 1.3) â€” à¤¶à¥‚à¤¨à¥à¤¯ à¤¸à¥‡ à¤¨à¥€à¤šà¥‡ à¤•à¤¾ à¤¤à¤¾à¤ªà¤®à¤¾à¤¨"
      },
      "riskCategory": {
        "cat1": "à¤¶à¥à¤°à¥‡à¤£à¥€ I â€” à¤•à¤® à¤œà¥‹à¤–à¤¿à¤® (Is = 0.8): à¤•à¥ƒà¤·à¤¿, à¤¶à¥‡à¤¡",
        "cat2": "à¤¶à¥à¤°à¥‡à¤£à¥€ II â€” à¤®à¤¾à¤¨à¤• (Is = 1.0): à¤†à¤µà¤¾à¤¸à¥€à¤¯, à¤•à¤¾à¤°à¥à¤¯à¤¾à¤²à¤¯",
        "cat3": "à¤¶à¥à¤°à¥‡à¤£à¥€ III â€” à¤‰à¤šà¥à¤š à¤œà¤¨à¤¸à¤‚à¤–à¥à¤¯à¤¾ (Is = 1.1): à¤¸à¥à¤•à¥‚à¤², à¤¸à¤­à¤¾à¤—à¤¾à¤°",
        "cat4": "à¤¶à¥à¤°à¥‡à¤£à¥€ IV â€” à¤†à¤µà¤¶à¥à¤¯à¤• à¤¸à¥‡à¤µà¤¾à¤à¤‚ (Is = 1.2): à¤…à¤¸à¥à¤ªà¤¤à¤¾à¤², à¤«à¤¾à¤¯à¤° à¤¸à¥à¤Ÿà¥‡à¤¶à¤¨"
      }
    },
    "article": "## à¤›à¤¤ à¤¸à¤‚à¤°à¤šà¤¨à¤¾ à¤•à¥‡ à¤²à¤¿à¤ à¤¹à¤¿à¤® à¤­à¤¾à¤° à¤¡à¤¿à¤œà¤¼à¤¾à¤‡à¤¨ à¤—à¤¾à¤‡à¤¡\\n\\nà¤›à¤¤ à¤•à¥‡ à¤¶à¤¹à¤¤à¥€à¤° à¤”à¤° à¤Ÿà¥à¤°à¤¸ à¤•à¥‡ à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ à¤¨à¤¿à¤°à¥à¤®à¤¾à¤£ à¤•à¥‡ à¤²à¤¿à¤ à¤¸à¤Ÿà¥€à¤• à¤­à¤¾à¤° à¤•à¥€ à¤—à¤£à¤¨à¤¾ à¤•à¤°à¥‡à¤‚à¥¤"
  },
  "zh": {
    "name": "å±‹é¢é›ªè·è½½è®¡ç®—å™¨",
    "shortDescription": "åŸºäºŽ ASCE 7-22 åŠç»“æž„è·è½½è§„èŒƒçš„å…è´¹å±‹é¢é›ªåŽ‹è®¡ç®—å™¨ã€‚ç²¾ç¡®è®¡ç®—å¹³å±‹é¢ä¸Žå¡å±‹é¢è®¾è®¡é›ªåŽ‹ã€ç§¯é›ªæ¼‚ç§»é™„åŠ è·è½½åŠå±‹æž¶æ€»è·è½½ã€‚",
    "helpTexts": {
      "groundSnowLoad": "æ ¹æ®å›½å®¶æˆ–åœ°åŒºæ°”è±¡è·è½½è§„èŒƒæŸ¥å–çš„åœ°é¢åŸºæœ¬é›ªåŽ‹ (pg)ã€‚",
      "roofSlope": "å±‹é¢å¡åº¦ï¼ˆåº¦ï¼Œ0Â° = å¹³å±‹é¢ï¼‰ã€‚å¡åº¦è¶…è¿‡ 70Â° æ—¶ç§¯é›ªè‡ªç„¶å®Œå…¨æ»‘è½ã€‚",
      "exposureCategory": "èƒŒé£Žé®è”½åœºåœ°ç§¯é›ªæ›´åŽšï¼ˆCeæ›´å¤§ï¼‰ï¼›å¼€é˜”å¤šé£Žåœºåœ°é£Žå¹æ•£ç§¯é›ªï¼ˆCeæ›´å°ï¼‰ã€‚",
      "thermalCategory": "å®¤å†…é‡‡æš–çƒ­æŸè€—ä¼šèžåŒ–ç§¯é›ªï¼›æœªé‡‡æš–å»ºç­‘éœ€æ‰¿å—å…¨é¢ç§¯é›ªè·è½½ã€‚",
      "riskCategory": "å­¦æ ¡ã€åŒ»é™¢ç­‰é‡ç‚¹è®¾é˜²å»ºç­‘éœ€é‡‡ç”¨æ›´é«˜çš„é‡è¦æ€§ç³»æ•° (Is)ã€‚",
      "roofArea": "å±‹é¢æ°´å¹³æŠ•å½±é¢ç§¯ï¼Œç”¨äºŽè®¡ç®—å±‹ç›–æ‰¿å—çš„æ€»é‡åŠ›è·è½½ã€‚",
      "includeDrift": "è®¡ç®—ç›¸é‚»é«˜ä½Žè·¨å±‹é¢å¤„çš„é£Žå¹ç§¯é›ªæ¼‚ç§»é™„åŠ è·è½½ã€‚",
      "upperRoofLength": "ä¸Šå±‚é«˜è·¨å±‹é¢é¡ºé£Žæ–¹å‘çš„æ°´å¹³é•¿åº¦ã€‚",
      "lowerToUpperHeight": "é«˜ä½Žä¸¤è·¨å±‹é¢ä¹‹é—´çš„åž‚ç›´å‡€é«˜å·®ã€‚"
    },
    "options": {
      "exposureCategory": {
        "sheltered": "é®è”½åœºåœ° (Ce = 1.3) â€” å››å‘¨ç´§é‚»é«˜å¤§æ ‘æœ¨æˆ–å»ºç­‘",
        "partial": "åŠæš´éœ²åœºåœ° (Ce = 1.0) â€” å¸¸è§„éƒŠåŒºæˆ–åŸŽé•‡çŽ¯å¢ƒ",
        "full": "å®Œå…¨æš´éœ² (Ce = 0.9) â€” å¼€é˜”å¹³åŽŸæˆ–æ²¿æµ·æ— é®æŒ¡"
      },
      "thermalCategory": {
        "heated": "é‡‡æš–å»ºç­‘ (Ct = 1.0) â€” å¸¸è§„ä½å®…ã€å•†ä¸šåŠžå…¬",
        "cold": "å¾®æ¸©ä»“åº“ (Ct = 1.1) â€” ä¿æŒåœ¨å†°ç‚¹ä»¥ä¸Š",
        "unheated": "éžé‡‡æš– / æ•žå¼€ç»“æž„ (Ct = 1.2) â€” é›¨æ£šã€æ— ä¿æ¸©åŽ‚æˆ¿",
        "freezer": "å†·åº“å»ºç­‘ (Ct = 1.3) â€” å†°ç‚¹ä»¥ä¸‹å†·å†»åº“"
      },
      "riskCategory": {
        "cat1": "ç¬¬Iç±» â€” ä½Žé£Žé™© (Is = 0.8)ï¼šä¸´æ—¶ä»“åº“ã€å†œä¸šå¤§æ£š",
        "cat2": "ç¬¬IIç±» â€” æ ‡å‡† (Is = 1.0)ï¼šæ™®é€šä½å®…ã€åŠžå…¬æ¥¼",
        "cat3": "ç¬¬IIIç±» â€” äººå‘˜å¯†é›† (Is = 1.1)ï¼šå­¦æ ¡ã€å¤§åž‹å•†åœºå‰§é™¢",
        "cat4": "ç¬¬IVç±» â€” é‡ç‚¹æ•‘ç¾ (Is = 1.2)ï¼šåŒ»é™¢ã€æ¶ˆé˜²æŒ‡æŒ¥ä¸­å¿ƒ"
      }
    },
    "article": "## å±‹é¢é›ªè·è½½ç»“æž„è®¾è®¡æŠ€æœ¯æŒ‡å—\\n\\nä¸ºå»ºç­‘å¸ˆã€ç»“æž„å·¥ç¨‹å¸ˆåŠæ–½å·¥äººå‘˜æä¾›æƒå¨å‡†ç¡®çš„é›ªåŽ‹è®¡ç®—æŒ‡å¯¼ã€‚"
  },
  "ja": {
    "name": "ç©é›ªè·é‡è¨ˆç®—æ©Ÿ",
    "shortDescription": "ASCE 7-22 ãŠã‚ˆã³å»ºç¯‰åŸºæº–æ³•ã«æº–æ‹ ã—ãŸç©é›ªè·é‡è¨ˆç®—ãƒ„ãƒ¼ãƒ«ã€‚é™¸å±‹æ ¹ãƒ»å‹¾é…å±‹æ ¹ã®è¨­è¨ˆç©é›ªè·é‡ã€å¹ãã ã¾ã‚Šå‰²å¢—è·é‡ã€å±‹æ ¹ç·è·é‡ã‚’å³æ™‚ç®—å‡ºã€‚",
    "helpTexts": {
      "groundSnowLoad": "åœ°åŸŸã”ã¨ã®åž‚ç›´ç©é›ªé‡ã¾ãŸã¯åœ°è¡¨åŸºæº–ç©é›ªè·é‡ (pg)ã€‚",
      "roofSlope": "å±‹æ ¹ã®å‹¾é…è§’åº¦ï¼ˆ0Â° = é™¸å±‹æ ¹ï¼‰ã€‚70Â°ã‚’è¶…ãˆã‚‹ã¨é›ªã¯è‡ªç„¶è½ä¸‹ã—è·é‡ã¯ã‚¼ãƒ­ã«ãªã‚Šã¾ã™ã€‚",
      "exposureCategory": "é®è”½ã•ã‚ŒãŸæ•·åœ°ã¯é›ªãŒæºœã¾ã‚Šã‚„ã™ãã€é–‹ã‘ãŸå¼·é¢¨åœ°å¸¯ã¯é›ªãŒå¹ãé£›ã°ã•ã‚Œã¾ã™ã€‚",
      "thermalCategory": "å®¤å†…ã®ç†±æå¤±ã«ã‚ˆã‚Šå±‹æ ¹ã®é›ªãŒèžè§£ã—ã¾ã™ã€‚éžæš–æˆ¿å»ºç‰©ã¯å…¨ç©é›ªè·é‡ã‚’è² æ‹…ã—ã¾ã™ã€‚",
      "riskCategory": "ç—…é™¢ã‚„å­¦æ ¡ãªã©ã®é‡è¦æ–½è¨­ã¯é«˜ã„å®‰å…¨çŽ‡ï¼ˆé‡è¦åº¦ä¿‚æ•° Isï¼‰ã‚’é©ç”¨ã—ã¾ã™ã€‚",
      "roofArea": "å±‹æ ¹ã®æ°´å¹³æŠ•å½±é¢ç©ï¼ˆå»ºç‰©æ§‹é€ ã«ã‹ã‹ã‚‹ç·é‡é‡ã®è¨ˆç®—ã«ä½¿ç”¨ï¼‰ã€‚",
      "includeDrift": "æ®µé•ã„å±‹æ ¹ã‚„ãƒ‘ãƒ©ãƒšãƒƒãƒˆä»˜è¿‘ã§ç™ºç”Ÿã™ã‚‹é¢¨ã«ã‚ˆã‚‹å¹ãã ã¾ã‚Šå‰²å¢—ã‚’è¨ˆç®—ã€‚",
      "upperRoofLength": "é¢¨ä¸Šå´ã«ã‚ã‚‹é«˜ã„å±‹æ ¹ã®æ°´å¹³é•·ã•ã€‚",
      "lowerToUpperHeight": "ä½Žå±¤å±‹æ ¹ã¨é«˜å±¤å±‹æ ¹ã®æœ‰åŠ¹æ®µå·®é«˜ã•ã€‚"
    },
    "options": {
      "exposureCategory": {
        "sheltered": "é®è”½ç’°å¢ƒ (Ce = 1.3) â€” æ¨¹æœ¨ã‚„éš£æŽ¥å»ºç‰©ã«å›²ã¾ã‚ŒãŸæ•·åœ°",
        "partial": "æ¨™æº–éœ²å‡º (Ce = 1.0) â€” ä¸€èˆ¬çš„ãªä½å®…åœ°ãƒ»éƒŠå¤–",
        "full": "å®Œå…¨éœ²å‡º (Ce = 0.9) â€” éšœå®³ç‰©ã®ãªã„é–‹ã‘ãŸå¹³åœ°"
      },
      "thermalCategory": {
        "heated": "æš–æˆ¿å»ºç‰© (Ct = 1.0) â€” ä¸€èˆ¬ä½å®…ãƒ»ã‚ªãƒ•ã‚£ã‚¹ãƒ“ãƒ«",
        "cold": "å†·è”µå€‰åº« (Ct = 1.1) â€” æ°·ç‚¹ç›´ä¸Šã‚’ç¶­æŒã™ã‚‹å€‰åº«",
        "unheated": "éžæš–æˆ¿ãƒ»é–‹æ”¾æ§‹é€  (Ct = 1.2) â€” ä¸Šå±‹ãƒ»ç„¡æ–­ç†±è»Šåº«",
        "freezer": "å†·å‡å€‰åº« (Ct = 1.3) â€” æ°·ç‚¹ä¸‹ã§å†·å´ã•ã‚ŒãŸå»ºç‰©"
      },
      "riskCategory": {
        "cat1": "ç¬¬Ié¡ž â€” ä½Žãƒªã‚¹ã‚¯ (Is = 0.8)ï¼šè¾²æ¥­ç”¨ãƒã‚¦ã‚¹ã€ç°¡æ˜“å€‰åº«",
        "cat2": "ç¬¬IIé¡ž â€” æ¨™æº– (Is = 1.0)ï¼šæˆ¸å»ºä½å®…ã€ä¸€èˆ¬äº‹å‹™æ‰€",
        "cat3": "ç¬¬IIIé¡ž â€” å¤šæ•°åŽå®¹ (Is = 1.1)ï¼šå­¦æ ¡ã€åŠ‡å ´ã€é›†ä¼šå ´",
        "cat4": "ç¬¬IVé¡ž â€” é˜²ç½æ‹ ç‚¹ (Is = 1.2)ï¼šç—…é™¢ã€æ¶ˆé˜²ç½²ã€é¿é›£æ‰€"
      }
    },
    "article": "## å±‹æ ¹ç©é›ªè·é‡ã®æ§‹é€ è¨­è¨ˆã‚¬ã‚¤ãƒ‰\\n\\næ¯å±‹ãƒ»åž‚æœ¨ãƒ»ãƒˆãƒ©ã‚¹æ§‹é€ ã®é©åˆ‡ãªæ–­é¢è¨­è¨ˆã®ãŸã‚ã®æŠ€è¡“è¨ˆç®—ã€‚"
  },
  "ko": {
    "name": "ì ì„¤í•˜ì¤‘ ê³„ì‚°ê¸°",
    "shortDescription": "ASCE 7-22 ë° ê±´ì¶•êµ¬ì¡°ê¸°ì¤€(KDS)ì— ë”°ë¥¸ ë¬´ë£Œ ì§€ë¶• ì ì„¤í•˜ì¤‘ ê³„ì‚°ê¸°. í‰ì§€ë¶• ë° ê²½ì‚¬ì§€ë¶• ì„¤ê³„í•˜ì¤‘, íŽ¸í•˜ì¤‘(ë“œë¦¬í”„íŠ¸) ë° ì´ í•˜ì¤‘ ì‚°ì¶œ.",
    "helpTexts": {
      "groundSnowLoad": "ì§€ì—­ë³„ ì„¤ê³„ ê¸°ì¤€ ì§€ìƒ ì ì„¤í•˜ì¤‘ (pg).",
      "roofSlope": "ì§€ë¶• ê²½ì‚¬ ê°ë„ (0Â° = í‰ì§€ë¶•). 70Â° ì´ìƒ ê¸‰ê²½ì‚¬ëŠ” ëˆˆì´ ìžì—° ë¯¸ë„ëŸ¬ì ¸ í•˜ì¤‘ì´ 0ì´ ë©ë‹ˆë‹¤.",
      "exposureCategory": "ë°”ëžŒì´ ë§‰ížŒ ë¶€ì§€ëŠ” ëˆˆì´ ë” ë§Žì´ ìŒ“ì´ê³ , ê°œí™œì§€ëŠ” ë°”ëžŒì— ëˆˆì´ ë‚ ë ¤ í•˜ì¤‘ì´ ì¤„ì–´ë“­ë‹ˆë‹¤.",
      "thermalCategory": "ë‚œë°© ê±´ë¬¼ì˜ ì—´ì†ì‹¤ì€ ëˆˆì„ ë…¹ì´ë©°, ë¹„ë‚œë°© ê±´ë¬¼ì€ ì ì„¤í•˜ì¤‘ì„ ì˜¨ì „ížˆ ë¶€ë‹´í•©ë‹ˆë‹¤.",
      "riskCategory": "ë³‘ì›, ì†Œë°©ì„œ ë“± ì£¼ìš” ì¤‘ìš”ë„ ê±´ì¶•ë¬¼ì€ ë” ë†’ì€ ì•ˆì „ê³„ìˆ˜(Is)ë¥¼ ì ìš©í•©ë‹ˆë‹¤.",
      "roofArea": "êµ¬ì¡°ë¬¼ì— ê°€í•´ì§€ëŠ” ì´ í•˜ì¤‘ì„ ì‚°ì¶œí•˜ê¸° ìœ„í•œ ì§€ë¶•ì˜ ìˆ˜í‰ íˆ¬ì˜ ë©´ì .",
      "includeDrift": "ê³ ì €ì°¨ê°€ ìžˆëŠ” ì¸ì ‘ ì§€ë¶• ì‚¬ì´ì— ë°œìƒí•˜ëŠ” ë°”ëžŒì— ì˜í•œ ëˆˆ ìŒ“ìž„(íŽ¸í•˜ì¤‘) ì¶”ê°€.",
      "upperRoofLength": "í’ìƒì¸¡ì— ìœ„ì¹˜í•œ ìƒë¶€ ì§€ë¶•ì˜ ìˆ˜í‰ ê¸¸ì´.",
      "lowerToUpperHeight": "ìƒë¶€ ì§€ë¶•ê³¼ í•˜ë¶€ ì§€ë¶• ì‚¬ì´ì˜ ìœ íš¨ ë†’ì´ì°¨."
    },
    "options": {
      "exposureCategory": {
        "sheltered": "ì°¨íí˜• (Ce = 1.3) â€” ìˆ˜ëª©ì´ë‚˜ ê±´ë¬¼ë¡œ ë‘˜ëŸ¬ì‹¸ì¸ ë¶€ì§€",
        "partial": "ë¶€ë¶„ ë…¸ì¶œ (Ce = 1.0) â€” ì¼ë°˜ì ì¸ êµì™¸ ì£¼ê±°ì§€",
        "full": "ì™„ì „ ë…¸ì¶œ (Ce = 0.9) â€” ìž¥ì• ë¬¼ì´ ì—†ëŠ” í‰íƒ„í•œ ê°œí™œì§€"
      },
      "thermalCategory": {
        "heated": "ë‚œë°© ê±´ì¶•ë¬¼ (Ct = 1.0) â€” ì£¼ê±°ìš© ë° ì—…ë¬´ìš© ì‹œì„¤",
        "cold": "ì €ì˜¨ ì°½ê³  (Ct = 1.1) â€” ê²°ë¹™ì  ì§ìƒ ìœ ì§€ ì°½ê³ ",
        "unheated": "ë¹„ë‚œë°© / ê°œë°©í˜• (Ct = 1.2) â€” ë‹¨ì—´ì´ ì—†ëŠ” ì°½ê³ /ì°¨ê³ ",
        "freezer": "ëƒ‰ë™ ì‹œì„¤ (Ct = 1.3) â€” ì˜í•˜ë¡œ ìœ ì§€ë˜ëŠ” ëƒ‰ë™ì°½ê³ "
      },
      "riskCategory": {
        "cat1": "1ë“±ê¸‰ â€” ì €ìœ„í—˜ (Is = 0.8): ë†ì—…ìš© ì°½ê³ , ê°€ì„¤ë¬¼",
        "cat2": "2ë“±ê¸‰ â€” í‘œì¤€ (Is = 1.0): ë‹¨ë…ì£¼íƒ, ì¼ë°˜ ì‚¬ë¬´ì†Œ",
        "cat3": "3ë“±ê¸‰ â€” ë‹¤ì¤‘ì´ìš© (Is = 1.1): í•™êµ, ì§‘íšŒìž¥",
        "cat4": "4ë“±ê¸‰ â€” í•„ìˆ˜ì‹œì„¤ (Is = 1.2): ì¢…í•©ë³‘ì›, ì†Œë°©ì„œ"
      }
    },
    "article": "## ì§€ë¶• êµ¬ì¡° ì ì„¤í•˜ì¤‘ ì‚°ì • ì—”ì§€ë‹ˆì–´ë§ ê°€ì´ë“œ\\n\\nì„œê¹Œëž˜, íŠ¸ëŸ¬ìŠ¤ ë° ë³´ì˜ êµ¬ì¡° ì•ˆì „ì„±ì„ ìœ„í•œ ì •í™•í•œ í•˜ì¤‘ ì‚°ì • ë°©ë²•."
  }
},
  'square-footage-calculator': {
  "en": {
    "name": "Square Footage Calculator",
    "shortDescription": "Free square footage calculator. Calculate area in sq ft, square meters, square yards, perimeter, waste factors, and material costs for any room or shape.",
    "helpTexts": {
      "shape": "Select the geometric shape of the room, patio, wall, or yard.",
      "length": "Primary length or base dimension.",
      "width": "Width of the rectangular or main section.",
      "diameter": "Total diameter across circular areas.",
      "height": "Perpendicular height for triangular or trapezoidal areas.",
      "base1": "First parallel base of the trapezoid.",
      "base2": "Second parallel base of the trapezoid.",
      "length2": "Length of the secondary section in an L-shaped room.",
      "width2": "Width of the secondary section in an L-shaped room.",
      "quantity": "Multiply for multiple identical rooms or floors.",
      "waste": "Standard waste factor: 5â€“10% for hardwood/carpet, 10â€“12% for tile, 15â€“20% for diagonal cuts.",
      "pricePerSqFt": "Optional â€” enter material or installed cost per sq ft to estimate total budget."
    },
    "options": {
      "shape": {
        "rectangle": "Rectangle / Square (Length Ã— Width)",
        "circle": "Circle (Diameter)",
        "triangle": "Triangle (Base Ã— Height)",
        "trapezoid": "Trapezoid (Base 1 + Base 2 Ã— Height)",
        "l-shape": "L-Shape (Two Connected Sections)"
      }
    },
    "article": "## How to Calculate Square Footage\\n\\nSquare footage is the primary measurement of area used for flooring, drywall, painting, and general construction.\\n\\n### Key Formulas\\n- **Rectangle:** Length Ã— Width\\n- **Circle:** Ï€ Ã— (Diameter / 2)Â²\\n- **Triangle:** 0.5 Ã— Base Ã— Height\\n- **Trapezoid:** 0.5 Ã— (Base 1 + Base 2) Ã— Height\\n- **L-Shape:** (L1 Ã— W1) + (L2 Ã— W2)"
  },
  "es": {
    "name": "Calculadora de Pies Cuadrados",
    "shortDescription": "Calculadora gratuita de pies cuadrados y metros cuadrados. Calcule superficie, perÃ­metro, yardas cuadradas, factor de merma y presupuesto de material.",
    "helpTexts": {
      "shape": "Seleccione la forma geomÃ©trica de la habitaciÃ³n, patio, pared o terreno.",
      "length": "Longitud principal o dimensiÃ³n de base.",
      "width": "Anchura de la secciÃ³n rectangular o principal.",
      "diameter": "DiÃ¡metro total para Ã¡reas circulares.",
      "height": "Altura perpendicular para triÃ¡ngulos o trapecios.",
      "base1": "Primera base paralela del trapecio.",
      "base2": "Segunda base paralela del trapecio.",
      "length2": "Longitud de la segunda secciÃ³n en habitaciones en L.",
      "width2": "Anchura de la segunda secciÃ³n en habitaciones en L.",
      "quantity": "Multiplica por el nÃºmero de estancias idÃ©nticas.",
      "waste": "Merma recomendada: 5â€“10% madera/alfombra, 10â€“12% cerÃ¡mica, 15â€“20% espiga o diagonal.",
      "pricePerSqFt": "Opcional â€” ingrese el precio por pieÂ² o mÂ² para calcular el costo total."
    },
    "options": {
      "shape": {
        "rectangle": "RectÃ¡ngulo / Cuadrado (Largo Ã— Ancho)",
        "circle": "CÃ­rculo (DiÃ¡metro)",
        "triangle": "TriÃ¡ngulo (Base Ã— Altura)",
        "trapezoid": "Trapecio (Base 1 + Base 2 Ã— Altura)",
        "l-shape": "Forma en L (Dos Secciones Conectadas)"
      }
    },
    "article": "## CÃ³mo Calcular Pies Cuadrados y Metros Cuadrados\\n\\nGuÃ­a completa para medir superficies de habitaciones, suelos, pintura y reformas."
  },
  "fr": {
    "name": "Calculateur de Pieds CarrÃ©s et MÃ¨tres CarrÃ©s",
    "shortDescription": "Calculateur gratuit de surface en pieds carrÃ©s (sq ft) et mÂ². Calculez la superficie, le pÃ©rimÃ¨tre, les verges carrÃ©es, le facteur de perte et le coÃ»t des matÃ©riaux.",
    "helpTexts": {
      "shape": "SÃ©lectionnez la forme gÃ©omÃ©trique de la piÃ¨ce, terrasse ou mur.",
      "length": "Longueur principale ou base.",
      "width": "Largeur de la section principale.",
      "diameter": "DiamÃ¨tre pour les zones circulaires.",
      "height": "Hauteur perpendiculaire.",
      "base1": "PremiÃ¨re base parallÃ¨le du trapÃ¨ze.",
      "base2": "DeuxiÃ¨me base parallÃ¨le du trapÃ¨ze.",
      "length2": "Longueur de la seconde section (piÃ¨ce en L).",
      "width2": "Largeur de la seconde section (piÃ¨ce en L).",
      "quantity": "Multiplier par le nombre de piÃ¨ces identiques.",
      "waste": "Marge de chute recommandÃ©e : 5â€“10% parquet/moquette, 10â€“12% carrelage, 15â€“20% pose diagonale.",
      "pricePerSqFt": "Optionnel â€” entrez le prix unitaire pour estimer le budget global."
    },
    "options": {
      "shape": {
        "rectangle": "Rectangle / CarrÃ© (Longueur Ã— Largeur)",
        "circle": "Cercle (DiamÃ¨tre)",
        "triangle": "Triangle (Base Ã— Hauteur)",
        "trapezoid": "TrapÃ¨ze (Base 1 + Base 2 Ã— Hauteur)",
        "l-shape": "Forme en L (Deux Sections ConnectÃ©es)"
      }
    },
    "article": "## Comment Calculer la Surface en Pieds CarrÃ©s et MÃ¨tres CarrÃ©s\\n\\nGuide pratique pour estimer vos revÃªtements de sol, peinture et travaux de construction."
  },
  "de": {
    "name": "Quadratmeter- und QuadratfuÃŸ-Rechner",
    "shortDescription": "Kostenloser QuadratfuÃŸ- und Quadratmeter-Rechner. Berechnen Sie GrundflÃ¤che, Umfang, Square Yards, Verschnittfaktor und Materialkosten fÃ¼r jeden Raum.",
    "helpTexts": {
      "shape": "WÃ¤hlen Sie die geometrische Form des Raums, der Wand oder FlÃ¤che.",
      "length": "HauptlÃ¤nge oder BasismaÃŸ.",
      "width": "Breite des Hauptabschnitts.",
      "diameter": "Gesamtdurchmesser fÃ¼r kreisfÃ¶rmige FlÃ¤chen.",
      "height": "Senkrechte HÃ¶he fÃ¼r Dreiecke oder Trapeze.",
      "base1": "Erste parallele Basis des Trapezes.",
      "base2": "Zweite parallele Basis des Trapezes.",
      "length2": "LÃ¤nge des zweiten Bereichs (L-Form).",
      "width2": "Breite des zweiten Bereichs (L-Form).",
      "quantity": "Multiplikator fÃ¼r mehrere identische RÃ¤ume.",
      "waste": "Empfohlener Verschnitt: 5â€“10% Parkett/Teppich, 10â€“12% Fliesen, 15â€“20% FischgrÃ¤t.",
      "pricePerSqFt": "Optional â€” Quadratmeter-/QuadratfuÃŸpreis fÃ¼r GesamtkostenschÃ¤tzung eingeben."
    },
    "options": {
      "shape": {
        "rectangle": "Rechteck / Quadrat (LÃ¤nge Ã— Breite)",
        "circle": "Kreis (Durchmesser)",
        "triangle": "Dreieck (Basis Ã— HÃ¶he)",
        "trapezoid": "Trapez (Basis 1 + Basis 2 Ã— HÃ¶he)",
        "l-shape": "L-Form (Zwei verbundene Abschnitte)"
      }
    },
    "article": "## Anleitung zur FlÃ¤chenberechnung\\n\\nFormeln und Praxistipps zur exakten Ermittlung von RaumflÃ¤chen, BodenbelÃ¤gen und Wandfarben."
  },
  "pt": {
    "name": "Calculadora de PÃ©s Quadrados e Metros Quadrados",
    "shortDescription": "Calculadora gratuita de Ã¡rea em sq ft e mÂ². Calcule metragem quadrada, perÃ­metro, jardas quadradas, fator de perda e orÃ§amento de materiais.",
    "helpTexts": {
      "shape": "Selecione o formato geomÃ©trico do cÃ´modo, parede ou terreno.",
      "length": "Comprimento principal ou dimensÃ£o da base.",
      "width": "Largura da seÃ§Ã£o principal.",
      "diameter": "DiÃ¢metro total para Ã¡reas circulares.",
      "height": "Altura perpendicular para triÃ¢ngulos ou trapÃ©zios.",
      "base1": "Primeira base paralela do trapÃ©zio.",
      "base2": "Segunda base paralela do trapÃ©zio.",
      "length2": "Comprimento da segunda seÃ§Ã£o em formato L.",
      "width2": "Largura da segunda seÃ§Ã£o em formato L.",
      "quantity": "Multiplique pela quantidade de cÃ´modos iguais.",
      "waste": "Perda recomendada: 5â€“10% laminado/carpete, 10â€“12% porcelanato, 15â€“20% espinha de peixe.",
      "pricePerSqFt": "Opcional â€” insira o preÃ§o por mÂ² ou pÃ©Â² para calcular o orÃ§amento."
    },
    "options": {
      "shape": {
        "rectangle": "RetÃ¢ngulo / Quadrado (Comprimento Ã— Largura)",
        "circle": "CÃ­rculo (DiÃ¢metro)",
        "triangle": "TriÃ¢ngulo (Base Ã— Altura)",
        "trapezoid": "TrapÃ©zio (Base 1 + Base 2 Ã— Altura)",
        "l-shape": "Formato em L (Duas SeÃ§Ãµes Conectadas)"
      }
    },
    "article": "## Como Calcular Ãrea em Metros Quadrados e PÃ©s Quadrados\\n\\nGuia completo para cÃ¡lculo de pisos, revestimentos, pintura e reformas."
  },
  "it": {
    "name": "Calcolatore Piedi Quadri e Metri Quadri",
    "shortDescription": "Calcolatore gratuito di superficie in piedi quadrati e mq. Calcola metratura, perimetro, iarde quadrate, sfrido e costi dei materiali.",
    "helpTexts": {
      "shape": "Seleziona la forma geometrica della stanza o superficie.",
      "length": "Lunghezza principale o base.",
      "width": "Larghezza della sezione principale.",
      "diameter": "Diametro per aree circolari.",
      "height": "Altezza perpendicolare.",
      "base1": "Prima base del trapezio.",
      "base2": "Seconda base del trapezio.",
      "length2": "Lunghezza seconda sezione (stanza a L).",
      "width2": "Larghezza seconda sezione (stanza a L).",
      "quantity": "Moltiplica per il numero di stanze uguali.",
      "waste": "Sfrido consigliato: 5â€“10% parquet/moquette, 10â€“12% piastrelle, 15â€“20% posa a spina di pesce.",
      "pricePerSqFt": "Opzionale â€” inserisci il prezzo unitario per stimare la spesa totale."
    },
    "options": {
      "shape": {
        "rectangle": "Rettangolo / Quadrato (Lunghezza Ã— Larghezza)",
        "circle": "Cerchio (Diametro)",
        "triangle": "Triangolo (Base Ã— Altezza)",
        "trapezoid": "Trapezio (Base 1 + Base 2 Ã— Altezza)",
        "l-shape": "Forma a L (Due Sezioni Collegate)"
      }
    },
    "article": "## Come Calcolare Metri Quadri e Piedi Quadri\\n\\nGuida al calcolo delle superfici per pavimentazioni, cartongesso e tinteggiature."
  },
  "nl": {
    "name": "Vierkante Voet en Vierkante Meter Calculator",
    "shortDescription": "Gratis oppervlakte calculator voor sq ft en mÂ². Bereken oppervlakte, omtrek, vierkante yards, snijverlies en materiaalkosten voor elke ruimte.",
    "helpTexts": {
      "shape": "Kies de geometrische vorm van de ruimte of wand.",
      "length": "Hoofdlengte of basisafmeting.",
      "width": "Breedte van het hoofdgedeelte.",
      "diameter": "Diameter voor ronde oppervlakken.",
      "height": "Loodrechte hoogte.",
      "base1": "Eerste basis van het trapezium.",
      "base2": "Tweede basis van het trapezium.",
      "length2": "Lengte van het tweede deel bij een L-vorm.",
      "width2": "Breedte van het tweede deel bij een L-vorm.",
      "quantity": "Aantal identieke kamers of oppervlakken.",
      "waste": "Aanbevolen snijverlies: 5â€“10% laminaat/tapijt, 10â€“12% tegels, 15â€“20% visgraat.",
      "pricePerSqFt": "Optioneel â€” prijs per mÂ² of sq ft voor totale kosten."
    },
    "options": {
      "shape": {
        "rectangle": "Rechthoek / Vierkant (Lengte Ã— Breedte)",
        "circle": "Cirkel (Diameter)",
        "triangle": "Driehoek (Basis Ã— Hoogte)",
        "trapezoid": "Trapezium (Basis 1 + Basis 2 Ã— Hoogte)",
        "l-shape": "L-Vorm (Twee Verbonden Delen)"
      }
    },
    "article": "## Oppervlakte Berekenen in Vierkante Meters en Feet\\n\\nHandige formules en tips voor vloeren, schilderwerk en verbouwingen."
  },
  "pl": {
    "name": "Kalkulator Powierzchni (Stopy i Metry Kwadratowe)",
    "shortDescription": "Darmowy kalkulator powierzchni w sq ft i mÂ². Oblicz metraÅ¼, obwÃ³d, naddatek na Å›cinki i szacunkowy koszt materiaÅ‚Ã³w dla kaÅ¼dego ksztaÅ‚tu.",
    "helpTexts": {
      "shape": "Wybierz ksztaÅ‚t geometryczny pomieszczenia lub Å›ciany.",
      "length": "DÅ‚ugoÅ›Ä‡ gÅ‚Ã³wna lub podstawa.",
      "width": "SzerokoÅ›Ä‡ sekcji gÅ‚Ã³wnej.",
      "diameter": "Åšrednica dla powierzchni koÅ‚owych.",
      "height": "WysokoÅ›Ä‡ prostopadÅ‚a.",
      "base1": "Pierwsza podstawa trapezu.",
      "base2": "Druga podstawa trapezu.",
      "length2": "DÅ‚ugoÅ›Ä‡ drugiej sekcji (pokÃ³j w ksztaÅ‚cie L).",
      "width2": "SzerokoÅ›Ä‡ drugiej sekcji (pokÃ³j w ksztaÅ‚cie L).",
      "quantity": "MnoÅ¼nik dla jednakowych pomieszczeÅ„.",
      "waste": "Zalecany naddatek: 5â€“10% panele/wykÅ‚adzina, 10â€“12% pÅ‚ytki, 15â€“20% jodeÅ‚ka.",
      "pricePerSqFt": "Opcjonalnie â€” cena za mÂ² lub sq ft do oszacowania kosztorysu."
    },
    "options": {
      "shape": {
        "rectangle": "ProstokÄ…t / Kwadrat (DÅ‚ugoÅ›Ä‡ Ã— SzerokoÅ›Ä‡)",
        "circle": "KoÅ‚o (Åšrednica)",
        "triangle": "TrÃ³jkÄ…t (Podstawa Ã— WysokoÅ›Ä‡)",
        "trapezoid": "Trapez (Podstawa 1 + Podstawa 2 Ã— WysokoÅ›Ä‡)",
        "l-shape": "KsztaÅ‚t L (Dwa PoÅ‚Ä…czone Odcinki)"
      }
    },
    "article": "## Jak ObliczyÄ‡ PowierzchniÄ™ w Metrach i Stopach Kwadratowych\\n\\nKompletny poradnik doboru iloÅ›ci paneli, pÅ‚ytek, farb i materiaÅ‚Ã³w budowlanych."
  },
  "ru": {
    "name": "ÐšÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€ ÐšÐ²Ð°Ð´Ñ€Ð°Ñ‚Ð½Ñ‹Ñ… Ð¤ÑƒÑ‚Ð¾Ð² Ð¸ ÐšÐ²Ð°Ð´Ñ€Ð°Ñ‚Ð½Ñ‹Ñ… ÐœÐµÑ‚Ñ€Ð¾Ð²",
    "shortDescription": "Ð‘ÐµÑÐ¿Ð»Ð°Ñ‚Ð½Ñ‹Ð¹ ÐºÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€ Ð¿Ð»Ð¾Ñ‰Ð°Ð´Ð¸ Ð² ÐºÐ². Ñ„ÑƒÑ‚Ð°Ñ… (sq ft) Ð¸ ÐºÐ². Ð¼ÐµÑ‚Ñ€Ð°Ñ… (Ð¼Â²). Ð Ð°ÑÑ‡Ñ‘Ñ‚ Ð¿Ð»Ð¾Ñ‰Ð°Ð´Ð¸, Ð¿ÐµÑ€Ð¸Ð¼ÐµÑ‚Ñ€Ð°, Ð·Ð°Ð¿Ð°ÑÐ° Ð½Ð° Ð¿Ð¾Ð´Ñ€ÐµÐ·ÐºÑƒ Ð¸ ÑÑ‚Ð¾Ð¸Ð¼Ð¾ÑÑ‚Ð¸ Ð¼Ð°Ñ‚ÐµÑ€Ð¸Ð°Ð»Ð¾Ð².",
    "helpTexts": {
      "shape": "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð³ÐµÐ¾Ð¼ÐµÑ‚Ñ€Ð¸Ñ‡ÐµÑÐºÑƒÑŽ Ñ„Ð¾Ñ€Ð¼Ñƒ Ð¿Ð¾Ð¼ÐµÑ‰ÐµÐ½Ð¸Ñ Ð¸Ð»Ð¸ ÑƒÑ‡Ð°ÑÑ‚ÐºÐ°.",
      "length": "ÐžÑÐ½Ð¾Ð²Ð½Ð°Ñ Ð´Ð»Ð¸Ð½Ð° Ð¸Ð»Ð¸ Ð¾ÑÐ½Ð¾Ð²Ð°Ð½Ð¸Ðµ.",
      "width": "Ð¨Ð¸Ñ€Ð¸Ð½Ð° Ð¾ÑÐ½Ð¾Ð²Ð½Ð¾Ð¹ ÑÐµÐºÑ†Ð¸Ð¸.",
      "diameter": "Ð”Ð¸Ð°Ð¼ÐµÑ‚Ñ€ Ð´Ð»Ñ ÐºÑ€ÑƒÐ³Ð»Ñ‹Ñ… Ð·Ð¾Ð½.",
      "height": "Ð’Ñ‹ÑÐ¾Ñ‚Ð° Ð´Ð»Ñ Ñ‚Ñ€ÐµÑƒÐ³Ð¾Ð»ÑŒÐ½Ð¸ÐºÐ¾Ð² Ð¸ Ñ‚Ñ€Ð°Ð¿ÐµÑ†Ð¸Ð¹.",
      "base1": "ÐŸÐµÑ€Ð²Ð¾Ðµ Ð¾ÑÐ½Ð¾Ð²Ð°Ð½Ð¸Ðµ Ñ‚Ñ€Ð°Ð¿ÐµÑ†Ð¸Ð¸.",
      "base2": "Ð’Ñ‚Ð¾Ñ€Ð¾Ðµ Ð¾ÑÐ½Ð¾Ð²Ð°Ð½Ð¸Ðµ Ñ‚Ñ€Ð°Ð¿ÐµÑ†Ð¸Ð¸.",
      "length2": "Ð”Ð»Ð¸Ð½Ð° Ð²Ñ‚Ð¾Ñ€Ð¾Ð¹ ÑÐµÐºÑ†Ð¸Ð¸ (L-Ð¾Ð±Ñ€Ð°Ð·Ð½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð°).",
      "width2": "Ð¨Ð¸Ñ€Ð¸Ð½Ð° Ð²Ñ‚Ð¾Ñ€Ð¾Ð¹ ÑÐµÐºÑ†Ð¸Ð¸ (L-Ð¾Ð±Ñ€Ð°Ð·Ð½Ð°Ñ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð°).",
      "quantity": "ÐšÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ð¾Ð´Ð¸Ð½Ð°ÐºÐ¾Ð²Ñ‹Ñ… ÐºÐ¾Ð¼Ð½Ð°Ñ‚.",
      "waste": "Ð ÐµÐºÐ¾Ð¼ÐµÐ½Ð´ÑƒÐµÐ¼Ñ‹Ð¹ Ð·Ð°Ð¿Ð°Ñ: 5â€“10% Ð»Ð°Ð¼Ð¸Ð½Ð°Ñ‚/ÐºÐ¾Ð²Ñ€Ð¾Ð»Ð¸Ð½, 10â€“12% Ð¿Ð»Ð¸Ñ‚ÐºÐ°, 15â€“20% Ð´Ð¸Ð°Ð³Ð¾Ð½Ð°Ð»ÑŒÐ½Ð°Ñ ÑƒÐºÐ»Ð°Ð´ÐºÐ°.",
      "pricePerSqFt": "ÐžÐ¿Ñ†Ð¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ð¾ â€” Ñ†ÐµÐ½Ð° Ð·Ð° Ð¼Â² Ð¸Ð»Ð¸ ÐºÐ². Ñ„ÑƒÑ‚ Ð´Ð»Ñ Ñ€Ð°ÑÑ‡Ñ‘Ñ‚Ð° ÑÐ¼ÐµÑ‚Ñ‹."
    },
    "options": {
      "shape": {
        "rectangle": "ÐŸÑ€ÑÐ¼Ð¾ÑƒÐ³Ð¾Ð»ÑŒÐ½Ð¸Ðº / ÐšÐ²Ð°Ð´Ñ€Ð°Ñ‚ (Ð”Ð»Ð¸Ð½Ð° Ã— Ð¨Ð¸Ñ€Ð¸Ð½Ð°)",
        "circle": "ÐšÑ€ÑƒÐ³ (Ð”Ð¸Ð°Ð¼ÐµÑ‚Ñ€)",
        "triangle": "Ð¢Ñ€ÐµÑƒÐ³Ð¾Ð»ÑŒÐ½Ð¸Ðº (ÐžÑÐ½Ð¾Ð²Ð°Ð½Ð¸Ðµ Ã— Ð’Ñ‹ÑÐ¾Ñ‚Ð°)",
        "trapezoid": "Ð¢Ñ€Ð°Ð¿ÐµÑ†Ð¸Ñ (ÐžÑÐ½Ð¾Ð²Ð°Ð½Ð¸Ðµ 1 + ÐžÑÐ½Ð¾Ð²Ð°Ð½Ð¸Ðµ 2 Ã— Ð’Ñ‹ÑÐ¾Ñ‚Ð°)",
        "l-shape": "Ð“-Ð¾Ð±Ñ€Ð°Ð·Ð½Ð°Ñ Ñ„Ð¾Ñ€Ð¼Ð° (Ð”Ð²Ðµ ÑÐ¾ÐµÐ´Ð¸Ð½Ñ‘Ð½Ð½Ñ‹Ðµ ÑÐµÐºÑ†Ð¸Ð¸)"
      }
    },
    "article": "## ÐšÐ°Ðº Ð Ð°ÑÑÑ‡Ð¸Ñ‚Ð°Ñ‚ÑŒ ÐŸÐ»Ð¾Ñ‰Ð°Ð´ÑŒ ÐŸÐ¾Ð¼ÐµÑ‰ÐµÐ½Ð¸Ñ\\n\\nÐ¤Ð¾Ñ€Ð¼ÑƒÐ»Ñ‹ Ñ€Ð°ÑÑ‡Ñ‘Ñ‚Ð° ÐºÐ²Ð°Ð´Ñ€Ð°Ñ‚Ð½Ñ‹Ñ… Ð¼ÐµÑ‚Ñ€Ð¾Ð² Ð¸ Ñ„ÑƒÑ‚Ð¾Ð² Ð´Ð»Ñ Ð½Ð°Ð¿Ð¾Ð»ÑŒÐ½Ñ‹Ñ… Ð¿Ð¾ÐºÑ€Ñ‹Ñ‚Ð¸Ð¹, Ð¿Ð»Ð¸Ñ‚ÐºÐ¸ Ð¸ Ñ€ÐµÐ¼Ð¾Ð½Ñ‚Ð°."
  },
  "tr": {
    "name": "Metrekare ve Fitkare HesaplayÄ±cÄ±",
    "shortDescription": "Ãœcretsiz fitkare (sq ft) ve metrekare (mÂ²) hesaplayÄ±cÄ±. Oda alanÄ±, Ã§evre uzunluÄŸu, fire payÄ± ve malzeme maliyetlerini kolayca hesaplayÄ±n.",
    "helpTexts": {
      "shape": "OdanÄ±n, duvarÄ±n veya alanÄ±n geometrik ÅŸeklini seÃ§in.",
      "length": "Ana uzunluk veya taban Ã¶lÃ§Ã¼sÃ¼.",
      "width": "Ana bÃ¶lÃ¼mÃ¼n geniÅŸliÄŸi.",
      "diameter": "Dairesel alanlar iÃ§in Ã§ap.",
      "height": "ÃœÃ§gen veya yamuk iÃ§in yÃ¼kseklik.",
      "base1": "YamuÄŸun birinci tabanÄ±.",
      "base2": "YamuÄŸun ikinci tabanÄ±.",
      "length2": "L ÅŸeklindeki odanÄ±n ikinci bÃ¶lÃ¼m uzunluÄŸu.",
      "width2": "L ÅŸeklindeki odanÄ±n ikinci bÃ¶lÃ¼m geniÅŸliÄŸi.",
      "quantity": "Ã–zdeÅŸ oda sayÄ±sÄ± Ã§arpanÄ±.",
      "waste": "Tavsiye edilen fire: %5â€“10 parke/halÄ±, %10â€“12 seramik, %15â€“20 balÄ±ksÄ±rtÄ±/Ã§apraz dÃ¶ÅŸeme.",
      "pricePerSqFt": "Ä°steÄŸe baÄŸlÄ± â€” toplam bÃ¼tÃ§e hesabÄ± iÃ§in mÂ² veya sq ft fiyatÄ± girin."
    },
    "options": {
      "shape": {
        "rectangle": "DikdÃ¶rtgen / Kare (Uzunluk Ã— GeniÅŸlik)",
        "circle": "Daire (Ã‡ap)",
        "triangle": "ÃœÃ§gen (Taban Ã— YÃ¼kseklik)",
        "trapezoid": "Yamuk (Taban 1 + Taban 2 Ã— YÃ¼kseklik)",
        "l-shape": "L Åžekli (Ä°ki BaÄŸlantÄ±lÄ± BÃ¶lÃ¼m)"
      }
    },
    "article": "## Metrekare ve Fitkare Alan Hesaplama Rehberi\\n\\nZemin dÃ¶ÅŸeme, boya ve tadilat iÅŸleri iÃ§in doÄŸru metraj Ã§Ä±karma yÃ¶ntemleri."
  },
  "ar": {
    "name": "Ø­Ø§Ø³Ø¨Ø© Ø§Ù„Ù‚Ø¯Ù… Ø§Ù„Ù…Ø±Ø¨Ø¹ ÙˆØ§Ù„Ù…ØªØ± Ø§Ù„Ù…Ø±Ø¨Ø¹",
    "shortDescription": "Ø­Ø§Ø³Ø¨Ø© Ù…Ø¬Ø§Ù†ÙŠØ© Ù„Ù„Ù‚Ø¯Ù… Ø§Ù„Ù…Ø±Ø¨Ø¹ ÙˆØ§Ù„Ù…ØªØ± Ø§Ù„Ù…Ø±Ø¨Ø¹. Ø§Ø­Ø³Ø¨ Ø§Ù„Ù…Ø³Ø§Ø­Ø©ØŒ Ø§Ù„Ù…Ø­ÙŠØ·ØŒ Ø§Ù„ÙŠØ§Ø±Ø¯Ø§Øª Ø§Ù„Ù…Ø±Ø¨Ø¹Ø©ØŒ Ù†Ø³Ø¨Ø© Ø§Ù„Ù‡Ø§Ù„Ùƒ ÙˆØªÙƒÙ„ÙØ© Ø§Ù„Ù…ÙˆØ§Ø¯ Ù„Ø£ÙŠ ØºØ±ÙØ© Ø£Ùˆ Ø´ÙƒÙ„.",
    "helpTexts": {
      "shape": "Ø§Ø®ØªØ± Ø§Ù„Ø´ÙƒÙ„ Ø§Ù„Ù‡Ù†Ø¯Ø³ÙŠ Ù„Ù„ØºØ±ÙØ© Ø£Ùˆ Ø§Ù„Ø¬Ø¯Ø§Ø± Ø£Ùˆ Ø§Ù„ÙÙ†Ø§Ø¡.",
      "length": "Ø§Ù„Ø·ÙˆÙ„ Ø§Ù„Ø£Ø³Ø§Ø³ÙŠ Ø£Ùˆ Ø¨Ø¹Ø¯ Ø§Ù„Ù‚Ø§Ø¹Ø¯Ø©.",
      "width": "Ø§Ù„Ø¹Ø±Ø¶ Ù„Ù„Ù‚Ø³Ù… Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠ.",
      "diameter": "Ø§Ù„Ù‚Ø·Ø± Ù„Ù„Ù…Ø³Ø§Ø­Ø§Øª Ø§Ù„Ø¯Ø§Ø¦Ø±ÙŠØ©.",
      "height": "Ø§Ù„Ø§Ø±ØªÙØ§Ø¹ Ø§Ù„Ø¹Ù…ÙˆØ¯ÙŠ.",
      "base1": "Ø§Ù„Ù‚Ø§Ø¹Ø¯Ø© Ø§Ù„Ø£ÙˆÙ„Ù‰ Ù„Ø´Ø¨Ù‡ Ø§Ù„Ù…Ù†Ø­Ø±Ù.",
      "base2": "Ø§Ù„Ù‚Ø§Ø¹Ø¯Ø© Ø§Ù„Ø«Ø§Ù†ÙŠØ© Ù„Ø´Ø¨Ù‡ Ø§Ù„Ù…Ù†Ø­Ø±Ù.",
      "length2": "Ø·ÙˆÙ„ Ø§Ù„Ù‚Ø³Ù… Ø§Ù„Ø«Ø§Ù†ÙŠ (ØºØ±ÙØ© Ø¹Ù„Ù‰ Ø´ÙƒÙ„ L).",
      "width2": "Ø¹Ø±Ø¶ Ø§Ù„Ù‚Ø³Ù… Ø§Ù„Ø«Ø§Ù†ÙŠ (ØºØ±ÙØ© Ø¹Ù„Ù‰ Ø´ÙƒÙ„ L).",
      "quantity": "Ù…Ø¶Ø§Ø¹Ù Ø¹Ø¯Ø¯ Ø§Ù„ØºØ±Ù Ø§Ù„Ù…ØªØ·Ø§Ø¨Ù‚Ø©.",
      "waste": "Ù†Ø³Ø¨Ø© Ø§Ù„Ù‡Ø§Ù„Ùƒ Ø§Ù„Ù…ÙˆØµÙ‰ Ø¨Ù‡Ø§: 5-10% Ù„Ù„Ø¨Ø§Ø±ÙƒÙŠÙ‡/Ø§Ù„Ù…ÙˆÙƒÙŠØªØŒ 10-12% Ù„Ù„Ø³ÙŠØ±Ø§Ù…ÙŠÙƒØŒ 15-20% Ù„Ù„ØªØ±ÙƒÙŠØ¨ Ø§Ù„Ù…Ø§Ø¦Ù„.",
      "pricePerSqFt": "Ø§Ø®ØªÙŠØ§Ø±ÙŠ â€” Ø£Ø¯Ø®Ù„ Ø³Ø¹Ø± Ø§Ù„Ù‚Ø¯Ù…Â² Ø£Ùˆ Ø§Ù„Ù…ØªØ±Â² Ù„Ø­Ø³Ø§Ø¨ Ø§Ù„ØªÙƒÙ„ÙØ© Ø§Ù„Ø¥Ø¬Ù…Ø§Ù„ÙŠØ©."
    },
    "options": {
      "shape": {
        "rectangle": "Ù…Ø³ØªØ·ÙŠÙ„ / Ù…Ø±Ø¨Ø¹ (Ø§Ù„Ø·ÙˆÙ„ Ã— Ø§Ù„Ø¹Ø±Ø¶)",
        "circle": "Ø¯Ø§Ø¦Ø±Ø© (Ø§Ù„Ù‚Ø·Ø±)",
        "triangle": "Ù…Ø«Ù„Ø« (Ø§Ù„Ù‚Ø§Ø¹Ø¯Ø© Ã— Ø§Ù„Ø§Ø±ØªÙØ§Ø¹)",
        "trapezoid": "Ø´Ø¨Ù‡ Ù…Ù†Ø­Ø±Ù (Ø§Ù„Ù‚Ø§Ø¹Ø¯Ø© 1 + Ø§Ù„Ù‚Ø§Ø¹Ø¯Ø© 2 Ã— Ø§Ù„Ø§Ø±ØªÙØ§Ø¹)",
        "l-shape": "Ø´ÙƒÙ„ L (Ù‚Ø³Ù…Ø§Ù† Ù…ØªØµÙ„Ø§Ù†)"
      }
    },
    "article": "## ÙƒÙŠÙÙŠØ© Ø­Ø³Ø§Ø¨ Ø§Ù„Ù…Ø³Ø§Ø­Ø© Ø¨Ø§Ù„Ù‚Ø¯Ù… Ø§Ù„Ù…Ø±Ø¨Ø¹ ÙˆØ§Ù„Ù…ØªØ± Ø§Ù„Ù…Ø±Ø¨Ø¹\\n\\nØ¯Ù„ÙŠÙ„ Ø´Ø§Ù…Ù„ Ù„Ù‚ÙŠØ§Ø³ Ù…Ø³Ø§Ø­Ø§Øª Ø§Ù„Ø£Ø±Ø¶ÙŠØ§Øª ÙˆØ§Ù„Ø¯Ù‡Ø§Ù†Ø§Øª ÙˆÙ…Ø´Ø§Ø±ÙŠØ¹ Ø§Ù„Ø¨Ù†Ø§Ø¡."
  },
  "hi": {
    "name": "à¤¸à¥à¤•à¥à¤µà¤¾à¤¯à¤° à¤«à¥€à¤Ÿ à¤”à¤° à¤¸à¥à¤•à¥à¤µà¤¾à¤¯à¤° à¤®à¥€à¤Ÿà¤° à¤•à¥ˆà¤²à¤•à¥à¤²à¥‡à¤Ÿà¤°",
    "shortDescription": "à¤®à¥à¤«à¥à¤¤ à¤¸à¥à¤•à¥à¤µà¤¾à¤¯à¤° à¤«à¥€à¤Ÿ (à¤µà¤°à¥à¤— à¤«à¥à¤Ÿ) à¤”à¤° à¤¸à¥à¤•à¥à¤µà¤¾à¤¯à¤° à¤®à¥€à¤Ÿà¤° à¤•à¥ˆà¤²à¤•à¥à¤²à¥‡à¤Ÿà¤°à¥¤ à¤•à¤¿à¤¸à¥€ à¤­à¥€ à¤•à¤®à¤°à¥‡ à¤¯à¤¾ à¤†à¤•à¤¾à¤° à¤•à¥‡ à¤²à¤¿à¤ à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¤«à¤², à¤ªà¤°à¤¿à¤§à¤¿, à¤…à¤ªà¤¶à¤¿à¤·à¥à¤Ÿ à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤ à¤”à¤° à¤¸à¤¾à¤®à¤—à¥à¤°à¥€ à¤²à¤¾à¤—à¤¤ à¤•à¥€ à¤—à¤£à¤¨à¤¾ à¤•à¤°à¥‡à¤‚à¥¤",
    "helpTexts": {
      "shape": "à¤•à¤®à¤°à¥‡, à¤¦à¥€à¤µà¤¾à¤° à¤¯à¤¾ à¤†à¤‚à¤—à¤¨ à¤•à¤¾ à¤œà¥à¤¯à¤¾à¤®à¤¿à¤¤à¥€à¤¯ à¤†à¤•à¤¾à¤° à¤šà¥à¤¨à¥‡à¤‚à¥¤",
      "length": "à¤ªà¥à¤°à¤¾à¤¥à¤®à¤¿à¤• à¤²à¤‚à¤¬à¤¾à¤ˆ à¤¯à¤¾ à¤†à¤§à¤¾à¤° à¤†à¤¯à¤¾à¤®à¥¤",
      "width": "à¤®à¥à¤–à¥à¤¯ à¤­à¤¾à¤— à¤•à¥€ à¤šà¥Œà¤¡à¤¼à¤¾à¤ˆà¥¤",
      "diameter": "à¤—à¥‹à¤²à¤¾à¤•à¤¾à¤° à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤ à¤µà¥à¤¯à¤¾à¤¸à¥¤",
      "height": "à¤²à¤‚à¤¬à¤µà¤¤ à¤Šà¤‚à¤šà¤¾à¤ˆà¥¤",
      "base1": "à¤¸à¤®à¤²à¤®à¥à¤¬ (Trapezoid) à¤•à¤¾ à¤ªà¤¹à¤²à¤¾ à¤†à¤§à¤¾à¤°à¥¤",
      "base2": "à¤¸à¤®à¤²à¤®à¥à¤¬ à¤•à¤¾ à¤¦à¥‚à¤¸à¤°à¤¾ à¤†à¤§à¤¾à¤°à¥¤",
      "length2": "L-à¤†à¤•à¤¾à¤° à¤µà¤¾à¤²à¥‡ à¤•à¤®à¤°à¥‡ à¤•à¥‡ à¤¦à¥‚à¤¸à¤°à¥‡ à¤­à¤¾à¤— à¤•à¥€ à¤²à¤‚à¤¬à¤¾à¤ˆà¥¤",
      "width2": "L-à¤†à¤•à¤¾à¤° à¤µà¤¾à¤²à¥‡ à¤•à¤®à¤°à¥‡ à¤•à¥‡ à¤¦à¥‚à¤¸à¤°à¥‡ à¤­à¤¾à¤— à¤•à¥€ à¤šà¥Œà¤¡à¤¼à¤¾à¤ˆà¥¤",
      "quantity": "à¤¸à¤®à¤¾à¤¨ à¤•à¤®à¤°à¥‹à¤‚ à¤•à¥€ à¤¸à¤‚à¤–à¥à¤¯à¤¾à¥¤",
      "waste": "à¤…à¤¨à¥à¤¶à¤‚à¤¸à¤¿à¤¤ à¤…à¤ªà¤¶à¤¿à¤·à¥à¤Ÿ: 5â€“10% à¤¹à¤¾à¤°à¥à¤¡à¤µà¥à¤¡/à¤•à¤¾à¤²à¥€à¤¨, 10â€“12% à¤Ÿà¤¾à¤‡à¤²à¥‡à¤‚, 15â€“20% à¤µà¤¿à¤•à¤°à¥à¤£ à¤•à¤Ÿà¥¤",
      "pricePerSqFt": "à¤µà¥ˆà¤•à¤²à¥à¤ªà¤¿à¤• â€” à¤•à¥à¤² à¤²à¤¾à¤—à¤¤ à¤•à¥‡ à¤²à¤¿à¤ à¤ªà¥à¤°à¤¤à¤¿ à¤µà¤°à¥à¤— à¤«à¥à¤Ÿ à¤¦à¤° à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚à¥¤"
    },
    "options": {
      "shape": {
        "rectangle": "à¤†à¤¯à¤¤ / à¤µà¤°à¥à¤— (à¤²à¤‚à¤¬à¤¾à¤ˆ Ã— à¤šà¥Œà¤¡à¤¼à¤¾à¤ˆ)",
        "circle": "à¤µà¥ƒà¤¤à¥à¤¤ (à¤µà¥à¤¯à¤¾à¤¸)",
        "triangle": "à¤¤à¥à¤°à¤¿à¤­à¥à¤œ (à¤†à¤§à¤¾à¤° Ã— à¤Šà¤‚à¤šà¤¾à¤ˆ)",
        "trapezoid": "à¤¸à¤®à¤²à¤®à¥à¤¬ (à¤†à¤§à¤¾à¤° 1 + à¤†à¤§à¤¾à¤° 2 Ã— à¤Šà¤‚à¤šà¤¾à¤ˆ)",
        "l-shape": "L-à¤†à¤•à¤¾à¤° (à¤¦à¥‹ à¤œà¥à¤¡à¤¼à¥‡ à¤¹à¥à¤ à¤­à¤¾à¤—)"
      }
    },
    "article": "## à¤¸à¥à¤•à¥à¤µà¤¾à¤¯à¤° à¤«à¥€à¤Ÿ (à¤µà¤°à¥à¤— à¤«à¥à¤Ÿ) à¤•à¥€ à¤—à¤£à¤¨à¤¾ à¤•à¥ˆà¤¸à¥‡ à¤•à¤°à¥‡à¤‚\\n\\nà¤«à¤°à¥à¤¶, à¤Ÿà¤¾à¤‡à¤², à¤ªà¥‡à¤‚à¤Ÿà¤¿à¤‚à¤— à¤”à¤° à¤¨à¤¿à¤°à¥à¤®à¤¾à¤£ à¤¸à¤¾à¤®à¤—à¥à¤°à¥€ à¤•à¥‡ à¤¸à¤Ÿà¥€à¤• à¤…à¤¨à¥à¤®à¤¾à¤¨ à¤•à¥‡ à¤²à¤¿à¤ à¤¸à¤‚à¤ªà¥‚à¤°à¥à¤£ à¤—à¤¾à¤‡à¤¡à¥¤"
  },
  "zh": {
    "name": "å¹³æ–¹è‹±å°ºä¸Žå¹³æ–¹ç±³è®¡ç®—å™¨",
    "shortDescription": "å…è´¹å¹³æ–¹è‹±å°º (sq ft) ä¸Žå¹³æ–¹ç±³ (mÂ²) é¢ç§¯è®¡ç®—å™¨ã€‚ç²¾ç¡®è®¡ç®—æˆ¿é—´é¢ç§¯ã€å‘¨é•¿ã€å¹³æ–¹ç ã€æŸè€—çŽ‡åŠè£…ä¿®ææ–™é¢„ç®—ã€‚",
    "helpTexts": {
      "shape": "é€‰æ‹©æˆ¿é—´ã€åº­é™¢ã€å¢™é¢æˆ–åœ°å—çš„å‡ ä½•å½¢çŠ¶ã€‚",
      "length": "ä¸»è¦é•¿åº¦æˆ–åº•è¾¹å°ºå¯¸ã€‚",
      "width": "ä¸»çŸ©å½¢åŒºåŸŸçš„å®½åº¦ã€‚",
      "diameter": "åœ†å½¢åŒºåŸŸçš„æ€»ç›´å¾„ã€‚",
      "height": "åž‚ç›´é«˜åº¦ï¼ˆä¸‰è§’å½¢æˆ–æ¢¯å½¢ï¼‰ã€‚",
      "base1": "æ¢¯å½¢åº•è¾¹ 1ï¼ˆè¾ƒé•¿è¾¹ï¼‰ã€‚",
      "base2": "æ¢¯å½¢åº•è¾¹ 2ï¼ˆè¾ƒçŸ­è¾¹ï¼‰ã€‚",
      "length2": "Låž‹æˆ¿é—´ç¬¬äºŒæ®µé•¿åº¦ã€‚",
      "width2": "Låž‹æˆ¿é—´ç¬¬äºŒæ®µå®½åº¦ã€‚",
      "quantity": "ç›¸åŒæˆ·åž‹æˆ–æˆ¿é—´æ•°é‡å€æ•°ã€‚",
      "waste": "æŽ¨èæŸè€—çŽ‡ï¼šåœ°æ¿/åœ°æ¯¯ 5â€“10%ï¼Œç“·ç – 10â€“12%ï¼Œäººå­—æ‹¼/å¯¹è§’æ–œé“º 15â€“20%ã€‚",
      "pricePerSqFt": "å¯é€‰ â€” è¾“å…¥å•ä»·ä»¥ä¼°ç®—ææ–™æ€»èŠ±è´¹ã€‚"
    },
    "options": {
      "shape": {
        "rectangle": "çŸ©å½¢ / æ­£æ–¹å½¢ (é•¿ Ã— å®½)",
        "circle": "åœ†å½¢ (ç›´å¾„)",
        "triangle": "ä¸‰è§’å½¢ (åº• Ã— é«˜)",
        "trapezoid": "æ¢¯å½¢ (ä¸Šåº• + ä¸‹åº• Ã— é«˜)",
        "l-shape": "Låž‹ç©ºé—´ (ä¸¤æ®µç›¸è¿žçŸ©å½¢)"
      }
    },
    "article": "## å¹³æ–¹è‹±å°ºä¸Žå¹³æ–¹ç±³é¢ç§¯è®¡ç®—æ–¹æ³•\\n\\nä¸ºåœ°é¢é“ºè£…ã€å¢™é¢ç²‰åˆ·ã€ç“·ç –é“ºè´´æä¾›ä¸“ä¸šçš„é¢ç§¯æµ‹é‡ä¸Žè€—æä¼°ç®—å…¬å¼ã€‚"
  },
  "ja": {
    "name": "ã‚¹ã‚¯ã‚¨ã‚¢ãƒ•ã‚£ãƒ¼ãƒˆãƒ»å¹³ç±³é¢ç©è¨ˆç®—æ©Ÿ",
    "shortDescription": "ç„¡æ–™ã®ã‚¹ã‚¯ã‚¨ã‚¢ãƒ•ã‚£ãƒ¼ãƒˆ (sq ft)ãƒ»å¹³æ–¹ãƒ¡ãƒ¼ãƒˆãƒ« (mÂ²)ãƒ»åªæ•°é¢ç©è¨ˆç®—æ©Ÿã€‚éƒ¨å±‹ã®é¢ç©ã€å¤–å‘¨ã€ç«¯æãƒ­ã‚¹çŽ‡ã€ææ–™è²»ã‚’ç°¡å˜ç®—å‡ºã€‚",
    "helpTexts": {
      "shape": "éƒ¨å±‹ã€å£é¢ã€åº­ã®å¹¾ä½•å­¦çš„å½¢çŠ¶ã‚’é¸æŠžã€‚",
      "length": "ä¸»ã¨ãªã‚‹é•·ã•ã¾ãŸã¯åº•è¾ºã€‚",
      "width": "ä¸»åŒºç”»ã®å¹…ã€‚",
      "diameter": "å††å½¢åŒºç”»ã®ç›´å¾„ã€‚",
      "height": "åž‚ç›´æ–¹å‘ã®é«˜ã•ã€‚",
      "base1": "å°å½¢ã®ä¸‹åº• 1ã€‚",
      "base2": "å°å½¢ã®ä¸Šåº• 2ã€‚",
      "length2": "Lå­—åž‹éƒ¨å±‹ã®ç¬¬2åŒºç”»ã®é•·ã•ã€‚",
      "width2": "Lå­—åž‹éƒ¨å±‹ã®ç¬¬2åŒºç”»ã®å¹…ã€‚",
      "quantity": "åŒä¸€ã®éƒ¨å±‹ã®æ•°ã€‚",
      "waste": "æŽ¨å¥¨ãƒ­ã‚¹çŽ‡ï¼šãƒ•ãƒ­ãƒ¼ãƒªãƒ³ã‚°ãƒ»ã‚«ãƒ¼ãƒšãƒƒãƒˆ 5ã€œ10%ã€ã‚¿ã‚¤ãƒ« 10ã€œ12%ã€ãƒ˜ãƒªãƒ³ãƒœãƒ¼ãƒ³ãƒ»æ–œã‚å¼µã‚Š 15ã€œ20%ã€‚",
      "pricePerSqFt": "ä»»æ„ â€” ç·äºˆç®—ã‚’ç®—å‡ºã™ã‚‹ãŸã‚ã®å˜ä¾¡ã€‚"
    },
    "options": {
      "shape": {
        "rectangle": "é•·æ–¹å½¢ / æ­£æ–¹å½¢ (ç¸¦ Ã— æ¨ª)",
        "circle": "å††å½¢ (ç›´å¾„)",
        "triangle": "ä¸‰è§’å½¢ (åº•è¾º Ã— é«˜ã•)",
        "trapezoid": "å°å½¢ (ä¸Šåº• + ä¸‹åº• Ã— é«˜ã•)",
        "l-shape": "Lå­—åž‹ (2ã¤ã®é€£çµåŒºç”»)"
      }
    },
    "article": "## ã‚¹ã‚¯ã‚¨ã‚¢ãƒ•ã‚£ãƒ¼ãƒˆãŠã‚ˆã³å¹³æ–¹ãƒ¡ãƒ¼ãƒˆãƒ«é¢ç©ã®è¨ˆç®—æ–¹æ³•\\n\\nãƒ•ãƒ­ãƒ¼ãƒªãƒ³ã‚°å¼µã‚Šæ›¿ãˆã€ã‚¯ãƒ­ã‚¹æ–½å·¥ã€å¡—è£…å·¥äº‹ã®æ­£ç¢ºãªé¢ç©ç©ç®—ã‚¬ã‚¤ãƒ‰ã€‚"
  },
  "ko": {
    "name": "ìŠ¤í€˜ì–´í”¼íŠ¸ ë° ì œê³±ë¯¸í„° ë©´ì  ê³„ì‚°ê¸°",
    "shortDescription": "ë¬´ë£Œ ìŠ¤í€˜ì–´í”¼íŠ¸(sq ft) ë° ì œê³±ë¯¸í„°(mÂ²), í‰ìˆ˜ ë©´ì  ê³„ì‚°ê¸°. ë°© ë©´ì , ë‘˜ë ˆ, ë¡œìŠ¤ìœ¨(í• ì¦), ìžìž¬ë¹„ ê²¬ì ì„ ì¦‰ì‹œ ì‚°ì¶œ.",
    "helpTexts": {
      "shape": "ë°©, ë²½ë©´ ë˜ëŠ” ë¶€ì§€ì˜ ê¸°í•˜í•™ì  í˜•íƒœë¥¼ ì„ íƒí•˜ì„¸ìš”.",
      "length": "ê¸°ë³¸ ê¸¸ì´ ë˜ëŠ” ë°‘ë³€.",
      "width": "ê¸°ë³¸ êµ¬ì—­ì˜ ë„ˆë¹„.",
      "diameter": "ì›í˜• ê³µê°„ì˜ ì§€ë¦„.",
      "height": "ìˆ˜ì§ ë†’ì´.",
      "base1": "ì‚¬ë‹¤ë¦¬ê¼´ ë°‘ë³€ 1.",
      "base2": "ì‚¬ë‹¤ë¦¬ê¼´ ë°‘ë³€ 2.",
      "length2": "Lìží˜• ë°©ì˜ ë‘ ë²ˆì§¸ êµ¬ê°„ ê¸¸ì´.",
      "width2": "Lìží˜• ë°©ì˜ ë‘ ë²ˆì§¸ êµ¬ê°„ ë„ˆë¹„.",
      "quantity": "ë™ì¼í•œ ë©´ì ì˜ ê°œìˆ˜.",
      "waste": "ê¶Œìž¥ ìžìž¬ ë¡œìŠ¤ìœ¨: ë§ˆë£¨/ì¹´íŽ« 5~10%, íƒ€ì¼ 10~12%, í—¤ë§ë³¸/ëŒ€ê°ì„  ì‹œê³µ 15~20%.",
      "pricePerSqFt": "ì„ íƒì‚¬í•­ â€” ì´ ìžìž¬ë¹„ ê²¬ì ì„ ìœ„í•œ ë‹¨ìœ„ë‹¹ ë‹¨ê°€."
    },
    "options": {
      "shape": {
        "rectangle": "ì§ì‚¬ê°í˜• / ì •ì‚¬ê°í˜• (ê°€ë¡œ Ã— ì„¸ë¡œ)",
        "circle": "ì›í˜• (ì§€ë¦„)",
        "triangle": "ì‚¼ê°í˜• (ë°‘ë³€ Ã— ë†’ì´)",
        "trapezoid": "ì‚¬ë‹¤ë¦¬ê¼´ (ìœ—ë³€ + ì•„ëž«ë³€ Ã— ë†’ì´)",
        "l-shape": "Lìží˜• ê³µê°„ (ì—°ê²°ëœ ë‘ êµ¬ì—­)"
      }
    },
    "article": "## ìŠ¤í€˜ì–´í”¼íŠ¸ ë° ì œê³±ë¯¸í„° ë©´ì  ì‚°ì • ê°€ì´ë“œ\\n\\në°”ë‹¥ìž¬, íƒ€ì¼, ë„ë°° ë° ì¸í…Œë¦¬ì–´ ì‹œê³µì„ ìœ„í•œ ì •í™•í•œ ë©´ì  ì¸¡ì • ë° ë¬¼ëŸ‰ ì‚°ì¶œ ê³µì‹."
  }
},
  'siding-calculator': {
  "en": {
    "name": "Siding Calculator",
    "shortDescription": "Free siding calculator for houses and buildings. Calculate siding area in sq ft, squares, panels, waste, and material cost for vinyl, fiber cement, wood, and metal siding.",
    "helpTexts": {
      "buildingLength": "Exterior length of the building (longer wall dimension). Measure outside corner to corner.",
      "buildingWidth": "Exterior width of the building (shorter wall dimension). Measure outside corner to corner.",
      "wallHeight": "Exterior wall height from ground to eave/soffit, excluding gable ends.",
      "stories": "Number of above-grade stories. Multiplies total perimeter wall height.",
      "gableShape": "Select gable geometry. Gable ends require extra siding above the eave line on pitched roofs.",
      "gableWidth": "Width at the base of the gable (typically matches the building width).",
      "gableHeight": "Vertical height from eave to roof peak.",
      "gableCount": "Standard gable roofs have 2. Hip roofs have 0.",
      "doorCount": "Standard exterior doors (3Ã—7 ft = 21 sq ft each). Automatically deducted.",
      "windowCount": "Standard windows (3Ã—4 ft = 12 sq ft each). Automatically deducted.",
      "garageDoorCount": "Standard single garage doors (9Ã—7 ft = 63 sq ft each). Automatically deducted.",
      "sidingMaterial": "Select siding material for reference and recommended waste factor.",
      "waste": "Recommended: 5â€“10% vinyl/metal, 10â€“15% fiber cement/engineered wood, 15â€“20% wood shakes.",
      "panelWidthInches": "Optional â€” enter exposed face width per panel/board (e.g. 4 in Dutch lap, 6 in clapboard) to estimate panel count.",
      "pricePerSqFt": "Optional â€” enter material price per sq ft or mÂ² for instant budget estimation."
    },
    "options": {
      "gableShape": {
        "none": "No gables / Flat roof",
        "triangle": "Triangular gables (standard pitched roof)",
        "half-circle": "Half-circle / Arched gables"
      },
      "sidingMaterial": {
        "vinyl": "Vinyl Siding",
        "fiber-cement": "Fiber Cement (Hardie Board)",
        "wood": "Wood Siding (Clapboard / Shakes)",
        "metal": "Metal / Steel Siding",
        "engineered-wood": "Engineered Wood (LP SmartSide)",
        "stucco": "Stucco / EIFS",
        "brick-veneer": "Brick Veneer"
      }
    },
    "article": "## How to Calculate House Siding\\n\\nAccurate guide to measure exterior wall perimeter, calculate gable peaks, deduct door/window openings, apply waste factors, and convert square footage to siding squares."
  },
  "es": {
    "name": "Calculadora de Revestimiento Exterior",
    "shortDescription": "Calculadora gratuita de siding y revestimiento exterior. Calcula metros/pies cuadrados, squares, paneles, merma y presupuesto para vinilo, fibrocemento, madera y metal.",
    "helpTexts": {
      "buildingLength": "Longitud exterior del edificio. Mida de esquina a esquina exterior.",
      "buildingWidth": "Anchura exterior del edificio. Mida de esquina a esquina exterior.",
      "wallHeight": "Altura de la pared exterior desde el suelo hasta el alero (sin incluir frontones).",
      "stories": "NÃºmero de plantas del edificio. Multiplica la altura total.",
      "gableShape": "Seleccione la forma del frontÃ³n para sumar la superficie adicional en techos a dos aguas.",
      "gableWidth": "Anchura de la base del frontÃ³n (suele coincidir con el ancho del edificio).",
      "gableHeight": "Altura vertical desde el alero hasta la cumbrera del tejado.",
      "gableCount": "Un tejado estÃ¡ndar a dos aguas tiene 2 frontones. Un tejado a 4 aguas tiene 0.",
      "doorCount": "Puertas exteriores estÃ¡ndar (0.9Ã—2.1 m = 21 piesÂ²). Se descuentan automÃ¡ticamente.",
      "windowCount": "Ventanas estÃ¡ndar (0.9Ã—1.2 m = 12 piesÂ²). Se descuentan automÃ¡ticamente.",
      "garageDoorCount": "Puertas de garaje simples (2.7Ã—2.1 m = 63 piesÂ²). Se descuentan automÃ¡ticamente.",
      "sidingMaterial": "Seleccione el material para calcular merma recomendada.",
      "waste": "Recomendado: 5â€“10% vinilo/metal, 10â€“15% fibrocemento/madera compuesta, 15â€“20% tejas de madera.",
      "panelWidthInches": "Opcional â€” ancho visible del panel en pulgadas para calcular nÃºmero de tablas.",
      "pricePerSqFt": "Opcional â€” precio del material por unidad de superficie para estimar presupuesto."
    },
    "options": {
      "gableShape": {
        "none": "Sin frontones / Techo plano o a 4 aguas",
        "triangle": "Frontones triangulares (techo a dos aguas)",
        "half-circle": "Frontones arqueados o semicirculares"
      },
      "sidingMaterial": {
        "vinyl": "Revestimiento de Vinilo",
        "fiber-cement": "Fibrocemento (tipo Hardie Board)",
        "wood": "Madera (Tablillas / Tinglado)",
        "metal": "Chapa MetÃ¡lica / Acero",
        "engineered-wood": "Madera de IngenierÃ­a (LP SmartSide)",
        "stucco": "Estuco / Mortero EIFS",
        "brick-veneer": "Ladrillo Visto"
      }
    },
    "article": "## CÃ³mo Calcular el Revestimiento Exterior de una Casa\\n\\nGuÃ­a completa para medir el perÃ­metro exterior, aÃ±adir los frontones triangulares, deducir huecos de puertas y ventanas, y calcular los squares y paneles necesarios."
  },
  "fr": {
    "name": "Calculateur de Bardage ExtÃ©rieur",
    "shortDescription": "Calculateur gratuit de bardage pour faÃ§ades et maisons. Calculez les surfaces en mÂ², les carrÃ©s (squares), le nombre de clins, les chutes et le coÃ»t estimÃ©.",
    "helpTexts": {
      "buildingLength": "Longueur extÃ©rieure du bÃ¢timent mesurÃ©e d'angle Ã  angle.",
      "buildingWidth": "Largeur extÃ©rieure du bÃ¢timent mesurÃ©e d'angle Ã  angle.",
      "wallHeight": "Hauteur sous Ã©gout du mur extÃ©rieur, hors pignon.",
      "stories": "Nombre d'Ã©tages du bÃ¢timent.",
      "gableShape": "Forme gÃ©omÃ©trique du pignon de toiture.",
      "gableWidth": "Largeur Ã  la base du pignon (gÃ©nÃ©ralement Ã©gale Ã  la largeur du bÃ¢timent).",
      "gableHeight": "Hauteur verticale de l'Ã©gout au faÃ®tage.",
      "gableCount": "Une toiture Ã  2 pans classique possÃ¨de 2 pignons. Toit 4 pans = 0.",
      "doorCount": "Portes extÃ©rieures standard (dÃ©duites automatiquement).",
      "windowCount": "FenÃªtres standard (dÃ©duites automatiquement).",
      "garageDoorCount": "Portes de garage simples (dÃ©duites automatiquement).",
      "sidingMaterial": "MatÃ©riau de bardage pour ajuster le facteur de chutes.",
      "waste": "RecommandÃ© : 5â€“10% PVC/alu, 10â€“15% fibrociment/composite, 15â€“20% bardeaux bois.",
      "panelWidthInches": "Optionnel â€” largeur utile exposÃ©e du clin pour estimer le nombre de lames.",
      "pricePerSqFt": "Optionnel â€” prix du matÃ©riau au mÂ² pour estimer le budget."
    },
    "options": {
      "gableShape": {
        "none": "Sans pignon / Toit plat ou 4 pans",
        "triangle": "Pignons triangulaires (toit 2 pans)",
        "half-circle": "Pignons cintrÃ©s / demi-cercle"
      },
      "sidingMaterial": {
        "vinyl": "Bardage Vinyle (PVC)",
        "fiber-cement": "Fibrociment (type Hardie)",
        "wood": "Bardage Bois Naturel",
        "metal": "Bardage MÃ©tallique / Acier",
        "engineered-wood": "Bois d'ingÃ©nierie (LP SmartSide)",
        "stucco": "CrÃ©pi / Enduit extÃ©rieur",
        "brick-veneer": "Briquettes de parement"
      }
    },
    "article": "## Comment Calculer la QuantitÃ© de Bardage pour une Maison\\n\\nMesure des faÃ§ades, calcul des pointes de pignons, dÃ©duction des menuiseries et prÃ©vision des chutes."
  },
  "de": {
    "name": "Fassadenverkleidungs-Rechner",
    "shortDescription": "Kostenloser Rechner fÃ¼r Fassadenverkleidungen (Siding). Berechnen Sie WandflÃ¤che in mÂ², Siding-Squares, Paneelanzahl, Verschnitt und Materialkosten.",
    "helpTexts": {
      "buildingLength": "AuÃŸenlÃ¤nge des GebÃ¤udes von AuÃŸenecke zu AuÃŸenecke.",
      "buildingWidth": "AuÃŸenbreite des GebÃ¤udes von AuÃŸenecke zu AuÃŸenecke.",
      "wallHeight": "AuÃŸenwandhÃ¶he vom Fundament bis zur Traufe (ohne Giebeldreieck).",
      "stories": "Anzahl der Vollgeschosse.",
      "gableShape": "Giebelform auswÃ¤hlen, um die GiebelflÃ¤chen hinzuzurechnen.",
      "gableWidth": "Breite an der Giebelbasis.",
      "gableHeight": "Senkrechte HÃ¶he von der Traufe bis zum Dachfirst.",
      "gableCount": "Ein klassisches Satteldach hat 2 Giebel. WalmdÃ¤cher haben 0.",
      "doorCount": "Standard-AuÃŸentÃ¼ren (werden automatisch abgezogen).",
      "windowCount": "Standard-Fenster (werden automatisch abgezogen).",
      "garageDoorCount": "Garagentore (werden automatisch abgezogen).",
      "sidingMaterial": "Fassadenmaterial fÃ¼r Verschnittempfehlung auswÃ¤hlen.",
      "waste": "Empfehlung: 5â€“10% Kunststoff/Metall, 10â€“15% Faserzement, 15â€“20% Holzschindeln.",
      "panelWidthInches": "Optional â€” Deckbreite des Paneels zur SchÃ¤tzung der StÃ¼ckzahl.",
      "pricePerSqFt": "Optional â€” Materialpreis pro mÂ² zur Gesamtkostenermittlung."
    },
    "options": {
      "gableShape": {
        "none": "Keine Giebel / Flach- oder Walmdach",
        "triangle": "Dreiecksgiebel (klassisches Satteldach)",
        "half-circle": "Rundbogengiebel / Halbkreis"
      },
      "sidingMaterial": {
        "vinyl": "Vinyl- / Kunststoff-Siding",
        "fiber-cement": "Faserzement (Hardie Plank)",
        "wood": "Holzfassade (StÃ¼lpschalung / Schindeln)",
        "metal": "Metall- / Stahlpaneele",
        "engineered-wood": "Holzwerkstoff (LP SmartSide)",
        "stucco": "Putz / WDVS",
        "brick-veneer": "Klinker-Verblendmauerwerk"
      }
    },
    "article": "## Fassadenverkleidung richtig berechnen\\n\\nSchritt-fÃ¼r-Schritt-Anleitung zur Ermittlung von WandflÃ¤chen, GiebelflÃ¤chen, Abzug von Fenstern und TÃ¼ren sowie VerschnittzuschlÃ¤gen."
  },
  "pt": {
    "name": "Calculadora de Revestimento de Fachada (Siding)",
    "shortDescription": "Calculadora gratuita de siding e revestimento de parede externa. Calcule Ã¡rea em mÂ²/sq ft, squares, rÃ©guas, perda e custo para vinil, fibrocimento e madeira.",
    "helpTexts": {
      "buildingLength": "Comprimento externo do edifÃ­cio de canto a canto.",
      "buildingWidth": "Largura externa do edifÃ­cio de canto a canto.",
      "wallHeight": "Altura da parede atÃ© o beiral, excluindo o oitÃ£o/empena.",
      "stories": "NÃºmero de pavimentos do imÃ³vel.",
      "gableShape": "Selecione a geometria da empena para telhados com caimento.",
      "gableWidth": "Largura da base da empena.",
      "gableHeight": "Altura vertical do beiral atÃ© a cumeeira.",
      "gableCount": "Telhados de 2 Ã¡guas tÃªm 2 empenas. Telhados 4 Ã¡guas tÃªm 0.",
      "doorCount": "Portas externas padrÃ£o (descontadas automaticamente).",
      "windowCount": "Janelas padrÃ£o (descontadas automaticamente).",
      "garageDoorCount": "PortÃµes de garagem (descontados automaticamente).",
      "sidingMaterial": "Tipo de material de acabamento para calcular a sobra.",
      "waste": "Recomendado: 5â€“10% vinil/metal, 10â€“15% fibrocimento, 15â€“20% madeira.",
      "panelWidthInches": "Opcional â€” largura Ãºtil exposta de cada rÃ©gua.",
      "pricePerSqFt": "Opcional â€” valor por mÂ² para orÃ§amento instantÃ¢neo."
    },
    "options": {
      "gableShape": {
        "none": "Sem empenas / Telhado plano ou 4 Ã¡guas",
        "triangle": "Empenas triangulares (telhado 2 Ã¡guas)",
        "half-circle": "Empenas em arco / semicÃ­rculo"
      },
      "sidingMaterial": {
        "vinyl": "Siding VinÃ­lico (PVC)",
        "fiber-cement": "Siding Fibrocimento",
        "wood": "Madeira Natural (RÃ©guas/Tacas)",
        "metal": "PainÃ©is MetÃ¡licos / AÃ§o",
        "engineered-wood": "Madeira Engenheirada (LP SmartSide)",
        "stucco": "Argamassa / Reboco EIFS",
        "brick-veneer": "Plaquetas CerÃ¢micas"
      }
    },
    "article": "## Como Calcular Revestimento e Siding para Casas\\n\\nGuia passo a passo para mediÃ§Ã£o de fachadas, cÃ¡lculo de empenas triangulares, deduÃ§Ã£o de esquadrias e margem de perda."
  },
  "it": {
    "name": "Calcolatore Rivestimento Facciate (Siding)",
    "shortDescription": "Calcolatore gratuito per rivestimento pareti esterne. Calcola superficie in mÂ², squares, doghe, sfrido e preventivo per PVC, fibrocemento e legno.",
    "helpTexts": {
      "buildingLength": "Lunghezza esterna dell'edificio da spigolo a spigolo.",
      "buildingWidth": "Larghezza esterna dell'edificio da spigolo a spigolo.",
      "wallHeight": "Altezza muro fino alla linea di gronda (senza timpano).",
      "stories": "Numero di piani fuori terra.",
      "gableShape": "Geometria del timpano/frontone per tetti a falde.",
      "gableWidth": "Larghezza alla base del timpano.",
      "gableHeight": "Altezza verticale dalla gronda al colmo.",
      "gableCount": "Un tetto a capanna standard ha 2 timpani.",
      "doorCount": "Porte esterne standard (detratte automaticamente).",
      "windowCount": "Finestre standard (detratte automaticamente).",
      "garageDoorCount": "Portoni garage (detratti automaticamente).",
      "sidingMaterial": "Materiale del rivestimento per stima sfrido.",
      "waste": "Consigliato: 5â€“10% vinile/metallo, 10â€“15% fibrocemento, 15â€“20% legno.",
      "panelWidthInches": "Opzionale â€” larghezza utile esposta della doga.",
      "pricePerSqFt": "Opzionale â€” costo unitario per il calcolo del budget."
    },
    "options": {
      "gableShape": {
        "none": "Senza timpani / Tetto piano",
        "triangle": "Timpani triangolari (tetto a capanna)",
        "half-circle": "Timpani ad arco / semicerchio"
      },
      "sidingMaterial": {
        "vinyl": "Siding in Vinile (PVC)",
        "fiber-cement": "Fibrocemento (tipo Hardie Plank)",
        "wood": "Doghe in Legno Naturale",
        "metal": "Pannelli Metallici / Acciaio",
        "engineered-wood": "Legno composito (LP SmartSide)",
        "stucco": "Intonaco / Cappotto EIFS",
        "brick-veneer": "Mattoni a vista"
      }
    },
    "article": "## Come Calcolare il Rivestimento delle Facciate\\n\\nGuida alla misurazione delle pareti perimetrali, calcolo dei timpani, detrazione di porte e finestre e stima dello sfrido."
  },
  "nl": {
    "name": "Gevelbekleding Calculator",
    "shortDescription": "Gratis calculator voor gevelbekleding (siding/sidings). Bereken oppervlakte in mÂ², benodigde planken/panelen, snijverlies en materiaalkosten.",
    "helpTexts": {
      "buildingLength": "Buitenlengte van het gebouw van buitenhoek tot buitenhoek.",
      "buildingWidth": "Buitenbreedte van het gebouw van buitenhoek tot buitenhoek.",
      "wallHeight": "Wandhoogte van fundering tot dakgoot (zonder geveldriehoek).",
      "stories": "Aantal bovengrondse verdiepingen.",
      "gableShape": "Geometrie van de geveltop bij schuine daken.",
      "gableWidth": "Breedte van de geveldriehoek aan de basis.",
      "gableHeight": "Hoogte van dakgoot tot nok.",
      "gableCount": "Een standaard zadeldak heeft 2 geveltoppen. Schilddak = 0.",
      "doorCount": "Standaard buitendeuren (worden automatisch afgetrokken).",
      "windowCount": "Standaard ramen (worden automatisch afgetrokken).",
      "garageDoorCount": "Garagedeuren (worden automatisch afgetrokken).",
      "sidingMaterial": "Gevelmateriaal voor aanbevolen snijverliesfactor.",
      "waste": "Aanbevolen: 5â€“10% kunststof/metaal, 10â€“15% vezelcement/hout, 15â€“20% leien.",
      "panelWidthInches": "Optioneel â€” werkende breedte per geveldeel.",
      "pricePerSqFt": "Optioneel â€” prijs per mÂ² voor totale kosteninschatting."
    },
    "options": {
      "gableShape": {
        "none": "Geen geveltoppen / Plat dak",
        "triangle": "Driehoekige geveltoppen (zadeldak)",
        "half-circle": "Halfronde / Boogvormige geveltoppen"
      },
      "sidingMaterial": {
        "vinyl": "Kunststof / PVC Gevelbekleding",
        "fiber-cement": "Vezelcement (Hardie Plank)",
        "wood": "Houten Gevelbekleding (Rabathout)",
        "metal": "Metalen / Stalen Panelen",
        "engineered-wood": "Samengesteld hout (LP SmartSide)",
        "stucco": "Stucwerk / Crepi",
        "brick-veneer": "Steenstrips"
      }
    },
    "article": "## Hoeveel Gevelbekleding Heeft U Nodig?\\n\\nStapsgewijze handleiding voor het opmeten van geveloppervlakten, berekenen van geveldriehoeken en het verrekenen van ramen en deuren."
  },
  "pl": {
    "name": "Kalkulator Elewacji i Sidingu",
    "shortDescription": "Darmowy kalkulator elewacji domu i sidingu. Oblicz powierzchniÄ™ Å›cian w mÂ², liczbÄ™ paneli, zapas na docinki (odpady) oraz koszt materiaÅ‚Ã³w.",
    "helpTexts": {
      "buildingLength": "DÅ‚ugoÅ›Ä‡ zewnÄ™trzna budynku od naroÅ¼nika do naroÅ¼nika.",
      "buildingWidth": "SzerokoÅ›Ä‡ zewnÄ™trzna budynku od naroÅ¼nika do naroÅ¼nika.",
      "wallHeight": "WysokoÅ›Ä‡ Å›ciany do okapu (bez szczytÃ³w dachowych).",
      "stories": "Liczba kondygnacji naziemnych.",
      "gableShape": "KsztaÅ‚t szczytu dachowego w celu doliczenia dodatkowej powierzchni.",
      "gableWidth": "SzerokoÅ›Ä‡ podstawy szczytu.",
      "gableHeight": "WysokoÅ›Ä‡ od poziomu okapu do kalenicy.",
      "gableCount": "Dach dwuspadowy posiada 2 Å›ciany szczytowe.",
      "doorCount": "Standardowe drzwi zewnÄ™trzne (odliczane automatycznie).",
      "windowCount": "Standardowe okna (odliczane automatycznie).",
      "garageDoorCount": "Wrota garaÅ¼owe (odliczane automatycznie).",
      "sidingMaterial": "WybÃ³r materiaÅ‚u elewacyjnego do oszacowania naddatku.",
      "waste": "Zalecane: 5â€“10% winyl/blacha, 10â€“15% wÅ‚Ã³knocement/drewno, 15â€“20% gonty.",
      "panelWidthInches": "Opcjonalnie â€” szerokoÅ›Ä‡ krycia panelu w celu policzenia sztuk.",
      "pricePerSqFt": "Opcjonalnie â€” cena materiaÅ‚u za mÂ² do wyceny projektu."
    },
    "options": {
      "gableShape": {
        "none": "Brak szczytÃ³w / Dach pÅ‚aski lub kopertowy",
        "triangle": "Szczyty trÃ³jkÄ…tne (dach dwuspadowy)",
        "half-circle": "Szczyty Å‚ukowe / pÃ³Å‚okrÄ…gÅ‚e"
      },
      "sidingMaterial": {
        "vinyl": "Siding winylowy (PCV)",
        "fiber-cement": "WÅ‚Ã³knocement (typu Hardie)",
        "wood": "Deska elewacyjna drewniana",
        "metal": "Panele elewacyjne stalowe / blacha",
        "engineered-wood": "Drewno kompozytowe (LP SmartSide)",
        "stucco": "Tynk elewacyjny / Ocieplenie",
        "brick-veneer": "PÅ‚ytki klinkierowe"
      }
    },
    "article": "## Jak ObliczyÄ‡ IloÅ›Ä‡ MateriaÅ‚u na ElewacjÄ™ Domu\\n\\nKompletny poradnik pomiaru obwodu Å›cian, pÃ³l trÃ³jkÄ…tÃ³w szczytowych, odliczania otworÃ³w okiennych i naddatkÃ³w na docinki."
  },
  "ru": {
    "name": "ÐšÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€ Ð¡Ð°Ð¹Ð´Ð¸Ð½Ð³Ð° Ð¸ Ð¤Ð°ÑÐ°Ð´Ð°",
    "shortDescription": "Ð‘ÐµÑÐ¿Ð»Ð°Ñ‚Ð½Ñ‹Ð¹ ÐºÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€ ÑÐ°Ð¹Ð´Ð¸Ð½Ð³Ð° Ð´Ð»Ñ Ð´Ð¾Ð¼Ð°. Ð Ð°ÑÑÑ‡Ð¸Ñ‚Ð°Ð¹Ñ‚Ðµ Ð¿Ð»Ð¾Ñ‰Ð°Ð´ÑŒ ÑÑ‚ÐµÐ½ Ð² Ð¼Â², ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ð¿Ð°Ð½ÐµÐ»ÐµÐ¹, Ð·Ð°Ð¿Ð°Ñ Ð½Ð° Ð¾Ð±Ñ€ÐµÐ·ÐºÐ¸ Ð¸ Ð¾Ð±Ñ‰ÑƒÑŽ ÑÐ¼ÐµÑ‚Ñƒ Ð½Ð° Ð¼Ð°Ñ‚ÐµÑ€Ð¸Ð°Ð»Ñ‹.",
    "helpTexts": {
      "buildingLength": "Ð”Ð»Ð¸Ð½Ð° Ð·Ð´Ð°Ð½Ð¸Ñ Ð¿Ð¾ Ð²Ð½ÐµÑˆÐ½Ð¸Ð¼ ÑƒÐ³Ð»Ð°Ð¼.",
      "buildingWidth": "Ð¨Ð¸Ñ€Ð¸Ð½Ð° Ð·Ð´Ð°Ð½Ð¸Ñ Ð¿Ð¾ Ð²Ð½ÐµÑˆÐ½Ð¸Ð¼ ÑƒÐ³Ð»Ð°Ð¼.",
      "wallHeight": "Ð’Ñ‹ÑÐ¾Ñ‚Ð° ÑÑ‚ÐµÐ½Ñ‹ Ð¾Ñ‚ Ñ†Ð¾ÐºÐ¾Ð»Ñ Ð´Ð¾ ÐºÐ°Ñ€Ð½Ð¸Ð·Ð° (Ð±ÐµÐ· Ñ„Ñ€Ð¾Ð½Ñ‚Ð¾Ð½Ð°).",
      "stories": "ÐšÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ð½Ð°Ð´Ð·ÐµÐ¼Ð½Ñ‹Ñ… ÑÑ‚Ð°Ð¶ÐµÐ¹.",
      "gableShape": "Ð¤Ð¾Ñ€Ð¼Ð° Ñ„Ñ€Ð¾Ð½Ñ‚Ð¾Ð½Ð° Ð´Ð»Ñ Ð´Ð¾Ð±Ð°Ð²Ð»ÐµÐ½Ð¸Ñ Ð¿Ð»Ð¾Ñ‰Ð°Ð´Ð¸ Ð¿Ð¾Ð´ ÑÐºÐ°Ñ‚Ð½Ð¾Ð¹ ÐºÑ€Ñ‹ÑˆÐµÐ¹.",
      "gableWidth": "Ð¨Ð¸Ñ€Ð¸Ð½Ð° Ð¾ÑÐ½Ð¾Ð²Ð°Ð½Ð¸Ñ Ñ„Ñ€Ð¾Ð½Ñ‚Ð¾Ð½Ð° (Ð¾Ð±Ñ‹Ñ‡Ð½Ð¾ Ñ€Ð°Ð²Ð½Ð° ÑˆÐ¸Ñ€Ð¸Ð½Ðµ Ð·Ð´Ð°Ð½Ð¸Ñ).",
      "gableHeight": "Ð’Ñ‹ÑÐ¾Ñ‚Ð° Ð¾Ñ‚ Ð»Ð¸Ð½Ð¸Ð¸ ÐºÐ°Ñ€Ð½Ð¸Ð·Ð° Ð´Ð¾ ÐºÐ¾Ð½ÑŒÐºÐ°.",
      "gableCount": "Ð”Ð²ÑƒÑÐºÐ°Ñ‚Ð½Ð°Ñ ÐºÑ€Ñ‹ÑˆÐ° Ð¸Ð¼ÐµÐµÑ‚ 2 Ñ„Ñ€Ð¾Ð½Ñ‚Ð¾Ð½Ð°. Ð’Ð°Ð»ÑŒÐ¼Ð¾Ð²Ð°Ñ = 0.",
      "doorCount": "Ð¡Ñ‚Ð°Ð½Ð´Ð°Ñ€Ñ‚Ð½Ñ‹Ðµ Ð²Ñ…Ð¾Ð´Ð½Ñ‹Ðµ Ð´Ð²ÐµÑ€Ð¸ (Ð²Ñ‹Ñ‡Ð¸Ñ‚Ð°ÑŽÑ‚ÑÑ Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¸).",
      "windowCount": "Ð¡Ñ‚Ð°Ð½Ð´Ð°Ñ€Ñ‚Ð½Ñ‹Ðµ Ð¾ÐºÐ½Ð° (Ð²Ñ‹Ñ‡Ð¸Ñ‚Ð°ÑŽÑ‚ÑÑ Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¸).",
      "garageDoorCount": "Ð“Ð°Ñ€Ð°Ð¶Ð½Ñ‹Ðµ Ð²Ð¾Ñ€Ð¾Ñ‚Ð° (Ð²Ñ‹Ñ‡Ð¸Ñ‚Ð°ÑŽÑ‚ÑÑ Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¸).",
      "sidingMaterial": "Ð¢Ð¸Ð¿ ÑÐ°Ð¹Ð´Ð¸Ð½Ð³Ð° Ð´Ð»Ñ Ð¿Ð¾Ð´Ð±Ð¾Ñ€Ð° Ð¿Ñ€Ð¾Ñ†ÐµÐ½Ñ‚Ð° Ð½Ð° Ð¾Ð±Ñ€ÐµÐ·ÐºÑƒ.",
      "waste": "Ð ÐµÐºÐ¾Ð¼ÐµÐ½Ð´ÑƒÐµÑ‚ÑÑ: 5â€“10% Ð²Ð¸Ð½Ð¸Ð»/Ð¼ÐµÑ‚Ð°Ð»Ð», 10â€“15% Ñ„Ð¸Ð±Ñ€Ð¾Ñ†ÐµÐ¼ÐµÐ½Ñ‚, 15â€“20% Ð´Ñ€Ð°Ð½ÐºÐ°.",
      "panelWidthInches": "ÐžÐ¿Ñ†Ð¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ð¾ â€” Ñ€Ð°Ð±Ð¾Ñ‡Ð°Ñ Ð¿Ð¾Ð»ÐµÐ·Ð½Ð°Ñ ÑˆÐ¸Ñ€Ð¸Ð½Ð° Ð¿Ð°Ð½ÐµÐ»Ð¸ ÑÐ°Ð¹Ð´Ð¸Ð½Ð³Ð°.",
      "pricePerSqFt": "ÐžÐ¿Ñ†Ð¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ð¾ â€” Ñ†ÐµÐ½Ð° Ð¼Ð°Ñ‚ÐµÑ€Ð¸Ð°Ð»Ð° Ð·Ð° Ð¼Â² Ð´Ð»Ñ Ñ€Ð°ÑÑ‡ÐµÑ‚Ð° Ð±ÑŽÐ´Ð¶ÐµÑ‚Ð°."
    },
    "options": {
      "gableShape": {
        "none": "Ð‘ÐµÐ· Ñ„Ñ€Ð¾Ð½Ñ‚Ð¾Ð½Ð¾Ð² / ÐŸÐ»Ð¾ÑÐºÐ°Ñ Ð¸Ð»Ð¸ Ð²Ð°Ð»ÑŒÐ¼Ð¾Ð²Ð°Ñ ÐºÑ€Ñ‹ÑˆÐ°",
        "triangle": "Ð¢Ñ€ÐµÑƒÐ³Ð¾Ð»ÑŒÐ½Ñ‹Ðµ Ñ„Ñ€Ð¾Ð½Ñ‚Ð¾Ð½Ñ‹ (Ð´Ð²ÑƒÑÐºÐ°Ñ‚Ð½Ð°Ñ ÐºÑ€Ñ‹ÑˆÐ°)",
        "half-circle": "ÐÑ€Ð¾Ñ‡Ð½Ñ‹Ðµ / Ð¿Ð¾Ð»ÑƒÐºÑ€ÑƒÐ³Ð»Ñ‹Ðµ Ñ„Ñ€Ð¾Ð½Ñ‚Ð¾Ð½Ñ‹"
      },
      "sidingMaterial": {
        "vinyl": "Ð’Ð¸Ð½Ð¸Ð»Ð¾Ð²Ñ‹Ð¹ ÑÐ°Ð¹Ð´Ð¸Ð½Ð³",
        "fiber-cement": "Ð¤Ð¸Ð±Ñ€Ð¾Ñ†ÐµÐ¼ÐµÐ½Ñ‚Ð½Ñ‹Ð¹ ÑÐ°Ð¹Ð´Ð¸Ð½Ð³",
        "wood": "Ð”ÐµÑ€ÐµÐ²ÑÐ½Ð½Ñ‹Ð¹ Ð±Ð»Ð¾Ðº-Ñ…Ð°ÑƒÑ / Ð¿Ð»Ð°Ð½ÐºÐµÐ½",
        "metal": "ÐœÐµÑ‚Ð°Ð»Ð»Ð¾ÑÐ°Ð¹Ð´Ð¸Ð½Ð³ / Ð¿Ñ€Ð¾Ñ„Ð½Ð°ÑÑ‚Ð¸Ð»",
        "engineered-wood": "Ð”Ñ€ÐµÐ²ÐµÑÐ½Ñ‹Ð¹ ÐºÐ¾Ð¼Ð¿Ð¾Ð·Ð¸Ñ‚ (LP SmartSide)",
        "stucco": "Ð¤Ð°ÑÐ°Ð´Ð½Ð°Ñ ÑˆÑ‚ÑƒÐºÐ°Ñ‚ÑƒÑ€ÐºÐ° / Ð¼Ð¾ÐºÑ€Ñ‹Ð¹ Ñ„Ð°ÑÐ°Ð´",
        "brick-veneer": "Ð¤Ð°ÑÐ°Ð´Ð½Ð°Ñ Ð¿Ð»Ð¸Ñ‚ÐºÐ° Ð¿Ð¾Ð´ ÐºÐ¸Ñ€Ð¿Ð¸Ñ‡"
      }
    },
    "article": "## ÐšÐ°Ðº Ð Ð°ÑÑÑ‡Ð¸Ñ‚Ð°Ñ‚ÑŒ Ð¡Ð°Ð¹Ð´Ð¸Ð½Ð³ Ð´Ð»Ñ ÐžÐ±ÑˆÐ¸Ð²ÐºÐ¸ Ð”Ð¾Ð¼Ð°\\n\\nÐŸÐ¾ÑˆÐ°Ð³Ð¾Ð²Ð¾Ðµ Ñ€ÑƒÐºÐ¾Ð²Ð¾Ð´ÑÑ‚Ð²Ð¾ Ð¿Ð¾ Ð·Ð°Ð¼ÐµÑ€Ñƒ Ð¿ÐµÑ€Ð¸Ð¼ÐµÑ‚Ñ€Ð°, Ð²Ñ‹Ñ‡Ð¸ÑÐ»ÐµÐ½Ð¸ÑŽ Ð¿Ð»Ð¾Ñ‰Ð°Ð´Ð¸ Ñ„Ñ€Ð¾Ð½Ñ‚Ð¾Ð½Ð¾Ð², Ð²Ñ‹Ñ‡ÐµÑ‚Ñƒ Ð¾ÐºÐ¾Ð½Ð½Ñ‹Ñ… Ð¿Ñ€Ð¾ÐµÐ¼Ð¾Ð² Ð¸ Ñ€Ð°ÑÑ‡ÐµÑ‚Ñƒ Ð´Ð¾Ð±Ð¾Ñ€Ð½Ñ‹Ñ… ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¾Ð²."
  },
  "tr": {
    "name": "DÄ±ÅŸ Cephe Kaplama (Siding) HesaplayÄ±cÄ±",
    "shortDescription": "Ev ve binalar iÃ§in Ã¼cretsiz siding hesaplayÄ±cÄ±. Duvar alanÄ±nÄ± mÂ² cinsinden, panel adetlerini, fire payÄ±nÄ± ve malzeme maliyetini hesaplayÄ±n.",
    "helpTexts": {
      "buildingLength": "BinanÄ±n dÄ±ÅŸtan dÄ±ÅŸa kÃ¶ÅŸe uzunluÄŸu.",
      "buildingWidth": "BinanÄ±n dÄ±ÅŸtan dÄ±ÅŸa kÃ¶ÅŸe geniÅŸliÄŸi.",
      "wallHeight": "Zeminden saÃ§ak altÄ±na kadar olan duvar yÃ¼ksekliÄŸi (kalkan hariÃ§).",
      "stories": "Kat sayÄ±sÄ±.",
      "gableShape": "KÄ±rma veya beÅŸik Ã§atÄ±larda kalkan duvar geometrisi.",
      "gableWidth": "Kalkan duvarÄ±n taban geniÅŸliÄŸi.",
      "gableHeight": "SaÃ§aktan mahyaya olan dikey yÃ¼kseklik.",
      "gableCount": "Standart beÅŸik Ã§atÄ±larda 2 adet kalkan bulunur.",
      "doorCount": "Standart dÄ±ÅŸ kapÄ±lar (otomatik olarak dÃ¼ÅŸÃ¼lÃ¼r).",
      "windowCount": "Standart pencereler (otomatik olarak dÃ¼ÅŸÃ¼lÃ¼r).",
      "garageDoorCount": "Garaj kapÄ±larÄ± (otomatik olarak dÃ¼ÅŸÃ¼lÃ¼r).",
      "sidingMaterial": "Malzeme tÃ¼rÃ¼ (Ã¶nerilen fire payÄ± iÃ§in).",
      "waste": "Ã–nerilen: %5â€“10 vinil/metal, %10â€“15 fibrocement, %15â€“20 ahÅŸap kaplama.",
      "panelWidthInches": "Ä°steÄŸe baÄŸlÄ± â€” panelin net gÃ¶rÃ¼nÃ¼r yÃ¼zey geniÅŸliÄŸi.",
      "pricePerSqFt": "Ä°steÄŸe baÄŸlÄ± â€” mÂ² baÅŸÄ±na malzeme fiyatÄ±."
    },
    "options": {
      "gableShape": {
        "none": "KalkansÄ±z / DÃ¼z veya kÄ±rma Ã§atÄ±",
        "triangle": "ÃœÃ§gen kalkan duvar (beÅŸik Ã§atÄ±)",
        "half-circle": "Kemerli / yarÄ±m daire kalkan duvar"
      },
      "sidingMaterial": {
        "vinyl": "Vinil (PVC) Siding",
        "fiber-cement": "Fibrobeton / Ã‡imentolu Levha",
        "wood": "DoÄŸal AhÅŸap Kaplama (YalÄ±baskÄ±)",
        "metal": "Metal / Ã‡elik Cephe Paneli",
        "engineered-wood": "AhÅŸap Kompozit (LP SmartSide)",
        "stucco": "DÄ±ÅŸ Cephe SÄ±va / Mantolama",
        "brick-veneer": "TuÄŸla Kaplama"
      }
    },
    "article": "## Ev Ä°Ã§in DÄ±ÅŸ Cephe Kaplama MiktarÄ± NasÄ±l HesaplanÄ±r?\\n\\nBina dÄ±ÅŸ duvar Ã§evresini Ã¶lÃ§me, kalkan duvar alanlarÄ±nÄ± ekleme, kapÄ± ve pencere boÅŸluklarÄ±nÄ± dÃ¼ÅŸme rehberi."
  },
  "ar": {
    "name": "Ø­Ø§Ø³Ø¨Ø© ÙƒØ³ÙˆØ© ÙˆØªØ¬Ù„ÙŠØ¯ ÙˆØ§Ø¬Ù‡Ø§Øª Ø§Ù„Ù…Ù†Ø§Ø²Ù„ (Siding)",
    "shortDescription": "Ø­Ø§Ø³Ø¨Ø© Ù…Ø¬Ø§Ù†ÙŠØ© Ù„ØªÙ‚Ø¯ÙŠØ± ÙƒÙ…ÙŠØ§Øª Ø§Ù„ÙƒØ³ÙˆØ© Ø§Ù„Ø®Ø§Ø±Ø¬ÙŠØ© ÙˆØªØ¬Ù„ÙŠØ¯ Ø§Ù„Ø¬Ø¯Ø±Ø§Ù†. Ø§Ø­Ø³Ø¨ Ø§Ù„Ù…Ø³Ø§Ø­Ø© Ø¨Ø§Ù„Ù…ØªØ±/Ø§Ù„Ù‚Ø¯Ù… Ø§Ù„Ù…Ø±Ø¨Ø¹ØŒ Ø¹Ø¯Ø¯ Ø§Ù„Ø£Ù„ÙˆØ§Ø­ØŒ Ù†Ø³Ø¨Ø© Ø§Ù„Ù‡Ø§Ù„Ùƒ ÙˆØ§Ù„ØªÙƒÙ„ÙØ© Ø§Ù„ØªÙ‚Ø¯ÙŠØ±ÙŠØ©.",
    "helpTexts": {
      "buildingLength": "Ø§Ù„Ø·ÙˆÙ„ Ø§Ù„Ø®Ø§Ø±Ø¬ÙŠ Ù„Ù„Ù…Ø¨Ù†Ù‰ Ù…Ù† Ø§Ù„Ø²Ø§ÙˆÙŠØ© Ø¥Ù„Ù‰ Ø§Ù„Ø²Ø§ÙˆÙŠØ©.",
      "buildingWidth": "Ø§Ù„Ø¹Ø±Ø¶ Ø§Ù„Ø®Ø§Ø±Ø¬ÙŠ Ù„Ù„Ù…Ø¨Ù†Ù‰ Ù…Ù† Ø§Ù„Ø²Ø§ÙˆÙŠØ© Ø¥Ù„Ù‰ Ø§Ù„Ø²Ø§ÙˆÙŠØ©.",
      "wallHeight": "Ø§Ø±ØªÙØ§Ø¹ Ø§Ù„Ø¬Ø¯Ø§Ø± Ø§Ù„Ø®Ø§Ø±Ø¬ÙŠ Ù…Ù† Ø§Ù„Ø£Ø±Ø¶ Ø¥Ù„Ù‰ Ø­Ø§ÙØ© Ø§Ù„Ø³Ù‚Ù.",
      "stories": "Ø¹Ø¯Ø¯ Ø·ÙˆØ§Ø¨Ù‚ Ø§Ù„Ù…Ø¨Ù†Ù‰.",
      "gableShape": "Ø´ÙƒÙ„ ÙˆØ§Ø¬Ù‡Ø© Ø§Ù„Ø¬Ù…Ù„ÙˆÙ† ÙÙŠ Ø§Ù„Ø£Ø³Ù‚Ù Ø§Ù„Ù…Ø§Ø¦Ù„Ø©.",
      "gableWidth": "Ø¹Ø±Ø¶ Ù‚Ø§Ø¹Ø¯Ø© Ø§Ù„Ø¬Ù…Ù„ÙˆÙ†.",
      "gableHeight": "Ø§Ù„Ø§Ø±ØªÙØ§Ø¹ Ø§Ù„Ø±Ø£Ø³ÙŠ Ù…Ù† Ø§Ù„Ø­Ø§ÙØ© Ø¥Ù„Ù‰ Ù‚Ù…Ø© Ø§Ù„Ø³Ù‚Ù.",
      "gableCount": "Ø§Ù„Ø£Ø³Ù‚Ù Ø§Ù„Ù…Ø§Ø¦Ù„Ø© Ø§Ù„Ù…Ø²Ø¯ÙˆØ¬Ø© ØªØ­ØªÙˆÙŠ Ø¹Ù„Ù‰ ÙˆØ§Ø¬Ù‡ØªÙŠ Ø¬Ù…Ù„ÙˆÙ†.",
      "doorCount": "Ø§Ù„Ø£Ø¨ÙˆØ§Ø¨ Ø§Ù„Ø®Ø§Ø±Ø¬ÙŠØ© Ø§Ù„Ù‚ÙŠØ§Ø³ÙŠØ© (ÙŠØªÙ… Ø®ØµÙ…Ù‡Ø§ ØªÙ„Ù‚Ø§Ø¦ÙŠØ§Ù‹).",
      "windowCount": "Ø§Ù„Ù†ÙˆØ§ÙØ° Ø§Ù„Ù‚ÙŠØ§Ø³ÙŠØ© (ÙŠØªÙ… Ø®ØµÙ…Ù‡Ø§ ØªÙ„Ù‚Ø§Ø¦ÙŠØ§Ù‹).",
      "garageDoorCount": "Ø£Ø¨ÙˆØ§Ø¨ Ø§Ù„Ù…Ø±Ø¢Ø¨ (ÙŠØªÙ… Ø®ØµÙ…Ù‡Ø§ ØªÙ„Ù‚Ø§Ø¦ÙŠØ§Ù‹).",
      "sidingMaterial": "Ù†ÙˆØ¹ Ù…Ø§Ø¯Ø© Ø§Ù„ÙƒØ³ÙˆØ© Ù„Ø­Ø³Ø§Ø¨ Ù†Ø³Ø¨Ø© Ø§Ù„Ù‡Ø§Ù„Ùƒ Ø§Ù„Ù…Ù‚ØªØ±Ø­Ø©.",
      "waste": "Ø§Ù„Ù…ÙˆØµÙ‰ Ø¨Ù‡: 5â€“10% Ù„Ù„ÙÙŠÙ†ÙŠÙ„/Ø§Ù„Ù…Ø¹Ø§Ø¯Ù†ØŒ 10â€“15% Ù„Ù„Ø¥Ø³Ù…Ù†Øª Ø§Ù„Ù„ÙŠÙÙŠØŒ 15â€“20% Ù„Ù„Ø®Ø´Ø¨.",
      "panelWidthInches": "Ø§Ø®ØªÙŠØ§Ø±ÙŠ â€” Ø¹Ø±Ø¶ Ø§Ù„Ù„ÙˆØ­ Ø§Ù„Ø®Ø§Ø±Ø¬ÙŠ Ù„ØªÙ‚Ø¯ÙŠØ± Ø¹Ø¯Ø¯ Ø§Ù„Ø£Ù„ÙˆØ§Ø­.",
      "pricePerSqFt": "Ø§Ø®ØªÙŠØ§Ø±ÙŠ â€” Ø³Ø¹Ø± Ø§Ù„Ù…ØªØ± Ø£Ùˆ Ø§Ù„Ù‚Ø¯Ù… Ø§Ù„Ù…Ø±Ø¨Ø¹ Ù„ØªÙ‚Ø¯ÙŠØ± Ø§Ù„Ù…ÙŠØ²Ø§Ù†ÙŠØ©."
    },
    "options": {
      "gableShape": {
        "none": "Ø¨Ø¯ÙˆÙ† Ø¬Ù…Ù„ÙˆÙ† / Ø³Ù‚Ù Ù…Ø³ØªÙˆÙ",
        "triangle": "Ø¬Ù…Ù„ÙˆÙ† Ù…Ø«Ù„Ø« (Ø³Ù‚Ù Ù…Ø§Ø¦Ù„ ØªÙ‚Ù„ÙŠØ¯ÙŠ)",
        "half-circle": "Ø¬Ù…Ù„ÙˆÙ† Ù…Ù‚ÙˆØ³ / Ù†ØµÙ Ø¯Ø§Ø¦Ø±ÙŠ"
      },
      "sidingMaterial": {
        "vinyl": "ÙƒØ³ÙˆØ© Ø§Ù„ÙÙŠÙ†ÙŠÙ„ (PVC)",
        "fiber-cement": "Ø¥Ø³Ù…Ù†Øª Ø£Ù„ÙŠØ§ÙÙŠ (ÙØ§ÙŠØ¨Ø± Ø³ÙŠÙ…Ù†Øª)",
        "wood": "ÙƒØ³ÙˆØ© Ø®Ø´Ø¨ Ø·Ø¨ÙŠØ¹ÙŠ",
        "metal": "Ø£Ù„ÙˆØ§Ø­ Ù…Ø¹Ø¯Ù†ÙŠØ© / ØµÙ„Ø¨",
        "engineered-wood": "Ø®Ø´Ø¨ Ù…Ø¹Ø§Ù„Ø¬ (LP SmartSide)",
        "stucco": "Ù„ÙŠØ§Ø³Ø© / Ù‚ØµØ§Ø±Ø© Ø®Ø§Ø±Ø¬ÙŠØ© (Ø³ØªÙˆÙƒÙˆ)",
        "brick-veneer": "Ù‚Ø±Ù…ÙŠØ¯ / Ø·ÙˆØ¨ ÙˆØ§Ø¬Ù‡Ø§Øª"
      }
    },
    "article": "## ÙƒÙŠÙÙŠØ© Ø­Ø³Ø§Ø¨ ÙƒÙ…ÙŠØ§Øª ÙƒØ³ÙˆØ© ÙˆØ§Ø¬Ù‡Ø§Øª Ø§Ù„Ù…Ù†Ø§Ø²Ù„\\n\\nØ¯Ù„ÙŠÙ„ Ù…ØªÙƒØ§Ù…Ù„ Ù„Ù‚ÙŠØ§Ø³ Ù…Ø­ÙŠØ· Ø§Ù„Ø¬Ø¯Ø±Ø§Ù† Ø§Ù„Ø®Ø§Ø±Ø¬ÙŠØ©ØŒ Ø¥Ø¶Ø§ÙØ© Ù…Ø³Ø§Ø­Ø§Øª Ø§Ù„Ø¬Ù…Ù„ÙˆÙ† Ø§Ù„Ù…Ø«Ù„Ø«Ø©ØŒ ÙˆØ®ØµÙ… Ù…Ø³Ø§Ø­Ø§Øª Ø§Ù„Ù†ÙˆØ§ÙØ° ÙˆØ§Ù„Ø£Ø¨ÙˆØ§Ø¨ Ø¨Ø¯Ù‚Ø©."
  },
  "hi": {
    "name": "à¤¸à¤¾à¤‡à¤¡à¤¿à¤‚à¤— à¤à¤µà¤‚ à¤¬à¤¾à¤¹à¤°à¥€ à¤¦à¥€à¤µà¤¾à¤° à¤¸à¤¾à¤®à¤—à¥à¤°à¥€ à¤•à¥ˆà¤²à¤•à¥à¤²à¥‡à¤Ÿà¤°",
    "shortDescription": "à¤®à¤•à¤¾à¤¨à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤ à¤®à¥à¤«à¥à¤¤ à¤¸à¤¾à¤‡à¤¡à¤¿à¤‚à¤— à¤•à¥ˆà¤²à¤•à¥à¤²à¥‡à¤Ÿà¤°à¥¤ à¤¦à¥€à¤µà¤¾à¤° à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¤«à¤² (à¤µà¤°à¥à¤— à¤«à¥à¤Ÿ/à¤®à¥€à¤Ÿà¤°), à¤ªà¥ˆà¤¨à¤² à¤¸à¤‚à¤–à¥à¤¯à¤¾, à¤…à¤ªà¤¶à¤¿à¤·à¥à¤Ÿ à¤”à¤° à¤¸à¤¾à¤®à¤—à¥à¤°à¥€ à¤²à¤¾à¤—à¤¤ à¤•à¤¾ à¤¸à¤Ÿà¥€à¤• à¤…à¤¨à¥à¤®à¤¾à¤¨ à¤²à¤—à¤¾à¤à¤‚à¥¤",
    "helpTexts": {
      "buildingLength": "à¤‡à¤®à¤¾à¤°à¤¤ à¤•à¥€ à¤¬à¤¾à¤¹à¤°à¥€ à¤²à¤‚à¤¬à¤¾à¤ˆ à¤à¤• à¤•à¥‹à¤¨à¥‡ à¤¸à¥‡ à¤¦à¥‚à¤¸à¤°à¥‡ à¤•à¥‹à¤¨à¥‡ à¤¤à¤•à¥¤",
      "buildingWidth": "à¤‡à¤®à¤¾à¤°à¤¤ à¤•à¥€ à¤¬à¤¾à¤¹à¤°à¥€ à¤šà¥Œà¤¡à¤¼à¤¾à¤ˆ à¤à¤• à¤•à¥‹à¤¨à¥‡ à¤¸à¥‡ à¤¦à¥‚à¤¸à¤°à¥‡ à¤•à¥‹à¤¨à¥‡ à¤¤à¤•à¥¤",
      "wallHeight": "à¤œà¤®à¥€à¤¨ à¤¸à¥‡ à¤ˆà¤µ (à¤›à¤œà¥à¤œà¥‡) à¤¤à¤• à¤•à¥€ à¤¦à¥€à¤µà¤¾à¤° à¤•à¥€ à¤Šà¤‚à¤šà¤¾à¤ˆà¥¤",
      "stories": "à¤‡à¤®à¤¾à¤°à¤¤ à¤•à¥€ à¤®à¤‚à¤œà¤¿à¤²à¥‹à¤‚ à¤•à¥€ à¤¸à¤‚à¤–à¥à¤¯à¤¾à¥¤",
      "gableShape": "à¤¢à¤²à¤¾à¤¨ à¤µà¤¾à¤²à¥€ à¤›à¤¤à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤ à¤—à¥‡à¤¬à¤² à¤¸à¤¿à¤°à¥‡ à¤•à¥€ à¤œà¥à¤¯à¤¾à¤®à¤¿à¤¤à¤¿ à¤šà¥à¤¨à¥‡à¤‚à¥¤",
      "gableWidth": "à¤—à¥‡à¤¬à¤² à¤†à¤§à¤¾à¤° à¤•à¥€ à¤šà¥Œà¤¡à¤¼à¤¾à¤ˆà¥¤",
      "gableHeight": "à¤ˆà¤µ à¤¸à¥‡ à¤›à¤¤ à¤•à¥‡ à¤¶à¥€à¤°à¥à¤· à¤¬à¤¿à¤‚à¤¦à¥ à¤¤à¤• à¤•à¥€ à¤Šà¤‚à¤šà¤¾à¤ˆà¥¤",
      "gableCount": "à¤¸à¤¾à¤§à¤¾à¤°à¤£ à¤—à¥‡à¤¬à¤² à¤›à¤¤ à¤®à¥‡à¤‚ 2 à¤—à¥‡à¤¬à¤² à¤¸à¤¿à¤°à¥‡ à¤¹à¥‹à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤",
      "doorCount": "à¤®à¤¾à¤¨à¤• à¤¦à¤°à¤µà¤¾à¤œà¥‡ (à¤¸à¥à¤µà¤¤à¤ƒ à¤˜à¤Ÿà¤¾à¤ à¤œà¤¾à¤¤à¥‡ à¤¹à¥ˆà¤‚)à¥¤",
      "windowCount": "à¤®à¤¾à¤¨à¤• à¤–à¤¿à¤¡à¤¼à¤•à¤¿à¤¯à¤¾à¤‚ (à¤¸à¥à¤µà¤¤à¤ƒ à¤˜à¤Ÿà¤¾à¤ˆ à¤œà¤¾à¤¤à¥€ à¤¹à¥ˆà¤‚)à¥¤",
      "garageDoorCount": "à¤—à¥ˆà¤°à¤¾à¤œ à¤¦à¤°à¤µà¤¾à¤œà¥‡ (à¤¸à¥à¤µà¤¤à¤ƒ à¤˜à¤Ÿà¤¾à¤ à¤œà¤¾à¤¤à¥‡ à¤¹à¥ˆà¤‚)à¥¤",
      "sidingMaterial": "à¤…à¤ªà¤¶à¤¿à¤·à¥à¤Ÿ à¤…à¤¨à¥à¤®à¤¾à¤¨ à¤•à¥‡ à¤²à¤¿à¤ à¤¸à¤¾à¤®à¤—à¥à¤°à¥€ à¤•à¤¾ à¤šà¤¯à¤¨ à¤•à¤°à¥‡à¤‚à¥¤",
      "waste": "à¤…à¤¨à¥à¤¶à¤‚à¤¸à¤¿à¤¤: 5â€“10% à¤µà¤¿à¤¨à¤¾à¤‡à¤²/à¤§à¤¾à¤¤à¥, 10â€“15% à¤«à¤¾à¤‡à¤¬à¤° à¤¸à¥€à¤®à¥‡à¤‚à¤Ÿ, 15â€“20% à¤²à¤•à¤¡à¤¼à¥€à¥¤",
      "panelWidthInches": "à¤µà¥ˆà¤•à¤²à¥à¤ªà¤¿à¤• â€” à¤ªà¥ˆà¤¨à¤² à¤¸à¤‚à¤–à¥à¤¯à¤¾ à¤œà¤¾à¤¨à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤ªà¥ˆà¤¨à¤² à¤•à¥€ à¤šà¥Œà¤¡à¤¼à¤¾à¤ˆà¥¤",
      "pricePerSqFt": "à¤µà¥ˆà¤•à¤²à¥à¤ªà¤¿à¤• â€” à¤¬à¤œà¤Ÿ à¤…à¤¨à¥à¤®à¤¾à¤¨ à¤•à¥‡ à¤²à¤¿à¤ à¤ªà¥à¤°à¤¤à¤¿ à¤µà¤°à¥à¤— à¤«à¥à¤Ÿ à¤¦à¤°à¥¤"
    },
    "options": {
      "gableShape": {
        "none": "à¤•à¥‹à¤ˆ à¤—à¥‡à¤¬à¤² à¤¨à¤¹à¥€à¤‚ / à¤¸à¤ªà¤¾à¤Ÿ à¤›à¤¤",
        "triangle": "à¤¤à¥à¤°à¤¿à¤•à¥‹à¤£à¥€à¤¯ à¤—à¥‡à¤¬à¤² (à¤®à¤¾à¤¨à¤• à¤¢à¤²à¤¾à¤¨ à¤›à¤¤)",
        "half-circle": "à¤…à¤°à¥à¤§à¤µà¥ƒà¤¤à¥à¤¤à¤¾à¤•à¤¾à¤° / à¤®à¥‡à¤¹à¤°à¤¾à¤¬à¤¦à¤¾à¤° à¤—à¥‡à¤¬à¤²"
      },
      "sidingMaterial": {
        "vinyl": "à¤µà¤¿à¤¨à¤¾à¤‡à¤² à¤¸à¤¾à¤‡à¤¡à¤¿à¤‚à¤—",
        "fiber-cement": "à¤«à¤¾à¤‡à¤¬à¤° à¤¸à¥€à¤®à¥‡à¤‚à¤Ÿ à¤¬à¥‹à¤°à¥à¤¡",
        "wood": "à¤ªà¥à¤°à¤¾à¤•à¥ƒà¤¤à¤¿à¤• à¤²à¤•à¤¡à¤¼à¥€ à¤¸à¤¾à¤‡à¤¡à¤¿à¤‚à¤—",
        "metal": "à¤§à¤¾à¤¤à¥ / à¤¸à¥à¤Ÿà¥€à¤² à¤¸à¤¾à¤‡à¤¡à¤¿à¤‚à¤—",
        "engineered-wood": "à¤‡à¤‚à¤œà¥€à¤¨à¤¿à¤¯à¤° à¤²à¤•à¤¡à¤¼à¥€ (LP SmartSide)",
        "stucco": "à¤¸à¥à¤Ÿà¥à¤•à¥‹ à¤ªà¥à¤²à¤¾à¤¸à¥à¤Ÿà¤°",
        "brick-veneer": "à¤ˆà¤‚à¤Ÿ à¤µà¤¿à¤¨à¤¿à¤¯à¤°"
      }
    },
    "article": "## à¤®à¤•à¤¾à¤¨ à¤•à¥‡ à¤²à¤¿à¤ à¤¸à¤¾à¤‡à¤¡à¤¿à¤‚à¤— à¤•à¥€ à¤—à¤£à¤¨à¤¾ à¤•à¥ˆà¤¸à¥‡ à¤•à¤°à¥‡à¤‚\\n\\nà¤¦à¥€à¤µà¤¾à¤°à¥‹à¤‚ à¤•à¥€ à¤ªà¤°à¤¿à¤§à¤¿ à¤®à¤¾à¤ªà¤¨à¥‡, à¤—à¥‡à¤¬à¤² à¤¤à¥à¤°à¤¿à¤•à¥‹à¤£ à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¤«à¤² à¤œà¥‹à¤¡à¤¼à¤¨à¥‡, à¤”à¤° à¤¦à¤°à¤µà¤¾à¤œà¥‡-à¤–à¤¿à¤¡à¤¼à¤•à¤¿à¤¯à¥‹à¤‚ à¤•à¥€ à¤•à¤Ÿà¥Œà¤¤à¥€ à¤•à¤°à¤¨à¥‡ à¤•à¤¾ à¤¸à¤‚à¤ªà¥‚à¤°à¥à¤£ à¤µà¤¿à¤µà¤°à¤£à¥¤"
  },
  "zh": {
    "name": "æˆ¿å±‹å¤–å¢™æŒ‚æ¿é¢ç§¯è®¡ç®—å™¨ (Siding)",
    "shortDescription": "å…è´¹æˆ¿å±‹å¤–å¢™æŒ‚æ¿ä¸ŽæŠ¤å¢™æ¿è®¡ç®—å™¨ã€‚å¿«é€Ÿè®¡ç®—å¤–å¢™å‡€é¢ç§¯ã€æ‰€éœ€Squaresæ–¹æ•°ã€æ¿ææ•°é‡ã€æŸè€—çŽ‡åŠææ–™é¢„ç®—ã€‚",
    "helpTexts": {
      "buildingLength": "å»ºç­‘å¤–å¢™æ€»é•¿åº¦ï¼ˆå¤–è§’åˆ°å¤–è§’æµ‹é‡ï¼‰ã€‚",
      "buildingWidth": "å»ºç­‘å¤–å¢™æ€»å®½åº¦ï¼ˆå¤–è§’åˆ°å¤–è§’æµ‹é‡ï¼‰ã€‚",
      "wallHeight": "ä»Žåœ°é¢è‡³å±‹æªå£çš„å¤–å¢™é«˜åº¦ï¼ˆä¸å«äººå­—å±±å¢™ï¼‰ã€‚",
      "stories": "åœ°ä¸Šå»ºç­‘å±‚æ•°ã€‚",
      "gableShape": "æ–œå±‹é¡¶äººå­—å±±å¢™å‡ ä½•å½¢çŠ¶é€‰æ‹©ã€‚",
      "gableWidth": "å±±å¢™åº•éƒ¨å®½åº¦ï¼ˆé€šå¸¸ç­‰äºŽå»ºç­‘å®½åº¦ï¼‰ã€‚",
      "gableHeight": "ä»Žå±‹æªåˆ°å±‹è„Šé¡¶ç‚¹çš„åž‚ç›´é«˜åº¦ã€‚",
      "gableCount": "æ ‡å‡†åŒå¡å±‹é¡¶æœ‰2ä¸ªå±±å¢™é¢ã€‚å››å¡å±‹é¡¶ä¸º0ã€‚",
      "doorCount": "æ ‡å‡†å…¥æˆ·é—¨ï¼ˆç³»ç»Ÿè‡ªåŠ¨æ‰£é™¤é—¨æ´žé¢ç§¯ï¼‰ã€‚",
      "windowCount": "æ ‡å‡†çª—æˆ·ï¼ˆç³»ç»Ÿè‡ªåŠ¨æ‰£é™¤çª—æ´žé¢ç§¯ï¼‰ã€‚",
      "garageDoorCount": "å•è½¦ä½è½¦åº“é—¨ï¼ˆç³»ç»Ÿè‡ªåŠ¨æ‰£é™¤æ´žå£é¢ç§¯ï¼‰ã€‚",
      "sidingMaterial": "é€‰æ‹©æŒ‚æ¿ææ–™ä»¥ç¡®å®šæŽ¨èæŸè€—çŽ‡ã€‚",
      "waste": "æŽ¨èæŸè€—çŽ‡ï¼šPVC/é‡‘å±ž 5â€“10%ï¼Œçº¤ç»´æ°´æ³¥ 10â€“15%ï¼Œå®žæœ¨æŒ‚æ¿ 15â€“20%ã€‚",
      "panelWidthInches": "å¯é€‰ â€” æ¯å—æŒ‚æ¿å¤–éœ²æœ‰æ•ˆå®½åº¦ï¼ˆè‹±å¯¸ï¼‰ï¼Œç”¨äºŽä¼°ç®—æ¿æå¼ æ•°ã€‚",
      "pricePerSqFt": "å¯é€‰ â€” æ¯å¹³æ–¹è‹±å°º/å¹³æ–¹ç±³çš„ææ–™å•ä»·ã€‚"
    },
    "options": {
      "gableShape": {
        "none": "æ— å±±å¢™ / å¹³å±‹é¡¶æˆ–å››å¡å±‹é¡¶",
        "triangle": "ä¸‰è§’äººå­—å±±å¢™ (æ ‡å‡†åŒå¡å±‹é¡¶)",
        "half-circle": "æ‹±å½¢ / åŠåœ†å½¢å±±å¢™"
      },
      "sidingMaterial": {
        "vinyl": "PVC / ä¹™çƒ¯åŸºå¤–å¢™æŒ‚æ¿",
        "fiber-cement": "çº¤ç»´æ°´æ³¥æ¿ (Hardie Board)",
        "wood": "å¤©ç„¶å®žæœ¨å¤–å¢™æ¿",
        "metal": "é‡‘å±ž / é’¢åˆ¶å¤–å¢™æ¿",
        "engineered-wood": "å·¥ç¨‹æœ¨å¤åˆæŒ‚æ¿ (LP SmartSide)",
        "stucco": "å¤–å¢™ç°æ³¥ / æŠ¹ç°ä¿æ¸©ç³»ç»Ÿ",
        "brick-veneer": "ä»¿ç –è´´é¢ç –"
      }
    },
    "article": "## å¦‚ä½•å‡†ç¡®è®¡ç®—æˆ¿å±‹å¤–å¢™æŒ‚æ¿ç”¨é‡\\n\\nç³»ç»Ÿæµ‹é‡å»ºç­‘å››å‘¨å‘¨é•¿ã€ç²¾ç¡®æ ¸ç®—äººå­—å±±å¢™é¢ç§¯ã€ç§‘å­¦æ‰£é™¤é—¨çª—æ´žå£å¹¶é¢„ç•™è£åˆ‡æŸè€—ã€‚"
  },
  "ja": {
    "name": "ã‚µã‚¤ãƒ‡ã‚£ãƒ³ã‚°ãƒ»å¤–å£æè¨ˆç®—æ©Ÿ",
    "shortDescription": "ä½å®…ãƒ»å»ºç¯‰ç”¨ã‚µã‚¤ãƒ‡ã‚£ãƒ³ã‚°å¤–å£æã®ç„¡æ–™è¨ˆç®—ãƒ„ãƒ¼ãƒ«ã€‚å£é¢ç©(ãŽ¡ãƒ»sq ft)ã€å¿…è¦ã‚¹ã‚¯ã‚¨ã‚¢æ•°ã€å½¹ç‰©é•·ã•ã€ãƒ­ã‚¹çŽ‡ã€ææ–™è²»æ¦‚ç®—ã‚’çž¬æ™‚ã«ç®—å‡ºã€‚",
    "helpTexts": {
      "buildingLength": "å»ºç‰©ã®å¤–å‘¨é•·ã•ï¼ˆå‡ºéš…ã‹ã‚‰å‡ºéš…ã¾ã§ã®å¤–å¯¸ï¼‰ã€‚",
      "buildingWidth": "å»ºç‰©ã®å¤–å‘¨å¹…ï¼ˆå‡ºéš…ã‹ã‚‰å‡ºéš…ã¾ã§ã®å¤–å¯¸ï¼‰ã€‚",
      "wallHeight": "åœ°ç›¤é¢ã‹ã‚‰è»’æ¡ï¼ˆè»’ä¸‹ï¼‰ã¾ã§ã®å¤–å£é«˜ã•ï¼ˆå¦»å£ã¯é™¤ãï¼‰ã€‚",
      "stories": "åœ°ä¸ŠéšŽæ•°ã€‚",
      "gableShape": "åˆ‡å¦»å±‹æ ¹ã«ãŠã‘ã‚‹å¦»å£ï¼ˆç ´é¢¨å´ä¸‰è§’éƒ¨åˆ†ï¼‰ã®å½¢çŠ¶ã€‚",
      "gableWidth": "å¦»å£ã®åº•è¾ºå¹…ã€‚",
      "gableHeight": "è»’å…ˆãƒ¬ãƒ™ãƒ«ã‹ã‚‰æ£Ÿï¼ˆå±‹æ ¹é ‚ç‚¹ï¼‰ã¾ã§ã®åž‚ç›´é«˜ã•ã€‚",
      "gableCount": "ä¸€èˆ¬çš„ãªåˆ‡å¦»å±‹æ ¹ã¯å¦»å£ãŒ2ç®‡æ‰€ã€‚å¯„æ£Ÿå±‹æ ¹ã¯0ç®‡æ‰€ã€‚",
      "doorCount": "æ¨™æº–çš„ãªçŽ„é–¢ãƒ»å‹æ‰‹å£ãƒ‰ã‚¢ï¼ˆè‡ªå‹•æŽ§é™¤ã•ã‚Œã¾ã™ï¼‰ã€‚",
      "windowCount": "æ¨™æº–çš„ãªå¼•ãé•ã„ãƒ»è¾·ã‚Šå‡ºã—çª“ï¼ˆè‡ªå‹•æŽ§é™¤ã•ã‚Œã¾ã™ï¼‰ã€‚",
      "garageDoorCount": "ã‚¬ãƒ¬ãƒ¼ã‚¸ã‚·ãƒ£ãƒƒã‚¿ãƒ¼ï¼ˆè‡ªå‹•æŽ§é™¤ã•ã‚Œã¾ã™ï¼‰ã€‚",
      "sidingMaterial": "ãƒ­ã‚¹çŽ‡ã®æŽ¨å¥¨å€¤è¨­å®šã«ä½¿ç”¨ã™ã‚‹å¤–è£…æã®ç¨®é¡žã€‚",
      "waste": "æŽ¨å¥¨ãƒ­ã‚¹çŽ‡ï¼šçª¯æ¥­ç³» 10ã€œ15%ã€é‡‘å±žç³» 5ã€œ10%ã€æœ¨è£½ 15ã€œ20%ã€‚",
      "panelWidthInches": "ä»»æ„ â€” ã‚µã‚¤ãƒ‡ã‚£ãƒ³ã‚°æ¿ã®åƒãå¹…ï¼ˆæœ‰åŠ¹å¹…ï¼‰ã‚’å…¥åŠ›ã—ã¦å¿…è¦æžšæ•°ã‚’ç®—å‡ºã€‚",
      "pricePerSqFt": "ä»»æ„ â€” ãŽ¡ã‚ãŸã‚Šã¾ãŸã¯sq ftã‚ãŸã‚Šã®ææ–™å˜ä¾¡ã€‚"
    },
    "options": {
      "gableShape": {
        "none": "å¦»å£ãªã— / é™¸å±‹æ ¹ãƒ»å¯„æ£Ÿå±‹æ ¹",
        "triangle": "ä¸‰è§’å¦»å£ (æ¨™æº–çš„ãªåˆ‡å¦»å±‹æ ¹)",
        "half-circle": "ã‚¢ãƒ¼ãƒåž‹ / åŠå††å½¢å¦»å£"
      },
      "sidingMaterial": {
        "vinyl": "æ¨¹è„‚ã‚µã‚¤ãƒ‡ã‚£ãƒ³ã‚° (PVC)",
        "fiber-cement": "çª¯æ¥­ç³»ã‚µã‚¤ãƒ‡ã‚£ãƒ³ã‚° (Hardieæ¿ç­‰)",
        "wood": "å¤©ç„¶æœ¨ã‚µã‚¤ãƒ‡ã‚£ãƒ³ã‚° (ç¾½ç›®æ¿)",
        "metal": "é‡‘å±žç³»ã‚µã‚¤ãƒ‡ã‚£ãƒ³ã‚° (ã‚¬ãƒ«ãƒãƒªã‚¦ãƒ ç­‰)",
        "engineered-wood": "æœ¨è³ªç³»ã‚µã‚¤ãƒ‡ã‚£ãƒ³ã‚° (LP SmartSide)",
        "stucco": "ãƒ¢ãƒ«ã‚¿ãƒ«å¡—ã‚Šå£ / å·¦å®˜ä»•ä¸Šã’",
        "brick-veneer": "å¤–å£ã‚¿ã‚¤ãƒ«ãƒ»ãƒ¬ãƒ³ã‚¬å¼µã‚Š"
      }
    },
    "article": "## å¤–å£ã‚µã‚¤ãƒ‡ã‚£ãƒ³ã‚°å¿…è¦é‡ã®è¨ˆç®—æ–¹æ³•\\n\\nå¤–å‘¨é•·ã®æ¸¬å®šã€å¦»å£é¢ç©ã®åŠ ç®—ã€ãƒ‰ã‚¢ã‚„ã‚µãƒƒã‚·ç­‰ã®é–‹å£éƒ¨æŽ§é™¤ã€å½¹ç‰©ãƒ»ç›®åœ°ãƒ­ã‚¹çŽ‡ã®ç©ç®—ã‚¬ã‚¤ãƒ‰ã€‚"
  },
  "ko": {
    "name": "ì‚¬ì´ë”© ë° ì™¸ë²½ ë§ˆê°ìž¬ ê³„ì‚°ê¸°",
    "shortDescription": "ì£¼íƒ ë° ê±´ì¶•ë¬¼ ë¬´ë£Œ ì‚¬ì´ë”© ê³„ì‚°ê¸°. ì™¸ë²½ ë©´ì (mÂ²/sq ft), í•„ìš” ìŠ¤í€˜ì–´ ìˆ˜ëŸ‰, íŒ¨ë„ ìž¥ìˆ˜, í• ì¦ë¥  ë° ìžìž¬ë¹„ ê²¬ì ì„ ì¦‰ì‹œ ì‚°ì¶œ.",
    "helpTexts": {
      "buildingLength": "ê±´ë¬¼ ì™¸ë²½ ê¸¸ì´ (ëª¨ì„œë¦¬ì—ì„œ ëª¨ì„œë¦¬ê¹Œì§€ì˜ ì™¸ê²½ ì¹˜ìˆ˜).",
      "buildingWidth": "ê±´ë¬¼ ì™¸ë²½ ë„ˆë¹„ (ëª¨ì„œë¦¬ì—ì„œ ëª¨ì„œë¦¬ê¹Œì§€ì˜ ì™¸ê²½ ì¹˜ìˆ˜).",
      "wallHeight": "ë°”ë‹¥ë¶€í„° ì²˜ë§ˆ ë°‘ê¹Œì§€ì˜ ë²½ì²´ ë†’ì´ (ë°•ê³µ ì œì™¸).",
      "stories": "ì§€ìƒ ì¸µìˆ˜.",
      "gableShape": "ë°•ê³µì§€ë¶•(ë§žë°°ì§€ë¶•) ë²½ë©´ì˜ ê¸°í•˜í•™ì  í˜•íƒœ.",
      "gableWidth": "ë°•ê³µë²½ ë°‘ë³€ ë„ˆë¹„ (ë³´í†µ ê±´ë¬¼ ë„ˆë¹„ì™€ ë™ì¼).",
      "gableHeight": "ì²˜ë§ˆì„ ì—ì„œ ì§€ë¶• ìš©ë§ˆë£¨ ìµœê³ ì ê¹Œì§€ì˜ ìˆ˜ì§ ë†’ì´.",
      "gableCount": "ì¼ë°˜ ë§žë°°ì§€ë¶•ì€ ë°•ê³µë²½ì´ 2ê°œì†Œìž…ë‹ˆë‹¤.",
      "doorCount": "ì¼ë°˜ ì™¸ë¶€ ì¶œìž…ë¬¸ (ìžë™ ê³µì œ).",
      "windowCount": "ì¼ë°˜ ì°½ë¬¸ (ìžë™ ê³µì œ).",
      "garageDoorCount": "ì°¨ê³  ë¬¸ (ìžë™ ê³µì œ).",
      "sidingMaterial": "ê¶Œìž¥ ìžìž¬ ë¡œìŠ¤ìœ¨(í• ì¦) ì‚°ì •ì„ ìœ„í•œ ì™¸ìž¥ìž¬ ì¢…ë¥˜.",
      "waste": "ê¶Œìž¥ ë¡œìŠ¤ìœ¨: ë¹„ë‹/ë©”íƒˆ 5~10%, ì‹œë©˜íŠ¸ ì‚¬ì´ë”© 10~15%, ëª©ìž¬ 15~20%.",
      "panelWidthInches": "ì„ íƒì‚¬í•­ â€” íŒ¨ë„ ìž¥ìˆ˜ ê³„ì‚°ì„ ìœ„í•œ ìœ íš¨ ë…¸ì¶œ í­.",
      "pricePerSqFt": "ì„ íƒì‚¬í•­ â€” ì´ ìžìž¬ë¹„ ê²¬ì ì„ ìœ„í•œ ë‹¨ìœ„ë©´ì ë‹¹ ë‹¨ê°€."
    },
    "options": {
      "gableShape": {
        "none": "ë°•ê³µ ì—†ìŒ / í‰ì§€ë¶• ë˜ëŠ” ëª¨ìž„ì§€ë¶•",
        "triangle": "ì‚¼ê°í˜• ë°•ê³µ (ì¼ë°˜ ë§žë°°ì§€ë¶•)",
        "half-circle": "ì•„ì¹˜í˜• / ë°˜ì›í˜• ë°•ê³µ"
      },
      "sidingMaterial": {
        "vinyl": "ë¹„ë‹ ì‚¬ì´ë”© (PVC)",
        "fiber-cement": "ì‹œë©˜íŠ¸ ì‚¬ì´ë”© (í•˜ë””ë³´ë“œ)",
        "wood": "ì²œì—° ëª©ìž¬ ì‚¬ì´ë”©",
        "metal": "ë©”íƒˆ / ì§•í¬ íŒ¨ë„",
        "engineered-wood": "ì—”ì§€ë‹ˆì–´ë“œ ìš°ë“œ (LP SmartSide)",
        "stucco": "ìŠ¤íƒ€ì½” / ì™¸ë‹¨ì—´ ë¯¸ìž¥",
        "brick-veneer": "íŒŒë²½ëŒ / ì¹˜ìž¥ë²½ëŒ"
      }
    },
    "article": "## ì£¼íƒ ì™¸ë²½ ì‚¬ì´ë”© ì†Œìš”ëŸ‰ ì‚°ì¶œ ê°€ì´ë“œ\\n\\nì™¸ë²½ ë‘˜ë ˆ ì¸¡ì •, ë°•ê³µ ë©´ì  í•©ì‚°, ì°½ë¬¸ ë° ë¬¸ ê°œêµ¬ë¶€ ê³µì œì™€ ì ˆë‹¨ ì†ì‹¤(ë¡œìŠ¤ìœ¨) ê³„ì‚° ê³µì‹."
  }
},

  'stair-calculator': {
    en: {
      name: 'Stair Calculator',
      shortDescription: 'Free stair calculator with IRC & IBC code compliance. Calculate exact riser height, number of steps, tread depth, stringer 2Ã—12 cut length, pitch angle, and headroom clearance.',
      helpTexts: {
        totalRise: 'Total vertical height measured from the lower finished floor to the upper finished floor surface (e.g. 105 in for standard 8 ft ceiling + joist).',
        buildingCode: 'Standard residential (IRC Â§R311.7) permits up to 7Â¾" riser height. Commercial (IBC Â§1011.5) allows up to 7".',
        targetRiserHeight: 'Desired height per step (typical ideal is 7.0" to 7.5"). The exact riser height is computed automatically.',
        targetTreadDepth: 'Horizontal depth of each step run excluding nosing (min 10" for IRC; min 11" for IBC commercial).',
        stairWidth: 'Width of stair flight (IRC requires minimum 36 inches clear width for residential stairs).',
        mountingStyle: 'Standard residential framing drops the top tread one riser below the upper subfloor.',
        nosingLength: 'Overhang past the riser face (IRC requires Â¾" to 1Â¼" nosing on treads with less than 11" run).',
        stringerSpacing: 'Spacing between stringers (typically 16" o.c. for wood treads; 12" o.c. for composite decking).',
        floorJoistThickness: 'Thickness of upper floor structure (e.g. 9Â¼" 2Ã—10 joist + Â¾" subfloor = 10Â½ in). Used for headroom calculation.',
        minHeadroom: 'Minimum vertical clearance (IRC Â§R311.7.2 requires min 80 in / 6 ft 8 in).',
        pricePerStep: 'Optional â€” enter materials or labor budget per step to estimate total stair cost.',
        currency: 'Select your local currency for the cost estimate.',
      },
      options: {
        buildingCode: {
          'irc-residential': 'IRC Residential Code (Max 7Â¾" rise, Min 10" tread)',
          'ibc-commercial': 'IBC Commercial Code (Max 7" rise, Min 11" tread)',
          'custom': 'Custom / Unrestricted Dimensions',
        },
        mountingStyle: {
          'down-one-riser': 'Standard â€” Top tread is 1 riser below upper floor (Treads = Risers âˆ’ 1)',
          'flush-top': 'Flush â€” Top tread level with upper floor (Treads = Risers)',
        },
      },
      article: `## How to Calculate Stairs: Step-by-Step (IRC & IBC Compliant)

Use this calculator to design any interior or exterior stair flight â€” from a standard basement stair to a deck or commercial building staircase.

**Required measurement:** Total Rise â€” the only field you must measure on site.

### Key Inputs
- **Total Rise:** Measure from finished lower floor to finished upper floor.
- **Building Code:** IRC (residential max 7Â¾" riser / min 10" tread) or IBC (commercial max 7" / min 11").
- **Target Riser Height:** Ideal residential range is 7.0" to 7.5".
- **Tread Depth:** Typical 10.5" or 11" excluding nosing overhang.
- **Stair Width:** Minimum 36" clear per IRC Â§R311.7.1.

### Key Outputs
- **Exact Riser Height:** Total Rise divided equally by riser count â€” all risers must be identical.
- **Stringer Length:** Pythagorean diagonal: âˆš(RiseÂ² + RunÂ²) â€” determines 2Ã—12 lumber length to purchase.
- **Stringer Throat Depth:** Must be â‰¥ 3.5 in after notch cuts per IRC Â§R311.7.10.
- **Headroom Opening:** Minimum stairwell ceiling cutout length for 80 in IRC headroom clearance.
- **Blondel's Rule (2R+T):** Ergonomic score; ideal range is 24.0â€“25.0 in (610â€“635 mm).
- **Baluster Count:** Based on maximum 4 in sphere rule (IRC Â§R312.1.3).
`,
    },

    es: {
      name: 'Calculadora de Escaleras',
      shortDescription: 'Calcula la altura exacta de escalones, nÃºmero de peldaÃ±os, profundidad de huella, longitud de zanca y Ã¡ngulo de inclinaciÃ³n segÃºn cÃ³digo IRC e IBC.',
      helpTexts: {
        totalRise: 'Altura vertical total desde el suelo inferior terminado hasta el suelo superior terminado.',
        buildingCode: 'IRC residencial (mÃ¡x. 7Â¾" de contrahuella) o IBC comercial (mÃ¡x. 7").',
        targetRiserHeight: 'Altura ideal por escalÃ³n (normalmente 7.0" a 7.5").',
        targetTreadDepth: 'Profundidad horizontal de la huella sin incluir el vuelo (mÃ­n. 10" IRC, mÃ­n. 11" IBC).',
        stairWidth: 'Ancho libre de la escalera (mÃ­nimo 36" segÃºn IRC Â§R311.7.1).',
        mountingStyle: 'EstÃ¡ndar residencial: el escalÃ³n superior queda un peldaÃ±o por debajo del forjado.',
        nosingLength: 'Vuelo del borde de la huella sobre la contrahuella (IRC: Â¾" a 1Â¼").',
        stringerSpacing: 'SeparaciÃ³n entre zancas (normalmente 40 cm en madera).',
        floorJoistThickness: 'Espesor total del forjado superior. Usado para calcular la abertura de paso.',
        minHeadroom: 'Altura libre mÃ­nima exigida (IRC Â§R311.7.2: mÃ­n. 2.03 m / 80 pulg.).',
        pricePerStep: 'Opcional â€” coste estimado por escalÃ³n para calcular el presupuesto total.',
        currency: 'Selecciona tu moneda local para la estimaciÃ³n de costos.',
      },
      options: {
        buildingCode: {
          'irc-residential': 'CÃ³digo IRC Residencial (MÃ¡x. 7Â¾" contrahuella, MÃ­n. 10" huella)',
          'ibc-commercial': 'CÃ³digo IBC Comercial (MÃ¡x. 7" contrahuella, MÃ­n. 11" huella)',
          'custom': 'Personalizado / Sin restricciones de cÃ³digo',
        },
        mountingStyle: {
          'down-one-riser': 'EstÃ¡ndar â€” EscalÃ³n superior a 1 peldaÃ±o del forjado (Huellas = PeldaÃ±os âˆ’ 1)',
          'flush-top': 'Al ras â€” EscalÃ³n superior al nivel del forjado (Huellas = PeldaÃ±os)',
        },
      },
      article: `## CÃ³mo calcular una escalera paso a paso

Introduce la altura total entre pisos (medida en obra) y el cÃ³digo de construcciÃ³n aplicable. La calculadora determina automÃ¡ticamente el nÃºmero de peldaÃ±os, la altura exacta de contrahuella y la profundidad de huella conformes al cÃ³digo.

### Datos clave
- **Altura total:** Mide desde el suelo inferior terminado hasta el superior.
- **CÃ³digo:** IRC residencial (mÃ¡x. 19.7 cm / 7Â¾") o IBC comercial (mÃ¡x. 17.8 cm / 7").
- **Ãngulo ideal:** Entre 30Â° y 37Â° para mÃ¡ximo confort ergonÃ³mico.
- **Regla de Blondel:** 2 Ã— Contrahuella + Huella = 60â€“63.5 cm (24â€“25 pulg.).
`,
    },

    pt: {
      name: 'Calculadora de Escadas',
      shortDescription: 'Calcule a altura exata dos degraus, nÃºmero de espelhos, profundidade do piso, comprimento da corda e Ã¢ngulo de inclinaÃ§Ã£o com conformidade IRC e IBC.',
      helpTexts: {
        totalRise: 'Altura vertical total entre o piso inferior acabado e o piso superior acabado.',
        buildingCode: 'IRC residencial (mÃ¡x. 7Â¾" de espelho) ou IBC comercial (mÃ¡x. 7").',
        targetRiserHeight: 'Altura ideal por degrau (normalmente 17,5â€“19 cm).',
        targetTreadDepth: 'Profundidade horizontal do piso, sem incluir o balanÃ§o (mÃ­n. 25,4 cm IRC).',
        stairWidth: 'Largura livre da escada (mÃ­nimo 91 cm conforme IRC Â§R311.7.1).',
        mountingStyle: 'PadrÃ£o residencial: o Ãºltimo degrau fica um espelho abaixo do pavimento superior.',
        nosingLength: 'BalanÃ§o da borda do piso sobre o espelho (IRC: 19â€“32 mm).',
        stringerSpacing: 'EspaÃ§amento entre cossins (normalmente 40 cm para pisos de madeira).',
        floorJoistThickness: 'Espessura total da laje superior. Usada para calcular a abertura do vÃ£o da escada.',
        minHeadroom: 'PÃ©-direito mÃ­nimo exigido (IRC Â§R311.7.2: mÃ­n. 2,03 m / 80 pol.).',
        pricePerStep: 'Opcional â€” custo estimado por degrau para calcular o orÃ§amento total.',
        currency: 'Selecione sua moeda local para a estimativa de custo.',
      },
      options: {
        buildingCode: {
          'irc-residential': 'CÃ³digo IRC Residencial (MÃ¡x. 7Â¾" espelho, MÃ­n. 10" piso)',
          'ibc-commercial': 'CÃ³digo IBC Comercial (MÃ¡x. 7" espelho, MÃ­n. 11" piso)',
          'custom': 'Personalizado / Sem restriÃ§Ãµes de cÃ³digo',
        },
        mountingStyle: {
          'down-one-riser': 'PadrÃ£o â€” Ãšltimo degrau 1 espelho abaixo do pavimento (Pisos = Espelhos âˆ’ 1)',
          'flush-top': 'Nivelado â€” Ãšltimo piso no nÃ­vel do pavimento (Pisos = Espelhos)',
        },
      },
      article: `## Como Calcular Escadas Passo a Passo

Informe a altura total entre pisos (medida em obra) e o cÃ³digo de construÃ§Ã£o aplicÃ¡vel. A calculadora determina automaticamente o nÃºmero de degraus, altura exata do espelho e profundidade do piso.

### Dados principais
- **Altura total:** MeÃ§a do piso inferior acabado ao superior.
- **Ã‚ngulo ideal:** Entre 30Â° e 37Â° para mÃ¡ximo conforto ergonÃ´mico.
- **Regra de Blondel:** 2 Ã— Espelho + Piso = 600â€“635 mm.
`,
    },

    fr: {
      name: "Calculateur d'Escaliers",
      shortDescription: "Calculez la hauteur exacte des marches, le nombre de contremarches, la largeur de giron, la longueur de limon et l'angle d'inclinaison selon les normes IRC et IBC.",
      helpTexts: {
        totalRise: 'Hauteur verticale totale entre le niveau fini infÃ©rieur et le niveau fini supÃ©rieur.',
        buildingCode: 'IRC rÃ©sidentiel (max. 7Â¾" de contremarche) ou IBC commercial (max. 7").',
        targetRiserHeight: 'Hauteur idÃ©ale par marche (gÃ©nÃ©ralement 17â€“19 cm).',
        targetTreadDepth: 'Profondeur du giron, hors nez de marche (min. 25,4 cm IRC).',
        stairWidth: "Largeur libre de l'escalier (minimum 91 cm selon IRC Â§R311.7.1).",
        mountingStyle: 'Standard rÃ©sidentiel : la derniÃ¨re marche est Ã  une contremarche sous le plancher supÃ©rieur.',
        nosingLength: 'DÃ©bord du nez de marche sur la contremarche (IRC : 19â€“32 mm).',
        stringerSpacing: 'Espacement entre les limons (gÃ©nÃ©ralement 40 cm pour les marches en bois).',
        floorJoistThickness: "Ã‰paisseur du plancher supÃ©rieur. UtilisÃ© pour calculer l'ouverture de trÃ©mie.",
        minHeadroom: 'Hauteur libre minimale requise (IRC Â§R311.7.2 : min. 2,03 m / 80 po).',
        pricePerStep: 'Optionnel â€” coÃ»t estimÃ© par marche pour calculer le devis total.',
        currency: "SÃ©lectionnez votre devise locale pour l'estimation du coÃ»t.",
      },
      options: {
        buildingCode: {
          'irc-residential': 'Code IRC RÃ©sidentiel (Max. 7Â¾" contremarche, Min. 10" giron)',
          'ibc-commercial': 'Code IBC Commercial (Max. 7" contremarche, Min. 11" giron)',
          'custom': 'PersonnalisÃ© / Sans restriction de code',
        },
        mountingStyle: {
          'down-one-riser': 'Standard â€” DerniÃ¨re marche Ã  1 contremarche sous le plancher (Girons = Contremarches âˆ’ 1)',
          'flush-top': 'Affleurant â€” DerniÃ¨re marche au niveau du plancher (Girons = Contremarches)',
        },
      },
      article: `## Comment calculer un escalier Ã©tape par Ã©tape

Entrez la hauteur totale entre les niveaux (mesurÃ©e sur chantier) et la norme applicable. La calculatrice dÃ©termine automatiquement le nombre de marches, la hauteur exacte de contremarche et la profondeur de giron.

### DonnÃ©es clÃ©s
- **Hauteur totale :** Mesurez du sol fini infÃ©rieur au sol fini supÃ©rieur.
- **Angle idÃ©al :** Entre 30Â° et 37Â° pour un confort ergonomique optimal.
- **RÃ¨gle de Blondel :** 2 Ã— Contremarche + Giron = 600â€“635 mm.
`,
    },

    de: {
      name: 'Treppenrechner',
      shortDescription: 'Berechnen Sie genaue StufenhÃ¶he, Anzahl der Stufen, Auftritt, Holmdiagonale und Neigungswinkel nach IRC- und IBC-Normen.',
      helpTexts: {
        totalRise: 'Gesamte SteigungshÃ¶he vom FertigfuÃŸboden unten bis zum FertigfuÃŸboden oben.',
        buildingCode: 'IRC wohnbaulich (max. 19,7 cm Setzstufe) oder IBC gewerblich (max. 17,8 cm).',
        targetRiserHeight: 'Ideale Setzstufe pro Stufe (empfohlen: 17â€“19 cm).',
        targetTreadDepth: 'Horizontale Auftritttiefe ohne Nosing (min. 25,4 cm IRC).',
        stairWidth: 'Lichte Treppenbreite (IRC Â§R311.7.1 schreibt mind. 91 cm vor).',
        mountingStyle: 'Standard: Oberstes Trittstufenniveau liegt eine Setzstufe unter der Oberkante Decke.',
        nosingLength: 'Nosing-Vorsprung Ã¼ber die Setzstufe (IRC: 19â€“32 mm).',
        stringerSpacing: 'Abstand zwischen Treppenwangen (i. d. R. 40 cm bei Holzauftritten).',
        floorJoistThickness: 'DeckenstÃ¤rke des Obergeschosses. FÃ¼r die Berechnung der DeckenÃ¶ffnung.',
        minHeadroom: 'Mindest-DurchgangshÃ¶he (IRC Â§R311.7.2: mind. 2,03 m / 80 Zoll).',
        pricePerStep: 'Optional â€” geschÃ¤tzte Kosten pro Stufe fÃ¼r die GesamtkostenschÃ¤tzung.',
        currency: 'WÃ¤hlen Sie Ihre lokale WÃ¤hrung fÃ¼r die KostenschÃ¤tzung.',
      },
      options: {
        buildingCode: {
          'irc-residential': 'IRC Wohnbaustandard (max. 7Â¾" Setzstufe, min. 10" Auftritt)',
          'ibc-commercial': 'IBC Gewerbestandard (max. 7" Setzstufe, min. 11" Auftritt)',
          'custom': 'Benutzerdefiniert / Ohne NormbeschrÃ¤nkung',
        },
        mountingStyle: {
          'down-one-riser': 'Standard â€” Oberste Stufe 1 Setzstufe unter Decke (Auftritte = Setzstufen âˆ’ 1)',
          'flush-top': 'BÃ¼ndig â€” Oberste Stufe auf Niveau FertigfuÃŸboden (Auftritte = Setzstufen)',
        },
      },
      article: `## Treppe berechnen: Schritt fÃ¼r Schritt

Geben Sie die GesamtsteigungshÃ¶he (vor Ort gemessen) und die gewÃ¼nschte Norm ein. Der Rechner ermittelt automatisch Stufenanzahl, exakte Setzstufe und Auftrittstiefe.

### Wichtige Angaben
- **Gesamtsteigung:** Vom fertigen Unterboden bis zum fertigen Oberboden messen.
- **Idealer Winkel:** 30Â°â€“37Â° fÃ¼r maximalen Gehkomfort.
- **SchrittmaÃŸregel (Blondel):** 2 Ã— Setzstufe + Auftritt = 59â€“65 cm.
`,
    },

    it: {
      name: "Calcolatore Scale",
      shortDescription: "Calcola l'altezza esatta degli scalini, il numero di alzate, la pedata, la lunghezza del corrimano e l'angolo di inclinazione con conformitÃ  IRC e IBC.",
      helpTexts: {
        totalRise: 'Altezza verticale totale tra il pavimento finito inferiore e quello superiore.',
        buildingCode: 'IRC residenziale (max. 7Â¾" di alzata) o IBC commerciale (max. 7").',
        targetRiserHeight: 'Altezza ideale per gradino (normalmente 17â€“19 cm).',
        targetTreadDepth: 'ProfonditÃ  orizzontale della pedata escluso il bordo (min. 25,4 cm IRC).',
        stairWidth: 'Larghezza libera della scala (min. 91 cm per IRC Â§R311.7.1).',
        mountingStyle: "Standard residenziale: l'ultimo gradino Ã¨ a un'alzata sotto il solaio superiore.",
        nosingLength: "Sporgenza del bordo pedata sull'alzata (IRC: 19â€“32 mm).",
        stringerSpacing: 'Interasse tra carreggiatori (normalmente 40 cm per pedate in legno).',
        floorJoistThickness: "Spessore totale del solaio superiore. Usato per calcolare l'apertura del vano.",
        minHeadroom: 'Altezza libera minima richiesta (IRC Â§R311.7.2: min. 2,03 m / 80 pol.).',
        pricePerStep: 'Opzionale â€” costo stimato per gradino per calcolare il preventivo totale.',
        currency: "Seleziona la valuta locale per la stima del costo.",
      },
      options: {
        buildingCode: {
          'irc-residential': 'Codice IRC Residenziale (Max. 7Â¾" alzata, Min. 10" pedata)',
          'ibc-commercial': 'Codice IBC Commerciale (Max. 7" alzata, Min. 11" pedata)',
          'custom': 'Personalizzato / Senza restrizioni di codice',
        },
        mountingStyle: {
          'down-one-riser': 'Standard â€” Ultimo gradino a 1 alzata sotto il solaio (Pedate = Alzate âˆ’ 1)',
          'flush-top': 'A filo â€” Ultimo gradino livello solaio (Pedate = Alzate)',
        },
      },
      article: `## Come Calcolare una Scala Passo per Passo

Inserisci l'altezza totale interpiano (misurata in cantiere) e il codice edilizio applicabile. La calcolatrice determina automaticamente il numero di gradini, l'altezza esatta dell'alzata e la profonditÃ  della pedata.

### Dati chiave
- **Altezza totale:** Misura dal pavimento finito inferiore al superiore.
- **Angolo ideale:** Tra 30Â° e 37Â° per il massimo comfort ergonomico.
- **Regola di Blondel:** 2 Ã— Alzata + Pedata = 60â€“63,5 cm.
`,
    },

    nl: {
      name: "Trappenberekening",
      shortDescription: "Bereken de exacte optreehoogte, aantal treden, breedte, strijkbalklengte en hellingshoek volgens IRC en IBC normen.",
      helpTexts: {
        totalRise: 'Totale verticale hoogte tussen de afgewerkte ondervloer en de afgewerkte bovenvloer.',
        buildingCode: 'IRC woonbouw (max. 7Â¾" optrede) of IBC commercieel (max. 7").',
        targetRiserHeight: 'Gewenste optreehoogte per trede (typisch 17â€“19 cm).',
        targetTreadDepth: 'Horizontale inloopdiepte exclusief neus (min. 25,4 cm IRC).',
        stairWidth: 'Vrije trappenbreedte (min. 91 cm per IRC Â§R311.7.1).',
        mountingStyle: "Standaard woonbouw: de bovenste trede ligt Ã©Ã©n optrede onder de bovenvloer.",
        nosingLength: 'Uitsteek van de tredeneus over de optrede (IRC: 19â€“32 mm).',
        stringerSpacing: 'Hart-op-hart afstand tussen trappenbomen (doorgaans 40 cm bij houten treden).',
        floorJoistThickness: 'Totale dikte van de bovenvloer. Gebruikt voor de berekening van de trapopening.',
        minHeadroom: 'Minimale vrije doorgangshoogte (IRC Â§R311.7.2: min. 2,03 m / 80 inch).',
        pricePerStep: 'Optioneel â€” geschatte kosten per trede voor de totale kostenbegroting.',
        currency: 'Selecteer uw lokale valuta voor de kostenschatting.',
      },
      options: {
        buildingCode: {
          'irc-residential': 'IRC Woonbouwnorm (Max. 7Â¾" optrede, Min. 10" intrede)',
          'ibc-commercial': 'IBC CommerciÃ«le Norm (Max. 7" optrede, Min. 11" intrede)',
          'custom': 'Aangepast / Zonder norm',
        },
        mountingStyle: {
          'down-one-riser': 'Standaard â€” Bovenste trede 1 optrede onder bovenvloer (Treden = Optreden âˆ’ 1)',
          'flush-top': 'Vlak â€” Bovenste trede gelijkvloers (Treden = Optreden)',
        },
      },
      article: `## Trap berekenen: Stap voor Stap

Voer de totale hoogte tussen de vloeren in (ter plaatse gemeten) en de toepasselijke norm. De calculator bepaalt automatisch het aantal treden, exacte optreehoogte en intreediepte.

### Kernwaarden
- **Totale hoogte:** Meet van de afgewerkte ondervloer tot de bovenvloer.
- **Ideale hoek:** Tussen 30Â° en 37Â° voor optimaal loopcomfort.
- **Blondel-formule:** 2 Ã— Optrede + Intrede = 59â€“65 cm.
`,
    },

    pl: {
      name: 'Kalkulator SchodÃ³w',
      shortDescription: 'Oblicz dokÅ‚adnÄ… wysokoÅ›Ä‡ stopnicy, liczbÄ™ stopni, szerokoÅ›Ä‡ biegu, dÅ‚ugoÅ›Ä‡ kosza i kÄ…t nachylenia zgodnie z normami IRC i IBC.',
      helpTexts: {
        totalRise: 'CaÅ‚kowita wysokoÅ›Ä‡ pionowa miÄ™dzy gotowÄ… posadzkÄ… dolnÄ… a gÃ³rnÄ….',
        buildingCode: 'IRC mieszkaniowy (maks. 7Â¾" podstopnica) lub IBC komercyjny (maks. 7").',
        targetRiserHeight: 'Docelowa wysokoÅ›Ä‡ stopnia (typowo 17â€“19 cm).',
        targetTreadDepth: 'Pozioma gÅ‚Ä™bokoÅ›Ä‡ stopnicy bez nosingu (min. 25,4 cm IRC).',
        stairWidth: 'Wolna szerokoÅ›Ä‡ biegu schodÃ³w (min. 91 cm wg IRC Â§R311.7.1).',
        mountingStyle: 'Standard: najwyÅ¼sza stopnica jest o jednÄ… podstopnicÄ™ poniÅ¼ej stropu gÃ³rnego.',
        nosingLength: 'WysuniÄ™cie nosingu poza podstopnicÄ™ (IRC: 19â€“32 mm).',
        stringerSpacing: 'Rozstaw kosza (zwykle 40 cm dla drewnianych stopnic).',
        floorJoistThickness: 'GruboÅ›Ä‡ stropu gÃ³rnego. UÅ¼ywana do obliczenia otworu w stropie.',
        minHeadroom: 'Minimalna wymagana wysokoÅ›Ä‡ przejÅ›cia (IRC Â§R311.7.2: min. 2,03 m / 80 cali).',
        pricePerStep: 'Opcjonalnie â€” szacowany koszt na stopieÅ„ do wyceny caÅ‚oÅ›ci.',
        currency: 'Wybierz swojÄ… walutÄ™ do szacowania kosztÃ³w.',
      },
      options: {
        buildingCode: {
          'irc-residential': 'Norma IRC Mieszkaniowa (Maks. 7Â¾" podstopnica, Min. 10" stopnica)',
          'ibc-commercial': 'Norma IBC Komercyjna (Maks. 7" podstopnica, Min. 11" stopnica)',
          'custom': 'Niestandardowy / Bez ograniczeÅ„ normy',
        },
        mountingStyle: {
          'down-one-riser': 'Standard â€” NajwyÅ¼sza stopnica o 1 podstopnicÄ™ poniÅ¼ej stropu (Stopnice = Podstopnice âˆ’ 1)',
          'flush-top': 'WyrÃ³wnany â€” NajwyÅ¼sza stopnica na poziomie stropu (Stopnice = Podstopnice)',
        },
      },
      article: `## Jak obliczyÄ‡ schody krok po kroku

WprowadÅº caÅ‚kowitÄ… wysokoÅ›Ä‡ miÄ™dzy piÄ™trami (zmierzonÄ… na budowie) i obowiÄ…zujÄ…cÄ… normÄ™. Kalkulator automatycznie ustali liczbÄ™ stopni, dokÅ‚adnÄ… wysokoÅ›Ä‡ podstopnicy i gÅ‚Ä™bokoÅ›Ä‡ stopnicy.

### Kluczowe wartoÅ›ci
- **CaÅ‚kowita wysokoÅ›Ä‡:** Mierz od gotowej posadzki dolnej do gÃ³rnej.
- **Idealny kÄ…t:** 30Â°â€“37Â° dla maksymalnego komfortu chodu.
- **ReguÅ‚a Blondela:** 2 Ã— Podstopnica + Stopnica = 59â€“65 cm.
`,
    },

    ru: {
      name: 'ÐšÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€ Ð›ÐµÑÑ‚Ð½Ð¸Ñ†Ñ‹',
      shortDescription: 'Ð Ð°ÑÑÑ‡Ð¸Ñ‚Ð°Ð¹Ñ‚Ðµ Ñ‚Ð¾Ñ‡Ð½ÑƒÑŽ Ð²Ñ‹ÑÐ¾Ñ‚Ñƒ Ð¿Ð¾Ð´ÑÑ‚ÑƒÐ¿Ñ‘Ð½ÐºÐ°, ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ ÑÑ‚ÑƒÐ¿ÐµÐ½ÐµÐ¹, Ð³Ð»ÑƒÐ±Ð¸Ð½Ñƒ Ð¿Ñ€Ð¾ÑÑ‚ÑƒÐ¿Ð¸, Ð´Ð»Ð¸Ð½Ñƒ ÐºÐ¾ÑÐ¾ÑƒÑ€Ð° Ð¸ ÑƒÐ³Ð¾Ð» Ð½Ð°ÐºÐ»Ð¾Ð½Ð° Ð¿Ð¾ Ð½Ð¾Ñ€Ð¼Ð°Ð¼ IRC Ð¸ IBC.',
      helpTexts: {
        totalRise: 'ÐžÐ±Ñ‰Ð°Ñ Ð²ÐµÑ€Ñ‚Ð¸ÐºÐ°Ð»ÑŒÐ½Ð°Ñ Ð²Ñ‹ÑÐ¾Ñ‚Ð° Ð¼ÐµÐ¶Ð´Ñƒ Ñ‡Ð¸ÑÑ‚Ñ‹Ð¼ Ð¿Ð¾Ð»Ð¾Ð¼ Ð½Ð¸Ð¶Ð½ÐµÐ³Ð¾ Ð¸ Ð²ÐµÑ€Ñ…Ð½ÐµÐ³Ð¾ ÑÑ‚Ð°Ð¶ÐµÐ¹.',
        buildingCode: 'IRC (Ð¶Ð¸Ð»Ñ‹Ðµ Ð·Ð´Ð°Ð½Ð¸Ñ, Ð¼Ð°ÐºÑ. Ð²Ñ‹ÑÐ¾Ñ‚Ð° Ð¿Ð¾Ð´ÑÑ‚ÑƒÐ¿Ñ‘Ð½ÐºÐ° 7Â¾") Ð¸Ð»Ð¸ IBC (ÐºÐ¾Ð¼Ð¼ÐµÑ€Ñ‡ÐµÑÐºÐ¸Ðµ, Ð¼Ð°ÐºÑ. 7").',
        targetRiserHeight: 'Ð–ÐµÐ»Ð°ÐµÐ¼Ð°Ñ Ð²Ñ‹ÑÐ¾Ñ‚Ð° Ð¿Ð¾Ð´ÑÑ‚ÑƒÐ¿Ñ‘Ð½ÐºÐ° (Ñ€ÐµÐºÐ¾Ð¼ÐµÐ½Ð´ÑƒÐµÑ‚ÑÑ 17â€“19 ÑÐ¼).',
        targetTreadDepth: 'Ð“Ð¾Ñ€Ð¸Ð·Ð¾Ð½Ñ‚Ð°Ð»ÑŒÐ½Ð°Ñ Ð³Ð»ÑƒÐ±Ð¸Ð½Ð° Ð¿Ñ€Ð¾ÑÑ‚ÑƒÐ¿Ð¸ Ð±ÐµÐ· ÑÐ²ÐµÑÐ° (Ð¼Ð¸Ð½. 25,4 ÑÐ¼ IRC).',
        stairWidth: 'Ð¡Ð²Ð¾Ð±Ð¾Ð´Ð½Ð°Ñ ÑˆÐ¸Ñ€Ð¸Ð½Ð° Ð»ÐµÑÑ‚Ð½Ð¸Ñ†Ñ‹ (Ð¼Ð¸Ð½. 91 ÑÐ¼ Ð¿Ð¾ IRC Â§R311.7.1).',
        mountingStyle: 'Ð¡Ñ‚Ð°Ð½Ð´Ð°Ñ€Ñ‚: Ð²ÐµÑ€Ñ…Ð½ÑÑ ÑÑ‚ÑƒÐ¿ÐµÐ½ÑŒ Ð½Ð° Ð¾Ð´Ð¸Ð½ Ð¿Ð¾Ð´ÑÑ‚ÑƒÐ¿Ñ‘Ð½Ð¾Ðº Ð½Ð¸Ð¶Ðµ ÑƒÑ€Ð¾Ð²Ð½Ñ Ð¿ÐµÑ€ÐµÐºÑ€Ñ‹Ñ‚Ð¸Ñ.',
        nosingLength: 'Ð¡Ð²ÐµÑ Ð¿Ñ€Ð¾ÑÑ‚ÑƒÐ¿Ð¸ Ð½Ð°Ð´ Ð¿Ð¾Ð´ÑÑ‚ÑƒÐ¿Ñ‘Ð½ÐºÐ¾Ð¼ (IRC: 19â€“32 Ð¼Ð¼).',
        stringerSpacing: 'Ð Ð°ÑÑÑ‚Ð¾ÑÐ½Ð¸Ðµ Ð¼ÐµÐ¶Ð´Ñƒ ÐºÐ¾ÑÐ¾ÑƒÑ€Ð°Ð¼Ð¸ (Ð¾Ð±Ñ‹Ñ‡Ð½Ð¾ 40 ÑÐ¼ Ð´Ð»Ñ Ð´ÐµÑ€ÐµÐ²ÑÐ½Ð½Ñ‹Ñ… ÑÑ‚ÑƒÐ¿ÐµÐ½ÐµÐ¹).',
        floorJoistThickness: 'Ð¢Ð¾Ð»Ñ‰Ð¸Ð½Ð° Ð¿ÐµÑ€ÐµÐºÑ€Ñ‹Ñ‚Ð¸Ñ Ð²ÐµÑ€Ñ…Ð½ÐµÐ³Ð¾ ÑÑ‚Ð°Ð¶Ð°. Ð˜ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚ÑÑ Ð´Ð»Ñ Ñ€Ð°ÑÑ‡Ñ‘Ñ‚Ð° Ð¿Ñ€Ð¾Ñ‘Ð¼Ð° Ð² Ð¿ÐµÑ€ÐµÐºÑ€Ñ‹Ñ‚Ð¸Ð¸.',
        minHeadroom: 'ÐœÐ¸Ð½Ð¸Ð¼Ð°Ð»ÑŒÐ½Ñ‹Ð¹ Ð²ÐµÑ€Ñ‚Ð¸ÐºÐ°Ð»ÑŒÐ½Ñ‹Ð¹ Ð¿Ñ€Ð¾ÑÐ²ÐµÑ‚ (IRC Â§R311.7.2: Ð¼Ð¸Ð½. 2,03 Ð¼ / 80 Ð´ÑŽÐ¹Ð¼Ð¾Ð²).',
        pricePerStep: 'ÐÐµÐ¾Ð±ÑÐ·Ð°Ñ‚ÐµÐ»ÑŒÐ½Ð¾ â€” Ð¿Ñ€Ð¸Ð¼ÐµÑ€Ð½Ð°Ñ ÑÑ‚Ð¾Ð¸Ð¼Ð¾ÑÑ‚ÑŒ Ð¾Ð´Ð½Ð¾Ð¹ ÑÑ‚ÑƒÐ¿ÐµÐ½Ð¸ Ð´Ð»Ñ Ð¸Ñ‚Ð¾Ð³Ð¾Ð²Ð¾Ð¹ ÑÐ¼ÐµÑ‚Ñ‹.',
        currency: 'Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð²Ð°ÑˆÑƒ Ð»Ð¾ÐºÐ°Ð»ÑŒÐ½ÑƒÑŽ Ð²Ð°Ð»ÑŽÑ‚Ñƒ Ð´Ð»Ñ Ñ€Ð°ÑÑ‡Ñ‘Ñ‚Ð° ÑÑ‚Ð¾Ð¸Ð¼Ð¾ÑÑ‚Ð¸.',
      },
      options: {
        buildingCode: {
          'irc-residential': 'ÐÐ¾Ñ€Ð¼Ð° IRC (Ð¶Ð¸Ð»Ñ‹Ðµ Ð·Ð´Ð°Ð½Ð¸Ñ, Ð¼Ð°ÐºÑ. 7Â¾" Ð¿Ð¾Ð´ÑÑ‚ÑƒÐ¿Ñ‘Ð½Ð¾Ðº, Ð¼Ð¸Ð½. 10" Ð¿Ñ€Ð¾ÑÑ‚ÑƒÐ¿ÑŒ)',
          'ibc-commercial': 'ÐÐ¾Ñ€Ð¼Ð° IBC (ÐºÐ¾Ð¼Ð¼ÐµÑ€Ñ‡ÐµÑÐºÐ¸Ðµ, Ð¼Ð°ÐºÑ. 7" Ð¿Ð¾Ð´ÑÑ‚ÑƒÐ¿Ñ‘Ð½Ð¾Ðº, Ð¼Ð¸Ð½. 11" Ð¿Ñ€Ð¾ÑÑ‚ÑƒÐ¿ÑŒ)',
          'custom': 'ÐŸÐ¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒÑÐºÐ¸Ðµ / Ð‘ÐµÐ· Ð¾Ð³Ñ€Ð°Ð½Ð¸Ñ‡ÐµÐ½Ð¸Ð¹',
        },
        mountingStyle: {
          'down-one-riser': 'Ð¡Ñ‚Ð°Ð½Ð´Ð°Ñ€Ñ‚ â€” Ð’ÐµÑ€Ñ…Ð½ÑÑ ÑÑ‚ÑƒÐ¿ÐµÐ½ÑŒ Ð½Ð° 1 Ð¿Ð¾Ð´ÑÑ‚ÑƒÐ¿Ñ‘Ð½Ð¾Ðº Ð½Ð¸Ð¶Ðµ Ð¿ÐµÑ€ÐµÐºÑ€Ñ‹Ñ‚Ð¸Ñ (ÐŸÑ€Ð¾ÑÑ‚ÑƒÐ¿ÐµÐ¹ = ÐŸÐ¾Ð´ÑÑ‚ÑƒÐ¿Ñ‘Ð½ÐºÐ¾Ð² âˆ’ 1)',
          'flush-top': 'Ð’Ñ€Ð¾Ð²ÐµÐ½ÑŒ â€” Ð’ÐµÑ€Ñ…Ð½ÑÑ ÑÑ‚ÑƒÐ¿ÐµÐ½ÑŒ Ð½Ð° ÑƒÑ€Ð¾Ð²Ð½Ðµ Ð¿ÐµÑ€ÐµÐºÑ€Ñ‹Ñ‚Ð¸Ñ (ÐŸÑ€Ð¾ÑÑ‚ÑƒÐ¿ÐµÐ¹ = ÐŸÐ¾Ð´ÑÑ‚ÑƒÐ¿Ñ‘Ð½ÐºÐ¾Ð²)',
        },
      },
      article: `## Ð Ð°ÑÑ‡Ñ‘Ñ‚ Ð»ÐµÑÑ‚Ð½Ð¸Ñ†Ñ‹: Ð¿Ð¾ÑˆÐ°Ð³Ð¾Ð²Ð¾Ðµ Ñ€ÑƒÐºÐ¾Ð²Ð¾Ð´ÑÑ‚Ð²Ð¾

Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð¾Ð±Ñ‰ÑƒÑŽ Ð²Ñ‹ÑÐ¾Ñ‚Ñƒ Ð¼ÐµÐ¶Ð´Ñƒ ÑÑ‚Ð°Ð¶Ð°Ð¼Ð¸ (Ð·Ð°Ð¼ÐµÑ€ÐµÐ½Ð½ÑƒÑŽ Ð½Ð° Ð¾Ð±ÑŠÐµÐºÑ‚Ðµ) Ð¸ Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÑÐµÐ¼ÑƒÑŽ Ð½Ð¾Ñ€Ð¼Ñƒ. ÐšÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€ Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¸ Ð²Ñ‹Ñ‡Ð¸ÑÐ»Ð¸Ñ‚ Ñ‡Ð¸ÑÐ»Ð¾ ÑÑ‚ÑƒÐ¿ÐµÐ½ÐµÐ¹, Ñ‚Ð¾Ñ‡Ð½ÑƒÑŽ Ð²Ñ‹ÑÐ¾Ñ‚Ñƒ Ð¿Ð¾Ð´ÑÑ‚ÑƒÐ¿Ñ‘Ð½ÐºÐ° Ð¸ Ð³Ð»ÑƒÐ±Ð¸Ð½Ñƒ Ð¿Ñ€Ð¾ÑÑ‚ÑƒÐ¿Ð¸.

### ÐšÐ»ÑŽÑ‡ÐµÐ²Ñ‹Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ
- **ÐžÐ±Ñ‰Ð°Ñ Ð²Ñ‹ÑÐ¾Ñ‚Ð°:** Ð˜Ð·Ð¼ÐµÑ€ÑÐ¹Ñ‚Ðµ Ð¾Ñ‚ Ñ‡Ð¸ÑÑ‚Ð¾Ð³Ð¾ Ð¿Ð¾Ð»Ð° Ð½Ð¸Ð¶Ð½ÐµÐ³Ð¾ Ð´Ð¾ Ð²ÐµÑ€Ñ…Ð½ÐµÐ³Ð¾.
- **Ð˜Ð´ÐµÐ°Ð»ÑŒÐ½Ñ‹Ð¹ ÑƒÐ³Ð¾Ð»:** 30Â°â€“37Â° Ð´Ð»Ñ Ð¼Ð°ÐºÑÐ¸Ð¼Ð°Ð»ÑŒÐ½Ð¾Ð³Ð¾ ÑƒÐ´Ð¾Ð±ÑÑ‚Ð²Ð° Ð¿Ð¾Ð´ÑŠÑ‘Ð¼Ð°.
- **ÐŸÑ€Ð°Ð²Ð¸Ð»Ð¾ Ð‘Ð»Ð¾Ð½Ð´ÐµÐ»Ñ:** 2 Ã— ÐŸÐ¾Ð´ÑÑ‚ÑƒÐ¿Ñ‘Ð½Ð¾Ðº + ÐŸÑ€Ð¾ÑÑ‚ÑƒÐ¿ÑŒ = 59â€“65 ÑÐ¼.
`,
    },

    tr: {
      name: 'Merdiven Hesaplama',
      shortDescription: 'IRC ve IBC standartlarÄ±na uygun adÄ±m yÃ¼ksekliÄŸi, basamak sayÄ±sÄ±, basamak derinliÄŸi, kiriÅŸi uzunluÄŸu ve eÄŸim aÃ§Ä±sÄ± hesaplayÄ±n.',
      helpTexts: {
        totalRise: 'Alt bitmiÅŸ dÃ¶ÅŸeme ile Ã¼st bitmiÅŸ dÃ¶ÅŸeme arasÄ±ndaki toplam dikey yÃ¼kseklik.',
        buildingCode: 'IRC konut (maks. 7Â¾" yÃ¼kseltme) veya IBC ticari (maks. 7").',
        targetRiserHeight: 'AdÄ±m baÅŸÄ±na hedeflenen yÃ¼kseltme yÃ¼ksekliÄŸi (ideal 17â€“19 cm).',
        targetTreadDepth: 'Ã‡Ä±kÄ±ntÄ± dahil edilmeksizin her adÄ±mÄ±n yatay derinliÄŸi (min. 25,4 cm IRC).',
        stairWidth: 'Merdiven aÃ§Ä±k geniÅŸliÄŸi (IRC Â§R311.7.1: min. 91 cm).',
        mountingStyle: 'Standart: Ã¼stteki basamak, Ã¼st dÃ¶ÅŸemenin bir yÃ¼kseltme altÄ±ndadÄ±r.',
        nosingLength: 'Basamak burnunun yÃ¼kseltme Ã¼zerindeki Ã§Ä±kÄ±ntÄ±sÄ± (IRC: 19â€“32 mm).',
        stringerSpacing: 'KiriÅŸi aralÄ±ÄŸÄ± (genellikle ahÅŸap basamaklar iÃ§in 40 cm eksen-eksen).',
        floorJoistThickness: 'Ãœst dÃ¶ÅŸeme toplam kalÄ±nlÄ±ÄŸÄ±. DÃ¶ÅŸeme aÃ§Ä±klÄ±ÄŸÄ± hesabÄ±nda kullanÄ±lÄ±r.',
        minHeadroom: 'Minimum dikey temiz yÃ¼kseklik (IRC Â§R311.7.2: min. 2,03 m / 80 inÃ§).',
        pricePerStep: 'Ä°steÄŸe baÄŸlÄ± â€” toplam maliyet tahmini iÃ§in basamak baÅŸÄ±na maliyet.',
        currency: 'Maliyet tahmini iÃ§in yerel para biriminizi seÃ§in.',
      },
      options: {
        buildingCode: {
          'irc-residential': 'IRC Konut StandardÄ± (Maks. 7Â¾" yÃ¼kseltme, Min. 10" basamak)',
          'ibc-commercial': 'IBC Ticari Standart (Maks. 7" yÃ¼kseltme, Min. 11" basamak)',
          'custom': 'Ã–zel / Kod kÄ±sÄ±tlamasÄ± yok',
        },
        mountingStyle: {
          'down-one-riser': 'Standart â€” Ãœstteki basamak 1 yÃ¼kseltme aÅŸaÄŸÄ±da (Basamak = YÃ¼kseltme âˆ’ 1)',
          'flush-top': 'DÃ¼z â€” Ãœstteki basamak dÃ¶ÅŸeme seviyesinde (Basamak = YÃ¼kseltme)',
        },
      },
      article: `## Merdiven NasÄ±l HesaplanÄ±r: AdÄ±m AdÄ±m

Kat yÃ¼ksekliÄŸini (ÅŸantiyede Ã¶lÃ§Ã¼len) ve geÃ§erli standardÄ± girin. Hesap makinesi otomatik olarak basamak sayÄ±sÄ±nÄ±, yÃ¼kseltme yÃ¼ksekliÄŸini ve basamak derinliÄŸini belirler.

### Temel DeÄŸerler
- **Toplam yÃ¼kseklik:** Alt bitmiÅŸ dÃ¶ÅŸemeden Ã¼st dÃ¶ÅŸemeye Ã¶lÃ§Ã¼n.
- **Ä°deal aÃ§Ä±:** Maksimum ergonomik konfor iÃ§in 30Â°â€“37Â°.
- **Blondel kuralÄ±:** 2 Ã— YÃ¼kseltme + Basamak = 59â€“65 cm.
`,
    },

    ar: {
      name: 'Ø­Ø§Ø³Ø¨Ø© Ø§Ù„Ø¯Ø±Ø¬',
      shortDescription: 'Ø§Ø­Ø³Ø¨ Ø§Ø±ØªÙØ§Ø¹ Ø§Ù„Ø¯Ø±Ø¬Ø©ØŒ Ø¹Ø¯Ø¯ Ø§Ù„Ø¯Ø±Ø¬Ø§ØªØŒ Ø¹Ù…Ù‚ Ø§Ù„Ù†Ø§Ø¦Ù…Ø©ØŒ Ø·ÙˆÙ„ Ø§Ù„Ø­Ø§Ù…Ù„ ÙˆØ²Ø§ÙˆÙŠØ© Ø§Ù„Ù…ÙŠÙ„ ÙˆÙÙ‚ Ù…Ø¹Ø§ÙŠÙŠØ± IRC ÙˆIBC.',
      helpTexts: {
        totalRise: 'Ø§Ù„Ø§Ø±ØªÙØ§Ø¹ Ø§Ù„Ø±Ø£Ø³ÙŠ Ø§Ù„ÙƒÙ„ÙŠ Ø¨ÙŠÙ† Ø§Ù„Ø£Ø±Ø¶ÙŠØ© Ø§Ù„Ù…Ø´Ø·Ø¨Ø© Ø§Ù„Ø³ÙÙ„ÙŠØ© ÙˆØ§Ù„Ø¹Ù„ÙˆÙŠØ©.',
        buildingCode: 'IRC Ø³ÙƒÙ†ÙŠ (Ø§Ø±ØªÙØ§Ø¹ Ù‚Ø§Ø·Ø¹ Ù…Ù‚Ø¯Ø§Ø± 7Â¾") Ø£Ùˆ IBC ØªØ¬Ø§Ø±ÙŠ (Ù…Ù‚Ø¯Ø§Ø± 7").',
        targetRiserHeight: 'Ø§Ù„Ø§Ø±ØªÙØ§Ø¹ Ø§Ù„Ù…Ø³ØªÙ‡Ø¯Ù Ù„ÙƒÙ„ Ø¯Ø±Ø¬Ø© (Ø§Ù„Ù…Ø«Ø§Ù„ÙŠ 17â€“19 Ø³Ù…).',
        targetTreadDepth: 'Ø§Ù„Ø¹Ù…Ù‚ Ø§Ù„Ø£ÙÙ‚ÙŠ Ù„Ù„Ù†Ø§Ø¦Ù…Ø© Ø¯ÙˆÙ† Ø­Ø³Ø§Ø¨ Ø§Ù„Ø¨Ø±ÙˆØ² (Ø§Ù„Ø­Ø¯ Ø§Ù„Ø£Ø¯Ù†Ù‰ 25.4 Ø³Ù… IRC).',
        stairWidth: "Ø¹Ø±Ø¶ Ø§Ù„Ø³Ù„Ù… Ø§Ù„ØµØ§ÙÙŠ (Ø§Ù„Ø­Ø¯ Ø§Ù„Ø£Ø¯Ù†Ù‰ 91 Ø³Ù… ÙˆÙÙ‚ IRC Â§R311.7.1).",
        mountingStyle: "Ø§Ù„Ù…Ø¹ÙŠØ§Ø± Ø§Ù„Ø³ÙƒÙ†ÙŠ: Ø¢Ø®Ø± Ø¯Ø±Ø¬Ø© ØªÙƒÙˆÙ† Ø¯Ø±Ø¬Ø© Ù‚Ø§Ø·Ø¹ ÙˆØ§Ø­Ø¯Ø© Ø£Ø³ÙÙ„ Ø§Ù„Ø³Ù‚Ù Ø§Ù„Ø¹Ù„ÙˆÙŠ.",
        nosingLength: 'Ø¨Ø±ÙˆØ² Ø­Ø§ÙØ© Ø§Ù„Ù†Ø§Ø¦Ù…Ø© Ø¹Ù„Ù‰ Ø§Ù„Ù‚Ø§Ø·Ø¹ (IRC: 19â€“32 Ù…Ù…).',
        stringerSpacing: 'Ø§Ù„Ù…Ø³Ø§ÙØ© Ø¨ÙŠÙ† Ø§Ù„Ø­ÙˆØ§Ù…Ù„ (Ø¹Ø§Ø¯Ø©Ù‹ 40 Ø³Ù… Ù„Ù„Ù†Ø§Ø¦Ù…Ø§Øª Ø§Ù„Ø®Ø´Ø¨ÙŠØ©).',
        floorJoistThickness: 'Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ø³ÙÙ…Ùƒ Ø§Ù„Ø¨Ù„Ø§Ø·Ø© Ø§Ù„Ø¹Ù„ÙˆÙŠØ©. ÙŠÙØ³ØªØ®Ø¯Ù… Ù„Ø­Ø³Ø§Ø¨ ÙØªØ­Ø© Ø§Ù„Ø³Ù‚Ù.',
        minHeadroom: 'Ø§Ù„Ø§Ø±ØªÙØ§Ø¹ Ø§Ù„Ø­Ø± Ø§Ù„Ø£Ø¯Ù†Ù‰ Ø§Ù„Ù…Ø·Ù„ÙˆØ¨ (IRC Â§R311.7.2: 2.03 Ù… / 80 Ø¨ÙˆØµØ©).',
        pricePerStep: 'Ø§Ø®ØªÙŠØ§Ø±ÙŠ â€” Ø§Ù„ØªÙƒÙ„ÙØ© Ø§Ù„ØªÙ‚Ø¯ÙŠØ±ÙŠØ© Ù„Ù„Ø¯Ø±Ø¬Ø© Ø§Ù„ÙˆØ§Ø­Ø¯Ø© Ù„Ø­Ø³Ø§Ø¨ Ø§Ù„Ù…ÙŠØ²Ø§Ù†ÙŠØ© Ø§Ù„Ø¥Ø¬Ù…Ø§Ù„ÙŠØ©.',
        currency: 'Ø§Ø®ØªØ± Ø¹Ù…Ù„ØªÙƒ Ø§Ù„Ù…Ø­Ù„ÙŠØ© Ù„ØªÙ‚Ø¯ÙŠØ± Ø§Ù„ØªÙƒÙ„ÙØ©.',
      },
      options: {
        buildingCode: {
          'irc-residential': 'ÙƒÙˆØ¯ IRC Ø§Ù„Ø³ÙƒÙ†ÙŠ (Ø£Ù‚ØµÙ‰ 7Â¾" Ù‚Ø§Ø·Ø¹ØŒ Ø£Ø¯Ù†Ù‰ 10" Ù†Ø§Ø¦Ù…Ø©)',
          'ibc-commercial': 'ÙƒÙˆØ¯ IBC Ø§Ù„ØªØ¬Ø§Ø±ÙŠ (Ø£Ù‚ØµÙ‰ 7" Ù‚Ø§Ø·Ø¹ØŒ Ø£Ø¯Ù†Ù‰ 11" Ù†Ø§Ø¦Ù…Ø©)',
          'custom': 'Ù…Ø®ØµØµ / Ø¨Ø¯ÙˆÙ† Ù‚ÙŠÙˆØ¯ ÙƒÙˆØ¯',
        },
        mountingStyle: {
          'down-one-riser': 'Ù…Ø¹ÙŠØ§Ø±ÙŠ â€” Ø¢Ø®Ø± Ø¯Ø±Ø¬Ø© Ø£Ø³ÙÙ„ Ø§Ù„Ø¨Ù„Ø§Ø·Ø© Ø¨Ù‚Ø§Ø·Ø¹ ÙˆØ§Ø­Ø¯ (Ø§Ù„Ù†Ø§Ø¦Ù…Ø§Øª = Ø§Ù„Ù‚ÙˆØ§Ø·Ø¹ âˆ’ 1)',
          'flush-top': 'Ù…Ø³ØªÙˆÙ â€” Ø¢Ø®Ø± Ø¯Ø±Ø¬Ø© Ø¨Ù…Ø³ØªÙˆÙ‰ Ø§Ù„Ø¨Ù„Ø§Ø·Ø© (Ø§Ù„Ù†Ø§Ø¦Ù…Ø§Øª = Ø§Ù„Ù‚ÙˆØ§Ø·Ø¹)',
        },
      },
      article: `## ÙƒÙŠÙÙŠØ© Ø­Ø³Ø§Ø¨ Ø§Ù„Ø¯Ø±Ø¬ Ø®Ø·ÙˆØ© Ø¨Ø®Ø·ÙˆØ©

Ø£Ø¯Ø®Ù„ Ø§Ù„Ø§Ø±ØªÙØ§Ø¹ Ø§Ù„Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ø¨ÙŠÙ† Ø§Ù„Ø·Ø§Ø¨Ù‚ÙŠÙ† (Ù…Ù‚Ø§Ø³Ø§Ù‹ ÙÙŠ Ø§Ù„Ù…ÙˆÙ‚Ø¹) ÙˆØ§Ù„ÙƒÙˆØ¯ Ø§Ù„Ù…Ø¹Ù…Ø§Ø±ÙŠ Ø§Ù„Ù…Ø·Ø¨ÙŽÙ‘Ù‚. ØªØ­Ø¯Ø¯ Ø§Ù„Ø­Ø§Ø³Ø¨Ø© ØªÙ„Ù‚Ø§Ø¦ÙŠØ§Ù‹ Ø¹Ø¯Ø¯ Ø§Ù„Ø¯Ø±Ø¬Ø§Øª ÙˆØ§Ø±ØªÙØ§Ø¹ Ø§Ù„Ù‚Ø§Ø·Ø¹ Ø§Ù„Ø¯Ù‚ÙŠÙ‚ ÙˆØ¹Ù…Ù‚ Ø§Ù„Ù†Ø§Ø¦Ù…Ø©.

### Ø§Ù„Ù‚ÙŠÙ… Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©
- **Ø§Ù„Ø§Ø±ØªÙØ§Ø¹ Ø§Ù„ÙƒÙ„ÙŠ:** Ù‚ÙØ³ Ù…Ù† Ø§Ù„Ø£Ø±Ø¶ÙŠØ© Ø§Ù„Ù…Ø´Ø·Ø¨Ø© Ø§Ù„Ø³ÙÙ„ÙŠØ© Ø¥Ù„Ù‰ Ø§Ù„Ø¹Ù„ÙˆÙŠØ©.
- **Ø§Ù„Ø²Ø§ÙˆÙŠØ© Ø§Ù„Ù…Ø«Ø§Ù„ÙŠØ©:** Ø¨ÙŠÙ† 30Â° Ùˆ37Â° Ù„Ø£Ù‚ØµÙ‰ Ø±Ø§Ø­Ø© Ø¥Ø±ØºÙˆÙ†ÙˆÙ…ÙŠØ©.
- **Ù‚Ø§Ø¹Ø¯Ø© Ø¨Ù„ÙˆÙ†Ø¯ÙŠÙ„:** 2 Ã— Ø§Ø±ØªÙØ§Ø¹ Ø§Ù„Ù‚Ø§Ø·Ø¹ + Ø¹Ù…Ù‚ Ø§Ù„Ù†Ø§Ø¦Ù…Ø© = 59â€“65 Ø³Ù….
`,
    },

    hi: {
      name: 'à¤¸à¥€à¤¢à¤¼à¥€ à¤•à¥ˆà¤²à¤•à¥à¤²à¥‡à¤Ÿà¤°',
      shortDescription: 'IRC à¤”à¤° IBC à¤•à¥‹à¤¡ à¤…à¤¨à¥à¤ªà¤¾à¤²à¤¨ à¤•à¥‡ à¤¸à¤¾à¤¥ à¤¸à¤Ÿà¥€à¤• à¤°à¤¾à¤‡à¤œà¤¼à¤° à¤Šà¤‚à¤šà¤¾à¤ˆ, à¤¸à¥€à¤¢à¤¼à¤¿à¤¯à¥‹à¤‚ à¤•à¥€ à¤¸à¤‚à¤–à¥à¤¯à¤¾, à¤Ÿà¥à¤°à¥‡à¤¡ à¤—à¤¹à¤°à¤¾à¤ˆ, à¤¸à¥à¤Ÿà¥à¤°à¤¿à¤‚à¤—à¤° à¤²à¤‚à¤¬à¤¾à¤ˆ à¤”à¤° à¤ªà¤¿à¤š à¤•à¥‹à¤£ à¤•à¥€ à¤—à¤£à¤¨à¤¾ à¤•à¤°à¥‡à¤‚à¥¤',
      helpTexts: {
        totalRise: 'à¤¨à¤¿à¤šà¤²à¥€ à¤¤à¥ˆà¤¯à¤¾à¤° à¤®à¤‚à¤œà¤¿à¤² à¤¸à¥‡ à¤Šà¤ªà¤°à¥€ à¤¤à¥ˆà¤¯à¤¾à¤° à¤®à¤‚à¤œà¤¿à¤² à¤¤à¤• à¤•à¥€ à¤•à¥à¤² à¤Šà¤°à¥à¤§à¥à¤µà¤¾à¤§à¤° à¤Šà¤‚à¤šà¤¾à¤ˆà¥¤',
        buildingCode: 'IRC à¤†à¤µà¤¾à¤¸à¥€à¤¯ (à¤…à¤§à¤¿à¤•à¤¤à¤® 7Â¾" à¤°à¤¾à¤‡à¤œà¤¼à¤°) à¤¯à¤¾ IBC à¤µà¤¾à¤£à¤¿à¤œà¥à¤¯à¤¿à¤• (à¤…à¤§à¤¿à¤•à¤¤à¤® 7")à¥¤',
        targetRiserHeight: 'à¤ªà¥à¤°à¤¤à¤¿ à¤šà¤°à¤£ à¤²à¤•à¥à¤·à¤¿à¤¤ à¤Šà¤‚à¤šà¤¾à¤ˆ (à¤†à¤¦à¤°à¥à¤¶à¤¤à¤ƒ 17â€“19 à¤¸à¥‡à¤®à¥€)à¥¤',
        targetTreadDepth: 'à¤ªà¥à¤°à¤¤à¥à¤¯à¥‡à¤• à¤šà¤°à¤£ à¤•à¥€ à¤•à¥à¤·à¥ˆà¤¤à¤¿à¤œ à¤—à¤¹à¤°à¤¾à¤ˆ, à¤¨à¥‹à¤œà¤¼à¤¿à¤‚à¤— à¤›à¥‹à¤¡à¤¼à¤•à¤° (IRC: à¤¨à¥à¤¯à¥‚à¤¨à¤¤à¤® 25.4 à¤¸à¥‡à¤®à¥€)à¥¤',
        stairWidth: 'à¤¸à¥€à¤¢à¤¼à¥€ à¤•à¥€ à¤¸à¥à¤µà¤¤à¤‚à¤¤à¥à¤° à¤šà¥Œà¤¡à¤¼à¤¾à¤ˆ (IRC Â§R311.7.1: à¤¨à¥à¤¯à¥‚à¤¨à¤¤à¤® 91 à¤¸à¥‡à¤®à¥€)à¥¤',
        mountingStyle: 'à¤®à¤¾à¤¨à¤•: à¤¶à¥€à¤°à¥à¤· à¤Ÿà¥à¤°à¥‡à¤¡ à¤Šà¤ªà¤°à¥€ à¤›à¤¤ à¤•à¥‡ à¤¸à¥à¤¤à¤° à¤¸à¥‡ à¤à¤• à¤°à¤¾à¤‡à¤œà¤¼à¤° à¤¨à¥€à¤šà¥‡ à¤¹à¥‹à¤¤à¤¾ à¤¹à¥ˆà¥¤',
        nosingLength: 'à¤°à¤¾à¤‡à¤œà¤¼à¤° à¤•à¥‡ à¤Šà¤ªà¤° à¤Ÿà¥à¤°à¥‡à¤¡ à¤•à¤¾ à¤‰à¤­à¤¾à¤° (IRC: 19â€“32 à¤®à¤¿à¤®à¥€)à¥¤',
        stringerSpacing: 'à¤¸à¥à¤Ÿà¥à¤°à¤¿à¤‚à¤—à¤°à¥‹à¤‚ à¤•à¥‡ à¤¬à¥€à¤š à¤•à¥‡à¤‚à¤¦à¥à¤°-à¤¸à¥‡-à¤•à¥‡à¤‚à¤¦à¥à¤° à¤¦à¥‚à¤°à¥€ (à¤¸à¤¾à¤®à¤¾à¤¨à¥à¤¯à¤¤à¤ƒ à¤²à¤•à¤¡à¤¼à¥€ à¤•à¥‡ à¤Ÿà¥à¤°à¥‡à¤¡ à¤•à¥‡ à¤²à¤¿à¤ 40 à¤¸à¥‡à¤®à¥€)à¥¤',
        floorJoistThickness: 'à¤Šà¤ªà¤°à¥€ à¤®à¤‚à¤œà¤¿à¤² à¤•à¥€ à¤•à¥à¤² à¤®à¥‹à¤Ÿà¤¾à¤ˆà¥¤ à¤¸à¥€à¤¢à¤¼à¥€ à¤•à¥‡ à¤Šà¤ªà¤° à¤–à¥à¤²à¤¾à¤ˆ à¤•à¥€ à¤—à¤£à¤¨à¤¾ à¤•à¥‡ à¤²à¤¿à¤à¥¤',
        minHeadroom: 'à¤¨à¥à¤¯à¥‚à¤¨à¤¤à¤® à¤†à¤µà¤¶à¥à¤¯à¤• à¤Šà¤°à¥à¤§à¥à¤µà¤¾à¤§à¤° à¤¨à¤¿à¤•à¤¾à¤¸à¥€ (IRC Â§R311.7.2: à¤¨à¥à¤¯à¥‚à¤¨à¤¤à¤® 2.03 à¤®à¥€ / 80 à¤‡à¤‚à¤š)à¥¤',
        pricePerStep: 'à¤µà¥ˆà¤•à¤²à¥à¤ªà¤¿à¤• â€” à¤•à¥à¤² à¤¸à¥€à¤¢à¤¼à¥€ à¤²à¤¾à¤—à¤¤ à¤…à¤¨à¥à¤®à¤¾à¤¨ à¤•à¥‡ à¤²à¤¿à¤ à¤ªà¥à¤°à¤¤à¤¿ à¤šà¤°à¤£ à¤…à¤¨à¥à¤®à¤¾à¤¨à¤¿à¤¤ à¤²à¤¾à¤—à¤¤à¥¤',
        currency: 'à¤²à¤¾à¤—à¤¤ à¤…à¤¨à¥à¤®à¤¾à¤¨ à¤•à¥‡ à¤²à¤¿à¤ à¤…à¤ªà¤¨à¥€ à¤¸à¥à¤¥à¤¾à¤¨à¥€à¤¯ à¤®à¥à¤¦à¥à¤°à¤¾ à¤šà¥à¤¨à¥‡à¤‚à¥¤',
      },
      options: {
        buildingCode: {
          'irc-residential': 'IRC à¤†à¤µà¤¾à¤¸à¥€à¤¯ à¤•à¥‹à¤¡ (à¤…à¤§à¤¿à¤•à¤¤à¤® 7Â¾" à¤°à¤¾à¤‡à¤œà¤¼à¤°, à¤¨à¥à¤¯à¥‚à¤¨à¤¤à¤® 10" à¤Ÿà¥à¤°à¥‡à¤¡)',
          'ibc-commercial': 'IBC à¤µà¤¾à¤£à¤¿à¤œà¥à¤¯à¤¿à¤• à¤•à¥‹à¤¡ (à¤…à¤§à¤¿à¤•à¤¤à¤® 7" à¤°à¤¾à¤‡à¤œà¤¼à¤°, à¤¨à¥à¤¯à¥‚à¤¨à¤¤à¤® 11" à¤Ÿà¥à¤°à¥‡à¤¡)',
          'custom': 'à¤•à¤¸à¥à¤Ÿà¤® / à¤•à¥‹à¤¡ à¤ªà¥à¤°à¤¤à¤¿à¤¬à¤‚à¤§ à¤•à¥‡ à¤¬à¤¿à¤¨à¤¾',
        },
        mountingStyle: {
          'down-one-riser': 'à¤®à¤¾à¤¨à¤• â€” à¤¶à¥€à¤°à¥à¤· à¤Ÿà¥à¤°à¥‡à¤¡ à¤«à¤°à¥à¤¶ à¤¸à¥‡ 1 à¤°à¤¾à¤‡à¤œà¤¼à¤° à¤¨à¥€à¤šà¥‡ (à¤Ÿà¥à¤°à¥‡à¤¡ = à¤°à¤¾à¤‡à¤œà¤¼à¤° âˆ’ 1)',
          'flush-top': 'à¤«à¥à¤²à¤¶ â€” à¤¶à¥€à¤°à¥à¤· à¤Ÿà¥à¤°à¥‡à¤¡ à¤«à¤°à¥à¤¶ à¤•à¥‡ à¤¬à¤°à¤¾à¤¬à¤° (à¤Ÿà¥à¤°à¥‡à¤¡ = à¤°à¤¾à¤‡à¤œà¤¼à¤°)',
        },
      },
      article: `## à¤¸à¥€à¤¢à¤¼à¥€ à¤•à¥€ à¤—à¤£à¤¨à¤¾ à¤•à¥ˆà¤¸à¥‡ à¤•à¤°à¥‡à¤‚: à¤šà¤°à¤£-à¤¦à¤°-à¤šà¤°à¤£

à¤•à¥à¤² à¤®à¤‚à¤œà¤¿à¤²-à¤¸à¥‡-à¤®à¤‚à¤œà¤¿à¤² à¤Šà¤‚à¤šà¤¾à¤ˆ (à¤¸à¤¾à¤‡à¤Ÿ à¤ªà¤° à¤®à¤¾à¤ªà¥€ à¤—à¤ˆ) à¤”à¤° à¤²à¤¾à¤—à¥‚ à¤¬à¤¿à¤²à¥à¤¡à¤¿à¤‚à¤— à¤•à¥‹à¤¡ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚à¥¤ à¤•à¥ˆà¤²à¤•à¥à¤²à¥‡à¤Ÿà¤° à¤¸à¥à¤µà¤šà¤¾à¤²à¤¿à¤¤ à¤°à¥‚à¤ª à¤¸à¥‡ à¤šà¤°à¤£à¥‹à¤‚ à¤•à¥€ à¤¸à¤‚à¤–à¥à¤¯à¤¾, à¤°à¤¾à¤‡à¤œà¤¼à¤° à¤•à¥€ à¤¸à¤Ÿà¥€à¤• à¤Šà¤‚à¤šà¤¾à¤ˆ à¤”à¤° à¤Ÿà¥à¤°à¥‡à¤¡ à¤•à¥€ à¤—à¤¹à¤°à¤¾à¤ˆ à¤¨à¤¿à¤°à¥à¤§à¤¾à¤°à¤¿à¤¤ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤

### à¤®à¥à¤–à¥à¤¯ à¤®à¤¾à¤¨
- **à¤•à¥à¤² à¤Šà¤‚à¤šà¤¾à¤ˆ:** à¤¤à¥ˆà¤¯à¤¾à¤° à¤¨à¤¿à¤šà¤²à¥€ à¤®à¤‚à¤œà¤¿à¤² à¤¸à¥‡ à¤Šà¤ªà¤°à¥€ à¤®à¤‚à¤œà¤¿à¤² à¤¤à¤• à¤®à¤¾à¤ªà¥‡à¤‚à¥¤
- **à¤†à¤¦à¤°à¥à¤¶ à¤•à¥‹à¤£:** à¤…à¤§à¤¿à¤•à¤¤à¤® à¤à¤°à¥à¤—à¥‹à¤¨à¥‹à¤®à¤¿à¤• à¤†à¤°à¤¾à¤® à¤•à¥‡ à¤²à¤¿à¤ 30Â°â€“37Â°à¥¤
- **à¤¬à¥à¤²à¥‹à¤‚à¤¡à¥‡à¤² à¤¨à¤¿à¤¯à¤®:** 2 Ã— à¤°à¤¾à¤‡à¤œà¤¼à¤° + à¤Ÿà¥à¤°à¥‡à¤¡ = 59â€“65 à¤¸à¥‡à¤®à¥€à¥¤
`,
    },

    zh: {
      name: 'æ¥¼æ¢¯è®¡ç®—å™¨',
      shortDescription: 'ç¬¦åˆIRCå’ŒIBCè§„èŒƒï¼Œè®¡ç®—ç²¾ç¡®è¸¢é¢é«˜åº¦ã€å°é˜¶æ•°é‡ã€è¸é¢æ·±åº¦ã€æ–œæ¢é•¿åº¦å’Œå€¾æ–œè§’åº¦ã€‚',
      helpTexts: {
        totalRise: 'ä¸‹å±‚å®Œæˆé¢åˆ°ä¸Šå±‚å®Œæˆé¢ä¹‹é—´çš„æ€»åž‚ç›´é«˜åº¦ã€‚',
        buildingCode: 'IRCä½å®…è§„èŒƒï¼ˆæœ€å¤§è¸¢é¢7Â¾è‹±å¯¸ï¼‰æˆ–IBCå•†ä¸šè§„èŒƒï¼ˆæœ€å¤§7è‹±å¯¸ï¼‰ã€‚',
        targetRiserHeight: 'æ¯çº§å°é˜¶ç›®æ ‡é«˜åº¦ï¼ˆç†æƒ³èŒƒå›´17â€“19åŽ˜ç±³ï¼‰ã€‚',
        targetTreadDepth: 'æ¯çº§è¸é¢çš„æ°´å¹³æ·±åº¦ï¼Œä¸å«é¼»å£çªå‡ºï¼ˆIRCæœ€å°25.4åŽ˜ç±³ï¼‰ã€‚',
        stairWidth: 'æ¥¼æ¢¯å‡€å®½ï¼ˆIRC Â§R311.7.1è¦æ±‚æœ€å°91åŽ˜ç±³ï¼‰ã€‚',
        mountingStyle: 'æ ‡å‡†ï¼šæœ€é¡¶å±‚è¸é¢ä½ŽäºŽä¸Šå±‚æ¥¼æ¿ä¸€ä¸ªè¸¢é¢é«˜åº¦ã€‚',
        nosingLength: 'è¸é¢é¼»å£è¶…å‡ºè¸¢é¢çš„çªå‡ºé‡ï¼ˆIRCï¼š19â€“32æ¯«ç±³ï¼‰ã€‚',
        stringerSpacing: 'æ–œæ¢é—´è·ï¼ˆæœ¨è¸é¢é€šå¸¸ä¸º40åŽ˜ç±³ä¸­åˆ°ä¸­ï¼‰ã€‚',
        floorJoistThickness: 'ä¸Šå±‚æ¥¼æ¿æ€»åŽšåº¦ã€‚ç”¨äºŽè®¡ç®—æ¥¼æ¢¯å¼€å£å°ºå¯¸ã€‚',
        minHeadroom: 'æœ€å°å‡€ç©ºé«˜åº¦ï¼ˆIRC Â§R311.7.2ï¼šæœ€å°2.03ç±³/80è‹±å¯¸ï¼‰ã€‚',
        pricePerStep: 'å¯é€‰â€”â€”æ¯çº§å°é˜¶çš„ä¼°ç®—æˆæœ¬ï¼Œç”¨äºŽè®¡ç®—æ€»è´¹ç”¨ã€‚',
        currency: 'é€‰æ‹©æ‚¨çš„æœ¬åœ°è´§å¸ä»¥ä¼°ç®—æˆæœ¬ã€‚',
      },
      options: {
        buildingCode: {
          'irc-residential': 'IRCä½å®…è§„èŒƒï¼ˆæœ€å¤§7Â¾"è¸¢é¢ï¼Œæœ€å°10"è¸é¢ï¼‰',
          'ibc-commercial': 'IBCå•†ä¸šè§„èŒƒï¼ˆæœ€å¤§7"è¸¢é¢ï¼Œæœ€å°11"è¸é¢ï¼‰',
          'custom': 'è‡ªå®šä¹‰/æ— è§„èŒƒé™åˆ¶',
        },
        mountingStyle: {
          'down-one-riser': 'æ ‡å‡†å¼â€”â€”é¡¶å±‚è¸é¢ä½ŽäºŽæ¥¼æ¿ä¸€ä¸ªè¸¢é¢ï¼ˆè¸é¢æ•° = è¸¢é¢æ•° âˆ’ 1ï¼‰',
          'flush-top': 'å¹³é½å¼â€”â€”é¡¶å±‚è¸é¢ä¸Žæ¥¼æ¿é½å¹³ï¼ˆè¸é¢æ•° = è¸¢é¢æ•°ï¼‰',
        },
      },
      article: `## æ¥¼æ¢¯è®¡ç®—æ­¥éª¤æŒ‡å—

è¾“å…¥æ¥¼å±‚å‡€é«˜ï¼ˆçŽ°åœºå®žæµ‹ï¼‰å’Œé€‚ç”¨å»ºç­‘è§„èŒƒï¼Œè®¡ç®—å™¨å°†è‡ªåŠ¨ç¡®å®šå°é˜¶æ•°é‡ã€è¸¢é¢ç²¾ç¡®é«˜åº¦å’Œè¸é¢æ·±åº¦ã€‚

### å…³é”®å‚æ•°
- **æ€»é«˜åº¦ï¼š** ä»Žä¸‹å±‚å®Œæˆé¢é‡è‡³ä¸Šå±‚å®Œæˆé¢ã€‚
- **ç†æƒ³è§’åº¦ï¼š** 30Â°â€“37Â°ï¼Œæœ€ä½³äººä½“å·¥ç¨‹å­¦èˆ’é€‚åº¦ã€‚
- **å¸ƒéš†ä»£å°”å…¬å¼ï¼š** 2 Ã— è¸¢é¢ + è¸é¢ = 59â€“65åŽ˜ç±³ã€‚
`,
    },

    ja: {
      name: 'éšŽæ®µè¨ˆç®—æ©Ÿ',
      shortDescription: 'IRCãƒ»IBCåŸºæº–ã«æº–æ‹ ã—ãŸéšŽæ®µè¨­è¨ˆã€‚è¹´ä¸Šã®é«˜ã•ã€æ®µæ•°ã€è¸é¢ã®å¥¥è¡Œãã€å´æ¡ã®æ–œã‚é•·ã•ã€å‹¾é…è§’åº¦ã‚’è‡ªå‹•è¨ˆç®—ã—ã¾ã™ã€‚',
      helpTexts: {
        totalRise: 'ä¸‹éšŽä»•ä¸Šã’åºŠé¢ã‹ã‚‰ä¸ŠéšŽä»•ä¸Šã’åºŠé¢ã¾ã§ã®ç·åž‚ç›´é«˜ã•ã€‚',
        buildingCode: 'IRCä½å±…ç”¨ï¼ˆè¹´ä¸Šæœ€å¤§7Â¾"ï¼‰ã¾ãŸã¯IBCå•†æ¥­ç”¨ï¼ˆæœ€å¤§7"ï¼‰ã€‚',
        targetRiserHeight: 'ã‚¹ãƒ†ãƒƒãƒ—ã‚ãŸã‚Šã®ç›®æ¨™è¹´ä¸Šé«˜ã•ï¼ˆç†æƒ³ï¼š17ã€œ19 cmï¼‰ã€‚',
        targetTreadDepth: 'ãƒŽãƒ¼ã‚ºã‚’å«ã¾ãªã„è¸é¢ã®æ°´å¹³å¥¥è¡Œãï¼ˆIRCæœ€å°25.4 cmï¼‰ã€‚',
        stairWidth: 'éšŽæ®µã®æœ‰åŠ¹å¹…ï¼ˆIRC Â§R311.7.1ï¼šæœ€å°91 cmï¼‰ã€‚',
        mountingStyle: "æ¨™æº–ï¼šæœ€ä¸Šæ®µã®è¸é¢ã¯ä¸ŠéšŽåºŠé¢ã‚ˆã‚Šè¹´ä¸Š1æ®µåˆ†ä¸‹ãŒã‚Šã¾ã™ã€‚",
        nosingLength: 'è¸é¢ãŒè¹´è¾¼ã¿æ¿ã‹ã‚‰çªãå‡ºã™é•·ã•ï¼ˆIRCï¼š19ã€œ32 mmï¼‰ã€‚',
        stringerSpacing: 'å´æ¡ã®èŠ¯ã€…é–“éš”ï¼ˆæœ¨è£½è¸æ¿ã®å ´åˆã€ä¸€èˆ¬çš„ã«40 cmï¼‰ã€‚',
        floorJoistThickness: 'ä¸ŠéšŽåºŠã®ç·åŽšã•ã€‚éšŽæ®µã‚¦ã‚§ãƒ«é–‹å£ã®è¨ˆç®—ã«ä½¿ç”¨ã—ã¾ã™ã€‚',
        minHeadroom: 'æœ€å°å¿…è¦é ­ä¸Šç©ºé–“ï¼ˆIRC Â§R311.7.2ï¼šæœ€å°2.03 m / 80 inï¼‰ã€‚',
        pricePerStep: 'ä»»æ„ â€” ç·è²»ç”¨ã‚’è¦‹ç©ã‚‚ã‚‹ãŸã‚ã®ã‚¹ãƒ†ãƒƒãƒ—ã‚ãŸã‚Šã®æ¦‚ç®—è²»ç”¨ã€‚',
        currency: 'ã‚³ã‚¹ãƒˆè¦‹ç©ã‚‚ã‚Šã®é€šè²¨ã‚’é¸æŠžã—ã¦ãã ã•ã„ã€‚',
      },
      options: {
        buildingCode: {
          'irc-residential': 'IRC ä½å±…ç”¨åŸºæº–ï¼ˆè¹´ä¸Šæœ€å¤§7Â¾"ã€è¸é¢æœ€å°10"ï¼‰',
          'ibc-commercial': 'IBC å•†æ¥­ç”¨åŸºæº–ï¼ˆè¹´ä¸Šæœ€å¤§7"ã€è¸é¢æœ€å°11"ï¼‰',
          'custom': 'ã‚«ã‚¹ã‚¿ãƒ  / è¦æ ¼ãªã—',
        },
        mountingStyle: {
          'down-one-riser': 'æ¨™æº– â€” æœ€ä¸Šæ®µã¯åºŠé¢ã‚ˆã‚Šè¹´ä¸Š1æ®µåˆ†ä½Žã„ï¼ˆè¸æ¿æ•° = è¹´ä¸Šæ•° âˆ’ 1ï¼‰',
          'flush-top': 'ãƒ•ãƒ©ãƒƒã‚·ãƒ¥ â€” æœ€ä¸Šæ®µãŒåºŠé¢ã¨åŒã˜é«˜ã•ï¼ˆè¸æ¿æ•° = è¹´ä¸Šæ•°ï¼‰',
        },
      },
      article: `## éšŽæ®µã®è¨ˆç®—æ–¹æ³•ï¼šã‚¹ãƒ†ãƒƒãƒ—ãƒã‚¤ã‚¹ãƒ†ãƒƒãƒ—

ãƒ•ãƒ­ã‚¢é–“ã®ç·é«˜ã•ï¼ˆç¾å ´ã§å®Ÿæ¸¬ï¼‰ã¨é©ç”¨åŸºæº–ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚è¨ˆç®—æ©ŸãŒè‡ªå‹•çš„ã«æ®µæ•°ã€æ­£ç¢ºãªè¹´ä¸Šé«˜ã•ã€è¸é¢ã®å¥¥è¡Œãã‚’ç®—å‡ºã—ã¾ã™ã€‚

### ä¸»è¦ãªå€¤
- **ç·é«˜ã•ï¼š** ä¸‹éšŽä»•ä¸Šã’åºŠã‹ã‚‰ä¸ŠéšŽä»•ä¸Šã’åºŠã¾ã§è¨ˆæ¸¬ã—ã¾ã™ã€‚
- **ç†æƒ³çš„ãªè§’åº¦ï¼š** æœ€å¤§ã®ã‚¨ãƒ«ã‚´ãƒŽãƒŸã‚¯ã‚¹å¿«é©æ€§ã®ãŸã‚ã«30Â°ã€œ37Â°ã€‚
- **ãƒ–ãƒ­ãƒ³ãƒ‡ãƒ«ã®å¼ï¼š** 2 Ã— è¹´ä¸Š + è¸é¢ = 59ã€œ65 cmã€‚
`,
    },

    ko: {
      name: 'ê³„ë‹¨ ê³„ì‚°ê¸°',
      shortDescription: 'IRC ë° IBC ê·œì •ì„ ì¤€ìˆ˜í•˜ì—¬ ì •í™•í•œ ì±ŒíŒ ë†’ì´, ë‹¨ìˆ˜, ë””ë”¤íŒ ê¹Šì´, ê³„ë‹¨ ê²½ì‚¬ìž¬ ê¸¸ì´ ë° ê¸°ìš¸ê¸° ê°ë„ë¥¼ ê³„ì‚°í•©ë‹ˆë‹¤.',
      helpTexts: {
        totalRise: 'í•˜ë¶€ ì™„ì„± ë°”ë‹¥ë©´ì—ì„œ ìƒë¶€ ì™„ì„± ë°”ë‹¥ë©´ê¹Œì§€ì˜ ì´ ìˆ˜ì§ ë†’ì´.',
        buildingCode: 'IRC ì£¼ê±°ìš© (ìµœëŒ€ ì±ŒíŒ 7Â¾") ë˜ëŠ” IBC ìƒì—…ìš© (ìµœëŒ€ 7").',
        targetRiserHeight: 'ê³„ë‹¨ë‹¹ ëª©í‘œ ì±ŒíŒ ë†’ì´ (ì´ìƒì  ë²”ìœ„: 17â€“19 cm).',
        targetTreadDepth: 'ì½” ëŒì¶œë¶€ë¥¼ ì œì™¸í•œ ë””ë”¤íŒì˜ ìˆ˜í‰ ê¹Šì´ (IRC ìµœì†Œ 25.4 cm).',
        stairWidth: 'ê³„ë‹¨ì˜ ìœ íš¨ í­ (IRC Â§R311.7.1: ìµœì†Œ 91 cm).',
        mountingStyle: 'í‘œì¤€: ìµœìƒë‹¨ ë””ë”¤íŒì€ ìƒë¶€ ìŠ¬ëž˜ë¸Œë³´ë‹¤ ì±ŒíŒ 1ê°œ ë†’ì´ë§Œí¼ ë‚®ìŠµë‹ˆë‹¤.',
        nosingLength: 'ì±ŒíŒ ìœ„ë¡œ ëŒì¶œëœ ë””ë”¤íŒì˜ ì½” ê¸¸ì´ (IRC: 19â€“32 mm).',
        stringerSpacing: 'ê²½ì‚¬ìž¬ ê°„ê²© (ëª©ìž¬ ë””ë”¤íŒì˜ ê²½ìš° ì¼ë°˜ì ìœ¼ë¡œ 40 cm ì¤‘ì‹¬ê°„ê²©).',
        floorJoistThickness: 'ìƒë¶€ ìŠ¬ëž˜ë¸Œì˜ ì´ ë‘ê»˜. ê³„ë‹¨ì‹¤ ê°œêµ¬ë¶€ ê³„ì‚°ì— ì‚¬ìš©ë©ë‹ˆë‹¤.',
        minHeadroom: 'ìµœì†Œ í•„ìš” ì²œìž¥ ë†’ì´ (IRC Â§R311.7.2: ìµœì†Œ 2.03 m / 80 in).',
        pricePerStep: 'ì„ íƒì‚¬í•­ â€” ì´ ë¹„ìš© ì¶”ì •ì„ ìœ„í•œ ë‹¨ë‹¹ ì˜ˆìƒ ë¹„ìš©.',
        currency: 'ë¹„ìš© ì¶”ì •ì„ ìœ„í•œ í˜„ì§€ í†µí™”ë¥¼ ì„ íƒí•˜ì„¸ìš”.',
      },
      options: {
        buildingCode: {
          'irc-residential': 'IRC ì£¼ê±°ìš© ê¸°ì¤€ (ìµœëŒ€ ì±ŒíŒ 7Â¾", ìµœì†Œ ë””ë”¤íŒ 10")',
          'ibc-commercial': 'IBC ìƒì—…ìš© ê¸°ì¤€ (ìµœëŒ€ ì±ŒíŒ 7", ìµœì†Œ ë””ë”¤íŒ 11")',
          'custom': 'ì‚¬ìš©ìž ì§€ì • / ê·œì • ì œí•œ ì—†ìŒ',
        },
        mountingStyle: {
          'down-one-riser': 'í‘œì¤€ â€” ìµœìƒë‹¨ ë””ë”¤íŒì´ ìŠ¬ëž˜ë¸Œë³´ë‹¤ ì±ŒíŒ 1ê°œ ë‚®ìŒ (ë””ë”¤íŒ ìˆ˜ = ì±ŒíŒ ìˆ˜ âˆ’ 1)',
          'flush-top': 'í”ŒëŸ¬ì‹œ â€” ìµœìƒë‹¨ ë””ë”¤íŒì´ ìŠ¬ëž˜ë¸Œì™€ ë™ì¼ ë ˆë²¨ (ë””ë”¤íŒ ìˆ˜ = ì±ŒíŒ ìˆ˜)',
        },
      },
      article: `## ê³„ë‹¨ ê³„ì‚° ë°©ë²•: ë‹¨ê³„ë³„ ê°€ì´ë“œ

ì´ ì¸µê°„ ë†’ì´(í˜„ìž¥ ì‹¤ì¸¡ê°’)ì™€ ì ìš© ê±´ì¶• ê¸°ì¤€ì„ ìž…ë ¥í•˜ì„¸ìš”. ê³„ì‚°ê¸°ê°€ ìžë™ìœ¼ë¡œ ê³„ë‹¨ ìˆ˜, ì •í™•í•œ ì±ŒíŒ ë†’ì´, ë””ë”¤íŒ ê¹Šì´ë¥¼ ì‚°ì¶œí•©ë‹ˆë‹¤.

### í•µì‹¬ ìˆ˜ì¹˜
- **ì´ ë†’ì´:** ì™„ì„±ëœ í•˜ë¶€ ë°”ë‹¥ë©´ì—ì„œ ìƒë¶€ ë°”ë‹¥ë©´ê¹Œì§€ ì¸¡ì •í•©ë‹ˆë‹¤.
- **ì´ìƒì  ê°ë„:** ìµœëŒ€ ì¸ì²´ê³µí•™ì  íŽ¸ì˜ë¥¼ ìœ„í•´ 30Â°â€“37Â°.
- **ë¸”ë¡ ë¸ ê³µì‹:** 2 Ã— ì±ŒíŒ + ë””ë”¤íŒ = 59â€“65 cm.
`,
    },
  },
  'sod-calculator': {
    en: {
      name: 'Sod Calculator',
      shortDescription:
        'Free sod calculator for lawn installation. Calculate sod rolls, pallets, and cost by shape. Estimate waste factor, soil prep, and topsoil for Bermuda, Fescue, Zoysia, and more grass types.',
      helpTexts: {
        shape: 'Select the geometric shape of your lawn area to calculate sod requirements.',
        waste: 'Recommended planning allowance: 5% for simple rectangles, 10% for moderate obstacles, 15% for complex curves.',
        rollSize: 'Standard sod roll = 10 sq ft (e.g. 2ft Ã— 5ft). Confirm with your supplier.',
        rollsPerPallet: 'Standard pallet = 45 rolls (450 sq ft). Varies by supplier.',
        pricePerSqFt: 'Optional â€” enter sod cost per sq ft to estimate material budget.',
        soilDepth: 'Recommended: 3-4 inches of quality topsoil before laying sod.',
        pricePerSoilCuYd: 'Average delivered topsoil cost: $25-$50 per cubic yard.',
      },
      options: {
        shape: {
          rectangle: 'Rectangle / Square (Length Ã— Width)',
          circle: 'Circle (Diameter)',
          triangle: 'Triangle (Base Ã— Height)',
          trapezoid: 'Trapezoid (Base 1 + Base 2 Ã— Height)',
          'l-shape': 'L-Shape (Two Connected Sections)',
          irregular: 'Irregular (Enter Total Area)',
        },
        sodType: {
          bermuda: 'Bermuda Grass (Warm Season)',
          'kentucky-bluegrass': 'Kentucky Bluegrass (Cool Season)',
          fescue: 'Tall Fescue (Transition Zone)',
          zoysia: 'Zoysia Grass (Warm Season)',
          'st-augustine': 'St. Augustine (Warm / Coastal)',
          centipede: 'Centipede Grass (Low Maintenance)',
          bahia: 'Bahia Grass (Drought Tolerant)',
          rye: 'Perennial Rye (Cool / Overseed)',
        },
      },
      article: `## How to Use the Sod Calculator

Select your lawn shape and enter the dimensions in feet (or meters). The calculator automatically computes your total sod area, applies the waste factor, and converts the result into rolls and pallets. Optionally add soil preparation costs for a complete installation estimate.

## Sod Calculation Formula

\`\`\`
1. Area (sq ft)      = Shape-based formula (LÃ—W, Ï€rÂ², etc.)
2. Total Area        = Area Ã— Quantity of identical sections
3. Waste Buffer      = Total Area Ã— (Waste % Ã· 100)
4. Sod to Order      = Total Area + Waste Buffer
5. Rolls Needed      = Ceil(Sod to Order Ã· Roll Size)
6. Pallets Needed    = Ceil(Sod to Order Ã· Pallet Coverage)
\`\`\`

## How Much Sod Do I Need?

| Lawn Size | Area (sq ft) | Rolls (10 sq ft) | Pallets |
|---|---|---|---|
| Small (20Ã—20) | 400 | 44 | 1 |
| Medium (40Ã—30) | 1,200 | 132 | 3 |
| Large (60Ã—40) | 2,400 | 264 | 6 |
| Estate (100Ã—80) | 8,000 | 880 | 20 |

## Sod Cost by Grass Type

| Grass Type | Cost / Sq Ft | Best Climate |
|---|---|---|
| Bermuda | $0.30 â€“ $0.60 | Warm / Southern |
| Kentucky Bluegrass | $0.35 â€“ $0.70 | Cool / Northern |
| Tall Fescue | $0.25 â€“ $0.50 | Transition Zone |
| Zoysia | $0.40 â€“ $0.80 | Warm / Transition |
| St. Augustine | $0.35 â€“ $0.75 | Warm / Coastal |
| Centipede | $0.30 â€“ $0.55 | Warm / Southern |
| Bahia | $0.20 â€“ $0.40 | Warm / Southern |
| Perennial Rye | $0.20 â€“ $0.40 | Cool / Overseed |`,
    },
    es: {
      name: 'Calculadora de CÃ©sped en Tepe (Sod)',
      shortDescription:
        'Calculadora gratuita de cÃ©sped natural en rollos y palets segÃºn la forma del terreno. Estima desperdicio, preparaciÃ³n del suelo y coste para bermuda, festuca, zoysia y mÃ¡s.',
      helpTexts: {
        shape: 'Selecciona la forma geomÃ©trica del jardÃ­n para calcular la superficie exacta de tepes.',
        waste: 'Recomendado: 5% para rectÃ¡ngulos simples, 10% para curvas y obstÃ¡culos, 15% para formas complejas.',
        rollSize: 'Rollo estÃ¡ndar = 10 piesÂ² (aprox. 0.93 mÂ²). Verifica con tu proveedor local.',
        rollsPerPallet: 'Palet estÃ¡ndar = 45 a 50 rollos (450-500 piesÂ²).',
        pricePerSqFt: 'Opcional: introduce el precio por pieÂ² o mÂ² para calcular el presupuesto.',
        soilDepth: 'Recomendado: 3 a 4 pulgadas (7.5-10 cm) de tierra vegetal de calidad antes de plantar.',
        pricePerSoilCuYd: 'Coste medio de tierra vegetal cribada por yarda cÃºbica o mÂ³.',
      },
      options: {
        shape: {
          rectangle: 'RectÃ¡ngulo / Cuadrado (Largo Ã— Ancho)',
          circle: 'CÃ­rculo (DiÃ¡metro)',
          triangle: 'TriÃ¡ngulo (Base Ã— Altura)',
          trapezoid: 'Trapecio (Base 1 + Base 2 Ã— Altura)',
          'l-shape': 'Forma en L (Dos secciones)',
          irregular: 'Irregular (Ingresar Ã¡rea total)',
        },
        sodType: {
          bermuda: 'Pasto Bermuda (Clima cÃ¡lido)',
          'kentucky-bluegrass': 'Pasto Azul de Kentucky (Clima frÃ­o)',
          fescue: 'Festuca Alta / Tall Fescue (Zona de transiciÃ³n)',
          zoysia: 'Zoysia (CÃ¡lido y sombra parcial)',
          'st-augustine': 'San AgustÃ­n (CÃ¡lido y costero)',
          centipede: 'CiempiÃ©s / Centipede (Bajo mantenimiento)',
          bahia: 'BahÃ­a (Resistente a sequÃ­as)',
          rye: 'Raygrass Perenne (Clima templado)',
        },
      },
      article: `## CÃ³mo usar la Calculadora de CÃ©sped

Elige la forma de tu terreno e introduce las dimensiones en pies o metros. La calculadora calcularÃ¡ el Ã¡rea exacta, aÃ±adirÃ¡ el porcentaje de desperdicio y te indicarÃ¡ el nÃºmero necesario de rollos y palets de tepe.

## FÃ³rmulas de CÃ¡lculo

\`\`\`
1. Ãrea neta        = FÃ³rmula geomÃ©trica (Largo Ã— Ancho, etc.)
2. Ãrea total       = Ãrea Ã— Cantidad de secciones idÃ©nticas
3. Margen de corte  = Ãrea total Ã— (% desperdicio Ã· 100)
4. CÃ©sped a pedir   = Ãrea total + Margen de corte
5. Rollos totales   = Techo(CÃ©sped a pedir Ã· Cobertura del rollo)
6. Palets totales   = Techo(CÃ©sped a pedir Ã· Cobertura del palet)
\`\`\`

## GuÃ­a de EstimaciÃ³n de Rollos y Palets

| TamaÃ±o del JardÃ­n | Ãrea aprox. | Rollos (10 sq ft) | Palets (450 sq ft) |
|---|---|---|---|
| PequeÃ±o (6Ã—6 m / 20Ã—20 ft) | 400 sq ft | 44 | 1 |
| Mediano (12Ã—9 m / 40Ã—30 ft) | 1,200 sq ft | 132 | 3 |
| Grande (18Ã—12 m / 60Ã—40 ft) | 2,400 sq ft | 264 | 6 |
| Finca / Amplio (30Ã—24 m) | 8,000 sq ft | 880 | 20 |`,
    },
    fr: {
      name: 'Calculateur de Gazon en Rouleau (Plaque)',
      shortDescription:
        'Calculez le nombre de rouleaux et de palettes de gazon naturel nÃ©cessaires selon la forme de votre terrain, avec prÃ©paration du sol et estimation des coÃ»ts.',
      helpTexts: {
        shape: 'SÃ©lectionnez la forme gÃ©omÃ©trique de votre pelouse pour un calcul prÃ©cis.',
        waste: 'RecommandÃ© : 5% pour un rectangle simple, 10% pour un terrain avec obstacles, 15% pour les formes complexes.',
        rollSize: 'Rouleau standard = 10 piÂ² (environ 0.93 mÂ²). VÃ©rifiez auprÃ¨s de votre gazonniÃ¨re.',
        rollsPerPallet: 'Palette standard = 45 Ã  50 rouleaux (environ 40 Ã  45 mÂ²).',
        pricePerSqFt: 'Optionnel â€” prix unitaire par piÂ² ou mÂ² pour estimer le budget total.',
        soilDepth: 'RecommandÃ© : 7 Ã  10 cm de bonne terre vÃ©gÃ©tale avant la pose du gazon.',
        pricePerSoilCuYd: 'Prix moyen de la terre vÃ©gÃ©tale livrÃ©e au mÃ¨tre cube ou verge cube.',
      },
      options: {
        shape: {
          rectangle: 'Rectangle / CarrÃ© (Longueur Ã— Largeur)',
          circle: 'Cercle (DiamÃ¨tre)',
          triangle: 'Triangle (Base Ã— Hauteur)',
          trapezoid: 'TrapÃ¨ze (Base 1 + Base 2 Ã— Hauteur)',
          'l-shape': 'Forme en L (Deux zones reliÃ©es)',
          irregular: 'IrrÃ©gulier (Saisir la surface totale)',
        },
        sodType: {
          bermuda: 'Herbe des Bermudes (Climat chaud)',
          'kentucky-bluegrass': 'PÃ¢turin des prÃ©s (Climat tempÃ©rÃ©/froid)',
          fescue: 'FÃ©tuque Ã©levÃ©e (TrÃ¨s rÃ©sistante)',
          zoysia: 'Zoysia (Chaud et mi-ombre)',
          'st-augustine': 'Herbe de Saint-Augustin (CÃ´tier / Chaud)',
          centipede: 'Herbe mille-pattes (Peu dâ€™entretien)',
          bahia: 'Herbe Bahia (RÃ©sistante Ã  la sÃ©cheresse)',
          rye: 'Ray-grass anglais (Pousse rapide)',
        },
      },
      article: `## Comment utiliser le calculateur de gazon en rouleau

SÃ©lectionnez la configuration de votre jardin, saisissez vos mesures et obtenez instantanÃ©ment le nombre exact de rouleaux de gazon, de palettes ainsi que le volume de terreau ou terre vÃ©gÃ©tale nÃ©cessaire.

## Formule de calcul du gazon

\`\`\`
1. Surface nette     = Longueur Ã— Largeur (ou formule selon forme)
2. Surface totale    = Surface Ã— Nombre de zones identiques
3. Marge de dÃ©coupe  = Surface totale Ã— (% perte Ã· 100)
4. Gazon Ã  commander = Surface totale + Marge de dÃ©coupe
5. Nombre de rouleaux= ArrondiSup(Gazon Ã  commander Ã· Surface rouleau)
6. Nombre de palettes= ArrondiSup(Gazon Ã  commander Ã· Surface palette)
\`\`\``,
    },
    de: {
      name: 'Rollrasen Rechner',
      shortDescription:
        'Kostenloser Rollrasen-Rechner zur Ermittlung von Rollen, Paletten, Verschnitt und Mutterboden fÃ¼r Ihren Garten nach exakten MaÃŸen und Formen.',
      helpTexts: {
        shape: 'WÃ¤hlen Sie die geometrische Form Ihrer RasenflÃ¤che fÃ¼r eine prÃ¤zise Bedarfsberechnung.',
        waste: 'Standard: 5% bei rechteckigen FlÃ¤chen, 10% bei Rundungen und Beeten, 15% bei verwinkelten GÃ¤rten.',
        rollSize: 'Standard-Rolle = ca. 1 mÂ² (bzw. 10 sq ft). Bei Ihrem Lieferanten rÃ¼ckfragen.',
        rollsPerPallet: 'Standard-Palette = ca. 45 bis 50 Rollen (ca. 40-50 mÂ²).',
        pricePerSqFt: 'Optional: Preis pro mÂ² oder sq ft zur Budgetkalkulation.',
        soilDepth: 'Empfohlen: 8-10 cm hochwertiger Mutterboden als Vorbereitung fÃ¼r den Rasen.',
        pricePerSoilCuYd: 'Durchschnittspreis fÃ¼r gesiebten Mutterboden je Kubikmeter.',
      },
      options: {
        shape: {
          rectangle: 'Rechteck / Quadrat (LÃ¤nge Ã— Breite)',
          circle: 'Kreis (Durchmesser)',
          triangle: 'Dreieck (Grundseite Ã— HÃ¶he)',
          trapezoid: 'Trapez (Grundseite 1 + 2 Ã— HÃ¶he)',
          'l-shape': 'L-Form (Zwei verbundene Abschnitte)',
          irregular: 'UnregelmÃ¤ÃŸig (GesamtflÃ¤che direkt eingeben)',
        },
        sodType: {
          bermuda: 'Bermudagras (Warmes Klima)',
          'kentucky-bluegrass': 'Wiesen-Rispengras (Klassischer Spielrasen)',
          fescue: 'Rohrschwingel / Festuca (Trockenheitsresistent)',
          zoysia: 'Zoysiagras (Dicht und trittfest)',
          'st-augustine': 'St. Augustin Gras (KÃ¼stengebiete)',
          centipede: 'TausendfÃ¼ÃŸlergras (Pflegeleicht)',
          bahia: 'Bahiagras (Extrem robust)',
          rye: 'Deutsches Weidelgras (Schnellkeimend)',
        },
      },
      article: `## Rollrasen-Bedarf richtig berechnen

Geben Sie die Abmessungen Ihrer GartenflÃ¤che ein. Der Rechner ermittelt automatisch die benÃ¶tigte Quadratmeterzahl, berÃ¼cksichtigt den Verschnitt fÃ¼r Zuschnitte an RÃ¤ndern und berechnet die Anzahl der Rollen und Paletten.

## Berechnungsformel

\`\`\`
1. Netto-FlÃ¤che     = Formel je nach Grundriss (LÃ¤nge Ã— Breite etc.)
2. GesamtflÃ¤che     = FlÃ¤che Ã— Anzahl gleicher Parzellen
3. Verschnittreserve= GesamtflÃ¤che Ã— (Verschnitt % Ã· 100)
4. Bestellmenge     = GesamtflÃ¤che + Verschnittreserve
5. Rollenanzahl     = Aufrunden(Bestellmenge Ã· RollengrÃ¶ÃŸe)
6. Palettenanzahl   = Aufrunden(Bestellmenge Ã· PalettenkapazitÃ¤t)
\`\`\``,
    },
    pt: {
      name: 'Calculadora de Grama em Placas e Rolos',
      shortDescription:
        'Calcule a quantidade de rolos, placas e paletes de grama natural para o seu jardim. Estime perdas, preparo da terra e custos totais.',
      helpTexts: {
        shape: 'Selecione o formato do terreno para calcular a Ã¡rea de grama necessÃ¡ria.',
        waste: 'PadrÃ£o: 5% para terrenos regulares, 10% para curvas e obstÃ¡culos, 15% para formatos irregulares.',
        rollSize: 'Rolo/Placa padrÃ£o = 10 pÃ©sÂ² (aprox. 0.93 mÂ²). Confirme com o fornecedor.',
        rollsPerPallet: 'Palete padrÃ£o = 45 a 50 rolos ou placas.',
        pricePerSqFt: 'Opcional â€” informe o valor do mÂ² ou sq ft para obter o orÃ§amento estimado.',
        soilDepth: 'Recomendado: 8 a 10 cm de terra preta ou adubada antes do plantio.',
        pricePerSoilCuYd: 'PreÃ§o mÃ©dio da terra preta por metro cÃºbico ou jarda cÃºbica.',
      },
      options: {
        shape: {
          rectangle: 'RetÃ¢ngulo / Quadrado (Comprimento Ã— Largura)',
          circle: 'CÃ­rculo (DiÃ¢metro)',
          triangle: 'TriÃ¢ngulo (Base Ã— Altura)',
          trapezoid: 'TrapÃ©zio (Base 1 + Base 2 Ã— Altura)',
          'l-shape': 'Formato em L (Duas seÃ§Ãµes conectadas)',
          irregular: 'Irregular (Inserir Ã¡rea total)',
        },
        sodType: {
          bermuda: 'Grama Bermuda (Sol pleno e alta resistÃªncia)',
          'kentucky-bluegrass': 'Grama Azul de Kentucky (Clima frio)',
          fescue: 'Festuca Alta (Tolerante Ã  seca)',
          zoysia: 'Grama Esmeralda / Zoysia (Muito densa e versÃ¡til)',
          'st-augustine': 'Grama Santo Agostinho (Resistente Ã  maresia)',
          centipede: 'Grama CentÃ­pede (Baixa manutenÃ§Ã£o)',
          bahia: 'Grama Batatais / Bahia (RÃºstica e resistente)',
          rye: 'AzevÃ©m Perene (RÃ¡pido fechamento)',
        },
      },
      article: `## Como calcular grama em rolos ou placas

Insira as dimensÃµes do seu gramado para calcular a Ã¡rea total necessÃ¡ria. A ferramenta inclui a margem de seguranÃ§a para recortes nos cantos e calcula o nÃºmero de rolos e paletes a encomendar.

## FÃ³rmula de CÃ¡lculo

\`\`\`
1. Ãrea da forma     = FÃ³rmula geomÃ©trica (C Ã— L, etc.)
2. Ãrea total        = Ãrea Ã— Quantidade de Ã¡reas iguais
3. Perda / Recortes  = Ãrea total Ã— (% perda Ã· 100)
4. Grama a comprar   = Ãrea total + Perda
5. Rolos necessÃ¡rios = Teto(Grama a comprar Ã· Tamanho do rolo)
6. Paletes           = Teto(Grama a comprar Ã· Capacidade do palete)
\`\`\``,
    },
    it: {
      name: 'Calcolatore Prato a Zolle (Prato Pronto)',
      shortDescription:
        'Calcola rotoli, bancali e costi per la posa del prato a zolle in base alla geometria del tuo giardino. Include calcolo sfrido e preparazione del terreno.',
      helpTexts: {
        shape: 'Seleziona la forma geometrica del giardino per calcolare i metri quadri necessari.',
        waste: 'Consigliato: 5% per forme rettangolari, 10% per bordi curvi, 15% per giardini complessi.',
        rollSize: 'Rotolo standard = circa 1 mÂ² (o 10 sq ft). Verifica con il produttore.',
        rollsPerPallet: 'Bancale standard = 45-50 rotoli (circa 45-50 mÂ²).',
        pricePerSqFt: 'Opzionale: costo al metro quadro per stimare la spesa totale.',
        soilDepth: 'Raccomandato: 8-10 cm di terriccio di qualitÃ  prima della stesura.',
        pricePerSoilCuYd: 'Costo medio del terriccio al metro cubo o iarda cubica.',
      },
      options: {
        shape: {
          rectangle: 'Rettangolo / Quadrato (Lunghezza Ã— Larghezza)',
          circle: 'Cerchio (Diametro)',
          triangle: 'Triangolo (Base Ã— Altezza)',
          trapezoid: 'Trapezio (Base 1 + Base 2 Ã— Altezza)',
          'l-shape': 'Forma a L (Due sezioni collegate)',
          irregular: 'Irregolare (Inserisci superficie totale)',
        },
        sodType: {
          bermuda: 'Gramigna Indiana / Bermuda (Clima caldo)',
          'kentucky-bluegrass': 'Fienarola dei Prati / Poa pratensis',
          fescue: 'Festuca arundinacea (Resistente al calpestio)',
          zoysia: 'Zoysia (Tappeto fitto e morbido)',
          'st-augustine': 'Gramone / Sant Agostino (Clima marino)',
          centipede: 'Erba Centopiedi (Poca manutenzione)',
          bahia: 'Erba Bahia (Tollerante all ariditÃ )',
          rye: 'Loietto perenne (Crescita rapida)',
        },
      },
      article: `## Guida al calcolo del prato a zolle

Inserisci le misure del tuo giardino per scoprire quanti rotoli e bancali di prato a rotoli ordinare, considerando la percentuale di sfrido per i tagli sui bordi.

## Formule di calcolo

\`\`\`
1. Superficie netta   = Calcolo geometrico (Lunghezza Ã— Larghezza)
2. Superficie totale  = Superficie Ã— Numero di aree
3. Sfrido di taglio   = Superficie totale Ã— (% sfrido Ã· 100)
4. Prato da ordinare  = Superficie totale + Sfrido
5. Rotoli necessari   = ArrotondaPerEccesso(Prato da ordinare Ã· Misura rotolo)
6. Bancali necessari  = ArrotondaPerEccesso(Prato da ordinare Ã· Misura bancale)
\`\`\``,
    },
    nl: {
      name: 'Graszoden Calculator',
      shortDescription:
        'Bereken snel het benodigde aantal graszoden (rollen), pallets en teelaarde voor uw gazon inclusief snijverlies en kosteninschatting.',
      helpTexts: {
        shape: 'Kies de geometrische vorm van uw tuin om de exacte oppervlakte te berekenen.',
        waste: 'Aanbevolen: 5% voor rechte vlakken, 10% voor ronde borders, 15% voor complexe vormen.',
        rollSize: 'Standaard graszode = ca. 1 mÂ² (of 10 sq ft, bijv. 40cm Ã— 250cm).',
        rollsPerPallet: 'Standaard pallet = 45 tot 50 rollen / mÂ².',
        pricePerSqFt: 'Optioneel â€” voer de prijs per mÂ² of sq ft in om de totale materiaalkosten te berekenen.',
        soilDepth: 'Aanbevolen: 8-10 cm bemeste teelaarde/tuingrond als onderlaag.',
        pricePerSoilCuYd: 'Gemiddelde prijs van teelaarde per mÂ³ of kubieke yard.',
      },
      options: {
        shape: {
          rectangle: 'Rechthoek / Vierkant (Lengte Ã— Breedte)',
          circle: 'Cirkel (Diameter)',
          triangle: 'Driehoek (Basis Ã— Hoogte)',
          trapezoid: 'Trapeze (Basis 1 + Base 2 Ã— Hoogte)',
          'l-shape': 'L-Vorm (Twee gekoppelde secties)',
          irregular: 'Onregelmatig (Totale oppervlakte invoeren)',
        },
        sodType: {
          bermuda: 'Bermudagras (Warm klimaat)',
          'kentucky-bluegrass': 'Veldbeemdgras (Klassiek speelgazon)',
          fescue: 'Rietzwenkgras / Fescue (Droogtebestendig)',
          zoysia: 'Zoysiagras (Dichte zode)',
          'st-augustine': 'St. Augustine gras (Kustregio)',
          centipede: 'Duizendpootgras (Onderhoudsarm)',
          bahia: 'Bahiagras (Robuust)',
          rye: 'Engels raaigras (Snelkiemend gazon)',
        },
      },
      article: `## Hoe gebruikt u de graszoden calculator?

Kies de vorm van uw gazon en voer de afmetingen in. De calculator berekent automatisch de benodigde oppervlakte met snijverlies en vertaalt dit direct naar het aantal rollen en volle pallets.

## Rekenformule voor Graszoden

\`\`\`
1. Netto oppervlakte  = Geometrische formule (L Ã— B, etc.)
2. Totale oppervlakte = Oppervlakte Ã— Aantal identieke zones
3. Snijverlies        = Totale oppervlakte Ã— (% snijverlies Ã· 100)
4. Te bestellen zoden = Totale oppervlakte + Snijverlies
5. Aantal rollen      = AfrondenBoven(Te bestellen zoden Ã· Rolgrootte)
6. Aantal pallets     = AfrondenBoven(Te bestellen zoden Ã· Palletcapaciteit)
\`\`\``,
    },
    pl: {
      name: 'Kalkulator Trawy z Rolki',
      shortDescription:
        'Oblicz dokÅ‚adnÄ… liczbÄ™ rolek i palet trawy z rolki, zapas na docinki, przygotowanie podÅ‚oÅ¼a i koszt zaÅ‚oÅ¼enia trawnika.',
      helpTexts: {
        shape: 'Wybierz ksztaÅ‚t trawnika, aby dokÅ‚adnie obliczyÄ‡ potrzebnÄ… powierzchniÄ™ darni.',
        waste: 'Zalecany zapas: 5% dla prostych prostokÄ…tÃ³w, 10% przy Å‚ukach i rabatach, 15% dla nieregularnych dziaÅ‚ek.',
        rollSize: 'Standardowa rolka = ok. 1 mÂ² (lub 10 stÃ³p kw.). PotwierdÅº u producenta.',
        rollsPerPallet: 'Standardowa paleta = 45 do 50 rolek (ok. 45-50 mÂ²).',
        pricePerSqFt: 'Opcjonalnie: cena za mÂ² lub stopÄ™ kw. do wyliczenia budÅ¼etu materiaÅ‚owego.',
        soilDepth: 'Zalecane: 8-10 cm Å¼yznej ziemi urodzajnej pod trawnik.',
        pricePerSoilCuYd: 'Åšredni koszt ziemi ogrodowej za metr szeÅ›cienny lub jard szeÅ›cienny.',
      },
      options: {
        shape: {
          rectangle: 'ProstokÄ…t / Kwadrat (DÅ‚ugoÅ›Ä‡ Ã— SzerokoÅ›Ä‡)',
          circle: 'KoÅ‚o (Åšrednica)',
          triangle: 'TrÃ³jkÄ…t (Podstawa Ã— WysokoÅ›Ä‡)',
          trapezoid: 'Trapez (Podstawa 1 + Podstawa 2 Ã— WysokoÅ›Ä‡)',
          'l-shape': 'KsztaÅ‚t L (Dwa poÅ‚Ä…czone segmenty)',
          irregular: 'Nieregularny (Wpisz caÅ‚kowitÄ… powierzchniÄ™)',
        },
        sodType: {
          bermuda: 'Trawa Bermuda (Klimat ciepÅ‚y)',
          'kentucky-bluegrass': 'Wiechlina Å‚Ä…kowa (Odporna na deptanie)',
          fescue: 'Kostrzewa trzcinowa (Toleruje suszÄ™)',
          zoysia: 'Zoysia (GÄ™sta i wolnorosnÄ…ca)',
          'st-augustine': 'Trawa Å›w. Augustyna (CiepÅ‚y klimat)',
          centipede: 'Eremopoa / Centipede (Niewielkie wymagania)',
          bahia: 'Trawa Bahia (WytrzymaÅ‚a)',
          rye: 'Å»ycica trwaÅ‚a / Rajgras angielski (Szybki wzrost)',
        },
      },
      article: `## Jak obliczyÄ‡ zapotrzebowanie na trawÄ™ z rolki?

Podaj wymiary dziaÅ‚ki, a kalkulator wyliczy dokÅ‚adnÄ… powierzchniÄ™, doliczy niezbÄ™dny naddatek na docinki przy krawÄ™dziach i poda Å‚Ä…cznÄ… liczbÄ™ rolek oraz palet do zamÃ³wienia.

## WzÃ³r kalkulacyjny

\`\`\`
1. Powierzchnia netto = FormuÅ‚a geometrii (DÅ‚ugoÅ›Ä‡ Ã— SzerokoÅ›Ä‡)
2. Powierzchnia Å‚Ä…czna= Powierzchnia Ã— Liczba takich samych stref
3. Zapas na docinki   = Powierzchnia Å‚Ä…czna Ã— (% naddatku Ã· 100)
4. Trawa do zamÃ³wienia= Powierzchnia Å‚Ä…czna + Zapas na docinki
5. Liczba rolek       = ZaokrGÃ³ra(Trawa do zamÃ³wienia Ã· Rozmiar rolki)
6. Liczba palet       = ZaokrGÃ³ra(Trawa do zamÃ³wienia Ã· PojemnoÅ›Ä‡ palety)
\`\`\``,
    },
    ru: {
      name: 'ÐšÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€ Ð ÑƒÐ»Ð¾Ð½Ð½Ð¾Ð³Ð¾ Ð“Ð°Ð·Ð¾Ð½Ð°',
      shortDescription:
        'Ð Ð°ÑÑÑ‡Ð¸Ñ‚Ð°Ð¹Ñ‚Ðµ Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¾Ðµ ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ñ€ÑƒÐ»Ð¾Ð½Ð¾Ð² Ð¸ Ð¿Ð¾Ð´Ð´Ð¾Ð½Ð¾Ð² Ð³Ð°Ð·Ð¾Ð½Ð°, Ð·Ð°Ð¿Ð°Ñ Ð½Ð° Ð¿Ð¾Ð´Ñ€ÐµÐ·ÐºÑƒ, Ð¾Ð±ÑŠÐµÐ¼ Ð³Ñ€ÑƒÐ½Ñ‚Ð° Ð¸ Ð¾Ð±Ñ‰ÑƒÑŽ ÑÑ‚Ð¾Ð¸Ð¼Ð¾ÑÑ‚ÑŒ ÑƒÐºÐ»Ð°Ð´ÐºÐ¸.',
      helpTexts: {
        shape: 'Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð³ÐµÐ¾Ð¼ÐµÑ‚Ñ€Ð¸Ñ‡ÐµÑÐºÑƒÑŽ Ñ„Ð¾Ñ€Ð¼Ñƒ ÑƒÑ‡Ð°ÑÑ‚ÐºÐ° Ð´Ð»Ñ Ñ‚Ð¾Ñ‡Ð½Ð¾Ð³Ð¾ Ñ€Ð°ÑÑ‡ÐµÑ‚Ð° Ð¿Ð»Ð¾Ñ‰Ð°Ð´Ð¸ ÑƒÐºÐ»Ð°Ð´ÐºÐ¸ Ð³Ð°Ð·Ð¾Ð½Ð°.',
        waste: 'Ð¡Ñ‚Ð°Ð½Ð´Ð°Ñ€Ñ‚Ð½Ñ‹Ð¹ Ð·Ð°Ð¿Ð°Ñ: 5% Ð´Ð»Ñ Ð¿Ñ€ÑÐ¼Ð¾ÑƒÐ³Ð¾Ð»ÑŒÐ½Ñ‹Ñ… ÑƒÑ‡Ð°ÑÑ‚ÐºÐ¾Ð², 10% Ð´Ð»Ñ Ð´Ð¾Ñ€Ð¾Ð¶ÐµÐº Ñ Ð¸Ð·Ð³Ð¸Ð±Ð°Ð¼Ð¸, 15% Ð´Ð»Ñ ÑÐ»Ð¾Ð¶Ð½Ñ‹Ñ… Ñ„Ð¾Ñ€Ð¼.',
        rollSize: 'Ð¡Ñ‚Ð°Ð½Ð´Ð°Ñ€Ñ‚Ð½Ñ‹Ð¹ Ñ€ÑƒÐ»Ð¾Ð½ = Ð¾ÐºÐ¾Ð»Ð¾ 0.8â€“1.0 Ð¼Â² (10 ÐºÐ². Ñ„ÑƒÑ‚Ð¾Ð²). Ð£Ñ‚Ð¾Ñ‡Ð½Ð¸Ñ‚Ðµ Ñƒ Ð¿Ð¾ÑÑ‚Ð°Ð²Ñ‰Ð¸ÐºÐ°.',
        rollsPerPallet: 'Ð¡Ñ‚Ð°Ð½Ð´Ð°Ñ€Ñ‚Ð½Ñ‹Ð¹ Ð¿Ð¾Ð´Ð´Ð¾Ð½ = 45â€“50 Ñ€ÑƒÐ»Ð¾Ð½Ð¾Ð² (Ð¾ÐºÐ¾Ð»Ð¾ 40â€“50 Ð¼Â²).',
        pricePerSqFt: 'ÐžÐ¿Ñ†Ð¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ð¾: ÑƒÐºÐ°Ð¶Ð¸Ñ‚Ðµ Ñ†ÐµÐ½Ñƒ Ð·Ð° ÐºÐ². Ð¼ÐµÑ‚Ñ€ Ð¸Ð»Ð¸ ÐºÐ². Ñ„ÑƒÑ‚ Ð´Ð»Ñ Ñ€Ð°ÑÑ‡ÐµÑ‚Ð° ÑÐ¼ÐµÑ‚Ñ‹.',
        soilDepth: 'Ð ÐµÐºÐ¾Ð¼ÐµÐ½Ð´ÑƒÐµÑ‚ÑÑ: 8â€“10 ÑÐ¼ Ð¿Ð»Ð¾Ð´Ð¾Ñ€Ð¾Ð´Ð½Ð¾Ð³Ð¾ Ð³Ñ€ÑƒÐ½Ñ‚Ð° Ð¿ÐµÑ€ÐµÐ´ ÑƒÐºÐ»Ð°Ð´ÐºÐ¾Ð¹ Ñ€ÑƒÐ»Ð¾Ð½Ð¾Ð².',
        pricePerSoilCuYd: 'Ð¡Ñ€ÐµÐ´Ð½ÑÑ ÑÑ‚Ð¾Ð¸Ð¼Ð¾ÑÑ‚ÑŒ Ð¿Ð»Ð¾Ð´Ð¾Ñ€Ð¾Ð´Ð½Ð¾Ð³Ð¾ Ð³Ñ€ÑƒÐ½Ñ‚Ð° Ð·Ð° ÐºÑƒÐ±Ð¸Ñ‡ÐµÑÐºÐ¸Ð¹ Ð¼ÐµÑ‚Ñ€ Ð¸Ð»Ð¸ ÑÑ€Ð´.',
      },
      options: {
        shape: {
          rectangle: 'ÐŸÑ€ÑÐ¼Ð¾ÑƒÐ³Ð¾Ð»ÑŒÐ½Ð¸Ðº / ÐšÐ²Ð°Ð´Ñ€Ð°Ñ‚ (Ð”Ð»Ð¸Ð½Ð° Ã— Ð¨Ð¸Ñ€Ð¸Ð½Ð°)',
          circle: 'ÐšÑ€ÑƒÐ³ (Ð”Ð¸Ð°Ð¼ÐµÑ‚Ñ€)',
          triangle: 'Ð¢Ñ€ÐµÑƒÐ³Ð¾Ð»ÑŒÐ½Ð¸Ðº (ÐžÑÐ½Ð¾Ð²Ð°Ð½Ð¸Ðµ Ã— Ð’Ñ‹ÑÐ¾Ñ‚Ð°)',
          trapezoid: 'Ð¢Ñ€Ð°Ð¿ÐµÑ†Ð¸Ñ (ÐžÑÐ½Ð¾Ð²Ð°Ð½Ð¸Ðµ 1 + 2 Ã— Ð’Ñ‹ÑÐ¾Ñ‚Ð°)',
          'l-shape': 'Ð“-Ð¾Ð±Ñ€Ð°Ð·Ð½Ð°Ñ Ñ„Ð¾Ñ€Ð¼Ð° (Ð”Ð²Ðµ Ð·Ð¾Ð½Ñ‹)',
          irregular: 'Ð¡Ð»Ð¾Ð¶Ð½Ð°Ñ Ñ„Ð¾Ñ€Ð¼Ð° (Ð£ÐºÐ°Ð·Ð°Ñ‚ÑŒ Ð¾Ð±Ñ‰ÑƒÑŽ Ð¿Ð»Ð¾Ñ‰Ð°Ð´ÑŒ)',
        },
        sodType: {
          bermuda: 'Ð‘ÐµÑ€Ð¼ÑƒÐ´ÑÐºÐ°Ñ Ñ‚Ñ€Ð°Ð²Ð° (Ð”Ð»Ñ Ð¶Ð°Ñ€ÐºÐ¾Ð³Ð¾ ÐºÐ»Ð¸Ð¼Ð°Ñ‚Ð°)',
          'kentucky-bluegrass': 'ÐœÑÑ‚Ð»Ð¸Ðº Ð»ÑƒÐ³Ð¾Ð²Ð¾Ð¹ (ÐšÐ»Ð°ÑÑÐ¸Ñ‡ÐµÑÐºÐ¸Ð¹ ÑƒÐ½Ð¸Ð²ÐµÑ€ÑÐ°Ð»ÑŒÐ½Ñ‹Ð¹)',
          fescue: 'ÐžÐ²ÑÑÐ½Ð¸Ñ†Ð° Ñ‚Ñ€Ð¾ÑÑ‚Ð½Ð¸ÐºÐ¾Ð²Ð°Ñ (Ð—Ð°ÑÑƒÑ…Ð¾ÑƒÑÑ‚Ð¾Ð¹Ñ‡Ð¸Ð²Ð°Ñ)',
          zoysia: 'Ð¦Ð¾Ð¹ÑÐ¸Ñ (ÐŸÐ»Ð¾Ñ‚Ð½Ñ‹Ð¹ ÑÐ»Ð¸Ñ‚Ð½Ñ‹Ð¹ Ð´ÐµÑ€Ð½)',
          'st-augustine': 'Ð¡ÐµÐ½Ñ‚-ÐžÐ³Ð°ÑÑ‚Ð¸Ð½ (Ð”Ð»Ñ Ð¿Ñ€Ð¸Ð±Ñ€ÐµÐ¶Ð½Ñ‹Ñ… Ð·Ð¾Ð½)',
          centipede: 'Ð¢Ñ€Ð°Ð²Ð° Ð¦ÐµÐ½Ñ‚Ð¸Ð¿ÐµÐ´ (ÐœÐ¸Ð½Ð¸Ð¼Ð°Ð»ÑŒÐ½Ñ‹Ð¹ ÑƒÑ…Ð¾Ð´)',
          bahia: 'Ð¢Ñ€Ð°Ð²Ð° Ð‘Ð°Ñ…Ð¸Ñ (ÐÐµÐ¿Ñ€Ð¸Ñ…Ð¾Ñ‚Ð»Ð¸Ð²Ð°Ñ)',
          rye: 'Ð Ð°Ð¹Ð³Ñ€Ð°Ñ Ð¿Ð°ÑÑ‚Ð±Ð¸Ñ‰Ð½Ñ‹Ð¹ (Ð‘Ñ‹ÑÑ‚Ñ€Ð¾Ðµ ÑƒÐºÐ¾Ñ€ÐµÐ½ÐµÐ½Ð¸Ðµ)',
        },
      },
      article: `## ÐšÐ°Ðº Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒÑÑ ÐºÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€Ð¾Ð¼ Ñ€ÑƒÐ»Ð¾Ð½Ð½Ð¾Ð³Ð¾ Ð³Ð°Ð·Ð¾Ð½Ð°

Ð£ÐºÐ°Ð¶Ð¸Ñ‚Ðµ Ñ„Ð¾Ñ€Ð¼Ñƒ Ð¸ Ñ€Ð°Ð·Ð¼ÐµÑ€Ñ‹ Ð²Ð°ÑˆÐµÐ³Ð¾ ÑƒÑ‡Ð°ÑÑ‚ÐºÐ°. ÐšÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€ Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¸ Ð²Ñ‹Ñ‡Ð¸ÑÐ»Ð¸Ñ‚ Ñ‡Ð¸ÑÑ‚ÑƒÑŽ Ð¿Ð»Ð¾Ñ‰Ð°Ð´ÑŒ, Ð´Ð¾Ð±Ð°Ð²Ð¸Ñ‚ ÐºÐ¾ÑÑ„Ñ„Ð¸Ñ†Ð¸ÐµÐ½Ñ‚ Ð½Ð° Ð¾Ð±Ñ€ÐµÐ·ÐºÑƒ Ð¿Ð¾ ÐºÑ€Ð°ÑÐ¼ Ð¸ Ð¿ÐµÑ€ÐµÐ²ÐµÐ´ÐµÑ‚ Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚ Ð² Ñ‚Ð¾Ñ‡Ð½Ð¾Ðµ ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ñ€ÑƒÐ»Ð¾Ð½Ð¾Ð² Ð¸ Ð¿Ð¾Ð´Ð´Ð¾Ð½Ð¾Ð².

## Ð¤Ð¾Ñ€Ð¼ÑƒÐ»Ð° Ñ€Ð°ÑÑ‡ÐµÑ‚Ð° Ð³Ð°Ð·Ð¾Ð½Ð°

\`\`\`
1. Ð§Ð¸ÑÑ‚Ð°Ñ Ð¿Ð»Ð¾Ñ‰Ð°Ð´ÑŒ   = Ð¤Ð¾Ñ€Ð¼ÑƒÐ»Ð° Ð³ÐµÐ¾Ð¼ÐµÑ‚Ñ€Ð¸Ð¸ (Ð”Ð»Ð¸Ð½Ð° Ã— Ð¨Ð¸Ñ€Ð¸Ð½Ð°)
2. ÐžÐ±Ñ‰Ð°Ñ Ð¿Ð»Ð¾Ñ‰Ð°Ð´ÑŒ    = Ð§Ð¸ÑÑ‚Ð°Ñ Ð¿Ð»Ð¾Ñ‰Ð°Ð´ÑŒ Ã— ÐšÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ð¾Ð´Ð¸Ð½Ð°ÐºÐ¾Ð²Ñ‹Ñ… Ð·Ð¾Ð½
3. Ð—Ð°Ð¿Ð°Ñ Ð½Ð° Ð¿Ð¾Ð´Ñ€ÐµÐ·ÐºÑƒ= ÐžÐ±Ñ‰Ð°Ñ Ð¿Ð»Ð¾Ñ‰Ð°Ð´ÑŒ Ã— (% Ð·Ð°Ð¿Ð°ÑÐ° Ã· 100)
4. Ð“Ð°Ð·Ð¾Ð½ Ðº Ð·Ð°ÐºÐ°Ð·Ñƒ   = ÐžÐ±Ñ‰Ð°Ñ Ð¿Ð»Ð¾Ñ‰Ð°Ð´ÑŒ + Ð—Ð°Ð¿Ð°Ñ Ð½Ð° Ð¿Ð¾Ð´Ñ€ÐµÐ·ÐºÑƒ
5. ÐšÐ¾Ð»-Ð²Ð¾ Ñ€ÑƒÐ»Ð¾Ð½Ð¾Ð²   = ÐžÐºÑ€ÑƒÐ³Ð»Ð’Ð²ÐµÑ€Ñ…(Ð“Ð°Ð·Ð¾Ð½ Ðº Ð·Ð°ÐºÐ°Ð·Ñƒ Ã· ÐŸÐ»Ð¾Ñ‰Ð°Ð´ÑŒ Ñ€ÑƒÐ»Ð¾Ð½Ð°)
6. ÐšÐ¾Ð»-Ð²Ð¾ Ð¿Ð¾Ð´Ð´Ð¾Ð½Ð¾Ð²  = ÐžÐºÑ€ÑƒÐ³Ð»Ð’Ð²ÐµÑ€Ñ…(Ð“Ð°Ð·Ð¾Ð½ Ðº Ð·Ð°ÐºÐ°Ð·Ñƒ Ã· Ð’Ð¼ÐµÑÑ‚Ð¸Ð¼Ð¾ÑÑ‚ÑŒ Ð¿Ð¾Ð´Ð´Ð¾Ð½Ð°)
\`\`\``,
    },
    tr: {
      name: 'Rulo Ã‡im (HazÄ±r Ã‡im) HesaplayÄ±cÄ±',
      shortDescription:
        'BahÃ§eniz iÃ§in gereken rulo Ã§im miktarÄ±nÄ±, palet sayÄ±sÄ±nÄ±, fire payÄ±nÄ±, toprak hazÄ±rlÄ±ÄŸÄ±nÄ± ve toplam maliyeti kolayca hesaplayÄ±n.',
      helpTexts: {
        shape: 'Ã‡im ihtiyacÄ±nÄ± hesaplamak iÃ§in bahÃ§enizin geometrik ÅŸeklini seÃ§in.',
        waste: 'Ã–nerilen fire payÄ±: DÃ¼z alanlarda %5, kavisli ve engelli alanlarda %10, karmaÅŸÄ±k ÅŸekillerde %15.',
        rollSize: 'Standart Ã§im rulosu = yaklaÅŸÄ±k 1 mÂ² (veya 10 fit kare).',
        rollsPerPallet: 'Standart palet = 45 ila 50 rulo (40-50 mÂ²).',
        pricePerSqFt: 'Ä°steÄŸe baÄŸlÄ±: Toplam bÃ¼tÃ§eyi gÃ¶rmek iÃ§in mÂ² veya fit kare fiyatÄ±nÄ± girin.',
        soilDepth: 'Ã–nerilen: Ã‡im serilmeden Ã¶nce 8-10 cm elenmiÅŸ bitkisel toprak tabakasÄ±.',
        pricePerSoilCuYd: 'MetrekÃ¼p veya yarda kÃ¼p baÅŸÄ±na nebati toprak maliyeti.',
      },
      options: {
        shape: {
          rectangle: 'DikdÃ¶rtgen / Kare (Uzunluk Ã— GeniÅŸlik)',
          circle: 'Daire (Ã‡ap)',
          triangle: 'ÃœÃ§gen (Taban Ã— YÃ¼kseklik)',
          trapezoid: 'Yamuk (Taban 1 + Taban 2 Ã— YÃ¼kseklik)',
          'l-shape': 'L Åžekli (Ä°ki baÄŸlantÄ±lÄ± bÃ¶lÃ¼m)',
          irregular: 'DÃ¼zensiz (Toplam alanÄ± doÄŸrudan girin)',
        },
        sodType: {
          bermuda: 'Bermuda Ã‡imi (SÄ±cak iklim ve basÄ±lmaya dayanÄ±klÄ±)',
          'kentucky-bluegrass': 'Ã‡ayÄ±r SalkÄ±m Otu / Kentucky Bluegrass',
          fescue: 'KamÄ±ÅŸsÄ± Yumak / Tall Fescue (KuraklÄ±ÄŸa dayanÄ±klÄ±)',
          zoysia: 'Zoysia Ã‡imi (SÄ±k dokulu ve kaliteli)',
          'st-augustine': 'St. Augustine Ã‡imi (GÃ¶lge ve sahil uyumlu)',
          centipede: 'KÄ±rkayak Ã‡imi (Az bakÄ±m gerektiren)',
          bahia: 'Bahia Ã‡imi (Zorlu koÅŸullara dayanÄ±klÄ±)',
          rye: 'Ä°ngiliz Ã‡imi / Perennial Ryegrass (HÄ±zlÄ± geliÅŸen)',
        },
      },
      article: `## HazÄ±r Rulo Ã‡im NasÄ±l HesaplanÄ±r?

BahÃ§enizin Ã¶lÃ§Ã¼lerini girin. Hesap makinesi toplam Ã§im alanÄ±nÄ± hesaplar, kenar kesimleri iÃ§in fire payÄ±nÄ± ekler ve sipariÅŸ vermeniz gereken rulo ve palet sayÄ±sÄ±nÄ± anÄ±nda listeler.

## Hesaplama FormÃ¼lÃ¼

\`\`\`
1. Net Alan         = Geometrik formÃ¼l (Uzunluk Ã— GeniÅŸlik vb.)
2. Toplam Alan      = Net Alan Ã— AynÄ± formdaki alan sayÄ±sÄ±
3. Fire PayÄ±        = Toplam Alan Ã— (Fire % Ã· 100)
4. SipariÅŸ AlanÄ±    = Toplam Alan + Fire PayÄ±
5. Rulo SayÄ±sÄ±      = YukarÄ±Yuvarla(SipariÅŸ AlanÄ± Ã· Rulo Boyutu)
6. Palet SayÄ±sÄ±     = YukarÄ±Yuvarla(SipariÅŸ AlanÄ± Ã· Palet Kapasitesi)
\`\`\``,
    },
    ar: {
      name: 'Ø­Ø§Ø³Ø¨Ø© Ø§Ù„Ø¹Ø´Ø¨ Ø§Ù„Ø·Ø¨ÙŠØ¹ÙŠ (Ø§Ù„Ø±ÙˆÙ„ / Ø§Ù„Ù†Ø¬ÙŠÙ„)',
      shortDescription:
        'Ø§Ø­Ø³Ø¨ ÙƒÙ…ÙŠØ© Ù„ÙØ§Øª Ø§Ù„Ø¹Ø´Ø¨ Ø§Ù„Ø·Ø¨ÙŠØ¹ÙŠ (Ø§Ù„Ø±ÙˆÙ„) ÙˆØ¹Ø¯Ø¯ Ø§Ù„Ù…Ù†ØµØ§Øª (Ø§Ù„Ø·Ø¨Ù„ÙŠØ§Øª) Ø§Ù„Ù…Ø·Ù„ÙˆØ¨Ø© Ù„Ø­Ø¯ÙŠÙ‚ØªÙƒ Ø¨Ø­Ø³Ø¨ Ø§Ù„Ø£Ø¨Ø¹Ø§Ø¯ ÙˆØ§Ù„Ø´ÙƒÙ„ Ø§Ù„Ù‡Ù†Ø¯Ø³ÙŠ Ù…Ø¹ Ø§Ø­ØªØ³Ø§Ø¨ Ù†Ø³Ø¨Ø© Ø§Ù„Ù‡Ø¯Ø± ÙˆØªØ¬Ù‡ÙŠØ² Ø§Ù„ØªØ±Ø¨Ø©.',
      helpTexts: {
        shape: 'Ø§Ø®ØªØ± Ø§Ù„Ø´ÙƒÙ„ Ø§Ù„Ù‡Ù†Ø¯Ø³ÙŠ Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ø­Ø¯ÙŠÙ‚Ø© Ù„Ø­Ø³Ø§Ø¨ ÙƒÙ…ÙŠØ§Øª Ø§Ù„Ø¹Ø´Ø¨ Ø¨Ø¯Ù‚Ø©.',
        waste: 'Ù†Ø³Ø¨Ø© Ø§Ù„Ù‡Ø¯Ø± Ø§Ù„Ù…ÙˆØµÙ‰ Ø¨Ù‡Ø§: 5% Ù„Ù„Ù…Ø³ØªØ·ÙŠÙ„Ø§Øª Ø§Ù„Ø¨Ø³ÙŠØ·Ø©ØŒ 10% Ù„Ù„Ù…Ø³Ø§Ø­Ø§Øª Ø°Ø§Øª Ø§Ù„Ø¹ÙˆØ§Ø¦Ù‚ØŒ 15% Ù„Ù„Ù…Ù†Ø­Ù†ÙŠØ§Øª Ø§Ù„Ù…Ø¹Ù‚Ø¯Ø©.',
        rollSize: 'Ø­Ø¬Ù… Ø§Ù„Ù„ÙØ© Ø§Ù„Ù‚ÙŠØ§Ø³ÙŠ = 10 Ø£Ù‚Ø¯Ø§Ù… Ù…Ø±Ø¨Ø¹Ø© (Ø­ÙˆØ§Ù„ÙŠ 0.93 Ù…ØªØ± Ù…Ø±Ø¨Ø¹). ØªØ£ÙƒØ¯ Ù…Ù† Ø§Ù„Ù…ÙˆØ±Ø¯.',
        rollsPerPallet: 'Ø§Ù„Ù…Ù†ØµØ© Ø§Ù„Ù‚ÙŠØ§Ø³ÙŠØ© (Ø§Ù„Ø·Ø¨Ù„ÙŠØ©) = 45 Ø¥Ù„Ù‰ 50 Ù„ÙØ©.',
        pricePerSqFt: 'Ø§Ø®ØªÙŠØ§Ø±ÙŠ â€” Ø£Ø¯Ø®Ù„ Ø³Ø¹Ø± Ø§Ù„Ù…ØªØ± Ø§Ù„Ù…Ø±Ø¨Ø¹ Ø£Ùˆ Ø§Ù„Ù‚Ø¯Ù… Ø§Ù„Ù…Ø±Ø¨Ø¹ Ù„ØªÙ‚Ø¯ÙŠØ± Ù…ÙŠØ²Ø§Ù†ÙŠØ© Ø§Ù„Ø´Ø±Ø§Ø¡.',
        soilDepth: 'Ø§Ù„Ù…ÙˆØµÙ‰ Ø¨Ù‡: ÙØ±Ø¯ 8 Ø¥Ù„Ù‰ 10 Ø³Ù… Ù…Ù† Ø§Ù„ØªØ±Ø¨Ø© Ø§Ù„Ø²Ø±Ø§Ø¹ÙŠØ© Ø§Ù„Ø®ØµØ¨Ø© Ù‚Ø¨Ù„ Ù…Ø¯ Ø§Ù„Ø¹Ø´Ø¨.',
        pricePerSoilCuYd: 'Ù…ØªÙˆØ³Ø· Ø³Ø¹Ø± Ø§Ù„ÙŠØ§Ø±Ø¯Ø© Ø§Ù„Ù…ÙƒØ¹Ø¨Ø© Ø£Ùˆ Ø§Ù„Ù…ØªØ± Ø§Ù„Ù…ÙƒØ¹Ø¨ Ù„Ù„ØªØ±Ø¨Ø© Ø§Ù„Ø²Ø±Ø§Ø¹ÙŠØ©.',
      },
      options: {
        shape: {
          rectangle: 'Ù…Ø³ØªØ·ÙŠÙ„ / Ù…Ø±Ø¨Ø¹ (Ø§Ù„Ø·ÙˆÙ„ Ã— Ø§Ù„Ø¹Ø±Ø¶)',
          circle: 'Ø¯Ø§Ø¦Ø±ÙŠ (Ø§Ù„Ù‚Ø·Ø±)',
          triangle: 'Ù…Ø«Ù„Ø« (Ø§Ù„Ù‚Ø§Ø¹Ø¯Ø© Ã— Ø§Ù„Ø§Ø±ØªÙØ§Ø¹)',
          trapezoid: 'Ø´Ø¨Ù‡ Ù…Ù†Ø­Ø±Ù (Ø§Ù„Ù‚Ø§Ø¹Ø¯Ø© 1 + 2 Ã— Ø§Ù„Ø§Ø±ØªÙØ§Ø¹)',
          'l-shape': 'Ø´ÙƒÙ„ L (Ù‚Ø³Ù…Ø§Ù† Ù…ØªØµÙ„Ø§Ù†)',
          irregular: 'ØºÙŠØ± Ù…Ù†ØªØ¸Ù… (Ø¥Ø¯Ø®Ø§Ù„ Ø§Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„ÙƒÙ„ÙŠØ© Ù…Ø¨Ø§Ø´Ø±Ø©)',
        },
        sodType: {
          bermuda: 'Ø¹Ø´Ø¨ Ø¨Ø±Ù…ÙˆØ¯Ø§ Ø§Ù„Ø·Ø¨ÙŠØ¹ÙŠ (Ù„Ù„Ù…Ù†Ø§Ø·Ù‚ Ø§Ù„Ø­Ø§Ø±Ø© ÙˆØ§Ù„Ù…Ø´Ù…Ø³Ø©)',
          'kentucky-bluegrass': 'Ø¹Ø´Ø¨ ÙƒÙ†ØªØ§ÙƒÙŠ Ø§Ù„Ø£Ø²Ø±Ù‚ (Ù„Ù„Ù…Ù†Ø§Ø·Ù‚ Ø§Ù„Ù…Ø¹ØªØ¯Ù„Ø© ÙˆØ§Ù„Ø¨Ø§Ø±Ø¯Ø©)',
          fescue: 'Ø§Ù„ÙÙŠØ³ÙƒÙŠÙˆ Ø§Ù„Ø·ÙˆÙŠÙ„ / Tall Fescue (Ù…Ù‚Ø§ÙˆÙ… Ù„Ù„Ø¬ÙØ§Ù)',
          zoysia: 'Ø¹Ø´Ø¨ Ø§Ù„Ø²ÙˆÙŠØ³ÙŠØ§ (ÙƒØ«ÙŠÙ ÙˆÙØ§Ø¦Ù‚ Ø§Ù„Ù†Ø¹ÙˆÙ…Ø©)',
          'st-augustine': 'Ø³Ø§Ù†Øª Ø£ÙˆØºØ³Ø·ÙŠÙ† (Ù…Ù†Ø§Ø³Ø¨ Ù„Ù„Ù…Ù†Ø§Ø·Ù‚ Ø§Ù„Ø³Ø§Ø­Ù„ÙŠØ©)',
          centipede: 'Ø¹Ø´Ø¨ Ø§Ù„Ø³Ù†ØªÙŠØ¨ÙŠØ¯ (Ù‚Ù„ÙŠÙ„ Ø§Ù„ØµÙŠØ§Ù†Ø©)',
          bahia: 'Ø¹Ø´Ø¨ Ø¨Ø§Ù‡ÙŠØ§ (Ø´Ø¯ÙŠØ¯ Ø§Ù„ØªØ­Ù…Ù„)',
          rye: 'Ø­Ø´ÙŠØ´Ø© Ø§Ù„Ø±Ø§ÙŠ Ø§Ù„Ù…Ø¹Ù…Ø±Ø© (Ø³Ø±ÙŠØ¹ Ø§Ù„Ù†Ù…Ùˆ)',
        },
      },
      article: `## ÙƒÙŠÙÙŠØ© Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø­Ø§Ø³Ø¨Ø© Ø§Ù„Ø¹Ø´Ø¨ Ø§Ù„Ø·Ø¨ÙŠØ¹ÙŠ (Ø§Ù„Ø±ÙˆÙ„)

Ø­Ø¯Ø¯ Ø§Ù„Ø´ÙƒÙ„ Ø§Ù„Ù‡Ù†Ø¯Ø³ÙŠ Ù„Ù„Ø­Ø¯ÙŠÙ‚Ø© ÙˆØ£Ø¯Ø®Ù„ Ø§Ù„Ø£Ø¨Ø¹Ø§Ø¯. ØªÙ‚ÙˆÙ… Ø§Ù„Ø¢Ù„Ø© Ø§Ù„Ø­Ø§Ø³Ø¨Ø© Ø¨Ø§Ø­ØªØ³Ø§Ø¨ Ø§Ù„Ù…Ø³Ø§Ø­Ø© Ø¨Ø¯Ù‚Ø©ØŒ ÙˆØ¥Ø¶Ø§ÙØ© Ù†Ø³Ø¨Ø© Ø§Ù„Ù‡Ø¯Ø± Ø§Ù„Ù„Ø§Ø²Ù…Ø© Ù„Ù„Ù‚Øµ Ø¹Ù†Ø¯ Ø§Ù„Ø­ÙˆØ§ÙØŒ ÙˆØªØ­ÙˆÙŠÙ„ Ø§Ù„Ù†Ø§ØªØ¬ Ù…Ø¨Ø§Ø´Ø±Ø© Ø¥Ù„Ù‰ Ø¹Ø¯Ø¯ Ø§Ù„Ù„ÙØ§Øª ÙˆØ§Ù„Ù…Ù†ØµØ§Øª (Ø§Ù„Ø·Ø¨Ù„ÙŠØ§Øª) Ø§Ù„Ù…Ø·Ù„ÙˆØ¨Ø© Ù„Ù„Ø·Ù„Ø¨.

## Ù…Ø¹Ø§Ø¯Ù„Ø© Ø§Ù„Ø­Ø³Ø§Ø¨

\`\`\`
1. Ø§Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„ØµØ§ÙÙŠØ©  = Ù…Ø¹Ø§Ø¯Ù„Ø© Ø§Ù„Ø´ÙƒÙ„ Ø§Ù„Ù‡Ù†Ø¯Ø³ÙŠ (Ø§Ù„Ø·ÙˆÙ„ Ã— Ø§Ù„Ø¹Ø±Ø¶)
2. Ø§Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ø¥Ø¬Ù…Ø§Ù„ÙŠØ© = Ø§Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„ØµØ§ÙÙŠØ© Ã— Ø¹Ø¯Ø¯ Ø§Ù„Ø£Ù‚Ø³Ø§Ù… Ø§Ù„Ù…ØªØ·Ø§Ø¨Ù‚Ø©
3. Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ù‡Ø§Ù„Ùƒ     = Ø§Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ø¥Ø¬Ù…Ø§Ù„ÙŠØ© Ã— (% Ø§Ù„Ù‡Ø¯Ø± Ã· 100)
4. Ø§Ù„ÙƒÙ…ÙŠØ© Ø§Ù„Ù…Ø·Ù„ÙˆØ¨ Ø´Ø±Ø§Ø¤Ù‡Ø§ = Ø§Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ø¥Ø¬Ù…Ø§Ù„ÙŠØ© + Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ù‡Ø§Ù„Ùƒ
5. Ø¹Ø¯Ø¯ Ø§Ù„Ù„ÙØ§Øª (Ø§Ù„Ø±ÙˆÙ„)   = ØªÙ‚Ø±ÙŠØ¨_Ù„Ù„Ø£Ø¹Ù„Ù‰(Ø§Ù„ÙƒÙ…ÙŠØ© Ã· Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ù„ÙØ©)
6. Ø¹Ø¯Ø¯ Ø§Ù„Ù…Ù†ØµØ§Øª (Ø§Ù„Ø·Ø¨Ù„ÙŠØ§Øª)= ØªÙ‚Ø±ÙŠØ¨_Ù„Ù„Ø£Ø¹Ù„Ù‰(Ø§Ù„ÙƒÙ…ÙŠØ© Ã· Ø³Ø¹Ø© Ø§Ù„Ù…Ù†ØµØ©)
\`\`\``,
    },
    hi: {
      name: 'à¤˜à¤¾à¤¸ à¤°à¥‹à¤² (Sod) à¤•à¥ˆà¤²à¤•à¥à¤²à¥‡à¤Ÿà¤°',
      shortDescription:
        'à¤…à¤ªà¤¨à¥‡ à¤²à¥‰à¤¨ à¤”à¤° à¤¬à¤—à¥€à¤šà¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤ªà¥à¤°à¤¾à¤•à¥ƒà¤¤à¤¿à¤• à¤˜à¤¾à¤¸ à¤•à¥‡ à¤°à¥‹à¤², à¤ªà¥ˆà¤²à¥‡à¤Ÿ, à¤…à¤ªà¤¶à¤¿à¤·à¥à¤Ÿ à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤ à¤”à¤° à¤®à¤¿à¤Ÿà¥à¤Ÿà¥€ à¤•à¥€ à¤¤à¥ˆà¤¯à¤¾à¤°à¥€ à¤•à¥€ à¤¸à¤Ÿà¥€à¤• à¤—à¤£à¤¨à¤¾ à¤•à¤°à¥‡à¤‚à¥¤',
      helpTexts: {
        shape: 'à¤¸à¤Ÿà¥€à¤• à¤˜à¤¾à¤¸ à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¤«à¤² à¤•à¥€ à¤—à¤£à¤¨à¤¾ à¤•à¥‡ à¤²à¤¿à¤ à¤…à¤ªà¤¨à¥‡ à¤²à¥‰à¤¨ à¤•à¤¾ à¤œà¥à¤¯à¤¾à¤®à¤¿à¤¤à¥€à¤¯ à¤†à¤•à¤¾à¤° à¤šà¥à¤¨à¥‡à¤‚à¥¤',
        waste: 'à¤…à¤¨à¥à¤¶à¤‚à¤¸à¤¿à¤¤ à¤…à¤ªà¤¶à¤¿à¤·à¥à¤Ÿ: à¤†à¤¯à¤¤à¤¾à¤•à¤¾à¤° à¤•à¥‡ à¤²à¤¿à¤ 5%, à¤˜à¥à¤®à¤¾à¤µà¤¦à¤¾à¤° à¤•à¤¿à¤¨à¤¾à¤°à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤ 10%, à¤œà¤Ÿà¤¿à¤² à¤†à¤•à¤¾à¤° à¤•à¥‡ à¤²à¤¿à¤ 15%à¥¤',
        rollSize: 'à¤®à¤¾à¤¨à¤• à¤˜à¤¾à¤¸ à¤°à¥‹à¤² = 10 à¤µà¤°à¥à¤— à¤«à¥à¤Ÿ (à¤²à¤—à¤­à¤— 0.93 à¤µà¤°à¥à¤— à¤®à¥€à¤Ÿà¤°)à¥¤ à¤…à¤ªà¤¨à¥‡ à¤µà¤¿à¤•à¥à¤°à¥‡à¤¤à¤¾ à¤¸à¥‡ à¤ªà¥à¤·à¥à¤Ÿà¤¿ à¤•à¤°à¥‡à¤‚à¥¤',
        rollsPerPallet: 'à¤®à¤¾à¤¨à¤• à¤ªà¥ˆà¤²à¥‡à¤Ÿ = 45 à¤¸à¥‡ 50 à¤°à¥‹à¤² (à¤²à¤—à¤­à¤— 450 à¤µà¤°à¥à¤— à¤«à¥à¤Ÿ)à¥¤',
        pricePerSqFt: 'à¤µà¥ˆà¤•à¤²à¥à¤ªà¤¿à¤•: à¤•à¥à¤² à¤¸à¤¾à¤®à¤—à¥à¤°à¥€ à¤¬à¤œà¤Ÿ à¤•à¤¾ à¤…à¤¨à¥à¤®à¤¾à¤¨ à¤²à¤—à¤¾à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤ªà¥à¤°à¤¤à¤¿ à¤µà¤°à¥à¤— à¤«à¥à¤Ÿ à¤¦à¤° à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚à¥¤',
        soilDepth: 'à¤…à¤¨à¥à¤¶à¤‚à¤¸à¤¿à¤¤: à¤˜à¤¾à¤¸ à¤¬à¤¿à¤›à¤¾à¤¨à¥‡ à¤¸à¥‡ à¤ªà¤¹à¤²à¥‡ 3-4 à¤‡à¤‚à¤š (8-10 à¤¸à¥‡à¤®à¥€) à¤‰à¤ªà¤œà¤¾à¤Š à¤®à¤¿à¤Ÿà¥à¤Ÿà¥€ à¤•à¥€ à¤ªà¤°à¤¤à¥¤',
        pricePerSoilCuYd: 'à¤ªà¥à¤°à¤¤à¤¿ à¤˜à¤¨ à¤—à¤œ à¤¯à¤¾ à¤˜à¤¨ à¤®à¥€à¤Ÿà¤° à¤‰à¤ªà¤œà¤¾à¤Š à¤®à¤¿à¤Ÿà¥à¤Ÿà¥€ à¤•à¥€ à¤”à¤¸à¤¤ à¤²à¤¾à¤—à¤¤à¥¤',
      },
      options: {
        shape: {
          rectangle: 'à¤†à¤¯à¤¤à¤¾à¤•à¤¾à¤° / à¤µà¤°à¥à¤—à¤¾à¤•à¤¾à¤° (à¤²à¤‚à¤¬à¤¾à¤ˆ Ã— à¤šà¥Œà¤¡à¤¼à¤¾à¤ˆ)',
          circle: 'à¤µà¥ƒà¤¤à¥à¤¤à¤¾à¤•à¤¾à¤° (à¤µà¥à¤¯à¤¾à¤¸)',
          triangle: 'à¤¤à¥à¤°à¤¿à¤­à¥à¤œ (à¤†à¤§à¤¾à¤° Ã— à¤Šà¤‚à¤šà¤¾à¤ˆ)',
          trapezoid: 'à¤¸à¤®à¤²à¤®à¥à¤¬ (à¤†à¤§à¤¾à¤° 1 + à¤†à¤§à¤¾à¤° 2 Ã— à¤Šà¤‚à¤šà¤¾à¤ˆ)',
          'l-shape': 'L-à¤†à¤•à¤¾à¤° (à¤¦à¥‹ à¤œà¥à¤¡à¤¼à¥‡ à¤¹à¥à¤ à¤–à¤‚à¤¡)',
          irregular: 'à¤…à¤¨à¤¿à¤¯à¤®à¤¿à¤¤ (à¤¸à¥€à¤§à¥‡ à¤•à¥à¤² à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¤«à¤² à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚)',
        },
        sodType: {
          bermuda: 'à¤¬à¤°à¤®à¥‚à¤¡à¤¾ à¤˜à¤¾à¤¸ (à¤—à¤°à¥à¤® à¤®à¥Œà¤¸à¤® à¤µ à¤§à¥‚à¤ª à¤•à¥‡ à¤²à¤¿à¤)',
          'kentucky-bluegrass': 'à¤•à¥‡à¤‚à¤Ÿà¤•à¥€ à¤¬à¥à¤²à¥‚à¤—à¥à¤°à¤¾à¤¸ (à¤ à¤‚à¤¡à¥‡ à¤µ à¤¸à¤®à¤¶à¥€à¤¤à¥‹à¤·à¥à¤£ à¤®à¥Œà¤¸à¤® à¤•à¥‡ à¤²à¤¿à¤)',
          fescue: 'à¤Ÿà¥‰à¤² à¤«à¥‡à¤¸à¥à¤•à¥à¤¯à¥‚ (à¤¸à¥‚à¤–à¤¾ à¤ªà¥à¤°à¤¤à¤¿à¤°à¥‹à¤§à¥€ à¤µ à¤Ÿà¤¿à¤•à¤¾à¤Š)',
          zoysia: 'à¤œà¤¼à¥‹à¤¯à¤¸à¤¿à¤¯à¤¾ à¤˜à¤¾à¤¸ (à¤˜à¤¨à¥€ à¤µ à¤ªà¥à¤°à¥€à¤®à¤¿à¤¯à¤® à¤²à¥‰à¤¨)',
          'st-augustine': 'à¤¸à¥‡à¤‚à¤Ÿ à¤‘à¤—à¤¸à¥à¤Ÿà¥€à¤¨ (à¤¤à¤Ÿà¥€à¤¯ à¤µ à¤—à¤°à¥à¤® à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤)',
          centipede: 'à¤¸à¥‡à¤‚à¤Ÿà¥€à¤ªà¥€à¤¡ à¤˜à¤¾à¤¸ (à¤•à¤® à¤°à¤–à¤°à¤–à¤¾à¤µ)',
          bahia: 'à¤¬à¤¹à¤¿à¤¯à¤¾ à¤˜à¤¾à¤¸ (à¤®à¤œà¤¬à¥‚à¤¤ à¤”à¤° à¤Ÿà¤¿à¤•à¤¾à¤Š)',
          rye: 'à¤ªà¥‡à¤°à¥‡à¤¨à¤¿à¤¯à¤² à¤°à¤¾à¤ˆ (à¤¤à¥‡à¤œ à¤µà¤¿à¤•à¤¾à¤¸)',
        },
      },
      article: `## à¤˜à¤¾à¤¸ à¤°à¥‹à¤² à¤•à¥ˆà¤²à¤•à¥à¤²à¥‡à¤Ÿà¤° à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¥ˆà¤¸à¥‡ à¤•à¤°à¥‡à¤‚

à¤…à¤ªà¤¨à¥‡ à¤²à¥‰à¤¨ à¤•à¤¾ à¤†à¤•à¤¾à¤° à¤šà¥à¤¨à¥‡à¤‚ à¤”à¤° à¤®à¤¾à¤ª à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚à¥¤ à¤•à¥ˆà¤²à¤•à¥à¤²à¥‡à¤Ÿà¤° à¤¸à¥à¤µà¤šà¤¾à¤²à¤¿à¤¤ à¤°à¥‚à¤ª à¤¸à¥‡ à¤•à¥à¤² à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¤«à¤² à¤•à¥€ à¤—à¤£à¤¨à¤¾ à¤•à¤°à¥‡à¤—à¤¾, à¤•à¥‹à¤¨à¥‹à¤‚ à¤•à¥€ à¤•à¤Ÿà¤¿à¤‚à¤— à¤•à¥‡ à¤²à¤¿à¤ à¤…à¤ªà¤¶à¤¿à¤·à¥à¤Ÿ à¤œà¥‹à¤¡à¤¼à¥‡à¤—à¤¾, à¤”à¤° à¤†à¤ªà¤•à¥‹ à¤†à¤µà¤¶à¥à¤¯à¤• à¤°à¥‹à¤² à¤”à¤° à¤ªà¥ˆà¤²à¥‡à¤Ÿ à¤•à¥€ à¤•à¥à¤² à¤¸à¤‚à¤–à¥à¤¯à¤¾ à¤¬à¤¤à¤¾à¤à¤—à¤¾à¥¤

## à¤—à¤£à¤¨à¤¾ à¤¸à¥‚à¤¤à¥à¤°

\`\`\`
1. à¤¶à¥à¤¦à¥à¤§ à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¤«à¤²    = à¤†à¤•à¤¾à¤° à¤•à¥‡ à¤…à¤¨à¥à¤¸à¤¾à¤° à¤¸à¥‚à¤¤à¥à¤° (à¤²à¤‚à¤¬à¤¾à¤ˆ Ã— à¤šà¥Œà¤¡à¤¼à¤¾à¤ˆ)
2. à¤•à¥à¤² à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¤«à¤²     = à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¤«à¤² Ã— à¤¸à¤®à¤¾à¤¨ à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¥‹à¤‚ à¤•à¥€ à¤¸à¤‚à¤–à¥à¤¯à¤¾
3. à¤…à¤ªà¤¶à¤¿à¤·à¥à¤Ÿ à¤®à¤¾à¤°à¥à¤œà¤¿à¤¨   = à¤•à¥à¤² à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¤«à¤² Ã— (à¤…à¤ªà¤¶à¤¿à¤·à¥à¤Ÿ % Ã· 100)
4. à¤‘à¤°à¥à¤¡à¤° à¤•à¥€ à¤œà¤¾à¤¨à¥‡ à¤µà¤¾à¤²à¥€ à¤˜à¤¾à¤¸ = à¤•à¥à¤² à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¤«à¤² + à¤…à¤ªà¤¶à¤¿à¤·à¥à¤Ÿ à¤®à¤¾à¤°à¥à¤œà¤¿à¤¨
5. à¤†à¤µà¤¶à¥à¤¯à¤• à¤°à¥‹à¤²       = à¤¸à¥€à¤²à¤¿à¤‚à¤—(à¤‘à¤°à¥à¤¡à¤° à¤®à¤¾à¤¤à¥à¤°à¤¾ Ã· à¤ªà¥à¤°à¤¤à¤¿ à¤°à¥‹à¤² à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¤«à¤²)
6. à¤†à¤µà¤¶à¥à¤¯à¤• à¤ªà¥ˆà¤²à¥‡à¤Ÿ     = à¤¸à¥€à¤²à¤¿à¤‚à¤—(à¤‘à¤°à¥à¤¡à¤° à¤®à¤¾à¤¤à¥à¤°à¤¾ Ã· à¤ªà¥à¤°à¤¤à¤¿ à¤ªà¥ˆà¤²à¥‡à¤Ÿ à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¤«à¤²)
\`\`\``,
    },
    zh: {
      name: 'è‰çš®ä¸Žè‰åªå·è®¡ç®—å™¨',
      shortDescription:
        'å…è´¹è‰çš®é“ºè®¾è®¡ç®—å™¨ã€‚æ ¹æ®è‰åªå½¢çŠ¶ç²¾ç¡®è®¡ç®—æ‰€éœ€è‰çš®å·æ•°ã€æ‰˜ç›˜æ•°ã€æŸè€—çŽ‡ã€è¡¨åœŸå¹³æ•´é‡åŠæ€»æˆæœ¬ä¼°ç®—ã€‚',
      helpTexts: {
        shape: 'é€‰æ‹©è‰åªåŒºåŸŸçš„å‡ ä½•å½¢çŠ¶ä»¥å‡†ç¡®è®¡ç®—è‰çš®é“ºè®¾é¢ç§¯ã€‚',
        waste: 'å»ºè®®æŸè€—ç³»æ•°ï¼šè§„æ•´çŸ©å½¢ 5%ï¼Œå¸¦å¼§å½¢èŠ±å› 10%ï¼Œå¤æ‚å¼‚å½¢åœ°å— 15%ã€‚',
        rollSize: 'æ ‡å‡†è‰çš®å·è§„æ ¼ = 10å¹³æ–¹è‹±å°ºï¼ˆçº¦0.93å¹³æ–¹ç±³ï¼‰ã€‚è¯·å‘å½“åœ°ä¾›åº”å•†ç¡®è®¤ã€‚',
        rollsPerPallet: 'æ ‡å‡†æ‰˜ç›˜ = 45è‡³50å·ï¼ˆçº¦40-45å¹³æ–¹ç±³ï¼‰ã€‚',
        pricePerSqFt: 'å¯é€‰ â€” è¾“å…¥æ¯å¹³æ–¹è‹±å°ºæˆ–æ¯å¹³æ–¹ç±³ä»·æ ¼ä»¥ä¼°ç®—é‡‡è´­é¢„ç®—ã€‚',
        soilDepth: 'å»ºè®®åŽšåº¦ï¼šé“ºè®¾è‰çš®å‰å…ˆé“ºè®¾ 7.5-10 åŽ˜ç±³ï¼ˆ3-4è‹±å¯¸ï¼‰ä¼˜è´¨ç§æ¤åœŸ/æ”¹è‰¯è¡¨åœŸã€‚',
        pricePerSoilCuYd: 'ç§æ¤åœŸ/è¡¨åœŸæ¯ç«‹æ–¹ç æˆ–æ¯ç«‹æ–¹ç±³çš„å¹³å‡é€è¾¾å•ä»·ã€‚',
      },
      options: {
        shape: {
          rectangle: 'çŸ©å½¢ / æ­£æ–¹å½¢ (é•¿ Ã— å®½)',
          circle: 'åœ†å½¢ (ç›´å¾„)',
          triangle: 'ä¸‰è§’å½¢ (åº• Ã— é«˜)',
          trapezoid: 'æ¢¯å½¢ (ä¸Šåº• + ä¸‹åº• Ã— é«˜)',
          'l-shape': 'Låž‹æŠ˜è§’åŒºåŸŸ (ä¸¤ä¸ªç›¸è¿žåŒºåŸŸ)',
          irregular: 'ä¸è§„åˆ™åœ°å— (ç›´æŽ¥è¾“å…¥æ€»é¢ç§¯)',
        },
        sodType: {
          bermuda: 'ç™¾æ…•å¤§è‰ / ç‹—ç‰™æ ¹ (è€æ™’è€è¸©ï¼Œæš–å­£åž‹)',
          'kentucky-bluegrass': 'è‰åœ°æ—©ç†Ÿç¦¾ / è‚¯å¡”åŸºè“è‰ (å†·å­£åž‹ç»å…¸è‰åª)',
          fescue: 'é«˜ç¾ŠèŒ… (æŠ—æ—±è€ç£¨ï¼Œé€‚åº”æ€§å¼º)',
          zoysia: 'ç»“ç¼•è‰ / ç»†å¶ç»“ç¼•è‰ (å¯†ç”Ÿè´¨ä¼˜)',
          'st-augustine': 'åœ£å¥¥å¤æ–¯æ±€è‰ (é€‚åˆæ²¿æµ·ä¸Žæš–åŒº)',
          centipede: 'å‡ä¿­è‰ / èœˆèš£è‰ (ä½Žç»´æŠ¤ç®¡ç†)',
          bahia: 'ç™¾å–œè‰ (ç²—æ”¾è€æ—±)',
          rye: 'å¤šå¹´ç”Ÿé»‘éº¦è‰ (å‘èŠ½è¿…é€Ÿï¼Œå››å­£å¸¸é’)',
        },
      },
      article: `## å¦‚ä½•ä½¿ç”¨è‰çš®è®¡ç®—å™¨

é€‰æ‹©è‰åªå½¢çŠ¶å¹¶è¾“å…¥é•¿å®½ç­‰å°ºå¯¸ã€‚è®¡ç®—å™¨å°†è‡ªåŠ¨è®¡ç®—ç²¾ç¡®å‡€é¢ç§¯ã€æ ¹æ®è¾¹ç¼˜è£å‰ªæ·»åŠ åˆç†æŸè€—ï¼Œå¹¶è‡ªåŠ¨æ¢ç®—ä¸ºæ‰€éœ€è´­ä¹°çš„è‰çš®å·æ•°åŠå®Œæ•´æ‰˜ç›˜æ•°ã€‚

## è‰çš®ç”¨é‡è®¡ç®—å…¬å¼

\`\`\`
1. å‡ ä½•å‡€é¢ç§¯   = å½¢çŠ¶é¢ç§¯å…¬å¼ï¼ˆé•¿Ã—å®½ã€Ï€rÂ²ç­‰ï¼‰
2. åŸºç¡€æ€»é¢ç§¯   = å‡€é¢ç§¯ Ã— ç›¸åŒåŒºåŸŸæ•°é‡
3. è£å‰ªæŸè€—å‚¨å¤‡ = åŸºç¡€æ€»é¢ç§¯ Ã— (æŸè€—æ¯”ä¾‹ % Ã· 100)
4. å»ºè®®é‡‡è´­æ€»é‡ = åŸºç¡€æ€»é¢ç§¯ + è£å‰ªæŸè€—å‚¨å¤‡
5. æ‰€éœ€è‰çš®å·æ•° = å‘ä¸Šå–æ•´(å»ºè®®é‡‡è´­æ€»é‡ Ã· å•å·é¢ç§¯)
6. æ‰€éœ€æ‰˜ç›˜æ•°   = å‘ä¸Šå–æ•´(å»ºè®®é‡‡è´­æ€»é‡ Ã· å•æ‰˜ç›˜å®¹é‡)
\`\`\``,
    },
    ja: {
      name: 'å¤©ç„¶èŠãƒ»ãƒ­ãƒ¼ãƒ«èŠ è¨ˆç®—æ©Ÿ',
      shortDescription:
        'åº­ã‚„ç·‘åœ°ã®å½¢çŠ¶ã‹ã‚‰å¿…è¦ãªãƒ­ãƒ¼ãƒ«èŠã®æžšæ•°ã€ãƒ‘ãƒ¬ãƒƒãƒˆæ•°ã€ãƒ­ã‚¹çŽ‡ã€ç›®åœŸãƒ»å®¢åœŸé‡ãŠã‚ˆã³è²»ç”¨ã‚’æ­£ç¢ºã«è¦‹ç©ã‚‚ã‚Šãƒ»è¨ˆç®—ã—ã¾ã™ã€‚',
      helpTexts: {
        shape: 'åº­ã®å¹³é¢å½¢çŠ¶ã‚’é¸æŠžã—ã¦ã€æ­£ç¢ºãªèŠç”Ÿæ–½å·¥é¢ç©ã‚’ç®—å‡ºã—ã¾ã™ã€‚',
        waste: 'æŽ¨å¥¨ãƒ­ã‚¹çŽ‡ï¼šå››è§’å½¢ 5%ã€ã‚«ãƒ¼ãƒ–ã‚„éšœå®³ç‰©ã‚ã‚Š 10%ã€å¤‰å½¢åœ° 15%ã€‚',
        rollSize: 'æ¨™æº–ãƒ­ãƒ¼ãƒ«èŠã‚µã‚¤ã‚º = ç´„10å¹³æ–¹ãƒ•ã‚£ãƒ¼ãƒˆï¼ˆç´„0.93mÂ² / 1å¹³ç±³ç›¸å½“ï¼‰ã€‚',
        rollsPerPallet: 'æ¨™æº–ãƒ‘ãƒ¬ãƒƒãƒˆ = 45ã€œ50ãƒ­ãƒ¼ãƒ«ï¼ˆç´„40ã€œ45mÂ²åˆ†ï¼‰ã€‚',
        pricePerSqFt: 'ä»»æ„ â€” ãŽ¡ã‚ãŸã‚Šã¾ãŸã¯å¹³æ–¹ãƒ•ã‚£ãƒ¼ãƒˆã‚ãŸã‚Šã®ææ–™å˜ä¾¡ã‚’å…¥åŠ›ã—ã¦äºˆç®—ã‚’ç®—å‡ºã€‚',
        soilDepth: 'æŽ¨å¥¨ï¼šèŠå¼µã‚Šå‰ã«7ã€œ10cmã®è‰¯è³ªãªåºŠåœŸãƒ»å®¢åœŸã‚’å…¥ã‚Œã¦æ•´åœ°ã—ã¾ã™ã€‚',
        pricePerSoilCuYd: 'å®¢åœŸãƒ»åŸ¹é¤ŠåœŸã®ç«‹æ–¹ãƒ¤ãƒ¼ãƒ‰ã¾ãŸã¯ç«‹æ–¹ãƒ¡ãƒ¼ãƒˆãƒ«ã‚ãŸã‚Šã®å¹³å‡ä¾¡æ ¼ã€‚',
      },
      options: {
        shape: {
          rectangle: 'é•·æ–¹å½¢ / æ­£æ–¹å½¢ (é•·ã• Ã— å¹…)',
          circle: 'å††å½¢ (ç›´å¾„)',
          triangle: 'ä¸‰è§’å½¢ (åº•è¾º Ã— é«˜ã•)',
          trapezoid: 'å°å½¢ (ä¸Šåº• + ä¸‹åº• Ã— é«˜ã•)',
          'l-shape': 'Lå­—åž‹ (é€£çµã—ãŸ2ã¤ã®åŒºç”»)',
          irregular: 'å¤‰å½¢åœ°ãƒ»ä¸è¦å‰‡ (ç·é¢ç©ã‚’ç›´æŽ¥å…¥åŠ›)',
        },
        sodType: {
          bermuda: 'ãƒãƒŸãƒ¥ãƒ¼ãƒ€ã‚°ãƒ©ã‚¹ (æš–åœ°åž‹ãƒ»æ—¥å½“ãŸã‚Šè‰¯å¥½ãƒ»é«˜è€ä¹…)',
          'kentucky-bluegrass': 'ã‚±ãƒ³ã‚¿ãƒƒã‚­ãƒ¼ãƒ–ãƒ«ãƒ¼ã‚°ãƒ©ã‚¹ (å¯’åœ°åž‹ãƒ»ç¾Žã—ã„æ¿ƒç·‘)',
          fescue: 'ãƒˆãƒ¼ãƒ«ãƒ•ã‚§ã‚¹ã‚¯ (è€ä¹¾æ€§ãƒ»è€é™°æ€§)',
          zoysia: 'é«˜éº—èŠ / ãƒŽã‚·ãƒ (æ—¥æœ¬ã§å®šç•ªã®é«˜å“è³ªèŠ)',
          'st-augustine': 'ã‚»ãƒ³ãƒˆã‚ªãƒ¼ã‚¬ã‚¹ãƒãƒ³ (æ¸©æš–åœ°ãƒ»æ²¿å²¸å‘ã‘)',
          centipede: 'ã‚»ãƒ³ãƒãƒ”ãƒ¼ãƒ‰ã‚°ãƒ©ã‚¹ (çœç®¡ç†åž‹)',
          bahia: 'ãƒãƒ’ã‚¢ã‚°ãƒ©ã‚¹ (å¼·å¥ãƒ»æ”¾ä»»å‘ã)',
          rye: 'ãƒšãƒ¬ãƒ‹ã‚¢ãƒ«ãƒ©ã‚¤ã‚°ãƒ©ã‚¹ (æ€¥é€Ÿå®šç€)',
        },
      },
      article: `## å¤©ç„¶èŠè¨ˆç®—æ©Ÿã®ä½¿ã„æ–¹

æ–½å·¥å ´æ‰€ã®å½¢çŠ¶ã‚’é¸ã³å¯¸æ³•ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚ç«¯éƒ¨ã®ã‚«ãƒƒãƒˆãƒ­ã‚¹ã‚’è‡ªå‹•ã§è¦‹è¾¼ã‚“ã å¿…è¦ãƒ­ãƒ¼ãƒ«æ•°ã€ãƒ‘ãƒ¬ãƒƒãƒˆæ•°ã€ãŠã‚ˆã³å®¢åœŸé‡ã‚’çž¬æ™‚ã«ç®—å‡ºã—ã¾ã™ã€‚

## èŠç”Ÿè¨ˆç®—å¼

\`\`\`
1. æ­£å‘³æ–½å·¥é¢ç© = å¹¾ä½•å­¦é¢ç©è¨ˆç®—ï¼ˆç¸¦ Ã— æ¨ª ãªã©ï¼‰
2. åˆè¨ˆé¢ç©     = æ­£å‘³é¢ç© Ã— åŒä¸€åŒºç”»æ•°
3. ç«¯éƒ¨ãƒ­ã‚¹ä»£   = åˆè¨ˆé¢ç© Ã— (ãƒ­ã‚¹çŽ‡ % Ã· 100)
4. å¿…è¦ç™ºæ³¨é¢ç© = åˆè¨ˆé¢ç© + ç«¯éƒ¨ãƒ­ã‚¹ä»£
5. å¿…è¦ãƒ­ãƒ¼ãƒ«æ•° = åˆ‡ã‚Šä¸Šã’(å¿…è¦ç™ºæ³¨é¢ç© Ã· 1ãƒ­ãƒ¼ãƒ«ã®é¢ç©)
6. å¿…è¦ãƒ‘ãƒ¬ãƒƒãƒˆ = åˆ‡ã‚Šä¸Šã’(å¿…è¦ç™ºæ³¨é¢ç© Ã· 1ãƒ‘ãƒ¬ãƒƒãƒˆã®ç©è¼‰é¢ç©)
\`\`\``,
    },
    ko: {
      name: 'ìž”ë”” ë¡¤ ë° ì‹œê³µ ê³„ì‚°ê¸°',
      shortDescription:
        'ì •ì›ê³¼ ë§ˆë‹¹ì˜ í˜•íƒœì— ë§žì¶”ì–´ í•„ìš”í•œ ì²œì—° ìž”ë”” ë¡¤ ìˆ˜, íŒŒë ˆíŠ¸ ìˆ˜, í• ì¦ ë¡œìŠ¤ìœ¨, ìƒí†  í™ í•„ìš”ëŸ‰ ë° ì´ ì‹œê³µ ë¹„ìš©ì„ ì •ë°€í•˜ê²Œ ê³„ì‚°í•©ë‹ˆë‹¤.',
      helpTexts: {
        shape: 'ì •í™•í•œ ìž”ë”” ì‹œê³µ ë©´ì ì„ ì‚°ì¶œí•˜ê¸° ìœ„í•´ ë§ˆë‹¹ì˜ ê¸°í•˜í•™ì  í˜•íƒœë¥¼ ì„ íƒí•˜ì„¸ìš”.',
        waste: 'ê¶Œìž¥ ì—¬ìœ ë¶„(ë¡œìŠ¤ìœ¨): ë‹¨ìˆœ ì‚¬ê°í˜• 5%, ê³¡ì„  ë° ìž¥ì• ë¬¼ êµ¬ì—­ 10%, ë¹„ì •í˜• ë§ˆë‹¹ 15%.',
        rollSize: 'í‘œì¤€ ìž”ë”” ë¡¤ ê·œê²© = ì•½ 10 sq ft (ì•½ 0.93 mÂ²). ê³µê¸‰ì—…ì²´ ê·œê²©ì„ í™•ì¸í•˜ì„¸ìš”.',
        rollsPerPallet: 'í‘œì¤€ 1 íŒŒë ˆíŠ¸ = 45~50 ë¡¤ (ì•½ 40~45 mÂ² ì‹œê³µ ë¶„ëŸ‰).',
        pricePerSqFt: 'ì„ íƒì‚¬í•­ â€” mÂ² ë˜ëŠ” í‰ë°©í”¼íŠ¸ë‹¹ ìžìž¬ ë‹¨ê°€ë¥¼ ìž…ë ¥í•˜ì—¬ ì˜ˆì‚°ì„ ì‚°ì¶œí•©ë‹ˆë‹¤.',
        soilDepth: 'ê¶Œìž¥ì‚¬í•­: ìž”ë”” ì‹ìž¬ ì „ 8~10cm ë‘ê»˜ì˜ ì–‘ì§ˆì˜ ë³µí† /ìƒí†  ì§€ë°˜ ì •ì§€.',
        pricePerSoilCuYd: 'ìž…ë°©ì•¼ë“œ ë˜ëŠ” ìž…ë°©ë¯¸í„°ë‹¹ ìƒí†  í™ì˜ í‰ê·  ìžìž¬ë¹„.',
      },
      options: {
        shape: {
          rectangle: 'ì§ì‚¬ê°í˜• / ì •ì‚¬ê°í˜• (ê¸¸ì´ Ã— ë„ˆë¹„)',
          circle: 'ì›í˜• (ì§€ë¦„)',
          triangle: 'ì‚¼ê°í˜• (ë°‘ë³€ Ã— ë†’ì´)',
          trapezoid: 'ì‚¬ë‹¤ë¦¬ê¼´ (ë°‘ë³€ 1 + ë°‘ë³€ 2 Ã— ë†’ì´)',
          'l-shape': 'Lìží˜• êµ¬ì¡° (ì—°ê²°ëœ ë‘ êµ¬ì—­)',
          irregular: 'ë¹„ì •í˜• í˜•íƒœ (ì´ ë©´ì  ì§ì ‘ ìž…ë ¥)',
        },
        sodType: {
          bermuda: 'ë²„ë®¤ë‹¤ ê·¸ë¼ìŠ¤ (ë‚œì§€í˜•, ì–‘ì§€ ë° ë‚´ë§ˆëª¨ì„± ìš°ìˆ˜)',
          'kentucky-bluegrass': 'ì¼„í„°í‚¤ ë¸”ë£¨ê·¸ë¼ìŠ¤ (í•œì§€í˜•, ì‚¬ê³„ì ˆ í‘¸ë¥¸ ìž”ë””)',
          fescue: 'í†¨ íŽ˜ìŠ¤í (ê°€ë­„ì— ê°•í•˜ê³  ë‚´êµ¬ì„± ìš°ìˆ˜)',
          zoysia: 'í•œêµ­ìž”ë”” / ì¡°ì´ì‹œì•„ (êµ­ë‚´ ëŒ€í‘œ ìž”ë””, ì¹˜ë°€í•œ ë°€ë„)',
          'st-augustine': 'ì„¸ì¸íŠ¸ ì–´ê±°ìŠ¤í‹´ (í•´ì•ˆ ë° ì˜¨ë‚œ ê¸°í›„)',
          centipede: 'ì„¼í‹°í”¼ë“œ ê·¸ë¼ìŠ¤ (ë‚®ì€ ê´€ë¦¬ ë¹„ìš©)',
          bahia: 'ë°”ížˆì•„ ê·¸ë¼ìŠ¤ (ê°•í•œ ë‚´êµ¬ì„±)',
          rye: 'íŽ˜ë ˆë‹ˆì–¼ ë¼ì´ê·¸ë¼ìŠ¤ (ë¹ ë¥¸ í™œì°©ê³¼ í”¼ë³µ)',
        },
      },
      article: `## ìž”ë”” ì‹œê³µ ê³„ì‚°ê¸° ì‚¬ìš© ë°©ë²•

ë§ˆë‹¹ì˜ í˜•íƒœë¥¼ ì„ íƒí•˜ê³  ì¹˜ìˆ˜ë¥¼ ìž…ë ¥í•˜ì„¸ìš”. ëª¨ì„œë¦¬ ìž¬ë‹¨ìœ¼ë¡œ ì¸í•œ ë¡œìŠ¤ìœ¨ì„ í¬í•¨í•˜ì—¬ ì£¼ë¬¸í•´ì•¼ í•˜ëŠ” ì •í™•í•œ ìž”ë”” ë¡¤ ìˆ˜ì™€ íŒŒë ˆíŠ¸ ìˆ˜, ìƒí†  í™ ë¶€í”¼ë¥¼ ì¦‰ì‹œ ì‚°ì¶œí•©ë‹ˆë‹¤.

## ìž”ë”” ì†Œìš”ëŸ‰ ê³„ì‚° ê³µì‹

\`\`\`
1. ìˆœ ì‹œê³µ ë©´ì   = í˜•íƒœë³„ ë©´ì  ê³µì‹ (ê¸¸ì´ Ã— ë„ˆë¹„ ë“±)
2. ì´ ì†Œìš” ë©´ì   = ë©´ì  Ã— ë™ì¼ êµ¬ì—­ ê°œìˆ˜
3. ìž¬ë‹¨ ë¡œìŠ¤ ì—¬ìœ = ì´ ì†Œìš” ë©´ì  Ã— (ë¡œìŠ¤ìœ¨ % Ã· 100)
4. ìµœì¢… ì£¼ë¬¸ ë©´ì = ì´ ì†Œìš” ë©´ì  + ìž¬ë‹¨ ë¡œìŠ¤ ì—¬ìœ 
5. í•„ìš” ë¡¤ ìˆ˜    = ì˜¬ë¦¼(ìµœì¢… ì£¼ë¬¸ ë©´ì  Ã· 1ë¡¤ ë©´ì )
6. í•„ìš” íŒŒë ˆíŠ¸ ìˆ˜= ì˜¬ë¦¼(ìµœì¢… ì£¼ë¬¸ ë©´ì  Ã· 1íŒŒë ˆíŠ¸ ì‹œê³µ ë©´ì )
\`\`\``,
    },
  },
  'insulation-calculator': {
    en: {
          "name": "Insulation Calculator",
          "shortDescription": "Free insulation calculator. Calculate R-value, batt packages, blown-in bags, spray foam board feet, and installation cost for attics, walls, crawlspaces, and roofs per IECC 2021 code.",
          "helpTexts": {
                "application": "Select where the insulation will be installed to load building code R-value standards.",
                "area": "Gross square footage of the attic, wall, or floor surface to be insulated.",
                "climateZone": "Determines minimum code-prescribed R-values according to IECC 2021 / IRC Table N1102.1.3.",
                "targetRValue": "Desired thermal resistance rating (e.g. R-13, R-15, R-21, R-30, R-38, R-49, R-60).",
                "materialType": "Different insulation materials provide varying thermal performance per inch of depth.",
                "framingSpacing": "Deducts the surface area occupied by wood framing studs/joists for cavity installations.",
                "existingRValue": "If adding insulation to an existing attic or wall, enter current R-value to calculate net deficit.",
                "waste": "Recommended planning allowance: 5% for open attics, 8-10% for walls with windows/doors.",
                "coveragePerPack": "Optional â€” override default square footage per package from manufacturer specification.",
                "pricePerUnit": "Optional â€” enter unit cost per sq ft to estimate material purchase budget.",
                "laborCostPerSqFt": "Optional â€” enter professional contractor installation labor cost per sq ft.",
                "includeVaporBarrier": "Calculate 1,000 sq ft rolls of 6-mil polyethylene vapor retarder film."
          },
          "options": {
                "application": {
                      "attic": "Attic Floor (Flat Ceiling)",
                      "wall-2x4": "Exterior Wall (2Ã—4 Studs, 3.5\" Cavity)",
                      "wall-2x6": "Exterior Wall (2Ã—6 Studs, 5.5\" Cavity)",
                      "cathedral": "Cathedral Ceiling / Roof Rafters",
                      "floor-crawlspace": "Floor over Crawlspace / Unheated Basement",
                      "basement-wall": "Basement Foundation Wall",
                      "custom": "Custom Application"
                },
                "climateZone": {
                      "zone-1": "Zone 1 â€” Very Hot (Miami, FL / Hawaii)",
                      "zone-2": "Zone 2 â€” Hot (Houston, TX / Phoenix, AZ / Orlando, FL)",
                      "zone-3": "Zone 3 â€” Warm (Atlanta, GA / Dallas, TX / Las Vegas, NV)",
                      "zone-4": "Zone 4 â€” Mixed / Central (DC / Seattle, WA / St. Louis, MO)",
                      "zone-5": "Zone 5 â€” Cool (Chicago, IL / Denver, CO / Boston, MA)",
                      "zone-6": "Zone 6 â€” Cold (Minneapolis, MN / Burlington, VT)",
                      "zone-7-8": "Zone 7 & 8 â€” Very Cold / Subarctic (Duluth, MN / Alaska)",
                      "custom": "Custom Target R-Value"
                },
                "materialType": {
                      "fiberglass-batt": "Fiberglass Batts & Rolls (R-3.4 / in)",
                      "rockwool-batt": "Mineral Wool / Rockwool Batts (R-3.8 / in)",
                      "cellulose-blown": "Blown-In Cellulose (Loose-Fill R-3.6 / in)",
                      "fiberglass-blown": "Blown-In Fiberglass (Loose-Fill R-2.5 / in)",
                      "sprayfoam-open": "Open-Cell Spray Foam (R-3.7 / in, 0.5 lb)",
                      "sprayfoam-closed": "Closed-Cell Spray Foam (R-6.7 / in, 2.0 lb vapor barrier)",
                      "rigid-xps": "Rigid Foam Board XPS (R-5.0 / in)",
                      "rigid-polyiso": "Rigid Polyiso Board (R-6.5 / in)"
                },
                "framingSpacing": {
                      "continuous": "Continuous / No Framing Deduction (Attic floor, exterior foam)",
                      "16-oc": "16 inches On-Center (Standard 2x4 & 2x6 walls, ~10% framing)",
                      "24-oc": "24 inches On-Center (Advanced framing & roof trusses, ~7% framing)"
                }
          },
          "article": "## How to Use the Insulation Calculator\n\nSelect your application (attic, exterior wall, cathedral ceiling, or crawlspace) and choose your climate zone. The calculator loads minimum IECC 2021 building code R-value standards, accounts for wood framing deductions, and computes exact required thickness, batt packages, loose-fill bags, spray foam board-feet, and project costs.\n\n## Insulation Calculation Formulas\n\n```\n1. Net Cavity Area   = Gross Area Ã— (1 âˆ’ Framing Deduction Factor)\n2. Purchase Area     = Gross Area Ã— (1 + Waste % / 100)\n3. R-Value Deficit   = Target R-Value âˆ’ Existing R-Value\n4. Required Depth    = R-Value Deficit Ã· Material R-Value per Inch\n5. Batt Packs Needed = Ceil(Purchase Area Ã· Coverage per Pack)\n6. Blown-In Bags     = Ceil(Purchase Area Ã— R-Deficit Ã· Rating per Bag)\n7. Spray Foam Vol    = Purchase Area Ã— Depth in Inches (Board Feet)\n```"
    },
    es: {
          "name": "Calculadora de Aislamiento TÃ©rmico",
          "shortDescription": "Calcula el valor R, paquetes de mantas de fibra de vidrio/lana de roca, bolsas de celulosa soplada, pies tablares de espuma y costos segÃºn norma IECC 2021.",
          "helpTexts": {
                "application": "Selecciona la ubicaciÃ³n para cargar los estÃ¡ndares de valor R del cÃ³digo de construcciÃ³n.",
                "area": "Pies cuadrados o metros cuadrados brutos de la superficie a aislar.",
                "climateZone": "Determina los valores R mÃ­nimos exigidos por el cÃ³digo IECC 2021 / IRC.",
                "targetRValue": "ClasificaciÃ³n de resistencia tÃ©rmica deseada (ej. R-13, R-21, R-38, R-49, R-60).",
                "materialType": "Cada material ofrece un rendimiento tÃ©rmico distinto por pulgada de espesor.",
                "framingSpacing": "Descuenta el Ã¡rea ocupada por montantes de madera en instalaciones de cavidad.",
                "existingRValue": "Ingresa el valor R actual si estÃ¡s agregando aislamiento a un Ã¡tico o muro existente.",
                "waste": "Margen recomendado: 5% en Ã¡ticos abiertos, 8-10% en muros con puertas y ventanas.",
                "coveragePerPack": "Opcional â€” sobrescribe los pies cuadrados por paquete segÃºn el fabricante.",
                "pricePerUnit": "Opcional â€” costo unitario por sq ft o mÂ² para estimar el presupuesto de compra.",
                "laborCostPerSqFt": "Opcional â€” costo de instalaciÃ³n y mano de obra por unidad de Ã¡rea.",
                "includeVaporBarrier": "Calcula rollos de 1.000 sq ft de barrera de vapor de polietileno de 6 mil."
          },
          "options": {
                "application": {
                      "attic": "Piso del Ã¡tico (Techo plano)",
                      "wall-2x4": "Muro exterior (Montantes 2Ã—4, cavidad de 3.5\")",
                      "wall-2x6": "Muro exterior (Montantes 2Ã—6, cavidad de 5.5\")",
                      "cathedral": "Techo catedral / Vigas de cubierta",
                      "floor-crawlspace": "Piso sobre semisÃ³tano o espacio sanitario",
                      "basement-wall": "Muro de cimentaciÃ³n de sÃ³tano",
                      "custom": "AplicaciÃ³n personalizada"
                },
                "climateZone": {
                      "zone-1": "Zona 1 â€” Muy CÃ¡lido (Miami, FL / HawÃ¡i)",
                      "zone-2": "Zona 2 â€” CÃ¡lido (Houston, TX / Phoenix, AZ / Orlando, FL)",
                      "zone-3": "Zona 3 â€” Templado CÃ¡lido (Atlanta, GA / Dallas, TX)",
                      "zone-4": "Zona 4 â€” Mixto / Central (Seattle, WA / St. Louis, MO)",
                      "zone-5": "Zona 5 â€” FrÃ­o (Chicago, IL / Denver, CO / Boston, MA)",
                      "zone-6": "Zona 6 â€” Muy FrÃ­o (Minneapolis, MN / Burlington, VT)",
                      "zone-7-8": "Zona 7 y 8 â€” SubÃ¡rtico (Duluth, MN / Alaska)",
                      "custom": "Valor R personalizado"
                },
                "materialType": {
                      "fiberglass-batt": "Mantas de fibra de vidrio (R-3.4 / pulg)",
                      "rockwool-batt": "Lana de roca / Mineral Wool (R-3.8 / pulg)",
                      "cellulose-blown": "Celulosa soplada suelta (R-3.6 / pulg)",
                      "fiberglass-blown": "Fibra de vidrio soplada (R-2.5 / pulg)",
                      "sprayfoam-open": "Espuma spray celda abierta (R-3.7 / pulg)",
                      "sprayfoam-closed": "Espuma spray celda cerrada (R-6.7 / pulg, barrera vapor)",
                      "rigid-xps": "Placa rÃ­gida de poliestireno XPS (R-5.0 / pulg)",
                      "rigid-polyiso": "Placa rÃ­gida de poliisocianurato (R-6.5 / pulg)"
                },
                "framingSpacing": {
                      "continuous": "Continuo / Sin deducciÃ³n (Ãtico, espuma exterior)",
                      "16-oc": "16 pulgadas al centro (Muros estÃ¡ndar 2x4/2x6, ~10% madera)",
                      "24-oc": "24 pulgadas al centro (Estructura avanzada, ~7% madera)"
                }
          },
          "article": "## CÃ³mo Usar la Calculadora de Aislamiento TÃ©rmico\n\nSelecciona la aplicaciÃ³n (Ã¡tico, muro exterior o entrepiso) y tu zona climÃ¡tica. La herramienta calcula el espesor requerido, la deducciÃ³n de madera estructural, el nÃºmero de paquetes o bolsas de aislamiento y el presupuesto estimado del proyecto.\n\n## FÃ³rmulas de CÃ¡lculo\n\n```\n1. Ãrea neta de cavidad = Ãrea bruta Ã— (1 âˆ’ Factor de estructura)\n2. Ãrea de compra       = Ãrea bruta Ã— (1 + % desperdicio / 100)\n3. DÃ©ficit de valor R   = Valor R objetivo âˆ’ Valor R existente\n4. Espesor necesario    = DÃ©ficit de valor R Ã· Valor R por pulgada\n5. Paquetes necesarios  = Techo(Ãrea de compra Ã· Cobertura por paquete)\n6. Bolsas de celulosa   = Techo(Ãrea de compra Ã— DÃ©ficit R Ã· 720)\n7. Espuma en spray      = Ãrea de compra Ã— Espesor en pulgadas (Board Feet)\n```"
    },
    fr: {
          "name": "Calculateur d'Isolation Thermique",
          "shortDescription": "Calculez la valeur R, les paquets de matelas isolants, les sacs d'isolant soufflÃ©, le volume de mousse projetÃ©e et les coÃ»ts selon le code IECC 2021.",
          "helpTexts": {
                "application": "SÃ©lectionnez l'emplacement d'installation pour charger les normes de valeur R.",
                "area": "Surface brute totale en pieds carrÃ©s ou mÃ¨tres carrÃ©s Ã  isoler.",
                "climateZone": "DÃ©finit les exigences minimales de valeur R selon le code IECC 2021.",
                "targetRValue": "RÃ©sistance thermique souhaitÃ©e (ex. R-13, R-21, R-38, R-49, R-60).",
                "materialType": "Chaque matÃ©riau offre une performance thermique diffÃ©rente par pouce d'Ã©paisseur.",
                "framingSpacing": "DÃ©duit la surface occupÃ©e par l'ossature bois pour les cavitÃ©s murales.",
                "existingRValue": "Indiquez la valeur R existante pour une rÃ©novation ou un sur-isolement.",
                "waste": "Marge recommandÃ©e : 5% pour comble ouvert, 8-10% pour murs avec ouvertures.",
                "coveragePerPack": "Optionnel â€” surface couverte par paquet selon le fabricant.",
                "pricePerUnit": "Optionnel â€” prix unitaire des matÃ©riaux pour estimer le budget.",
                "laborCostPerSqFt": "Optionnel â€” coÃ»t d'installation de la main-d'Å“uvre au piÂ² ou mÂ².",
                "includeVaporBarrier": "Calcule les rouleaux de pare-vapeur polyÃ©thylÃ¨ne 6 mil (1000 piÂ²)."
          },
          "options": {
                "application": {
                      "attic": "Plancher de comble perdu (Plafond plat)",
                      "wall-2x4": "Mur extÃ©rieur (Montants 2Ã—4, cavitÃ© 3.5\")",
                      "wall-2x6": "Mur extÃ©rieur (Montants 2Ã—6, cavitÃ© 5.5\")",
                      "cathedral": "Plafond cathÃ©drale / Chevrons de toiture",
                      "floor-crawlspace": "Plancher sur vide sanitaire ou sous-sol",
                      "basement-wall": "Mur de fondation du sous-sol",
                      "custom": "Application personnalisÃ©e"
                },
                "climateZone": {
                      "zone-1": "Zone 1 â€” TrÃ¨s chaud (Miami, FL / HawaÃ¯)",
                      "zone-2": "Zone 2 â€” Chaud (Houston, TX / Phoenix, AZ)",
                      "zone-3": "Zone 3 â€” TempÃ©rÃ© chaud (Atlanta, GA / Dallas, TX)",
                      "zone-4": "Zone 4 â€” Mixte / Central (Seattle, WA / St. Louis)",
                      "zone-5": "Zone 5 â€” Froid (Chicago, IL / Denver / Boston)",
                      "zone-6": "Zone 6 â€” TrÃ¨s froid (Minneapolis, MN / QuÃ©bec)",
                      "zone-7-8": "Zone 7 & 8 â€” Subarctique (Duluth, MN / Alaska)",
                      "custom": "Valeur R personnalisÃ©e"
                },
                "materialType": {
                      "fiberglass-batt": "Laine de verre en matelas (R-3.4 / po)",
                      "rockwool-batt": "Laine de roche / Rockwool (R-3.8 / po)",
                      "cellulose-blown": "Ouate de cellulose soufflÃ©e (R-3.6 / po)",
                      "fiberglass-blown": "Laine de verre soufflÃ©e (R-2.5 / po)",
                      "sprayfoam-open": "Mousse polyurÃ©thane alvÃ©oles ouvertes (R-3.7 / po)",
                      "sprayfoam-closed": "Mousse polyurÃ©thane alvÃ©oles fermÃ©es (R-6.7 / po)",
                      "rigid-xps": "Panneau rigide polystyrÃ¨ne XPS (R-5.0 / po)",
                      "rigid-polyiso": "Panneau rigide polyisocyanurate (R-6.5 / po)"
                },
                "framingSpacing": {
                      "continuous": "Continu / Sans dÃ©duction (Comble, isolant extÃ©rieur)",
                      "16-oc": "16 pouces d'entraxe (Murs 2x4/2x6 standard, ~10% bois)",
                      "24-oc": "24 pouces d'entraxe (Ossature avancÃ©e, ~7% bois)"
                }
          },
          "article": "## Comment Utiliser le Calculateur d'Isolation\n\nSÃ©lectionnez votre zone climatique et le type de paroi. Le calculateur dÃ©duit l'ossature bois, dÃ©termine l'Ã©paisseur nÃ©cessaire et calcule les paquets de matelas ou sacs de cellulose Ã  commander.\n\n## Formules de Calcul\n\n```\n1. Surface nette cavitÃ©s = Surface brute Ã— (1 âˆ’ DÃ©duction ossature)\n2. Surface d'achat       = Surface brute Ã— (1 + % perte / 100)\n3. DÃ©ficit valeur R      = Valeur R cible âˆ’ Valeur R existante\n4. Ã‰paisseur requise     = DÃ©ficit R Ã· Valeur R par pouce\n5. Paquets de matelas    = Plafond(Surface d'achat Ã· Surface par paquet)\n6. Sacs de cellulose     = Plafond(Surface d'achat Ã— DÃ©ficit R Ã· 720)\n```"
    },
    de: {
          "name": "DÃ¤mmungsrechner & R-Wert Rechner",
          "shortDescription": "Berechnen Sie DÃ¤mmstoffdicke, Pakete von Klemmfilz/DÃ¤mmplatten, SÃ¤cke EinblasdÃ¤mmung und SprÃ¼hschaum nach IECC 2021 und GEG-Standards.",
          "helpTexts": {
                "application": "WÃ¤hlen Sie das Bauteil aus, um die Mindest-DÃ¤mmwerte zu laden.",
                "area": "Zu dÃ¤mmende Brutto-FlÃ¤che in Quadratmetern oder QuadratfuÃŸ.",
                "climateZone": "Bestimmt die Mindest-WÃ¤rmedÃ¤mmwerte nach geltender Energiesparnorm.",
                "targetRValue": "GewÃ¼nschter R-Wert / WÃ¤rmedurchgangswiderstand.",
                "materialType": "Verschiedene DÃ¤mmstoffe bieten unterschiedliche DÃ¤mmleistungen pro cm Dicke.",
                "framingSpacing": "Zieht den FlÃ¤chenanteil von HolzstÃ¤ndern/Sparren bei GefachdÃ¤mmung ab.",
                "existingRValue": "Geben Sie bei AltbaudÃ¤mmung den bereits vorhandenen R-Wert ein.",
                "waste": "Empfohlener Verschnitt: 5% bei oberster Geschossdecke, 8-10% bei WÃ¤nden.",
                "coveragePerPack": "Optional â€” Quadratmeter-Ergiebigkeit pro Paket laut Hersteller.",
                "pricePerUnit": "Optional â€” Materialkosten pro FlÃ¤cheneinheit zur Budgetermittlung.",
                "laborCostPerSqFt": "Optional â€” Montage- und Handwerkerkosten pro FlÃ¤cheneinheit.",
                "includeVaporBarrier": "Dampfbremsfolie (6 mil Polyethylen) mit einberechnen."
          },
          "options": {
                "application": {
                      "attic": "Oberste Geschossdecke / Dachboden",
                      "wall-2x4": "AuÃŸenwand (10 cm HolzstÃ¤nder)",
                      "wall-2x6": "AuÃŸenwand (15 cm HolzstÃ¤nder)",
                      "cathedral": "DachschrÃ¤ge / ZwischensparrendÃ¤mmung",
                      "floor-crawlspace": "Kellerdecke / Kriechkeller",
                      "basement-wall": "KellerauÃŸenwand / Perimeter",
                      "custom": "Individuelles Bauteil"
                },
                "climateZone": {
                      "zone-1": "Zone 1 â€” Sehr Warm (Tropisch / Subtropisch)",
                      "zone-2": "Zone 2 â€” Warm (SÃ¼dlage)",
                      "zone-3": "Zone 3 â€” GemÃ¤ÃŸigt Warm",
                      "zone-4": "Zone 4 â€” Mitteleuropa / GemÃ¤ÃŸigt",
                      "zone-5": "Zone 5 â€” KÃ¼hl / HÃ¶henlage",
                      "zone-6": "Zone 6 â€” Kalt / Voralpenland",
                      "zone-7-8": "Zone 7 & 8 â€” Extrem Kalt / Skandinavien",
                      "custom": "Individueller Zielwert"
                },
                "materialType": {
                      "fiberglass-batt": "Glaswolle-Klemmfilz (R-3.4 / Zoll)",
                      "rockwool-batt": "Steinwolle / Rockwool (R-3.8 / Zoll)",
                      "cellulose-blown": "Zellulose-EinblasdÃ¤mmung (R-3.6 / Zoll)",
                      "fiberglass-blown": "Glaswolle-EinblasdÃ¤mmung (R-2.5 / Zoll)",
                      "sprayfoam-open": "Offenzelliger SprÃ¼hschaum (R-3.7 / Zoll)",
                      "sprayfoam-closed": "Geschlossenzelliger PU-Ortschaum (R-6.7 / Zoll)",
                      "rigid-xps": "XPS-Hartschaumplatten (R-5.0 / Zoll)",
                      "rigid-polyiso": "PIR/Polyurethan-Hartschaum (R-6.5 / Zoll)"
                },
                "framingSpacing": {
                      "continuous": "VollflÃ¤chig / Ohne Holzabzug (Decke, Aufsparren)",
                      "16-oc": "40 cm Achsabstand (Standard Holzrahmenbau, ~10% Holz)",
                      "24-oc": "60 cm Achsabstand (Sparren-/TrÃ¤gerabstand, ~7% Holz)"
                }
          },
          "article": "## Verwendung des DÃ¤mmungsrechners\n\nGeben Sie Ihre DÃ¤mmflÃ¤che und das Bauteil ein. Der Rechner ermittelt automatisch die Mindestdicken, den HolzflÃ¤chenabzug im Gefach und die Anzahl der zu bestellenden DÃ¤mmpakete.\n\n## Berechnungsformeln\n\n```\n1. Netto-GefachflÃ¤che = BruttoflÃ¤che Ã— (1 âˆ’ Holzanteil)\n2. EinkaufsflÃ¤che    = BruttoflÃ¤che Ã— (1 + Verschnitt % / 100)\n3. BenÃ¶tigte Dicke   = R-Fehlwert Ã· DÃ¤mmwert pro cm\n4. DÃ¤mmpakete        = Aufrunden(EinkaufsflÃ¤che Ã· Paketinhalt)\n```"
    },
    pt: {
          "name": "Calculadora de Isolamento TÃ©rmico",
          "shortDescription": "Calcule o valor R, pacotes de lÃ£ de vidro/rocha, sacos de celulose e volume de espuma spray segundo as normas IECC 2021.",
          "helpTexts": {
                "application": "Selecione o local de instalaÃ§Ã£o para carregar os padrÃµes de isolamento tÃ©rmico.",
                "area": "Ãrea total da superfÃ­cie em metros quadrados ou pÃ©s quadrados a isolar.",
                "climateZone": "Define os valores mÃ­nimos de valor R exigidos por normas tÃ©cnicas.",
                "targetRValue": "ResistÃªncia tÃ©rmica desejada (ex. R-13, R-21, R-38, R-49, R-60).",
                "materialType": "Cada material oferece um desempenho tÃ©rmico especÃ­fico por polegada de espessura.",
                "framingSpacing": "Deduz a Ã¡rea ocupada por montantes de madeira ou perfis metÃ¡licos.",
                "existingRValue": "Informe o valor R existente em caso de reforma ou sobreposiÃ§Ã£o de isolamento.",
                "waste": "Margem de sobra recomendada: 5% em forros abertos, 8-10% em paredes.",
                "coveragePerPack": "Opcional â€” Ã¡rea de cobertura por pacote segundo o fabricante.",
                "pricePerUnit": "Opcional â€” custo unitÃ¡rio dos materiais para cÃ¡lculo do orÃ§amento.",
                "laborCostPerSqFt": "Opcional â€” custo de mÃ£o de obra de instalaÃ§Ã£o por unidade de Ã¡rea.",
                "includeVaporBarrier": "Calcula rolos de filme de polietileno de 6 mil (barreira de vapor)."
          },
          "options": {
                "application": {
                      "attic": "Piso do sÃ³tÃ£o / Forro superior",
                      "wall-2x4": "Parede exterior (Montantes 2Ã—4 / 9 cm)",
                      "wall-2x6": "Parede exterior (Montantes 2Ã—6 / 14 cm)",
                      "cathedral": "Telhado catedral / Caibros inclinados",
                      "floor-crawlspace": "Piso sobre vÃ£o sanitÃ¡rio / subsolo",
                      "basement-wall": "Parede de fundaÃ§Ã£o / subsolo",
                      "custom": "AplicaÃ§Ã£o personalizada"
                },
                "climateZone": {
                      "zone-1": "Zona 1 â€” Muito Quente (Litoral / Tropical)",
                      "zone-2": "Zona 2 â€” Quente",
                      "zone-3": "Zona 3 â€” Clima Ameno Quente",
                      "zone-4": "Zona 4 â€” Clima Temperado Central",
                      "zone-5": "Zona 5 â€” Clima Frio",
                      "zone-6": "Zona 6 â€” Clima Muito Frio",
                      "zone-7-8": "Zona 7 e 8 â€” SubÃ¡rtico",
                      "custom": "Valor R personalizado"
                },
                "materialType": {
                      "fiberglass-batt": "Mantas de lÃ£ de vidro (R-3.4 / pol)",
                      "rockwool-batt": "LÃ£ de rocha mineral (R-3.8 / pol)",
                      "cellulose-blown": "Celulose soprada solta (R-3.6 / pol)",
                      "fiberglass-blown": "LÃ£ de vidro soprada (R-2.5 / pol)",
                      "sprayfoam-open": "Espuma spray cÃ©lulas abertas (R-3.7 / pol)",
                      "sprayfoam-closed": "Espuma spray cÃ©lulas fechadas (R-6.7 / pol)",
                      "rigid-xps": "Painel rÃ­gido XPS (R-5.0 / pol)",
                      "rigid-polyiso": "Painel rÃ­gido poliisocianurato (R-6.5 / pol)"
                },
                "framingSpacing": {
                      "continuous": "ContÃ­nuo / Sem deduÃ§Ã£o (Forro, placas externas)",
                      "16-oc": "40 cm entre eixos (Paredes padrÃ£o, ~10% estrutura)",
                      "24-oc": "60 cm entre eixos (Estruturas leves, ~7% estrutura)"
                }
          },
          "article": "## Como Utilizar a Calculadora de Isolamento TÃ©rmico\n\nEscolha o elemento construtivo e a zona climÃ¡tica. A calculadora determina o isolamento adequado, deduz os montantes estruturais e indica a quantidade exata de pacotes ou sacos a adquirir."
    },
    it: {
          "name": "Calcolatore Isolamento Termico",
          "shortDescription": "Calcola il valore R, pacchi di lana di roccia/vetro, sacchi di cellulosa insufflata e schiuma spray secondo le norme energetiche IECC 2021.",
          "helpTexts": {
                "application": "Seleziona la parte dell'edificio per caricare i valori R di riferimento.",
                "area": "Superficie lorda da isolare in metri quadri o piedi quadri.",
                "climateZone": "Determina i requisiti minimi di resistenza termica in base al clima.",
                "targetRValue": "Valore R desiderato di resistenza termica.",
                "materialType": "Ogni materiale offre prestazioni termiche specifiche per unitÃ  di spessore.",
                "framingSpacing": "Detrae lo spazio occupato dai montanti in legno o metallo.",
                "existingRValue": "Inserisci il valore R esistente in caso di riqualificazione energetica.",
                "waste": "Sfrido consigliato: 5% per sottotetti aperti, 8-10% per pareti con aperture.",
                "coveragePerPack": "Opzionale â€” superficie coperta da un singolo pacco isolante.",
                "pricePerUnit": "Opzionale â€” costo unitario dei materiali per la stima del budget.",
                "laborCostPerSqFt": "Opzionale â€” costo della manodopera di posa per unitÃ  di superficie.",
                "includeVaporBarrier": "Includi rotoli di barriera al vapore in polietilene da 6 mil."
          },
          "options": {
                "application": {
                      "attic": "Sottotetto / Soletta di copertura piana",
                      "wall-2x4": "Parete esterna (Montanti da 9 cm / 3.5\")",
                      "wall-2x6": "Parete esterna (Montanti da 14 cm / 5.5\")",
                      "cathedral": "Tetto a vista / Trave su trave",
                      "floor-crawlspace": "Solaio su vespaio o cantina non riscaldata",
                      "basement-wall": "Parete controterra del seminterrato",
                      "custom": "Applicazione personalizzata"
                },
                "climateZone": {
                      "zone-1": "Zona 1 â€” Molto Calda",
                      "zone-2": "Zona 2 â€” Calda",
                      "zone-3": "Zona 3 â€” Mite",
                      "zone-4": "Zona 4 â€” Temperata",
                      "zone-5": "Zona 5 â€” Fredda",
                      "zone-6": "Zona 6 â€” Molto Fredda",
                      "zone-7-8": "Zona 7 e 8 â€” Alpina / Subartica",
                      "custom": "Valore R personalizzato"
                },
                "materialType": {
                      "fiberglass-batt": "Lana di vetro in materassini (R-3.4 / in)",
                      "rockwool-batt": "Lana di roccia minerale (R-3.8 / in)",
                      "cellulose-blown": "Fibra di cellulosa insufflata (R-3.6 / in)",
                      "fiberglass-blown": "Lana di vetro insufflata (R-2.5 / in)",
                      "sprayfoam-open": "Schiuma spray a celle aperte (R-3.7 / in)",
                      "sprayfoam-closed": "Schiuma spray a celle chiuse (R-6.7 / in)",
                      "rigid-xps": "Pannello rigido in XPS (R-5.0 / in)",
                      "rigid-polyiso": "Pannello rigido PIR/Poliiso (R-6.5 / in)"
                },
                "framingSpacing": {
                      "continuous": "Continuo / Senza detrazione (Sottotetto, cappotto)",
                      "16-oc": "Interasse 40 cm (Pareti standard, ~10% montanti)",
                      "24-oc": "Interasse 60 cm (Strutture avanzate, ~7% montanti)"
                }
          },
          "article": "## Guida all'Uso del Calcolatore di Isolamento\n\nInserisci la superficie e l'applicazione. Il calcolatore elabora lo spessore necessario, applica le detrazioni strutturali e fornisce il conteggio dei pacchi di isolante e la stima economica."
    },
    nl: {
          "name": "Isolatie Calculator & Rc-waarde",
          "shortDescription": "Bereken R-waarde, benodigde pakken glaswol/steenwol, zakken inblaasisolatie en PUR spuitisolatie volgens IECC 2021 en bouwvoorschriften.",
          "helpTexts": {
                "application": "Selecteer de toepassing om de standaard R-waarden in te laden.",
                "area": "Bruto te isoleren oppervlak in mÂ² of sq ft.",
                "climateZone": "Bepaalt de minimale isolatiewaarde volgens de bouwregelgeving.",
                "targetRValue": "Gewenste thermische weerstand (R-waarde / Rc).",
                "materialType": "Verschillende isolatiematerialen hebben verschillende isolatiediktes nodig.",
                "framingSpacing": "Trekt het oppervlak van houten balken/stijlen af bij spouwconstructies.",
                "existingRValue": "Vul eventuele bestaande isolatiewaarde in bij na-isolatie.",
                "waste": "Aanbevolen snijverlies: 5% bij zoldervloeren, 8-10% bij wanden.",
                "coveragePerPack": "Optioneel â€” oppervlakte per pak volgens productspecificatie.",
                "pricePerUnit": "Optioneel â€” materiaalkosten per mÂ² of sq ft.",
                "laborCostPerSqFt": "Optioneel â€” plaatsingskosten per eenheid oppervlak.",
                "includeVaporBarrier": "Dampscherm (6 mil PE-folie) meeberekenen."
          },
          "options": {
                "application": {
                      "attic": "Zoldervloer / Vlak plafond",
                      "wall-2x4": "Buitenwand (Houtskelet 2Ã—4 / 9 cm)",
                      "wall-2x6": "Buitenwand (Houtskelet 2Ã—6 / 14 cm)",
                      "cathedral": "Hellend dak / Tussen de gordingen",
                      "floor-crawlspace": "Vloer boven kruipruimte / kelder",
                      "basement-wall": "Kelderwand / Funderingsmuur",
                      "custom": "Aangepaste constructie"
                },
                "climateZone": {
                      "zone-1": "Zone 1 â€” Zeer Warm",
                      "zone-2": "Zone 2 â€” Warm",
                      "zone-3": "Zone 3 â€” Zacht Klimaat",
                      "zone-4": "Zone 4 â€” Gematigd Zeeklimaat",
                      "zone-5": "Zone 5 â€” Koel Klimaat",
                      "zone-6": "Zone 6 â€” Koud Klimaat",
                      "zone-7-8": "Zone 7 & 8 â€” Subarctisch",
                      "custom": "Aangepaste doelwaarde"
                },
                "materialType": {
                      "fiberglass-batt": "Glaswoldekens / platen (R-3.4 / inch)",
                      "rockwool-batt": "Steenwol / Rockwool (R-3.8 / inch)",
                      "cellulose-blown": "Inblaascellulose (R-3.6 / inch)",
                      "fiberglass-blown": "Inblaasglaswol (R-2.5 / inch)",
                      "sprayfoam-open": "Open-cel gespoten PUR (R-3.7 / inch)",
                      "sprayfoam-closed": "Gesloten-cel gespoten PUR (R-6.7 / inch)",
                      "rigid-xps": "XPS hardschuimplaten (R-5.0 / inch)",
                      "rigid-polyiso": "PIR hardschuimplaten (R-6.5 / inch)"
                },
                "framingSpacing": {
                      "continuous": "Volvlaks / Geen balkaftrek (Zolder, buitenschil)",
                      "16-oc": "40 cm h.o.h. (Standaard houtskelet, ~10% hout)",
                      "24-oc": "60 cm h.o.h. (Geoptimaliseerde bouw, ~7% hout)"
                }
          },
          "article": "## Hoe Gebruik je de Isolatie Calculator\n\nVul je oppervlakte en constructietype in. De calculator berekent direct de vereiste laagdikte, trekt het balkhoutoppervlak af en toont hoeveel pakken isolatiemateriaal je nodig hebt."
    },
    pl: {
          "name": "Kalkulator Ocieplenia i Izolacji",
          "shortDescription": "Oblicz wspÃ³Å‚czynnik R, liczbÄ™ paczek weÅ‚ny mineralnej, workÃ³w celulozy i objÄ™toÅ›Ä‡ piany PUR dla poddasza, Å›cian i stropÃ³w.",
          "helpTexts": {
                "application": "Wybierz element budynku, aby zaÅ‚adowaÄ‡ normatywne wartoÅ›ci wspÃ³Å‚czynnika R.",
                "area": "Powierzchnia brutto w metrach kwadratowych lub stopach kwadratowych.",
                "climateZone": "OkreÅ›la minimalnÄ… wymaganÄ… izolacyjnoÅ›Ä‡ wg norm budowlanych.",
                "targetRValue": "Docelowy opÃ³r cieplny (wspÃ³Å‚czynnik R).",
                "materialType": "RÃ³Å¼ne materiaÅ‚y wymagajÄ… innej gruboÅ›ci do osiÄ…gniÄ™cia tego samego R.",
                "framingSpacing": "Odejmuje powierzchniÄ™ zajmowanÄ… przez drewniane sÅ‚upki lub krokwie.",
                "existingRValue": "WprowadÅº istniejÄ…cÄ… izolacjÄ™ w przypadku termomodernizacji.",
                "waste": "Zalecany naddatek na docinki: 5% na stropie, 8-10% na Å›cianach.",
                "coveragePerPack": "Opcjonalnie â€” wydajnoÅ›Ä‡ z jednej paczki weÅ‚ny.",
                "pricePerUnit": "Opcjonalnie â€” cena materiaÅ‚u za mÂ² lub sq ft.",
                "laborCostPerSqFt": "Opcjonalnie â€” koszt robocizny za mÂ² lub sq ft.",
                "includeVaporBarrier": "UwzglÄ™dnij rolki folii paroizolacyjnej 6 mil."
          },
          "options": {
                "application": {
                      "attic": "Stropodach / PodÅ‚oga poddasza nieuÅ¼ytkowego",
                      "wall-2x4": "Åšciana zewnÄ™trzna (Szkielet 2Ã—4 / 9 cm)",
                      "wall-2x6": "Åšciana zewnÄ™trzna (Szkielet 2Ã—6 / 14 cm)",
                      "cathedral": "Poddasze uÅ¼ytkowe / MiÄ™dzykrokwiowo",
                      "floor-crawlspace": "Strop nad piwnicÄ… / przestrzeniÄ… wentylowanÄ…",
                      "basement-wall": "Åšciana fundamentowa / piwniczna",
                      "custom": "Zastosowanie niestandardowe"
                },
                "climateZone": {
                      "zone-1": "Strefa 1 â€” Bardzo CiepÅ‚a",
                      "zone-2": "Strefa 2 â€” CiepÅ‚a",
                      "zone-3": "Strefa 3 â€” Umiarkowanie CiepÅ‚a",
                      "zone-4": "Strefa 4 â€” Umiarkowana (Polska centralna)",
                      "zone-5": "Strefa 5 â€” ChÅ‚odna (Polska wschodnia/gÃ³ry)",
                      "zone-6": "Strefa 6 â€” Zimna",
                      "zone-7-8": "Strefa 7 & 8 â€” Skandynawska / Polarna",
                      "custom": "WartoÅ›Ä‡ niestandardowa"
                },
                "materialType": {
                      "fiberglass-batt": "WeÅ‚na szklana w rolkach/matach (R-3.4 / cal)",
                      "rockwool-batt": "WeÅ‚na skalna / Rockwool (R-3.8 / cal)",
                      "cellulose-blown": "Celuloza wdmuchiwana (R-3.6 / cal)",
                      "fiberglass-blown": "WeÅ‚na szklana wdmuchiwana (R-2.5 / cal)",
                      "sprayfoam-open": "Piana PUR otwarto-komÃ³rkowa (R-3.7 / cal)",
                      "sprayfoam-closed": "Piana PUR zamkniÄ™to-komÃ³rkowa (R-6.7 / cal)",
                      "rigid-xps": "Styrodur / pÅ‚yty XPS (R-5.0 / cal)",
                      "rigid-polyiso": "PÅ‚yty PIR / Poliizocyjanuran (R-6.5 / cal)"
                },
                "framingSpacing": {
                      "continuous": "CiÄ…gÅ‚e / Bez potrÄ…cania sÅ‚upkÃ³w (Strop, nakrokwiowo)",
                      "16-oc": "Rozstaw 40 cm (Szkielet standardowy, ~10% drewna)",
                      "24-oc": "Rozstaw 60 cm (Krokwie / zaawansowany szkielet, ~7% drewna)"
                }
          },
          "article": "## Instrukcja ObsÅ‚ugi Kalkulatora Izolacji\n\nWprowadÅº powierzchniÄ™ i rodzaj przegrody budowlanej. Kalkulator automatycznie wylicza wymaganÄ… gruboÅ›Ä‡ warstwy ocieplenia, uwzglÄ™dnia konstrukcjÄ™ drewnianÄ… i podaje liczbÄ™ paczek lub workÃ³w materiaÅ‚u."
    },
    ru: {
          "name": "ÐšÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€ Ð£Ñ‚ÐµÐ¿Ð»Ð¸Ñ‚ÐµÐ»Ñ Ð¸ Ð¢ÐµÐ¿Ð»Ð¾Ð¸Ð·Ð¾Ð»ÑÑ†Ð¸Ð¸",
          "shortDescription": "Ð Ð°ÑÑ‡Ñ‘Ñ‚ ÑÐ¾Ð¿Ñ€Ð¾Ñ‚Ð¸Ð²Ð»ÐµÐ½Ð¸Ñ Ñ‚ÐµÐ¿Ð»Ð¾Ð¿ÐµÑ€ÐµÐ´Ð°Ñ‡Ðµ (R-value), ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð° ÑƒÐ¿Ð°ÐºÐ¾Ð²Ð¾Ðº Ð¼Ð¸Ð½Ð²Ð°Ñ‚Ñ‹, Ð¼ÐµÑˆÐºÐ¾Ð² ÑÐºÐ¾Ð²Ð°Ñ‚Ñ‹ Ð¸ Ð¾Ð±ÑŠÑ‘Ð¼Ð° Ð½Ð°Ð¿Ñ‹Ð»ÐµÐ½Ð¸Ñ ÐŸÐŸÐ£ Ð¿Ð¾ Ð½Ð¾Ñ€Ð¼Ð°Ð¼ Ñ‚ÐµÐ¿Ð»Ð¾Ð²Ð¾Ð¹ Ð·Ð°Ñ‰Ð¸Ñ‚Ñ‹.",
          "helpTexts": {
                "application": "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ ÐºÐ¾Ð½ÑÑ‚Ñ€ÑƒÐºÑ†Ð¸ÑŽ Ð·Ð´Ð°Ð½Ð¸Ñ Ð´Ð»Ñ Ð·Ð°Ð³Ñ€ÑƒÐ·ÐºÐ¸ Ð½Ð¾Ñ€Ð¼Ð°Ñ‚Ð¸Ð²Ð½Ñ‹Ñ… Ñ‚Ñ€ÐµÐ±Ð¾Ð²Ð°Ð½Ð¸Ð¹ Ñ‚ÐµÐ¿Ð»Ð¾Ð¸Ð·Ð¾Ð»ÑÑ†Ð¸Ð¸.",
                "area": "ÐžÐ±Ñ‰Ð°Ñ Ð¿Ð»Ð¾Ñ‰Ð°Ð´ÑŒ ÑƒÑ‚ÐµÐ¿Ð»ÑÐµÐ¼Ð¾Ð¹ Ð¿Ð¾Ð²ÐµÑ€Ñ…Ð½Ð¾ÑÑ‚Ð¸ Ð² ÐºÐ². Ð¼ÐµÑ‚Ñ€Ð°Ñ… Ð¸Ð»Ð¸ ÐºÐ². Ñ„ÑƒÑ‚Ð°Ñ….",
                "climateZone": "ÐžÐ¿Ñ€ÐµÐ´ÐµÐ»ÑÐµÑ‚ Ð¼Ð¸Ð½Ð¸Ð¼Ð°Ð»ÑŒÐ½Ð¾Ðµ ÑÐ¾Ð¿Ñ€Ð¾Ñ‚Ð¸Ð²Ð»ÐµÐ½Ð¸Ðµ Ñ‚ÐµÐ¿Ð»Ð¾Ð¿ÐµÑ€ÐµÐ´Ð°Ñ‡Ðµ Ð¿Ð¾ Ð½Ð¾Ñ€Ð¼Ð°Ð¼.",
                "targetRValue": "Ð–ÐµÐ»Ð°ÐµÐ¼Ñ‹Ð¹ Ñ†ÐµÐ»ÐµÐ²Ð¾Ð¹ Ð¿Ð¾ÐºÐ°Ð·Ð°Ñ‚ÐµÐ»ÑŒ ÑÐ¾Ð¿Ñ€Ð¾Ñ‚Ð¸Ð²Ð»ÐµÐ½Ð¸Ñ R-value.",
                "materialType": "Ð Ð°Ð·Ð½Ñ‹Ðµ ÑƒÑ‚ÐµÐ¿Ð»Ð¸Ñ‚ÐµÐ»Ð¸ Ð¸Ð¼ÐµÑŽÑ‚ Ñ€Ð°Ð·Ð»Ð¸Ñ‡Ð½ÑƒÑŽ ÑÑ„Ñ„ÐµÐºÑ‚Ð¸Ð²Ð½Ð¾ÑÑ‚ÑŒ Ð½Ð° ÑÐ°Ð½Ñ‚Ð¸Ð¼ÐµÑ‚Ñ€ Ñ‚Ð¾Ð»Ñ‰Ð¸Ð½Ñ‹.",
                "framingSpacing": "Ð’Ñ‹Ñ‡Ð¸Ñ‚Ð°ÐµÑ‚ Ð¿Ð»Ð¾Ñ‰Ð°Ð´ÑŒ, Ð·Ð°Ð½Ð¸Ð¼Ð°ÐµÐ¼ÑƒÑŽ Ð´ÐµÑ€ÐµÐ²ÑÐ½Ð½Ñ‹Ð¼Ð¸ ÑÑ‚Ð¾Ð¹ÐºÐ°Ð¼Ð¸ ÐºÐ°Ñ€ÐºÐ°ÑÐ° Ð¸Ð»Ð¸ ÑÑ‚Ñ€Ð¾Ð¿Ð¸Ð»Ð°Ð¼Ð¸.",
                "existingRValue": "Ð£ÐºÐ°Ð¶Ð¸Ñ‚Ðµ ÑÑƒÑ‰ÐµÑÑ‚Ð²ÑƒÑŽÑ‰Ð¸Ð¹ ÑÐ»Ð¾Ð¹ ÑƒÑ‚ÐµÐ¿Ð»ÐµÐ½Ð¸Ñ Ð¿Ñ€Ð¸ Ñ€ÐµÐºÐ¾Ð½ÑÑ‚Ñ€ÑƒÐºÑ†Ð¸Ð¸.",
                "waste": "Ð ÐµÐºÐ¾Ð¼ÐµÐ½Ð´ÑƒÐµÐ¼Ñ‹Ð¹ Ð·Ð°Ð¿Ð°Ñ Ð½Ð° Ð¾Ð±Ñ€ÐµÐ·ÐºÑƒ: 5% Ð½Ð° Ñ‡ÐµÑ€Ð´Ð°ÐºÐµ, 8-10% Ð² ÑÑ‚ÐµÐ½Ð°Ñ… Ñ Ð¿Ñ€Ð¾Ñ‘Ð¼Ð°Ð¼Ð¸.",
                "coveragePerPack": "ÐžÐ¿Ñ†Ð¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ð¾ â€” Ð¿Ð»Ð¾Ñ‰Ð°Ð´ÑŒ Ð¿Ð¾ÐºÑ€Ñ‹Ñ‚Ð¸Ñ Ð¾Ð´Ð½Ð¾Ð¹ Ð¿Ð°Ñ‡ÐºÐ¸ Ð¿Ð¾ Ð¿Ð°ÑÐ¿Ð¾Ñ€Ñ‚Ñƒ Ð¸Ð·Ð´ÐµÐ»Ð¸Ñ.",
                "pricePerUnit": "ÐžÐ¿Ñ†Ð¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ð¾ â€” ÑÑ‚Ð¾Ð¸Ð¼Ð¾ÑÑ‚ÑŒ Ð¼Ð°Ñ‚ÐµÑ€Ð¸Ð°Ð»Ð° Ð·Ð° ÐµÐ´Ð¸Ð½Ð¸Ñ†Ñƒ Ð¿Ð»Ð¾Ñ‰Ð°Ð´Ð¸ Ð´Ð»Ñ ÑÐ¼ÐµÑ‚Ñ‹.",
                "laborCostPerSqFt": "ÐžÐ¿Ñ†Ð¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ð¾ â€” ÑÑ‚Ð¾Ð¸Ð¼Ð¾ÑÑ‚ÑŒ Ð¼Ð¾Ð½Ñ‚Ð°Ð¶Ð½Ñ‹Ñ… Ñ€Ð°Ð±Ð¾Ñ‚ Ð·Ð° ÐµÐ´Ð¸Ð½Ð¸Ñ†Ñƒ Ð¿Ð»Ð¾Ñ‰Ð°Ð´Ð¸.",
                "includeVaporBarrier": "Ð’ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÑŒ Ñ€ÑƒÐ»Ð¾Ð½Ñ‹ Ð¿Ð°Ñ€Ð¾Ð¸Ð·Ð¾Ð»ÑÑ†Ð¸Ð¾Ð½Ð½Ð¾Ð¹ Ð¿Ð»Ñ‘Ð½ÐºÐ¸ 6 Ð¼Ð¸Ð»."
          },
          "options": {
                "application": {
                      "attic": "Ð§ÐµÑ€Ð´Ð°Ñ‡Ð½Ð¾Ðµ Ð¿ÐµÑ€ÐµÐºÑ€Ñ‹Ñ‚Ð¸Ðµ (Ð¥Ð¾Ð»Ð¾Ð´Ð½Ñ‹Ð¹ Ñ‡ÐµÑ€Ð´Ð°Ðº)",
                      "wall-2x4": "ÐšÐ°Ñ€ÐºÐ°ÑÐ½Ð°Ñ ÑÑ‚ÐµÐ½Ð° (Ð¡Ñ‚Ð¾Ð¹ÐºÐ¸ 100 Ð¼Ð¼ / 2Ã—4)",
                      "wall-2x6": "ÐšÐ°Ñ€ÐºÐ°ÑÐ½Ð°Ñ ÑÑ‚ÐµÐ½Ð° (Ð¡Ñ‚Ð¾Ð¹ÐºÐ¸ 150 Ð¼Ð¼ / 2Ã—6)",
                      "cathedral": "ÐœÐ°Ð½ÑÐ°Ñ€Ð´Ð½Ð°Ñ ÐºÑ€Ñ‹ÑˆÐ° / ÐœÐµÐ¶ÑÑ‚Ñ€Ð¾Ð¿Ð¸Ð»ÑŒÐ½Ð¾Ðµ ÑƒÑ‚ÐµÐ¿Ð»ÐµÐ½Ð¸Ðµ",
                      "floor-crawlspace": "ÐŸÐ¾Ð» Ð½Ð°Ð´ Ñ…Ð¾Ð»Ð¾Ð´Ð½Ñ‹Ð¼ Ð¿Ð¾Ð´Ð¿Ð¾Ð»Ð¾Ð¼ / Ñ†Ð¾ÐºÐ¾Ð»ÐµÐ¼",
                      "basement-wall": "Ð¡Ñ‚ÐµÐ½Ð° Ð¿Ð¾Ð´Ð²Ð°Ð»Ð° / Ð¤ÑƒÐ½Ð´Ð°Ð¼ÐµÐ½Ñ‚",
                      "custom": "Ð˜Ð½Ð´Ð¸Ð²Ð¸Ð´ÑƒÐ°Ð»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð½ÑÑ‚Ñ€ÑƒÐºÑ†Ð¸Ñ"
                },
                "climateZone": {
                      "zone-1": "Ð—Ð¾Ð½Ð° 1 â€” ÐžÑ‡ÐµÐ½ÑŒ Ð¢Ñ‘Ð¿Ð»Ð°Ñ (Ð®Ð³)",
                      "zone-2": "Ð—Ð¾Ð½Ð° 2 â€” Ð¢Ñ‘Ð¿Ð»Ð°Ñ",
                      "zone-3": "Ð—Ð¾Ð½Ð° 3 â€” Ð£Ð¼ÐµÑ€ÐµÐ½Ð½Ð¾ Ð¢Ñ‘Ð¿Ð»Ð°Ñ",
                      "zone-4": "Ð—Ð¾Ð½Ð° 4 â€” Ð¦ÐµÐ½Ñ‚Ñ€Ð°Ð»ÑŒÐ½Ñ‹Ð¹ Ñ€ÐµÐ³Ð¸Ð¾Ð½",
                      "zone-5": "Ð—Ð¾Ð½Ð° 5 â€” ÐŸÑ€Ð¾Ñ…Ð»Ð°Ð´Ð½Ð°Ñ (Ð¡ÐµÐ²ÐµÑ€Ð¾-Ð—Ð°Ð¿Ð°Ð´)",
                      "zone-6": "Ð—Ð¾Ð½Ð° 6 â€” Ð¥Ð¾Ð»Ð¾Ð´Ð½Ð°Ñ (Ð£Ñ€Ð°Ð» / Ð¡Ð¸Ð±Ð¸Ñ€ÑŒ)",
                      "zone-7-8": "Ð—Ð¾Ð½Ð° 7 Ð¸ 8 â€” ÐšÑ€Ð°Ð¹Ð½Ð¸Ð¹ Ð¡ÐµÐ²ÐµÑ€ / ÐÑ€ÐºÑ‚Ð¸ÐºÐ°",
                      "custom": "ÐŸÐ¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒÑÐºÐ¸Ð¹ R-Ð¿Ð¾ÐºÐ°Ð·Ð°Ñ‚ÐµÐ»ÑŒ"
                },
                "materialType": {
                      "fiberglass-batt": "Ð¡Ñ‚ÐµÐºÐ»Ð¾Ð²Ð°Ñ‚Ð° Ð² Ð¿Ð»Ð¸Ñ‚Ð°Ñ…/Ñ€ÑƒÐ»Ð¾Ð½Ð°Ñ… (R-3.4 / Ð´ÑŽÐ¹Ð¼)",
                      "rockwool-batt": "Ð‘Ð°Ð·Ð°Ð»ÑŒÑ‚Ð¾Ð²Ð°Ñ Ð¼Ð¸Ð½ÐµÑ€Ð°Ð»ÑŒÐ½Ð°Ñ Ð²Ð°Ñ‚Ð° (R-3.8 / Ð´ÑŽÐ¹Ð¼)",
                      "cellulose-blown": "Ð­ÐºÐ¾Ð²Ð°Ñ‚Ð° Ð·Ð°Ð´ÑƒÐ²Ð½Ð°Ñ (R-3.6 / Ð´ÑŽÐ¹Ð¼)",
                      "fiberglass-blown": "Ð—Ð°Ð´ÑƒÐ²Ð½Ð°Ñ ÑÑ‚ÐµÐºÐ»Ð¾Ð²Ð°Ñ‚Ð° (R-2.5 / Ð´ÑŽÐ¹Ð¼)",
                      "sprayfoam-open": "ÐžÑ‚ÐºÑ€Ñ‹Ñ‚Ð¾ÑÑ‡ÐµÐ¸ÑÑ‚Ñ‹Ð¹ ÐŸÐŸÐ£ (R-3.7 / Ð´ÑŽÐ¹Ð¼)",
                      "sprayfoam-closed": "Ð—Ð°ÐºÑ€Ñ‹Ñ‚Ð¾ÑÑ‡ÐµÐ¸ÑÑ‚Ñ‹Ð¹ ÐŸÐŸÐ£ (R-6.7 / Ð´ÑŽÐ¹Ð¼)",
                      "rigid-xps": "Ð­ÐºÑÑ‚Ñ€ÑƒÐ´Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð½Ñ‹Ð¹ Ð¿ÐµÐ½Ð¾Ð¿Ð¾Ð»Ð¸ÑÑ‚Ð¸Ñ€Ð¾Ð» XPS (R-5.0 / Ð´ÑŽÐ¹Ð¼)",
                      "rigid-polyiso": "PIR Ð¿Ð»Ð¸Ñ‚Ñ‹ / ÐŸÐ¾Ð»Ð¸Ð¸Ð·Ð¾Ñ†Ð¸Ð°Ð½ÑƒÑ€Ð°Ñ‚ (R-6.5 / Ð´ÑŽÐ¹Ð¼)"
                },
                "framingSpacing": {
                      "continuous": "Ð¡Ð¿Ð»Ð¾ÑˆÐ½Ð¾Ðµ / Ð‘ÐµÐ· ÑÑ‚Ð¾ÐµÐº (Ð§ÐµÑ€Ð´Ð°Ðº, Ñ„Ð°ÑÐ°Ð´Ð½Ñ‹Ð¹ ÑƒÑ‚ÐµÐ¿Ð»Ð¸Ñ‚ÐµÐ»ÑŒ)",
                      "16-oc": "Ð¨Ð°Ð³ 40 ÑÐ¼ (Ð¡Ñ‚Ð°Ð½Ð´Ð°Ñ€Ñ‚Ð½Ñ‹Ð¹ ÐºÐ°Ñ€ÐºÐ°Ñ, ~10% Ð´Ñ€ÐµÐ²ÐµÑÐ¸Ð½Ñ‹)",
                      "24-oc": "Ð¨Ð°Ð³ 60 ÑÐ¼ (Ð¡Ñ‚Ñ€Ð¾Ð¿Ð¸Ð»ÑŒÐ½Ð°Ñ ÑÐ¸ÑÑ‚ÐµÐ¼Ð°, ~7% Ð´Ñ€ÐµÐ²ÐµÑÐ¸Ð½Ñ‹)"
                }
          },
          "article": "## ÐšÐ°Ðº ÐŸÐ¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒÑÑ ÐšÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€Ð¾Ð¼ Ð£Ñ‚ÐµÐ¿Ð»ÐµÐ½Ð¸Ñ\n\nÐ£ÐºÐ°Ð¶Ð¸Ñ‚Ðµ Ð¿Ð»Ð¾Ñ‰Ð°Ð´ÑŒ Ð¸ Ñ‚Ð¸Ð¿ ÑƒÑ‚ÐµÐ¿Ð»ÑÐµÐ¼Ð¾Ð¹ ÐºÐ¾Ð½ÑÑ‚Ñ€ÑƒÐºÑ†Ð¸Ð¸. ÐšÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€ Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¸ Ñ€Ð°ÑÑÑ‡Ð¸Ñ‚Ð°ÐµÑ‚ Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼ÑƒÑŽ Ñ‚Ð¾Ð»Ñ‰Ð¸Ð½Ñƒ ÑƒÑ‚ÐµÐ¿Ð»Ð¸Ñ‚ÐµÐ»Ñ, ÑƒÑ‡Ñ‚Ñ‘Ñ‚ ÐºÐ°Ñ€ÐºÐ°Ñ Ð¸ Ð¿Ð¾ÐºÐ°Ð¶ÐµÑ‚ Ñ‚Ð¾Ñ‡Ð½Ð¾Ðµ ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ð¿Ð°Ñ‡ÐµÐº Ð¸Ð»Ð¸ Ð¼ÐµÑˆÐºÐ¾Ð² Ð¸Ð·Ð¾Ð»ÑÑ†Ð¸Ð¸."
    },
    tr: {
          "name": "YalÄ±tÄ±m ve IsÄ± Ä°zolasyon HesaplayÄ±cÄ±",
          "shortDescription": "Ã‡atÄ±, duvar ve zeminler iÃ§in R-deÄŸeri, taÅŸ yÃ¼nÃ¼/cam yÃ¼nÃ¼ paket sayÄ±sÄ±, Ã¼fleme selÃ¼loz torba adedi ve sprey poliÃ¼retan hacmini hesaplayÄ±n.",
          "helpTexts": {
                "application": "YapÄ± elemanÄ±nÄ± seÃ§erek standart R-deÄŸeri gereksinimlerini yÃ¼kleyin.",
                "area": "YalÄ±tÄ±lacak brÃ¼t yÃ¼zey alanÄ± (metrekare veya sq ft).",
                "climateZone": "Bina enerji yÃ¶netmeliÄŸine gÃ¶re asgari Ä±sÄ± yalÄ±tÄ±m standardÄ±nÄ± belirler.",
                "targetRValue": "UlaÅŸÄ±lmak istenen hedef Ä±sÄ±l direnÃ§ (R-deÄŸeri).",
                "materialType": "FarklÄ± yalÄ±tÄ±m malzemeleri birim kalÄ±nlÄ±k baÅŸÄ±na farklÄ± Ä±sÄ± performansÄ± sunar.",
                "framingSpacing": "Karkas dikmelerinin kapladÄ±ÄŸÄ± ahÅŸap payÄ±nÄ± alandan dÃ¼ÅŸer.",
                "existingRValue": "Mevcut binada yenileme yapÄ±lÄ±yorsa var olan R-deÄŸerini girin.",
                "waste": "Ã–nerilen kesim firesi: DÃ¼z Ã§atÄ± tabanÄ±nda %5, pencereli duvarlarda %8-10.",
                "coveragePerPack": "Ä°steÄŸe baÄŸlÄ± â€” bir paketin kapladÄ±ÄŸÄ± alan (Ã¼retici verisi).",
                "pricePerUnit": "Ä°steÄŸe baÄŸlÄ± â€” malzeme birim maliyeti.",
                "laborCostPerSqFt": "Ä°steÄŸe baÄŸlÄ± â€” montaj iÅŸÃ§ilik birim fiyatÄ±.",
                "includeVaporBarrier": "6 mil polietilen buhar kesici Ã¶rtÃ¼ rulosunu hesaba ekleyin."
          },
          "options": {
                "application": {
                      "attic": "Ã‡atÄ± TabanÄ± / DÃ¼z Tavan DÃ¶ÅŸemesi",
                      "wall-2x4": "DÄ±ÅŸ Duvar (10 cm Karkas / 2Ã—4)",
                      "wall-2x6": "DÄ±ÅŸ Duvar (15 cm Karkas / 2Ã—6)",
                      "cathedral": "EÄŸimli Mertek Ã‡atÄ± / Ã‡atÄ± KatÄ±",
                      "floor-crawlspace": "Bodrum / Tesisat KatÄ± ÃœstÃ¼ DÃ¶ÅŸeme",
                      "basement-wall": "Bodrum Temel DuvarÄ±",
                      "custom": "Ã–zel Uygulama AlanÄ±"
                },
                "climateZone": {
                      "zone-1": "BÃ¶lge 1 â€” Ã‡ok SÄ±cak (Akdeniz / Ege KÄ±yÄ±larÄ±)",
                      "zone-2": "BÃ¶lge 2 â€” SÄ±cak",
                      "zone-3": "BÃ¶lge 3 â€” IlÄ±man",
                      "zone-4": "BÃ¶lge 4 â€” Ä°Ã§ Anadolu / Marmara",
                      "zone-5": "BÃ¶lge 5 â€” SoÄŸuk (DoÄŸu Anadolu)",
                      "zone-6": "BÃ¶lge 6 â€” Ã‡ok SoÄŸuk",
                      "zone-7-8": "BÃ¶lge 7 & 8 â€” AÅŸÄ±rÄ± SoÄŸuk / YÃ¼ksek RakÄ±m",
                      "custom": "Ã–zel R-DeÄŸeri"
                },
                "materialType": {
                      "fiberglass-batt": "Cam YÃ¼nÃ¼ Åžilte / Levha (R-3.4 / inÃ§)",
                      "rockwool-batt": "TaÅŸ YÃ¼nÃ¼ / Mineral YÃ¼n (R-3.8 / inÃ§)",
                      "cellulose-blown": "Ãœfleme SelÃ¼loz YalÄ±tÄ±m (R-3.6 / inÃ§)",
                      "fiberglass-blown": "Ãœfleme Cam YÃ¼nÃ¼ (R-2.5 / inÃ§)",
                      "sprayfoam-open": "AÃ§Ä±k GÃ¶zenekli Sprey KÃ¶pÃ¼k (R-3.7 / inÃ§)",
                      "sprayfoam-closed": "KapalÄ± GÃ¶zenekli Sprey KÃ¶pÃ¼k (R-6.7 / inÃ§)",
                      "rigid-xps": "XPS EkstrÃ¼de Polistiren Levha (R-5.0 / inÃ§)",
                      "rigid-polyiso": "PIR Poliizosiyanurat Levha (R-6.5 / inÃ§)"
                },
                "framingSpacing": {
                      "continuous": "Kesintisiz / Dikme DÃ¼ÅŸÃ¼lmez (Ã‡atÄ± zemini, dÄ±ÅŸ mantolama)",
                      "16-oc": "40 cm Dikme AralÄ±ÄŸÄ± (Standart karkas, ~%10 ahÅŸap payÄ±)",
                      "24-oc": "60 cm Dikme AralÄ±ÄŸÄ± (GeniÅŸ karkas, ~%7 ahÅŸap payÄ±)"
                }
          },
          "article": "## YalÄ±tÄ±m HesaplayÄ±cÄ± NasÄ±l KullanÄ±lÄ±r\n\nYalÄ±tÄ±m yapÄ±lacak yÃ¼zey alanÄ±nÄ± ve iklim bÃ¶lgesini seÃ§in. HesaplayÄ±cÄ±, karkas payÄ±nÄ± dÃ¼ÅŸerek gereken net kalÄ±nlÄ±ÄŸÄ±, paket sayÄ±sÄ±nÄ± ve toplam malzeme maliyetini anÄ±nda hesaplar."
    },
    ar: {
          "name": "Ø­Ø§Ø³Ø¨Ø© Ø§Ù„Ø¹Ø²Ù„ Ø§Ù„Ø­Ø±Ø§Ø±ÙŠ ÙˆÙ‚ÙŠÙ…Ø© R",
          "shortDescription": "Ø§Ø­Ø³Ø¨ Ù‚ÙŠÙ…Ø© Ø§Ù„Ù…Ù‚Ø§ÙˆÙ…Ø© Ø§Ù„Ø­Ø±Ø§Ø±ÙŠØ© RØŒ ÙˆØ¹Ø¯Ø¯ Ø­Ø²Ù… Ø§Ù„ØµÙˆÙ Ø§Ù„ØµØ®Ø±ÙŠ/Ø§Ù„Ø²Ø¬Ø§Ø¬ÙŠØŒ ÙˆØ£ÙƒÙŠØ§Ø³ Ø§Ù„Ø³Ù„ÙŠÙ„ÙˆØ² ÙˆØ±ØºÙˆØ© Ø§Ù„Ø±Ø´ ÙˆÙÙ‚ ÙƒÙˆØ¯ Ø§Ù„Ø·Ø§Ù‚Ø© IECC 2021.",
          "helpTexts": {
                "application": "Ø§Ø®ØªØ± Ù…ÙˆÙ‚Ø¹ Ø§Ù„ØªØ±ÙƒÙŠØ¨ Ù„ØªØ­Ù…ÙŠÙ„ Ù…Ø¹Ø§ÙŠÙŠØ± Ø§Ù„Ù…Ù‚Ø§ÙˆÙ…Ø© Ø§Ù„Ø­Ø±Ø§Ø±ÙŠØ© Ø§Ù„Ù…Ø¹ØªÙ…Ø¯Ø© ÙƒÙˆØ¯ÙŠØ§Ù‹.",
                "area": "Ø§Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ø¥Ø¬Ù…Ø§Ù„ÙŠØ© Ø§Ù„Ù…Ø±Ø§Ø¯ Ø¹Ø²Ù„Ù‡Ø§ Ø¨Ø§Ù„Ù‚Ø¯Ù… Ø§Ù„Ù…Ø±Ø¨Ø¹ Ø£Ùˆ Ø§Ù„Ù…ØªØ± Ø§Ù„Ù…Ø±Ø¨Ø¹.",
                "climateZone": "ØªØ­Ø¯Ø¯ Ø§Ù„Ø­Ø¯ Ø§Ù„Ø£Ø¯Ù†Ù‰ Ù„Ù‚ÙŠÙ…Ø© R ÙˆÙÙ‚Ø§Ù‹ Ù„ÙƒÙˆØ¯ Ø­ÙØ¸ Ø§Ù„Ø·Ø§Ù‚Ø© Ø§Ù„Ø¹Ø§Ù„Ù…ÙŠ IECC 2021.",
                "targetRValue": "Ù…Ø³ØªÙˆÙ‰ Ø§Ù„Ù…Ù‚Ø§ÙˆÙ…Ø© Ø§Ù„Ø­Ø±Ø§Ø±ÙŠØ© Ø§Ù„Ù…Ø³ØªÙ‡Ø¯Ù (Ù…Ø«Ù„ R-13, R-38, R-49, R-60).",
                "materialType": "ØªÙˆÙØ± ÙƒÙ„ Ù…Ø§Ø¯Ø© Ø¹Ø²Ù„Ø§Ù‹ Ø­Ø±Ø§Ø±ÙŠØ§Ù‹ Ù…Ø®ØªÙ„ÙØ§Ù‹ Ù„ÙƒÙ„ Ø¨ÙˆØµØ© Ù…Ù† Ø§Ù„Ø³Ù…Ø§ÙƒØ©.",
                "framingSpacing": "Ø®ØµÙ… Ø§Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„ØªÙŠ ØªØ´ØºÙ„Ù‡Ø§ Ø§Ù„Ù‚ÙˆØ§Ø¦Ù… Ø§Ù„Ø®Ø´Ø¨ÙŠØ© Ø£Ùˆ Ø§Ù„Ù…Ø¹Ø¯Ù†ÙŠØ© ÙÙŠ Ø§Ù„Ø¬Ø¯Ø±Ø§Ù†.",
                "existingRValue": "Ø£Ø¯Ø®Ù„ Ù‚ÙŠÙ…Ø© Ø§Ù„Ø¹Ø²Ù„ Ø§Ù„Ø­Ø§Ù„ÙŠØ© ÙÙŠ Ø­Ø§Ù„ Ø¥Ø¶Ø§ÙØ© Ø·Ø¨Ù‚Ø© Ø¹Ø²Ù„ Ø¬Ø¯ÙŠØ¯Ø© ÙÙˆÙ‚ Ø§Ù„Ù‚Ø¯ÙŠÙ…Ø©.",
                "waste": "Ù†Ø³Ø¨Ø© Ø§Ù„Ù‡Ø¯Ø± Ø§Ù„Ù…ÙˆØµÙ‰ Ø¨Ù‡Ø§: 5% Ù„Ù„Ø£Ø³Ù‚Ù Ø§Ù„Ù…ÙØªÙˆØ­Ø©ØŒ Ùˆ8-10% Ù„Ù„Ø¬Ø¯Ø±Ø§Ù† Ø§Ù„Ù…Ø­ØªÙˆÙŠØ© Ø¹Ù„Ù‰ Ù†ÙˆØ§ÙØ° ÙˆØ£Ø¨ÙˆØ§Ø¨.",
                "coveragePerPack": "Ø§Ø®ØªÙŠØ§Ø±ÙŠ â€” ØªØºØ·ÙŠØ© Ø§Ù„Ø­Ø²Ù…Ø© Ø§Ù„ÙˆØ§Ø­Ø¯Ø© ÙˆÙÙ‚Ø§Ù‹ Ù„Ù…ÙˆØ§ØµÙØ§Øª Ø§Ù„Ù…ØµÙ†Ø¹.",
                "pricePerUnit": "Ø§Ø®ØªÙŠØ§Ø±ÙŠ â€” Ø³Ø¹Ø± Ø§Ù„Ù…Ø§Ø¯Ø© Ù„Ø­Ø³Ø§Ø¨ Ù…ÙŠØ²Ø§Ù†ÙŠØ© Ø§Ù„Ø´Ø±Ø§Ø¡ Ø§Ù„ØªÙ‚Ø¯ÙŠØ±ÙŠØ©.",
                "laborCostPerSqFt": "Ø§Ø®ØªÙŠØ§Ø±ÙŠ â€” ØªÙƒÙ„ÙØ© Ø£Ø¬ÙˆØ± Ø§Ù„Ø¹Ù…Ø§Ù„Ø© ÙˆØ§Ù„ØªØ±ÙƒÙŠØ¨ Ù„ÙƒÙ„ ÙˆØ­Ø¯Ø© Ù…Ø³Ø§Ø­Ø©.",
                "includeVaporBarrier": "Ø­Ø³Ø§Ø¨ Ù„ÙØ§Ø¦Ù Ø­Ø§Ø¬Ø² Ø§Ù„Ø¨Ø®Ø§Ø± Ø¨ÙˆÙ„ÙŠ Ø¥ÙŠØ«ÙŠÙ„ÙŠÙ† Ø³Ù…Ùƒ 6 Ù…Ù„ (1000 Ù‚Ø¯Ù…Â²)."
          },
          "options": {
                "application": {
                      "attic": "Ø£Ø±Ø¶ÙŠØ© Ø§Ù„Ø³Ù‚Ù Ø§Ù„Ø¹Ù„ÙˆÙŠ (Ø§Ù„Ø¹Ù„ÙŠÙ‚Ø© / Ø§Ù„Ø³Ø·Ø­ Ø§Ù„Ù…Ø³ØªÙˆÙŠ)",
                      "wall-2x4": "Ø¬Ø¯Ø§Ø± Ø®Ø§Ø±Ø¬ÙŠ (Ù‚ÙˆØ§Ø¦Ù… 2Ã—4 / ØªØ¬ÙˆÙŠÙ 3.5 Ø¨ÙˆØµØ©)",
                      "wall-2x6": "Ø¬Ø¯Ø§Ø± Ø®Ø§Ø±Ø¬ÙŠ (Ù‚ÙˆØ§Ø¦Ù… 2Ã—6 / ØªØ¬ÙˆÙŠÙ 5.5 Ø¨ÙˆØµØ©)",
                      "cathedral": "Ø§Ù„Ø£Ø³Ù‚Ù Ø§Ù„Ù…Ø§Ø¦Ù„Ø© Ø§Ù„Ù…Ø±ØªÙØ¹Ø© / Ø¨ÙŠÙ† Ø§Ù„Ø±ÙˆØ§ÙØ¯",
                      "floor-crawlspace": "Ø§Ù„Ø£Ø±Ø¶ÙŠØ© ÙÙˆÙ‚ Ù…Ø³Ø§Ø­Ø© Ø§Ù„ØªÙ‡ÙˆÙŠØ© Ø§Ù„Ø³ÙÙ„ÙŠØ© Ø£Ùˆ Ø§Ù„Ù‚Ø¨Ùˆ",
                      "basement-wall": "Ø¬Ø¯Ø±Ø§Ù† Ø£Ø³Ø§Ø³Ø§Øª Ø§Ù„Ù‚Ø¨Ùˆ",
                      "custom": "ØªØ·Ø¨ÙŠÙ‚ Ù…Ø®ØµØµ"
                },
                "climateZone": {
                      "zone-1": "Ø§Ù„Ù…Ù†Ø·Ù‚Ø© 1 â€” Ø´Ø¯ÙŠØ¯Ø© Ø§Ù„Ø­Ø±Ø§Ø±Ø© (Ø§Ù„Ø®Ù„ÙŠØ¬ / Ø§Ù„Ø§Ø³ØªÙˆØ§Ø¦ÙŠØ©)",
                      "zone-2": "Ø§Ù„Ù…Ù†Ø·Ù‚Ø© 2 â€” Ø­Ø§Ø±Ø©",
                      "zone-3": "Ø§Ù„Ù…Ù†Ø·Ù‚Ø© 3 â€” Ø¯Ø§ÙØ¦Ø© Ù…Ø¹ØªØ¯Ù„Ø©",
                      "zone-4": "Ø§Ù„Ù…Ù†Ø·Ù‚Ø© 4 â€” Ù…Ù†Ø§Ø® Ù…Ø®ØªÙ„Ø· / Ù…Ø¹ØªØ¯Ù„",
                      "zone-5": "Ø§Ù„Ù…Ù†Ø·Ù‚Ø© 5 â€” Ø¨Ø§Ø±Ø¯Ø©",
                      "zone-6": "Ø§Ù„Ù…Ù†Ø·Ù‚Ø© 6 â€” Ø´Ø¯ÙŠØ¯Ø© Ø§Ù„Ø¨Ø±ÙˆØ¯Ø©",
                      "zone-7-8": "Ø§Ù„Ù…Ù†Ø·Ù‚Ø© 7 Ùˆ 8 â€” Ù‚Ø·Ø¨ÙŠØ© Ø´Ø¯ÙŠØ¯Ø© Ø§Ù„Ø¨Ø±ÙˆØ¯Ø©",
                      "custom": "Ù‚ÙŠÙ…Ø© R Ù…Ø®ØµØµØ©"
                },
                "materialType": {
                      "fiberglass-batt": "Ù„ÙØ§Ø¦Ù Ø§Ù„ØµÙˆÙ Ø§Ù„Ø²Ø¬Ø§Ø¬ÙŠ (R-3.4 / Ø¨ÙˆØµØ©)",
                      "rockwool-batt": "Ø§Ù„ØµÙˆÙ Ø§Ù„ØµØ®Ø±ÙŠ Ø§Ù„Ù…Ø¹Ø¯Ù†ÙŠ (R-3.8 / Ø¨ÙˆØµØ©)",
                      "cellulose-blown": "Ø£Ù„ÙŠØ§Ù Ø§Ù„Ø³Ù„ÙŠÙ„ÙˆØ² Ø§Ù„Ù…Ù†ÙÙˆØ®Ø© (R-3.6 / Ø¨ÙˆØµØ©)",
                      "fiberglass-blown": "Ø£Ù„ÙŠØ§Ù Ø§Ù„Ø²Ø¬Ø§Ø¬ Ø§Ù„Ù…Ù†ÙÙˆØ®Ø© (R-2.5 / Ø¨ÙˆØµØ©)",
                      "sprayfoam-open": "Ø±ØºÙˆØ© Ø§Ù„Ø±Ø´ Ù…ÙØªÙˆØ­Ø© Ø§Ù„Ø®Ù„Ø§ÙŠØ§ (R-3.7 / Ø¨ÙˆØµØ©)",
                      "sprayfoam-closed": "Ø±ØºÙˆØ© Ø§Ù„Ø±Ø´ Ù…ØºÙ„Ù‚Ø© Ø§Ù„Ø®Ù„Ø§ÙŠØ§ ÙˆØ¹Ø§Ø²Ù„Ø© Ù„Ù„Ø¨Ø®Ø§Ø± (R-6.7 / Ø¨ÙˆØµØ©)",
                      "rigid-xps": "Ø£Ù„ÙˆØ§Ø­ Ø±ØºÙˆØ© Ø§Ù„Ø¨ÙˆÙ„ÙŠØ³ØªØ±ÙŠÙ† Ø§Ù„Ù…Ø¨Ø«ÙˆÙ‚ XPS (R-5.0 / Ø¨ÙˆØµØ©)",
                      "rigid-polyiso": "Ø£Ù„ÙˆØ§Ø­ Ø§Ù„Ø¨ÙˆÙ„ÙŠ Ø¥ÙŠØ²ÙˆØ³ÙŠØ§Ù†ÙˆØ±Ø§Øª PIR (R-6.5 / Ø¨ÙˆØµØ©)"
                },
                "framingSpacing": {
                      "continuous": "Ø¹Ø²Ù„ Ù…Ø³ØªÙ…Ø± / Ø¨Ø¯ÙˆÙ† Ø®ØµÙ… Ø§Ù„Ù‡ÙŠÙƒÙ„ (Ø§Ù„Ø£Ø³Ù‚ÙØŒ Ø§Ù„Ø¹Ø²Ù„ Ø§Ù„Ø®Ø§Ø±Ø¬ÙŠ)",
                      "16-oc": "ØªØ¨Ø§Ø¹Ø¯ 16 Ø¨ÙˆØµØ© (Ø§Ù„Ø¬Ø¯Ø±Ø§Ù† Ø§Ù„Ù‚ÙŠØ§Ø³ÙŠØ©ØŒ ~10% Ø®Ø´Ø¨ Ø§Ù„Ù‡ÙŠÙƒÙ„)",
                      "24-oc": "ØªØ¨Ø§Ø¹Ø¯ 24 Ø¨ÙˆØµØ© (Ø§Ù„Ù‡ÙŠØ§ÙƒÙ„ Ø§Ù„Ù…ØªØ¨Ø§Ø¹Ø¯Ø©ØŒ ~7% Ø®Ø´Ø¨ Ø§Ù„Ù‡ÙŠÙƒÙ„)"
                }
          },
          "article": "## ÙƒÙŠÙÙŠØ© Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø­Ø§Ø³Ø¨Ø© Ø§Ù„Ø¹Ø²Ù„ Ø§Ù„Ø­Ø±Ø§Ø±ÙŠ\n\nØ­Ø¯Ø¯ Ø§Ù„Ù…Ø³Ø§Ø­Ø© ÙˆÙ†ÙˆØ¹ Ø§Ù„Ø¬Ø¯Ø§Ø± Ø£Ùˆ Ø§Ù„Ø³Ù‚Ù ÙˆØ§Ù„Ù…Ù†Ø·Ù‚Ø© Ø§Ù„Ù…Ù†Ø§Ø®ÙŠØ©. ØªÙ‚ÙˆÙ… Ø§Ù„Ø­Ø§Ø³Ø¨Ø© Ø¨Ø®ØµÙ… Ù†Ø³Ø¨Ø© Ø§Ù„Ù‡ÙŠÙƒÙ„ Ø§Ù„Ø¥Ù†Ø´Ø§Ø¦ÙŠØŒ ÙˆØ§Ø­ØªØ³Ø§Ø¨ Ø§Ù„Ø³Ù…Ø§ÙƒØ© Ø§Ù„Ù…Ø·Ù„ÙˆØ¨Ø© ÙˆØ¹Ø¯Ø¯ Ø§Ù„Ø­Ø²Ù… ÙˆØ§Ù„Ø£ÙƒÙŠØ§Ø³ ÙˆÙ…ÙŠØ²Ø§Ù†ÙŠØ© Ø§Ù„ØªÙƒÙ„ÙØ© Ø§Ù„Ø¥Ø¬Ù…Ø§Ù„ÙŠØ© Ø¨Ø¯Ù‚Ø©."
    },
    hi: {
          "name": "à¤‡à¤‚à¤¸à¥à¤²à¥‡à¤¶à¤¨ à¤”à¤° R-à¤µà¥ˆà¤²à¥à¤¯à¥‚ à¤•à¥ˆà¤²à¤•à¥à¤²à¥‡à¤Ÿà¤°",
          "shortDescription": "à¤›à¤¤, à¤¦à¥€à¤µà¤¾à¤° à¤”à¤° à¤«à¤°à¥à¤¶ à¤•à¥‡ à¤²à¤¿à¤ à¤†à¤µà¤¶à¥à¤¯à¤• à¤¥à¤°à¥à¤®à¤² R-à¤µà¥ˆà¤²à¥à¤¯à¥‚, à¤—à¥à¤²à¤¾à¤¸ à¤µà¥‚à¤²/à¤°à¥‰à¤•à¤µà¥‚à¤² à¤ªà¥ˆà¤•à¥‡à¤Ÿ, à¤¬à¥à¤²à¥‹-à¤‡à¤¨ à¤¸à¥‡à¤²à¥‚à¤²à¥‹à¤œà¤¼ à¤”à¤° à¤¸à¥à¤ªà¥à¤°à¥‡ à¤«à¥‹à¤® à¤•à¥€ à¤¸à¤Ÿà¥€à¤• à¤—à¤£à¤¨à¤¾ à¤•à¤°à¥‡à¤‚à¥¤",
          "helpTexts": {
                "application": "à¤¬à¤¿à¤²à¥à¤¡à¤¿à¤‚à¤— à¤•à¥‹à¤¡ à¤®à¤¾à¤¨à¤•à¥‹à¤‚ à¤•à¥‹ à¤²à¥‹à¤¡ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤‡à¤‚à¤¸à¥à¤²à¥‡à¤¶à¤¨ à¤•à¤¾ à¤¸à¥à¤¥à¤¾à¤¨ à¤šà¥à¤¨à¥‡à¤‚à¥¤",
                "area": "à¤‡à¤‚à¤¸à¥à¤²à¥‡à¤Ÿ à¤•à¤¿à¤ à¤œà¤¾à¤¨à¥‡ à¤µà¤¾à¤²à¥‡ à¤•à¥à¤·à¥‡à¤¤à¥à¤° à¤•à¤¾ à¤•à¥à¤² à¤µà¤°à¥à¤— à¤«à¥à¤Ÿ à¤¯à¤¾ à¤µà¤°à¥à¤— à¤®à¥€à¤Ÿà¤°à¥¤",
                "climateZone": "IECC 2021 à¤Šà¤°à¥à¤œà¤¾ à¤•à¥‹à¤¡ à¤•à¥‡ à¤…à¤¨à¥à¤¸à¤¾à¤° à¤¨à¥à¤¯à¥‚à¤¨à¤¤à¤® à¤†à¤µà¤¶à¥à¤¯à¤• R-à¤µà¥ˆà¤²à¥à¤¯à¥‚ à¤¨à¤¿à¤°à¥à¤§à¤¾à¤°à¤¿à¤¤ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤",
                "targetRValue": "à¤µà¤¾à¤‚à¤›à¤¿à¤¤ à¤¥à¤°à¥à¤®à¤² à¤ªà¥à¤°à¤¤à¤¿à¤°à¥‹à¤§ à¤¸à¥à¤¤à¤° (à¤œà¥ˆà¤¸à¥‡ R-13, R-38, R-49)à¥¤",
                "materialType": "à¤…à¤²à¤—-à¤…à¤²à¤— à¤‡à¤‚à¤¸à¥à¤²à¥‡à¤¶à¤¨ à¤¸à¤¾à¤®à¤—à¥à¤°à¤¿à¤¯à¤¾à¤‚ à¤ªà¥à¤°à¤¤à¤¿ à¤‡à¤‚à¤š à¤®à¥‹à¤Ÿà¤¾à¤ˆ à¤®à¥‡à¤‚ à¤­à¤¿à¤¨à¥à¤¨ à¤¥à¤°à¥à¤®à¤² à¤ªà¥à¤°à¤¦à¤°à¥à¤¶à¤¨ à¤¦à¥‡à¤¤à¥€ à¤¹à¥ˆà¤‚à¥¤",
                "framingSpacing": "à¤²à¤•à¤¡à¤¼à¥€ à¤•à¥‡ à¤¸à¥à¤Ÿà¤¡ à¤¯à¤¾ à¤œà¥‰à¤‡à¤¸à¥à¤Ÿ à¤¦à¥à¤µà¤¾à¤°à¤¾ à¤˜à¥‡à¤°à¥‡ à¤—à¤ à¤¸à¥à¤¥à¤¾à¤¨ à¤•à¥‹ à¤•à¥à¤² à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¤«à¤² à¤¸à¥‡ à¤˜à¤Ÿà¤¾à¤¤à¤¾ à¤¹à¥ˆà¥¤",
                "existingRValue": "à¤¯à¤¦à¤¿ à¤ªà¥à¤°à¤¾à¤¨à¥‡ à¤‡à¤‚à¤¸à¥à¤²à¥‡à¤¶à¤¨ à¤•à¥‡ à¤Šà¤ªà¤° à¤¨à¤¯à¤¾ à¤²à¤—à¤¾ à¤°à¤¹à¥‡ à¤¹à¥ˆà¤‚, à¤¤à¥‹ à¤®à¥Œà¤œà¥‚à¤¦à¤¾ R-à¤µà¥ˆà¤²à¥à¤¯à¥‚ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚à¥¤",
                "waste": "à¤…à¤¨à¥à¤¶à¤‚à¤¸à¤¿à¤¤ à¤…à¤¤à¤¿à¤°à¤¿à¤•à¥à¤¤ à¤µà¥‡à¤¸à¥à¤Ÿà¥‡à¤œ: à¤–à¥à¤²à¥€ à¤›à¤¤ à¤•à¥‡ à¤²à¤¿à¤ 5%, à¤¦à¥€à¤µà¤¾à¤°à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤ 8-10%à¥¤",
                "coveragePerPack": "à¤µà¥ˆà¤•à¤²à¥à¤ªà¤¿à¤• â€” à¤¨à¤¿à¤°à¥à¤®à¤¾à¤¤à¤¾ à¤µà¤¿à¤¨à¤¿à¤°à¥à¤¦à¥‡à¤¶ à¤•à¥‡ à¤…à¤¨à¥à¤¸à¤¾à¤° à¤ªà¥à¤°à¤¤à¤¿ à¤ªà¥ˆà¤•à¥‡à¤Ÿ à¤µà¤°à¥à¤— à¤«à¥à¤Ÿ à¤•à¤µà¤°à¥‡à¤œà¥¤",
                "pricePerUnit": "à¤µà¥ˆà¤•à¤²à¥à¤ªà¤¿à¤• â€” à¤•à¥à¤² à¤²à¤¾à¤—à¤¤ à¤•à¤¾ à¤…à¤¨à¥à¤®à¤¾à¤¨ à¤²à¤—à¤¾à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤¸à¤¾à¤®à¤—à¥à¤°à¥€ à¤®à¥‚à¤²à¥à¤¯à¥¤",
                "laborCostPerSqFt": "à¤µà¥ˆà¤•à¤²à¥à¤ªà¤¿à¤• â€” à¤ªà¥à¤°à¤¤à¤¿ à¤µà¤°à¥à¤— à¤«à¥à¤Ÿ à¤¸à¥à¤¥à¤¾à¤ªà¤¨à¤¾ à¤®à¤œà¤¦à¥‚à¤°à¥€ à¤¦à¤°à¥¤",
                "includeVaporBarrier": "6-à¤®à¤¿à¤² à¤ªà¥‰à¤²à¥€à¤¥à¥€à¤¨ à¤µà¥‡à¤ªà¤° à¤¬à¥ˆà¤°à¤¿à¤¯à¤° à¤«à¤¿à¤²à¥à¤® à¤°à¥‹à¤² à¤•à¥€ à¤—à¤£à¤¨à¤¾ à¤•à¤°à¥‡à¤‚à¥¤"
          },
          "options": {
                "application": {
                      "attic": "à¤…à¤Ÿà¤¾à¤°à¥€ à¤«à¤°à¥à¤¶ / à¤¸à¤ªà¤¾à¤Ÿ à¤›à¤¤ (Attic)",
                      "wall-2x4": "à¤¬à¤¾à¤¹à¤°à¥€ à¤¦à¥€à¤µà¤¾à¤° (2Ã—4 à¤¸à¥à¤Ÿà¤¡, 3.5\" à¤•à¥ˆà¤µà¤¿à¤Ÿà¥€)",
                      "wall-2x6": "à¤¬à¤¾à¤¹à¤°à¥€ à¤¦à¥€à¤µà¤¾à¤° (2Ã—6 à¤¸à¥à¤Ÿà¤¡, 5.5\" à¤•à¥ˆà¤µà¤¿à¤Ÿà¥€)",
                      "cathedral": "à¤•à¥ˆà¤¥à¥‡à¤¡à¥à¤°à¤² à¤¢à¤²à¤¾à¤¨à¤¦à¤¾à¤° à¤›à¤¤",
                      "floor-crawlspace": "à¤•à¥à¤°à¥‰à¤²à¤¸à¥à¤ªà¥‡à¤¸ à¤¯à¤¾ à¤¬à¥‡à¤¸à¤®à¥‡à¤‚à¤Ÿ à¤•à¥‡ à¤Šà¤ªà¤° à¤•à¤¾ à¤«à¤°à¥à¤¶",
                      "basement-wall": "à¤¬à¥‡à¤¸à¤®à¥‡à¤‚à¤Ÿ à¤¨à¥€à¤‚à¤µ à¤•à¥€ à¤¦à¥€à¤µà¤¾à¤°",
                      "custom": "à¤•à¤¸à¥à¤Ÿà¤® à¤…à¤¨à¥à¤ªà¥à¤°à¤¯à¥‹à¤—"
                },
                "climateZone": {
                      "zone-1": "à¤œà¥‹à¤¨ 1 â€” à¤…à¤¤à¥à¤¯à¤§à¤¿à¤• à¤—à¤°à¥à¤® (à¤¤à¤Ÿà¥€à¤¯/à¤‰à¤·à¥à¤£à¤•à¤Ÿà¤¿à¤¬à¤‚à¤§à¥€à¤¯)",
                      "zone-2": "à¤œà¥‹à¤¨ 2 â€” à¤—à¤°à¥à¤®",
                      "zone-3": "à¤œà¥‹à¤¨ 3 â€” à¤®à¤§à¥à¤¯à¤® à¤—à¤°à¥à¤®",
                      "zone-4": "à¤œà¥‹à¤¨ 4 â€” à¤®à¤¿à¤¶à¥à¤°à¤¿à¤¤ / à¤¸à¤®à¤¶à¥€à¤¤à¥‹à¤·à¥à¤£",
                      "zone-5": "à¤œà¥‹à¤¨ 5 â€” à¤ à¤‚à¤¡à¤¾",
                      "zone-6": "à¤œà¥‹à¤¨ 6 â€” à¤…à¤¤à¥à¤¯à¤§à¤¿à¤• à¤ à¤‚à¤¡à¤¾",
                      "zone-7-8": "à¤œà¥‹à¤¨ 7 à¤”à¤° 8 â€” à¤‰à¤ª-à¤†à¤°à¥à¤•à¤Ÿà¤¿à¤• / à¤¬à¤°à¥à¤«à¥€à¤²à¤¾",
                      "custom": "à¤•à¤¸à¥à¤Ÿà¤® R-à¤µà¥ˆà¤²à¥à¤¯à¥‚"
                },
                "materialType": {
                      "fiberglass-batt": "à¤«à¤¾à¤‡à¤¬à¤°à¤—à¥à¤²à¤¾à¤¸ à¤¬à¥ˆà¤Ÿ à¤”à¤° à¤°à¥‹à¤² (R-3.4 / à¤‡à¤‚à¤š)",
                      "rockwool-batt": "à¤®à¤¿à¤¨à¤°à¤² à¤µà¥‚à¤² / à¤°à¥‰à¤•à¤µà¥‚à¤² (R-3.8 / à¤‡à¤‚à¤š)",
                      "cellulose-blown": "à¤¬à¥à¤²à¥‹-à¤‡à¤¨ à¤¸à¥‡à¤²à¥‚à¤²à¥‹à¤œà¤¼ (R-3.6 / à¤‡à¤‚à¤š)",
                      "fiberglass-blown": "à¤¬à¥à¤²à¥‹-à¤‡à¤¨ à¤«à¤¾à¤‡à¤¬à¤°à¤—à¥à¤²à¤¾à¤¸ (R-2.5 / à¤‡à¤‚à¤š)",
                      "sprayfoam-open": "à¤“à¤ªà¤¨-à¤¸à¥‡à¤² à¤¸à¥à¤ªà¥à¤°à¥‡ à¤«à¥‹à¤® (R-3.7 / à¤‡à¤‚à¤š)",
                      "sprayfoam-closed": "à¤•à¥à¤²à¥‹à¤œà¥à¤¡-à¤¸à¥‡à¤² à¤¸à¥à¤ªà¥à¤°à¥‡ à¤«à¥‹à¤® (R-6.7 / à¤‡à¤‚à¤š)",
                      "rigid-xps": "XPS à¤°à¤¿à¤œà¤¿à¤¡ à¤«à¥‹à¤® à¤¬à¥‹à¤°à¥à¤¡ (R-5.0 / à¤‡à¤‚à¤š)",
                      "rigid-polyiso": "à¤ªà¥‰à¤²à¥€à¤†à¤‡à¤¸à¥‹ à¤¬à¥‹à¤°à¥à¤¡ (R-6.5 / à¤‡à¤‚à¤š)"
                },
                "framingSpacing": {
                      "continuous": "à¤¨à¤¿à¤°à¤‚à¤¤à¤° / à¤¬à¤¿à¤¨à¤¾ à¤«à¥à¤°à¥‡à¤®à¤¿à¤‚à¤— à¤•à¤Ÿà¥Œà¤¤à¥€ (à¤›à¤¤, à¤¬à¤¾à¤¹à¤°à¥€ à¤«à¥‹à¤®)",
                      "16-oc": "16 à¤‡à¤‚à¤š à¤¦à¥‚à¤°à¥€ (à¤®à¤¾à¤¨à¤• à¤¦à¥€à¤µà¤¾à¤°à¥‡à¤‚, ~10% à¤²à¤•à¤¡à¤¼à¥€)",
                      "24-oc": "24 à¤‡à¤‚à¤š à¤¦à¥‚à¤°à¥€ (à¤‰à¤¨à¥à¤¨à¤¤ à¤«à¥à¤°à¥‡à¤®à¤¿à¤‚à¤—, ~7% à¤²à¤•à¤¡à¤¼à¥€)"
                }
          },
          "article": "## à¤‡à¤‚à¤¸à¥à¤²à¥‡à¤¶à¤¨ à¤•à¥ˆà¤²à¤•à¥à¤²à¥‡à¤Ÿà¤° à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¥ˆà¤¸à¥‡ à¤•à¤°à¥‡à¤‚\n\nà¤•à¥à¤·à¥‡à¤¤à¥à¤°à¤«à¤² à¤”à¤° à¤œà¤²à¤µà¤¾à¤¯à¥ à¤•à¥à¤·à¥‡à¤¤à¥à¤° à¤šà¥à¤¨à¥‡à¤‚à¥¤ à¤•à¥ˆà¤²à¤•à¥à¤²à¥‡à¤Ÿà¤° à¤²à¤•à¤¡à¤¼à¥€ à¤•à¥‡ à¤«à¥à¤°à¥‡à¤®à¤¿à¤‚à¤— à¤•à¥€ à¤•à¤Ÿà¥Œà¤¤à¥€ à¤•à¤°à¤¤à¥‡ à¤¹à¥à¤ à¤†à¤µà¤¶à¥à¤¯à¤• à¤‡à¤‚à¤¸à¥à¤²à¥‡à¤¶à¤¨ à¤®à¥‹à¤Ÿà¤¾à¤ˆ, à¤†à¤µà¤¶à¥à¤¯à¤• à¤ªà¥ˆà¤•à¥‡à¤Ÿà¥‹à¤‚ à¤•à¥€ à¤¸à¤‚à¤–à¥à¤¯à¤¾ à¤”à¤° à¤•à¥à¤² à¤¬à¤œà¤Ÿ à¤•à¥€ à¤¸à¤Ÿà¥€à¤• à¤—à¤£à¤¨à¤¾ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤"
    },
    zh: {
          "name": "å»ºç­‘ä¿æ¸©éš”çƒ­è®¡ç®—å™¨",
          "shortDescription": "å…è´¹å»ºç­‘ä¿æ¸©è®¡ç®—å™¨ã€‚æ ¹æ® IECC 2021 èŠ‚èƒ½è§„èŒƒç²¾ç¡®è®¡ç®—é˜æ¥¼ã€å¢™ä½“å’Œåœ°é¢çš„ R å€¼ã€ä¿æ¸©æ£‰åŒ…æ•°ã€å¹å…¥å¼çº¤ç»´è¢‹æ•°åŠå–·æ¶‚å‘æ³¡ä½“ç§¯ã€‚",
          "helpTexts": {
                "application": "é€‰æ‹©æ–½å·¥éƒ¨ä½ä»¥åŠ è½½å»ºç­‘èŠ‚èƒ½è§„èŒƒæ ‡å‡†çš„ R å€¼è¦æ±‚ã€‚",
                "area": "éœ€è¦è¿›è¡Œä¿æ¸©æ–½å·¥çš„æ€»è¡¨é¢ç§¯ï¼ˆå¹³æ–¹è‹±å°ºæˆ–å¹³æ–¹ç±³ï¼‰ã€‚",
                "climateZone": "æ ¹æ® IECC 2021 èŠ‚èƒ½è§„èŒƒç¡®å®šæ‰€åœ¨æ°”å€™åŒºçš„æœ€ä½Žä¿æ¸© R å€¼ã€‚",
                "targetRValue": "æ‰€éœ€è¾¾åˆ°çš„ç›®æ ‡çƒ­é˜»å€¼ï¼ˆä¾‹å¦‚ R-13, R-21, R-38, R-49, R-60ï¼‰ã€‚",
                "materialType": "ä¸åŒä¿æ¸©ææ–™æ¯è‹±å¯¸åŽšåº¦æä¾›çš„ä¿æ¸©éš”çƒ­æ€§èƒ½ä¸åŒã€‚",
                "framingSpacing": "è‡ªåŠ¨æ‰£é™¤å¢™ä½“é¾™éª¨ï¼ˆæœ¨æ–¹/è½»é’¢ï¼‰åœ¨ç©ºè…”å†…æ‰€å çš„æˆªé¢é¢ç§¯ã€‚",
                "existingRValue": "æ—§æˆ¿èŠ‚èƒ½æ”¹é€ æ—¶è¯·è¾“å…¥çŽ°æœ‰ä¿æ¸©å±‚çš„ R å€¼ã€‚",
                "waste": "å»ºè®®é¢„ç•™æŸè€—ï¼šå¼€æ•žå¼é˜æ¥¼ 5%ï¼Œå«é—¨çª—å¼€æ´žå¢™ä½“ 8-10%ã€‚",
                "coveragePerPack": "å¯é€‰ â€” è¦†ç›–åŽ‚å®¶æ ‡æ˜Žçš„å•åŒ…ä¿æ¸©æ£‰è¦†ç›–é¢ç§¯ã€‚",
                "pricePerUnit": "å¯é€‰ â€” è¾“å…¥ææ–™å•ä»·ä»¥é¢„ä¼°ææ–™é‡‡è´­é¢„ç®—ã€‚",
                "laborCostPerSqFt": "å¯é€‰ â€” è¾“å…¥æ¯å¹³æ–¹å•ä½æ–½å·¥äººå·¥å®‰è£…è´¹ç”¨ã€‚",
                "includeVaporBarrier": "è®¡ç®— 1000 å¹³æ–¹è‹±å°ºè§„æ ¼çš„ 6-mil èšä¹™çƒ¯é˜²æ½®éš”æ±½è†œå·æ•°ã€‚"
          },
          "options": {
                "application": {
                      "attic": "é˜æ¥¼åœ°é¢ / å¹³é¡¶å¤©èŠ±æ¿ (Attic)",
                      "wall-2x4": "å¤–å¢™ä½“ (2Ã—4 é¾™éª¨ï¼Œ3.5è‹±å¯¸ç©ºè…”)",
                      "wall-2x6": "å¤–å¢™ä½“ (2Ã—6 é¾™éª¨ï¼Œ5.5è‹±å¯¸ç©ºè…”)",
                      "cathedral": "å¤§æ•™å ‚å¡å±‹é¡¶ / å±‹æž¶æ¤½æ¡é—´",
                      "floor-crawlspace": "æž¶ç©ºå±‚ / æœªé‡‡æš–åœ°ä¸‹å®¤ä¸Šæ–¹æ¥¼æ¿",
                      "basement-wall": "åœ°ä¸‹å®¤å¤–å¢™åŸºç¡€",
                      "custom": "è‡ªå®šä¹‰ä¿æ¸©éƒ¨ä½"
                },
                "climateZone": {
                      "zone-1": "ç¬¬1åŒº â€” æžçƒ­åœ°åŒº (è¿ˆé˜¿å¯†/å¤å¨å¤·/åŽå—)",
                      "zone-2": "ç¬¬2åŒº â€” ç‚Žçƒ­åœ°åŒº",
                      "zone-3": "ç¬¬3åŒº â€” æš–æ¸©å¸¦åœ°åŒº (å¤çƒ­å†¬å†·)",
                      "zone-4": "ç¬¬4åŒº â€” æ··åˆæ¸©å’Œåœ°åŒº",
                      "zone-5": "ç¬¬5åŒº â€” å¯’å†·åœ°åŒº (åŽåŒ—/ä¸­è¥¿éƒ¨)",
                      "zone-6": "ç¬¬6åŒº â€” ä¸¥å¯’åœ°åŒº (ä¸œåŒ—/é«˜å¯’)",
                      "zone-7-8": "ç¬¬7ä¸Ž8åŒº â€” äºšå¯’å¸¦/æžå¯’åœ°åŒº",
                      "custom": "è‡ªå®šä¹‰ç›®æ ‡ R å€¼"
                },
                "materialType": {
                      "fiberglass-batt": "çŽ»ç’ƒçº¤ç»´ä¿æ¸©æ£‰æ¯¡ (R-3.4 / è‹±å¯¸)",
                      "rockwool-batt": "å²©æ£‰ä¿æ¸©æ¿ / çŸ¿ç‰©æ£‰ (R-3.8 / è‹±å¯¸)",
                      "cellulose-blown": "æ•£è£…å¹å…¥å¼æ¤ç‰©çº¤ç»´ç´  (R-3.6 / è‹±å¯¸)",
                      "fiberglass-blown": "æ•£è£…å¹å…¥å¼çŽ»ç’ƒæ£‰ (R-2.5 / è‹±å¯¸)",
                      "sprayfoam-open": "å¼€å­”èšæ°¨é…¯å‘æ³¡å–·æ¶‚ (R-3.7 / è‹±å¯¸)",
                      "sprayfoam-closed": "é—­å­”èšæ°¨é…¯å‘æ³¡å–·æ¶‚ (R-6.7 / è‹±å¯¸ï¼Œè‡ªå¸¦éš”æ±½å±‚)",
                      "rigid-xps": "æŒ¤å¡‘èšè‹¯ä¹™çƒ¯æ³¡æ²«æ¿ XPS (R-5.0 / è‹±å¯¸)",
                      "rigid-polyiso": "èšå¼‚æ°°è„²é…¸é…¯æ¿ Polyiso (R-6.5 / è‹±å¯¸)"
                },
                "framingSpacing": {
                      "continuous": "è¿žç»­ä¿æ¸© / æ— é¾™éª¨æ‰£é™¤ (é˜æ¥¼é¡¶é¢ã€å¤–å¢™å¤–ä¿æ¸©)",
                      "16-oc": "16 è‹±å¯¸ä¸­å¿ƒé—´è· (æ ‡å‡† 2x4/2x6 å¢™ä½“ï¼Œçº¦æ‰£é™¤ 10% é¾™éª¨)",
                      "24-oc": "24 è‹±å¯¸ä¸­å¿ƒé—´è· (å±‹æž¶/å¤§é—´è·é¾™éª¨ï¼Œçº¦æ‰£é™¤ 7% é¾™éª¨)"
                }
          },
          "article": "## ä¿æ¸©éš”çƒ­è®¡ç®—å™¨ä½¿ç”¨æ–¹æ³•\n\né€‰æ‹©æ–½å·¥éƒ¨ä½ä¸Žæ°”å€™åŒºï¼Œè®¡ç®—å™¨è‡ªåŠ¨è½½å…¥è§„èŒƒæŽ¨èçš„ R å€¼æ ‡å‡†ï¼Œæ‰£é™¤é¾™éª¨é¢ç§¯å¹¶ç²¾å‡†è®¡ç®—æ‰€éœ€åŽšåº¦ã€åŒ…è£…ä»¶æ•°ä¸Žé¢„ç®—ã€‚"
    },
    ja: {
          "name": "ä½å®…æ–­ç†±æãƒ»Rå€¤è¨ˆç®—æ©Ÿ",
          "shortDescription": "å±‹æ ¹ãƒ»å£ãƒ»åºŠã®ç›®æ¨™Rå€¤ã€ã‚°ãƒ©ã‚¹ã‚¦ãƒ¼ãƒ«/ãƒ­ãƒƒã‚¯ã‚¦ãƒ¼ãƒ«å¿…è¦è¢‹æ•°ã€ã‚»ãƒ«ãƒ­ãƒ¼ã‚¹å¹è¾¼ã¿é‡ã€ç¾å ´ç™ºæ³¡ã‚¦ãƒ¬ã‚¿ãƒ³å®¹é‡ã‚’çœã‚¨ãƒåŸºæº–ã«åŸºã¥ãç²¾å¯†è¨ˆç®—ã—ã¾ã™ã€‚",
          "helpTexts": {
                "application": "æ–½å·¥éƒ¨ä½ã‚’é¸æŠžã—ã¦çœã‚¨ãƒåŸºæº–ã®æŽ¨å¥¨Rå€¤ã‚’èª­ã¿è¾¼ã¿ã¾ã™ã€‚",
                "area": "æ–­ç†±æ–½å·¥ã™ã‚‹ç·é¢ç©ï¼ˆå¹³æ–¹ãƒ¡ãƒ¼ãƒˆãƒ«ã¾ãŸã¯å¹³æ–¹ãƒ•ã‚£ãƒ¼ãƒˆï¼‰ã€‚",
                "climateZone": "çœã‚¨ãƒåŸºæº–ãƒ»IECCã«åŸºã¥ãåœ°åŸŸåŒºåˆ†ã¨æŽ¨å¥¨ç†±æŠµæŠ—å€¤ã‚’æ±ºå®šã—ã¾ã™ã€‚",
                "targetRValue": "ç›®æ¨™ã¨ã™ã‚‹æ–­ç†±æ€§èƒ½ï¼ˆRå€¤ï¼‰ã€‚",
                "materialType": "æ–­ç†±æã®ç¨®é¡žã«ã‚ˆã£ã¦åŽšã¿ã‚ãŸã‚Šã®ç†±æŠµæŠ—æ€§èƒ½ãŒç•°ãªã‚Šã¾ã™ã€‚",
                "framingSpacing": "å£ä½“å†…å……å¡«æ–­ç†±ã«ãŠã‘ã‚‹æŸ±ãƒ»é–“æŸ±ã®æœ¨ææ¯”çŽ‡ã‚’æŽ§é™¤ã—ã¾ã™ã€‚",
                "existingRValue": "ãƒªãƒ•ã‚©ãƒ¼ãƒ ç­‰ã§æ—¢å­˜ã®æ–­ç†±æãŒã‚ã‚‹å ´åˆã¯ç¾åœ¨ã®Rå€¤ã‚’å…¥åŠ›ã€‚",
                "waste": "æŽ¨å¥¨ä½™è£•çŽ‡ï¼šå°å±‹è£æ•·ãè¾¼ã¿ 5%ã€é–‹å£éƒ¨ã®ã‚ã‚‹å¤–å£ 8-10%ã€‚",
                "coveragePerPack": "ãƒ¡ãƒ¼ã‚«ãƒ¼ä»•æ§˜ã«ã‚ˆã‚‹1ãƒ‘ãƒƒã‚¯ã‚ãŸã‚Šã®æ–½å·¥é¢ç©ï¼ˆä»»æ„ï¼‰ã€‚",
                "pricePerUnit": "æ¦‚ç®—è¦‹ç©ã‚‚ã‚Šã®ãŸã‚ã®ææ–™å¹³ç±³å˜ä¾¡ï¼ˆä»»æ„ï¼‰ã€‚",
                "laborCostPerSqFt": "æ–½å·¥æ‰‹é–“è«‹ã‘ãƒ»å·¥è³ƒå˜ä¾¡ï¼ˆä»»æ„ï¼‰ã€‚",
                "includeVaporBarrier": "é˜²æ¹¿æ°—å¯†ãƒ•ã‚£ãƒ«ãƒ ï¼ˆ6 mil ãƒãƒªã‚¨ãƒãƒ¬ãƒ³ï¼‰ã‚’å«ã‚ã¦è¨ˆç®—ã€‚"
          },
          "options": {
                "application": {
                      "attic": "å°å±‹è£å¤©äº•é¢ (å¹³å¤©äº•)",
                      "wall-2x4": "å¤–å£ (2Ã—4æ / 89mm å£ä½“å†…ç©ºæ´ž)",
                      "wall-2x6": "å¤–å£ (2Ã—6æ / 140mm å£ä½“å†…ç©ºæ´ž)",
                      "cathedral": "å‹¾é…å¤©äº• / åž‚æœ¨é–“æ–­ç†±",
                      "floor-crawlspace": "åºŠä¸‹ / éžæš–æˆ¿åŸºç¤Žä¸Šéƒ¨åºŠé¢",
                      "basement-wall": "åœ°ä¸‹å®¤åŸºç¤Žå£é¢",
                      "custom": "ã‚«ã‚¹ã‚¿ãƒ éƒ¨ä½"
                },
                "climateZone": {
                      "zone-1": "ç¬¬1åœ°åŸŸ â€” æ¸©æš–ãƒ»ç†±å¸¯ (æ²–ç¸„ãƒ»ä¹å·žå—éƒ¨)",
                      "zone-2": "ç¬¬2åœ°åŸŸ â€” æ¸©æš–åœ°",
                      "zone-3": "ç¬¬3åœ°åŸŸ â€” ä¸­é–“åœ°åŸŸ",
                      "zone-4": "ç¬¬4åœ°åŸŸ â€” ä¸€èˆ¬æ¸©æš–åœ°åŸŸ (æ±äº¬ãƒ»å¤§é˜ª)",
                      "zone-5": "ç¬¬5åœ°åŸŸ â€” å¯’å†·åœ°åŸŸ (æ±åŒ—ãƒ»åŒ—é™¸)",
                      "zone-6": "ç¬¬6åœ°åŸŸ â€” å¯’å†·åœ° (åŒ—æµ·é“å—éƒ¨)",
                      "zone-7-8": "ç¬¬7ãƒ»8åœ°åŸŸ â€” åŽ³å¯’åœ° (åŒ—æµ·é“åŒ—éƒ¨ãƒ»é“æ±)",
                      "custom": "ã‚«ã‚¹ã‚¿ãƒ ç›®æ¨™Rå€¤"
                },
                "materialType": {
                      "fiberglass-batt": "ã‚°ãƒ©ã‚¹ã‚¦ãƒ¼ãƒ«ãƒžãƒƒãƒˆ (R-3.4 / ã‚¤ãƒ³ãƒ)",
                      "rockwool-batt": "ãƒ­ãƒƒã‚¯ã‚¦ãƒ¼ãƒ« / é‰±ç‰©ç¹Šç¶­æ¿ (R-3.8 / ã‚¤ãƒ³ãƒ)",
                      "cellulose-blown": "ã‚»ãƒ«ãƒ­ãƒ¼ã‚¹ãƒ•ã‚¡ã‚¤ãƒãƒ¼å¹è¾¼ã¿ (R-3.6 / ã‚¤ãƒ³ãƒ)",
                      "fiberglass-blown": "ã‚°ãƒ©ã‚¹ã‚¦ãƒ¼ãƒ«å¹è¾¼ã¿ (R-2.5 / ã‚¤ãƒ³ãƒ)",
                      "sprayfoam-open": "ç¾å ´ç™ºæ³¡ã‚¦ãƒ¬ã‚¿ãƒ³ è»Ÿè³ªãƒ»é€£ç¶šæ°—æ³¡ (R-3.7 / ã‚¤ãƒ³ãƒ)",
                      "sprayfoam-closed": "ç¾å ´ç™ºæ³¡ã‚¦ãƒ¬ã‚¿ãƒ³ ç¡¬è³ªãƒ»ç‹¬ç«‹æ°—æ³¡ (R-6.7 / ã‚¤ãƒ³ãƒ)",
                      "rigid-xps": "æŠ¼å‡ºæ³•ãƒãƒªã‚¹ãƒãƒ¬ãƒ³ãƒ•ã‚©ãƒ¼ãƒ  XPS (R-5.0 / ã‚¤ãƒ³ãƒ)",
                      "rigid-polyiso": "ãƒ•ã‚§ãƒŽãƒ¼ãƒ«ãƒ•ã‚©ãƒ¼ãƒ  / PIRãƒœãƒ¼ãƒ‰ (R-6.5 / ã‚¤ãƒ³ãƒ)"
                },
                "framingSpacing": {
                      "continuous": "é€£ç¶šæ–­ç†± / æŸ±æŽ§é™¤ãªã— (å¤©äº•æ•·ãè¾¼ã¿ã€å¤–å¼µæ–­ç†±)",
                      "16-oc": "455mm/40cmãƒ”ãƒƒãƒ (æ¨™æº–å¤–å£ã€ç´„10%æœ¨ææŽ§é™¤)",
                      "24-oc": "500mm/60cmãƒ”ãƒƒãƒ (åºƒã‚¹ãƒ‘ãƒ³æ§‹é€ ã€ç´„7%æœ¨ææŽ§é™¤)"
                }
          },
          "article": "## æ–­ç†±æè¨ˆç®—æ©Ÿã®ä½¿ã„æ–¹\n\næ–½å·¥ç®‡æ‰€ã¨æ°—å€™åŒºåˆ†ã‚’é¸æŠžã—ã¦ãã ã•ã„ã€‚å¿…è¦åŽšã¿ã€æŸ±ã®æœ¨ææ¯”çŽ‡æŽ§é™¤ã€ç™ºæ³¨ã™ã¹ãæ–­ç†±ãƒ‘ãƒƒã‚¯æ•°ã‚„è¢‹æ•°ã‚’å³åº§ã«ç®—å‡ºã—ã¾ã™ã€‚"
    },
    ko: {
          "name": "ë‹¨ì—´ìž¬ ì†Œìš”ëŸ‰ ë° Rê°’ ê³„ì‚°ê¸°",
          "shortDescription": "ê±´ì¶•ë¬¼ ì—ë„ˆì§€ ì ˆì•½ ì„¤ê³„ ê¸°ì¤€ì— ë§žì¶˜ ì²œìž¥, ì™¸ë²½, ë°”ë‹¥ì˜ ëª©í‘œ Rê°’, ê¸€ë¼ìŠ¤ìš¸/ë¯¸ë„¤ëž„ìš¸ ë¡¤ íŒ© ìˆ˜, ì…€ë£°ë¡œì˜¤ìŠ¤ ì·¨ìž… í¬ëŒ€ ë° ìš°ë ˆíƒ„ í¼ ì²´ì ì„ ê³„ì‚°í•©ë‹ˆë‹¤.",
          "helpTexts": {
                "application": "ê±´ì¶• ë‹¨ì—´ ê·œì • ê¸°ì¤€ì„ ë¶ˆëŸ¬ì˜¤ê¸° ìœ„í•´ ì‹œê³µ ë¶€ìœ„ë¥¼ ì„ íƒí•˜ì„¸ìš”.",
                "area": "ë‹¨ì—´ì„ ì‹œê³µí•  ì´ í‘œë©´ì  (ì œê³±ë¯¸í„° ë˜ëŠ” í‰ë°©í”¼íŠ¸).",
                "climateZone": "ì—ë„ˆì§€ ì ˆì•½ ê¸°ì¤€ì— ë”°ë¥¸ ì§€ì—­ë³„ ìµœì†Œ ë‹¨ì—´ Rê°’ì„ ì„¤ì •í•©ë‹ˆë‹¤.",
                "targetRValue": "ë‹¬ì„±í•˜ê³ ìž í•˜ëŠ” ëª©í‘œ ì—´ì €í•­ê°’ (Rê°’).",
                "materialType": "ë‹¨ì—´ìž¬ ì¢…ë¥˜ë§ˆë‹¤ ë‹¨ìœ„ ë‘ê»˜ë‹¹ ë‹¨ì—´ ì„±ëŠ¥ì´ ë‹¤ë¦…ë‹ˆë‹¤.",
                "framingSpacing": "ë²½ì²´ ë‚´ë¶€ ì¶©ì§„ ë‹¨ì—´ ì‹œ ìŠ¤í„°ë“œ ëª©ìž¬ê°€ ì°¨ì§€í•˜ëŠ” ë©´ì ì„ ê³µì œí•©ë‹ˆë‹¤.",
                "existingRValue": "ë¦¬ëª¨ë¸ë§ ë˜ëŠ” ë§ë‹¨ì—´ ì‹œ ê¸°ì¡´ ë‹¨ì—´ìž¬ì˜ Rê°’ì„ ìž…ë ¥í•˜ì„¸ìš”.",
                "waste": "ê¶Œìž¥ ì—¬ìœ ìœ¨: ê°œë°©í˜• ì²œìž¥ 5%, ì°½í˜¸/ë¬¸ì´ ìžˆëŠ” ë²½ì²´ 8-10%.",
                "coveragePerPack": "ì„ íƒì‚¬í•­ â€” ë‹¨ì—´ìž¬ 1íŒ©ë‹¹ ì œì¡°ì‚¬ ê³µì‹œ ì‹œê³µ ë©´ì .",
                "pricePerUnit": "ì„ íƒì‚¬í•­ â€” ì˜ˆì‚° ê²¬ì  ì‚°ì¶œì„ ìœ„í•œ ìžìž¬ ë‹¨ìœ„ ë‹¨ê°€.",
                "laborCostPerSqFt": "ì„ íƒì‚¬í•­ â€” ë©´ì ë‹¹ ì‹œê³µ ì¸ê±´ë¹„.",
                "includeVaporBarrier": "6 mil ë°©ìŠµ ê¸°ë°€ í•„ë¦„ ë¡¤ ìˆ˜ëŸ‰ì„ ê³„ì‚°ì— í¬í•¨í•©ë‹ˆë‹¤."
          },
          "options": {
                "application": {
                      "attic": "ì§€ë¶• ë°‘ ì²œìž¥ / í‰ì²œìž¥ (Attic)",
                      "wall-2x4": "ì™¸ë²½ (2Ã—4 ìŠ¤í„°ë“œ, 89mm ì¤‘ê³µë¶€)",
                      "wall-2x6": "ì™¸ë²½ (2Ã—6 ìŠ¤í„°ë“œ, 140mm ì¤‘ê³µë¶€)",
                      "cathedral": "ê²½ì‚¬ ì§€ë¶• / ì„œê¹Œëž˜ ì‚¬ì´ ë‹¨ì—´",
                      "floor-crawlspace": "ë¹„ë‚œë°© ì§€í•˜/í”¼íŠ¸ ìƒë¶€ ë°”ë‹¥",
                      "basement-wall": "ì§€í•˜ ì½˜í¬ë¦¬íŠ¸ ê¸°ì´ˆë²½",
                      "custom": "ì‚¬ìš©ìž ì§€ì • ë¶€ìœ„"
                },
                "climateZone": {
                      "zone-1": "1ì§€ì—­ â€” ë‚¨ë¶€ ì˜¨ë‚œ ì§€ì—­ (ì œì£¼)",
                      "zone-2": "2ì§€ì—­ â€” ë‚¨ë¶€ ì§€ì—­",
                      "zone-3": "3ì§€ì—­ â€” ì¤‘ë¶€ 2ì§€ì—­ (ì¶©ì²­/ì „ë¶/ê²½ë¶)",
                      "zone-4": "4ì§€ì—­ â€” ì¤‘ë¶€ 1ì§€ì—­ (ì„œìš¸/ê²½ê¸°/ê°•ì› ì˜ì„œ)",
                      "zone-5": "5ì§€ì—­ â€” í•œëž­ ì‚°ê°„ ì§€ì—­",
                      "zone-6": "6ì§€ì—­ â€” ê·¹í•œëž­ ì§€ì—­",
                      "zone-7-8": "7 & 8ì§€ì—­ â€” ë¶ë¶€ í•œëŒ€ ì§€ì—­",
                      "custom": "ì‚¬ìš©ìž ì§€ì • ëª©í‘œ Rê°’"
                },
                "materialType": {
                      "fiberglass-batt": "ê¸€ë¼ìŠ¤ìš¸ ë‹¨ì—´ ë§¤íŠ¸/ë¡¤ (R-3.4 / ì¸ì¹˜)",
                      "rockwool-batt": "ë¯¸ë„¤ëž„ìš¸ / ì•”ë©´ ë³´ë“œ (R-3.8 / ì¸ì¹˜)",
                      "cellulose-blown": "ì…€ë£°ë¡œì˜¤ìŠ¤ ì·¨ìž… ë‹¨ì—´ìž¬ (R-3.6 / ì¸ì¹˜)",
                      "fiberglass-blown": "ê¸€ë¼ìŠ¤ìš¸ ì·¨ìž… ë‹¨ì—´ìž¬ (R-2.5 / ì¸ì¹˜)",
                      "sprayfoam-open": "ìˆ˜ì„± ì—°ì§ˆ ìš°ë ˆíƒ„ í¼ (R-3.7 / ì¸ì¹˜)",
                      "sprayfoam-closed": "ê²½ì§ˆ ìš°ë ˆíƒ„ í¼ ìŠ¤í”„ë ˆì´ (R-6.7 / ì¸ì¹˜, ë°©ìŠµ ì¼ì²´í˜•)",
                      "rigid-xps": "ì••ì¶œë²• ë³´ì˜¨íŒ XPS (ì•„ì´ì†Œí•‘í¬) (R-5.0 / ì¸ì¹˜)",
                      "rigid-polyiso": "PIR ìš°ë ˆíƒ„ ë³´ë“œ (R-6.5 / ì¸ì¹˜)"
                },
                "framingSpacing": {
                      "continuous": "ì—°ì† ë‹¨ì—´ / ëª©ìž¬ ê³µì œ ì—†ìŒ (ì²œìž¥ í¬ì„¤, ì™¸ë‹¨ì—´)",
                      "16-oc": "400mm / 16ì¸ì¹˜ ê°„ê²© (í‘œì¤€ ì™¸ë²½, ~10% ëª©ìž¬ ê³µì œ)",
                      "24-oc": "600mm / 24ì¸ì¹˜ ê°„ê²© (ì„œê¹Œëž˜ êµ¬ì¡°, ~7% ëª©ìž¬ ê³µì œ)"
                }
          },
          "article": "## ë‹¨ì—´ìž¬ ê³„ì‚°ê¸° ì‚¬ìš© ë°©ë²•\n\nì‹œê³µ ë¶€ìœ„ì™€ ê¸°í›„ ì§€ì—­ì„ ì„ íƒí•˜ì„¸ìš”. ì—ë„ˆì§€ ì ˆì•½ ê¸°ì¤€ì— ë¶€í•©í•˜ëŠ” ê¶Œìž¥ Rê°’ê³¼ ìŠ¤í„°ë“œ ëª©ìž¬ ë©´ì  ê³µì œë¥¼ ë°˜ì˜í•˜ì—¬ í•„ìš”í•œ ë‹¨ì—´ìž¬ ë‘ê»˜, íŒ© ìˆ˜ ë° ì´ë¹„ìš©ì„ ì¦‰ì‹œ ì‚°ì¶œí•©ë‹ˆë‹¤."
    },
  },
  'water-softener-size-calculator': {
    en: {
      name: 'Water Softener Size Calculator',
      shortDescription: 'Determine the correct grain capacity, resin volume, salt consumption, and regeneration cycle for your home using WQA sizing standards.',
      helpTexts: {
        people: 'Total number of people using softened water daily.',
        hardness: 'Measured hardness from your water quality report or test kit.',
        hardnessUnit: '1 GPG = 17.118 PPM. Municipal reports use PPM; softener specs use GPG.',
        iron: 'Each 1 ppm dissolved iron adds 4 GPG to effective hardness load.',
        manganese: 'Each 1 ppm manganese adds 2 GPG to effective hardness load.',
        bathrooms: 'Used to estimate peak simultaneous fixture demand (GPM).',
        regenDays: 'How many days of soft water capacity before the softener regenerates.',
        reservePercent: '20% safety reserve prevents hardness breakthrough during peak usage.',
        gallonsPerPersonPerDay: 'EPA average indoor use is 60â€“80 GPD per person.',
        saltType: 'Evaporated pellets recommended for most residential softeners.',
        saltCostPerBag: 'Optional â€” enter your local price to estimate annual salt cost.',
      },
      options: {
        hardnessUnit: {
          'gpg': 'GPG â€” Grains per Gallon (US Softener Standard)',
          'ppm': 'PPM / mg/L â€” Parts per Million (Water Quality Reports)',
        },
        saltType: {
          'evaporated-pellets': 'Evaporated Pellets â€” 99.6%+ NaCl (Best for most softeners)',
          'solar-crystals': 'Solar Crystals â€” 99.5%+ NaCl (More soluble)',
          'potassium-chloride': 'Potassium Chloride (KCl) â€” Sodium-free alternative',
        },
      },
      article: '## How to Size a Water Softener\n\nEnter your household size, water hardness (GPG or PPM), and dissolved iron levels. The calculator applies WQA sizing standards to recommend the correct grain capacity, resin volume, tank dimensions, annual salt bags, and regeneration wastewater per cycle.',
    },
    es: {
      name: 'Calculadora de TamaÃ±o de Suavizador de Agua',
      shortDescription: 'Calcule la capacidad en granos, volumen de resina y consumo de sal para su suavizador de agua.',
      helpTexts: { hardness: 'Dureza medida de su informe de calidad del agua.', iron: 'Cada 1 ppm de hierro disuelto aÃ±ade 4 GPG a la carga efectiva.' },
      options: { hardnessUnit: { 'gpg': 'GPG â€” Granos por GalÃ³n', 'ppm': 'PPM / mg/L â€” Partes por MillÃ³n' }, saltType: { 'evaporated-pellets': 'Pellets Evaporados â€” NaCl 99.6%+', 'solar-crystals': 'Cristales Solares â€” NaCl 99.5%+', 'potassium-chloride': 'Cloruro de Potasio (KCl) â€” Sin sodio' } },
      article: '## CÃ³mo dimensionar un suavizador de agua\n\nIngrese el tamaÃ±o del hogar, la dureza del agua en GPG o PPM y los niveles de hierro disuelto. La calculadora aplica estÃ¡ndares WQA para recomendar la capacidad en granos correcta.',
    },
    fr: {
      name: 'Calculateur de Taille d\'Adoucisseur d\'Eau',
      shortDescription: 'Calculez la capacitÃ© en grains, le volume de rÃ©sine et la consommation de sel pour votre adoucisseur d\'eau.',
      helpTexts: { hardness: 'DuretÃ© mesurÃ©e Ã  partir de votre rapport de qualitÃ© de l\'eau.', iron: 'Chaque 1 ppm de fer dissous ajoute 4 GPG Ã  la charge effective.' },
      options: { hardnessUnit: { 'gpg': 'GPG â€” Grains par Gallon', 'ppm': 'PPM / mg/L â€” Parties par Million' }, saltType: { 'evaporated-pellets': 'Pastilles Ã‰vaporÃ©es â€” NaCl 99,6%+', 'solar-crystals': 'Cristaux Solaires â€” NaCl 99,5%+', 'potassium-chloride': 'Chlorure de Potassium (KCl) â€” Sans sodium' } },
      article: '## Comment dimensionner un adoucisseur d\'eau\n\nSaisissez la taille du foyer, la duretÃ© de l\'eau en GPG ou PPM et les niveaux de fer dissous. La calculatrice applique les normes WQA pour recommander la bonne capacitÃ© en grains.',
    },
    de: {
      name: 'WasserenthÃ¤rter-GrÃ¶ÃŸenrechner',
      shortDescription: 'Berechnen Sie die KÃ¶rnerkapazitÃ¤t, das Harzvolumen und den Salzverbrauch fÃ¼r Ihren WasserenthÃ¤rter.',
      helpTexts: { hardness: 'Gemessene HÃ¤rte aus Ihrem WasserqualitÃ¤tsbericht.', iron: 'Jedes 1 ppm gelÃ¶stes Eisen fÃ¼gt 4 GPG zur effektiven Belastung hinzu.' },
      options: { hardnessUnit: { 'gpg': 'GPG â€” KÃ¶rner pro Gallone', 'ppm': 'PPM / mg/L â€” Teile pro Million' }, saltType: { 'evaporated-pellets': 'Verdampfte Pellets â€” NaCl 99,6%+', 'solar-crystals': 'Solarsalz-Kristalle â€” NaCl 99,5%+', 'potassium-chloride': 'Kaliumchlorid (KCl) â€” Natriumfrei' } },
      article: '## Wie man einen WasserenthÃ¤rter dimensioniert\n\nGeben Sie die HaushaltsgrÃ¶ÃŸe, die WasserhÃ¤rte in GPG oder PPM und den gelÃ¶sten Eisengehalt ein. Der Rechner wendet WQA-Standards an, um die richtige KÃ¶rnerkapazitÃ¤t zu empfehlen.',
    },
    pt: {
      name: 'Calculadora de Tamanho de Amaciador de Ãgua',
      shortDescription: 'Calcule a capacidade em grÃ£os, volume de resina e consumo de sal para o seu amaciador de Ã¡gua.',
      helpTexts: { hardness: 'Dureza medida do seu relatÃ³rio de qualidade da Ã¡gua.', iron: 'Cada 1 ppm de ferro dissolvido adiciona 4 GPG Ã  carga efetiva.' },
      options: { hardnessUnit: { 'gpg': 'GPG â€” GrÃ£os por GalÃ£o', 'ppm': 'PPM / mg/L â€” Partes por MilhÃ£o' }, saltType: { 'evaporated-pellets': 'Pelotas Evaporadas â€” NaCl 99,6%+', 'solar-crystals': 'Cristais Solares â€” NaCl 99,5%+', 'potassium-chloride': 'Cloreto de PotÃ¡ssio (KCl) â€” Sem sÃ³dio' } },
      article: '## Como dimensionar um amaciador de Ã¡gua\n\nInsira o tamanho do domicÃ­lio, a dureza da Ã¡gua em GPG ou PPM e os nÃ­veis de ferro dissolvido. A calculadora aplica padrÃµes WQA para recomendar a capacidade em grÃ£os correta.',
    },
    it: {
      name: 'Calcolatore Dimensione Addolcitore Acqua',
      shortDescription: 'Calcola la capacitÃ  in grani, il volume di resina e il consumo di sale per il tuo addolcitore d\'acqua.',
      helpTexts: { hardness: 'Durezza misurata dal tuo rapporto di qualitÃ  dell\'acqua.', iron: 'Ogni 1 ppm di ferro disciolto aggiunge 4 GPG al carico effettivo.' },
      options: { hardnessUnit: { 'gpg': 'GPG â€” Grani per Gallone', 'ppm': 'PPM / mg/L â€” Parti per Milione' }, saltType: { 'evaporated-pellets': 'Pellet Evaporati â€” NaCl 99,6%+', 'solar-crystals': 'Cristalli Solari â€” NaCl 99,5%+', 'potassium-chloride': 'Cloruro di Potassio (KCl) â€” Senza sodio' } },
      article: '## Come dimensionare un addolcitore d\'acqua\n\nInserisci le dimensioni del nucleo familiare, la durezza dell\'acqua in GPG o PPM e i livelli di ferro disciolto. Il calcolatore applica gli standard WQA per raccomandare la capacitÃ  in grani corretta.',
    },
    nl: {
      name: 'Waterontharder Grootte Calculator',
      shortDescription: 'Bereken de grainscapaciteit, harsvolume en zoutverbruik voor uw waterontharder.',
      helpTexts: { hardness: 'Gemeten hardheid uit uw waterkwaliteitsrapport.', iron: 'Elk 1 ppm opgelost ijzer voegt 4 GPG toe aan de effectieve belasting.' },
      options: { hardnessUnit: { 'gpg': 'GPG â€” Grains per Gallon', 'ppm': 'PPM / mg/L â€” Delen per Miljoen' }, saltType: { 'evaporated-pellets': 'Verdampte Pellets â€” NaCl 99,6%+', 'solar-crystals': 'Zoutkristallen â€” NaCl 99,5%+', 'potassium-chloride': 'Kaliumchloride (KCl) â€” Natriumvrij' } },
      article: '## Hoe u een waterontharder dimensioneert\n\nVoer de huishoudgrootte, de waterhardheid in GPG of PPM en het opgeloste ijzergehalte in. De calculator past WQA-normen toe om de juiste grainscapaciteit aan te bevelen.',
    },
    pl: {
      name: 'Kalkulator RozmiarÃ³w ZmiÄ™kczacza Wody',
      shortDescription: 'Oblicz pojemnoÅ›Ä‡ w ziarnach, objÄ™toÅ›Ä‡ Å¼ywicy i zuÅ¼ycie soli dla zmiÄ™kczacza wody.',
      helpTexts: { hardness: 'Zmierzona twardoÅ›Ä‡ z raportu jakoÅ›ci wody.', iron: 'KaÅ¼de 1 ppm rozpuszczonego Å¼elaza dodaje 4 GPG do efektywnego obciÄ…Å¼enia.' },
      options: { hardnessUnit: { 'gpg': 'GPG â€” Ziarna na Galon', 'ppm': 'PPM / mg/L â€” CzÄ™Å›ci na Milion' }, saltType: { 'evaporated-pellets': 'Granulat Ewaporowany â€” NaCl 99,6%+', 'solar-crystals': 'KrysztaÅ‚y Solne â€” NaCl 99,5%+', 'potassium-chloride': 'Chlorek Potasu (KCl) â€” Bez sodu' } },
      article: '## Jak dobraÄ‡ zmiÄ™kczacz wody\n\nWprowadÅº liczbÄ™ domownikÃ³w, twardoÅ›Ä‡ wody w GPG lub PPM oraz poziomy Å¼elaza. Kalkulator stosuje standardy WQA, aby zaleciÄ‡ wÅ‚aÅ›ciwÄ… pojemnoÅ›Ä‡ w ziarnach.',
    },
    ru: {
      name: 'ÐšÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€ Ð Ð°Ð·Ð¼ÐµÑ€Ð° Ð£Ð¼ÑÐ³Ñ‡Ð¸Ñ‚ÐµÐ»Ñ Ð’Ð¾Ð´Ñ‹',
      shortDescription: 'Ð Ð°ÑÑÑ‡Ð¸Ñ‚Ð°Ð¹Ñ‚Ðµ Ð·ÐµÑ€Ð½Ð¾Ð²ÑƒÑŽ Ñ‘Ð¼ÐºÐ¾ÑÑ‚ÑŒ, Ð¾Ð±ÑŠÑ‘Ð¼ ÑÐ¼Ð¾Ð»Ñ‹ Ð¸ Ñ€Ð°ÑÑ…Ð¾Ð´ ÑÐ¾Ð»Ð¸ Ð´Ð»Ñ ÑƒÐ¼ÑÐ³Ñ‡Ð¸Ñ‚ÐµÐ»Ñ Ð²Ð¾Ð´Ñ‹.',
      helpTexts: { hardness: 'Ð˜Ð·Ð¼ÐµÑ€ÐµÐ½Ð½Ð°Ñ Ð¶Ñ‘ÑÑ‚ÐºÐ¾ÑÑ‚ÑŒ Ð¸Ð· Ð¾Ñ‚Ñ‡Ñ‘Ñ‚Ð° Ð¾ ÐºÐ°Ñ‡ÐµÑÑ‚Ð²Ðµ Ð²Ð¾Ð´Ñ‹.', iron: 'ÐšÐ°Ð¶Ð´Ñ‹Ðµ 1 ppm Ñ€Ð°ÑÑ‚Ð²Ð¾Ñ€Ñ‘Ð½Ð½Ð¾Ð³Ð¾ Ð¶ÐµÐ»ÐµÐ·Ð° Ð´Ð¾Ð±Ð°Ð²Ð»ÑÑŽÑ‚ 4 GPG Ðº ÑÑ„Ñ„ÐµÐºÑ‚Ð¸Ð²Ð½Ð¾Ð¹ Ð½Ð°Ð³Ñ€ÑƒÐ·ÐºÐµ.' },
      options: { hardnessUnit: { 'gpg': 'GPG â€” Ð“Ñ€ÐµÐ¹Ð½Ñ‹ Ð½Ð° Ð“Ð°Ð»Ð»Ð¾Ð½', 'ppm': 'PPM / Ð¼Ð³/Ð» â€” Ð§Ð°ÑÑ‚Ð¸ Ð½Ð° ÐœÐ¸Ð»Ð»Ð¸Ð¾Ð½' }, saltType: { 'evaporated-pellets': 'Ð˜ÑÐ¿Ð°Ñ€Ñ‘Ð½Ð½Ñ‹Ðµ Ð“Ñ€Ð°Ð½ÑƒÐ»Ñ‹ â€” NaCl 99,6%+', 'solar-crystals': 'Ð¡Ð¾Ð»Ð½ÐµÑ‡Ð½Ñ‹Ðµ ÐšÑ€Ð¸ÑÑ‚Ð°Ð»Ð»Ñ‹ â€” NaCl 99,5%+', 'potassium-chloride': 'Ð¥Ð»Ð¾Ñ€Ð¸Ð´ ÐšÐ°Ð»Ð¸Ñ (KCl) â€” Ð‘ÐµÐ· Ð½Ð°Ñ‚Ñ€Ð¸Ñ' } },
      article: '## ÐšÐ°Ðº Ð¿Ð¾Ð´Ð¾Ð±Ñ€Ð°Ñ‚ÑŒ ÑƒÐ¼ÑÐ³Ñ‡Ð¸Ñ‚ÐµÐ»ÑŒ Ð²Ð¾Ð´Ñ‹\n\nÐ’Ð²ÐµÐ´Ð¸Ñ‚Ðµ ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ð¶Ð¸Ñ‚ÐµÐ»ÐµÐ¹, Ð¶Ñ‘ÑÑ‚ÐºÐ¾ÑÑ‚ÑŒ Ð²Ð¾Ð´Ñ‹ Ð² GPG Ð¸Ð»Ð¸ PPM Ð¸ ÑƒÑ€Ð¾Ð²ÐµÐ½ÑŒ Ñ€Ð°ÑÑ‚Ð²Ð¾Ñ€Ñ‘Ð½Ð½Ð¾Ð³Ð¾ Ð¶ÐµÐ»ÐµÐ·Ð°. ÐšÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€ Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÑÐµÑ‚ ÑÑ‚Ð°Ð½Ð´Ð°Ñ€Ñ‚Ñ‹ WQA Ð´Ð»Ñ Ñ€ÐµÐºÐ¾Ð¼ÐµÐ½Ð´Ð°Ñ†Ð¸Ð¸ Ð¿Ñ€Ð°Ð²Ð¸Ð»ÑŒÐ½Ð¾Ð¹ Ð·ÐµÑ€Ð½Ð¾Ð²Ð¾Ð¹ Ñ‘Ð¼ÐºÐ¾ÑÑ‚Ð¸.',
    },
    tr: {
      name: 'Su YumuÅŸatÄ±cÄ± Boyut HesaplayÄ±cÄ±',
      shortDescription: 'Su yumuÅŸatÄ±cÄ±nÄ±z iÃ§in doÄŸru tane kapasitesini, reÃ§ine hacmini ve tuz tÃ¼ketimini hesaplayÄ±n.',
      helpTexts: { hardness: 'Su kalite raporunuzdan Ã¶lÃ§Ã¼len sertlik.', iron: 'Her 1 ppm Ã§Ã¶zÃ¼nmÃ¼ÅŸ demir, efektif yÃ¼ke 4 GPG ekler.' },
      options: { hardnessUnit: { 'gpg': 'GPG â€” Galon BaÅŸÄ±na Tane', 'ppm': 'PPM / mg/L â€” Milyonda Bir' }, saltType: { 'evaporated-pellets': 'BuharlaÅŸtÄ±rÄ±lmÄ±ÅŸ Pelet â€” NaCl %99,6+', 'solar-crystals': 'GÃ¼neÅŸ Tuzu Kristalleri â€” NaCl %99,5+', 'potassium-chloride': 'Potasyum KlorÃ¼r (KCl) â€” Sodyumsuz' } },
      article: '## Su YumuÅŸatÄ±cÄ± NasÄ±l BoyutlandÄ±rÄ±lÄ±r\n\nHane bÃ¼yÃ¼klÃ¼ÄŸÃ¼nÃ¼, GPG veya PPM cinsinden su sertliÄŸini ve Ã§Ã¶zÃ¼nmÃ¼ÅŸ demir dÃ¼zeylerini girin. HesaplayÄ±cÄ±, doÄŸru tane kapasitesini Ã¶nermek iÃ§in WQA standartlarÄ±nÄ± uygular.',
    },
    ar: {
      name: 'Ø­Ø§Ø³Ø¨Ø© Ø­Ø¬Ù… Ù…ÙÙ„ÙŠÙÙ‘Ù† Ø§Ù„Ù…Ø§Ø¡',
      shortDescription: 'Ø§Ø­Ø³Ø¨ Ø³Ø¹Ø© Ø§Ù„Ø­Ø¨ÙˆØ¨ ÙˆØ­Ø¬Ù… Ø§Ù„Ø±Ø§ØªÙ†Ø¬ ÙˆØ§Ø³ØªÙ‡Ù„Ø§Ùƒ Ø§Ù„Ù…Ù„Ø­ Ù„Ù…ÙÙ„ÙŠÙÙ‘Ù† Ø§Ù„Ù…Ø§Ø¡ Ø§Ù„Ø®Ø§Øµ Ø¨Ùƒ.',
      helpTexts: { hardness: 'Ø§Ù„ØµÙ„Ø§Ø¨Ø© Ø§Ù„Ù…Ù‚Ø§Ø³Ø© Ù…Ù† ØªÙ‚Ø±ÙŠØ± Ø¬ÙˆØ¯Ø© Ø§Ù„Ù…ÙŠØ§Ù‡ Ø§Ù„Ø®Ø§Øµ Ø¨Ùƒ.', iron: 'ÙƒÙ„ 1 Ø¬Ø²Ø¡ ÙÙŠ Ø§Ù„Ù…Ù„ÙŠÙˆÙ† Ù…Ù† Ø§Ù„Ø­Ø¯ÙŠØ¯ Ø§Ù„Ù…Ø°Ø§Ø¨ ÙŠØ¶ÙŠÙ 4 GPG Ø¥Ù„Ù‰ Ø§Ù„Ø­Ù…Ù„ Ø§Ù„ÙØ¹Ù„ÙŠ.' },
      options: { hardnessUnit: { 'gpg': 'GPG â€” Ø­Ø¨ÙˆØ¨ Ù„ÙƒÙ„ Ø¬Ø§Ù„ÙˆÙ†', 'ppm': 'PPM / mg/L â€” Ø¬Ø²Ø¡ ÙÙŠ Ø§Ù„Ù…Ù„ÙŠÙˆÙ†' }, saltType: { 'evaporated-pellets': 'Ø­Ø¨ÙŠØ¨Ø§Øª Ù…ØªØ¨Ø®Ø±Ø© â€” NaCl 99.6%+', 'solar-crystals': 'Ø¨Ù„ÙˆØ±Ø§Øª Ø´Ù…Ø³ÙŠØ© â€” NaCl 99.5%+', 'potassium-chloride': 'ÙƒÙ„ÙˆØ±ÙŠØ¯ Ø§Ù„Ø¨ÙˆØªØ§Ø³ÙŠÙˆÙ… (KCl) â€” Ø®Ø§Ù„Ù Ù…Ù† Ø§Ù„ØµÙˆØ¯ÙŠÙˆÙ…' } },
      article: '## ÙƒÙŠÙÙŠØ© ØªØ­Ø¯ÙŠØ¯ Ø­Ø¬Ù… Ù…ÙÙ„ÙŠÙÙ‘Ù† Ø§Ù„Ù…Ø§Ø¡\n\nØ£Ø¯Ø®Ù„ Ø­Ø¬Ù… Ø§Ù„Ø£Ø³Ø±Ø© ÙˆØ¯Ø±Ø¬Ø© ØµÙ„Ø§Ø¨Ø© Ø§Ù„Ù…Ø§Ø¡ Ø¨Ù€GPG Ø£Ùˆ PPM ÙˆÙ…Ø³ØªÙˆÙŠØ§Øª Ø§Ù„Ø­Ø¯ÙŠØ¯ Ø§Ù„Ù…Ø°Ø§Ø¨. ØªØ·Ø¨Ù‚ Ø§Ù„Ø¢Ù„Ø© Ø§Ù„Ø­Ø§Ø³Ø¨Ø© Ù…Ø¹Ø§ÙŠÙŠØ± WQA Ù„Ù„ØªÙˆØµÙŠØ© Ø¨Ø³Ø¹Ø© Ø§Ù„Ø­Ø¨ÙˆØ¨ Ø§Ù„ØµØ­ÙŠØ­Ø©.',
    },
    hi: {
      name: 'à¤µà¥‰à¤Ÿà¤° à¤¸à¥‰à¤«à¥à¤Ÿà¤¨à¤° à¤¸à¤¾à¤‡à¤œà¤¼ à¤•à¥ˆà¤²à¤•à¥à¤²à¥‡à¤Ÿà¤°',
      shortDescription: 'à¤…à¤ªà¤¨à¥‡ à¤µà¥‰à¤Ÿà¤° à¤¸à¥‰à¤«à¥à¤Ÿà¤¨à¤° à¤•à¥‡ à¤²à¤¿à¤ à¤¸à¤¹à¥€ à¤—à¥à¤°à¥‡à¤¨ à¤•à¥à¤·à¤®à¤¤à¤¾, à¤°à¥‡à¤œà¤¼à¤¿à¤¨ à¤µà¥‰à¤²à¥à¤¯à¥‚à¤® à¤”à¤° à¤¨à¤®à¤• à¤•à¥€ à¤–à¤ªà¤¤ à¤•à¥€ à¤—à¤£à¤¨à¤¾ à¤•à¤°à¥‡à¤‚à¥¤',
      helpTexts: { hardness: 'à¤…à¤ªà¤¨à¥€ à¤ªà¤¾à¤¨à¥€ à¤•à¥€ à¤—à¥à¤£à¤µà¤¤à¥à¤¤à¤¾ à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤¸à¥‡ à¤®à¤¾à¤ªà¥€ à¤—à¤ˆ à¤•à¤ à¥‹à¤°à¤¤à¤¾à¥¤', iron: 'à¤ªà¥à¤°à¤¤à¥à¤¯à¥‡à¤• 1 ppm à¤˜à¥à¤²à¤¾ à¤¹à¥à¤† à¤†à¤¯à¤°à¤¨ à¤ªà¥à¤°à¤­à¤¾à¤µà¥€ à¤­à¤¾à¤° à¤®à¥‡à¤‚ 4 GPG à¤œà¥‹à¤¡à¤¼à¤¤à¤¾ à¤¹à¥ˆà¥¤' },
      options: { hardnessUnit: { 'gpg': 'GPG â€” à¤—à¥à¤°à¥‡à¤¨ à¤ªà¥à¤°à¤¤à¤¿ à¤—à¥ˆà¤²à¤¨', 'ppm': 'PPM / mg/L â€” à¤ªà¥à¤°à¤¤à¤¿ à¤®à¤¿à¤²à¤¿à¤¯à¤¨ à¤­à¤¾à¤—' }, saltType: { 'evaporated-pellets': 'à¤µà¤¾à¤·à¥à¤ªà¤¿à¤¤ à¤ªà¥‡à¤²à¥‡à¤Ÿ â€” NaCl 99.6%+', 'solar-crystals': 'à¤¸à¥‹à¤²à¤° à¤•à¥à¤°à¤¿à¤¸à¥à¤Ÿà¤² â€” NaCl 99.5%+', 'potassium-chloride': 'à¤ªà¥‹à¤Ÿà¥‡à¤¶à¤¿à¤¯à¤® à¤•à¥à¤²à¥‹à¤°à¤¾à¤‡à¤¡ (KCl) â€” à¤¸à¥‹à¤¡à¤¿à¤¯à¤®-à¤®à¥à¤•à¥à¤¤' } },
      article: '## à¤µà¥‰à¤Ÿà¤° à¤¸à¥‰à¤«à¥à¤Ÿà¤¨à¤° à¤•à¤¾ à¤†à¤•à¤¾à¤° à¤•à¥ˆà¤¸à¥‡ à¤¨à¤¿à¤°à¥à¤§à¤¾à¤°à¤¿à¤¤ à¤•à¤°à¥‡à¤‚\n\nà¤˜à¤° à¤•à¥‡ à¤¸à¤¦à¤¸à¥à¤¯à¥‹à¤‚ à¤•à¥€ à¤¸à¤‚à¤–à¥à¤¯à¤¾, GPG à¤¯à¤¾ PPM à¤®à¥‡à¤‚ à¤ªà¤¾à¤¨à¥€ à¤•à¥€ à¤•à¤ à¥‹à¤°à¤¤à¤¾ à¤”à¤° à¤˜à¥à¤²à¥‡ à¤¹à¥à¤ à¤†à¤¯à¤°à¤¨ à¤•à¤¾ à¤¸à¥à¤¤à¤° à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚à¥¤ à¤•à¥ˆà¤²à¤•à¥à¤²à¥‡à¤Ÿà¤° WQA à¤®à¤¾à¤¨à¤•à¥‹à¤‚ à¤•à¥‹ à¤²à¤¾à¤—à¥‚ à¤•à¤°à¤•à¥‡ à¤¸à¤¹à¥€ à¤—à¥à¤°à¥‡à¤¨ à¤•à¥à¤·à¤®à¤¤à¤¾ à¤•à¥€ à¤¸à¤¿à¤«à¤¾à¤°à¤¿à¤¶ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤',
    },
    zh: {
      name: 'è½¯æ°´æœºå°ºå¯¸è®¡ç®—å™¨',
      shortDescription: 'ä½¿ç”¨WQAæ ‡å‡†è®¡ç®—æ‚¨è½¯æ°´æœºæ‰€éœ€çš„ç²’åº¦å®¹é‡ã€æ ‘è„‚ä½“ç§¯å’Œç”¨ç›é‡ã€‚',
      helpTexts: { hardness: 'æ¥è‡ªæ°´è´¨æŠ¥å‘Šçš„æµ‹é‡ç¡¬åº¦ã€‚', iron: 'æ¯1 ppmæº¶è§£é“å‘æœ‰æ•ˆè´Ÿè·æ·»åŠ 4 GPGã€‚' },
      options: { hardnessUnit: { 'gpg': 'GPG â€” æ¯åŠ ä»‘è°·ç²’', 'ppm': 'PPM / mg/L â€” ç™¾ä¸‡åˆ†ä¹‹ä¸€' }, saltType: { 'evaporated-pellets': 'è’¸å‘é¢—ç²’ â€” NaCl 99.6%+', 'solar-crystals': 'å¤ªé˜³æ™¶ä½“ â€” NaCl 99.5%+', 'potassium-chloride': 'æ°¯åŒ–é’¾ (KCl) â€” æ— é’ ' } },
      article: '## å¦‚ä½•ç¡®å®šè½¯æ°´æœºå°ºå¯¸\n\nè¾“å…¥å®¶åº­æˆå‘˜æ•°é‡ã€GPGæˆ–PPMçš„æ°´ç¡¬åº¦ä»¥åŠæº¶è§£é“æ°´å¹³ã€‚è®¡ç®—å™¨åº”ç”¨WQAæ ‡å‡†æŽ¨èæ­£ç¡®çš„ç²’åº¦å®¹é‡ã€‚',
    },
    ja: {
      name: 'è»Ÿæ°´å™¨ã‚µã‚¤ã‚ºè¨ˆç®—æ©Ÿ',
      shortDescription: 'WQAè¦æ ¼ã‚’ä½¿ç”¨ã—ã¦ã€è»Ÿæ°´å™¨ã«å¿…è¦ãªã‚°ãƒ¬ã‚¤ãƒ³å®¹é‡ã€æ¨¹è„‚å®¹ç©ã€å¡©æ¶ˆè²»é‡ã‚’è¨ˆç®—ã—ã¾ã™ã€‚',
      helpTexts: { hardness: 'æ°´è³ªãƒ¬ãƒãƒ¼ãƒˆã‹ã‚‰æ¸¬å®šã•ã‚ŒãŸç¡¬åº¦ã€‚', iron: 'æº¶è§£é‰„1 ppmã”ã¨ã«æœ‰åŠ¹è² è·ã«4 GPGãŒè¿½åŠ ã•ã‚Œã¾ã™ã€‚' },
      options: { hardnessUnit: { 'gpg': 'GPG â€” ã‚¬ãƒ­ãƒ³ã‚ãŸã‚Šã‚°ãƒ¬ã‚¤ãƒ³', 'ppm': 'PPM / mg/L â€” ç™¾ä¸‡åˆ†ã®ä¸€' }, saltType: { 'evaporated-pellets': 'è’¸ç™ºãƒšãƒ¬ãƒƒãƒˆ â€” NaCl 99.6%+', 'solar-crystals': 'å¤©æ—¥å¡©çµæ™¶ â€” NaCl 99.5%+', 'potassium-chloride': 'å¡©åŒ–ã‚«ãƒªã‚¦ãƒ  (KCl) â€” ãƒŠãƒˆãƒªã‚¦ãƒ ãƒ•ãƒªãƒ¼' } },
      article: '## è»Ÿæ°´å™¨ã®ã‚µã‚¤ã‚ºæ±ºå®šæ–¹æ³•\n\nä¸–å¸¯äººæ•°ã€GPGã¾ãŸã¯PPMã®æ°´ç¡¬åº¦ã€æº¶è§£é‰„ãƒ¬ãƒ™ãƒ«ã‚’å…¥åŠ›ã—ã¾ã™ã€‚è¨ˆç®—æ©Ÿã¯WQAåŸºæº–ã‚’é©ç”¨ã—ã¦é©åˆ‡ãªã‚°ãƒ¬ã‚¤ãƒ³å®¹é‡ã‚’æŽ¨å¥¨ã—ã¾ã™ã€‚',
    },
    ko: {
      name: 'ì—°ìˆ˜ê¸° í¬ê¸° ê³„ì‚°ê¸°',
      shortDescription: 'WQA ê¸°ì¤€ì„ ì‚¬ìš©í•˜ì—¬ ì—°ìˆ˜ê¸°ì— í•„ìš”í•œ ê·¸ë ˆì¸ ìš©ëŸ‰, ìˆ˜ì§€ ë¶€í”¼ ë° ì†Œê¸ˆ ì†Œë¹„ëŸ‰ì„ ê³„ì‚°í•˜ì„¸ìš”.',
      helpTexts: { hardness: 'ìˆ˜ì§ˆ ë³´ê³ ì„œì—ì„œ ì¸¡ì •ëœ ê²½ë„.', iron: 'ìš©ì¡´ ì² ë¶„ 1 ppmë§ˆë‹¤ ìœ íš¨ ë¶€í•˜ì— 4 GPGê°€ ì¶”ê°€ë©ë‹ˆë‹¤.' },
      options: { hardnessUnit: { 'gpg': 'GPG â€” ê°¤ëŸ°ë‹¹ ê·¸ë ˆì¸', 'ppm': 'PPM / mg/L â€” ë°±ë§Œë¶„ì˜ ì¼' }, saltType: { 'evaporated-pellets': 'ì¦ë°œ íŽ ë¦¿ â€” NaCl 99.6%+', 'solar-crystals': 'íƒœì–‘ì—¼ ê²°ì • â€” NaCl 99.5%+', 'potassium-chloride': 'ì—¼í™”ì¹¼ë¥¨ (KCl) â€” ë‚˜íŠ¸ë¥¨ ë¬´í•¨ìœ ' } },
      article: '## ì—°ìˆ˜ê¸° í¬ê¸° ê²°ì • ë°©ë²•\n\nê°€êµ¬ êµ¬ì„±ì› ìˆ˜, GPG ë˜ëŠ” PPMì˜ ë¬¼ ê²½ë„, ìš©ì¡´ ì² ë¶„ ìˆ˜ì¤€ì„ ìž…ë ¥í•˜ì„¸ìš”. ê³„ì‚°ê¸°ëŠ” WQA ê¸°ì¤€ì„ ì ìš©í•˜ì—¬ ì˜¬ë°”ë¥¸ ê·¸ë ˆì¸ ìš©ëŸ‰ì„ ì¶”ì²œí•©ë‹ˆë‹¤.',
    },
  },
  'electrical-load-calculator': {
    en: {
      name: 'Electrical Load Calculator',
      shortDescription: 'Calculate residential service load, main breaker amperage, and wire gauge sizing per NEC Article 220.',
      helpTexts: {
        squareFootage: 'Total finished square footage of the dwelling (excluding unfinished basements and garages).',
        smallApplianceCircuits: 'NEC 210.11(C)(1) requires at least two 20A kitchen circuits (1,500 VA each).',
        hasLaundryCircuit: 'NEC 210.11(C)(2) requires at least one 20A laundry circuit (1,500 VA).',
        cookingType: 'Electric cooking appliances require high continuous power.',
        rangeWatts: 'Nameplate rating from the manufacturer label (standard range is 12,000 W).',
        waterHeaterType: 'Electric tankless heaters draw massive current (75â€“150A) often requiring a service upgrade.',
        waterHeaterWatts: 'Standard dual-element electric tank is 4,500 Watts.',
        dryerType: 'NEC 220.54 requires a minimum rating of 5,000 VA for electric dryers.',
        dryerWatts: 'Standard electric clothes dryer is 5,000 Watts.',
        evChargerAmps: 'EV charging is a continuous load. Hardwired 48A (11.5 kW) is standard.',
        hotTubWatts: 'Typical 50A 240V hot tub is 8,000â€“10,000 Watts.',
        wellPumpWatts: 'Standard 1/2 HP to 1.5 HP submersible well pump is 1,500 to 2,500 Watts.',
        acType: 'Per NEC 220.82(C), cooling and heating are non-coincident; only the larger load is included.',
        acWatts: 'Total cooling compressor and air handler nameplate rating.',
        heatType: 'Cold-climate heat pumps with resistance backup are calculated per NEC 220.82(C)(5).',
        heatWatts: 'Standard auxiliary strip is 10,000 Watts (10 kW).',
        existingPanelRating: 'Checks if your current electrical service has sufficient capacity or requires an upgrade.',
      },
      options: {
        cookingType: {
          'electric-range': 'Standard Electric Range / Stove (12 kW Default)',
          'cooktop-oven': 'Separate Electric Cooktop & Wall Oven',
          'gas-cooking': 'Gas Range / Cooktop (Ignition only ~0 VA)',
          'none': 'None / No Cooking Appliances',
        },
        waterHeaterType: {
          'electric-tank': 'Standard Electric Tank Water Heater (4,500 W)',
          'heat-pump-hybrid': 'Hybrid Heat Pump Water Heater (1,000 W)',
          'tankless-electric': 'Whole-Home Electric Tankless (18,000â€“36,000 W)',
          'gas-water-heater': 'Gas / Propane Water Heater (0 VA)',
        },
        dryerType: {
          'electric-dryer': 'Standard Electric Dryer (Min 5,000 VA per NEC)',
          'heat-pump-dryer': 'Heat Pump / Ventless Dryer (~1,500 W)',
          'gas-dryer': 'Gas Dryer (~500 W drum motor)',
          'none': 'No Dryer',
        },
        evChargerAmps: {
          'none': 'None / No EV Charger',
          '16a-38kw': '16A / 3.8 kW (20A Breaker â€” Entry Level)',
          '24a-58kw': '24A / 5.8 kW (30A Breaker â€” Dryer Outlet)',
          '32a-77kw': '32A / 7.7 kW (40A Breaker â€” Standard Plug-In)',
          '40a-96kw': '40A / 9.6 kW (50A Breaker â€” NEMA 14-50)',
          '48a-115kw': '48A / 11.5 kW (60A Breaker â€” Tesla Wall Connector / Hardwire)',
          '80a-192kw': '80A / 19.2 kW (100A Breaker â€” Ford Charge Station Pro / Dual)',
        },
        acType: {
          'central-ac-heatpump': 'Central Air Conditioner / Heat Pump (~5,000 W)',
          'ductless-mini-split': 'Multi-Zone Ductless Mini-Split System (~3,500 W)',
          'window-units': 'Window / Portable AC Units (~2,000 W)',
          'none': 'No Air Conditioning',
        },
        heatType: {
          'heat-pump-electric-aux': 'Heat Pump with Electric Resistance Auxiliary Heat (10 kW strip)',
          'central-electric-furnace': 'Central Electric Furnace (65% demand factor per NEC)',
          'electric-baseboards': 'Electric Baseboard Heaters',
          'gas-furnace-boiler': 'Gas / Propane / Oil Furnace (Blower motor ~800 W)',
          'none': 'No Space Heating',
        },
        existingPanelRating: {
          '100a': '100 Amp Service Panel (Older Home Standard)',
          '125a': '125 Amp Service Panel',
          '150a': '150 Amp Service Panel',
          '200a': '200 Amp Service Panel (Modern Home Standard)',
          '400a': '400 Amp Service (Dual 200A Panels / Large Home)',
          'unknown': 'Unknown / Sizing New Construction',
        },
      },
      article: '## How to Calculate Electrical Service Load\n\nEnter your home\'s square footage, major cooking/laundry/water heating appliances, EV charger rating, and HVAC systems. The calculator applies the NEC 220.82 Optional Method to determine total demand in VA and Amps, recommend the correct service panel size (100Aâ€“400A), and provide NEC Table 310.12 service entrance conductor wire sizes.',
    },
    es: {
      name: 'Calculadora de Carga ElÃ©ctrica',
      shortDescription: 'Calcule la carga de servicio residencial, amperaje del interruptor principal y calibre de cables segÃºn NEC ArtÃ­culo 220.',
      helpTexts: { squareFootage: 'Superficie habitable terminada en pies cuadrados.' },
      article: '## CÃ³mo calcular la carga elÃ©ctrica residencial\n\nIngrese los metros cuadrados, electrodomÃ©sticos principales y sistemas de climatizaciÃ³n. La calculadora aplica el MÃ©todo Opcional NEC 220.82 para dimensionar el panel principal.',
    },
    fr: {
      name: 'Calculateur de Charge Ã‰lectrique',
      shortDescription: 'Calculez la charge de service rÃ©sidentielle, l\'ampÃ©rage du disjoncteur principal et le calibre des conducteurs selon le NEC Article 220.',
      helpTexts: { squareFootage: 'Surface habitable finie en pieds carrÃ©s.' },
      article: '## Comment calculer la charge Ã©lectrique rÃ©sidentielle\n\nSaisissez la superficie, les gros appareils Ã©lectromÃ©nagers et les systÃ¨mes CVC. Le calculateur applique la mÃ©thode optionnelle NEC 220.82.',
    },
    de: {
      name: 'Elektrischer Lastrechner',
      shortDescription: 'Berechnen Sie die elektrische Anschlussleistung, Hauptschalter-Amperezahl und Leitungsquerschnitte nach NEC Artikel 220.',
      helpTexts: { squareFootage: 'WohnflÃ¤che in QuadratfuÃŸ.' },
      article: '## Wie man die elektrische Last berechnet\n\nGeben Sie WohnflÃ¤che, GroÃŸgerÃ¤te und Klimaanlagen ein. Der Rechner wendet die NEC 220.82 Methode an.',
    },
    pt: {
      name: 'Calculadora de Carga ElÃ©trica',
      shortDescription: 'Calcule a carga elÃ©trica residencial, amperagem do disjuntor principal e bitola dos cabos conforme NEC Artigo 220.',
      helpTexts: { squareFootage: 'Ãrea residencial acabada em pÃ©s quadrados.' },
      article: '## Como calcular a carga elÃ©trica residencial\n\nInsira a Ã¡rea da residÃªncia, aparelhos principais e sistemas de climatizaÃ§Ã£o conforme a norma NEC 220.82.',
    },
    it: {
      name: 'Calcolatore di Carico Elettrico',
      shortDescription: 'Calcola il carico di servizio residenziale, l\'amperaggio dell\'interruttore principale e le dimensioni dei cavi secondo NEC Articolo 220.',
      helpTexts: { squareFootage: 'Superficie abitabile finita in piedi quadrati.' },
      article: '## Come calcolare il carico elettrico residenziale\n\nInserisci la superficie della casa, i grandi elettrodomestici e i sistemi HVAC per dimensionare il quadro elettrico secondo NEC 220.82.',
    },
    nl: {
      name: 'Elektrische Belasting Calculator',
      shortDescription: 'Bereken de residentiÃ«le elektrische aansluitwaarde, hoofdzekering stroomsterkte en kabeldiameters volgens NEC Artikel 220.',
      helpTexts: { squareFootage: 'Totale woonoppervlakte in vierkante voet.' },
      article: '## Hoe elektrische belasting te berekenen\n\nVoer het woonoppervlak, grote apparaten en HVAC-systemen in volgens NEC 220.82.',
    },
    pl: {
      name: 'Kalkulator ObciÄ…Å¼enia Elektrycznego',
      shortDescription: 'Oblicz zapotrzebowanie na moc przyÅ‚Ä…czeniowÄ…, prÄ…d wyÅ‚Ä…cznika gÅ‚Ã³wnego i przekrÃ³j przewodÃ³w wg NEC ArtykuÅ‚ 220.',
      helpTexts: { squareFootage: 'Powierzchnia mieszkalna w stopach kwadratowych.' },
      article: '## Jak obliczyÄ‡ obciÄ…Å¼enie elektryczne domu\n\nWprowadÅº powierzchniÄ™ mieszkalnÄ…, gÅ‚Ã³wne odbiorniki i systemy grzewczo-klimatyzacyjne wg normy NEC 220.82.',
    },
    ru: {
      name: 'ÐšÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€ Ð­Ð»ÐµÐºÑ‚Ñ€Ð¸Ñ‡ÐµÑÐºÐ¾Ð¹ ÐÐ°Ð³Ñ€ÑƒÐ·ÐºÐ¸',
      shortDescription: 'Ð Ð°ÑÑÑ‡Ð¸Ñ‚Ð°Ð¹Ñ‚Ðµ ÑÐ»ÐµÐºÑ‚Ñ€Ð¸Ñ‡ÐµÑÐºÑƒÑŽ Ð½Ð°Ð³Ñ€ÑƒÐ·ÐºÑƒ Ð´Ð¾Ð¼Ð°, Ð½Ð¾Ð¼Ð¸Ð½Ð°Ð» Ð²Ð²Ð¾Ð´Ð½Ð¾Ð³Ð¾ Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð° Ð¸ ÑÐµÑ‡ÐµÐ½Ð¸Ðµ ÐºÐ°Ð±ÐµÐ»Ñ Ð¿Ð¾ ÑÑ‚Ð°Ð½Ð´Ð°Ñ€Ñ‚Ñƒ NEC Ð¡Ñ‚Ð°Ñ‚ÑŒÑ 220.',
      helpTexts: { squareFootage: 'Ð–Ð¸Ð»Ð°Ñ Ð¿Ð»Ð¾Ñ‰Ð°Ð´ÑŒ Ð² ÐºÐ²Ð°Ð´Ñ€Ð°Ñ‚Ð½Ñ‹Ñ… Ñ„ÑƒÑ‚Ð°Ñ….' },
      article: '## ÐšÐ°Ðº Ñ€Ð°ÑÑÑ‡Ð¸Ñ‚Ð°Ñ‚ÑŒ ÑÐ»ÐµÐºÑ‚Ñ€Ð¸Ñ‡ÐµÑÐºÑƒÑŽ Ð½Ð°Ð³Ñ€ÑƒÐ·ÐºÑƒ Ð¶Ð¸Ð»Ð¾Ð³Ð¾ Ð´Ð¾Ð¼Ð°\n\nÐ’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð¶Ð¸Ð»ÑƒÑŽ Ð¿Ð»Ð¾Ñ‰Ð°Ð´ÑŒ, Ð±Ñ‹Ñ‚Ð¾Ð²Ñ‹Ðµ Ð¿Ñ€Ð¸Ð±Ð¾Ñ€Ñ‹ Ð¸ ÐºÐ»Ð¸Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¸Ðµ ÑÐ¸ÑÑ‚ÐµÐ¼Ñ‹ Ð´Ð»Ñ Ñ€Ð°ÑÑ‡ÐµÑ‚Ð° Ð²Ð²Ð¾Ð´Ð½Ð¾Ð³Ð¾ Ñ‰Ð¸Ñ‚Ð° Ð¿Ð¾ ÑÑ‚Ð°Ð½Ð´Ð°Ñ€Ñ‚Ñƒ NEC 220.82.',
    },
    tr: {
      name: 'Elektrik YÃ¼kÃ¼ HesaplayÄ±cÄ±',
      shortDescription: 'NEC Madde 220 standardÄ±na gÃ¶re konut elektrik servis yÃ¼kÃ¼nÃ¼, ana ÅŸalter amperajÄ±nÄ± ve kablo kesitlerini hesaplayÄ±n.',
      helpTexts: { squareFootage: 'Kare fit cinsinden net kullanÄ±m alanÄ±.' },
      article: '## Elektrik YÃ¼kÃ¼ NasÄ±l HesaplanÄ±r\n\nKonut alanÄ±nÄ±, bÃ¼yÃ¼k ev aletlerini ve iklimlendirme sistemlerini girerek NEC 220.82 standartlarÄ±na gÃ¶re elektrik panosu boyutunu hesaplayÄ±n.',
    },
    ar: {
      name: 'Ø­Ø§Ø³Ø¨Ø© Ø§Ù„Ø­Ù…Ù„ Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠ',
      shortDescription: 'Ø§Ø­Ø³Ø¨ Ø­Ù…Ù„ Ø§Ù„Ø®Ø¯Ù…Ø© Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© Ø§Ù„Ø³ÙƒÙ†ÙŠØ© ÙˆØ³Ø¹Ø© Ø§Ù„Ù‚Ø§Ø·Ø¹ Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠ ÙˆØ­Ø¬Ù… Ø§Ù„Ø£Ø³Ù„Ø§Ùƒ ÙˆÙÙ‚ ÙƒÙˆØ¯ NEC Ø§Ù„Ù…Ø§Ø¯Ø© 220.',
      helpTexts: { squareFootage: 'Ø§Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ù…Ø¹ÙŠØ´ÙŠØ© Ø¨Ø§Ù„Ù‚Ø¯Ù… Ø§Ù„Ù…Ø±Ø¨Ø¹.' },
      article: '## ÙƒÙŠÙÙŠØ© Ø­Ø³Ø§Ø¨ Ø§Ù„Ø­Ù…Ù„ Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠ Ø§Ù„Ù…Ù†Ø²Ù„ÙŠ\n\nØ£Ø¯Ø®Ù„ Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ù…Ù†Ø²Ù„ ÙˆØ§Ù„Ø£Ø¬Ù‡Ø²Ø© Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ© ÙˆØ£Ù†Ø¸Ù…Ø© Ø§Ù„ØªÙƒÙŠÙŠÙ Ù„Ø­Ø³Ø§Ø¨ Ø­Ø¬Ù… Ù„ÙˆØ­Ø© Ø§Ù„ØªÙˆØ²ÙŠØ¹ Ø§Ù„ÙƒÙ‡Ø±Ø¨Ø§Ø¦ÙŠØ© ÙˆÙÙ‚ NEC 220.82.',
    },
    hi: {
      name: 'à¤‡à¤²à¥‡à¤•à¥à¤Ÿà¥à¤°à¤¿à¤•à¤² à¤²à¥‹à¤¡ à¤•à¥ˆà¤²à¤•à¥à¤²à¥‡à¤Ÿà¤°',
      shortDescription: 'NEC à¤†à¤°à¥à¤Ÿà¤¿à¤•à¤² 220 à¤•à¥‡ à¤…à¤¨à¥à¤¸à¤¾à¤° à¤†à¤µà¤¾à¤¸à¥€à¤¯ à¤¸à¤°à¥à¤µà¤¿à¤¸ à¤²à¥‹à¤¡, à¤®à¥à¤–à¥à¤¯ à¤¬à¥à¤°à¥‡à¤•à¤° à¤à¤®à¥à¤ªà¥€à¤¯à¤° à¤”à¤° à¤µà¤¾à¤¯à¤° à¤—à¥‡à¤œ à¤•à¤¾ à¤†à¤•à¤¾à¤° à¤¨à¤¿à¤°à¥à¤§à¤¾à¤°à¤¿à¤¤ à¤•à¤°à¥‡à¤‚à¥¤',
      helpTexts: { squareFootage: 'à¤µà¤°à¥à¤— à¤«à¥à¤Ÿ à¤®à¥‡à¤‚ à¤°à¤¹à¤¨à¥‡ à¤•à¤¾ à¤•à¥à¤² à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¤«à¤²à¥¤' },
      article: '## à¤†à¤µà¤¾à¤¸à¥€à¤¯ à¤µà¤¿à¤¦à¥à¤¯à¥à¤¤ à¤­à¤¾à¤° à¤•à¥€ à¤—à¤£à¤¨à¤¾ à¤•à¥ˆà¤¸à¥‡ à¤•à¤°à¥‡à¤‚\n\nà¤˜à¤° à¤•à¤¾ à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¤«à¤², à¤®à¥à¤–à¥à¤¯ à¤‰à¤ªà¤•à¤°à¤£ à¤”à¤° à¤¹à¥€à¤Ÿà¤¿à¤‚à¤—/à¤•à¥‚à¤²à¤¿à¤‚à¤— à¤¸à¤¿à¤¸à¥à¤Ÿà¤® à¤¦à¤°à¥à¤œ à¤•à¤°à¤•à¥‡ NEC 220.82 à¤•à¥‡ à¤…à¤¨à¥à¤¸à¤¾à¤° à¤¸à¤°à¥à¤µà¤¿à¤¸ à¤ªà¥ˆà¤¨à¤² à¤•à¤¾ à¤†à¤•à¤¾à¤° à¤¨à¤¿à¤•à¤¾à¤²à¥‡à¤‚à¥¤',
    },
    zh: {
      name: 'ç”¨ç”µè´Ÿè·è®¡ç®—å™¨',
      shortDescription: 'æ ¹æ®NECç¬¬220æ¡è®¡ç®—ä½å®…ç”¨ç”µè´Ÿè·ã€æ€»æ–­è·¯å™¨ç”µæµåŠç”µçº¿ç”µç¼†çº¿å¾„è§„æ ¼ã€‚',
      helpTexts: { squareFootage: 'æˆ¿å±‹å±…ä½å»ºç­‘é¢ç§¯ï¼ˆå¹³æ–¹è‹±å°ºï¼‰ã€‚' },
      article: '## å¦‚ä½•è®¡ç®—ä½å®…ç”¨ç”µè´Ÿè·\n\nè¾“å…¥æˆ¿å±‹é¢ç§¯ã€ä¸»è¦ç”¨ç”µè®¾å¤‡åŠç©ºè°ƒæš–é€šç³»ç»Ÿï¼Œä¾æ®NEC 220.82æ ‡å‡†è®¡ç®—ä¸»é…ç”µç®±å®¹é‡åŠè¿›æˆ·å¯¼çº¿è§„æ ¼ã€‚',
    },
    ja: {
      name: 'é›»æ°—è² è·è¨ˆç®—æ©Ÿ',
      shortDescription: 'NECç¬¬220æ¡ã«æº–æ‹ ã—ã¦ä½å®…ã®é›»æ°—å®¹é‡ã€ãƒ¡ã‚¤ãƒ³ãƒ–ãƒ¬ãƒ¼ã‚«ãƒ¼ã®ã‚¢ãƒ³ãƒšã‚¢æ•°ã€é…ç·šã‚µã‚¤ã‚ºã‚’è¨ˆç®—ã—ã¾ã™ã€‚',
      helpTexts: { squareFootage: 'å±…ä½é¢ç©ï¼ˆå¹³æ–¹ãƒ•ã‚£ãƒ¼ãƒˆï¼‰ã€‚' },
      article: '## ä½å®…ã®é›»æ°—è² è·ã®è¨ˆç®—æ–¹æ³•\n\nå»¶åºŠé¢ç©ã€ä¸»è¦å®¶é›»è£½å“ã€ç©ºèª¿ã‚·ã‚¹ãƒ†ãƒ ã‚’å…¥åŠ›ã—ã¦ã€NEC 220.82è¦æ ¼ã«åŸºã¥ãåˆ†é›»ç›¤ã®å®¹é‡ã‚’ç®—å‡ºã—ã¾ã™ã€‚',
    },
    ko: {
      name: 'ì „ê¸° ë¶€í•˜ ê³„ì‚°ê¸°',
      shortDescription: 'NEC 220ì¡° ê¸°ì¤€ì— ë”°ë¼ ì£¼íƒ ì „ê¸° ì¸ìž… ìš©ëŸ‰, ë©”ì¸ ì°¨ë‹¨ê¸° ì•”íŽ˜ì–´ ë° ì „ì„  êµµê¸°ë¥¼ ê³„ì‚°í•˜ì„¸ìš”.',
      helpTexts: { squareFootage: 'ì£¼ê±° ë©´ì  (ìŠ¤í€˜ì–´í”¼íŠ¸).' },
      article: '## ì£¼íƒ ì „ê¸° ë¶€í•˜ ê³„ì‚° ë°©ë²•\n\nì£¼ê±° ë©´ì , ì£¼ìš” ê°€ì „ì œí’ˆ ë° ëƒ‰ë‚œë°© ì‹œìŠ¤í…œì„ ìž…ë ¥í•˜ì—¬ NEC 220.82 ê¸°ì¤€ì— ë§žëŠ” ë©”ì¸ ë¶„ì „ë°˜ ìš©ëŸ‰ì„ ì‚°ì¶œí•©ë‹ˆë‹¤.',
    },
  },

  'deck-footing-calculator': {
    en: {
      name: 'Deck Footing Calculator',
      shortDescription: 'Size concrete footings, count posts, and estimate concrete yards for your deck per IRC R507 based on tributary load and soil bearing capacity.',
      helpTexts: {
        deckLength: 'Distance from the ledger board on the house to the far beam or outer posts.',
        deckWidth: 'Total span of the deck along the wall of the house.',
        deckShape: 'Shape affects total area; complex shapes are approximated by the entered length x width.',
        liveLoad: 'Residential decks require 40 psf live load per IRC Table R301.5. Use 60+ psf for hot tubs or crowds.',
        deadLoad: 'Weight of the deck structure itself (decking, joists, railings) - typically 10 psf.',
        snowLoad: 'Add your local ground snow load if the deck must support snow accumulation (per local amendment).',
        soilBearing: 'Allowable soil bearing pressure from a geotechnical report or local table. Lower = bigger footings.',
        postRows: 'Number of rows of support posts (including the house-side beam if applicable).',
        postsPerRow: 'Posts spaced along each row. Total posts = rows x posts per row.',
        footingShape: 'Round footings use standard sonotube diameters; square footings are formed pads.',
        footingDepth: 'Concrete thickness of each footing. Separate from frost-depth excavation (typically 30-48 in).',
        includeBeam: 'Includes a beam span in the structural summary (affects post count assumptions).',
      },
      options: {
        deckShape: {
          rectangle: 'Rectangle',
          square: 'Square',
          'l-shape': 'L-Shape',
          freeform: 'Freeform / Custom',
        },
        soilBearing: {
          'clay-1500': 'Soft Clay (1,500 psf)',
          'silt-2000': 'Silt / Loam (2,000 psf)',
          'sandy-loam-2500': 'Sandy Loam (2,500 psf)',
          'gravel-3000': 'Gravel / Sandy (3,000 psf)',
          'compacted-4000': 'Compacted / Fill (4,000 psf)',
        },
        footingShape: {
          round: 'Round (Sonotube / Round Form)',
          square: 'Square (Formed Pad)',
        },
      },
      article: '## How to Calculate Deck Footing Size\n\nEnter your deck dimensions, live/dead load, ground snow load (if any), soil type, post layout, and footing shape. The calculator applies IRC R507 tributary area methods to determine the minimum footing diameter or side length per post, total concrete volume in cubic yards, and recommended sonotube sizes.',
    },
    es: {
      name: 'Calculadora de Pilotes para Terraza',
      shortDescription: 'Dimensione los cimientos de concreto, cuente los postes y estime el volumen de concreto para su terraza segun IRC R507.',
      helpTexts: {
        deckLength: 'Distancia desde la viga de apoyo en la casa hasta la viga exterior.',
        deckWidth: 'Extension total de la terraza a lo largo de la pared de la casa.',
        liveLoad: 'Las terrazas residenciales requieren 40 psf de carga viva segun IRC Tabla R301.5.',
        soilBearing: 'Presion admisible del suelo segun informe geotecnico o tabla local. Menor = pilotes mas grandes.',
        footingDepth: 'Grosor del concreto de cada pilote. Separado de la excavacion hasta la profundidad de helada.',
      },
      options: {
        deckShape: { rectangle: 'Rectangulo', square: 'Cuadrado', 'l-shape': 'Forma de L', freeform: 'Forma libre / Personalizada' },
        soilBearing: {
          'clay-1500': 'Arcilla blanda (1,500 psf)',
          'silt-2000': 'Limo / Marga (2,000 psf)',
          'sandy-loam-2500': 'Marga arenosa (2,500 psf)',
          'gravel-3000': 'Grava / Arena (3,000 psf)',
          'compacted-4000': 'Compactado / Relleno (4,000 psf)',
        },
        footingShape: { round: 'Redondo (Sonotube)', square: 'Cuadrado (Placa formada)' },
      },
      article: '## Como calcular el tamano de los pilotes de terraza\n\nIngrese las dimensiones de su terraza, cargas, tipo de suelo y disposicion de postes. La calculadora aplica el metodo de area tributaria IRC R507.',
    },
    fr: {
      name: 'Calculateur de Semelles de Terrasse',
      shortDescription: 'Dimensionnez les semelles en beton, comptez les poteaux et estimez le volume de beton pour votre terrasse selon IRC R507.',
      helpTexts: {
        deckLength: 'Distance entre la poutre ledger et la poutre exterieure.',
        deckWidth: 'Portee totale de la terrasse le long du mur de la maison.',
        liveLoad: 'Les terrasses residentielles necessitent 40 psf de charge vive selon IRC Tableau R301.5.',
        soilBearing: 'Pression admissible du sol selon un rapport geotechnique ou une table locale.',
        footingDepth: 'Epaisseur de beton de chaque semelle. Independante de la profondeur de gel.',
      },
      options: {
        deckShape: { rectangle: 'Rectangle', square: 'Carre', 'l-shape': 'Forme en L', freeform: 'Forme libre / Personnalisee' },
        soilBearing: {
          'clay-1500': 'Argile molle (1 500 psf)',
          'silt-2000': 'Limon / Loam (2 000 psf)',
          'sandy-loam-2500': 'Limon sableux (2 500 psf)',
          'gravel-3000': 'Gravier / Sableux (3 000 psf)',
          'compacted-4000': 'Compacte / Remblai (4 000 psf)',
        },
        footingShape: { round: 'Rond (Sonotube / Forme ronde)', square: 'Carre (Dalle coffree)' },
      },
      article: '## Comment calculer la taille des semelles de terrasse\n\nSaisissez les dimensions de la terrasse, les charges, le type de sol et la disposition des poteaux. Le calculateur applique la methode de surface tributaire IRC R507.',
    },
    de: {
      name: 'Terrassenfundament-Rechner',
      shortDescription: 'Berechnen Sie Betonfundamente, Pfostenanzahl und Betonvolumen fur Ihre Terrasse nach IRC R507.',
      helpTexts: {
        deckLength: 'Abstand vom Auflagebrett am Haus bis zum ausseren Trager.',
        deckWidth: 'Gesamtspanne der Terrasse entlang der Hauswand.',
        liveLoad: 'Wohnterrassen erfordern 40 psf Nutzlast laut IRC Tabelle R301.5.',
        soilBearing: 'Zulassiger Bodendruck aus geotechnischem Gutachten oder lokaler Tabelle.',
        footingDepth: 'Betondicke jedes Fundaments. Getrennt von der Frosttiefenbohrung.',
      },
      options: {
        deckShape: { rectangle: 'Rechteck', square: 'Quadrat', 'l-shape': 'L-Form', freeform: 'Freiform / Benutzerdefiniert' },
        soilBearing: {
          'clay-1500': 'Weicher Ton (1.500 psf)',
          'silt-2000': 'Schluff / Lehm (2.000 psf)',
          'sandy-loam-2500': 'Sandiger Lehm (2.500 psf)',
          'gravel-3000': 'Kies / Sand (3.000 psf)',
          'compacted-4000': 'Verdichtet / Aufschuttung (4.000 psf)',
        },
        footingShape: { round: 'Rund (Sonotube / Rundschalung)', square: 'Quadratisch (Schalungsplatte)' },
      },
      article: '## So berechnen Sie Terrassenfundamente\n\nGeben Sie Terrassenmasse, Lasten, Bodenart und Pfostenlayout ein. Der Rechner wendet die IRC R507 Tributarflachenmethode an.',
    },
    pt: {
      name: 'Calculadora de Fundacoes de Deck',
      shortDescription: 'Dimensione fundacoes de concreto, conte os pilares e estime o volume de concreto para seu deck conforme IRC R507.',
      helpTexts: {
        deckLength: 'Distancia entre a viga de apoio na casa e a viga exterior.',
        deckWidth: 'Extensao total do deck ao longo da parede da casa.',
        liveLoad: 'Decks residenciais requerem 40 psf de carga viva conforme IRC Tabela R301.5.',
        soilBearing: 'Pressao admissivel do solo de relatorio geotecnico ou tabela local.',
        footingDepth: 'Espessura de concreto de cada fundacao. Separada da escavacao de profundidade de geada.',
      },
      options: {
        deckShape: { rectangle: 'Retangulo', square: 'Quadrado', 'l-shape': 'Forma em L', freeform: 'Forma livre / Personalizada' },
        soilBearing: {
          'clay-1500': 'Argila mole (1.500 psf)',
          'silt-2000': 'Silte / Franca (2.000 psf)',
          'sandy-loam-2500': 'Franco-arenoso (2.500 psf)',
          'gravel-3000': 'Cascalho / Arenoso (3.000 psf)',
          'compacted-4000': 'Compactado / Aterro (4.000 psf)',
        },
        footingShape: { round: 'Redondo (Sonotube / Forma redonda)', square: 'Quadrado (Placa formada)' },
      },
      article: '## Como calcular o tamanho das fundacoes do deck\n\nInsira as dimensoes do deck, cargas, tipo de solo e arranjo dos pilares. A calculadora aplica o metodo de area tributaria IRC R507.',
    },
    it: {
      name: 'Calcolatore Fondamenta Deck',
      shortDescription: 'Dimensiona le fondamenta in calcestruzzo, conta i pali e stima il volume di calcestruzzo per il tuo deck secondo IRC R507.',
      helpTexts: {
        deckLength: 'Distanza dalla trave di appoggio alla casa fino alla trave esterna.',
        deckWidth: 'Estensione totale del deck lungo il muro della casa.',
        liveLoad: 'I deck residenziali richiedono 40 psf di carico variabile per IRC Tabella R301.5.',
        soilBearing: 'Pressione ammissibile del suolo da relazione geotecnica o tabella locale.',
        footingDepth: 'Spessore del calcestruzzo di ogni fondazione. Separato dallo scavo alla profondita di gelo.',
      },
      options: {
        deckShape: { rectangle: 'Rettangolo', square: 'Quadrato', 'l-shape': 'Forma a L', freeform: 'Forma libera / Personalizzata' },
        soilBearing: {
          'clay-1500': 'Argilla soffice (1.500 psf)',
          'silt-2000': 'Limo / Loam (2.000 psf)',
          'sandy-loam-2500': 'Loam sabbioso (2.500 psf)',
          'gravel-3000': 'Ghiaia / Sabbioso (3.000 psf)',
          'compacted-4000': 'Compattato / Riporto (4.000 psf)',
        },
        footingShape: { round: 'Tondo (Sonotube / Forma rotonda)', square: 'Quadrato (Piastra formata)' },
      },
      article: '## Come calcolare le fondamenta del deck\n\nInserisci le dimensioni del deck, carichi, tipo di suolo e layout dei pali. Il calcolatore applica il metodo IRC R507.',
    },
    nl: {
      name: 'Funderingscalculator voor Terras',
      shortDescription: 'Bereken betonfunderingen, tel palen en schat betonvolume voor uw terras volgens IRC R507.',
      helpTexts: {
        deckLength: 'Afstand van de muurplaat aan het huis tot de buitenste balk.',
        deckWidth: 'Totale overspanning van het terras langs de muur van het huis.',
        liveLoad: 'Residentiële terrassen vereisen 40 psf gebruiksbelasting per IRC Tabel R301.5.',
        soilBearing: 'Toelaatbare grondspanning uit geotechnisch rapport of lokale tabel.',
        footingDepth: 'Betondikte van elke fundering. Los van de vorstvrije diepte-uitgraving.',
      },
      options: {
        deckShape: { rectangle: 'Rechthoek', square: 'Vierkant', 'l-shape': 'L-vorm', freeform: 'Vrije vorm / Aangepast' },
        soilBearing: {
          'clay-1500': 'Zachte klei (1.500 psf)',
          'silt-2000': 'Silt / Leem (2.000 psf)',
          'sandy-loam-2500': 'Zandige leem (2.500 psf)',
          'gravel-3000': 'Grind / Zanderig (3.000 psf)',
          'compacted-4000': 'Verdicht / Ophoogmateriaal (4.000 psf)',
        },
        footingShape: { round: 'Rond (Sonotube / Ronde mal)', square: 'Vierkant (Gevormd pad)' },
      },
      article: '## Hoe terrassfunderingen te berekenen\n\nVoer de afmetingen, belastingen, grondtype en paallayout in. De calculator past de IRC R507 methode toe.',
    },
    pl: {
      name: 'Kalkulator Fundamentow Tarasu',
      shortDescription: 'Oblicz fundamenty betonowe, liczbe slupow i objetosc betonu dla tarasu wg IRC R507.',
      helpTexts: {
        deckLength: 'Odleglosc od deski podwalinowej przy domu do zewnetrznej belki.',
        deckWidth: 'Calkowita rozpietos tarasu wzdluz sciany domu.',
        liveLoad: 'Tarasy mieszkalne wymagaja 40 psf obciazenia uzytkowego wg IRC Tabela R301.5.',
        soilBearing: 'Dopuszczalne cisnienie gruntu z raportu geotechnicznego lub tabeli lokalnej.',
        footingDepth: 'Grubosc betonu kazdego fundamentu. Oddzielnie od wykopu na glebokosc przemarzania.',
      },
      options: {
        deckShape: { rectangle: 'Prostokat', square: 'Kwadrat', 'l-shape': 'Ksztalt L', freeform: 'Dowolny ksztalt / Niestandardowy' },
        soilBearing: {
          'clay-1500': 'Miekka glina (1 500 psf)',
          'silt-2000': 'Mul / Gleba gliniasta (2 000 psf)',
          'sandy-loam-2500': 'Glina piaszczysta (2 500 psf)',
          'gravel-3000': 'Zwir / Piasek (3 000 psf)',
          'compacted-4000': 'Zageszczone / Nasyp (4 000 psf)',
        },
        footingShape: { round: 'Okragly (Sonotube)', square: 'Kwadratowy (Lawa)' },
      },
      article: '## Jak obliczyc fundamenty tarasu\n\nWprowadz wymiary tarasu, obciazenia, rodzaj gruntu i uklad slupow. Kalkulator stosuje metode obszaru trybuta IRC R507.',
    },
    ru: {
      name: 'Kalkulyator Fundamentov dlya Terrasy',
      shortDescription: 'Rasschitayte betonnye fundamenty, kolichestvo stoek i obyom betona dlya terrasy po metodike IRC R507.',
      helpTexts: {
        deckLength: 'Rasstoyaniye ot opornoy doski u doma do vneshney balki.',
        deckWidth: 'Obshchaya shirina terrasy vdol steny doma.',
        liveLoad: 'Zhilyye terrasy trebuyut 40 psf vremennoy nagruzki po IRC Tablitsa R301.5.',
        soilBearing: 'Dopustimoe davleniye grunta iz geotekhnicheskogo otchyota ili mestnoy tablitsy.',
        footingDepth: 'Tolshchina betona kazhdogo fundamenta. Otdelno ot glubiny promerzaniya.',
      },
      options: {
        deckShape: { rectangle: 'Pryamougolnik', square: 'Kvadrat', 'l-shape': 'G-obraznaya', freeform: 'Proizvolnaya / Nestandartnaya' },
        soilBearing: {
          'clay-1500': 'Myagkaya glina (1 500 psf)',
          'silt-2000': 'Suglinok / Supesok (2 000 psf)',
          'sandy-loam-2500': 'Supeschanyy grunt (2 500 psf)',
          'gravel-3000': 'Graviy / Pesok (3 000 psf)',
          'compacted-4000': 'Uplotnyonnyy / Nasypnoy (4 000 psf)',
        },
        footingShape: { round: 'Kruglyy (Sonotyub)', square: 'Kvadratnyy (Plitnyy)' },
      },
      article: '## Kak rasschitat fundamenty dlya terrasy\n\nVvedite razmery terrasy, nagruzki, tip grunta i raspolozheniye stoek. Kalkulyator primenyayet metod tributarnoy ploshchadi IRC R507.',
    },
    tr: {
      name: 'Deck Temel Hesaplayici',
      shortDescription: 'IRC R507 standardina gore beton temelleri boyutlandirin, direk sayisini hesaplayin ve beton hacmini tahmin edin.',
      helpTexts: {
        deckLength: 'Evdeki destek kirisinden dis kirise kadar olan mesafe.',
        deckWidth: 'Evin duvari boyunca toplam deck genisligi.',
        liveLoad: 'IRC Tablo R301.5 uyarinca konut deckleri icin 40 psf hareketli yuk gereklidir.',
        soilBearing: 'Geoteknik rapordan veya yerel tablodan izin verilen zemin tasima kapasitesi.',
        footingDepth: 'Her temelin beton kalinligi. Don derinligi kazisinden ayridir.',
      },
      options: {
        deckShape: { rectangle: 'Dikdortgen', square: 'Kare', 'l-shape': 'L-Sekli', freeform: 'Serbest Form / Ozel' },
        soilBearing: {
          'clay-1500': 'Yumusak Kil (1.500 psf)',
          'silt-2000': 'Silt / Balcik (2.000 psf)',
          'sandy-loam-2500': 'Kumlu Balcik (2.500 psf)',
          'gravel-3000': 'Cakil / Kumlu (3.000 psf)',
          'compacted-4000': 'Sikistirilmis / Dolgu (4.000 psf)',
        },
        footingShape: { round: 'Yuvarlak (Sonotube / Yuvarlak Kalip)', square: 'Kare (Kalipli Plak)' },
      },
      article: '## Deck Temelleri Nasil Hesaplanir\n\nDeck boyutlarini, yukleri, zemin turunu ve direk duzenini girin. Hesaplayici IRC R507 tributar alan yontemini uygular.',
    },
    ar: {
      name: 'Hasibat Asasat as-Sath al-Khashabi',
      shortDescription: 'Ihsab abead asasat al-khirasana wa adad al-aamida wa hajm al-khirasana lil-sath al-khashabi wifq IRC R507.',
      helpTexts: {
        deckLength: 'Al-masafa min lawh ad-daama ala al-manzil ila al-jasira al-khaarija.',
        liveLoad: 'Tatatallab al-astiha as-sakaniyya himla hayya 40 psf wifq IRC jadwal R301.5.',
        soilBearing: 'Daghat at-turba al-masmuh bihi min taqrir jiyo-tiqni aw jadwal mahalli.',
      },
      options: {
        deckShape: { rectangle: 'Mustatil', square: 'Murabba', 'l-shape': 'Shakl L', freeform: 'Shakl hurr / Mukhassis' },
        soilBearing: {
          'clay-1500': 'Tin naim (1,500 psf)',
          'silt-2000': 'Tamyi / Lom (2,000 psf)',
          'sandy-loam-2500': 'Lom ramli (2,500 psf)',
          'gravel-3000': 'Haswa / Ramli (3,000 psf)',
          'compacted-4000': 'Mudmaj / Radm (4,000 psf)',
        },
        footingShape: { round: 'Dairi (Sonotube)', square: 'Murabba (Lawh mushakkil)' },
      },
      article: '## Kayf tahsub asasat as-sath al-khashabi\n\nAdkhil abead as-sath wal-ahmal wa naw at-turba wa tawzee al-aamida. Tutabbiq al-hasiba tariqat al-masaha at-tabaiyya IRC R507.',
    },
    hi: {
      name: 'Dek Phuting Kailkuletar',
      shortDescription: 'IRC R507 ke anusar konkrit phutiing ka aakaar nirdharit karen, post ginen aur dek ke liye konkrit ki matra ka anuman lagaen.',
      helpTexts: {
        deckLength: 'Ghar ke lejar bord se bahari biim ya post tak ki doori.',
        deckWidth: 'Ghar ki deewar ke saath dek ki kul lambaaee.',
        liveLoad: 'IRC talika R301.5 ke anusar avaasiy dek ke liye 40 psf live load aavashyak hai.',
        soilBearing: 'Bhu-takniki riport ya sthaniy talika se anumit mitti ka dabaav.',
        footingDepth: 'Pratyek phutiing ki konkrit motaaee. Frost-depth khudaee se alag.',
      },
      options: {
        deckShape: { rectangle: 'Aayt', square: 'Varg', 'l-shape': 'L-aakar', freeform: 'Mukt aakar / Kastem' },
        soilBearing: {
          'clay-1500': 'Mulaayam mittee (1,500 psf)',
          'silt-2000': 'Gaad / Domat (2,000 psf)',
          'sandy-loam-2500': 'Baluee domat (2,500 psf)',
          'gravel-3000': 'Bajri / Reetili (3,000 psf)',
          'compacted-4000': 'Dabaa hua / Bharaa hua (4,000 psf)',
        },
        footingShape: { round: 'Gol (Sonotube)', square: 'Vargaakar (Formd Paid)' },
      },
      article: '## Dek phutiing ka aakaar kaise nirdhaarit karen\n\nDek ke aayaam, lod, mitti ka prakar aur post leaaut darj karen. Kailkuletar IRC R507 ki tributary area vidhi laagoo karta hai.',
    },
    zh: {
      name: 'Jiaban Jichu Jisuan Qi',
      shortDescription: 'Gen ju IRC R507 biaozhun jisuan hunningtu jichu chicun, zhizhu shu liang ji jiaban suoxu hunningtu fangliang.',
      helpTexts: {
        deckLength: 'Cong fangwu qiang ban dao zui wai ce heng liang huo lizhu de juli.',
        deckWidth: 'Jiaban yan fangwu qiang ti fangxiang de zong kuadu.',
        liveLoad: 'Yi ju IRC biao R301.5, zhuzhai jiaban huo zai xu da dao 40 psf.',
        soilBearing: 'Lai zi yan tu gong cheng baogao huo difang guifan de dixia chengshou li xuke zhi.',
        footingDepth: 'Mei ge jichu de hunningtu houdu, yu dong shen kaijue wuguan.',
      },
      options: {
        deckShape: { rectangle: 'Ju xing', square: 'Zheng fang xing', 'l-shape': 'L xing', freeform: 'Zi you xing zhuang / Zi ding yi' },
        soilBearing: {
          'clay-1500': 'Ruan nian tu (1,500 psf)',
          'silt-2000': 'Fen tu / rang tu (2,000 psf)',
          'sandy-loam-2500': 'Sha zhi rang tu (2,500 psf)',
          'gravel-3000': 'Li shi / sha tu (3,000 psf)',
          'compacted-4000': 'Ya shi tu / tian tu (4,000 psf)',
        },
        footingShape: { round: 'Yuan xing (Sonotube / Yuan xing mo ban)', square: 'Fang xing (Cheng xing dian)' },
      },
      article: '## Ru he ji suan jiaban jichu chicun\n\nShu ru jiaban chicun, hezai, tu zhi lei xing he lizhu buju. Ji suan qi jiang yi ju IRC R507 cong shu mianji fa que ding zui xiao jichu zhi jing yu zong hunningtu yong liang.',
    },
    ja: {
      name: 'Dekki Kiso Keisanki',
      shortDescription: 'IRC R507 ni motozuki, konkurito kiso no saizu, shichuu suu, oyobi konkurito ryou wo keisan shimasu.',
      helpTexts: {
        deckLength: 'Ie no torisuke hari kara sotogawa no hari mata wa shichuu made no kyori.',
        deckWidth: 'Ie no kabe ni sotta dekki no zen supan.',
        liveLoad: 'IRC hyo R507 ni yori juutaku you dekki wa 40 psf no seki sai kaaju ga hitsuyou desu.',
        soilBearing: 'Jiban chousa houkokusho mata wa chiiki no ichiran kara no kyoyou chiji ryoku.',
        footingDepth: 'Kaku kiso no konkurito atsusa. Toketsu shindo kusaksa to wa betsu.',
      },
      options: {
        deckShape: { rectangle: 'Chokukei', square: 'Seihokei', 'l-shape': 'L ji kei', freeform: 'Jiyuu keijou / Kasutamu' },
        soilBearing: {
          'clay-1500': 'Nanjitsu nendo (1,500 psf)',
          'silt-2000': 'Shiruto / Roamu (2,000 psf)',
          'sandy-loam-2500': 'Sashitsu roamu (2,500 psf)',
          'gravel-3000': 'Jari / Suna (3,000 psf)',
          'compacted-4000': 'Shime katame / Moritsuchi (4,000 psf)',
        },
        footingShape: { round: 'Maru gata (Sonotyuubu / Maru gata wakugumi)', square: 'Kaku gata (Seikei paddo)' },
      },
      article: '## Dekki kiso no saizu keisan houhou\n\nDekki no sunpou, kaaju, jiban no shurui, shichuu haichi wo nyuuryoku shite kudasai. IRC R507 no kizoku menseki hou ni motozuki, saishou kiso chikei to sou konkurito ryou wo sanshutsushimasu.',
    },
    ko: {
      name: 'Dek Gicho Gyesan-gi',
      shortDescription: 'IRC R507 gijun-e ttara kolkeurit gicho keuki, gidung su, dek yong kolkeurit yangeul gyesan haseyo.',
      helpTexts: {
        deckLength: 'Jip-ui leojeo bodeu-eseo bak-ui bo ttoneun gidung kkaji-ui geori.',
        deckWidth: 'Jip byeok-eul ttara dek-ui jeon-che seupaen.',
        liveLoad: 'IRC pyo R301.5-e ttara jugeoyong dekeuneun 40 psf hwal haju-ga pilyohabnida.',
        soilBearing: 'Ji-ban josa bogoseo ttoneun jiyeok pyo-eseo heogyong ji-ban jijiryeok.',
        footingDepth: 'Gak gicho-ui kolkeurit dukkei. Donggyeol gip-i gulchak-gwa byeoldo.',
      },
      options: {
        deckShape: { rectangle: 'Jiksagak-hyeong', square: 'Jeong-sa-gak-hyeong', 'l-shape': 'L-ja hyeong', freeform: 'Ja-yu hyeongtae / Sareyong-ja jeong-ui' },
        soilBearing: {
          'clay-1500': 'Yeonhan jeomto (1,500 psf)',
          'silt-2000': 'Silteeu / Yangto (2,000 psf)',
          'sandy-loam-2500': 'Mohae yangto (2,500 psf)',
          'gravel-3000': 'Jajal / Morae (3,000 psf)',
          'compacted-4000': 'Daajimto / Seongsaeto (4,000 psf)',
        },
        footingShape: { round: 'Weon-hyeong (Sonotyubeu / Weon-hyeong geobip-mak)', square: 'Jeong-sa-gak-hyeong (Seongbyeong paedeu)' },
      },
      article: '## Dek gicho keuki gyesan bangbeop\n\nDek chissu, haju, toyyang yujeong, gidung baechireul iphryeok haseyo. IRC R507 yurap myeonjeok bangbeop-eul jeogyong hayo choeso gicho jigiseon-gwa chong kolkeurit yangeul sanchurhamnida.',
    },
  },  'home-inspection-cost-calculator': {
    "en": {
      "name": "Home Inspection Cost Calculator",
      "shortDescription": "Calculate realistic home inspection fees by square footage, property age, foundation type, and region with essential add-on services.",
      "helpTexts": {
        "homeArea": "Total finished living area above grade (garages and unfinished basements excluded). Most US inspections are quoted in size tiers.",
        "propertyType": "Condos and townhouses typically cost less (limited exterior); 2–4 unit properties cost substantially more due to duplicated systems.",
        "homeAge": "Homes 50+ years old carry obsolete wiring, galvanized plumbing, and aging roofs that add inspection time. New construction adds punch-list verification.",
        "foundation": "Crawlspaces and basements add sub-floor structural, moisture, and insulation evaluation time.",
        "region": "Inspection fees track local labor costs. Coastal metros (especially CA/NY) run 15–25% above the national average.",
        "includeRadon": "Continuous radon monitor placed for 48+ hours. EPA action level: 4.0 pCi/L. Typical add-on: $125–$275.",
        "includeMold": "Air and surface sampling with accredited lab analysis. Typical add-on: $250–$650 depending on sample count.",
        "includeSewerScope": "Camera inspection of the main sewer lateral from house to city tap. Strongly recommended for homes 20+ years old. Typical add-on: $125–$300.",
        "includeTermite": "Wood-destroying insect (WDO/WDI) inspection with written report, often required by VA loans. Typical add-on: $75–$150.",
        "includeWellWater": "Well flow test plus basic potability panel (bacteria, nitrates, nitrites). Typical add-on: $100–$300.",
        "rushService": "Same-day or next-day booking typically carries a 20–30% premium. Standard lead time is 2–5 business days.",
        "priceOverride": "Optional — override the estimated base fee with an actual quote from your inspector. Add-ons still apply."
      },
      "options": {
        "propertyType": {
          "single-family": "Single-Family Detached House",
          "condo-townhouse": "Condo / Townhouse",
          "multi-family": "Multi-Family (2–4 Units)",
          "manufactured": "Manufactured / Mobile Home"
        },
        "homeAge": {
          "new": "New Construction (< 1 year)",
          "age-1-10": "1–10 years",
          "age-11-25": "11–25 years",
          "age-26-50": "26–50 years",
          "age-50-plus": "50+ years"
        },
        "foundation": {
          "slab": "Slab-on-Grade",
          "crawlspace": "Crawlspace",
          "basement": "Basement",
          "walkout-basement": "Walkout / Daylight Basement"
        },
        "region": {
          "us-national": "US National Average",
          "northeast": "Northeast",
          "southeast": "Southeast",
          "midwest": "Midwest",
          "southwest": "Southwest",
          "west-coast": "West Coast"
        }
      },
      "article": "## How Home Inspection Costs Are Calculated\n\nHome inspection fees typically start with a base price for a standard single-family home (around 2,000 sq ft) and scale based on square footage, building age, foundation type, and regional labor rates. Ancillary testing such as radon monitors, sewer scopes, mold air quality assays, and termite certifications are quoted as flat add-on services."
    },
    "es": {
      "name": "Calculadora de Costos de Inspección de Vivienda",
      "shortDescription": "Calcule tarifas reales de inspección de viviendas por metros cuadrados, antigüedad, cimientos y región con pruebas adicionales.",
      "helpTexts": {
        "homeArea": "Área habitable terminada total sobre nivel de suelo (se excluyen garajes y sótanos sin terminar).",
        "propertyType": "Condominios y adosados suelen costar menos; propiedades de 2 a 4 unidades cuestan más por duplicidad de instalaciones.",
        "homeAge": "Casas de más de 50 años tienen tuberías y cableado antiguos que aumentan el tiempo de inspección.",
        "foundation": "Espacios sanitarios y sótanos requieren evaluación estructural adicional, humedad y ventilación.",
        "region": "Las tarifas reflejan costos laborales locales. Zonas metropolitanas costeras son 15-25% más costosas.",
        "includeRadon": "Monitor continuo de radón durante más de 48 horas. Nivel de acción EPA: 4,0 pCi/L.",
        "includeMold": "Toma de muestras de aire y superficies con análisis de laboratorio acreditado.",
        "includeSewerScope": "Inspección con cámara de la línea principal de alcantarillado hasta la acometida pública.",
        "includeTermite": "Inspección de insectos xilófagos (WDO/WDI) con informe certificado.",
        "includeWellWater": "Prueba de caudal de pozo y panel de potabilidad básica (bacterias, nitratos).",
        "rushService": "Citas el mismo día o al día siguiente con recargo del 20-30%.",
        "priceOverride": "Opcional: sustituya la tarifa base estimada con un presupuesto real de su inspector."
      },
      "options": {
        "propertyType": {
          "single-family": "Vivienda Unifamiliar Aislada",
          "condo-townhouse": "Condominio / Adosado",
          "multi-family": "Plurifamiliar (2–4 Unidades)",
          "manufactured": "Casa Prefabricada / Móvil"
        },
        "homeAge": {
          "new": "Obra Nueva (< 1 año)",
          "age-1-10": "1–10 años",
          "age-11-25": "11–25 años",
          "age-26-50": "26–50 años",
          "age-50-plus": "Más de 50 años"
        },
        "foundation": {
          "slab": "Solera / Losa sobre terreno",
          "crawlspace": "Cámara sanitaria (Crawlspace)",
          "basement": "Sótano enterrado",
          "walkout-basement": "Sótano semienterrado con salida"
        },
        "region": {
          "us-national": "Promedio Nacional (EE. UU.)",
          "northeast": "Noreste",
          "southeast": "Sureste",
          "midwest": "Medio Oeste",
          "southwest": "Suroeste",
          "west-coast": "Costa Oeste"
        }
      },
      "article": "## Cómo se calculan los costos de una inspección técnica\n\nLas tarifas de inspección de vivienda parten de un precio base para una vivienda estándar y se ajustan por superficie, antigüedad, tipo de cimentación y tarifas laborales de la región. Los servicios adicionales como análisis de radón, cámara de saneamiento y moho se tarifan como suplementos independientes."
    },
    "fr": {
      "name": "Calculateur de Coût d'Inspection Immobilière",
      "shortDescription": "Estimez les frais d'inspection résidentielle selon la superficie, l'âge, la fondation et les tests complémentaires.",
      "helpTexts": {
        "homeArea": "Superficie habitable finie totale hors sol (garages et sous-sols non finis exclus).",
        "propertyType": "Les copropriétés coûtent généralement moins cher ; les immeubles multi-logements coûtent plus.",
        "homeAge": "Les maisons anciennes nécessitent une vérification minutieuse de l'électricité et de la plomberie.",
        "foundation": "Les vides sanitaires et sous-sols demandent une analyse de l'humidité et de la structure.",
        "region": "Les honoraires dépendent des coûts de main-d'œuvre locaux.",
        "includeRadon": "Mesure continue du gaz radon sur plus de 48 heures.",
        "includeMold": "Prélèvements d'air et de moisissures avec analyse en laboratoire.",
        "includeSewerScope": "Inspection vidéo par caméra du raccordement d'égout principal.",
        "includeTermite": "Diagnostic insectes xylophages et termites avec rapport écrit.",
        "includeWellWater": "Test de débit du puits et potabilité bactériologique de l'eau.",
        "rushService": "Rendez-vous urgent sous 24h avec majoration de 20 à 30%.",
        "priceOverride": "Facultatif : saisissez le devis réel fourni par votre inspecteur."
      },
      "options": {
        "propertyType": {
          "single-family": "Maison Individuelle Isolée",
          "condo-townhouse": "Condo / Maison de Ville",
          "multi-family": "Multi-Résidentiel (2–4 Logements)",
          "manufactured": "Maison Préfabriquée / Mobile"
        },
        "homeAge": {
          "new": "Construction Neuve (< 1 an)",
          "age-1-10": "1–10 ans",
          "age-11-25": "11–25 ans",
          "age-26-50": "26–50 ans",
          "age-50-plus": "Plus de 50 ans"
        },
        "foundation": {
          "slab": "Dalle sur terre-plein",
          "crawlspace": "Vide sanitaire",
          "basement": "Sous-sol complet",
          "walkout-basement": "Sous-sol rez-de-jardin"
        },
        "region": {
          "us-national": "Moyenne Nationale",
          "northeast": "Nord-Est",
          "southeast": "Sud-Est",
          "midwest": "Midwest",
          "southwest": "Sud-Ouest",
          "west-coast": "Côte Ouest"
        }
      },
      "article": "## Calcul des honoraires d'inspection immobilière\n\nLe tarif se base sur la surface du logement, son année de construction et le type de fondation. Des prestations spécialisées comme le test de radon ou la caméra d'égout viennent s'ajouter en option."
    },
    "de": {
      "name": "Hausinspektions-Kostenrechner",
      "shortDescription": "Berechnen Sie realistische Inspektionskosten nach Wohnfläche, Gebäudealter, Fundamentart und Zusatzprüfungen.",
      "helpTexts": {
        "homeArea": "Gesamte beheizte Wohnfläche (ohne Garage und unausgebauten Keller).",
        "propertyType": "Eigentumswohnungen sind oft günstiger; Mehrfamilienhäuser durch parallele Haustechnik teurer.",
        "homeAge": "Ältere Gebäude über 50 Jahre erfordern eine genauere Prüfung veralteter Leitungen.",
        "foundation": "Kriechkeller und Kellerräume erfordern Prüfungen auf Feuchtigkeit und Risse.",
        "region": "Stundensätze variieren je nach Bundesland und Ballungsraum.",
        "includeRadon": "48-Stunden-Radon-Langzeitmessung.",
        "includeMold": "Schimmel- und Raumluftanalyse im akkreditierten Labor.",
        "includeSewerScope": "Kamerabefahrung des Hauptabwasserkanals.",
        "includeTermite": "Holzschädlings- und Schädlingsgutachten.",
        "includeWellWater": "Brunnenleistungstest und Trinkwasseranalyse.",
        "rushService": "Eilbuchung innerhalb von 24–48 Stunden (Aufschlag 20–30%).",
        "priceOverride": "Optional: Manuelles Angebot Ihres Gutachters eingeben."
      },
      "options": {
        "propertyType": {
          "single-family": "Einfamilienhaus",
          "condo-townhouse": "Eigentumswohnung / Reihenhaus",
          "multi-family": "Mehrfamilienhaus (2–4 Einheiten)",
          "manufactured": "Fertighaus / Modulhaus"
        },
        "homeAge": {
          "new": "Neubau (< 1 Jahr)",
          "age-1-10": "1–10 Jahre",
          "age-11-25": "11–25 Jahre",
          "age-26-50": "26–50 Jahre",
          "age-50-plus": "Über 50 Jahre"
        },
        "foundation": {
          "slab": "Bodenplatte / Fundamentplatte",
          "crawlspace": "Kriechkeller",
          "basement": "Vollunterkellerung",
          "walkout-basement": "Hanggeschoss / Wohnkeller"
        },
        "region": {
          "us-national": "Bundesdurchschnitt",
          "northeast": "Nordosten",
          "southeast": "Südosten",
          "midwest": "Mittlerer Westen",
          "southwest": "Südwesten",
          "west-coast": "Westküste"
        }
      },
      "article": "## Wie Inspektionskosten kalkuliert werden\n\nDie Kosten für einen Bausachverständigen hängen primär von der Quadratmeterzahl, dem Alter des Hauses und dem Fundament ab. Spezialuntersuchungen wie Kanal-Kamera oder Schadstoffprüfungen werden als Pauschalen hinzugerechnet."
    },
    "pt": {
      "name": "Calculadora de Custo de Vistoria de Imóvel",
      "shortDescription": "Estime os custos de vistoria técnica por área construída, idade da edificação, fundação e laudos adicionais.",
      "helpTexts": {
        "homeArea": "Área útil habitável acabada acima do solo (exclui garagens e subsolos inacabados).",
        "propertyType": "Apartamentos costumam ter custo menor; imóveis multifamiliares custam mais por repetição de redes.",
        "homeAge": "Imóveis com mais de 50 anos possuem instalações elétricas e hidráulicas que demandam mais tempo de vistoria.",
        "foundation": "Porões e lajes de fundação exigem verificação estrutural e inspeção de umidade.",
        "region": "Preços médios conforme mão de obra e localização geográfica.",
        "includeRadon": "Monitoramento contínuo de gás radônio por 48 horas.",
        "includeMold": "Análise laboratorial de mofo e qualidade do ar interno.",
        "includeSewerScope": "Inspeção por vídeo da tubulação principal de esgoto.",
        "includeTermite": "Laudo de inspeção de pragas e cupins em estruturas de madeira.",
        "includeWellWater": "Teste de vazão de poço e ensaio de potabilidade da água.",
        "rushService": "Agendamento de emergência em até 24h (acréscimo de 20–30%).",
        "priceOverride": "Opcional: insira o valor cotado diretamente com seu engenheiro vistoriador."
      },
      "options": {
        "propertyType": {
          "single-family": "Casa Unifamiliar Isolada",
          "condo-townhouse": "Apartamento / Casa Geminada",
          "multi-family": "Multifamiliar (2–4 Unidades)",
          "manufactured": "Casa Pré-fabricada / Modular"
        },
        "homeAge": {
          "new": "Construção Nova (< 1 ano)",
          "age-1-10": "1–10 anos",
          "age-11-25": "11–25 anos",
          "age-26-50": "26–50 anos",
          "age-50-plus": "Mais de 50 anos"
        },
        "foundation": {
          "slab": "Radier / Piso sobre solo",
          "crawlspace": "Espaço sanitário (Crawlspace)",
          "basement": "Subsolo / Porão habitável",
          "walkout-basement": "Subsolo com saída para jardim"
        },
        "region": {
          "us-national": "Média Nacional",
          "northeast": "Nordeste",
          "southeast": "Sudeste",
          "midwest": "Centro-Oeste",
          "southwest": "Sudoeste",
          "west-coast": "Costa Oeste"
        }
      },
      "article": "## Metodologia de Cálculo de Vistoria Predial\n\nO valor base da vistoria considera a metragem quadrada, tipologia e idade da construção. Ensaios especiais como videoscopia de esgoto e análises bacteriológicas de água são adicionados como serviços complementares."
    },
    "it": {
      "name": "Calcolatore Costo Ispezione Immobile",
      "shortDescription": "Calcola il costo della perizia immobiliare in base alla superficie, anno di costruzione, fondamenta ed esami specialistici.",
      "helpTexts": {
        "homeArea": "Superficie calpestabile interna finita (esclusi garage e cantine rustiche).",
        "propertyType": "Appartamenti in condominio costano meno; immobili plurifamiliari hanno tariffe superiori.",
        "homeAge": "Edifici storici richiedono verifiche approfondite su impianti e strutture portanti.",
        "foundation": "Vespai aerati e cantine richiedono ispezioni per risalita d'umidità.",
        "region": "I costi orari variano in base alla provincia e al mercato locale.",
        "includeRadon": "Misurazione continua del gas radon per almeno 48 ore.",
        "includeMold": "Campionamento di aria e muffe con referto di laboratorio.",
        "includeSewerScope": "Videoispezione della condotta fognaria principale con sonda.",
        "includeTermite": "Verifica presenza tarli e termiti nelle strutture lignee.",
        "includeWellWater": "Analisi chimica e microbiologica dell'acqua di pozzo.",
        "rushService": "Servizio di perizia urgente entro 24 ore.",
        "priceOverride": "Opzionale: imposta la tariffa pattuita col tuo perito di fiducia."
      },
      "options": {
        "propertyType": {
          "single-family": "Villa Unifamiliare Singola",
          "condo-townhouse": "Appartamento / Villetta a Schiera",
          "multi-family": "Piccolo Plurifamiliare (2–4 Unità)",
          "manufactured": "Casa Prefabbricata / Mobile"
        },
        "homeAge": {
          "new": "Nuova Costruzione (< 1 anno)",
          "age-1-10": "1–10 anni",
          "age-11-25": "11–25 anni",
          "age-26-50": "26–50 anni",
          "age-50-plus": "Oltre 50 anni"
        },
        "foundation": {
          "slab": "Platea su terra",
          "crawlspace": "Vespaio aerato",
          "basement": "Seminterrato completo",
          "walkout-basement": "Seminterrato con accesso diretto al giardino"
        },
        "region": {
          "us-national": "Media Nazionale",
          "northeast": "Nord-Est",
          "southeast": "Sud-Est",
          "midwest": "Centro-Nord",
          "southwest": "Sud-Ovest",
          "west-coast": "Costa Ovest"
        }
      },
      "article": "## Come si calcola la perizia immobiliare\n\nIl preventivo dipende dalla metratura, tipologia costruttiva ed epoca dell'immobile. Eventuali indagini diagnostiche strumentali vengono conteggiate a forfait."
    },
    "nl": {
      "name": "Bouwkundige Keuring Kosten Calculator",
      "shortDescription": "Bereken de kosten van een bouwtechnische keuring op basis van woonoppervlakte, bouwjaar, funderingstype en extra inspecties.",
      "helpTexts": {
        "homeArea": "Totaal gebruiksoppervlak wonen (exclusief garage en onafgewerkte zolder/kelder).",
        "propertyType": "Appartementen zijn voordeliger; meergezinswoningen kosten meer vanwege dubbele installaties.",
        "homeAge": "Huizen ouder dan 50 jaar vereisen extra controle van leidingwerk en dakconstructie.",
        "foundation": "Kruipruimtes en kelders vereisen inspectie op optrekkend vocht en ventilatie.",
        "region": "Tarieven volgen regionale loonkosten.",
        "includeRadon": "Continue radonmeting gedurende 48+ uur.",
        "includeMold": "Lucht- en schimmelbemonstering met laboratoriumanalyse.",
        "includeSewerScope": "Rioolcamera-inspectie van de hoofdriolering.",
        "includeTermite": "Houtworm- en ongediertekeuring.",
        "includeWellWater": "Bronwaterdebiet en drinkwateranalyse.",
        "rushService": "Spoedinspectie binnen 24–48 uur.",
        "priceOverride": "Optioneel: voer het vaste tarief van uw eigen keurder in."
      },
      "options": {
        "propertyType": {
          "single-family": "Vrijstaande eengezinswoning",
          "condo-townhouse": "Appartement / Rijtjeshuis",
          "multi-family": "Dubbel woonhuis (2–4 wooneenheden)",
          "manufactured": "Prefab / Mantelzorgwoning"
        },
        "homeAge": {
          "new": "Nieuwbouw (< 1 jaar)",
          "age-1-10": "1–10 jaar",
          "age-11-25": "11–25 jaar",
          "age-26-50": "26–50 jaar",
          "age-50-plus": "50+ jaar"
        },
        "foundation": {
          "slab": "Fundering op staal / Betonplaat",
          "crawlspace": "Kruipruimte",
          "basement": "Volledige kelder",
          "walkout-basement": "Souterrain met tuintoegang"
        },
        "region": {
          "us-national": "Landelijk gemiddelde",
          "northeast": "Noordoost",
          "southeast": "Zuidoost",
          "midwest": "Midden",
          "southwest": "Zuidwest",
          "west-coast": "Westkust"
        }
      },
      "article": "## Hoe bouwkundige keuringskosten worden berekend\n\nDe basiskosten worden bepaald door de omvang van de woning, het bouwjaar en het type fundering. Gespecialiseerde camera- en labonderzoeken worden als extra opties berekend."
    },
    "pl": {
      "name": "Kalkulator Kosztów Odbioru i Przeglądu Domu",
      "shortDescription": "Oblicz szacunkowy koszt technicznego przeglądu nieruchomości wg metrażu, wieku budynku, fundamentów i badań dodatkowych.",
      "helpTexts": {
        "homeArea": "Całkowita powierzchnia użytkowa mieszkalna (bez garażu i nieużytkowej piwnicy).",
        "propertyType": "Mieszkania w bloku kosztują mniej; domy wielorodzinne wymagają zbadania wielu pionów.",
        "homeAge": "Starsze budynki wymagają weryfikacji przestarzałych instalacji elektrycznych i wodnych.",
        "foundation": "Przestrzenie podpodłogowe i piwnice wymagają oceny zawilgocenia i izolacji.",
        "region": "Ceny zależą od stawek robocizny w danym regionie.",
        "includeRadon": "Ciągły pomiar radonu trwający minimum 48 godzin.",
        "includeMold": "Badanie mykologiczne i analiza zarodników pleśni w laboratorium.",
        "includeSewerScope": "Inspekcja kamerą inspekcyjną przykanalika sanitarnego.",
        "includeTermite": "Ekspertyza szkodników drewna i owadów niszczących konstrukcję.",
        "includeWellWater": "Badanie wydajności studni i fizykochemiczna zdatność wody.",
        "rushService": "Ekspresowy termin przeglądu w ciągu 24 godzin.",
        "priceOverride": "Opcjonalnie: wpisz indywidualną wycenę od swojego inspektora."
      },
      "options": {
        "propertyType": {
          "single-family": "Dom Jednorodzinny Wolnostojący",
          "condo-townhouse": "Mieszkanie / Segment szeregowy",
          "multi-family": "Budynek Wielorodzinny (2–4 Lokale)",
          "manufactured": "Dom Modułowy / Szkieletowy"
        },
        "homeAge": {
          "new": "Stan Deweloperski / Nowy (< 1 rok)",
          "age-1-10": "1–10 lat",
          "age-11-25": "11–25 lat",
          "age-26-50": "26–50 lat",
          "age-50-plus": "Ponad 50 lat"
        },
        "foundation": {
          "slab": "Płyta fundamentowa",
          "crawlspace": "Pustka podpodłogowa",
          "basement": "Podpiwniczenie pełne",
          "walkout-basement": "Przyziemie z bezpośrednim wyjściem"
        },
        "region": {
          "us-national": "Średnia Krajowa",
          "northeast": "Północny Wschód",
          "southeast": "Południowy Wschód",
          "midwest": "Centrum",
          "southwest": "Południowy Zachód",
          "west-coast": "Wybrzeże Zachodnie"
        }
      },
      "article": "## Zasady wyceny audytu technicznego domu\n\nStawka bazowa bazuje na metrażu oraz specyfice konstrukcyjnej budynku. Pomiary specjalistyczne (kamery kanalizacyjne, badania laboratoryjne wody) rozliczane są jako ryczałtowe usługi dodatkowe."
    },
    "ru": {
      "name": "Калькулятор Стоимости Технического Осмотра Дома",
      "shortDescription": "Рассчитайте стоимость обследования и экспертизы дома по площади, возрасту постройки, фундаменту и доп. услугам.",
      "helpTexts": {
        "homeArea": "Общая жилая отапливаемая площадь (без учета гаражей и сырых подвалов).",
        "propertyType": "Квартиры и таунхаусы обходятся дешевле; многоквартирные дома дороже из-за дублирующихся сетей.",
        "homeAge": "Дома старше 50 лет имеют изношенные коммуникации, требующие детальной проверки.",
        "foundation": "Подполья и подвалы требуют оценки влажности, грибка и целостности цоколя.",
        "region": "Тарифы зависят от расценок инженеров в конкретном регионе.",
        "includeRadon": "Замер концентрации радона детектором в течение 48 часов.",
        "includeMold": "Отбор проб воздуха на споры плесени с лабораторным анализом.",
        "includeSewerScope": "Телеинспекция выпуска канализации зондом с видеокамерой.",
        "includeTermite": "Обследование деревянных конструкций на наличие древоточцев.",
        "includeWellWater": "Тест дебита скважины и бактериологический анализ питьевой воды.",
        "rushService": "Срочный выезд эксперта в день обращения или на следующий день.",
        "priceOverride": "Опционально: введите фактическую цену из сметы вашего инспектора."
      },
      "options": {
        "propertyType": {
          "single-family": "Частный дом (коттедж)",
          "condo-townhouse": "Квартира / Таунхаус",
          "multi-family": "Малоквартирный дом (2–4 семьи)",
          "manufactured": "Каркасный / Модульный дом"
        },
        "homeAge": {
          "new": "Новостройка (< 1 года)",
          "age-1-10": "1–10 лет",
          "age-11-25": "11–25 лет",
          "age-26-50": "26–50 лет",
          "age-50-plus": "Более 50 лет"
        },
        "foundation": {
          "slab": "Монолитная плита",
          "crawlspace": "Техподполье / Столбчатый фундамент",
          "basement": "Полноценный цокольный этаж / Подвал",
          "walkout-basement": "Цокольный этаж с выходом в сад"
        },
        "region": {
          "us-national": "Среднее по стране",
          "northeast": "Северо-восток",
          "southeast": "Юго-восток",
          "midwest": "Центральный регион",
          "southwest": "Юго-запад",
          "west-coast": "Западное побережье"
        }
      },
      "article": "## Как рассчитывается стоимость строительной экспертизы\n\nБазовая стоимость определяется площадью дома, материалом фундамента и сроком эксплуатации. Инструментальные замеры (тепловизор, видеодиагностика труб, лабораторные пробы) рассчитываются как дополнительные опции."
    },
    "tr": {
      "name": "Bina ve Ev Ekspertiz Ücreti Hesaplayıcı",
      "shortDescription": "Metrekare, yapı yaşı, temel cinsi ve ek test seçenekleriyle konut teknik ekspertiz maliyetini hesaplayın.",
      "helpTexts": {
        "homeArea": "Toplam net kullanım alanı (garaj ve kaba bodrumlar hariç).",
        "propertyType": "Daireler daha ekonomiktir; çok birimli binalar tesisat çokluğu nedeniyle daha yüksek ücretlendirilir.",
        "homeAge": "50 yıldan eski binalarda eski boru ve kablolama daha kapsamlı inceleme gerektirir.",
        "foundation": "Temel altı boşlukları ve bodrumlar rutubet ve statik açıdan incelenir.",
        "region": "Fiyatlar bölgesel mühendislik tarifelerine göre değişiklik gösterir.",
        "includeRadon": "48 saatlik sürekli radon gazı ölçümü.",
        "includeMold": "Akredite laboratuvarda küf ve hava kalitesi analizi.",
        "includeSewerScope": "Ana atık su hattının kameralı robot ile taranması.",
        "includeTermite": "Ahşap taşıyıcı zararlı ve haşere raporu.",
        "includeWellWater": "Kuyu debisi ve içme suyu mikrobiyolojik testi.",
        "rushService": "24 saat içinde acil ekspertiz randevusu.",
        "priceOverride": "İsteğe bağlı: Uzmanınızdan aldığınız taban teklif tutarını girin."
      },
      "options": {
        "propertyType": {
          "single-family": "Müstakil Konut / Villa",
          "condo-townhouse": "Daire / Sıra Ev",
          "multi-family": "Çok Aileli (2–4 Daireli)",
          "manufactured": "Prefabrik / Modüler Ev"
        },
        "homeAge": {
          "new": "Yeni Yapı (< 1 yıl)",
          "age-1-10": "1–10 yıl",
          "age-11-25": "11–25 yıl",
          "age-26-50": "26–50 yıl",
          "age-50-plus": "50+ yıl"
        },
        "foundation": {
          "slab": "Radye Temel / Zemin Betonu",
          "crawlspace": "Havalandırmalı Temel Boşluğu",
          "basement": "Tam Bodrum Katı",
          "walkout-basement": "Bahçe Çıkışlı Bodrum"
        },
        "region": {
          "us-national": "Ülke Ortalaması",
          "northeast": "Kuzeydoğu",
          "southeast": "Güneydoğu",
          "midwest": "İç Bölge",
          "southwest": "Güneybatı",
          "west-coast": "Batı Kıyısı"
        }
      },
      "article": "## Konut ekspertiz bedeli nasıl hesaplanır?\n\nTaban ücret metrekare büyüklüğü, binanın inşa yılı ve temel tipine bağlıdır. Kamera ile boru incelemesi ve su analizleri sabit ek paketler olarak fiyata dahil edilir."
    },
    "ar": {
      "name": "حاسبة تكلفة فحص وتقييم المنازل",
      "shortDescription": "احسب رسوم الفحص الفني للمنزل بناءً على المساحة بالمتر المربع وعمر العقار ونوع الأساس والفحوصات الإضافية.",
      "helpTexts": {
        "homeArea": "إجمالي مساحة المعيشة المشطبة فوق مستوى الأرض (باستثناء المرآب والقبو غير المشطب).",
        "propertyType": "الشقق السكنية أقل تكلفة؛ بينما تتطلب العقارات متعددة الوحدات وقتاً أطول.",
        "homeAge": "المباني التي يزيد عمرها عن 50 عاماً تتطلب فحصاً مكثفاً لشبكات الكهرباء والسباكة القديمة.",
        "foundation": "الأساسات والأقبية تتطلب تقييم الرطوبة والشقوق الإنشائية.",
        "region": "تختلف الرسوم باختلاف تكاليف العمالة والمنطقة الجغرافية.",
        "includeRadon": "فحص مستمر لغاز الرادون لأكثر من 48 ساعة.",
        "includeMold": "أخذ عينات من الهواء والأسطح لتحليل العفن في مختبر معتمد.",
        "includeSewerScope": "فحص خط الصرف الصحي الرئيسي بكاميرا متخصصة.",
        "includeTermite": "فحص الحشرات آكلة الأخشاب وحشرات النمل الأبيض.",
        "includeWellWater": "اختبار تدفق البئر وصلاحية مياه الشرب مخبرياً.",
        "rushService": "حجز فحص عاجل في نفس اليوم أو اليوم التالي.",
        "priceOverride": "اختياري: أدخل عرض السعر الفعلي المقدم من الفاحص لديك."
      },
      "options": {
        "propertyType": {
          "single-family": "منزل عائلي مستقل",
          "condo-townhouse": "شقة تمليك / تاون هاوس",
          "multi-family": "مبنى متعدد العائلات (2–4 وحدات)",
          "manufactured": "منزل مسبق الصنع / متنقل"
        },
        "homeAge": {
          "new": "بناء جديد (أقل من سنة)",
          "age-1-10": "1–10 سنوات",
          "age-11-25": "11–25 سنة",
          "age-26-50": "26–50 سنة",
          "age-50-plus": "أكثر من 50 سنة"
        },
        "foundation": {
          "slab": "أساسات خرسانية سطحية",
          "crawlspace": "فراغ تهوية أسفل المبنى",
          "basement": "قبو كامل",
          "walkout-basement": "قبو بإطلالة ومخرج مباشر"
        },
        "region": {
          "us-national": "المعدل العام",
          "northeast": "الشمال الشرقي",
          "southeast": "الجنوب الشرقي",
          "midwest": "الوسط",
          "southwest": "الجنوب الغربي",
          "west-coast": "الساحل الغربي"
        }
      },
      "article": "## كيفية احتساب تكلفة الفحص الهندسي للمنزل\n\nتعتمد الرسوم الأساسية على مساحة المسكن ونوع المبنى ونوع الأساسات. تُضاف الفحوصات المتخصصة مثل كاميرا الصرف الصحي واختبارات المياه كخدمات إضافية محددة السعر."
    },
    "hi": {
      "name": "होम इंस्पेक्शन लागत कैलकुलेटर",
      "shortDescription": "मकान के क्षेत्रफल (वर्ग फुट/मीटर), उम्र, नींव और अतिरिक्त तकनीकी जांच के आधार पर सटीक इंस्पेक्शन शुल्क निकालें।",
      "helpTexts": {
        "homeArea": "कुल निर्मित रहने का क्षेत्र (गैरेज और कच्चे बेसमेंट को छोड़कर)।",
        "propertyType": "फ्लैट/अपार्टमेंट का खर्च कम होता है; बहु-पारिवारिक घरों में वायरिंग और पाइपलाइन जांच में अधिक समय लगता है।",
        "homeAge": "50 साल से पुराने घरों में पुरानी वायरिंग और पाइपों की विस्तृत जांच आवश्यक होती है।",
        "foundation": "नींव और बेसमेंट में सीलन, दरारों और संरचनात्मक मजबूती की जांच की जाती है।",
        "region": "लागत स्थानीय मजदूरी और शहर के हिसाब से तय होती है।",
        "includeRadon": "48 घंटे तक लगातार रेडॉन गैस परीक्षण।",
        "includeMold": "लैब विश्लेषण के साथ फफूंद और वायु गुणवत्ता परीक्षण।",
        "includeSewerScope": "सीवर पाइपलाइन का कैमरा निरीक्षण।",
        "includeTermite": "दीमक और लकड़ी को नुकसान पहुँचाने वाले कीटों की जांच।",
        "includeWellWater": "बोरवेल पानी की शुद्धता और प्रवाह परीक्षण।",
        "rushService": "24 घंटे के भीतर तत्काल आपातकालीन सेवा।",
        "priceOverride": "वैकल्पिक: अपने इंस्पेक्टर द्वारा दिए गए वास्तविक कोटेशन को दर्ज करें।"
      },
      "options": {
        "propertyType": {
          "single-family": "स्वतंत्र मकान / विला",
          "condo-townhouse": "फ्लैट / टाउनहाउस",
          "multi-family": "बहु-पारिवारिक भवन (2–4 इकाइयाँ)",
          "manufactured": "प्री-फैब / मॉड्यूलर मकान"
        },
        "homeAge": {
          "new": "नया निर्माण (< 1 वर्ष)",
          "age-1-10": "1–10 वर्ष",
          "age-11-25": "11–25 वर्ष",
          "age-26-50": "26–50 वर्ष",
          "age-50-plus": "50+ वर्ष"
        },
        "foundation": {
          "slab": "कंक्रीट स्लैब नींव",
          "crawlspace": "क्रॉलस्पेस (हवादार निचला भाग)",
          "basement": "पूर्ण भूमिगत बेसमेंट",
          "walkout-basement": "वॉकआउट बेसमेंट"
        },
        "region": {
          "us-national": "राष्ट्रीय औसत",
          "northeast": "उत्तर-पूर्व",
          "southeast": "दक्षिण-पूर्व",
          "midwest": "मध्य-पश्चिम",
          "southwest": "दक्षिण-पश्चिम",
          "west-coast": "पश्चिमी तट"
        }
      },
      "article": "## मकान निरीक्षण शुल्क की गणना कैसे की जाती है\n\nमूल शुल्क घर के आकार, उम्र और नींव के आधार पर निर्धारित होता है। सीवर कैमरा और पानी की शुद्धता जैसी अतिरिक्त जांचों के निश्चित शुल्क जोड़े जाते हैं।"
    },
    "zh": {
      "name": "房屋检验费用计算器 (验房计算器)",
      "shortDescription": "根据房屋面积、房龄、地基类型和选配检测项目，快速估算全套房屋检验费用。",
      "helpTexts": {
        "homeArea": "地上完工室内居住面积（不含车库和未装修地下室）。",
        "propertyType": "公寓与联排别墅外观检测较少，费用相对较低；多家庭住宅因设备管线翻倍而费用更高。",
        "homeAge": "50年以上的旧屋通常存在老化电线与水管，需要耗费更多检验时间。",
        "foundation": "爬行空间（Crawlspace）与地下室需要额外评估防潮、隔热与地基结构。",
        "region": "检验收费与所在地区的专业人工成本挂钩。",
        "includeRadon": "48小时以上连续氡气监测仪检测。",
        "includeMold": "室内空气及物体表面霉菌取样与专业实验室化验。",
        "includeSewerScope": "主排污管道高清内窥镜探头检测。",
        "includeTermite": "白蚁及木构件害虫损伤专业检测报告。",
        "includeWellWater": "水井出水量测试及生活饮用水水质安全化验。",
        "rushService": "24小时内同日或次日加急验房服务费。",
        "priceOverride": "可选：直接输入验房师给出的实际基础报价覆盖系统估算。"
      },
      "options": {
        "propertyType": {
          "single-family": "独栋别墅 (Single-Family)",
          "condo-townhouse": "公寓 / 联排别墅 (Condo / Townhouse)",
          "multi-family": "多户住宅 (2–4 Units)",
          "manufactured": "预制活动板房 (Manufactured)"
        },
        "homeAge": {
          "new": "新房建成 (< 1年)",
          "age-1-10": "1–10年",
          "age-11-25": "11–25年",
          "age-26-50": "26–50年",
          "age-50-plus": "50年以上老房"
        },
        "foundation": {
          "slab": "地面混凝土整浇板 (Slab)",
          "crawlspace": "矮爬行空间 (Crawlspace)",
          "basement": "全地下室 (Basement)",
          "walkout-basement": "花园出口地下室 (Walkout)"
        },
        "region": {
          "us-national": "全美平均水平",
          "northeast": "东北部地区",
          "southeast": "东南部地区",
          "midwest": "中西部地区",
          "southwest": "西南部地区",
          "west-coast": "西海岸地区"
        }
      },
      "article": "## 房屋检验收费标准与计算方法\n\n常规验房费用根据房屋面积梯度、房屋建造年份和地基形式综合计价。附加检测如管道内窥镜、氡气测试和霉菌检测作为选修增值服务按定额结算。"
    },
    "ja": {
      "name": "住宅診断・ホームインスペクション費用計算機",
      "shortDescription": "延床面積、築年数、基礎工法、地域および各種オプション検査からインスペクション費用を概算します。",
      "helpTexts": {
        "homeArea": "地上の仕上済み有効延床面積（ガレージや未仕上地下室は除外）。",
        "propertyType": "マンション・タウンハウスは外装点検が少なく割安；長屋・集合住宅は配管系統が多く割高になります。",
        "homeAge": "築50年以上の物件は配線・配管の劣化確認のため調査時間を要します。",
        "foundation": "床下空間（布基礎）や地下室は湿気・シロアリ・構造クラックの診断が必要です。",
        "region": "検査技術料は地域ごとの人件費相場に準拠します。",
        "includeRadon": "48時間以上の連続ラドン濃度測定。",
        "includeMold": "空気採取・カビ検査（公認ラボによる菌種同定）。",
        "includeSewerScope": "下水道引き込み本管のファイバースコープカメラ点検。",
        "includeTermite": "木造構造部のシロアリ・木材腐朽被害診断。",
        "includeWellWater": "井戸水揚水量テストおよび水質飲用適合性検査。",
        "rushService": "24時間以内の即日・翌日緊急診断割増。",
        "priceOverride": "任意：診断士からの実際の見積額を入力して固定できます。"
      },
      "options": {
        "propertyType": {
          "single-family": "一戸建て住宅",
          "condo-townhouse": "分譲マンション / 連棟住宅",
          "multi-family": "共同住宅 (2–4世帯)",
          "manufactured": "プレハブ / 工場生産住宅"
        },
        "homeAge": {
          "new": "新築引き渡し前 (< 1年)",
          "age-1-10": "築1〜10年",
          "age-11-25": "築11〜25年",
          "age-26-50": "築26〜50年",
          "age-50-plus": "築50年以上"
        },
        "foundation": {
          "slab": "ベタ基礎 (Slab)",
          "crawlspace": "布基礎・床下空間 (Crawlspace)",
          "basement": "地下室付き基礎",
          "walkout-basement": "半地下・地上開口型地下室"
        },
        "region": {
          "us-national": "全国平均",
          "northeast": "北東部",
          "southeast": "南東部",
          "midwest": "中西部",
          "southwest": "南西部",
          "west-coast": "西海岸"
        }
      },
      "article": "## ホームインスペクション費用の仕組み\n\n診断費用は住宅の延床面積、築年数、基礎の構造を基準に算出されます。下水道管カメラ診断や水質検査などの専門機器調査は定額オプションとして加算されます。"
    },
    "ko": {
      "name": "주택 점검(홈 인스펙션) 비용 계산기",
      "shortDescription": "주택 면적, 건축 연도, 기초 형태 및 주요 추가 검사 옵션에 따른 정밀 홈 인스펙션 비용을 산출합니다.",
      "helpTexts": {
        "homeArea": "지상층 실내 전용 면적 (차고 및 미마감 지하실 제외).",
        "propertyType": "콘도/타운하우스는 외관 점검이 적어 저렴하며, 다세대 주택은 중복 설비로 인해 비용이 증가합니다.",
        "homeAge": "50년 이상 노후 주택은 배관 및 전기 배선 점검에 추가 시간이 소요됩니다.",
        "foundation": "크롤스페이스나 지하실은 습기, 환기, 기초 균열 진단이 추가됩니다.",
        "region": "지역별 인건비 단가에 따라 검사 비용이 조정됩니다.",
        "includeRadon": "48시간 연속 라돈 방사능 수치 측정.",
        "includeMold": "공기 중 곰팡이 포자 및 표면 채취 공인 연구소 분석.",
        "includeSewerScope": "하수관 내부 내시경 카메라 탐상 검사.",
        "includeTermite": "목조 흰개미 및 해충 피해 진단 보고서.",
        "includeWellWater": "지하수 관정 수량 및 음용수 수질 안전성 검사.",
        "rushService": "당일 또는 익일 긴급 방문 검사 할증료.",
        "priceOverride": "선택 사항: 인스펙터에게 받은 실제 기본 견적액을 입력하여 대체합니다."
      },
      "options": {
        "propertyType": {
          "single-family": "단독주택",
          "condo-townhouse": "콘도 / 타운하우스",
          "multi-family": "다세대 주택 (2–4세대)",
          "manufactured": "조립식 / 모듈러 주택"
        },
        "homeAge": {
          "new": "신축 준공 (< 1년)",
          "age-1-10": "1–10년",
          "age-11-25": "11–25년",
          "age-26-50": "26–50년",
          "age-50-plus": "50년 이상 노후"
        },
        "foundation": {
          "slab": "슬래브 기초 (Slab-on-Grade)",
          "crawlspace": "크롤스페이스 (하부 통풍 공간)",
          "basement": "전체 지하실",
          "walkout-basement": "워크아웃 개방형 지하실"
        },
        "region": {
          "us-national": "전국 평균",
          "northeast": "북동부",
          "southeast": "남동부",
          "midwest": "중서부",
          "southwest": "남서부",
          "west-coast": "서부 해안"
        }
      },
      "article": "## 주택 인스펙션 견적 산출 방식\n\n기본 인스펙션 비용은 주택 평수(면적), 완공 연도, 기초 형식에 따라 결정됩니다. 하수도 배관 내시경 및 라돈, 수질 검사는 정액 옵션으로 추가 적용됩니다."
    }
  },

  'concrete-block-calculator': {
    "en": {
      "name": "Concrete Block Calculator",
      "shortDescription": "Calculate concrete blocks (CMU), mortar bags, grout fill, rebar, and total wall cost.",
      "article": "## Concrete block estimation\n\nCalculate CMU blocks, core-fill grout, mortar bags, and steel reinforcement for block walls."
    },
    "es": {
      "name": "Calculadora de Bloques de Concreto",
      "shortDescription": "Calcula bloques de hormigón (CMU), sacos de mortero, lechada de relleno (grout), varillas y costes.",
      "article": "## Estimación de bloques de hormigón\n\nCalcula bloques CMU, mortero, lechada y armaduras según normas ASTM C90."
    },
    "fr": {
      "name": "Calculateur de parpaings et blocs de béton",
      "shortDescription": "Calculez les blocs béton (parpaings), sacs de mortier, béton de remplissage, armatures et coûts.",
      "article": "## Estimation des blocs et parpaings\n\nCalculez la quantité de blocs, mortier et ferraillage pour murs maçonnés."
    },
    "de": {
      "name": "Schalungsstein & Betonblock Rechner",
      "shortDescription": "Berechnen Sie Betonsteine (Hohlblocksteine), Mörtelsäcke, Vergussbeton, Bewehrungsstahl und Mauerkosten.",
      "article": "## Betonstein-Bedarfsrechner\n\nErmitteln Sie Hohlblocksteine, Mörtel, Betonverfüllung und Bewehrungseisen."
    },
    "pt": {
      "name": "Calculadora de Blocos de Concreto",
      "shortDescription": "Calcule blocos de concreto (alvenaria estrutural), sacos de argamassa, graute, barras de aço e custo.",
      "article": "## Estimativa de blocos de concreto\n\nCalcule blocos estruturais, grauteamento, argamassa e ferragens."
    },
    "it": {
      "name": "Calcolatore Blocchi di Calcestruzzo (Tavelloni)",
      "shortDescription": "Calcola blocchi di cemento, sacchi di malta, boiacca di riempimento, ferri di armatura e costi.",
      "article": "## Calcolo blocchi e muratura\n\nDetermina quantitativi di blocchi in cls, malta e armature metalliche."
    },
    "nl": {
      "name": "Betonblokken Calculator",
      "shortDescription": "Bereken betonblokken, metselmortelzakken, vulgrout, wapeningsstaal en totale muurkosten.",
      "article": "## Betonblokken berekenen\n\nBereken blokken, metselspecie, betonvulling en wapeningsstaven voor wanden."
    },
    "pl": {
      "name": "Kalkulator pustaków betonowych i bloczków",
      "shortDescription": "Oblicz zapotrzebowanie na bloczki betonowe, worki zaprawy, beton wypełniający, pręty zbrojeniowe i koszt.",
      "article": "## Kalkulator ścian z bloczków\n\nOblicz liczbę bloczków, zaprawę murarską, zalewanie komór i zbrojenie."
    },
    "ru": {
      "name": "Калькулятор бетонных блоков (шлакоблоков)",
      "shortDescription": "Рассчитайте количество бетонных блоков, мешков раствора, бетона для заливки, арматуры и стоимость.",
      "article": "## Расчет бетонных блоков и шлакоблоков\n\nТочный расчет стеновых блоков, кладочной смеси, раствора и арматуры."
    },
    "tr": {
      "name": "Briket ve Beton Blok Hesaplayıcı",
      "shortDescription": "Duvar için gereken beton briket/blok sayısını, harç torbasını, dolgu betonunu ve demir miktarını hesaplayın.",
      "article": "## Beton briket hesaplama\n\nDuvar örme işlerinde blok, harç ve donatı metrajını kolayca hesaplayın."
    },
    "ar": {
      "name": "حاسبة البلوك الخرساني والطوب الإسمنتي",
      "shortDescription": "احسب عدد البلوك الخرساني، وأكياس مونة البناء، وخرسانة الملء (الجروت)، وحديد التسليح، والتكلفة الإجمالية.",
      "article": "## حساب كميات البلوك الخرساني\n\nاحسب البلوك الإسمنتي والمونة والخرسانة والحديد لجميع أنواع الجدران."
    },
    "hi": {
      "name": "कंक्रीट ब्लॉक कैलकुलेटर",
      "shortDescription": "दीवार के लिए कंक्रीट ब्लॉक, मोर्टार बैग, ग्राउट भराव, सरिया और निर्माण लागत की सटीक गणना करें।",
      "article": "## कंक्रीट ब्लॉक दीवार गणना\n\nब्लॉक की संख्या, मसाला, कंक्रीट भराव और सरिया सामग्री का अनुमान लगाएं।"
    },
    "zh": {
      "name": "混凝土砌块与空心砖计算器",
      "shortDescription": "计算砌墙所需的混凝土空心砌块数量、砂浆袋数、灌孔芯柱混凝土方量、钢筋用量及造价。",
      "article": "## 混凝土空心砌块工程量计算\n\n准确测算砌块砖数、砂浆袋数、芯柱灌浆混凝土及结构钢筋。"
    },
    "ja": {
      "name": "コンクリートブロック計算機",
      "shortDescription": "壁の施工に必要なコンクリートブロック個数、モルタル袋数、充填グラウト量、鉄筋長を自動計算します。",
      "article": "## コンクリートブロック積算ガイド\n\nブロック個数、目地モルタル、充填モルタル・鉄筋の数量を算出します。"
    },
    "ko": {
      "name": "콘크리트 블록 (CMU) 계산기",
      "shortDescription": "벽체 시공에 필요한 콘크리트 블록 수량, 모르타르 포대, 그라우트 충전 체적, 보강 철근을 계산합니다.",
      "article": "## 콘크리트 블록 적산 안내\n\n블록 소요량, 줄눈 모르타르, 그라우트 채움 및 보강 배근을 산출합니다."
    }
  },
  'bathroom-remodel-cost-calculator': {
    "en": {
      "name": "Bathroom Remodel Cost Calculator",
      "shortDescription": "Calculate bathroom remodel costs by size, finish level, plumbing changes, labor, materials and upgrades.",
      "article": "## Bathroom remodel estimation\n\nEstimate realistic renovation costs based on bathroom dimensions and finish grade."
    },
    "es": {
      "name": "Calculadora de Costos de Remodelación de Baño",
      "shortDescription": "Calcula el presupuesto de remodelación de baño según tamaño, calidades, fontanería y materiales.",
      "article": "## Estimación de reforma de baño\n\nCalcula costes de demolición, fontanería, alicatado, sanitarios y mano de obra."
    },
    "fr": {
      "name": "Calculateur du coût de rénovation de salle de bain",
      "shortDescription": "Estimez le coût de rénovation de votre salle de bain selon surface, finitions, plomberie et matériaux.",
      "article": "## Rénovation de salle de bain\n\nEstimez les coûts de plomberie, carrelage, appareils sanitaires et main-d’œuvre."
    },
    "de": {
      "name": "Kostenrechner für Badezimmer-Renovierung",
      "shortDescription": "Berechnen Sie Kosten für eine Badsanierung nach Größe, Ausstattungsstandard, Sanitär und Fliesen.",
      "article": "## Badsanierung Kostenplaner\n\nSchätzen Sie Aufwand für Rohinstallation, Fliesenlegen, Sanitärobjekte und Montage."
    },
    "pt": {
      "name": "Calculadora de Custo de Reforma de Banheiro",
      "shortDescription": "Calcule o custo de reforma de banheiro por metragem, padrão de acabamento, hidráulica e revestimentos.",
      "article": "## Orçamento de reforma de banheiro\n\nPlaneje custos de demolição, encanamento, revestimentos e louças."
    },
    "it": {
      "name": "Calcolatore dei costi di ristrutturazione bagno",
      "shortDescription": "Calcola il costo di ristrutturazione del bagno in base a dimensioni, finiture, impianti e materiali.",
      "article": "## Ristrutturazione completa del bagno\n\nStima i costi per demolizioni, impianti idraulici, piastrelle e sanitari."
    },
    "nl": {
      "name": "Kostenberekening badkamerrenovatie",
      "shortDescription": "Bereken de kosten voor badkamerverbouwing op basis van afmetingen, afwerkingsniveau en installatiewerk.",
      "article": "## Badkamer verbouwen kosten\n\nSchat kosten voor sanitair, tegelwerk, leidingen en montagearbeid."
    },
    "pl": {
      "name": "Kalkulator kosztów remontu łazienki",
      "shortDescription": "Oszacuj koszt remontu łazienki według powierzchni, standardu wykończenia, instalacji i robocizny.",
      "article": "## Wycena remontu łazienki\n\nOblicz koszty hydrauliki, glazury, białego montażu i materiałów budowlanych."
    },
    "ru": {
      "name": "Калькулятор стоимости ремонта ванной комнаты",
      "shortDescription": "Рассчитайте бюджет на ремонт ванной комнаты по площади, классу отделки, сантехнике и работам.",
      "article": "## Смета на ремонт ванной комнаты\n\nРассчитайте затраты на плитку, замену труб, сантехнику и отделочные работы."
    },
    "tr": {
      "name": "Banyo Tadilat Maliyeti Hesaplayıcı",
      "shortDescription": "Metrekareye, malzeme kalitesine, tesisat değişikliklerine ve işçiliğe göre banyo yenileme bütçesini çıkarın.",
      "article": "## Banyo yenileme maliyetleri\n\nKırım, tesisat, fayans kaplama ve vitrifiye montaj maliyetlerini hesaplayın."
    },
    "ar": {
      "name": "حاسبة تكلفة تجديد وتشطيب الحمام",
      "shortDescription": "احسب تكلفة تجديد الحمام بدقة حسب المساحة ومستوى التشطيب وتعديلات السباكة وتكلفة العمالة.",
      "article": "## تقدير تكاليف تشطيب الحمام\n\nاحسب تكاليف تكسير البلاط وتأسيس السباكة والكهرباء وسيراميك الحوائط والأرضيات."
    },
    "hi": {
      "name": "बाथरूम रेनोवेशन लागत कैलकुलेटर",
      "shortDescription": "आकार, फिनिशिंग ग्रेड, प्लंबिंग बदलाव, सामग्री और मजदूरी के आधार पर बाथरूम नवीनीकरण लागत का अनुमान लगाएं।",
      "article": "## बाथरूम नवीनीकरण बजट\n\nटाइल्स, प्लंबिंग फिटिंग, सैनिटरी वेयर और मजدूरी का संपूर्ण अनुमान।"
    },
    "zh": {
      "name": "卫生间装修与改造费用计算器",
      "shortDescription": "根据面积尺寸、装修档次、水电管线改动、主材辅料与施工人工，快速测算卫生间翻新预算。",
      "article": "## 卫生间翻新装修改造预算\n\n包含拆除清运、水电改造、防水铺砖、洁具五金及人工全套测算。"
    },
    "ja": {
      "name": "浴室・バスルームリフォーム費用計算機",
      "shortDescription": "広さ、グレード、配管移動、設備機器、施工費用に基づいて浴室リフォームの見積もりを算出します。",
      "article": "## お風呂・浴室リフォーム相場\n\nユニットバス交換、在来浴室改修、配管工事の概算費用を計算します。"
    },
    "ko": {
      "name": "욕실 리모델링 및 인테리어 비용 계산기",
      "shortDescription": "욕실 평수, 마감 등급, 배관 및 설비 변경, 자재비 및 시공 인건비에 따른 견적을 산출합니다.",
      "article": "## 욕실 인테리어 및 리모델링 비용\n\n철거, 방수, 타일 시공, 위생도기 및 수전 교체 견적을 안내합니다."
    }
  },
  'battery-backup-calculator': {
    "en": {
      "name": "Battery Backup Calculator",
      "shortDescription": "Calculate battery bank capacity, inverter size, backup runtime, and solar recharge requirements.",
      "article": "## Battery backup capacity estimation\n\nSize home battery storage, emergency UPS runtimes, inverter load, and solar recharge."
    },
    "es": {
      "name": "Calculadora de Baterías de Respaldo (UPS / Solar)",
      "shortDescription": "Calcula capacidad del banco de baterías, inversor, autonomía y paneles solares para respaldo energético.",
      "article": "## Dimensionamiento de baterías de respaldo\n\nCalcula capacidad en kWh/Ah, inversor y horas de respaldo eléctrico."
    },
    "fr": {
      "name": "Calculateur de batterie de secours et onduleur",
      "shortDescription": "Calculez la capacité du banc de batteries, puissance de l’onduleur, autonomie et recharge solaire.",
      "article": "## Calcul de batterie de secours\n\nDimensionnez les batteries, l’onduleur et l’autonomie en cas de coupure."
    },
    "de": {
      "name": "Batteriespeicher & Notstrom Rechner",
      "shortDescription": "Berechnen Sie Speicherkapazität, Wechselrichtergröße, Notstrom-Laufzeit und Solarladung.",
      "article": "## Notstrom & Batteriespeicher Dimensionierung\n\nErmitteln Sie kWh/Ah-Kapazität, Wechselrichterleistung und Autarkiezeit."
    },
    "pt": {
      "name": "Calculadora de Bateria de Backup e No-Break",
      "shortDescription": "Calcule capacidade do banco de baterias, potência do inversor, tempo de autonomia e recarga solar.",
      "article": "## Dimensionamento de banco de baterias\n\nCalcule capacidade em Ah e kWh, dimensionamento de inversor e autonomia."
    },
    "it": {
      "name": "Calcolatore batterie di backup e gruppi di continuità",
      "shortDescription": "Calcola capacità del pacco batterie, potenza inverter, autonomia e ricarica solare per impianti UPS.",
      "article": "## Dimensionamento batterie di emergenza\n\nCalcola capacità in kWh/Ah, carico dell’inverter e tempo di continuità."
    },
    "nl": {
      "name": "Batterijopslag & Noodstroom Calculator",
      "shortDescription": "Bereken accucapaciteit, omvormervermogen, back-upduur en zonnepaneellading voor noodstroom.",
      "article": "## Thuisbatterij en noodstroom berekenen\n\nBereken benodigde accucapaciteit (kWh), omvormer en back-upduur."
    },
    "pl": {
      "name": "Kalkulator akumulatorów awaryjnych (UPS / Solar)",
      "shortDescription": "Oblicz pojemność banku akumulatorów, moc falownika, czas podtrzymania zasilania i ładowanie fotowoltaiczne.",
      "article": "## Dobór zasilania awaryjnego i akumulatorów\n\nOblicz pojemność baterii w Ah/kWh, dobierz inwerter i czas podtrzymania."
    },
    "ru": {
      "name": "Калькулятор аккумуляторного резервного питания (ИБП)",
      "shortDescription": "Рассчитайте емкость аккумуляторов, мощность инвертора, время работы и солнечную подзарядку.",
      "article": "## Расчет емкости резервного аккумулятора\n\nОпределите необходимую емкость в А·ч / кВт·ч, мощность инвертора и время резерва."
    },
    "tr": {
      "name": "Akü Yedekleme ve Kesintisiz Güç Kaynağı Hesaplayıcı",
      "shortDescription": "Akü bankası kapasitesini, invertör gücünü, çalışma süresini ve güneş paneli ihtiyacını hesaplayın.",
      "article": "## Akü yedekleme kapasite hesabı\n\nElektrik kesintileri için akü kapasitesi (Ah/kWh) ve invertör gücünü belirleyin."
    },
    "ar": {
      "name": "حاسبة بطاريات الطاقة الاحتياطية والعاكس (UPS)",
      "shortDescription": "احسب سعة بنك البطاريات، وحجم العاكس، وساعات التشغيل الاحتياطية، وألواح الطاقة الشمسية المطلوبة.",
      "article": "## حساب سعة بنك بطاريات الطوارئ\n\nاحسب سعة البطاريات بالأمبير-ساعة والكيلوواط، وقدرة العاكس، وزمن التشغيل."
    },
    "hi": {
      "name": "बैटरी बैकअप और इन्वर्टर कैलकुलेटर",
      "shortDescription": "बैटरी बैंक क्षमता, इन्वर्टर साइज़, बैकअप समय और सोलर चार्जिंग आवश्यकताओं की सटीक गणना करें।",
      "article": "## होम बैटरी बैकअप गणना\n\nबैकअप समय (घंटे), बैटरी क्षमता (Ah/kWh) और आवश्यक इन्वर्टर वाट क्षमता का आकलन करें।"
    },
    "zh": {
      "name": "应急后备电池组与逆变器计算器",
      "shortDescription": "计算应急备用电源电池组容量（kWh/Ah）、逆变器额定功率、备电续航时长及太阳能回充。",
      "article": "## 应急储能电池组容量配置\n\n精准测算家庭备电负荷、逆变器功率、放电时长及光伏充电板配比。"
    },
    "ja": {
      "name": "家庭用蓄電池・非常用電源バックアップ計算機",
      "shortDescription": "停電時の必要バッテリー容量（kWh/Ah）、インバーター出力、稼働時間、太陽光充電仕様を算出します。",
      "article": "## 蓄電池容量・非常用電源積算\n\n停電時の重要負荷、バッテリー容量、インバーター出力、連続稼働時間を計算します。"
    },
    "ko": {
      "name": "비상용 배터리 뱅크 및 인버터 용량 계산기",
      "shortDescription": "정전 대비 배터리 뱅크 용량(kWh/Ah), 인버터 규격, 백업 가동 시간 및 태양광 패널을 산출합니다.",
      "article": "## 비상 전원 배터리 뱅크 설계\n\n정전 시 필수 부하 가동을 위한 배터리 용량(Ah/kWh), 인버터 출력 및 런타임을 산출합니다."
    }
  },
};

export function getLocalizedTool(slug: string, locale: Locale): LocalizedToolContent | undefined {
  const toolEntry = toolTranslations[slug];
  if (!toolEntry) return undefined;
  const localizedTool = toolEntry[locale] ?? toolEntry.en;
  return localizedTool ? repairLocalizedToolText(localizedTool) : undefined;
}

// A historical encoding error left some translated registry strings as
// mojibake (for example, "DemoliciÃ³n"). This registry supplies page titles,
// descriptions, headings, and structured data, so repair those values before
// either the server or client renders them. The original files can be cleaned
// separately without changing the output seen by users or crawlers.
const MOJIBAKE_MARKER = /(?:Ã|Â|Ð|Ø|Ù|à¤|ã[‚ƒ€]|æ[²º ]|å[¤€‰]|ì[•—]|í[Œœ]|ê[³])/;

const WINDOWS_1252_BYTES: Record<string, number> = {
  '€': 0x80, '‚': 0x82, 'ƒ': 0x83, '„': 0x84, '…': 0x85,
  '†': 0x86, '‡': 0x87, 'ˆ': 0x88, '‰': 0x89, 'Š': 0x8a,
  '‹': 0x8b, 'Œ': 0x8c, 'Ž': 0x8e, '‘': 0x91, '’': 0x92,
  '“': 0x93, '”': 0x94, '•': 0x95, '–': 0x96, '—': 0x97,
  '˜': 0x98, '™': 0x99, 'š': 0x9a, '›': 0x9b, 'œ': 0x9c,
  'ž': 0x9e, 'Ÿ': 0x9f,
};

function repairText(value: string): string {
  let repaired = value;

  // A few values passed through the wrong encoding more than once. Decode up
  // to three times, stopping as soon as the result is valid text.
  for (let pass = 0; pass < 3 && MOJIBAKE_MARKER.test(repaired); pass += 1) {
    const bytes: number[] = [];
    for (const character of repaired) {
      const code = character.charCodeAt(0);
      const windows1252Byte = WINDOWS_1252_BYTES[character];
      if (code <= 0xff) {
        bytes.push(code);
      } else if (windows1252Byte !== undefined) {
        bytes.push(windows1252Byte);
      } else {
        return repaired;
      }
    }

    try {
      const decoded = new TextDecoder('utf-8', { fatal: true }).decode(new Uint8Array(bytes));
      if (decoded === repaired) return repaired;
      repaired = decoded;
    } catch {
      return repaired;
    }
  }

  return repaired;
}

function repairLocalizedToolText(tool: LocalizedToolContent): LocalizedToolContent {
  return {
    ...tool,
    name: repairText(tool.name),
    shortDescription: repairText(tool.shortDescription),
    article: repairText(tool.article),
    helpTexts: tool.helpTexts
      ? Object.fromEntries(
          Object.entries(tool.helpTexts).map(([key, value]) => [key, value === undefined ? undefined : repairText(value)]),
        )
      : undefined,
    options: tool.options
      ? Object.fromEntries(
          Object.entries(tool.options).map(([group, values]) => [
            group,
            Object.fromEntries(Object.entries(values).map(([key, value]) => [key, repairText(value)])),
          ]),
        )
      : undefined,
  };
}
