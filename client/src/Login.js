import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

function Login({setUser}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // hooks need to be in top level of component
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      // this points to a custom route in sessions controller
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          navigate("/userpage")
        });
      } else {
        r.json().then()
      }
    });
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1 className="login_title">Login</h1>
        <label className="login_form" htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="login_form" htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login_button" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;