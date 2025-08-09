import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser && savedUser.email === email && savedUser.password === password) {
      setUser(savedUser);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Gmail" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <Link to="/forgot-password">Forgot Password?</Link>
        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
