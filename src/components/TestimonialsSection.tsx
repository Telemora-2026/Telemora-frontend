import React, { useState, useEffect } from 'react';
import { 
  Quote, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Building2, 
  CheckCircle2, 
  TrendingUp, 
  Activity, 
  Sparkles,
  Play,
  Pause
} from 'lucide-react';

interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  facility: string;
  quote: string;
  metric: string;
  metricLabel: string;
  avatar: string;
  accentColor: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Nathan Cole',
    role: 'VP of Reliability & Maintenance',
    company: 'Apex Automotive Powertrain Corp',
    facility: 'Detroit Plant 04 (48 CNC Cells)',
    quote: 'Before Telemora, our engineers spent hours deciphering noisy SCADA alarms. Telemora’s state-aware ±3σ Gaussian envelopes cut our nuisance alarms by 85% while catching an outer race bearing defect 3 weeks before catastrophic failure.',
    metric: '85% Fewer Alarms',
    metricLabel: 'Nuisance Alarm Reduction',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    accentColor: '#277822'
  },
  {
    id: 'test-2',
    author: 'Emily Sanders',
    role: 'Director of Plant Operations & OT',
    company: 'Gulf Coast Petrochemical Refining',
    facility: 'Houston Slurry Pump Skids',
    quote: 'In chemical refining, safety is non-negotiable. Telemora’s strict unidirectional optical data diode gave our OT cybersecurity team 100% peace of mind. We get deep 12.8 kHz FFT vibration decomposition without a single PLC control writeback risk.',
    metric: '0.00% Risk',
    metricLabel: 'Zero Control Override Incidents',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    accentColor: '#1e6019'
  },
  {
    id: 'test-3',
    author: 'Rachel Coleman',
    role: 'Head of Digitalization & Automation',
    company: 'Bavaria Precision Aerospace GmbH',
    facility: 'Stuttgart Heavy Machining Center',
    quote: 'Standardizing heterogeneous machine assets into an ISA-95 digital twin was a nightmare with legacy historians. Telemora unified our Siemens, Rockwell, and Modbus telemetry into standardized Protobuf streams in less than two weeks.',
    metric: '14 Days',
    metricLabel: 'Full Multi-Facility Ingress',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
    accentColor: '#236d1f'
  },
  {
    id: 'test-4',
    author: 'Jason Whitfield',
    role: 'Chief Reliability Engineer',
    company: 'Pacific Energy & Turbomachinery',
    facility: 'Jurong Island Facility (92 Assets)',
    quote: 'Direct CMMS correlation was the missing link. When a high-pressure slurry feed pump experienced vibration spikes, Telemora flagged the recent impeller maintenance work order. We prevented a $640k unplanned outage during peak production.',
    metric: '$640k Saved',
    metricLabel: 'Unplanned Outage Averted',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    accentColor: '#1b5817'
  },
  {
    id: 'test-5',
    author: 'Ryan Pearson',
    role: 'VP of Manufacturing Operations',
    company: 'NorthStar Steel & Heavy Forging',
    facility: 'Cleveland Rolling Mill (140 Nodes)',
    quote: 'Deploying Telemora across our rolling mills provided instant multi-site visibility. Standardized ISA-95 equipment hierarchies allow our executive team to benchmark machine degradation and allocate maintenance spend with complete confidence.',
    metric: '+7.4% OEE',
    metricLabel: 'Plant Availability Uplift',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    accentColor: '#277822'
  }
];

