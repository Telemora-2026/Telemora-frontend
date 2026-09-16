import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Workflow, 
  AlertTriangle, 
  FileText, 
  Cog, 
  ShieldCheck, 
  Activity, 
  ChevronRight,
  TrendingDown,
  Clock,
  DollarSign
} from 'lucide-react';

export const ProductWorkflow: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<number>(0);

  const pipelineStages = [
    {
      step: '01',
      title: 'Non-Invasive Ingestion',
      desc: 'High-speed 12.8 kHz accelerometer burst captures & fieldbus polling via physical read-only optical diodes.'
    },
    {
      step: '02',
      title: 'ISA-95 Normalization',
      desc: 'Raw tags unified into enterprise plant hierarchy (Enterprise > Site > Line > Cell > Asset) with state classification.'
    },
    {
      step: '03',
      title: 'Dynamic Anomaly Inference',
      desc: 'Multivariate ±3σ Gaussian baseline envelopes and cuFFT spectral decomposition isolate harmonic fault sidebands.'
    },
    {
      step: '04',
      title: 'Automated CMMS Dispatch',
      desc: 'Deterministic health scores generate forensic dossiers and dispatch maintenance work orders in SAP PM/Maximo.'
    }
  ];

  const plantScenarios = [
    {
      id: 'scenario-cnc',
      machine: '5-Axis Aerospace Milling Spindle (CNC-5AX-04)',
      industry: 'Aerospace & Defense Precision Machining',
      issue: 'Spindle Roller Bearing Inner Race Micro-Flaking',
      detectedEarlyBy: '24 Days Ahead of Thermal Seizure',
      avoidedLoss: '$86,400 (Prevented Tool Crash & Scrap)',
      inputSymptoms: [
        'Spindle RPM fluctuating slightly during heavy titanium roughing passes (12,450 RPM)',
        'Traditional SCADA vibration threshold (2.5 mm/s) showed no overall alarm'
      ],
      telorixDetection: [
        'Isolated 148.5 Hz harmonic sideband matching Bearing Pass Frequency Inner (BPFI)',
        'Dynamic Gaussian envelope detected 1.42 mm/s amplitude exceeding ±3σ cutting state bound'
      ],
      automatedAction: 'Created Priority WO-8821 in SAP PM with recommended bearing SKU #7014-C-2RZ and lubrication check scheduled for weekend shift change.'
    },
    {
      id: 'scenario-pump',
      machine: 'High-Pressure Chemical Slurry Pump (PUMP-HT01)',
      industry: 'Specialty Chemical & Petrochemical Refining',
      issue: 'Impeller Cavitation & Dynamic Mechanical Seal Wear',
      detectedEarlyBy: '18 Days Ahead of Hazardous Leak',
      avoidedLoss: '$142,000 (Avoided Environmental Hazmat Cleanup)',
      inputSymptoms: [
        'Batch viscosity change during chemical blending cycle causing dynamic inlet pressure drop',
        'Conventional pressure transmitter alarms ignored by operators as transient batch variation'
      ],
      telorixDetection: [
        'High-frequency acoustic burst sensor (8.4 kHz) identified turbulent bubble collapse micro-shocks',
        'Asset Health Score automatically downgraded from 96% to 74% with cavitation flag'
      ],
      automatedAction: 'Dispatched automated alert to DCS control board to throttle inlet valve by 12% and scheduled mechanical seal inspection in IBM Maximo.'
    },
    {
      id: 'scenario-press',
      machine: 'Automotive Servo Stamping Press (PRESS-600T-02)',
      industry: 'High-Volume Automotive Body-in-White Stamping',
      issue: 'Planetary Gearbox Harmonic Backlash & Lubricant Starvation',
      detectedEarlyBy: '31 Days Ahead of Gear Tooth Fracture',
      avoidedLoss: '$210,000 (Avoided 14 Hours Unscheduled Line Stoppage)',
      inputSymptoms: [
        'Cycle stroke rate at 42 strokes/min with intermittent torque spiking on Ram #2',
        'Standard PLC current monitoring showed nominal average motor draw'
      ],
      telorixDetection: [
        'Phase angle cross-correlation between servo encoder position and acceleration waveform detected 3x Gear Mesh Frequency (GMF)',
        'Sub-harmonic resonance peak of 86 Hz identified severe gear teeth clearance drift'
      ],
      automatedAction: 'Flagged impending gear tooth spalling; staged automatic lubrication flush work order and lubricant replenishment notification.'
    }
  ];

  const active = plantScenarios[activeScenario];

  return (
    <section id="workflow" className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-30" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#277822]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2f9f1] border border-[#a8da9f] text-xs font-mono text-[#236d1f] font-bold mb-4 shadow-xs">
            <Workflow className="w-4 h-4 text-[#277822]" />
            <span>OPERATIONAL WORKFLOW &amp; REAL-WORLD SCENARIOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-sans mb-4">
            How Telorix Operates on Your Plant Floor <br />
            <span className="text-[#277822]">From Raw Signal to Solved Problem.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            See how high-speed edge telemetry flows seamlessly into contextual intelligence, preventing catastrophic mechanical failures before production line disruption occurs.
          </p>
        </div>

        {/* 4-Stage Horizontal Pipeline Visualizer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {pipelineStages.map((stage, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl bg-[#fafdf9] border border-[#cfe3cc] relative flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-mono text-[#277822]">
                    {stage.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#277822]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-sans mb-2">
                  {stage.title}
                </h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  {stage.desc}
                </p>
              </div>

              {idx < pipelineStages.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[#a8da9f]">
                  <ChevronRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Interactive Scenario Explorer */}
        <div className="rounded-3xl bg-[#f8faf8] border-2 border-[#cfe3cc] p-6 sm:p-10 shadow-lg">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#277822]">
                INTERACTIVE INDUSTRIAL PROOFS
              </span>
              <h3 className="text-2xl font-black text-slate-950 font-sans mt-1">
                Real-World Failure Prevention Scenarios
              </h3>
            </div>

            {/* Scenario Switcher Buttons */}
            <div className="flex flex-wrap gap-2">
              {plantScenarios.map((sc, scIdx) => (
                <button
                  key={sc.id}
                  onClick={() => setActiveScenario(scIdx)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    activeScenario === scIdx
                      ? 'bg-[#277822] text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-300 hover:border-slate-400'
                  }`}
                >
                  Scenario 0{scIdx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Active Scenario Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Machine Profile & Economic Outcome (5 Cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="p-6 rounded-2xl bg-white border border-[#cfe3cc] shadow-sm space-y-4">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#277822] bg-[#f2f9f1] px-2.5 py-1 rounded border border-[#a8da9f]">
                    {active.industry}
                  </span>
                  <h4 className="text-xl font-black text-slate-900 font-sans mt-2">
                    {active.machine}
                  </h4>
                  <p className="text-xs text-rose-600 font-mono font-bold mt-1">
                    Defect: {active.issue}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#277822]" />
                      Early Detection Lead:
                    </span>
                    <span className="font-bold text-slate-900">{active.detectedEarlyBy}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-[#277822]" />
                      Verified Downtime Savings:
                    </span>
                    <span className="font-bold text-emerald-700">{active.avoidedLoss}</span>
                  </div>
                </div>
              </div>

              {/* Read-Only Safety Assurance */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-600 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#277822] shrink-0" />
                <span>Diagnostics run in parallel without touching machine control safety interlocks.</span>
              </div>
            </div>

            {/* Right: Forensic Comparison (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              {/* Symptoms under traditional SCADA */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="text-xs font-mono font-bold text-amber-700 flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>TRADITIONAL SCADA / STATIC THRESHOLD BEHAVIOR:</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-600 font-sans">
                  {active.inputSymptoms.map((sym, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Telorix AI Contextual Detection */}
              <div className="p-5 rounded-2xl bg-[#fafdf9] border-2 border-[#a8da9f] shadow-sm">
                <div className="text-xs font-mono font-bold text-[#236d1f] flex items-center gap-2 mb-2">
                  <Activity className="w-4 h-4 text-[#277822]" />
                  <span>TELORIX AUTONOMOUS AI DETECTION:</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-800 font-sans font-medium">
                  {active.telorixDetection.map((det, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#277822] shrink-0 mt-0.5" />
                      <span>{det}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Automated Resolution Outcome */}
              <div className="p-5 rounded-2xl bg-slate-950 text-white font-mono text-xs border border-slate-800">
                <div className="text-[11px] font-bold text-[#a8da9f] flex items-center gap-2 mb-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>CLOSED-LOOP CMMS ACTION TRIGGERED:</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed font-sans">
                  {active.automatedAction}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
