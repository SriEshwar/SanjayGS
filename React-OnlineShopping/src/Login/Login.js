// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';
import './Login.css';


const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/users?email=${formData.email}`);
      const data = await response.json();

      if (data.length === 0) {
        setError('Invalid email or password. Don\'t have an account? Register here.');
      } else {
        const user = data[0];
        if (user.password === formData.password) {
          login();
          navigate('/');
        } else {
          setError('Invalid email or password');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        {error && <span className="error">{error}</span>}
        <button type="submit" className="submit-button">Login</button>
        <button type="button" className="register-button" onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
};

export default Login;
