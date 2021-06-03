import { useContext } from "react";
import { Transition } from "@headlessui/react";

import { AnimationStateContext } from "../AnimationContext";

import styles from "./Logo.module.scss";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  const state = useContext(AnimationStateContext);
  const { isShowing } = state;
  return (
    <Transition
      className={`mx-auto md:mt-32 ${styles.LogoWrapper} ${className}`}
      appear={true}
      show={isShowing}
      enter="transform transition duration-1000 ease-in-out"
      enterFrom="scale-x-0 scale-y-0"
      enterTo="scale-x-100 scale-y-100"
      leave="transform transition duration-1000 ease-in-out"
      leaveFrom="scale-x-100 scale-y-100"
      leaveTo="scale-x-0 scale-y-0"
    >
      <h1 data-text="Philip B Flynt Jr">Philip B Flynt Jr</h1>
      <h2 data-text="Full Stack Developer">Full Stack Developer</h2>
    </Transition>
  );
}
