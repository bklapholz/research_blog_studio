import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustedInstitutions = () => {
  const institutions = [
    {
      name: "Stanford University",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=120&h=60&fit=crop",
      publications: 245,
      researchers: 89
    },
    {
      name: "MIT",
      logo: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?w=120&h=60&fit=crop",
      publications: 312,
      researchers: 156
    },
    {
      name: "Harvard University",
      logo: "https://images.pixabay.com/photo/2017/05/09/21/49/graduation-2299696_1280.jpg?w=120&h=60&fit=crop",
      publications: 198,
      researchers: 78
    },
    {
      name: "Oxford University",
      logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=120&h=60&fit=crop",
      publications: 167,
      researchers: 92
    },
    {
      name: "ETH Zurich",
      logo: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?w=120&h=60&fit=crop",
      publications: 134,
      researchers: 67
    },
    {
      name: "University of Tokyo",
      logo: "https://images.pixabay.com/photo/2016/03/27/07/32/education-1282104_1280.jpg?w=120&h=60&fit=crop",
      publications: 189,
      researchers: 103
    }
  ];

  const stats = [
    {
      icon: "Building2",
      value: "500+",
      label: "Research Institutions",
      description: "Leading universities worldwide"
    },
    {
      icon: "Users",
      value: "15,000+",
      label: "Active Researchers",
      description: "Publishing on our platform"
    },
    {
      icon: "BookOpen",
      value: "12,000+",
      label: "Publications Created",
      description: "Across all disciplines"
    },
    {
      icon: "TrendingUp",
      value: "3.5x",
      label: "Engagement Increase",
      description: "Average improvement"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-inter font-medium">
            <Icon name="Shield" size={16} />
            <span>Trusted by Academia</span>
          </div>
          <h2 className="text-fluid-3xl font-inter font-bold text-primary">
            Leading Research Institutions
          </h2>
          <p className="text-fluid-lg text-muted-foreground font-source-serif max-w-3xl mx-auto">
            Join the world's most prestigious universities and research organizations 
            in transforming how academic knowledge is shared and discovered.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats?.map((stat, index) => (
            <div
              key={stat?.label}
              className="bg-surface rounded-xl p-6 border border-border shadow-academic text-center hover:shadow-academic-md transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name={stat?.icon} size={20} className="text-white" />
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-inter font-bold text-primary">
                  {stat?.value}
                </div>
                <div className="font-inter font-semibold text-foreground">
                  {stat?.label}
                </div>
                <div className="text-sm text-muted-foreground font-source-serif">
                  {stat?.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Institution Logos */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-xl font-inter font-semibold text-foreground mb-2">
              Partnered Institutions
            </h3>
            <p className="text-muted-foreground font-source-serif">
              Empowering researchers at the world's leading universities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {institutions?.map((institution, index) => (
              <div
                key={institution?.name}
                className="group text-center space-y-3"
              >
                <div className="relative">
                  <div className="w-20 h-20 mx-auto rounded-xl bg-surface border border-border shadow-academic overflow-hidden group-hover:shadow-academic-md transition-all duration-300 authority-logo">
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Icon name="GraduationCap" size={20} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <Icon name="Check" size={12} className="text-white" />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <h4 className="font-inter font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                    {institution?.name}
                  </h4>
                  <div className="flex items-center justify-center space-x-3 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="FileText" size={10} />
                      <span>{institution?.publications}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Users" size={10} />
                      <span>{institution?.researchers}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-surface rounded-2xl p-8 border border-border shadow-academic">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10">
                <Icon name="Shield" size={24} className="text-success" />
              </div>
              <h4 className="font-inter font-semibold text-foreground">Academic Integrity</h4>
              <p className="text-sm text-muted-foreground font-source-serif">
                Built-in peer review processes and citation management ensure scholarly standards
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                <Icon name="Lock" size={24} className="text-accent" />
              </div>
              <h4 className="font-inter font-semibold text-foreground">Data Security</h4>
              <p className="text-sm text-muted-foreground font-source-serif">
                Enterprise-grade security with FERPA compliance and institutional SSO
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Icon name="Award" size={24} className="text-primary" />
              </div>
              <h4 className="font-inter font-semibold text-foreground">Quality Assurance</h4>
              <p className="text-sm text-muted-foreground font-source-serif">
                Rigorous content standards and automated quality checks maintain excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedInstitutions;