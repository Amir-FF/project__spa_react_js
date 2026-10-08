import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary shadow-sm mb-5 p-3">
        <Container>
          <Navbar.Brand
            as={NavLink}
            to="/"
            className="fs-4 fw-bold ps-3 pe-3 text-primary"
          >
            Logo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" className="ps-3 pe-3">
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/users" className="ps-3 pe-3">
                Users
              </Nav.Link>

              <Nav.Link as={NavLink} to="/posts" className="ps-3 pe-3">
                Posts
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
