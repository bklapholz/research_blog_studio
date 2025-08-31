import React from 'react';
import BlogHeader from './components/BlogHeader';
import BlogList from './components/BlogList';
import blogPosts from '../../data/blog-posts.json';

const BlogPage = () => {
  return (
    <>
      <BlogHeader />
      <BlogList posts={blogPosts} />
    </>
  );
};

export default BlogPage;