import pic from "@/assets/iem_car_pic_4.jpg";
import { useState } from "react";

const PresentationInfo = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <div className="flex flex-col m-3 text-left">
      {!imageLoaded && (
        <div className="w-full h-146 rounded-2xl mx-2 mb-5 bg-neutral-800 animate-pulse" />
      )}

      <img
        className={`w-full rounded-2xl mx-2 mb-5 ${
          imageLoaded ? "block" : "hidden"
        }`}
        src={pic}
        alt=""
        onLoad={() => setImageLoaded(true)}
        loading="eager"
      />
      <div className="flex flex-col ml-2">
        <span className="text-white text-5xl mb-3">Go on full display.</span>
        <span className="text-white font-light">
          Partnering with IEM offers premium brand visibility. Show off your
          company's contributions at the most prestigious collegiate engineering
          competition in the world. Logos can be placed on the vehicle, our
          jacket, and/or the website. With multiple top-10 global finishes, we
          will ensure your brand sits at the pinnacle of FSAE.
        </span>
      </div>
    </div>
  );
};

export default PresentationInfo;
