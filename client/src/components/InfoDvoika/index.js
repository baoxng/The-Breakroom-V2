import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import GameDvoika from '../GameDvoika';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";

const InfoDvoika = () => {
  const {isAuthenticated} = useAuth0();
  return (
    <>
      <Container className="dark-container" fluid={true}>
      <Row>
        <Col xs="12">
        <h3>Dvoika</h3>
        <p>Move two orbs attached by a ring in order to avoid falling objects!</p>
        <hr></hr>
        </Col>
        <Col xs="3">
        <div className="gameDesc">
            <div className="gameDescBorder">
            <h5>How to Play:</h5>
            <p>Blocks will fall downwards in different sizes and shapes. Rotate the two colored orbs in order to avoid either of them being hit by one of the blocks. Each block avoided is one point. Try and get a high score!</p>
            <h5>Controls:</h5>
            <p>Mobile: Tap on the side of the screen that you want the orbs to rotate towards.</p>
            <p>PC: Click on the side of the screen that you want the orbs to rotate towards.</p>
            </div>
        </div>
        </Col>
        <Col xs="9">
          <GameDvoika />
        </Col>
        <Col xs="12">
        <hr></hr>
        <h5>Credit:</h5>
        <p>Taken from <a href="https://play.idevgames.co.uk/game/dvoika">this site</a> and created by <a href="https://play.idevgames.co.uk/profile/vankizzle">vankizzle</a>.</p>
        </Col>
      </Row>
      {isAuthenticated && (
        <Chat/>
              )}
      </Container>
    </>
  );
}

export default InfoDvoika;