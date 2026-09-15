import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Database, 
  Activity, 
  Cpu, 
  Clock, 
  Zap, 
  FileText, 
  ShieldCheck, 
  Wifi,
  Sparkles
} from 'lucide-react';
import { INDUSTRIAL_PROBLEMS_SOLUTIONS } from '../data/mockIndustrialData';

export const ProblemSection: React.FC = () => {
  const [selectedProblemIndex, setSelectedProblemIndex] = useState<number>(0);
  const activeProblem = INDUSTRIAL_PROBLEMS_SOLUTIONS[selectedProblemIndex];

  return (
    <section id="platform" className="py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-40" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#277822]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-xs font-mono text-amber-900 font-bold mb-4 shadow-xs">
            <AlertTriangle className="w-4 h-4 text-amber-700" />
            <span>REAL-WORLD PROBLEM &amp; TELEMETRY ARCHITECTURE SOLUTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4 font-sans">
            Scattered Machine Telemetry. <br />
            <span className="text-[#277822]">Unified Operational Intelligence.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Modern industrial operations generate an overwhelming volume of sensor tags and high-frequency curves. Telemora bridges the gap between raw data streams and actionable engineering context.
          </p>
        </div>

        {/* 6 Problem-Solution Pairs Interactive Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Left: 6 Problem Cards Selector (6 Cols) */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
              SELECT AN OPERATIONAL FRICTION POINT:
            </div>

            {INDUSTRIAL_PROBLEMS_SOLUTIONS.map((item, idx) => {
              const isSelected = selectedProblemIndex === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedProblemIndex(idx)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-4 ${
                    isSelected
                      ? 'bg-white border-[#277822] shadow-md ring-2 ring-[#277822]/20'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                        isSelected ? 'bg-[#ebf7e8] text-[#236d1f]' : 'bg-slate-100 text-slate-600'
                      }`}>
                        FRICTION 0{idx + 1}
                      </span>
                      <span className="text-xs font-mono text-[#277822] font-semibold">
                        {item.capabilityTag}
                      </span>
                    </div>

                    <h4 className="font-bold text-sm sm:text-base text-slate-950 font-sans mt-0.5">
                      {item.problemTitle}
                    </h4>
                  </div>

                  <ArrowRight className={`w-4 h-4 shrink-0 mt-2 transition-transform ${
                    isSelected ? 'text-[#277822] translate-x-1' : 'text-slate-400'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* Right: Detailed Problem vs Telemora Solution Deep-Dive (6 Cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-white border border-[#c8e8bd] p-6 sm:p-8 shadow-xl space-y-6">
            
            {/* Top Problem Header */}
            <div className="p-4 rounded-2xl bg-red-50/60 border border-red-200/80 space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between text-red-700 font-bold uppercase text-[10px]">
                <span>THE PLANT OPERATIONAL PROBLEM</span>
                <span>STATUS QUO</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-950 font-sans">
                {activeProblem.problemTitle}
              </h3>
              <p className="text-xs text-slate-700 font-sans leading-relaxed">
                {activeProblem.problemDescription}
              </p>
              <div className="pt-2 border-t border-red-200 text-[11px] text-red-800 font-sans">
                <span className="font-bold">Plant Impact: </span>
                {activeProblem.impactOnPlant}
              </div>
            </div>

            {/* Down Arrow Bridge */}
            <div className="flex items-center justify-center">
              <div className="px-4 py-1 rounded-full bg-[#ebf7e8] border border-[#a8da9f] text-[#236d1f] text-xs font-mono font-bold flex items-center gap-1.5 shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>TELEMORA INTELLIGENCE LAYER SOLUTION</span>
              </div>
            </div>

            {/* Bottom Solution Header */}
            <div className="p-6 rounded-2xl bg-[#f7faf6] border border-[#c8e8bd] space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-[#236d1f] font-bold uppercase text-[10px]">
                <span>TELEMORA ARCHITECTURE ADVANTAGE</span>
                <span className="bg-[#ebf7e8] px-2 py-0.5 rounded border border-[#a8da9f] text-[#236d1f]">
                  {activeProblem.metricGain}
                </span>
              </div>

              <h4 className="text-lg sm:text-xl font-extrabold text-slate-950 font-sans">
                {activeProblem.solutionTitle}
              </h4>

              <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
                {activeProblem.solutionDescription}
              </p>

              <div className="pt-3 border-t border-[#cfe3cc] flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-600">
                <span className="flex items-center gap-1 text-[#277822] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Decision Support Enforced
                </span>
                <span className="text-slate-500 font-mono">
                  Schema: ISA-95 Normalized
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* 6 Capabilities Strip Callout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-4 border-t border-slate-200">
          {[
            { label: 'Telemetry Ingestion', sub: 'OPC-UA, MQTT, Modbus' },
            { label: 'Time-Series Engine', sub: 'Schema Normalization' },
            { label: 'Asset Context Map', sub: 'ISA-95 Digital Twin' },
            { label: 'Trend & Anomaly ML', sub: 'Dynamic ±3σ Envelopes' },
            { label: 'Edge Resilience', sub: 'Store-and-Forward SSD' },
            { label: 'Decision Support', sub: '100% Read-Only Safety' }
          ].map((cap, cIdx) => (
            <div key={cIdx} className="p-3 rounded-xl bg-white border border-slate-200 text-center space-y-0.5">
              <div className="text-xs font-bold text-slate-900 font-sans">{cap.label}</div>
              <div className="text-[10px] font-mono text-slate-500">{cap.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
