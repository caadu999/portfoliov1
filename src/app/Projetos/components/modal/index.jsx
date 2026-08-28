import styles from "@/app/Projetos/components/modal/modal.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Modal({ modal, work }) {
  const { active, index } = modal;

  return (
    <motion.div
      initial={{
        scale: 0,
      }}

      animate={{
        scale: modal.active ? 1 : 0,
      }}

      transition={{
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1],
      }}
      className={styles.modalContainer}
    >
      <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
        {work.map((work, index) => (
          <div
            className={styles.modal}
            key={work.id}
            style={{ backgroundColor: work.bg }}
          >
            <Image src={work.src} width={350} height={300} alt={work.title} />
          </div>
        ))}
      </div>
      <div className={styles.background}></div>
    </motion.div>
  );
}
