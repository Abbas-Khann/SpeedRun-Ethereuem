import { useState } from "react";
import TeamCard from "./TeamCard";
import abbasPfp from "../../public/img/abbas-pfp.png";
import cjPfp from "../../public/img/cj-pfp.png";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "Abbas Khan",
      title: "Designer/Full-Stack-Developer",
      discord: "https://discord.com/users/1078669231241048074",
      twitter: "https://twitter.com/KhanAbbas201",
      github: "https://github.com/Abbas-Khann",
      pfp: abbasPfp,
    },
    {
      name: "CJski",
      title: "Front-end Developer",
      discord: "https://discord.com/users/403509600629817344",
      twitter: "https://twitter.com/cjski_web3",
      github: "https://github.com/CJskii",
      pfp: cjPfp,
    },
  ]);
  return (
    <div className="flex flex-col justify-center items-center lg:w-4/6 gap-16 my-16">
      <h1 className="text-center font-bold text-5xl sm:text-7xl">Team</h1>
      <div className="flex justify-center items-center gap-16 max-md:flex-col md:gap-8">
        {teamMembers.map((member, index) => {
          return <TeamCard member={member} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Team;
