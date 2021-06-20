import React from "react";

import styles from "./Container.module.scss";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`p-6 flex flex-row justify-center rounded-2xl border-blue-300 border-2 ${styles.bgBlurTop} ${className}`}
    >
      {children}
    </div>
  );
}
