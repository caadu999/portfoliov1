"use client";
import { great } from "../../../public/fonts/fonts";
import styles from "@/components/TituloHome/titulo.module.scss";
import { cormorant } from "../../../public/fonts/fonts";
import { vt } from "../../../public/fonts/fonts";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Titulo() {
  return (
    <main className={styles.main}>
      <h1 className={`${styles.texto} ${cormorant.className}`}>
        <span className={great.className}>E</span>DUARDO{" "}
        <span className={great.className}>S</span>OUZA
      </h1>
      <h1 className={cormorant.className}>
        <span className={vt.className}>&lt; &gt; DESENVOLVEDOR FRONT-END</span>
      </h1>
      <h1>REACT NEXT.JS TAILWIND</h1>
      <h1>JAVASCRIPT HTML CSS GIT</h1>
      <h1>FRAMER TYPESCRIPT</h1>
      <h1>
        BOOTSTRAP <span className={vt.className}>&lt; &gt;</span>
        <motion.span
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            times: [0, 0.5, 0.5, 1],
            ease: "linear",
          }}
        >
          _
        </motion.span>
      </h1>
    </main>
  );
}
