import { useState } from "react";

import logo from "../assets/iem-logo.svg";

import instagram from "../assets/company-logos/insta-logo.svg";
import linkedin from "../assets/company-logos/linkedin-logo.svg";

import { MdEmail } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const copyEmail = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigator.clipboard
      .writeText("team@illinielectricmotorsports.com")
      .then(() => {
        setCopied(true);
      });
  };
  return (
    <footer className="flex justify-center h-[300px] text-white pt-50 pb-20 px-10 h-fit">
      <div className="flex flex-row h-fit">
        <div className="flex flex-col justify-start items-center mx-10">
          <a href="/home">
            <img className="size-[75px]" src={logo} alt="" />
          </a>
          <span className="mt-3 text-white">Copyright IEM @2025.</span>
        </div>
        <div className="flex flex-col justify-start mx-10 text-xl font-light">
          <a
            className="hover:text-neutral-400 transition duration-300"
            href="/about"
          >
            About Us
          </a>
          <a
            className="hover:text-neutral-400 transition duration-300"
            href="/teams"
          >
            Teams
          </a>
          <a
            className="hover:text-neutral-400 transition duration-300"
            href="/join"
          >
            Join
          </a>
        </div>
        <div className="flex flex-col justify-start mx-10 text-xl font-light">
          <a
            className="hover:text-neutral-400 transition duration-300"
            href="/sponsors"
          >
            Our Sponsors
          </a>
          <a
            className="hover:text-neutral-400 transition duration-300"
            href="/sponsor-info"
          >
            Become a Sponsor
          </a>
        </div>
        <div className="flex flex-col justify-start mx-10 text-xl font-light">
          <a
            className="hover:text-neutral-400 transition duration-300"
            href="/cars#electric"
          >
            Electric
          </a>
          <a
            className="hover:text-neutral-400 transition duration-300"
            href="/cars#combustion"
          >
            Combustion
          </a>
        </div>
        <div className="flex flex-col justify-start mx-10 text-xl font-light">
          <a
            className="group flex flex-row items-center hover:text-neutral-400 transition duration-300"
            href="/email"
            onClick={copyEmail}
          >
            {!copied && (
              <MdEmail className="transition duration-300 size-[25px]" />
            )}
            {copied && <IoCheckmark />}
            <span className="ml-2">Email</span>
          </a>
          <a
            className="mr-2 flex flex-row hover:text-neutral-400 transition duration-300"
            href="https://linkedin.com/company/illini-electric-motorsports"
            target="_blank"
          >
            <img className="size-[25px]" src={linkedin} alt="" />
            <span className="ml-2">LinkedIn</span>
          </a>
          <a
            className="mr-2 flex flex-row hover:text-neutral-400 transition duration-300"
            href="https://www.instagram.com/illinoisfsae"
            target="_blank"
          >
            <img className="size-[25px]" src={instagram} alt="" />
            <span className="ml-2">Instagram</span>
          </a>
          <a
            className="mr-2 group relative flex flex-row items-center hover:text-neutral-400 transition duration-300"
            href="https://lists.illinois.edu/lists/info/uiuc-fsae-rso"
            target="_blank"
          >
            <FiArrowUpRight className="size-[25px] absolute left-0 group-hover:translate-x-25 transition-transform duration-400" />
            <span className="pl-8 pr-0 group-hover:pl-0 group-hover:pr-8 bg-black transition-all duration-400">
              Mailing List
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
