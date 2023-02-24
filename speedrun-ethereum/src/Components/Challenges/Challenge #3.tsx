/* eslint-disable react/no-unescaped-entities */
import vendor from "../../../public/img/Card/tokenVendor.svg";
import Image from "next/image";

const BuidlCard = () => {
  return (
    <article className="rounded-xl bg-gradient-to-r from-primary to-secondary max-lg:bg-gradient-to-t p-4 sm:p-6 lg:p-8 w-[90vw] xl:w-4/6 md:w-5/6 m-4">
      <div className="flex max-lg:flex-col-reverse justify-between items-center sm:gap-8">
        <div className="max-sm:pt-8 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
          <strong className="text-white text-xl">Challenge #3</strong>

          <h3 className="mb-4 text-lg font-medium sm:text-xl">
            <span className="italic text-[#00cc55]">🏵 Join BuidlGuidl</span>
          </h3>

          <p className="lg:pl-4 mt-1 text-sm sm:text-base">
            The Buidlguidl Is A Curated Group Of Ethereum Builders Creating
            Products, Prototypes, And Tutorials To Enrich The Web3 Ecosystem.
            <br></br> A Place To Show Off Your Builds And Meet Other Builders.
            Start Crafting Your Web3 Portfolio By Submitting Your Dex, Multisig
            Or Svg Nft Build.
          </p>

          <div className="mt-4 sm:flex sm:items-center sm:gap-2 max-sm:flex max-lg:justify-center lg:pl-4">
            <button className="mt-4 bg-gradient-to-r from-primary to-secondary cursor-pointer border-2 px-6 py-2 rounded-sm">
              Solution
            </button>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="max-lg:w-[300px] max-md:w-[250px] lg:w-[412px]"
        >
          <Image src={vendor} alt="vendor" width={450} />
        </div>
      </div>
    </article>
  );
};

export default BuidlCard;
