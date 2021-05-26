import React from "react";
import { Row, Container } from "../components/Grid";
import InfoSpacedash from "../components/InfoSpacedash";
// import ChatApp from '../components/Chat/ChatApp'

const GameFive = () => {
    return (
        <Container fluid>
            <Row>
                <InfoSpacedash />
            </Row>
            <Row>
                {/* <ChatApp/> */}
            </Row>
        </Container>
    );
};

export default GameFive;