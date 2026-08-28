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

export default function Projetos() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <>
      <Loader />
      <Cursor />
      <div className={styles.main}>
        <div className={`${styles.titulo} ${druk.className} `}>
          <h1>MEUS PROJETOS</h1>
          <p>
            Uma seleção de projetos que desenvolvi, unindo front-end e back-end
            para criar experiências digitais completas e funcionais.
          </p>
        </div>
        <div>
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
        <Modal modal={modal} work={Works} />
      </div>
    </>
  );
}
