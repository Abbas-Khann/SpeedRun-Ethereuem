/* eslint-disable react/no-unescaped-entities */
import staking from "../../../public/img/Card/state.svg";
import Image from "next/image";

const StakingCard = () => {
  return (
    <article className="rounded-xl bg-gradient-to-r from-primary to-secondary max-lg:bg-gradient-to-t p-4 sm:p-6 lg:p-8 w-[90vw] xl:w-4/6 md:w-5/6 m-4">
      <div className="flex max-lg:flex-col-reverse justify-between items-center sm:gap-8">
        <div className="max-sm:pt-8 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
          <strong className="text-white text-xl">Challenge #1</strong>
          <h3 className="mb-4 text-lg font-medium sm:text-xl">
            <span className="italic text-[#00cc55]">
              🥩 Decentralized Staking App
            </span>
          </h3>

          <p className="lg:pl-4 mt-1 text-sm sm:text-base">
            🦸 A Superpower Of Ethereum Is Allowing You, The Builder, To Create
            A Simple Set Of Rules That An Adversarial Group Of Players Can Use
            To Work Together. <br></br>
            In This Challenge, You Create A Decentralized Application Where
            Users Can Coordinate A Group Funding Effort. The Users Only Have To
            Trust The Code.
          </p>

          <div className="mt-4 sm:flex sm:items-center sm:gap-2 max-sm:flex max-lg:justify-center lg:pl-4">
            <button className="mt-10 bg-gradient-to-r from-primary to-secondary cursor-pointer border-2 px-6 py-2 rounded-sm">
              Solution
            </button>
          </div>
        </div>
        <div aria-hidden="true" className="max-lg:w-[300px] max-md:w-[250px]">
          <Image src={staking} alt="staking" width={450} />
        </div>
      </div>
    </article>
  );
};

export default StakingCard;
