import { motion } from "framer-motion";
import styles from "@/components/Footer/Form/form.module.scss";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

export default function Form() {
  const [isHover, setIsHover] = useState(false);
  const [name, setName] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/contato", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message, sobrenome }),
    });

    if (res.ok) {
      setName("");
      setEmail("");
      setMessage("");
      setSobrenome("");
    }
  }

  return (
    <div className={styles.formularioContainer}>
      <form className={styles.formulario} onSubmit={handleSubmit}>
        <div className={styles.formulario__titulo}>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            name="nome"
            id="nome"
            placeholder="Nome"
            required
          />
          <input
            onChange={(e) => setSobrenome(e.target.value)}
            value={sobrenome}
            type="text"
            name="sobbrenome"
            id="sobrenome"
            placeholder="Sobrenome"
            required
          />
        </div>
        <div className={styles.email}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          name="text"
          value={message}
          id="text"
          placeholder="Mensagem"
        ></textarea>
        <button
          onMouseEnter={(e) => setIsHover(true)}
          onMouseLeave={(e) => setIsHover(false)}
          className={styles.button}
          type="submit"
        >
          <motion.div
            className={styles.circle}
            animate={{
              scale: isHover ? 60 : 1,
            }}
            transition={{
              ease: "easeIn",
              duration: 0.3,
            }}
          ></motion.div>
          <motion.div
            animate={{
              x: isHover ? -8 : 8,
              color: isHover ? "#FFFFFF" : "#000000",
            }}
            className={styles.texto}
          >
            <p>Enviar</p>
          </motion.div>
          <motion.div
            animate={{
              x: isHover ? 0 : 70,
            }}
            className={styles.iconContainer}
          >
            <FaArrowRight size={16} className={styles.icon} />
          </motion.div>
        </button>
      </form>
    </div>
  );
}
