import Section from "../components/layout/Section";
import SectionTitle from "../components/ui/SectionTitle";
import experience from "../data/experience";

function Experience() {
  return (
    <Section id="experience" className="flex items-center">
      <div className="w-full">
        <SectionTitle title="Work" highlight="Experience" />

        <div className="space-y-6">
          {experience.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-primary/20 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-primary">
                {item.role}
              </h3>

              <p className="mt-1 font-medium">
                {item.company}
              </p>

              <p className="text-text/70">
                {item.location}
              </p>

              <p className="mt-2 text-sm text-text/60">
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Experience;