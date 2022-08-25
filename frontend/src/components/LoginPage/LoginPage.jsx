import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../MainScreen/MainScreen";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      setLoading(true);

      const { data } = await axios.post(
        "/api/users/login",
        { email, password },
        config
      );
      console.log(data);

      // Then store it in the local storage:
      localStorage.setItem("userInfo", JSON.stringify(data));

      setLoading(false);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <>
      <MainScreen title="Login">
        <div className="loginContainer">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Enter the password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="success" type="submit" className="mt-3">
              Submit
            </Button>
            <Row className="py-3">
              <Col>
                New Customer ? <Link to="/register">Register Here</Link>
              </Col>
            </Row>
          </Form>
        </div>
      </MainScreen>
    </>
  );
};

export default LoginPage;
