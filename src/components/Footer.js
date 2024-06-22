// src/components/Footer.js

import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLink href='https://github.com/1NainConnu34/portfolio' target='_blank' rel="noopener noreferrer">Réalisé par Alexandre Bret</FooterLink>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  z-index: 100;
  background-color: #0a192f;
  color: #ccd6f6;
  display: flex;
  padding: 0.4rem 0rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 0;
  width: 100%;
  box-shadow: 0px -10px 30px -15px rgba(2, 12, 27, 0.7);
  height: 50px;
`;

const FooterLink = styled.a`
  color: #ccd6fd;
  text-decoration: none;
  display: flex;
  &:hover {
    color: #64ffda;
  }
`;
