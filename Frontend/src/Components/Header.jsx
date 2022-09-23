import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


export default function Header() {
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Anzam</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">

            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link ><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link><i className='fas fa-user'></i> Sign In</Nav.Link>
              </LinkContainer>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
