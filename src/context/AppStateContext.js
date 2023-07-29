import React, { createContext, useState, useContext } from "react";

export const AppContext = createContext();

const AppStateContext = ({ children }) => {
  const [active, setActive] = useState("Dashboard");
  const [isAdmin, setIsAdmin] = useState(true);
  const [isMentor, setIsMentor] = useState(false);
  return (
    <AppContext.Provider
      value={{
        active,
        setActive,
        isAdmin,
        isMentor,
        setIsMentor,
        setIsAdmin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppStateContext;
export const useAppStateContent = () => useContext(AppContext);
