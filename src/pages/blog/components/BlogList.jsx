import React from 'react';
import BlogPostCard from './BlogPostCard';
import Icon from '../../../components/AppIcon';

const BlogList = ({ posts }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid gap-12">
        {posts?.map((post) => (
          <BlogPostCard
            key={post?.id}
            post={post}
          />
        ))}
      </div>
      <div className="text-center mt-16">
        <button className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
          Load More Posts
          <Icon name="ChevronDown" size={20} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default BlogList;
