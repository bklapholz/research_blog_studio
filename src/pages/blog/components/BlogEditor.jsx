import React from 'react';
import { Puck } from '@measured/puck';

const BlogEditor = ({ config, data, onPublish }) => {
  return (
    <div className="border-b border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <Puck
            config={config}
            data={data}
            onPublish={onPublish}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;
