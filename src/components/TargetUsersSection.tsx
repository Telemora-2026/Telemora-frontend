import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Wrench, 
  Activity, 
  ShieldCheck, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Play, 
  Pause, 
  ChevronRight,
  ChevronLeft,
  Sparkles
} from 'lucide-react';
import heroTelemetryImg from '../assets/images/hero_telemetry_hub.jpg';
import digitalTwinImg from '../assets/images/digital_twin_telemetry.jpg';
import nvidiaEdgeImg from '../assets/images/nvidia_edge_compute.jpg';

export const TargetUsersSection: React.FC = () => {
  const [activePersona, setActivePersona] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [cycleKey, setCycleKey] = useState<number>(0);

  const personas = [
    {
      id: 'reliability',
      role: 'Plant & Reliability Engineers',
      category: 'ASSET DIAGNOSTICS & FFT',
      image: digitalTwinImg,
      icon: Activity,
      badge: '-84.6% False Alarms',
      tagline: 'Detect harmonic bearing cage defects weeks before catastrophic spindle failure.',
      stats: [
        { label: 'Sampling Burst', value: '12.8 kHz' },
        { label: 'Warning Lead', value: '3–6 Wks' },
        { label: 'Alarm Cut', value: '84.6%' }
      ],
      theFriction: 'Nuisance vibration alarms trigger alert fatigue, while high-frequency harmonic cage defects (BPFO/BPFI) go unnoticed in standard historians.',
      telemoraSolution: 'Dynamic ±3σ Gaussian baseline envelopes automatically learn operating cycles (Roughing vs Finishing) to isolate true spectral anomalies.',
      capabilities: [
        'Automatic 12.8 kHz high-speed FFT spectrum decomposition',
        'State-dependent dynamic Gaussian baseline envelopes',
        'Bearing defect pattern identification (BPFO, BPFI, BSF, FTF)'
      ]
    },
    {
      id: 'maintenance',
      role: 'Maintenance & Millwright Teams',
      category: 'PRECISION WORK ORDERS & CMMS',
      image: heroTelemetryImg,
      icon: Wrench,
      badge: '< 2.0s CMMS Sync',
      tagline: 'Replace guesswork tear-downs with condition-verified work orders tied to SAP PM & Maximo.',
      stats: [
        { label: 'Unplanned Drops', value: 'Zero Outages' },
        { label: 'CMMS Sync', value: '< 2.0s' },
        { label: 'Tear-Down Waste', value: '-42% Time' }
      ],
      theFriction: 'Millwrights waste shift hours tearing down healthy machines on arbitrary calendar schedules while unaligned bearings seize unexpectedly.',
      telemoraSolution: 'Direct correlation between live telemetry spikes and recent maintenance logs generates high-conviction condition work orders with exact failure modes.',
      capabilities: [
        'Automated SAP PM, IBM Maximo & MaintainX work orders',
        'Root cause diagnostic evidence attached to every ticket',
        'Post-repair baseline validation to ensure alignment accuracy'
      ]
    },
    {
      id: 'ot-iot',
      role: 'OT & Industrial IoT Engineers',
      category: 'AIR-GAPPED INGRESS & PROTOCOLS',
      image: nvidiaEdgeImg,
      icon: ShieldCheck,
      badge: '0.00% Writeback Risk',
      tagline: 'Ingest multi-vendor fieldbus telemetry non-invasively through 100% read-only optical diodes.',
      stats: [
        { label: 'Protocols', value: 'OPC-UA / MQTT' },
        { label: 'Ring Buffer', value: '72-Hr Offline' },
        { label: 'Control Risk', value: '0.00% Write' }
      ],
      theFriction: 'Cloud IoT integrations present severe OT cybersecurity risks of command writebacks that could compromise certified machine safety loops.',
      telemoraSolution: 'Hardware-enforced optical data diode isolation guarantees strictly unidirectional egress without PLC control override risk.',
      capabilities: [
        'IEC 62443 SL-2 certified physical optical diode isolation',
        'Universal fieldbus ingestion (OPC-UA, Modbus TCP, MQTT)',
        'Local fanless edge compute with 72-hr store-and-forward buffers'
      ]
    },
    {
      id: 'executive',
      role: 'Operations Leaders & Plant Directors',
      category: 'ENTERPRISE FLEET OEE & ROI',
      image: heroTelemetryImg,
      icon: Building2,
      badge: '$640k+ Annual Saved',
      tagline: 'Benchmark identical machine lines across global manufacturing sites and protect plant yield.',
      stats: [
        { label: 'Site Coverage', value: '8 Facilities' },
        { label: 'Line OEE Boost', value: '+7.4%' },
        { label: 'Annual Saved', value: '$640k+' }
      ],
      theFriction: 'Plant leaders lack unified visibility across distributed factories, resulting in unpredictable maintenance budget overruns and lost batches.',
      telemoraSolution: 'Standardized ISA-95 equipment hierarchies provide executive dashboards comparing asset health and downtime risk across all plants.',
      capabilities: [
        'Standardized multi-facility asset health benchmarking',
        'Executive downtime risk dashboards and provable ROI reporting',
        'Predictable capital allocation based on actual machine health'
      ]
    }
  ];

  const total = personas.length;

  // Auto-carousel transition timer (4.5 seconds)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActivePersona((prev) => (prev + 1) % total);
      setCycleKey((prev) => prev + 1);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, total]);

  const current = personas[activePersona];

  return (
    <section 
      id="use-cases" 
      className="py-24 bg-[#fafdf9] border-b border-slate-200 relative overflow-hidden font-sans"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-35" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#277822]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 pb-6 border-b border-[#cfe3cc]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ebf7e8] border border-[#a8da9f] text-xs font-mono text-[#236d1f] font-bold shadow-xs">
              <Users className="w-4 h-4 text-[#277822]" />
              <span>USE CASES &amp; TARGET PERSONAS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Engineered For Every Role In <br />
              <span className="text-[#277822]">Industrial Operations</span>
            </h2>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3 font-mono text-xs">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="px-3.5 py-2 rounded-2xl bg-white border border-[#cfe3cc] hover:border-[#277822] text-[#236d1f] font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-xs"
              title={isAutoPlaying ? "Pause Carousel" : "Resume Carousel"}
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#277822]" />
                  <span>Auto (4.5s)</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#277822]" />
                  <span>Resume</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setActivePersona((prev) => (prev - 1 + total) % total);
                  setCycleKey((prev) => prev + 1);
                  setIsAutoPlaying(false);
                }}
                className="p-2.5 rounded-2xl bg-white border border-[#cfe3cc] hover:border-[#277822] text-slate-700 hover:text-[#277822] transition-all cursor-pointer shadow-xs"
                title="Previous Persona"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => {
                  setActivePersona((prev) => (prev + 1) % total);
                  setCycleKey((prev) => prev + 1);
                  setIsAutoPlaying(false);
                }}
                className="p-2.5 rounded-2xl bg-[#277822] hover:bg-[#1e6019] text-white transition-all cursor-pointer shadow-md shadow-[#277822]/20"
                title="Next Persona"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2-COLUMN PANORAMIC SPLIT LAYOUT (LEFT 4-TIER LIST + RIGHT HERO CONSOLE)   */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: 4 VERTICAL PERSONA STEP SLABS (4 COLS) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-3 font-mono text-xs">
            {personas.map((p, idx) => {
              const IconComp = p.icon;
              const isSelected = activePersona === idx;

              return (
                <button
                  key={p.id}
                  onClick={() => {
                    setActivePersona(idx);
                    setCycleKey((prev) => prev + 1);
                    setIsAutoPlaying(false);
                  }}
                  className={`p-4 rounded-2xl border-2 text-left transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden flex-1 ${
                    isSelected
                      ? 'bg-white border-[#277822] shadow-lg ring-2 ring-[#a8da9f]/40 scale-[1.02]'
                      : 'bg-white/80 border-[#cfe3cc] hover:border-[#a8da9f] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                        isSelected ? 'bg-[#277822] text-white shadow-xs' : 'bg-[#ebf7e8] text-[#277822]'
                      }`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${
                        isSelected ? 'text-[#236d1f]' : 'text-slate-500'
                      }`}>
                        0{idx + 1} • {p.category.split('&')[0]}
                      </span>
                    </div>

                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#277822] translate-x-1' : 'text-slate-300'
                    }`} />
                  </div>

                  <h3 className="font-black text-sm text-slate-950 font-sans tracking-tight leading-snug mt-1">
                    {p.role}
                  </h3>

                  {/* Animated Timer Progress Line */}
                  <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden mt-2 relative">
                    {isSelected && isAutoPlaying && (
                      <div 
                        key={cycleKey}
                        className="absolute inset-y-0 left-0 bg-[#277822] animate-[progress_4.5s_linear_infinite]" 
                      />
                    )}
                    {isSelected && !isAutoPlaying && (
                      <div className="h-full w-full bg-[#277822]" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT: GIANT HIGH-TECH PERSONA SHOWCASE CONSOLE (8 COLS) */}
          <div className="lg:col-span-8 p-6 sm:p-9 rounded-3xl bg-white border-2 border-[#cfe3cc] shadow-2xl space-y-6 flex flex-col justify-between relative overflow-hidden">
            
            {/* Top Visual Banner with HUD Overlay */}
            <div className="relative h-60 sm:h-64 rounded-2xl overflow-hidden bg-slate-950 border border-[#a8da9f] shadow-lg group">
              <img 
                src={current.image} 
                alt={current.role} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-slate-900/90 border border-white/20 text-[#a8da9f] text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-[#277822] animate-pulse" />
                    <span>{current.category}</span>
                  </span>

                  <span className="px-3 py-1 rounded-full bg-[#277822] text-white text-[10px] font-mono font-bold shadow-md">
                    {current.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-sans tracking-tight">
                    {current.role}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-200 font-sans mt-0.5">
                    {current.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* Friction vs Solution 2-Column Split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
              <div className="p-4 rounded-2xl bg-[#fdfaf8] border border-orange-200 space-y-1">
                <span className="text-[10px] font-mono font-bold text-orange-700 uppercase tracking-wider block">
                  THE OPERATIONAL FRICTION:
                </span>
                <p className="text-slate-700 leading-relaxed text-xs">
                  {current.theFriction}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#ebf7e8] border border-[#a8da9f] space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#236d1f] uppercase tracking-wider block">
                  TELEMORA INTELLIGENCE:
                </span>
                <p className="text-slate-800 font-medium leading-relaxed text-xs">
                  {current.telemoraSolution}
                </p>
              </div>
            </div>

            {/* 3 Metric Pills & Action Trigger */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                {current.stats.map((s, sIdx) => (
                  <div key={sIdx} className="p-2.5 px-3 rounded-xl bg-[#fafdf9] border border-[#cfe3cc] text-center flex-1 sm:flex-initial">
                    <div className="text-sm font-black text-[#277822]">{s.value}</div>
                    <div className="text-[9px] text-slate-500 uppercase font-semibold">{s.label}</div>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#277822] hover:bg-[#1e6019] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 shrink-0"
              >
                <span>Request Briefing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
