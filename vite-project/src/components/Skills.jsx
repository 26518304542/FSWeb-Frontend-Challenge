import { skillsData } from "../data/data";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";

export default function Skills() {

    const useTheme = () => useContext(ThemeContext);
    const useLanguage = () => useContext(LanguageContext);
    const { darkMode } = useTheme();
    const { lang } = useLanguage();

    const content = skillsData[lang];

  return (
    <section className={darkMode ? "bg-black p-10 md:p-20 flex justify-center" : "bg-white p-10 md:p-20 flex justify-center"}>
      <div className="flex justify-between items-center w-full max-w-5xl gap-10 p-10 border rounded-lg">
        <h2 className="text-5xl font-bold text-[#4832D3] -mt-80">{content.skillScript}</h2>
        <div className="grid grid-cols-2 gap-x-50 gap-y-6 justify-between ">
          {skillsData.skills.map((skill, index) => (
            <div key={index} className="flex flex-row items-center gap-2 ">
              <img src={skill.icon} alt={skill.name} className="w-25 h-25 " />
              <span className="text-3xl font-semibold text-[#777777]">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

  );

}