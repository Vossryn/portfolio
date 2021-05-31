import React, { useState, useContext } from "react";
import { useRouter } from "next/router";

import { AnimationDispatchContext, Actions } from "../AnimationContext";

import styles from "./Layout.module.scss";

interface MenuItem {
  href: string;
  text: string;
  icon?: React.Component;
  active: boolean;
}

const menuItems: MenuItem[] = [
  {
    href: "/",
    text: "Home",
    active: true,
  },
  {
    href: "about",
    text: "About",
    active: false,
  },
  {
    href: "#",
    text: "Projects",
    active: false,
  },
  {
    href: "#",
    text: "Contact",
    active: false,
  },
];

export default function Header() {
  const router = useRouter();
  const dispatch = useContext(AnimationDispatchContext);
  const [MenuItems, setMenuItems] = useState(menuItems);

  const handleClick = (e: React.MouseEvent, item: MenuItem) => {
    e.preventDefault();
    dispatch({ type: Actions.ToggleShowing, payload: false });
    setTimeout(() => {
      setMenuItems(
        MenuItems.map((di) => {
          di.active = di.href === item.href;
          return di;
        })
      );
      dispatch({ type: Actions.ToggleShowing, payload: true });
      router.push(item.href);
    }, 1000);
  };

  return (
    <header className="bg-gray-900 mb-1 pt-2 pb-7 pr-4 text-right font-bold z-10">
      <button onClick={() => dispatch({ type: Actions.ToggleShowing, payload: true })}>
        Toggle On
      </button>
      <button onClick={() => dispatch({ type: Actions.ToggleShowing, payload: false })}>
        Toggle Off
      </button>
      {MenuItems.map((item, index) => (
        <a
          href={item.href}
          key={index}
          onClick={(e) => handleClick(e, item)}
          className={`${styles.neonButton} ${item.active ? styles.active : ""}`}
        >
          {item.text}
        </a>
      ))}
    </header>
  );
}
