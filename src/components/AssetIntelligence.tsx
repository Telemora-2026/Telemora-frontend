import React, { useState } from 'react';
import { 
  Layers, 
  ChevronRight, 
  ChevronDown, 
  Building2, 
  Cpu, 
  Radio, 
  Activity, 
  CheckCircle2, 
  FileText,
  Sliders
} from 'lucide-react';
import digitalTwinImg from '../assets/images/digital_twin_telemetry.jpg';

export const AssetIntelligence: React.FC = () => {
  const [expandedSite, setExpandedSite] = useState(true);
  const [expandedPlant, setExpandedPlant] = useState(true);
  const [expandedLine, setExpandedLine] = useState(true);
  const [expandedMachine, setExpandedMachine] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState('Spindle Roller Bearing #2');

  return (
    <section id="assets" className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-xs font-mono text-emerald-800 font-bold mb-3">
            <Layers className="w-3.5 h-3.5 text-emerald-700" />
            <span>ISA-95 SEMANTIC TOPOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            6-Level Equipment <br />
            <span className="text-emerald-700">Digital Twin Hierarchy.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Telemora maps raw sensor tags into a standardized ISA-95 model, providing immediate physical context from global enterprise sites down to individual bearing races.
          </p>
        </div>

        {/* 2-Column Split: Hierarchy Tree & Live Component Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 cols): Interactive Tree Structure */}
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-slate-500 font-bold uppercase">
              <span>ENTERPRISE ASSET TREE</span>
              <span className="text-emerald-700">ISA-95 ALIGNED</span>
            </div>

            {/* Level 1: Enterprise Site */}
            <div className="space-y-2">
              <div 
                onClick={() => setExpandedSite(!expandedSite)}
                className="flex items-center gap-2 p-2 rounded-lg bg-slate-100 text-slate-900 font-bold cursor-pointer hover:bg-slate-200"
              >
                {expandedSite ? <ChevronDown className="w-4 h-4 text-emerald-700" /> : <ChevronRight className="w-4 h-4" />}
                <Building2 className="w-4 h-4 text-emerald-700" />
                <span>LEVEL 01: Enterprise (Apex Industrial Corp)</span>
              </div>

              {expandedSite && (
                <div className="ml-4 pl-3 border-l-2 border-slate-200 space-y-2">
                  {/* Level 2: Plant */}
                  <div 
                    onClick={() => setExpandedPlant(!expandedPlant)}
                    className="flex items-center gap-2 p-2 rounded-lg bg-emerald-50/60 text-emerald-950 font-bold cursor-pointer hover:bg-emerald-100/60"
                  >
                    {expandedPlant ? <ChevronDown className="w-4 h-4 text-emerald-700" /> : <ChevronRight className="w-4 h-4" />}
                    <span>LEVEL 02: Plant 01 (Gary, IN)</span>
                  </div>

                  {expandedPlant && (
                    <div className="ml-4 pl-3 border-l-2 border-slate-200 space-y-2">
                      {/* Level 3: Production Line */}
                      <div 
                        onClick={() => setExpandedLine(!expandedLine)}
                        className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-slate-800 font-semibold cursor-pointer hover:bg-slate-100"
                      >
                        {expandedLine ? <ChevronDown className="w-4 h-4 text-emerald-700" /> : <ChevronRight className="w-4 h-4" />}
                        <span>LEVEL 03: Aerospace Machining Cell B</span>
                      </div>

                      {expandedLine && (
                        <div className="ml-4 pl-3 border-l-2 border-slate-200 space-y-2">
                          {/* Level 4: Machine Tool */}
                          <div 
                            onClick={() => setExpandedMachine(!expandedMachine)}
                            className="flex items-center gap-2 p-2 rounded-lg bg-emerald-100/80 text-emerald-950 font-bold cursor-pointer"
                          >
                            {expandedMachine ? <ChevronDown className="w-4 h-4 text-emerald-700" /> : <ChevronRight className="w-4 h-4" />}
                            <Cpu className="w-4 h-4 text-emerald-700" />
                            <span>LEVEL 04: CNC-5AX-04 (5-Axis Center)</span>
                          </div>

                          {expandedMachine && (
                            <div className="ml-4 pl-3 border-l-2 border-emerald-300 space-y-1.5">
                              {/* Level 5: Components */}
                              {[
                                'Spindle Roller Bearing #2',
                                'Direct-Drive High-Speed Motor',
                                'High-Pressure Coolant Manifold',
                                'Ball Screw X-Axis Drive'
                              ].map((comp) => (
                                <button
                                  key={comp}
                                  onClick={() => setSelectedComponent(comp)}
                                  className={`w-full flex items-center justify-between p-2 rounded-lg text-left transition-colors cursor-pointer ${
                                    selectedComponent === comp
                                      ? 'bg-emerald-700 text-white font-bold'
                                      : 'text-slate-700 hover:bg-slate-100'
                                  }`}
                                >
                                  <span>L5: {comp}</span>
                                  <span className="text-[10px] opacity-80">4 Sensors</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Column (7 cols): Selected Component Topology Inspector */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-700 px-2.5 py-0.5 rounded bg-emerald-50 border border-emerald-200 uppercase">
                  COMPONENT TOPOLOGY INSPECTOR
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
                  {selectedComponent}
                </h3>
                <p className="text-xs font-mono text-slate-500 mt-1">
                  Parent Asset: CNC-5AX-04 • Aerospace Cell B • Gary Plant 01
                </p>
              </div>

              <div className="text-right font-mono">
                <div className="text-[10px] text-slate-400">PHYSICAL HEALTH</div>
                <div className="text-2xl font-extrabold text-emerald-700">96.8% (NOMINAL)</div>
              </div>
            </div>

            {/* 3D Holographic Digital Twin Graphic Card */}
            <div className="rounded-2xl overflow-hidden border border-[#cfe3cc] shadow-md relative group">
              <img 
                src={digitalTwinImg} 
                alt="ISA-95 Semantic Digital Twin Telemetry Overlay" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                <div className="text-[11px] font-mono text-white flex items-center justify-between w-full">
                  <span className="flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#277822] animate-pulse" />
                    ISA-95 Digital Twin Hologram Overlay
                  </span>
                  <span className="text-[#a8da9f]">Component Health: 96.8%</span>
                </div>
              </div>
            </div>

            {/* Operating State Context Card */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 font-mono text-xs">
              <div className="flex justify-between items-center text-slate-600">
                <span>REAL-TIME OPERATING STATE:</span>
                <span className="text-emerald-800 font-bold">TITANIUM ROUGHING PASS</span>
              </div>
              <div className="flex justify-between items-center text-slate-600">
                <span>ROTATIONAL LOAD FACTOR:</span>
                <span className="text-slate-900 font-bold">12,450 RPM @ 74% Torque</span>
              </div>
              <div className="flex justify-between items-center text-slate-600">
                <span>APPLIED GAUSSIAN BASELINE:</span>
                <span className="text-emerald-800 font-bold">High-Load Dynamic Envelope (99.7%)</span>
              </div>
            </div>

            {/* Linked Sensors List for this Component */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-slate-700 uppercase">
                BOUND SENSORS (LEVEL 06):
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-200 space-y-1">
                  <div className="text-xs font-bold text-slate-900">Radial Accelerometer (12.8 kHz)</div>
                  <div className="text-xs font-mono text-emerald-800 font-bold">1.42 mm/s RMS (Nominal)</div>
                  <div className="text-[10px] font-mono text-slate-500">FFT Dominant: 148.5 Hz</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="text-xs font-bold text-slate-900">Inner Race Thermocouple</div>
                  <div className="text-xs font-mono text-slate-800 font-bold">46.8 °C (Nominal)</div>
                  <div className="text-[10px] font-mono text-slate-500">Threshold: &lt; 65.0 °C</div>
                </div>
              </div>
            </div>

            {/* Maintenance Linkage Note */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>CMMS Link: SAP PM WO-8821 (Lubrication Check)</span>
              <span className="text-emerald-700 font-semibold">Audit Synchronized</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
