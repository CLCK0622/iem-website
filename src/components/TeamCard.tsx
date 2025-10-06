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
    <div className="flex flex-col w-5/6 sm:w-2/3 xl:w-1/4 p-5 rounded-lg text-start border-[0.25px] border-slate-300/50 hover:border-white/60 transition duration-500 cursor-default text-white mx-auto xl:mx-5 my-5 bg-zinc-900">
      <div className="flex flex-col xl:h-[230px] items-center">
        <span className="text-3xl mr-2 mb-2 font-bold">{title}</span>
        <Icon size={25} color={iconColor} className="mb-1" />
        <span className="font-light">{children}</span>
      </div>
      <span className="bg-slate-300/50 my-2 h-[0.25px] w-full"></span>
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
