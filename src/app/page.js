import Hero from "./Components/Hero";
import About from "./about/page";
import Skills from "./skills/page";

export default function Home() {
  return (
    <div className=" text-white">
      <Hero />
      <About/>
      <Skills/>
    </div>
  );
}
