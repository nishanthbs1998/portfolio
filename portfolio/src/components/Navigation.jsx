import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { scroller } from "react-scroll";
import navIcon from "../icons8-menu.svg" 

const Navigation = () => {
  const [show, setShow] = useState(false);

  const toggleOffCanvas=()=>{
    setShow(!show)
  }

  return (
    <Navbar key={"md"} expand={"md"} className="mb-3 " >
      <Container fluid>
        {/* <Navbar.Brand href="#">Nishanth BS</Navbar.Brand> */}
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} onClick={toggleOffCanvas}><img src={navIcon} alt="navIcon" /></Navbar.Toggle>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${"md"}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
          placement="end"
          className="custom-nav"
          show={show}
        >
          <Offcanvas.Header onClick={toggleOffCanvas} closeButton style={{color:'#7100e2', borderBottom:'1px solid #E8E8E8'}}>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"md"}`} style={{color:'#7100e2'}}>
              Contents
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="custom-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link
                onClick={() => {
                  scroller.scrollTo("about", {
                    smooth: true,
                    offset: -70,
                    duration: 500,
                  });
                  toggleOffCanvas()
                  
                }}
                className='navLink'
              >
                About
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  scroller.scrollTo("experience", {
                    smooth: true,
                    offset: -70,
                    duration: 500,
                  });
                  toggleOffCanvas()
                }}
                className='navLink'
              >
                Experience
              </Nav.Link>

              <Nav.Link
                onClick={() => {
                  scroller.scrollTo("projects", {
                    smooth: true,
                    offset: -70,
                    duration: 500,
                  });
                  toggleOffCanvas()
                }}
                className='navLink'
              >
                Projects
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  scroller.scrollTo("contact", {
                    smooth: true,
                    offset: -70,
                    duration: 500,
                  });
                 toggleOffCanvas()
                }}
                className='navLink'
              >
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <button className="customButton">
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="https://docs.google.com/document/d/1pXybRWJsU1Kt8cHRQYghMfyoMqnqCK6lRjWkWm1yCYo/edit?usp=sharing"
          >
            Resume{" "}
          </a>{" "}
        </button>
      </Container>
    </Navbar>
  );
};

export default Navigation;
