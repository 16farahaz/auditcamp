import React, { useState ,useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Routesnav from './Components/Routesnav';
import LoginPage from './Components/LoginPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    // Check authentication status from localStorage : so if i refresh my page i still in the same page 
    
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);


  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        {/* Redirect to login if not authenticated */}
        {!isAuthenticated ? (
          <Route path="/" element={<LoginPage setAuthenticated={handleLogin} />} />
        ) : (
          <>
            <Route path="/*" element={<Routesnav onLogout={handleLogout} />} />
            {/* Redirect root to dashboard or other authenticated route */}
            <Route path="/" element={<Navigate to="/dashboard" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
