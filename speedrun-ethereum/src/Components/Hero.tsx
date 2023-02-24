import heroImg from "../../public/img/Hero/variant1.svg";
import heroImg2 from "../../public/img/Hero/variant2.svg";
import Image from "next/image";
import styles from "../styles/Grid.module.css";
const Hero = () => {
  return (
    <div
      className={`flex relative flex-col justify-center items-center min-h-full lg:grid lg:w-1/2 ${styles.grid}`}
    >
      <h1 className="text-center text-base-content px-4 font-bold text-5xl sm:text-7xl lg:col-start-4 lg:col-span-6 lg:row-start-2 lg:row-span-2">
        Let&apos;s Build dApps On Ethereum
      </h1>
      <div className="w-full flex justify-start items-center pb-4 p-2 lg:w-[33vw] lg:col-start-1 lg:col-span-6 lg:row-start-2 lg:row-span-2 lg:-ml-16 lg:pt-8 ">
        <Image
          className="w-full"
          src={heroImg2}
          alt="hero2"
          width={200}
          height={200}
        />
      </div>
      <p className="text-md text-center px-4 text-lg sm:text-xl lg:col-start-5 lg:col-span-4 lg:row-start-4 lg:row-span-2 min-[1024px]:row-start-5 lg:self-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
        fugit expedita doloremque nulla enim iure!
      </p>
      <div className="w-full flex justify-end min-md:w-[33vw] lg:col-span-6 lg:col-start-9 lg:row-start-4 lg:row-span-3 lg:self-center">
        <Image
          className="w-full"
          src={heroImg}
          alt="hero"
          width={200}
          height={200}
        />
      </div>
      {/* Add scroll function */}
      <button className="mt-10 bg-transparent border-2 py-2 w-[180px] rounded-sm hover:bg-gradient-to-r from-primary to-secondary hover:animate-bounce row-start-6 col-start-6 col-span-2 self-center min-[1024px]:row-start-7">
        <a href="#solutions">Get Started</a>
      </button>
    </div>
  );
};

export default Hero;
