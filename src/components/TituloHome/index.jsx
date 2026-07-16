"use client";
import { great } from "../../../public/fonts/fonts";
import styles from "@/components/TituloHome/titulo.module.scss";
import { cormorant } from "../../../public/fonts/fonts";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const mondWest = localFont({
  src: "../../../public/fonts/ppmondwest-regular.otf",
});

const editorial = localFont({
  src: "../../../public/fonts/EditorialNew-Light.ttf",
});

export default function Titulo() {
  return (
    <main className={`${styles.main} ${editorial.className}`}>
      <h1 className={`${styles.texto} `}>
        <span className={`${great.className} ${styles.initial}`}>E</span>DUARDO{" "}
        <span className={`${great.className} ${styles.initial}`}>S</span>OUZA
      </h1>
      <h1 className={cormorant.className}>
        <span className={mondWest.className}>☼ FRONT-END ☀</span>
      </h1>
      <h1>REACT NEXT.JS TAILWIND</h1>
      <h1>JAVASCRIPT HTML CSS GIT</h1>
      <h1>FRAMER TYPESCRIPT</h1>
      <h1>
        BOOTSTRAP
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
