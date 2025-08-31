import { skillsData } from "../data/data";

export default function Skills() {

  return (
    <section className="bg-white p-10 md:p-20 flex justify-center">
      <div className="flex justify-between items-center w-full max-w-5xl gap-10 p-10 border rounded-lg">
        <h2 className="text-3xl font-bold text-[#4832D3] -mt-80">Skills</h2>
        <div className="grid grid-cols-2 gap-x-100 gap-y-6 justify-between ">
          {skillsData.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
              <span className="text-sm font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

  );

}