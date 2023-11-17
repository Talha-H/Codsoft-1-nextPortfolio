"use client";
import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "variants";

const Skills = () => {
  return (
    <div className="flex flex-col mx-5 px-9 justify-around items-center text-white">
      <motion.h1
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="text-center text-6xl font-semibold tracking-wider mt-10"
      >
        What I do
      </motion.h1>
      <motion.p
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="text-center px-10 py-4"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rem
        repudiandae quisquam odio iusto neque ad ipsam est asperiores. Officia.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
        laudantium!.
      </motion.p>
      <div className="flex flex-col mt-5">
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex items-center justify-center flex-wrap gap-5 px-14 mt-8"
        >
          <div className="flex flex-col items-center cursor-pointer  bg-[#171717] w-max px-9 py-4 shadow-gray-800 shadow-xl rounded-xl ">
            <AiFillHtml5 className="text-[#ff5723] text-6xl font-semibold" />
            <span>HTML</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer  bg-[#171717] w-max px-9 py-4 shadow-gray-800 shadow-2xl rounded-xl ">
            <FaCss3Alt className="text-[#2195ef] text-6xl font-semibold" />
            <span>CSS</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer  bg-[#171717] w-max px-9 py-4 shadow-gray-800 shadow-2xl rounded-xl ">
            <SiTailwindcss className="text-[#15b8c5] text-6xl font-semibold" />
            <span>Tailwind</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer  bg-[#171717] w-max px-9 py-4 shadow-gray-800 shadow-2xl rounded-xl ">
            <SiJavascript className="text-[#e4ba42] text-6xl font-semibold" />
            <span>JavaScript</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer  bg-[#171717] w-max px-9 py-4 shadow-gray-800 shadow-2xl rounded-xl ">
            <IoLogoNodejs className="text-[#3e863d] text-6xl font-semibold" />
            <span>NodeJs</span>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex items-center justify-center flex-wrap gap-5 px-14 py-8"
        >
          <div className="flex flex-col items-center cursor-pointer  bg-[#171717] w-max px-9 py-4 shadow-gray-800 shadow-xl rounded-xl ">
            <FaReact className="text-[#58ceed] text-6xl font-semibold" />
            <span>ReactJs</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer  bg-[#171717] w-max px-9 py-4 shadow-gray-800 shadow-2xl rounded-xl ">
            <TbBrandNextjs className="text-[#05427c] text-6xl font-semibold" />
            <span>NextJs</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer  bg-[#171717] w-max px-9 py-4 shadow-gray-800 shadow-2xl rounded-xl ">
            <FaGithub className="text-[#ffff] text-6xl font-semibold" />
            <span>GitHub</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer  bg-[#171717] w-max px-9 py-4 shadow-gray-800 shadow-2xl rounded-xl ">
            <SiMongodb className="text-[#4DB33D] text-6xl font-semibold" />
            <span>MongoDB</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
