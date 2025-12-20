import React from 'react';

const Skills = ({ darkMode }) => {
  const frontendSkills = ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Vue.js', 'Angular'];
  const backendSkills = ['Node.js', 'Python', 'Java', 'PHP', 'Express.js', 'Django'];
  const tools = ['Git', 'Docker', 'AWS', 'PostgreSQL', 'MongoDB', 'VS Code'];

  const SkillCategory = ({ title, skills, icon, delay }) => (
    <div style={{
      background: 'rgba(45, 45, 45, 0.8)',
      padding: '30px',
      borderRadius: '20px',
      border: '1px solid rgba(116, 185, 255, 0.2)',
      animation: `fadeInUp 0.8s ease-out ${delay}s both`
    }}>
      <h3 style={{
        color: '#74b9ff',
        marginBottom: '25px',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '1.5rem',
        textAlign: 'center'
      }}>{icon} {title}</h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: '15px'
      }}>
        {skills.map((skill, index) => (
          <div 
            key={index} 
            style={{
              padding: '15px',
              background: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
              color: 'white',
              borderRadius: '12px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 25px rgba(116, 185, 255, 0.2)',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              textAlign: 'center',
              fontFamily: 'Inter, sans-serif'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px) scale(1.05)';
              e.target.style.boxShadow = '0 15px 35px rgba(116, 185, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 8px 25px rgba(116, 185, 255, 0.2)';
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );

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
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px',
          marginTop: '50px'
        }}>
        <SkillCategory 
            title="Frontend" 
            skills={frontendSkills} 
            icon={<i className="fas fa-palette"></i>} 
            delay={0.2}
          />
          <SkillCategory 
            title="Backend" 
            skills={backendSkills} 
            icon={<i className="fas fa-server"></i>} 
            delay={0.4}
          />
          <SkillCategory 
            title="Tools" 
            skills={tools} 
            icon={<i className="fas fa-tools"></i>} 
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;