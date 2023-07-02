import { PlanetDesc } from "@/interface/interface";

const PlanetDetails = ({ planet }: { planet: PlanetDesc }) => {
  return (
    <section className="pt-[10rem]">PlanetDetails: {`${planet.name}`}</section>
  );
};

export default PlanetDetails;
