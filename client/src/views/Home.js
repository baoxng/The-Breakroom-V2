import React, { Fragment } from "react";

import { Row, Container } from "../components/Grid";
import ButtonRow from "../components/ButtonRow/";
import GameRow from "../components/GameRow/";


const Home = () => (
  <Container fluid>
    <Row>
      <ButtonRow />
      <GameRow />
    </Row>
  </Container>
);

export default Home;
