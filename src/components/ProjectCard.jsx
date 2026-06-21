import { Link } from "react-router-dom";

export default function ProjectCard({
  title,
  description,
  path
}) {
  return (
    <div className="project-card">
      <h3>{title}</h3>

      <p>{description}</p>

      <Link to={path}>
        <button>
          Open Tool
        </button>
      </Link>
    </div>
  );
}