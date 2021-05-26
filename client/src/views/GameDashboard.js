import React from "react";
import { Container } from "../components/Grid";
import { Link } from "react-router-dom";
import { Media } from 'reactstrap';

const GameDashboard = () => {
    return (
        <Container fluid>
                <h1>Space Dash</h1>
                <Link to="/spacedash">
                     <Media src="https://i.ibb.co/ph40G5F/space-dash.png" alt="Space Dash"/>
                </Link>
                <br></br>
                <h1>Fruit Machine</h1>
                <Link to="/fruitmachine">
                     <Media src="https://i.ibb.co/gVZHGtX/fruit-machine.png" alt="Fruit Machine"/>
                </Link>
                <br></br>
                <h1>Amoeba Online</h1>
                <Link to="/amoebaonline">
                     <Media src="https://i.ibb.co/Km7qc0R/amoeba-online.jpg" alt="Amoeba Online"/>
                </Link>
                <br></br>
                <h1>Narrow Escape</h1>
                <Link to="/narrowescape">
                     <Media src="https://i.ibb.co/cLFck5H/narrow-escape.png" alt="Narrow Escape"/>
                </Link>
                <br></br>
                <h1>Dvoika</h1>
                <Link to="/dvoika">
                     <Media src="https://i.ibb.co/3fzfTHR/tap-slime.png" alt="Tap Slime"/>
                </Link>
                <br></br>
        </Container >
    );
};

export default GameDashboard;