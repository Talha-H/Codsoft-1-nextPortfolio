"use client";
import React from "react";

import { BsArrowRight } from "react-icons/bs";
import { SiNamecheap } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail, MdEmail } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "variants";

const Contact = () => {
  return (
    <div className=" text-white h-[90vh]">
      <div className="container mx-auto  text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px] gap-12 ">
          <motion.h2
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-6xl  font-semibold tracking-wider mt-10 text-white text-center "
          >
            Let&rsquo;s <span className="text-accent">Connect</span>
          </motion.h2>
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-10 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <div className="px-3 py-2 rounded-xl border outline-none flex items-center gap-3">
                <SiNamecheap />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input  bg-transparent border-none outline-none  "
                />
              </div>
              <div className="px-3 py-2 rounded-xl border outline-none flex items-center gap-3">
                <FaPhoneAlt />
                <input
                  type="tel"
                  placeholder="Phone No"
                  className="input  bg-transparent border-none outline-none  "
                />
              </div>
            </div>
            <div className="px-3 py-2 rounded-xl border outline-none flex items-center gap-3">
              <MdEmail />
              <input
                type="email"
                placeholder="Enter Your email"
                className="input  bg-transparent border-none outline-none  "
              />
            </div>
            <div className="px-3 py-2 rounded-xl border outline-none flex  gap-3">
              <div className="py-2">
                <MdOutlineMessage />
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Message"
                className="border-none outline-none bg-transparent"
              ></textarea>
            </div>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 py-1 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-[#DC143C] group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&rsquo;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
