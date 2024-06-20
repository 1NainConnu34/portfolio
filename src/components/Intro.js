// src/components/Intro.js

import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Intro = ({ onAnimationEnd }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationEnd();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <IntroContainer>
      <Circle>
        <svg>
          <circle cx="100" cy="100" r="60" />
        </svg>
        <Letters>AB</Letters>
      </Circle>
    </IntroContainer>
  );
};

export default Intro;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const drawCircle = keyframes`
  0% { stroke-dashoffset: 440; }
  100% { stroke-dashoffset: 0; }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const IntroContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0a192f;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeOut} 1s ease-out 2s forwards;
`;

const Circle = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    circle {
      fill: none;
      stroke: #64ffda;
      stroke-width: 2;
      stroke-dasharray: 440;
      stroke-dashoffset: 440;
      animation: ${drawCircle} 2s ease-out forwards;
    }
  }
`;

const Letters = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #64ffda;
  animation: ${fadeIn} 1s ease-in-out forwards;
  z-index: 10;
  text-align: center;
`;
