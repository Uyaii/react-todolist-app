/* eslint-disable react/prop-types */
import Cookies from "js-cookie";
const Home = () => {
  const username = Cookies.get("username")
  return <div>
    <h2>Welcome back, {username.toUpperCase()} </h2>
  </div>;
};
export default Home;
