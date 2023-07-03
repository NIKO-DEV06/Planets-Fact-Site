"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import data from "@/public/data.json";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex gap-[2rem] tracking-widest text-[0.95rem] font-[500]">
      {data.map((dta) => (
        <div key={dta.name} className="relative group">
          <Link
            href={`/${dta.name.toLocaleLowerCase()}`}
            className={`uppercase opacity80 group-hover:opacity-100 duration-150 ${
              pathname === `/${dta.name.toLocaleLowerCase()}`
                ? "opacity-100"
                : "opacity-80"
            }`}
          >
            {dta.name}
          </Link>
          <div
            style={{ backgroundColor: dta.maincolour }}
            className={`absolute top-0 transform scale-x-0 group-hover:scale-x-100 opacity-0 group-hover:opacity-100 duration-200 md:translate-y-[-1.5rem] lg:translate-y-[-2.85rem] h-[5px] w-full ${
              pathname === `/${dta.name.toLocaleLowerCase()}` &&
              "opacity-100 scale-x-100"
            }`}
          ></div>
        </div>
      ))}
    </nav>
  );
};

export default Nav;
