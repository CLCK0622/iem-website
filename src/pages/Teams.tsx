import React from "react";
import TeamCard from "../components/TeamCard";

import { BiSolidZap } from "react-icons/bi";
import { GiGears } from "react-icons/gi";
import { FaChartBar } from "react-icons/fa";

import ButtonLink from "../components/ButtonLink";

import {
  ElectricalNames,
  MechNames,
  LogNames,
  ElectricalBodies,
  MechBodies,
  LogBodies,
} from "../util/teamData";

const Teams = () => {
  return (
    <div className="flex flex-col justify-center text-center mt-15">
      <div className="flex flex-col justify-center mb-10">
        <span className="text-white font-bold text-8xl mb-5">Our Teams</span>
        <span className="text-white text-xl w-1/2 mx-auto">
          Illini Electric Motorsports has three main teams. Each category is
          further broken down into individual subteams, and these subteams
          usually have multiple projects! No prior experience is required.
          Exchange students, undergraduate, and graduate students are welcome.
        </span>
      </div>
      <div className="flex flex-row justify-center">
        <TeamCard
          title="Electrical"
          icon={BiSolidZap}
          iconColor="#d6c242"
          subteamNames={ElectricalNames}
          subteamBodies={ElectricalBodies}
        >
          Our electrical subteams design, test, and implement our high and low
          voltage systems. From hardware and software, all the way to sensors
          and analysis. You will get the opportunity to learn industry standard
          design and manufacturing techniques.
        </TeamCard>
        <TeamCard
          title="Mechanical"
          icon={GiGears}
          iconColor="#5f5f61"
          subteamNames={MechNames}
        >
          Our mechanical subteams design, validate, and manufacture the physical
          components of our vehicle. You will get the opportunity to learn
          industry standard design and validation methods, as well as use
          industry specific CAD, FEA, and simulation software.
        </TeamCard>
        <TeamCard
          title="Logistical"
          icon={FaChartBar}
          iconColor="#4a5ee0"
          subteamNames={LogNames}
        >
          Our logistical subteams handle the business, media, and infrastructure
          aspects of our team. They build relationships, manage funds, and
          create infrastructure. You will get the opportunity to work on a large
          team with internationally sized challenges.
        </TeamCard>
      </div>
      <div className="flex flex-col items-center mt-20">
        <span className="text-4xl text-white font-bold ">
          Interested? Find out how to join us here!
        </span>
        <ButtonLink path="/join">Join Us</ButtonLink>
      </div>
    </div>
  );
};

export default Teams;
