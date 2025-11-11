import Banner from "@/src/components/Banner";
import Description from "@/src/components/Description";
import Footer from "@/src/components/Footer";
import CHeader from "@/src/components/Header/page";
import Projects from "@/src/components/Project";
import WorkExperience from "@/src/components/WorkExperience";

export default function Home() {
  return (
    <main>
      <CHeader />
      <Banner />
      <Description />
      <WorkExperience />
      <Projects />
      <Footer />
    </main>
  );
}
