import React from "react";
import './Navbar.css';
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar({ user, setUser }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/signin");
  };

  return (
    <nav className="navbar">
      <h2>The Daily Pulse</h2>
      <div>
        {/* Show Profile + Logout only if logged in AND not on signin/register */}
        {user && location.pathname !== "/signin" && location.pathname !== "/register" ? (
          <>
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : null}
      </div>
    </nav>
  );
}
