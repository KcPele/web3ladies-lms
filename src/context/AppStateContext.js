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
    try {
      const oldToken = localStorage.getItem("tokenUser");
      if (oldToken || token) {
        setToken(JSON.parse(oldToken));
        userTokenDecodar(token || JSON.parse(oldToken));
        axios.defaults.headers.common["Authorization"] = `Bearer ${
          token ? token : JSON.parse(oldToken)
        }`;
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  }, []);

  const handleToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem("tokenUser", JSON.stringify(newToken));
  };

  const userTokenDecodar = (userToken) => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  };

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
        setToken,
        userTokenDecodar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppStateContext;
export const useAppStateContent = () => useContext(AppContext);
