import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

export default function About({ darkMode }) {
  return (
    <section id="about" className="py-5">
      <Container>
        <motion.h2
          className="text-center mb-4 fw-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        <Row className="justify-content-center">
          <Col md={8}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Card
                className={darkMode ? "bg-dark text-light shadow-lg" : "bg-light text-dark shadow-lg"}
              >
                <Card.Body>
                  <Card.Text className="fs-5">
                    Hello! 👋 I’m a passionate web developer who loves building
                    modern, responsive, and interactive websites. My goal is to
                    create beautiful and functional applications that bring
                    ideas to life. 🚀
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
