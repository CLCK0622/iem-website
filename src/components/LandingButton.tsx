import React from "react";

type HoverColor = "orange" | "blue";

interface LandingButtonProps {
  hoverColor: HoverColor;
  children: React.ReactNode;
  path: string;
}

const LandingButton = ({ hoverColor, children, path }: LandingButtonProps) => {
  const hoverColors = {
    orange: "hover:text-orange-500 hover:shadow-2xl shadow-orange-500",
    blue: "hover:text-blue-700 hover:shadow-2xl shadow-blue-700",
  };
  const className = `text-shadow-none cursor-pointer py-4 px-5 font-medium text-black text-xl bg-white mr-5 my-5 rounded-2xl transition duration-500 ${
    hoverColors[hoverColor] || "hover:bg-gray-500"
  }`;
  return (
    <a href={path} className={className}>
      {children}
    </a>
  );
};

export default LandingButton;
