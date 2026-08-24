"use client";
import { great } from "../../../public/fonts/fonts";
import styles from "@/components/TituloHome/titulo.module.scss";
import { cormorant } from "../../../public/fonts/fonts";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import useMousePosition from "@/utils/useMousePosition";
import { useState } from "react";

const mondWest = localFont({
  src: "../../../public/fonts/ppmondwest-regular.otf",
});

const editorial = localFont({
  src: "../../../public/fonts/EditorialNew-Light.ttf",
});

export default function Titulo() {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 15;

  return (
    <motion.main
      initial={{ opacity: 0.4 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.8 }}

      className={`${styles.main} ${editorial.className}`}
    >
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}

        transition={{
          type: "tween",
          ease: "backOut",
        }}
      >
        <motion.div
          className={styles.container}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h1 className={`${styles.texto} `}>
            <span className={`${great.className} ${styles.initial}`}>E</span>
            DUARDO{" "}
            <span className={`${great.className} ${styles.initial}`}>S</span>
            OUZA
          </h1>
          <h1 className={cormorant.className}>
            <span className={mondWest.className}>☼ FRONT-END ☀</span>
          </h1>
          <h1>REACT NEXT.JS TAILWIND</h1>
          <h1>JAVASCRIPT HTML CSS GIT</h1>
          <h1>FRAMER TYPESCRIPT</h1>
          <h1>
            NODEJS
            <motion.span
              style={{ color: "#141414" }}
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
        </motion.div>
      </motion.div>

      <div className={styles.body}>
        <h1 className={`${styles.texto} `}>
          <span className={`${great.className} ${styles.initial}`}>E</span>
          DUARDO{" "}
          <span className={`${great.className} ${styles.initial}`}>S</span>OUZA
        </h1>
        <h1 className={cormorant.className}>
          <span className={mondWest.className}>☼ FRONT-END ☀</span>
        </h1>
        <h1>REACT NEXT.JS TAILWIND</h1>
        <h1>JAVASCRIPT HTML CSS GIT</h1>
        <h1>FRAMER TYPESCRIPT</h1>
        <h1>
          NODEJS
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
      </div>
    </motion.main>
  );
}
