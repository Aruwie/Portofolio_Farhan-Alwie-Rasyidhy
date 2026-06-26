import Section from "../components/layout/Section";
import SectionTitle from "../components/ui/SectionTitle";
import profile from "../data/profile";

function Contact() {
  return (
    <Section id="contact" className="flex items-center justify-center">
      <div className="w-full text-center">
        <SectionTitle title="Contact" highlight="Me" />

        <p className="mx-auto mb-10 max-w-xl text-text/70">
          Feel free to reach out if you want to collaborate or just say hello.
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-lg">
          <a
            href={profile.social.whatsapp}
            className="transition hover:text-primary"
            target="_blank"
          >
            WhatsApp
          </a>

          <a
            href={profile.social.email}
            className="transition hover:text-primary"
          >
            Email
          </a>

          <a
            href={profile.social.github}
            className="transition hover:text-primary"
            target="_blank"
          >
            GitHub
          </a>

          <a
            href={profile.social.linkedin}
            className="transition hover:text-primary"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>

        {/* Footer */}
        <div className="mt-12 text-sm text-text/50">
          © {new Date().getFullYear()} Farhan Alwie. All rights reserved.
        </div>
      </div>
    </Section>
  );
}

export default Contact;