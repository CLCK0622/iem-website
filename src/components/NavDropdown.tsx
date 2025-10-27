import React, { useState, type HTMLAttributeAnchorTarget } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";

const Navlink = ({
  name,
  dropdown,
  links,
}: {
  name: string;
  dropdown: string[];
  links: string[];
}) => {
  const [copied, setCopied] = useState(false);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    if (link === "/email") {
      e.preventDefault();
      navigator.clipboard
        .writeText("team@illinielectricmotorsports.com")
        .then(() => {
          setCopied(true);
        });
    }
  };
  return (
    <div className="relative text-xl w-fit cursor-pointer text-white group">
      <div className="flex group items-center hover:text-neutral-300 transition-colors duration-200 px-5 py-2 z-10 w-full">
        {name}
        <MdKeyboardArrowDown className="mx-1 size-[20px] group-hover:-rotate-180 transition-transform duration-400" />
      </div>
      <div className="absolute top-full -mt-1 left-0 w-48 bg-black/60 backdrop-blur-xl text-white rounded-xl group-hover:shadow-lg shadow-black/30 border border-neutral-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-400 z-1">
        <div className="py-2">
          {dropdown.map((link, index) => (
            <React.Fragment key={index}>
              <a
                className="flex text-lg px-3 py-2 my-1 mx-1 rounded-lg justify-between hover:bg-neutral-700/60 transition duration-300 ease-in-out items-center"
                href={index < links.length ? links[index] : ""}
                onClick={(e) =>
                  handleClick(e, links.length ? links[index] : "")
                }
              >
                <span className="relative font-light">{link}</span>
                {!copied && links[index] == "/email" && (
                  <MdEmail className="group-hover:opacity-100 opacity-0 transition duration-300" />
                )}
                {copied && links[index] == "/email" && <IoCheckmark />}
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navlink;
