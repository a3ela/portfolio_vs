// src/pages/Skills.jsx
import "../styles/skills.css";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaGitAlt, FaFigma, FaPython
} from "react-icons/fa";
import { 
  SiTypescript, SiNextdotjs, SiMongodb, SiExpress,
  SiTailwindcss, SiRedux, SiPostgresql
} from "react-icons/si";

export default function Skills() {
  const skills = {
    frontend: [
      { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
      { name: "Express", icon: <SiExpress />, color: "#000000" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
      { name: "Python", icon: <FaPython />, color: "#3776AB" },
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
    ]
  };

  return (
    <section className="skills-wrapper" id="skills">
      <div className="title-container">
        <h2 className="section-title">Things I Can Do</h2>
        <p className="skills-subtitle">Technologies I work with</p>
      </div>

      <div className="skills-content">
        {/* Stacked Columns */}
        <div className="skills-columns">
          {/* Frontend Column */}
          <div className="skills-column">
            <h3 className="column-title">Frontend</h3>
            <div className="skills-list">
              {skills.frontend.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div 
                    className="skill-icon" 
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Column */}
          <div className="skills-column">
            <h3 className="column-title">Backend</h3>
            <div className="skills-list">
              {skills.backend.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div 
                    className="skill-icon" 
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}