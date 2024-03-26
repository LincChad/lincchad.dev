import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import animationData from "../assets/animation_lmqmcd6d.json";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 py-[100px] flex flex-col justify-center">
        <p className="text-[#00df9a]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Lincoln Chadburn
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a full stack developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a full-stack web developer. Currently, I'm focused on building
          resposive full-stack web applications.
        </p>
        <div className="md:inline-flex">
          <Link to="work" smooth={true} duration={500}>
            <button className="text-pink-600 group border-y-2 border-x-2 border-x-[#0a192f] px-16 py-3 my-2 flex items-center bg-black hover:border-y-2 hover:border-x-2 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2" />
              </span>
            </button>
          </Link>
          <div className="bg[#0a192f] h-auto w-full inline-flex justify-center z-0">
            <Lottie
              className="h-60 md:h-[500px]"
              animationData={animationData}
              loop={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
