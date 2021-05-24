import React from 'react';
import { Alert } from 'reactstrap';

const TimerAlert = () => {
  return (
    <div>
      <Alert color="success">
        <h4 className="alert-heading">It's been 15 Minutes!</h4>
        <p>
          When you work hard, it’s important to take a few breaks throughout the day.
        </p>
        <hr />
        <p className="mb-0">
          When you work hard, it’s important to take a few breaks throughout the day.
        </p>
      </Alert>
    </div>
  );
};

export default TimerAlert;