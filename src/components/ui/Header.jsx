import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo - Google Research Style */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <Icon name="Atom" size={24} className="text-blue-600" />
              <span className="text-xl font-normal text-gray-900">Research</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About
            </Link>
            <Link 
              to="/research" 
              className={`text-sm font-medium transition-colors ${
                isActive('/research') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Research Areas
            </Link>
            <Link 
              to="/publications" 
              className={`text-sm font-medium transition-colors ${
                isActive('/publications') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Publications
            </Link>
            <Link 
              to="/blog" 
              className={`text-sm font-medium transition-colors ${
                isActive('/blog') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Blog
            </Link>
          </nav>

          {/* Search and Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Icon name="Search" size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                to="/"
                className={`block px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/about') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/research"
                className={`block px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/research') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Research Areas
              </Link>
              <Link
                to="/publications"
                className={`block px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/publications') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Publications
              </Link>
              <Link
                to="/blog"
                className={`block px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/blog') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;