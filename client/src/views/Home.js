import React, { Fragment } from "react";

import { Row, Container } from "../components/Grid";
import TimerApp from "../components/Timer/App";
//timer app and grid component is not included in here yet.

const Home = () => (
  <Container fluid>
    <Row>
      <p>
      <TimerApp />
      </p>
    </Row>
  </Container>
);

export default Home;
