import React, { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import { 
  MapPin, 
  Clock, 
  Headphones, 
  ArrowRight, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  User, 
  Mail, 
  MessageSquare,
  Sparkles,
  Check,
  Loader2,
  Facebook,
  Twitter,
  Youtube,
  Linkedin
} from 'lucide-react';

const Pinterest = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.133-4.515 4.34 0 .859.331 1.781.745 2.281.082.098.094.192.069.293l-.235.986c-.035.152-.116.185-.27.114-1.013-.473-1.644-1.96-1.644-3.159 0-2.571 1.868-4.933 5.394-4.933 2.827 0 5.025 2.015 5.025 4.705 0 2.812-1.771 5.074-4.23 5.074-.827 0-1.605-.43-1.872-.938l-.51 1.94c-.183.714-.68 1.605-1.014 2.15C10.231 23.821 11.101 24 12 24c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
  </svg>
);

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState({ name: '', email: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !turnstileToken) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xvkoqapp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          'cf-turnstile-response': turnstileToken
        })
      });
      
      if (response.ok) {
        setSubmittedData({ name: formData.name, email: formData.email });
        setFormSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTurnstileToken(null);
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#fafdf9] text-slate-900 relative overflow-hidden font-sans border-t border-slate-200">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#277822]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* ========================================================================= */}
        {/* TOP ROW: GET IN TOUCH HEADING (LEFT) & 3 INFO CARDS (RIGHT)               */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Title Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono font-bold text-[#236d1f] tracking-wider uppercase flex items-center gap-1.5">
              <span className="text-[#277822] font-black">//</span>
              <span>Contact us</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 uppercase leading-none font-sans">
              GET IN <br />
              <span className="text-[#277822]">TOUCH</span>
            </h2>
          </div>

          {/* Right 4 Info Cards (8 Cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Card 1: USA Office */}
            <div className="p-6 rounded-3xl bg-white border-2 border-[#cfe3cc] hover:border-[#277822] shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#ebf7e8] border border-[#a8da9f] flex items-center justify-center text-[#277822] group-hover:scale-105 transition-transform shadow-xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-slate-950 tracking-tight">
                    USA Office
                  </h3>
                  <p className="text-xs font-mono font-bold text-[#236d1f]">Telemora Networks LLC</p>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-sans">
                    555 Mission Street, Suite 1800,<br />San Francisco, CA 94105, USA
                  </p>
                  <p className="text-xs mt-1">
                    <a href="tel:+14155552105" className="font-semibold text-slate-900 hover:text-[#277822]">+1 415 555 2105</a>
                  </p>
                </div>
              </div>
              <a href="https://maps.google.com/?q=555+Mission+Street,+Suite+1800,+San+Francisco,+CA+94105,+USA" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#236d1f] hover:text-[#277822] transition-colors pt-2">
                <span>Google Maps</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#277822]" />
              </a>
            </div>

            {/* Card 2: SL Office */}
            <div className="p-6 rounded-3xl bg-white border-2 border-[#cfe3cc] hover:border-[#277822] shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#ebf7e8] border border-[#a8da9f] flex items-center justify-center text-[#277822] group-hover:scale-105 transition-transform shadow-xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-slate-950 tracking-tight">
                    Sri Lanka Office
                  </h3>
                  <p className="text-xs font-mono font-bold text-[#236d1f]">Telemora Networks (Pvt) Ltd</p>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-sans">
                    51 Cinnamon Park,<br />Dehiwala, Sri Lanka
                  </p>
                  <p className="text-xs mt-1">
                    <a href="tel:+94112917584" className="font-semibold text-slate-900 hover:text-[#277822]">+94 11 291 7584</a>
                  </p>
                </div>
              </div>
              <a href="https://maps.google.com/?q=51+Cinnamon+Park,+Dehiwala,+Sri+Lanka" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#236d1f] hover:text-[#277822] transition-colors pt-2">
                <span>Google Maps</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#277822]" />
              </a>
            </div>

            {/* Card 3: Company Details */}
            <div className="p-6 rounded-3xl bg-white border-2 border-[#cfe3cc] hover:border-[#277822] shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#ebf7e8] border border-[#a8da9f] flex items-center justify-center text-[#277822] group-hover:scale-105 transition-transform shadow-xs">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-slate-950 tracking-tight mb-2">
                    Company Info
                  </h3>
                  <div className="text-xs text-slate-600 leading-relaxed font-sans space-y-1.5">
                    <div className="flex gap-2"><strong className="text-slate-900 w-16">Name:</strong> <span>Telemora</span></div>
                    <div className="flex gap-2"><strong className="text-slate-900 w-16">Founder:</strong> <span>Yaazhisai Thivakaran</span></div>
                    <div className="flex gap-2"><strong className="text-slate-900 w-16">Founded:</strong> <span>March 2023</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Working Hours */}
            <div className="p-6 rounded-3xl bg-white border-2 border-[#cfe3cc] hover:border-[#277822] shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#ebf7e8] border border-[#a8da9f] flex items-center justify-center text-[#277822] group-hover:scale-105 transition-transform shadow-xs">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-slate-950 tracking-tight">
                    Working Hours
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-sans">
                    Mon to Fri: <strong className="text-slate-900">08:00 to 18:00</strong><br />
                    24/7 OT Incident: <strong className="text-[#236d1f]">&lt; 15 min SLA</strong>
                  </p>
                  <p className="text-xs mt-2">
                    <a href="mailto:contact@telemora.net" className="font-semibold text-[#236d1f] hover:text-[#277822]">contact@telemora.net</a>
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* BOTTOM ROW: CLEAN, USER-FRIENDLY FORM CARD & CONTACT US PANEL             */}
        {/* ========================================================================= */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-white border-2 border-[#cfe3cc] shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Clean User-Friendly Form (6 Cols) */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#fafdf9] border-2 border-[#cfe3cc] shadow-sm space-y-6">
              
              {/* Form Status Badge */}
              <div className="flex items-center justify-between pb-3 border-b border-[#cfe3cc]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#277822] animate-pulse" />
                  <span className="text-[11px] font-mono font-bold uppercase text-[#236d1f]">
                    DIRECT ENGINEERING DESK
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-slate-600 font-bold border border-[#cfe3cc]">
                  &lt; 4 HR RESPONSE SLA
                </span>
              </div>

              {formSubmitted ? (
                <div className="py-10 text-center space-y-4 font-mono">
                  <div className="w-16 h-16 rounded-full bg-[#ebf7e8] border-2 border-[#a8da9f] flex items-center justify-center text-[#277822] mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-950 font-sans">
                    Message Successfully Sent
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed font-sans">
                    Thank you, <strong className="text-slate-900">{submittedData.name}</strong>. A Senior Reliability Architect will review your message and reach out to <strong className="text-[#236d1f]">{submittedData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#277822] hover:bg-[#1e6019] text-white font-extrabold text-xs uppercase cursor-pointer transition-colors shadow-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name Input */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-slate-700 uppercase block">
                      Name *
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3.5 text-[#277822] pointer-events-none">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs font-sans focus:outline-none focus:border-[#277822] focus:ring-2 focus:ring-[#277822]/20 transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-slate-700 uppercase block">
                      Email *
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3.5 text-[#277822] pointer-events-none">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs font-sans focus:outline-none focus:border-[#277822] focus:ring-2 focus:ring-[#277822]/20 transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-slate-700 uppercase block">
                      Message *
                    </label>
                    <div className="relative">
                      <textarea
                        rows={4}
                        required
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-4 rounded-2xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs font-sans focus:outline-none focus:border-[#277822] focus:ring-2 focus:ring-[#277822]/20 transition-all shadow-xs resize-none"
                      />
                    </div>
                  </div>

                  {/* Turnstile Widget */}
                  <div className="pt-2 flex justify-center">
                    <Turnstile 
                      siteKey={import.meta.env.VITE_SITE_KEY || '0x4AAAAAAEnCGE2ciwjtXPbs'} 
                      onSuccess={(token) => setTurnstileToken(token)}
                    />
                  </div>

                  {/* Clean Action Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting || !turnstileToken}
                      className={`w-full py-4 rounded-2xl font-black text-xs font-mono uppercase tracking-wider shadow-md shadow-[#277822]/20 transition-all flex items-center justify-center gap-2 ${
                        isSubmitting || !turnstileToken
                          ? 'bg-slate-300 text-slate-500 cursor-not-allowed' 
                          : 'bg-[#277822] hover:bg-[#1e6019] text-white cursor-pointer hover:scale-[1.01] active:scale-[0.99]'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <span>Sending...</span>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1">
                    <span className="flex items-center gap-1 text-[#236d1f] font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Strict Mutual NDA Protected
                    </span>
                    <span>Direct Engineering Review</span>
                  </div>

                </form>
              )}
            </div>

            {/* Right: Have any query? Heading & Descriptive Content (6 Cols) */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ebf7e8] border border-[#a8da9f] text-xs font-mono font-bold text-[#236d1f] tracking-wider uppercase shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#277822]" />
                <span>Have any query?</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight uppercase font-sans leading-tight">
                CONTACT <span className="text-[#277822]">US</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                Connect directly with our industrial reliability engineering team. Whether you need assistance structuring ISA-95 asset hierarchies, integrating high-speed OPC-UA data streams, or deploying read-only optical data diodes, our team is ready to assist.
              </p>

              {/* Social Media Links */}
              <div className="pt-2">
                <p className="text-xs font-mono font-bold text-slate-400 uppercase mb-3 tracking-wider">Follow Us</p>
                <div className="flex items-center gap-3">
                  <a href="https://www.facebook.com/TelemoraNetworks/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-[#fafdf9] border-2 border-[#cfe3cc] flex items-center justify-center text-[#277822] hover:bg-[#277822] hover:border-[#277822] hover:text-white transition-all shadow-sm hover:-translate-y-1">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://x.com/TelemoraNetwork" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-[#fafdf9] border-2 border-[#cfe3cc] flex items-center justify-center text-[#277822] hover:bg-[#277822] hover:border-[#277822] hover:text-white transition-all shadow-sm hover:-translate-y-1">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="https://www.pinterest.com/TelemoraNetworks/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-[#fafdf9] border-2 border-[#cfe3cc] flex items-center justify-center text-[#277822] hover:bg-[#277822] hover:border-[#277822] hover:text-white transition-all shadow-sm hover:-translate-y-1">
                    <Pinterest className="w-5 h-5" />
                  </a>
                  <a href="https://www.youtube.com/@TelemoraNetworks" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-[#fafdf9] border-2 border-[#cfe3cc] flex items-center justify-center text-[#277822] hover:bg-[#277822] hover:border-[#277822] hover:text-white transition-all shadow-sm hover:-translate-y-1">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/company/telemora" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-[#fafdf9] border-2 border-[#cfe3cc] flex items-center justify-center text-[#277822] hover:bg-[#277822] hover:border-[#277822] hover:text-white transition-all shadow-sm hover:-translate-y-1">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* 3 Value Badges */}
              <div className="space-y-3 pt-2 font-mono text-xs text-slate-700">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#fafdf9] border border-[#cfe3cc]">
                  <CheckCircle2 className="w-4 h-4 text-[#277822] shrink-0" />
                  <span>100% Unidirectional Optical Data Diode (Zero Writeback Risk)</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#fafdf9] border border-[#cfe3cc]">
                  <CheckCircle2 className="w-4 h-4 text-[#277822] shrink-0" />
                  <span>ISO 18436 Cat IV Vibration Analysis &amp; FFT Spectral Review</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#fafdf9] border border-[#cfe3cc]">
                  <CheckCircle2 className="w-4 h-4 text-[#277822] shrink-0" />
                  <span>Rapid 48-Hour Pilot Deployment Across Multi-Vendor PLCs</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
