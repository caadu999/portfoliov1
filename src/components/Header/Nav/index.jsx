import { links, footerLinks } from "./data";
import styles from "@/components/Header/Nav/nav.module.scss";
import { motion } from "framer-motion";

const variantes = {
  initial: {
    opacity: 0,
    rotateX: 60,
    translateY: 70,
    translateX: -10,
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      opacity: { duration: 0.35 },
      ease: [0.215, 0.61, 0.355, 1],
      delay: 0.2 + i * 0.1,
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
};

const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
      delay: 0.5 + i * 0.1,
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] },
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
            <a href={link.href} {...(link.download && { download: true })}>
              {link.title}
            </a>
          </motion.div>
        ))}
      </div>
      <div className={styles.footer}>
        {footerLinks.map((link, i) => (
          <motion.a
            key={`f_${i}`}
            href={link.href}
            variants={slideIn}
            custom={i}
            exit="exit"
            initial="initial"
            animate="enter"
          >
            {link.title}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
