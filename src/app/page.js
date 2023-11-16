import Image from "next/image";
import Hero from "./Components/Hero";
import TopLeftImage from "./Components/TopLeftImg";
import About from "./about/page";

export default function Home() {
  return (
    <div className=" text-white">
      <Hero />
      <About/>
    </div>
  );
}
