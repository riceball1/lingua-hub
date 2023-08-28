import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

const PhaserGame = dynamic(() => import("../scenes/PhaserGame"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Lingua Hub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <PhaserGame />
      </div>
    </>
  );
}
