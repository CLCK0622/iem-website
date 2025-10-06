interface BannerProps {
  icons: {
    icon: string;
  }[];
  goesLeft: boolean;
}

const Banner = ({ icons, goesLeft }: BannerProps) => {
  return (
    <div
      className={`${
        goesLeft ? "left" : "right"
      } banner-wrapper rounded-xl flex max-w-screen w-full mx-auto my-5 transition-color duration-300`}
    >
      <div className={`${goesLeft ? "left" : "right"} wrapper`}>
        <div className={`${goesLeft ? "left" : "right"} icons`}>
          {icons.map(({ icon }) => (
            <img
              key={`${icon}-1`}
              className="company-icon flex-shrink-0 size-[100px] mx-10 object-contain transition-opacity ease-in-out duration-1000"
              src={icon}
              alt=""
            />
          ))}
        </div>
        <div className={`${goesLeft ? "left" : "right"} icons`}>
          {icons.map(({ icon }) => (
            <img
              key={`${icon}-2`}
              className="company-icon flex-shrink-0 size-[100px] mx-10 object-contain transition-opacity ease-in-out duration-1000"
              src={icon}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
