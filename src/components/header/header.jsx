import React from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import "./../../components/header/header.css";

import { AiFillInstagram, AiOutlineBehance } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <Navbar bg="regular" expand={false} fixed>
        <Container>
          <Navbar.Brand href="#">
            <h1>.</h1>
          </Navbar.Brand>
          {/* <AiFillInstagram size={35}/>
    <FaTelegramPlane size={35}/>
    <AiOutlineBehance size={35}/> */}
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About me</Nav.Link>
                <Nav.Link href="#action2">Projects</Nav.Link>
                <Nav.Link href="#action2">Contacts</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
