import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'; 
import './App.css';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Scroll progress bar
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      let progressBar = document.querySelector('.scroll-progress');
      if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);
      }
      progressBar.style.width = scrollPercent + '%';
      
      // Show scroll to top button after first section
      setShowScrollTop(scrollTop > window.innerHeight);
    };

    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const windowHeight = window.innerHeight;
      
      // Header parallax effect
      const header = document.querySelector('header');
      if (header) {
        const scrollProgress = scrolled * 0.5;
        
        header.style.transform = `translateY(${scrollProgress}px)`;
        header.style.opacity = Math.max(0, 1 - scrolled / (windowHeight * 0.8));
      }
      
      // About section fade-scale effect
      const aboutSection = document.querySelector('#about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const sectionProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));
        
        if (sectionProgress > 0) {
          const cards = aboutSection.querySelectorAll('div[style*="rgba(45, 45, 45"]');
          cards.forEach((card, index) => {
            const delay = index * 0.3;
            const cardProgress = Math.max(0, sectionProgress - delay);
            
            card.style.transform = `scale(${0.8 + cardProgress * 0.2})`;
            card.style.opacity = cardProgress;
            card.style.transition = 'all 0.8s ease-out';
          });
        }
      }
      
      // Other sections slide in from bottom
      const sections = document.querySelectorAll('.section:not(#about)');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < windowHeight * 0.8;
        
        if (isVisible) {
          section.style.transform = 'translateY(0)';
          section.style.opacity = '1';
        }
      });
    };

    const handleScroll = () => {
      updateScrollProgress();
      handleParallax();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App dark">
      <Header darkMode={true} />
      <About darkMode={true} />
      <Skills darkMode={true} />
      <Projects darkMode={true} />
      <Contact darkMode={true} />
      <Footer darkMode={true} />
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'rgba(116, 185, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            color: 'white',
            fontSize: '20px',
            cursor: 'pointer',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 25px rgba(116, 185, 255, 0.3)',
            animation: 'fadeInUp 0.5s ease-out'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.background = 'rgba(116, 185, 255, 1)';
            e.target.style.boxShadow = '0 12px 35px rgba(116, 185, 255, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.background = 'rgba(116, 185, 255, 0.9)';
            e.target.style.boxShadow = '0 8px 25px rgba(116, 185, 255, 0.3)';
          }}
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      )}
    </div>
  );
}

export default App;
