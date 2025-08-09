import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();

  const handlePasswordReset = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser || savedUser.email !== email) {
      alert("No account found with this Gmail!");
      return;
    }

    if (!newPass || !confirmPass) {
      alert("Please fill all fields.");
      return;
    }

    if (newPass !== confirmPass) {
      alert("Passwords do not match!");
      return;
    }

    // Update user in localStorage
    const updatedUser = { ...savedUser, password: newPass };
    localStorage.setItem("user", JSON.stringify(updatedUser));

    alert("Password changed successfully! Please sign in again.");
    navigate("/signin");
  };

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handlePasswordReset}>
        <input
          type="email"
          placeholder="Gmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
          required
        />
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
}
