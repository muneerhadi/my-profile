import React from 'react';

const About = ({ darkMode }) => {
  return (
    <section 
      id="about" 
      className={`section ${darkMode ? 'dark' : ''}`} 
      style={{ 
        background: 'linear-gradient(135deg, #0c0c1e 0%, #1a1a2e 30%, #16213e 60%, #0f3460 100%)',
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
        background: 'radial-gradient(circle at 20% 80%, rgba(116, 185, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(135, 206, 235, 0.1) 0%, transparent 50%)',
        zIndex: 1
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2>About Me</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginTop: '30px'
        }}>
          {/* Personal Info */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            padding: '35px',
            borderRadius: '25px',
            border: '1px solid rgba(116, 185, 255, 0.3)',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            animation: 'fadeInUp 0.8s ease-out 0.2s both',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Glass shine effect */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
              animation: 'shine 3s infinite'
            }} />
            
            <h3 style={{
              color: '#74b9ff',
              marginBottom: '25px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.6rem',
              fontWeight: '600',
              textShadow: '0 0 10px rgba(116, 185, 255, 0.3)'
            }}><i className="fas fa-user"></i> Personal</h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#e0e0e0',
              position: 'relative',
              zIndex: 2
            }}>
              I'm a university student passionate about software development, working to improve my skills in both frontend and backend development. I enjoy building real projects from desktop applications to full web systems.
              <br /><br />
              I work with Python (Django, Flask), PHP (Laravel), and create interactive UIs using React and Vue.js. I also have experience with MySQL and Oracle databases.
            </p>
          </div>
          
          {/* Education */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            padding: '35px',
            borderRadius: '25px',
            border: '1px solid rgba(116, 185, 255, 0.3)',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            animation: 'fadeInUp 0.8s ease-out 0.4s both',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Glass shine effect */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
              animation: 'shine 3s infinite 1.5s'
            }} />
            
            <h3 style={{
              color: '#74b9ff',
              marginBottom: '25px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.6rem',
              fontWeight: '600',
              textShadow: '0 0 10px rgba(116, 185, 255, 0.3)'
            }}><i className="fas fa-graduation-cap"></i> Education</h3>
            <div style={{ marginBottom: '25px' }}>
              <h4 style={{
                color: '#fff',
                fontSize: '1.2rem',
                marginBottom: '8px'
              }}>Bachelor of Information Systems</h4>
              <p style={{
                color: '#74b9ff',
                fontSize: '1rem',
                marginBottom: '5px'
              }}>Kabul University</p>
              <p style={{
                color: '#aaa',
                fontSize: '0.9rem'
              }}>Third Year Student (Current)</p>
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
              }}>Fazel Beek High School</p>
              <p style={{
                color: '#aaa',
                fontSize: '0.9rem'
              }}>Graduated 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;