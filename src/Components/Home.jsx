import HeroSection from "./Hero";
import MySkills from "./Skills";
import AboutMe from "./AboutMe";
import MyPortfolio from "./Portfolio";
import Footer from "./Footer";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      <Contact />
      <Footer />
    </>
  );
}
