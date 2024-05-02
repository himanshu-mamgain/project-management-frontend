import { NavLink } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li className="logo">Project Management</li>
          <div className="link-container">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/projects"}> Projects</NavLink>
            </li>
            <li>
              <NavLink to={"/add-projects"}>Add Projects</NavLink>
            </li>
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
