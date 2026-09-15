import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Operations', href: '#dashboard' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#091a10] text-slate-300 font-sans text-xs border-t-2 border-[#277822]/40 pt-16 pb-12 relative overflow-hidden">
      
      {/* Subtle Background Emerald Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-[#277822]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Giant Typographic Web Name Watermark in Background */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-center select-none pointer-events-none overflow-hidden opacity-30">
        <span className="text-[80px] sm:text-[130px] md:text-[180px] lg:text-[220px] font-black tracking-tighter text-[#a8da9f]/10 uppercase leading-none font-sans whitespace-nowrap">
          TELEMORA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Main Row: Brand (Left) + Nav Links (Center) + Contact Hotline (Right) */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-8 border-b border-[#1b3d28]">
          
          {/* Brand Identity */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-3">
              <img src="/Logo.png" alt="Telemora Logo" className="h-10 w-auto" />
            </div>
            <p className="text-xs text-slate-400 font-sans">
              Industrial Telemetry Intelligence • Real-World Reliability Decisions
            </p>
          </div>

          {/* Clean Horizontal Navigation */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#a8da9f] font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Direct Communication Channels */}
          <div className="font-mono text-xs text-left lg:text-right space-y-0.5">
            <a href="tel:+14155552105" className="text-white font-bold hover:text-[#a8da9f] block">
              USA: +1 415 555 2105
            </a>
            <a href="tel:+94112917584" className="text-white font-bold hover:text-[#a8da9f] block">
              SL: +94 11 291 7584
            </a>
            <a href="mailto:contact@telemora.net" className="text-[#a8da9f] font-semibold hover:underline block text-[11px] pt-1">
              contact@telemora.net
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Telemora Networks (Pvt) Ltd. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-3">
            <Link to="/privacy-policy" className="hover:text-white transition-colors text-center">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors text-center">Terms & Conditions</Link>
            <Link to="/cookies" className="hover:text-white transition-colors text-center">Cookie Policy</Link>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#a8da9f] font-bold transition-colors cursor-pointer ml-2"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
