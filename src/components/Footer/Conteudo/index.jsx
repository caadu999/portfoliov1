"use client";

import styles from "@/components/Footer/Conteudo/conteudo.module.scss";
import { anton } from "../../../../public/fonts/fonts";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Conteudo() {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className={styles.conteudo}>
      <h1 className={anton.className}>
        VAMOS <br /> TRABALHAR <br /> JUNTOS
      </h1>
      <div className={styles.formularioContainer}>
        <form className={styles.formulario}>
          <div>
            <input type="text" name="nome" id="nome" placeholder="Nome" />
            <input
              type="text"
              name="sobbrenome"
              id="sobrenome"
              placeholder="Sobrenome"
            />
          </div>
          <div className={styles.email}>
            <input type="text" name="email" id="email" placeholder="Email" />
          </div>
          <textarea name="text" id="text" placeholder="Mensagem"></textarea>
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
              <p>Enviar</p>
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
        </form>
      </div>
    </div>
  );
}
