import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import HRView from './HRView';
import SuggestionForm from './SuggestionForm';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const login = (authStatus, role) => {
    setIsAuthenticated(authStatus);
    setUserRole(role);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
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
              <SuggestionForm onLogout={logout} />
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
