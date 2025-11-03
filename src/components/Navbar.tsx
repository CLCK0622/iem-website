import NavDropdown from "./NavDropdown";

import "../index.css";
import logo from "../assets/iem-logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar z-50 flex flex-row items-center justify-between sticky fixed top-0 px-7 py-5 text-2xl font-light nav-gradient backdrop-blur-lg">
      <a className="flex items-center" href="/home">
        <img className="size-[60px] mr-4" src={logo} alt="" />
        <span className="text-5xl text-white italic font-[1000]">IEM.</span>
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
