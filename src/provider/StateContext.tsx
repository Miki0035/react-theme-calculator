import { createContext, ReactNode, useContext, useState } from "react";
import { ContextProps } from "../../types";
const StateContext = createContext<ContextProps>({
  currentThemeIndex: 0,
  displayText: "",
  setCurrentThemeIndex: () => {},
  setDisplayText: () => {},
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  return (
    <StateContext.Provider
      value={{
        currentThemeIndex,
        setCurrentThemeIndex,
        displayText,
        setDisplayText,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
