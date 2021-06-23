import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { AnimationDispatchContext, Actions, AnimationStateContext } from "../AnimationContext";

import Logo from "../LogoSvg";

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
    active: false,
  },
  {
    href: "/about",
    text: "About",
    active: false,
  },
  {
    href: "/projects",
    text: "Projects",
    active: false,
  },
  {
    href: "/contact",
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
      }, 0); //100
    }, 0); //900
  };

  useEffect(function () {
    setMenuItems(
      MenuItems.map((di) => {
        di.active = di.href === router.pathname;
        return di;
      })
    );
  }, []);

  return (
    <header
      className={`px-4 z-10 pt-3 pb-5 flex flex-row justify-center sm:justify-end rounded-br-2xl rounded-bl-2xl border-blue-300 border-t-0 border-b-2 sm:border-r-2 sm:border-l-2 ${styles.bgBlurTop}`}
    >
      <nav className="z-20">
        {MenuItems.map((item, index) => (
          <Link href={item.href} passHref key={index}>
            <a
              className={`inline-block ${styles.meButton} ${item.active ? styles.active : ""}`}
              onClick={(e) => handleClick(e, item)}
            >
              {item.text}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  );
}
