import Section from "../components/layout/Section";
import Button from "../components/ui/Button";
import profile from "../data/profile";

function Hero() {
  const handleScroll = (id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Section id="home" className="flex items-center">
      <div className="grid w-full items-center gap-12 md:grid-cols-2">
        {/* Left Content */}
        <div className="space-y-6">
          <p className="text-lg font-medium text-primary">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
            {profile.fullName}
          </h1>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-primary">
              {profile.title}
            </h2>

            <p className="text-text/70">
              {profile.roles.join(" • ")}
            </p>
          </div>

          <p className="max-w-xl leading-8 text-text/80">
            {profile.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button onClick={() => handleScroll("#projects")}>
              View Projects
            </Button>

            <Button
              variant="outline"
              onClick={() => handleScroll("#contact")}
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-3xl border-4 border-primary bg-primaryalt p-4 shadow-xl">
            <img
              src={profile.image}
              alt={profile.fullName}
              className="w-72 rounded-2xl object-cover lg:w-80"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Hero;