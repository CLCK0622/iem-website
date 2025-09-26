import React, { useState } from "react";

import { MdKeyboardArrowRight } from "react-icons/md";

interface AccordionProps {
  label: string;
  body: string;
}

const AccordionItem = ({ label, body }: AccordionProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <div className="cursor-pointer rounded-lg border-[0.5px] border-slate-300 my-1 w-full text-white">
      <button
        onClick={handleClick}
        className="rounded-lg items-center cursor-pointer w-full px-3 py-2 flex flex-row text-start z-10 transition duration-300 hover:text-neutral-400"
      >
        <span>
          <MdKeyboardArrowRight
            className={
              open
                ? "items-center transition ease-in-out mr-2 rotate-90 transform-origin-center"
                : "items-center mr-2 transition transform-origin-center"
            }
          />
        </span>
        <span className="text-lg font-bold">{label}</span>
      </button>
      {open ? <div className="h-[0.5px] w-full bg-slate-300"></div> : null}
      <div
        className={
          open
            ? "cursor-text font-light text-left px-3 py-2 ease-in-out scale-y-100 origin-top"
            : "scale-y-0 h-0 origin-top"
        }
      >
        <span className={open ? "opacity-100" : "opacity-0"}>
          {open ? (body ? body : "No description yet") : ""}
        </span>
      </div>
    </div>
  );
};

export default AccordionItem;
