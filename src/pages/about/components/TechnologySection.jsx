import React from 'react';
import Icon from '../../../components/AppIcon';

const TechnologySection = () => {
  const techFeatures = [
    {
      icon: "Edit3",
      title: "Puck Visual Editor Integration",
      description: "Seamlessly integrated visual editing capabilities with research-specific components and templates.",
      details: ["Drag-and-drop interface", "Custom research components", "Real-time collaboration", "Version control"]
    },
    {
      icon: "Database",
      title: "Academic Data Integration",
      description: "Connect with leading research databases, citation managers, and institutional repositories.",
      details: ["DOI resolution", "Citation management", "ORCID integration", "Institutional SSO"]
    },
    {
      icon: "BarChart3",
      title: "Impact Analytics",
      description: "Comprehensive analytics dashboard tracking both engagement metrics and academic impact indicators.",
      details: ["Engagement tracking", "Citation analysis", "Social media metrics", "Institutional reporting"]
    },
    {
      icon: "Shield",
      title: "Academic-Grade Security",
      description: "Enterprise-level security with FERPA compliance and granular privacy controls.",
      details: ["FERPA compliance", "Institutional SSO", "Granular permissions", "Data encryption"]
    }
  ];

  const integrations = [
    { name: "ORCID", icon: "User", description: "Researcher identification" },
    { name: "Crossref", icon: "Link", description: "DOI resolution" },
    { name: "PubMed", icon: "Search", description: "Medical literature" },
    { name: "arXiv", icon: "FileText", description: "Preprint server" },
    { name: "Google Scholar", icon: "GraduationCap", description: "Citation tracking" },
    { name: "Mendeley", icon: "BookOpen", description: "Reference management" }
  ];

  return (
    <section className="py-20 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-primary/10 rounded-full">
            <Icon name="Cpu" size={16} className="text-brand-primary" />
            <span className="text-sm font-inter font-medium text-brand-primary">Technology</span>
          </div>
          
          <h2 className="text-fluid-3xl font-inter font-bold text-primary">
            Built for Academic Excellence
          </h2>
          
          <p className="text-fluid-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our platform combines cutting-edge visual editing technology with deep academic integrations, 
            creating a unique ecosystem designed specifically for research communication.
          </p>
        </div>
        
        {/* Technology Features */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {techFeatures?.map((feature, index) => (
            <div 
              key={feature?.title}
              className={`bg-card rounded-xl p-8 shadow-academic hover:shadow-academic-md transition-all duration-300 research-reveal stagger-${index + 1}`}
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={feature?.icon} size={24} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-inter font-semibold text-xl text-primary mb-2">
                      {feature?.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {feature?.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {feature?.details?.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Architecture Overview */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-fluid-2xl font-inter font-bold text-primary">
                Modern Architecture
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Built on React 18 with Next.js for optimal performance, our platform leverages 
                modern web technologies to deliver a seamless experience for researchers and 
                content creators.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Zap" size={20} className="text-warning" />
                  <span className="font-inter font-medium text-primary">Lightning-fast performance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Smartphone" size={20} className="text-success" />
                  <span className="font-inter font-medium text-primary">Mobile-responsive design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Globe" size={20} className="text-accent" />
                  <span className="font-inter font-medium text-primary">Global CDN distribution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Lock" size={20} className="text-error" />
                  <span className="font-inter font-medium text-primary">Enterprise security</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-surface rounded-xl p-6 shadow-academic">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto flex items-center justify-center mb-3">
                      <Icon name="Layers" size={24} className="text-white" />
                    </div>
                    <h4 className="font-inter font-semibold text-primary">Tech Stack</h4>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="text-center p-2 bg-muted/50 rounded">React 18</div>
                    <div className="text-center p-2 bg-muted/50 rounded">Next.js</div>
                    <div className="text-center p-2 bg-muted/50 rounded">Puck Editor</div>
                    <div className="text-center p-2 bg-muted/50 rounded">TypeScript</div>
                    <div className="text-center p-2 bg-muted/50 rounded">Tailwind CSS</div>
                    <div className="text-center p-2 bg-muted/50 rounded">Node.js</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Integrations */}
        <div className="text-center mb-8">
          <h3 className="text-fluid-2xl font-inter font-bold text-primary mb-4">
            Academic Integrations
          </h3>
          <p className="text-muted-foreground">
            Seamlessly connect with the tools and databases researchers already use
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {integrations?.map((integration, index) => (
            <div 
              key={integration?.name}
              className={`text-center space-y-3 p-4 bg-card rounded-lg shadow-academic hover:shadow-academic-md transition-all duration-300 research-reveal stagger-${index + 1}`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-muted to-border rounded-lg mx-auto flex items-center justify-center">
                <Icon name={integration?.icon} size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-inter font-semibold text-sm text-primary">
                  {integration?.name}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {integration?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;