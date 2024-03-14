import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function HRView({ onLogout }) {
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSuggestions();
  }, []);

  const fetchSuggestions = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/suggestions');
      setSuggestions(response.data);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="suggestions-container">
      <div className="header-container">
        <button
          onClick={handleLogout}
          data-testid="logout-button"
          className="logout-button"
        >
          Logg Ut
        </button>
        <h1>HR Visning: Ansatteforslag</h1>
      </div>
      <ul className="suggestions-list">
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion.suggestion}</li>
        ))}
      </ul>
    </div>
  );
}

export default HRView;
