import React, { useState, useEffect } from 'react';
import './pages/authForms.css';
import './pages/Profile.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewsPage from './pages/NewsPage';
import ForgotPassword from './pages/ForgotPassword';


export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) setUser(savedUser);
  }, []);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      
      <Routes>
        <Route path="/signin" element={<SignIn setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={user ? <Profile user={user} /> : <Navigate to="/signin" />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={user ? <NewsPage /> : <Navigate to="/signin" />} />
      </Routes>
    </Router>
  );
}
