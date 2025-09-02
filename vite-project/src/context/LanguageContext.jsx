import { createContext, useState } from "react";
import { toast } from "react-toastify";
import {toastData} from "../data/data";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");


  const toggleLang = () => {
    setLang((prev) => {
      const newLang = prev === "en" ? "tr" : "en";
      return newLang;
    });
  };

  toast(toastData[lang].langText);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};