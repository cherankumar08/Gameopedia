import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function NavbarGame() {
  return (
    <Navbar expand="lg" className="" id="navBar">
      <Container>
        <Navbar.Brand href="#home">
          <h2 className="text-white">
            <span className="fw-bold">
              <i className="bi bi-joystick me-2"></i>
              GameOpedia
            </span>
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto">
            <NavLink to="/" className="text-gray mx-3">
              Game List
            </NavLink>
            <NavLink to="/today-offers" className="text-gray mx-3">
              Today's Offers
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarGame;
