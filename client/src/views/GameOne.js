import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Game from "../components/Game1";
import TimerApp from "../components/Timer/App";

const GameOne = () => {
    return (
        <Container fluid>
            <Row>
                <Col size="md-8">
                    <Game />
                </Col>
                <Col size="md-4">
                    <TimerApp />
                    <div className="gameDesc">
                        <div className="gameDescBorder">
                            <h3>
                                Amoeba Online
                            </h3>
                            <p>Play as an amoeba in this single-cell battle! Compete against 100 bots in this fun, easy-to-learn game.</p>
                            <hr></hr>
                            <h5>How to Play:</h5>
                            <p>Eating cells will help you grow larger. The larger you are, the bigger cells you can eat, which will allow you to monch the competition. Just don't get eaten in your quest to be the biggest!</p>
                            <h5>Controls:</h5>
                            <p>Mobile: Your amoeba will go to where the screen is touched.</p>
                            <p>PC: Your amoeba will follow your cursor.</p>
                            
                            <h5>Credit:</h5>
                            <p>Taken from <a href="https://play.idevgames.co.uk/game/amoeba-online">this site</a> and created by <a href="https://play.idevgames.co.uk/profile/iDev">iDev</a>.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};


export default GameOne;