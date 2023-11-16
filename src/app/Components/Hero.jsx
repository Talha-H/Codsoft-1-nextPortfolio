"use client";
import React from "react";
import Image from "next/image";
import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "../../../variants";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="flex w-[100%] h-[90vh] px-9 justify-around items-center relative">
      <div className="text flex flex-col justify-center flex-[2] mx-8 px-10  text-white gap-8">
        <motion.h1
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-5xl font-bold tracking-wider"
        >
          Hello, I am Talha Husnain
        </motion.h1>
        <motion.p
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-base font-light"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          dignissimos voluptatum tempora nam laboriosam tempore!
        </motion.p>
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <Socials />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <button className="px-4 py-1 w-max border rounded-2xl hover:bg-[#DC143C] hover:text-white transition-all duration-300">
            Download CV
          </button>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1, ease: easeInOut }}
        className="img flex-1 w-[100%]"
      >
        <Image src="/fiv.png" alt="img" width={300} height={500} />
      </motion.div>
    </section>
  );
};

export default Hero;
