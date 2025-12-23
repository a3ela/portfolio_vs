// src/components/Layout.jsx - REFACTORED FOR SCROLLING SIDEBARS

import Intro from "./Intro";
import Navigation from "./Navigation";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";

const Layout = () => {
  return (
    <div className="main-scroll-wrapper" style={{ backgroundColor: "#000" }}>
      <section className="hero-grid" id="home">
        <aside className="left-panel">
          <Intro />
        </aside>

        <div className="center-panel">
          <Home />
        </div>

        <aside className="right-panel">
          <Navigation />
        </aside>
      </section>

      <div className="content-scroll">
        <section className="section" id="projects">
          <Projects />
        </section>

        <section className="section" id="about">
          <About />
        </section>

        <section className="section" id="skills">
          <Skills />
        </section>

        <section className="section" id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Layout;
