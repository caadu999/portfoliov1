"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/app/Projetos/[slug]/Detalhe/detalhe.module.scss";

export default function DetalheCard({ projeto }) {
  return (
    <div className={styles.container}>
      <div className={styles.sobre}>
        <motion.div
          className={styles.sobre__image}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src={projeto.src}
            alt={projeto.title}
            fill
            quality={75}
            loading="lazy"
            placeholder="blur"
          ></Image>
        </motion.div>
        <motion.div
          className={styles.sobre__info}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2>
            Desafios <div className={styles.ponto}></div> Solução
          </h2>
          <p>{projeto.desafios}</p>
          <p>{projeto.solucao}</p>
        </motion.div>
      </div>
      <motion.div
        className={styles.image}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
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
    </div>
  );
}
