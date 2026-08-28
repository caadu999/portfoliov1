"use-client";
import styles from "@/app/Projetos/components/projetos/ProjetosComponent.module.scss";
import { motion } from "framer-motion";

export default function ProjetosComponent({ work, index, modal, setModal }) {
  return (
    <div
      onMouseEnter={() => setModal({ active: true, index: index })}
      onMouseLeave={() => setModal({ active: false, index: 0 })}
      className={styles.containerProjetos}
    >
      <div className={styles.container}>
        <h1>{work.title}</h1>
      </div>
    </div>
  );
}
