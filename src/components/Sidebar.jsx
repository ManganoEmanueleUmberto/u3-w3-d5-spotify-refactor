import { Button, Col, Container, Form, Image, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../redux/actions";

const Sidebar = () => {
  const dispatch = useDispatch;
  const query = useSelector((state) => state.search.query);

  return (
    <>
      <Col xs={2}>
        <Navbar expand="md" className="fixed-left justify-content-between" id="sidebar">
          <Container className="flex-column align-items-start">
            <Navbar.Brand href="index.html">
              <Image src="./assets/logo/logo.png" alt="Spotify Logo" width="131" height="40" />
            </Navbar.Brand>
            <Navbar.Toggle
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-label="Toggle navigation"
            />
            <Navbar.Collapse id="navbarNavAltMarkup">
              <Nav className="navbar-nav flex-column">
                <Nav.Link href="#" className="d-flex align-items-center">
                  <i className="bi bi-house-door-fill"></i>&nbsp; Home
                </Nav.Link>
                <Nav.Link href="#" className="d-flex align-items-center">
                  <i className="bi bi-book-fill"></i>&nbsp; Your Library
                </Nav.Link>
                <div className="d-flex mt-3">
                  <Form>
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      className=" rounded-0 rounded-start "
                    />
                  </Form>

                  <Button variant="outline-secondary " className="btn-sm">
                    GO
                  </Button>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
          <div className="nav-btn">
            <button className="btn signup-btn" type="button">
              Sign Up
            </button>
            <button className="btn login-btn" type="button">
              Login
            </button>
            <div className="d-flex gap-1 justify-content-center">
              <Nav.Link href="#">Cookie Policy</Nav.Link> | <Nav.Link href="#"> Privacy</Nav.Link>
            </div>
          </div>
        </Navbar>
      </Col>
    </>
  );
};

export default Sidebar;
