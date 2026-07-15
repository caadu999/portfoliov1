import styles from "@/components/Header/button/button.module.scss";
import { motion } from "framer-motion";
export default function Button({ isActive, setIsActive }) {
  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className={styles.button}
    >
      <motion.div className={styles.slider}
      animate={{top: isActive ? "-100%" : "0"}}
      transition={{duration: 0.5, ease: [0.75, 0, 0.24, 1]} }
      >
        <div className={styles.el}>
          <Texto texto="MENU"/>
         
        </div>
        <div className={styles.el}>
          <Texto texto="FECHAR"/>
          
        </div>
      </motion.div>
    </div>
  );
}


function Texto({texto}) {
  return (
    <div className={styles.texto}>
      <p>{texto}</p>
      <p>{texto}</p>
    </div>
  )
}
