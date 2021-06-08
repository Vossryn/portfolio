import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Transition } from "@headlessui/react";

import { AnimationDispatchContext, Actions, AnimationStateContext } from "../AnimationContext";

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
  const state = useContext(AnimationStateContext);
  const { showHeaderIcon } = state;

  const handleClick = (e: React.MouseEvent, item: MenuItem) => {
    e.preventDefault();
    dispatch({ type: Actions.ToggleShowing, payload: false });
    if (item.href !== "/") {
      dispatch({ type: Actions.ShowHeaderIcon, payload: true });
    }
    setMenuItems(
      MenuItems.map((di) => {
        di.active = di.href === item.href;
        return di;
      })
    );
    setTimeout(() => {
      router.push(item.href);
      setTimeout(() => {
        dispatch({ type: Actions.ToggleShowing, payload: true });
        if (item.href === "/") {
          dispatch({ type: Actions.ShowHeaderIcon, payload: false });
        }
      }, 100);
    }, 900);
  };

  return (
    <header
      className={`px-4 z-10 pt-3 pb-5 font-bold flex flex-row justify-end relative w-9/12 mx-auto ${styles.bgHeader}`}
    >
      <div className="z-20">
        <button
          className={`${styles.meButton} sm:hidden`}
          onClick={() => dispatch({ type: Actions.ToggleShowing, payload: true })}
        >
          Toggle On
        </button>
        <button
          style={{ marginRight: "1em" }}
          className={`${styles.meButton} sm:hidden`}
          onClick={() => dispatch({ type: Actions.ToggleShowing, payload: false })}
        >
          Toggle Off
        </button>
        {MenuItems.map((item, index) => (
          <a
            href={item.href}
            className={`${styles.meButton} ${item.active ? styles.active : ""}`}
            key={index}
            onClick={(e) => handleClick(e, item)}
          >
            {item.text}
          </a>
        ))}
      </div>
    </header>
  );
}
