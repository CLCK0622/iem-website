import { useIsVisible } from "../util/visibilityDetector.ts";
import { useRef } from "react";

import "../App.css";
import LandingButton from "../components/LandingButton";
import ButtonLink from "../components/ButtonLink.tsx";
import video from "../assets/IEM-video-final.mp4";
import team_pic from "../assets/iem-team-pic.png";
import team_pic_2 from "../assets/iem-team-2.jpg";
import logo from "../assets/iem-logo.svg";
import CompanyFlex from "../components/CompanyFlex";

function App() {
  const welcomeRef = useRef<HTMLDivElement>(null);
  const welcomeIsVisible = useIsVisible(welcomeRef);

  const historyRef = useRef<HTMLDivElement>(null);
  const historyIsVisible = useIsVisible(historyRef);

  const doRef = useRef<HTMLDivElement>(null);
  const doIsVisible = useIsVisible(doRef);

  const offerRef = useRef<HTMLDivElement>(null);
  const offerIsVisible = useIsVisible(offerRef);

  const joinRef = useRef<HTMLDivElement>(null);
  const joinIsVisible = useIsVisible(joinRef);

  return (
    <>
      <div className="container min-w-screen">
        <div className="relative min-h-screen">
          <video className="video" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>

          <div className="mid-container top-120 pb-50 h-fit w-full xl:absolute">
            <div className="flex flex-col text-8xl text-white text-shadow-md text-shadow-black/50 font-bold mx-10">
              <span className="">Engineering</span>
              <span>Excellence.</span>
              <div className="flex flex-row">
                <LandingButton path="/teams" hoverColor="orange">
                  Our Teams
                </LandingButton>
                <LandingButton path="/join" hoverColor="blue">
                  Join Us
                </LandingButton>
              </div>
            </div>
          </div>

          <div
            ref={welcomeRef}
            className={`transition-all ease-in-out duration-1000 flex justify-center ${
              welcomeIsVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col text-center text-7xl text-white font-bold w-2/3">
              <span>Welcome to</span>
              <span>Illini Electric Motorsports!</span>
            </div>
          </div>

          <div
            ref={historyRef}
            className={`transition-opacity ease-in-out duration-1000 flex justify-center my-15 ${
              historyIsVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col text-center xl:flex-row p-10 rounded-lg w-full items-center justify-center my-10">
              <img
                className="size-[250px] object-cover mx-5 rounded-xl"
                src={logo}
                alt=""
              />
              <div className="flex flex-col mx-5 w-sm">
                <span className="text-6xl font-bold text-white mb-3">
                  Our History
                </span>
                <span className="text-xl text-white">
                  Founded in 1979, we have a rich legacy and forty-four years of
                  experience across different vehicle technologies. Illini
                  Electric Motorsports will continue our tradition of success
                  and innovation.
                </span>
              </div>
            </div>
          </div>

          <div
            ref={doRef}
            className={`transition-opacity ease-in-out duration-1000 flex justify-center my-15 ${
              doIsVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col xl:flex-row p-10 rounded-lg w-full items-center justify-center my-10">
              <div className="flex flex-col mx-5 w-[510px] xl:w-sm">
                <span className="text-6xl font-bold text-white mb-3">
                  What we Do
                </span>
                <span className="text-xl text-white">
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
                className="size-[500px] object-cover mx-5 rounded-xl"
                src={team_pic_2}
                alt=""
              />
            </div>
          </div>

          <div
            ref={offerRef}
            className={`transition-opacity ease-in-out duration-1000 flex justify-center my-15 ${
              offerIsVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col xl:flex-row p-10 rounded-lg w-full items-center justify-center my-10">
              <CompanyFlex />
              <div className="flex flex-col mx-15 w-[500px] xl:w-sm">
                <span className="text-6xl font-bold text-white mb-3">
                  What we Offer
                </span>
                <span className="text-xl text-white">
                  The team at Illini Electric Motorsports applies knowledge
                  learned in the classroom and develops new skills. By
                  designing, manufacturing, and testing our vehicle, members get
                  unique real world experience and incredible exposure to
                  knowledge, technology, and industry professionals. Our alumni
                  network is over 1000 strong and spans a wide array of
                  industries, with past members now working at companies like
                  Tesla, NVIDIA, PwC, SpaceX, Raytheon, and more.
                </span>
              </div>
            </div>
          </div>

          <div
            ref={joinRef}
            className={`transition-opacity ease-in-out duration-1000 flex justify-center my-15 ${
              joinIsVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col xl:flex-row p-10 rounded-lg w-full items-center justify-center my-10">
              <img
                className="size-[550px] object-cover rounded-xl"
                src={team_pic}
                alt=""
              />
              <div className="flex flex-col mx-15 w-[500px] xl:w-sm">
                <span className="text-6xl font-bold text-white mb-3">
                  Who can Join?
                </span>
                <span className="text-xl text-white">
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
                  <div
                    ref={joinRef}
                    className={`absolute top-0 right-0 h-[100px] w-[700px] flex z-50 bg-black flex-row transition-transform duration-1000 origin-right ${
                      joinIsVisible ? "scale-x-0" : "scale-x-100"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
