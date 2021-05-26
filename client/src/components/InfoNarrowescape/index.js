import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import GameEscape from '../Game2';
import './App.css';

const InfoNarrowescape = () => {
  return (
    <>
      <Container className="dark-container" fluid={true}>
      <Row>
        <Col xs="12">
        <h3>Narrow Escape</h3>
        <p>Try to escape the deadly puzzles in this challenging and fun click game!</p>
        <hr></hr>
        </Col>
        <Col xs="3">
        <div className="gameDesc">
            <div className="gameDescBorder">
            <h5>How to Play:</h5>
            <p>Tap the screen to move the circle upwards. Avoid the deadly traps and move fast so the walls don't destroy you! Each trap avoided will score you a point, so try and beat your highscore!</p>
            <h5>Controls:</h5>
            <p>Mobile and PC: Tap the screen to move upwards.</p>
            </div>
        </div>
        </Col>
        <Col xs="9">
          <GameEscape />
        </Col>
        <Col xs="12">
        <hr></hr>
        <h5>Credit:</h5>
        <p>Taken from <a href="http://my-ga.me/narrowescape">this site</a> and created by <a href="https://play.idevgames.co.uk/profile/AMGaming">AMGaming</a>.</p>
        </Col>
      </Row>
      </Container>
    </>
  );
}

export default InfoNarrowescape;