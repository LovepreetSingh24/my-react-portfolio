import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container>
      <h2 className="mt-5">Contact</h2>
      <Form>
        <Form.Group className="mb-3" controlId="contactForm.Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactForm.Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactForm.Message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
