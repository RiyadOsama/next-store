"use client";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="/">Next-Store</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          aria-label="Toggle navigation"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} href="/products">
              Shop
            </Nav.Link>
            <Nav.Link as={Link} href="/products/add">
              Add
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
