/* eslint-disable react/no-unescaped-entities */
import vendor from "../../../public/img/Card/tokenVendor.svg";
import Image from "next/image";

const VendorCard = () => {
  return (
    <article className="rounded-xl bg-gradient-to-r from-primary to-secondary max-lg:bg-gradient-to-t p-4 sm:p-6 lg:p-8 w-[90vw] xl:w-4/6 md:w-5/6 m-4">
      <div className="flex max-lg:flex-col-reverse justify-between items-center sm:gap-8">
        <div className="max-sm:pt-8 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
          <strong className="text-secondary-content text-xl">
            Challenge #2
          </strong>

          <h3 className="mb-4 text-lg font-medium sm:text-xl">
            <span className="italic text-primary-content">🏵 Token Vendor</span>
          </h3>

          <p className="lg:pl-4 mt-1 text-sm sm:text-base text-secondary-content">
            🤖 Smart Contracts Are Kind Of Like "Always On" Vending Machines
            That Anyone Can Access. Let's Make A Decentralized, Digital Currency
            (An Erc20 Token). <br></br> Then, Let's Build An Unstoppable Vending
            Machine That Will Buy And Sell The Currency. <br></br>
            We'll Learn About The "Approve" Pattern For Erc20s And How Contract
            To Contract Interactions Work.
          </p>

          <div className="mt-4 sm:flex sm:items-center sm:gap-2 max-sm:flex max-lg:justify-center lg:pl-4">
            <button className="mt-4 bg-gradient-to-r from-primary to-secondary cursor-pointer border-2 px-6 py-2 rounded-sm text-secondary-content">
              Solution
            </button>
          </div>
        </div>
        <div aria-hidden="true" className="max-lg:w-[300px] max-md:w-[250px]">
          <Image src={vendor} alt="vendor" width={450} />
        </div>
      </div>
    </article>
  );
};

export default VendorCard;
