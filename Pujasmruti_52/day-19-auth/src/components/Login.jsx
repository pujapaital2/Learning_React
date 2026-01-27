import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Login</h2>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
