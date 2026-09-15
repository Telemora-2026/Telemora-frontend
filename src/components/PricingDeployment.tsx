import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Building2, 
  Server, 
  Layers, 
  Sparkles 
} from 'lucide-react';
import { PRICING_PLANS } from '../data/mockIndustrialData';

interface PricingDeploymentProps {
  onOpenDemoModal: () => void;
}

export const PricingDeployment: React.FC<PricingDeploymentProps> = ({ onOpenDemoModal }) => {
  return (
    <section id="deployment" className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-xs font-mono text-emerald-800 font-bold mb-3">
            <Layers className="w-3.5 h-3.5 text-emerald-700" />
            <span>DEPLOYMENT & ARCHITECTURE LICENSING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Flexible Deployment Models <br />
            <span className="text-emerald-700">For Any Plant Environment.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Deploy in your private cloud, customer-managed VPC, or 100% air-gapped on-premises industrial clusters with zero external cloud dependencies.
          </p>
        </div>

        {/* 3 Pricing / Deployment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => {
            const isFeatured = !!plan.badge;
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 transition-all flex flex-col justify-between relative ${
                  isFeatured
                    ? 'bg-slate-900 text-white border-2 border-emerald-500 shadow-2xl scale-[1.02]'
                    : 'bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Optional Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <div className={`text-xs font-mono font-bold uppercase ${
                      isFeatured ? 'text-emerald-400' : 'text-emerald-700'
                    }`}>
                      {plan.deploymentType}
                    </div>
                    <h3 className="text-2xl font-extrabold mt-1">
                      {plan.name}
                    </h3>
                    <p className={`text-xs mt-2 leading-relaxed ${
                      isFeatured ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {plan.description}
                    </p>
                  </div>

                  <div className={`p-3.5 rounded-xl font-mono text-xs ${
                    isFeatured ? 'bg-slate-950 border border-slate-800 text-slate-300' : 'bg-slate-50 border border-slate-200 text-slate-700'
                  }`}>
                    <div className="text-[10px] uppercase opacity-75">SCOPE CAPACITY:</div>
                    <div className="font-bold mt-0.5">{plan.architectureScope}</div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3">
                    <div className={`text-xs font-mono font-bold uppercase ${
                      isFeatured ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      KEY INCLUSIONS:
                    </div>
                    {plan.keyFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isFeatured ? 'text-emerald-400' : 'text-emerald-600'
                        }`} />
                        <span className={isFeatured ? 'text-slate-200' : 'text-slate-700'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-slate-200/20 space-y-3">
                  <div className={`text-[11px] font-mono text-center ${
                    isFeatured ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {plan.supportLevel}
                  </div>

                  <button
                    onClick={onOpenDemoModal}
                    className={`w-full py-3.5 rounded-xl font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isFeatured
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-700/30'
                        : 'bg-emerald-700 hover:bg-emerald-800 text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
