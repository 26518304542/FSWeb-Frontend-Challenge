import { profileData } from "../data/data";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";


export default function Profile() {


  const useLanguage = () => useContext(LanguageContext);
  const useTheme = () => useContext(ThemeContext);
  const { darkMode } = useTheme();
  const { lang } = useLanguage();

  const content = profileData[lang];

  return (
    <section className={darkMode ? "bg-[#171043] text-white flex min-h-120" :"bg-[#4731D3] text-white flex min-h-120"}>
      <div className=" flex flex-row justify-around ">
        {/* Basic Info */}
        <div className=" ml-70 mt-20">
          <h2 className={darkMode ? " text-[#CBF281] text-5xl font-bold mb-7 " : "text-[#CBF281] text-5xl font-bold mb-7 "}>{content.basic.profileHeading2}</h2>
          <h3 className="w-90 text-4xl font-thin mb-4 ">{content.basic.basicInformationHeading2}</h3>
          <ul className="flex flex-col space-y-2 gap-8 ">
            <li><strong className="text-[#CBF281]">{content.basic.birthdayStrong}</strong> {content.basic.birthday}</li>
            <li><strong className="text-[#CBF281]">{content.basic.cityStrong}</strong> {content.basic.city}</li>
            <li><strong className="text-[#CBF281]">{content.basic.educationStrong}:</strong> {content.basic.education}</li>
            <li><strong className="text-[#CBF281]">{content.basic.roleStrong}</strong> {content.basic.role}</li>
          </ul>
        </div>
        <div>
          <img src={profileData.img} className="w-85 h-70 mt-38 rounded-2xl -ml-8" />
        </div>

        {/* About Me */}
        <div className="w-1/4 mr-50 mt-38">
          <h3 className="w-90 text-4xl font-thin mb-4">{content.basic.aboutMeHeading3}</h3>
          <p className="leading-relaxed text-xl">{profileData.about1}</p><br />
          <p className="leading-relaxed text-xl">{profileData.about2}</p>
        </div>
      </div>
    </section>
  );
}