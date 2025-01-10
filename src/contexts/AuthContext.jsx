import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Check sessionStorage on initial load to see if user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("isAuthenticated") === "true" // Get value from sessionStorage
  );

  const login = () => {
    sessionStorage.setItem("isAuthenticated", "true"); // Store authentication state in sessionStorage
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem("isAuthenticated"); // Remove from sessionStorage on logout
    setIsAuthenticated(false);
  };

  useEffect(() => {
    // Check the session storage when the component mounts
    const storedAuthState = sessionStorage.getItem("isAuthenticated");
    if (storedAuthState) {
      setIsAuthenticated(storedAuthState === "true");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
