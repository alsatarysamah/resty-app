import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"
function CollapsibleExample() {
  return (
    <Navbar className='nav' collapseOnSelect expand="lg" bg="white" variant="white">
      <Container>
        <Navbar.Brand className='nav' href="/">Resty</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            
          </Nav>
          <Nav className='d-flex align-items-center' >
            <Nav.Link href="/history" >History</Nav.Link>
            <Nav.Link eventKey={2} href="/signin">
              Signin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;