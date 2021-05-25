import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

const CountDownTimer = ({hoursMinSecs}) => {
   
    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);
    const {logout} = useAuth0();
    const logoutWithRedirect = () =>
    logout({
        returnTo: window.location.origin,
    });

    const tick = () => {
   
        if (hrs === 0 && mins === 0 && secs === 0) 
            logoutWithRedirect()
            // reset()
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };
    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div>
            <p>{`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
            <h2>..Until it's time to get back to work!</h2>
        </div>
    );
}

export default CountDownTimer;