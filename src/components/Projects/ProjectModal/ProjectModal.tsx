import { ProjectResponse } from "../../../types/ProjectResponse";
import './project-modal.css';

function ProjectModal({
  imgLink,
  title,
  githubLink,
  deployedLink,
  username,
  onClose
}: Partial<ProjectResponse>) {
  return (
    <div className="project-modal">
      <img src={imgLink} alt={title} />
      <div className="project-modal-content">
        <span onClick={onClose} className="close-modal-icon">&times;</span>
        <h2>{title}</h2>
        <div className="project-links">
          <a href={githubLink} id="github-link">
            GitHub Link
          </a>
          <a href={deployedLink} id="deployed-link">
            Deployed Link
          </a>
        </div>
        <h5 id="username">
          Added by:
          <span>{username}</span>
        </h5>
      </div>
    </div>
  );
}

export default ProjectModal;
