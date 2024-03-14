import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        username,
        password,
      });
      if (response.data.isAuthenticated) {
        alert('Login Successful');
        onLogin(true); // Notify parent component
        navigate('/hrview'); // Redirect to HR view
      } else {
        alert('Login Failed');
      }
    } catch (error) {
      console.error('Login error', error);
    }
  };

  const handleBack = () => {
    navigate('/'); // Navigate back to the homepage
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={handleBack} className="back-button">
        Back to Homepage
      </button>{' '}
      {/* Back to Homepage button */}
    </div>
  );
}

export default Login;
