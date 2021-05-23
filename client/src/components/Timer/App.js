import './App.css';
import CountDownTimer from './timer.js';

function TimerApp() {

  const hoursMinSecs = {hours:0, minutes: 15, seconds: 10}
  
  return (
    <div className="timer-app">
        <CountDownTimer hoursMinSecs={hoursMinSecs}/>
    </div>
  );
}

export default TimerApp;
