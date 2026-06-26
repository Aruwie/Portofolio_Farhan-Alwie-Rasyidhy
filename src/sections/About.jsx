import Section from "../components/layout/Section";
import SectionTitle from "../components/ui/SectionTitle";
import profile from "../data/profile";

function About() {
  return (
    <Section id="about" className="flex items-center">
      <div className="w-full">
        <SectionTitle
          title="About"
          highlight="Me"
        />

        {/* About Description */}
        <div className="mx-auto mb-14 max-w-3xl">
          <p className="text-center leading-8 text-text/80">
            {profile.about}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Education */}
          <div className="rounded-2xl border border-primary/20 p-8 shadow-sm">
            <h3 className="mb-5 text-2xl font-semibold text-primary">
              Education
            </h3>

            <p className="font-semibold text-lg">
              {profile.education.university}
            </p>

            <p className="mt-2 text-text/70">
              {profile.education.degree}
            </p>

            <p className="text-text/70">
              {profile.education.year}
            </p>

            <p className="mt-4 font-medium">
              GPA {profile.education.gpa}
            </p>
          </div>

          {/* Current Focus */}
          <div className="rounded-2xl border border-primary/20 p-8 shadow-sm">
            <h3 className="mb-5 text-2xl font-semibold text-primary">
              Current Focus
            </h3>

            <ul className="space-y-4">
              {profile.focus.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-primary"></span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;