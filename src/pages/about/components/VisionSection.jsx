import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VisionSection = () => {
  const futureFeatures = [
    {
      icon: "Brain",
      title: "AI-Powered Research Insights",
      description: "Intelligent content suggestions and automated research summaries to enhance storytelling.",
      timeline: "Q2 2025",
      status: "In Development"
    },
    {
      icon: "Globe",
      title: "Global Collaboration Hub",
      description: "Real-time collaborative editing with researchers worldwide, breaking down geographical barriers.",
      timeline: "Q3 2025",
      status: "Planned"
    },
    {
      icon: "Presentation",
      title: "Interactive Presentation Mode",
      description: "Transform research publications into dynamic, interactive presentations for conferences.",
      timeline: "Q4 2025",
      status: "Planned"
    },
    {
      icon: "Smartphone",
      title: "Mobile Creator Studio",
      description: "Full-featured mobile app for content creation and collaboration on the go.",
      timeline: "Q1 2026",
      status: "Research Phase"
    }
  ];

  const visionPillars = [
    {
      icon: "Lightbulb",
      title: "Innovation in Communication",
      description: "Continuously pushing the boundaries of how research is shared and understood."
    },
    {
      icon: "Users",
      title: "Community-Driven Growth",
      description: "Building features and improvements based on researcher feedback and needs."
    },
    {
      icon: "Target",
      title: "Accessibility First",
      description: "Making research communication tools available to researchers regardless of resources."
    },
    {
      icon: "Zap",
      title: "Technology Leadership",
      description: "Staying at the forefront of web technology to deliver the best user experience."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-creative-purple/10 rounded-full">
            <Icon name="Telescope" size={16} className="text-creative-purple" />
            <span className="text-sm font-inter font-medium text-creative-purple">Future Vision</span>
          </div>
          
          <h2 className="text-fluid-3xl font-inter font-bold text-primary">
            Building the Future of Research Communication
          </h2>
          
          <p className="text-fluid-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our roadmap focuses on expanding research communication capabilities, enhancing collaborative 
            features, and building stronger bridges between academic and public discourse.
          </p>
        </div>
        
        {/* Vision Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {visionPillars?.map((pillar, index) => (
            <div 
              key={pillar?.title}
              className={`text-center space-y-4 research-reveal stagger-${index + 1}`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-creative-purple to-accent rounded-full mx-auto flex items-center justify-center">
                <Icon name={pillar?.icon} size={24} className="text-white" />
              </div>
              
              <div>
                <h3 className="font-inter font-semibold text-lg text-primary mb-2">
                  {pillar?.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Future Features Roadmap */}
        <div className="bg-gradient-to-r from-primary/5 to-creative-purple/5 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-fluid-2xl font-inter font-bold text-primary mb-4">
              Product Roadmap
            </h3>
            <p className="text-muted-foreground">
              Upcoming features and enhancements planned for the next 18 months
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {futureFeatures?.map((feature, index) => (
              <div 
                key={feature?.title}
                className={`bg-surface rounded-xl p-6 shadow-academic hover:shadow-academic-md transition-all duration-300 research-reveal stagger-${index + 1}`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-creative-purple rounded-lg flex items-center justify-center">
                        <Icon name={feature?.icon} size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-inter font-semibold text-primary">
                          {feature?.title}
                        </h4>
                        <div className="text-sm text-muted-foreground">
                          {feature?.timeline}
                        </div>
                      </div>
                    </div>
                    
                    <div className={`px-3 py-1 rounded-full text-xs font-inter font-medium ${
                      feature?.status === 'In Development' ?'bg-warning/10 text-warning' 
                        : feature?.status === 'Planned' ?'bg-accent/10 text-accent' :'bg-muted text-muted-foreground'
                    }`}>
                      {feature?.status}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 lg:p-12 text-center text-white">
          <div className="space-y-6">
            <div className="w-20 h-20 bg-white/20 rounded-full mx-auto flex items-center justify-center">
              <Icon name="Rocket" size={32} className="text-white" />
            </div>
            
            <div>
              <h3 className="text-fluid-2xl font-inter font-bold mb-4">
                Join the Research Communication Revolution
              </h3>
              <p className="text-white/90 text-fluid-lg max-w-2xl mx-auto leading-relaxed">
                Be part of a community that's transforming how research is shared, understood, 
                and celebrated. Start creating compelling research narratives today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 cta-hover"
              >
                Start Creating
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Schedule Demo
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-white/80 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={16} />
                <span>Free to start</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} />
                <span>Join 50,000+ researchers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} />
                <span>Academic-grade security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;