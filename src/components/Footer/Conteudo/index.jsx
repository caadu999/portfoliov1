"use client";

import styles from "@/components/Footer/Conteudo/conteudo.module.scss";
import { anton } from "../../../../public/fonts/fonts";

import Form from "../Form";

export default function Conteudo() {
  return (
    <div className={styles.conteudo}>
      <h1 className={anton.className}>
        VAMOS <br /> TRABALHAR <br /> JUNTOS
      </h1>
      <Form />
    </div>
  );
}
