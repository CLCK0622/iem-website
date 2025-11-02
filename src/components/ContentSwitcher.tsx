import React, { useState } from "react";

interface ContentSwitcherProps {
  items: { label: string; content: React.ReactNode }[];
}

const ContentSwitcher = ({ items }: ContentSwitcherProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="flex flex-row rounded-2xl border-[0.25px] border-neutral-400/50 bg-neutral-900 p-5">
      <div className="flex flex-col mr-5">
        {items.map((item, index) => (
          <span
            onClick={() => setActiveIndex(index)}
            className={`${
              activeIndex == index
                ? "bg-clip-text text-transparent bg-linear-to-r from-[#2c5191] to-[#FA6300] ring-[0.25px] ring-white"
                : "text-white hover:text-neutral-200"
            } rounded-lg text-xl p-3 text-nowrap cursor-pointer transition-all duration-300`}
          >
            {item.label}
          </span>
        ))}
      </div>
      <div className="w-[0.25px] mx-1 self-stretch bg-neutral-400/50"></div>
      <div className="w-full rounded-xl ml-5">{items[activeIndex].content}</div>
    </div>
  );
};

export default ContentSwitcher;
