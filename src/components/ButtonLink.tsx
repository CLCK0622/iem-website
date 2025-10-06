import React from "react";

import { FiArrowUpRight } from "react-icons/fi";

interface ButtonLinkProps {
  children: React.ReactNode;
  path: string;
}

const ButtonLink = ({ children, path }: ButtonLinkProps) => {
  return (
    <a
      className="group relative items-center flex flex-row text-white my-5 text-xl mr-3 bg-black/50 border-[0.25px] border-slate-300/50 hover:border-white/60 hover:pr-8 cursor-pointer rounded-xl w-fit px-4 py-3 transition-all duration-300 hover:shadow-lg shadow-white/20 gap-1"
      href={path}
    >
      <span className="font-light">{children}</span>
      <FiArrowUpRight className="absolute opacity-0 right-2 transition-all duration-300 translate-y-3 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
    </a>
  );
};

export default ButtonLink;
