import Head from "next/head";
import styles from "..Home.module.css";
import PaginaInicial from "../componentes/PaginaInicial";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <paginainicial/> {/* Use o componente PaginaInicial aqui */} 
    </>
  );
}
