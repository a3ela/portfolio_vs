import "../styles/projects.css";
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({
  id,
  color,
  title,
  technologies,
  description,
  link,
  image,
  index,
}) => {
  const stickyTop = `calc(6rem + ${index * 20}px)`;

  return (
    <li className="card" id={id} style={{ top: stickyTop }}>
      <div className="card__body" style={{ backgroundColor: color }}>
        <div className="card__top">
          <p>2024</p>
          <p>Mobile, Web, admin</p>
        </div>

        <div className="card__head">
          <h1 className="card__title">{title}</h1>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <FaArrowRight className="card__icon" />
          </a>
        </div>

        <div className="card__stat">
          <div className="card__description">
            <h3 className="card__description-title">Description</h3>
            <p className="card__description-text">{description}</p>
          </div>
          <div className="card__technologies">
            <h3 className="card__technologies-title">Technologies</h3>
            <p className="card__technologies-text">{technologies.join(", ")}</p>
          </div>
        </div>

        <img src={image} alt={title} className="card__img" />
      </div>
    </li>
  );
};

export default ProjectCard;
