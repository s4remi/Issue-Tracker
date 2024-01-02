import { link } from "fs";
import Link from "next/link";
import React from "react";
import { VscDebugConsole } from "react-icons/vsc";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex mb-5 px-5 items-center space-x-12 border-8 h-14">
      <Link href="/">
        <VscDebugConsole />
      </Link>
      <ul className="flex  px-6 mb-1 items-center space-x-12 border-b ">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-zinc-700 hover:text-sky-700"
          >
            {item.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
