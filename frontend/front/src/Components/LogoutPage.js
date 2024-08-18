import React, { useEffect } from 'react';
import { Navigate } from "react-router-dom";

const LogoutPage = ({ onLogout }) => {
  
  useEffect(() => {
    // Call the logout function passed down as a prop
    onLogout();
  }, [onLogout]);

  return <Navigate  to="/" />;
}

export default LogoutPage;
