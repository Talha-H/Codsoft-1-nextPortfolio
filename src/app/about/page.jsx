"use client";
import Image from "next/image";
import React from "react";
import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "variants";

const About = () => {
  return (
    <div className="flex mx-5 px-9 justify-around items-center">
      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-1 w-[100%] mt-9  justify-center items-center"
      >
        <Image src={"/fiv.png"} alt="about-img" width={500} height={300}  />
      </motion.div>
      <div className="flex flex-col flex-1 mx-8 px-10 justify-center gap-8">
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <span className="flex tracking-wider text-2xl font-medium text-[#DC143C]">
            About me
          </span>
        </motion.div>
        <motion.h2
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-5xl font-bold text-white"
        >
          I&apos;m Website Developer
        </motion.h2>
        <motion.p
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-base font-light tracking-wide text-white"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum itaque
          at iusto dicta, repellendus cumque autem explicabo. Quia, blanditiis
          omnis perspiciatis quasi provident tempore porro?
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <button className="px-4 py-1 w-max border rounded-2xl text-white hover:bg-[#DC143C] hover:text-white transition-all duration-300">
            Hire me
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
