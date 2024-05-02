import { ProjectResponse } from "../../types/ProjectResponse";
import ProjectCard from "../../components/Projects/ProjectCard/ProjectCard";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProjects } from "../../redux/store/slices/project-slice";
import Loader from "../../components/Loader/Loader";

function Projects() {
  const dispatch = useDispatch();

  const { projectsData, isLoading } = useSelector(
    (state: { project: any }) => state.project
  );

  function fetchProjectsFromRedux() {
    // @ts-ignore
    dispatch(fetchProjects());
  }

  useEffect(() => {
    fetchProjectsFromRedux();
  }, []);

  if (isLoading) {
    return (
      <Loader />
    );
  }

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <hr />
      <div className="projects">
        {projectsData &&
          projectsData.map((projectData: ProjectResponse) => (
            <ProjectCard
              key={projectData._id}
              title={projectData.title}
              githubLink={projectData.githubLink}
              imgLink={projectData.imgLink}
              deployedLink={projectData.deployedLink}
              username={projectData.username}
              type={projectData.type}
            />
          ))}
      </div>
    </div>
  );
}

export default Projects;
