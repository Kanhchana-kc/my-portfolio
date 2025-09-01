// Home.jsx
import React from "react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          height: "100vh",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <h1 className="display-4 fw-bold">Hi, I'm Your Name</h1>
        <p className="lead">I build awesome web applications with React.js</p>
        <a
          href="#projects"
          className="btn btn-primary mt-3"
        >
          View My Projects
        </a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-5 text-center"
        style={{ minHeight: "100vh" }}
      >
        <h2 className="mb-4">About Me</h2>
        <p style={{ maxWidth: "700px", margin: "0 auto" }}>
          I’m a frontend developer with a passion for building clean and functional web applications.
          I love learning new technologies and improving user experiences through design and code.
        </p>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-5 text-center bg-light"
        style={{ minHeight: "100vh" }}
      >
        <h2 className="mb-4">My Projects</h2>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="card m-2" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Project 1</h5>
              <p className="card-text">A short description of your project.</p>
            </div>
          </div>
          <div className="card m-2" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
              <p className="card-text">A short description of your project.</p>
            </div>
          </div>
          {/* Add more project cards here */}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-5 text-center"
        style={{ minHeight: "50vh" }}
      >
        <h2 className="mb-4">Contact Me</h2>
        <p>Email: yourname@example.com</p>
        <p>Phone: +123 456 7890</p>
        <a
          href="mailto:yourname@example.com"
          className="btn btn-primary mt-3"
        >
          Send a Message
        </a>
      </section>
    </div>
  );
}
