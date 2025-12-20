import React from 'react';

const About = ({ darkMode }) => {
  return (
    <section 
      id="about" 
      className={`section ${darkMode ? 'dark' : ''}`} 
      style={{ 
        background: darkMode ? '#1a1a1a' : '#f8f9fa',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container">
        <h2>About Me</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '30px',
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'left'
        }}>
          <p style={{
            animation: 'fadeInUp 0.8s ease-out 0.2s both',
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            lineHeight: '1.8'
          }}>
            I'm a passionate software developer with experience in building web applications 
            and systems. I enjoy creating efficient, scalable solutions and learning new technologies.
          </p>
          <p 