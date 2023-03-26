import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "../NavItem";
import logo from '../../../public/images/logo.svg'

const MENU_LIST = [
  { text: "Ínicio", href: "/" },
  { text: "Quem somos", href: "/" },
  { text: "O que fazemos", href: "/" },
  { text: "Catálogo", href: "/" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
            <img src={logo} alt="Logo Marcava" />
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
