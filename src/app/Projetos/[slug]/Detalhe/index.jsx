"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/app/Projetos/[slug]/Detalhe/detalhe.module.scss";
import Link from "next/link";

export default function DetalheCard({ projeto }) {
    const easeReveal = [0.16, 1, 0.3, 1];
  return (
    <div className={styles.container}>
      <div className={styles.sobre}>
        <motion.div
          className={styles.sobre__info}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2>
            Design <div className={styles.ponto}></div> Desenvolvimento
          </h2>
          <p>{projeto.desafios}</p>
          <p>{projeto.solucao}</p>
          <Link className={styles.button} href={projeto.website}>
            Ver Website
          </Link>
        </motion.div>
      </div>

      <motion.div className={styles.imageContainer}>
        <motion.div
          className={styles.image}
          initial={{ opacity: 0,
            scale: 0.9,
          }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, 
            scale: {
              duration: 0.5
            },
            ease: easeReveal}}
          viewport={{ once: true }}
        >
          <Image
            src={projeto.img[0]}
            alt={projeto.title}
            fill
            loading="lazy"
            quality={75}
            placeholder="blur"
          ></Image>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, 
            scale: {
              duration: 0.5
            },
            ease: easeReveal }}
          className={styles.image}
        >
          <Image
            src={projeto.img[1]}
            alt={projeto.title}
            fill
            loading="lazy"
            quality={75}
            placeholder="blur"
          ></Image>
        </motion.div>
        <motion.div
          className={styles.image}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, 
            scale: {
              duration: 0.5
            },
            ease: easeReveal }}
        >
          <Image
            src={projeto.img[2]}
            alt={projeto.title}
            fill
            loading="lazy"
            quality={75}
            placeholder="blur"
          ></Image>
        </motion.div>
      </motion.div>
    </div>
  );
}
