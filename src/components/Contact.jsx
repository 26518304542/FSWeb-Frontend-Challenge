// src/components/Contact.jsx
import { contactData } from "../data/data";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import { sendMessage } from "../services/contactService";

export default function Contact() {


  const useTheme = () => useContext(ThemeContext);
  const useLanguage = () => useContext(LanguageContext);

  const { darkMode } = useTheme();
  const { lang } = useLanguage();

  const content = contactData[lang];




  return (
    <section className={darkMode ? "bg-[#252128] p-10 md:p-20 text-center text-white" : "bg-white p-10 md:p-20 text-center"}>
      <h2
        className={`${darkMode ? "text-[#8F88FF]" : "text-[#4731D3]"} text-5xl font-bold mb-6`}>{content.contactHeader}</h2>
      <p className={darkMode ? "mb-6 text-white text-2xl" : "mb-6 text-[#120B39] text-2xl"}>
        {content.contactParagraph1} <br /> {content.contactParagraph2}
      </p>
      <a

        href={`mailto:${contactData.email}`}
        className={`${darkMode ? "text-[#8F88FF]" : "text-[#4731D3]"} block font-semibold  mb-6`}
      >
        {contactData.email}
      </a>
      <div className={`${darkMode ? "text-[#8F88FF]" : "text-[#4731D3]"} flex justify-center gap-6 text-2xl `}>
        <a href={contactData.socials.twitter} onClick={() => sendMessage({ text: "Merhaba, bu bir test mesajıdır." })}>#</a>
        <a href={contactData.socials.github}>#</a>
        <a href={contactData.socials.linkedin}>#</a>
        <a href={contactData.socials.instagram}>#</a>
      </div>
    </section>
  );
}
