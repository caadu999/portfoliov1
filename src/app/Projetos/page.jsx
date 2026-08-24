"use client";

import { easeInOut, motion } from "framer-motion";
import styles from "@/app/Projetos/projetos.module.scss";
import { anton } from "../../../public/fonts/fonts";
import { Works } from "./data";
import Card from "./_Card";
import Loader from "@/components/Loader";

export default function Projetos() {
  const easeReveal = [0.16, 1, 0.3, 1];
  return (
    <>
      <Loader />
      <main className={styles.main}>
        <motion.div
          style={{
            overflow: "hidden",
          }}
        >
          <motion.h1
            initial={{
              y: "100%",
            }}
            animate={{
              y: "0%",
            }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: easeReveal,
            }}

            className={`${anton.className} ${styles.title}`}
          >
            PROJETOS{" "}
          </motion.h1>
        </motion.div>
        <div className={styles.body}>
          {Works.map((work, i) => (
            <motion.div
              className={styles.cardContainer}
              initial={{
                y: 80,
                opacity: 0,
              }}
              animate={{
                y: [40, -10, 5, 0],
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
                delay: i * 0.1,
                ease: easeInOut,
              }}
              key={work.id}
            >
              <Card work={work} />
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}
