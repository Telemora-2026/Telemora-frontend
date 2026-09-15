import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  Building2, 
  Server, 
  Layers 
} from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    assetCount: '50 - 250 Assets',
    primaryProtocol: 'OPC-UA / MQTT Sparkplug B',
    deploymentPreference: 'Enterprise Hybrid Cloud',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="p-6 bg-[#f8faf7] text-slate-900 flex items-center justify-between border-b border-[#cfe3cc]">
          <div className="flex items-center gap-3">
            <img src="/Logo.png" alt="Telemora Logo" className="h-8 w-auto" />
            <div>
              <h3 className="font-extrabold text-lg font-sans text-slate-950">Request Architecture Review & Pilot</h3>
              <p className="text-xs font-mono text-[#277822] font-semibold">Direct Engineering Team Briefing</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-950 border border-[#cfe3cc] cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4 font-mono">
              <div className="w-16 h-16 rounded-full bg-[#ebf7e8] text-[#277822] flex items-center justify-center mx-auto border-2 border-[#b8dfb3]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-950 font-sans">
                Architecture Review Request Received
              </h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                A Telemora Reliability Solutions Architect will reach out to <span className="font-bold text-[#277822]">{formData.workEmail || 'your email'}</span> within 4 business hours with protocol integration specs.
              </p>
              <div className="p-3.5 rounded-xl bg-[#f8fbf7] border border-[#cfe3cc] text-xs text-slate-800 text-left space-y-1 max-w-sm mx-auto">
                <div>• Asset Capacity: <span className="font-bold">{formData.assetCount}</span></div>
                <div>• Ingress Protocol: <span className="font-bold">{formData.primaryProtocol}</span></div>
                <div>• Deployment: <span className="font-bold">{formData.deploymentPreference}</span></div>
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 rounded-xl bg-[#277822] text-white text-xs font-bold font-mono uppercase cursor-pointer hover:bg-[#1e6019] transition-colors shadow-xs"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elena Rostova"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#277822] font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                    WORK EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#277822] font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                    PLANT / COMPANY *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Precision Aero"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#277822] font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                    ESTIMATED ASSETS
                  </label>
                  <select
                    value={formData.assetCount}
                    onChange={(e) => setFormData({ ...formData, assetCount: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-mono focus:outline-none focus:border-[#277822] bg-white"
                  >
                    <option>1 - 50 Assets (Single Cell)</option>
                    <option>50 - 250 Assets (Plant Facility)</option>
                    <option>250 - 1,000 Assets (Multi-Line)</option>
                    <option>1,000+ Assets (Enterprise Global Fleet)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                    PRIMARY PROTOCOL
                  </label>
                  <select
                    value={formData.primaryProtocol}
                    onChange={(e) => setFormData({ ...formData, primaryProtocol: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-mono focus:outline-none focus:border-[#277822] bg-white"
                  >
                    <option>OPC-UA / MQTT Sparkplug B</option>
                    <option>Modbus TCP / RTU</option>
                    <option>EtherNet/IP / CIP</option>
                    <option>Profinet / Profibus</option>
                    <option>Direct 12.8 kHz Accelerometer Taps</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                    DEPLOYMENT MODEL
                  </label>
                  <select
                    value={formData.deploymentPreference}
                    onChange={(e) => setFormData({ ...formData, deploymentPreference: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-mono focus:outline-none focus:border-[#277822] bg-white"
                  >
                    <option>Enterprise Hybrid Cloud</option>
                    <option>100% Air-Gapped On-Prem Appliance</option>
                    <option>Customer-Managed Private VPC</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                  PLANT EQUIPMENT OR VIBRATION PAIN POINTS (OPTIONAL)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. False alarms on 5-axis spindles during heavy roughing passes..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-sans focus:outline-none focus:border-[#277822]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#277822] hover:bg-[#1e6019] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-md shadow-[#277822]/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Submit Architecture Briefing Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-[11px] font-mono text-slate-500 text-center flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#277822]" />
                <span>Confidential Engineering Inquiry • Strict NDA Compliant</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
