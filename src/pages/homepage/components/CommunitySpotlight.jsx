import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CommunitySpotlight = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const successStories = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "Marine Biology Researcher",
      institution: "Stanford University",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      story: `"Research Blog Studio transformed how I share my climate research. My publications now reach 10x more readers, and I've received collaboration requests from researchers worldwide."`,
      metrics: {
        before: { views: "150", engagement: "2%", citations: "12" },
        after: { views: "1,500", engagement: "18%", citations: "47" }
      },
      achievement: "Featured in Nature Communications",
      publicationTitle: "Ocean Acidification Impact Study",
      tags: ["Climate Science", "Marine Biology"]
    },
    {
      id: 2,
      name: "Prof. Michael Rodriguez",
      title: "Computer Science Professor",
      institution: "MIT",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      story: `"The visual editor helped me explain quantum computing concepts to broader audiences. My research is now accessible to both academics and industry professionals."`,
      metrics: {
        before: { views: "89", engagement: "1.5%", citations: "8" },
        after: { views: "2,300", engagement: "24%", citations: "89" }
      },
      achievement: "Invited to 5 International Conferences",
      publicationTitle: "Quantum Algorithms for Drug Discovery",
      tags: ["Quantum Computing", "AI/ML"]
    },
    {
      id: 3,
      name: "Dr. Elena Vasquez",
      title: "Political Science Researcher",
      institution: "Harvard University",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      story: `"Interactive data visualizations made my democracy research compelling for policymakers. I've been consulted by three government agencies since publishing."`,
      metrics: {
        before: { views: "203", engagement: "3%", citations: "15" },
        after: { views: "4,200", engagement: "31%", citations: "156" }
      },
      achievement: "Policy Advisory Board Appointment",
      publicationTitle: "Digital Democracy & Social Media Impact",
      tags: ["Political Science", "Data Analysis"]
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, successStories?.length]);

  const handleStoryChange = (index) => {
    setCurrentStory(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentResearcher = successStories?.[currentStory];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-inter font-medium">
            <Icon name="Star" size={16} />
            <span>Success Stories</span>
          </div>
          <h2 className="text-fluid-3xl font-inter font-bold text-primary">
            Researchers Transforming Their Impact
          </h2>
          <p className="text-fluid-lg text-muted-foreground font-source-serif max-w-3xl mx-auto">
            Discover how researchers are using our platform to amplify their work, 
            reach broader audiences, and create meaningful academic impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Researcher Profile */}
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <Image
                    src={currentResearcher?.avatar}
                    alt={currentResearcher?.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-surface shadow-academic"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center border-2 border-surface">
                    <Icon name="Check" size={12} className="text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-inter font-semibold text-xl text-foreground">
                    {currentResearcher?.name}
                  </h3>
                  <p className="text-muted-foreground font-inter">
                    {currentResearcher?.title}
                  </p>
                  <p className="text-sm text-muted-foreground font-inter">
                    {currentResearcher?.institution}
                  </p>
                </div>
              </div>

              {/* Story Quote */}
              <blockquote className="relative">
                <div className="absolute -top-2 -left-2 text-4xl text-accent/20 font-serif">"</div>
                <p className="text-lg text-foreground font-source-serif leading-relaxed italic pl-6">
                  {currentResearcher?.story}
                </p>
              </blockquote>

              {/* Achievement Badge */}
              <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full">
                <Icon name="Award" size={16} />
                <span className="font-inter font-medium text-sm">{currentResearcher?.achievement}</span>
              </div>

              {/* Publication Info */}
              <div className="bg-surface rounded-lg p-4 border border-border">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Icon name="FileText" size={16} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-inter font-semibold text-foreground">
                      {currentResearcher?.publicationTitle}
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {currentResearcher?.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs font-inter"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Navigation */}
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                {successStories?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleStoryChange(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentStory === index 
                        ? 'bg-accent scale-125' :'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`View story ${index + 1}`}
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground font-inter">
                {currentStory + 1} of {successStories?.length}
              </div>
            </div>
          </div>

          {/* Metrics Comparison */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-inter font-semibold text-foreground mb-2">
                Impact Transformation
              </h3>
              <p className="text-muted-foreground font-source-serif">
                Before vs. After using Research Blog Studio
              </p>
            </div>

            <div className="space-y-6">
              {/* Views Comparison */}
              <div className="bg-surface rounded-xl p-6 border border-border shadow-academic">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Eye" size={20} className="text-accent" />
                    <span className="font-inter font-semibold text-foreground">Monthly Views</span>
                  </div>
                  <div className="text-sm text-success font-inter font-medium">
                    +{Math.round((parseInt(currentResearcher?.metrics?.after?.views?.replace(',', '')) / parseInt(currentResearcher?.metrics?.before?.views)) * 100 - 100)}%
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Before</span>
                    <span className="font-inter font-semibold text-foreground">
                      {currentResearcher?.metrics?.before?.views}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-muted-foreground/50 h-2 rounded-full w-1/12"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">After</span>
                    <span className="font-inter font-semibold text-accent">
                      {currentResearcher?.metrics?.after?.views}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full w-full"></div>
                  </div>
                </div>
              </div>

              {/* Engagement Comparison */}
              <div className="bg-surface rounded-xl p-6 border border-border shadow-academic">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="TrendingUp" size={20} className="text-success" />
                    <span className="font-inter font-semibold text-foreground">Engagement Rate</span>
                  </div>
                  <div className="text-sm text-success font-inter font-medium">
                    +{Math.round((parseFloat(currentResearcher?.metrics?.after?.engagement) / parseFloat(currentResearcher?.metrics?.before?.engagement)) * 100 - 100)}%
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Before</div>
                    <div className="text-lg font-inter font-bold text-foreground">
                      {currentResearcher?.metrics?.before?.engagement}
                    </div>
                  </div>
                  <div className="text-center p-3 bg-success/10 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">After</div>
                    <div className="text-lg font-inter font-bold text-success">
                      {currentResearcher?.metrics?.after?.engagement}
                    </div>
                  </div>
                </div>
              </div>

              {/* Citations Comparison */}
              <div className="bg-surface rounded-xl p-6 border border-border shadow-academic">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Quote" size={20} className="text-primary" />
                    <span className="font-inter font-semibold text-foreground">Citations</span>
                  </div>
                  <div className="text-sm text-success font-inter font-medium">
                    +{Math.round((parseInt(currentResearcher?.metrics?.after?.citations) / parseInt(currentResearcher?.metrics?.before?.citations)) * 100 - 100)}%
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-2xl font-inter font-bold text-muted-foreground">
                      {currentResearcher?.metrics?.before?.citations}
                    </div>
                    <div className="text-sm text-muted-foreground">Before</div>
                  </div>
                  <Icon name="ArrowRight" size={20} className="text-muted-foreground" />
                  <div className="text-center">
                    <div className="text-2xl font-inter font-bold text-primary">
                      {currentResearcher?.metrics?.after?.citations}
                    </div>
                    <div className="text-sm text-muted-foreground">After</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community CTA */}
        <div className="text-center mt-16">
          <div className="bg-surface rounded-2xl p-8 border border-border shadow-academic max-w-2xl mx-auto">
            <h3 className="text-xl font-inter font-semibold text-foreground mb-4">
              Ready to Transform Your Research Impact?
            </h3>
            <p className="text-muted-foreground font-source-serif mb-6">
              Join thousands of researchers who are already amplifying their work and reaching broader audiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center space-x-2 bg-accent text-white px-6 py-3 rounded-lg font-inter font-medium hover:bg-accent/90 transition-colors cta-hover">
                <Icon name="Edit3" size={16} />
                <span>Start Your Success Story</span>
              </button>
              <button className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors font-inter font-medium">
                <span>View More Stories</span>
                <Icon name="ArrowRight" size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySpotlight;