import React from 'react';
import { Container, Col, Row, Media } from 'reactstrap';
import { Link } from "react-router-dom";
import './App.css';

const TealRow = () => {
  return (
    <>
      <Container className="teal-container" fluid={true}>
      <Row>
        <Col xs="8">
          <Link to="/fruitmachine">
            <Media src="https://i.ibb.co/gVZHGtX/fruit-machine.png" alt="Fruit Machine"/>
          </Link>
        </Col>
        <Col xs="4">
        <h1>Fruit Machine</h1>
          <p>Let's Play >></p>
        </Col>
      </Row>
      </Container>
    </>
  );
}

export default TealRow;