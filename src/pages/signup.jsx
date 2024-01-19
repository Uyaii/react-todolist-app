import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <form className="entryForm">
      <h2>SIGN UP</h2>
      <label htmlFor="username">Username:</label>
      <input
        required
        // value={username}
        //onChange={(e) => setUsername(e.target.value)}
      />

      <label>Password:</label>
      <input
        required
        //value={password}
        //onChange={(e) => setPassword(e.target.value)}
      />
      <label> Confirm Password:</label>
      <input
        required
        //value={password}
        //onChange={(e) => setPassword(e.target.value)}
      />
      <button>Sign Up</button>
      <Link to="/login">Already have an account? Login Here</Link>
    </form>
  );
};
export default Signup;
