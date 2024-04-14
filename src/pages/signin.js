import React, { useState } from 'react';
import './signin.css'; 
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Username: ${formData.username}, Password: ${formData.password}`);

  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="login-btn" type="submit">Login</button>
        <div>
        <Link to="/signup">
        <button className="register-btn" type="button">Register</button>
        </Link>
      </div>
      <Link to="/forgetpw">
        <button className="forgot-password-btn" type="button">Forget Password?</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;


