import React from "react";

interface ButtonLinkProps {
  children: React.ReactNode;
  path: string;
}

const ButtonLink = ({ children, path }: ButtonLinkProps) => {
  return (
    <a
      className="group text-white my-5 text-xl mr-3 border border-gray-400 hover:border-white hover:pr-8 cursor-pointer rounded-xl w-fit px-4 py-3 transition-all duration-300 hover:shadow-xl shadow-white/20"
      href={path}
    >
      <span className="relative">{children}</span>
      <span className="absolute opacity-0 transition-all duration-300 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-1">
        {"->"}
      </span>
    </a>
  );
};

export default ButtonLink;
