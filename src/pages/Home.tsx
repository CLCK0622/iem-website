import { useIsVisible } from "../util/visibilityDetector.ts";
import { useEffect, useRef, useState } from "react";

import ButtonLink from "../components/ButtonLink.tsx";
import video from "../assets/IEM-video-final.mp4";
import team_pic from "../assets/iem-team-pic.png";
import CompanyBanner from "../components/CompanyBanner.tsx";
import CountUp from "../components/Counter.tsx";
import { companyIcons, sponsorIcons } from "../util/companyIcons.ts";
import logo from "../assets/iem-logo.svg";
import landing1 from "../assets/landing-card-1.png";
import landing2 from "../assets/landing-card-2.png";

import { FaUserTie } from "react-icons/fa6";
import { FaToolbox } from "react-icons/fa";
import { RiUserCommunityLine } from "react-icons/ri";
import { GrGrow } from "react-icons/gr";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Home() {
  // const historyRef = useRef<HTMLDivElement>(null);
  // // const historyIsVisible = useIsVisible(historyRef);

  const welcomeRef = useRef<HTMLDivElement>(null);
  const welcomeVisible = useIsVisible(welcomeRef, 0.3);

  const bannerRef = useRef<HTMLDivElement>(null);
  const bannerIsVisible = useIsVisible(bannerRef, 0.3);

  const offerRef = useRef<HTMLDivElement>(null);
  const offerIsVisible = useIsVisible(offerRef, 0.3);

  const statsRef = useRef<HTMLDivElement>(null);
  const statsIsVisible = useIsVisible(statsRef, 0.3);

  const majors = [
    "Aerospace Engineering",
    "Mechanical Engineering",
    "Business",
    "Electrical Engineering",
    "Computer Science",
    "Systems Engineering",
    "Accounting",
  ];

  const [majorSelection, setMajorSelection] = useState<string>(majors[0]);
  const [exiting, setExiting] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExiting(true);
      setTimeout(() => {
        setMajorSelection((prev) => {
          let index = majors.indexOf(prev);
          return majors[(index + 1) % majors.length];
        });

        setExiting(false);
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="container min-w-screen p-0">
        <div className="min-h-screen">
          <video className="video relative h-[98vh]" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>

          <div className="mid-container -bottom-25 pb-35 h-fit w-full absolute">
            <div className="flex flex-col text-9xl md:text-9xl text-white/90 font-[550] mx-20">
              <span className="">Engineering</span>
              <span>Excellence.</span>
              <div className="flex flex-row">
                <ButtonLink path="/teams">Our Teams</ButtonLink>
                <ButtonLink path="/join">Join Us</ButtonLink>
              </div>
            </div>
          </div>

          <div
            ref={welcomeRef}
            className={`${
              welcomeVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-30"
            } flex flex-col items-start transition-all duration-700 top-20 my-30`}
          >
            <span className="text-gray-200 xl:w-fit w-min font-extralight text-left text-5xl sm:text-8xl mb-10 md:mx-60">
              Welcome to <br />
              <span className="font-[550] text-white z-10">
                Illini Electric Motorsports.{" "}
              </span>
              <div
                className={`${
                  welcomeVisible ? "scale-x-100" : "scale-x-0"
                } h-[10px] w-full transition-transform delay-700 duration-1000 rounded-full origin-left bg-linear-to-r from-orange-600 to-blue-800`}
              ></div>
            </span>
            <div
              className={`${
                welcomeVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-30"
              } transition-all duration-800 delay-500 flex flex-col xl:flex-row items-center justify-center mx-10 md:mx-20`}
            >
              <div className="landing-card shadow-2xl shadow-white/20 items-center flex flex-col md:flex-row xl:flex-col w-full md:w-2/3 xl:w-1/4 bg-black/50 border-[0.25px] border-gray-400 p-5 rounded-2xl mx-5 mt-5">
                <img
                  className="w-9/10 md:w-1/2 xl:h-[220px] xl:w-[400px] rounded-lg object-cover xl:mb-5"
                  src={landing1}
                  alt=""
                />
                <div className="flex flex-col md:mx-5 xl:mx-0 md:my-0 xl:mt-5">
                  <span className="text-white text-2xl mb-2">
                    An Engineering Club
                  </span>
                  <span className="text-gray-200 font-light text-base">
                    With our electrical, mechanical, and logistical teams (and a
                    multitude of different subteams under each), we engage in
                    every aspect of an engineering project, from design and
                    prototyping to software development to club infrastructure
                    to manufacturing.
                  </span>
                </div>
              </div>
              <div className="landing-card shadow-2xl shadow-white/20 items-center flex flex-col md:flex-row xl:flex-col w-full md:w-2/3 xl:w-1/4 bg-black/50 border-[0.25px] border-gray-400 p-5 rounded-2xl mx-5 mt-5">
                <img
                  className="w-9/10 md:w-1/2 xl:h-[220px] xl:w-[400px] rounded-lg object-cover mb-5"
                  src={landing2}
                  alt=""
                />
                <div className="flex flex-col md:mx-5 xl:mx-0 md:my-0 xl:mt-5">
                  <span className="text-white text-2xl mb-2">
                    A Team Project
                  </span>
                  <span className="text-gray-200 font-light text-base">
                    Our teams do very different things, but are all focused on a
                    common goal: building a competition-ready car. Effectively
                    managing this ambitious project is challening, and requires
                    us to plan, collaborate, and work hard to meet deadlines.
                  </span>
                </div>
              </div>
              <div className="landing-card shadow-2xl shadow-white/20 items-center flex flex-col md:flex-row xl:flex-col w-full md:w-2/3 xl:w-1/4 bg-black/50 border-[0.25px] border-gray-400 p-5 rounded-2xl mx-5 mt-5">
                <img
                  className="w-9/10 md:w-1/2 xl:h-[220px] xl:w-[400px] rounded-lg object-cover mb-5"
                  src={team_pic}
                  alt=""
                />
                <div className="flex flex-col md:mx-5 xl:mx-0 md:my-0 xl:mt-5">
                  <span className="text-white text-2xl mb-2">A Community</span>
                  <span className="text-gray-200 font-light text-base">
                    With everyone unified under a common goal, our teams must
                    work together closely and communicate effectively in order
                    to achieve our goal. We aim to unite people from all
                    backgrounds and disciplines in an effort to build a strong,
                    tight-knit community.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={bannerRef}
            className={`${
              bannerIsVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-200"
            } banner flex flex-col mx-auto w-3/4 xl:w-2/3 justify-between my-30`}
          >
            <div className="">
              <span className="text-white text-2xl font-extralight">
                Our members have gone on to work at places like
              </span>
              <CompanyBanner icons={companyIcons} goesLeft />
              <span className="text-white text-2xl font-extralight">
                We're sponsored by companies like
              </span>
              <CompanyBanner icons={sponsorIcons} goesLeft />
            </div>
          </div>

          <div
            ref={offerRef}
            className={`transition-all ease-in-out duration-800 flex justify-center my-30 ${
              offerIsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <div className="flex flex-col p-10 rounded-lg w-full items-center justify-center mx-20">
              <span className="text-6xl font-extralight text-white mb-8">
                Gain access to:
              </span>
              <div className="flex flex-col mx-15 w-5/6 xl:w-3/5">
                <div className="flex flex-col">
                  <Carousel className="relative mx-10" opts={{ loop: true }}>
                    <CarouselContent className="-ml-10 py-10">
                      <CarouselItem className="flex justify-center md:basis-2/3 pl-10">
                        <div className="flex flex-col border-[0.25px] border-gray-400/50 rounded-2xl p-5 shadow-xl shadow-white/8">
                          <div className="flex justify-between items-center mb-5">
                            <span className="text-white text-xl">
                              Company Events
                            </span>
                            <FaUserTie className="text-white size-[25px]" />
                          </div>
                          <span className="text-gray-200 text-base font-extralight">
                            We host networking events with companies like John
                            Deere, Rivian, Boeing, GM, SpaceX, and others. Build
                            your network and learn about these fantastic
                            companies!
                          </span>
                        </div>
                      </CarouselItem>
                      <CarouselItem className="flex justify-center md:basis-2/3 pl-10">
                        <div className="flex flex-col border-[0.25px] border-gray-400/50 rounded-2xl p-5 shadow-xl shadow-white/8">
                          <div className="flex justify-between items-center mb-5">
                            <span className="text-white text-xl">
                              Constant Growth Opportunities
                            </span>
                            <GrGrow className="text-green-500 size-[25px]" />
                          </div>
                          <span className="text-gray-200 text-base font-extralight">
                            We are always on the lookout for things to improve
                            within our projects. There is always something to
                            work on, whether you are a complete beginner or a
                            seasoned expert!
                          </span>
                        </div>
                      </CarouselItem>
                      <CarouselItem className="flex justify-center md:basis-2/3 pl-10">
                        <div className="flex flex-col border-[0.25px] border-gray-400/50 rounded-2xl p-5 shadow-xl shadow-white/8">
                          <div className="flex justify-between items-center mb-5">
                            <span className="text-white text-xl">
                              Hands-on Experience
                            </span>
                            <FaToolbox className="text-[#734700] size-[25px]" />
                          </div>
                          <span className="text-gray-200 text-base font-extralight">
                            We offer the opportunity to design, prototype, and
                            build with industry-standard tools. Sharpen your
                            skillset with tools like CAD (PTC Creo), GitLab,
                            Docker, Matlab, and others.
                          </span>
                        </div>
                      </CarouselItem>
                      <CarouselItem className="flex justify-center md:basis-2/3 pl-10">
                        <div className="flex flex-col border-[0.25px] border-gray-400/50 rounded-2xl p-5 shadow-xl shadow-white/8">
                          <div className="flex justify-between items-center mb-5">
                            <span className="text-white text-xl">
                              Strong and Experienced Network
                            </span>
                            <RiUserCommunityLine className="text-blue-300 size-[25px]" />
                          </div>
                          <span className="text-gray-200 text-base font-extralight">
                            Our project leads are very experienced and talented
                            people, and always willing to help. Connect to learn
                            more about their experiences, engineering,
                            recruiting, and tools.
                          </span>
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="cursor-pointer bg-black text-white border-none hover:bg-black hover:text-white hover:scale-x-103 hover:-translate-x-3 transition duration-300 -left-20" />
                    <CarouselNext className="cursor-pointer bg-black text-white border-none hover:bg-black hover:text-white hover:scale-x-103 hover:translate-x-3 transition duration-300 -right-20" />

                    <div className="absolute xl:opacity-100 opacity-0 right-0 top-0 rotate-180 gradient-left h-full w-[100px] z-10"></div>
                    <div className="absolute xl:opacity-100 opacity-0 left-0 top-0 gradient-left h-full w-[100px] z-10"></div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={statsRef}
            className={`flex flex-col items-center transition-all ease-in-out duration-800 flex justify-center my-30 ${
              statsIsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <div className="flex flex-row w-full justify-center text-start">
              <span
                className={`${
                  exiting ? "translate-y-15" : "translate-y-0"
                } text-white text-6xl font-extralight text-center mb-10 transition-all duration-800`}
              >
                We have students in <br />
                <span
                  className={`${
                    exiting
                      ? "opacity-0 translate-y-4"
                      : "opacity-100 translate-y-0"
                  } text-blue-600 transition-all duration-800 inline-block font-[750] z-0`}
                >
                  {majorSelection}
                </span>
              </span>
            </div>
            <div className="flex flex-col items-center w-full transition-all ease-in-out z-10 duration-800 flex justify-center">
              <div className="flex flex-col w-3/5 text-center border-[0.25px] border-gray-400/50 shadow-xl shadow-white/8 my-5 p-3 py-10 rounded-3xl">
                <span className="text-2xl text-gray-200 font-light mb-5">
                  About our members
                </span>
                <div className="flex flex-col xl:flex-row justify-around mb-5">
                  <CountUp end={2000} duration={3000} label="Members" />
                  <CountUp end={20} duration={2500} label="Majors" />
                  <CountUp end={1000} duration={3000} label="Alumni" />
                  <CountUp end={4} duration={1000} label="Continents" />
                </div>
                <span className="text-2xl text-gray-200 font-light">
                  No experience required.
                </span>
              </div>
              <div className="flex flex-col items-center my-5">
                <div className="flex flex-row">
                  <ButtonLink path="/teams">Explore our Teams</ButtonLink>
                  <ButtonLink path="/join">Discover how to Join</ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
