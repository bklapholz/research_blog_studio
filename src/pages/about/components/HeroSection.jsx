import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32">
      <div className="absolute inset-0 paper-texture opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full">
                <Icon name="Sparkles" size={16} className="text-accent" />
                <span className="text-sm font-inter font-medium text-accent">
                  Democratizing Research Communication
                </span>
              </div>
              
              <h1 className="text-fluid-4xl font-inter font-bold text-primary leading-tight">
                Where Academic Rigor Meets 
                <span className="text-accent"> Creative Expression</span>
              </h1>
              
              <p className="text-fluid-lg text-muted-foreground leading-relaxed">
                Research Blog Studio bridges the gap between scholarly excellence and public engagement, 
                empowering researchers to transform complex ideas into compelling visual narratives while 
                maintaining the credibility standards of premier academic institutions.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-3 px-4 py-2 bg-success/10 rounded-lg">
                <Icon name="Users" size={20} className="text-success" />
                <div>
                  <div className="font-inter font-semibold text-success">50,000+</div>
                  <div className="text-xs text-muted-foreground">Active Researchers</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 px-4 py-2 bg-brand-primary/10 rounded-lg">
                <Icon name="BookOpen" size={20} className="text-brand-primary" />
                <div>
                  <div className="font-inter font-semibold text-brand-primary">125,000+</div>
                  <div className="text-xs text-muted-foreground">Publications Created</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 px-4 py-2 bg-creative-purple/10 rounded-lg">
                <Icon name="Building2" size={20} className="text-creative-purple" />
                <div>
                  <div className="font-inter font-semibold text-creative-purple">500+</div>
                  <div className="text-xs text-muted-foreground">Partner Institutions</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="relative bg-surface rounded-2xl shadow-academic-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Diverse team of researchers collaborating on digital content creation"
                className="w-full h-80 object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-surface/95 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent to-brand-primary rounded-lg flex items-center justify-center">
                      <Icon name="Lightbulb" size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-inter font-semibold text-primary">Innovation in Action</div>
                      <div className="text-sm text-muted-foreground">Transforming research communication</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-accent to-brand-secondary rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-creative-purple to-accent rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;