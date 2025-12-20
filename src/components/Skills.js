import React from 'react';

const Skills = ({ darkMode }) => {
  const skills = [
    'React', 'JavaScript', 'Java', 'Python',
    'Node.js', 'PostgreSQL', 'Git', 'HTML/CSS'
  ];

  return (
    <section 
      id="skills" 
      className={`section ${darkMode ? 'dark' : ''}`}
      style={{
        background: darkMode ? '#0f0f0f' : 'white',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container">
        <h2>Skills</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(120px, 20vw, 180px), 1fr))',
          gap: 'clamp(15px, 3vw, 25px)',
          marginTop: '50px',
          maxWidth: '900px',
          margin: '50px auto 0'
        }}>
          {skills.map((skill, index) => (
            <div 
              key={index} 
              style={{
                padding: 'clamp(15px, 3vw, 25px)',
                background: darkMode 
                  ? 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)'
                  : 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
                color: 'white',
                borderRadius: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                boxShadow: darkMode 
                  ? '0 8px 25px rgba(116, 185, 255, 0.2)'
                  : '0 8px 25px rgba(52, 152, 219, 0.2)',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                textAlign: 'center',
                fontFamily: 'Poppins, sans-serif'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px) scale(1.05)';
                e.target.style.boxShadow = darkMode 
                  ? '0 15px 35px rgba(116, 185, 255, 0.4)'
                  : '0 15px 35px rgba(52, 152, 219, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = darkMode 
             