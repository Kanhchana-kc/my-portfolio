import React from "react";
import { Navbar, Nav, Container, Button, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logoImg from "../assets/logo.png"; // <-- Add your logo image here
import "./PortfolioNavbar.css"; // CSS file for styles and animations

export default function PortfolioNavbar({ darkMode, setDarkMode }) {

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`portfolio-navbar ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}
          className="d-flex align-items-center logo-container"
        >
          <Image src={logoImg} alt="Logo" width={40} height={40} roundedCircle />
          <span className="logo-text">MyPortfolio</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {["home", "about", "projects", "contact"].map((page) => (
              <Nav.Link
                key={page}
                href={`#${page}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(page); }}
                className="nav-link-custom"
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </Nav.Link>
            ))}
          </Nav>

          {/* Dark/Light Toggle */}
          <div className="ms-3">
            <Button
              variant={darkMode ? "light" : "dark"}
              onClick={() => setDarkMode(!darkMode)}
              className="dark-toggle-btn"
              aria-label="Toggle dark/light mode"
            >
              {darkMode ? "☀️" : "🌙"}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
