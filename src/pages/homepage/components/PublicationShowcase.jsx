import React from 'react';
import Icon from '../../../components/AppIcon';

const PublicationShowcase = () => {
  const publications = [
    {
      id: 1,
      title: "Attention Is All You Need",
      authors: "Vaswani, A., et al.",
      venue: "NeurIPS 2017",
      description: "Introducing the Transformer architecture that revolutionized natural language processing and became the foundation for modern large language models.",
      category: "Machine Learning",
      date: "2017-12-04",
      citations: "84,567",
      tags: ["Transformers", "NLP", "Deep Learning"],
      featured: true
    },
    {
      id: 2,
      title: "BERT: Pre-training of Deep Bidirectional Transformers",
      authors: "Devlin, J., et al.", 
      venue: "NAACL 2019",
      description: "A breakthrough in language understanding that achieved state-of-the-art results on multiple NLP tasks through bidirectional training.",
      category: "Natural Language Processing",
      date: "2019-05-24",
      citations: "67,234",
      tags: ["BERT", "Language Models", "Pre-training"]
    },
    {
      id: 3,
      title: "Quantum Supremacy Using a Programmable Superconducting Processor",
      authors: "Arute, F., et al.",
      venue: "Nature 2019",
      description: "Demonstrating quantum computational advantage with a 53-qubit quantum processor performing a specific computational task.",
      category: "Quantum Computing",
      date: "2019-10-23",
      citations: "4,832",
      tags: ["Quantum Computing", "Supremacy", "Hardware"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            Latest Research Publications
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our most impactful research contributions across artificial intelligence, 
            quantum computing, and emerging technologies.
          </p>
        </div>

        <div className="space-y-8">
          {publications?.map((publication, index) => (
            <article 
              key={publication?.id}
              className={`bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 ${
                publication?.featured ? 'border-l-4 border-l-blue-600' : ''
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                
                {/* Publication Info */}
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {publication?.category}
                    </span>
                    {publication?.featured && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        <Icon name="Star" size={12} className="mr-1" />
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                    {publication?.title}
                  </h3>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-3 space-x-4">
                    <span className="flex items-center">
                      <Icon name="Users" size={14} className="mr-1" />
                      {publication?.authors}
                    </span>
                    <span className="flex items-center">
                      <Icon name="MapPin" size={14} className="mr-1" />
                      {publication?.venue}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Calendar" size={14} className="mr-1" />
                      {new Date(publication?.date).toLocaleDateString()}
                    </span>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    {publication?.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {publication?.tags?.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <Icon name="TrendingUp" size={14} className="mr-1" />
                      <span>{publication?.citations} citations</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 lg:mt-0 flex flex-col space-y-3 lg:min-w-[200px]">
                  <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                    <Icon name="FileText" size={16} className="mr-2" />
                    Read Paper
                  </button>
                  <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                    <Icon name="Code" size={16} className="mr-2" />
                    View Code
                  </button>
                  <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                    <Icon name="Share" size={16} className="mr-2" />
                    Cite
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
            <Icon name="ChevronRight" size={20} className="ml-2" />
            View All Publications
          </button>
        </div>
      </div>
    </section>
  );
};

export default PublicationShowcase;