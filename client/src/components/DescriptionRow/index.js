import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import './App.css';

const DescriptionCon = () => {
  return (
      <Container className="des-container" fluid={true}>
      <Row>
        <Col xs="12">
        <h3>Welcome to The Breakroom</h3>
        <p>This is </p>
        <hr></hr>
        </Col>
      </Row>  
      </Container>
  );
}

export default DescriptionCon;