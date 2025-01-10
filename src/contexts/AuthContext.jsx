import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("isAuthenticated") === "true"
  );

  const login = () => {
    sessionStorage.setItem("isAuthenticated", "true"); 
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem("isAuthenticated"); 
    setIsAuthenticated(false);
  };

  useEffect(() => {
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
