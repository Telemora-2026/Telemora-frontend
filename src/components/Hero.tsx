import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Server, 
  Wifi, 
  Building2, 
  Cog, 
  BarChart3, 
  Cloud, 
  Play, 
  Pause,
  CheckCircle2,
  Zap,
  Radio,
  FileText,
  Sliders,
  ChevronRight,
  Database
} from 'lucide-react';
import { IIOT_HUB_NODES, WORKFLOW_STAGES } from '../data/mockIndustrialData';
import { IIoTHubNode, WorkflowStage } from '../types';
import heroTelemetryImg from '../assets/images/hero_telemetry_hub.jpg';
import digitalTwinImg from '../assets/images/digital_twin_telemetry.jpg';
import nvidiaEdgeImg from '../assets/images/nvidia_edge_compute.jpg';

interface HeroProps {
  onOpenDemoModal: () => void;
  onExploreClick: () => void;
  onArchitectureClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenDemoModal,
  onExploreClick,
  onArchitectureClick
}) => {
  const [activeViewMode, setActiveViewMode] = useState<'pipeline' | 'hub'>('pipeline');
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState<number>(0);
  const [selectedNode, setSelectedNode] = useState<IIoTHubNode>(IIOT_HUB_NODES[0]);
  const [isLiveStreaming, setIsLiveStreaming] = useState(true);
  const [spindleSpeed, setSpindleSpeed] = useState(12450);
  const [vibrationVal, setVibrationVal] = useState(1.42);
  const [ingestPacketCount, setIngestPacketCount] = useState(48240);

  // Simulate real-time streaming telemetry ticks
  useEffect(() => {
    if (!isLiveStreaming) return;
    const interval = setInterval(() => {
      setSpindleSpeed(prev => prev + Math.floor(Math.random() * 20) - 10);
      setVibrationVal(prev => +(prev + (Math.random() * 0.06 - 0.03)).toFixed(2));
      setIngestPacketCount(prev => prev + Math.floor(Math.random() * 24) - 11);
    }, 1500);
    return () => clearInterval(interval);
  }, [isLiveStreaming]);

  const activeStage = WORKFLOW_STAGES[activeWorkflowIndex];

  const currentGraphic = {
    img: digitalTwinImg,
    title: '3D ISA-95 Holographic Digital Twin',
    tag: 'CNC-5AX-04 & PUMP-HT01',
    health: '96.8% Nominal',
    badge: 'ISA-95 HIERARCHY'
  };

  return (
    <section className="relative pt-8 pb-20 lg:pt-12 lg:pb-28 bg-white overflow-hidden border-b border-slate-200">
      {/* Background Engineering Grids */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-40" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#277822]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Operational Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2f9f1] border border-[#a8da9f] text-xs font-mono text-[#236d1f] font-bold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#277822] animate-pulse" />
            <span>INDUSTRIAL TELEMETRY INTELLIGENCE PLATFORM</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-700">MANUFACTURING &amp; IoT</span>
          </div>
        </div>

        {/* Hero Grid: Text on Left (7 cols), Enhanced Interactive Multi-Graphic Studio on Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Hero Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.08] font-sans">
              Transforming Industrial Signals <br />
              <span className="text-[#277822]">Into Operational Context.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans max-w-2xl">
              Telemora connects machine and sensor data with asset and maintenance context, helping engineering teams spot deviations, investigate anomalies, and know where to look next.
            </p>

            {/* Action CTAs: Main Hero button points directly to /product */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/product"
                className="px-7 py-4 rounded-xl bg-[#277822] hover:bg-[#1e6019] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#277822]/25 border border-[#236d1f] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center gap-2.5"
              >
                <span>Explore Telorix AI Platform</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={onExploreClick}
                className="px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-mono font-bold text-xs uppercase tracking-wider border border-slate-300 shadow-sm transition-all hover:border-slate-400 cursor-pointer flex items-center gap-2"
              >
                <Activity className="w-4 h-4 text-[#277822]" />
                <span>Live Operations View</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-2 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#277822]" />
                No Control Loop Interruption
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#277822]" />
                Full ISA-95 Digital Twin Context
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#277822]" />
                Lossless Store-and-Forward
              </span>
            </div>
          </div>

          {/* Right Hero Graphic Showcase: Interactive Multi-Perspective Studio (5 cols) */}
          <div className="lg:col-span-5 relative space-y-3">
            
            {/* Main Interactive Image Frame */}
            <div className="rounded-3xl overflow-hidden border-2 border-[#a8da9f] shadow-2xl relative group bg-slate-950">
              
              {/* Graphic Asset with Smooth Crossfade Effect */}
              <img 
                src={currentGraphic.img} 
                alt={currentGraphic.title} 
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
              />
              
              {/* Overlay Holographic Live Telemetry Badges */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent p-5 flex flex-col justify-between pointer-events-none">
                
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <div className="px-3 py-1 rounded-full bg-slate-900/95 backdrop-blur-md border border-[#a8da9f]/50 text-white text-[11px] font-mono font-bold flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#277822] animate-pulse" />
                    <span>LIVE INGEST: {ingestPacketCount.toLocaleString()} msg/s</span>
                  </div>

                  <div className="px-2.5 py-1 rounded-lg bg-emerald-950/95 border border-emerald-500 text-emerald-300 text-[10px] font-mono font-bold">
                    {currentGraphic.badge}
                  </div>
                </div>

                {/* Bottom Live Metrics Glass Card */}
                <div className="p-3.5 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-slate-700/80 shadow-2xl space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-[10px]">
                    <span className="text-[#a8da9f] font-bold">{currentGraphic.title}</span>
                    <span className="text-emerald-400 font-bold">{currentGraphic.health}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div>
                      <span className="text-slate-400 block text-[9px]">VIBRATION RMS</span>
                      <span className="font-bold text-[#a8da9f]">{vibrationVal} mm/s</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[9px]">SPINDLE SPEED</span>
                      <span className="font-bold text-white">{spindleSpeed.toLocaleString()} RPM</span>
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
