import React from 'react';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: 'Asset Management System',
      description: 'A comprehensive system for managing organizational assets with tracking and reporting features.',
      tech: 'Java, Spring Boot, PostgreSQL'
    },
    {
      title: 'Digital Library System',
      description: 'Online library management system with book cataloging and user management.',
      tech: 'React, Node.js, MongoDB'
    },
    {
      title: 'University Website',
      description: 'Modern university website with course management and student portal.',
      tech: 'HTML, CSS, JavaScript, PHP'
    }
  ];

  return (
    <section 
      id="projects" 
      className={`section ${darkMode ? 'dark' : ''}`} 
      style={{ 
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 30%, #1a1a1a 70%, #0f0f0f 100%)',
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
        background: 'radial-gradient(ellipse at top, rgba(116, 185, 255, 0.08) 0%, transparent 70%), radial-gradient(ellipse at bottom, rgba(52, 152, 219, 0.05) 0%, transparent 70%)',
        zIndex: 1
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2>Projects</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 40vw, 350px), 1fr))',
          gap: 'clamp(20px, 4vw, 40px)',
          marginTop: '50px',
          maxWidth: '1200px',
          margin: '50px auto 0'
        }}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              style={{
                padding: 'clamp(20px, 4vw, 35px)',
                background: darkMode ? '#2d2d2d' : 'white',
                borderRadius: '20px',
                boxShadow: darkMode 
                  ? '0 10px 30px rgba(0,0,0,0.3)'
                  : '0 10px 30px rgba(0,0,0,0.1)',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`,
                border: darkMode ? '1px solid #404040' : 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px)';
                e.currentTarget.style.boxShadow = darkMode 
                  ? '0 20px 40px rgba(0,0,0,0.4)'
                  : '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = darkMode 
                  ? '0 10px 30px rgba(0,0,0,0.3)'
                  : '0 10px 30px rgba(0,0,0,0.1)';
              }}
            >
              <h3 style={{ 
                color: darkMode ? '#ffffff' : '#2c3e50', 
                marginBottom: '20px',
                transition: 'color 0.3s ease',
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '600'
              }}>
                {project.title}
              </h3>
              <p style={{ 
                marginBottom: '20px',
                color: darkMode ? '#ccc' : '#555',
                transition: 'color 0.3s ease',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                lineHeight: '1.7'
              }}>
                {project.description}
              </p>
              <p style={{ 
                color: darkMode ? '#74b9ff' : '#3498db', 
                fontWeight: '600',
                fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                transition: 'color 0.3s ease',
                fontFamily: 'Inter, sans-serif'
              }}>
                {project.tech}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;