import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PortfolioNavbar from "./components/PortfolioNavbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
      <PortfolioNavbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />
        <Route path="/projects" element={<Projects darkMode={darkMode} />} />
        <Route path="/contact" element={<Contact darkMode={darkMode} />} />
      </Routes>
    </div>
  );
}

export default App;
