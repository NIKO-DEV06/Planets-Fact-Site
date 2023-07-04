"use client";

import { useState } from "react";
import { Antonio } from "next/font/google";
import { PlanetDesc } from "@/interface/interface";
import Image from "next/image";
import MobileToggle from "./MobileToggle";
import linksvg from "@/public/assets/icon-source.svg";
import Link from "next/link";
import { Reveal } from "@/utils/Reveal";
import { ImageReveal } from "@/utils/ImageReveal";

const antonio = Antonio({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const PlanetDetails = ({ planet }: { planet: PlanetDesc }) => {
  const [mode, setMode] = useState("overview");

  return (
    <section className="pt-[7rem] md:pt-[15rem] w-screen pb-[4rem]">
      <MobileToggle mode={mode} setMode={setMode} planet={planet} />
      <div className="flex flex-col lg:flex-row lg:gap-[3rem] justify-center items-center translate-y-[-2rem] md:translate-y-[-5rem] lg:translate-y-[-3rem]">
        <ImageReveal>
          <div className="relative">
            <Image
              className="w-auto h-auto scale-[0.5] md:scale-[0.6] lg:scale-[1] pl-[1.5rem]"
              src={
                mode === "overview"
                  ? planet.images.planet
                  : mode === "structure"
                  ? planet.images.internal
                  : mode === "surface"
                  ? planet.images.planet
                  : ""
              }
              alt="planet-image"
              width={100}
              height={100}
              loading="lazy"
            />
            <Image
              src={planet.images.geology}
              width={50}
              height={50}
              alt="geology"
              className={`${
                mode === "surface" ? "absolute" : "hidden"
              }  right-1/2 translate-x-1/2 bottom-[3rem] w-auto h-auto md:scale-150 lg:scale-[2]`}
              loading="lazy"
            />
          </div>
        </ImageReveal>

        <div className="translate-y-[-2rem] md:translate-y-0 flex lg:flex-col md:px-[4rem] md:gap-[5rem]">
          <div className="px-[1.5rem] lg:w-[23rem] md:px-0 text-center md:text-left flex flex-col gap-[1rem]">
            <Reveal width="100%">
              <h1
                className={`${antonio.className} uppercase text-[3.5rem] lg:font-bold lg:text-[4rem]`}
              >
                {planet.name}
              </h1>
            </Reveal>
            <Reveal>
              <p className="font-[300] h-[8rem] text-[0.95rem] lg:text-[1rem]">
                {mode === "overview"
                  ? planet.overview.content
                  : mode === "structure"
                  ? planet.structure.content
                  : mode === "surface"
                  ? planet.geology.content
                  : ""}
              </p>
            </Reveal>
            <Reveal width="100%">
              <div className="flex justify-center items-center md:justify-start gap-[0.4rem]">
                <p className="font-thin relative opacity-50 tracking-wider">
                  Source :{" "}
                  <Link
                    href={
                      mode === "overview"
                        ? planet.overview.source
                        : mode === "structure"
                        ? planet.structure.source
                        : mode === "surface"
                        ? planet.geology.source
                        : ""
                    }
                    className="font-semibold underline tracking-wider"
                  >
                    Wikipedia
                  </Link>
                </p>
                <Image src={linksvg} alt="linksvg" className="w-auto h-auto" />
              </div>
            </Reveal>
          </div>
          <div className="hidden md:flex md:flex-col gap-[1.5rem] items-center justify-end">
            <Reveal>
              <div
                style={{
                  backgroundColor: mode === "overview" ? planet.maincolour : "",
                }}
                onClick={() => setMode("overview")}
                className={`flex gap-[1rem] border-[1px] py-[0.9rem] w-[20rem] md:w-[23rem] border-[#ffffff80] cursor-pointer ${
                  mode !== "overview" && "hover:bg-[#d8d8d871] duration-200"
                }`}
              >
                <p className="opacity-60 ml-[2rem] text-[0.9rem] tracking-[0.15em] font-semibold">
                  01
                </p>
                <p className=" font-[500] tracking-widest text-[0.9rem]">
                  OVERVIEW
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div
                style={{
                  backgroundColor:
                    mode === "structure" ? planet.maincolour : "",
                }}
                onClick={() => setMode("structure")}
                className={`flex gap-[1rem] border-[1px] py-[0.9rem] w-[20rem] md:w-[23rem] border-[#ffffff80] cursor-pointer ${
                  mode !== "structure" && "hover:bg-[#d8d8d871] duration-200"
                }`}
              >
                <p className="opacity-60 ml-[2rem] text-[0.9rem] tracking-[0.15em] font-semibold">
                  02
                </p>
                <p className=" font-[500] tracking-widest text-[0.9rem]">
                  INTERNAL STRUCTURE
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div
                style={{
                  backgroundColor: mode === "surface" ? planet.maincolour : "",
                }}
                onClick={() => setMode("surface")}
                className={`flex gap-[1rem] border-[1px] py-[0.9rem] w-[20rem] md:w-[23rem] border-[#ffffff80] cursor-pointer ${
                  mode !== "surface" && "hover:bg-[#d8d8d871] duration-200"
                }`}
              >
                <p className="opacity-60 ml-[2rem] text-[0.9rem] tracking-[0.15em] font-semibold">
                  03
                </p>
                <p className=" font-[500] tracking-widest text-[0.9rem]">
                  SURFACE GEOLOGY
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="px-[1.5rem] md:px-[4rem] flex flex-col md:flex-row gap-[1rem] mt-[2.5rem] translate-y-[-2rem] md:translate-y-0">
        <Reveal width="100%">
          <div className="border-[1px] border-[#ffffff80] w-full flex md:flex-col justify-between items-center md:items-start md:justify-center px-[2rem] md:px-[1.5rem] py-[0.7rem] md:py-[1rem]">
            <p className="tracking-widest text-[0.9rem] opacity-50">
              ROTATION TIME
            </p>
            <p className={`${antonio.className} text-[2rem] uppercase`}>
              {planet.rotation}
            </p>
          </div>
        </Reveal>
        <Reveal width="100%">
          <div className="border-[1px] border-[#ffffff80] w-full flex md:flex-col justify-between items-center md:items-start px-[2rem] md:px-[1.5rem] py-[0.7rem] md:py-[1rem]">
            <p className="tracking-widest text-[0.9rem] opacity-50">
              REVOLUTION TIME
            </p>
            <p className={`${antonio.className} text-[2rem] uppercase`}>
              {planet.revolution}
            </p>
          </div>
        </Reveal>
        <Reveal width="100%">
          <div className="border-[1px] border-[#ffffff80] w-full flex md:flex-col justify-between items-center md:items-start px-[2rem] md:px-[1.5rem] py-[0.7rem] md:py-[1rem]">
            <p className="tracking-widest text-[0.9rem] opacity-50">Radius</p>
            <p className={`${antonio.className} text-[2rem] uppercase`}>
              {planet.radius}
            </p>
          </div>
        </Reveal>
        <Reveal width="100%">
          <div className="border-[1px] border-[#ffffff80] w-full flex md:flex-col justify-between items-center md:items-start px-[2rem] md:px-[1.5rem] py-[0.7rem] md:py-[1rem]">
            <p className="tracking-widest text-[0.9rem] opacity-50">
              AVERAGE TEMP.
            </p>
            <p className={`${antonio.className} text-[2rem] uppercase`}>
              {planet.temperature}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default PlanetDetails;
