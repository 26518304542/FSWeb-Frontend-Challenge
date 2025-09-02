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
    <section
      className={`${darkMode ? "bg-[#1A210B]" : "bg-white"
        } p-10 md:p-20 flex justify-center md:min-h-[0] min-h-[70rem] mx-auto`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl gap-10 p-10  ">

        {/* Başlık */}
        <h2
          className={`${darkMode ? "text-[#CBF281]" : "text-[#4832D3]"
            } md:-mt-78 text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left -ml-10`}
        >
          {content.skillScript}
        </h2>

        {/* Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-50 gap-y-6 justify-between md:justify-items-start">
          {skillsData.skills.map((skill, index) => (
            <div key={index} className="flex flex-row items-center gap-2">
              <img src={skill.icon} alt={skill.name} className="w-25 h-25" />
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#777777]">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>


  );

}