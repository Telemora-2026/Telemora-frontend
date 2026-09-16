import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  HardDrive, 
  Server, 
  FileCheck, 
  CheckCircle2, 
  AlertOctagon,
  Radio
} from 'lucide-react';

export const ProductSecurity: React.FC = () => {
  const securityPillars = [
    {
      title: 'Physical Unidirectional Optical Diode',
      subtitle: 'Zero OT Control-Loop Interference',
      description: 'Physical photodiode isolation guarantees that telemetry data can only travel outward from the machine tap to the Telorix gateway. Write commands, firmware modifications, or PLC overrides are physically impossible at the hardware layer.',
      badge: 'HARDWARE AIR-GAP',
      icon: ShieldCheck,
      details: [
        'Pure unidirectional photon-based transmission',
        'Cannot transmit packets back toward machine PLCs or drive servos',
        'Eliminates threat vectors targeting critical operational technology'
      ]
    },
    {
      title: 'Lossless Store-and-Forward Buffering',
      subtitle: 'Guaranteed 0.00% Telemetry Loss',
      description: 'Plant networks suffer intermittent drops. Telorix on-premise gateways maintain a high-speed local NVMe circular ring buffer capable of retaining up to 30 days of 12.8 kHz continuous burst telemetry, auto-reconciling upon uplink restoration.',
      badge: 'NVME RESILIENCE',
      icon: HardDrive,
      details: [
        'Local solid-state ring buffer storing 30+ days of high-res telemetry',
        'Automatic deduplication and temporal backfill synchronization',
        'Preserves critical failure waveforms even during complete network severance'
      ]
    },
    {
      title: '100% Air-Gapped Sovereign Deployment',
      subtitle: 'Zero Cloud Egress for Sensitive IP',
      description: 'Built for defense, aerospace, and semiconductor manufacturing where process parameters cannot leave plant boundaries. Telorix operates entirely within your on-premise local area network without requiring public internet access.',
      badge: 'AIR-GAPPED COMPLIANT',
      icon: Server,
      details: [
        'Local model training, inference, and dashboard rendering',
        'Full compatibility with isolated on-prem Kubernetes & bare-metal racks',
        'Role-Based Access Control (RBAC) with LDAP / Active Directory integration'
      ]
    },
    {
      title: 'Industrial Cybersecurity Certification',
      subtitle: 'IEC 62443 & ISO 18436 Alignment',
      description: 'Engineered in strict accordance with IEC 62443-4-2 Security Level 2 (SL-2) requirements for industrial automation and control systems, while condition metrics adhere to ISO 18436 vibration analysis standards.',
      badge: 'CERTIFIED COMPLIANCE',
      icon: FileCheck,
      details: [
        'TLS 1.3 encrypted internal transport with mutual mTLS certificate auth',
        'Immutable cryptographic audit logging for every diagnostic recommendation',
        'Certified for critical infrastructure and classified defense facilities'
      ]
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-30" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#277822]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2f9f1] border border-[#a8da9f] text-xs font-mono text-[#236d1f] font-bold mb-4 shadow-xs">
            <Lock className="w-4 h-4 text-[#277822]" />
            <span>OPERATIONAL TECHNOLOGY SECURITY &amp; COMPLIANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-sans mb-4">
            Zero PLC Risk. <br />
            <span className="text-[#277822]">Uncompromising Plant-Floor Safety.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Industrial teams cannot afford cybersecurity risks or downtime introduced by telemetry tools. Telorix was designed with hardware-enforced isolation from day one.
          </p>
        </div>

        {/* 4 Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {securityPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-[#fafdf9] border-2 border-[#cfe3cc] shadow-sm hover:shadow-md transition-shadow relative space-y-5"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#f2f9f1] border border-[#a8da9f] flex items-center justify-center text-[#277822]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded bg-[#ebf7e8] text-[#236d1f] border border-[#a8da9f]">
                    {pillar.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-sans mb-1">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-mono font-semibold text-[#277822] mb-3">
                    {pillar.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 space-y-2 font-mono text-xs text-slate-700">
                  {pillar.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#277822] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
