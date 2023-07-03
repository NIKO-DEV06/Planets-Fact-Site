import { PlanetDesc } from "@/interface/interface";
import React from "react";

const MobileToggle = ({
  planet,
  mode,
  setMode,
}: {
  planet: PlanetDesc;
  mode: string;
  setMode: (type: string) => void;
}) => {
  return (
    <div className="md:hidden flex justify-between px-[1.5rem] border-b-[#ffffff80] border-b-[0.5px] pb-[0.35rem]">
      <div>
        <div
          onClick={() => setMode("overview")}
          className="relative w-fit cursor-pointer"
        >
          <p className="text-[1rem] font-semibold tracking-widest pb-[1rem]">
            OVERVIEW
          </p>
          <div
            style={{
              backgroundColor: mode === "overview" ? planet.maincolour : "",
            }}
            className="absolute h-[6px] w-full right-0"
          ></div>
        </div>
      </div>
      <div>
        <div
          onClick={() => setMode("structure")}
          className="relative w-fit cursor-pointer"
        >
          <p className="text-[1rem] font-semibold tracking-widest pb-[1rem]">
            STRUCTURE
          </p>
          <div
            style={{
              backgroundColor: mode === "structure" ? planet.maincolour : "",
            }}
            className="absolute h-[6px] w-full right-0"
          ></div>
        </div>
      </div>
      <div>
        <div
          onClick={() => setMode("surface")}
          className="relative w-fit cursor-pointer"
        >
          <p className="text-[1rem] font-semibold tracking-widest pb-[1rem]">
            SURFACE
          </p>
          <div
            style={{
              backgroundColor: mode === "surface" ? planet.maincolour : "",
            }}
            className="absolute h-[6px] w-full right-0"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MobileToggle;
