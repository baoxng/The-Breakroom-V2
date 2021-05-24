import React from 'react';
import './App.css';
import CountDownTimer from './timer.js';
import {useAuth0} from "@auth0/auth0-react";

function TimerApp() {

  const hoursMinSecs = {hours:0, minutes: 15, seconds: 0}
  const {isAuthenticated} = useAuth0();
  
  return (
    
      <div className="timer-app">
        {isAuthenticated && (
          <CountDownTimer hoursMinSecs={hoursMinSecs}/>
          )}
      </div>
    
    
    
  );
}

export default TimerApp;
