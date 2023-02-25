import React from "react";
import Image from "next/image";
import discordImg from "../../public/img/Icons/discord.svg";
import twitterImg from "../../public/img/Icons/twitter.svg";
import githubImg from "../../public/img/Icons/github.svg";
import SocialIcons from "./SocialIcons";

const TeamCard = ({ member }: { member: any }) => {
  const { name, title, discord, twitter, github, pfp } = member;
  return (
    <div className="bg-gradient-to-r from-primary to-secondary p-0.5 rounded-[12px] relative">
      <div className="flex flex-col w-[350px] h-[325px] justify-evenly items-center rounded-[12px] bg-base-100 max-sm:w-[90vw]">
        {/* ----- Img + Text ----- */}
        <div className="flex justify-around items-center w-full">
          <div className="bg-gradient-to-b from-primary-focus to-secondary-focus rounded-[12px] m-2">
            <Image
              src={pfp}
              alt="pfp"
              className="h-[128px] w-[97px] rounded-[12px] pt-[2px] pl-[2px] pb-[6px] pr-[6px]"
              width={97}
              height={128}
            />
          </div>

          <div className="w-2/5">
            <h1 className="text-white text-xl">{name}</h1>
            <p className="text-white opacity-60 pt-1 text-sm">{title}</p>
          </div>
        </div>
        {/* ------ Icons ----- */}
        <SocialIcons
          discordImg={discordImg}
          twitterImg={twitterImg}
          githubImg={githubImg}
          discordLink={discord}
          twitterLink={twitter}
          githubLink={github}
        />
      </div>
    </div>
  );
};

export default TeamCard;
