import React, { useContext } from "react";
import Logo from "../components/Logo";
import { Transition } from "@headlessui/react";

import { AnimationStateContext } from "../components/AnimationContext";

import styles from "../styles/Home.module.scss";

export default function Home() {
  const state = useContext(AnimationStateContext);
  const { isShowing } = state;

  return (
    <React.Fragment>
      <div className={`flex-1 relative overflow-hidden`}>
        <Logo />

        <Transition
          className={`${styles.graphContainer} absolute top-0 left-0 right-0 bottom-0`}
          appear={true}
          show={isShowing}
          enter="transform transition duration-1000 ease-in-out"
          enterFrom="translate-y-full"
          enterTo=""
          leave="transform transition duration-1000 ease-in-out"
          leaveFrom=""
          leaveTo="translate-y-full"
        >
          <div className={styles.graph}></div>
        </Transition>
      </div>
    </React.Fragment>
  );
}
