import React, { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
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

  return (
    <div className="App dark">
      <Header darkMode={true} />
      <About darkMode={true} />
      <Skills darkMode={true} />
      <Projects darkMode={true} />
      <Contact darkMode={true} />
      <Footer darkMode={true} />
    </div>
  );
}

export default App;