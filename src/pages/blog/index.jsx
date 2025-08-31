import React, { useState } from 'react';
import { Puck } from '@measured/puck';
import Header from '../../components/ui/Header';
import Footer from '../homepage/components/Footer';
import Icon from '../../components/AppIcon';
import { blogConfig } from '@/lib/puck/blogConfig';

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [showEditor, setShowEditor] = useState(false);


  const initialData = {
    content: [
              {
                type: "ArticleHeader",
                props: {
                  id: "header-1",
                  title: "The Future of Artificial Intelligence Research",
                  subtitle: "Exploring the next frontiers in machine learning and AI development",
                  author: "Research Team",
                  date: "December 15, 2024",
                  readTime: "8",
                },
              },
              {
                type: "TextContent",
                props: {
                  id: "content-1",
                  content: "Artificial intelligence continues to evolve at an unprecedented pace, with breakthrough discoveries reshaping our understanding of what's possible. In this comprehensive overview, we explore the latest developments and future directions in AI research.",
                },
              },
              {
                type: "ImageBlock",
                props: {
                  id: "image-1",
                  src: "/api/placeholder/800/400",
                  alt: "AI Research Visualization",
                  caption: "Visual representation of neural network architectures",
                },
              },
    ],
    root: { props: { title: "Research Blog Post" } },
  };

  const [contentData, setContentData] = useState(() => {
    const saved = localStorage.getItem('blogContent');
    return saved ? JSON.parse(saved) : initialData;
  });

  const handlePublish = (data) => {
    setContentData(data);
    localStorage.setItem('blogContent', JSON.stringify(data));
    setShowEditor(false);
  };

  const blogPosts = [
            {
              id: 1,
              title: "Breakthrough in Quantum Machine Learning",
              excerpt: "Researchers demonstrate quantum advantage in machine learning tasks, opening new possibilities for computational efficiency.",
              author: "Dr. Sarah Chen",
              date: "2024-12-10",
              readTime: "6 min",
              category: "Quantum Computing",
              featured: true
            },
            {
              id: 2,
              title: "Large Language Models: Progress and Challenges",
              excerpt: "A comprehensive analysis of recent advances in large language models and the challenges that lie ahead.",
              author: "Dr. Marcus Johnson", 
              date: "2024-12-08",
              readTime: "12 min",
              category: "Natural Language Processing"
            },
            {
              id: 3,
              title: "Computer Vision in Healthcare: Real-World Applications",
              excerpt: "Exploring how computer vision technologies are transforming medical diagnosis and patient care.",
              author: "Dr. Emily Rodriguez",
              date: "2024-12-05",
              readTime: "9 min",
              category: "Computer Vision"
            }
          ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-16">
        {/* Blog Header */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-light text-gray-900 mb-4">
              Research Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Insights, discoveries, and perspectives from our research teams on the latest developments in technology and science.
            </p>

            <div className="flex justify-center">
              <button
                onClick={() => setShowEditor(!showEditor)}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <Icon name="Edit3" size={20} className="mr-2" />
                {showEditor ? 'Hide Visual Editor' : 'Open Visual Editor'}
              </button>
            </div>
          </div>
        </div>

        {/* Puck Visual Editor */}
        {showEditor && (
          <div className="border-b border-gray-200 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <Puck
                  config={blogConfig}
                  data={contentData}
                  onPublish={handlePublish}
                />
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid gap-12">
            {blogPosts?.map((post) => (
              <article
                key={post?.id}
                className={`group cursor-pointer ${post?.featured ? 'border-l-4 border-l-blue-600 pl-8' : ''}`}
                onClick={() => setSelectedPost(post)}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">

                  {/* Post Content */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {post?.category}
                      </span>
                      {post?.featured && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          <Icon name="Star" size={12} className="mr-1" />
                          Featured
                        </span>
                      )}
                    </div>

                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {post?.title}
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                      {post?.excerpt}
                    </p>

                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span className="flex items-center">
                        <Icon name="User" size={14} className="mr-1" />
                        {post?.author}
                      </span>
                      <span className="flex items-center">
                        <Icon name="Calendar" size={14} className="mr-1" />
                        {new Date(post?.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Icon name="Clock" size={14} className="mr-1" />
                        {post?.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Thumbnail */}
                  <div className="mt-6 lg:mt-0 lg:min-w-[300px]">
                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                      <Icon name="FileText" size={48} className="text-gray-400" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              Load More Posts
              <Icon name="ChevronDown" size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </main>

      <Footer />

      {/* Selected Post Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}
        >
          <article
            className="bg-white max-w-2xl w-full p-6 rounded-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <Icon name="X" size={16} />
            </button>
            <h2 className="text-2xl font-semibold mb-2">{selectedPost.title}</h2>
            <p className="text-sm text-gray-500 mb-4">
              {selectedPost.author} • {new Date(selectedPost.date).toLocaleDateString()} • {selectedPost.readTime}
            </p>
            <p className="text-gray-700">{selectedPost.excerpt}</p>
          </article>
        </div>
      )}
    </div>
  );
};

export default BlogPage;