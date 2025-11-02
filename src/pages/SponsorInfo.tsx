import ContentSwitcher from "@/components/ContentSwitcher";

const items = [
  {
    label: "Company presentations",
    content: (
      <div className="flex flex-col">
        <span className="text-white text-4xl">
          Host events with top talent.
        </span>
        <span className="text-neutral-400">
          Host networking events, present tech talks, and interact with top
          talent.
        </span>
      </div>
    ),
  },
  {
    label: "Resume book access",
    content: (
      <span className="text-neutral-400">Get access to our resume book .</span>
    ),
  },
  {
    label: "Brand visibility",
    content: (
      <span className="text-neutral-400">
        We provide premium brand visibility with our sponsorship packages. Logos
        go on the car, jacket, and/or website.
      </span>
    ),
  },
  {
    label: "Social media promotion",
    content: (
      <span className="text-neutral-400">
        We routinely post pictures on social media of your company's products,
        detailing how they helped us in our operations.
      </span>
    ),
  },
];

const SponsorInfo = () => {
  return (
    <div className="flex justify-center container min-w-screen">
      <div className="flex flex-col w-2/3 mt-20">
        <div className="flex flex-col mb-10">
          <span className="text-white text-7xl">
            Interested in sponsoring us?
          </span>
          <span className="text-xl text-neutral-400">
            Sponsoring Illini Electric Motorsports includes premium brand
            visibility, extensive value-add benefits, and a strong partnership.
          </span>
        </div>
        <div>
          <ContentSwitcher items={items} />
        </div>
      </div>
    </div>
  );
};

export default SponsorInfo;
