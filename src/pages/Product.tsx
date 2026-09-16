import React, { useState, useEffect } from 'react';
import { ProductHero } from '../components/product/ProductHero';
import { ProductCapabilities } from '../components/product/ProductCapabilities';
import { ProductWorkflow } from '../components/product/ProductWorkflow';
import { ProductMetrics } from '../components/product/ProductMetrics';
import { ProductArchitecture } from '../components/product/ProductArchitecture';
import { ProductSecurity } from '../components/product/ProductSecurity';
import { ProductCta } from '../components/product/ProductCta';
import { DemoModal } from '../components/DemoModal';

export const Product: React.FC = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* 1. Hero Section with Live CTA to https://hub.telemora.net */}
      <ProductHero onOpenDemoModal={() => setDemoModalOpen(true)} />

      {/* 2. Four Core Intelligent Engines & Modules */}
      <ProductCapabilities />

      {/* 3. Operational Workflow & Real-World Plant Scenarios */}
      <ProductWorkflow />

      {/* 4. Measurable Quantitative Metrics & SCADA Comparison */}
      <ProductMetrics />

      {/* 5. Under-the-Hood Accelerated Computing Foundation (NVIDIA AI SDKs) */}
      <ProductArchitecture />

      {/* 6. OT Cybersecurity, Air-Gap & Hardware Diode Security */}
      <ProductSecurity />

      {/* 7. Final Conversion Section with Live Hub Link & Pilot Request */}
      <ProductCta onOpenDemoModal={() => setDemoModalOpen(true)} />

      {/* Interactive Demo Request Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </div>
  );
};

export default Product;
