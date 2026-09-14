export interface Currency {
  code: string;
  symbol: string;
  name: string;
  flag: string;
}

export const CURRENCIES: Currency[] = [
  // South Asia
  { code: 'INR', symbol: 'Rs', name: 'Indian Rupee', flag: '🇮🇳' },
  { code: 'PKR', symbol: 'Rs', name: 'Pakistani Rupee', flag: '🇵🇰' },
  { code: 'BDT', symbol: 'Tk', name: 'Bangladeshi Taka', flag: '🇧🇩' },
  { code: 'BTN', symbol: 'Nu.', name: 'Bhutanese Ngultrum', flag: '🇧🇹' },
  { code: 'LKR', symbol: 'Rs', name: 'Sri Lankan Rupee', flag: '🇱🇰' },
  { code: 'NPR', symbol: 'Rs', name: 'Nepalese Rupee', flag: '🇳🇵' },
  { code: 'MVR', symbol: 'Rf', name: 'Maldivian Rufiyaa', flag: '🇲🇻' },
  { code: 'AFN', symbol: '؋', name: 'Afghan Afghani', flag: '🇦🇫' },

  // North America & Caribbean
  { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸' },
  { code: 'CAD', symbol: 'CA$', name: 'Canadian Dollar', flag: '🇨🇦' },
  { code: 'MXN', symbol: 'MX$', name: 'Mexican Peso', flag: '🇲🇽' },
  { code: 'DOP', symbol: 'RD$', name: 'Dominican Peso', flag: '🇩🇴' },
  { code: 'CRC', symbol: '₡', name: 'Costa Rican Colón', flag: '🇨🇷' },
  { code: 'GTQ', symbol: 'Q', name: 'Guatemalan Quetzal', flag: '🇬🇹' },
  { code: 'PAB', symbol: 'B/.', name: 'Panamanian Balboa', flag: '🇵🇦' },
  { code: 'JMD', symbol: 'J$', name: 'Jamaican Dollar', flag: '🇯🇲' },
  { code: 'TTD', symbol: 'TT$', name: 'Trinidad & Tobago Dollar', flag: '🇹🇹' },
  { code: 'BBD', symbol: 'Bds$', name: 'Barbadian Dollar', flag: '🇧🇧' },
  { code: 'BSD', symbol: 'B$', name: 'Bahamian Dollar', flag: '🇧🇸' },
  { code: 'BZD', symbol: 'BZ$', name: 'Belize Dollar', flag: '🇧🇿' },

  // Europe & UK
  { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺' },
  { code: 'GBP', symbol: '£', name: 'British Pound', flag: '🇬🇧' },
  { code: 'CHF', symbol: 'CHF', name: 'Swiss Franc', flag: '🇨🇭' },
  { code: 'PLN', symbol: 'zł', name: 'Polish Zloty', flag: '🇵🇱' },
  { code: 'SEK', symbol: 'kr', name: 'Swedish Krona', flag: '🇸🇪' },
  { code: 'NOK', symbol: 'kr', name: 'Norwegian Krone', flag: '🇳🇴' },
  { code: 'DKK', symbol: 'kr', name: 'Danish Krone', flag: '🇩🇰' },
  { code: 'ISK', symbol: 'kr', name: 'Icelandic Króna', flag: '🇮🇸' },
  { code: 'CZK', symbol: 'Kč', name: 'Czech Koruna', flag: '🇨🇿' },
  { code: 'HUF', symbol: 'Ft', name: 'Hungarian Forint', flag: '🇭🇺' },
  { code: 'RON', symbol: 'lei', name: 'Romanian Leu', flag: '🇷🇴' },
  { code: 'BGN', symbol: 'лв', name: 'Bulgarian Lev', flag: '🇧🇬' },
  { code: 'RSD', symbol: 'din', name: 'Serbian Dinar', flag: '🇷🇸' },
  { code: 'BAM', symbol: 'KM', name: 'Bosnia Mark', flag: '🇧🇦' },
  { code: 'ALL', symbol: 'Lek', name: 'Albanian Lek', flag: '🇦🇱' },
  { code: 'MKD', symbol: 'den', name: 'Macedonian Denar', flag: '🇲🇰' },
  { code: 'RUB', symbol: '₽', name: 'Russian Ruble', flag: '🇷🇺' },
  { code: 'UAH', symbol: '₴', name: 'Ukrainian Hryvnia', flag: '🇺🇦' },
  { code: 'TRY', symbol: '₺', name: 'Turkish Lira', flag: '🇹🇷' },

  // Middle East
  { code: 'SAR', symbol: 'SAR', name: 'Saudi Riyal', flag: '🇸🇦' },
  { code: 'AED', symbol: 'AED', name: 'UAE Dirham', flag: '🇦🇪' },
  { code: 'QAR', symbol: 'QAR', name: 'Qatari Riyal', flag: '🇶🇦' },
  { code: 'KWD', symbol: 'KWD', name: 'Kuwaiti Dinar', flag: '🇰🇼' },
  { code: 'BHD', symbol: 'BHD', name: 'Bahraini Dinar', flag: '🇧🇭' },
  { code: 'OMR', symbol: 'OMR', name: 'Omani Rial', flag: '🇴🇲' },
  { code: 'JOD', symbol: 'JOD', name: 'Jordanian Dinar', flag: '🇯🇴' },
  { code: 'ILS', symbol: '₪', name: 'Israeli Shekel', flag: '🇮🇱' },
  { code: 'IQD', symbol: 'IQD', name: 'Iraqi Dinar', flag: '🇮🇶' },
  { code: 'LBP', symbol: 'L£', name: 'Lebanese Pound', flag: '🇱🇧' },

  // East & Southeast Asia
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen', flag: '🇯🇵' },
  { code: 'CNY', symbol: '¥', name: 'Chinese Yuan', flag: '🇨🇳' },
  { code: 'KRW', symbol: '₩', name: 'South Korean Won', flag: '🇰🇷' },
  { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar', flag: '🇸🇬' },
  { code: 'MYR', symbol: 'RM', name: 'Malaysian Ringgit', flag: '🇲🇾' },
  { code: 'THB', symbol: '฿', name: 'Thai Baht', flag: '🇹🇭' },
  { code: 'IDR', symbol: 'Rp', name: 'Indonesian Rupiah', flag: '🇮🇩' },
  { code: 'PHP', symbol: '₱', name: 'Philippine Peso', flag: '🇵🇭' },
  { code: 'VND', symbol: '₫', name: 'Vietnamese Dong', flag: '🇻🇳' },
  { code: 'HKD', symbol: 'HK$', name: 'Hong Kong Dollar', flag: '🇭🇰' },
  { code: 'TWD', symbol: 'NT$', name: 'New Taiwan Dollar', flag: '🇹🇼' },
  { code: 'MMK', symbol: 'K', name: 'Myanmar Kyat', flag: '🇲🇲' },
  { code: 'KHR', symbol: '៛', name: 'Cambodian Riel', flag: '🇰🇭' },
  { code: 'LAK', symbol: '₭', name: 'Lao Kip', flag: '🇱🇦' },
  { code: 'BND', symbol: 'B$', name: 'Brunei Dollar', flag: '🇧🇳' },
  { code: 'MOP', symbol: 'MOP$', name: 'Macanese Pataca', flag: '🇲🇴' },
  { code: 'MNT', symbol: '₮', name: 'Mongolian Tugrik', flag: '🇲🇳' },
  { code: 'KZT', symbol: '₸', name: 'Kazakhstani Tenge', flag: '🇰🇿' },
  { code: 'UZS', symbol: "so'm", name: 'Uzbekistani Som', flag: '🇺🇿' },
  { code: 'GEL', symbol: '₾', name: 'Georgian Lari', flag: '🇬🇪' },
  { code: 'AMD', symbol: '֏', name: 'Armenian Dram', flag: '🇦🇲' },
  { code: 'AZN', symbol: '₼', name: 'Azerbaijani Manat', flag: '🇦🇿' },

  // Oceania
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', flag: '🇦🇺' },
  { code: 'NZD', symbol: 'NZ$', name: 'New Zealand Dollar', flag: '🇳🇿' },
  { code: 'FJD', symbol: 'FJ$', name: 'Fijian Dollar', flag: '🇫🇯' },
  { code: 'PGK', symbol: 'K', name: 'Papua New Guinea Kina', flag: '🇵🇬' },

  // South America
  { code: 'BRL', symbol: 'R$', name: 'Brazilian Real', flag: '🇧🇷' },
  { code: 'ARS', symbol: 'AR$', name: 'Argentine Peso', flag: '🇦🇷' },
  { code: 'CLP', symbol: 'CL$', name: 'Chilean Peso', flag: '🇨🇱' },
  { code: 'COP', symbol: 'COL$', name: 'Colombian Peso', flag: '🇨🇴' },
  { code: 'PEN', symbol: 'S/', name: 'Peruvian Sol', flag: '🇵🇪' },
  { code: 'UYU', symbol: '$U', name: 'Uruguayan Peso', flag: '🇺🇾' },
  { code: 'BOB', symbol: 'Bs.', name: 'Bolivian Boliviano', flag: '🇧🇴' },
  { code: 'PYG', symbol: '₲', name: 'Paraguayan Guaraní', flag: '🇵🇾' },
  { code: 'GYD', symbol: 'G$', name: 'Guyanese Dollar', flag: '🇬🇾' },

  // Africa
  { code: 'ZAR', symbol: 'R', name: 'South African Rand', flag: '🇿🇦' },
  { code: 'NGN', symbol: '₦', name: 'Nigerian Naira', flag: '🇳🇬' },
  { code: 'EGP', symbol: 'E£', name: 'Egyptian Pound', flag: '🇪🇬' },
  { code: 'KES', symbol: 'KSh', name: 'Kenyan Shilling', flag: '🇰🇪' },
  { code: 'GHS', symbol: 'GH₵', name: 'Ghanaian Cedi', flag: '🇬🇭' },
  { code: 'MAD', symbol: 'MAD', name: 'Moroccan Dirham', flag: '🇲🇦' },
  { code: 'DZD', symbol: 'DZD', name: 'Algerian Dinar', flag: '🇩🇿' },
  { code: 'TND', symbol: 'TND', name: 'Tunisian Dinar', flag: '🇹🇳' },
  { code: 'UGX', symbol: 'USh', name: 'Ugandan Shilling', flag: '🇺🇬' },
  { code: 'TZS', symbol: 'TSh', name: 'Tanzanian Shilling', flag: '🇹🇿' },
  { code: 'ETB', symbol: 'Br', name: 'Ethiopian Birr', flag: '🇪🇹' },
  { code: 'RWF', symbol: 'RF', name: 'Rwandan Franc', flag: '🇷🇼' },
  { code: 'ZMW', symbol: 'ZK', name: 'Zambian Kwacha', flag: '🇿🇲' },
  { code: 'BWP', symbol: 'P', name: 'Botswana Pula', flag: '🇧🇼' },
  { code: 'NAD', symbol: 'N$', name: 'Namibian Dollar', flag: '🇳🇦' },
  { code: 'MUR', symbol: 'Rs', name: 'Mauritian Rupee', flag: '🇲🇺' },
];

export function getCurrency(code: string): Currency {
  return CURRENCIES.find((c) => c.code.toUpperCase() === code.toUpperCase()) ?? CURRENCIES[0]!;
}

export function getDefaultCurrencyForLocale(locale: string): Currency {
  const map: Record<string, string> = {
    en: 'USD',
    es: 'EUR',
    fr: 'EUR',
    de: 'EUR',
    it: 'EUR',
    nl: 'EUR',
    pt: 'BRL',
    pl: 'PLN',
    tr: 'TRY',
    ar: 'SAR',
    hi: 'INR',
    zh: 'CNY',
    ja: 'JPY',
    ko: 'KRW',
    ru: 'RUB',
  };
  const code = map[locale] ?? 'USD';
  return getCurrency(code);
}

export function formatCurrencyAmount(amount: number, currency: Currency): string {
  const formatted = amount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Prefix currencies (e.g. $1,200.00, Rs 1,200.00, Nu. 1,200.00, £1,200.00, R$ 1,200.00, RM 1,200.00)
  const prefixSymbols = [
    '$', 'CA$', 'MX$', 'RD$', 'A$', 'NZ$', 'AR$', 'CL$', 'COL$', '$U', 'FJ$', 'J$', 'TT$', 'Bds$', 'B$', 'BZ$', 'G$', 'MOP$', 'HK$', 'NT$',
    'Rs', 'Tk', 'Nu.', 'Rf', '€', '£', 'L£', 'E£', 'R$', 'S$', 'Br', 'Bs.',
    '₹', '¥', '₩', '฿', '₱', '₦', 'GH₵', '₡', 'Q', 'B/.', 'RM', 'Rp', 'S/', 'KSh', 'USh', 'TSh', 'RF', 'ZK', 'N$', 'KM', 'SM'
  ];

  if (prefixSymbols.includes(currency.symbol)) {
    // If symbol has letters or dots (e.g. Rs, Nu., CA$, RM, S/), separate with a space for neatness
    if (/[a-zA-Z]/.test(currency.symbol)) {
      return `${currency.symbol} ${formatted}`;
    }
    return `${currency.symbol}${formatted}`;
  }

  // Suffix currencies (e.g. 1,200.00 kr, 1,200.00 zł, 1,200.00 AED, 1,200.00 SAR, 1,200.00 CHF)
  return `${formatted} ${currency.symbol}`;
}
