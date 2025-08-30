import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import PublicationShowcase from './components/PublicationShowcase';
import TrustedInstitutions from './components/TrustedInstitutions';
import FeatureGrid from './components/FeatureGrid';
import CommunitySpotlight from './components/CommunitySpotlight';
import Footer from './components/Footer';

const Homepage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Research Blog Studio - Transform Research into Engaging Stories';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Empower your research with visual storytelling. Transform complex academic work into engaging, interactive publications while maintaining scholarly integrity.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Empower your research with visual storytelling. Transform complex academic work into engaging, interactive publications while maintaining scholarly integrity.';
      document.getElementsByTagName('head')?.[0]?.appendChild(meta);
    }

    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <PublicationShowcase />
        <TrustedInstitutions />
        <FeatureGrid />
        <CommunitySpotlight />
      </main>
      
      <Footer />
    </div>
  );
};

export default Homepage;