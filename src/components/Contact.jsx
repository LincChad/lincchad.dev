import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full"
    >
      <div className=" flex flex-col justify-center items-center p-4">
        <form
          method="POST"
          action="https://getform.io/f/fdb7e546-c73f-4976-9805-bb32bba7fb67"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8 pt-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 my-8">
              Submit the form and I will be in touch
            </p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="bg-[#ccd6f6] my-4 p-2"
            type="text"
            placeholder="Email"
            name="email"
            required
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            type="text"
            rows="8"
            placeholder="Message"
            name="message"
            required
          ></textarea>
          <input
            className="display:none !important"
            type="hidden"
            name="_gotcha"
          ></input>
          <button className="text-white bg-black border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mx-auto flex items-center my-8">
            Send
          </button>
        </form>
        <div className="flex flex-row justify-between-items-center px-2 py-6">
          <a
            className="flex justify-between items-center w-full text-gray-300 text-bold px-6"
            href="https://github.com/LincChad"
          >
            GitHub{" "}
            <span className="px-2">
              <FaGithub size={30} />
            </span>
          </a>
          <a
            className="flex justify-between items-center w-full text-gray-300 text-bold px-6"
            href="https://www.linkedin.com/in/lincoln-chadburn-79115a201"
          >
            LinkedIn{" "}
            <span className="px-2">
              <FaLinkedin size={30} />
            </span>
          </a>
          <a
            name="email"
            className="flex justify-between items-center w-full text-gray-300 text-bold px-6"
            
            href="mailto:lincchad@protonmail.com"
          >
            Email{" "}
            <span className="px-2">
              <HiOutlineMail size={30} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
