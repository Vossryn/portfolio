import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { Transition } from "@headlessui/react";
import { Menu } from "@headlessui/react";

import { AnimationDispatchContext, Actions, AnimationStateContext } from "../AnimationContext";

import Logo from "../Logo";

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
      className={`px-2 z-10 pt-3 pb-5 font-bold flex flex-row justify-between relative w-full md:w-9/12 mx-auto rounded-br-2xl rounded-bl-2xl border-blue-300 border-t-0 border-r-2 border-b-2 border-l-2 ${styles.bgHeader}`}
    >
      <Logo
        className={`w-10 h-10 hidden sm:block fill-current text-blue-200 z-20 ${
          showHeaderIcon ? "" : ""
        }`}
      />
      <nav className="z-20 flex-1 flex">
        {MenuItems.map((item, index) => (
          <a
            href={item.href}
            className={`inline-block ${styles.meButton} ${item.active ? styles.active : ""}`}
            key={index}
            onClick={(e) => handleClick(e, item)}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </header>
  );
}
