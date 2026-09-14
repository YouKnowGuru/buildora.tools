import type { ToolConfig } from '@/lib/registry/types';

export interface MasterCalculatorProps {
  tool: ToolConfig;
  /** Pre-parsed, Zod-validated initial values from the URL query string. */
  initialValues: Record<string, number | string | undefined>;
}
