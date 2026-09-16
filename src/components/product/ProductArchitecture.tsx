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
  ShieldCheck, 
  Info,
  ExternalLink
} from 'lucide-react';
import nvidiaEdgeImg from '../../assets/images/nvidia_edge_compute.jpg';

export const ProductArchitecture: React.FC = () => {
  const [selectedSdkId, setSelectedSdkId] = useState<string>('jetpack');

  const sdks = [
    {
      id: 'jetpack',
      name: 'NVIDIA JetPack SDK',
      target: 'NVIDIA Jetson Edge Gateways',
      tier: 'Tier 02 On-Premise Edge',
      role: 'Low-Power Edge Acceleration & Signal Ingestion',
      icon: Server,
      specBadge: 'Zero OT Latency',
      description: 'Provides the foundational software stack for low-power, accelerated computing on on-premise NVIDIA Jetson edge gateways (Tier 02). It enables local, on-site processing directly adjacent to physical machinery, running high-speed spectral Fast Fourier Transform (FFT) analysis on raw vibration waveforms and handling initial protocol normalization without adding latency or risk to the operational technology (OT) network.',
      keyCapabilities: [
        'Local on-site processing directly adjacent to physical production machinery',
        'High-speed spectral Fast Fourier Transform (FFT) on raw 12.8 kHz waveforms',
        'Initial protocol normalization eliminating cloud round-trip delay',
        'Zero added latency or writeback risk to the plant operational technology (OT) network'
      ],
      throughput: 'Up to 275 TOPS INT8 Edge Compute',
      memoryIngress: 'Zero-Copy Unified Memory (UMA)',
      isolation: 'Hardware Unidirectional Optical Diode'
    },
    {
      id: 'rapids',
      name: 'NVIDIA RAPIDS (cuDF & cuML)',
      target: 'Plant Analytics & Ingestion Cluster',
      tier: 'Tier 03 Accelerated Data Science',
      role: 'Time-Series Normalization & Contextual Anomaly Engine',
      icon: Database,
      specBadge: 'Dynamic ±3σ Baselines',
      description: 'Core data science and analytical engine. You will use cuDF (GPU-accelerated Pandas) to normalize incoming time-series streams into unified ISA-95 hierarchical data structures at GPU speed. In tandem, cuML (GPU-accelerated Scikit-learn) powers the Contextual Anomaly Engine, evaluating dynamic ±3σ Gaussian baseline envelopes tailored to real-time machine cutting states and calculating asset health scores.',
      keyCapabilities: [
        'cuDF GPU-accelerated Pandas normalizing raw time-series into ISA-95 hierarchy',
        'cuML GPU-accelerated Scikit-learn driving the Contextual Anomaly Engine',
        'Evaluates dynamic ±3σ Gaussian baseline envelopes adapted to cutting states',
        'Sub-millisecond asset health score calculation across multi-line deployments'
      ],
      throughput: '500,000+ Time-Series Windows / Sec',
      memoryIngress: 'GPU High-Bandwidth VRAM',
      isolation: 'State-Aware Matrix Covariance'
    },
    {
      id: 'triton',
      name: 'NVIDIA Triton Inference Server',
      target: 'Enterprise Production Serving',
      tier: 'Tier 04 Enterprise Serving Backend',
      role: 'Concurrent Model Serving & Dynamic Batching',
      icon: Zap,
      specBadge: 'Multi-Framework Workloads',
      description: 'Production serving and deployment backend. Triton manages concurrent model execution, dynamic batching, and multi-framework workloads, allowing the platform to deploy and serve condition intelligence and multivariate anomaly models across distributed plant environments with low latency.',
      keyCapabilities: [
        'Concurrent multi-model execution across diverse rotating machine classes',
        'Dynamic batching maximizing hardware throughput for dense sensor grids',
        'Multi-framework workload support spanning TensorRT, ONNX, and PyTorch',
        'Deploys condition intelligence across multi-site plant environments with ultra-low latency'
      ],
      throughput: '< 10 ms Multi-Sensor Ensemble Latency',
      memoryIngress: 'Dynamic Shared Memory IPC',
      isolation: 'Isolated Multi-Tenant Inference Workers'
    },
    {
      id: 'cuda',
      name: 'NVIDIA CUDA Toolkit (cuFFT)',
      target: 'Foundational DSP Acceleration',
      tier: 'Tier 01 Parallel Computing Platform',
      role: 'Low-Level Digital Signal Processing & Spectral Decompositions',
      icon: Cpu,
      specBadge: '12.8 kHz Burst Sampling',
      description: 'Foundational parallel computing platform. Provides the low-level compiler tools and libraries (such as cuFFT) required to execute custom digital signal processing algorithms and accelerated spectral decompositions directly in GPU memory, maximizing throughput during 12.8 kHz burst sampling cycles.',
      keyCapabilities: [
        'Compiler tools & libraries executing custom DSP algorithms in GPU memory',
        'cuFFT accelerated spectral decompositions during 12.8 kHz burst sampling',
        'Sub-harmonic resonance and sideband harmonic isolation at machine speeds',
        'Maximizes streaming pipeline throughput during continuous acquisition cycles'
      ],
      throughput: '< 2.5 ms Execution for 65,536-Point FFT',
      memoryIngress: 'Direct-to-GPU DMA PCIe Transfers',
      isolation: 'Memory-Protected Compute Kernels'
    }
  ];

  const activeSdk = sdks.find(s => s.id === selectedSdkId) || sdks[0];
  const ActiveIcon = activeSdk.icon;

  return (
    <section id="architecture" className="py-24 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#277822]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2f9f1]/10 border border-[#a8da9f]/40 text-xs font-mono text-[#a8da9f] font-bold mb-4 shadow-xs">
            <Cpu className="w-4 h-4 text-[#a8da9f]" />
            <span>UNDER THE HOOD: ACCELERATED FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans mb-4">
            GPU-Accelerated Computing &amp; <br />
            <span className="text-[#a8da9f]">High-Throughput Edge AI Processing.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Telorix is engineered from the ground up on industry-leading accelerated computing SDKs to execute digital signal processing, dynamic Gaussian baseline training, and low-latency inference across plant edge gateways and central servers.
          </p>
        </div>

        {/* 4 SDK Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {sdks.map((sdk) => {
            const isSelected = selectedSdkId === sdk.id;
            const Icon = sdk.icon;
            return (
              <button
                key={sdk.id}
                onClick={() => setSelectedSdkId(sdk.id)}
                className={`p-6 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-[#a8da9f] shadow-2xl ring-2 ring-[#a8da9f]/30 scale-[1.02]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-950 text-[#a8da9f] border border-slate-800">
                      {sdk.tier}
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#a8da9f]' : 'text-slate-500'}`} />
                  </div>
                  <h3 className="text-base font-extrabold text-white font-sans mb-1">
                    {sdk.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans line-clamp-2">
                    {sdk.role}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">{sdk.specBadge}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-[#a8da9f]' : 'text-slate-600'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected SDK Deep Dive Container */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-[11px] font-mono font-bold text-[#a8da9f] mb-3">
                  <ActiveIcon className="w-3.5 h-3.5" />
                  <span>ACCELERATED SDK SPECIFICATION • {activeSdk.tier}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                  {activeSdk.name}
                </h3>
                <p className="text-xs font-mono text-[#a8da9f] mt-1 font-semibold">
                  Target: {activeSdk.target}
                </p>
                <p className="text-sm text-slate-300 font-sans mt-3 leading-relaxed">
                  {activeSdk.description}
                </p>
              </div>

              {/* Specific Technical Capabilities */}
              <div className="space-y-3">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  TECHNICAL SPECIFICATIONS &amp; CAPABILITIES:
                </div>
                {activeSdk.keyCapabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-[#a8da9f] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              {/* Benchmarked Capacity Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs flex items-center justify-between">
                <span className="text-slate-400">BENCHMARKED THROUGHPUT:</span>
                <span className="text-[#a8da9f] font-bold text-sm">{activeSdk.throughput}</span>
              </div>
            </div>

            {/* Right Hardware Appliance & Specifications Card (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl relative group">
                <img 
                  src={nvidiaEdgeImg} 
                  alt="NVIDIA GPU Accelerated Industrial Telemetry Gateway" 
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-end p-3">
                  <div className="text-[11px] font-mono text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#a8da9f] animate-pulse" />
                    <span className="font-bold">On-Premise Industrial AI Node</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400 uppercase text-[10px]">DEPLOYMENT ARCHITECTURE</span>
                  <span className="text-[#a8da9f] font-bold">{activeSdk.tier.split(' ')[0]}</span>
                </div>

                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-slate-400">• Memory Ingress:</span>
                  <span className="text-white font-semibold">{activeSdk.memoryIngress}</span>
                </div>
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-slate-400">• Network Isolation:</span>
                  <span className="text-emerald-400 font-semibold">{activeSdk.isolation}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Access Live Operations:</span>
                <a 
                  href="https://hub.telemora.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a8da9f] font-bold hover:underline flex items-center gap-1"
                >
                  hub.telemora.net
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Scannable Architecture Disclaimer Notice */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex items-start gap-2.5 text-xs text-slate-400 font-sans">
            <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <p className="text-[11px] leading-relaxed text-slate-400">
              <strong className="text-slate-300">Technical Foundation Note:</strong> Technologies showcased (NVIDIA JetPack SDK, NVIDIA RAPIDS, NVIDIA Triton Inference Server, NVIDIA CUDA Toolkit) represent the selected high-performance computational stack for accelerated edge ingestion, dynamic Gaussian baseline enveloping, and enterprise model deployment across distributed plant environments.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
