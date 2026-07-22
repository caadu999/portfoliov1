"use client";

import { motion } from "framer-motion";
import styles from "@/app/Projetos/projetos.module.scss";
import { anton } from "../../../public/fonts/fonts";
import { Works } from "./data";
import Card from "./_Card";

export default function Projetos() {
  return (
    <main className={styles.main}>
      <h1 className={`${anton.className} ${styles.title}`}>
        PROJETOS{" "}
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
      <div className={styles.body}>
        {Works.map((work) => (
          <Card key={work.id} work={work} />
        ))}
      </div>
    </main>
  );
}