export const TestimonialsSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [cycleKey, setCycleKey] = useState<number>(0);
  const totalCards = TESTIMONIALS_DATA.length;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % totalCards);
    setCycleKey((prev) => prev + 1);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + totalCards) % totalCards);
    setCycleKey((prev) => prev + 1);
  };

  // Continuous Auto-Slide Carousel (4.0s)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % totalCards);
      setCycleKey((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalCards]);

  // Compute 3 visible cards in window (wrapping circularly)
  const visibleCards = [
    TESTIMONIALS_DATA[startIndex % totalCards],
    TESTIMONIALS_DATA[(startIndex + 1) % totalCards],
    TESTIMONIALS_DATA[(startIndex + 2) % totalCards]
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#fafdf9] border-b border-slate-200 relative overflow-hidden font-sans">
      
      {/* Background Subtle Tech Grids & Glows */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-35" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#277822]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-4 border-b border-[#cfe3cc]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ebf7e8] border border-[#a8da9f] text-xs font-mono text-[#236d1f] font-bold shadow-xs">
              <Quote className="w-4 h-4 text-[#277822]" />
              <span>VERIFIED PLANT TESTIMONIALS &amp; OPERATIONAL IMPACT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Trusted by Reliability Leaders, <br />
              <span className="text-[#277822]">Proven on Real Factory Floors</span>
            </h2>
          </div>

          {/* Carousel Controls (Auto-Play Indicator + Prev / Next Arrows) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="px-3.5 py-2 rounded-2xl bg-white border border-[#cfe3cc] hover:border-[#277822] text-[#236d1f] font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-xs"
              title={isAutoPlaying ? "Pause Auto-Carousel" : "Resume Auto-Carousel"}
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#277822]" />
                  <span>Auto-Slide (4s)</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#277822]" />
                  <span>Resume Auto-Slide</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  prevSlide();
                  setIsAutoPlaying(false);
                }}
                className="p-2.5 rounded-2xl bg-white border border-[#cfe3cc] hover:border-[#277822] hover:bg-[#ebf7e8] text-slate-700 hover:text-[#277822] transition-all cursor-pointer shadow-xs"
                title="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => {
                  nextSlide();
                  setIsAutoPlaying(false);
                }}
                className="p-2.5 rounded-2xl bg-[#277822] hover:bg-[#1e6019] text-white transition-all cursor-pointer shadow-md shadow-[#277822]/20"
                title="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3-CARD CAROUSEL DISPLAY (MATCHING REFERENCE SPEECH BUBBLE & CIRCULAR FRAME)*/}
        {/* ========================================================================= */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {visibleCards.map((card, idx) => (
            <div
              key={`${card.id}-${startIndex}-${idx}`}
              className="relative pt-8 group transition-all duration-500 animate-fade-in"
            >
              {/* Outer Speech Bubble Main Card */}
              <div className="relative rounded-3xl bg-[#091b10] border-2 border-[#1b3d28] p-7 pt-10 text-white shadow-xl flex flex-col justify-between min-h-[380px] overflow-hidden group-hover:border-[#277822] group-hover:shadow-2xl transition-all">
                
                {/* Background Subtle Gradient Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#277822]/15 rounded-full blur-3xl pointer-events-none" />

                {/* Top Quote Mark Icon */}
                <div className="text-3xl font-serif text-[#a8da9f] font-black leading-none select-none mb-1">
                  “
                </div>

                <div className="space-y-4">
                  {/* Author Name & Designation */}
                  <div className="pr-16">
                    <h3 className="text-lg font-black text-white font-sans tracking-tight leading-snug">
                      {card.author}
                    </h3>
                    <p className="text-xs font-mono text-[#a8da9f] font-semibold mt-0.5">
                      {card.role}
                    </p>
                    <span className="text-[10px] font-mono text-slate-400 block truncate mt-0.5">
                      {card.company}
                    </span>
                  </div>

                  {/* Testimonial Quote Text */}
                  <p className="text-xs sm:text-[13px] text-slate-300 font-sans leading-relaxed pt-1">
                    {card.quote}
                  </p>
                </div>

                {/* Bottom Row: 5 Star Rating & Verified Metric Badge */}
                <div className="pt-4 mt-4 border-t border-[#1b3d28] flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#facc15]">
                    {[...Array(5)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  {/* Impact Metric Pill */}
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#13301e] border border-[#277822] text-[#a8da9f]">
                    {card.metric}
                  </span>

                  {/* Closing Quote Mark */}
                  <span className="text-2xl font-serif text-[#a8da9f] font-black leading-none select-none">
                    ”
                  </span>
                </div>

                {/* Speech Bubble Triangular Pointer Tail at Bottom-Left */}
                <div className="absolute -bottom-2.5 left-8 w-5 h-5 bg-[#091b10] border-r-2 border-b-2 border-[#1b3d28] rotate-45 group-hover:border-[#277822] transition-colors" />

              </div>

              {/* =================================================================== */}
              {/* TOP-RIGHT CIRCULAR PORTRAIT FRAME (EXACT REFERENCE MOCKUP STYLE)   */}
              {/* =================================================================== */}
              <div className="absolute -top-3 right-4 z-20">
                
                {/* Orbital Arc with Dot */}
                <div className="relative">
                  <svg className="w-24 h-24 sm:w-28 sm:h-28 absolute -top-2 -right-2 pointer-events-none overflow-visible">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="52%"
                      fill="none"
                      stroke="#277822"
                      strokeWidth="2"
                      strokeDasharray="40 180"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="85%"
                      cy="15%"
                      r="4"
                      fill="#a8da9f"
                    />
                  </svg>

                  {/* Circular Portrait Image */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-[#277822] shadow-xl bg-slate-900 group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={card.avatar} 
                      alt={card.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* CAROUSEL PAGINATION INDICATOR DOTS WITH ANIMATED TIME COUNTDOWN           */}
        {/* ========================================================================= */}
        <div className="flex items-center justify-center gap-2 pt-4">
          {TESTIMONIALS_DATA.map((_, dotIdx) => {
            const isCurrent = startIndex === dotIdx;
            return (
              <button
                key={dotIdx}
                onClick={() => {
                  setStartIndex(dotIdx);
                  setIsAutoPlaying(false);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  isCurrent
                    ? 'w-10 bg-[#277822] shadow-sm'
                    : 'w-2.5 bg-[#cfe3cc] hover:bg-[#a8da9f]'
                }`}
                title={`Slide to testimonial ${dotIdx + 1}`}
              >
                {isCurrent && isAutoPlaying && (
                  <div 
                    key={cycleKey} 
                    className="absolute inset-0 bg-emerald-300 animate-[progress_4.0s_linear_infinite]" 
                  />
                )}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
