"use client";

import styles from "@/app/Projetos/[slug]/slug.module.scss";
import AnimatedText from "@/components/efeitoTexto/efeitoTexto";
import { easeInOut, motion } from "framer-motion";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { geist, anton } from "../../../../../../public/fonts/fonts";

export default function TituloInfo({ projeto }) {
  const easeReveal = [0.16, 1, 0.3, 1];

  const reveal = {
    hidden: { y: "100%" },
    visible: {
      y: "0%",
      transition: { duration: 0.7, ease: easeReveal },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      className={styles.container__title}
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      <div style={{ overflow: "hidden" }}>
        <motion.h1
          variants={reveal}

          className={anton.className}
        >
          {projeto.title}
        </motion.h1>
      </div>
      <div className={`${geist.className} ${styles.texto}`}>
        <div style={{ overflow: "hidden" }}>
          <motion.div variants={reveal}>{projeto.description}</motion.div>
        </div>

        <motion.div className={styles.lista}>
          {projeto.tecs.map((tec, i) => (
            <motion.div
              variants={reveal}

              key={tec}
              className={styles.tecs}
            >
              <div className={styles.ponto}></div>
              {tec}
            </motion.div>
          ))}
        </motion.div>
        <div className={styles.links}>
          <motion.div variants={reveal}>
            <Link
              className={styles.link}
              href={projeto.website}
              target="_blank"
            >
              Website <MdArrowOutward />{" "}
            </Link>
          </motion.div>

          <div style={{ overflow: "hidden", height: "100%" }}>
            <motion.div
              variants={reveal}

              className={styles.ponto}
            ></motion.div>
          </div>

          <motion.div variants={reveal}>
            <Link className={styles.link} href={projeto.github} target="_blank">
              GitHub <MdArrowOutward />{" "}
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
