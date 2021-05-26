import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import './App.css';

const DescriptionCon = () => {
  return (
      <Container className="des-container" fluid={true}>
      <Row>
        <Col xs="12">
        <h3>Welcome to The Breakroom</h3>
        <p>The Breakroom is a mobile-friendly game app that not only encourages you to take a 15-minute break from work, but it holds you accountable to only taking 15 minutes off. Our timer automatically ends your session after 15 minutes so you can get back to work. Choose from our selection of games and have a great break!
        </p>
        </Col>
      </Row>  
      </Container>
  );
}

export default DescriptionCon;