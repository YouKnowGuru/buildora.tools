export type ToolCategory =
  | 'site-work'
  | 'roofing'
  | 'concrete'
  | 'hvac'
  | 'electrical'
  | 'flooring'
  | 'framing'
  | 'masonry'
  | 'paint'
  | 'solar'
  | 'plumbing'
  | 'structural'
  | 'exterior'
  | 'landscaping'
  | 'services';


export type InputFieldType = 'number' | 'slider' | 'toggle' | 'select';

export interface InputField {
  /** Must match a key produced by the Zod schema for this tool. */
  id: string;
  label: string;
  type: InputFieldType;
  defaultValue: number | string | boolean;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  /** Only for type: 'select' */
  options?: { label: string; value: string }[];
  helpText?: string;
  optional?: boolean;
  /** Only render this field when the named toggle input is true (e.g. show permitCost only when includePermit is ON) */
  showIf?: string;
}

export interface ResultLabel {
  id: string;
  label: string;
  unit: string;
  /** Only render this line if the named input field has a value (e.g. cost). */
  showOnlyIfInputSet?: string;
  highlight?: boolean;
}

export interface ToolSchema {
  applicationCategory: string;
  /**
   * Intentionally no aggregateRating field here. Do not fabricate ratings —
   * Google can manually action sites with fake review schema. Add rating
   * fields only once real user ratings exist.
   */
}

export interface ToolConfig {
  slug: string;
  name: string;
  metaTitle?: string;
  shortDescription: string;
  category: ToolCategory;
  icon: string;
  keywords: string[];
  formulaId: string;
  contentFile: string;
  schema: ToolSchema;
  inputs: InputField[];
  resultLabels: ResultLabel[];
  /** Optional plain-language explanation for an intentionally asymmetric estimate range. */
  estimateRangeNote?: string;
  defaultUnits: 'imperial' | 'metric';
}
