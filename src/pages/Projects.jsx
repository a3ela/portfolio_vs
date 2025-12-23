// src/pages/Projects.jsx - REVISED
import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css";
import projectData from "../workData";

export default function Projects() {
  return (
    <section
      className="projects-wrapper"
    >
      <div className="title-container sticky-header">
        <h2 className="section-title">Work I’m Proud Of</h2>
        <p className="project-status">
          <span className="dot"></span>
          Ready for another project
        </p>
      </div>

      <ul className="work-content">
        {projectData.map((project, index) => (
          <ProjectCard key={project.id} {...project} index={index} />
        ))}
      </ul>
    </section>
  );
}