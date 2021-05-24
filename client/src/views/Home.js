import React, { Fragment } from "react";

import { Row, Container } from "../components/Grid";
import TimerApp from "../components/Timer/App";
// import App from "../components/Chat/App";

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
