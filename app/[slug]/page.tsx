import PlanetDetails from "@/components/PlanetDetails";
import planets from "../../public/data.json";
import { PlanetDesc } from "@/interface/interface";

const PlanetPage = ({ params }: { params: { slug: string } }) => {
  const planet = planets.find(
    (planet) => planet.name.toLowerCase() === params.slug
  ) as PlanetDesc;

  return <PlanetDetails planet={planet} />;
};

export default PlanetPage;
