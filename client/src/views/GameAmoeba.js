import React from "react";
import { Row, Container } from "../components/Grid";
import InfoAmoeba from "../components/InfoAmoeba";

const GameroomAmoeba = () => {
    return (
        <Container fluid>
            <Row>
                <InfoAmoeba />
            </Row>
        </Container>
    );
};

export default GameroomAmoeba;