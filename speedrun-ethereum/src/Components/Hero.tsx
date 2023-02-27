import heroImgDefault from "../../public/img/Hero/variant1.svg";
import heroImgDefault2 from "../../public/img/Hero/variant2.svg";
import heroImgLight from "../../public/img/Hero/variant3.svg";
import heroImgLight2 from "../../public/img/Hero/variant4.svg";
import Image from "next/image";
import styles from "../styles/Grid.module.css";
const Hero = ({ theme }: { theme: string }) => {
  return (
    <div
      className={`flex relative flex-col justify-center items-center min-h-full lg:grid lg:w-1/2 md:pb-8 ${styles.grid}`}
    >
      <h1 className="text-center text-base-content md:py-4 px-4 font-bold text-5xl sm:text-7xl col-start-4 col-span-6 row-start-3 row-span-2 lg:col-start-3 lg:col-span-8 lg:row-start-3 lg:row-span-3 place-self-center">
        Let&apos;s Build dApps On Ethereum
      </h1>
      <div className="max-md:w-full md:w-4/6 md:self-start flex justify-start items-center pb-4 p-2 w-[30vw] col-start-1 col-span-3 row-start-2 row-span-3 min-xl:-ml-28 lg:row-start-4 lg:row-span-4 lg:col-start-1 lg:col-span-6 lg:w-[33vw] lg:-ml-16 ">
        <Image
          className="w-full"
          src={theme == "default" ? heroImgDefault2 : heroImgLight2}
          alt="hero2"
          width={200}
          height={200}
        />
      </div>
      <p className="text-md text-center max-lg:py-8 md:w-5/6 px-4 text-lg sm:text-xl col-start-5 col-span-4 row-start-5 row-span-3 lg:row-start-6 lg:col-start-5 lg:px-0 lg:col-span-5 lg:row-span-2 place-self-center lg:place-self-start">
        Lorem ipsum dolor sit amet consectetur. Sed leo venenatis pellentesque
        neque.
      </p>
      <div className="max-md:w-full md:w-4/6 md:pb-8 flex justify-end w-[33vw] col-span-6 col-start-9 row-start-5 row-span-3 lg:self-center lg:row-start-6 lg:row-span-3 lg:col-start-8 lg:col-span-5 lg:w-[33vw] place-self-end lg:-mr-12">
        <Image
          className="w-full"
          src={theme == "default" ? heroImgDefault : heroImgLight}
          alt="hero"
          width={200}
          height={200}
        />
      </div>
      {/* Add scroll function */}
      <button className="mt-10 bg-transparent border-2 border-base-content py-2 w-[180px] rounded-sm hover:bg-gradient-to-r from-primary to-secondary hover:animate-bounce row-start-5 col-start-6 col-span-2 place-self-center lg:row-start-7 lg:row-span-3 lg:col-start-6 lg:col-span-2 lg:self-center">
        <a href="#solutions">Get Started</a>
      </button>
    </div>
  );
};

export default Hero;
