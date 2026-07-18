import Image from "next/image";
import styles from "@/app/Projetos/_Card/card.module.scss";
import { lazy, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

export default function Card({ work }) {
  const cursorRef = useRef(null);
  const [isHover, setIsHover] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  const handleMouseMove = (e) => {
    if (!cursorRef.current) return;

    cursorRef.current.style.left = e.clientX + "px";
    cursorRef.current.style.top = e.clientY + "px";
  };

  const handleMouseEnter = () => {
    cursorRef.current?.classList.add(styles.visible);
  };

  const handleMouseLeave = () => {
    cursorRef.current?.classList.remove(styles.visible);
  };

  return (
    <div className={styles.container}>
      <Link href={`/Projetos/${work.slug}`}>
        <motion.div
          onMouseEnter={() => setShowCursor(true)}
          onMouseLeave={() => setShowCursor(false)}
          onMouseMove={handleMouseMove}

          whileHover={{ scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeOut" }}

          className={styles.image}
        >
          <Image
            src={work.src}
            alt={work.nome}
            fill
            quality={80}
            loading="lazy"
            placeholder="blur"
          />
          <div className={styles.lista}>
            {work.tecs.map((tec) => (
              <div className={styles.tec} key={work.nome}>
                {tec}
              </div>
            ))}
          </div>
          
        </motion.div>
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>{work.title}</h1>
        <p>{work.data}</p>
      </div>
      <div
        className={`${styles.cursor}  ${showCursor ? styles.visible : ""}`}
        ref={cursorRef}
      >
        {" "}
        <p>
          VER PROJETO <MdArrowOutward />
        </p>
      </div>
    </div>
  );
}
