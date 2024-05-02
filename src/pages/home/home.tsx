import { NavLink } from "react-router-dom";

import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <h2>Created to arrange multiple projects at one place.</h2>
      <hr />
      <p className="home-description">
        Introducing a showcase of my Node.js, React.js, REST APIs, and
        JavaScript projects! This dynamic collection highlights the diverse
        range of technologies employed in crafting these innovative solutions.
        The front image provides a visual snapshot, offering a glimpse into the
        technological landscape behind each project. With just a click, dive
        deeper into the intricacies of each endeavor by accessing both the
        GitHub repository and the deployed version of the project.
      </p>
      <p className="home-description">
        From the robust backend functionalities enabled by Node.js to the
        interactive user interfaces crafted with React.js, these projects embody
        the essence of modern web development. Whether it's building RESTful
        APIs to facilitate seamless communication between client and server or
        leveraging JavaScript's versatility to create dynamic user experiences,
        each project represents a unique blend of creativity and technical
        expertise.
      </p>
      <div className="home-body">
        <button id="home-btn">
          <NavLink to="/login">Get Started</NavLink>
        </button>
      </div>
      <p className="home-description">
        Explore the GitHub repositories to delve into the codebase, understand
        the project structure, and discover the implementation details.
        Additionally, access the deployed versions to experience the projects
        firsthand, witnessing their functionality in action.
      </p>
    </div>
  );
}

export default Home;
