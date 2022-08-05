import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
// import heroImg from "../../assets/cover/heroImg.jpg";

function NavComp(props) {
  const { navCategories = [], setNavCategory, currentNavCategory } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentNavCategory.name);
  }, [currentNavCategory]);

  return (
    <Navbar bg="secondary" expand="sm">
      <Container>
        <Navbar.Brand className="text-dark" data-testid="link" href="/">
          Tieso
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* start mapping categories */}
            {navCategories.map((navCategory) => (
              <Nav.Link
                className={`${
                  (currentNavCategory.name === navCategory.name &&
                    "text-danger") ||
                  "text-dark"
                }`}
                onClick={() => {
                  setNavCategory(navCategory);
                }}
                data-testid={navCategory.name}
                href={`#${navCategory.name}`}
              >
                {capitalizeFirstLetter(navCategory.name)}
              </Nav.Link>
            ))}

            {/* end mapping */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComp;