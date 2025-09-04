// About.jsx
import React, { useState, useEffect } from 'react';
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
import ph from '../assets/PHOTOSHOPE.png';

// Skills with logos
const skills = [
  { name: 'React', level: 90, logo: reactLogo },
  { name: 'JavaScript', level: 85, logo: htmlLogo },
  { name: 'CSS/Bootstrap', level: 80, logo: bootstrapLogo },
  { name: 'Node.js', level: 70, logo: phpLogo },
  { name: 'Photoshop', level: 75, logo: ph },
  { name: 'Illustrator', level: 65, logo: aiLogo },
  { name: 'Figma', level: 80, logo: figmaLogo },
  { name: 'Premiere Pro', level: 85, logo: prLogo },
];

const logos = [
  htmlLogo,
  aiLogo,
  officeLogo,
  figmaLogo,
  canvaLogo,
  bootstrapLogo,
  prLogo,
  laravelLogo,
  reactLogo,
  phpLogo,
  ph,
];

const roles = ['Web Developer', 'Video Editor', 'Graphic Designer', 'UI/UX Enthusiast'];

export default function About({ darkMode }) {
  const bgGradient = darkMode
    ? 'linear-gradient(135deg, #1c1c1e 0%, #111 100%)'
    : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)';

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  // Responsive orbit radius
  const orbitRadius = typeof window !== 'undefined' && window.innerWidth < 768 ? 120 : 170;
  const profileSize = 220;

  return (
    <section
      id="about"
      className="py-5"
      style={{ background: bgGradient, transition: '0.5s' }}
    >
      <Container>
        <motion.h2
          className={`text-center mb-5 fw-bold ${
            darkMode ? 'text-light' : 'text-dark'
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        <Row className="justify-content-center align-items-center">
          {/* Profile + Orbit */}
          <Col xs={12} md={5} className="mb-4 mb-md-0 text-center position-relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              style={{
                position: 'relative',
                width: `${profileSize}px`,
                height: `${profileSize}px`,
                borderRadius: '50%',
                padding: '10px',
                background: 'linear-gradient(135deg, #0d6efd, #00c6ff, #6610f2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 35px rgba(13, 110, 253, 0.7)',
                margin: '0 auto',
                zIndex: 2,
              }}
            >
              <Image
                src={profileImg}
                alt="Profile"
                roundedCircle
                fluid
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  border: '5px solid white',
                }}
              />
            </motion.div>

            {/* Orbit logos */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: orbitRadius * 2,
                height: orbitRadius * 2,
                margin: `-${orbitRadius}px 0 0 -${orbitRadius}px`,
                borderRadius: '50%',
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
                      position: 'absolute',
                      top: orbitRadius + y,
                      left: orbitRadius + x,
                      width: '50px',
                      height: '50px',
                      margin: '-25px',
                      cursor: 'pointer',
                    }}
                  >
                    <Image src={logo} alt="Skill" fluid />
                  </motion.div>
                );
              })}
            </motion.div>
          </Col>

          {/* About Card & Skills */}
          <Col xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card
                className={`${
                  darkMode ? 'bg-dark text-light' : 'bg-light text-dark'
                } shadow-lg rounded-4`}
              >
                <Card.Body>
                  <Card.Text className="fs-6 fs-md-5 mb-4" style={{ lineHeight: 1.7 }}>
                    Hello! 👋 I’m a passionate{' '}
                    <span style={{ color: '#0d6efd', fontWeight: 'bold' }}>
                      {displayText}
                      <span className="blinking-cursor">|</span>
                    </span>{' '}
                    who loves building modern, responsive, and interactive projects. My
                    goal is to create{' '}
                    <span style={{ color: '#0d6efd' }}>beautiful and functional</span>{' '}
                    applications that bring ideas to life. 🚀
                  </Card.Text>

                  {/* Skills */}
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.3 }}
                      className="mb-3"
                    >
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <div className="d-flex align-items-center gap-2">
                          <Image
                            src={skill.logo}
                            alt={skill.name}
                            width={25}
                            height={25}
                            rounded
                          />
                          <span>{skill.name}</span>
                        </div>
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

                  {/* Soft Skills */}
                  <div className="mt-4">
                    <h5 className="fw-bold">Soft Skills</h5>
                    <Row className="g-2 mt-2">
                      {['Problem Solving', 'Teamwork', 'Communication', 'Adaptability', 'Creativity'].map((skill, index) => (
                        <Col key={index} xs={6} md={4}>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className={`p-2 text-center rounded-3 ${
                              darkMode ? 'bg-secondary text-light' : 'bg-light text-dark'
                            } shadow-sm`}
                          >
                            {skill}
                          </motion.div>
                        </Col>
                      ))}
                    </Row>
                  </div>

                  {/* Download CV */}
                  <motion.div whileHover={{ scale: 1.1 }} className="mt-4 text-center">
                    {/* <a
                      href="/resume.pdf"
                      download
                      className="btn btn-primary px-4 py-2 rounded-3 shadow"
                    >
                      📄 Download CV
                    </a> */}
                  </motion.div>

                  {/* Fun Facts */}
                  <Row className="mt-4 text-center">
                    <Col xs={4}>
                      <h4 className="fw-bold text-primary">10+</h4>
                      <p>Projects</p>
                    </Col>
                    <Col xs={4}>
                      <h4 className="fw-bold text-primary">3+</h4>
                      <p>Years</p>
                    </Col>
                    <Col xs={4}>
                      <h4 className="fw-bold text-primary">5+</h4>
                      <p>Clients</p>
                    </Col>
                  </Row>

                  {/* Quote */}
                  <motion.blockquote
                    className="text-center mt-4 fst-italic"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                  >
                    "Design is not just what it looks like and feels like. Design is how it works."
                  </motion.blockquote>

                  {/* Interests */}
                  <div className="mt-4 text-center">
                    <h5 className="fw-bold">Interests</h5>
                    <p>🎵 Music | 📸 Photography | ✈️ Traveling | 📚 Reading</p>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
