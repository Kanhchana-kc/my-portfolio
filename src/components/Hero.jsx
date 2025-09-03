import React from "react";
import { Container } from "react-bootstrap";

export default function Hero({ darkMode }) {
  return (
    <section id="home" className="py-5">
      <Container className="text-center">
        <h1 className="display-4 fw-bold">
          Welcome to <span className={darkMode ? "text-info" : "text-primary"}>My Portfolio</span>
        </h1>
        <p className="lead">
          This is the hero section of your portfolio website.
        </p>
      </Container>
    </section>
  );
}
