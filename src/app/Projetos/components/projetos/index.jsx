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
      <div className={styles.container}>
        <h1>{work.title}</h1>
      </div>
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
