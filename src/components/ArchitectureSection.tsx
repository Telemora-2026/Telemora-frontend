import React, { useState, useEffect } from 'react';
import { 
  Radio, 
  Server, 
  Database, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  Play, 
  Pause, 
  Activity,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import heroTelemetryImg from '../assets/images/hero_telemetry_hub.jpg';
import digitalTwinImg from '../assets/images/digital_twin_telemetry.jpg';
import nvidiaEdgeImg from '../assets/images/nvidia_edge_compute.jpg';

export const ArchitectureSection: React.FC = () => {
  const [activeTierIndex, setActiveTierIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const tiers = [
    {
      level: 'TIER 01',
      optionNum: 'OPTION 01',
      stepNum: '01',
      name: 'Sensors & PLCs',
      icon: Radio,
      category: 'EDGE SENSORS & PLCS',
      desc: 'Machines and sensors capturing readings nonstop',
      metric: '12.8 kHz Burst Sampling',
      latency: '< 15 ms Ingress',
      color: 'from-[#277822] to-[#1e6019]',
      image: heroTelemetryImg,
      components: [
        'High-speed vibration accelerometers (12.8 kHz)',
        'Thermocouple & RTD probes (1–10 Hz)',
        'Siemens S7, Rockwell ControlLogix & Beckhoff PLCs',
        'Fieldbus gateways (Modbus RTU/TCP, Profinet)'
      ]
    },
    {
      level: 'TIER 02',
      optionNum: 'OPTION 02',
      stepNum: '02',
      name: 'Edge Gateways',
      icon: Server,
      category: 'LOCAL COMPUTATION & BUFFER',
      desc: 'On-site computers that clean up data first',
      metric: '3,200 Line Spectral FFT',
      latency: '72-Hour Ring Buffer',
      color: 'from-[#1e6019] to-[#236d1f]',
      image: nvidiaEdgeImg,
      components: [
        'Local FFT spectrum extraction & harmonic peak detection',
        'Store-and-forward persistent SQLite ring buffers',
        'Microsecond PTP clock synchronization (IEEE 1588)',
        'Strict outbound-only TLS 1.3 mTLS encrypted tunnels'
      ]
    },
    {
      level: 'TIER 03',
      optionNum: 'OPTION 03',
      stepNum: '03',
      name: 'Streaming/Messaging Layer',
      icon: Database,
      category: 'DISTRIBUTED INGESTION',
      desc: 'Moving huge volumes of data in real time',
      metric: '100,000+ msg/s Throughput',
      latency: '0.000% Dropped Frames',
      color: 'from-[#236d1f] to-[#1b5817]',
      image: heroTelemetryImg,
      components: [
        'Distributed event stream brokers with zero frame loss',
        'ClickHouse columnar analytical time-series engine',
        'MQTT Sparkplug B namespace & state retention',
        'Protobuf v3 ISA-95 normalized byte streams'
      ]
    },
    {
      level: 'TIER 04',
      optionNum: 'OPTION 04',
      stepNum: '04',
      name: 'Digital Twin & Anomaly Detection',
      icon: Cpu,
      category: 'CONTEXTUAL AI & TWIN',
      desc: 'Matching data to machines and spotting issues',
      metric: '84.6% Alarm Reduction',
      latency: 'Levels 0 to 4 Hierarchy',
      color: 'from-[#1b5817] to-[#144311]',
      image: digitalTwinImg,
      components: [
        'ISA-95 semantic model (Enterprise to Component hierarchy)',
        'Operating state classifier (Roughing vs Finishing)',
        'Dynamic Gaussian ±3σ deviation scoring (0–100 score)',
        'Spectral pattern recognition for bearing defect frequencies'
      ]
    },
    {
      level: 'TIER 05',
      optionNum: 'OPTION 05',
      stepNum: '05',
      name: 'Decision Portal',
      icon: ShieldCheck,
      category: 'PRESENTATION & CMMS',
      desc: 'Where engineers review and act on alerts',
      metric: '0.00% Write Risk',
      latency: '< 2.0s CMMS Sync',
      color: 'from-[#144311] to-[#0c2b0b]',
      image: digitalTwinImg,
      components: [
        'Condition Evidence Investigation Dossiers',
        'Automated SAP PM, IBM Maximo & MaintainX work orders',
        'Air-gapped and cloud-native dashboard viewing options',
        'Strict read-only safety boundary: zero automated actuation'
      ]
    }
  ];

  // Auto-Cycle Stepper (4.5s)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveTierIndex((prev) => (prev + 1) % tiers.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, tiers.length]);

  const activeTier = tiers[activeTierIndex];

  return (
    <section id="architecture" className="py-24 bg-[#fafdf9] relative overflow-hidden font-sans border-b border-slate-200">
      
      {/* Background Subtle Tech Grids & Radial Glows */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-35" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#277822]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-6 border-b border-[#cfe3cc]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ebf7e8] border border-[#a8da9f] text-xs font-mono text-[#236d1f] font-bold shadow-xs">
              <Layers className="w-4 h-4 text-[#277822]" />
              <span>5-TIER ENTERPRISE SYSTEM ARCHITECTURE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              <span className="text-[#277822]">Edge-to-Cloud</span> Telemetry Blueprint.
            </h2>
          </div>

          {/* Auto-Stepper Live Status Control */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="px-4 py-2 rounded-full bg-white border-2 border-[#cfe3cc] hover:border-[#277822] text-[#236d1f] font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shadow-sm"
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-4 h-4 text-[#277822]" />
                  <span>Auto-Cycling Active</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 text-[#277822]" />
                  <span>Resume Auto-Cycle</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INFOGRAPHIC 2-COLUMN LAYOUT (CIRCULAR HUB LEFT + STACKED PILL CARDS RIGHT) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* ======================================================================= */}
          {/* LEFT: LARGE CENTRAL CIRCULAR HUB WITH CRESCENT ARC & LIVE COCKPIT       */}
          {/* ======================================================================= */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-6">
            
            {/* Outer Circular Disk Container */}
            <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] rounded-full bg-white shadow-[0_20px_50px_rgba(39,120,34,0.12)] border-8 border-slate-100/80 flex items-center justify-center p-6 text-center group">
              
              {/* Full 360 Degree SVG Progress Circle Around Disk */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none -rotate-90" viewBox="0 0 400 400">
                <circle
                  cx="200"
                  cy="200"
                  r="185"
                  fill="none"
                  stroke="#ebf7e8"
                  strokeWidth="10"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="185"
                  fill="none"
                  stroke="#277822"
                  strokeWidth="10"
                  strokeDasharray="1162"
                  strokeDashoffset={1162 - ((activeTierIndex + 1) / tiers.length) * 1162}
                  strokeLinecap="round"
                  className="transition-all duration-700 ease-out"
                />
              </svg>

              {/* Dotted Orbital Track with Step Numbers Along Right Flank */}
              <div className="hidden sm:block absolute -right-7 top-1/2 -translate-y-1/2 h-[86%] w-14 z-20">
                <div className="h-full border-r-2 border-dashed border-[#a8da9f] flex flex-col justify-between items-end pr-[-6px]">
                  {tiers.map((t, dotIdx) => {
                    const isSelected = activeTierIndex === dotIdx;
                    return (
                      <button
                        key={dotIdx}
                        onClick={() => {
                          setActiveTierIndex(dotIdx);
                          setIsAutoPlaying(false);
                        }}
                        className={`w-7 h-7 rounded-full font-mono text-[10px] font-black flex items-center justify-center transition-all duration-300 translate-x-3.5 cursor-pointer shadow-sm ${
                          isSelected 
                            ? 'bg-[#277822] text-white border-2 border-white ring-4 ring-[#a8da9f]/60 scale-125 shadow-md z-30' 
                            : 'bg-white text-[#236d1f] border-2 border-[#a8da9f] hover:bg-[#ebf7e8] hover:scale-110'
                        }`}
                        title={`Go to ${t.level}`}
                      >
                        {t.stepNum}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Inner Central Disk Content */}
              <div className="space-y-2 z-10 max-w-[240px]">
                
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-slate-400 block">
                    ARCHITECTURE
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight font-sans">
                    TELEMORA
                  </h3>
                  
                  <p className="text-[11px] font-mono text-[#236d1f] font-bold">
                    5-Tier Telemetry Stack
                  </p>
                </div>

                {/* Minimal Active Tier Tag */}
                <div className="pt-1.5">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#ebf7e8] border border-[#a8da9f] text-[11px] font-mono font-black text-[#236d1f]">
                    {activeTier.level} ACTIVE
                  </span>
                </div>

              </div>

            </div>

          </div>

          {/* ======================================================================= */}
          {/* RIGHT: 5 STACKED ROUNDED PILL CARDS (EXACT MATCH TO REFERENCE IMAGE)    */}
          {/* ======================================================================= */}
          <div className="lg:col-span-7 space-y-3.5">
            {tiers.map((tier, idx) => {
              const IconComp = tier.icon;
              const isSelected = activeTierIndex === idx;

              return (
                <div
                  key={tier.level}
                  onClick={() => {
                    setActiveTierIndex(idx);
                    setIsAutoPlaying(false);
                  }}
                  className={`p-4 sm:p-4.5 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 border-2 group shadow-sm ${
                    isSelected
                      ? `bg-gradient-to-r ${tier.color} text-white border-[#277822] shadow-xl shadow-[#277822]/20 scale-[1.02] ring-2 ring-[#a8da9f]/30`
                      : 'bg-white text-slate-800 border-[#cfe3cc] hover:border-[#a8da9f] hover:bg-[#fafdf9]'
                  }`}
                >
                  {/* Left: Embossed 3D Circular White Icon Badge */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shrink-0 transition-all shadow-md ${
                    isSelected 
                      ? 'bg-white text-[#277822] shadow-black/20 ring-4 ring-white/20' 
                      : 'bg-[#ebf7e8] text-[#277822] group-hover:bg-[#277822] group-hover:text-white'
                  }`}>
                    <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  {/* Middle: Title & Text Content */}
                  <div className="flex-1 min-w-0 pr-2">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] sm:text-xs font-mono font-black tracking-wider uppercase ${
                        isSelected ? 'text-[#a8da9f]' : 'text-[#236d1f]'
                      }`}>
                        {tier.optionNum} • {tier.level}
                      </span>
                    </div>

                    <h4 className={`text-sm sm:text-base font-black font-sans tracking-tight truncate mt-0.5 ${
                      isSelected ? 'text-white' : 'text-slate-950'
                    }`}>
                      {tier.name}
                    </h4>

                    <p className={`text-xs font-sans leading-relaxed line-clamp-1 mt-0.5 ${
                      isSelected ? 'text-emerald-100' : 'text-slate-600'
                    }`}>
                      {tier.desc}
                    </p>
                  </div>

                  {/* Right: Metric Badge Pill */}
                  <div className="hidden sm:flex items-center shrink-0 pr-3 font-mono">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                      isSelected 
                        ? 'bg-white/15 text-white border border-white/20' 
                        : 'bg-[#ebf7e8] text-[#236d1f] border border-[#a8da9f]'
                    }`}>
                      {tier.metric}
                    </span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BOTTOM ACTIVE DEEP DIVE PANEL & HARDWARE OPTICAL DIODE BANNER             */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#cfe3cc] shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-mono text-xs">
          
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#277822] animate-pulse" />
              <span className="font-bold text-[#236d1f] uppercase">
                {activeTier.level} SUBSYSTEM INGRESS VERIFICATION:
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
              {activeTier.components.map((comp, cIdx) => (
                <div key={cIdx} className="flex items-start gap-2 p-2 rounded-xl bg-[#fafdf9] border border-[#cfe3cc]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#277822] shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-tight font-sans">{comp}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 p-5 rounded-2xl bg-[#ebf7e8] border border-[#a8da9f] space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-[#1b5817] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#277822]" />
                <span>IEC 62443 Certified Optical Diode</span>
              </span>
              <span className="text-[9px] font-black px-2 py-0.5 rounded bg-white text-[#236d1f] border border-[#a8da9f]">
                0% WRITEBACK
              </span>
            </div>
            <p className="text-[11px] text-slate-600 font-sans leading-relaxed">
              Unidirectional signal ingestion ensures industrial reliability without control network interference.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
