import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen">
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
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Lincoln. Please take a look around</p>
          </div>
          <div>
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
