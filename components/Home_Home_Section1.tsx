import React from "react";
import { motion, useTransform } from "framer-motion";
import Link from "next/link";

const Section1 = ({ scrollYProgress }: { scrollYProgress: any }) => {
  return (
    <motion.div className="sticky top-0 h-screen text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]">
      <div className="flex flex-col items-center justify-center relative h-[100vh] w-full z-[900]">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-full flex items-center justify-center"
        >
          <div className="relative flex w-full flex-col items-center justify-center">
            <img
              src="./pdf/Exodiaa.PNG"
              alt="Exodiaa"
              className="w-[90%] md:w-[70%] max-w-4xl h-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Section1;
