// src/components/Header.js

import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { scrollToSection } from '../utils/scrollToSection';

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setScrollDirection("down");
    } else {
      // Scrolling up
      setScrollDirection("up");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleClick = (event, id) => {
    event.preventDefault();
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <Nav $scrollDirection={scrollDirection}>
      <Logo href="#home" onClick={(e) => handleClick(e, 'home')}>
        <Circle>
          <svg>
            <circle cx="25" cy="25" r="24" />
          </svg>
          <Letters>AB</Letters>
        </Circle>
      </Logo>
      <BurgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span />
        <span />
        <span />
      </BurgerMenu>
      <Menu $isMenuOpen={isMenuOpen}>
        <MenuItem><a href="#home" onClick={(e) => handleClick(e, 'home')}>Accueil</a></MenuItem>
        <MenuItem><a href="#about" onClick={(e) => handleClick(e, 'about')}>À propos</a></MenuItem>
        <MenuItem><a href="#experience" onClick={(e) => handleClick(e, 'experience')}>Expérience</a></MenuItem>
        <MenuItem><a href="#projects" onClick={(e) => handleClick(e, 'projects')}>Projets</a></MenuItem>
      </Menu>
    </Nav>
  );
};

export default Header;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const Nav = styled.nav.attrs(props => ({
  style: {
    top: props.$scrollDirection === 'up' ? '0' : '-80px',
  },
}))`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #0a192f;
  box-shadow: 0px 10px 30px -15px rgba(2, 12, 27, 0.7);
  transition: top 0.3s ease-in-out;
  z-index: 1000;
`;

const Logo = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  color: #64ffda;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

const drawCircle = keyframes`
  0% { stroke-dashoffset: 440; }
  100% { stroke-dashoffset: 0; }
`;

const Circle = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
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
  font-size: 1.5rem;
  font-weight: bold;
  color: #64ffda;
  z-index: 10;
`;

const BurgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  position: fixed;
  right: 1.5rem;

  span {
    height: 3px;
    width: 25px;
    background: #64ffda;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  opacity: 0;
  padding-right: 4rem;
  animation: ${fadeIn} 1s ease-in-out 0.25s forwards;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 80px;
    right: ${({ $isMenuOpen }) => ($isMenuOpen ? '0' : '-100%')};
    background-color: #0a192f;
    width: 200px;
    padding: 0rem 2rem;
    box-shadow: 0px 10px 30px -15px rgba(2, 12, 27, 0.7);
    transition: right 0.3s ease-in-out;
    opacity: 1;
    margin-top: 0;
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  & a {
    color: #ccd6f6;
    text-decoration: none;
    &:hover {
      color: #64ffda;
    }
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;
