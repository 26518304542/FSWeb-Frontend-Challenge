import { projectsData } from "../data/data";

export default function Projects() {

    return (
      <section className="bg-[#CBF281] p-10 md:p-20">
      <h2 className="text-5xl font-bold mb-10 text-[#4731D3] ml-50">Projects</h2>
      <div className="grid gap-10 mr-50 ml-50">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6 h-100"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full md:w-1/3 rounded-lg object-cover"
            />
            <div className="flex-1 mt-10">
              <h3 className="text-2xl font-bold mb-2 text-[#4338CA]">{project.title}</h3>
              <p className="mb-4 text-[#383838] w-120">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.links.site}
                  className="px-4 py-2 bg-white text-[#120B39] "
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  className="px-4 py-2 bg-white text-[#120B39] "
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