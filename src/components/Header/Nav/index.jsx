import { links } from "./data";
import styles from "@/components/Header/Nav/nav.module.scss";
import { motion } from "framer-motion";

const variantes = {
  initial: {
    opacity: 0,
  },
  enter: (i) => ({
    opacity: 1,
    transition: { delay: 0.5 + i * 0.1 },
  }),
  exit: {
    opacity: 0,
  },
};

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => (
          <motion.div
            variants={variantes}
            custom={i}
            exit="exit"
            initial="initial"
            animate="enter"
            key={i}
          >
            <a href={link.href}>{link.title}</a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
