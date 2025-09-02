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
    <section
      className={`${darkMode ? "bg-[#171043]" : "bg-[#4731D3]"
        } text-white flex min-h-[30rem] p-10`}
    >
      <div className="flex flex-col md:flex-row justify-around items-center md:items-start gap-10 w-full max-w-6xl mx-auto">

        {/* Basic Info */}
        <div className="text-center md:text-left md:ml-10 md:mt-10">
          <h2 className="text-[#CBF281] -mt-10 text-3xl sm:text-4xl md:text-5xl font-bold mb-7">
            {content.basic.profileHeading2}
          </h2>
          <h3 className="w-full text-2xl sm:text-3xl md:text-4xl font-thin mb-4">
            {content.basic.basicInformationHeading2}
          </h3>
          <ul className="flex flex-col space-y-2 gap-8 font-thin ">
            <li><strong className="text-[#CBF281]">{content.basic.birthdayStrong}</strong> {content.basic.birthday}</li>
            <li><strong className="text-[#CBF281]">{content.basic.cityStrong}</strong> {content.basic.city}</li>
            <li><strong className="text-[#CBF281]">{content.basic.educationStrong}:</strong> {content.basic.education}</li>
            <li><strong className="text-[#CBF281]">{content.basic.roleStrong}</strong> {content.basic.role}</li>
          </ul>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={profileData.img}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[340px] md:h-[280px] mt-5 md:mt-20 rounded-2xl object-cover"
            alt="Profile"
          />
        </div>

        {/* About Me */}
        <div className="w-1/3 mt-17 -mr-10">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-thin mb-4">
            {content.basic.aboutMeHeading3}
          </h3>
          <p className="text-lg">
            {profileData.about1}
          </p>
          <br />
          <p className="text-lg ">
            {profileData.about2}
          </p>
        </div>
      </div>
    </section>

  );
}