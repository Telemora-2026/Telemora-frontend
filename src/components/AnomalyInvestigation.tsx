import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Activity, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  ShieldAlert, 
  Sliders, 
  Layers, 
  Cpu, 
  Sparkles,
  Download,
  Share2
} from 'lucide-react';
import { ANOMALIES_DATA } from '../data/mockIndustrialData';
import { AnomalyInvestigation } from '../types';

interface AnomalyInvestigationProps {
  activeDossier?: AnomalyInvestigation;
}

export const AnomalyInvestigationView: React.FC<AnomalyInvestigationProps> = ({ 
  activeDossier = ANOMALIES_DATA[0] 
}) => {
  const [selectedDossier, setSelectedDossier] = useState<AnomalyInvestigation>(activeDossier);

  return (
    <section id="investigation" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-xs font-mono text-amber-800 font-bold mb-3">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
              <span>CONDITION EVIDENCE INVESTIGATION DOSSIER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
              AI-Assisted Anomaly Dossier <br />
              <span className="text-emerald-700">For Reliability Engineers.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              When physical deviations exceed state-dependent envelopes, Telemora aggregates FFT spectral evidence, machine cycle parameters, and maintenance history into an engineering review dossier.
            </p>
          </div>

          {/* Switch Active Investigation Tabs */}
          <div className="flex items-center gap-2">
            {ANOMALIES_DATA.map((dossier) => (
              <button
                key={dossier.id}
                onClick={() => setSelectedDossier(dossier)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  selectedDossier.id === dossier.id
                    ? 'bg-emerald-700 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {dossier.id} ({dossier.assetCode})
              </button>
            ))}
          </div>
        </div>

        {/* Dossier Card Container - Pristine Light Theme */}
        <div className="rounded-3xl bg-white border border-[#cfe3cc] p-6 sm:p-10 shadow-xl text-slate-900 space-y-8">
          
          {/* Header Metadata Ribbon */}
          <div className="flex flex-wrap items-start justify-between gap-6 pb-6 border-b border-[#cfe3cc]">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-2.5 py-1 rounded bg-amber-50 text-amber-800 border border-amber-300 text-xs font-mono font-bold">
                  SEVERITY: {selectedDossier.severity}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  DOSSIER ID: <span className="text-slate-950 font-bold">{selectedDossier.id}</span>
                </span>
                <span className="text-xs font-mono text-slate-500">
                  TIMESTAMP: <span className="text-slate-700">{selectedDossier.timestamp}</span>
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                {selectedDossier.assetName} ({selectedDossier.assetCode})
              </h3>
              <p className="text-xs font-mono text-slate-600">
                Location: {selectedDossier.location} • Signal: <span className="text-[#236d1f] font-bold">{selectedDossier.signalName}</span>
              </p>
            </div>

            {/* Deviation Score Ring */}
            <div className="text-right font-mono p-4 rounded-2xl bg-[#f8fbf7] border border-[#cfe3cc] shadow-xs">
              <div className="text-[10px] text-slate-500 font-semibold">MULTIVARIATE DEVIATION</div>
              <div className="text-3xl sm:text-4xl font-black text-amber-600">
                {selectedDossier.deviationScore}<span className="text-xs text-slate-400 font-normal">/100</span>
              </div>
            </div>
          </div>

          {/* 3-Column Evidence Summary Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Box 1: Observed Waveform & Baseline Envelope */}
            <div className="p-5 rounded-2xl bg-[#f8fbf7] border border-[#cfe3cc] space-y-3 shadow-xs">
              <div className="text-xs font-mono font-bold text-slate-700 uppercase">
                01. SIGNAL DEVIATION
              </div>
              <div className="space-y-1.5 font-mono text-xs">
                <div className="text-slate-500">Observed Value:</div>
                <div className="text-amber-700 font-bold text-sm">{selectedDossier.observedValue}</div>
                <div className="text-slate-500 pt-1">Expected Dynamic Baseline:</div>
                <div className="text-[#236d1f] font-bold">{selectedDossier.expectedBaseline}</div>
              </div>

              {/* Mini visual waveform comparison */}
              <div className="pt-2">
                <div className="text-[10px] font-mono text-slate-500 mb-1">WAVEFORM vs BASELINE ENVELOPE</div>
                <div className="h-14 flex items-end gap-1 p-1 bg-white rounded border border-[#cfe3cc]">
                  {selectedDossier.waveformObserved.map((val, idx) => (
                    <div
                      key={idx}
                      style={{ height: `${(val / 4.0) * 100}%` }}
                      className="flex-1 bg-amber-500/90 rounded-t-xs"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Box 2: Spectral FFT Harmonic Evidence */}
            <div className="p-5 rounded-2xl bg-[#f8fbf7] border border-[#cfe3cc] space-y-3 shadow-xs">
              <div className="text-xs font-mono font-bold text-slate-700 uppercase">
                02. FFT SPECTRAL EVIDENCE
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-mono">
                {selectedDossier.evidenceSummary}
              </p>
              <div className="p-2.5 rounded-lg bg-white border border-[#cfe3cc] text-xs font-mono text-[#236d1f] font-bold">
                Dominant Peak: {selectedDossier.fftPeakFreqHz} Hz (Harmonic BPFO)
              </div>
            </div>

            {/* Box 3: CMMS Maintenance Correlation */}
            <div className="p-5 rounded-2xl bg-[#f8fbf7] border border-[#cfe3cc] space-y-3 shadow-xs">
              <div className="text-xs font-mono font-bold text-slate-700 uppercase">
                03. CMMS WORK ORDER LINKAGE
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-mono">
                {selectedDossier.maintenanceCorrelation}
              </p>
              <div className="p-2.5 rounded-lg bg-white border border-[#cfe3cc] text-xs font-mono text-slate-700">
                Operating State: <span className="text-[#236d1f] font-bold">{selectedDossier.operatingState}</span>
              </div>
            </div>

          </div>

          {/* Recommended Engineering Action Banner (Decision Support) */}
          <div className="p-6 rounded-2xl bg-[#ebf7e8] border border-[#a3d99b] space-y-3 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#236d1f] uppercase">
              <CheckCircle2 className="w-4 h-4 text-[#277822]" />
              <span>RECOMMENDED ENGINEERING REVIEW ACTION (DECISION SUPPORT)</span>
            </div>
            <p className="text-sm text-slate-900 font-medium leading-relaxed">
              {selectedDossier.suggestedReviewAction}
            </p>
            <div className="flex flex-wrap items-center justify-between text-xs font-mono text-slate-600 pt-2 border-t border-[#bfe2ba]">
              <span>Read-Only Ingress: Zero automated control override. Engineering sign-off required.</span>
              <span className="text-[#236d1f] font-bold">Protocol Compliant</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
