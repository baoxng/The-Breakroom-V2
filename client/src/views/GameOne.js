import React from "react";
import { Row, Container } from "../components/Grid";
import InfoAmoeba from "../components/Game1";

const GameOne = () => {
    return (
        <Container fluid>
            <Row>
                <InfoAmoeba />
            </Row>
        </Container>
    );
};

export default GameOne;