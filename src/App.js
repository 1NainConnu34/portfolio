// src/App.js

import React, { useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Intro from './components/Intro';
import SocialMedia from './components/SocialMedia';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleAnimationEnd = () => {
    setShowIntro(false);
  };

  return (
    <>
      <GlobalStyles />
      {showIntro && <Intro onAnimationEnd={handleAnimationEnd} />}
      {!showIntro && (
        <>
          <Header />
          <main>
            <Home />
            <About />
            {/* <Experience />
            <Projects /> */}
          </main>
          {/* <Footer /> */}
          <SocialMedia />
        </>
      )}
    </>
  );
}

export default App;
