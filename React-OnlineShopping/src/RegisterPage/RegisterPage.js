import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', phoneNumber: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if the email already exists in the mock API
      const response = await fetch(`http://localhost:5000/users?email=${formData.email}`);
      const data = await response.json();

      if (data.length > 0) {
        setError('Email already exists');
      } else {
        // Register the user if email does not exist
        const newUser = { ...formData, id: Date.now().toString() }; // Generate a unique ID for the new user
        await fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        });

        // Navigate to ProductPage after successful registration
        navigate('/');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        {error && <span className="error">{error}</span>}
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
