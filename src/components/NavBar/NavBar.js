import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'

function NavBar() {
  const [cartItems, setCartItems] = useState(0);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">DUKI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME PAGE</Nav.Link>
            <Nav.Link href="#aboutduketo">ABOUT DUKETO</Nav.Link>
            <NavDropdown title="ALBUMS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                ALBUM 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                ALBUM 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                ALBUM 3
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                ALBUM 4
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                ALBUM 5
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                ALBUM 6
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                ALBUM 7
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                SPOTIFY
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="btn btn-light">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="cart-items">{cartItems}</span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
