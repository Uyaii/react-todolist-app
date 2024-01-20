import { FaXmark } from "react-icons/fa6";

const LoginError = () => {
  
  return (
    <div className="errMsg">
      <p>Incorrect Username/Password! </p>
      <FaXmark  />
    </div>
  );
};
export default LoginError;
