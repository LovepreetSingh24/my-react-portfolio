import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Resume() {
  return (
    <Container>
      <h2 className="mt-5">Resume</h2>
      <p>You can download my resume from the link below.</p>
      <Button variant="primary" href="path/to/your_resume.pdf" target="_blank">Download Resume</Button>
      <h3 className="mt-4">Proficiencies</h3>
      <ul>
        <li>HTML & CSS</li>
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>Node.js</li>
      </ul>
    </Container>
  );
}

export default Resume;
