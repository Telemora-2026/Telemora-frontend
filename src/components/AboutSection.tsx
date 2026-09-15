import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Layers, 
  Activity, 
  Play, 
  CheckCircle2, 
  ArrowRight, 
  Wrench, 
  Users, 
  Cpu, 
  Lock,
  X
} from 'lucide-react';
import aboutTeamCollaborationImg from '../assets/images/about_team_collaboration.jpg';
import digitalTwinImg from '../assets/images/digital_twin_telemetry.jpg';

export const AboutSection: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section id="about" className="py-24 bg-white border-b border-slate-200 relative overflow-hidden font-sans">
      
      {/* Subtle Background Accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#277822]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* ========================================================================= */}
        {/* TOP ROW: • ABOUT US • + DUAL-TONE TITLE (LEFT) & 2 PARAGRAPHS (RIGHT)    */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Title Area (6 Cols) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ebf7e8] border border-[#a8da9f] text-xs font-mono font-extrabold text-[#236d1f] uppercase shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#277822]" />
              <span>ABOUT US</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#277822]" />
            </div>

            {/* Dual Tone Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight font-sans">
              <span className="text-[#277822]">Introduction</span> To Industrial Telemetry Intelligence
            </h2>
          </div>

          {/* Right Dual Paragraph Columns (6 Cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed pt-2">
            <p>
              Factories generate constant streams of machine data: temperatures, vibrations, pressures, but it's scattered and hard to make sense of. Engineers end up with mountains of numbers and no clear picture of what's actually happening. Founded in March 2023, Telemora was built to fix that.
            </p>
            <p>
              We organize the noise around your actual machines, giving you a clear picture of how each one is behaving compared to normal, and flagging anything that looks off before it becomes a bigger problem. Telemora doesn't control your equipment or make decisions for you; it's there to give your engineers better visibility, not replace them.
            </p>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MIDDLE ROW: 3 FEATURE PILL CARDS WITH CIRCLE ICONS                        */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="p-6 rounded-3xl bg-[#fafdf9] border border-[#cfe3cc] hover:border-[#277822] shadow-sm hover:shadow-md transition-all flex items-start gap-4 group">
            <div className="w-14 h-14 rounded-2xl bg-[#277822] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-base text-slate-950 font-sans tracking-tight">
                Zero-Invasive Read-Only OT
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                100% unidirectional optical data diode isolation with zero PLC writeback risk.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-3xl bg-[#fafdf9] border border-[#cfe3cc] hover:border-[#277822] shadow-sm hover:shadow-md transition-all flex items-start gap-4 group">
            <div className="w-14 h-14 rounded-2xl bg-slate-950 text-[#a8da9f] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <Layers className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-base text-slate-950 font-sans tracking-tight">
                ISA-95 Digital Twin Context
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Standardizes multi-vendor sensor tags into unified equipment hierarchies.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-3xl bg-[#fafdf9] border border-[#cfe3cc] hover:border-[#277822] shadow-sm hover:shadow-md transition-all flex items-start gap-4 group">
            <div className="w-14 h-14 rounded-2xl bg-[#277822] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <Activity className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-base text-slate-950 font-sans tracking-tight">
                Dynamic ±3σ Enveloping
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                State-aware Gaussian envelopes reduce nuisance alarms by 84.6%.
              </p>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BOTTOM ROW: MAIN BIG IMAGE + OVERLAPPING SECONDARY FLOATING CARD          */}
        {/* ========================================================================= */}
        <div className="relative pt-4">
          
          {/* Main Large Image Box */}
          <div className="rounded-3xl overflow-hidden border-2 border-[#cfe3cc] shadow-2xl bg-slate-950 relative h-[380px] sm:h-[480px]">
            {isVideoPlaying ? (
              <>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
                <button
                  onClick={() => setIsVideoPlaying(false)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white flex items-center justify-center transition-colors z-20 border border-slate-700 shadow-xl"
                  title="Close Video"
                >
                  <X className="w-5 h-5" />
                </button>
              </>
            ) : (
              <>
                <img 
                  src={aboutTeamCollaborationImg} 
                  alt="Telemora Team Collaboration" 
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-8 sm:p-12 max-w-xl">
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#a8da9f] uppercase mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#277822] animate-pulse" />
                    <span>PLANT-WIDE CONNECTED TELEMETRY MESH</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                    Unified Operational Intelligence Across 8 Plants &amp; 24 Lines.
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 font-sans leading-relaxed">
                    Empowering reliability teams with high-speed 12.8 kHz vibration waveforms and instant CMMS maintenance correlation.
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Overlapping Floating Secondary Card (Bottom-Right Offset) */}
          {!isVideoPlaying && (
            <div className="hidden sm:block absolute -bottom-10 right-6 md:right-12 w-[300px] md:w-[380px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-slate-950 group">
              <div className="relative h-56">
                <img 
                  src={digitalTwinImg} 
                  alt="3D Holographic Digital Twin Preview" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-between p-4">
                  
                  {/* Top Badge */}
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-900/90 border border-white/20 text-[#a8da9f] text-[10px] font-mono font-bold">
                      ISA-95 TWIN
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#277822] text-white text-[10px] font-mono font-bold">
                      LIVE STREAM
                    </span>
                  </div>

                  {/* Center Play Button Pill */}
                  <div className="self-center">
                    <div className="relative cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                      <div className="absolute inset-0 rounded-full bg-[#277822] animate-ping opacity-75"></div>
                      <div className="relative w-12 h-12 rounded-full bg-[#277822] text-white flex items-center justify-center shadow-lg shadow-[#277822]/40 group-hover:scale-110 transition-transform z-10">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Details */}
                  <div className="text-xs font-mono text-white flex items-center justify-between">
                    <span className="font-bold">CNC-5AX-04 Spindle</span>
                    <span className="text-[#a8da9f]">12.8 kHz Burst</span>
                  </div>

                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
