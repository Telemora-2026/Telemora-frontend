import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Calculator, 
  DollarSign, 
  Sliders, 
  TrendingUp, 
  Clock, 
  Check, 
  Minus, 
  ChevronDown, 
  ChevronUp, 
  Cpu, 
  Server,
  Zap,
  Building2
} from 'lucide-react';
import { PRICING_PLANS, COMPARISON_FEATURES } from '../data/mockIndustrialData';
import { PricingPlan } from '../types';

interface PricingSectionProps {
  onOpenDemoModal: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDemoModal }) => {
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');
  const [showFeatureMatrix, setShowFeatureMatrix] = useState(false);

  // ROI Calculator interactive state
  const [assetCount, setAssetCount] = useState<number>(60);
  const [downtimeCostPerHour, setDowntimeCostPerHour] = useState<number>(15000);
  const [downtimeHoursPerYear, setDowntimeHoursPerYear] = useState<number>(36);

  // ROI calculations
  const totalDowntimeLossPerYear = downtimeCostPerHour * downtimeHoursPerYear;
  // Estimated 75% prevention rate of catastrophic rotating asset trips
  const estimatedSavings = Math.round(totalDowntimeLossPerYear * 0.75);
  // Annual license estimation based on asset count
  const annualLicenseEst = assetCount <= 40 ? 1920 * 12 : assetCount <= 150 ? 5440 * 12 : 9800 * 12;
  const netAnnualBenefit = estimatedSavings - annualLicenseEst;
  const roiMultiple = (estimatedSavings / annualLicenseEst).toFixed(1);
  const paybackMonths = ((annualLicenseEst / estimatedSavings) * 12).toFixed(1);
  const suggestedGateways = Math.max(2, Math.ceil(assetCount / 30));

  return (
    <section id="pricing" className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-40" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#277822]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2f9f1] border border-[#a8da9f] text-xs font-mono text-[#236d1f] font-bold mb-4 shadow-xs">
            <Layers className="w-4 h-4 text-[#277822]" />
            <span>TRANSPARENT INDUSTRIAL LICENSING & ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Predictable Pricing. <br />
            <span className="text-[#277822]">Uncompromising Reliability.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Choose between facility pilot deployments, enterprise multi-plant fleets, or 100% air-gapped on-premises appliance clusters.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="p-1 rounded-2xl bg-white border border-slate-300 shadow-sm inline-flex items-center">
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  billingCycle === 'annual'
                    ? 'bg-[#277822] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <span>Annual Billing</span>
                <span className="px-1.5 py-0.5 rounded-full bg-[#ebf7e8] text-[#236d1f] text-[10px] font-extrabold border border-[#a8da9f]">
                  Save 20%
                </span>
              </button>

              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-[#277822] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                Monthly Billing
              </button>
            </div>
          </div>
        </div>

        {/* 3 Core Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">
          {PRICING_PLANS.map((plan) => {
            const isFeatured = !!plan.badge;
            const price = billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 transition-all flex flex-col justify-between relative ${
                  isFeatured
                    ? 'bg-slate-950 text-white border-2 border-[#277822] shadow-2xl scale-[1.02] ring-4 ring-[#277822]/20'
                    : 'bg-white text-slate-950 border border-slate-200 shadow-md hover:shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#277822] text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <div className={`text-xs font-mono font-bold uppercase ${
                      isFeatured ? 'text-[#a8da9f]' : 'text-[#236d1f]'
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

                  {/* Price Tag */}
                  <div className="pt-2">
                    {typeof price === 'number' ? (
                      <div className="flex items-baseline gap-1.5 font-mono">
                        <span className="text-4xl font-extrabold tracking-tight">
                          ${price.toLocaleString()}
                        </span>
                        <span className={`text-xs ${isFeatured ? 'text-slate-400' : 'text-slate-500'}`}>
                          {plan.unitLabel}
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-1.5 font-mono">
                        <span className="text-3xl font-extrabold tracking-tight">
                          {price}
                        </span>
                        <span className={`text-xs ${isFeatured ? 'text-slate-400' : 'text-slate-500'}`}>
                          {plan.unitLabel}
                        </span>
                      </div>
                    )}

                    {billingCycle === 'annual' && typeof price === 'number' && (
                      <div className={`text-[11px] font-mono mt-1 ${isFeatured ? 'text-[#a8da9f]' : 'text-[#236d1f]'}`}>
                        Billed annually (Includes 20% discount)
                      </div>
                    )}
                  </div>

                  {/* Architecture Scope Capacity Box */}
                  <div className={`p-3.5 rounded-xl font-mono text-xs ${
                    isFeatured ? 'bg-slate-900 border border-slate-800 text-slate-300' : 'bg-[#f7faf6] border border-[#cfe3cc] text-slate-800'
                  }`}>
                    <div className="text-[10px] uppercase opacity-75">SCOPE CAPACITY:</div>
                    <div className="font-bold mt-0.5">{plan.architectureScope}</div>
                  </div>

                  {/* Key Feature Inclusions */}
                  <div className="space-y-3">
                    <div className={`text-xs font-mono font-bold uppercase ${
                      isFeatured ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      KEY CAPABILITIES:
                    </div>
                    {plan.keyFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isFeatured ? 'text-[#a8da9f]' : 'text-[#277822]'
                        }`} />
                        <span className={isFeatured ? 'text-slate-200' : 'text-slate-700'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-8 mt-8 border-t border-slate-200/20 space-y-3">
                  <div className={`text-[11px] font-mono text-center ${
                    isFeatured ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {plan.supportLevel}
                  </div>

                  {plan.id === 'plan-plant' ? (
                    <Link
                      to="/product"
                      className={`w-full py-3.5 rounded-xl font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        isFeatured
                          ? 'bg-[#277822] hover:bg-[#1e6019] text-white shadow-lg shadow-[#277822]/40 border border-[#236d1f]'
                          : 'bg-[#277822] hover:bg-[#1e6019] text-white shadow-sm'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : plan.id === 'plan-enterprise' ? (
                    <a
                      href={billingCycle === 'annual' ? 'https://buy.stripe.com/test_14AaEX2IcdTZfHs5vOfbq01' : 'https://buy.stripe.com/test_bJeaEXaaE03966S6zSfbq00'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 rounded-xl font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        isFeatured
                          ? 'bg-[#277822] hover:bg-[#1e6019] text-white shadow-lg shadow-[#277822]/40 border border-[#236d1f]'
                          : 'bg-[#277822] hover:bg-[#1e6019] text-white shadow-sm'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : plan.id === 'plan-airgap' ? (
                    <a
                      href="#contact"
                      className={`w-full py-3.5 rounded-xl font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        isFeatured
                          ? 'bg-[#277822] hover:bg-[#1e6019] text-white shadow-lg shadow-[#277822]/40 border border-[#236d1f]'
                          : 'bg-[#277822] hover:bg-[#1e6019] text-white shadow-sm'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      onClick={onOpenDemoModal}
                      className={`w-full py-3.5 rounded-xl font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        isFeatured
                          ? 'bg-[#277822] hover:bg-[#1e6019] text-white shadow-lg shadow-[#277822]/40 border border-[#236d1f]'
                          : 'bg-[#277822] hover:bg-[#1e6019] text-white shadow-sm'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
