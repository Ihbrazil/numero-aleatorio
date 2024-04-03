import Head from "next/head";
import styles from "@/styles/Home.module.css";
import App from "@/App";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Olá Mundo</h1>
      <App/>
    </>
  );
}
