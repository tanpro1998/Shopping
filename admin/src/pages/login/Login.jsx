import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: "10px", marginBottom: "10px" }}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "10px", marginBottom: "10px" }}
      />
      <button
        onClick={handleClick}
        style={{ padding: "10px", width: "100px", cursor: "pointer" }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
