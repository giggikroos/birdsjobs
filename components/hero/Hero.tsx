'use client';

import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5, ease: 'easeIn' }}
      className=" flex flex-col mb-5 items-center mx-auto mt-0  ">
      <div className="mb-0">
        <h1 className="font-bold items-center   capitalize font-[Roboto] text-[50px] md:text-[60px] lg:text-[100px]  ">
          your dream job
        </h1>
      </div>
      <div className="mt-0">
        <h1 className="font-bold font-[roboto] text-5xl md:text-[60px] lg:text-[100px] text-gray-500">
          Awaits..
        </h1>
      </div>
    </motion.div>
  );
};
export default Hero;
