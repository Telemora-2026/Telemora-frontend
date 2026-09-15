import React from 'react';
import { 
  ShieldCheck, 
  Activity, 
  Layers, 
  Cpu, 
  Zap, 
  Server, 
  CheckCircle2 
} from 'lucide-react';

export const ValueStrip: React.FC = () => {
  const pillars = [
    {
      icon: Activity,
      title: 'High-Frequency Ingestion',
      metric: '100k msg/s',
      desc: 'Sub-millisecond stream ingestion with microsecond time-drift correction for high-rate vibration.'
    },
    {
      icon: Layers,
      title: 'ISA-95 Semantic Twin',
      metric: '6 Hierarchy Levels',
      desc: 'Transforms isolated raw PLC tags into equipment context: Site → Line → Machine → Component.'
    },
    {
      icon: Cpu,
      title: 'Contextual Anomaly Engine',
      metric: '0-100 Deviation Score',
      desc: 'Evaluates dynamic Gaussian baseline envelopes tailored to real-time machine cutting states.'
    },
    {
      icon: ShieldCheck,
      title: 'Read-Only Safety Barrier',
      metric: 'Zero OT Risk',
      desc: 'Strict unidirectional telemetry ingestion. Pure decision-support with no autonomous writeback.'
    }
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-emerald-500/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 group-hover:scale-105 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    {p.metric}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
