import React from "react";
import Image from "next/image";
import pfp from "../../public/img/cj-pfp.png";
import discord from "../../public/img/Icons/discord.svg";
import twitter from "../../public/img/Icons/twitter.svg";
import github from "../../public/img/Icons/github.svg";
import SocialIcons from "./SocialIcons";

const TeamCard = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary p-0.5 rounded-[12px] relative">
      <div className="flex flex-col w-[350px] h-[325px] justify-evenly items-center rounded-[12px] bg-base-100">
        {/* ----- Img + Text ----- */}
        <div className="flex justify-around items-center w-full">
          <div className="bg-gradient-to-b from-primary-focus to-secondary-focus rounded-[12px] m-2">
            <Image
              src={pfp}
              alt="pfp"
              className="h-[128px] w-[97px] rounded-[12px] pt-[2px] pl-[2px] pb-[6px] pr-[6px]"
            />
          </div>

          <div className="w-2/5">
            <h1 className="text-white text-xl">Abbas Khan</h1>
            <p className="text-white opacity-60 pt-1 text-sm">Full Stack Developer</p>
          </div>
        </div>
        {/* ------ Icons ----- */}
        <SocialIcons discord={discord} twitter={twitter} github={github} />
      </div>
    </div>
  );
};

export default TeamCard;
