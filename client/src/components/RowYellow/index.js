import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import './App.css';

const YellowRow = () => {
  return (
    <>
      <Container className="yellow-container" fluid={true}>
      <Row>
        <Col xs="4">
          <h1>Space Dash</h1>
          <p>Let's Play >></p>
        </Col>
        <Col xs="8">
          <Link to="/spacedash">
            <Media src="https://i.ibb.co/ph40G5F/space-dash.png" alt="Space Dash"/>
          </Link>
        </Col>
      </Row>
      </Container>
    </>
  );
}

export default YellowRow;