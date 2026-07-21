"use client";

import { useRef, useEffect } from "react";
import styles from "@/app/Projetos/projetos.module.scss";
import { anton } from "../../../public/fonts/fonts";
import { Works } from "./data";
import Card from "./_Card";

export default function Projetos() {
  return (
    <main className={styles.main}>
      <h1 className={`${anton.className} ${styles.title}`}>PROJETOS</h1>
      <div className={styles.body}>
        {Works.map((work) => (
          <Card key={work.id} work={work} />
        ))}
      </div>
    </main>
  );
}
