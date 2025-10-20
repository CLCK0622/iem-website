import { useIsVisible } from "../util/visibilityDetector.ts";
import { useRef, useState } from "react";

import ButtonLink from "../components/ButtonLink.tsx";
import video from "../assets/IEM-video-final.mp4";
import team_pic from "../assets/iem-team-pic.png";
import team_pic_2 from "../assets/iem-team-2.jpg";
import CompanyBanner from "../components/CompanyBanner.tsx";
import CountUp from "../components/Counter.tsx";
import { companyIcons, sponsorIcons } from "../util/companyIcons.ts";

import { FaUserTie } from "react-icons/fa6";
import { FaToolbox } from "react-icons/fa";
import { RiUserCommunityLine } from "react-icons/ri";

function AboutUs() {
  const historyRef = useRef<HTMLDivElement>(null);
  const historyIsVisible = useIsVisible(historyRef, 0.3);

  const doRef = useRef<HTMLDivElement>(null);
  const doIsVisible = useIsVisible(doRef, 0.3);

  const offerRef = useRef<HTMLDivElement>(null);
  const offerIsVisible = useIsVisible(offerRef, 0.3);

  const bannerRef = useRef<HTMLDivElement>(null);
  const bannerIsVisible = useIsVisible(bannerRef, 0.5);

  const joinRef = useRef<HTMLDivElement>(null);
  const joinIsVisible = useIsVisible(joinRef, 0.3);

  return (
    <>
      <div className="container min-w-screen">
        <div className="min-h-screen">
          <div
            ref={historyRef}
            className={`transition-all ease-in-out duration-1000 flex justify-center my-8 ${
              historyIsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <div className="logo-bg flex flex-col">
              <span className="text-6xl text-white">Our History</span>
              <span className="text-white text-lg font-light">
                Since 1979, we have been racing Illini, fostering various teams
                specializing in combustion, hybrid, and fully electric vehicles.
                Today, we are embarking on a new milestone in our history by
                merging Illini Motorsports with Illini Formula Electric,
                becoming a singular formula electric team. With a rich legacy
                and forty-four years of experience across different vehicle
                technologies, Illini Electric Motorsports, will continue the
                tradition of success and innovation.
              </span>
            </div>
          </div>
          <div
            ref={doRef}
            className={`transition-all ease-in-out duration-1000 flex justify-center my-8 ${
              doIsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <div className="flex flex-col xl:flex-row p-10 rounded-lg w-full items-center justify-center my-10">
              <div className="flex flex-col mx-5 w-[500px] xl:w-sm">
                <span className="text-6xl font-semibold text-white mb-3">
                  What we Do
                </span>
                <span className="text-lg font-light text-white">
                  While Formula SAE Electric is heavily centered around
                  engineering, it is a project management competition at its
                  core. Our primary focus is on efficiently managing an
                  ambitious project while nurturing member growth, equipping
                  them with the skills and confidence to excel in their roles
                  today and preparing them for their future endeavors. Our teams
                  touch every area that real-world engineering projects would,
                  from aerodynamics and low/high-voltage, to battery management
                  and circuit design, to software and infrastructure, to
                  business. Wherever your skills lie, we have a place for you!
                </span>
              </div>
              <img
                className="size-[500px] object-cover mx-5 rounded-xl transition duration-300 hover:scale-105"
                src={team_pic_2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
