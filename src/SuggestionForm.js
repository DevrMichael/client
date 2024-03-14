import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SuggestionForm() {
  const navigate = useNavigate();

  const [suggestion, setSuggestion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/suggestions', { suggestion });
      setSuggestion('');
      alert('Suggestion submitted successfully');
    } catch (error) {
      console.error('Failed to submit suggestion', error);
    }
  };

  const handleLogin = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="form-container">
      <h1>Anonymous Suggestion Box</h1>
      <form onSubmit={handleSubmit} className="suggestion-form">
        <textarea
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          placeholder="Enter your suggestion"
          required
        ></textarea>
        <button type="submit">Submit Suggestion</button>
      </form>
      <button onClick={handleLogin} className="login-button">
        Login
      </button>{' '}
      {/* Login button */}
    </div>
  );
}

export default SuggestionForm;
