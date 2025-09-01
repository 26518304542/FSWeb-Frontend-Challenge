// src/components/Contact.jsx
import { contactData } from "../data/data";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";

export default function Contact() {


  const useTheme = () => useContext(ThemeContext);
  const useLanguage = () => useContext(LanguageContext);

  const { darkMode } = useTheme();
  const { lang } = useLanguage();

  const content = contactData[lang];


  return (
    <section className={darkMode ? "bg-black p-10 md:p-20 text-center text-white" : "bg-white p-10 md:p-20 text-center"}>
      <h2 className="text-5xl font-bold mb-6 text-purple-700">{content.contactHeader}</h2>
      <p className={darkMode ? "mb-6 text-white text-2xl" :"mb-6 text-[#120B39] text-2xl"}>
        {content.contactParagraph1} <br /> {content.contactParagraph2}
      </p>
      <a
        href={`mailto:${contactData.email}`}
        className="block font-semibold text-purple-600 mb-6"
      >
        {contactData.email}
      </a>
      <div className="flex justify-center gap-6 text-2xl text-purple-600">
        <a href={contactData.socials.twitter}></a>
        <a href={contactData.socials.github}></a>
        <a href={contactData.socials.linkedin}></a>
        <a href={contactData.socials.instagram}></a>
      </div>
    </section>
  );
}
