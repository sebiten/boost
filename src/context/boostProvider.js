import { createContext, useState,  } from "react";

export const BoostContext = createContext();

export const BoostProvider = ({ children }) => {
const [isClicked, setIsClicked] = useState(false);

  return (
    <BoostContext.Provider value={{ 
      isClicked,
      setIsClicked,
     }}>
      {children}
    </BoostContext.Provider>
  );
}









