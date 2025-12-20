import React from 'react';

const Contact = ({ darkMode }) => {
  const contactInfo = [
    {
      icon: <i className="fas fa-phone"></i>,
      label: 'Phone',
      value: '+964 770 123 4567',
      link: 'tel:+9647701234567'
    },
    {
      icon: <i className="fas fa-envelope"></i>,
      label: 'Email',
      value: 'muneer.hadi@gmail.com',
      link: 'mailto:muneer.hadi@gmail.com'
    },
    {
      icon: <i className="fab fa-linkedin"></i>,
      label: 'LinkedIn',
      value: 'linkedin.com/in/muneer-hadi',
      link: 'https://linkedin.com/in/muneer-hadi'
    },
    {
      icon: <i className="fab fa-github"></i>,
      label: 'GitHub',
      value: 'github.com/muneer-hadi',
      link: 'https://github.com/muneer-hadi'
    }
  ];

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
          animation: 'fadeInUp 0.8s ease-out',
          marginBottom: '20px'
        }}>Contact Me</h2>
        
        <p style={{ 
          fontSize: 'clamp(1rem, 3vw, 1.3rem)', 
          marginBottom: '50px',
          animation: 'fadeInUp 0.8s ease-out 0.2s both',
          fontWeight: '300',
          opacity: '0.9'
        }}>
          Let's connect and discuss opportunities!
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          marginBottom: '50px'
        }}>
          {contactInfo.map((contact, index) => (
            <a 
              key={index}
              href={contact.link}
              style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '25px',
                borderRadius: '20px',
                textDecoration: 'none',
                color: 'white',
                transition: 'all 0.3s ease',
                animation: `fadeInUp 0.8s ease-out ${0.4 + index * 0.1}s both`,
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.background = 'rgba(255,255,255,0.2)';
                e.target.style.boxShadow = '0 10px 30px rgba(116, 185, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.background = 'rgba(255,255,255,0.1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <div style={{
                fontSize: '2rem',
                minWidth: '50px',
                color: '#74b9ff'
              }}>
                {contact.icon}
              </div>
              <div>
                <h4 style={{
                  margin: '0 0 5px 0',
                  fontSize: '1.2rem',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  {contact.label}
                </h4>
                <p style={{
                  margin: 0,
                  opacity: '0.8',
                  fontSize: '1rem'
                }}>
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
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