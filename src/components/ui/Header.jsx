import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';


const Header = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/homepage', icon: 'Home' },
    { name: 'Creator Studio', href: '/creator-studio', icon: 'Edit3' },
    { name: 'Publications', href: '/publications', icon: 'BookOpen' },
    { name: 'Community', href: '/community', icon: 'Users' },
    { name: 'About', href: '/about', icon: 'Info' }
  ];

  const secondaryItems = [
    { name: 'Templates', href: '/templates', icon: 'Layout' },
    { name: 'Analytics', href: '/analytics', icon: 'BarChart3' },
    { name: 'Settings', href: '/settings', icon: 'Settings' },
    { name: 'Help', href: '/help', icon: 'HelpCircle' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-surface/95 backdrop-blur-md shadow-academic border-b border-border' 
          : 'bg-surface/80 backdrop-blur-sm'
      } ${className}`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="text-white"
              >
                <path 
                  d="M12 2L2 7L12 12L22 7L12 2Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M2 17L12 22L22 17" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M2 12L12 17L22 12" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-inter font-semibold text-lg text-primary leading-tight">
                Research Blog Studio
              </span>
              <span className="font-inter text-xs text-muted-foreground leading-tight">
                Academic Excellence
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.slice(0, 4)?.map((item) => (
              <a
                key={item?.name}
                href={item?.href}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-inter font-medium text-foreground hover:bg-muted hover:text-primary transition-all duration-200 group"
              >
                <Icon 
                  name={item?.icon} 
                  size={16} 
                  className="text-muted-foreground group-hover:text-primary transition-colors duration-200" 
                />
                <span>{item?.name}</span>
              </a>
            ))}
            
            {/* More Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-inter font-medium text-foreground hover:bg-muted hover:text-primary transition-all duration-200">
                <Icon name="MoreHorizontal" size={16} className="text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                <span>More</span>
                <Icon name="ChevronDown" size={14} className="text-muted-foreground group-hover:text-primary transition-colors duration-200" />
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-academic-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {[navigationItems?.[4], ...secondaryItems]?.map((item) => (
                    <a
                      key={item?.name}
                      href={item?.href}
                      className="flex items-center space-x-3 px-4 py-2 text-sm font-inter text-popover-foreground hover:bg-muted transition-colors duration-200"
                    >
                      <Icon name={item?.icon} size={16} className="text-muted-foreground" />
                      <span>{item?.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="default" size="sm" className="cta-hover">
              Start Creating
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-muted transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Icon 
              name={isMenuOpen ? "X" : "Menu"} 
              size={20} 
              className="text-foreground" 
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-surface border-b border-border shadow-academic-lg transition-all duration-300 ${
            isMenuOpen 
              ? 'opacity-100 visible transform translate-y-0' 
              : 'opacity-0 invisible transform -translate-y-4'
          }`}
        >
          <div className="px-6 py-4 space-y-2">
            {navigationItems?.map((item) => (
              <a
                key={item?.name}
                href={item?.href}
                onClick={closeMenu}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-inter font-medium text-foreground hover:bg-muted hover:text-primary transition-all duration-200"
              >
                <Icon name={item?.icon} size={18} className="text-muted-foreground" />
                <span>{item?.name}</span>
              </a>
            ))}
            
            <div className="border-t border-border pt-4 mt-4">
              <div className="text-xs font-inter font-medium text-muted-foreground px-4 py-2 uppercase tracking-wider">
                More Options
              </div>
              {secondaryItems?.map((item) => (
                <a
                  key={item?.name}
                  href={item?.href}
                  onClick={closeMenu}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-inter font-medium text-foreground hover:bg-muted hover:text-primary transition-all duration-200"
                >
                  <Icon name={item?.icon} size={18} className="text-muted-foreground" />
                  <span>{item?.name}</span>
                </a>
              ))}
            </div>
            
            <div className="border-t border-border pt-4 mt-4 space-y-3">
              <Button variant="ghost" fullWidth onClick={closeMenu}>
                Sign In
              </Button>
              <Button variant="default" fullWidth onClick={closeMenu} className="cta-hover">
                Start Creating
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;