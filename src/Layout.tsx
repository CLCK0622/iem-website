import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import logo from "./assets/iem-logo.svg";
import { useState } from "react";

import { LuCopyPlus } from "react-icons/lu";
import { LuCopyCheck } from "react-icons/lu";

function Layout() {
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
    <>
      <Navbar />
      <Outlet />
      <footer className="flex justify-center h-[300px] text-gray-400 py-30 px-10 h-fit">
        <div className="flex flex-row h-fit">
          <div className="flex flex-col justify-start items-center mx-10">
            <a href="/home">
              <img className="size-[75px]" src={logo} alt="" />
            </a>
            <span className="mt-3 text-white">Copyright IEM @2025.</span>
          </div>
          <div className="flex flex-col justify-start mx-10 text-xl font-light">
            <a
              className="hover:text-neutral-500 transition duration-300"
              href="/about"
            >
              About Us
            </a>
            <a
              className="hover:text-neutral-500 transition duration-300"
              href="/teams"
            >
              Teams
            </a>
            <a
              className="hover:text-neutral-500 transition duration-300"
              href="/join"
            >
              Join
            </a>
            <a
              className="hover:text-neutral-500 transition duration-300"
              href="/leaders"
            >
              Leadership
            </a>
          </div>
          <div className="flex flex-col justify-start mx-10 text-xl font-light">
            <a
              className="hover:text-neutral-500 transition duration-300"
              href="/sponsors"
            >
              Our Sponsors
            </a>
            <a
              className="hover:text-neutral-500 transition duration-300"
              href="/sponsor-info"
            >
              Become a Sponsor
            </a>
          </div>
          <div className="flex flex-col justify-start mx-10 text-xl font-light">
            <a
              className="hover:text-neutral-500 transition duration-300"
              href="/cars#electric"
            >
              Electric
            </a>
            <a
              className="hover:text-neutral-500 transition duration-300"
              href="/cars#combustion"
            >
              Combustion
            </a>
          </div>
          <div className="flex flex-col justify-start mx-10 text-xl font-light">
            <a
              className="group flex flex-row items-center hover:text-neutral-500 transition duration-300"
              href="/email"
              onClick={copyEmail}
            >
              <span className="mr-2">Email</span>
              {!copied && (
                <LuCopyPlus className="group-hover:opacity-100 opacity-0 transition duration-300" />
              )}
              {copied && <LuCopyCheck />}
            </a>
            <a
              className="hover:text-neutral-500 transition duration-300"
              href="https://linkedin.com/company/illini-electric-motorsports"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="hover:text-neutral-500 transition duration-300"
              href="https://www.instagram.com/illinoisfsae"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
