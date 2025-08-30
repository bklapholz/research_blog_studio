import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Atom" size={24} className="text-blue-600" />
              <span className="text-xl font-normal text-gray-900">Research</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              Advancing human knowledge through breakthrough research in artificial intelligence, 
              quantum computing, and emerging technologies that shape our future.
            </p>
            <div className="flex space-x-4 mt-6">
              <button className="text-gray-400 hover:text-blue-600 transition-colors">
                <Icon name="Twitter" size={20} />
              </button>
              <button className="text-gray-400 hover:text-blue-600 transition-colors">
                <Icon name="Github" size={20} />
              </button>
              <button className="text-gray-400 hover:text-blue-600 transition-colors">
                <Icon name="Linkedin" size={20} />
              </button>
              <button className="text-gray-400 hover:text-blue-600 transition-colors">
                <Icon name="Youtube" size={20} />
              </button>
            </div>
          </div>

          {/* Research Areas */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Research Areas
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/research/ai" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link to="/research/quantum" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Quantum Computing
                </Link>
              </li>
              <li>
                <Link to="/research/ml" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link to="/research/robotics" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Robotics
                </Link>
              </li>
              <li>
                <Link to="/research/hci" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Human-Computer Interaction
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/publications" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link to="/datasets" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Datasets
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Open Source Tools
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Research Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              © 2024 Research Lab. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;