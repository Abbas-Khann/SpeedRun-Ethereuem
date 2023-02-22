/* eslint-disable react/no-unescaped-entities */
import heroImg from "../../public/img/Hero/variant1.svg";
import heroImg2 from "../../public/img/Hero/variant2.svg";
import Image from "next/image";
import styles from "../styles/Home.module.css";
const Hero = () => {
  return (
    <div className="flex relative flex-col justify-center items-center min-h-full lg:w-1/2">
      <h1 className="text-4xl text-center text-base-content px-4">
        Let's Learn How To Build On Ethereum
      </h1>
      <div className="w-full flex justify-start items-center pb-4 p-2">
        <Image
          className=""
          src={heroImg2}
          alt="hero2"
          width={200}
          height={200}
        />
      </div>
      <p className="text-md text-center px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
        praesentium quo eum ducimus a inventore odio, expedita ratione
        doloremque!
      </p>
      <div className="w-full flex justify-end">
        <Image className="" src={heroImg} alt="hero" width={200} height={200} />
      </div>
      <button className="btn mt-16 bg-transparent">Get Started</button>
      {/*  */}
    </div>
  );
};

export default Hero;
