import { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

import PropTypes from "prop-types";

const ThemeLightDarkToggleContext = createContext();

function ThemeLightDarkToggleProvider({ children }) {
  ThemeLightDarkToggleProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const [isLightTheme, setIsLightTheme] = useLocalStorage(
    false,
    "isLightTheme"
  );

  useEffect(
    function () {
      if (isLightTheme) {
        document.documentElement.classList.add("theme-light");
        document.documentElement.classList.remove("theme-dark");
      } else {
        document.documentElement.classList.add("theme-dark");
        document.documentElement.classList.remove("theme-light");
      }
    },
    [isLightTheme]
  );

  function handleToggleTheme() {
    setIsLightTheme((isLight) => !isLight);
  }

  return (
    <ThemeLightDarkToggleContext.Provider
      value={{ isLightTheme, handleToggleTheme }}
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
  return context;
}

export { ThemeLightDarkToggleProvider, useThemeToggle };
