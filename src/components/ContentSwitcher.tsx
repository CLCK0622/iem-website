import React, { useState } from "react";

interface ContentSwitcherProps {
  items: { label: string; content: React.ReactNode }[];
}

const ContentSwitcher = ({ items }: ContentSwitcherProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="flex flex-row rounded-2xl bg-neutral-900 p-5">
      <div className="flex flex-col mr-2">
        {items.map((item, index) => (
          <span
            onClick={() => setActiveIndex(index)}
            className={`${
              activeIndex == index && "bg-neutral-800"
            } rounded-lg text-xl p-3 text-nowrap cursor-pointer hover:text-neutral-400 transition-all duration-300 text-white`}
          >
            {item.label}
          </span>
        ))}
      </div>
      <div className="w-full rounded-xl ml-2">{items[activeIndex].content}</div>
    </div>
  );
};

export default ContentSwitcher;
