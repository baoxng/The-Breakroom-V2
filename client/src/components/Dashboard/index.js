import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import GameAmoeba from '../GameAmoeba';
import './App.css';

const DashboardGames = () => {
  return (
    <>
      <Container className="dark-container" fluid={true}>
      <Row>
        <Col xs="12">
        <h3>Amoeba Online</h3>
        <p>Play as an amoeba in this single-cell battle! Compete against 100 bots in this fun, easy-to-learn game.</p>
        <hr></hr>
        </Col>
        <Col xs="3">
        <div className="gameDesc">
            <div className="gameDescBorder">
            <h5>How to Play:</h5>
            <p>Eating cells will help you grow larger. The larger you are, the bigger cells you can eat, which will allow you to monch the competition. Just don't get eaten in your quest to be the biggest!</p>
            <h5>Controls:</h5>
            <p>Mobile: Your amoeba will go to where the screen is touched.</p>
            <p>PC: Your amoeba will follow your cursor.</p>
            </div>
        </div>
        </Col>
        <Col xs="9">
          <GameAmoeba />
        </Col>
        <Col xs="12">
        <hr></hr>
        <h5>Credit:</h5>
        <p>Taken from <a href="https://play.idevgames.co.uk/game/amoeba-online">this site</a> and created by <a href="https://play.idevgames.co.uk/profile/iDev">iDev</a>.</p>
        </Col>
      </Row>
      </Container>
    </>
  );
}

export default DashboardGames;