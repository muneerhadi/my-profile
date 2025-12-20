import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
      color: 'white',
      padding: '60px 20px 30px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 0%, rgba(116, 185, 255, 0.1) 0%, transparent 50%)',
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Brand Section */}
          <div style={{
            animation: 'fadeInUp 0.8s ease-out'
          }}>
            <h3 style={{
              fontFamily: 'Birthstone, cursive',
              fontSize: '2.5rem',
              marginBottom: '15px',
              color: '#74b9ff'
            }}>Muneer Hadi</h3>
            <p style={{
              fontSize: '1rem',
              lineHeight: '1.6',
              opacity: '0.8',
              marginBottom: '20px'
            }}>
              Full Stack Developer passionate about creating innovative web solutions and turning ideas into reality.
            </p>
            <div style={{
              display: 'flex',
              gap: '15px'
            }}>
              <a href="https://linkedin.com/in/muneer-hadi" style={{
                color: '#74b9ff',
                fontSize: '1.5rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              ><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/muneer-hadi" style={{
                color: '#74b9ff',
                fontSize: '1.5rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              ><i className="fab fa-github"></i></a>
              <a href="mailto:muneer.hadi@gmail.com" style={{
                color: '#74b9ff',
                fontSize: '1.5rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              ><i className="fas fa-envelope"></i></a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div style={{
            animation: 'fadeInUp 0.8s ease-out 0.2s both'
          }}>
            <h4 style={{
              fontSize: '1.3rem',
              marginBottom: '20px',
              color: '#fff',
              fontFamily: 'Poppins, sans-serif'
            }}>Quick Links</h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {['About', 'Skills', 'Projects', 'Contact'].map((link, index) => (
                <li key={index} style={{ marginBottom: '10px' }}>
                  <a href={`#${link.toLowerCase()}`} style={{
                    color: '#ccc',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    fontSize: '1rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#74b9ff';
                    e.target.style.paddingLeft = '10px';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#ccc';
                    e.target.style.paddingLeft = '0';
                  }}
                  >{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div style={{
            animation: 'fadeInUp 0.8s ease-out 0.4s both'
          }}>
            <h4 style={{
              fontSize: '1.3rem',
              marginBottom: '20px',
              color: '#fff',
              fontFamily: 'Poppins, sans-serif'
            }}>Get In Touch</h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
              <p style={{
                margin: 0,
                color: '#ccc',
                fontSize: '1rem'
              }}><i className="fas fa-phone"></i> +964 770 123 4567</p>
              <p style={{
                margin: 0,
                color: '#ccc',
                fontSize: '1rem'
              }}><i className="fas fa-envelope"></i> muneer.hadi@gmail.com</p>
              <p style={{
                margin: 0,
                color: '#ccc',
                fontSize: '1rem'
              }}><i className="fas fa-map-marker-alt"></i> Baghdad, Iraq</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '30px',
          textAlign: 'center',
          animation: 'fadeInUp 0.8s ease-out 0.6s both'
        }}>
          <p style={{
            margin: 0,
            color: '#aaa',
            fontSize: '0.9rem'
          }}>
            © 2024 Muneer Hadi. All rights reserved. | Built with <i className="fas fa-heart" style={{color: '#e74c3c'}}></i> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;