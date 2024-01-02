"use client";
import Link from "next/link";
import React from "react";
import { VscDebugConsole } from "react-icons/vsc";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const NavBar = () => {
  //using usePath hook for knowing what link is active
  const currentPath = usePathname();
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
            className={classNames({
              "text-sky-900": item.href === currentPath,
              "text-zinc-700 ": item.href !== currentPath,
              "hover:text-orange-300": true,
            })}
          >
            {item.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
