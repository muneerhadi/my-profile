import React from 'react';

const Header = ({ darkMode }) => {
  return (
    <header style={{
      background: darkMode 
        ? 'linear-gradient(135deg, #0f0f0f 0%, #2d3436 100%)'
        : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: 'clamp(60px, 10vw, 120px) 20px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="container" style={{
        animation: 'fadeInUp 1s ease-out'
      }}>
        <img 
          src="https://via.placeholder.com/200x200/3498db/ffffff?text=MH" 
          alt="Muneer Hadi"
          className="profile-image"
        />
        <h1 style={{
          animation: 'slideInLeft 1s ease-out',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          marginBottom: '10px'
        }}>Muneer Hadi</h1>
        <p style={{ 
          fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', 
          marginBottom: '40px',
          animation: 'slideInRight 1s ease-out 0.3s both',
          textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
          fontWeight: '300',
          opacity: '0.9'
        }}>
          Full Stack Developer & Software Engineer
        </p>
        <a href="#about" className="btn" style={{
          animation: 'fadeInUp 1s ease-out 0.6s both'
        }}>Learn More About Me</a>
      </div>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
  