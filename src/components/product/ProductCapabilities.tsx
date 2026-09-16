import React, { useState } from 'react';
import { 
  Activity, 
  Cpu, 
  Database, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  AlertCircle,
  FileCheck,
  Zap,
  Sliders,
  ShieldCheck,
  BarChart3
} from 'lucide-react';

export const ProductCapabilities: React.FC = () => {
  const [activeEngineTab, setActiveEngineTab] = useState<number>(0);

  const engines = [
    {
      id: 'anomaly-engine',
      name: 'Dynamic Contextual Anomaly Engine',
      subtitle: 'Eliminate false positives with state-aware baseline envelopes',
      badge: 'CORE INFERENCE',
      icon: Activity,
      summary: 'Traditional industrial thresholds trigger constant false alarms when machines shift operating states. Telorix continuously models dynamic Gaussian ±3σ baseline envelopes calibrated directly to real-time machine cutting passes, spindle speeds, and feed rates.',
      highlights: [
        'Dynamic ±3σ envelopes that flex automatically across idle, roughing, and finishing cuts',
        '96.2% reduction in nuisance alarm fatigue across high-mix production lines',
        'State-dependent covariance tracking isolating genuine mechanical degradation',
        'Instant sensitivity adaptation without requiring manual recalibration cycles'
      ],
      metrics: [
        { label: 'Alarm Fatigue Reduction', value: '96.2%' },
        { label: 'Evaluation Speed', value: '< 2.4 ms' },
        { label: 'Baseline Flexibility', value: 'Dynamic ±3σ' }
      ]
    },
    {
      id: 'spectral-intelligence',
      name: 'Spectral Waveform & Vibration Intelligence',
      subtitle: 'High-speed 12.8 kHz frequency decomposition and harmonic tracking',
      badge: 'DIGITAL SIGNAL PROCESSING',
      icon: Cpu,
      summary: 'Raw high-frequency vibration streams contain earliest signatures of mechanical wear. Telorix performs accelerated Fast Fourier Transform (FFT) analysis directly on high-speed bursts to detect micro-flaking, unbalance, and misalignment weeks before thermal rise.',
      highlights: [
        'Continuous 12.8 kHz burst sampling capturing micro-impact transients',
        'Automated isolation of bearing fault frequencies (BPFO, BPFI, BSF, FTF)',
        'Harmonic sideband and gear mesh frequency (GMF) tracking under dynamic loads',
        'ISO 10816 & ISO 20816 vibration severity class automatic classification'
      ],
      metrics: [
        { label: 'Sampling Burst Rate', value: '12.8 kHz' },
        { label: 'Harmonic Tracking', value: '0.1 Hz – 10 kHz' },
        { label: 'Earliest Detection', value: '21–35 Days' }
      ]
    },
    {
      id: 'isa95-asset-graph',
      name: 'ISA-95 Enterprise Asset Graph',
      subtitle: 'Unifying sensor tags into operational enterprise plant hierarchy',
      badge: 'TOPOLOGY & CONTEXT',
      icon: Layers,
      summary: 'Raw telemetry tags lack critical context. Telorix transforms fragmented time-series streams into unified ISA-95 hierarchical data models, linking physical sensors to Enterprise > Site > Area > Line > Cell > Asset levels.',
      highlights: [
        'Multi-protocol ingest normalization (OPC-UA, Modbus TCP, MQTT Sparkplug B)',
        'Instant multi-axis correlation connecting motor current with spindle vibration',
        'Digital twin topology mapping multi-vendor machine tools and peripheral pumps',
        'Lossless edge-to-cloud schema consistency for enterprise-wide visibility'
      ],
      metrics: [
        { label: 'Hierarchy Standard', value: 'ISA-95 / IEC 62264' },
        { label: 'Tag Mapping Latency', value: 'Sub-second' },
        { label: 'Supported Protocols', value: '15+ Fieldbuses' }
      ]
    },
    {
      id: 'cmms-dossier',
      name: 'Root-Cause Dossiers & CMMS Dispatch',
      subtitle: 'Automated diagnostic reports and closed-loop maintenance execution',
      badge: 'MAINTENANCE EXECUTION',
      icon: FileCheck,
      summary: 'Detecting an anomaly is only half the battle. Telorix automatically correlates sensor deviations with past work-order histories, generates forensic diagnostic dossiers, and stages prioritized maintenance orders in your enterprise CMMS.',
      highlights: [
        'Deterministic Asset Health Scores (0-100%) with component-level degradation indices',
        'Remaining Useful Life (RUL) estimation with probabilistic confidence bounds',
        'Automated work-order drafting pre-populated with replacement bearing part numbers',
        'Seamless bidirectional integration with SAP PM, IBM Maximo, and Infor EAM'
      ],
      metrics: [
        { label: 'Diagnostic Speedup', value: '10x Faster' },
        { label: 'ERP / CMMS Sync', value: 'SAP, Maximo, Infor' },
        { label: 'Work-Order Drafting', value: 'Automated' }
      ]
    }
  ];

  const current = engines[activeEngineTab];
  const CurrentIcon = current.icon;

  return (
    <section id="capabilities" className="py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-40" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#277822]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ebf7e8] border border-[#a8da9f] text-xs font-mono text-[#236d1f] font-bold mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-[#277822]" />
            <span>INTELLIGENT OPERATIONAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-sans mb-4">
            Four Core Engines Delivering <br />
            <span className="text-[#277822]">Unrivaled Asset Intelligence.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Engineered specifically for plant reliability engineers, operations directors, and maintenance teams who require deterministic condition insights instead of noisy threshold alerts.
          </p>
        </div>

        {/* Engine Selection Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {engines.map((engine, idx) => {
            const isSelected = activeEngineTab === idx;
            const Icon = engine.icon;
            return (
              <button
                key={engine.id}
                onClick={() => setActiveEngineTab(idx)}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#277822] shadow-xl ring-2 ring-[#277822]/20 scale-[1.02]'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#f2f9f1] text-[#236d1f] border border-[#a8da9f]">
                      {engine.badge}
                    </span>
                    <Icon className={`w-5 h-5 ${isSelected ? 'text-[#277822]' : 'text-slate-400'}`} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-sans mb-1">
                    {engine.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-sans line-clamp-2">
                    {engine.subtitle}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 font-semibold">Engine 0{idx + 1}</span>
                  <span className={`flex items-center gap-1 font-bold ${isSelected ? 'text-[#277822]' : 'text-slate-400'}`}>
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Engine Detailed Showcase Panel */}
        <div className="rounded-3xl bg-white border-2 border-[#cfe3cc] p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Engine Details & Capabilities (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f2f9f1] border border-[#a8da9f] text-[11px] font-mono font-bold text-[#236d1f] mb-3">
                  <CurrentIcon className="w-3.5 h-3.5" />
                  <span>TELORIX CORE MODULE • {current.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-sans">
                  {current.name}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-sans mt-3 leading-relaxed">
                  {current.summary}
                </p>
              </div>

              {/* Highlight Bullets */}
              <div className="space-y-3">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  KEY PRODUCTION CAPABILITIES:
                </div>
                {current.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-[#277822] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Metric Highlights Banner */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                {current.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="p-3.5 rounded-xl bg-[#fafdf9] border border-[#cfe3cc] text-center font-mono">
                    <div className="text-[10px] text-slate-500 font-semibold uppercase">{m.label}</div>
                    <div className="text-sm sm:text-base font-extrabold text-[#277822] mt-1">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Operational Diagram & Live Preview Box (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-slate-950 text-white font-mono text-xs border border-slate-800 space-y-4 shadow-2xl">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-[11px] font-bold text-[#a8da9f]">
                    SYSTEM TELEMETRY AUDIT
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/60 text-emerald-400 text-[10px]">
                    NOMINAL STATE
                  </span>
                </div>

                <div className="space-y-2.5">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-400">Contextual Asset:</span>
                    <span className="text-white font-semibold">5-Axis Spindle #02</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-400">Operating Envelope:</span>
                    <span className="text-emerald-400 font-bold">Dynamic ±3σ Bound</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-400">Harmonic Variance:</span>
                    <span className="text-white font-bold">&lt; 0.04 RMS mm/s</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-400">False-Alarm Suppress:</span>
                    <span className="text-[#a8da9f] font-bold">Active (96.2% Eff.)</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[10px] text-slate-300 leading-relaxed">
                  <span className="text-emerald-400 font-bold block mb-1">AUTOMATED AUDIT LOG:</span>
                  Baseline recalculated at 12,450 RPM spindle speed. Bearing BPFO harmonic monitored at 148.5 Hz. No threshold trip initiated.
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">Live Hub Link:</span>
                  <a
                    href="https://hub.telemora.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a8da9f] hover:underline flex items-center gap-1 font-bold"
                  >
                    <span>hub.telemora.net</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

              </div>

              {/* Safety Guarantee Callout */}
              <div className="p-4 rounded-xl bg-[#f2f9f1] border border-[#a8da9f] flex items-center gap-3 text-xs font-mono text-[#236d1f]">
                <ShieldCheck className="w-5 h-5 text-[#277822] shrink-0" />
                <span>Non-invasive telemetry ingestion guarantees 100% read-only OT network safety.</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
