"use client";
import styles from "@/app/page.module.css";


import Titulo from "@/components/TituloHome";
import Sobre from "@/components/Sobre";

export default function Home() {
  return (
    <main className={styles.main}>
      <Sobre />
      <Titulo />
    </main>
  );
}
