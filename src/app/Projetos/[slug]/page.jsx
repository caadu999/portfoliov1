import { Works } from "../data";
import styles from "@/app/Projetos/[slug]/slug.module.scss";
import { notFound } from "next/navigation";
import Loader from "@/components/Loader";
import ImageMain from "./components/ImagemMain";

import DetalheCard from "./Detalhe";
import TituloInfo from "@/app/Projetos/[slug]/components/Titulo";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const projeto = Works.find((p) => p.slug === slug);

  return {
    title: `Portfolio • ${projeto.title}`,
    description: projeto.description,
  };
}

export default async function ProjetoPage({ params }) {
  const { slug } = await params;

  const projeto = Works.find((p) => p.slug === slug);

  if (!projeto) {
    notFound();
  }

  return (
    <>
      <Loader />
      <main className={styles.container}>
        <TituloInfo projeto={projeto} />

        <ImageMain projeto={projeto} />

        <DetalheCard projeto={projeto} />
      </main>
    </>
  );
}
