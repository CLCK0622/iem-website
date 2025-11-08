import SponsorDisplay from "@/components/SponsorDisplay";
import { goldIcons, lithiumIcons } from "@/util/companyIcons";
import ShinyText from "../components/external/ShinyText";
import { FiArrowRight } from "react-icons/fi";

const Sponsors = () => {
  return (
    <div className="flex justify-center container min-w-screen">
      <div className="flex flex-col w-2/3 mt-20">
        <div>
          <span className="text-7xl text-white text-left mb-3">
            <span className="text-transparent bg-linear-to-r from-[#2c5191] to-[#FA6300] bg-clip-text italic">
              Our sponsors
            </span>{" "}
            <br /> make what we do possible.
          </span>
          <a
            className={`group relative items-center flex flex-row text-neutral-400 text-xl cursor-pointer text-nowrap w-fit py-3 transition-all duration-300 gap-1`}
            href="/sponsor-info"
          >
            <span className="font-light group-hover:text-neutral-300 transition-all duration-300">
              Learn the why and how of becoming a sponsor today
            </span>
            <FiArrowRight className="absolute -right-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2" />
          </a>
        </div>
        <div className="flex flex-col items-center my-10 p-6">
          <ShinyText
            color="lithium"
            speed={3}
            className="text-2xl italic mb-10"
            text="Lithium Level"
          />
          <SponsorDisplay
            icons={lithiumIcons}
            numCols={5}
            numRows={1}
            iconSizePx={200}
          />
        </div>
        <div className="flex flex-col items-center mx-auto my-10 p-6">
          <ShinyText
            color="gold"
            speed={3}
            className="text-2xl italic mb-10"
            text="Gold Level"
          />
          <SponsorDisplay
            icons={goldIcons}
            numCols={7}
            numRows={3}
            iconSizePx={120}
          />
        </div>
        <div className="flex flex-col items-center mx-auto my-10 p-6">
          <ShinyText
            color="orange"
            speed={3}
            className="text-2xl italic mb-10"
            text="Orange Level"
          />
          <SponsorDisplay
            icons={lithiumIcons}
            numCols={5}
            numRows={1}
            iconSizePx={100}
          />
        </div>
        <div className="flex flex-col items-center mx-auto my-10 p-6">
          <ShinyText
            color="blue"
            speed={3}
            className="text-2xl italic mb-10"
            text="Blue Level"
          />
          <SponsorDisplay
            icons={lithiumIcons}
            numCols={5}
            numRows={1}
            iconSizePx={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
