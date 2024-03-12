import React, { useState } from 'react';
import Login from './Login'; // Your login component
import HRView from './HRView'; // Component for HR to view suggestions
import SuggestionForm from './SuggestionForm'; // Component for users to submit suggestions

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {/* Always render the SuggestionForm component for any user */}
      <SuggestionForm />

      {/* Conditionally render the Login or HRView component based on isAuthenticated state */}
      {!isAuthenticated ? <Login onLogin={setIsAuthenticated} /> : <HRView />}
    </div>
  );
}

export default App;
