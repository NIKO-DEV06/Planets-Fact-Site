"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: JSX.Element;
  menuIsOpen: boolean;
}

export const MenuReveal = ({ children, menuIsOpen }: Props) => {
  return (
    <div className={`w-screen absolute `}>
      <motion.div
        initial={{ y: -1000 }}
        animate={{ y: menuIsOpen ? 0 : -1000 }}
        transition={{
          duration: 1.5,
          type: "spring",
          damping: 20,
          stiffness: 200,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
