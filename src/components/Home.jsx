// pages/Home.jsx
import React from "react";
import { Col, Row, Card, Container, Image, ProgressBar } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroPic from "../assets/pic.jpg";

// Logos
import htmlLogo from "../assets/html.png";
import aiLogo from "../assets/ai.png";
import officeLogo from "../assets/office.png";
import figmaLogo from "../assets/figma.png";
import canvaLogo from "../assets/canva.png";
import bootstrapLogo from "../assets/b.png";
import prLogo from "../assets/PR.png";
import laravelLogo from "../assets/l.jpg";
import reactLogo from "../assets/r.png";
import phpLogo from "../assets/php.png";
import ph from "../assets/PHOTOSHOPE.png";
import p1 from "../assets/p1.png";

const logos = [
  htmlLogo, aiLogo, officeLogo, figmaLogo, canvaLogo,
  bootstrapLogo, prLogo, laravelLogo, reactLogo, phpLogo, ph,
];

const skills = [
  { name: "React.js", level: 90, logo: reactLogo },
  { name: "JavaScript", level: 85, logo: htmlLogo },
  { name: "Laravel", level: 70, logo: laravelLogo },
  { name: "Bootstrap/CSS", level: 80, logo: bootstrapLogo },
  { name: "Photoshop", level: 75, logo: ph },
  { name: "Illustrator", level: 65, logo: aiLogo },
  { name: "Figma", level: 80, logo: figmaLogo },
  { name: "Premiere Pro", level: 85, logo: prLogo },
];

const softSkills = [
  { name: "Teamwork", level: 85 },
  { name: "Problem Solving", level: 90 },
  { name: "Adaptability", level: 80 },
  { name: "Communication", level: 85 },
];

const profileSize = 300;
const orbitRadius = 200;

