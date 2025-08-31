import { projectsData } from "../data/data";

export default function Projects() {

    return (
       <section className="bg-[#CBF281] p-10 md:p-20">
      <h2 className="text-3xl font-bold mb-10 text-[#4731D3]">Projects</h2>
      <div className="grid gap-10">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full md:w-1/3 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.links.site}
                  className="px-4 py-2 bg-purple-600 text-white rounded shadow"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  className="px-4 py-2 bg-gray-800 text-white rounded shadow"
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