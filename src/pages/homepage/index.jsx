import React from 'react';
import HeroSection from './components/HeroSection';
import PublicationShowcase from './components/PublicationShowcase';
import TrustedInstitutions from './components/TrustedInstitutions';
import FeatureGrid from './components/FeatureGrid';
import CommunitySpotlight from './components/CommunitySpotlight';

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <PublicationShowcase />
      <TrustedInstitutions />
      <FeatureGrid />
      <CommunitySpotlight />
    </>
  );
};

export default Homepage;