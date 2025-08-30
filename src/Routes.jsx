import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';

// Pages
import Homepage from './pages/homepage';
import About from './pages/about';
import BlogPage from './pages/blog';
import NotFound from './pages/NotFound';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/research" element={<Homepage />} />
          <Route path="/publications" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;