import React from "react";
import { Col, Row, Container } from "../components/Grid";
import GameDvoika from "../components/Game3";
import TimerApp from "../components/Timer/App";

const GameThree = () => {
    return (
        <Container fluid>
            <Row>
                <Col size="md-8">
                    <GameDvoika />
                </Col>
                <Col size="md-4">
                    <TimerApp />
                    <div className="gameDesc">
                        <div className="gameDescBorder">
                            
                            <h3>Dvoika</h3>
                            <p>Move two orbs attached by a ring in order to avoid falling objects!</p>
                            <hr></hr>
                            <h5>How to Play:</h5>
                            <p>Blocks will fall downwards in different sizes and shapes. Rotate the two colored orbs in order to avoid either of them being hit by one of the blocks. Each block avoided is one point. Try and get a high score!</p>
                            <h5>Controls:</h5>
                            <p>Mobile: Tap on the side of the screen that you want the orbs to rotate towards.</p>
                            <p>PC: Click on the side of the screen that you want the orbs to rotate towards.</p>
                            <h5>Credit:</h5>
                            <p>Taken from <a href="https://play.idevgames.co.uk/game/dvoika">this site</a> and created by <a href="https://play.idevgames.co.uk/profile/vankizzle">vankizzle</a>.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};


export default GameThree;