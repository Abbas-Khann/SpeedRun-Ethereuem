/* eslint-disable react/no-unescaped-entities */
import nft from "../../public/img/Card/simpleNFT.svg";
import Image from "next/image";

const CardNFT = () => {
  return (
    <div className="bg-gradient-to-br from-primary to-secondary flex flex-col m-4 py-4 px-2 rounded">
      <div className="flex flex-col justify-start items-center">
        <h1 className="text-xl font-bold">Challenge #0</h1>
        <span className="italic text-[#00cc55]">Simple NFT 🎟 Example</span>
        <p className="text-center py-2">
          🎫 Create a simple NFT to learn basics of 🏗 scaffold-eth. <br></br>
          You'll use 👷‍♀️ HardHat to compile and deploy smart contracts. <br></br>
          Then, you'll use a template React app full of important Ethereum
          components and hooks. <br></br>
          Finally, you'll deploy an NFT to a public network to share with
          friends! 🚀
        </p>
      </div>
      <div className="w-full flex justify-center items-center py-4">
        <Image src={nft} alt="nft" width={300} />
      </div>
      <div className="w-full flex justify-center items-center">
        <button className="btn-disabled p-2 border-[1px] border-[#007744] rounded bg-transparent">
          Solution
        </button>
      </div>
    </div>
  );
};

export default CardNFT;
