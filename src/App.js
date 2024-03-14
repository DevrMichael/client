import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login'; // Your login component
import HRView from './HRView'; // Component for HR to view suggestions
import SuggestionForm from './SuggestionForm'; // Component for users to submit suggestions

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const login = (authStatus, role) => {
    setIsAuthenticated(authStatus);
    setUserRole(role); // Lagrer brukerens rolle
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null); // Fjerner brukerens rolle ved utlogging
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            !isAuthenticated ? (
              <Navigate replace to="/login" />
            ) : userRole === 'hr' ? (
              <Navigate replace to="/hrview" />
            ) : (
              <SuggestionForm />
            )
          }
        />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route
          path="/hrview"
          element={
            isAuthenticated && userRole === 'hr' ? (
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
