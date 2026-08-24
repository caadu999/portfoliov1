"use client";

import { useEffect } from "react";
import { useAnimate } from "framer-motion";
import SplitType from "split-type";
import styles from "@/components/efeitoTexto/efeitotextoword.module.scss";

export default function AnimatedText({
  children,
  as: Tag = "p",
  className,
  stagger = 0.1,
}) {
  const [scope, animate] = useAnimate();
  const easeReveal = [0.16, 1, 0.3, 1];

  useEffect(() => {
    const split = new SplitType(scope.current, { types: "words" });

    const inners = split.words.map((word) => {
      const inner = document.createElement("span");
      inner.style.display = "inline-block";
      inner.innerHTML = word.innerHTML;
      word.innerHTML = "";
      word.appendChild(inner);
      return inner;
    });

    animate(
      inners,
      { y: ["100%", "0%"] },
      { duration: 0.8, delay: (i) => i * stagger, ease: easeReveal },
    );

    return () => split.revert();
  }, []);

  return (
    <Tag
      ref={scope}
      className={`${styles.animatedText} ${className || ""}`}
      style={{ fontKerning: "none" }}
    >
      {children}
    </Tag>
  );
}
