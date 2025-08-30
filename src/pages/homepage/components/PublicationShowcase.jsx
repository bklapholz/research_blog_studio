import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PublicationShowcase = () => {
  const [activePublication, setActivePublication] = useState(0);

  const publications = [
    {
      id: 1,
      title: "Climate Change Impact on Marine Ecosystems",
      author: "Dr. Sarah Chen",
      institution: "Stanford University",
      category: "Environmental Science",
      readTime: "12 min read",
      engagement: "2.4K views",
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=400&fit=crop",
      preview: `Marine ecosystems are experiencing unprecedented changes due to rising ocean temperatures and acidification.\n\nOur comprehensive study across 15 research stations reveals critical patterns that demand immediate attention from the global scientific community.`,
      tags: ["Climate Science", "Marine Biology", "Data Analysis"],
      metrics: {
        citations: 47,
        shares: 156,
        discussions: 23
      }
    },
    {
      id: 2,
      title: "Quantum Computing Applications in Drug Discovery",
      author: "Prof. Michael Rodriguez",
      institution: "MIT",
      category: "Computer Science",
      readTime: "18 min read",
      engagement: "3.1K views",
      image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?w=600&h=400&fit=crop",
      preview: `Quantum computing represents a paradigm shift in pharmaceutical research, offering unprecedented computational power for molecular simulation.\n\nThis research demonstrates practical applications that could accelerate drug discovery by decades.`,
      tags: ["Quantum Computing", "Pharmaceuticals", "Machine Learning"],
      metrics: {
        citations: 89,
        shares: 234,
        discussions: 41
      }
    },
    {
      id: 3,
      title: "Social Media\'s Impact on Democratic Processes",
      author: "Dr. Elena Vasquez",
      institution: "Harvard University",
      category: "Political Science",
      readTime: "15 min read",
      engagement: "4.2K views",
      image: "https://images.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg?w=600&h=400&fit=crop",
      preview: `Digital platforms have fundamentally altered how citizens engage with democratic institutions and political discourse.\n\nOur longitudinal study across 12 countries reveals both opportunities and threats to democratic participation.`,
      tags: ["Political Science", "Social Media", "Democracy"],
      metrics: {
        citations: 156,
        shares: 892,
        discussions: 78
      }
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-inter font-medium">
            <Icon name="BookOpen" size={16} />
            <span>Featured Research</span>
          </div>
          <h2 className="text-fluid-3xl font-inter font-bold text-primary">
            Exceptional Research Publications
          </h2>
          <p className="text-fluid-lg text-muted-foreground font-source-serif max-w-3xl mx-auto">
            Discover how researchers are transforming complex academic work into engaging, 
            interactive publications that reach broader audiences while maintaining scholarly rigor.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {publications?.map((publication, index) => (
            <div
              key={publication?.id}
              className={`group cursor-pointer transition-all duration-500 ${
                activePublication === index 
                  ? 'transform scale-105 z-10' 
                  : 'hover:transform hover:scale-102'
              }`}
              onClick={() => setActivePublication(index)}
            >
              <div className="bg-card rounded-2xl shadow-academic border border-border overflow-hidden hover:shadow-academic-lg transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={publication?.image}
                    alt={publication?.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-inter font-medium">
                      {publication?.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                      <Icon name="Eye" size={12} className="text-muted-foreground" />
                      <span className="text-xs font-inter text-foreground">{publication?.engagement}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-inter font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {publication?.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <span className="font-inter font-medium">{publication?.author}</span>
                      <span>•</span>
                      <span>{publication?.institution}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground font-source-serif leading-relaxed line-clamp-3">
                    {publication?.preview?.split('\n')?.[0]}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {publication?.tags?.slice(0, 2)?.map((tag) => (
                      <span
                        key={tag}
                        className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs font-inter"
                      >
                        {tag}
                      </span>
                    ))}
                    {publication?.tags?.length > 2 && (
                      <span className="text-xs text-muted-foreground font-inter">
                        +{publication?.tags?.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Metrics */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Icon name="Quote" size={12} />
                        <span>{publication?.metrics?.citations}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Share2" size={12} />
                        <span>{publication?.metrics?.shares}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="MessageCircle" size={12} />
                        <span>{publication?.metrics?.discussions}</span>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground font-inter">
                      {publication?.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Preview */}
        {activePublication !== null && (
          <div className="mt-12 bg-muted/30 rounded-2xl p-8 border border-border">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start space-x-6">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Icon name="FileText" size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-xl text-foreground">
                        {publications?.[activePublication]?.title}
                      </h4>
                      <p className="text-muted-foreground font-inter">
                        {publications?.[activePublication]?.author} • {publications?.[activePublication]?.institution}
                      </p>
                    </div>
                  </div>
                  
                  <div className="prose prose-sm max-w-none">
                    <p className="text-muted-foreground font-source-serif leading-relaxed whitespace-pre-line">
                      {publications?.[activePublication]?.preview}
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors">
                      <Icon name="ExternalLink" size={16} />
                      <span className="font-inter font-medium text-sm">Read Full Publication</span>
                    </button>
                    <button className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                      <Icon name="Bookmark" size={16} />
                      <span className="font-inter font-medium text-sm">Save</span>
                    </button>
                  </div>
                </div>

                <div className="hidden lg:block w-64">
                  <div className="bg-surface rounded-lg p-4 border border-border space-y-3">
                    <h5 className="font-inter font-medium text-sm text-foreground">Publication Metrics</h5>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Citations</span>
                        <span className="font-inter font-medium text-foreground">
                          {publications?.[activePublication]?.metrics?.citations}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Shares</span>
                        <span className="font-inter font-medium text-foreground">
                          {publications?.[activePublication]?.metrics?.shares}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Discussions</span>
                        <span className="font-inter font-medium text-foreground">
                          {publications?.[activePublication]?.metrics?.discussions}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <button className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors font-inter font-medium">
            <span>Explore All Publications</span>
            <Icon name="ArrowRight" size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PublicationShowcase;