"use client";

import { Antonio } from "next/font/google";
import Nav from "./Nav";
import menu from "@/assets/icon-hamburger.svg";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { MenuReveal } from "@/utils/MenuReveal";

const antonio = Antonio({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <header className="fixed bg-[#070724] w-screen flex md:flex-col md:gap-[2rem] lg:gap-0 lg:flex-row justify-between items-center px-[1.5rem] lg:px-[2rem] py-[1.2rem] md:py-[2rem] border-b-[0.5px] border-[#97979778] z-30">
        <h1 className={`${antonio.className} text-[2.1rem] font-semibold`}>
          THE PLANETS
        </h1>
        <div>
          <Nav />
          <Image
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            src={menu}
            alt="hamburger"
            className="md:hidden w-[2rem]"
          />
        </div>
      </header>
      <MenuReveal menuIsOpen={menuIsOpen}>
        <MobileMenu setMenuIsOpen={setMenuIsOpen} />
      </MenuReveal>
    </>
  );
};

export default Header;
