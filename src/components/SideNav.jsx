import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { Navbar, Nav } from "react-bootstrap";

const SideNav = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      bg="primary"
      expand="lg"
      fixed="top"
      id="sideNav"
      expanded={expanded}
      className="p-3 p-lg-5"
    >
      <Navbar.Brand href="#page-top">
        <span className="d-block d-lg-none">Kunj Jansari</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="/profile.jpg"
            alt=""
          />
        </span>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="navbarSupportedContent"
        onClick={() => setExpanded(!expanded)}
      />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="mr-auto" style={{ cursor: "pointer" }}>
          <Nav.Link
            as={Link}
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setExpanded(false)}
          >
            {t("links.about")}
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="education"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setExpanded(false)}
          >
            {t("links.education")}
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setExpanded(false)}
          >
            {t("links.experience")}
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setExpanded(false)}
          >
            {t("links.skills")}
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setExpanded(false)}
          >
            {t("links.projects")}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SideNav;
