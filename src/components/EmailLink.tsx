import React, { useState } from "react";

import { LuCopyPlus } from "react-icons/lu";
import { LuCopyCheck } from "react-icons/lu";

const EmailLink = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigator.clipboard
      .writeText("team@illinielectricmotorsports.com")
      .then(() => {
        setCopied(true);
      });
  };
  return (
    <a
      className="flex text-lg px-3 py-2 my-1 mx-2 rounded-lg justify-between hover:bg-neutral-700 transition duration-300 ease-in-out items-center"
      href="/email"
      onClick={copyEmail}
    >
      <span className="font-light">Email</span>
      {!copied && (
        <LuCopyPlus className="group-hover:opacity-100 opacity-0 transition duration-300" />
      )}
      {copied && <LuCopyCheck />}
    </a>
  );
};

export default EmailLink;
