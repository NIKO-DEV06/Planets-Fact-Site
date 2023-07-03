"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: JSX.Element;
  menuIsOpen: boolean;
}

export const MenuReveal = ({ children, menuIsOpen }: Props) => {
  return (
    <motion.div
      className={`inset-0 fixed`}
      style={{ zIndex: 40 }}
      initial={{ y: -1000, opacity: 0 }}
      animate={{ y: menuIsOpen ? 0 : -1000, opacity: 100 }}
      transition={{
        duration: 1.5,
        type: "spring",
        damping: 20,
        stiffness: 200,
      }}
    >
      {children}
    </motion.div>
  );
};
