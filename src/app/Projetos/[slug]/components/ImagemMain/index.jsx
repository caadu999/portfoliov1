"use client";

import styles from "@/app/Projetos/[slug]/slug.module.scss";
import Image from "next/image";
import { motion, easeInOut } from "framer-motion";

export default function ImagemMain({ projeto }) {
  const easeReveal = [0.16, 1, 0.3, 1];
  return (
    <motion.div
      initial={{
        y: 20,
        scale: 0.9,
      }}
      animate={{
        y: "0%",
        scale: 1
      }}
      transition={{
        duration: 0.7,
        scale: {
          duration: 0.6
        },
        ease: easeReveal,
      }}
      className={styles.image}
    >
      <Image
        src={projeto.src}
        alt={projeto.title}
        fill
        loading="lazy"
        quality={75}
        placeholder="blur"
      ></Image>
    </motion.div>
  );
}
