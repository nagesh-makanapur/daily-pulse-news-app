import React, { useState, useEffect } from "react";

export default function Profile({ user }) {
  const [animate, setAnimate] = useState(false);
  const [showChangePass, setShowChangePass] = useState(false);
  const [email, setEmail] = useState(user?.email || "");
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handlePasswordChange = () => {
    if (!email || !currentPass || !newPass || !confirmPass) {
      alert("Please fill in all fields.");
      return;
    }
    if (newPass !== confirmPass) {
      alert("New passwords do not match!");
      return;
    }

    // Here you would call your backend API to change password
    console.log("Changing password for:", email);
    alert("Password changed successfully!");
    setShowChangePass(false);

    // Clear fields
    setCurrentPass("");
    setNewPass("");
    setConfirmPass("");
  };

  return (
    <div className="profile-container">
      <div className={`profile-card ${animate ? "animated" : ""}`}>
        <h2 className="profile-title">Profile</h2>
        <div className="profile-info">
          <p>
            <strong>Name:</strong> {user?.name}
          </p>
          <p>
            <strong>DOB:</strong> {user?.dob}
          </p>
          <p>
            <strong>Email:</strong> {user?.email}
          </p>
        </div>

        {!showChangePass ? (
          <button
            className="profile-btn"
            onClick={() => setShowChangePass(true)}
          >
            Change Password
          </button>
        ) : (
          <div className="change-password-form">
            <input
              type="email"
              placeholder="Gmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Current Password"
              value={currentPass}
              onChange={(e) => setCurrentPass(e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
            <button className="profile-btn" onClick={handlePasswordChange}>
              Submit Change
            </button>
            <button
              className="cancel-btn"
              onClick={() => setShowChangePass(false)}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
