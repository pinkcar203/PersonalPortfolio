import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
        <section
          id="about"
          className="scroll-mt-20 px-6 py-24 text-[color:var(--text-secondary)] md:px-10"
        >
          <h2 className="font-heading text-2xl text-[color:var(--text-primary)]">
            About
          </h2>
          <p className="mt-4 text-sm">About content will go here.</p>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
