import styles from "@/components/Sobre/sobre.module.scss";

export default function Sobre() {
  return (
    <>
      <p className={styles.texto}>
        EDUARDO SOUZA <br />
        Rio de Janeiro <br />
        Desenvolvedor Front-End <br />
        Open to Work
      </p>
      <p className={styles.links}><a href="">LinkedIn</a> <br />
      <a href="">X</a>
      </p>
     
    </>
  );
}
