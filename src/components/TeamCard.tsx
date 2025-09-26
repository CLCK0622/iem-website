import React from "react";
import { type IconType } from "react-icons";
import AccordionItem from "./AccordionItem";

interface TeamCardProps {
  children: React.ReactNode;
  title: string;
  icon: IconType;
  iconColor: string;
  subteamNames: string[];
  subteamBodies?: string[];
}

const TeamCard = ({
  children,
  title,
  subteamNames,
  icon: Icon,
  iconColor,
  subteamBodies,
}: TeamCardProps) => {
  return (
    <div className="flex flex-col w-1/4 py-5 px-3 rounded-lg text-start mx-5 border-[0.5px] border-slate-300 hover:border-white transition duration-300 cursor-default text-white hover:shadow-2xl shadow-blue-300/40">
      <div className="flex flex-row items-center">
        <span className="text-3xl mr-2 mb-2 font-bold">{title}</span>
        <Icon size={25} color={iconColor} className="mb-1" />
      </div>
      <span className="font-light">{children}</span>
      <span className="bg-slate-300 my-2 h-[1px] w-full"></span>
      <span className="text-2xl font-bold">Subteams:</span>
      <div className="flex flex-col">
        {subteamNames.map((name, index) => {
          return (
            <AccordionItem
              key={name}
              label={name}
              body={
                subteamBodies && index < subteamBodies.length
                  ? subteamBodies[index]
                  : ""
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default TeamCard;
