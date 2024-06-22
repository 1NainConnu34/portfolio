// src/components/About.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faDatabase, faC, faMobile } from '@fortawesome/free-solid-svg-icons';
import profilePic from '../assets/moi.jpg';
import useIntersectionObserver from '../hooks/useIntersectionObserver'; // Importer le hook

const About = () => {
  const [elementRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [cursorPositions, setCursorPositions] = useState({ skill1: { x: 420, y: 420 }, skill2: { x: 420, y: 420 }, skill3: { x: 420, y: 420 }, skill4: { x: 420, y: 420 }, skill5: { x: 420, y: 420 } });

  const handleMouseMove = (e) => {
    const newCursorPositions = { ...cursorPositions };
    for (const skill in cursorPositions) {
      const rect = document.getElementById(skill).getBoundingClientRect();
      newCursorPositions[skill] = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
    setCursorPositions(newCursorPositions);
  };

  return (
    <AboutSection id="about" ref={elementRef} $isVisible={isVisible} onMouseMove={handleMouseMove}>
      <ContentContainer>
        <ImageContainer $isVisible={isVisible}>
          <ProfileImage src={profilePic} alt="Alexandre Bret" />
        </ImageContainer>
        <TextContainer>
          <Title $isVisible={isVisible}>À propos de moi</Title>
          <Description $isVisible={isVisible}>
            Bonjour ! Je m'appelle Alexandre Bret et je suis un étudiant et développeur passionné par la création de sites et d'applications innovantes. 
            Avec une expertise dans les technologies modernes et une passion pour le design propre, je m'efforce de créer des expériences utilisateur uniques et engageantes.
          </Description>
          <SkillsContainer $isVisible={isVisible}>
            <SkillComponent icon={faCode} title="Développement Frontend" skillId={'skill1'} cursorPosition={cursorPositions.skill1}/>
            <SkillComponent icon={faLaptopCode} title="Développement Backend" skillId={'skill2'} cursorPosition={cursorPositions.skill2}/>
            <SkillComponent icon={faDatabase} title="Base de Données" skillId={'skill3'} cursorPosition={cursorPositions.skill3}/>
            <SkillComponent icon={faC} title="Développement C/C++" skillId={'skill4'} cursorPosition={cursorPositions.skill4}/>
            <SkillComponent icon={faMobile} title="Développement Mobile" skillId={'skill5'} cursorPosition={cursorPositions.skill5}/>
          </SkillsContainer>
        </TextContainer>
      </ContentContainer>
    </AboutSection>
  );
};

const SkillComponent = ({ icon, title, skillId, cursorPosition }) => {
  return (
    <Skill
      $cursorPosition={cursorPosition}
      id={skillId}
    >
      <FontAwesomeIcon icon={icon} />
      <SkillTitle>{title}</SkillTitle>
    </Skill>
  );
};

export default About;

const AboutSection = styled.section`
  height: 100vh;
  display: flex;
  background-color: #0a192f;
  color: #ccd6f6;
  text-align: center;
  justify-content: center;
  align-items: center;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(20px)')};
  transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  border: 3px solid #64ffda;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateX(0)' : 'translateX(-100px)')};
  transition: opacity 2s ease-in-out, transform 2s ease-in-out;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextContainer = styled.div`
  max-width: 600px;
  text-align: left;
  padding: 0 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #64ffda;
  margin-bottom: 1rem;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(20px)')};
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  transition-delay: 0.33s;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: #ccd6f6;
  line-height: 1.6;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(20px)')};
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  transition-delay: 0.66s;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(20px)')};
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  transition-delay: 1s;
`;

const Skill = styled.div.attrs(props => ({
  style: {
    background: `radial-gradient(circle at ${props.$cursorPosition.x}px ${props.$cursorPosition.y}px, rgba(100, 255, 218, 0.6), rgba(100, 255, 218, 0) 60px)`,
  },
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ccd6f6;
  padding: 1rem;
  border-radius: 10px;
  border: 2px solid #112240;
  width: 100px;
  height: 100px;
  position: relative;
  &:hover {
    cursor: default;
  }
`;

const SkillTitle = styled.h3`
  font-size: 1rem;
  margin-top: 0.5rem;
  color: #64ffda;
`;
