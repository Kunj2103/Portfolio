import React from "react";
import About from "../pages/About";
import Education from "../pages/Education";
import Experience from "../pages/Experience";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";

const Resume = () => {
  return (
    <>
      <section id="page-top">
        <div className="container-fluid p-0">
          <section
            className="resume-section p-3 p-lg-5 d-flex d-column"
            id="about"
          >
            <About />
          </section>

          <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="education"
          >
            <Education />
          </section>

          <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="experience"
          >
            <Experience />
          </section>

          <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="skills"
          >
            <Skills />
          </section>

          <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="projects"
          >
            <Projects />
          </section>
        </div>
      </section>
    </>
  );
};

export default Resume;
