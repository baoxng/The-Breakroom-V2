import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import GameSpacedash from '../GameSpacedash';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";

const InfoSpacedash = () => {
  const {isAuthenticated} = useAuth0();
  return (
    <>
      <Container className="dark-container" fluid={true}>
      <Row>
        <Col xs="12">
        <h3>Space Dash</h3>
        <p>Play as a rocket surrounded by enemies in outer space! Choose your difficulty and avoid all objects! Survive two minutes without losing all your lives to win this exhillerating and unique space game!</p>
        <hr></hr>
        </Col>
        <Col xs="3">
        <div className="gameDesc">
            <div className="gameDescBorder">
                <h5>How to Play:</h5>
                <p>Depending on your difficulty, you will be granted a set amount of lives. Running into objects will take away one of your lives. Survive for two minutes without losing all of your lives in order to win.</p>
                <h5>Controls:</h5>
                <p>Mobile: Tap the screen where you want your rocket to go. Drag the rocket to avoid any dangers.</p>
                <p>PC: The rocket will follow the cursor automatically.</p>
            </div>
        </div>
        </Col>
        <Col xs="9">
          <GameSpacedash />
        </Col>
        <Col xs="12">
        <hr></hr>
        <h5>Credit:</h5>
        <p>Taken from <a href="https://play.idevgames.co.uk/game/space-dash">this site</a> and created by <a href="https://play.idevgames.co.uk/profile/Kalyani%20Menon">Kalyani Menon</a>.</p>
        </Col>
      </Row>
      {isAuthenticated && (
        <Chat/>
              )}
      </Container>
    </>
  );
}

export default InfoSpacedash;