"use client";
import styles from "@/components/Header/header.module.scss";
import Button from "./button";
import { useState } from "react";
import { motion } from "framer-motion";
import Nav from "./Nav";

const variantes = {
  open: {
    width: 480,
    height: 650,
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: 100,
    height: 40,
    top: "0px",
    right: "0px",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (

      <div className={styles.header}>
    
        <motion.div
          className={styles.menu}
          variants={variantes}
          animate={isActive ? "open" : "closed"}
          initial="closed"
        >
          {isActive && <Nav />}
        </motion.div>
        <Button isActive={isActive} setIsActive={setIsActive} />
      </div>
  
  );
}
