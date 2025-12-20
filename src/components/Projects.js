import React from 'react';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      tech: 'React, Node.js, MongoDB, Stripe API',
      icon: <i className="fas fa-shopping-cart"></i>
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      tech: 'Vue.js, Express.js, Socket.io, PostgreSQL',
      icon: <i className="fas fa-tasks"></i>
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization and scheduling features.',
      tech: 'React, Python, Django, Chart.js',
      icon: <i className="fas fa-chart-bar"></i>
    },
    {
      title: 'Weather Forecast App',
      description: 'Real-time weather application with location-based forecasts and interactive maps.',
      tech: 'JavaScript, OpenWeather API, Mapbox',
      icon: <i className="fas fa-cloud-sun"></i>
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with dark mode, animations, and modern design principles.',
      tech: 'React, CSS3, Framer Motion',
      icon: <i className="fas fa-briefcase"></i>
    },
    {
      title: 'Chat Application',
      description: 'Real-time messaging application with group chats, file sharing, and emoji support.',
      tech: 'React, Node.js, Socket.io, MongoDB',
      icon: <i className="fas fa-comments"></i>
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(300px, 40vw, 400px), 1fr))',
          gap: 'clamp(25px, 4vw, 40px)',
          marginTop: '50px',
          maxWidth: '1400px',
          margin: '50px auto 0'
        }}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              style={{
                padding: 'clamp(25px, 4vw, 35px)',
                background: 'rgba(45, 45, 45, 0.8)',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`,
                border: '1px solid rgba(116, 185, 255, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
                e.currentTarget.style.borderColor = 'rgba(116, 185, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
                e.currentTarget.style.borderColor = 'rgba(116, 185, 255, 0.2)';
              }}
            >
              <div style={{
                fontSize: '3rem',
                marginBottom: '15px',
                color: '#74b9ff'
              }}>{project.icon}</div>
              
              <h3 style={{ 
                color: '#ffffff', 
                marginBottom: '15px',
                transition: 'color 0.3s ease',
                fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '600'
              }}>
                {project.title}
              </h3>
              
              <p style={{ 
                marginBottom: '20px',
                color: '#ccc',
                transition: 'color 0.3s ease',
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                lineHeight: '1.6'
              }}>
                {project.description}
              </p>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '15px'
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;