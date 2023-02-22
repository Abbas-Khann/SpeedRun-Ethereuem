import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:w-4/6 gap-16 my-16">
      <h1 className="text-center text-4xl">Our Team</h1>
      <div className="flex justify-center items-center gap-16 max-md:flex-col">
        {/* ----- Card 1 ----- */}
        <TeamCard />

        {/* ----- Card 2 ----- */}
        <TeamCard />
      </div>
    </div>
  );
};

export default Team;
