import React from 'react';
import Icon from '../components/AppIcon';

export const puckConfig = {
  components: {
    ArticleHeader: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "textarea" },
        author: { type: "text" },
        date: { type: "text" },
        readTime: { type: "text" },
      },
      render: ({ title, subtitle, author, date, readTime }) => (
        <header className="max-w-4xl mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">{title}</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">{subtitle}</p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <span>{author}</span>
            <span>•</span>
            <span>{date}</span>
            <span>•</span>
            <span>{readTime} min read</span>
          </div>
        </header>
      ),
    },
    TextContent: {
      fields: { content: { type: "textarea" } },
      render: ({ content }) => (
        <div className="max-w-3xl mx-auto px-6 py-6">
          <p className="text-lg text-gray-700 leading-relaxed">{content}</p>
        </div>
      ),
    },
    ImageBlock: {
      fields: {
        src: { type: "text" },
        alt: { type: "text" },
        caption: { type: "text" },
      },
      render: ({ src, alt, caption }) => (
        <figure className="max-w-5xl mx-auto px-6 py-8">
          <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
            <Icon name="Image" size={64} className="text-gray-400" />
          </div>
          {caption && <figcaption className="text-sm text-gray-500 mt-4 text-center">{caption}</figcaption>}
        </figure>
      ),
    },
  },
};
