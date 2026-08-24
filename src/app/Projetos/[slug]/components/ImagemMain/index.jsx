"use client";

import styles from "@/app/Projetos/[slug]/slug.module.scss";
import Image from "next/image";
import { motion, easeInOut } from "framer-motion";

export default function ImagemMain({ projeto }) {
  return (
    <motion.div
      initial={{
        y: 20,
      }}
      animate={{
        y: "0%",
      }}
      transition={{
        duration: 0.7,

        ease: easeInOut,
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
