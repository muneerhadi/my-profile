import React from 'react';

const About = ({ darkMode }) => {
  return (
    <section 
      id="about" 
      className={`section ${darkMode ? 'dark' : ''}`} 
      style={{ 
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
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
        background: 'radial-gradient(circle at 20% 80%, rgba(116, 185, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(116, 185, 255, 0.05) 0%, transparent 50%)',
        zIndex: 1
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2>About Me</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          marginTop: '50px'
        }}>
          {/* Personal Info */}
          <div style={{
            background: 'rgba(45, 45, 45, 0.8)',
            padding: '30px',
            borderRadius: '20px',
            border: '1px solid rgba(116, 185, 255, 0.2)',
            animation: 'fadeInUp 0.8s ease-out 0.2s both'
          }}>
            <h3 style={{
              color: '#74b9ff',
              marginBottom: '20px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.5rem'
            }}>👨‍💻 Personal</h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#ccc'
            }}>
              I'm a passionate software developer with experience in building web applications 
              and systems. I enjoy creating efficient, scalable solutions and learning new technologies. 
              With a strong foundation in both frontend and backend development, I love turning 
              ideas into reality through clean, maintainable code.
            </p>
          </div>
          
          {/* Education */}
          <div style={{
            background: 'rgba(45, 45, 45, 0.8)',
            padding: '30px',
            borderRadius: '20px',
            border: '1px solid rgba(116, 185, 255, 0.2)',
            animation: 'fadeInUp 0.8s ease-out 0.4s both'
          }}>
            <h3 style={{
              color: '#74b9ff',
              marginBottom: '20px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.5rem'
            }}>🎓 Education</h3>
            <div style={{ marginBottom: '25px' }}>
              <h4 style={{
                color: '#fff',
                fontSize: '1.2rem',
                marginBottom: '8px'
              }}>Bachelor of Computer Science</h4>
              <p style={{
                color: '#74b9ff',
                fontSize: '1rem',
                marginBottom: '5px'
              }}>University of Technology</p>
              <p style={{
                color: '#aaa',
                fontSize: '0.9rem'
              }}>2020 - 2024</p>
            </div>
            <div>
              <h4 style={{
                color: '#fff',
                fontSize: '1.2rem',
                marginBottom: '8px'
              }}>High School Diploma</h4>
              <p style={{
                color: '#74b9ff',
                fontSize: '1rem',
                marginBottom: '5px'
              }}>Al-Mustaqbal High School</p>
              <p style={{
                color: '#aaa',
                fontSize: '0.9rem'
              }}>2016 - 2020</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;