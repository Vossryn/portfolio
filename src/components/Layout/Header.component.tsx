import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Transition } from "@headlessui/react";

import { AnimationDispatchContext, Actions } from "../AnimationContext";
import { AnimationStateContext } from "../AnimationContext";

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
      className={`bg-gray-900 h-[4.5rem] mb-1 pt-2 pr-4 font-bold z-10 flex flex-row justify-between ${
        !showHeaderIcon ? "pb-7" : ""
      }`}
    >
      <div className="ml-4">
        <Transition
          show={showHeaderIcon}
          enter="transform transition duration-1000 ease-in-out"
          enterFrom="scale-x-0 scale-y-0"
          enterTo="scale-x-100 scale-y-100"
          leave="transform transition duration-1000 ease-in-out"
          leaveFrom="scale-x-100 scale-y-100"
          leaveTo="scale-x-0 scale-y-0"
        >
          <Image src="/images/v-logo.svg" alt="Vossryn Logo" width={58} height={58} />
        </Transition>
      </div>
      <div>
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
      </div>
    </header>
  );
}
