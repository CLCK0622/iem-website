import apple from "../assets/company-logos/apple-logo.svg";
import nvidia from "../assets/company-logos/nvidia-logo.svg";
import spacex from "../assets/company-logos/spacex-logo.svg";
import ford from "../assets/company-logos/ford-logo.png";
import tesla from "../assets/company-logos/tesla-logo.svg";
import cat from "../assets/company-logos/cat-logo.svg";
import pwc from "../assets/company-logos/pwc-logo.svg";
import raytheon from "../assets/company-logos/raytheon-logo.png";
import gm from "../assets/company-logos/gm-logo.png";
import { useRef } from "react";
import { useIsVisible } from "../util/visibilityDetector";

const CompanyFlex = () => {
  const appleRef = useRef<HTMLImageElement>(null);
  const appleIsVisible = useIsVisible(appleRef);

  const nvidiaRef = useRef<HTMLImageElement>(null);
  const nvidiaIsVisible = useIsVisible(nvidiaRef);

  const spacexRef = useRef<HTMLImageElement>(null);
  const spacexIsVisible = useIsVisible(spacexRef);

  const fordRef = useRef<HTMLImageElement>(null);
  const fordIsVisible = useIsVisible(fordRef);

  const teslaRef = useRef<HTMLImageElement>(null);
  const teslaIsVisible = useIsVisible(teslaRef);

  const catRef = useRef<HTMLImageElement>(null);
  const catIsVisible = useIsVisible(catRef);

  const pwcRef = useRef<HTMLImageElement>(null);
  const pwcIsVisible = useIsVisible(pwcRef);

  const raytheonRef = useRef<HTMLImageElement>(null);
  const raytheonIsVisible = useIsVisible(raytheonRef);

  const gmRef = useRef<HTMLImageElement>(null);
  const gmIsVisible = useIsVisible(gmRef);

  const className =
    "size-[150px] object-contain transition-opacity ease-in-out duration-1000";

  return (
    <div className="grid grid-cols-3 gap-5">
      <img
        ref={appleRef}
        className={`${className} ${
          appleIsVisible ? "opacity-100" : "opacity-0"
        }`}
        src={apple}
        alt=""
      />
      <img
        ref={nvidiaRef}
        className={`${className} ${
          nvidiaIsVisible ? "opacity-100" : "opacity-0"
        } delay-200`}
        src={nvidia}
        alt=""
      />
      <img
        ref={spacexRef}
        className={`${className} ${
          spacexIsVisible ? "opacity-100" : "opacity-0"
        } delay-400`}
        src={spacex}
        alt=""
      />
      <img
        ref={fordRef}
        className={`${className} ${
          fordIsVisible ? "opacity-100" : "opacity-0"
        } delay-200`}
        src={ford}
        alt=""
      />
      <img
        ref={teslaRef}
        className={`${className} ${
          teslaIsVisible ? "opacity-100" : "opacity-0"
        } delay-400`}
        src={tesla}
        alt=""
      />
      <img
        ref={catRef}
        className={`${className} ${
          catIsVisible ? "opacity-100" : "opacity-0"
        } delay-600`}
        src={cat}
        alt=""
      />
      <img
        ref={pwcRef}
        className={`${className} ${
          pwcIsVisible ? "opacity-100" : "opacity-0"
        } delay-400`}
        src={pwc}
        alt=""
      />
      <img
        ref={raytheonRef}
        className={`${className} ${
          raytheonIsVisible ? "opacity-100" : "opacity-0"
        } delay-600`}
        src={raytheon}
        alt=""
      />
      <img
        ref={gmRef}
        className={`${className} ${
          gmIsVisible ? "opacity-100" : "opacity-0"
        } delay-800`}
        src={gm}
        alt=""
      />
    </div>
  );
};

export default CompanyFlex;
