import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SuggestionForm({ onLogout }) {
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

  const handleLogout = () => {
    onLogout();
    navigate('/login');
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
        <button type="submit" className="submit-button">
          Submit Suggestion
        </button>
        <button
          onClick={handleLogout}
          className="logout-button"
          data-testid="submit-button"
        >
          Logout
        </button>{' '}
      </form>
    </div>
  );
}

export default SuggestionForm;
