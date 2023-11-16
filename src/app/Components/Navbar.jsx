import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" flex py-4 px-3 mx-5 text-white font-semibold justify-around items-center">
   
      <div>
        <h1 className="text-2xl font-mono">Talha</h1>
      </div>
      <div className="flex justify-center items-center gap-7">
        <Link href={"/"} className="hover:underline hover:underline-offset-8 hover:text-[#DC143C] transition-all duration-300 ">Home</Link>
        <Link href={"/about"} className="hover:underline hover:underline-offset-8 hover:text-[#DC143C] transition-all duration-300 ">About me</Link>
        <Link href={"/skills"} className="hover:underline hover:underline-offset-8 hover:text-[#DC143C] transition-all duration-300 ">Skills</Link>
        <Link href={"/projects"} className="hover:underline hover:underline-offset-8 hover:text-[#DC143C] transition-all duration-300 ">Projects</Link>
        <Link href={"/contact"} className="hover:underline hover:underline-offset-8 hover:text-[#DC143C] transition-all duration-300 ">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
