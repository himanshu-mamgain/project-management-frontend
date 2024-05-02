import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/store/slices/auth-slice";
import Loader from "../../components/Loader/Loader";
import "./login.css";

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  function handleChange(e: { target: { name: any; value: any } }) {
    const { name, value } = e.target;
    setLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    // @ts-ignore
    dispatch(loginUser(login));
  }

  const { isLoading } = useSelector((state: { auth: any }) => state.auth);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Enter your registered email"
          value={login.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={login.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
