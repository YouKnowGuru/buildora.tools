'use client';

import { useState } from 'react';
import { FileDown, Loader2 } from 'lucide-react';
import type { ToolConfig, InputField } from '@/lib/registry/types';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { type Currency, formatCurrencyAmount } from '@/lib/i18n/currencies';

interface PdfExportButtonProps {
  tool: ToolConfig;
  units: 'imperial' | 'metric';
  inputValues: Record<string, number | string | boolean | undefined>;
  resultValues: Record<string, number | null>;
  currency?: Currency;
}

export function PdfExportButton({
  tool,
  units,
  inputValues,
  resultValues,
  currency,
}: PdfExportButtonProps) {

  const [isExporting, setIsExporting] = useState(false);
  const { t } = useLanguage();

  async function handleExport() {
    setIsExporting(true);
    try {
      // Dynamically imported so jspdf never ships in the initial bundle
      const { jsPDF } = await import('jspdf');

      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pageWidth = doc.internal.pageSize.getWidth();
      const margin = 20;
      const contentWidth = pageWidth - margin * 2;
      let y = margin;

      // Brand Header bar
      doc.setFillColor(37, 99, 235); // Primary Blue #2563EB
      doc.rect(margin, y, contentWidth, 3, 'F');
      y += 10;

      // Title & Branding
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(20);
      doc.setTextColor(15, 23, 42); // Slate 900
      doc.text(tool.name, margin, y);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(100, 116, 139); // Slate 500
      const dateStr = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
      doc.text(`buildora.tools  |  ${dateStr}`, pageWidth - margin, y, { align: 'right' });
      y += 8;

      doc.setFontSize(10);
      doc.setTextColor(71, 85, 105);
      doc.text('Material Quantity & Cost Estimation Sheet', margin, y);
      y += 12;

      // Section 1: Project Inputs Table
      doc.setFillColor(248, 250, 252);
      doc.roundedRect(margin, y, contentWidth, 8, 1, 1, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(15, 23, 42);
      doc.text(t.calculator.sections.measurements, margin + 4, y + 5.5);
      y += 12;

      tool.inputs.forEach((input) => {
        const val = inputValues[input.id] ?? input.defaultValue;
        const unitLabel = resolveUnit(input, units);
        const displayVal = val === '' ? '-' : `${val} ${unitLabel}`.trim();

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.setTextColor(71, 85, 105);
        doc.text(input.label, margin + 4, y);

        doc.setFont('helvetica', 'bold');
        doc.setTextColor(15, 23, 42);
        doc.text(String(displayVal), pageWidth - margin - 4, y, { align: 'right' });

        // Dotted divider line
        doc.setDrawColor(226, 232, 240);
        doc.setLineDashPattern([1, 2], 0);
        doc.line(margin + 4, y + 2, pageWidth - margin - 4, y + 2);
        doc.setLineDashPattern([], 0);

        y += 7;
      });

      y += 8;

      // Section 2: Results
      doc.setFillColor(239, 246, 255); // Blue 50
      doc.roundedRect(margin, y, contentWidth, 8, 1, 1, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(37, 99, 235); // Blue 600
      doc.text(t.calculator.sections.calculationResults, margin + 4, y + 5.5);
      y += 12;

      const visibleLabels = tool.resultLabels.filter((label) => {
        if (!label.showOnlyIfInputSet) return true;
        const gate = inputValues[label.showOnlyIfInputSet];
        return gate !== undefined && gate !== '' && Number(gate) > 0;
      });

      visibleLabels.forEach((label) => {
        const val = resultValues[label.id];
        const displayVal = val === null || val === undefined ? '-' : formatValue(val, label.unit, currency);

        if (label.highlight) {
          // Highlight background box
          doc.setFillColor(241, 245, 249);
          doc.roundedRect(margin + 2, y - 4, contentWidth - 4, 8, 1, 1, 'F');

          doc.setFont('helvetica', 'bold');
          doc.setFontSize(10.5);
          doc.setTextColor(37, 99, 235);
          doc.text(label.label, margin + 4, y + 1.5);

          doc.setFontSize(11);
          doc.text(displayVal, pageWidth - margin - 4, y + 1.5, { align: 'right' });
          y += 9;
        } else {
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(10);
          doc.setTextColor(71, 85, 105);
          doc.text(label.label, margin + 4, y);

          doc.setFont('helvetica', 'bold');
          doc.setTextColor(15, 23, 42);
          doc.text(displayVal, pageWidth - margin - 4, y, { align: 'right' });

          doc.setDrawColor(226, 232, 240);
          doc.setLineDashPattern([1, 2], 0);
          doc.line(margin + 4, y + 2, pageWidth - margin - 4, y + 2);
          doc.setLineDashPattern([], 0);
          y += 7;
        }
      });

      y += 12;

      // Section 3: Notes & Disclaimer
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(8.5);
      const disclaimer = t.calculator.disclaimer;
      const splitDisclaimer = doc.splitTextToSize(disclaimer, contentWidth);
      doc.text(splitDisclaimer, margin, y);


      // Save PDF to user device
      doc.save(`${tool.slug}-estimate.pdf`);
    } catch (error) {
      console.error('[PdfExportButton] export failed', error);
    } finally {
      setIsExporting(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleExport}
      disabled={isExporting}
      className="no-print inline-flex min-h-[42px] items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-700 shadow-sm transition-all duration-150 hover:border-primary/40 hover:bg-slate-50 hover:text-primary active:scale-[0.98] disabled:opacity-60 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-primary/50 dark:hover:bg-slate-800 dark:hover:text-primary sm:text-sm"
    >
      {isExporting ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin text-primary" aria-hidden="true" />
          {t.calculator.preparingPdf}
        </>
      ) : (
        <>
          <FileDown className="h-4 w-4" aria-hidden="true" />
          {t.calculator.saveAsPdf}
        </>
      )}
    </button>
  );
}

function resolveUnit(input: InputField, units: 'imperial' | 'metric'): string {
  if (input.id === 'length' || input.id === 'width') return units === 'imperial' ? 'ft' : 'm';
  if (input.id === 'depth') return units === 'imperial' ? 'in' : 'cm';
  if (input.id === 'density') return units === 'imperial' ? 'lb/cu ft' : 'kg/cu m';
  return input.unit ? input.unit.replace('³', '3') : '';
}

function formatValue(value: number, unit: string, currency?: Currency): string {
  if (unit === '$') {
    if (currency) {
      return formatCurrencyAmount(value, currency);
    }
    const formatted = value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return `$${formatted}`;
  }
  const formatted = value.toLocaleString(undefined, { maximumFractionDigits: 2 });
  const cleanUnit = unit.replace('³', '3');
  return `${formatted} ${cleanUnit}`;
}
