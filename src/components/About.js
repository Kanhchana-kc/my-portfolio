import React from 'react';
import { Container, Row, Col, Card, Image, ProgressBar } from 'react-bootstrap';
import { motion } from 'framer-motion';
import profileImg from '../assets/pic.jpg'; // Make sure pic.jpg is inside src/assets/

export default function About({ darkMode }) {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'CSS/Bootstrap', level: 80 },
    { name: 'Node.js', level: 70 },
  ];

  return (
    <section
      id="about"
      className="py-5"
      style={{
        background: darkMode
          ? 'linear-gradient(135deg, #1c1c1e 0%, #111 100%)'
          : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        transition: 'background 0.5s',
      }}
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
          <Col md={4} className="mb-4 mb-md-0 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={profileImg}
                alt="Profile"
                roundedCircle
                fluid
                style={{
                  maxWidth: '200px',
                  border: `4px solid ${darkMode ? '#0d6efd' : '#0d6efd'}`,
                  transition: 'border 0.3s',
                }}
              />
            </motion.div>
          </Col>

          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card
                className={
                  darkMode
                    ? 'bg-dark text-light shadow-lg rounded-4'
                    : 'bg-light text-dark shadow-lg rounded-4'
                }
                style={{ overflow: 'hidden' }}
              >
                <Card.Body>
                  <Card.Text className="fs-5 mb-4" style={{ lineHeight: 1.7 }}>
                    Hello! 👋 I’m a passionate{' '}
                    <span style={{ color: '#0d6efd' }}>web developer</span> who
                    loves building modern, responsive, and interactive websites.
                    My goal is to create{' '}
                    <span style={{ color: '#0d6efd' }}>
                      beautiful and functional
                    </span>{' '}
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
