import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  //el localstorage se actualiza automáticamente

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  function login(newToken) {
    setToken(newToken);
  }

  function logOut() {
    setToken("");
  }

  return (
    <AuthContext.Provider value={{ token, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
