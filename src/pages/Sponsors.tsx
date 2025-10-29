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
            <span className="text-transparent bg-linear-to-r from-[#37445A] to-[#FA6300] bg-clip-text italic">
              Our sponsors
            </span>{" "}
            <br /> make what we do possible.
          </span>
          <a
            className={`group relative items-center flex flex-row text-neutral-400 text-xl cursor-pointer text-nowrap w-fit py-3 transition-all duration-300 gap-1`}
            href="/sponsor-info"
          >
            <span className="font-light">
              Learn the why and how of becoming a sponsor today.
            </span>
            <FiArrowRight className="absolute opacity-0 -right-5 transition-all duration-300 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0" />
          </a>
        </div>
        <div className="flex flex-col mx-auto my-10">
          <ShinyText
            color="lithium"
            speed={5}
            className="text-5xl text-left mb-10"
            text="Lithium Level"
          />
          <SponsorDisplay
            icons={lithiumIcons}
            numCols={5}
            numRows={1}
            iconSizePx={200}
          />
        </div>
        <div className="flex flex-col mx-auto my-10">
          <ShinyText
            color="gold"
            speed={5}
            className="text-5xl text-left mb-10"
            text="Gold Level"
          />
          <SponsorDisplay
            icons={goldIcons}
            numCols={7}
            numRows={3}
            iconSizePx={120}
          />
        </div>
        <div className="flex flex-col mx-auto my-10">
          <ShinyText
            color="orange"
            speed={5}
            className="text-5xl text-left mb-10"
            text="Orange Level"
          />
          <SponsorDisplay
            icons={lithiumIcons}
            numCols={5}
            numRows={1}
            iconSizePx={100}
          />
        </div>
        <div className="flex flex-col mx-auto my-10">
          <ShinyText
            color="blue"
            speed={5}
            className="text-5xl text-left mb-10"
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
