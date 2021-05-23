import React from "react";
import { Row, Container } from "../components/Grid";

// import GameSpacedash from "../components/Game5";
// import Jumbotron from "../components/Jumbotron";
// import Nav from "../components/Nav";
import { Link } from "react-router-dom";

const GameDashboard = () => {
    return (
        <Container fluid>
            <Row>
            </Row>
            <Row>
                {/* <GameSpacedash /> */}
                
                <Link to="/amoebaonline">Amoeba Online</Link>
                <Link to="/narrowescape">Narrow Escape</Link>
                <Link to="/tapslime">Tap Slime</Link>
                <Link to="/fruitmachine">Fruit Machine</Link>
                <Link to="/spacedash">Space Dash</Link>
            </Row>
        </Container>
    );
};


export default GameDashboard;