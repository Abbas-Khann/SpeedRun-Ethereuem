import Link from "next/link";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import logoDefault from "../../public/img/logoDefault.png";
import logoLight from "../../public/img/logoLight.png";
import * as Scroll from "react-scroll";
import CustomButton from "./CustomButton";
import toggleLight from "../../public/img/Icons/toggle.svg";
import toggleDark from "../../public/img/Icons/toggleDark.svg";

type Props = {
  toggleTheme: () => void;
  theme: string;
};

const Navbar = ({ toggleTheme, theme }: Props) => {
  // --------- States here -------------
  const [expand, setExpand] = useState<boolean>(false);
  let scroll = Scroll.animateScroll;

  const allScrolls = {
    home: (): void => {
      scroll.scrollTo(0);
      setExpand(!expand);
    },
    Solutions: (): void => {
      scroll.scrollTo(900);
      setExpand(!expand);
    },
    SolutionsM: (): void => {
      scroll.scrollTo(800);
      setExpand(!expand);
    },
    Team: (): void => {
      scroll.scrollTo(4500);
      setExpand(!expand);
    },
    TeamM: (): void => {
      scroll.scrollTo(3700);
      setExpand(!expand);
    },
  };

  return (
    <nav
      className="max-w-full bg-base-100 flex justify-between items-center py-6 px-6 lg:flex lg:justify-between lg:px-0 relative lg:items-center text-base-content"
      data-theme={theme}
    >
      {!expand ? (
        <a
          href="#"
          className="self-center ml-2 lg:hidden"
          onClick={() => {
            setExpand(!expand);
          }}
        >
          <BiMenu className="text-5xl" />
        </a>
      ) : (
        <a
          href="#"
          className="self-center text-center lg:hidden fixed left-[80%] z-50 rounded-full ml-3 bg-gradient-to-r from-primary to-secondary px-2 py-2"
          onClick={() => {
            setExpand(!expand);
          }}
        >
          <MdClose className="text-4xl text-white" />
        </a>
      )}
      <div className="flex justify-between lg:justify-start w-[250px] -order-1">
        <div className="flex items-start justify-start space-x-2 w-auto cursor-pointer sm:ml-5">
          <Link href="/">
            <Image
              src={theme == "default" ? logoDefault : logoLight}
              alt="logo"
              width={180}
            />
          </Link>
        </div>
      </div>
      <ul className="hidden lg:flex justify-around items-center basis-2/5 text-lg mt-5">
        <Link href="/">
          <div className="cursor-pointer relative group py-0.5 px-0.5 ">
            <div
              className="absolute -inset-1 group-hover:bg-gradient-to-r from-primary via-base
             to-secondary blur-lg transition-all"
            ></div>
            <button
              className="relative group-hover:border-t-2 border-secondary py-1 transition-all text-xl font-light"
              onClick={allScrolls.home}
            >
              Home
            </button>
          </div>
        </Link>
        <Link href="/">
          <div className="cursor-pointer relative group py-0.5 px-0.5 ">
            <div
              className="absolute -inset-1 group-hover:bg-gradient-to-r from-primary via-base
              to-secondary blur-lg transition-all"
            ></div>
            <button
              className="relative group-hover:border-t-2 border-secondary py-1 transition-all text-xl font-light"
              onClick={allScrolls.Team}
            >
              Team
            </button>
          </div>
        </Link>
        <Link href="/">
          <div className="cursor-pointer relative group py-0.5 px-0.5 ">
            <div
              className="absolute -inset-1 group-hover:bg-gradient-to-r from-primary via-base
              to-secondary blur-lg transition-all"
            ></div>
            <button
              className="relative group-hover:border-t-2 border-secondary py-1 transition-all text-xl font-light"
              onClick={allScrolls.Solutions}
            >
              Solutions
            </button>
          </div>
        </Link>
      </ul>
      <div className="hidden lg:flex items-center justify-between w-[250px] relative">
        <div className="flex h-full cursor-pointer">
          <Image
            src={theme == "default" ? toggleLight : toggleDark}
            alt="toggle"
            onClick={toggleTheme}
          />
        </div>

        <CustomButton />
      </div>
      {/* --------------- Mobile and Tablets --------------- */}
      {/* ------------- Transition for Mobile Menu -------------- */}
      <Transition
        show={expand}
        enter="transition ease-out duration-1000 transform"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-1000 transform"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
        className="lg:hidden w-screen h-screen fixed overflow-y left-0 top-0 z-10"
      >
        <div
          className="lg:hidden flex flex-col items-center h-full px-4 w-full bg-base-100 py-10 md:px-8"
          id="mobile-menu"
        >
          <div className="flex justify-center space-x-2 items-center w-auto mb-24">
            <Link
              href="/"
              onClick={() => {
                setExpand(!expand);
              }}
            >
              <Image
                src={theme == "default" ? logoDefault : logoLight}
                width={259}
                height={180}
                alt="logo"
              />
            </Link>
          </div>
          <ul className=" flex flex-col justify-between basis-2/6 items-start mb-6">
            <Link href="/">
              <button
                className="cursor-pointer  transition-all text-3xl mb-4"
                onClick={allScrolls.home}
              >
                Home
              </button>
            </Link>
            <Link href="/">
              <button
                className="cursor-pointer  transition-all text-3xl mb-4"
                onClick={allScrolls.TeamM}
              >
                Team
              </button>
            </Link>
            <Link href="/">
              <button
                className="cursor-pointer  transition-all text-3xl mb-4"
                onClick={allScrolls.SolutionsM}
              >
                Solutions
              </button>
            </Link>
          </ul>
          <div className="flex items-center ">
            <CustomButton />
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
