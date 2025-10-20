import Navlink from "./Navlink";

import "../index.css";
import logo from "../assets/iem-logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar z-50 flex flex-row items-center justify-between sticky fixed top-0 p-7 text-2xl font-light relative bg-black border-b border-gray-400/50">
      <a className="flex items-center" href="/home">
        <img className="size-[40px] mr-4" src={logo} alt="" />
        <span className="text-white">Illini Electric Motorsports</span>
      </a>
      <div className="flex mr-8">
        <Navlink
          name="About"
          dropdown={["About Us", "Teams", "Join", "Leadership"]}
          links={["/about", "/teams", "/join", "/leaders"]}
        />
        <Navlink
          name="Sponsors"
          dropdown={["Our Sponsors", "Become a Sponsor"]}
          links={["/sponsors"]}
        />
        <Navlink
          name="Cars"
          dropdown={["Electric", "Combustion"]}
          links={["/cars#electric", "/cars#combustion"]}
        />
        <Navlink
          name="Contact"
          dropdown={["Email", "LinkedIn", "Instagram"]}
          links={[
            "/email",
            "https://www.linkedin.com/company/illini-electric-motorsports/",
            "https://www.instagram.com/illinoisfsae/",
          ]}
        />
      </div>
    </nav>
  );
};

export default Navbar;
