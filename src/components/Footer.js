import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light py-3 mt-4">
      <Container className="text-center">
        <p>Connect with me on <a href="https://github.com/">GitHub</a>, <a href="https://linkedin.com">LinkedIn</a>, and <a href="https://twitter.com">Twitter</a>.</p>
      </Container>
    </footer>
  );
}

export default Footer;
