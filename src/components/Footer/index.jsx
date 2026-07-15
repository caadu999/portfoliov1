import styles from "@/components/Footer/footer.module.scss";
import Conteudo from "./Conteudo";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.conteudo}>
        <Conteudo />
      </div>
    </footer>
  );
}
