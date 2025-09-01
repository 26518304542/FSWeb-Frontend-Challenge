import { headerData } from "../data/data";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const useTheme = () => useContext(ThemeContext);
  const useLanguage = () => useContext(LanguageContext);

  const { darkMode, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLanguage();

  const content = headerData[lang];

  return (
    <header className="w-full">
      <section className="relative flex flex-col md:flex-row min-h-[640]  mx-auto">
        {/* Sol taraf - #4731D3 */}
        <div className={darkMode? "flex-1 bg-[#171043] text-white px-8 md:px-20 py-12 md:py-20 flex flex-col"  :"flex-1 bg-[#4731D3] text-white px-8 md:px-20 py-12 md:py-20 flex flex-col"}>
          {/* üst bar */}
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-xl font-bold text-[#C4F82A] -mt-6">
              {content.name}
            </h1>
            <div className="flex gap-6 items-center transition -mt-10 -mr-4">
              <button
                onClick={toggleLang}
                className="text-sm font-medium text-[#C4F82A] hover:text-[#C4F82A] transition"
              >
                {lang === "en" ? "TÜRKÇE'YE GEÇ" : "SWITCH TO EN"}
              </button>

            </div>
          </div>

          {/* içerik */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="text-center md:text-left max-w-lg">
              <h2 className="text-4xl md:text-5xl font-bold leading-snug text-[#C4F82A]">
                {content.title}
              </h2>
              <p className="mt-6 text-lg text-gray-200">{content.description}</p>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href={content.github}
                target="_blank"
                rel="noreferrer"
                className={darkMode ? "flex items-center gap-2 bg-[#252128] text-black font-medium px-5 py-2 rounded shadow hover:bg-gray-100 border-white border" : "flex items-center gap-2 bg-white text-black font-medium px-5 py-2 rounded shadow hover:bg-gray-100"}
              >
                <i className="fa-brands fa-github"></i> Github
              </a>
              <a
                href={content.linkedin}
                target="_blank"
                rel="noreferrer"
                className={darkMode ? "flex items-center gap-2 bg-[#252128] text-[#0A66C2] font-medium px-5 py-2 rounded shadow hover:bg-gray-100 border-white border" : "flex items-center gap-2 bg-white text-[#0A66C2] font-medium px-5 py-2 rounded shadow hover:bg-gray-100"}
              >
                <i className="fa-brands fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Sağ taraf - #C4F82A */}
        <div className={darkMode ? "basis-[432px] md:w-1/2 bg-[#211F0B] flex items-left justify-center py-10 md:py-0 flex-col gap-15" : "basis-[432px] md:w-1/2 bg-[#CBF281] flex items-left justify-center py-10 md:py-0 flex-col gap-15"}>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-sm font-medium text-[#4731D3] "
          >
            <div className="w-10 h-5 flex items-center bg-gray-200 rounded-full p-1">
              <div
                className={`bg-[#4731D3] w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${darkMode ? "translate-x-5" : ""
                  }`}
              ></div>
            </div>
            <span className="uppercase">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </span>

          </button>
          <img
            src={content.profileImg}
            alt="profile"
            className="w-60 h-60 md:w-80 md:h-80 -ml-40 rounded-xl object-cover shadow-lg"
          />
        </div>
      </section>
    </header>
  );
}
