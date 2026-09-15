import React, { useState } from 'react';
import { 
  Radio, 
  Layers, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sliders, 
  Cpu, 
  FileText, 
  Sparkles 
} from 'lucide-react';

export const SolutionPipeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      step: '01',
      title: 'Telemetry Ingestion',
      category: 'EDGE / PROTOCOL BUS',
      icon: Radio,
      summary: 'Ingest high-frequency sensor streams (OPC-UA, Modbus, MQTT Sparkplug B, Profinet) up to 100,000 events/sec with microsecond time alignment.',
      details: [
        'Multi-protocol edge connectors for legacy & modern PLCs',
        'Store-and-forward local ring buffering for zero data loss',
        'Dynamic frequency filtering (0.1 Hz – 12.8 kHz accelerometer passband)'
      ]
    },
    {
      step: '02',
      title: 'Signal Normalization',
      category: 'STREAM COMPUTATION',
      icon: Sliders,
      summary: 'Continuous time-drift correction, FFT spectral transforms, RMS calculation, and signal quality scoring across distributed gateways.',
      details: [
        'Microsecond NTP / PTP clock synchronization',
        'Real-time Fast Fourier Transform (FFT) harmonic peak extraction',
        'Outlier clipping and noise floor suppression'
      ]
    },
    {
      step: '03',
      title: 'Asset Context Binding',
      category: 'ISA-95 DIGITAL TWIN',
      icon: Layers,
      summary: 'Map raw telemetry streams to physical machine component hierarchies, operating load states (roughing vs finishing), and CMMS work order history.',
      details: [
        '6-level ISA-95 model: Site → Plant → Line → Machine → Component → Sensor',
        'Real-time machine state classifier (High Load, Idle, Tool Change)',
        'Automated SAP PM / IBM Maximo / MaintainX work order linkage'
      ]
    },
    {
      step: '04',
      title: 'Condition Intelligence',
      category: 'MATHEMATICAL ENVELOPING',
      icon: Activity,
      summary: 'Track dynamic Gaussian baseline envelopes tailored to current operating load, computing a 0–100 multivariate deviation score.',
      details: [
        'Adaptive baseline envelopes that adjust dynamically by machine state',
        'Discrimination between transient operational spikes and physical degradation',
        'Harmonic spectral pattern recognition (BPFO, BPFI, 1X/2X shaft harmonics)'
      ]
    },
    {
      step: '05',
      title: 'Engineering Decision Support',
      category: 'HUMAN-IN-THE-LOOP',
      icon: ShieldCheck,
      summary: 'Synthesize multi-sensor evidence dossiers for reliability engineers. 100% read-only architecture with zero autonomous control writeback.',
      details: [
        'Contextual anomaly evidence dossiers with waveform comparisons',
        'Clear root-cause suggestions for plant millwrights and reliability teams',
        'Audit-ready engineering review log and CMMS work order dispatch'
      ]
    }
  ];

  return (
    <section id="pipeline" className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-xs font-mono text-emerald-800 font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>5-STAGE CONTINUOUS PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            From Sensor Waveform <br />
            To <span className="text-emerald-700">Engineering Action.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Telemora processes signals through a structured, multi-layer intelligence pipeline that bridges the physical machine reality to human engineering review.
          </p>
        </div>

        {/* 5-Stage Stepper Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {stages.map((stage, idx) => {
            const IconComp = stage.icon;
            const isActive = activeStage === idx;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStage(idx)}
                className={`p-4 rounded-xl text-left transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-white border-emerald-600 shadow-md ring-2 ring-emerald-600/20'
                    : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-extrabold ${isActive ? 'text-emerald-700' : 'text-slate-400'}`}>
                    STAGE {stage.step}
                  </span>
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-emerald-700' : 'text-slate-400'}`} />
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  {stage.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-bold">
                STAGE {stages[activeStage].step} • {stages[activeStage].category}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {stages[activeStage].title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {stages[activeStage].summary}
              </p>

              <div className="space-y-2.5 pt-2">
                {stages[activeStage].details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Step Preview Container */}
            <div className="lg:col-span-5 p-5 rounded-xl bg-slate-900 text-white font-mono text-xs space-y-3">
              <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                <span>PIPELINE TELEMETRY TRACE</span>
                <span className="text-emerald-400 font-bold">STG-{stages[activeStage].step} OK</span>
              </div>

              <div className="space-y-2 bg-slate-950 p-3 rounded-lg border border-slate-800 text-[11px]">
                <div className="text-slate-400">INPUT: <span className="text-slate-200">OPC-UA / Modbus Ingress (12.8 kHz)</span></div>
                <div className="text-slate-400">PROCESS: <span className="text-emerald-400">{stages[activeStage].title}</span></div>
                <div className="text-slate-400">STAGE OUTPUT: <span className="text-white font-bold">{stages[activeStage].category}</span></div>
                <div className="text-slate-400">STATUS: <span className="text-emerald-400">Latency &lt; 2.4 ms (Nominal)</span></div>
              </div>

              <div className="text-[10px] text-slate-500 text-center pt-1">
                Zero Autonomous Actuation • Read-Only Telemetry Ingestion
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
