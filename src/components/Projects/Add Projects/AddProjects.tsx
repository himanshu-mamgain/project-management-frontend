import { useState } from "react";
import "./addProject.css";

function AddProjects() {
  const [project, setProject] = useState({
    title: "",
    applicationType: "",
    gitHubLink: "",
    deployedLink: "",
  });

  function handleChange(e: { target: { name: any; value: any } }) {
    const { name, value } = e.target;

    setProject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
  }

  return (
    <div className="add-project-container">
      <h2>Fill the Details to add the project</h2>
      <form className="add-project-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter your project title"
          value={project.title}
          onChange={handleChange}
          required
        />
        <select name="applicationType" id="" required>
          <option selected disabled>
            Select Application Type
          </option>
          <option value="Node Js">Node JS</option>
          <option value="React Js">Node JS</option>
          <option value="Node Js">Vanilla JS</option>
          <option value="Node Js">Angular JS</option>
        </select>
        <input
          type="text"
          name="gitHubLink"
          placeholder="Enter your project github repository link"
          value={project.gitHubLink}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="deployedLink"
          placeholder="Enter your project deployed link"
          value={project.deployedLink}
          onChange={handleChange}
        />
        <button type="submit">Add project</button>
      </form>
    </div>
  );
}

export default AddProjects;
