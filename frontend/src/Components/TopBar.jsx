import React from "react";
import { styled } from "styled-components";
import { AiFillApple } from "react-icons/ai";
import { FaBatteryFull } from "react-icons/fa6";
import { BiSearchAlt, BiSolidUser, BiWifi2 } from "react-icons/bi";
import { HiBell } from "react-icons/hi2";
import Logo from "../Images/leftylogo.png";
import { Link } from "react-router-dom";
import UserModal from "./UserModal";

const TopBar = () => {
  return (
    <TopBarStyle>
      <div className="glass w-screen flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2 lg:gap-4">
          <Link to="/" className="bg-[#c1c1aa] border-black border-2 rounded-full shadow-[2px_2px_#000000] active:shadow-[1px_1px_#000000] active:translate-x-[2px] active:translate-y-[2px]">
            {/* <AiFillApple className="text-xl" /> */}
            <img src={Logo} className="md:h-[1.5rem] lg:h-[2rem] " alt="" />
          </Link>
          <Link to="/" className="font-bold  lg:text-lg"> Leftyharsh</Link>
        </div>

        <div>
          <ul className="flex gap-2 lg:gap-4 font-medium">
            <Link to="/">
              {" "}
              <li className="px-2 lg:py-1 border-black border-2 shadow-[3px_3px_#000000] rounded-lg active:shadow-[1px_1px_#000000] active:translate-x-[2px] active:translate-y-[2px] hover:bg-violet-800 hover:text-white "> Home </li>{" "}
            </Link>
            {/* <Link to="/about">
              {" "}
              <li className="px-2 py-1 border-black border-2 shadow-[3px_3px_#000000] rounded-lg active:shadow-[1px_1px_#000000] active:translate-x-[2px] active:translate-y-[2px] hover:bg-violet-800 hover:text-white"> About </li>{" "}
            </Link> */}
            <Link to="/skills">
              {" "}
              <li className="px-2 lg:py-1 border-black border-2 shadow-[3px_3px_#000000] rounded-lg active:shadow-[1px_1px_#000000] active:translate-x-[2px] active:translate-y-[2px] hover:bg-violet-800 hover:text-white"> Skills </li>{" "}
            </Link>
            <Link to="/projects">
              {" "}
              <li className="px-2 lg:py-1 border-black border-2 shadow-[3px_3px_#000000] rounded-lg active:shadow-[1px_1px_#000000] active:translate-x-[2px] active:translate-y-[2px] hover:bg-violet-800 hover:text-white"> Projects </li>{" "}
            </Link>
            <Link to="/blogs">
              {" "}
              <li className="px-2 lg:py-1 border-black border-2 shadow-[3px_3px_#000000] rounded-lg active:shadow-[1px_1px_#000000] active:translate-x-[2px] active:translate-y-[2px] hover:bg-violet-800 hover:text-white"> Blogs </li>{" "}
            </Link>
            <Link to="/contact">
              {" "}
              <li className="px-2 lg:py-1 border-black border-2 shadow-[3px_3px_#000000] rounded-lg active:shadow-[1px_1px_#000000] active:translate-x-[2px] active:translate-y-[2px] hover:bg-violet-800 hover:text-white"> Contact Us </li>{" "}
            </Link>
          </ul>
        </div>

        <div className="flex gap-2 lg:gap-4 items-center text-lg">
          <UserModal/>
          <div>
            <FaBatteryFull className="" />
          </div>
          <div>
            <BiWifi2 className="" />
          </div>

          <div>
            <HiBell className="" />
          </div>
          {/* <div className="font-medium">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div> */}
          <div className="font-bold">
            {new Date().toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </div>
        </div>
      </div>
    </TopBarStyle>
  );
};

const TopBarStyle = styled.div`
  .glass {
    background: rgba(255, 255, 255, 0.75);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.1px);
    -webkit-backdrop-filter: blur(8.1px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

export default TopBar;
