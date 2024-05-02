import { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { ProjectResponse } from "../../../types/ProjectResponse";
import ProjectModal from "./ProjectModal";

function ProjectCardModal({
  title,
  githubLink,
  deployedLink,
  username,
}: Partial<ProjectResponse>) {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div onClick={handleToggleModalPopup}>
      {showModalPopup ? (
        <ProjectModal
          title={title}
          githubLink={githubLink}
          deployedLink={deployedLink}
          username={username}
          onClose={onClose}
        />
      ) : (
        <ProjectCard
          title={title}
          githubLink={githubLink}
          deployedLink={deployedLink}
          username={username}
        />
      )}
    </div>
  );
}

export default ProjectCardModal;
