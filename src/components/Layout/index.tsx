import Head from "next/head";
import { Transition } from "@headlessui/react";

import Header from "./Header.component";
import Footer from "./Footer.component";

import styles from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col flex-1 min-h-screen justify-center bg-gray-900 text-white relative sm:w-9/12 mx-auto selection:text-blue-800 selection:bg-yellow-500">
      <Head>
        <title>Philip Flynt</title>
        <meta name="description" content="Philip Flynt, full stack developer online portfolio." />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-1 flex flex-col z-10 px-4 py-8">{children}</main>
      <Footer />
      <div className={styles.starsContainer}>
        <div className={`z-0 absolute ${styles.stars}`}></div>
        <div className={`z-0 absolute ${styles.stars2}`}></div>
        <div className={`z-0 absolute ${styles.stars3}`}></div>
      </div>
    </div>
  );
}
