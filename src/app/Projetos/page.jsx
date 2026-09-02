"use client";

import { easeInOut, motion } from "framer-motion";
import styles from "@/app/Projetos/projetos2.module.scss";
import { Works } from "./data";
import Modal from "@/app/Projetos/components/modal";
import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import ProjetosComponent from "@/app/Projetos/components/projetos";
import { useState } from "react";
import { druk } from "../../../public/fonts/fonts";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import localFont from "next/font/local";

const suisse = localFont({
  src: "../../../public/fonts/suisse-intl-mono.ttf",
});

const textos = [
  {
    position: 1,
    titulo: "O QUE EU FAÇO",
    texto:
      "Desenvolvo experiências digitais funcionais e bem construídas. Trabalho principalmente com React, Next.js e TypeScript nofront-end, além de Node.js, Python e APIs no back-end. Busco transformar ideias em produtos que sejam não apenas visualmente interessantes, mas também eficientes e fáceis de usar.",
  },
  {
    position: 2,
    titulo: "COMO EU TRABALHO",
    texto:
      "Gosto de transformar ideias em soluções claras e funcionais. Cuido dos detalhes da interface, das interações e da estrutura por trás de cada projeto, sempre buscando equilíbrio entre estética, performance e usabilidade.",
  },
  {
    position: 3,
    titulo: "O QUE ME MOVE",
    texto:
      "Estou sempre aprendendo, experimentando novas tecnologias e buscando maneiras melhores de construir para a web. Cada projeto é uma oportunidade de evoluir, testar ideias e transformar código em experiências que fazem sentido.",
  },
];

export default function Projetos() {
  const [textoAtivo, setTextoAtivo] = useState(0);
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <>
      <Loader />
      <Cursor />
      <div className={styles.main}>
        <div className={`${styles.titulo} ${druk.className} `}>
          <h1>PROJETOS</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.containerLeft}>
            <div className={styles.interacao}>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  className={styles.button}
                  onClick={() =>
                    setTextoAtivo(
                      (prev) => (prev - 1 + textos.length) % textos.length,
                    )
                  }
                >
                  <FaArrowLeft size={18} style={{ cursor: "pointer" }} />
                </button>
                <button
                  className={styles.button}
                  onClick={() =>
                    setTextoAtivo((prev) => (prev + 1) % textos.length)
                  }
                >
                  <FaArrowRight size={18} style={{ cursor: "pointer" }} />
                </button>
              </div>
              <p className={suisse.className}>
                {`0${textos[textoAtivo].position}/03`}
              </p>
            </div>
            <p
              className={`${suisse.className} ${styles.containerTitulo}`}
            >{`(${textos[textoAtivo].titulo})`}</p>
            <p className={styles.containerDescription}>
              {textos[textoAtivo].texto}
            </p>
          </div>
          <div className={styles.projetoContainer}>
            <div className={styles.projetoP}>
              <div className={styles.bola}></div>
              <p className={styles.subtitulo}>Projetos</p>
            </div>
            {Works.map((work, index) => (
              <ProjetosComponent
                key={work.id}
                work={work}
                index={index}
                modal={modal}
                setModal={setModal}
              />
            ))}
          </div>
        </div>
        <Modal modal={modal} work={Works} />
      </div>
    </>
  );
}
