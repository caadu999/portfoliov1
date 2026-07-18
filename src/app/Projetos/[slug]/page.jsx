import { Works } from "../data";
import styles from "@/app/Projetos/[slug]/slug.module.scss";
import { anton } from "../../../../public/fonts/fonts";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default async function ProjetoPage({ params }) {
  const { slug } = await params;

  const projeto = Works.find((p) => p.slug === slug);

  if (!projeto) {
    notFound();
  }

  return (
    <main className={styles.container}>
      <h1 className={anton.className}>{projeto.title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        fugit, adipisci ducimus, porro cupiditate reprehenderit fuga magnam
        voluptatibus magni sit expedita, facere aperiam reiciendis alias? Nisi
        accusantium aliquam ipsa vitae?
      </p>

      <p>(ANO) 2026</p>
      <p>(TECNOLOGIAS) </p>
      <Link href="">
        Website <MdArrowOutward />{" "}
      </Link>
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
    </main>
  );
}
