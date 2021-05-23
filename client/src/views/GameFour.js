import React from "react";
import { Col, Row, Container } from "../components/Grid";
import GameFruitmachine from "../components/Game4";
import TimerApp from "../components/Timer/App";

const GameFour = () => {
    return (
        <Container fluid>
            <Row>
                <Col size="md-8">
                    <GameFruitmachine />
                </Col>
                <Col size="md-4">
                    <TimerApp />
                    <div className="gameDesc">
                        <div className="gameDescBorder">
                            <h3>Pixel Slots Fruit Machine</h3>
                            <p>Wind down with this simple and easy-to-play slots game! Play to win more spins, completely free of charge!</p>
                            <hr></hr>
                            <h5>How to Play:</h5>
                            <p>You start off with 100 spins. With each spin, you have the chance to win 'coins', which are worth more spins. Continue spinning and see how much you can win! You can also reset back to 100 spins if you need.</p>
                            <h5>Controls:</h5>
                            <p>Mobile and PC: Press 'spin' to spin the slots machine. Press 'reset' to reset back to 100 spins.</p>
                            <h5>Credit:</h5>
                            <p>Taken from <a href="https://play.idevgames.co.uk/game/pixel-slots-fruit-machine">this site</a> and created by <a href="https://play.idevgames.co.uk/profile/iDev">iDev</a>.</p>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    );
};


export default GameFour;