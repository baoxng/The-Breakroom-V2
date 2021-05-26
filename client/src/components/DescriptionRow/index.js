import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import './App.css';

const DescriptionCon = () => {
  return (
      <Container className="des-container" fluid={true}>
      <Row>
        <Col xs="12">
        <h3>Welcome to The Breakroom</h3>
        <p>The Breakroom is a mobile game app that not only encourages you to take a 15-minute break from work, but it holds you accountible to ONLY take 15 minutes off. Choose from our selection of games and have a great break!
        </p>
        <hr></hr>
        </Col>
      </Row>  
      </Container>
  );
}

export default DescriptionCon;