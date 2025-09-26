import React from "react";

const Navlink = ({
  name,
  dropdown,
  links,
}: {
  name: string;
  dropdown: string[];
  links: string[];
}) => {
  return (
    <div className="relative text-2xl w-fit cursor-pointer text-white group">
      <div className="hover:text-neutral-300 transition-colors duration-200 px-5 py-2 z-10 w-full">
        {name}
      </div>
      <div className="absolute top-full -mt-1 left-0 w-48 bg-black/50 backdrop-blur-lg text-white rounded-lg shadow-lg shadow-black/30 border border-neutral-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-400 z-1">
        <div className="py-2">
          {dropdown.map((item, index) => (
            <React.Fragment key={index}>
              <a
                className="block text-lg px-3 my-2 hover:text-neutral-400 transition duration-200 ease-in-out"
                href={index < links.length ? links[index] : ""}
              >
                {item}
              </a>
              {index < dropdown.length - 1 && (
                <div className="mx-2 my-1 h-px bg-gray-400"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navlink;
