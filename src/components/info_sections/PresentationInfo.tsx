import pic from "@/assets/pres_pic1.jpg";
import { useState } from "react";

const PresentationInfo = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <div className="flex flex-col m-3 text-left items-center">
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
      <div className="flex flex-col mx-2">
        <span className="text-white text-5xl mb-3">Reach the future.</span>
        <span className="text-white font-light">
          Present tech talks, host networking events, and connect with our
          talented members through company presentations. Some events we've had
          in the past include a car show from Rivian, a series of tech talks
          from Tesla, recruiting events from Blue Origin and John Deere, and
          many, many more. These are a great opportunity to both inform
          engineers about your products, and to connect with them for future
          employment opportunities.
        </span>
      </div>
    </div>
  );
};

export default PresentationInfo;
