import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { getItem } from "../../sessionStorage";
import Auth from "../Auth";
import "./navbar.css";
function CollapsibleNavBar() {
  const navigate = useNavigate();
  const handleSignout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <Navbar
      className="nav"
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="white"
    >
      <Container>
        <Navbar.Brand className="nav" as={Link} to="/resty-app#/">
          Resty
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto "></Nav>
          <Nav className="d-flex align-items-center">
            <Auth role="admin">
              <Nav.Link as={Link} to="/resty-app#/users">
                Users
              </Nav.Link>
            </Auth>
            <Nav.Link as={Link} to="/resty-app#/history">
              History
            </Nav.Link>

            {getItem("userInfo") ? (
              <Nav.Link eventKey={2} onClick={handleSignout}>
                Signout
              </Nav.Link>
            ) : (
              <Nav.Link eventKey={2} href="/resty-app#/signin">
                Signin
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleNavBar;
