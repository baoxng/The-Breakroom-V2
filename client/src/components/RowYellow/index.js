import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import './App.css';

const YellowRow = () => {
  return (
    <>
      <Container className="yellow-container" fluid={true}>
      <Row>
        <Col xs="3">
          <h1>Narrow Escape</h1>
          <p>Let's Play >></p>
        </Col>
        <Col xs="9">.col-3</Col>
      </Row>
      </Container>
    </>
  );
}

export default YellowRow;