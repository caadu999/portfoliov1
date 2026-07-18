import { Works } from "../data";
import styles from "@/app/Projetos/[slug]/slug.module.scss";
import { anton } from "../../../../public/fonts/fonts";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { geist } from "../../../../public/fonts/fonts";

export default async function ProjetoPage({ params }) {
  const { slug } = await params;

  const projeto = Works.find((p) => p.slug === slug);

  if (!projeto) {
    notFound();
  }

  return (
    <main className={styles.container}>
      <div className={styles.container__title}>
        <h1 className={anton.className}>{projeto.title}</h1>
        <div className={`${geist.className} ${styles.texto}`}>
          <p>{projeto.description}</p>

          <div className={styles.lista}>
            {projeto.tecs.map((tec) => (
              <div key={projeto.title} className={styles.tecs}>
                <div className={styles.ponto}></div>
                {tec}
              </div>
            ))}
          </div>
          <div className={styles.links}>
            <Link
              className={styles.link}
              href={projeto.website}
              target="_blank"
            >
              Website <MdArrowOutward />{" "}
            </Link>
            <div className={styles.ponto}></div>
            <Link className={styles.link} href={projeto.github} target="_blank">
              GitHub <MdArrowOutward />{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src={projeto.src}
          alt={projeto.title}
          fill
          loading="lazy"
          quality={75}
          placeholder="blur"
        ></Image>
      </div>

      <div className={styles.sobre}>
        <div className={styles.sobre__image}>
          <Image
            src={projeto.src}
            alt={projeto.title}
            fill
            quality={75}
            loading="lazy"
            placeholder="blur"
          ></Image>
        </div>
        <div className={styles.sobre__info}>
          <h2>
            Desafios <div className={styles.ponto}></div> Solução
          </h2>
          <p>{projeto.desafios}</p>

          <p>{projeto.solucao}</p>
        </div>
      </div>
    </main>
  );
}