export default function Home({ darkMode }) {
  const projects = [
    {
      id: 1,
      title: "HTML CSS and JS",
      description: "Khmer temple website project.",
      link: "https://khmer-temple.vercel.app/index.html",
      image: p1,
    },
    {
      id: 2,
      title: "E-commerce App",
      description: "Online store built with React & Firebase.",
      link: "#",
      image: "/assets/projects/ecommerce.png",
    },
    {
      id: 3,
      title: "Blog Platform",
      description: "Modern blog platform with Markdown support.",
      link: "#",
      image: "/assets/projects/blog.png",
    },
  ];

  const textClass = darkMode ? "text-light" : "text-dark";

  // Dynamic color for Hero spans
  const heroColor1 = darkMode ? "#4dabf7" : "#0d6efd"; // light blue for dark mode
  const heroColor2 = darkMode ? "#b197fc" : "#6610f2"; // light purple for dark mode

  return (
    <>
      {/* Hero Section */}
      <section
        className={`d-flex flex-column flex-lg-row justify-content-center align-items-center py-5 ${textClass}`}
        style={{ minHeight: "100vh", textAlign: "center" }}
      >
        {/* Text */}
        <Col lg={6} className="mb-4 mb-lg-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className={`display-4 fw-bold ${textClass}`}>
              Hi, I'm{" "}
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                style={{ color: heroColor1 }}
              >
                KANHCHANA
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                style={{ color: heroColor2 }}
              >
                KONG
              </motion.span>
            </h1>

            <motion.p
              className={`lead ${textClass}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
            >
              I build awesome web applications with React.js
            </motion.p>

            <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start mt-3">
              <Link to="/projects" className="btn btn-primary">
                View My Projects
              </Link>
              <a href="/resume.pdf" download className="btn btn-outline-primary">
                📄 Download CV
              </a>
            </div>
          </motion.div>
        </Col>

        {/* Profile + Orbit Logos */}
        <Col lg={6} className="position-relative">
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

      {/* About Me */}
      <section className={`py-5 ${darkMode ? "bg-dark" : "bg-light"}`}>
        <Container>
          <h2 className={`text-center mb-4 ${textClass}`}>About Me</h2>
          <p className={`text-center w-75 mx-auto ${textClass}`}>
            I'm a passionate web developer, video editor, and designer who loves
            building modern applications and creating engaging content.
            My goal is to combine creativity with technology to make something
            truly impactful. 🚀
          </p>
        </Container>
      </section>

      {/* Skills */}
      <section className="py-5">
        <Container>
          <h2 className={`text-center mb-4 ${textClass}`}>Skills</h2>
          <Row>
            {skills.map((skill, index) => (
              <Col md={6} key={index} className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <div className="d-flex align-items-center gap-2">
                    <Image src={skill.logo} alt={skill.name} width={25} />
                    <span className={textClass}>{skill.name}</span>
                  </div>
                  <span className={textClass}>{skill.level}%</span>
                </div>
                <ProgressBar
                  now={skill.level}
                  variant="primary"
                  style={{ height: "10px", borderRadius: "5px" }}
                  animated
                />
              </Col>
            ))}
          </Row>

          <h3 className={`mt-5 ${textClass}`}>Soft Skills</h3>
          <Row>
            {softSkills.map((skill, index) => (
              <Col md={6} key={index} className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span className={textClass}>{skill.name}</span>
                  <span className={textClass}>{skill.level}%</span>
                </div>
                <ProgressBar
                  now={skill.level}
                  variant="info"
                  style={{ height: "10px", borderRadius: "5px" }}
                  animated
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Projects */}
      <section id="projects" className={`py-5 ${darkMode ? "bg-dark" : "bg-light"}`}>
        <Container>
          <h2 className={`text-center mb-4 ${textClass}`}>Projects</h2>
          <Row>
            {projects.map((project) => (
              <Col md={4} sm={6} xs={12} key={project.id} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className={`shadow-lg h-100 ${darkMode ? "bg-secondary text-light" : ""}`}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card.Img
                        variant="top"
                        src={project.image}
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                    </a>
                    <Card.Body>
                      <Card.Title className={textClass}>{project.title}</Card.Title>
                      <Card.Text className={textClass}>{project.description}</Card.Text>
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

      {/* Services */}
      <section className="py-5">
        <Container>
          <h2 className={`text-center mb-4 ${textClass}`}>Services</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className={`shadow-sm h-100 text-center p-3 ${darkMode ? "bg-secondary text-light" : ""}`}>
                <h3>Web Development</h3>
                <p>
                  Building responsive and modern websites with React, Laravel,
                  and more.
                </p>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className={`shadow-sm h-100 text-center p-3 ${darkMode ? "bg-secondary text-light" : ""}`}>
                <h3>UI/UX Design</h3>
                <p>
                  Creating beautiful and intuitive designs with Figma, Photoshop,
                  and Canva.
                </p>
              </Card>
            </Col>
            <Col md={4} className={`mb-4`}>
              <Card className={`shadow-sm h-100 text-center p-3 ${darkMode ? "bg-secondary text-light" : ""}`}>
                <h3>Video Editing</h3>
                <p>
                  Producing creative video content with Premiere Pro and After
                  Effects.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact */}
      <section className={`py-5 ${darkMode ? "bg-dark" : "bg-light"}`}>
        <Container>
          <h2 className={`text-center mb-4 ${textClass}`}>Contact Me</h2>
          <p className={`text-center ${textClass}`}>
            📧 Email:{" "}
            <a href="mailto:your.email@example.com">your.email@example.com</a>
          </p>
          <p className={`text-center ${textClass}`}>
            🔗 Connect on{" "}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>{" "}|{" "}
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>{" "}|{" "}
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </p>
        </Container>
      </section>

      {/* Footer */}
      <footer className={`py-3 text-center ${darkMode ? "bg-dark text-light" : "bg-dark text-light"}`}>
        <p>© 2025 KANHCHANA KONG. All rights reserved.</p>
      </footer>
    </>
  );
}
