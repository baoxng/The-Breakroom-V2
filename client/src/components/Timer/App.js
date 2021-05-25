import React from 'react';
import './App.css';
import CountDownTimer from './timer.js';
import {useAuth0} from "@auth0/auth0-react";
import { Container, Row, Col } from 'reactstrap';


function TimerApp() {

  const hoursMinSecs = {minutes: 15, seconds: 0}
  const {isAuthenticated} = useAuth0();
  
  return (
    <Container className="timer-container" fluid={true}>
      <Row>
        <Col>
        <div id="timer-app">
        {isAuthenticated && (
          <CountDownTimer hoursMinSecs={hoursMinSecs}/>
          )}
      </div>
        </Col>
      </Row>
    </Container>  
  );
}

export default TimerApp;
