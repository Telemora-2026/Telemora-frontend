import React, { useState } from 'react';
import { 
  Cpu, 
  Database, 
  Server, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Activity, 
  ShieldCheck, 
  ExternalLink,
  Info
} from 'lucide-react';
import { NVIDIA_TECH_SHOWCASE } from '../data/mockIndustrialData';
import { NvidiaTechnology } from '../types';
import nvidiaEdgeImg from '../assets/images/nvidia_edge_compute.jpg';

export const NvidiaTechShowcase: React.FC = () => {
  const [selectedTechId, setSelectedTechId] = useState<string>('nv-rapids');
  const activeTech = NVIDIA_TECH_SHOWCASE.find(t => t.id === selectedTechId) || NVIDIA_TECH_SHOWCASE[0];

  return (
    <section id="tech-showcase" className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#76b900]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#76b900]/15 border border-[#76b900]/40 text-xs font-mono text-[#a8da9f] font-bold mb-4 shadow-xs">
            <Cpu className="w-4 h-4 text-[#76b900]" />
            <span>PRODUCT PAGE TECHNICAL SHOWCASE (PROPOSED ACCELERATED COMPUTE)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-sans">
            GPU-Accelerated Telemetry &amp; <br />
            <span className="text-[#a8da9f]">High-Throughput Edge AI Processing.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Architectural options for high-frequency vibration signal processing, dynamic multi-state envelope training, and low-latency edge AI inference.
          </p>
        </div>

        {/* 4 Technology Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {NVIDIA_TECH_SHOWCASE.map((tech) => {
            const isSelected = selectedTechId === tech.id;
            return (
              <div
                key={tech.id}
                onClick={() => setSelectedTechId(tech.id)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-[#76b900] shadow-xl ring-2 ring-[#76b900]/30 scale-[1.02]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#a8da9f] bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                      {tech.architectureTier}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {tech.category.split('&')[0]}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white font-sans">
                    {tech.name}
                  </h3>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {tech.proposedRole}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Throughput:</span>
                  <span className="text-[#a8da9f] font-bold truncate max-w-[120px]">{tech.benchmarkedThroughput.split(' ')[0]} {tech.benchmarkedThroughput.split(' ')[1]}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Technology Deep-Dive Panel */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Capability List (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-[#a8da9f] uppercase">
                  PROPOSED ARCHITECTURE ROLE: {activeTech.category}
                </div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                  {activeTech.name} - {activeTech.proposedRole}
                </h4>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase">
                  TECHNICAL CAPABILITY SPECIFICATIONS:
                </div>
                {activeTech.technicalCapabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-[#76b900] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs flex items-center justify-between">
                <span className="text-slate-400">BENCHMARKED COMPUTE CAPACITY:</span>
                <span className="text-[#a8da9f] font-bold text-sm">{activeTech.benchmarkedThroughput}</span>
              </div>
            </div>

            {/* Right: Architectural Diode / Edge Card & Hardware Graphic (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl relative group">
                <img 
                  src={nvidiaEdgeImg} 
                  alt="NVIDIA GPU Accelerated Industrial Telemetry Gateway" 
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-3">
                  <div className="text-[11px] font-mono text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#76b900] animate-pulse" />
                    <span className="font-bold">Proposed GPU Inference Node</span>
                    <span className="text-slate-300">• 275 TOPS Compute</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400 uppercase text-[10px]">DEPLOYMENT TARGET</span>
                  <span className="text-[#a8da9f] font-bold">{activeTech.architectureTier}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-[11px]">
                  <div className="text-slate-400">• Memory Ingress: <span className="text-white font-bold">Zero-Copy DMA PCIe / Shared Memory</span></div>
                  <div className="text-slate-400">• Inference Model: <span className="text-white font-bold">TensorRT / ONNX Dynamic Batching</span></div>
                  <div className="text-slate-400">• OT Isolation: <span className="text-emerald-400 font-bold">Hardware Optical Diode Protected</span></div>
                </div>
              </div>
            </div>

          </div>

          {/* Compliance Disclaimer Notice (BA Section 3.2) */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex items-start gap-2.5 text-xs text-slate-400 font-sans">
            <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <p className="text-[11px] leading-relaxed text-slate-400">
              <strong className="text-slate-300">Technical Showcase Note:</strong> Technologies showcased (NVIDIA RAPIDS™, CUDA®, Jetson™, Triton™) represent proposed architectural options for high-throughput industrial telemetry processing, edge analytics, AI inference, and model deployment. Display does not imply confirmed integration, commercial partnership, or certification.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
