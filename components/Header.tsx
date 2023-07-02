import { Antonio } from "next/font/google";
import Nav from "./Nav";
import menu from "@/assets/icon-hamburger.svg";
import Image from "next/image";

const spartan = Antonio({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const Header = () => {
  return (
    <>
      <header className="fixed w-screen flex flex-col justify-between items-center px-[1.5rem]">
        <h1 className={`${spartan.className} text-[2.2rem] font-semibold`}>
          THE PLANETS
        </h1>
        <div>
          <Nav />
          <Image src={menu} alt="hamburger" className="md:hidden w-[2rem]" />
        </div>
      </header>
      <hr className="border-[0.5px] opacity-50 border-[#979797] absolute top-[4.5rem] w-full " />
    </>
  );
};

export default Header;
