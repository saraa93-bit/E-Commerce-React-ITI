import { Navbar, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" className="navbar">
     
        <Navbar.Brand href="/">Adminator</Navbar.Brand>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
     
    </Navbar>
  );
}

export default NavbarComponent;