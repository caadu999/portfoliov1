"use-client";
import styles from "@/app/Projetos/components/projetos/ProjetosComponent.module.scss";
import { motion } from "framer-motion";
import { poppins } from "../../../../../public/fonts/fonts";
import Link from "next/link";

export default function ProjetosComponent({ work, index, modal, setModal }) {
  return (
    <Link
      href={`/Projetos/${work.slug}`}
      onMouseEnter={() => setModal({ active: true, index: index })}
      onMouseLeave={() => setModal({ active: false, index: 0 })}
      className={`${styles.containerProjetos} ${poppins.className}`}
    >
      <motion.div
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: 1,
        }}
        transition={{
          duration: 0.8,
        }}

        className={styles.linha}
      ></motion.div>
      <motion.div
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className={styles.linha2}
      ></motion.div>
      <motion.div
        initial={{
          opacity: 0,
          rotateX: 60,
          translateY: 70,
          translateX: -10,
        }}
        animate={{
          opacity: 1,
          rotateX: 0,
          translateY: 0,
          translateX: 0,
        }}
        transition={{
          duration: 0.65,
          ease: [0.215, 0.61, 0.355, 1],
          delay: 0.2 + index * 0.1,
        }}

        className={styles.container}
      >
        <h1>{work.title}</h1>
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          clipPath:
            modal.active && modal.index === index
              ? "inset(0% 0% 0% 0%)"
              : "inset(50% 0% 50% 0%)",
        }}
        transition={{
          duration: 0.8,
          ease: [0.36, 1, 0.36, 1.2],
        }}

        className={styles.background}
      >
        <h1>{work.title}</h1>
      </motion.div>
    </Link>
  );
}
