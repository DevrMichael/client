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
        alert('Innlogging vellykket');
        onLogin(true, response.data.role);
        response.data.role === 'hr' ? navigate('/hrview') : navigate('/');
      } else {
        alert('Innlogging mislykket');
      }
    } catch (error) {
      console.error('Innloggingsfeil', error);
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="login-container">
      <h2>Logg Inn</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label data-testid="username-label">Brukernavn:</label>
          <input
            data-testid="username-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label data-testid="password-label">Passord:</label>
          <input
            data-testid="password-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Logg Inn</button>
      </form>
      <button
        onClick={handleBack}
        className="back-button"
        data-testid="submit-button"
      >
        Tilbake til hjemmesiden
      </button>{' '}
    </div>
  );
}

export default Login;
