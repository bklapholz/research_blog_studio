import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionSection = () => {
  const principles = [
    {
      icon: "Target",
      title: "Democratized Access",
      description: "Professional content creation tools accessible to every researcher, regardless of technical expertise or institutional resources."
    },
    {
      icon: "Users",
      title: "Community-Driven",
      description: "Knowledge sharing powered by collaborative communities where researchers learn from and inspire each other."
    },
    {
      icon: "TrendingUp",
      title: "Measurable Impact",
      description: "Research impact through engagement analytics, helping researchers understand and amplify their influence."
    },
    {
      icon: "Shield",
      title: "Academic Integrity",
      description: "Preserving scholarly standards while embracing creative expression that enhances rather than compromises research quality."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full">
            <Icon name="Compass" size={16} className="text-primary" />
            <span className="text-sm font-inter font-medium text-primary">Our Mission</span>
          </div>
          
          <h2 className="text-fluid-3xl font-inter font-bold text-primary">
            Empowering Researchers to Become Content Creators
          </h2>
          
          <p className="text-fluid-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe that groundbreaking research deserves groundbreaking communication. Our platform 
            transforms the way academic knowledge is shared, making complex ideas accessible through 
            beautiful, interactive content experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles?.map((principle, index) => (
            <div 
              key={principle?.title}
              className={`bg-card rounded-xl p-6 shadow-academic hover:shadow-academic-md transition-all duration-300 research-reveal stagger-${index + 1}`}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name={principle?.icon} size={24} className="text-white" />
                </div>
                
                <div>
                  <h3 className="font-inter font-semibold text-lg text-primary mb-2">
                    {principle?.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-fluid-2xl font-inter font-bold text-primary">
                The Origin Story
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Research Blog Studio was born from a simple observation: the world's most important 
                research was trapped in formats that limited its reach and impact. Inspired by 
                Google Research's clean aesthetic and powered by cutting-edge visual editing 
                capabilities, we created a platform where academic rigor meets creative expression.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our founders, a team of researchers, designers, and educators, recognized that 
                visual storytelling could enhance rather than compromise scholarly communication. 
                Today, we're proud to serve thousands of researchers worldwide, helping them 
                transform their work into engaging, accessible content.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-surface rounded-xl p-6 shadow-academic">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-success to-brand-secondary rounded-full flex items-center justify-center">
                      <Icon name="CheckCircle" size={16} className="text-white" />
                    </div>
                    <span className="font-inter font-medium text-primary">2019: Platform Conception</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-accent to-brand-primary rounded-full flex items-center justify-center">
                      <Icon name="CheckCircle" size={16} className="text-white" />
                    </div>
                    <span className="font-inter font-medium text-primary">2021: First University Partnership</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-creative-purple to-accent rounded-full flex items-center justify-center">
                      <Icon name="CheckCircle" size={16} className="text-white" />
                    </div>
                    <span className="font-inter font-medium text-primary">2023: 100,000+ Publications Milestone</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-success rounded-full flex items-center justify-center">
                      <Icon name="Rocket" size={16} className="text-white" />
                    </div>
                    <span className="font-inter font-medium text-primary">2024: Global Research Impact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;