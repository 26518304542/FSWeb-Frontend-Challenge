// src/context/ThemeContext.jsx
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { toastData } from "../data/data";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  const { lang } = useContext(LanguageContext);
  const content = toastData[lang];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      toast(content.darkOn);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      toast(content.darkOff);
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


