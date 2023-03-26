import React from "react";
import Link from "next/link";

const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <h1
        className={`nav__item ${
          active ? "active" : ""
        }`}
      >
        {text}
      </h1>
    </Link>
  );
};

export default NavItem;