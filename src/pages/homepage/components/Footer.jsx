import React from 'react';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Creator Studio", href: "/creator-studio" },
        { name: "Publications", href: "/publications" },
        { name: "Templates", href: "/templates" },
        { name: "Analytics", href: "/analytics" }
      ]
    },
    {
      title: "Community",
      links: [
        { name: "Researchers", href: "/community" },
        { name: "Institutions", href: "/institutions" },
        { name: "Success Stories", href: "/success-stories" },
        { name: "Events", href: "/events" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "API Documentation", href: "/api-docs" },
        { name: "Best Practices", href: "/best-practices" },
        { name: "Webinars", href: "/webinars" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Contact", href: "/contact" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: "Twitter", href: "#" },
    { name: "LinkedIn", icon: "Linkedin", href: "#" },
    { name: "GitHub", icon: "Github", href: "#" },
    { name: "YouTube", icon: "Youtube", href: "#" }
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10">
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
                  <span className="font-inter font-semibold text-lg leading-tight">
                    Research Blog Studio
                  </span>
                  <span className="font-inter text-sm text-white/70 leading-tight">
                    Academic Excellence
                  </span>
                </div>
              </div>
              
              <p className="text-white/80 font-source-serif leading-relaxed max-w-md">
                Empowering researchers to transform complex academic work into engaging, 
                interactive publications that reach broader audiences while maintaining scholarly integrity.
              </p>

              {/* Newsletter Signup */}
              <div className="space-y-3">
                <h4 className="font-inter font-semibold text-white">Stay Updated</h4>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-accent hover:bg-accent/90 rounded-lg transition-colors">
                    <Icon name="Send" size={16} />
                  </button>
                </div>
                <p className="text-xs text-white/60 font-inter">
                  Get updates on new features and research insights
                </p>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections?.map((section) => (
              <div key={section?.title} className="space-y-4">
                <h4 className="font-inter font-semibold text-white">{section?.title}</h4>
                <ul className="space-y-2">
                  {section?.links?.map((link) => (
                    <li key={link?.name}>
                      <a
                        href={link?.href}
                        className="text-white/70 hover:text-white transition-colors font-inter text-sm"
                      >
                        {link?.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/60 font-inter text-sm">
              © {currentYear} Research Blog Studio. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.href}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors group"
                  aria-label={social?.name}
                >
                  <Icon 
                    name={social?.icon} 
                    size={16} 
                    className="text-white/70 group-hover:text-white transition-colors" 
                  />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-white/60 font-inter text-sm">
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-success" />
                <span className="text-white/70 font-inter text-xs">FERPA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Lock" size={16} className="text-success" />
                <span className="text-white/70 font-inter text-xs">SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-success" />
                <span className="text-white/70 font-inter text-xs">WCAG 2.1 AA</span>
              </div>
            </div>
            
            <div className="text-white/60 font-inter text-xs">
              Trusted by 500+ research institutions worldwide
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;