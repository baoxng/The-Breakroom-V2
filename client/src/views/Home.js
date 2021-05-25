import React from "react";

import { Row, Container } from "../components/Grid";
import YellowRow from "../components/RowYellow";
import TealRow from "../components/RowTeal";

const Home = () => (
  <Container fluid>
    <Row>
      <YellowRow />
      <TealRow />
    </Row>
  </Container>
);

export default Home;
