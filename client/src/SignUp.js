import React, { useState } from "react";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [specialty, setSpecialty] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        specialty,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => console.log(user));
      }
    });
  }

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h1 className="signup_title">Sign Up</h1>
        <label className="signup_form" htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="signup_form" htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label className="signup_form" htmlFor="password">Confirm Password</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <label className="signup_form" htmlFor="specialty">Musical Specialty</label>
        <input
          type="text"
          id="specialty"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          autoComplete="current-password"
        />
        <button className="signup_button" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
