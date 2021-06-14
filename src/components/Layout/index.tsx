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
    <div
      className={`flex flex-col min-h-screen justify-items-center align-middle bg-gray-900 text-white overflow-hidden ${styles.starsContainer}`}
    >
      <Head>
        <title>Philip Flynt</title>
        <meta name="description" content="Philip Flynt, full stack developer online portfolio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-1 flex flex-row">
        <div className={`flex-none ${styles.stars}`}></div>
        <div className={`flex-none ${styles.stars2}`}></div>
        <div className={`flex-none ${styles.stars3}`}></div>
        {children}
      </main>
      <Footer />
    </div>
  );
}
