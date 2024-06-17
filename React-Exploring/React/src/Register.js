// src/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', adhar: '' });
  const [errors, setErrors] = useState({});
  const [adharError, setAdharError] = useState('');
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? '' : 'Name is required';
    tempErrors.email = /\S+@\S+\.\S+/.test(formData.email) ? '' : 'Email is not valid';
    tempErrors.password = formData.password.length >= 6 ? '' : 'Password must be at least 6 characters long';
    tempErrors.adhar = /^\d{12}$/.test(formData.adhar) ? '' : 'Aadhaar number must be 12 digits';
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === '');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.get(`http://localhost:5000/users?adhar=${formData.adhar}`);
        if (response.data.length > 0) {
          setAdharError('Aadhaar number already exists');
        } else {
          setAdharError('');
          await axios.post('http://localhost:5000/users', formData);
          navigate('/login');
        }
      } catch (error) {
        console.error('Error registering user', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div>
        <label>Aadhaar Number</label>
        <input type="text" name="adhar" value={formData.adhar} onChange={handleChange} />
        {errors.adhar && <p>{errors.adhar}</p>}
        {adharError && <p>{adharError}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
