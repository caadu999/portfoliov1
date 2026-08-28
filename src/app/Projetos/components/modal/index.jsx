import styles from "@/app/Projetos/components/modal/modal.module.scss";
import Image from "next/image";

export default function Modal({ modal, work }) {
  const { active, index } = modal;

  return (
    <div className={styles.modalContainer}>
      <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
        {work.map((work, index) => (
          <div className={styles.modal} key={work.id}>
            <Image src={work.src} width={350} height={300} alt={work.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
