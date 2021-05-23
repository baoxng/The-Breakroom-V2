import React from "react";
import { Col, Row, Container } from "../components/Grid";
import GameSpacedash from "../components/Game5";
import TimerApp from "../components/Timer/App";

const GameFive = () => {
    return (
        <Container fluid>
            <Row>
                <Col size="md-8">
                    <GameSpacedash />
                </Col>
                <Col size="md-4">
                    <TimerApp />
                    <div className="gameDesc">
                        <div className="gameDescBorder">
                            <h3>Space Dash</h3>
                            <p>Play as a rocket surrounded by enemies in outer space! Choose your difficulty and avoid all objects! Survive two minutes without losing all your lives to win this exhillerating and unique space game!</p>
                            <hr></hr>
                            <h5>How to Play:</h5>
                            <p>Depending on your difficulty, you will be granted a set amount of lives. Running into objects will take away one of your lives. Survive for two minutes without losing all of your lives in order to win.</p>
                            <h5>Controls:</h5>
                            <p>Mobile: Tap the screen where you want your rocket to go. Drag the rocket to avoid any dangers.</p>
                            <p>PC: The rocket will follow the cursor automatically.</p>
                            <h5>Credit:</h5>
                            <p>Taken from <a href="https://play.idevgames.co.uk/game/space-dash">this site</a> and created by <a href="https://play.idevgames.co.uk/profile/Kalyani%20Menon">Kalyani Menon</a>.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};


export default GameFive;