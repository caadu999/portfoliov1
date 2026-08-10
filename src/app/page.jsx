"use client";
import styles from "@/app/page.module.css";
import Titulo from "@/components/TituloHome";
import Sobre from "@/components/Sobre";
import Cortina from "@/components/Cortina";

export default function Home() {
  return (
    <>
      <Cortina />
      <main className={styles.main}>
        <Sobre />
        <Titulo />
      </main>
    </>
  );
}
