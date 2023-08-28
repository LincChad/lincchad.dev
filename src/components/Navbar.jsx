import {useState} from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Logo from "../assets/lc_logo.png";

const Navbar = () => {

const [nav, setNav] = useState(false);
const handleClick = () => {
  setNav(!nav);
}

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "80px" }} />
      </div>
      {/* menu */}
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      {/* hamburger menu */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes/>}
      </div>
      {/* mobile menu */}
        <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-[60%] h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
        <img src={Logo} alt="Logo" style={{ width: "200px", paddingBottom: "2rem"}} />
          <li className="py-6 text-4xl ">Home</li>
          <li className="py-6 text-4xl ">About</li>
          <li className="py-6 text-4xl ">Skills</li>
          <li className="py-6 text-4xl ">Contact</li>
        </ul>



      {/* social icons */}
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a className="flex justify-between items-center w-full text-gray-300" href="/">
              GitHub <FaGithub size={30}/>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a className="flex justify-between items-center w-full text-gray-300" href="/">
              LinkedIn <FaLinkedin size={30}/>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a className="flex justify-between items-center w-full text-gray-300" href="/">
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
