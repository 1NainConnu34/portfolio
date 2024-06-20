// src/components/SocialMedia.js

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faItchIo } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
  return (
    <>
      <SocialContainer>
        <IconLink href="https://github.com/1NainConnu34" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </IconLink>
        <IconLink href="https://linkedin.com/in/alexandre-bret-68440b260/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </IconLink>
        <IconLink href="https://1nainconnu34.itch.io/" target="_blank">
          <FontAwesomeIcon icon={faItchIo} />
        </IconLink>
        <Line />
      </SocialContainer>
      <EmailContainer>
        <EmailLink href="mailto:alexandrebret.84@gmail.com">
            alexandrebret.84@gmail.com
        </EmailLink>
        <Line />
      </EmailContainer>
    </>
  );
};

export default SocialMedia;

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const SocialContainer = styled.div`
  position: fixed;
  bottom: 0;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ccd6f6;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out 0.75s forwards;
`;

const IconLink = styled.a`
  color: #ccd6f6;
  margin: 0.5rem 0;
  font-size: 1.5rem;
  &:hover {
    color: #64ffda;
  }
`;

const Line = styled.div`
  width: 2px;
  height: 80px;
  background-color: #ccd6f6;
  margin: 1rem 0;
`;

const EmailContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ccd6f6;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out 1s forwards;
`;

const EmailLink = styled.a`
  color: #ccd6f6;
  margin: 0.5rem 0;
  font-size: 1rem;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  &:hover {
    color: #64ffda;
  }
`;
