"use client";
import styles from "@/app/page.module.css";
import { useEffect, useRef } from "react";

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
