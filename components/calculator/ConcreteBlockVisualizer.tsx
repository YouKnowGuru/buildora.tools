'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Layers, Box, Hammer, ShieldAlert, Sparkles } from 'lucide-react';

interface ConcreteBlockVisualizerProps {
  wallLength?: number;
  wallHeight?: number;
  blockSize?: string;
  openingsArea?: number;
  totalBlocksWithWaste?: number;
  exactBlocks?: number;
  numberOfCourses?: number;
  blocksPerCourse?: number;
  mortarBags80lb?: number;
  groutVolumeCuYd?: number;
  groutFill?: string;
  includeRebar?: boolean;
  rebarSpacing?: string;
  units?: 'imperial' | 'metric';
}

export function ConcreteBlockVisualizer({
  wallLength = 20,
  wallHeight = 8,
  blockSize = '8x8x16',
  openingsArea = 0,
  totalBlocksWithWaste = 180,
  exactBlocks = 180,
  numberOfCourses = 12,
  blocksPerCourse = 15,
  mortarBags80lb = 14,
  groutVolumeCuYd = 0,
  groutFill = 'none',
  includeRebar = true,
  rebarSpacing = '32',
  units = 'imperial',
}: ConcreteBlockVisualizerProps) {
  const { locale } = useLanguage();
  const [activeTab, setActiveTab] = useState<'elevation' | 'cross-section'>('elevation');

  const isMetric = units === 'metric';
  const displayLength = isMetric ? (wallLength * 0.3048).toFixed(1) : wallLength.toFixed(1);
  const displayHeight = isMetric ? (wallHeight * 0.3048).toFixed(1) : wallHeight.toFixed(1);
  const unitSuffix = isMetric ? 'm' : 'ft';

  // SVG dimensions & grid configuration
  const svgWidth = 640;
  const svgHeight = 280;
  const padX = 50;
  const padY = 40;
  const drawWidth = svgWidth - padX * 2;
  const drawHeight = svgHeight - padY * 2;

  // Normalized course and block columns for visual clarity
  const visualCourses = Math.min(16, Math.max(4, numberOfCourses));
  const visualBlocksPerCourse = Math.min(24, Math.max(6, blocksPerCourse));
  const blockW = drawWidth / visualBlocksPerCourse;
  const blockH = drawHeight / visualCourses;

  // Has grout fill active
  const hasGrout = groutFill !== 'none' && groutVolumeCuYd > 0;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50 shadow-xs dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/70 px-4 py-3.5 dark:border-slate-800 sm:px-6">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20">
            <Box className="h-4 w-4" />
          </span>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              CMU Masonry Elevation & Core Layout
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-300">
              ASTM C90 Standard Running Bond ({blockSize} Nominal CMU)
            </p>
          </div>
        </div>

        {/* View toggle */}
        <div className="flex items-center gap-1 rounded-xl bg-slate-100 p-1 dark:bg-slate-800/80">
          <button
            type="button"
            onClick={() => setActiveTab('elevation')}
            className={`rounded-lg px-3 py-1 text-xs font-semibold transition ${
              activeTab === 'elevation'
                ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-700 dark:text-white'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
            }`}
          >
            Wall Elevation
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('cross-section')}
            className={`rounded-lg px-3 py-1 text-xs font-semibold transition ${
              activeTab === 'cross-section'
                ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-700 dark:text-white'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
            }`}
          >
            Core Cross-Section
          </button>
        </div>
      </div>

      {/* Main SVG Display */}
      <div className="relative p-4 sm:p-6">
        {activeTab === 'elevation' ? (
          <div className="relative flex justify-center">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="h-auto w-full max-w-[640px] drop-shadow-sm select-none"
              aria-label="Concrete block wall running bond pattern diagram"
            >
              {/* Background fill */}
              <rect
                x={padX}
                y={padY}
                width={drawWidth}
                height={drawHeight}
                fill="currentColor"
                className="text-slate-100/70 dark:text-slate-800/40"
              />

              {/* Concrete Footing base */}
              <rect
                x={padX - 8}
                y={padY + drawHeight}
                width={drawWidth + 16}
                height={16}
                rx={2}
                fill="currentColor"
                className="text-slate-400 dark:text-slate-600"
              />
              <text
                x={padX + drawWidth / 2}
                y={padY + drawHeight + 12}
                textAnchor="middle"
                className="fill-white text-[9px] font-bold uppercase tracking-wider"
              >
                Poured Concrete Footing
              </text>

              {/* Running Bond Block Grid */}
              {Array.from({ length: visualCourses }).map((_, courseIdx) => {
                // course 0 is bottom, visualCourses - 1 is top
                const row = visualCourses - 1 - courseIdx;
                const y = padY + row * blockH;
                const isEvenRow = courseIdx % 2 === 0;
                const isBondBeam = courseIdx === visualCourses - 1; // Top course bond beam

                return (
                  <g key={`course-${courseIdx}`}>
                    {Array.from({ length: visualBlocksPerCourse + 1 }).map((_, colIdx) => {
                      let x = padX + colIdx * blockW;
                      let width = blockW;

                      if (isEvenRow) {
                        // Offset by half block for running bond
                        x -= blockW / 2;
                        if (colIdx === 0) {
                          x = padX;
                          width = blockW / 2;
                        } else if (colIdx === visualBlocksPerCourse) {
                          width = blockW / 2;
                        }
                      } else {
                        if (colIdx === visualBlocksPerCourse) return null;
                      }

                      // Check if in simulated window/door opening
                      const isCenterCol = colIdx >= Math.floor(visualBlocksPerCourse * 0.4) && colIdx <= Math.floor(visualBlocksPerCourse * 0.6);
                      const isCenterRow = courseIdx >= 3 && courseIdx <= 6;
                      const isOpeningBlock = openingsArea > 0 && isCenterCol && isCenterRow;

                      if (isOpeningBlock) {
                        return (
                          <rect
                            key={`block-${courseIdx}-${colIdx}`}
                            x={x}
                            y={y}
                            width={width}
                            height={blockH}
                            fill="currentColor"
                            className="text-amber-100/40 dark:text-amber-950/20"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeDasharray="2 2"
                          />
                        );
                      }

                      return (
                        <g key={`block-${courseIdx}-${colIdx}`}>
                          <rect
                            x={x}
                            y={y}
                            width={width}
                            height={blockH}
                            fill="currentColor"
                            className={
                              isBondBeam
                                ? 'text-primary-100 stroke-primary-400 dark:text-primary-950/40 dark:stroke-primary-600'
                                : 'text-slate-200/90 stroke-slate-400/80 dark:text-slate-800 dark:stroke-slate-600'
                            }
                            strokeWidth="1.2"
                            rx="1"
                          />
                          {/* Block hollow core texture hint on larger blocks */}
                          {width >= blockW * 0.8 && blockH >= 14 && !isBondBeam && (
                            <>
                              <rect
                                x={x + width * 0.2}
                                y={y + blockH * 0.25}
                                width={width * 0.22}
                                height={blockH * 0.5}
                                rx="2"
                                fill="currentColor"
                                className="text-slate-300/70 dark:text-slate-700/60"
                              />
                              <rect
                                x={x + width * 0.58}
                                y={y + blockH * 0.25}
                                width={width * 0.22}
                                height={blockH * 0.5}
                                rx="2"
                                fill="currentColor"
                                className="text-slate-300/70 dark:text-slate-700/60"
                              />
                            </>
                          )}
                        </g>
                      );
                    })}
                  </g>
                );
              })}

              {/* Vertical Rebar Lines (if enabled) */}
              {includeRebar &&
                Array.from({ length: 7 }).map((_, i) => {
                  const spacingStep = drawWidth / 6;
                  const x = padX + i * spacingStep;
                  return (
                    <line
                      key={`rebar-${i}`}
                      x1={x}
                      y1={padY + 4}
                      x2={x}
                      y2={padY + drawHeight + 10}
                      stroke="#ef4444"
                      strokeWidth="2.2"
                      strokeDasharray="4 2"
                      opacity="0.85"
                    />
                  );
                })}

              {/* Horizontal Bond Beam Rebar in top course */}
              {includeRebar && (
                <line
                  x1={padX}
                  y1={padY + blockH / 2}
                  x2={padX + drawWidth}
                  y2={padY + blockH / 2}
                  stroke="#ef4444"
                  strokeWidth="2.5"
                  opacity="0.9"
                />
              )}

              {/* Opening Cutout Label */}
              {openingsArea > 0 && (
                <g>
                  <text
                    x={padX + drawWidth / 2}
                    y={padY + drawHeight / 2}
                    textAnchor="middle"
                    className="fill-amber-700 text-[10px] font-bold dark:fill-amber-400"
                  >
                    Opening ({openingsArea} {isMetric ? 'm²' : 'sq ft'})
                  </text>
                </g>
              )}

              {/* Length Dimension Line (Top) */}
              <line
                x1={padX}
                y1={padY - 12}
                x2={padX + drawWidth}
                y2={padY - 12}
                stroke="currentColor"
                className="text-slate-500"
                strokeWidth="1.2"
              />
              <line x1={padX} y1={padY - 18} x2={padX} y2={padY - 6} stroke="currentColor" className="text-slate-500" strokeWidth="1.2" />
              <line x1={padX + drawWidth} y1={padY - 18} x2={padX + drawWidth} y2={padY - 6} stroke="currentColor" className="text-slate-500" strokeWidth="1.2" />
              <text
                x={padX + drawWidth / 2}
                y={padY - 18}
                textAnchor="middle"
                className="fill-slate-700 text-[10px] font-bold dark:fill-slate-300"
              >
                Wall Length: {displayLength} {unitSuffix} ({blocksPerCourse} blocks/course)
              </text>

              {/* Height Dimension Line (Right) */}
              <line
                x1={padX + drawWidth + 14}
                y1={padY}
                x2={padX + drawWidth + 14}
                y2={padY + drawHeight}
                stroke="currentColor"
                className="text-slate-500"
                strokeWidth="1.2"
              />
              <line x1={padX + drawWidth + 8} y1={padY} x2={padX + drawWidth + 20} y2={padY} stroke="currentColor" className="text-slate-500" strokeWidth="1.2" />
              <line x1={padX + drawWidth + 8} y1={padY + drawHeight} x2={padX + drawWidth + 20} y2={padY + drawHeight} stroke="currentColor" className="text-slate-500" strokeWidth="1.2" />
              <text
                x={padX + drawWidth + 24}
                y={padY + drawHeight / 2}
                transform={`rotate(90 ${padX + drawWidth + 24} ${padY + drawHeight / 2})`}
                textAnchor="middle"
                className="fill-slate-700 text-[10px] font-bold dark:fill-slate-300"
              >
                Height: {displayHeight} {unitSuffix} ({numberOfCourses} courses)
              </text>
            </svg>
          </div>
        ) : (
          /* Cross-Section View showing CMU Cores, Grout, and Dowel */
          <div className="flex flex-col items-center justify-center py-2">
            <svg
              viewBox="0 0 440 220"
              className="h-auto w-full max-w-[440px] drop-shadow-sm select-none"
              aria-label="CMU block hollow core and grout cross section"
            >
              {/* Outer CMU shell */}
              <rect
                x="80"
                y="30"
                width="280"
                height="120"
                rx="6"
                fill="currentColor"
                className="text-slate-300 dark:text-slate-700"
                stroke="currentColor"
                strokeWidth="2"
              />

              {/* Core 1 (Left) */}
              <rect
                x="115"
                y="55"
                width="95"
                height="70"
                rx="8"
                fill={hasGrout ? '#94a3b8' : '#f8fafc'}
                className={hasGrout ? 'fill-slate-400 dark:fill-slate-500' : 'fill-slate-50 dark:fill-slate-900'}
                stroke="currentColor"
                strokeWidth="1.5"
              />

              {/* Core 2 (Right) */}
              <rect
                x="230"
                y="55"
                width="95"
                height="70"
                rx="8"
                fill={hasGrout ? '#94a3b8' : '#f8fafc'}
                className={hasGrout ? 'fill-slate-400 dark:fill-slate-500' : 'fill-slate-50 dark:fill-slate-900'}
                stroke="currentColor"
                strokeWidth="1.5"
              />

              {/* Center Web */}
              <text x="220" y="24" textAnchor="middle" className="fill-slate-600 text-[10px] font-bold dark:fill-slate-300">
                8&quot; × 8&quot; × 16&quot; Nominal CMU (Top-Down Cross Section)
              </text>

              {/* Rebar Dowels inside cores */}
              {includeRebar && (
                <>
                  <circle cx="162" cy="90" r="7" fill="#ef4444" />
                  <text x="162" y="93" textAnchor="middle" className="fill-white text-[8px] font-bold">#4</text>
                  <circle cx="277" cy="90" r="7" fill="#ef4444" />
                  <text x="277" y="93" textAnchor="middle" className="fill-white text-[8px] font-bold">#4</text>
                </>
              )}

              {/* Callouts */}
              <text x="162" y="145" textAnchor="middle" className="fill-slate-500 text-[9px] dark:fill-slate-400">
                {hasGrout ? 'Filled Core (Grout)' : 'Open Cell / Void'}
              </text>
              <text x="277" y="145" textAnchor="middle" className="fill-slate-500 text-[9px] dark:fill-slate-400">
                {includeRebar ? 'Vertical Rebar Dowel' : 'Open Core'}
              </text>

              {/* Nominal Dimension Markers */}
              <text x="220" y="180" textAnchor="middle" className="fill-slate-600 text-[10px] font-semibold dark:fill-slate-300">
                Face Shell: 1-1/4&quot; Min · Mortar Bed Joint: 3/8&quot; Standard
              </text>
            </svg>
          </div>
        )}

        {/* Legend strip */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-300">
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-xs border border-slate-400 bg-slate-200 dark:border-slate-600 dark:bg-slate-700" />
            Standard CMU
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-xs border border-primary-500 bg-primary-100 dark:bg-primary-950" />
            Top Bond Beam
          </span>
          {includeRebar && (
            <span className="flex items-center gap-1.5">
              <span className="h-0.5 w-3.5 bg-red-500" />
              Steel Rebar (#{includeRebar ? '4/5' : ''})
            </span>
          )}
          {hasGrout && (
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-xs bg-slate-400 dark:bg-slate-500" />
              Grouted Cores ({groutFill === 'solid' ? 'Solid 100%' : `${groutFill}" OC`})
            </span>
          )}
        </div>
      </div>

      {/* Bottom Summary Stats Strip */}
      <div className="grid grid-cols-2 divide-x divide-slate-200/70 border-t border-slate-200/70 bg-slate-50/70 dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900/50 sm:grid-cols-4">
        <div className="p-3 text-center sm:p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">
            Total Blocks (w/ waste)
          </p>
          <p className="mt-1 text-lg font-extrabold text-primary sm:text-xl">
            {totalBlocksWithWaste.toLocaleString()}
          </p>
          <p className="text-[10px] text-slate-400 dark:text-slate-500">
            Exact: {exactBlocks.toLocaleString()}
          </p>
        </div>

        <div className="p-3 text-center sm:p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">
            Courses & Height
          </p>
          <p className="mt-1 text-lg font-extrabold text-slate-900 dark:text-white sm:text-xl">
            {numberOfCourses} Courses
          </p>
          <p className="text-[10px] text-slate-400 dark:text-slate-500">
            {blocksPerCourse} blocks/course
          </p>
        </div>

        <div className="p-3 text-center sm:p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">
            80lb Mortar Bags
          </p>
          <p className="mt-1 text-lg font-extrabold text-slate-900 dark:text-white sm:text-xl">
            {mortarBags80lb} Bags
          </p>
          <p className="text-[10px] text-slate-400 dark:text-slate-500">
            Type S or Type N
          </p>
        </div>

        <div className="p-3 text-center sm:p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">
            Core Grout Fill
          </p>
          <p className="mt-1 text-lg font-extrabold text-slate-900 dark:text-white sm:text-xl">
            {groutVolumeCuYd > 0 ? `${groutVolumeCuYd} yd³` : 'None'}
          </p>
          <p className="text-[10px] text-slate-400 dark:text-slate-500">
            {groutFill === 'none' ? 'Hollow cores' : `${groutFill === 'solid' ? '100% Solid' : `${groutFill}" OC`}`}
          </p>
        </div>
      </div>
    </div>
  );
}
