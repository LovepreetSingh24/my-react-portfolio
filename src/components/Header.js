import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="bg-light py-3">
      <Container>
        <h1>My Portfolio</h1>
        <Navigation />
      </Container>
    </header>
  );
}

export default Header;
