import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const BlogPostCard = ({ post }) => {
  return (
    <Link to={`/blog/${post.slug}`}>
      <article
        className={`group cursor-pointer ${post?.featured ? 'border-l-4 border-l-blue-600 pl-8' : ''}`}
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
    </Link>
  );
};

export default BlogPostCard;
