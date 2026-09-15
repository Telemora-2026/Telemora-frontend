import React from 'react';
import { 
  Zap, 
  Activity, 
  Cpu, 
  Layers, 
  Sliders, 
  ShieldCheck, 
  FileText, 
  Clock, 
  CheckCircle2 
} from 'lucide-react';

export const TechCapabilities: React.FC = () => {
  const capabilities = [
    {
      icon: Activity,
      title: 'High-Frequency Spectral FFT Engine',
      subtitle: '0.1 Hz to 12.8 kHz Passband',
      description: 'Continuous spectral decomposition extracting peak frequencies, harmonic multiples (1X, 2X, 3X), and bearing defect signatures (BPFO, BPFI, BSF) in real time.',
      specs: ['12.8 kHz continuous burst processing', 'Sub-harmonic peak isolation', 'Automated sideband modulation detection']
    },
    {
      icon: Sliders,
      title: 'Adaptive Gaussian Baseline Enveloping',
      subtitle: 'State-Dependent Envelopes',
      description: 'Discriminates between normal operational transients (e.g. tool plunge, roughing passes) and genuine mechanical degradation, eliminating nuisance alarms.',
      specs: ['99.7% Gaussian confidence bounds', 'State-aware dynamic thresholds', 'Multi-sensor covariance modeling']
    },
    {
      icon: Clock,
      title: 'Temporal Microsecond Synchronization',
      subtitle: 'IEEE 1588 PTP / Microsecond Drift',
      description: 'Synchronizes distributed multi-gateway data streams with sub-millisecond precision, ensuring exact temporal alignment for cross-sensor correlation.',
      specs: ['PTP Hardware timestamping', 'Drift compensation & jitter filtering', 'Deterministic chronological ordering']
    },
    {
      icon: FileText,
      title: 'Bidirectional Enterprise CMMS Sync',
      subtitle: 'SAP PM, Maximo & MaintainX',
      description: 'Automatically links real-time machine alarms to previous work orders, maintenance logs, and spare part replacements for complete operational context.',
      specs: ['Pre-built REST & Webhook connectors', 'Automatic work order dispatch', 'Historical maintenance audit trail']
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-xs font-mono text-emerald-800 font-bold mb-3">
            <Zap className="w-3.5 h-3.5 text-emerald-700" />
            <span>ENGINEERING SPECIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Built For Mechanical Rigor <br />
            <span className="text-emerald-700">& Plant Reliability.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Detailed engineering specifications designed to satisfy rotating equipment specialists, vibration analysts, and plant automation engineers.
          </p>
        </div>

        {/* 4 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((cap, idx) => {
            const IconComp = cap.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                    {cap.subtitle}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {cap.specs.map((sp, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs font-mono text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{sp}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
