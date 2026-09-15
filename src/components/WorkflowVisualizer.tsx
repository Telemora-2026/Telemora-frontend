import React, { useState } from 'react';
import { 
  Activity, 
  ShieldCheck, 
  Radio, 
  CheckCircle2, 
  ArrowRight,
  Sliders,
  ChevronRight,
  Layers,
  Cpu,
  Building2,
  Cog,
  BarChart3,
  Cloud,
  Wifi,
  Database,
  Lock,
  Workflow,
  Sparkles
} from 'lucide-react';
import { WORKFLOW_STAGES, IIOT_HUB_NODES } from '../data/mockIndustrialData';
import { IIoTHubNode } from '../types';
import heroTelemetryImg from '../assets/images/hero_telemetry_hub.jpg';
import digitalTwinImg from '../assets/images/digital_twin_telemetry.jpg';
import nvidiaEdgeImg from '../assets/images/nvidia_edge_compute.jpg';

export const WorkflowVisualizer: React.FC = () => {
  const [activeViewMode, setActiveViewMode] = useState<'pipeline' | 'hub'>('pipeline');
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState<number>(0);
  const [selectedNode, setSelectedNode] = useState<IIoTHubNode>(IIOT_HUB_NODES[0]);
  const [spindleSpeed, setSpindleSpeed] = useState(12450);
  const [vibrationVal, setVibrationVal] = useState(1.42);
  const [ingestPacketCount, setIngestPacketCount] = useState(48240);

  const activeStage = WORKFLOW_STAGES[activeWorkflowIndex];

  return (
    <section id="workflow" className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Subtle Background Grids & Glows */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-40" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#277822]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2f9f1] border border-[#a8da9f] text-xs font-mono text-[#236d1f] font-bold mb-4 shadow-xs">
            <Workflow className="w-4 h-4 text-[#277822]" />
            <span>TELEMETRY INTELLIGENCE WORKFLOW VISUALIZER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4 font-sans">
            Five Stages to <br />
            <span className="text-[#277822]">One Clear Picture</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Raw industrial signals are validated, normalized into Protobuf v3 / ISA-95 entities, and verified via dynamic ±3σ anomaly engines before reaching engineers.
          </p>

          {/* View Mode Switcher */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="p-1.5 rounded-2xl bg-[#f4f9f3] border border-[#cfe3cc] font-mono text-xs inline-flex items-center shadow-xs">
              <button
                onClick={() => setActiveViewMode('pipeline')}
                className={`px-5 py-2.5 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeViewMode === 'pipeline'
                    ? 'bg-[#277822] text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                <Activity className="w-4 h-4" />
                <span>5-Stage Signal Pipeline</span>
              </button>
              <button
                onClick={() => setActiveViewMode('hub')}
                className={`px-5 py-2.5 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeViewMode === 'hub'
                    ? 'bg-[#277822] text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                <Radio className="w-4 h-4" />
                <span>IIoT Hub Topology</span>
              </button>
            </div>
          </div>
        </div>

        {/* VIEW MODE 1: BESPOKE 5-STAGE INTERACTIVE CONDUIT MATRIX */}
        {activeViewMode === 'pipeline' && (
          <div className="space-y-8">
            
            {/* Top Industrial Signal Pipeline Track */}
            <div className="p-3 rounded-3xl bg-slate-950 border-2 border-slate-800 shadow-2xl overflow-x-auto">
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 min-w-[760px] sm:min-w-0 relative">
                {WORKFLOW_STAGES.map((stage, idx) => {
                  const isSelected = activeWorkflowIndex === idx;
                  return (
                    <button
                      key={stage.stepNumber}
                      onClick={() => setActiveWorkflowIndex(idx)}
                      className={`p-5 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden group ${
                        isSelected
                          ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-[#277822] ring-2 ring-[#277822]/40 shadow-xl scale-[1.02]'
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                      }`}
                    >
                      {/* Active Top Glow Line */}
                      {isSelected && (
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-[#277822] to-emerald-400" />
                      )}

                      <div className="flex items-center justify-between font-mono text-[11px] mb-3">
                        <span className={`font-bold px-2 py-0.5 rounded ${
                          isSelected ? 'bg-[#277822] text-white shadow-xs' : 'bg-slate-800 text-slate-400'
                        }`}>
                          STAGE 0{idx + 1}
                        </span>
                        <span className={`w-2.5 h-2.5 rounded-full ${
                          isSelected ? 'bg-emerald-400 animate-pulse' : 'bg-slate-700'
                        }`} />
                      </div>

                      <h4 className="font-extrabold text-sm text-white font-sans tracking-tight leading-snug">
                        {stage.name}
                      </h4>
                      <p className={`text-[10px] font-mono mt-1 truncate ${
                        isSelected ? 'text-[#a8da9f] font-bold' : 'text-slate-400'
                      }`}>
                        {stage.tagline}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Deep Stage Inspection Command Console */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#fafdf9] border-2 border-[#cfe3cc] shadow-2xl space-y-8 relative overflow-hidden">
              
              {/* Stage Header Bar */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-[#cfe3cc]">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#236d1f]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#277822] animate-pulse" />
                    <span>STAGE {activeStage.stepNumber} TELEMETRY ENGINE INSPECTION</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-sans tracking-tight">
                    {activeStage.name} - <span className="text-[#277822]">{activeStage.tagline}</span>
                  </h3>
                </div>

                {/* Live Processing Metric Pills */}
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                  {activeStage.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="px-4 py-2.5 rounded-2xl bg-white border border-[#cfe3cc] text-slate-800 shadow-sm">
                      <span className="text-slate-500 text-[10px] uppercase font-bold block">{m.label}</span>
                      <span className="font-extrabold text-sm text-[#277822]">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main 2-Column Inspector Split */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Telemetry Specifications & Payload Contracts (7 Cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                    {activeStage.description}
                  </p>

                  {/* High-Contrast Data Contracts Grid */}
                  <div className="space-y-4 font-mono text-xs">
                    
                    {/* Inbound Telemetry Payload Box */}
                    <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-slate-400 uppercase font-extrabold tracking-wider">
                          INBOUND TELEMETRY PAYLOAD:
                        </span>
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                          RAW PROTOCOL INGRESS
                        </span>
                      </div>
                      <p className="text-slate-900 font-semibold text-xs leading-relaxed font-mono">
                        {activeStage.inputData}
                      </p>
                    </div>

                    {/* Normalized Output Artifact Box */}
                    <div className="p-5 rounded-2xl bg-[#ebf7e8] border border-[#a8da9f] shadow-sm space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-[#236d1f] uppercase font-extrabold tracking-wider">
                          NORMALIZED OUTPUT ARTIFACT:
                        </span>
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-[#277822] text-white">
                          PROTOBUF v3 / ISA-95
                        </span>
                      </div>
                      <p className="text-[#1a5516] font-bold text-xs leading-relaxed font-mono">
                        {activeStage.outputArtifact}
                      </p>
                    </div>

                  </div>

                  {/* Engineering Guarantees Strip */}
                  <div className="p-4 rounded-2xl bg-white border border-[#cfe3cc] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                    <span className="flex items-center gap-2 text-[#236d1f] font-bold">
                      <ShieldCheck className="w-4 h-4 text-[#277822]" />
                      <span>IEC 62443 Certified Optical Diode</span>
                    </span>
                    <span className="text-slate-500 font-semibold">
                      Zero Control Loop Interference
                    </span>
                  </div>
                </div>

                {/* Right: Dynamic Stage Graphic & Live Oscilloscope HUD (5 Cols) */}
                <div className="lg:col-span-5 space-y-5">
                  
                  {/* Dynamic Graphic Node Card */}
                  <div className="rounded-3xl overflow-hidden border-2 border-[#a8da9f] shadow-2xl relative group bg-slate-950">
                    <img 
                      src={
                        activeWorkflowIndex === 0 ? heroTelemetryImg :
                        activeWorkflowIndex === 1 ? nvidiaEdgeImg :
                        activeWorkflowIndex === 2 ? digitalTwinImg :
                        activeWorkflowIndex === 3 ? digitalTwinImg :
                        heroTelemetryImg
                      } 
                      alt={activeStage.name} 
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent flex flex-col justify-between p-4 pointer-events-none">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-slate-900/90 border border-[#a8da9f]/40 text-white text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-md">
                          <span className="w-2 h-2 rounded-full bg-[#277822] animate-pulse" />
                          <span>STAGE 0{activeWorkflowIndex + 1} LIVE NODE</span>
                        </span>
                        <span className="px-2.5 py-1 rounded bg-emerald-950/90 border border-emerald-500 text-emerald-300 text-[10px] font-mono font-bold">
                          12.8 kHz BURST
                        </span>
                      </div>

                      <div className="text-xs font-mono text-white flex items-center justify-between">
                        <span className="font-bold text-[#a8da9f]">{activeStage.name}</span>
                        <span className="text-slate-300">Live Active Node</span>
                      </div>
                    </div>
                  </div>

                  {/* Live Oscilloscope & Telemetry Numbers Card */}
                  <div className="p-5 rounded-3xl bg-slate-950 text-white font-mono text-xs space-y-4 shadow-2xl border border-slate-800">
                    
                    {/* Live SVG Oscilloscope Waveform */}
                    <div className="h-16 w-full bg-slate-900 rounded-2xl border border-slate-800 p-2 relative overflow-hidden flex items-center">
                      <svg className="w-full h-full" viewBox="0 0 300 60" preserveAspectRatio="none">
                        {/* Dynamic ±3σ Gaussian baseline limits */}
                        <path d="M 0,10 Q 75,8 150,10 T 300,10" fill="none" stroke="#277822" strokeWidth="1" strokeDasharray="2 2" opacity="0.7" />
                        <path d="M 0,50 Q 75,52 150,50 T 300,50" fill="none" stroke="#277822" strokeWidth="1" strokeDasharray="2 2" opacity="0.7" />
                        
                        {/* Live 12.8 kHz Waveform curve */}
                        <path
                          d="M 0,30 Q 25,18 50,30 T 100,24 T 150,36 T 200,22 T 250,32 L 300,30"
                          fill="none"
                          stroke="#a8da9f"
                          strokeWidth="2"
                        />
                      </svg>
                      <div className="absolute top-1.5 right-2.5 text-[9px] text-emerald-400 font-bold">
                        LIVE FFT WAVEFORM
                      </div>
                    </div>

                    {/* Live Telemetry Ticker */}
                    <div className="space-y-2 text-[11px]">
                      <div className="flex justify-between text-slate-300">
                        <span className="text-slate-400">Machine Spindle Speed:</span>
                        <span className="font-bold text-white">{spindleSpeed.toLocaleString()} RPM</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span className="text-slate-400">Spindle Bearing Vibration:</span>
                        <span className="font-bold text-[#a8da9f]">{vibrationVal} mm/s RMS</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span className="text-slate-400">Inbound Message Rate:</span>
                        <span className="font-bold text-white">{ingestPacketCount.toLocaleString()} msg/s</span>
                      </div>
                    </div>

                    <div className="pt-2.5 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                      <span>OT Governance Diode:</span>
                      <span className="text-emerald-400 font-bold">READ-ONLY (0 Control Write)</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        )}

        {/* VIEW MODE 2: RADIAL IIOT HUB TOPOLOGY FIGURE */}
        {activeViewMode === 'hub' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: 7 Radial Hub Nodes List (6 Cols) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {IIOT_HUB_NODES.map((node) => {
                const isSelected = selectedNode.id === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#f7faf6] border-[#277822] shadow-md ring-2 ring-[#277822]/20'
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase text-[#236d1f] bg-[#ebf7e8] px-2 py-0.5 rounded border border-[#a8da9f]">
                        {node.category}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#277822]" />
                    </div>
                    <h4 className="font-extrabold text-sm text-slate-950 mt-2 font-sans">
                      {node.label}
                    </h4>
                    <div className="text-[11px] font-mono text-slate-600 mt-1">
                      {node.telemetryMetric}: <span className="font-bold text-slate-900">{node.liveValue}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Selected Node Detail Card (6 Cols) */}
            <div className="lg:col-span-6 p-8 rounded-3xl bg-[#fafdf9] border-2 border-[#cfe3cc] shadow-xl space-y-5 font-mono text-xs">
              <div className="flex items-center justify-between pb-4 border-b border-[#cfe3cc]">
                <span className="text-[10px] uppercase font-bold text-[#236d1f]">
                  CONNECTED ASSET TELEMETRY NODE
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#ebf7e8] text-[#236d1f] font-bold text-[10px] border border-[#a8da9f]">
                  {selectedNode.status}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-slate-950 font-sans">
                  {selectedNode.name}
                </h3>
                <p className="text-xs text-slate-600 font-sans mt-1.5 leading-relaxed">
                  {selectedNode.description}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#cfe3cc] space-y-2.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Live Telemetry Metric:</span>
                  <span className="font-bold text-[#277822]">{selectedNode.telemetryMetric}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Stream Value:</span>
                  <span className="font-bold text-slate-900">{selectedNode.liveValue}</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 flex items-center gap-2 pt-2">
                <ShieldCheck className="w-4 h-4 text-[#277822]" />
                <span>Unidirectional OT Ingress • Pure Decision Support</span>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
