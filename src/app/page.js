import Hero from "./Components/Hero";
import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className=" text-white my-10">
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
