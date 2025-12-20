import React from 'react';

const Contact = ({ darkMode }) => {
  const contactInfo = [
    {
      icon: <i className="fas fa-phone"></i>,
      label: 'Phone',
      value: '+93 781 494 063',
      link: 'tel:+93781494063'
    },
    {
      icon: <i className="fas fa-envelope"></i>,
      label: 'Email',
      value: 'hadimuneer200@gmail.com',
      link: 'mailto:hadimuneer200@gmail.com'
    },
    {
      icon: <i className="fab fa-linkedin"></i>,
      label: 'LinkedIn',
      value: 'linkedin.com/in/muneer-hadi',
      link: 'https://www.linkedin.com/in/muneer-hadi-4a349a1ba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkiBUHuAOR9e9CFDZ8q3lKw%3D%3D'
    },
    {
      icon: <i className="fab fa-github"></i>,
      label: 'GitHub',
      value: 'github.com/muneerhadi',
      link: 'https://github.com/muneerhadi'
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'clamp(15px, 3vw, 20px)',
          marginBottom: '50px'
        }}>
          {contactInfo.map((contact, index) => (
            <a 
              key={index}
              href={contact.link}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                padding: 'clamp(20px, 4vw, 25px) clamp(15px, 3vw, 20px)',
                borderRadius: '25px',
                textDecoration: 'none',
                color: 'white',
                transition: 'all 0.3s ease',
                animation: `fadeInUp 0.8s ease-out ${0.4 + index * 0.1}s both`,
                border: '1px solid rgba(255,255,255,0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(10px, 2vw, 15px)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                height: 'auto',
                minHeight: 'clamp(70px, 12vw, 80px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(116, 185, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
              }}
            >
              {/* Glass shine effect */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                animation: `shine 4s infinite ${index * 0.5}s`
              }} />
              <div style={{
                fontSize: 'clamp(1.5rem, 4vw, 1.8rem)',
                minWidth: 'clamp(35px, 6vw, 40px)',
                color: '#74b9ff',
                position: 'relative',
                zIndex: 2
              }}>
                {contact.icon}
              </div>
              <div style={{ position: 'relative', zIndex: 2, flex: 1, minWidth: 0 }}>
                <h4 style={{
                  margin: '0 0 3px 0',
                  fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  {contact.label}
                </h4>
                <p style={{
                  margin: 0,
                  opacity: '0.8',
                  fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                  lineHeight: '1.3'
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