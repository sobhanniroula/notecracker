import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="success" expand="lg" variant="dark">
      {/* <Container fluid> */}
      <Container>
        <Navbar.Brand>
          <Link to="/">Notecracker</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Nav>
            <Nav.Link href="/mynotes">My Notes</Nav.Link>
            <NavDropdown title="Sobhan Niroula" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  localStorage.removeItem("userInfo");
                  navigate("/");
                }}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
