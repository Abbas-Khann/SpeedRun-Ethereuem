/* eslint-disable react/no-unescaped-entities */
import multisig from "../../../public/img/Card/multiSig.svg";
import Image from "next/image";

const MultisigCard = () => {
  return (
    <article className="rounded-xl bg-gradient-to-r from-primary to-secondary max-lg:bg-gradient-to-t p-4 sm:p-6 lg:p-8 w-[90vw] xl:w-4/6 md:w-5/6 m-4">
      <div className="flex max-lg:flex-col-reverse justify-between items-center sm:gap-8">
        <div className="max-sm:pt-8 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
          <strong className="text-secondary-content text-xl">
            Challenge #7
          </strong>
          <h3 className="mb-4 text-lg font-medium sm:text-xl">
            <span className="italic text-primary-content">
              👛 Multisig Wallet Challenge
            </span>
          </h3>
          <p className="lg:pl-4 mt-1 text-sm sm:text-base text-secondary-content">
            👩‍👩‍👧‍👧 Using A Smart Contract As A Wallet We Can Secure Assets By
            Requiring Multiple Accounts To "Vote" On Transactions.<br></br> The
            Contract Will Keep Track Of Transactions In An Array Of Structs And
            Owners Will Confirm Or Reject Each One. <br></br> Any Transaction
            With Enough Confirmations Can "Execute".
          </p>
          <div className="mt-4 sm:flex sm:items-center sm:gap-2 max-sm:flex max-lg:justify-center lg:pl-4">
            <button className="mt-4 bg-gradient-to-r from-primary to-secondary cursor-pointer border-2 px-6 py-2 rounded-sm text-secondary-content">
              Solution
            </button>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="max-lg:w-[300px] max-md:w-[250px] lg:w-[332px]"
        >
          <Image src={multisig} alt="multisig" />
        </div>
      </div>
    </article>
  );
};

export default MultisigCard;
