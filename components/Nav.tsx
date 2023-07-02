import Link from "next/link";

const Nav = () => {
  return (
    <nav className="hidden md:flex gap-[2rem] opacity-70">
      <Link href={"/mercury"} className="uppercase">
        mercury
      </Link>
      <Link href={"/venus"} className="uppercase">
        venus
      </Link>
      <Link href={"/earth"} className="uppercase">
        earth
      </Link>
      <Link href={"/mars"} className="uppercase">
        mars
      </Link>
      <Link href={"/jupiter"} className="uppercase">
        jupiter
      </Link>
      <Link href={"/saturn"} className="uppercase">
        saturn
      </Link>
      <Link href={"/uranus"} className="uppercase">
        uranus
      </Link>
      <Link href={"/neptune"} className="uppercase">
        neptune
      </Link>
    </nav>
  );
};

export default Nav;
