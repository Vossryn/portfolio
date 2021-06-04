import React, { useContext } from "react";
import Logo from "../components/Logo";
import { Transition } from "@headlessui/react";

import { AnimationStateContext } from "../components/AnimationContext";

import styles from "../styles/Home.module.scss";

export default function Home() {
  const state = useContext(AnimationStateContext);
  const { isShowing } = state;

  return (
    <div className="flex-1 relative overflow-hidden">
      <Logo />

      <Transition
        className={`absolute mx-auto${isShowing ? " w-full h-full" : ""}`}
        appear={true}
        show={isShowing}
        enter="transform duration-1000 ease-in-out"
        enterFrom="min-w-0 max-w-0"
        enterTo="min-w-full max-w-full"
        leave="transform duration-1000 ease-in-out"
        leaveFrom="min-w-full max-w-full"
        leaveTo="min-w-0 max-w-0"
      >
        <div className={styles.graph}></div>
      </Transition>
    </div>
  );
}
