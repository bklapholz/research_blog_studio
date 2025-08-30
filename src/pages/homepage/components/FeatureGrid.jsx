import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FeatureGrid = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      id: 1,
      icon: "Edit3",
      title: "Visual Research Editor",
      description: "Transform complex academic content into engaging, interactive publications with our intuitive drag-and-drop editor.",
      details: [
        "Drag-and-drop component library",
        "Real-time collaborative editing",
        "Academic template gallery",
        "Interactive data visualization tools"
      ],
      color: "accent",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      icon: "Shield",
      title: "Academic Integrity Tools",
      description: "Maintain scholarly standards with built-in peer review, citation management, and plagiarism detection.",
      details: [
        "Automated citation formatting",
        "Peer review workflow system",
        "Plagiarism detection integration",
        "DOI and ORCID integration"
      ],
      color: "primary",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      icon: "BarChart3",
      title: "Impact Analytics",
      description: "Track your research impact with comprehensive analytics covering engagement, citations, and reach.",
      details: [
        "Real-time engagement metrics",
        "Citation tracking and alerts",
        "Audience demographics analysis",
        "Social media impact measurement"
      ],
      color: "success",
      image: "https://images.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-inter font-medium">
            <Icon name="Zap" size={16} />
            <span>Platform Features</span>
          </div>
          <h2 className="text-fluid-3xl font-inter font-bold text-primary">
            Everything You Need for Research Excellence
          </h2>
          <p className="text-fluid-lg text-muted-foreground font-source-serif max-w-3xl mx-auto">
            Our comprehensive platform combines powerful editing tools, academic integrity features, 
            and detailed analytics to help researchers create impactful publications.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features?.map((feature, index) => (
            <div
              key={feature?.id}
              className="group relative"
              onMouseEnter={() => setHoveredFeature(feature?.id)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className={`bg-card rounded-2xl border border-border shadow-academic overflow-hidden transition-all duration-500 ${
                hoveredFeature === feature?.id 
                  ? 'transform scale-105 shadow-academic-lg' 
                  : 'hover:shadow-academic-md'
              }`}>
                
                {/* Feature Image */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${feature?.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Feature Icon */}
                  <div className="absolute top-6 left-6">
                    <div className={`w-12 h-12 rounded-xl bg-${feature?.color} flex items-center justify-center shadow-academic`}>
                      <Icon name={feature?.icon} size={20} className="text-white" />
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  <div className={`absolute bottom-4 right-4 transition-all duration-300 ${
                    hoveredFeature === feature?.id ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'
                  }`}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <Icon name="ArrowUpRight" size={16} className="text-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-inter font-semibold text-xl text-card-foreground group-hover:text-primary transition-colors">
                      {feature?.title}
                    </h3>
                    <p className="text-muted-foreground font-source-serif leading-relaxed">
                      {feature?.description}
                    </p>
                  </div>

                  {/* Feature Details */}
                  <div className={`space-y-2 transition-all duration-500 ${
                    hoveredFeature === feature?.id 
                      ? 'opacity-100 max-h-40 transform translate-y-0' 
                      : 'opacity-0 max-h-0 transform translate-y-4 overflow-hidden'
                  }`}>
                    <h4 className="font-inter font-medium text-sm text-foreground">Key Capabilities:</h4>
                    <ul className="space-y-1">
                      {feature?.details?.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <Icon name="Check" size={14} className={`text-${feature?.color} mt-0.5 flex-shrink-0`} />
                          <span className="font-source-serif">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-border">
                    <button className={`inline-flex items-center space-x-2 text-${feature?.color} hover:text-${feature?.color}/80 transition-colors font-inter font-medium text-sm`}>
                      <span>Learn More</span>
                      <Icon name="ArrowRight" size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-16 bg-muted/30 rounded-2xl p-8 border border-border">
          <div className="text-center mb-8">
            <h3 className="text-xl font-inter font-semibold text-foreground mb-2">
              Plus Many More Features
            </h3>
            <p className="text-muted-foreground font-source-serif">
              Comprehensive tools designed specifically for academic research communication
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "Users", label: "Collaboration Tools" },
              { icon: "Globe", label: "Multi-language Support" },
              { icon: "Smartphone", label: "Mobile Optimization" },
              { icon: "Download", label: "Export Options" },
              { icon: "MessageCircle", label: "Peer Review System" },
              { icon: "Search", label: "Advanced Discovery" },
              { icon: "Bookmark", label: "Content Organization" },
              { icon: "Share2", label: "Social Integration" }
            ]?.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-surface rounded-lg border border-border hover:shadow-academic transition-all duration-200">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <Icon name={item?.icon} size={16} className="text-primary" />
                </div>
                <span className="font-inter font-medium text-sm text-foreground">{item?.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;