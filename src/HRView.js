import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HRView() {
  const [suggestions, setSuggestions] = useState([]);

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

  return (
    <div className="suggestions-container">
      <h1>HR View: Employee Suggestions</h1>
      <ul className="suggestions-list">
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion.suggestion}</li>
        ))}
      </ul>
    </div>
  );
}

export default HRView;
