import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 30%, #16213e 60%, #0f3460 100%)',
      color: 'white',
      padding: '80px 20px 40px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 30%, rgba(116, 185, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.08) 0%, transparent 50%)',
        zIndex: 1
      }} />
      
      {/* Floating particles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/svg%3E")',
        animation: 'float 12s ease-in-out infinite',
        zIndex: 1
      }} />
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '50px',
          marginBottom: '50px'
        }}>
          {/* Brand Section */}
          <div style={{
            animation: 'fadeInUp 0.8s ease-out',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            padding: '40px 30px',
            borderRadius: '25px',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)'
          }}>
            <h3 style={{
              fontFamily: 'Birthstone, cursive',
              fontSize: '3rem',
              marginBottom: '15px',
              color: '#74b9ff',
              textShadow: '0 0 20px rgba(116, 185, 255, 0.3)'
            }}>Muneer Hadi</h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.7',
              opacity: '0.9',
              marginBottom: '25px',
              fontWeight: '300'
            }}>
              Full Stack Developer passionate about creating innovative web solutions and turning ideas into reality.
            </p>
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center'
            }}>
              <a href="https://www.linkedin.com/in/muneer-hadi-4a349a1ba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkiBUHuAOR9e9CFDZ8q3lKw%3D%3D" style={{
                color: '#74b9ff',
                fontSize: '2rem',
                transition: 'all 0.3s ease',
                background: 'rgba(116, 185, 255, 0.1)',
                padding: '15px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px) scale(1.1)';
                e.target.style.background = 'rgba(116, 185, 255, 0.2)';
                e.target.style.boxShadow = '0 10px 25px rgba(116, 185, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.background = 'rgba(116, 185, 255, 0.1)';
                e.target.style.boxShadow = 'none';
              }}
              ><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/muneerhadi" style={{
                color: '#74b9ff',
                fontSize: '2rem',
                transition: 'all 0.3s ease',
                background: 'rgba(116, 185, 255, 0.1)',
                padding: '15px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px) scale(1.1)';
                e.target.style.background = 'rgba(116, 185, 255, 0.2)';
                e.target.style.boxShadow = '0 10px 25px rgba(116, 185, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.background = 'rgba(116, 185, 255, 0.1)';
                e.target.style.boxShadow = 'none';
              }}
              ><i className="fab fa-github"></i></a>
              <a href="mailto:hadimuneer200@gmail.com" style={{
                color: '#74b9ff',
                fontSize: '2rem',
                transition: 'all 0.3s ease',
                background: 'rgba(116, 185, 255, 0.1)',
                padding: '15px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px) scale(1.1)';
                e.target.style.background = 'rgba(116, 185, 255, 0.2)';
                e.target.style.boxShadow = '0 10px 25px rgba(116, 185, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.background = 'rgba(116, 185, 255, 0.1)';
                e.target.style.boxShadow = 'none';
              }}
              ><i className="fas fa-envelope"></i></a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div style={{
            animation: 'fadeInUp 0.8s ease-out 0.2s both',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            padding: '40px 30px',
            borderRadius: '25px',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)'
          }}>
            <h4 style={{
              fontSize: '1.5rem',
              marginBottom: '25px',
              color: '#fff',
              fontFamily: 'Poppins, sans-serif',
              textAlign: 'center'
            }}>Quick Links</h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '15px'
            }}>
              {['About', 'Skills', 'Projects', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase()}`} style={{
                    color: '#ccc',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    fontSize: '1.1rem',
                    padding: '10px 20px',
                    borderRadius: '15px',
                    display: 'block',
                    textAlign: 'center',
                    background: 'rgba(255,255,255,0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#74b9ff';
                    e.target.style.background = 'rgba(116, 185, 255, 0.1)';
                    e.target.style.transform = 'translateX(10px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#ccc';
                    e.target.style.background = 'rgba(255,255,255,0.05)';
                    e.target.style.transform = 'translateX(0)';
                  }}
                  >{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div style={{
            animation: 'fadeInUp 0.8s ease-out 0.4s both',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            padding: '40px 30px',
            borderRadius: '25px',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)'
          }}>
            <h4 style={{
              fontSize: '1.5rem',
              marginBottom: '25px',
              color: '#fff',
              fontFamily: 'Poppins, sans-serif',
              textAlign: 'center'
            }}>Get In Touch</h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                padding: '15px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '15px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(116, 185, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <i className="fas fa-phone" style={{color: '#74b9ff', fontSize: '1.2rem'}}></i>
                <span style={{color: '#ccc', fontSize: '1rem'}}>+93 781 494 063</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                padding: '15px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '15px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(116, 185, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <i className="fas fa-envelope" style={{color: '#74b9ff', fontSize: '1.2rem'}}></i>
                <span style={{color: '#ccc', fontSize: '1rem'}}>hadimuneer200@gmail.com</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                padding: '15px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '15px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(116, 185, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <i className="fas fa-map-marker-alt" style={{color: '#74b9ff', fontSize: '1.2rem'}}></i>
                <span style={{color: '#ccc', fontSize: '1rem'}}>Kabul, Afghanistan</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '40px',
          textAlign: 'center',
          animation: 'fadeInUp 0.8s ease-out 0.6s both',
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '30px',
          marginTop: '30px'
        }}>
          <p style={{
            margin: 0,
            color: '#aaa',
            fontSize: '1rem',
            fontWeight: '300'
          }}>
            © 2025 Muneer Hadi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;