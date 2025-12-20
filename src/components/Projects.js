import React from 'react';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: 'BizLink.ae - Business Directory Platform',
      description: 'BizLink is a modern business directory platform built with pure HTML, CSS, and JavaScript, serving the UAE market with a clean, responsive design.',
      tech: 'HTML, CSS, JavaScript',
      icon: <i className="fas fa-building"></i>,
      link: 'https://bizlink.ae'
    },
    {
      title: 'Brag-Resturant-project',
      description: 'An elegant restaurant website built with pure HTML, CSS, and JavaScript featuring a modern design and seamless user experience.',
      tech: 'HTML, CSS, JavaScript',
      icon: <i className="fas fa-utensils"></i>,
      link: 'https://github.com/muneerhadi/Brag-Resturant-project'
    },
    {
      title: 'Inventory Management System',
      description: 'An Inventory Management System built with Laravel and Vue.js to manage products, track stock, and generate reports efficiently.',
      tech: 'Laravel, Vue.js, MySQL',
      icon: <i className="fas fa-boxes"></i>,
      link: 'https://github.com/muneerhadi/Asset-Inventory-Project-Management-System'
    }
  ];

  const ProjectCard = ({ project, index }) => {
    const cardContent = (
      <div 
        style={{
          padding: 'clamp(25px, 4vw, 35px)',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          borderRadius: '25px',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          textAlign: 'left',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`,
          border: '1px solid rgba(116, 185, 255, 0.3)',
          position: 'relative',
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-15px)';
          e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
          e.currentTarget.style.borderColor = 'rgba(116, 185, 255, 0.5)';
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.borderColor = 'rgba(116, 185, 255, 0.3)';
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
        }}
      >
        {/* Glass shine effect */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
          animation: `shine 4s infinite ${index * 0.5}s`
        }} />
        
        <div style={{
          fontSize: '3rem',
          marginBottom: '15px',
          color: '#74b9ff',
          position: 'relative',
          zIndex: 2
        }}>{project.icon}</div>
        
        <h3 style={{ 
          color: '#ffffff', 
          marginBottom: '15px',
          transition: 'color 0.3s ease',
          fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '600',
          position: 'relative',
          zIndex: 2
        }}>
          {project.title}
        </h3>
        
        <p style={{ 
          marginBottom: '20px',
          color: '#ccc',
          transition: 'color 0.3s ease',
          fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
          lineHeight: '1.6',
          position: 'relative',
          zIndex: 2
        }}>
          {project.description}
        </p>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '15px',
          position: 'relative',
          zIndex: 2,
          marginTop: 'auto'
        }}>
          {project.tech.split(', ').map((tech, techIndex) => (
            <span key={techIndex} style={{
              background: 'rgba(116, 185, 255, 0.2)',
              color: '#74b9ff',
              padding: '5px 12px',
              borderRadius: '15px',
              fontSize: '0.85rem',
              fontWeight: '500'
            }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    );

    if (project.link) {
      return (
        <a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            color: 'inherit',
            display: 'block'
          }}
        >
          {cardContent}
        </a>
      );
    }

    return cardContent;
  };

  return (
    <section 
      id="projects" 
      className={`section ${darkMode ? 'dark' : ''}`} 
      style={{ 
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 70%, #0c0c1e 100%)',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(ellipse at top, rgba(135, 206, 235, 0.12) 0%, transparent 70%), radial-gradient(ellipse at bottom, rgba(116, 185, 255, 0.08) 0%, transparent 70%)',
        zIndex: 1
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2>Projects</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(300px, 40vw, 400px), 1fr))',
          gap: 'clamp(25px, 4vw, 40px)',
          marginTop: '50px',
          maxWidth: '1400px',
          margin: '50px auto 0',
          gridAutoRows: '1fr'
        }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;