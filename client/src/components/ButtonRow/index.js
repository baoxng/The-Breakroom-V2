import React from 'react';
import { Container } from 'reactstrap';
import './App.css';
import ProfileBtn from '../ButtonProfile/index'
import LoginBtn from '../ButtonLogin/index'

const ButtonRow = () => {
  return (
    <>
      <Container className="login-container" fluid={true}>
        <ProfileBtn />
        <LoginBtn />
        </Container>
    </>
  );
}

export default ButtonRow;