import { useRef } from "react";
import { type IconType } from "react-icons";
import AccordionItem from "./AccordionItem";
import { useIsVisible } from "../util/visibilityDetector";

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
  const cardRef = useRef<HTMLDivElement>(null);
  const cardIsVisible = useIsVisible(cardRef, 0.3);
  return (
    <div
      ref={cardRef}
      className={`${
        cardIsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-30"
      } team-card flex flex-col w-5/6 sm:w-2/3 xl:w-1/4 px-8 p-5 rounded-2xl text-start cursor-default text-white mx-auto xl:mx-5 my-5 bg-zinc-900`}
    >
      <div className="flex flex-col xl:h-[230px] items-center">
        <span className="text-3xl mr-2 mb-2 mt-3 font-bold">{title}</span>
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
