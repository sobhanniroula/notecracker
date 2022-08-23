import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">
                Welcome to <br />
                <span id="notecracker-title">Notecracker</span>
              </h1>
              <p className="subtitle">The only place for all your notes..</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button className="landingButton" variant="success">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button
                  className="landingButton"
                  id="registerButton"
                  variant="outline-success"
                >
                  Register
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
