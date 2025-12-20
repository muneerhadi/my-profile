import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App dark">
      <Header darkMode={true} />
      <About darkMode={true} />
      <Skills darkMode={true} />
      <Projects darkMode={true} />
      <Contact darkMode={true} />
    </div>
  );
}

export default App;