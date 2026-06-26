import Section from "../components/layout/Section";
import SectionTitle from "../components/ui/SectionTitle";
import skills from "../data/skills";

function Skills() {
  return (
    <Section id="skills" className="flex items-center">
      <div className="w-full">
        <SectionTitle
          title="My"
          highlight="Skills"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Technical Skills */}
          <div className="rounded-2xl border border-primary/20 p-8 shadow-sm">
            <h3 className="mb-6 text-2xl font-semibold text-primary">
              Technical Skills
            </h3>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {skills.technical.map((skill) => (
                <div
                  key={skill}
                  className="rounded-xl border border-primary/10 bg-primaryalt p-4 text-center font-medium transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div className="rounded-2xl border border-primary/20 p-8 shadow-sm">
            <h3 className="mb-6 text-2xl font-semibold text-primary">
              Other Skills
            </h3>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {skills.other.map((skill) => (
                <div
                  key={skill}
                  className="rounded-xl border border-primary/10 bg-primaryalt p-4 text-center font-medium transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Skills;