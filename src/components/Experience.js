// src/components/Experience.js

import React from 'react';
import styled, { keyframes } from 'styled-components';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const experiences = [
  {
    date: 'Septembre 2024 - Février 2025 (3 mois min, 6 mois max)',
    title: 'Recherche d\'un stage à temps partiel',
    company: '???',
    description: 'Dans le cadre de mes études, je suis à la recherce d\'un stage à temps partiel pour une durée de 3 à 6 mois.',
  },
  {
    date: 'Octobre 2023 - Novembre 2023',
    title: 'Stagiaire Développeur d\'application',
    company: 'Ateliers Jaco',
    description: 'Développement d\'un bot Discord qui envoie une alerte à chaque achat et liaison de ce bot avec un chat bot sur le site web.',
  },
  {
    date: 'Juillet 2023 - Septembre 2023',
    title: 'Stagiaire Développeur web',
    company: 'BIG ARTISAN',
    description: 'Développement de plusieurs sites web à l\'aide de WordPress. Hébergement de plusieurs sites web à l\'aide d\'OVH.',
  },
];

const Experience = () => {
  const [elementRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <ExperienceSection id="experience" ref={elementRef} $isVisible={isVisible}>
      <Title $isVisible={isVisible}>Expériences</Title>
      <TimelineContainer>
        <Line />
        {experiences.map((exp, index) => (
          <TimelineItem key={index} $isVisible={isVisible}>
            <Point />
            <Content>
              <Date>{exp.date}</Date>
              <Title $isVisible={isVisible}>{exp.title}</Title>
              <Company>{exp.company}</Company>
              <Description>{exp.description}</Description>
            </Content>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </ExperienceSection>
  );
};

export default Experience;

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const slideInLine = keyframes`
  0% { height: 0; }
  100% { height: 100%; }
`;

const ExperienceSection = styled.section`
  background-color: #0a192f;
  color: #ccd6f6;
  padding: 4rem 1rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #64ffda;
  margin-bottom: 1rem;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(20px)')};
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
`;

const Company = styled.h3`
  font-size: 1.5rem;
  color: #64ffda;
  margin-bottom: 1.5rem;
`;

const TimelineContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  margin: 0 auto;
  max-width: 600px;
`;

const Line = styled.div`
  position: absolute;
  left: 10px;
  top: 0;
  width: 2px;
  height: 100%;
  background-color: #64ffda;
  animation: ${slideInLine} 2s ease-in-out;
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(20px)')};
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  padding-left: 30px; /* espace pour le point */
`;

const Point = styled.div`
  width: 15px;
  height: 15px;
  background-color: #64ffda;
  border-radius: 50%;
  position: absolute;
  left: 3px;
`;

const Content = styled.div`
  text-align: left;
  padding-left: 1rem;
`;

const Date = styled.div`
  color: #8892b0;
  font-size: 1.2rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #ccd6f6;
  margin-top: 0.5rem;
  animation: ${fadeIn} 1s ease-in-out;
`;
