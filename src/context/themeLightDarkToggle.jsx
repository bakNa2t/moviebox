import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

import PropTypes from "prop-types";

const ThemeLightDarkToggleContext = createContext();

function ThemeLightDarkToggleProvider({ children }) {
  ThemeLightDarkToggleProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const [isLightMode, setIsLightMode] = useLocalStorage(false, "isLightMode");

  function handleToggleThemeMode() {
    setIsLightMode((isLightMode) => !isLightMode);
  }

  return (
    <ThemeLightDarkToggleContext.Provider
      value={{ isLightMode, handleToggleThemeMode }}
    >
      {children}
    </ThemeLightDarkToggleContext.Provider>
  );
}

function useThemeToggle() {
  const context = useContext(ThemeLightDarkToggleContext);

  if (context === undefined)
    throw new Error(
      "ThemeLightDarkToggleContext was used outside of ThemeLightDarkToggleProvider"
    );
}

export { ThemeLightDarkToggleProvider, useThemeToggle };
