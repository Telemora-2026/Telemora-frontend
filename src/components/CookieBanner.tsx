import React, { useState, useEffect } from 'react';
import { Cookie, X, ShieldCheck } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted or declined cookies
    const consent = localStorage.getItem('telemora_cookie_consent');
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('telemora_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('telemora_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none flex justify-center">
      <div className="bg-white border border-[#cfe3cc] shadow-2xl rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-5 w-full max-w-5xl pointer-events-auto transform transition-transform duration-500 translate-y-0 animate-fade-in-up">
        
        {/* Icon & Content */}
        <div className="flex items-start gap-4 flex-1">
          <div className="w-12 h-12 rounded-xl bg-[#ebf7e8] flex items-center justify-center text-[#277822] shrink-0 border border-[#a8da9f]">
            <Cookie className="w-6 h-6" />
          </div>
          <div className="space-y-1.5">
            <h4 className="text-base font-extrabold text-slate-950 font-sans flex items-center gap-2">
              Privacy & Cookie Preferences
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
              We use cookies to enhance your operational experience, analyze platform traffic, and provide tailored industrial insights. Read our <a href="/privacy-policy" className="text-[#277822] font-semibold hover:underline">Privacy Policy</a> to learn more about how we handle your data with enterprise-grade security.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 w-full md:w-auto mt-2 md:mt-0 pt-3 md:pt-0 border-t border-slate-100 md:border-none">
          <button
            onClick={handleDecline}
            className="flex-1 md:flex-none px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider font-mono transition-colors text-center"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 md:flex-none px-6 py-2.5 rounded-xl bg-[#277822] hover:bg-[#1e6019] text-white font-bold text-xs uppercase tracking-wider font-mono shadow-md shadow-[#277822]/20 transition-all hover:scale-105 active:scale-95 text-center"
          >
            Accept All
          </button>
          
          {/* Close button for desktop only */}
          <button 
            onClick={handleDecline}
            className="hidden md:flex p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
};
