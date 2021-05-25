import React from "react";
import { Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";
import { Media } from 'reactstrap';

const GameDashboard = () => {
    return (
        <Container fluid>
                <h1>Amoeba Online</h1>
                <Link to="/amoebaonline">
                     <Media src="https://i.ibb.co/Km7qc0R/amoeba-online.jpg" alt="Amoeba Online"/>
                </Link>
                <br></br>
                <h1>Fruit Machine</h1>
                <Link to="/fruitmachine">
                     <Media src="https://i.ibb.co/gVZHGtX/fruit-machine.png" alt="Fruit Machine"/>
                </Link>
                <br></br>
            <Row>
                <Link to="/narrowescape">Narrow Escape</Link>
                <Link to="/tapslime">Tap Slime</Link>
                <Link to="/spacedash">Space Dash</Link>
            </Row>
        </Container >
    );
};

export default GameDashboard;