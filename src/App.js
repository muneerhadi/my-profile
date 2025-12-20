import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
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