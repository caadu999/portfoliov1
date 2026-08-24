"use client";
import { useState, useEffect } from "react";
import styles from "@/components/Cortina/cortina.module.scss";
import { motion } from "framer-motion";

export default function Cortina() {
  const [showIntro, setShowIntro] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = setTimeout(() => setIsLeaving(true), 1800);
    const removeTimer = setTimeout(() => setShowIntro(false), 2300);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!showIntro) return null;

  const texto = "obrigado por visitar!";
  const textoArray = texto.split("");

  return (
    <motion.div
      initial={{
        clipPath: "inset(0 0 0% 0)",
      }}

      animate={{
        clipPath: isLeaving ? "inset(0 0 100% 0)" : "inset(0 0 0% 0)",
      }}

      transition={{
        ease: [0.76, 0, 0.24, 1],
        duration: 0.5,
      }}

      className={styles.cortina}
    >
      <motion.div
        className={styles.texto}
        initial={{
          opacity: 0,
          y: 16,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.6,
        }}
      >
        eduardo souza
      </motion.div>
    </motion.div>
  );
}
