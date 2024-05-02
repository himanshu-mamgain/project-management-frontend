import { ProjectResponse } from "../../../types/ProjectResponse";
import "./style.css";

function ProjectCard({
  title,
  githubLink,
  deployedLink,
  username,
}: Partial<ProjectResponse>) {
  return (
    <div className="card-container">
      <h4 id="title">{title}</h4>
      <a href={githubLink} id="github-link">
        GitHub Link
      </a>
      <a href={deployedLink} id="deployed-link">
        Deployed Link
      </a>
      <h5 id="username">
        Added by:
        <span>{username}</span>
      </h5>
    </div>
  );
}

export default ProjectCard;
