import heroImg from "../../public/img/Hero/variant1.svg";
import heroImg2 from "../../public/img/Hero/variant2.svg";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="flex relative flex-col justify-center items-center min-h-full lg:w-1/2">
      <h1 className="text-4xl text-center text-base-content px-4 font-bold text-5xl sm:text-7xl">
        Let&apos;s Build dapps On Ethereum
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
      <p className="text-md text-center px-4 text-lg sm:text-xl ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis fugit expedita doloremque nulla enim iure!
      </p>
      <div className="w-full flex justify-end">
        <Image className="" src={heroImg} alt="hero" width={200} height={200} />
      </div>
      {/* Add scroll function */}
      <button className="mt-10 bg-transparent border-2 px-6 py-2 rounded-sm hover:bg-gradient-to-r from-primary to-secondary hover:animate-bounce">
        <a href="#solutions">Get Started</a>
      </button>
    </div>
  );
};

export default Hero;
