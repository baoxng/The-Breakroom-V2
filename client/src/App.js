import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalApi";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

// styles
import "./App.css";

//Our imports to the components
import GameDashboard from './views/GameDashboard';
import GameOne from "./views/GameOne";
import GameTwo from "./views/GameTwo";
import GameThree from "./views/GameThree";
import GameFour from "./views/GameFour";
import GameFive from "./views/GameFive";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/external-api" component={ExternalApi} />
            <Route exact path="/gamedashboard" component={GameDashboard} />
            <Route exact path="/amoebaonline" component={GameOne}/>
            <Route exact path="/narrowescape" component={GameTwo} />
            <Route exact path="/tapslime" component={GameThree} />
            <Route exact path="/fruitmachine" component={GameFour} />
            <Route exact path="/spacedash" component={GameFive} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
