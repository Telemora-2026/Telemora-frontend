import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Layers, 
  Radio, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Sliders, 
  ChevronRight, 
  FileText, 
  ExternalLink,
  Cpu,
  RefreshCw,
  Database,
  Server,
  Zap,
  ShieldCheck,
  Building2,
  TrendingUp,
  BarChart3,
  HardDrive,
  Check,
  ArrowRight,
  Terminal,
  Gauge
} from 'lucide-react';
import { 
  MOCK_ASSETS, 
  ANOMALIES_DATA, 
  TELEMETRY_INPUT_SOURCES, 
  INTELLIGENCE_PROCESS_STEPS 
} from '../data/mockIndustrialData';
import { MachineAsset, AnomalyInvestigation } from '../types';

interface DashboardShowcaseProps {
  onInvestigateAnomaly: (anomaly: AnomalyInvestigation) => void;
}

export const DashboardShowcase: React.FC<DashboardShowcaseProps> = ({ onInvestigateAnomaly }) => {
  const [activeModule, setActiveModule] = useState<'cockpit' | 'ingress' | 'schema' | 'cmms'>('cockpit');
  const [selectedAssetIndex, setSelectedAssetIndex] = useState(0);
  const [activeParameter, setActiveParameter] = useState<'vibration' | 'temperature' | 'pressure' | 'power'>('vibration');
  const [timeRange, setTimeRange] = useState<'1m' | '15m' | '1h' | '24h'>('15m');
  const [liveRate, setLiveRate] = useState(48250);

  const currentAsset: MachineAsset = MOCK_ASSETS[selectedAssetIndex];

  // Fluctuate rate for live feeling
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveRate((prev) => prev + Math.floor(Math.random() * 24) - 12);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getParamInfo = () => {
    switch (activeParameter) {
      case 'vibration':
        return { name: 'Vibration RMS', unit: 'mm/s', current: currentAsset.sensors[0]?.currentValue || '1.42', baseline: '0.5 - 2.3 mm/s', status: 'Nominal' };
      case 'temperature':
        return { name: 'Bearing Temperature', unit: '°C', current: currentAsset.sensors[1]?.currentValue || '46.8', baseline: '35 - 65 °C', status: 'Nominal' };
      case 'pressure':
        return { name: 'Hydraulic Pressure', unit: 'bar', current: currentAsset.sensors[2]?.currentValue || '38.4', baseline: '30 - 45 bar', status: 'Optimal' };
      case 'power':
        return { name: 'Motor Load Power', unit: 'kW', current: '16.8', baseline: '10 - 22 kW', status: 'Stable' };
    }
  };

  const paramInfo = getParamInfo();

  const modules = [
    { id: 'cockpit', name: '01. Operations Cockpit', icon: BarChart3, desc: 'Live multi-parameter telemetry oscilloscope & Gaussian bounds' },
    { id: 'ingress', name: '02. Fieldbus Ingress Mesh', icon: Database, desc: 'Multi-vendor PLC protocol gateways & 12.8 kHz DAQ stream' },
    { id: 'schema', name: '03. ISA-95 Context Twin', icon: Layers, desc: 'Enterprise-to-component equipment taxonomy & Protobuf v3' },
    { id: 'cmms', name: '04. CMMS & Work Orders', icon: WrenchIcon, desc: 'Automated SAP PM & Maximo root-cause investigation dossiers' },
  ];

  function WrenchIcon(props: React.SVGProps<SVGSVGElement>) {
    return <FileText className={props.className} />;
  }

  return (
    <section id="dashboard" className="py-24 bg-[#fafdf9] relative overflow-hidden font-sans border-b border-slate-200">
      
      {/* Background Tech Elements */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-35" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#277822]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 pb-6 border-b border-[#cfe3cc]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ebf7e8] border border-[#a8da9f] text-xs font-mono text-[#236d1f] font-bold shadow-xs">
              <Activity className="w-4 h-4 text-[#277822]" />
              <span>THE PRODUCT: INDUSTRIAL TELEMETRY INTELLIGENCE ARCHITECTURE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Operational Signals, <br />
              <span className="text-[#277822]">Organized Around Equipment Context.</span>
            </h2>
          </div>

          {/* Live Ingress Status Pod */}
          <div className="flex items-center gap-3 font-mono text-xs">
            <div className="p-3 rounded-2xl bg-white border border-[#cfe3cc] shadow-xs flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#277822] animate-pulse" />
              <div>
                <span className="text-[10px] text-slate-400 font-bold block uppercase">INGRESS MESH:</span>
                <span className="font-extrabold text-[#277822]">{liveRate.toLocaleString()} msg/s</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* UNIFIED DARK INDUSTRIAL DASHBOARD SHELL (TABS + CONSOLE COMBINED)        */}
        {/* ========================================================================= */}
        <div className="rounded-3xl bg-[#06140b] border-2 border-[#163622] shadow-[0_30px_70px_rgba(0,0,0,0.35)] p-6 sm:p-8 space-y-6 relative overflow-hidden text-slate-200">
          
          {/* Ambient Radial Glowing Light */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-[#277822]/15 rounded-full blur-[140px] pointer-events-none" />

          {/* 4 Interactive Dashboard Module Tabs (Dark Themed) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs relative z-10">
            {modules.map((mod) => {
              const IconComp = mod.icon;
              const isSelected = activeModule === mod.id;

              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(mod.id as any)}
                  className={`p-4 rounded-2xl border-2 text-left transition-all duration-300 cursor-pointer flex items-center gap-3.5 shadow-xs ${
                    isSelected
                      ? 'bg-[#277822] text-white border-[#34d399]/40 shadow-lg shadow-[#277822]/30 scale-[1.02]'
                      : 'bg-[#0d2215] text-slate-300 border-[#183d26] hover:border-[#277822] hover:bg-[#132f1e]'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                    isSelected ? 'bg-white text-[#277822]' : 'bg-[#143521] text-[#a8da9f]'
                  }`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className={`font-black block text-xs truncate ${isSelected ? 'text-white' : 'text-slate-100'}`}>
                      {mod.name}
                    </span>
                    <span className={`text-[10px] truncate block ${isSelected ? 'text-emerald-100' : 'text-slate-400'}`}>
                      {mod.desc}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Main Dashboard Stage Box */}
          <div className="rounded-3xl bg-[#091b10] border-2 border-[#1b3d28] p-6 sm:p-7 space-y-6 relative z-10 shadow-inner">
            
            {/* ======================================================================= */}
            {/* MODULE 1: OPERATIONS COCKPIT VIEW                                       */}
            {/* ======================================================================= */}
            {activeModule === 'cockpit' && (
              <div className="space-y-6 animate-fade-in">
                
                {/* Asset Selector & Time Filter Rail */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-[#1b3d28]">
                  
                  {/* Asset Pills */}
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                    <span className="text-slate-400 font-bold uppercase text-[10px] mr-1">SELECT ASSET:</span>
                    {MOCK_ASSETS.map((asset, idx) => (
                      <button
                        key={asset.id}
                        onClick={() => setSelectedAssetIndex(idx)}
                        className={`px-3.5 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                          selectedAssetIndex === idx
                            ? 'bg-[#277822] text-white shadow-md shadow-[#277822]/40 border border-[#34d399]/40'
                            : 'bg-[#0e2718] text-slate-300 hover:bg-[#153a23] border border-[#1b4329]'
                        }`}
                      >
                        <span>{asset.code}</span>
                        <span className="text-[10px] opacity-75 ml-1">({asset.type.split(' ')[0]})</span>
                      </button>
                    ))}
                  </div>

                  {/* Time Range Selector */}
                  <div className="flex items-center gap-1.5 font-mono text-xs">
                    <span className="text-slate-400 text-[10px] uppercase mr-1">WINDOW:</span>
                    {(['1m', '15m', '1h', '24h'] as const).map((r) => (
                      <button
                        key={r}
                        onClick={() => setTimeRange(r)}
                        className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer font-bold ${
                          timeRange === r
                            ? 'bg-[#277822] text-white border border-[#34d399]/30'
                            : 'bg-[#0e2718] text-slate-400 hover:text-white border border-[#1b4329]'
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>

                </div>

                {/* Asset Status Metadata Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#0d2215] border border-[#1b4329] font-mono text-xs">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">ASSET TOPOLOGY:</div>
                    <div className="font-extrabold text-white font-sans text-sm mt-0.5">{currentAsset.name}</div>
                    <div className="text-[10px] text-slate-400">{currentAsset.plant} • {currentAsset.line}</div>
                  </div>

                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">OPERATING STATE:</div>
                    <div className="font-extrabold text-[#a8da9f] text-sm mt-0.5 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
                      <span>{currentAsset.currentOperatingState}</span>
                    </div>
                    <div className="text-[10px] text-slate-400">±3σ Auto-Enveloping Active</div>
                  </div>

                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">BOUND CMMS WORK ORDER:</div>
                    <div className="font-bold text-slate-200 text-sm mt-0.5">{currentAsset.activeWorkOrderId || 'None Assigned'}</div>
                    <div className="text-[10px] text-slate-400">{currentAsset.lastServiceDate}</div>
                  </div>

                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">ASSET HEALTH SCORE:</div>
                    <div className="font-extrabold text-white text-sm mt-0.5 flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-xs bg-[#163a23] text-[#a8da9f] border border-[#277822] font-bold">
                        {currentAsset.healthScore} / 100
                      </span>
                      <span className="text-[10px] text-slate-400">{currentAsset.uptimePercent}% Uptime</span>
                    </div>
                  </div>
                </div>

                {/* Central Signal Oscilloscope & Gauges Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* Left: Signal Oscilloscope Waveform (8 Cols) */}
                  <div className="lg:col-span-8 p-5 rounded-2xl bg-[#06120b] border border-[#1b4329] space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      {/* Parameter Switcher */}
                      <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                        {(['vibration', 'temperature', 'pressure', 'power'] as const).map((param) => (
                          <button
                            key={param}
                            onClick={() => setActiveParameter(param)}
                            className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer capitalize ${
                              activeParameter === param
                                ? 'bg-[#277822] text-white shadow-xs border border-[#34d399]/40'
                                : 'bg-[#0d2215] text-slate-300 hover:bg-[#163a23] border border-[#1b4329]'
                            }`}
                          >
                            {param}
                          </button>
                        ))}
                      </div>

                      <div className="font-mono text-xs text-right">
                        <span className="text-[10px] text-slate-400 uppercase block">{paramInfo.name}</span>
                        <span className="font-black text-lg text-[#34d399]">{paramInfo.current} {paramInfo.unit}</span>
                      </div>
                    </div>

                    {/* SVG Dynamic Waveform Canvas */}
                    <div className="h-44 w-full bg-[#040c07] rounded-2xl border border-[#14331e] p-4 relative overflow-hidden flex items-center">
                      <svg className="w-full h-full" viewBox="0 0 500 120" preserveAspectRatio="none">
                        {/* Grid background lines */}
                        <line x1="0" y1="30" x2="500" y2="30" stroke="#0e2a18" strokeWidth="1" />
                        <line x1="0" y1="60" x2="500" y2="60" stroke="#0e2a18" strokeWidth="1" />
                        <line x1="0" y1="90" x2="500" y2="90" stroke="#0e2a18" strokeWidth="1" />

                        {/* Upper & Lower ±3σ Baseline Envelope Lines */}
                        <path d="M 0,20 Q 125,15 250,20 T 500,20" fill="none" stroke="#34d399" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.8" />
                        <path d="M 0,100 Q 125,95 250,100 T 500,100" fill="none" stroke="#34d399" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.8" />
                        <text x="10" y="16" fill="#a8da9f" fontSize="9" fontFamily="monospace">±3σ Upper Bound ({paramInfo.baseline.split('-')[1]})</text>
                        <text x="10" y="112" fill="#a8da9f" fontSize="9" fontFamily="monospace">±3σ Lower Bound ({paramInfo.baseline.split('-')[0]})</text>

                        {/* Live Waveform Signal */}
                        <path
                          d="M 0,60 Q 15,30 30,60 T 60,60 T 90,60 T 120,60 T 150,60 T 180,60 Q 195,-30 210,60 T 240,60 T 270,60 T 300,60 Q 315,30 330,60 T 360,60 T 390,60 T 420,60 T 450,60 T 480,60 T 510,60"
                          fill="none"
                          stroke="#34d399"
                          strokeWidth="2.5"
                        />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between font-mono text-[11px] text-slate-400">
                      <span>Baseline Range: <strong className="text-white">{paramInfo.baseline}</strong></span>
                      <span className="text-[#a8da9f] font-bold">12.8 kHz FFT Decomposition Active</span>
                    </div>
                  </div>

                  {/* Right: 4 Gauge Metric Tiles (4 Cols) */}
                  <div className="lg:col-span-4 grid grid-cols-2 gap-3 font-mono">
                    {currentAsset.sensors.slice(0, 4).map((sensor, sIdx) => (
                      <div key={sIdx} className="p-3.5 rounded-2xl bg-[#0d2215] border border-[#1b4329] flex flex-col justify-between space-y-2 shadow-xs">
                        <div>
                          <span className="text-[10px] text-slate-400 font-bold uppercase block truncate">{sensor.type}</span>
                          <div className="text-base font-black text-white font-sans mt-0.5">
                            {sensor.currentValue} <span className="text-[10px] font-mono text-slate-400">{sensor.unit}</span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-[#163821] flex items-center justify-between text-[10px]">
                          <span className="text-slate-400">Baseline:</span>
                          <span className="text-[#a8da9f] font-bold">{sensor.normalRange}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            )}

            {/* ======================================================================= */}
            {/* MODULE 2: FIELDBUS INGRESS MESH VIEW (DARK THEME)                       */}
            {/* ======================================================================= */}
            {activeModule === 'ingress' && (
              <div className="space-y-6 animate-fade-in font-mono text-xs">
                <div className="flex items-center justify-between pb-4 border-b border-[#1b3d28]">
                  <div>
                    <h3 className="text-xl font-black text-white font-sans">Multi-Vendor Fieldbus Ingress Mesh</h3>
                    <p className="text-xs text-slate-300 font-sans mt-0.5">Physical signal capture through air-gapped optical data diodes.</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#112d1b] border border-[#277822] text-[#a8da9f] font-bold">
                    IEC 62443 Certified
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {TELEMETRY_INPUT_SOURCES.map((source, sIdx) => (
                    <div key={sIdx} className="p-5 rounded-2xl bg-[#0d2215] border border-[#1b4329] space-y-3 shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-[#a8da9f]">{source.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-[#112d1b] border border-[#1b4329] text-slate-300 font-bold">
                          {source.protocol}
                        </span>
                      </div>
                      <p className="text-slate-300 font-sans text-xs leading-relaxed">{source.description}</p>
                      <div className="pt-2 border-t border-[#1b4329] text-[10px] text-slate-400 flex justify-between">
                        <span>Rate: <strong className="text-white">{source.sampleRate}</strong></span>
                        <span className="text-[#34d399] font-bold">{source.latency}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ======================================================================= */}
            {/* MODULE 3: ISA-95 CONTEXT TWIN SCHEMA VIEW (DARK THEME)                  */}
            {/* ======================================================================= */}
            {activeModule === 'schema' && (
              <div className="space-y-6 animate-fade-in font-mono text-xs">
                <div className="flex items-center justify-between pb-4 border-b border-[#1b3d28]">
                  <div>
                    <h3 className="text-xl font-black text-white font-sans">ISA-95 Semantic Digital Twin Model</h3>
                    <p className="text-xs text-slate-300 font-sans mt-0.5">Hierarchical tag normalization into standardized Protobuf v3 byte streams.</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#112d1b] border border-[#277822] text-[#a8da9f] font-bold">
                    Protobuf v3 Schema
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-[#040c07] text-slate-300 border border-[#14331e] space-y-2 font-mono text-[11px]">
                    <div className="text-[#a8da9f] font-bold uppercase pb-1 border-b border-[#14331e]">
                      // NORMALIZED PROTOBUF V3 SCHEMA CONTRACT
                    </div>
                    <pre className="text-[#34d399] leading-relaxed overflow-x-auto">
{`message TelemetryPayload {
  string asset_id = "CNC-SPINDLE-12";
  string plant_code = "DETROIT-04";
  int64 timestamp_ns = 1725178290000;
  
  message VibrationFrame {
    float rms_velocity = 1.42;
    repeated float fft_spectrum = [0.12, 0.45, ...];
    string load_state = "ROUGHING";
  }
}`}
                    </pre>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#0d2215] border border-[#1b4329] space-y-3">
                    <span className="font-bold text-white block uppercase">ISA-95 HIERARCHICAL TAXONOMY:</span>
                    <div className="space-y-2 font-sans text-xs text-slate-300">
                      <div className="p-2.5 rounded-xl bg-[#06120b] border border-[#1b4329]">
                        <strong className="text-white">Level 4 (Enterprise):</strong> Global Manufacturing Operations
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#06120b] border border-[#1b4329]">
                        <strong className="text-white">Level 3 (Site/Plant):</strong> Detroit Stamping Plant 04
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#06120b] border border-[#1b4329]">
                        <strong className="text-white">Level 2 (Work Cell):</strong> Heavy Machining Line B
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#06120b] border border-[#1b4329]">
                        <strong className="text-white">Level 1 (Asset/Sensor):</strong> Spindle Drive Bearing #02 (12.8 kHz)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ======================================================================= */}
            {/* MODULE 4: CMMS WORK ORDER INTEGRATION VIEW (DARK THEME)                 */}
            {/* ======================================================================= */}
            {activeModule === 'cmms' && (
              <div className="space-y-6 animate-fade-in font-mono text-xs">
                <div className="flex items-center justify-between pb-4 border-b border-[#1b3d28]">
                  <div>
                    <h3 className="text-xl font-black text-white font-sans">Automated CMMS Work Order Correlation</h3>
                    <p className="text-xs text-slate-300 font-sans mt-0.5">Direct linkage between live telemetry spikes and SAP PM / Maximo work orders.</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#112d1b] border border-[#277822] text-[#a8da9f] font-bold">
                    SAP PM / Maximo Linked
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {ANOMALIES_DATA.slice(0, 2).map((anomaly, aIdx) => (
                    <div key={aIdx} className="p-5 rounded-2xl bg-[#0d2215] border border-[#1b4329] space-y-3 shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-white font-sans text-sm">{anomaly.assetName}</span>
                        <span className="px-2.5 py-0.5 rounded bg-[#163a23] text-[#a8da9f] border border-[#277822] font-bold text-[10px]">
                          {anomaly.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 font-sans leading-relaxed">{anomaly.evidenceSummary}</p>
                      <div className="pt-2 border-t border-[#1b4329] flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">Work Order: <strong className="text-white">{anomaly.workOrderTicketId}</strong></span>
                        <button
                          onClick={() => onInvestigateAnomaly(anomaly)}
                          className="text-[#a8da9f] hover:underline font-bold flex items-center gap-1 cursor-pointer"
                        >
                          <span>Investigate Dossier</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
