import HeroSection from "../Pages/Hero";
import MySkills from "../Pages/Skills";
import AboutMe from "../Pages/AboutMe";
import MyPortfolio from "../Pages/Portfolio";
import Footer from "../Pages/Footer";
import Contact from "../Pages/Contact";

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
