import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Activity, 
  Menu, 
  X, 
  ArrowRight
} from 'lucide-react';

interface NavbarProps {
  onOpenDemoModal: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('about');

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Workflow', href: '#workflow', id: 'workflow' },
    { name: 'Architecture', href: '#architecture', id: 'architecture' },
    { name: 'Use Cases', href: '#use-cases', id: 'use-cases' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const getHref = (hash: string) => {
    return location.pathname === '/' ? hash : `/${hash}`;
  };

  // Scroll handler for background blur and ScrollSpy active section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // ScrollSpy: Determine active section based on scroll position
      const scrollPosition = window.scrollY + 200;

      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setCurrentSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-3 z-50 w-full px-4 sm:px-6 lg:px-8 transition-all duration-300 font-sans">
      
      {/* Floating Capsule Bar */}
      <div className={`max-w-6xl mx-auto rounded-2xl sm:rounded-full transition-all duration-300 border ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-[#277822]/40 shadow-[0_12px_40px_rgba(39,120,34,0.12)] py-2.5 px-5 sm:px-7' 
          : 'bg-white/90 backdrop-blur-md border-[#cfe3cc] shadow-[0_8px_30px_rgba(0,0,0,0.04)] py-3 px-6 sm:px-8'
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Brand Identity */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img src="/Logo.png" alt="Telemora Logo" className="h-9 w-auto group-hover:scale-105 transition-transform" />
          </Link>

          {/* 5 Core Navigation Links with Dynamic ScrollSpy Active Highlighting */}
          <nav className="hidden md:flex items-center gap-1.5 bg-[#f4faf2] p-1.5 rounded-full border border-[#cfe3cc]/80 font-mono text-xs">
            {navLinks.map((link) => {
              const isActive = location.pathname === '/' && currentSection === link.id;
              return (
                <a
                  key={link.name}
                  href={getHref(link.href)}
                  className={`px-4 py-1.5 rounded-full font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-[#277822] text-white shadow-sm scale-105'
                      : 'text-slate-700 hover:text-[#277822] hover:bg-[#ebf7e8]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Request Demo Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/product"
              className={`px-5 py-2 rounded-full text-white text-xs font-mono font-bold uppercase tracking-wider shadow-md border transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5 ${
                location.pathname === '/product'
                  ? 'bg-[#1e6019] border-[#34d399] ring-2 ring-[#277822]/30 shadow-[#277822]/35'
                  : 'bg-[#277822] hover:bg-[#1e6019] border-[#34d399]/30 shadow-[#277822]/25'
              }`}
            >
              <span>Telorix</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-[#277822] border border-slate-200 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto rounded-3xl bg-white border-2 border-[#cfe3cc] p-4 space-y-2 shadow-2xl animate-fade-in font-mono">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === '/' && currentSection === link.id;
              return (
                <a
                  key={link.name}
                  href={getHref(link.href)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-colors flex items-center justify-between ${
                    isActive 
                      ? 'bg-[#277822] text-white' 
                      : 'text-slate-800 hover:bg-[#ebf7e8] hover:text-[#277822]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100">
            <Link
              to="/product"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl bg-[#277822] text-white text-xs font-bold uppercase tracking-wider shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Telorix</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}

    </header>
  );
};
