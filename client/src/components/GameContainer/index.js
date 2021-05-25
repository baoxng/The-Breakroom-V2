import React from 'react';
import { Container } from 'reactstrap';
import TimerApp from '../Timer/App';
import './App.css';

const GameCon = () => {
  return (
      <Container className="game-container" fluid={true}>
        <TimerApp />
      </Container>
  );
}

export default GameCon;