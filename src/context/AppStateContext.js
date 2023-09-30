import React, { createContext, useState, useContext, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const AppContext = createContext();
export const appUrl = "https://web3ladies-backend.herokuapp.com";
const AppStateContext = ({ children }) => {
  const [active, setActive] = useState("Dashboard");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMentor, setIsMentor] = useState(false);
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const oldToken = localStorage.getItem("tokenUser");
    if (oldToken) {
      setToken(JSON.parse(oldToken));
    } else {
      navigate("/login");
    }
  }, []);

  const handleToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem("tokenUser", JSON.stringify(newToken));
  };

  const userTokenDecodar = (userToken) => {
    const decodedToken = jwt_decode(userToken);
    //check if token is expired
    if (decodedToken.exp * 1000 < Date.now()) {
      console.log("token is expired");
      navigate("/login");
      localStorage.removeItem("tokenUser");
      setToken(null);
    } else {
      setUserData(decodedToken);

      navigate("/dashboard");

      if (decodedToken.profile === "teammember") {
        setIsAdmin(true);
      } else if (decodedToken.profile === "mentor") {
        setIsMentor(true);
      }
    }
  };

  useEffect(() => {
    userTokenDecodar(JSON.parse(localStorage.getItem("tokenUser")));
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      token ? token : JSON.parse(localStorage.getItem("tokenUser"))
    }`;
  }, []);
  return (
    <AppContext.Provider
      value={{
        active,
        setActive,
        isAdmin,
        isMentor,
        setIsMentor,
        setIsAdmin,
        token,
        handleToken,
        userData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppStateContext;
export const useAppStateContent = () => useContext(AppContext);
