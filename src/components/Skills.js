import React from 'react';

const Skills = ({ darkMode }) => {
  const frontendSkills = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' }
  ];
  
  const backendSkills = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' }
  ];
  
  const tools = [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Oracle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' }
  ];

  const SkillCategory = ({ title, skills, icon, delay }) => (
    <div style={{
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(20px)',
      padding: '35px',
      borderRadius: '25px',
      border: '1px solid rgba(116, 185, 255, 0.3)',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      animation: `fadeInUp 0.8s ease-out ${delay}s both`,
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
        animation: `shine 3s infinite ${delay * 2}s`
      }} />
      
      <h3 style={{
        color: '#74b9ff',
        marginBottom: '25px',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '1.6rem',
        textAlign: 'center',
        fontWeight: '600',
        textShadow: '0 0 10px rgba(116, 185, 255, 0.3)',
        position: 'relative',
        zIndex: 2
      }}>{icon} {title}</h3>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: '20px',
        position: 'relative',
        zIndex: 2
      }}>
        {skills.map((skill, index) => (
          <div 
            key={index} 
            style={{
              padding: '20px 15px',
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)',
              color: 'white',
              borderRadius: '15px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 25px rgba(116, 185, 255, 0.1)',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              textAlign: 'center',
              fontFamily: 'Inter, sans-serif',
              border: '1px solid rgba(116, 185, 255, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-8px) scale(1.05)';
              e.target.style.boxShadow = '0 15px 35px rgba(116, 185, 255, 0.3)';
              e.target.style.background = 'rgba(116, 185, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 8px 25px rgba(116, 185, 255, 0.1)';
              e.target.style.background = 'rgba(255, 255, 255, 0.08)';
            }}
          >
            <img 
              src={skill.icon} 
              alt={skill.name}
              style={{
                width: '32px',
                height: '32px',
                filter: 'brightness(1.2)'
              }}
            />
            {skill.name}
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
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
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
        background: 'conic-gradient(from 0deg at 50% 50%, rgba(116, 185, 255, 0.15) 0deg, transparent 60deg, rgba(135, 206, 235, 0.1) 120deg, transparent 180deg, rgba(116, 185, 255, 0.15) 240deg, transparent 300deg)',
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