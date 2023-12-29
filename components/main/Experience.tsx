"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";

const Experience = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row gap-6 items-center justify-center px-5 mt-10 w-full z-[20]"
      id="experience"
    >
       <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 pb-6">
       Experience
      </h1>
 
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
      <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-2 text-xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
          Work at Tent  {" "} 2019 - 2020
           
          </span>
        </motion.div>
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] bg-gradient-to-r from-red-500 to-yellow-500 px-8 border border-[#7042f88b] opacity-[0.9]"
        >
          <h1 className="font-bold text-black text-sm">
            Front-End Developer @Tent .Inc
          </h1>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm text-gray-400 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
      </div>
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
     
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-2 text-xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
          Work at Turing Remote {" "} - 2020
          </span>
        </motion.div>
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] bg-gradient-to-r from-yellow-500  to-red-500 px-8 border border-[#7042f88b] opacity-[0.9]"
        >
          <h1 className="font-bold text-black text-sm">
            Front-End Developer @BeatClub Inc
          </h1>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm text-gray-400 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
       
      </div>
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-2 text-xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
          Work at Turing  {" "} till-date
          
          </span>
        </motion.div>
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] bg-gradient-to-r from-red-500 to-yellow-500 px-8 border border-[#7042f88b] opacity-[0.9]"
        >
          <h1 className="font-bold text-black text-sm">
            Fullstack Developer @betCaddy
          </h1>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm text-gray-400 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
     
      </div>
      
    </motion.div>
  );
};

export default Experience;
