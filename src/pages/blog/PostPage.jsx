import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Puck, Render } from '@measured/puck';
import { puckConfig } from '../../config/puck.config.js';
import blogPosts from '../../data/blog-posts.json';
import initialData from '../../data/puck-initial-data.json';
import Icon from '../../components/AppIcon';

const PostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  const [showEditor, setShowEditor] = useState(false);

  const localStorageKey = `puck-content-${slug}`;

  const [contentData, setContentData] = useState(() => {
    const saved = localStorage.getItem(localStorageKey);
    // For a real app, you'd fetch this data from a CMS based on the slug
    // and potentially fall back to initialData if it's a new post.
    return saved ? JSON.parse(saved) : initialData;
  });

  const handlePublish = (data) => {
    setContentData(data);
    localStorage.setItem(localStorageKey, JSON.stringify(data));
    setShowEditor(false);
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-light text-gray-900 mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {post.excerpt}
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

        {showEditor ? (
          <div className="border-b border-gray-200 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <Puck
                  config={puckConfig}
                  data={contentData}
                  onPublish={handlePublish}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto px-6 py-12">
            <Render config={puckConfig} data={contentData} />
          </div>
        )}
    </div>
  );
};

export default PostPage;
