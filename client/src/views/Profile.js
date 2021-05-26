import React from "react";
import { Container, Row, Col } from "reactstrap";

// import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

import "../components/Profile/profile.css"

export const ProfileComponent = () => {
  const { user, isAuthenticated } = useAuth0();
  // const [userMetadata, setUserMetadata] = useState(null);

  return (
    isAuthenticated&&(
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2 className="profile-text">{user.name}</h2>
          <p className="profile-text">{user.email}</p>
        </Col>
      </Row>
      <Row>
        {/* <Highlight>{JSON.stringify(user, null, 2)}</Highlight> */}
      </Row>
    </Container>
    )  
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});
