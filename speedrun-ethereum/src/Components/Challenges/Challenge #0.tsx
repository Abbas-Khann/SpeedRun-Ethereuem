/* eslint-disable react/no-unescaped-entities */
import nft from "../../../public/img/Card/simpleNFT.svg";
import Image from "next/image";

const CardNFT = () => {
  return (
    <article className="rounded-xl bg-gradient-to-r from-primary to-secondary max-lg:bg-gradient-to-t p-4 sm:p-6 lg:p-8 lg:w-4/6 md:w-5/6 m-4">
      <div className="flex max-lg:flex-col-reverse justify-between items-center sm:gap-8">
        <div className="max-sm:pt-8 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
          <strong className="text-white text-xl">Challenge #0</strong>

          <h3 className="mb-4 text-lg font-medium sm:text-xl">
            <span className="italic text-[#00cc55]">Simple NFT 🎟 Example</span>
          </h3>

          <p className="lg:pl-4 mt-1 text-sm sm:text-base">
            🎫 Create A Simple NFT To Learn Basics Of 🏗 Scaffold-eth. <br></br>
            You'll use 👷‍♀️ HardHat To Compile And Deploy Smart Contracts.{" "}
            <br></br>
            Then, You'll Use A Template React App Full Of Important Ethereum
            Components And Hooks. <br></br>
            Finally, You'll Deploy An NFT To A Public Network To Share With
            Friends! 🚀
          </p>

          <div className="mt-4 sm:flex sm:items-center sm:gap-2 max-sm:flex max-lg:justify-center lg:pl-4">
            <button className="mt-10 bg-gradient-to-r from-primary to-secondary cursor-pointer border-2 px-6 py-2 rounded-sm">
              Solution
            </button>
          </div>
        </div>
        <div className="max-lg:w-[250px]" aria-hidden="true">
          <Image src={nft} alt="nft" width={300} />
        </div>
      </div>
    </article>
  );
};

export default CardNFT;
