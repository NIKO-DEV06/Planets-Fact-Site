import Image from "next/image";
import right from "@/public/assets/icon-chevron.svg";
import data from "@/public/data.json";
import Link from "next/link";

const MobileMenu = ({
  setMenuIsOpen,
}: {
  setMenuIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <div className="bg-[#070724] h-[115vh] inset-0 md:hidden z-50">
      <div className="pt-[7rem] flex flex-col gap-[1.5rem]">
        {data.map((dta) => (
          <Link
            key={dta.name}
            onClick={() => setMenuIsOpen(false)}
            href={`/${dta.name.toLocaleLowerCase()}`}
            className="flex opacity-70 hover:opacity-100 duration-200 justify-between items-center mx-[1.5rem] border-b-[0.5px] border-b-[#ffffffc5] pb-[1.5rem]"
          >
            <div className="flex gap-[2rem] items-center">
              <div
                style={{ backgroundColor: dta.maincolour }}
                className="h-[1.5rem] w-[1.5rem] rounded-full"
              ></div>
              <p className="uppercase font-semibold tracking-widest text-[1.3rem]">
                {dta.name}
              </p>
            </div>
            <Image src={right} alt="chevron" className="w-[0.5rem]" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
