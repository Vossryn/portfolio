import React from "react";

import Logo from "../components/Logo";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      <div className={`${styles.mainTitle}`}>
        <div className={`${styles.name} font-extrabold w-full text-7xl pb-4`}>Philip Flynt</div>
        <div className="text-base text-white w-full">Full Stack Developer</div>
      </div>
      <Logo className="h-32 w-32" />
    </div>
  );
}
