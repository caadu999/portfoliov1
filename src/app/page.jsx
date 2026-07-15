"use client";
import styles from "@/app/page.module.css";
import { useEffect } from "react";
import Cursor from "@/components/Cursor";
import Titulo from "@/components/TituloHome";
import Sobre from "@/components/Sobre";
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className={styles.main}>
      <Sobre />
      <Titulo />

      <Cursor />
    </main>
  );
}
