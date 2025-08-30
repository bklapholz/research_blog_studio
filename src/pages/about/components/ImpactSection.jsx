import React from 'react';
import Icon from '../../../components/AppIcon';

const ImpactSection = () => {
  const impactMetrics = [
    {
      icon: "Users",
      value: "50,000+",
      label: "Active Researchers",
      description: "From 500+ institutions worldwide",
      color: "success"
    },
    {
      icon: "BookOpen",
      value: "125,000+",
      label: "Publications Created",
      description: "Across all academic disciplines",
      color: "brand-primary"
    },
    {
      icon: "TrendingUp",
      value: "300%",
      label: "Average Engagement Increase",
      description: "Compared to traditional formats",
      color: "accent"
    },
    {
      icon: "Award",
      value: "95%",
      label: "User Satisfaction Rate",
      description: "Based on quarterly surveys",
      color: "creative-purple"
    }
  ];

  const successStories = [
    {
      institution: "Stanford University",
      department: "Computer Science",
      impact: "40% increase in research visibility",
      quote: "Research Blog Studio transformed how we communicate our AI research to both academic and public audiences.",
      author: "Dr. Jennifer Liu",
      role: "Professor of Computer Science"
    },
    {
      institution: "MIT Media Lab",
      department: "Digital Humanities",
      impact: "60% more interdisciplinary collaborations",
      quote: "The visual storytelling capabilities have opened new avenues for presenting complex research narratives.",
      author: "Prof. Michael Chen",
      role: "Director of Digital Research"
    },
    {
      institution: "Oxford University",
      department: "Medical Sciences",
      impact: "200% increase in public engagement",
      quote: "Our medical research now reaches patients and families in ways we never thought possible.",
      author: "Dr. Sarah Williams",
      role: "Head of Public Engagement"
    }
  ];

  const partnerships = [
    { name: "Harvard University", logo: "GraduationCap", type: "Academic Partner" },
    { name: "Nature Publishing", logo: "BookOpen", type: "Publishing Partner" },
    { name: "IEEE", logo: "Zap", type: "Technical Partner" },
    { name: "AAAS", logo: "Atom", type: "Science Partner" },
    { name: "Springer", logo: "Book", type: "Publishing Partner" },
    { name: "Elsevier", logo: "FileText", type: "Content Partner" }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-success/10 rounded-full">
            <Icon name="TrendingUp" size={16} className="text-success" />
            <span className="text-sm font-inter font-medium text-success">Impact & Results</span>
          </div>
          
          <h2 className="text-fluid-3xl font-inter font-bold text-primary">
            Measurable Research Impact
          </h2>
          
          <p className="text-fluid-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our platform delivers concrete results for researchers and institutions, 
            with measurable improvements in engagement, collaboration, and research visibility.
          </p>
        </div>
        
        {/* Impact Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactMetrics?.map((metric, index) => (
            <div 
              key={metric?.label}
              className={`bg-card rounded-xl p-6 text-center shadow-academic hover:shadow-academic-md transition-all duration-300 research-reveal stagger-${index + 1}`}
            >
              <div className="space-y-4">
                <div className={`w-16 h-16 bg-gradient-to-br from-${metric?.color} to-${metric?.color}/80 rounded-full mx-auto flex items-center justify-center`}>
                  <Icon name={metric?.icon} size={24} className="text-white" />
                </div>
                
                <div>
                  <div className={`text-3xl font-inter font-bold text-${metric?.color} mb-1`}>
                    {metric?.value}
                  </div>
                  <div className="font-inter font-semibold text-primary mb-2">
                    {metric?.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric?.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Success Stories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-fluid-2xl font-inter font-bold text-primary mb-4">
              Success Stories
            </h3>
            <p className="text-muted-foreground">
              Real results from leading research institutions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {successStories?.map((story, index) => (
              <div 
                key={story?.institution}
                className={`bg-surface rounded-xl p-8 shadow-academic hover:shadow-academic-md transition-all duration-300 research-reveal stagger-${index + 1}`}
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                      <Icon name="Building2" size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-inter font-semibold text-primary">
                        {story?.institution}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {story?.department}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-success/10 rounded-lg p-4">
                    <div className="text-success font-inter font-semibold text-lg">
                      {story?.impact}
                    </div>
                  </div>
                  
                  <blockquote className="text-muted-foreground italic leading-relaxed">
                    "{story?.quote}"
                  </blockquote>
                  
                  <div className="border-t border-border pt-4">
                    <div className="font-inter font-semibold text-primary">
                      {story?.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {story?.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Partnerships */}
        <div className="bg-surface rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-fluid-2xl font-inter font-bold text-primary mb-4">
              Trusted by Leading Institutions
            </h3>
            <p className="text-muted-foreground">
              Partnerships with premier universities, publishers, and research organizations
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partnerships?.map((partner, index) => (
              <div 
                key={partner?.name}
                className={`text-center space-y-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-300 research-reveal stagger-${index + 1}`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg mx-auto flex items-center justify-center">
                  <Icon name={partner?.logo} size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-inter font-semibold text-sm text-primary">
                    {partner?.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {partner?.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;