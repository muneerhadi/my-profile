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
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1e1e1e 50%, #0f0f0f 100%)',
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
        background: 'conic-gradient(from 0deg at 50% 50%, rgba(52, 152, 219, 0.1) 0deg, transparent 60deg, rgba(52, 152, 219, 0.05) 120deg, transparent 180deg, rgba(52, 152, 219, 0.1) 240deg, transparent 300deg)',
        zIndex: 1
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
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
                  ? '0 8px 25px rgba(116, 185, 255, 0.2)'
                  : '0 8px 25px rgba(52, 152, 219, 0.2)';
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;