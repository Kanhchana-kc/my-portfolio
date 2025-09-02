// Contact.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaFacebook,
  FaGithub,
} from 'react-icons/fa';
import imageHover from '../assets/pic2.gif'; // 🔹 hover image

export default function Contact({ darkMode }) {
  const [hovered, setHovered] = useState(false);

  const bgColor = darkMode ? '#121212' : '#f8f9fa';
  const textColor = darkMode ? '#f8f9fa' : '#121212';
  const inputBg = darkMode ? '#1c1c1e' : '#ffffff';
  const inputBorder = darkMode ? '#444' : '#ced4da';

  return (
    <section
      id="contact"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        minHeight: '100vh',
        padding: '5rem 0',
        transition: 'all 0.4s',
      }}
    >
      <Container>
        {/* Title */}
        <motion.h2
          className="text-center mb-5 fw-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          CONTACT ME
        </motion.h2>

        <Row className="align-items-center justify-content-center">
          {/* Left Column - Form + Social */}
          <Col lg={6} md={8} sm={12}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Contact Form */}
              <Form
                className="p-5 rounded-4 shadow-lg text-center"
                style={{ backgroundColor: darkMode ? '#1c1c1e' : '#ffffff' }}
              >
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    style={{
                      backgroundColor: inputBg,
                      color: textColor,
                      border: `1px solid ${inputBorder}`,
                      borderRadius: '0.5rem',
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    style={{
                      backgroundColor: inputBg,
                      color: textColor,
                      border: `1px solid ${inputBorder}`,
                      borderRadius: '0.5rem',
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Your Message"
                    style={{
                      backgroundColor: inputBg,
                      color: textColor,
                      border: `1px solid ${inputBorder}`,
                      borderRadius: '0.5rem',
                    }}
                  />
                </Form.Group>
                <Button
                  type="submit"
                  className="w-100 py-2 fw-bold"
                  style={{ backgroundColor: '#0d6efd', border: 'none' }}
                >
                  Send Message
                </Button>
              </Form>

              {/* Social Buttons */}
              <div className="text-center mt-5">
                <h5 className="fw-bold mb-3">I AM SOCIAL</h5>
                <div className="d-flex justify-content-center flex-wrap gap-3">
                  <Button
                    href="mailto:youremail@example.com"
                    target="_blank"
                    variant="outline-primary"
                    className="d-flex align-items-center gap-2 px-4 py-2 rounded-3"
                  >
                    <FaEnvelope /> Email
                  </Button>
                  <Button
                    href="https://www.youtube.com/channel/UCqjIblaIUjhlc1QH2kRroxg"
                    target="_blank"
                    variant="outline-danger"
                    className="d-flex align-items-center gap-2 px-4 py-2 rounded-3"
                  >
                    <FaYoutube /> YouTube
                  </Button>
                  <Button
                    href="tel:+855712727148"
                    variant="outline-success"
                    className="d-flex align-items-center gap-2 px-4 py-2 rounded-3"
                  >
                    <FaPhone /> Call
                  </Button>
                  <Button
                    href="https://www.linkedin.com/"
                    target="_blank"
                    variant="info"
                    className="d-flex align-items-center gap-2 px-4 py-2 rounded-3"
                  >
                    <FaLinkedin /> LinkedIn
                  </Button>
                  <Button
                    href="https://facebook.com"
                    target="_blank"
                    variant="outline-primary"
                    className="d-flex align-items-center gap-2 px-4 py-2 rounded-3"
                  >
                    <FaFacebook /> Facebook
                  </Button>
                  <Button
                    href="https://github.com/YOUR_GITHUB_USERNAME"
                    target="_blank"
                    variant="outline-dark"
                    className="d-flex align-items-center gap-2 px-4 py-2 rounded-3"
                  >
                    <FaGithub /> GitHub
                  </Button>
                </div>
              </div>
            </motion.div>
          </Col>

          {/* Right Column - Hover Image with Fade */}
          <Col lg={6} md={8} sm={12} className="text-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <motion.div
                key={hovered ? 'hover' : 'original'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={
                    hovered
                      ? imageHover // hover image
                      : 'https://i.pinimg.com/originals/f0/f0/d9/f0f0d932d6e39c7af5aa305cbd8da735.gif' // original image
                  }
                  alt="Contact Illustration"
                  fluid
                  className="rounded-4 shadow-lg"
                />
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
