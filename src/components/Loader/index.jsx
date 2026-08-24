"use client";

import { useRef, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./loader.module.scss";

export default function Loader() {
  const loader = useRef(null);
  const path = useRef(null);
  const pathname = usePathname();
  const initialCurve = 20;
  const duration = 600;

  useLayoutEffect(() => {
    let start;
    let rafId;

    const setPath = (curve) => {
      path.current.setAttributeNS(
        null,
        "d",
        `M0,0
        L100,0
        L100,100
        Q50,${100 - curve} 0,100
        L0,0`,
      );
    };

    const easeOutQuad = (time, s, end, dur) =>
      -end * (time /= dur) * (time - 2) + s;

    const animate = (timestamp) => {
      if (start === undefined) start = timestamp;
      const elapsed = timestamp - start;
      if (!loader.current) return;

      const height = loader.current.getBoundingClientRect().height;
      loader.current.style.top =
        easeOutQuad(elapsed, 0, -height, duration) + "px";

      if (elapsed < duration) {
        rafId = requestAnimationFrame(animate);
      } else {
        loader.current.style.top = -height + "px";
        loader.current.style.pointerEvents = "none";
        loader.current.style.visibility = "hidden";
      }
    };

    loader.current.style.visibility = "visible";
    loader.current.style.pointerEvents = "auto";
    loader.current.style.top = "0px";
    start = undefined;

    setPath(initialCurve);
    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [pathname]);

  return (
    <div ref={loader} className={styles.loader}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <path ref={path} d="M0,0 L100,0 L100,100 Q50,85 0,100 L0,0" />
      </svg>
    </div>
  );
}
