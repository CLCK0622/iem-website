import Navlink from "./Navlink";

import "../index.css";
import logo from "../assets/iem-logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar z-50 flex flex-row items-center justify-between sticky fixed top-0 p-9 text-3xl font-light relative bg-black border-b border-gray-400/40">
      <a className="flex items-center" href="/home">
        <img className="size-[40px] mr-4" src={logo} alt="" />
        <span className="text-white">Illini Electric Motorsports</span>
      </a>
      <div className="flex mx-auto xl:absolute left-170">
        <Navlink
          name="About"
          dropdown={["Teams", "Leadership", "Mission"]}
          links={["/teams", "/leaders", "/mission"]}
        />
        <Navlink
          name="Sponsors"
          dropdown={["Our Sponsors", "Become a Sponsor"]}
          links={["/sponsors"]}
        />
        <Navlink
          name="Contact"
          dropdown={["Email", "GroupMe", "LinkedIn", "Instagram"]}
          links={["/teams"]}
        />
      </div>
      <span className="text-2xl text-white ">Profile</span>
    </nav>
  );
};

export default Navbar;
