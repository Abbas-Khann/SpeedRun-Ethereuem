import React from "react";
import Image from "next/image";
import TeamCard from "./TeamCard";
import style from "../styles/Animate.module.css";
const SocialIcons = ({
  discordImg,
  twitterImg,
  githubImg,
  discordLink,
  twitterLink,
  githubLink,
}: {
  discordImg: string;
  twitterImg: string;
  githubImg: string;
  discordLink: string;
  twitterLink: string;
  githubLink: string;
}) => {
  return (
    <div className="flex gap-4 p-4">
      <div
        className={`bg-gradient-to-r from-primary to-secondary p-0.5 rounded-[6px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-150 cursor-pointer ${style.animategradient}`}
      >
        <a
          href={discordLink}
          target="_blank"
          className="rounded-[6px] flex justify-center items-center h-[43px] w-[43px] bg-base-100"
          rel="noreferrer"
        >
          <Image src={discordImg} alt="discord" />
        </a>
      </div>
      <div
        className={`bg-gradient-to-r from-primary to-secondary p-0.5 rounded-[6px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-150 cursor-pointe ${style.animategradient}`}
      >
        <a
          href={twitterLink}
          target="_blank"
          className="rounded-[6px] flex justify-center items-center h-[43px] w-[43px] bg-base-100"
          rel="noreferrer"
        >
          <Image src={twitterImg} alt="discord" />
        </a>
      </div>
      <div
        className={`bg-gradient-to-r from-primary to-secondary p-0.5 rounded-[6px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-150 cursor-pointe ${style.animategradient}`}
      >
        <a
          href={githubLink}
          target="_blank"
          className="rounded-[6px] flex justify-center items-center h-[43px] w-[43px] bg-base-100"
          rel="noreferrer"
        >
          <Image src={githubImg} alt="discord" />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
