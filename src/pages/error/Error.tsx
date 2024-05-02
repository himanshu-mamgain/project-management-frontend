import { NavLink } from "react-router-dom";
import "./error.css";

export const Error = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h2>404<span>😅</span></h2>
        <h4>Sorry! Page not found</h4>
        <p>
          Oops! It seems like the page you're trying to access doesn't exist. If
          your believe there's an issue, feel free to report it, and we'll look
          into it.
        </p>
        <div className="btns">
          <NavLink to={"/"}>Return Home</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Error;
