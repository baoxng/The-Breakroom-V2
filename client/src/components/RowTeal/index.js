import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import './App.css';

const TealRow = () => {
  return (
    <>
      <Container className="teal-container" fluid={true}>
      <Row>
        <Col xs="9">
          image here
        </Col>
        <Col xs="3">
        <h1>Narrow Escape</h1>
          <p>Let's Play >></p>
        </Col>
      </Row>
      </Container>
    </>
  );
}

export default TealRow;