/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Signup from "./pages/signup";
import usersApi from "./API/users";
import Cookies from "js-cookie";
import Layout from "./pages/layout";
import Home from "./pages/home";
import LoginError from "./components/loginError";


function App() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [authenticatedUser, setAuthenticatedUser] = useState(false);

  // * Get Users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await usersApi.get("/users");
        setUsers(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchUsers();
  }, [users]);


  return (
    <Routes>
      <Route index path="/" element={<Landing />} />
      <Route
        path="/login"
        element={
          <Login
            users={users}
            authenticatedUser={authenticatedUser}
            setAuthenticatedUser={setAuthenticatedUser}
          />
        }
      />
      <Route path="/signup" element={<Signup
        users={users}
        setUsers={setUsers}
      />} />

      <Route path="/" element={<Layout />}>
        <Route index path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
