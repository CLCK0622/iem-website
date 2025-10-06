import { useIsVisible } from "../util/visibilityDetector.ts";
import { useRef, useState } from "react";

import ButtonLink from "../components/ButtonLink.tsx";
import video from "../assets/IEM-video-final.mp4";
import team_pic from "../assets/iem-team-pic.png";
import team_pic_2 from "../assets/iem-team-2.jpg";
// import logo from "../assets/iem-logo.svg";
import CompanyBanner from "../components/CompanyBanner.tsx";
import CountUp from "../components/Counter.tsx";
import { companyIcons, sponsorIcons } from "../util/companyIcons.ts";

import { FaUserTie } from "react-icons/fa6";
import { FaToolbox } from "react-icons/fa";
import { RiUserCommunityLine } from "react-icons/ri";

function App() {
  // const historyRef = useRef<HTMLDivElement>(null);
  // // const historyIsVisible = useIsVisible(historyRef);

  const doRef = useRef<HTMLDivElement>(null);
  const doIsVisible = useIsVisible(doRef, 0.3);

  const offerRef = useRef<HTMLDivElement>(null);
  const offerIsVisible = useIsVisible(offerRef, 0.3);

  const bannerRef = useRef<HTMLDivElement>(null);
  const bannerIsVisible = useIsVisible(bannerRef, 0.3);

  const joinRef = useRef<HTMLDivElement>(null);
  const joinIsVisible = useIsVisible(joinRef, 0.1);

  return (
    <>
      <div className="container min-w-screen">
        <div className="relative min-h-screen">
          <video className="video" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>

          <div className="mid-container top-35 md:top-70 lg:top-100 xl:top-120 pb-30 xl:pb-50 h-fit w-full absolute">
            <div className="flex flex-col text-6xl lg:text-8xl text-white text-shadow-sm text-shadow-black/50 font-semibold mx-10">
              <span className="">Engineering</span>
              <span>Excellence.</span>
              <div className="flex flex-row">
                <ButtonLink path="/teams">Our Teams</ButtonLink>
                <ButtonLink path="/join">Join Us</ButtonLink>
              </div>
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

          <div
            ref={offerRef}
            className={`transition-all ease-in-out duration-1000 flex justify-center my-8 ${
              offerIsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <div className="flex flex-col p-10 rounded-lg w-full items-center justify-center my-10">
              <span className="text-6xl font-semibold text-white mb-3">
                What we Offer
              </span>
              <div className="flex flex-col mx-15 w-full xl:w-2/3">
                <div className="flex flex-col lg:flex-row">
                  <div className="flex flex-col text-white px-5 mr-4 rounded-xl h-inherit border-[0.25px] border-slate-300/50 bg-zinc-900">
                    <div className="flex flex-col my-2 h-full justify-around">
                      <div className="flex flex-row items-center">
                        <FaUserTie className="size-[30px]" />
                        <div className="flex flex-col ml-5">
                          <span className="text-white text-xl ">
                            Networking Events
                          </span>
                          <span className="text-white font-light">
                            with companies like Rivian, John Deere, and more
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-row content-center items-center">
                        <FaToolbox className="size-[30px]" />
                        <div className="flex flex-col ml-5">
                          <span className="text-white text-xl ">
                            Hands-On Experience
                          </span>
                          <span className="text-white font-light">
                            design, prototype, and build with industry-standard
                            tools
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-row items-center">
                        <RiUserCommunityLine className="size-[30px]" />
                        <div className="flex flex-col ml-5">
                          <span className="text-white text-xl ">
                            Amazing Community
                          </span>
                          <span className="text-white font-light">
                            interact with our diverse and talented community
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="text-lg font-light text-white w-full lg:w-1/2 lg:ml-4">
                    The team at Illini Electric Motorsports applies knowledge
                    learned in the classroom and develops new skills. By
                    designing, manufacturing, and testing our vehicle, members
                    get unique real world experience and incredible exposure to
                    knowledge, technology, and industry professionals. Our
                    alumni network is over 1000 strong and spans a wide array of
                    industries, with past members now working at companies like
                    Tesla, NVIDIA, PwC, SpaceX, Raytheon, and more.
                  </span>
                </div>
              </div>
              <div
                ref={bannerRef}
                className={`w-full xl:w-2/3 my-10 transition-all duration-1000 ${
                  bannerIsVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                }`}
              >
                <span className="text-white text-lg font-semibold">
                  Member outcomes:
                </span>
                <CompanyBanner icons={companyIcons} goesLeft={false} />
                <span className="text-white text-lg font-semibold">
                  Our sponsors:
                </span>
                <CompanyBanner icons={sponsorIcons} goesLeft={true} />
              </div>
            </div>
          </div>

          <div
            ref={joinRef}
            className={`flex flex-col items-center transition-all ease-in-out duration-1000 flex justify-center my-8 ${
              joinIsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <div className="flex flex-col xl:flex-row p-10 rounded-lg w-full items-center justify-center my-10">
              <img
                className="size-[550px] object-cover rounded-xl transition duration-300 hover:scale-105"
                src={team_pic}
                alt=""
              />
              <div className="flex flex-col mx-15 w-[550px] xl:w-sm">
                <span className="text-6xl font-semibold text-white mb-3">
                  Who can Join?
                </span>
                <span className="text-lg font-light text-white">
                  We aspire to bring together people of different scientific,
                  engineering, artistic, and business backgrounds and unite them
                  behind a common goal. The team at IEM comprises over 20
                  different majors with students from over 4 different
                  continents. Prospective members can join as soon as their
                  first undergraduate year or as late as their final
                  postgraduate year. We recruit from a wide array of disciplines
                  ranging from business and accounting, to applied and
                  theoretical sciences. No experience required!
                </span>
                <div className="flex flex-row relative">
                  <ButtonLink path="/teams">Explore our teams</ButtonLink>
                  <ButtonLink path="/join">Join us</ButtonLink>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-3/5">
              <span className="text-xl text-gray-300 font-semibold mb-5">
                Our members come from:
              </span>
              <div className="flex flex-col lg:flex-row justify-between">
                <CountUp end={20} label="Majors" />
                <CountUp end={4} label="Continents" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
