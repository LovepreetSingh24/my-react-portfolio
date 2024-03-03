import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Project from '../components/Project';

const projects = [
  { title: "Project 1", image: "path/to/image", deployedLink: "#", repoLink: "#" },
];

function Portfolio() {
  return (
    <Container>
      <h2 className="mt-5">Portfolio</h2>
      <Row xs={1} md={2} className="g-4">
        {projects.map((project, idx) => (
          <Col key={idx}>
            <Project {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;
