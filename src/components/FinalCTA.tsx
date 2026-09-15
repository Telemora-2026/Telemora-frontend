import React from 'react';
import { ArrowRight, ShieldCheck, User } from 'lucide-react';
import heroTelemetryImg from '../assets/images/hero_telemetry_hub.jpg';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-12 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Streamlined Banner Card (Site Brand Theme) */}
        <div className="rounded-3xl bg-[#fafdf9] p-6 sm:p-8 md:p-10 border-2 border-[#cfe3cc] shadow-xl relative overflow-hidden">
          
          {/* Subtle Emerald Background Glow */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#277822]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content Column (7 Cols) */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ebf7e8] border border-[#a8da9f] text-[11px] font-mono text-[#236d1f] font-bold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#277822] animate-pulse" />
                <span>48-HOUR PLANT PILOT</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight font-sans leading-tight">
                Connect Your Plant Line <br />
                <span className="text-[#277822]">in Under 48 Hours.</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed max-w-lg">
                Test read-only telemetry ingestion on an air-gapped gateway with zero PLC control risk and verified ISA-95 digital twin context.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">


                <span className="text-[11px] font-mono text-slate-600 flex items-center gap-1.5 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#277822]" />
                  <span>100% Read-Only Diode</span>
                </span>
              </div>
            </div>

            {/* Right Engineer / Specialist Visual Card (5 Cols) */}
            <div className="md:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border-2 border-[#cfe3cc] shadow-md bg-slate-950 relative group">
                <img 
                  src={heroTelemetryImg} 
                  alt="Industrial Reliability Engineer Desk" 
                  className="w-full h-48 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent flex flex-col justify-end p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#277822] border border-[#a8da9f] flex items-center justify-center text-white shrink-0 shadow-md">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-sans flex items-center gap-1.5">
                        <span>Lead OT Reliability Architect</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      <p className="text-[10px] text-[#a8da9f] font-mono font-semibold">
                        ISO 18436 Cat IV Vibration Analyst
                      </p>
                      <p className="text-[10px] text-slate-300 font-mono">
                        On-Duty Support SLA: &lt; 15 Mins
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
