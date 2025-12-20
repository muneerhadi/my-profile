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
        background: darkMode ? '#1a1a1a' : '#f8f9fa',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container">
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
              <p style