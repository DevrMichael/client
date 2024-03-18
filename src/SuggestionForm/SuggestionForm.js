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
      alert('Forslaget ble sendt inn vellykket');
    } catch (error) {
      console.error('Kunne ikke sende inn forslag', error);
    }
  };

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className="form-container">
      <h1>Anonym forslagsboks</h1>
      <form onSubmit={handleSubmit} className="suggestion-form">
        <textarea
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          placeholder="Skriv inn ditt forslag"
          required
        ></textarea>
        <button type="submit" className="submit-button">
          Send inn forslag
        </button>
        <button
          onClick={handleLogout}
          className="logout-button"
          data-testid="submit-button"
        >
          Logg ut{' '}
        </button>{' '}
      </form>
    </div>
  );
}

export default SuggestionForm;
