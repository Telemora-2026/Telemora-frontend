import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  AlertOctagon, 
  CheckCircle2, 
  FileCode, 
  Layers,
  Cpu,
  ArrowRight,
  Info
} from 'lucide-react';

export const EngineeringBoundary: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-[#12380f] text-white border border-[#277822]/40 shadow-2xl relative overflow-hidden">
          
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#277822]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ebf7e8]/10 border border-[#a8da9f]/30 text-xs font-mono text-[#a8da9f] font-bold shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#a8da9f]" />
                <span>SAFETY &amp; ENGINEERING BOUNDARY STATEMENT (BA SECTION 1.2 &amp; 6)</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-sans">
                Strict Engineering Boundary: <br />
                <span className="text-[#a8da9f]">Decision Support Only. Zero Control Risk.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
                <strong>Telemora is not an industrial control system, and it is not a certified safety function.</strong> Its value comes from turning scattered operational telemetry into structured decision support - not from issuing unreviewed control commands or standing in for professional engineering judgment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
                <div className="flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Unidirectional Read-Only Telemetry Ingress</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Optical Data Diode &amp; Air-Gap Hardware Taps</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Human-in-the-Loop Engineering Review</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero Interference with Certified Safety Loops</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-3.5 shadow-xl">
              <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                <span>GOVERNANCE COMPLIANCE</span>
                <span className="text-[#a8da9f] font-bold">IEC 62443 SL-2</span>
              </div>

              <div className="space-y-2 text-[11px]">
                <div className="flex justify-between text-slate-400">
                  <span>Product Class:</span>
                  <span className="text-white font-bold">Decision Support</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>PLC Writeback:</span>
                  <span className="text-red-400 font-bold">HARDWARE BLOCKED (0%)</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Data Diode Tap:</span>
                  <span className="text-[#a8da9f] font-bold">Optical 100% Outbound</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Safety System Overrides:</span>
                  <span className="text-red-400 font-bold">ZERO OVERRIDE PATH</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 text-center">
                Audit Trail Export Available in Encrypted JSON / CSV
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
