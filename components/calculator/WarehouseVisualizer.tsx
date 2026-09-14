'use client';

import React from 'react';

interface WarehouseVisualizerProps {
  palletCount: number;
  rackingType: string;
  rackLevels: number;
  aisleType: string;
  includeOpsArea: boolean;
  groundPalletPositions: number;
  utilizationRate: number;
  units: 'imperial' | 'metric';
}

export function WarehouseVisualizer({
  palletCount,
  rackingType,
  rackLevels,
  aisleType,
  includeOpsArea,
  groundPalletPositions,
  utilizationRate,
  units,
}: WarehouseVisualizerProps) {
  const unitLabel = units === 'imperial' ? 'sq ft' : 'm²';
  const displayLevels = Math.min(Math.max(1, Number(rackLevels) || 4), 6);
  const displayPositions = Math.min(Math.max(1, Number(groundPalletPositions) || 50), 200);
  const displayUtilization = Number(utilizationRate) || 50;

  const rackingLabels: Record<string, string> = {
    selective: 'Selective Rack',
    'floor-stack': 'Floor Block Stacking',
    'double-deep': 'Double-Deep Rack',
    'drive-in': 'Drive-In Rack',
  };

  const aisleLabels: Record<string, string> = {
    wide: 'Wide Aisle (12-13 ft)',
    narrow: 'Narrow Aisle (9-10 ft)',
    vna: 'VNA (6 ft)',
  };

  const rackWidth = 25;
  const rackGap = 8;
  const aisleWidth = aisleType === 'wide' ? 50 : aisleType === 'narrow' ? 35 : 22;
  const rackHeight = Math.min(120, 30 + displayLevels * 18);
  const numRacks = Math.min(8, Math.max(3, Math.ceil(displayPositions / 20)));

  return (
    <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition-all dark:border-slate-800 dark:bg-slate-900/50">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Warehouse Layout & Storage Plan
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          {rackingLabels[rackingType] || 'Selective'}
        </span>
      </div>

      <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-lg bg-white p-2 shadow-inner dark:bg-slate-950">
        <svg viewBox="0 0 500 280" className="h-full w-full select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="floorTile" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="20" height="20" fill="#f1f5f9" className="dark:fill-slate-800" />
              <line x1="0" y1="20" x2="20" y2="20" stroke="#e2e8f0" strokeWidth="0.5" className="dark:stroke-slate-700" />
              <line x1="20" y1="0" x2="20" y2="20" stroke="#e2e8f0" strokeWidth="0.5" className="dark:stroke-slate-700" />
            </pattern>
            <pattern id="palletPattern" width="10" height="8" patternUnits="userSpaceOnUse">
              <rect width="10" height="8" fill="#92400e" />
              <line x1="0" y1="4" x2="10" y2="4" stroke="#78350f" strokeWidth="0.5" />
            </pattern>
          </defs>

          {/* Warehouse Floor */}
          <rect x="30" y="50" width="440" height="200" fill="url(#floorTile)" stroke="#94a3b8" strokeWidth="2" rx="4" />
          <text x="250" y="42" textAnchor="middle" className="fill-slate-500 text-[10px] font-semibold">Warehouse Floor Plan (Top View)</text>

          {/* Rack Rows with Aisles */}
          {Array.from({ length: numRacks }).map((_, i) => {
            const x = 50 + i * (rackWidth + aisleWidth);
            return (
              <g key={i}>
                {/* Rack Uprights */}
                <rect x={x} y={70} width="4" height={rackHeight} fill="#374151" rx="1" />
                <rect x={x + rackWidth - 4} y={70} width="4" height={rackHeight} fill="#374151" rx="1" />
                {/* Rack Beams (Levels) */}
                {Array.from({ length: displayLevels }).map((_, j) => (
                  <rect
                    key={j}
                    x={x}
                    y={70 + j * (rackHeight / displayLevels)}
                    width={rackWidth}
                    height={rackHeight / displayLevels - 2}
                    fill="url(#palletPattern)"
                    stroke="#78350f"
                    strokeWidth="0.5"
                    opacity={0.7 + (j * 0.05)}
                  />
                ))}
                {/* Rack Label */}
                <text x={x + rackWidth / 2} y={70 + rackHeight + 14} textAnchor="middle" className="fill-slate-500 text-[8px]">Rack {i + 1}</text>
                {/* Aisle Label (between racks) */}
                {i < numRacks - 1 && (
                  <text x={x + rackWidth + aisleWidth / 2} y={70 + rackHeight + 25} textAnchor="middle" className="fill-sky-600 dark:fill-sky-400 text-[7px] font-semibold">
                    Aisle
                  </text>
                )}
              </g>
            );
          })}

          {/* Dock Area (right side) */}
          {includeOpsArea && (
            <g>
              <rect x="380" y="200" width="80" height="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 2" rx="3" />
              <text x="420" y="218" textAnchor="middle" className="fill-blue-700 text-[8px] font-bold">DOCK</text>
              <text x="420" y="230" textAnchor="middle" className="fill-blue-600 text-[7px]">Staging</text>
              {/* Dock Doors */}
              <line x1="385" y1="200" x2="385" y2="240" stroke="#1d4ed8" strokeWidth="2" />
              <line x1="405" y1="200" x2="405" y2="240" stroke="#1d4ed8" strokeWidth="2" />
              <line x1="425" y1="200" x2="425" y2="240" stroke="#1d4ed8" strokeWidth="2" />
              <line x1="445" y1="200" x2="445" y2="240" stroke="#1d4ed8" strokeWidth="2" />
            </g>
          )}

          {/* Stats Panel */}
          <rect x="30" y="260" width="440" height="18" rx="3" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" className="dark:fill-slate-800 dark:stroke-slate-700" />
          <text x="50" y="273" className="fill-slate-600 dark:fill-slate-300 text-[8px]">
            Pallets: {palletCount} | Levels: {displayLevels} | Utilization: {displayUtilization}%
          </text>
          <text x="350" y="273" className="fill-slate-600 dark:fill-slate-300 text-[8px]">
            {aisleLabels[aisleType] || 'Wide Aisle'}
          </text>
        </svg>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-amber-800" /> Pallet Positions
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-gray-700" /> Rack Uprights
        </span>
        {includeOpsArea && (
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-sm bg-blue-200 border border-blue-400" /> Dock/Staging
          </span>
        )}
      </div>
    </div>
  );
}
