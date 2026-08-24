import styles from "@/components/Sobre/sobre.module.scss";
import AnimatedText from "@/components/efeitoTexto/efeitoTexto.jsx";
import { motion } from "framer-motion";

export default function Sobre() {
  const variantes = {
    rest: {
      scaleX: 0,
      originX: 0,
    },
    hover: {
      scaleX: 1,
      originX: 0,
    },
  };
  return (
    <>
      <AnimatedText className={styles.texto}>
        EDUARDO SOUZA <br />
        Rio de Janeiro <br />
        Desenvolvedor Front-End <br />
        Open to Work
      </AnimatedText>

      <AnimatedText as="div" stagger={0.2} className={styles.links}>
        <motion.a
          href="https://www.linkedin.com/in/eduardosdev"
          target="_blank"
          initial="rest"
          whileHover="hover"
        >
          LinkedIn
          <motion.div
            className={styles.underline}
            variants={variantes}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          ></motion.div>
        </motion.a>{" "}
        <motion.a
          href="https://github.com/caadu999/"
          target="_blank"
          initial="rest"
          whileHover="hover"
        >
          Github
          <motion.div
            className={styles.underline}
            variants={variantes}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          ></motion.div>
        </motion.a>
        <motion.a href="/Projetos" initial="rest" whileHover="hover">
          Projetos
          <motion.div
            className={styles.underline}
            variants={variantes}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          ></motion.div>
        </motion.a>
      </AnimatedText>
    </>
  );
}
