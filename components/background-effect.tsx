"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function BackgroundEffect() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <>
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="absolute top-0 right-0 w-full md:w-3/4 h-screen bg-gradient-to-b from-[#85A67B] to-[#FFCBA4] rounded-bl-[80px] transform rotate-3 translate-x-1/4 -translate-y-1/4"
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 0.3 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none"
      >
        <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-[#85A67B] blur-3xl opacity-20" />
        <div className="absolute -left-32 top-1/2 w-96 h-96 rounded-full bg-[#FFCBA4] blur-3xl opacity-20" />
        <div className="absolute right-1/4 bottom-0 w-96 h-96 rounded-full bg-[#A6967D] blur-3xl opacity-20" />
      </motion.div>
    </>
  );
}