import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projects = [
  {
    title: "Project 1",
    image: "path/to/image",
    deployedLink: "#",
    repoLink: "#",
  },
];

function Portfolio() {
  return (
    <Container>
      <h2 className="mt-5">Portfolio</h2>
      <Row xs={1} md={3} className="g-4">
        {projects.map((project, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Button variant="primary" href={project.deployedLink}>View Project</Button>
                <Button variant="secondary" href={project.repoLink} className="ms-2">GitHub
