// pages/Home.jsx
import React, { useState, useEffect } from "react";
import { Col, Card, Image, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroPic from "../assets/pic.jpg";

// Logos
import htmlLogo from '../assets/html.png';
import aiLogo from '../assets/ai.png';
import officeLogo from '../assets/office.png';
import figmaLogo from '../assets/figma.png';
import canvaLogo from '../assets/canva.png';
import bootstrapLogo from '../assets/b.png';
import prLogo from '../assets/PR.png';
import laravelLogo from '../assets/l.jpg';
import reactLogo from '../assets/r.png';
import phpLogo from '../assets/php.png';
import ph from '../assets/PHOTOSHOPE.png';
import p1 from '../assets/p1.png';

const logos = [
  htmlLogo, aiLogo, officeLogo, figmaLogo, canvaLogo,
  bootstrapLogo, prLogo, laravelLogo, reactLogo, phpLogo, ph
];

const profileSize = 300; // រូបធំ
const orbitRadius = 200; // ចម្ងាយ logo

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const projectData = [
      {
        id: 1,
        title: "HTMl CSS And JS",
        description: "Khmer temple.",
        link: "https://khmer-temple.vercel.app/index.html",
        image: p1
      },
      {
        id: 2,
        title: "E-commerce App",
        description: "Online store built with React & Firebase.",
        link: "https://your-ecommerce.vercel.app",
        image: "/assets/projects/ecommerce.png"
      },
      {
        id: 3,
        title: "Blog Platform",
        description: "A modern blog platform with Markdown support.",
        link: "https://your-blog.vercel.app",
        image: "/assets/projects/blog.png"
      },
    ];
    setProjects(projectData);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="d-flex flex-column flex-lg-row justify-content-center align-items-center py-5"
        style={{ minHeight: "100vh", textAlign: "center", padding: "0 0px" }}
      >
        {/* Text */}
        <Col lg={6} className="mb-4 mb-lg-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="display-4 fw-bold">Hi, I'm Your Name</h1>
            <p className="lead">I build awesome web applications with React.js</p>
            <Link to="/projects" className="btn btn-primary mt-3">
              View My Projects
            </Link>
          </motion.div>
        </Col>

        {/* Profile + Orbiting Logos */}
        <Col lg={6} className="position-relative">
          {/* Profile */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              position: "relative",
              width: `${profileSize}px`,
              height: `${profileSize}px`,
              borderRadius: "50%",
              padding: "15px",
              background: "linear-gradient(135deg, #0d6efd, #00c6ff, #6610f2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 50px rgba(13, 110, 253, 0.8)",
              margin: "0 auto",
              zIndex: 2,
            }}
          >
            <Image
              src={heroPic}
              alt="Profile"
              roundedCircle
              fluid
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
                border: "5px solid white",
              }}
            />
          </motion.div>

          {/* Rotating Orbit Logos */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: orbitRadius * 2,
              height: orbitRadius * 2,
              margin: `-${orbitRadius}px 0 0 -${orbitRadius}px`,
              borderRadius: "50%",
            }}
          >
            {logos.map((logo, index) => {
              const angle = (index / logos.length) * 2 * Math.PI;
              const x = orbitRadius * Math.cos(angle);
              const y = orbitRadius * Math.sin(angle);

              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.4, rotate: 20 }}
                  style={{
                    position: "absolute",
                    top: orbitRadius + y,
                    left: orbitRadius + x,
                    width: "70px",
                    height: "70px",
                    margin: "-35px",
                    cursor: "pointer",
                  }}
                >
                  <Image src={logo} alt="Skill" fluid />
                </motion.div>
              );
            })}
          </motion.div>
        </Col>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-5 text-center bg-light"
        style={{ minHeight: "80vh" }}
      >
        <Container>
          <h2 className="mb-4">My Projects</h2>
          <Row className="justify-content-center">
            {projects.map((project) => (
              <Col md={4} sm={6} xs={12} className="mb-4" key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="shadow-lg h-100">
                    {/* Clickable project image */}
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Card.Img
                        variant="top"
                        src={project.image}
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                    </a>
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        View Project
                      </a>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Feature / About Section */}
      <section className="py-5" style={{ background: "#f0f4f8" }}>
        <Container>
          <h2 className="mb-4 text-center">What I Do</h2>
          <Row className="justify-content-center">
            <Col md={4} className="mb-4">
              <Card className="shadow-sm h-100 text-center p-3">
                <h3>Web Development</h3>
                <p>Building responsive and modern websites with React, Laravel, and more.</p>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="shadow-sm h-100 text-center p-3">
                <h3>UI/UX Design</h3>
                <p>Creating beautiful and intuitive designs with Figma, Photoshop, and Canva.</p>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="shadow-sm h-100 text-center p-3">
                <h3>Edit Video</h3>
                <p>Working with Adobe Photoshop,Premiere pro,Ai</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
