"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "variants";

const Projects = () => {
  return (
    <div className="flex flex-col gap-8 text-white items-center justify-center mb-7">
      <motion.h1
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="text-6xl font-semibold tracking-wider mt-10 text-white text-center"
      >
        My Latest Projects
      </motion.h1>
      <motion.p variants={fadeIn("left", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"  className="text-center px-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos atque
        aliquam a autem doloribus eius laboriosam non soluta, velit maiores!
      </motion.p>
      <motion.div variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden" className="flex flex-wrap gap-6 justify-center items-center mt-4 space-x-10">
        <Link
          href={"#"}
          className="cursor-pointer hover:shadow-2xl hover:shadow-gray-500 transition-all duration-300 ml-10 hover:-translate-y-2"
        >
          <Image
            className="border-none rounded-xl"
            src={"/6.png"}
            alt="project_img"
            width={300}
            height={200}
          />
        </Link>
        <Link
          href={"#"}
          className="cursor-pointer hover:shadow-2xl hover:shadow-gray-600 transition-all duration-300 hover:-translate-y-2"
        >
          <Image
            className="border-none rounded-xl"
            src={"/5.png"}
            alt="project_img"
            width={300}
            height={200}
          />
        </Link>
        <Link
          href={"#"}
          className="cursor-pointer hover:shadow-2xl hover:shadow-gray-600 transition-all duration-300 hover:-translate-y-2"
        >
          <Image
            className="border-none rounded-xl"
            src={"/4.png"}
            alt="project_img"
            width={300}
            height={200}
          />
        </Link>
        <Link
          href={"#"}
          className="cursor-pointer hover:shadow-2xl hover:shadow-gray-600 transition-all duration-300 hover:-translate-y-2"
        >
          <Image
            className="border-none rounded-xl"
            src={"/3.png"}
            alt="project_img"
            width={300}
            height={200}
          />
        </Link>
        <Link
          href={"#"}
          className="cursor-pointer hover:shadow-2xl hover:shadow-gray-600 transition-all duration-300 hover:-translate-y-2 "
        >
          <Image
            className="border-none rounded-xl"
            src={"/2.png"}
            alt="project_img"
            width={300}
            height={200}
          />
        </Link>
        <Link
          href={"#"}
          className="cursor-pointer hover:shadow-2xl hover:shadow-gray-600 transition-all duration-300 hover:-translate-y-2"
        >
          <Image
            className="border-none rounded-xl"
            src={"/1.png"}
            alt="project_img"
            width={300}
            height={200}
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default Projects;
