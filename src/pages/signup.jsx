/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usersApi from "../API/users";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";

const Signup = ({ users, setUsers }) => {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const navigate = useNavigate();

  // * Handle Sign Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    const id = uuidv4();
    const newUser = {
      id,
      email: newEmail,
      username: newUsername,
      password: newPassword,
    };

    try {
      const response = await usersApi.post("/users", newUser);
      const allUsers = [...users, response.data];
      setUsers(allUsers);
      Cookies.set("username", newUsername);
      navigate("/home");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form className="entryForm">
      <h2>SIGN UP👍</h2>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        required
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <label htmlFor="username">Username:</label>
      <input
        required
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />

      <label>Password:</label>
      <input
        type="password"
        required
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      {/* <label> Confirm Password:</label>
      <input
        required
        //value={password}
        //onChange={(e) => setPassword(e.target.value)}
      /> */}
      <button onClick={handleSignUp}>Sign Up</button>
      <Link to="/login">Already have an account? Login Here</Link>
    </form>
  );
};
export default Signup;
