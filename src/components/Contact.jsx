import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form method="POST" action="https://getform.io/f/fdb7e546-c73f-4976-9805-bb32bba7fb67" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 my-8">Submit the form or shoot me an email</p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="bg-[#ccd6f6] my-4 p-2"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          type="text"
          rows="10"
          placeholder="Message"
          name="message"
        ></textarea>
        <input className="display:none !important" type="hidden" name="_gotcha"></input>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mx-auto flex items-center my-8">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
