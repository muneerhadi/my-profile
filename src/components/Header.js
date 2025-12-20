import React from 'react';

const Header = ({ darkMode }) => {
  return (
    <header style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 30%, #16213e 60%, #0f3460 100%)',
      color: 'white',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center'
    }}>
      {/* Top left name */}
      <a href="#home" style={{
        position: 'absolute',
        top: '20px',
        left: '40px',
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        fontFamily: 'Birthstone, cursive',
        fontWeight: '400',
        zIndex: 100,
        animation: 'fadeInUp 1s ease-out',
        textDecoration: 'none',
        color: 'white',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        letterSpacing: '2px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.1)';
        e.target.style.textShadow = '0 0 15px rgba(255,255,255,0.8), 2px 2px 4px rgba(0,0,0,0.3)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.textShadow = '2px 2px 4px rgba(0,0,0,0.3)';
      }}
      >Muneer Hadi</a>
      {/* Moon */}
      <div style={{
        position: 'absolute',
        top: '80px',
        right: '100px',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 30%, #fff, #e0e0e0)',
        boxShadow: '0 0 60px rgba(255,255,255,0.3), inset -10px -10px 20px rgba(0,0,0,0.1)',
        animation: 'float 8s ease-in-out infinite',
        zIndex: 2
      }}>
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '30px',
          width: '15px',
          height: '15px',
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.1)',
          boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.2)'
        }} />
        <div style={{
          position: 'absolute',
          top: '50px',
          left: '60px',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.08)',
          boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.2)'
        }} />
      </div>
      
      {/* Stars */}
      {[...Array(30)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 3 + 1}px`,
          height: `${Math.random() * 3 + 1}px`,
          background: '#fff',
          borderRadius: '50%',
          boxShadow: '0 0 4px rgba(255,255,255,0.8)',
          animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`,
          zIndex: 1
        }} />
      ))}
      
      {/* Sky Background with Stars */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(2px 2px at 20px 30px, #fff, transparent),
          radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
          radial-gradient(1px 1px at 90px 40px, #fff, transparent),
          radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.6), transparent),
          radial-gradient(2px 2px at 160px 30px, #fff, transparent)
        `,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 100px',
        animation: 'twinkle 4s infinite'
      }} />
      
      {/* Shooting Stars */}
      <div className="shooting-star" style={{
        position: 'absolute',
        width: '2px',
        height: '2px',
        background: '#fff',
        borderRadius: '50%',
        boxShadow: '0 0 6px 2px rgba(255,255,255,0.8)',
        animation: 'shootingStar 3s linear infinite'
      }} />
      <div className="shooting-star" style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        background: '#fff',
        borderRadius: '50%',
        boxShadow: '0 0 4px 1px rgba(255,255,255,0.6)',
        animation: 'shootingStar2 4s linear infinite 1.5s'
      }} />
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 40px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center'
      }}>
        {/* Left Side - Name and About */}
        <div style={{
          animation: 'slideInLeft 1s ease-out'
        }}>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: '700',
            marginBottom: '20px',
            background: 'linear-gradient(45deg, #fff, #87CEEB)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'fadeInUp 1s ease-out 0.3s both'
          }}>Muneer Hadi</h1>
          
          <p style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
            fontWeight: '400',
            marginBottom: '30px',
            opacity: '0.95',
            animation: 'fadeInUp 1s ease-out 0.6s both, typewriter 3s steps(40) 2s forwards',
            background: 'linear-gradient(45deg, #74b9ff, #0984e3, #00cec9)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: 'Poppins, sans-serif',
            letterSpacing: '1px',
            textShadow: '0 0 20px rgba(116, 185, 255, 0.3)',
            borderRight: '2px solid #74b9ff',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            width: '0'
          }}>I'm Full Stack Developer & Software Engineer</p>
          
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            lineHeight: '1.7',
            marginBottom: '40px',
            opacity: '0.8',
            animation: 'fadeInUp 1s ease-out 0.9s both'
          }}>
            Passionate about creating innovative web solutions and turning ideas into reality through clean, efficient code. I specialize in modern technologies and love building scalable applications.
          </p>
          
          <a href="#about" className="btn" style={{
            animation: 'fadeInUp 1s ease-out 1.2s both',
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(255,255,255,0.3)'
          }}>Explore My Work</a>
        </div>
        
        {/* Right Side - Photo */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          animation: 'slideInRight 1s ease-out 0.5s both'
        }}>
          <div style={{
            position: 'relative',
            animation: 'float 6s ease-in-out infinite'
          }}>
            <img 
              src="/images/hadi.jpg" 
              alt="Muneer Hadi"
              style={{
                width: 'clamp(250px, 25vw, 350px)',
                height: 'clamp(250px, 25vw, 350px)',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid rgba(255,255,255,0.3)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease'
              }}
            />
            <div style={{
              position: 'absolute',
              top: '-10px',
              left: '-10px',
              right: '-10px',
              bottom: '-10px',
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.1)',
              animation: 'pulse 3s infinite'
            }} />
          </div>
        </div>
      </div>
      
      {/* Scroll Down Button */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100
      }}>
        <a href="#about" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textDecoration: 'none',
          color: 'white',
          animation: 'bounce 2s infinite',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.color = '#74b9ff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.color = 'white';
        }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            border: '2px solid rgba(255,255,255,0.8)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '8px',
            backdropFilter: 'blur(10px)',
            background: 'rgba(255,255,255,0.1)'
          }}>
            <i className="fas fa-chevron-down" style={{ fontSize: '16px' }}></i>
          </div>
          <span style={{
            fontSize: '12px',
            fontWeight: '500',
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}>Scroll Down</span>
        </a>
      </div>
      
      <style jsx>{`
        @keyframes typewriter {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        
        @keyframes shootingStar {
          0% {
            transform: translateX(-100px) translateY(-100px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100vw) translateY(100vh);
            opacity: 0;
          }
        }
        
        @keyframes shootingStar2 {
          0% {
            transform: translateX(-50px) translateY(-50px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(120vw) translateY(80vh);
            opacity: 0;
          }
        }
        
        @media (max-width: 768px) {
          .container {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;