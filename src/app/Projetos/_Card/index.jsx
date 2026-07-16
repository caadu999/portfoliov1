import { h1 } from "framer-motion/client";
import { Works } from "../data";
import Image from "next/image";
import styles from "@/app/Projetos/_Card/card.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

export default function Card({ work }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <div className={styles.lista}>
          {work.tecs.map((tec) => (
            <div className={styles.tec} key={work.nome}>
              {tec}
            </div>
          ))}
        </div>
        <button
          onMouseEnter={(e) => setIsHover(true)}
          onMouseLeave={(e) => setIsHover(false)}
          className={styles.button}
          type="submit"
        >
          <motion.div
            className={styles.circle}
            animate={{
              scale: isHover ? 60 : 1,
            }}
            transition={{
              ease: "easeIn",
              duration: 0.3,
            }}
          ></motion.div>
          <motion.div
            animate={{
              x: isHover ? -8 : 8,
              color: isHover ? "#FFFFFF" : "black",
            }}
            className={styles.texto}
          >
            <p>Ver mais</p>
          </motion.div>
          <motion.div
            animate={{
              x: isHover ? 0 : 70,
            }}
            className={styles.iconContainer}
          >
            <FaArrowRight size={16} className={styles.icon} />
          </motion.div>
        </button>
      </div>
      <h1>{work.title}</h1>
      <p>{work.data}</p>
    </div>
  );
}
