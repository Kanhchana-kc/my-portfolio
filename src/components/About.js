// About.jsx
import React from 'react';
import { Container, Row, Col, Card, Image, ProgressBar } from 'react-bootstrap';
import { motion } from 'framer-motion';
import profileImg from '../assets/pic.jpg';

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
import csharpLogo from '../assets/c#.png';
import ph from '../assets/PHOTOSHOPE.png';

const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'CSS/Bootstrap', level: 80 },
  { name: 'Node.js', level: 70 },
];

const logos = [
  htmlLogo, aiLogo, officeLogo, figmaLogo, canvaLogo,
  bootstrapLogo, prLogo, laravelLogo, reactLogo, phpLogo, csharpLogo, ph
];

const profileSize = 220; // ទំហំរូប profile
const orbitRadius = 170; // ចម្ងាយ logo វិល

export default function About({ darkMode }) {
  const bgGradient = darkMode
    ? 'linear-gradient(135deg, #1c1c1e 0%, #111 100%)'
    : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)';

  return (
    <section id="about" className="py-5" style={{ background: bgGradient, transition: '0.5s' }}>
      <Container>
        <motion.h2
          className={`text-center mb-5 fw-bold ${darkMode ? 'text-light' : 'text-dark'}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        <Row className="justify-content-center align-items-center">
          {/* Profile Image + Orbit */}
          <Col md={5} className="mb-4 mb-md-0 text-center position-relative">
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              style={{
                position: "relative",
                width: `${profileSize}px`,
                height: `${profileSize}px`,
                borderRadius: "50%",
                padding: "10px",
                background: "linear-gradient(135deg, #0d6efd, #00c6ff, #6610f2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 35px rgba(13, 110, 253, 0.7)",
                zIndex: 2,
                margin: "0 auto",
              }}
            >
              <Image
                src={profileImg}
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

            {/* Rotating Orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
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
                    whileHover={{ scale: 1.3, rotate: 15 }}
                    style={{
                      position: "absolute",
                      top: orbitRadius + y,
                      left: orbitRadius + x,
                      width: "60px",
                      height: "60px",
                      margin: "-30px",
                      cursor: "pointer",
                    }}
                  >
                    <Image src={logo} alt="Skill" fluid />
                  </motion.div>
                );
              })}
            </motion.div>
          </Col>

          {/* About Card & Skills */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card
                className={`${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} shadow-lg rounded-4`}
              >
                <Card.Body>
                  <Card.Text className="fs-5 mb-4" style={{ lineHeight: 1.7 }}>
                    Hello! 👋 I’m a passionate{' '}
                    <span style={{ color: '#0d6efd' }}>web developer</span> who loves building modern,
                    responsive, and interactive websites. My goal is to create{' '}
                    <span style={{ color: '#0d6efd' }}>beautiful and functional</span> applications
                    that bring ideas to life. 🚀
                  </Card.Text>

                  {/* Skills Progress Bars */}
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.3 }}
                      className="mb-3"
                    >
                      <div className="d-flex justify-content-between mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <ProgressBar
                        now={skill.level}
                        variant={darkMode ? 'info' : 'primary'}
                        style={{ height: '10px', borderRadius: '5px' }}
                        animated
                      />
                    </motion.div>
                  ))}
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
