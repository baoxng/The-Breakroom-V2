import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import GameFruitmachine from '../Game4';
import './App.css';

const InfoNarrowescape = () => {
  return (
    <>
      <Container className="dark-container" fluid={true}>
      <Row>
        <Col xs="12">
        <h3>Pixel Slots Fruit Machine</h3>
        <p>Wind down with this simple and easy-to-play slots game! Play to win more spins, completely free of charge!</p>
        <hr></hr>
        </Col>
        <Col xs="3">
        <div className="gameDesc">
            <div className="gameDescBorder">
            <h5>How to Play:</h5>
            <p>You start off with 100 spins. With each spin, you have the chance to win 'coins', which are worth more spins. Continue spinning and see how much you can win! You can also reset back to 100 spins if you need.</p>
            <h5>Controls:</h5>
            <p>Mobile and PC: Press 'spin' to spin the slots machine. Press 'reset' to reset back to 100 spins.</p>
            </div>
        </div>
        </Col>
        <Col xs="9">
          <GameFruitmachine />
        </Col>
        <Col xs="12">
        <hr></hr>
        <h5>Credit:</h5>
        <p>Taken from <a href="https://play.idevgames.co.uk/game/pixel-slots-fruit-machine">this site</a> and created by <a href="https://play.idevgames.co.uk/profile/iDev">iDev</a>.</p>
        </Col>
      </Row>
      </Container>
    </>
  );
}

export default InfoNarrowescape;