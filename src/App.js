import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login'; // Your login component
import HRView from './HRView'; // Component for HR to view suggestions
import SuggestionForm from './SuggestionForm'; // Component for users to submit suggestions

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false); // Update the isAuthenticated state
    // Optional: Redirect to login or another page
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SuggestionForm />} />

        <Route path="/login" element={<Login onLogin={setIsAuthenticated} />} />

        <Route
          path="/hrview"
          element={
            isAuthenticated ? (
              <HRView onLogout={logout} />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
