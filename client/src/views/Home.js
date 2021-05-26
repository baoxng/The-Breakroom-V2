import React from "react";

import { Row, Container } from "../components/Grid";
import YellowRow from "../components/RowYellow";
import TealRow from "../components/RowTeal";
import DescriptionCon from "../components/DescriptionRow";

const Home = () => (
  <Container fluid>
    <Row>
      <DescriptionCon />
      <YellowRow />
      <TealRow />
    </Row>
  </Container>
);

export default Home;
