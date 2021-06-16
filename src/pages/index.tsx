import React from "react";

import Logo from "../components/Logo";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex-1 grid justify-center items-center relative">
        <div
          className={`text-transparent bg-clip-text bg-gradient-to-t from-gray-800 to-white text-center py-5`}
        >
          <div className={`${styles.name} font-extrabold text-6xl`}>Philip Flynt</div>
        </div>
        <div
          className={`text-transparent bg-clip-text bg-gradient-to-t from-gray-800 to-white text-center pb-4`}
        >
          <div className="font-extrabold text-xl">Full Stack Developer</div>
        </div>
        <Logo
          className="z-20 fill-current text-white text-opacity-50 absolute"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
