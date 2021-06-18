import React from "react";

import Logo from "../components/Logo";

export default function Home() {
  return (
    <div className="flex flex-row flex-wrap sm:flex-nowrap justify-center items-center flex-1">
      {/* <div className="relative"> */}
      <Logo className="fill-current text-yellow-500" width="100%" height="100%" />
      <div
        className={`flex-none z-10 text-transparent bg-clip-text bg-gradient-to-t from-gray-400 to-blue-500 text-center pb-5`}
      >
        <div className={`font-extrabold text-6xl sm:text-9xl`}>Philip Flynt</div>
        <div
          className={`text-transparent bg-clip-text bg-gradient-to-t from-gray-400 to-blue-500 text-center py-4`}
        >
          <div className="font-extrabold text-xl sm:text-3xl">Full Stack Developer</div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
