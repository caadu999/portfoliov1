import Link from "next/link";
import styles from "@/components/HeaderMobile/header.module.scss";

export default function HeaderMobile() {
  return (
    <header className={styles.container}>
      <Link href={"/Projetos"}>Projetos</Link>
      <Link href={"/"}>Home</Link>
    </header>
  );
}
