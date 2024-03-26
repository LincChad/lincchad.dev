import React from "react";
import Linc from "../assets/me.png";

const About = () => {
  return (
    <div name="about" className="w-full h-screen mb-36">
      <div className="flex flex-col justify-center items-center w-full h-full text-gray-300">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold p-1">
            <p>Hi, I'm Lincoln.</p>
            <img className="w-60 h-60 rounded-full mx-auto" src={Linc} alt="Linc"/>
          </div>
          <div className="flex justify-center my-auto">
            <p>
              As a passionate software developer, I thrive on crafting
              innovative solutions to complex problems. When I'm not coding, you
              can find me surfing, fishing, or enjoying quality
              time with my wife and kids. Balancing my love for technology with
              my hobbies and family life keeps me grounded and inspired.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
