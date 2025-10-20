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
      } team-card flex flex-col w-5/6 lg:w-1/4 px-8 p-5 rounded-2xl text-start cursor-default text-white mx-auto lg:mx-5 my-5 border-[0.25px] border-gray-400/50`}
    >
      <div className="flex flex-col h-fit mt-3">
        <span className="flex flex-row items-baseline text-5xl my-3 font-[400]">
          {title}
          <Icon size={30} color={iconColor} className="mx-3" />
        </span>
        <span className="font-light text-gray-200">{children}</span>
      </div>
      <span className="bg-slate-300/50 my-2 h-[0.25px] w-full"></span>
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
