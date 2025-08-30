import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Co-Founder & CEO",
      expertise: "Computational Biology, Science Communication",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Former Google Research scientist with 15+ years in academic publishing and digital content strategy.",
      social: {
        linkedin: "#",
        twitter: "#",
        scholar: "#"
      }
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Co-Founder & CTO",
      expertise: "Educational Technology, UX Design",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Former lead designer at academic tech startups, specializing in research workflow optimization.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 3,
      name: "Dr. Priya Patel",
      role: "Head of Research Partnerships",
      expertise: "Academic Relations, Content Strategy",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "PhD in Information Science with extensive experience in university-industry collaborations.",
      social: {
        linkedin: "#",
        twitter: "#",
        scholar: "#"
      }
    },
    {
      id: 4,
      name: "James Thompson",
      role: "Lead Product Designer",
      expertise: "Visual Design, Research UX",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Award-winning designer focused on making complex academic tools intuitive and accessible.",
      social: {
        linkedin: "#",
        twitter: "#",
        dribbble: "#"
      }
    }
  ];

  const advisors = [
    {
      name: "Prof. Elena Vasquez",
      role: "Academic Advisory Board",
      institution: "MIT Media Lab",
      expertise: "Digital Humanities"
    },
    {
      name: "Dr. Michael Chang",
      role: "Technical Advisor",
      institution: "Stanford AI Lab",
      expertise: "Machine Learning"
    },
    {
      name: "Dr. Rachel Green",
      role: "Publishing Advisor",
      institution: "Nature Publishing Group",
      expertise: "Academic Publishing"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full">
            <Icon name="Users" size={16} className="text-accent" />
            <span className="text-sm font-inter font-medium text-accent">Our Team</span>
          </div>
          
          <h2 className="text-fluid-3xl font-inter font-bold text-primary">
            Diverse Expertise, Shared Vision
          </h2>
          
          <p className="text-fluid-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our team combines deep academic research backgrounds with digital design experience 
            and educational technology innovation, united by a passion for democratizing research communication.
          </p>
        </div>
        
        {/* Core Team */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers?.map((member, index) => (
            <div 
              key={member?.id}
              className={`bg-card rounded-xl overflow-hidden shadow-academic hover:shadow-academic-md transition-all duration-300 research-reveal stagger-${index + 1}`}
            >
              <div className="relative">
                <Image
                  src={member?.image}
                  alt={`${member?.name}, ${member?.role}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-inter font-semibold text-lg text-primary">
                    {member?.name}
                  </h3>
                  <p className="text-accent font-inter font-medium text-sm">
                    {member?.role}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {member?.expertise}
                  </p>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member?.bio}
                </p>
                
                <div className="flex space-x-3 pt-2">
                  {Object.entries(member?.social)?.map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
                    >
                      <Icon 
                        name={platform === 'linkedin' ? 'Linkedin' : platform === 'twitter' ? 'Twitter' : platform === 'scholar' ? 'GraduationCap' : platform === 'github' ? 'Github' : 'Dribbble'} 
                        size={14} 
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Advisory Board */}
        <div className="bg-surface rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-fluid-2xl font-inter font-bold text-primary mb-4">
              Advisory Board
            </h3>
            <p className="text-muted-foreground">
              Guided by leading experts in academia, technology, and publishing
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {advisors?.map((advisor, index) => (
              <div 
                key={advisor?.name}
                className={`text-center space-y-3 research-reveal stagger-${index + 1}`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto flex items-center justify-center">
                  <Icon name="Award" size={24} className="text-white" />
                </div>
                
                <div>
                  <h4 className="font-inter font-semibold text-primary">
                    {advisor?.name}
                  </h4>
                  <p className="text-sm text-accent font-inter font-medium">
                    {advisor?.role}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {advisor?.institution} • {advisor?.expertise}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;