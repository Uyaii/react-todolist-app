/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import Cookies from "js-cookie";

const Login = ({
  users,
  username,
  setUsername,
  password,
  setPassword,
  authenticatedUser,
  setAuthenticatedUser,
  email
}) => {
  const navigate = useNavigate()
  // * Handle Logging In
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log(users);
      const user = users.find((user) => {
        if (
          (user.username === username || user.email === email) &&
          user.password === password
        ) {
          navigate("/home");
          setAuthenticatedUser(true);
          Cookies.set("username", username);
        } else {
          setAuthenticatedUser(false);
        }
      });
    } catch (err) {
      console.log(err.message);
    }
    console.log(authenticatedUser);
  };
  return (
    <section className="form">
      <div className={authenticatedUser ? "errMsg open" : "errMsg"}>
        <p>Incorrect Username/Password! </p>
        <FaXmark />
      </div>

      <form className="entryForm">
        <h2>LOGIN</h2>

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <Link to="/signup">Dont have an account? Sign Up Here</Link>
      </form>
    </section>
  );
};
export default Login;
