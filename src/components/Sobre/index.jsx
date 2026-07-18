import styles from "@/components/Sobre/sobre.module.scss";
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
      <p className={styles.texto}>
        EDUARDO SOUZA <br />
        Rio de Janeiro <br />
        Desenvolvedor Front-End <br />
        Open to Work
      </p>
      <div className={styles.links}>
        <motion.a
          href="https://www.linkedin.com/in/eduardo-souza-b59a1b285/"
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
        <br />
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
      </div>
    </>
  );
}
