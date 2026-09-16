import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Activity, 
  Cpu, 
  ShieldCheck, 
  Sliders, 
  Radio, 
  Sparkles,
  Zap,
  Gauge,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import digitalTwinImg from '../../assets/images/digital_twin_telemetry.jpg';

interface ProductHeroProps {
  onOpenDemoModal: () => void;
}

export const ProductHero: React.FC<ProductHeroProps> = ({ onOpenDemoModal }) => {
  const [machineState, setMachineState] = useState<'roughing' | 'finishing' | 'traverse'>('roughing');
  const [spindleRpm, setSpindleRpm] = useState(12450);
  const [vibrationRms, setVibrationRms] = useState(1.42);
  const [healthScore, setHealthScore] = useState(98.6);
  const [fftPeakHz, setFftPeakHz] = useState(148.5);

  // Dynamic simulation based on selected machine state
  useEffect(() => {
    if (machineState === 'roughing') {
      setSpindleRpm(12450);
      setVibrationRms(1.42);
      setHealthScore(98.6);
      setFftPeakHz(148.5);
    } else if (machineState === 'finishing') {
      setSpindleRpm(18200);
      setVibrationRms(0.78);
      setHealthScore(99.4);
      setFftPeakHz(284.2);
    } else {
      setSpindleRpm(6000);
      setVibrationRms(0.31);
      setHealthScore(99.9);
      setFftPeakHz(72.0);
    }
  }, [machineState]);

  // Subtle telemetry jitter
  useEffect(() => {
    const interval = setInterval(() => {
      setSpindleRpm(prev => prev + Math.floor(Math.random() * 14) - 7);
      setVibrationRms(prev => +(prev + (Math.random() * 0.04 - 0.02)).toFixed(2));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-8 pb-20 lg:pt-12 lg:pb-28 bg-white overflow-hidden border-b border-slate-200">
      {/* Background Engineering Grids & Glows */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-40" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#277822]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Operational Status Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2f9f1] border border-[#a8da9f] text-xs font-mono text-[#236d1f] font-bold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#277822] animate-pulse" />
            <span>TELORIX v2.4 • AUTONOMOUS INDUSTRIAL AI</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-700">ISA-95 CONTINUOUS CONDITION INTELLIGENCE</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Ingestion Latency: &lt; 4.2ms</span>
            <span className="text-slate-300">•</span>
            <span>Zero OT Writeback Risk</span>
          </div>
        </div>

        {/* Hero Grid: Value Messaging (Left 7 Cols) + Interactive Telemetry Console (Right 5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Product Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-wider text-[#277822] uppercase block">
                FLAGSHIP INDUSTRIAL AI PLATFORM
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.08] font-sans">
                Autonomous Telemetry Intelligence &amp; <br />
                <span className="text-[#277822]">Asset Reliability Engine.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans max-w-2xl">
                Telorix continuously harmonizes high-frequency vibration waveforms, operational machine states, and enterprise maintenance records to detect mechanical degradation weeks before catastrophic failure—without interrupting critical PLC control loops.
              </p>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary Live Product CTA */}
              <a
                href="https://hub.telemora.net"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-[#277822] hover:bg-[#1e6019] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#277822]/25 border border-[#236d1f] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center gap-2.5 group"
              >
                <span>Launch Telorix Hub</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Secondary Demo / Review CTA */}
              <button
                onClick={onOpenDemoModal}
                className="px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-mono font-bold text-xs uppercase tracking-wider border border-slate-300 shadow-sm transition-all hover:border-slate-400 cursor-pointer flex items-center gap-2"
              >
                <span>Schedule Architecture Review</span>
              </button>
            </div>

            {/* Live Product Direct Link Indicator */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 pt-1">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live production gateway available at:</span>
              <a 
                href="https://hub.telemora.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#277822] font-semibold hover:underline flex items-center gap-1"
              >
                hub.telemora.net
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Trust & Engineering Compliance Badges */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 border-t border-slate-100 text-xs font-mono text-slate-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#277822]" />
                Non-Invasive Optical Tap
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#277822]" />
                Dynamic ±3σ Envelopes
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#277822]" />
                Lossless Store-and-Forward
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Digital Twin & Live State Console */}
          <div className="lg:col-span-5 relative space-y-4">
            
            {/* Interactive Console Shell */}
            <div className="rounded-3xl border-2 border-[#a8da9f] bg-slate-950 shadow-2xl overflow-hidden relative">
              
              {/* Top Console Bar */}
              <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-300 ml-2">
                    TELORIX CONTEXTUAL STREAM
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/60 text-emerald-400 font-mono text-[10px] font-bold">
                  ACTIVE INFERENCE
                </span>
              </div>

              {/* Holographic Asset Visualization */}
              <div className="relative h-56 sm:h-64 overflow-hidden group">
                <img 
                  src={digitalTwinImg} 
                  alt="Telorix Digital Twin Telemetry Visualizer" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                
                {/* Visual Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

                {/* Floating Waveform Overlay */}
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-[#a8da9f]/40 text-white font-mono text-[11px] flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-[#a8da9f] animate-pulse" />
                  <span>12.8 kHz Burst Sampling Active</span>
                </div>

                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white font-mono text-[11px] flex items-center gap-2">
                  <span className="text-slate-400">FFT Dominant:</span>
                  <span className="font-bold text-[#a8da9f]">{fftPeakHz} Hz</span>
                </div>
              </div>

              {/* Machine State Selector Tabs */}
              <div className="p-4 bg-slate-900/90 border-t border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400 font-bold uppercase">Dynamic Machine State:</span>
                  <span className="text-emerald-400 font-semibold">Adaptive Baseline Active</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setMachineState('roughing')}
                    className={`py-2 px-2.5 rounded-xl font-mono text-[11px] font-bold border transition-all cursor-pointer ${
                      machineState === 'roughing'
                        ? 'bg-[#277822] text-white border-[#34d399]/40 shadow-sm'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    Roughing Cut
                  </button>

                  <button
                    onClick={() => setMachineState('finishing')}
                    className={`py-2 px-2.5 rounded-xl font-mono text-[11px] font-bold border transition-all cursor-pointer ${
                      machineState === 'finishing'
                        ? 'bg-[#277822] text-white border-[#34d399]/40 shadow-sm'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    Finishing Pass
                  </button>

                  <button
                    onClick={() => setMachineState('traverse')}
                    className={`py-2 px-2.5 rounded-xl font-mono text-[11px] font-bold border transition-all cursor-pointer ${
                      machineState === 'traverse'
                        ? 'bg-[#277822] text-white border-[#34d399]/40 shadow-sm'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    Rapid Traverse
                  </button>
                </div>

                {/* Real-time Dynamic Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 pt-2 text-center font-mono">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">SPINDLE RPM</span>
                    <span className="text-xs font-bold text-white">{spindleRpm.toLocaleString()}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">VIB RMS</span>
                    <span className="text-xs font-bold text-[#a8da9f]">{vibrationRms} mm/s</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">HEALTH SCORE</span>
                    <span className="text-xs font-bold text-emerald-400">{healthScore}%</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Operational Note below console */}
            <div className="flex items-center justify-between px-2 text-[11px] font-mono text-slate-500">
              <span>ISA-95 Node: Plant 01 &gt; Line B &gt; CNC-5AX-04</span>
              <span className="text-[#277822] font-semibold">Air-Gap Optical Diode Active</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
