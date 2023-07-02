import { Antonio } from "next/font/google";
import Nav from "./Nav";
const spartan = Antonio({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const Header = () => {
  return (
    <header className="fixed w-screen">
      <h1></h1>
      <div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
