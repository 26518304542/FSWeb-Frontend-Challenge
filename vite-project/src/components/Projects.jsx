import { projectsData } from "../data/data";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";

export default function Projects() {

  const useTheme = () => useContext(ThemeContext);
  const useLanguage = () => useContext(LanguageContext);
  const { darkMode } = useTheme();
  const { lang } = useLanguage();

  const content = projectsData[lang];

  return (
    <section className={darkMode ? "bg-[#1A210B] p-10 md:p-20" : "bg-[#CBF281] p-10 md:p-20"}>
      <h2 className={darkMode ? "text-5xl font-bold mb-10 text-[#CBF281] ml-50"  : "text-5xl font-bold mb-10 text-[#4731D3] ml-50"}>Projects</h2>
      <div className="grid gap-10 mr-50 ml-50">
        {content.map((project, index) => (
          <div
            key={index}
            className={darkMode ? "bg-[#2B2727] rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6 h-100" : "bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6 h-100"}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full md:w-1/3 rounded-lg object-cover"
            />
            <div className="flex-1 mt-13 ">
              <h3 className={darkMode ? "text-3xl font-bold mb-2 text-[#C1BAED]" :"text-3xl font-bold mb-2 text-[#4338CA]"}>{project.title}</h3>
              <p className={darkMode ? "mb-4 text-white w-120" : "mb-4 text-[#383838] w-120"}>{project.description}</p>
              <div className="flex flex-row gap-2 mt-5">
                <button className={darkMode ? "rounded-xl bg-[#8173DA] w-26" : "rounded-xl bg-[#4731D3] w-26"}>react</button>
                <button className={darkMode ? "rounded-xl bg-[#8173DA] w-26" : "rounded-xl bg-[#4731D3] w-26"}>redux</button>
                <button className={darkMode ? "rounded-xl bg-[#8173DA] w-26" : "rounded-xl bg-[#4731D3] w-26"}>vercel</button>
              </div>
              <div className="flex gap-4 mt-5">
                <a
                  href={project.links.site}
                  className={darkMode ? "px-4 py-2 text-[#CBF281] "  : "px-4 py-2 bg-white text-[#120B39] "}
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  className={darkMode ? "px-4 py-2 text-[#CBF281] "  : "px-4 py-2 bg-white text-[#120B39] "}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}