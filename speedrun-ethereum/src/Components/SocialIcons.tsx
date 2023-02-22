import React from "react";
import Image from "next/image";
import TeamCard from "./TeamCard";
const SocialIcons = ({
  discord,
  twitter,
  github,
}: {
  discord: string;
  twitter: string;
  github: string;
}) => {
  return (
    <div className="flex gap-4 p-4">
      <div className="bg-gradient-to-r from-primary to-secondary p-0.5 rounded-[6px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-150 cursor-pointer">
        <a
          href="#"
          target="_blank"
          className="rounded-[6px] flex justify-center items-center h-[43px] w-[43px] bg-base-100"
        >
          <Image src={discord} alt="discord" />
        </a>
      </div>
      <div className="bg-gradient-to-r from-primary to-secondary p-0.5 rounded-[6px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-150 cursor-pointer">
        <a
          href="#"
          target="_blank"
          className="rounded-[6px] flex justify-center items-center h-[43px] w-[43px] bg-base-100"
        >
          <Image src={twitter} alt="discord" />
        </a>
      </div>
      <div className="bg-gradient-to-r from-primary to-secondary p-0.5 rounded-[6px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-150 cursor-pointer">
        <a
          href="#"
          target="_blank"
          className="rounded-[6px] flex justify-center items-center h-[43px] w-[43px] bg-base-100"
        >
          <Image src={github} alt="discord" />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
