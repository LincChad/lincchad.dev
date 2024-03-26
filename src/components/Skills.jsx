import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import Next from "../assets/next.png";
import TypeScript from "../assets/typescript.png";
import Shadcn from "../assets/shadcn.png";
import Supabase from "../assets/supabase.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300 mb-4">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4 ">
            This is the tech I have experience working with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040`] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040`] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040`] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind" />
            <p className="my-4">TailwindCSS</p>
          </div>
          <div className="shadow-md shadow-[#040`] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Shadcn} alt="Shadcn-ui" />
            <p className="my-4">Shadcn-ui</p>
          </div>
          <div className="shadow-md shadow-[#040`] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript" />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040`] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={TypeScript} alt="TypeScript" />
            <p className="my-4">Typescript</p>
          </div>
          
          <div className="shadow-md shadow-[#040`] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React.js" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040`] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Next} alt="Next.js" />
            <p className="my-4">Next</p>
          </div>
          <div className="shadow-md shadow-[#040`] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="Node" />
            <p className="my-4">Node.js</p>
          </div>
          <div className="shadow-md shadow-[#040`] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="GitHub" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040`] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="Mongo" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040`] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Supabase} alt="Supabase" />
            <p className="my-4">Supabase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
