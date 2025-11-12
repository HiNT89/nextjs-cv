import Banner from "@/src/components/Banner";
import Description from "@/src/components/Description";
import Footer from "@/src/components/Footer";
import CHeader from "@/src/components/Header/page";
import Projects from "@/src/components/Project";
import Skill from "@/src/components/Skill";
import WorkExperience from "@/src/components/WorkExperience";

export default function Home() {
  return (
    <main className="pt-20">
      <CHeader />

      {/* Home Section */}
      <section id="home">
        <Banner />
      </section>

      {/* About Section */}
      <section id="about">
        <Description />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <WorkExperience />
      </section>

      {/* Skills Section - Optional, you can add ID if needed */}
      <Skill />

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}
