// src/components/Projects.js

import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const projects = [
  {
    title: 'Portfolio Personnel',
    description: 'Création d\'un portfolio personnel en utilisant React et Styled-components pour mettre en avant mes compétences et projets.',
    technologies: ['React', 'Styled-components', 'JavaScript'],
    link: 'https://github.com/1NainConnu34/portfolio',
  },
  {
    title: 'Bot Discord',
    description: 'Développement d\'un bot Discord pour découvrir les commandes et interagir avec les utilisateurs. Une dizaine de commandes sont disponibles.',
    technologies: ['Node.js', 'Discord.js'],
    link: 'https://github.com/1NainConnu34/Discord-Bot',
  },
  {
    title: 'Phoenix Hunter',
    description: 'Création de mon premier jeu en C du même style que Duck Hunt.',
    technologies: ['C', 'CSFML'],
    link: 'https://github.com/1NainConnu34/Phoenix-Hunter',
  },
];

const Projects = () => {
  const [elementRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <ProjectsSection id="projects" ref={elementRef} $isVisible={isVisible}>
      <Title $isVisible={isVisible}>Projets</Title>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectCard key={index} $isVisible={isVisible}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <Technologies>
              {project.technologies.map((tech, i) => (
                <TechBadge key={i}>{tech}</TechBadge>
              ))}
            </Technologies>
            <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
              Voir le projet
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const ProjectsSection = styled.section`
  background-color: #0a192f;
  color: #ccd6f6;
  padding: 4rem 1rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #64ffda;
  margin-bottom: 2rem;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(20px)')};
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const ProjectCard = styled.div`
  background-color: #112240;
  border: 1px solid #64ffda;
  border-radius: 10px;
  padding: 2rem;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: calc(100% / 3 - 2rem);
  ${({ $isVisible }) =>
    $isVisible
      ? css`
          animation: ${fadeIn} 1s ease-in-out forwards;
        `
      : css`
          animation: none;
        `}

  @media (max-width: 1024px) {
    width: calc(100% - 12.5rem);
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: #64ffda;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  color: #ccd6f6;
  margin-bottom: 1.5rem;
`;

const Technologies = styled.div`
  margin-bottom: 1.5rem;
`;

const TechBadge = styled.span`
  background-color: #112240;
  color: #64ffda;
  border: 1px solid #64ffda;
  border-radius: 5px;
  padding: 0.3rem 0.6rem;
  font-size: 0.9rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
`;

const ProjectLink = styled.a`
  display: inline-block;
  background-color: #64ffda;
  color: #0a192f;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #52d4bb;
  }
`;
