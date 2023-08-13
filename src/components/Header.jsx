import React from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";
import { RiMovie2Line } from "react-icons/ri";
import Link from "next/link";

const Header = () => {
  const menu = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Sign In",
      url: "/login",
    },
  ];

  return (
    <div className="flex items-center gap-x-4 h-20 p-5">
      <Link href={"/"}>
        <RiMovie2Line size={54} className="cursor-pointer" />
      </Link>
      <div className="flex flex-1 items-center gap-x-4 border p-3 rounded-lg">
        <BiSearch size={24} />
        <input
          type="text"
          className="outline-none flex-1 bg-transparent"
          placeholder="Search..."
        />
      </div>
      <ThemeComp />
      {menu.map((item) => (
        <MenuItem mn={item} />
      ))}
    </div>
  );
};

export default Header;
