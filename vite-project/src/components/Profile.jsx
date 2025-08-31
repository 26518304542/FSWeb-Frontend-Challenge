import { profileData } from "../data/data";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";


export default function Profile() {


  const useLanguage = () => useContext(LanguageContext);
  const { lang } = useLanguage();

  const content = profileData[lang];

  return (
    <section className="bg-[#4731D3] text-white flex min-h-120">
      <div className=" flex flex-row justify-around ">
        {/* Basic Info */}
        <div className=" ml-50 mt-10">
          <h2 className="text-3xl font-bold mb-10 ">Profile</h2>
          <h3 className="w-90 text-4xl font-thin mb-4 ">Basic Information</h3>
          <ul className="flex flex-col space-y-2 gap-8 ">
            <li><strong className="text-[#CBF281]">{content.basic.birthdayStrong}</strong> {content.basic.birthday}</li>
            <li><strong className="text-[#CBF281]">{content.basic.cityStrong}</strong> {content.basic.city}</li>
            <li><strong className="text-[#CBF281]">{content.basic.educationStrong}:</strong> {content.basic.education}</li>
            <li><strong className="text-[#CBF281]">{content.basic.email}</strong> {content.basic.email}</li>
          </ul>
        </div>
        <div>
          <img src={profileData.img} className="w-70 h-70 mt-30 rounded-2xl" />
        </div>

        {/* About Me */}
        <div className="w-1/4 mr-50 mt-26">
          <h3 className="w-90 text-4xl font-thin mb-4">About Me</h3>
          <p className="leading-relaxed text-xl">{profileData.about1}</p><br />
          <p className="leading-relaxed text-xl">{profileData.about2}</p>
        </div>
      </div>
    </section>
  );
}