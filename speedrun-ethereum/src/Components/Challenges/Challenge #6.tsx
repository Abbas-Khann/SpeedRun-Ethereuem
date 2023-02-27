/* eslint-disable react/no-unescaped-entities */
import state from "../../../public/img/Card/state.svg";
import Image from "next/image";

const StateCard = () => {
  return (
    <article className="rounded-xl bg-gradient-to-r from-primary to-secondary max-lg:bg-gradient-to-t p-4 sm:p-6 lg:p-8 w-[90vw] xl:w-4/6 md:w-5/6 m-4">
      <div className="flex max-lg:flex-col-reverse justify-between items-center sm:gap-8">
        <div className="max-sm:pt-8 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
          <strong className="text-secondary-content text-xl">
            Challenge #6
          </strong>
          <h3 className="mb-4 text-lg font-medium sm:text-xl">
            <span className="italic text-primary-content">
              📺 A State Channel Application Challenge
            </span>
          </h3>
          <p className="lg:pl-4 mt-1 text-sm sm:text-base text-secondary-content">
            🛣️ The Ethereum Blockchain Has Great Decentralization & Security
            Properties But These Properties Come At A Price: Transaction
            Throughput Is Low, And Transactions Can Be Expensive. <br></br> This
            Makes Many Traditional Web Applications Infeasible On A
            Blockchain... Or Does It? <br></br>State Channels Look To Solve
            These Problems By Allowing Participants To Securely Transact
            Off-chain While Keeping Interaction With Ethereum Mainnet At A
            Minimum.
          </p>
          <div className="mt-4 sm:flex sm:items-center sm:gap-2 max-sm:flex max-lg:justify-center lg:pl-4">
            <button className="mt-4 bg-gradient-to-r from-primary to-secondary cursor-pointer border-2 px-6 py-2 rounded-sm text-secondary-content">
              Solution
            </button>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="max-lg:w-[300px] max-md:w-[250px] lg:w-[500px]"
        >
          <Image src={state} alt="state" />
        </div>
      </div>
    </article>
  );
};

export default StateCard;
