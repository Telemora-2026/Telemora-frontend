import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { ValueStrip } from '../components/ValueStrip';
import { AboutSection } from '../components/AboutSection';
import { WorkflowVisualizer } from '../components/WorkflowVisualizer';
import { DashboardShowcase } from '../components/DashboardShowcase';
import { ArchitectureSection } from '../components/ArchitectureSection';
import { TargetUsersSection } from '../components/TargetUsersSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { PricingSection } from '../components/PricingSection';
import { ContactSection } from '../components/ContactSection';
import { FinalCTA } from '../components/FinalCTA';
import { DemoModal } from '../components/DemoModal';
import { ANOMALIES_DATA } from '../data/mockIndustrialData';
import { AnomalyInvestigation } from '../types';

export const Home: React.FC = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [activeDossier, setActiveDossier] = useState<AnomalyInvestigation>(ANOMALIES_DATA[0]);

  const handleInvestigateAnomaly = (anomaly: AnomalyInvestigation) => {
    setActiveDossier(anomaly);
    setDemoModalOpen(true);
  };

  const handleExploreClick = () => {
    const elem = document.getElementById('dashboard');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleArchitectureClick = () => {
    const elem = document.getElementById('architecture');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section with Multi-Perspective Graphic Studio */}
      <Hero
        onOpenDemoModal={() => setDemoModalOpen(true)}
        onExploreClick={handleExploreClick}
        onArchitectureClick={handleArchitectureClick}
      />

      {/* 4 Core Value Pillars */}
      <ValueStrip />

      {/* About Telemora - Industrial Telemetry Intelligence & Mission */}
      <AboutSection />

      {/* Telemetry Intelligence Workflow Visualizer (Positioned Below About Section) */}
      <WorkflowVisualizer />

      {/* Live Operational Dashboard & 3-Widget Architecture Showcase */}
      <DashboardShowcase onInvestigateAnomaly={handleInvestigateAnomaly} />

      {/* 5-Tier Edge-to-Core Architecture Stack */}
      <ArchitectureSection />

      {/* Target Users & Role-Specific Operational Use Cases */}
      <TargetUsersSection />

      {/* Verified Plant Testimonials & Proven Reliability Impact */}
      <TestimonialsSection />

      {/* Transparent Industrial Licensing Plans & Feature Matrix */}
      <PricingSection onOpenDemoModal={() => setDemoModalOpen(true)} />

      {/* Dedicated Global Regional Engineering Hubs (United States & Germany) */}
      <ContactSection />

      {/* Final High-Impact Pilot CTA */}
      <FinalCTA />

      {/* Interactive Architecture Demo Request Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </>
  );
};

export default Home;
