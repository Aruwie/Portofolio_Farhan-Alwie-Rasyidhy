import Section from "../components/layout/Section";
import SectionTitle from "../components/ui/SectionTitle";
import projects from "../data/projects";

function Projects() {
  return (
    <Section id="projects" className="flex items-center">
      <div className="w-full">
        <SectionTitle title="My" highlight="Projects" />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-primary/20 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden bg-primaryalt">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-4 p-6">
                <h3 className="text-xl font-semibold text-primary">
                  {project.title}
                </h3>

                <p className="text-text/70">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  className="inline-block rounded-lg bg-primary px-4 py-2 text-white transition hover:opacity-90"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Projects;