import React from 'react';
import { Container, Col, Row, Jumbotron} from 'reactstrap';
import './App.css';

const YellowRow = () => {
  return (
    <>
      <Container className="yellow-container" fluid={true}>
      <Row>
        <Col xs="4">
          <h1>Narrow Escape</h1>
          <p>Let's Play >></p>
        </Col>
        <Col xs="8">image here</Col>
      </Row>
      </Container>
    </>
  );
}

export default YellowRow;