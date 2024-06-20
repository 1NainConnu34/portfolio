// src/components/Home.js

import React, { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Typed from "typed.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { scrollToSection } from '../utils/scrollToSection';

const Home = () => {
  const handleScroll = () => {
    scrollToSection('about');
  };

  const textAnim = useRef(null);

  useEffect(() => {
    const typed = new Typed(textAnim.current, {
      strings: ["Alexandre Bret"],
      typeSpeed: 100,
      loop: false,
      showCursor: false,
      startDelay: 750,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <HomeSection id="home">
      <IntroText>
        <SmallText>Bonjour, je suis</SmallText>
        <LargeText ref={textAnim} />
        <SubText>Développeur Web et Software</SubText>
      </IntroText>
      <Arrows onClick={handleScroll}>
        <FontAwesomeIcon icon={faAngleDoubleDown} />
      </Arrows>
    </HomeSection>
  );
};

export default Home;

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const HomeSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0a192f;
  color: #ccd6f6;
`;

const IntroText = styled.div`
  text-align: center;
  margin-bottom: 10rem;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease-in-out 0.5s forwards;
`;

const SmallText = styled.p`
  font-size: 1.25rem;
  color: #64ffda;
  margin: 0;
`;

const LargeText = styled.h1`
  font-size: 5rem;
  margin: 0.5rem 0;
`;

const SubText = styled.p`
  font-size: 3rem;
  color: #8892b0;
  margin: 0;
`;

const Arrows = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  color: #64ffda;
  cursor: pointer;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease-in-out 0.5s forwards, ${bounce} 1.5s infinite;

  & > *:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  &:hover {
    color: #ccd6f6;
  }
`;
