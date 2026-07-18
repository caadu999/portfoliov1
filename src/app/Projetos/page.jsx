"use client";

import { useRef, useEffect } from "react";
import styles from "@/app/Projetos/projetos.module.scss";
import { anton } from "../../../public/fonts/fonts";
import { Works } from "./data";
import Card from "./_Card";

export default function Projetos() {
  const loader = useRef(null);
  const path = useRef(null);
  const initialCurve = 200;
  const duration = 600;
  let start;

  const animate = (timestamp) => {
    if (start === undefined) {
      start = timestamp;
    }

    const elapsed = timestamp - start;

    loader.current.style.top =
      easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";

    if (elapsed < duration) {
      requestAnimationFrame(animate);
    }
  };

  const easeOutQuad = (time, start, end, duration) => {
    return -end * (time /= duration) * (time - 2) + start;
  };

  const loaderHeight = () => {
    const loaderBounds = loader.current.getBoundingClientRect();
    return loaderBounds.height;
  };

  const setPath = (curve) => {
    const width = window.innerWidth;
    const height = loaderHeight();

    path.current.setAttributeNS(
      null,
      "d",
      `M0 0
    L${width} 0
    L${width} ${height}
    Q${width / 2} ${height - curve} 0 ${height}
    L0 0`,
    );
  };

  useEffect(() => {
    setPath(initialCurve);

    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 500);
  }, []);

  useEffect(() => {
    setPath(initialCurve);
    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 500);
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={`${anton.className} ${styles.title}`}>PROJETOS</h1>
      <div className={styles.body}>
        {Works.map((work) => (
          <Card key={work.title} work={work} />
        ))}
      </div>

      <div ref={loader} className={styles.loader}>
        <svg>
          <path ref={path}></path>
        </svg>
      </div>
    </main>
  );
}
