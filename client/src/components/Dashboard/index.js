import React from 'react';
import { Container, Col, Row, Media } from 'reactstrap';
import { Link } from "react-router-dom";
import './App.css';

const DashboardGames = () => {
  return (
    <>
      <Container className="dark-container" fluid={true}>
      <Row>
        <Col xs="12">
        <hr></hr>
        <h1>Space Dash</h1>
        <Link to="/spacedash">
              <Media className="img img-fluid" src="https://i.ibb.co/ph40G5F/space-dash.png" alt="Space Dash"/>
        </Link>
        <br></br>
        <h1>Fruit Machine</h1>
        <Link to="/fruitmachine">
              <Media className="img img-fluid" src="https://i.ibb.co/gVZHGtX/fruit-machine.png" alt="Fruit Machine"/>
        </Link>
        <br></br>
        <h1>Amoeba Online</h1>
        <Link to="/amoebaonline">
              <Media className="img img-fluid" src="https://i.ibb.co/Km7qc0R/amoeba-online.jpg" alt="Amoeba Online"/>
        </Link>
        <br></br>
        <h1>Narrow Escape</h1>
        <Link to="/narrowescape">
              <Media className="img img-fluid" src="https://i.ibb.co/cLFck5H/narrow-escape.png" alt="Narrow Escape"/>
        </Link>
        <br></br>
        <h1>Dvoika</h1>
        <Link to="/dvoika">
              <Media className="img img-fluid" src="https://i.ibb.co/3fzfTHR/tap-slime.png" alt="Dvoika"/>
        </Link>
        <br></br>
        </Col>
      </Row>
      </Container>
    </>
  );
}

export default DashboardGames;