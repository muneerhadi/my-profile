import React from 'react';

const Contact = ({ darkMode }) => {
  return (
    <section 
      id="contact" 
      className={`section ${darkMode ? 'dark' : ''}`} 
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 30%, #16213e 60%, #0f3460 100%)',
        color: 'white',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(60px, 10vw, 100px) 20px'
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(116, 185, 255, 0.1) 0%, transparent 50%)',
        zIndex: 1
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 style={{ 
          color: 'white', 
          borderColor: 'white',
          animation: 'fadeInUp 0.8s ease-out'
        }}>Contact Me</h2>
        <p style={{ 
          fontSize: 'clamp(1rem, 3vw, 1.3rem)', 
          marginBottom: '40px',
          animation: 'fadeInUp 0.8s ease-out 0.2s both',
          fontWeight: '300',
          opacity: '0.9'
        }}>
          Let's connect and discuss opportunities!
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'clamp(15px, 3vw, 25px)',
          flexWrap: 'wrap',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <a 
            href="mailto:muneer.hadi@example.com" 
            className="btn"
            style={{ 
              background: 'rgba(255,255,255,0.15)',
              animation: 'fadeInUp 0.8s ease-out 0.4s both',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.3)',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)'
            }}
          >
            📧 Email Me
          </a>
          <a 
            href="https://linkedin.com/in/muneer-hadi" 
            className="btn"
            style={{ 
              background: 'rgba(255,255,255,0.15)',
              animation: 'fadeInUp 0.8s ease-out 0.6s both',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.3)',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)'
            }}
          >
            💼 LinkedIn
          </a>
          <a 
            href="https://github.com/muneer-hadi" 
            className="btn"
            style={{ 
              background: 'rgba(255,255,255,0.15)',
              animation: 'fadeInUp 0.8s ease-out 0.8s both',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.3)',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)'
            }}
          >
            🚀 GitHub
          </a>
        </div>
      </div>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z"/%3E%3C/g%3E%3C/svg%3E")',
        animation: 'float 8s ease-in-out infinite reverse',
        zIndex: 1
      }} />
    </section>
  );
};

export default Contact;