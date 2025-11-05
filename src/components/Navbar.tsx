import NavDropdown from "./NavDropdown";

import "../index.css";
import logo from "../assets/iem-logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar z-50 flex flex-row items-center justify-between sticky top-0 px-7 py-5 text-2xl font-light nav-gradient backdrop-blur-lg">
      <a className="flex items-center group" href="/home">
        <img className="size-[60px] mr-4" src={logo} alt="" />
        <div className="overflow-hidden relative w-fit">
          <span className="inline-block text-5xl text-white italic font-[1000] transition-transform duration-200 group-hover:translate-y-full ml-2">
            IEM.
          </span>
          <span className="inline-block text-5xl text-white italic font-[1000] absolute top-0 left-0 transition-transform duration-200 -translate-y-full group-hover:translate-y-0">
            IEM.
          </span>
        </div>
      </a>
      <div className="flex mr-8">
        <NavDropdown
          name="About"
          dropdown={["About Us", "Teams", "Join"]}
          links={["/about", "/teams", "/join"]}
        />
        <NavDropdown
          name="Sponsors"
          dropdown={["Our Sponsors", "Become a Sponsor"]}
          links={["/sponsors", "/sponsor-info"]}
        />
        <NavDropdown
          name="Cars"
          dropdown={["Electric", "Combustion"]}
          links={["/cars#electric", "/cars#combustion"]}
        />
        <NavDropdown
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
