import React, { useState, useEffect } from 'react';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Activity, 
  ShieldCheck, 
  Lock, 
  Layers, 
  Cpu, 
  Wifi, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Sparkles, 
  Server, 
  Database, 
  Radio, 
  Sliders, 
  Zap, 
  FileText,
  RefreshCw,
  Eye,
  Check
} from 'lucide-react';
import { FAQ_QUESTIONS_DATA } from '../data/mockIndustrialData';
import { QuestionItem, QuestionCategory } from '../types';

interface QuestionsSectionProps {
  onOpenDemoModal: () => void;
}

export const QuestionsSection: React.FC<QuestionsSectionProps> = ({ onOpenDemoModal }) => {
  const [activeCategory, setActiveCategory] = useState<QuestionCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'faq-01': true,
    'faq-02': true,
    'faq-03': false,
    'faq-04': false,
    'faq-05': false,
    'faq-06': false
  });

  // State for Question 1 (Gaussian Envelope Interactive Visualizer)
  const [selectedMachineState, setSelectedMachineState] = useState<'roughing' | 'finishing' | 'anomaly'>('roughing');

  // State for Question 2 (Hardware Diode Writeback Test)
  const [diodeTestResult, setDiodeTestResult] = useState<string | null>(null);
  const [diodeTesting, setDiodeTesting] = useState(false);

  // State for Question 3 (ISA-95 Node Selection)
  const [selectedIsaLevel, setSelectedIsaLevel] = useState<number>(4);

  // State for Question 4 (Protocol Tab Selection)
  const [selectedProtocol, setSelectedProtocol] = useState<'opcua' | 'sparkplug' | 'modbus' | 'raw-vibe' | 'ptp'>('sparkplug');

  // State for Question 5 (Store & Forward Outage Simulator)
  const [networkSimOffline, setNetworkSimOffline] = useState(false);
  const [bufferedCount, setBufferedCount] = useState(0);
  const [isReplaying, setIsReplaying] = useState(false);

  // State for Question 6 (Pilot Stepper Selection)
  const [selectedPilotStep, setSelectedPilotStep] = useState<number>(0);

  // Simulate local buffer accumulation during simulated outage
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (networkSimOffline) {
      interval = setInterval(() => {
        setBufferedCount(prev => prev + 142);
      }, 500);
    } else if (bufferedCount > 0 && !isReplaying) {
      setIsReplaying(true);
      const replayInterval = setInterval(() => {
        setBufferedCount(prev => {
          if (prev <= 150) {
            clearInterval(replayInterval);
            setIsReplaying(false);
            return 0;
          }
          return prev - 150;
        });
      }, 80);
    }
    return () => clearInterval(interval);
  }, [networkSimOffline, bufferedCount, isReplaying]);

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    FAQ_QUESTIONS_DATA.forEach(q => { allExpanded[q.id] = true; });
    setExpandedIds(allExpanded);
  };

  const collapseAll = () => {
    const allCollapsed: Record<string, boolean> = {};
    FAQ_QUESTIONS_DATA.forEach(q => { allCollapsed[q.id] = false; });
    setExpandedIds(allCollapsed);
  };

  const filteredQuestions = FAQ_QUESTIONS_DATA.filter(q => {
    const matchesCategory = activeCategory === 'all' || q.category === activeCategory;
    const matchesSearch = 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.shortAnswer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleTestWriteback = () => {
    setDiodeTesting(true);
    setDiodeTestResult(null);
    setTimeout(() => {
      setDiodeTesting(false);
      setDiodeTestResult('HARDWARE REJECTED: Optical Diode Ingress Only. Zero PLC write registers connected. Status: 100% Read-Only.');
    }, 600);
  };

  return (
    <section id="questions" className="py-24 bg-white relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-40" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#277822]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2f9f1] border border-[#a8da9f] text-xs font-mono text-[#236d1f] font-bold mb-4 shadow-xs">
            <HelpCircle className="w-4 h-4 text-[#277822]" />
            <span>ENGINEERING ARCHITECTURE QUESTIONS & VERIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Technical Questions, <br />
            <span className="text-[#277822]">Answered with Engineering Rigor.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Explore interactive architectural blueprints, real-time waveform simulators, and OT security verifications for rotating equipment reliability.
          </p>
        </div>

        {/* Filter Toolbar & Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            {[
              { id: 'all', label: 'All Architecture Questions (6)' },
              { id: 'reliability', label: 'Anomaly Intelligence' },
              { id: 'security', label: 'OT Cyber Safety' },
              { id: 'architecture', label: 'ISA-95 & Edge' },
              { id: 'deployment', label: 'Protocols & Pilot' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as QuestionCategory)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#277822] text-white shadow-md shadow-[#277822]/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search & Actions */}
          <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search technical topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-slate-300 text-xs font-sans focus:outline-none focus:border-[#277822] bg-white shadow-xs"
              />
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={expandAll}
                className="px-2.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono font-semibold border border-slate-200 cursor-pointer"
                title="Expand All"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="px-2.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono font-semibold border border-slate-200 cursor-pointer"
                title="Collapse All"
              >
                Collapse
              </button>
            </div>
          </div>

        </div>

        {/* Questions Showcase with 6 Distinct Visual Architectures */}
        <div className="space-y-8">
          
          {filteredQuestions.map((item, index) => {
            const isExpanded = !!expandedIds[item.id];

            return (
              <div
                key={item.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  item.interactiveType === 'hardware-diode'
                    ? 'bg-slate-950 text-white border-slate-800 shadow-xl'
                    : item.interactiveType === 'gaussian-envelope'
                    ? 'bg-white text-slate-950 border-[#277822]/40 shadow-lg shadow-[#277822]/5 ring-1 ring-[#277822]/20'
                    : item.interactiveType === 'isa95-tree'
                    ? 'bg-[#fcfdfa] text-slate-950 border-indigo-200 shadow-md'
                    : item.interactiveType === 'protocol-matrix'
                    ? 'bg-white text-slate-950 border-blue-200 shadow-md'
                    : item.interactiveType === 'store-forward-sim'
                    ? 'bg-[#fafbff] text-slate-950 border-purple-200 shadow-md'
                    : 'bg-white text-slate-950 border-emerald-200 shadow-md'
                }`}
              >
                
                {/* Question Header Card */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className="p-6 sm:p-8 cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-4 select-none hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-[11px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full border ${
                        item.interactiveType === 'hardware-diode'
                          ? 'bg-amber-950/80 text-amber-300 border-amber-800'
                          : 'bg-[#eef8ed] text-[#236d1f] border-[#a8da9f]'
                      }`}>
                        Question 0{index + 1} • {item.categoryLabel}
                      </span>

                      <span className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md ${
                        item.interactiveType === 'hardware-diode'
                          ? 'bg-slate-800 text-slate-300'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}>
                        {item.badge}
                      </span>
                    </div>

                    <h3 className={`text-xl sm:text-2xl font-extrabold tracking-tight ${
                      item.interactiveType === 'hardware-diode' ? 'text-white' : 'text-slate-950'
                    }`}>
                      {item.question}
                    </h3>

                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      item.interactiveType === 'hardware-diode' ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {item.shortAnswer}
                    </p>
                  </div>

                  {/* Expand Toggle Button */}
                  <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                    <span className={`text-xs font-mono font-bold hidden sm:inline-block ${
                      item.interactiveType === 'hardware-diode' ? 'text-amber-400' : 'text-[#277822]'
                    }`}>
                      {isExpanded ? 'Hide Interactive Model' : 'Inspect Interactive Model'}
                    </span>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-transform ${
                      item.interactiveType === 'hardware-diode'
                        ? 'bg-slate-800 text-amber-400 border border-slate-700'
                        : 'bg-[#eef8ed] text-[#277822] border border-[#a8da9f]'
                    }`}>
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Interactive Body */}
                {isExpanded && (
                  <div className={`p-6 sm:p-8 border-t ${
                    item.interactiveType === 'hardware-diode'
                      ? 'border-slate-800 bg-slate-900/60'
                      : 'border-slate-100 bg-white/70'
                  }`}>
                    
                    {/* UNIQUE STYLE 1: GAUSSIAN STATISTICAL ENVELOPE COMPARATOR */}
                    {item.interactiveType === 'gaussian-envelope' && (
                      <div className="space-y-6">
                        <div className="p-6 rounded-2xl bg-[#f7faf6] border border-[#c8e8bd] space-y-4">
                          
                          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#cfe3cc]">
                            <div>
                              <div className="text-xs font-mono font-bold text-[#236d1f] uppercase">
                                LIVE WAVEFORM & ADAPTIVE ENVELOPE SIMULATOR
                              </div>
                              <p className="text-xs text-slate-600">
                                Select an operating state to observe how Gaussian ±3σ confidence boundaries adapt dynamically to eliminate false alarms:
                              </p>
                            </div>

                            {/* State Switcher Buttons */}
                            <div className="flex flex-wrap gap-2">
                              <button
                                onClick={() => setSelectedMachineState('roughing')}
                                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                                  selectedMachineState === 'roughing'
                                    ? 'bg-[#277822] text-white shadow-xs'
                                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                                }`}
                              >
                                State A: Heavy Roughing Cut
                              </button>
                              <button
                                onClick={() => setSelectedMachineState('finishing')}
                                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                                  selectedMachineState === 'finishing'
                                    ? 'bg-[#277822] text-white shadow-xs'
                                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                                }`}
                              >
                                State B: High-RPM Finishing
                              </button>
                              <button
                                onClick={() => setSelectedMachineState('anomaly')}
                                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                                  selectedMachineState === 'anomaly'
                                    ? 'bg-red-600 text-white shadow-xs'
                                    : 'bg-white text-red-700 hover:bg-red-50 border border-red-200'
                                }`}
                              >
                                State C: Outer-Race Defect (BPFO)
                              </button>
                            </div>
                          </div>

                          {/* Dynamic SVG Waveform Display */}
                          <div className="p-4 rounded-xl bg-white border border-[#cfe3cc] space-y-3">
                            <div className="flex items-center justify-between text-xs font-mono">
                              <div className="flex items-center gap-3">
                                <span className="flex items-center gap-1 text-[#277822] font-bold">
                                  <span className="w-2.5 h-2.5 rounded-full bg-[#277822]" />
                                  Live Signal: {
                                    selectedMachineState === 'roughing' ? '1.82 mm/s RMS' :
                                    selectedMachineState === 'finishing' ? '0.74 mm/s RMS' : '3.65 mm/s RMS (EXCURSION)'
                                  }
                                </span>
                                <span className="flex items-center gap-1 text-slate-500">
                                  <span className="w-2.5 h-0.5 bg-dashed bg-slate-400" />
                                  Dynamic Upper Limit: {
                                    selectedMachineState === 'roughing' ? '2.40 mm/s' :
                                    selectedMachineState === 'finishing' ? '1.10 mm/s' : '2.40 mm/s'
                                  }
                                </span>
                              </div>

                              <div className={`px-2.5 py-1 rounded-md font-bold text-[11px] ${
                                selectedMachineState === 'anomaly'
                                  ? 'bg-red-100 text-red-700 border border-red-200 animate-pulse'
                                  : 'bg-[#eef8ed] text-[#236d1f] border border-[#a8da9f]'
                              }`}>
                                {selectedMachineState === 'anomaly' ? 'ALARM FIRED: GENUINE DEFECT CONFIRMED' : 'NOMINAL (NO FALSE ALARM)'}
                              </div>
                            </div>

                            {/* SVG Graph Graphic */}
                            <div className="h-32 w-full bg-[#f8faf8] rounded-lg border border-slate-200 flex items-center justify-center relative overflow-hidden">
                              <svg className="w-full h-full" viewBox="0 0 600 120" preserveAspectRatio="none">
                                {/* Static Threshold (Flawed legacy method) */}
                                <line x1="0" y1="40" x2="600" y2="40" stroke="#f87171" strokeWidth="1.5" strokeDasharray="4 4" />
                                <text x="10" y="32" fill="#ef4444" fontSize="10" fontFamily="monospace">Legacy Static Threshold (1.5 mm/s)</text>

                                {/* Dynamic Adaptive Gaussian Bounds Area */}
                                {selectedMachineState === 'roughing' && (
                                  <>
                                    <path d="M 0,20 Q 150,15 300,20 T 600,20 L 600,100 L 0,100 Z" fill="rgba(39, 120, 34, 0.08)" />
                                    <path d="M 0,20 Q 150,15 300,20 T 600,20" fill="none" stroke="#277822" strokeWidth="2" strokeDasharray="3 3" />
                                    {/* Waveform under cut */}
                                    <path d="M 0,55 Q 30,30 60,60 T 120,50 T 180,65 T 240,45 T 300,60 T 360,50 T 420,65 T 480,48 T 540,58 T 600,52" fill="none" stroke="#277822" strokeWidth="2.5" />
                                  </>
                                )}

                                {selectedMachineState === 'finishing' && (
                                  <>
                                    <path d="M 0,65 Q 150,60 300,65 T 600,65 L 600,110 L 0,110 Z" fill="rgba(39, 120, 34, 0.08)" />
                                    <path d="M 0,65 Q 150,60 300,65 T 600,65" fill="none" stroke="#277822" strokeWidth="2" strokeDasharray="3 3" />
                                    {/* Waveform finishing */}
                                    <path d="M 0,85 Q 30,78 60,88 T 120,82 T 180,86 T 240,80 T 300,85 T 360,82 T 420,87 T 480,82 T 540,85 T 600,83" fill="none" stroke="#277822" strokeWidth="2.5" />
                                  </>
                                )}

                                {selectedMachineState === 'anomaly' && (
                                  <>
                                    <path d="M 0,20 Q 150,15 300,20 T 600,20" fill="none" stroke="#277822" strokeWidth="2" strokeDasharray="3 3" />
                                    {/* Severe vibration spike breaching envelope */}
                                    <path d="M 0,60 Q 50,55 100,65 T 180,50 T 260,10 T 320,8 T 380,14 T 440,55 T 520,60 T 600,58" fill="none" stroke="#dc2626" strokeWidth="3" />
                                    <circle cx="290" cy="9" r="6" fill="#dc2626" className="animate-ping" opacity="0.75" />
                                    <circle cx="290" cy="9" r="4" fill="#dc2626" />
                                    <text x="310" y="14" fill="#dc2626" fontSize="11" fontWeight="bold" fontFamily="monospace">Defect Spike: 3.65 mm/s (BPFO 148.5 Hz)</text>
                                  </>
                                )}
                              </svg>
                            </div>

                            <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-600 pt-1">
                              <span>• Machine Cycle: {selectedMachineState === 'roughing' ? 'Roughing Pass (12,450 RPM / 74% Torque)' : selectedMachineState === 'finishing' ? 'Finishing Pass (14,200 RPM / 28% Torque)' : 'Steady Rotation (1,780 RPM with Bearing Defect)'}</span>
                              <span className="text-[#236d1f] font-bold">Dynamic Envelope State-Aware</span>
                            </div>
                          </div>

                        </div>

                        <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 font-sans">
                          <p>{item.fullAnswer}</p>
                        </div>
                      </div>
                    )}

                    {/* UNIQUE STYLE 2: DARK HARDWARE OPTICAL DIODE & OT CYBERSECURITY SCHEMATIC */}
                    {item.interactiveType === 'hardware-diode' && (
                      <div className="space-y-6">
                        <div className="p-6 rounded-2xl bg-black border border-slate-800 space-y-4 font-mono">
                          
                          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800 text-xs">
                            <div className="flex items-center gap-2 text-amber-400 font-bold">
                              <ShieldCheck className="w-4 h-4 text-emerald-400" />
                              <span>PHYSICAL OPTICAL DATA DIODE SCHEMATIC (IEC 62443 SL-2)</span>
                            </div>
                            <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px]">
                              100% UNIDIRECTIONAL ENFORCED
                            </span>
                          </div>

                          {/* Interactive Diode Blueprint Diagram */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                            
                            {/* Source OT Plant Network */}
                            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                              <div className="text-[10px] text-slate-400">LEVEL 1/2 OT ZONE</div>
                              <div className="text-sm font-bold text-white flex items-center justify-center gap-1.5">
                                <Cpu className="w-4 h-4 text-blue-400" />
                                <span>PLCs, SCADA & Sensors</span>
                              </div>
                              <div className="text-[11px] text-emerald-400">
                                Output: Read-Only Taps
                              </div>
                              <div className="text-[10px] text-slate-500">
                                Modbus / OPC-UA / 4-20mA
                              </div>
                            </div>

                            {/* Central Diode Gate */}
                            <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/50 space-y-2 relative">
                              <div className="text-[10px] text-amber-400 font-bold">HARDWARE DIODE BARRIER</div>
                              <div className="flex items-center justify-center gap-3 text-white">
                                <div className="w-8 h-8 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center text-emerald-400">
                                  <ArrowRight className="w-4 h-4" />
                                </div>
                                <div className="w-8 h-8 rounded-full bg-red-950 border border-red-500 flex items-center justify-center text-red-400">
                                  <Lock className="w-4 h-4" />
                                </div>
                              </div>
                              <div className="text-[11px] text-slate-300">
                                Outbound: <span className="text-emerald-400">ALLOWED</span> <br />
                                Inbound: <span className="text-red-400 font-bold">BLOCKED (0 Writeback)</span>
                              </div>
                            </div>

                            {/* Analytics Cloud Zone */}
                            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                              <div className="text-[10px] text-slate-400">LEVEL 4/IT & CLOUD</div>
                              <div className="text-sm font-bold text-white flex items-center justify-center gap-1.5">
                                <Activity className="w-4 h-4 text-emerald-400" />
                                <span>Telemora Analytics</span>
                              </div>
                              <div className="text-[11px] text-emerald-400">
                                Condition Evidence Dossiers
                              </div>
                              <div className="text-[10px] text-slate-500">
                                Decision Support Only
                              </div>
                            </div>

                          </div>

                          {/* Writeback Injection Simulator Button */}
                          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                            <button
                              onClick={handleTestWriteback}
                              disabled={diodeTesting}
                              className="w-full sm:w-auto px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer disabled:opacity-50"
                            >
                              {diodeTesting ? 'Injecting Control Packet...' : 'Simulate Malicious PLC Writeback Attempt'}
                            </button>

                            {diodeTestResult && (
                              <div className="p-2.5 rounded-lg bg-red-950/80 border border-red-500 text-red-300 text-xs font-mono flex-1 animate-pulse">
                                {diodeTestResult}
                              </div>
                            )}
                          </div>

                        </div>

                        <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3 font-sans">
                          <p>{item.fullAnswer}</p>
                        </div>
                      </div>
                    )}

                    {/* UNIQUE STYLE 3: ISA-95 DIGITAL TWIN HIERARCHICAL BREADCRUMB & CMMS BINDING */}
                    {item.interactiveType === 'isa95-tree' && (
                      <div className="space-y-6">
                        <div className="p-6 rounded-2xl bg-indigo-50/50 border border-indigo-200 space-y-4">
                          
                          <div className="flex items-center justify-between pb-3 border-b border-indigo-200">
                            <div className="text-xs font-mono font-bold text-indigo-900 uppercase">
                              INTERACTIVE ISA-95 HIERARCHICAL BREADCRUMB EXPLORER
                            </div>
                            <span className="text-[10px] font-mono font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">
                              Auto-CMMS Linking
                            </span>
                          </div>

                          {/* 5-Level Clickable Breadcrumb */}
                          <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
                            {[
                              { lvl: 0, label: 'Enterprise: Apex Global Corp' },
                              { lvl: 1, label: 'Site: Gary Plant 01' },
                              { lvl: 2, label: 'Area: Machining Cell B' },
                              { lvl: 3, label: 'Asset: CNC-5AX-04' },
                              { lvl: 4, label: 'Component: Spindle Bearing #2' }
                            ].map((node, nIdx) => (
                              <React.Fragment key={node.lvl}>
                                <button
                                  onClick={() => setSelectedIsaLevel(node.lvl)}
                                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                    selectedIsaLevel === node.lvl
                                      ? 'bg-indigo-700 text-white shadow-xs'
                                      : 'bg-white text-indigo-900 hover:bg-indigo-100 border border-indigo-200'
                                  }`}
                                >
                                  {node.label}
                                </button>
                                {nIdx < 4 && <span className="text-indigo-400 font-bold">&gt;</span>}
                              </React.Fragment>
                            ))}
                          </div>

                          {/* Context Card Display */}
                          <div className="p-4 rounded-xl bg-white border border-indigo-200 space-y-3 font-mono text-xs">
                            <div className="flex items-center justify-between text-indigo-950 font-bold">
                              <span>BOUND CONTEXTUAL METADATA (ISA-95 LEVEL {selectedIsaLevel}):</span>
                              <span className="text-emerald-700">LIVE SYNCED</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                                <div className="text-[10px] text-slate-500 uppercase">CMMS Work Order</div>
                                <div className="font-bold text-slate-900 mt-0.5">WO-8821 (SAP PM)</div>
                                <div className="text-[10px] text-slate-600">Seal replaced 3 days ago</div>
                              </div>
                              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                                <div className="text-[10px] text-slate-500 uppercase">Operator Shift & Job</div>
                                <div className="font-bold text-slate-900 mt-0.5">Job #TI-789 (Turbine Disc)</div>
                                <div className="text-[10px] text-slate-600">Cycle: Roughing Cut</div>
                              </div>
                              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                                <div className="text-[10px] text-slate-500 uppercase">Sensor Telemetry Tag</div>
                                <div className="font-bold text-emerald-700 mt-0.5">12.8 kHz Accel (Ch 04)</div>
                                <div className="text-[10px] text-slate-600">1.42 mm/s RMS (Nominal)</div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 font-sans">
                          <p>{item.fullAnswer}</p>
                        </div>
                      </div>
                    )}

                    {/* UNIQUE STYLE 4: PROTOCOL MATRIX & CHIP SPEC EXPLORER */}
                    {item.interactiveType === 'protocol-matrix' && (
                      <div className="space-y-6">
                        <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-4">
                          
                          <div className="flex items-center justify-between pb-3 border-b border-blue-200">
                            <div className="text-xs font-mono font-bold text-blue-950 uppercase">
                              INDUSTRIAL PROTOCOL INGESTION MATRIX
                            </div>
                            <span className="text-[10px] font-mono text-blue-700 font-bold bg-blue-100 px-2 py-0.5 rounded">
                              Zero Copy Serialization
                            </span>
                          </div>

                          {/* Protocol Selector Tabs */}
                          <div className="flex flex-wrap gap-2">
                            {[
                              { id: 'sparkplug', label: 'MQTT Sparkplug B' },
                              { id: 'opcua', label: 'OPC-UA DA/HA' },
                              { id: 'modbus', label: 'Modbus TCP / RTU' },
                              { id: 'raw-vibe', label: '12.8 kHz Accelerometer Burst' },
                              { id: 'ptp', label: 'IEEE 1588 PTP Time-Sync' }
                            ].map((proto) => (
                              <button
                                key={proto.id}
                                onClick={() => setSelectedProtocol(proto.id as any)}
                                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                                  selectedProtocol === proto.id
                                    ? 'bg-blue-700 text-white shadow-xs'
                                    : 'bg-white text-blue-900 hover:bg-blue-100 border border-blue-200'
                                }`}
                              >
                                {proto.label}
                              </button>
                            ))}
                          </div>

                          {/* Protocol Spec Breakdown Box */}
                          <div className="p-4 rounded-xl bg-white border border-blue-200 space-y-3 font-mono text-xs">
                            {selectedProtocol === 'sparkplug' && (
                              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                                <div><span className="text-slate-500 text-[10px]">PAYLOAD ENCODING:</span><div className="font-bold text-slate-900">Google Protobuf v3</div></div>
                                <div><span className="text-slate-500 text-[10px]">INGRESS LATENCY:</span><div className="font-bold text-emerald-700">&lt; 15 ms</div></div>
                                <div><span className="text-slate-500 text-[10px]">QOS LEVEL:</span><div className="font-bold text-slate-900">QoS 1 (At Least Once)</div></div>
                                <div><span className="text-slate-500 text-[10px]">AUTO-DISCOVERY:</span><div className="font-bold text-blue-700">Birth/Death Certificates</div></div>
                              </div>
                            )}

                            {selectedProtocol === 'opcua' && (
                              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                                <div><span className="text-slate-500 text-[10px]">TRANSPORT:</span><div className="font-bold text-slate-900">OPC-UA Binary (TCP 4840)</div></div>
                                <div><span className="text-slate-500 text-[10px]">SECURITY POLICY:</span><div className="font-bold text-emerald-700">Basic256Sha256 / Sign&Encrypt</div></div>
                                <div><span className="text-slate-500 text-[10px]">NODE SUBSCRIPTIONS:</span><div className="font-bold text-slate-900">10,000+ Tags / Gateway</div></div>
                                <div><span className="text-slate-500 text-[10px]">RECONNECTION:</span><div className="font-bold text-blue-700">Auto Backoff Reconnect</div></div>
                              </div>
                            )}

                            {selectedProtocol === 'modbus' && (
                              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                                <div><span className="text-slate-500 text-[10px]">MEDIA:</span><div className="font-bold text-slate-900">Modbus TCP (Port 502) & RS-485</div></div>
                                <div><span className="text-slate-500 text-[10px]">POLL FREQUENCY:</span><div className="font-bold text-slate-900">10 Hz to 100 Hz Continuous</div></div>
                                <div><span className="text-slate-500 text-[10px]">REGISTER MAPPING:</span><div className="font-bold text-blue-700">Automated Scaling Encoders</div></div>
                                <div><span className="text-slate-500 text-[10px]">TIMEOUT TOLERANCE:</span><div className="font-bold text-emerald-700">Configurable 50ms - 5s</div></div>
                              </div>
                            )}

                            {selectedProtocol === 'raw-vibe' && (
                              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                                <div><span className="text-slate-500 text-[10px]">SAMPLING RATE:</span><div className="font-bold text-emerald-700">12,800 Samples / sec</div></div>
                                <div><span className="text-slate-500 text-[10px]">RESOLUTION:</span><div className="font-bold text-slate-900">24-Bit Delta-Sigma ADC</div></div>
                                <div><span className="text-slate-500 text-[10px]">EDGE PROCESSING:</span><div className="font-bold text-blue-700">FFT + BPFO/BPFI Envelopes</div></div>
                                <div><span className="text-slate-500 text-[10px]">BURST DURATION:</span><div className="font-bold text-slate-900">1.0s to 5.0s per Trigger</div></div>
                              </div>
                            )}

                            {selectedProtocol === 'ptp' && (
                              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                                <div><span className="text-slate-500 text-[10px]">PRECISION STANDARD:</span><div className="font-bold text-slate-900">IEEE 1588-2008 (PTP v2)</div></div>
                                <div><span className="text-slate-500 text-[10px]">CLOCK JITTER:</span><div className="font-bold text-emerald-700">&lt; 1.0 Microsecond</div></div>
                                <div><span className="text-slate-500 text-[10px]">HARDWARE STAMP:</span><div className="font-bold text-blue-700">NIC Hardware Timestamping</div></div>
                                <div><span className="text-slate-500 text-[10px]">CROSS-GATEWAY SYNC:</span><div className="font-bold text-slate-900">Microsecond Multi-Node Sync</div></div>
                              </div>
                            )}
                          </div>

                        </div>

                        <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 font-sans">
                          <p>{item.fullAnswer}</p>
                        </div>
                      </div>
                    )}

                    {/* UNIQUE STYLE 5: LOSSLESS STORE-AND-FORWARD NETWORK OUTAGE SIMULATOR */}
                    {item.interactiveType === 'store-forward-sim' && (
                      <div className="space-y-6">
                        <div className="p-6 rounded-2xl bg-purple-50/50 border border-purple-200 space-y-4">
                          
                          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-purple-200">
                            <div>
                              <div className="text-xs font-mono font-bold text-purple-950 uppercase">
                                LIVE PLANT NETWORK DROPOUT & FIFO REPLAY SIMULATOR
                              </div>
                              <p className="text-xs text-slate-600">
                                Toggle the plant switch state below to see how local NVMe edge buffering prevents telemetry loss:
                              </p>
                            </div>

                            {/* Outage Toggle Button */}
                            <button
                              onClick={() => setNetworkSimOffline(!networkSimOffline)}
                              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2 ${
                                networkSimOffline
                                  ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-md animate-pulse'
                                  : 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-md'
                              }`}
                            >
                              <Wifi className="w-4 h-4" />
                              <span>{networkSimOffline ? 'Network: OFFLINE (Simulating Outage)' : 'Network: ONLINE (Normal Stream)'}</span>
                            </button>
                          </div>

                          {/* Real-time Buffer Gauge */}
                          <div className="p-4 rounded-xl bg-white border border-purple-200 space-y-3 font-mono text-xs">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-slate-900">LOCAL NVMe CIRCULAR SSD BUFFER:</span>
                              <span className={`font-bold ${networkSimOffline ? 'text-amber-700' : isReplaying ? 'text-blue-700' : 'text-emerald-700'}`}>
                                {networkSimOffline
                                  ? `Buffering Offline Telemetry (${bufferedCount.toLocaleString()} pkts cached)`
                                  : isReplaying
                                  ? `Lossless Catchup Replay (${bufferedCount.toLocaleString()} pkts remaining)`
                                  : 'Uplink Synced • 0 Cached Packets'}
                              </span>
                            </div>

                            {/* Progress bar */}
                            <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200 relative">
                              <div
                                className={`h-full transition-all duration-200 ${
                                  networkSimOffline ? 'bg-amber-500' : isReplaying ? 'bg-blue-600' : 'bg-emerald-500'
                                }`}
                                style={{ width: `${Math.min(100, Math.max(5, (bufferedCount / 1500) * 100))}%` }}
                              />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-[11px] text-slate-600">
                              <div>• Buffer Capacity: <span className="font-bold text-slate-900">90 Days Offline</span></div>
                              <div>• Packet Loss: <span className="font-bold text-emerald-700">0.00% Guaranteed</span></div>
                              <div>• Replay Order: <span className="font-bold text-slate-900">Deterministic FIFO</span></div>
                            </div>
                          </div>

                        </div>

                        <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 font-sans">
                          <p>{item.fullAnswer}</p>
                        </div>
                      </div>
                    )}

                    {/* UNIQUE STYLE 6: 48-HOUR RAPID PILOT ONBOARDING STEPPER */}
                    {item.interactiveType === 'pilot-timeline' && (
                      <div className="space-y-6">
                        <div className="p-6 rounded-2xl bg-cyan-50/50 border border-cyan-200 space-y-4">
                          
                          <div className="flex items-center justify-between pb-3 border-b border-cyan-200">
                            <div className="text-xs font-mono font-bold text-cyan-950 uppercase">
                              48-HOUR NON-INVASIVE PILOT DEPLOYMENT STEPPER
                            </div>
                            <span className="text-[10px] font-mono text-cyan-700 font-bold bg-cyan-100 px-2 py-0.5 rounded">
                              0 Min Downtime Required
                            </span>
                          </div>

                          {/* Stepper Tabs */}
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                            {[
                              { step: 0, label: 'Hour 0 - 12', title: 'Hardware Clamp-On' },
                              { step: 1, label: 'Hour 12 - 24', title: 'Network Tap Ingress' },
                              { step: 2, label: 'Hour 24 - 36', title: 'Baseline ML Training' },
                              { step: 3, label: 'Hour 36 - 48', title: 'Live Anomaly Dossiers' }
                            ].map((st) => (
                              <button
                                key={st.step}
                                onClick={() => setSelectedPilotStep(st.step)}
                                className={`p-3 rounded-xl text-left transition-all cursor-pointer ${
                                  selectedPilotStep === st.step
                                    ? 'bg-cyan-800 text-white shadow-sm ring-2 ring-cyan-500'
                                    : 'bg-white text-slate-800 hover:bg-cyan-100/50 border border-cyan-200'
                                }`}
                              >
                                <div className={`text-[10px] font-bold ${selectedPilotStep === st.step ? 'text-cyan-200' : 'text-cyan-700'}`}>
                                  {st.label}
                                </div>
                                <div className="font-bold mt-0.5 text-xs">{st.title}</div>
                              </button>
                            ))}
                          </div>

                          {/* Pilot Step Deliverables Box */}
                          <div className="p-4 rounded-xl bg-white border border-cyan-200 space-y-2 font-mono text-xs">
                            {selectedPilotStep === 0 && (
                              <div className="space-y-1.5">
                                <div className="font-bold text-slate-900">PHASE 1: NON-INVASIVE SENSOR MOUNTING</div>
                                <div className="text-slate-600">• Magnetic triaxial accelerometers clamped to bearing housings (Zero drilling or tapping).</div>
                                <div className="text-slate-600">• DIN-rail edge gateway mounted inside existing electrical enclosure.</div>
                              </div>
                            )}

                            {selectedPilotStep === 1 && (
                              <div className="space-y-1.5">
                                <div className="font-bold text-slate-900">PHASE 2: READ-ONLY INGRESS SCAN</div>
                                <div className="text-slate-600">• Connect to SPAN/mirror switch port or read-only OPC-UA server endpoint.</div>
                                <div className="text-slate-600">• Auto-discover Sparkplug B topic tree and broadcast tags.</div>
                              </div>
                            )}

                            {selectedPilotStep === 2 && (
                              <div className="space-y-1.5">
                                <div className="font-bold text-slate-900">PHASE 3: STATE-DEPENDENT ENVELOPE TRAINING</div>
                                <div className="text-slate-600">• Machine runs normal production shifts; algorithm fits Gaussian distributions to each cycle state.</div>
                                <div className="text-slate-600">• Dynamic upper/lower ±3σ boundaries calculated automatically.</div>
                              </div>
                            )}

                            {selectedPilotStep === 3 && (
                              <div className="space-y-1.5">
                                <div className="font-bold text-slate-900">PHASE 4: LIVE ANOMALY DOSSIER ACTIVATION</div>
                                <div className="text-slate-600">• Plant reliability engineers receive contextual condition investigation briefings.</div>
                                <div className="text-slate-600">• First automated CMMS work order linkage verified with SAP PM/Maximo.</div>
                              </div>
                            )}
                          </div>

                        </div>

                        <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 font-sans">
                          <p>{item.fullAnswer}</p>
                        </div>
                      </div>
                    )}

                    {/* Metric Badges Footer */}
                    {item.metrics && item.metrics.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 mt-6 border-t border-slate-200/40">
                        {item.metrics.map((m: { label: string; value: string; detail?: string }, mIdx: number) => (
                          <div
                            key={mIdx}
                            className={`p-3 rounded-xl font-mono ${
                              item.interactiveType === 'hardware-diode'
                                ? 'bg-slate-900 border border-slate-800 text-slate-300'
                                : 'bg-slate-50 border border-slate-200 text-slate-800'
                            }`}
                          >
                            <div className="text-[10px] text-slate-400 uppercase">{m.label}</div>
                            <div className={`text-base font-extrabold mt-0.5 ${
                              item.interactiveType === 'hardware-diode' ? 'text-amber-400' : 'text-[#277822]'
                            }`}>
                              {m.value}
                            </div>
                            {m.detail && <div className="text-[10px] text-slate-500 mt-0.5">{m.detail}</div>}
                          </div>
                        ))}
                      </div>
                    )}

                  </div>
                )}

              </div>
            );
          })}

        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-[#f2f9f1] border border-[#c8e8bd] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1">
            <h4 className="text-xl font-extrabold text-slate-950 font-sans">
              Have a custom plant protocol or legacy PLC requirement?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-sans">
              Speak directly with an ISO 18436 Certified Vibration Analyst or Industrial OT Architect.
            </p>
          </div>

          <button
            onClick={onOpenDemoModal}
            className="px-6 py-3 rounded-xl bg-[#277822] hover:bg-[#1e6019] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-md shadow-[#277822]/20 border border-[#236d1f] cursor-pointer transition-all flex items-center gap-2 shrink-0"
          >
            <span>Ask an OT Architect</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
