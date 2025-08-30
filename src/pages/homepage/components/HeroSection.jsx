import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Puck } from '@measured/puck';

const HeroSection = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showEditor, setShowEditor] = useState(false);

  const headlines = [
    "AI Research and Innovation",
    "Advancing Computer Science", 
    "Building the Future of Technology"
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

  // Puck editor configuration
  const config = {
    components: {
      HeadingBlock: {
        fields: {
          children: {
            type: "text",
          },
        },
        render: ({ children }) => {
          return <h2 className="text-2xl font-bold mb-4 text-gray-900">{children}</h2>;
        },
      },
      ParagraphBlock: {
        fields: {
          children: {
            type: "textarea",
          },
        },
        render: ({ children }) => {
          return <p className="text-gray-700 leading-relaxed mb-4">{children}</p>;
        },
      },
    },
  };

  const initialData = {
    content: [
      {
        type: "HeadingBlock",
        props: {
          id: "heading-1",
          children: "Research Insights",
        },
      },
      {
        type: "ParagraphBlock",
        props: {
          id: "paragraph-1", 
          children: "Explore the latest breakthroughs in artificial intelligence and machine learning.",
        },
      },
    ],
    root: { props: { title: "Research Blog" } },
  };

  return (
    <section className="bg-white">
      {/* Google Research Blog Style Header */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-6">
            <Icon name="Lightbulb" size={14} />
            <span>Google Research Blog</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
            <span 
              className={`block transition-all duration-500 ${
                isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
              }`}
            >
              {headlines?.[currentHeadline]}
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 font-normal leading-relaxed max-w-3xl mx-auto mb-8">
            Sharing our latest research, insights, and innovations that are shaping the future of technology and advancing human knowledge.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
              iconName="Search"
              iconPosition="left"
            >
              Explore Research
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-md font-medium"
              iconName="Edit3"
              iconPosition="left"
              onClick={() => setShowEditor(!showEditor)}
            >
              {showEditor ? 'Hide Editor' : 'Visual Editor'}
            </Button>
          </div>
        </div>

        {/* Featured Research Cards - Google Research Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="group cursor-pointer">
            <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Icon name="Brain" size={48} className="text-white" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              Machine Learning Advances
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Exploring new architectures and training methodologies that push the boundaries of what's possible with AI.
            </p>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                <Icon name="Globe" size={48} className="text-white" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              Quantum Computing
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Breakthrough research in quantum algorithms and their applications to real-world problems.
            </p>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <Icon name="Zap" size={48} className="text-white" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              Computer Vision
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Revolutionary approaches to image recognition, object detection, and visual understanding.
            </p>
          </div>
        </div>
      </div>

      {/* Puck Visual Editor Integration */}
      {showEditor && (
        <div className="border-t border-gray-200 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Visual Content Editor</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <Puck 
                config={config} 
                data={initialData}
                onPublish={(data) => {
                  console.log('Published:', data);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;