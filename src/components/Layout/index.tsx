import Head from "next/head";
import { Transition } from "@headlessui/react";

import Header from "./Header.component";
import Footer from "./Footer.component";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen justify-items-center align-middle bg-gray-900 text-white overflow-hidden">
      <Head>
        <title>Philip B Flynt Jr</title>
        <meta name="description" content="Philip Flynt, full stack developer online portfolio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Transition
        className="bg-gradient-to-r from-pink-400 to-gray-900 h-[2px]"
        appear={true}
        show={true}
        enter="transform duration-1000 ease-in-out"
        enterFrom="min-w-0 max-w-0"
        enterTo="min-w-full max-w-full"
        leave="transform duration-1000 ease-in-out"
        leaveFrom="min-w-full max-w-full"
        leaveTo="min-w-0 max-w-0"
      ></Transition>
      <main className="flex-1 flex flex-row">{children}</main>
      <Transition
        className="bg-gradient-to-r from-pink-400 to-gray-900 h-[2px]"
        appear={true}
        show={true}
        enter="transform duration-1000 ease-in-out"
        enterFrom="min-w-0 max-w-0"
        enterTo="min-w-full max-w-full"
        leave="transform duration-1000 ease-in-out"
        leaveFrom="min-w-full max-w-full"
        leaveTo="min-w-0 max-w-0"
      ></Transition>
      <Footer />
    </div>
  );
}
