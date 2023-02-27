/* eslint-disable react/no-unescaped-entities */
import dynamicNFT from "../../../public/img/Card/dynamicSvgNFT.svg";
import Image from "next/image";

const DynamicNFTCard = () => {
  return (
    <article className="rounded-xl bg-gradient-to-r from-primary to-secondary max-lg:bg-gradient-to-t p-4 sm:p-6 lg:p-8 w-[90vw] xl:w-4/6 md:w-5/6 m-4">
      <div className="flex max-lg:flex-col-reverse justify-between items-center sm:gap-8">
        <div className="max-sm:pt-8 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
          <strong className="text-secondary-content text-xl">
            Challenge #8
          </strong>
          <h3 className="mb-4 text-lg font-medium sm:text-xl">
            <span className="italic text-primary-content">
              🎁 SVG NFT 🎫 Building Cohort Challenge
            </span>
          </h3>
          <p className="lg:pl-4 mt-1 text-sm sm:text-base text-secondary-content">
            🧙 Tinker Around With Cutting Edge Smart Contracts That Render Svgs
            In Solidity. <br></br>🧫 We Quickly Discovered That The Render
            Function Needs To Be Public... 🤔 <br></br>This Allows Nfts That Own
            Other Nfts To Render Their Stash. Just Wait Until You See An
            Optimistic Loogie And A Fancy Loogie Swimming Around In The Same
            Loogie Tank!
          </p>
          <div className="mt-4 sm:flex sm:items-center sm:gap-2 max-sm:flex max-lg:justify-center lg:pl-4">
            <button className="mt-4 bg-gradient-to-r from-primary to-secondary cursor-pointer border-2 px-6 py-2 rounded-sm text-secondary-content">
              Solution
            </button>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="max-lg:w-[300px] max-md:w-[250px] lg:w-[460px]"
        >
          <Image src={dynamicNFT} alt="dynamicNFT" />
        </div>
      </div>
    </article>
  );
};

export default DynamicNFTCard;
