import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const headlines = [
    "Transform Research into Engaging Stories",
    "Where Academic Rigor Meets Creative Expression", 
    "Democratize Research Communication"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentHeadline((prev) => (prev + 1) % headlines?.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [headlines?.length]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 paper-texture opacity-40"></div>
      {/* Academic Grid Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-inter font-medium">
                <Icon name="Sparkles" size={16} />
                <span>Powered by Visual Research Editor</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-fluid-hero font-inter font-bold text-primary leading-tight">
                  <span 
                    className={`block transition-all duration-500 ${
                      isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                    }`}
                  >
                    {headlines?.[currentHeadline]}
                  </span>
                </h1>
                
                <p className="text-fluid-lg text-muted-foreground font-source-serif leading-relaxed max-w-xl">
                  Research Blog Studio empowers academics and researchers to transform complex ideas into visually compelling, interactive publications that engage broader audiences while maintaining scholarly integrity.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg" 
                className="cta-hover"
                iconName="Edit3"
                iconPosition="left"
              >
                Start Creating
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="BookOpen"
                iconPosition="left"
              >
                Explore Publications
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-inter font-bold text-primary">12,000+</div>
                <div className="text-sm text-muted-foreground">Publications Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-inter font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Research Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-inter font-bold text-primary">3.5x</div>
                <div className="text-sm text-muted-foreground">Avg. Engagement Increase</div>
              </div>
            </div>
          </div>

          {/* Right Content - Editor Preview */}
          <div className="relative">
            <div className="relative bg-surface rounded-2xl shadow-academic-lg border border-border overflow-hidden">
              {/* Editor Header */}
              <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-error"></div>
                    <div className="w-3 h-3 rounded-full bg-warning"></div>
                    <div className="w-3 h-3 rounded-full bg-success"></div>
                  </div>
                  <span className="text-sm font-inter font-medium text-foreground">Research Editor</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={16} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">3 collaborators</span>
                </div>
              </div>

              {/* Editor Content */}
              <div className="p-6 space-y-6 bg-surface">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Icon name="FileText" size={16} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-inter font-semibold text-foreground">Neural Network Optimization</h3>
                      <p className="text-sm text-muted-foreground">Research Publication • Draft</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-3 bg-muted rounded w-full"></div>
                    <div className="h-3 bg-muted rounded w-4/5"></div>
                    <div className="h-3 bg-muted rounded w-3/4"></div>
                  </div>
                </div>

                {/* Interactive Chart Preview */}
                <div className="bg-muted/50 rounded-lg p-4 border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-inter font-medium text-foreground">Performance Metrics</span>
                    <Icon name="BarChart3" size={16} className="text-accent" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <div className="h-2 bg-accent/30 rounded flex-1"></div>
                      <span className="text-xs text-muted-foreground">92%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <div className="h-2 bg-secondary/30 rounded flex-1 w-3/4"></div>
                      <span className="text-xs text-muted-foreground">78%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      <div className="h-2 bg-success/30 rounded flex-1 w-2/3"></div>
                      <span className="text-xs text-muted-foreground">65%</span>
                    </div>
                  </div>
                </div>

                {/* Component Toolbar */}
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border">
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-surface rounded-md transition-colors">
                      <Icon name="Type" size={16} className="text-muted-foreground" />
                    </button>
                    <button className="p-2 hover:bg-surface rounded-md transition-colors">
                      <Icon name="Image" size={16} className="text-muted-foreground" />
                    </button>
                    <button className="p-2 hover:bg-surface rounded-md transition-colors">
                      <Icon name="BarChart3" size={16} className="text-muted-foreground" />
                    </button>
                    <button className="p-2 hover:bg-surface rounded-md transition-colors">
                      <Icon name="Quote" size={16} className="text-muted-foreground" />
                    </button>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Icon name="Plus" size={14} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-success text-white p-3 rounded-full shadow-academic-md">
              <Icon name="Check" size={20} />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-white p-3 rounded-full shadow-academic-md">
              <Icon name="Zap" size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;