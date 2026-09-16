import React from 'react';
import { 
  TrendingDown, 
  Clock, 
  ShieldCheck, 
  DollarSign, 
  Check, 
  X, 
  Minus, 
  Award,
  Zap,
  BarChart3
} from 'lucide-react';

export const ProductMetrics: React.FC = () => {
  const kpis = [
    {
      metric: '-74%',
      title: 'Unplanned Plant Downtime',
      description: 'Eliminates unexpected spindle seizures, bearing fractures, and motor burnouts through early dynamic anomaly warnings.',
      icon: TrendingDown
    },
    {
      metric: '10x',
      title: 'Faster Diagnostic Speed',
      description: 'Instant correlation between high-speed waveform sidebands and maintenance histories replaces manual vibration route analysis.',
      icon: Clock
    },
    {
      metric: '0.00%',
      title: 'Control Loop Risk',
      description: 'Strict hardware-enforced optical diode isolation ensures zero risk of command injection or PLC communication interference.',
      icon: ShieldCheck
    },
    {
      metric: '$420k',
      title: 'Avg. Annual Line Savings',
      description: 'Quantifiable operational cost reduction across scrap elimination, extended tooling life, and scheduled maintenance windows.',
      icon: DollarSign
    }
  ];

  const comparisonRows = [
    {
      feature: 'Dynamic Cutting-State Adaptive Baselines',
      traditionalScada: 'Static fixed threshold',
      cloudIot: 'Generic rolling average',
      telorix: 'Real-time state-dependent ±3σ Gaussian envelope'
    },
    {
      feature: 'High-Speed Vibration Waveform Ingestion',
      traditionalScada: '1 Hz or slower average',
      cloudIot: '10–50 Hz downsampled',
      telorix: '12.8 kHz continuous burst with cuFFT decomposition'
    },
    {
      feature: 'OT Network Control Loop Safety',
      traditionalScada: 'Direct PLC connection (high risk)',
      cloudIot: 'Bidirectional MQTT broker',
      telorix: '100% read-only optical diode & air-gap architecture'
    },
    {
      feature: 'Enterprise ISA-95 Contextual Graph',
      traditionalScada: 'Unstructured register tags',
      cloudIot: 'Flat cloud time-series JSON',
      telorix: 'Native ISA-95 hierarchical asset digital twin'
    },
    {
      feature: 'False Positive / Nuisance Alarm Rate',
      traditionalScada: 'High (> 65% false alerts)',
      cloudIot: 'Moderate (threshold fatigue)',
      telorix: '< 3.8% (96.2% nuisance alarm reduction)'
    },
    {
      feature: 'Automated CMMS / Work Order Staging',
      traditionalScada: 'Manual notification',
      cloudIot: 'Basic webhook triggers',
      telorix: 'Closed-loop diagnostic dossiers for SAP PM & Maximo'
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-30" />
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#277822]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ebf7e8] border border-[#a8da9f] text-xs font-mono text-[#236d1f] font-bold mb-4 shadow-xs">
            <Award className="w-4 h-4 text-[#277822]" />
            <span>MEASURABLE RELIABILITY IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-sans mb-4">
            Proven Quantitative Impact Across <br />
            <span className="text-[#277822]">Heavy Industrial Facilities.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Engineered to deliver rapid payback within 90 days of edge gateway deployment by eliminating the highest-cost failure modes in manufacturing.
          </p>
        </div>

        {/* 4 Big KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {kpis.map((kpi, idx) => {
            const Icon = kpi.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-white border-2 border-[#cfe3cc] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#f2f9f1] border border-[#a8da9f] flex items-center justify-center text-[#277822] mb-4 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-black font-mono text-slate-950 tracking-tight mb-2">
                    {kpi.metric}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-sans mb-2">
                    {kpi.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    {kpi.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Verified Plant Metric</span>
                  <span className="text-[#277822] font-bold">Benchmark</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Matrix: SCADA vs Cloud IoT vs Telorix */}
        <div className="rounded-3xl bg-white border-2 border-[#cfe3cc] shadow-xl overflow-hidden">
          <div className="p-6 sm:p-8 bg-[#fafdf9] border-b border-[#cfe3cc]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#277822]">
              ARCHITECTURAL BENCHMARKING
            </span>
            <h3 className="text-2xl font-extrabold text-slate-950 font-sans mt-1">
              Why Generic IoT Platforms Fail on the Plant Floor
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-sans mt-1">
              Comparing legacy monitoring tools with Telorix autonomous telemetry intelligence.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 font-mono text-xs text-slate-700">
                  <th className="p-4 sm:p-5 font-bold">OPERATIONAL CAPABILITY</th>
                  <th className="p-4 sm:p-5 font-medium text-slate-500">TRADITIONAL SCADA</th>
                  <th className="p-4 sm:p-5 font-medium text-slate-500">GENERIC CLOUD IOT</th>
                  <th className="p-4 sm:p-5 font-bold text-[#236d1f] bg-[#f2f9f1] border-x border-[#cfe3cc]">
                    TELORIX AUTONOMOUS AI
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-sans">
                {comparisonRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-slate-900">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-500 font-mono">
                      {row.traditionalScada}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-500 font-mono">
                      {row.cloudIot}
                    </td>
                    <td className="p-4 sm:p-5 font-bold text-slate-900 bg-[#fbfdfa] border-x border-[#cfe3cc] font-mono">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#277822] shrink-0" />
                        <span>{row.telorix}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
