"use client";
import styles from "@/app/page.module.css";
import Titulo from "@/components/TituloHome";
import Sobre from "@/components/Sobre";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <>
      <Loader />
      <main className={styles.main}>
        <Sobre />
        <Titulo />
      </main>
    </>
  );
}
