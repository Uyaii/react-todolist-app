import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <main className="landing">
          <h1>Welcome to Todoly </h1>
          <p>Helping you be 100% more efficient! </p>
          <Link to="/login"><button>
          
          </button>Login here</Link>
      <Link to="/signup">SignUp here</Link>
    </main>
  );
};
export default Landing;
