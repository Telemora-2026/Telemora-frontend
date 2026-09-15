import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';
import { CookiesPolicy } from './pages/CookiesPolicy';

export const App: React.FC = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-600 selection:text-white flex flex-col">
      {/* Top Navbar */}
      <Navbar onOpenDemoModal={() => setDemoModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/cookies" element={<CookiesPolicy />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Cookie Consent Banner */}
      <CookieBanner />
    </div>
  );
};

export default App;
