import React from 'react';
import { ArrowRight, ArrowUpRight, ExternalLink, ShieldCheck, CheckCircle2, User, Sparkles } from 'lucide-react';
import heroTelemetryImg from '../../assets/images/hero_telemetry_hub.jpg';

interface ProductCtaProps {
  onOpenDemoModal: () => void;
}

export const ProductCta: React.FC<ProductCtaProps> = ({ onOpenDemoModal }) => {
  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Streamlined Call-to-Action Card */}
        <div className="rounded-3xl bg-[#fafdf9] p-8 sm:p-12 md:p-16 border-2 border-[#cfe3cc] shadow-2xl relative overflow-hidden">
          
          {/* Subtle Emerald Background Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#277822]/8 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ebf7e8] border border-[#a8da9f] text-[11px] font-mono text-[#236d1f] font-bold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#277822] animate-pulse" />
                <span>EXPERIENCE TELORIX LIVE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-sans leading-tight">
                Connect Your Plant Line <br />
                <span className="text-[#277822]">With Zero Operational Risk.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed max-w-xl">
                Deploy Telorix on an air-gapped gateway in under 48 hours. Start receiving state-aware condition intelligence, automated fault isolation, and full ISA-95 asset contextualization without modifying existing PLC programs.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {/* Primary Hub Link */}
                <a
                  href="https://hub.telemora.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-[#277822] hover:bg-[#1e6019] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#277822]/30 border border-[#236d1f] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center gap-2 group"
                >
                  <span>Launch Telorix Hub</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Secondary Pilot Review */}
                <button
                  onClick={onOpenDemoModal}
                  className="px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-mono font-bold text-xs uppercase tracking-wider border border-slate-300 shadow-sm transition-all hover:border-slate-400 cursor-pointer flex items-center gap-2"
                >
                  <span>Request 48-Hour Pilot</span>
                </button>
              </div>

              {/* Direct Link Clarification */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Direct portal:</span>
                <a 
                  href="https://hub.telemora.net" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#277822] font-semibold hover:underline flex items-center gap-1"
                >
                  https://hub.telemora.net
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Guarantees */}
              <div className="flex flex-wrap items-center gap-5 pt-3 text-xs font-mono text-slate-600">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#277822]" />
                  100% Read-Only Hardware Diode
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#277822]" />
                  Zero Control Loop Risk
                </span>
              </div>
            </div>

            {/* Right Engineer Visual & Plant Support Card (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border-2 border-[#cfe3cc] shadow-2xl bg-slate-950 relative group">
                <img 
                  src={heroTelemetryImg} 
                  alt="Industrial Reliability Engineer Operating Telorix" 
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent flex flex-col justify-end p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#277822] border border-[#a8da9f] flex items-center justify-center text-white shrink-0 shadow-md">
                      <User className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white font-sans flex items-center gap-2">
                        <span>Lead OT Reliability Architect</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      <p className="text-xs text-[#a8da9f] font-mono font-semibold">
                        ISO 18436 Cat IV Certified Support
                      </p>
                      <p className="text-[11px] text-slate-300 font-mono mt-0.5">
                        On-Site Pilot Setup: &lt; 48 Hours
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
